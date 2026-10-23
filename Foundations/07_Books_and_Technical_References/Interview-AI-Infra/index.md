# AI Infra 面试基础

[基础总览](../../index.md)

[《秋招面试总结》](https://app.notion.com/p/24e9da1e836d80ac828bc1fed39b3a26)

包括 CUDA 算子与 Tensor 内存管理，不包含 LeetCode 类算法题。

## 按主题复习

| 主题 | 正式笔记 |
| --- | --- |
| 指针、引用、sizeof、虚函数、析构与锁 | [C++ 对象、生命周期与并发](../../06_Computing_Foundations/Programming/CPP/objects-and-lifetime.md) |
| 内存层次、合并访问、bank conflict、Stream 与 Event | [CUDA 内存与同步](../../04_GPU_Compiler_and_Performance/CUDA/memory-and-streams.md) |
| Tensor allocator、切分、合并与异步生命周期 | [GPU 内存池设计](../../04_GPU_Compiler_and_Performance/CUDA/memory-pool.md) |
| RMSNorm、行 Softmax、Online Softmax | [归一化与在线归约](../../04_GPU_Compiler_and_Performance/Ops/normalization-and-softmax.md) |
| Kernel 启动、warp 调度、TMA、Triton lowering、排错 | [GPU 执行与编译](../../04_GPU_Compiler_and_Performance/CUDA/execution-and-compilation.md) |
| FP32、FP16、BF16 与混合精度 | [训练数值格式](../../08_Quantization/floating-point.md) |
| Ring Attention、Ulysses、归一化与通信重叠 | [分布式 Attention 基础](../../03_Distributed_Training_and_MoE/Sequence-Parallelism/distributed-attention.md) |
| Prefill、Decode、Grouped GEMM、Prefix Caching | [推理的计算与访存成本](../../02_Inference_and_KV_Cache/inference-costs.md) |

## 常见误解

| 误解 | 正确理解 |
| --- | --- |
| 用 `sizeof(ptr)` / `sizeof(ref)` 回答 `sizeof(*ptr)` / `sizeof(&ref)` | 必须按原表达式判断操作数类型，见 C++ 笔记 |
| 非虚析构只会内存泄漏 | 常规情况下经非虚析构基类指针删除派生对象属于未定义行为 |
| RMSNorm 用一次 shuffle 向整个 block 广播 | shuffle 只在 warp 内交换；第二级归约还存在参与 mask 与写竞争问题 |
| 内存池扩容后递归 `alloc` | 持有非递归互斥锁时再次加锁会死锁；GPU 释放还需要处理 stream 生命周期 |
| Online Softmax 示例已实现 | 原代码省略了 sum 归约、统计更新和输出写回，是未完成草稿 |
| Ulysses = All-Gather KV + Reduce-Scatter 输出 | Ulysses 用两次 All-to-All 转换 sequence/head 分片；原方案还混淆了 token 与 head 对应关系 |
| Jagged Sequence 等同任意 custom mask | 变长 batch、causal 对齐、任意稀疏 mask 是不同接口能力 |
| Warp 有 Active / Eligible / Stalled / Done 四个互斥状态 | NCU 的 Active 包含 Eligible，不能当作四态状态机 |

## 相关主题

- FractalTensor 如何表示 BigBird、IR 如何映射到底层 codegen：衔接 [FractalTensor 原有笔记](../../../Projects/04_GPU_Compiler_and_Performance/FractalTensor/note.md)。
- TileFusion 与 Triton / TK / CUTLASS / TileLang 的定位、跨架构同步：先从 [GPU 执行与编译](../../04_GPU_Compiler_and_Performance/CUDA/execution-and-compilation.md) 复习通用层次。
- DeepEP 为什么分离计算与通信、是否应该融合：衔接 [DeepEP 重叠摘记](../../../Projects/03_Distributed_Training_and_MoE/DeepEP/overview.md) 与 [NVSHMEM Buffer 学习](../../../Projects/03_Distributed_Training_and_MoE/DeepEP/zhihu-reading.md)。具体取舍需要工作负载、通信路径与版本证据，不能仅凭题目归因。
- FlashAttention 推导、MHA、CUDA Histogram：已有 [FlashAttention](../../01_Attention/FlashAttention.md)、[Transformer](../../05_Model_Architecture_and_Reasoning/Transformer.md) 可复习。
