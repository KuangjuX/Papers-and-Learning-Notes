# GPU 编译与性能 · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/04_GPU_Compiler_and_Performance/index.md)

GPU 编程、张量编译器、Megakernel、性能优化与相关项目。

共 64 个清单条目；已读 29，待读 35。保留原有跨分类重复条目与阅读状态。

- [已下载 PDF 与标签目录](../downloaded-papers.md#topic-04)

## 本地笔记

- [HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis](Compiler/HIDA/hida.md)
- [编译器](Compiler/index.md)
- [MLIR: Scaling Compiler Infrastructure for Domain Specifific Computation](Compiler/Papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md)
- [The Deep Learning Compiler: A Comprehensive Survey](Compiler/Papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md)
- [TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code](Compiler/TIRAMISU-CGO/tiramisu.md)
- [Categorical Foundations for CuTe Layouts：中文全文译文与原图](CuTe-Layouts/Layout.md)
- [Event Tensor：用“事件张量”编译动态 Megakernel](Event-Tensor/event-tensor.md)
- [CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution](Kernel-Generation/CAKE.md)
- [AVO: Agentic Variation Operators for Autonomous Evolutionary Search](Kernel-Generation/avo.md)

## Deep Learning Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-bzhnqksp"></a>**The Deep Learning Compiler: A Comprehensive Survey** | [TPDS'21](https://arxiv.org/abs/2002.03794) | 梳理多层 IR、图优化与后端调度，建立深度学习编译器的整体知识框架 | [Paper](https://arxiv.org/pdf/2002.03794.pdf) / [Note](Compiler/Papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md) / [归档标签](../downloaded-papers.md#pdf-bzhnqksp) |
| ✅ | **MLIR: Scaling Compiler Infrastructure for Domain Specific Computation** | [CGO'21](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308) | 通过可扩展 dialect 与逐层 lowering 复用编译基础设施，理解现代 AI 编译器架构 | [Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308) / [Note](Compiler/Papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md) |
| ✅ | <a id="pdf-fspxsd3e"></a>**TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code** | [CGO'19](https://arxiv.org/abs/1804.10694) | 分离算法、循环变换、数据布局和通信，理解多面体调度与跨硬件代码生成 | [Paper](https://arxiv.org/abs/1804.10694) / [Note](Compiler/TIRAMISU-CGO/tiramisu.md) / [归档标签](../downloaded-papers.md#pdf-fspxsd3e) |
| ✅ | <a id="pdf-iudcdq55"></a>**Rammer: Enabling Holistic Deep Learning Compiler Optimizations with rTasks** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/ma) | 用 rTask 统一算子内外并行性，在编译期生成静态时空调度以减少运行时开销 | [Paper](https://www.usenix.org/system/files/osdi20-ma.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/22) / [归档标签](../downloaded-papers.md#pdf-iudcdq55) |
| ✅ | <a id="pdf-qt9999j2"></a>**ROLLER: Fast and Efficient Tensor Compilation for Deep Learning** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/zhu) | 用硬件感知 rTile 和性能模型构造候选 kernel，缩短传统大规模自动调优时间 | [Paper](https://www.usenix.org/system/files/osdi22-zhu.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/24) / [归档标签](../downloaded-papers.md#pdf-qt9999j2) |
| ✅ | <a id="pdf-442yd3j8"></a>**BOLT: Bridging The Gap Between Auto-Tuners and Hardware-Native Performance** | [MLSys'22](https://proceedings.mlsys.org/paper_files/paper/2022/hash/1f8053a67ec8e0b57455713cefdd8218-Abstract.html) | 利用 CUTLASS 等硬件原生模板进行搜索，连接自动调优的灵活性与库级性能 | [Paper](http://yibozhu.com/doc/bolt-mlsys22.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/28) / [归档标签](../downloaded-papers.md#pdf-442yd3j8) |
| ✅ | <a id="pdf-lggjf8m7"></a>**AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures** | [ASPLOS'22](https://dl.acm.org/doi/10.1145/3503222.3507723) | 联合探索线程映射、片上复用与算子融合，优化访存密集型训练和推理算子 | [Paper](https://dl.acm.org/doi/10.1145/3503222.3507723) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/26) / [归档标签](../downloaded-papers.md#pdf-lggjf8m7) |
| ✅ | <a id="pdf-3mkpy6ya"></a>**AMOS: Enabling Automatic Mapping for Tensor Computations On Spatial Accelerators with Hardware Abstraction** | [ISCA'22](https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf) | 将硬件 intrinsic 抽象成可分析的计算与访存语义，自动生成张量到加速器的映射 | [Paper](https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/31) / [归档标签](../downloaded-papers.md#pdf-3mkpy6ya) |
| ✅ | <a id="pdf-d8ryqp7s"></a>**Welder: Scheduling Deep Learning Memory Access via Tile-graph** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/shi) | 用 tile-graph 与数据流量模型统一算子内外数据复用，降低端到端访存开销 | [Paper](https://www.usenix.org/system/files/osdi23-shi.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/25) / [归档标签](../downloaded-papers.md#pdf-d8ryqp7s) |
| ✅ | <a id="pdf-qsbafgrs"></a>**Effectively Scheduling Computational Graphs of Deep Neural Networks toward Their Domain-Specific Accelerators** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/zhao) | 将硬件资源纳入子图划分和跨层指令调度，减少片外数据搬运并提高加速器利用率 | [Paper](https://www.usenix.org/conference/osdi23/presentation/zhao) / [归档标签](../downloaded-papers.md#pdf-qsbafgrs) |
| ✅ | <a id="pdf-y85sa3rg"></a>**Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/zhang-chen) | 以 uTask 统一控制流和数据流，把动态分支与循环下沉到加速器以减少 CPU 同步 | [Paper](https://www.usenix.org/system/files/osdi23-zhang-chen.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/21) / [归档标签](../downloaded-papers.md#pdf-y85sa3rg) |
| ✅ | <a id="pdf-ku4qf7dt"></a>**Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion** | [HPCA'23](https://light-of-hers.github.io/assets/Chimera.pdf) | 用分析模型选择计算块执行顺序，并结合硬件微内核优化计算密集型算子链融合 | [Paper](https://light-of-hers.github.io/assets/Chimera.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/30) / [归档标签](../downloaded-papers.md#pdf-ku4qf7dt) |
| ✅ | <a id="pdf-ddhsem5z"></a>**Graphene: An IR for Optimized Tensor Computations on GPUs** | [ASPLOS'23](https://mgarland.org/papers/2023/graphene/) | 将数据和线程都表示为可分块张量，显式表达 GPU tensor 指令要求的复杂映射 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3582016.3582018) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/27) / [归档标签](../downloaded-papers.md#pdf-ddhsem5z) |
| ✅ | **Uncovering Nested Data Parallelism and Data Reuse in DNN Computation with FractalTensor** | [SOSP'24](https://dl.acm.org/doi/10.1145/3694715.3695961) | 通过嵌套张量与数组算子表达跨循环、跨算子的并行性和复用，突破平面计算图限制 | [Paper](https://dl.acm.org/doi/10.1145/3694715.3695961) |
| ✅ | <a id="pdf-zfws5neu"></a>**ThunderKittens: Simple, Fast, and Adorable AI Kernels** | [ICLR'25](https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html) | 以 tile 数据结构、异步流水线模板和网格调度简化高性能 GPU kernel 编写 | [Paper](https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html) / [归档标签](../downloaded-papers.md#pdf-zfws5neu) |
| ✅ | <a id="pdf-a2sdd4xx"></a>**Mirage: A Multi-Level Superoptimizer for Tensor Programs** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/wu-mengdi) | 用多层 µGraph 搜索代数和调度变换，并验证等价性，探索超越既有算子库的融合 | [Paper](https://www.usenix.org/system/files/osdi25-wu-mengdi.pdf) / [归档标签](../downloaded-papers.md#pdf-a2sdd4xx) |
| ✅ | **PipeThreader: Software-Defined Pipelining for Efficient DNN Execution** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/cheng) | 用 sTask-graph 和软件定义流水线协调 GPU 专用单元，自动发现计算与数据搬运的重叠方案 | [Paper](https://www.usenix.org/system/files/osdi25-cheng.pdf) |
| ✅ | <a id="pdf-xud9jbj4"></a>**TileLang: A Composable Tiled Programming Model for AI Systems** | [arXiv'25](https://arxiv.org/abs/2504.17577) | 将 tile 数据流与布局、线程映射和流水线调度解耦，降低高性能 AI kernel 编程负担 | [Paper](https://arxiv.org/pdf/2504.17577) / [归档标签](../downloaded-papers.md#pdf-xud9jbj4) |
| ✅ | <a id="pdf-hx7i8979"></a>**Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References** | [CGO'26](https://arxiv.org/abs/2510.14719) | 以异步引用表达依赖并自动生成 warp specialization，减少手工管理并发和同步的负担 | [Paper](https://arxiv.org/pdf/2510.14719) / [归档标签](../downloaded-papers.md#pdf-hx7i8979) |
| ✅ | <a id="pdf-k8hmzhbp"></a>**KPerfIR: Towards an Open and Compiler-centric Ecosystem for GPU Kernel Performance Tooling on Modern AI Workloads** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/guan) | 将性能测量实现为编译器 pass，观察 GPU kernel 内部的细粒度执行与重叠瓶颈 | [Paper](https://www.usenix.org/system/files/osdi25-guan.pdf) / [归档标签](../downloaded-papers.md#pdf-k8hmzhbp) |
| ⬜ | **Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/soi) | 将软件流水线和 warp specialization 联合建模为约束优化，推导模型假设下的最优调度 | [Paper](https://www.usenix.org/conference/osdi26/presentation/soi) |
| ⬜ | **GraCE: Unlocking CUDA Graphs with Compiler Support for ML Workloads** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/ghosh) | 自动变换程序并分析成本收益，扩大 CUDA Graph 覆盖率并减少参数拷贝和启动开销 | [Paper](https://www.usenix.org/conference/osdi26/presentation/ghosh) |
| ⬜ | <a id="pdf-qbqw7v9r"></a>**AffineGraph: A Dataflow Graph Representation for Effective DNN Hardware-Aware Algorithms** | 来源待补全 | 标签：GPU 编译与性能优化 | [PDF](zotero://open-pdf/library/items/L9PBDJL3) / [Zotero](zotero://select/library/items/QBQW7V9R) / [归档标签](../downloaded-papers.md#pdf-qbqw7v9r) |
| ⬜ | <a id="pdf-rgznhh6b"></a>**Ansor: Generating High-Performance Tensor Programs for Deep Learning** | 来源待补全 | 标签：GPU 编译与性能优化 / 编译器架构与调度 | [PDF](zotero://open-pdf/library/items/A4GT2NTU) / [Zotero](zotero://select/library/items/RGZNHH6B) / [归档标签](../downloaded-papers.md#pdf-rgznhh6b) |
| ⬜ | <a id="pdf-cuzav7by"></a>**Graphiler: A Compiler for Graph Neural Networks** | 来源待补全 | 标签：GPU 编译与性能优化 / 编译器架构与调度 | [PDF](zotero://open-pdf/library/items/IYTUH2XV) / [Zotero](zotero://select/library/items/CUZAV7BY) / [归档标签](../downloaded-papers.md#pdf-cuzav7by) |
| ⬜ | <a id="pdf-dustz3lm"></a>**The tensor algebra compiler** | Proceedings of the ACM on Programming Languages · 2017 | 标签：GPU 编译与性能优化 / 编译器架构与调度 | [Paper](https://dl.acm.org/doi/10.1145/3133901) / [PDF](zotero://open-pdf/library/items/ZVZ6LMVF) / [Zotero](zotero://select/library/items/DUSTZ3LM) / [归档标签](../downloaded-papers.md#pdf-dustz3lm) |

## LLM Inference / MegaKernel

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B** | [Blog'25](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles) | 以 Llama-1B 实例解释 megakernel 如何消除 kernel 边界气泡，并管理细粒度同步和共享内存 | [Paper](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles) |
| ✅ | <a id="pdf-ys4nklly"></a>**MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/cheng) | 将多 GPU 推理编译成 SM 级任务图，在持久化 kernel 内调度计算与通信以降低端到端延迟 | [Paper](https://www.usenix.org/conference/osdi26/presentation/cheng) / [归档标签](../downloaded-papers.md#pdf-ys4nklly) |
| ✅ 📝 | <a id="pdf-32ktjcln"></a>**Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel** | [MLSys'26](https://arxiv.org/abs/2604.13327) | 以 Event Tensor 统一 tile 任务依赖、动态形状和数据相关控制流，支持动态 megakernel 编译 | [Paper](https://arxiv.org/abs/2604.13327) / [Note](Event-Tensor/event-tensor.md) / [归档标签](../downloaded-papers.md#pdf-32ktjcln) |
| ✅ | **TileRT: Tile-Based Runtime for Ultra-Low-Latency LLM Inference** | [GitHub project'25](https://github.com/tile-ai/TileRT) | 用 tile 级运行时重排并重叠计算、I/O 与跨设备通信，探索大模型低延迟推理的工程路径 | [Paper](https://github.com/tile-ai/TileRT) |
| ✅ | **Compiling LLMs into a MegaKernel: A Path to Low-Latency Inference** | [Blog](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17) | 从编译器和运行时角度解释全模型 megakernel，连接任务依赖、跨算子调度与低延迟推理 | [Paper](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17) |
| ⬜ | **Ada-MK: Adaptive MegaKernel Optimization via Automated DAG-based Search for LLM Inference** | [arXiv'26](https://arxiv.org/abs/2605.11581) | 用离线 DAG 搜索固定 megakernel 执行路径，减少资源受限 GPU 上动态调度和共享内存开销 | [Paper](https://arxiv.org/abs/2605.11581) |
| ⬜ | <a id="pdf-a8tkxuy6"></a>**ClusterFusion: Expanding Operator Fusion Scope for LLM Inference via Cluster-Level Collective Primitive** | arXiv · 2025 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2508.18850) / [PDF](zotero://open-pdf/library/items/B4555BYV) / [Zotero](zotero://select/library/items/A8TKXUY6) / [归档标签](../downloaded-papers.md#pdf-a8tkxuy6) |
| ⬜ | <a id="pdf-9mb4wuba"></a>**mKernel: Fast Multi-GPU, Multi-Node Fused Kernels** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2609.13585) / [PDF](zotero://open-pdf/library/items/B7346TDX) / [Zotero](zotero://select/library/items/9MB4WUBA) / [归档标签](../downloaded-papers.md#pdf-9mb4wuba) |

## LLM for Kernel Optimization

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **AVO: Agentic Variation Operators for Autonomous Evolutionary Search** | [arXiv'26](https://arxiv.org/abs/2603.24517) | 用自主编码 agent 替代固定变异与交叉算子，让进化搜索自适应生成和验证程序候选 | [Paper](https://arxiv.org/abs/2603.24517) / [Note](Kernel-Generation/avo.md) |
| ✅ 📝 | <a id="pdf-ggpeq93n"></a>**CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution** | [arXiv'26](https://arxiv.org/abs/2608.12629) | 让 agent 编写显式硬件调度 IR，并结合验证、成本模型与局部诊断迭代优化 GPU kernel | [Paper](https://arxiv.org/abs/2608.12629) / [Note](Kernel-Generation/CAKE.md) / [归档标签](../downloaded-papers.md#pdf-ggpeq93n) |
| ⬜ | **FlashInfer-Bench: Building the Virtuous Cycle for AI-driven LLM Systems** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html) | 以真实 LLM 工作负载、正确性验证和性能评测连接 AI kernel 生成与系统部署 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html) |
| ⬜ | **Harness Engineering for LLM-Driven GPU Kernel Generation** | [arXiv'26](https://arxiv.org/abs/2607.17979) | 围绕约束、正确性验证、性能分析和候选筛选设计 harness，提高 LLM 生成 GPU kernel 的可靠性 | [Paper](https://arxiv.org/abs/2607.17979) |
| ⬜ | **Agentic Kernel Optimization: Generating State-of-the-Art GPU Kernels Without Hand-Written CUDA** | [Tech report'26](https://arxiv.org/abs/2608.14560) | 在正确性门控的 FlashInfer-Bench 流程中评估通用代码 agent 自动优化 MoE 与 DSA kernel 的能力 | [Paper](https://arxiv.org/abs/2608.14560) |
| ⬜ | <a id="pdf-8cwabfp9"></a>**Open-CAKE-IR：跨硬件优化机制复用与编译器协同演进** | 技术报告 · 2026 | 标签：GPU 编译与性能优化 | [PDF](zotero://open-pdf/library/items/WWGR9WGJ) / [Zotero](zotero://select/library/items/8CWABFP9) / [归档标签](../downloaded-papers.md#pdf-8cwabfp9) |

## GPU Microarchitecture

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Understanding Latency Hiding on GPUs** | [PhD thesis'16](https://escholarship.org/uc/item/1wb7f3h4) | 用简化微基准与性能模型解释 GPU 延迟隐藏，分析线程数、算术强度和吞吐的关系 | [Paper](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-143.pdf) |

## Math Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Categorical Foundations for CuTe Layouts** | [arXiv'26](https://arxiv.org/abs/2601.05972) | 用范畴与布局代数形式化 CuTe 的组合、乘积和除法，并验证其与实现一致 | [Paper](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/) / [中文全文](CuTe-Layouts/Layout.md) / [2025-09 PDF](CuTe-Layouts/source.pdf) / [Zotero](zotero://select/library/items/Q3PT5C24) |

## Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-4uvspptv"></a>**HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis** | [ASPLOS'24](https://arxiv.org/abs/2311.03379) | 用分层数据流表示与多级优化自动生成 FPGA 数据流架构，减少手工 HLS 调优 | [Paper](https://arxiv.org/abs/2311.03379) / [Note](Compiler/HIDA/hida.md) / [归档标签](../downloaded-papers.md#pdf-4uvspptv) |

## GPU 编译与性能优化 / Kernel Fusion

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-fq6vyvp7"></a>**CODA: Rewriting Transformer Blocks as GEMM-Epilogue Programs** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2605.19269) / [PDF](zotero://open-pdf/library/items/ZEPXG6YF) / [Zotero](zotero://select/library/items/FQ6VYVP7) / [归档标签](../downloaded-papers.md#pdf-fq6vyvp7) |
| ⬜ | <a id="pdf-l7udh9yc"></a>**Automatic Horizontal Fusion for GPU Kernels** | 2022 IEEE/ACM International Symposium on Code Generation and Optimization (CGO) · 2022 | 标签：GPU 编译与性能优化 / Kernel Fusion | [Paper](https://ieeexplore.ieee.org/document/9741270/) / [PDF](zotero://open-pdf/library/items/DBCSL5U7) / [Zotero](zotero://select/library/items/L7UDH9YC) / [归档标签](../downloaded-papers.md#pdf-l7udh9yc) |

## GPU 编译与性能优化 / GPU 运行时与性能工具

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-vdc3bvfn"></a>**TileSight: A First-Principles Tile-Centric Analytical GPU Performance Model from Cores to Clusters** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2607.22432) / [PDF](zotero://open-pdf/library/items/RZDVW9MX) / [Zotero](zotero://select/library/items/VDC3BVFN) / [归档标签](../downloaded-papers.md#pdf-vdc3bvfn) |
| ⬜ | <a id="pdf-rczkv7b3"></a>**X-Stage: Modeling Post-Issue Backpressure in GPU Communication--Computation Fusion** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2607.23264) / [PDF](zotero://open-pdf/library/items/H5JS78CN) / [Zotero](zotero://select/library/items/RCZKV7B3) / [归档标签](../downloaded-papers.md#pdf-rczkv7b3) |

## GPU 编译与性能优化 / GPU 算子

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-nbpphe8k"></a>**FlashFFTConv: Efficient Convolutions for Long Sequences with Tensor Cores** | arXiv · 2023 | 标签：GPU 编译与性能优化 / GPU 算子 | [Paper](http://arxiv.org/abs/2311.05908) / [PDF](zotero://open-pdf/library/items/QDPRZPX2) / [Zotero](zotero://select/library/items/NBPPHE8K) / [归档标签](../downloaded-papers.md#pdf-nbpphe8k) |

## GPU 编译与性能优化 / GPU 编程语言与 DSL

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-pcx9kbe8"></a>**Slapo: A Schedule Language for Progressive Optimization of Large Deep Learning Model Training** | arXiv · 2023 | 标签：GPU 编译与性能优化 / GPU 编程语言与 DSL | [Paper](http://arxiv.org/abs/2302.08005) / [PDF](zotero://open-pdf/library/items/3DBN55V2) / [Zotero](zotero://select/library/items/PCX9KBE8) / [归档标签](../downloaded-papers.md#pdf-pcx9kbe8) |
| ⬜ | <a id="pdf-daasnkmz"></a>**Task-Based Tensor Computations on Modern GPUs** | arXiv · 2025 | 标签：GPU 编译与性能优化 / GPU 编程语言与 DSL | [Paper](http://arxiv.org/abs/2504.07004) / [PDF](zotero://open-pdf/library/items/RAQT8GSR) / [Zotero](zotero://select/library/items/DAASNKMZ) / [归档标签](../downloaded-papers.md#pdf-daasnkmz) |
| ⬜ | <a id="pdf-ykm5hmfz"></a>**Tilus: A Virtual Machine for Arbitrary Low-Precision GPGPU Computation in LLM Serving** | arXiv · 2025 | 标签：GPU 编译与性能优化 / GPU 编程语言与 DSL | [Paper](http://arxiv.org/abs/2504.12984) / [PDF](zotero://open-pdf/library/items/ZUCBLEW5) / [Zotero](zotero://select/library/items/YKM5HMFZ) / [归档标签](../downloaded-papers.md#pdf-ykm5hmfz) |

## GPU 编译与性能优化 / IR 与张量化

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-bcntjhsm"></a>**Dual-side Sparse Tensor Core** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / IR 与张量化 | [Paper](https://ieeexplore.ieee.org/document/9499745/) / [PDF](zotero://open-pdf/library/items/LYZ6VBHY) / [Zotero](zotero://select/library/items/BCNTJHSM) / [归档标签](../downloaded-papers.md#pdf-bcntjhsm) |
| ⬜ | <a id="pdf-n352gm8m"></a>**LADDER: Enabling Efficient Low-Precision Deep Learning Computing through Hardware-aware Tensor Transformation** | 来源待补全 | 标签：GPU 编译与性能优化 / IR 与张量化 | [PDF](zotero://open-pdf/library/items/4Z3T48EM) / [Zotero](zotero://select/library/items/N352GM8M) / [归档标签](../downloaded-papers.md#pdf-n352gm8m) |
| ⬜ | <a id="pdf-ant4qwkr"></a>**MLIR-based code generation for GPU tensor cores** | Proceedings of the 31st ACM SIGPLAN International Conference on Compiler Construction · 2022 | 标签：GPU 编译与性能优化 / IR 与张量化 | [Paper](https://dl.acm.org/doi/10.1145/3497776.3517770) / [PDF](zotero://open-pdf/library/items/8L7I4TM7) / [Zotero](zotero://select/library/items/ANT4QWKR) / [归档标签](../downloaded-papers.md#pdf-ant4qwkr) |
| ⬜ | <a id="pdf-5etazt8g"></a>**PIT: Optimization of Dynamic Sparse Deep Learning Models via Permutation Invariant Transformation** | 来源待补全 · 2023 | 标签：GPU 编译与性能优化 / IR 与张量化 | [PDF](zotero://open-pdf/library/items/3PFGF8PF) / [Zotero](zotero://select/library/items/5ETAZT8G) / [归档标签](../downloaded-papers.md#pdf-5etazt8g) |
| ✅ | <a id="pdf-3rmrwj56"></a>**SparseTIR: Composable Abstractions for Sparse Compilation in Deep Learning** | Proceedings of the 28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 3 · 2023 | 标签：GPU 编译与性能优化 / IR 与张量化 | [Paper](https://dl.acm.org/doi/10.1145/3582016.3582047) / [PDF](zotero://open-pdf/library/items/4F4IIX46) / [PDF2](zotero://open-pdf/library/items/8QAZ5LTU) / [PDF3](zotero://open-pdf/library/items/9GGQREBY) / [Zotero](zotero://select/library/items/3RMRWJ56) / [归档标签](../downloaded-papers.md#pdf-3rmrwj56) |

## GPU 编译与性能优化 / 分布式编译

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-j6td7kjm"></a>**DISTAL: the distributed tensor algebra compiler** | Proceedings of the 43rd ACM SIGPLAN International Conference on Programming Language Design and Implementation · 2022 | 标签：GPU 编译与性能优化 / 分布式编译 | [Paper](https://dl.acm.org/doi/10.1145/3519939.3523437) / [PDF](zotero://open-pdf/library/items/AMVNYVPH) / [Zotero](zotero://select/library/items/J6TD7KJM) / [归档标签](../downloaded-papers.md#pdf-j6td7kjm) |

## GPU 编译与性能优化 / 计算图优化

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-arcxwwsf"></a>**DNNFusion: accelerating deep neural networks execution with advanced operator fusion** | Proceedings of the 42nd ACM SIGPLAN International Conference on Programming Language Design and Implementation · 2021 | 标签：GPU 编译与性能优化 / 计算图优化 | [Paper](https://dl.acm.org/doi/10.1145/3453483.3454083) / [PDF](zotero://open-pdf/library/items/6EEYF2XM) / [Zotero](zotero://select/library/items/ARCXWWSF) / [归档标签](../downloaded-papers.md#pdf-arcxwwsf) |
| ⬜ | <a id="pdf-qk42tmsb"></a>**EINNET: Optimizing Tensor Programs with Derivation-Based Transformations** | 来源待补全 | 标签：GPU 编译与性能优化 / 计算图优化 | [PDF](zotero://open-pdf/library/items/C8455AUK) / [Zotero](zotero://select/library/items/QK42TMSB) / [归档标签](../downloaded-papers.md#pdf-qk42tmsb) |
| ⬜ | <a id="pdf-tekz8y2f"></a>**PET: Optimizing Tensor Programs with Partially Equivalent Transformations and Automated Corrections** | 来源待补全 | 标签：GPU 编译与性能优化 / 计算图优化 | [PDF](zotero://open-pdf/library/items/B8UQIZHU) / [Zotero](zotero://select/library/items/TEKZ8Y2F) / [归档标签](../downloaded-papers.md#pdf-tekz8y2f) |
| ⬜ | <a id="pdf-eclineu8"></a>**TASO: optimizing deep learning computation with automatic generation of graph substitutions** | Proceedings of the 27th ACM Symposium on Operating Systems Principles · 2019 | 标签：GPU 编译与性能优化 / 计算图优化 | [Paper](https://dl.acm.org/doi/10.1145/3341301.3359630) / [PDF](zotero://open-pdf/library/items/S64TB9IQ) / [Zotero](zotero://select/library/items/ECLINEU8) / [归档标签](../downloaded-papers.md#pdf-eclineu8) |

## GPU 编译与性能优化 / 软硬件协同设计

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-d7vqpngg"></a>**CoSA: Scheduling by Constrained Optimization for Spatial Accelerators** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / 软硬件协同设计 | [Paper](https://ieeexplore.ieee.org/document/9499855/) / [PDF](zotero://open-pdf/library/items/9B35YJJ3) / [Zotero](zotero://select/library/items/D7VQPNGG) / [归档标签](../downloaded-papers.md#pdf-d7vqpngg) |
| ⬜ | <a id="pdf-byw5msmm"></a>**HASCO: Towards Agile HArdware and Software CO-design for Tensor Computation** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / 软硬件协同设计 | [Paper](https://ieeexplore.ieee.org/document/9499796/) / [PDF](zotero://open-pdf/library/items/CZXLU8MM) / [Zotero](zotero://select/library/items/BYW5MSMM) / [归档标签](../downloaded-papers.md#pdf-byw5msmm) |
| ⬜ | <a id="pdf-mnhpwtau"></a>**SARA: Scaling a Reconfigurable Dataflow Accelerator** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / 软硬件协同设计 | [Paper](https://ieeexplore.ieee.org/document/9499943/) / [PDF](zotero://open-pdf/library/items/U55E5DCP) / [Zotero](zotero://select/library/items/MNHPWTAU) / [归档标签](../downloaded-papers.md#pdf-mnhpwtau) |
