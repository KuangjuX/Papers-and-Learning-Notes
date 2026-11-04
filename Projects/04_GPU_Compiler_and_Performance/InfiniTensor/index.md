# InfiniTensor：从 ONNX 建图到后端执行

ONNX 描述算子及其依赖，运行设备需要的却是具体张量地址与 kernel 调用。InfiniTensor 将这段转换分成三层：前端构图，Graph 维护依赖并规划内存，Runtime 根据算子与设备选择实现。把建图与执行分开，使同一算子语义可以落到 CPU、cuBLAS 或 CNNL，但各后端支持的 dtype、转置、广播和融合选项仍有差异。

这里沿 [`55595364`](https://github.com/InfiniTensor/InfiniTensor/tree/5559536470f81213c8f6460761654383d2cebf7b) 的 ONNX、内存规划和 runtime 路径展开。下方保留旧笔记的 MatMul 核心片段，用于解释各后端的限制与参数适配，不代表项目最新后端集合。

## OnnxStub 建图，run 才执行算子

[`OnnxStub(model, runtime)`](https://github.com/InfiniTensor/InfiniTensor/blob/5559536470f81213c8f6460761654383d2cebf7b/pyinfinitensor/src/pyinfinitensor/onnx.py) 接受 ONNX ModelProto 和目标 Runtime。以 CPU 为例，Python 的 `cpu_runtime()` 对应 `NativeCpuRuntimeObj`，它提供分配、释放与运行接口。

初始化先做 shape inference，创建 GraphHandler，并建立 ONNX 名称到后端 Tensor 的映射。输入、输出和 initializer 各有字典；initializer 的数据另外保存，待分配内存后拷贝。随后按依赖转换节点，例如 `Add` 调用 `handler.add` 建立 Operator 与输入输出关系，并把输出名称映射到新 Tensor。**这里创建的是待执行操作，不是在 Python 转换循环里完成加法。**

节点处理完成后，`data_malloc()` 分配图所需存储，权重等初值按 dtype 拷贝到后端；`run()` 才将图交给 Runtime。这样，形状和依赖错误可在构图时发现，数值计算则由选定设备负责。代价是前端必须为每种 ONNX 算子处理属性、可选输入及广播语义，不能只按名称替换一个 kernel。

## Graph 用依赖关系规划张量生命周期

GraphHandler 封装 Graph 的建图接口；Graph 持有 `runtime`、`tensors`、`ops` 和 `LazyAllocator`。`addOperatorAndConnect` 建立输入输出连接，`topo_sort` 确定合法顺序。拓扑排序是对同一计算图求执行顺序，并不是再创建一种不同的“拓扑图”。

若为每个中间 Tensor 永久保留独立内存，峰值占用会接近所有中间结果之和。[`GraphObj::dataMalloc`](https://github.com/InfiniTensor/InfiniTensor/blob/5559536470f81213c8f6460761654383d2cebf7b/src/core/graph.cc) 因此模拟一次顺序执行，用引用计数决定哪些区域可以复用：

1. 先拓扑排序；weight 单独分配并保留，input/output 保留不复用。普通中间张量用 `tensorToRefCount` 记录消费者数，用 `tensorToOffset` 记录计划偏移。
2. 遍历每个算子，先为输出预留区域，再递减输入的剩余消费者数。计数到零时，把输入区域归还规划器，供后面的输出复用。
3. 最后建立实际内存池，将每个 Tensor 绑定到池基址加其偏移。

例如 `x → A → B → y` 中，执行 B 时 A 仍是输入，所以必须先给 B 分配输出；B 完成消费后，A 的区域才可供更晚的算子复用。这里的 `allocator.free(offset, bytes)` 发生在生命周期模拟中，不是在每次推理时逐张量执行设备 free。

这种规划依赖遍历顺序与消费者关系完整。`checkValid()` 检查 tensor source/targets 和 operator inputs/outputs 是否属于图；它不能单独回答旧 refactor 测试中“省略全局输入或 local_edges 是否会自动补全”的问题，后者还取决于对应 searcher 的构图约定。异步并行执行若改变活跃区间，也不能无条件沿用串行规划。

`useNaiveAllocator` 分支可让张量单独分配，便于排查越界，但源码明确指出它与复用模式行为可能不同，未必复现同一错误。这是调试可观察性与实际布局之间的取舍。

## Runtime 区分默认执行、调优与复用记录

[`CpuRuntimeObj::run`](https://github.com/InfiniTensor/InfiniTensor/blob/5559536470f81213c8f6460761654383d2cebf7b/src/core/runtime.cc) 遍历图中的算子，以 `{device, op_type}` 查 KernelRegistry，再以 kernel 属性和 `op->getOpPerfKey()` 查询 PerfEngine。

| 性能记录 | tune | 行为 |
| --- | --- | --- |
| 无 | false | 调用默认 `compute(op, runtime)` |
| 无 | true | 调用 `tune` 生成并缓存记录，再按记录执行 |
| 有 | 任意 | 使用已有记录执行 |

调优把搜索成本移到首次遇到配置时，后续执行复用参数；是否适用由性能键的定义决定，不能仅凭算子名字复用任意形状的记录。该 CPU 版本拒绝 `!tune && profiling`；开启 profiling 时还统计各算子类型的耗时、次数、占比和均值。`getPerfTime` 则可累加记录中的时间，这与完整模型的端到端墙钟时间不同。

## Kernel

`Kernel` 是一个抽象基类，主要定义了 `compute` 以及 `tune` 方法，分别被继承类实现，对于不同的硬件分别实现了不同的 `Kernel` 类型的算子的实现。接下来分别举例不同的硬件的 kernel 的实现。

### CPU：简单实现也有明确的适用范围

下面的三重循环只处理无 bias、无转置、无激活的 MatMul；assert 就是能力边界。它适合展示 `Operator → 原始指针 → 输出` 的调用契约，不代表 CPU 高性能实现。该版本源码在 dtype 分发外层封装了同样的计算，见 [CPU MatMul](https://github.com/InfiniTensor/InfiniTensor/blob/5559536470f81213c8f6460761654383d2cebf7b/src/kernels/cpu/matmul.cc)。

```cpp
template <typename T> class NaiveMatmul : public CpuKernelWithoutConfig {
    void compute(const Operator &_op,
                 const RuntimeObj *context) const override {
        auto op = as<MatmulObj>(_op);
        IT_ASSERT(op->getInputs().size() == 2, "Bias is not supported yet.");
        T *A = op->getInputs(0)->getRawDataPtr<T *>();
        T *B = op->getInputs(1)->getRawDataPtr<T *>();
        T *C = op->getOutput()->getRawDataPtr<T *>();
        IT_ASSERT(op->getTransA() == false && op->getTransB() == false);
        IT_ASSERT(op->getAct() == ActType::None);
        const int M = op->getM(), N = op->getN(), K = op->getK();
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                C[i * N + j] = 0;
                for (int k = 0; k < K; k++) {
                    C[i * N + j] += A[i * K + k] * B[k * N + j];
                }
            }
        }
    }
};
```


### NVIDIA GPU：把布局和批量语义适配给 cuBLAS

[CUDA MatMul](https://github.com/InfiniTensor/InfiniTensor/blob/5559536470f81213c8f6460761654383d2cebf7b/src/kernels/cuda/matmul.cc) 从性能记录取得算法编号。下方片段的关键是交换 A/B 和 m/n，以适配 cuBLAS 的列主序接口；batch 广播通过输入 stride=0 表示，输出仍有独立 stride。

```cpp
    bool do_compute(const Operator &_op, const PerfRecord &_record,
                    const RuntimeObj *_context) const {
        auto op = as<MatmulObj>(_op);
        auto context = dynamic_cast<const CudaRuntimeObj *>(_context);
        void *const inAData = (op->getInputs(0)->getRawDataPtr<void *>());
        void *const inBData = (op->getInputs(1)->getRawDataPtr<void *>());
        void *const outData = (op->getOutput()->getRawDataPtr<void *>());
        auto record = as<MatmulCublasPerfRecordObj>(_record);

        const auto [b, m, n, k] = op->getBMNK();
        auto opA =
            op->getTransA() ? CUBLAS_OP_T : CUBLAS_OP_N; // BLAS_N = col major
        auto opB = op->getTransB() ? CUBLAS_OP_T : CUBLAS_OP_N;
        const int lda = op->getTransA() ? m : k, ldb = op->getTransB() ? k : n,
                  ldc = n;
        const float alpha = 1.f, beta = 0.f;
        // TODO:use compute type
        cublasStatus_t stat;
        if (b > 1) {
            // Support batch broadcast with zero stride
            int dimA = op->getInputs(0)->getRank();
            int dimB = op->getInputs(1)->getRank();
            long long strideA =
                (dimA == 2 ||
                 (dimA == 3 && op->getInputs(0)->getDims()[0] == 1))
                    ? 0 // Broadcast the batch dimension if batch size is 1
                    : m * k;
            long long strideB =
                (dimB == 2 ||
                 (dimB == 3 && op->getInputs(1)->getDims()[0] == 1))
                    ? 0 // Broadcast the batch dimension if batch size is 1
                    : n * k;
            stat = cublasGemmStridedBatchedEx(
                context->cublasHandle(), opB, opA, n, m, k, &alpha, inBData,
                CUDA_R_32F, ldb, strideB, inAData, CUDA_R_32F, lda, strideA,
                &beta, outData, CUDA_R_32F, ldc, m * n, b, CUDA_R_32F,
                (cublasGemmAlgo_t)record->algo);
        } else {
            stat = cublasGemmEx(
                context->cublasHandle(), opB, opA, n, m, k, &alpha, inBData,
                CUDA_R_32F, ldb, inAData, CUDA_R_32F, lda, &beta, outData,
                CUDA_R_32F, ldc, CUDA_R_32F, (cublasGemmAlgo_t)record->algo);
        }
        // if (stat != CUBLAS_STATUS_SUCCESS)
        //     cout << cublasGetErrorString(stat);
        return (stat == CUBLAS_STATUS_SUCCESS);
    }

```

例如 A 为 `[1,m,k]`、B 为 `[b,k,n]`，令 A 的 stride=0 后，各 batch 复用同一 A，B 按 `n*k` 前进。库调用减少了自写 GEMM 的工作，但转置标志、leading dimension、dtype 和算法记录必须同时匹配；调用成功也不等于该配置最优。

### 寒武纪：算法选择还引入 workspace 生命周期

[CNNL MatMul](https://github.com/InfiniTensor/InfiniTensor/blob/5559536470f81213c8f6460761654383d2cebf7b/src/kernels/bang/matmul.cc) 先构造 Tensor/MatMul descriptor，再通过 heuristic 取得算法及 workspace 大小，向 Runtime 申请 workspace 后执行 `cnnlBatchMatMulBCast_v2`。这一层除了搬运数值参数，还要管理 descriptor 和临时空间；下方片段保留了成功路径的清理调用。

```cpp
    void compute(const Operator &_op,
                 const RuntimeObj *_context) const override {
        auto op = as<MatmulObj>(_op);
        auto context = dynamic_cast<const BangRuntimeObj *>(_context);

        void *const aData = (op->getInputs(0)->getRawDataPtr<void *>());
        void *const bData = (op->getInputs(1)->getRawDataPtr<void *>());
        void *const cData = (op->getOutput()->getRawDataPtr<void *>());

        cnnlTensorDescriptor_t aDesc, bDesc, cDesc;
        auto dimInputs0 = op->getInputs(0)->getDims();
        auto dimInputs1 = op->getInputs(1)->getDims();
        auto dimOutput = op->getOutput()->getDims();

        int32_t transA = op->getTransA();
        int32_t transB = op->getTransB();

        // get inputs
        checkCnnlError(cnnlCreateTensorDescriptor(&aDesc));
        checkCnnlError(
            cnnlSetTensorDescriptor(aDesc, CNNL_LAYOUT_ARRAY, CNNL_DTYPE_FLOAT,
                                    dimInputs0.size(), dimInputs0.data()));

        checkCnnlError(cnnlCreateTensorDescriptor(&bDesc));
        checkCnnlError(
            cnnlSetTensorDescriptor(bDesc, CNNL_LAYOUT_ARRAY, CNNL_DTYPE_FLOAT,
                                    dimInputs1.size(), dimInputs1.data()));

        // get outputs
        checkCnnlError(cnnlCreateTensorDescriptor(&cDesc));
        checkCnnlError(
            cnnlSetTensorDescriptor(cDesc, CNNL_LAYOUT_ARRAY, CNNL_DTYPE_FLOAT,
                                    dimOutput.size(), dimOutput.data()));

        cnnlMatMulDescriptor_t bmm_desc;
        cnnlMatMulDescCreate(&bmm_desc);
        cnnlSetMatMulDescAttr(bmm_desc, CNNL_MATMUL_DESC_TRANSA, &transA,
                              sizeof(int32_t));
        cnnlSetMatMulDescAttr(bmm_desc, CNNL_MATMUL_DESC_TRANSB, &transB,
                              sizeof(int32_t));

        cnnlMatMulAlgo_t bmm_algo;
        cnnlMatMulAlgoCreate(&bmm_algo);

        float alpha = 1.0;
        float beta = 0.0;
        int count = 0;

        cnnlMatMulHeuristicResult_t desc;
        cnnlCreateMatMulHeuristicResult(&desc);

        cnnlGetBatchMatMulAlgoHeuristic(context->cnnlHandle(), bmm_desc, aDesc,
                                        bDesc, cDesc, NULL, 1, &desc, &count);
        size_t wsSize;
        cnnlGetBatchMatMulHeuristicResult(desc, bmm_algo, &wsSize);
        BangPtr wsData = context->getWorkspace(wsSize);

        cnnlStatus_t stat = cnnlBatchMatMulBCast_v2(
            context->cnnlHandle(), bmm_desc, bmm_algo, &alpha, aDesc, aData,
            bDesc, bData, &beta, cDesc, cData, wsData, wsSize);
        if (stat != CNNL_STATUS_SUCCESS)
            return;

        // Destories in BANG does not require sync. But cnnl does not state
        // whether sync is required before destories.
        checkCnnlError(cnnlDestroyTensorDescriptor(aDesc));
        checkCnnlError(cnnlDestroyTensorDescriptor(bDesc));
        checkCnnlError(cnnlDestroyTensorDescriptor(cDesc));
        checkCnnlError(cnnlMatMulDescDestroy(bmm_desc));
        checkCnnlError(cnnlMatMulAlgoDestroy(bmm_algo));
        checkCnnlError(cnnlDestroyMatMulHeuristicResult(desc));
    }
```

这些源码支持后端分派和内存管理机制的解释；没有配套同模型、同精度的测量，不能用调用了哪个厂商库来比较三个后端的性能。
