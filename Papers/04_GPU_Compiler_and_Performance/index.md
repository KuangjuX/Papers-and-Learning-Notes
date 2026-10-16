# GPU 编译与性能 · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/04_GPU_Compiler_and_Performance/index.md)

GPU 编程、张量编译器、Megakernel、性能优化与相关项目。

共 36 个清单条目；已读 28，待读 8。保留原有跨分类重复条目与阅读状态。

## 本地笔记

- [HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis](Compiler/HIDA/hida.md)
- [编译器](Compiler/index.md)
- [MLIR: Scaling Compiler Infrastructure for Domain Specifific Computation](Compiler/Papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md)
- [The Deep Learning Compiler: A Comprehensive Survey](Compiler/Papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md)
- [TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code](Compiler/TIRAMISU-CGO/tiramisu.md)
- [Categorical Foundations for CuTe Layouts](CuTe-Layouts/Layout.md)
- [Event Tensor：用“事件张量”编译动态 Megakernel](Event-Tensor/event-tensor.md)
- [CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution](Kernel-Generation/CAKE.md)
- [AVO: Agentic Variation Operators for Autonomous Evolutionary Search](Kernel-Generation/avo.md)

## Deep Learning Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **The Deep Learning Compiler: A Comprehensive Survey** | [TPDS'21](https://arxiv.org/abs/2002.03794) | 梳理多层 IR、图优化与后端调度，建立深度学习编译器的整体知识框架 | [Paper](https://arxiv.org/pdf/2002.03794.pdf) / [Note](Compiler/Papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md) |
| ✅ | **MLIR: Scaling Compiler Infrastructure for Domain Specific Computation** | [CGO'21](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308) | 通过可扩展 dialect 与逐层 lowering 复用编译基础设施，理解现代 AI 编译器架构 | [Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308) / [Note](Compiler/Papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md) |
| ✅ | **TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code** | [CGO'19](https://arxiv.org/abs/1804.10694) | 分离算法、循环变换、数据布局和通信，理解多面体调度与跨硬件代码生成 | [Paper](https://arxiv.org/abs/1804.10694) / [Note](Compiler/TIRAMISU-CGO/tiramisu.md) |
| ✅ | **Rammer: Enabling Holistic Deep Learning Compiler Optimizations with rTasks** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/ma) | 用 rTask 统一算子内外并行性，在编译期生成静态时空调度以减少运行时开销 | [Paper](https://www.usenix.org/system/files/osdi20-ma.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/22) |
| ✅ | **ROLLER: Fast and Efficient Tensor Compilation for Deep Learning** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/zhu) | 用硬件感知 rTile 和性能模型构造候选 kernel，缩短传统大规模自动调优时间 | [Paper](https://www.usenix.org/system/files/osdi22-zhu.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/24) |
| ✅ | **BOLT: Bridging The Gap Between Auto-Tuners and Hardware-Native Performance** | [MLSys'22](https://proceedings.mlsys.org/paper_files/paper/2022/hash/1f8053a67ec8e0b57455713cefdd8218-Abstract.html) | 利用 CUTLASS 等硬件原生模板进行搜索，连接自动调优的灵活性与库级性能 | [Paper](http://yibozhu.com/doc/bolt-mlsys22.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/28) |
| ✅ | **AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures** | [ASPLOS'22](https://dl.acm.org/doi/10.1145/3503222.3507723) | 联合探索线程映射、片上复用与算子融合，优化访存密集型训练和推理算子 | [Paper](https://dl.acm.org/doi/10.1145/3503222.3507723) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/26) |
| ✅ | **AMOS: Enabling Automatic Mapping for Tensor Computations On Spatial Accelerators with Hardware Abstraction** | [ISCA'22](https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf) | 将硬件 intrinsic 抽象成可分析的计算与访存语义，自动生成张量到加速器的映射 | [Paper](https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/31) |
| ✅ | **Welder: Scheduling Deep Learning Memory Access via Tile-graph** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/shi) | 用 tile-graph 与数据流量模型统一算子内外数据复用，降低端到端访存开销 | [Paper](https://www.usenix.org/system/files/osdi23-shi.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/25) |
| ✅ | **Effectively Scheduling Computational Graphs of Deep Neural Networks toward Their Domain-Specific Accelerators** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/zhao) | 将硬件资源纳入子图划分和跨层指令调度，减少片外数据搬运并提高加速器利用率 | [Paper](https://www.usenix.org/conference/osdi23/presentation/zhao) |
| ✅ | **Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/zhang-chen) | 以 uTask 统一控制流和数据流，把动态分支与循环下沉到加速器以减少 CPU 同步 | [Paper](https://www.usenix.org/system/files/osdi23-zhang-chen.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/21) |
| ✅ | **Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion** | [HPCA'23](https://light-of-hers.github.io/assets/Chimera.pdf) | 用分析模型选择计算块执行顺序，并结合硬件微内核优化计算密集型算子链融合 | [Paper](https://light-of-hers.github.io/assets/Chimera.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/30) |
| ✅ | **Graphene: An IR for Optimized Tensor Computations on GPUs** | [ASPLOS'23](https://mgarland.org/papers/2023/graphene/) | 将数据和线程都表示为可分块张量，显式表达 GPU tensor 指令要求的复杂映射 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3582016.3582018) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/27) |
| ✅ | **Uncovering Nested Data Parallelism and Data Reuse in DNN Computation with FractalTensor** | [SOSP'24](https://dl.acm.org/doi/10.1145/3694715.3695961) | 通过嵌套张量与数组算子表达跨循环、跨算子的并行性和复用，突破平面计算图限制 | [Paper](https://dl.acm.org/doi/10.1145/3694715.3695961) |
| ✅ | **ThunderKittens: Simple, Fast, and Adorable AI Kernels** | [ICLR'25](https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html) | 以 tile 数据结构、异步流水线模板和网格调度简化高性能 GPU kernel 编写 | [Paper](https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html) |
| ✅ | **Mirage: A Multi-Level Superoptimizer for Tensor Programs** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/wu-mengdi) | 用多层 µGraph 搜索代数和调度变换，并验证等价性，探索超越既有算子库的融合 | [Paper](https://www.usenix.org/system/files/osdi25-wu-mengdi.pdf) |
| ✅ | **PipeThreader: Software-Defined Pipelining for Efficient DNN Execution** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/cheng) | 用 sTask-graph 和软件定义流水线协调 GPU 专用单元，自动发现计算与数据搬运的重叠方案 | [Paper](https://www.usenix.org/system/files/osdi25-cheng.pdf) |
| ✅ | **TileLang: A Composable Tiled Programming Model for AI Systems** | [arXiv'25](https://arxiv.org/abs/2504.17577) | 将 tile 数据流与布局、线程映射和流水线调度解耦，降低高性能 AI kernel 编程负担 | [Paper](https://arxiv.org/pdf/2504.17577) |
| ✅ | **Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References** | [CGO'26](https://arxiv.org/abs/2510.14719) | 以异步引用表达依赖并自动生成 warp specialization，减少手工管理并发和同步的负担 | [Paper](https://arxiv.org/pdf/2510.14719) |
| ✅ | **KPerfIR: Towards an Open and Compiler-centric Ecosystem for GPU Kernel Performance Tooling on Modern AI Workloads** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/guan) | 将性能测量实现为编译器 pass，观察 GPU kernel 内部的细粒度执行与重叠瓶颈 | [Paper](https://www.usenix.org/system/files/osdi25-guan.pdf) |
| ⬜ | **Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/soi) | 将软件流水线和 warp specialization 联合建模为约束优化，推导模型假设下的最优调度 | [Paper](https://www.usenix.org/conference/osdi26/presentation/soi) |
| ⬜ | **GraCE: Unlocking CUDA Graphs with Compiler Support for ML Workloads** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/ghosh) | 自动变换程序并分析成本收益，扩大 CUDA Graph 覆盖率并减少参数拷贝和启动开销 | [Paper](https://www.usenix.org/conference/osdi26/presentation/ghosh) |

## LLM Inference / MegaKernel

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B** | [Blog'25](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles) | 以 Llama-1B 实例解释 megakernel 如何消除 kernel 边界气泡，并管理细粒度同步和共享内存 | [Paper](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles) |
| ✅ | **MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/cheng) | 将多 GPU 推理编译成 SM 级任务图，在持久化 kernel 内调度计算与通信以降低端到端延迟 | [Paper](https://www.usenix.org/conference/osdi26/presentation/cheng) |
| ✅ 📝 | **Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel** | [MLSys'26](https://arxiv.org/abs/2604.13327) | 以 Event Tensor 统一 tile 任务依赖、动态形状和数据相关控制流，支持动态 megakernel 编译 | [Paper](https://arxiv.org/abs/2604.13327) / [Note](Event-Tensor/event-tensor.md) |
| ✅ | **TileRT: Tile-Based Runtime for Ultra-Low-Latency LLM Inference** | [GitHub project'25](https://github.com/tile-ai/TileRT) | 用 tile 级运行时重排并重叠计算、I/O 与跨设备通信，探索大模型低延迟推理的工程路径 | [Paper](https://github.com/tile-ai/TileRT) |
| ✅ | **Compiling LLMs into a MegaKernel: A Path to Low-Latency Inference** | [Blog](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17) | 从编译器和运行时角度解释全模型 megakernel，连接任务依赖、跨算子调度与低延迟推理 | [Paper](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17) |
| ⬜ | **Ada-MK: Adaptive MegaKernel Optimization via Automated DAG-based Search for LLM Inference** | [arXiv'26](https://arxiv.org/abs/2605.11581) | 用离线 DAG 搜索固定 megakernel 执行路径，减少资源受限 GPU 上动态调度和共享内存开销 | [Paper](https://arxiv.org/abs/2605.11581) |

## LLM for Kernel Optimization

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **AVO: Agentic Variation Operators for Autonomous Evolutionary Search** | [arXiv'26](https://arxiv.org/abs/2603.24517) | 用自主编码 agent 替代固定变异与交叉算子，让进化搜索自适应生成和验证程序候选 | [Paper](https://arxiv.org/abs/2603.24517) / [Note](Kernel-Generation/avo.md) |
| ✅ 📝 | **CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution** | [arXiv'26](https://arxiv.org/abs/2608.12629) | 让 agent 编写显式硬件调度 IR，并结合验证、成本模型与局部诊断迭代优化 GPU kernel | [Paper](https://arxiv.org/abs/2608.12629) / [Note](Kernel-Generation/CAKE.md) |
| ⬜ | **FlashInfer-Bench: Building the Virtuous Cycle for AI-driven LLM Systems** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html) | 以真实 LLM 工作负载、正确性验证和性能评测连接 AI kernel 生成与系统部署 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html) |
| ⬜ | **Harness Engineering for LLM-Driven GPU Kernel Generation** | [arXiv'26](https://arxiv.org/abs/2607.17979) | 围绕约束、正确性验证、性能分析和候选筛选设计 harness，提高 LLM 生成 GPU kernel 的可靠性 | [Paper](https://arxiv.org/abs/2607.17979) |
| ⬜ | **Agentic Kernel Optimization: Generating State-of-the-Art GPU Kernels Without Hand-Written CUDA** | [Tech report'26](https://arxiv.org/abs/2608.14560) | 在正确性门控的 FlashInfer-Bench 流程中评估通用代码 agent 自动优化 MoE 与 DSA kernel 的能力 | [Paper](https://arxiv.org/abs/2608.14560) |

## GPU Microarchitecture

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Understanding Latency Hiding on GPUs** | [PhD thesis'16](https://escholarship.org/uc/item/1wb7f3h4) | 用简化微基准与性能模型解释 GPU 延迟隐藏，分析线程数、算术强度和吞吐的关系 | [Paper](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-143.pdf) |

## Math Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Categorical Foundations for CuTe Layouts** | [arXiv'26](https://arxiv.org/abs/2601.05972) | 用范畴与布局代数形式化 CuTe 的组合、乘积和除法，并验证其与实现一致 | [Paper](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/) |

## Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis** | [ASPLOS'24](https://arxiv.org/abs/2311.03379) | 用分层数据流表示与多级优化自动生成 FPGA 数据流架构，减少手工 HLS 调优 | [Paper](https://arxiv.org/abs/2311.03379) / [Note](Compiler/HIDA/hida.md) |
