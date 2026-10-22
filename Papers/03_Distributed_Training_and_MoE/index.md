# 分布式训练与 MoE · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/03_Distributed_Training_and_MoE/index.md)

训练系统、并行策略、专家路由、通信计算重叠与训练数值。

共 53 个清单条目；已读 8，待读 45。保留原有跨分类重复条目与阅读状态。

- [已下载 PDF 与标签目录](../downloaded-papers.md#topic-03)

## 本地笔记

- [MegaMoE：把 MoE 前向路径压进一个通信计算融合核](MegaMoE/megamoe.md)
- [PithTrain: A Compact and Agent-Native MoE Training System](PithTrain/pithtrain.md)

## LLM Inference / MegaKernel

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **SonicMoE: Accelerating MoE with IO and Tile-aware Optimizations** | [arXiv'25](https://arxiv.org/pdf/2512.14080) | 减少 MoE 前后向激活缓存和 I/O，并用 token rounding 降低 grouped GEMM 的填充浪费 | [Paper](https://arxiv.org/pdf/2512.14080) |
| ✅ 📝 | **MegaMoE** (fused MoE megakernel, DeepGEMM) | [DeepGEMM PR'26](https://github.com/deepseek-ai/DeepGEMM/pull/304) | 将专家分发、两次线性层、SwiGLU 和合并融合，展示 NVLink 通信与 Tensor Core 计算重叠 | [Source](https://github.com/deepseek-ai/DeepGEMM/pull/304) / [Note](MegaMoE/megamoe.md) |

## LLM Training / Training Numerics & Memory

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour** | [arXiv'17](https://arxiv.org/abs/1706.02677) | global batch、线性学习率缩放与 warmup；理解数据并行扩展为何会改变优化行为 | [Paper](https://arxiv.org/abs/1706.02677) |
| ⬜ | **Mixed Precision Training** | [ICLR'18](https://openreview.net/pdf?id=r1gs9JgRZ) | FP16 计算与 FP32 master weights、loss scaling 配合；连接 Tensor Core 吞吐和收敛稳定性 | [Paper](https://arxiv.org/abs/1710.03740) |
| ⬜ | **Training Deep Nets with Sublinear Memory Cost** | [arXiv'16](https://arxiv.org/abs/1604.06174) | activation checkpointing/rematerialization 的经典计算–显存交换 | [Paper](https://arxiv.org/abs/1604.06174) |
| ⬜ | **Reducing Activation Recomputation in Large Transformer Models** | [MLSys'23](https://proceedings.mlsys.org/paper_files/paper/2023/hash/80083951326cf5b35e5100260d64ed81-Abstract-mlsys2023.html) | sequence parallelism 与 selective recomputation，解释 Megatron 的 activation 内存优化 | [Paper](https://arxiv.org/abs/2205.05198) |
| ⬜ | **GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection** | [ICML'24](https://proceedings.mlr.press/v235/zhao24s.html) | 对梯度做低秩投影以降低 optimizer state 和训练显存 | [Paper](https://arxiv.org/abs/2403.03507) |

## LLM Training / Distributed Training

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **PyTorch Distributed: Experiences on Accelerating Data Parallel Training** | [VLDB'20](https://www.vldb.org/pvldb/vol13/p3005-li.pdf) | 剖析 DDP 梯度分桶、通信计算重叠与同步机制，理解数据并行的实际扩展瓶颈 | [Paper](https://www.vldb.org/pvldb/vol13/p3005-li.pdf) |
| ⬜ | **GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism** | [NeurIPS'19](https://arxiv.org/abs/1811.06965) | 用 microbatch 和重计算搭建同步流水线训练，理解大模型分层切分与 bubble 开销 | [Paper](https://arxiv.org/abs/1811.06965) |
| ⬜ | **PipeDream: Generalized Pipeline Parallelism for DNN Training** | [SOSP'19](https://dl.acm.org/doi/10.1145/3341301.3359646) | 通过流水线调度和权重版本管理提高训练利用率，理解流水线并行中的参数一致性取舍 | [Paper](https://dl.acm.org/doi/10.1145/3341301.3359646) |
| ⬜ | **Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism** | [arXiv'19](https://arxiv.org/abs/1909.08053) | 在 Transformer 内进行张量并行切分，以较少通信支撑多十亿参数语言模型训练 | [Paper](https://arxiv.org/abs/1909.08053) |
| ⬜ | **ZeRO: Memory Optimizations Toward Training Trillion Parameter Models** | [SC'20](https://arxiv.org/abs/1910.02054) | 分片优化器状态、梯度和参数，解释数据并行如何消除显存冗余并扩展模型规模 | [Paper](https://arxiv.org/abs/1910.02054) |
| ⬜ | **ZeRO-Offload: Democratizing Billion-Scale Model Training** | [USENIX ATC'21](https://www.usenix.org/conference/atc21/presentation/ren-jie) | 将优化器计算和状态卸载到 CPU，并与 GPU 训练配合，让有限显存支持更大模型 | [Paper](https://www.usenix.org/conference/atc21/presentation/ren-jie) |
| ⬜ | **Memory-Efficient Pipeline-Parallel DNN Training** | [ICML'21](https://proceedings.mlr.press/v139/narayanan21a.html) | 用 PipeDream-2BW 的双版本权重和流水线调度降低内存需求，兼顾吞吐与训练语义 | [Paper](https://proceedings.mlr.press/v139/narayanan21a.html) |
| ⬜ | **ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning** | [SC'21](https://arxiv.org/abs/2104.07857) | 联合 GPU、CPU 与 NVMe 分层卸载和带宽管理，突破超大模型训练的 GPU 显存容量限制 | [Paper](https://arxiv.org/abs/2104.07857) |
| ⬜ | **Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM** | [SC'21](https://arxiv.org/abs/2104.04473) | 组合张量、流水线与数据并行，并用交错流水线减少大模型训练气泡 | [Paper](https://arxiv.org/abs/2104.04473) |
| ⬜ | **GSPMD: General and Scalable Parallelization for ML Computation Graphs** | [arXiv'21](https://arxiv.org/abs/2105.04663) | 用少量张量分片标注自动传播并行策略，将单设备计算图扩展到多设备 | [Paper](https://arxiv.org/abs/2105.04663) |
| ⬜ | <a id="pdf-5dhgh5an"></a>**Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin) | 分层搜索算子内与算子间并行策略，自动规划分布式训练执行方案 | [Paper](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin) / [归档标签](../downloaded-papers.md#pdf-5dhgh5an) |
| ⬜ | **DeepSpeed Ulysses: System Optimizations for Enabling Training of Extreme Long Sequence Transformer Models** | [arXiv'23](https://arxiv.org/abs/2309.14509) | 通过 all-to-all 转换序列与 attention head 分片，支持极长序列训练 | [Paper](https://arxiv.org/abs/2309.14509) |
| ⬜ | **Ring Attention with Blockwise Transformers for Near-Infinite Context** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/1119587863e78451f080da2a768c4935-Abstract-Conference.html) | 用环形 KV 块传输重叠分块 attention 计算，将长上下文分摊到多设备 | [Paper](https://arxiv.org/abs/2310.01889) |
| ⬜ | **Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates** | [SOSP'23](https://arxiv.org/abs/2309.08125) | 以异构流水线模板和冗余模型状态实现故障后的快速恢复与重配置 | [Paper](https://arxiv.org/abs/2309.08125) |
| ⬜ | <a id="pdf-xn3au5xv"></a>**MegaScale: Scaling Large Language Model Training to More Than 10,000 GPUs** | [NSDI'24](https://www.usenix.org/conference/nsdi24/presentation/jiang-ziheng) | 结合训练算法、通信与故障监控优化，展示万卡规模 LLM 训练的工程瓶颈 | [Paper](https://www.usenix.org/conference/nsdi24/presentation/jiang-ziheng) / [归档标签](../downloaded-papers.md#pdf-xn3au5xv) |
| ⬜ | <a id="pdf-qcnk8s78"></a>**LoongTrain: Efficient Training of Long-Sequence LLMs with Head-Context Parallelism** | [arXiv'24](https://arxiv.org/abs/2406.18485) | 结合 head 与 context 二维并行及双环通信，突破长序列训练的扩展限制 | [Paper](https://arxiv.org/pdf/2406.18485) / [归档标签](../downloaded-papers.md#pdf-qcnk8s78) |
| ✅ 📝 | <a id="pdf-vcw4ly38"></a>**PithTrain: A Compact and Agent-Native MoE Training System** | [arXiv'26](https://arxiv.org/abs/2605.31463) | 以紧凑模块和显式训练结构降低 MoE 系统修改成本，支持编码代理迭代优化 | [Paper](https://arxiv.org/abs/2605.31463) / [Note](PithTrain/pithtrain.md) / [Code Guide](../../Projects/03_Distributed_Training_and_MoE/PithTrain/index.md) / [归档标签](../downloaded-papers.md#pdf-vcw4ly38) |
| ⬜ | <a id="pdf-c5lnh2yd"></a>**Insights into DeepSeek-V3: Scaling Challenges and Reflections on Hardware for AI Architectures** | Proceedings of the 52nd Annual International Symposium on Computer Architecture · 2025 | 标签：分布式训练与 MoE | [Paper](http://arxiv.org/abs/2505.09343) / [PDF](zotero://open-pdf/library/items/XPT4R2PX) / [Zotero](zotero://select/library/items/C5LNH2YD) / [归档标签](../downloaded-papers.md#pdf-c5lnh2yd) |

## LLM Training / Mixture-of-Experts Training

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer** | [ICLR'17](https://research.google/pubs/outrageously-large-neural-networks-the-sparsely-gated-mixture-of-experts-layer/) | 现代稀疏 MoE 的起点：top-k gate、稀疏激活与负载均衡 | [Paper](https://arxiv.org/abs/1701.06538) |
| ⬜ | **GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding** | [ICLR'21](https://research.google/pubs/gshard-scaling-giant-models-with-conditional-computation-and-automatic-sharding/) | 将 MoE、SPMD sharding 和大规模 Transformer 训练结合 | [Paper](https://arxiv.org/abs/2006.16668) |
| ⬜ | **BASE Layers: Simplifying Training of Large, Sparse Models** | [ICML'21](https://proceedings.mlr.press/v139/lewis21a.html) | 用 balanced assignment 避免额外负载均衡损失 | [Paper](https://arxiv.org/abs/2103.16716) |
| ⬜ | **GLaM: Efficient Scaling of Language Models with Mixture-of-Experts** | [ICML'22](https://proceedings.mlr.press/v162/du22c.html) | 大规模稀疏语言模型的质量、计算与能耗权衡 | [Paper](https://arxiv.org/abs/2112.06905) |
| ⬜ | **DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training to Power Next-Generation AI Scale** | [ICML'22](https://proceedings.mlr.press/v162/rajbhandari22a.html) | expert parallel、通信与 MoE inference/training 系统化设计 | [Paper](https://arxiv.org/abs/2201.05596) |
| ⬜ | **FasterMoE: Modeling and Optimizing Training of Large-Scale Dynamic Pre-Trained Models** | [PPoPP'22](https://doi.org/10.1145/3503221.3508418) | 动态路由下的 shadowing 与拓扑感知通信优化 | [Paper](https://doi.org/10.1145/3503221.3508418) |
| ⬜ | **Tutel: Adaptive Mixture-of-Experts at Scale** | [MLSys'23](https://proceedings.mlsys.org/paper_files/paper/2023/hash/5616d34cf8ff73942cfd5aa922842556-Abstract-mlsys2023.html) | 自适应并行、all-to-all 与 kernel 优化的完整 MoE 系统 | [Paper](https://arxiv.org/abs/2206.03382) |
| ⬜ | **MegaBlocks: Efficient Sparse Training with Mixture-of-Experts** | [MLSys'23](https://proceedings.mlsys.org/paper_files/paper/2023/hash/5a54f79333768effe7e8927bcccffe40-Abstract-mlsys2023.html) | 将 token dropping 问题转成 block-sparse GEMM，最贴近算子视角 | [Paper](https://arxiv.org/abs/2211.15841) |
| ⬜ | <a id="pdf-xxvli24b"></a>**FOLDMOE: Efficient Long Sequence MoE Training via Attention-MoE Pipelining** | 来源待补全 | 标签：分布式训练与 MoE | [PDF](zotero://open-pdf/library/items/C4UQSUQ3) / [Zotero](zotero://select/library/items/XXVLI24B) / [归档标签](../downloaded-papers.md#pdf-xxvli24b) |
| ⬜ | <a id="pdf-2ljkaklx"></a>**UniEP: Unified Expert-Parallel MegaKernel MoE for LLM Training** | Proceedings of the 35th International Symposium on High-Performance Parallel and Distributed Computing · 2026 | 标签：分布式训练与 MoE | [Paper](https://dl.acm.org/doi/10.1145/3806645.3807818) / [PDF](zotero://open-pdf/library/items/TWBKWUCN) / [Zotero](zotero://select/library/items/2LJKAKLX) / [归档标签](../downloaded-papers.md#pdf-2ljkaklx) |

## LLM Training / RL Training

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-lv4qk9kg"></a>**Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/qin) | 利用同一 prompt 下响应长度和模式的相似性，减少同步 RL rollout 长尾与资源浪费 | [Paper](https://arxiv.org/pdf/2511.14617) / [归档标签](../downloaded-papers.md#pdf-lv4qk9kg) |
| ⬜ | <a id="pdf-i3m9y4v9"></a>**DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale** | arXiv · 2026 | 标签：分布式训练与 MoE | [Paper](http://arxiv.org/abs/2609.22978) / [PDF](zotero://open-pdf/library/items/XBZEVX2N) / [Zotero](zotero://select/library/items/I3M9Y4V9) / [归档标签](../downloaded-papers.md#pdf-i3m9y4v9) |

## LLM Training / Compute-Communication Overlap

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Flux: Fast Software-based Communication Overlap on GPUs through Kernel Fusion** | [arXiv'24](https://arxiv.org/abs/2406.06858) | 将通信融入 GEMM 内核并按 tile 细粒度重叠，降低张量并行的暴露通信耗时 | [Paper](https://arxiv.org/pdf/2406.06858v1) |
| ✅ | **DeepEP: An Efficient Expert-Parallel Communication Library** | [GitHub'25（开源库）](https://github.com/deepseek-ai/DeepEP) | 提供面向 MoE token dispatch/combine 的高吞吐与低延迟专家并行通信实现 | [Paper](https://github.com/deepseek-ai/DeepEP) |
| ⬜ | **Centauri: Enabling Efficient Scheduling for Communication-Computation Overlap in Large Model Training via Communication Partitioning** | [ASPLOS'24](https://www.asplos-conference.org/asplos2024/main-program/abstracts/) | 通过通信分区和分层调度扩大重叠空间，协调大模型训练中的通信与计算资源 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3620666.3651379) |
| ⬜ | **Comet: Fine-grained Computation-communication Overlapping for Mixture-of-Experts** | [MLSys'25](https://proceedings.mlsys.org/paper_files/paper/2025/hash/e27ea0cd50b798ff8942caf9203f0992-Abstract-Conference.html) | 分析 MoE 数据依赖并重排计算通信任务，实现细粒度重叠以降低专家并行开销 | [Paper](https://arxiv.org/pdf/2502.19811) |
| ⬜ | **TileLink: Generating Efficient Compute-Communication Overlapping Kernels using Tile-Centric Primitives** | [MLSys'25](https://proceedings.mlsys.org/paper_files/paper/2025/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html) | 用 tile 级通信原语和编译调度生成重叠内核，减少分布式算子的手工优化工作 | [Paper](https://arxiv.org/pdf/2503.20313) |
| ⬜ | **Triton-distributed: Programming Overlapping Kernels on Distributed AI Systems with the Triton Compiler** | [arXiv'25](https://arxiv.org/abs/2504.19442) | 将 OpenSHMEM 通信原语引入 Triton，使分布式计算通信重叠可用统一语言表达 | [Paper](https://arxiv.org/pdf/2504.19442) |
| ⬜ | **Efficient and Adaptable Overlapping for Computation and Communication via Signaling and Reordering (FlashOverlap)** | [EuroSys'26](https://arxiv.org/abs/2504.19519) | 通过 tile 就绪信号和数据重排实现细粒度重叠，复用通信库并减少对计算的干扰 | [Paper](https://arxiv.org/pdf/2504.19519) |
| ⬜ | **TokenWeave: Efficient Compute-Communication Overlap for Distributed LLM Inference** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/73ba81c7b25134a559c8a9c39ec1a4c3-Abstract-Conference.html) | 融合 AllReduce 与 RMSNorm，以少量 SM 支持较小 token 批次的推理通信重叠 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/73ba81c7b25134a559c8a9c39ec1a4c3-Abstract-Conference.html) |
| ⬜ | **UEP: Portable Expert-Parallel Communication** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/mao-ziming-uep) | 用 GPU–CPU 控制通道与 CPU 代理发起 RDMA，实现跨 GPU/NIC 的可移植专家通信 | [Paper](https://www.usenix.org/conference/osdi26/presentation/mao-ziming-uep) |

## Deep Learning / Sparse Attention Algorithms & Training / Algorithm and Training Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity** | [JMLR'22](https://www.jmlr.org/papers/volume23/21-0998/21-0998.pdf) | hard Top-1 routing、capacity 与 load-balancing loss；将 Indexer 理解成 memory router | [Paper](https://arxiv.org/abs/2101.03961) |
| ⬜ | **ST-MoE: Designing Stable and Transferable Sparse Expert Models** | [arXiv'22](https://arxiv.org/abs/2202.08906) | Router 稳定性、辅助损失与 router z-loss；理解小型路由器如何影响整个模型训练 | [Paper](https://arxiv.org/abs/2202.08906) |
| ⬜ | **Mixture-of-Experts with Expert Choice Routing** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/hash/2f00ecd787b432c1d36f3de9800728eb-Abstract-Conference.html) | expert 选择 token 而非 token 选择 expert；类比 q2k→k2q reverse index 与 KV-owner 调度 | [Paper](https://arxiv.org/abs/2202.09368) |

## Deep Learning / On-Device / Mobile

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **On-Device Training Under 256KB Memory** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/hash/90c56c77c6df45fc8e556a096b7a2b2e-Abstract-Conference.html) | 通过量化感知梯度缩放、稀疏更新与编译期反向图裁剪，在 256KB 内存下训练模型 | [Paper](https://arxiv.org/pdf/2206.15472.pdf) |
| ✅ | <a id="pdf-fayd7t8v"></a>**PockEngine: Sparse and Efficient Fine-tuning in a Pocket** | [MICRO'23](https://hanlab.mit.edu/projects/pockengine ; https://hanlab.mit.edu/projects/tinyml) | 把稀疏反向传播与完整训练图编译结合，降低边缘设备微调的内存和运行时开销 | [Paper](https://hanlab.mit.edu/projects/pockengine ; https://hanlab.mit.edu/projects/tinyml) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/29) / [归档标签](../downloaded-papers.md#pdf-fayd7t8v) |

## 分布式训练与 MoE / 分布式运行时

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-x54t96iz"></a>**ECO: An AI-Driven Code Efficiency Optimizer for Warehouse Scale Computers (Operational Systems)** | 来源待补全 | 标签：分布式训练与 MoE / 分布式运行时 | [PDF](zotero://open-pdf/library/items/ZZ48FKB2) / [Zotero](zotero://select/library/items/X54T96IZ) / [归档标签](../downloaded-papers.md#pdf-x54t96iz) |
| ⬜ | <a id="pdf-84l6g9l7"></a>**Ray: A Distributed Framework for Emerging AI Applications** | arXiv · 2018 | 标签：分布式训练与 MoE / 分布式运行时 | [Paper](http://arxiv.org/abs/1712.05889) / [PDF](zotero://open-pdf/library/items/JYZPKSY8) / [Zotero](zotero://select/library/items/84L6G9L7) / [归档标签](../downloaded-papers.md#pdf-84l6g9l7) |
