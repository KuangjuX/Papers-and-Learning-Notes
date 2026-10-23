# AI Infra 面试基础：Notion 总结归档

[基础总览](../../index.md) · [外部笔记来源](../../../Papers/external-notes.md)

来源：[KuangjuX 的《秋招面试总结》](https://app.notion.com/p/24e9da1e836d80ac828bc1fed39b3a26)，整理于 2026-10-23。原文按面试日期记录，本文按知识依赖重新组织；日期仅作为原文定位，不据此推断年份。

**来源约定**：题目、已有回答与代码问题来自个人 Notion；各篇标注的“整理补充”“修正”及数值例子由 AI 在本次归档中补充，并给出核对资料。原文只有题目时明确记为待补充，不当作已经完成的个人解答。按用户指定范围，LeetCode 类算法题不纳入本次归档；CUDA 算子与 Tensor 内存管理属于 AI Infra 内容，继续保留。职业经历、面试评价与结果继续留在原 Notion。

## 按主题复习

| 主题 | 正式笔记 | 原文定位 |
| --- | --- | --- |
| 指针、引用、sizeof、虚函数、析构与锁 | [C++ 对象、生命周期与并发](../../06_Computing_Foundations/Programming/CPP/objects-and-lifetime.md) | 8.13 八股；9.9 锁的使用 |
| 内存层次、合并访问、bank conflict、Stream 与 Event | [CUDA 内存与同步](../../04_GPU_Compiler_and_Performance/CUDA/memory-and-streams.md) | 8.13 八股 |
| Tensor allocator、切分、合并与异步生命周期 | [GPU 内存池设计](../../04_GPU_Compiler_and_Performance/CUDA/memory-pool.md) | 8.18 Tensor 内存管理 |
| RMSNorm、行 Softmax、Online Softmax | [归一化与在线归约](../../04_GPU_Compiler_and_Performance/Ops/normalization-and-softmax.md) | 页首 RMSNorm；8.26、8.27、8.28、9.20 Coding |
| Kernel 启动、warp 调度、TMA、Triton lowering、排错 | [GPU 执行与编译](../../04_GPU_Compiler_and_Performance/CUDA/execution-and-compilation.md) | 8.27、9.9、9.18、9.20 技术题 |
| FP32、FP16、BF16 与混合精度 | [训练数值格式](../../03_Distributed_Training_and_MoE/Numerics/floating-point.md) | 8.13、9.9 八股 |
| Ring Attention、Ulysses、归一化与通信重叠 | [分布式 Attention 基础](../../03_Distributed_Training_and_MoE/Sequence-Parallelism/distributed-attention.md) | 8.13 项目；8.27、9.2 技术题 |
| Prefill、Decode、Grouped GEMM、Prefix Caching | [推理的计算与访存成本](../../02_Inference_and_KV_Cache/inference-costs.md) | 9.3、9.16 技术题 |

## 原文中需要特别订正的内容

| 原记录 | 本次整理后的结论 |
| --- | --- |
| 用 `sizeof(ptr)` / `sizeof(ref)` 回答 `sizeof(*ptr)` / `sizeof(&ref)` | 必须按原表达式判断操作数类型，见 C++ 笔记 |
| 非虚析构只会内存泄漏 | 常规情况下经非虚析构基类指针删除派生对象属于未定义行为 |
| RMSNorm 用一次 shuffle 向整个 block 广播 | shuffle 只在 warp 内交换；第二级归约还存在参与 mask 与写竞争问题 |
| 内存池扩容后递归 `alloc` | 持有非递归互斥锁时再次加锁会死锁；GPU 释放还需要处理 stream 生命周期 |
| Online Softmax 示例已实现 | 原代码省略了 sum 归约、统计更新和输出写回，是未完成草稿 |
| Ulysses = All-Gather KV + Reduce-Scatter 输出 | Ulysses 用两次 All-to-All 转换 sequence/head 分片；原方案还混淆了 token 与 head 对应关系 |
| Jagged Sequence 等同任意 custom mask | 变长 batch、causal 对齐、任意稀疏 mask 是不同接口能力 |
| Warp 有 Active / Eligible / Stalled / Done 四个互斥状态 | NCU 的 Active 包含 Eligible，不能当作四态状态机 |

## 题目保留与现有材料衔接

下面的原题没有足够的实现或版本信息，保留为复习入口：

- FractalTensor 如何表示 BigBird、IR 如何映射到底层 codegen：衔接 [FractalTensor 原有笔记](../../../Projects/04_GPU_Compiler_and_Performance/FractalTensor/note.md)。本次没有补写未经源码核对的项目答案。
- TileFusion 与 Triton / TK / CUTLASS / TileLang 的定位、跨架构同步：原文只记录讨论范围；先从 [GPU 执行与编译](../../04_GPU_Compiler_and_Performance/CUDA/execution-and-compilation.md) 复习通用层次。
- DeepEP 为什么分离计算与通信、是否应该融合：衔接 [DeepEP 重叠摘记](../../../Projects/03_Distributed_Training_and_MoE/DeepEP/overview.md) 与 [NVSHMEM Buffer 学习](../../../Projects/03_Distributed_Training_and_MoE/DeepEP/zhihu-reading.md)。具体取舍需要工作负载、通信路径与版本证据，不能仅凭题目归因。
- FlashAttention 推导、MHA、CUDA Histogram：原文只有题目；已有 [FlashAttention](../../01_Attention/FlashAttention.md)、[Transformer](../../05_Model_Architecture_and_Reasoning/Transformer.md) 可复习。Histogram 实现仍待补充。

## 证据范围

Notion 原始内容通过连接器读取，浏览器展开内容交叉核对。原始抓取仅用于本地整理，放在忽略目录 `.local/notion-import/`，不进入公开仓库。正式笔记保留可长期复习的技术内容与原文入口。

CUDA 语义核对本机官方文档快照：Programming Guide 13.3、Runtime API 13.3.1（2026-07-22 抓取）与 Nsight Compute 2026.2.1。Triton 编译阶段与 FlashAttention 接口另核对了官方仓库。数值例子可在 CPU 上验证；本次没有 CUDA GPU 编译、运行或性能测量，不将代码审阅视为 GPU 正确性证明。
