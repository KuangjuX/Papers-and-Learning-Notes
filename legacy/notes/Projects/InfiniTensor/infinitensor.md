# Infinitensor 源码阅读

## Frontend

首先查看 `pyinfinitensor/tests/test_onnx.py` 发现 `test_load()` 函数搜索 `.onnx` 文件并使用 `OnnxStub` 进行转换。`OnnxStub` 是一个 class，接受两个参数：

- Onnx Model

- Backend Runtime

以 CPU 为例，这里的 `cpu_runtime()` 根据 `ffi_infinitensor.cc` 中的定义为 `NativeCpuRuntimeObj::getInstance()`。`NativeCpuRuntimeObj` 是一个 runtime Object，有 `alloc`，`dealloc`, `run` 等方法。最终 onnxstub 返回的对象可用于操作项目中的模型和运行时。

### OnnxStub

1. 类属性和初始化函数：
   
   - `inputs` 和 `outputs`：字典，用于存储模型的输入和输出张量。
   - `initializer`：字典，用于存储模型的初始化器（例如权重和偏置）。
   - `handler`：后端图处理器对象，用于执行操作。
   - `__init__(self, model: ModelProto, runtime)`：构造函数，接受两个参数，一个是 ONNX 模型对象 `model`，另一个是运行时对象 `runtime`。在初始化过程中，将执行 ONNX 模型形状推断并创建图处理器。

2. 初始化过程：
   
   - 在构造函数中，首先对输入、输出和初始化器字典进行初始化，以及创建后端图处理器。
   - 对输入进行迭代，为每个输入创建后端张量对象，并将其添加到 `tensors` 字典中。
   - 对输出进行迭代，为每个输出创建后端张量对象，并将其添加到 `tensors` 字典中。
   - 对初始化器进行迭代，为每个初始化器创建后端张量对象，并将其添加到 `tensors` 字典中。同时，将初始化器数据添加到 `data` 字典中。

3. 对节点的处理：
   
   - 对模型中的每个节点进行处理。
   - 针对不同的操作类型（例如卷积、全连接等），根据节点的属性和输入创建后端张量，并执行相应的操作。操作的结果将保存在 `tensors` 字典中。
   - 以简单的 `Add` 算子为例，调用 `GraphObj` 中的 `add()` 方法对于图中的输入与输出节点进行连接并更新输出节点，同时更新 `tensor` 中的数据。

4. 更新节点列表：
   
   - 在每次节点处理后，将已处理的节点从 `node_list` 中移除，以便下次处理未处理的节点。

5. 数据内存分配：
   
   - 在所有节点处理完成后，调用 `self.handler.data_malloc()` 分配数据内存。

6. 处理张量数据：
   
   - 对于每个张量，将其数据拷贝到后端张量对象中，根据张量数据类型的不同进行相应的拷贝操作。

7. 输出处理：
   
   - 对模型的输出进行迭代，将其添加到 `outputs` 字典中。

## Graph

### GraphHandler

`GraphHandler` 是对 `Graph` 的一层封装。

- `tensor(Shape dims, int dtype)` 方法向图中添加一个 `Tensor` 对象。

### Graph

`Grpah` 有几个成员变量：

- `Runtime runtime`: 记录图的运行时环境。
- `TensorVec tensors`: 一个保存张量（Tensor）的向量容器。
- `OpVec ops`: 一个保存操作（Operator）的向量容器。
- `LazyAllocator allocator`: 惰性内存分配器，用于分配张量数据的内存。

`Graph` 成员函数：

- `addOperatorAndConnect` 函数：用于将操作添加到图中，并处理输入输出张量的连接关系。

- `topo_sort` 函数：对图进行拓扑排序，返回是否排序成功。

- `optimize` 函数：用于图的优化，可以根据操作类型执行不同的优化。

- `dataMalloc()`：模拟图的执行并分配内存： 
1. `topo_sort() == true`：调用 `topo_sort()` 函数执行图的拓扑排序，确保操作按正确的顺序执行。

2. `tensorToRefCount` 和 `tensorToOffset`：两个 unordered_map，用于记录每个张量的引用计数和内存偏移量。

3. `constTensor`：unordered_set，用于记录所有常量张量，包括权重张量和输入张量。常量张量会在此阶段分配内存，不会在后续阶段释放。

4. 分配常量张量的内存：对于没有来源（source）的张量，即常量张量，将其加入 `constTensor`，然后分配内存并记录偏移量。

5. 遍历操作并分配内存：对于每个操作，首先为其输出张量分配内存并记录偏移量。然后，遍历操作的输入张量，如果不是常量张量，减少其引用计数。如果引用计数减少到零，表示该张量不再被使用，执行内存释放。

6. 实际内存分配：遍历所有张量，并根据之前记录的偏移量为每个张量设置数据块。这样，张量对象将引用图内分配的内存块。

7. `allocator.info()`：输出内存分配器的信息，可能用于调试和性能分析。

### Refactor

一些问题：

1. 拓扑图和计算图的区别是什么？

计算图的节点是规定的，要么表示算子，要么表示子图。

1. 在测试用例中，全局的输入节点不完全，是否允许不输入所有全局节点？

2. 在测试用例中，输入的边不完整，在 searcher 的 local_edges 也并没有进行推导？

## Runtime

Runtime 是用于执行推理的 class，在 `GraphHandler` 中有一个 `run()` 方法用于调用 runtime 的推理运行。以 CPU 为例：

- **`CpuRuntimeObj::run`**：这个函数用于在 CPU 运行时环境下执行计算图。它会遍历计算图中的每个操作，并为每个操作选择合适的内核（`Kernel`）来执行。在这里，还涉及了性能引擎（`PerfEngine`）的使用，用于优化内核的选择和性能调优，具体分析如下：
  
  1. **获取相关对象和信息**：
     
     - 获取操作内核注册表（`KernelRegistry`）和性能引擎（`PerfEngine`）的实例。
     - 获取计算图中的所有操作（`Operator`）的引用。
  
  2. **循环遍历操作**：
     对计算图中的每个操作执行以下步骤：
     
     - 获取当前操作的类型、数据类型以及所需的内核属性（`KernelAttrs`）。
     - 创建操作的性能键（`PerfEngine::Key`）用于查询性能引擎中是否有预先记录的性能数据。
     - 如果没有性能数据记录且不需要调优：
       - 获取操作的内核（`Kernel`）。
       - 使用内核执行操作，传递操作和运行时环境作为参数。
     - 如果没有性能数据记录但需要调优：
       - 创建一个空记录对象，用于记录性能数据。
       - 针对操作执行内核的调优，获取性能数据并记录下来。
       - 将性能数据存储到性能引擎中。
     - 如果有性能数据记录：
       - 获取操作的内核。
       - 使用预先记录的性能数据执行操作。
  
  3. **性能记录和统计**：
     
     - 如果开启了性能记录，该操作会记录每个操作的执行时间。
     - 对每种操作类型，计算总执行时间和操作数。
  
  4. **打印性能数据**（可选）：
     
     - 如果开启了性能记录，该操作会打印每个操作的类型、执行次数、总执行时间、百分比和平均执行时间等信息。

## Kernel

`Kernel` 是一个抽象基类，主要定义了 `compute` 以及 `tune` 方法，分别被继承类实现，对于不同的硬件分别实现了不同的 `Kernel` 类型的算子的实现。接下来分别举例不同的硬件的 kernel 的实现。

### CPU

**MatMul:**

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



### Nvidia GPU

**MatMul:**

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

在 Nvidia GPU 的矩阵乘法实现时调用了 CUBLAS 库进行实现。

### 寒武纪

**MatMul:**

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
