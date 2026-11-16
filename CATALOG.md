# 本地笔记目录

论文与基础按知识主题查找，项目按仓库名称及其实现主题查找。[论文清单](Papers/index.md)包含各主题的阅读状态。

## 论文

### Attention

- [HyScale: Scaling Long-Context Training for Learned Sparse Attention](Papers/01_Attention/HyScale/hyscale.md)
- [SparDA: Sparse Decoupled Attention for Efficient Long-Context LLM Inference](Papers/01_Attention/SparDA/sparda.md)
- [DeepSeek-V3.2-Exp: Boosting Long-Context Efficiency with DeepSeek Sparse Attention](Papers/01_Attention/DeepSeek-DSA/deepseek-v3-2-exp.md)
- [IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse](Papers/01_Attention/IndexCache/indexcache.md)
- [MiniMax Sparse Attention](Papers/01_Attention/MiniMax-MSA/minimax-sparse-attention.md)
- [Fast Transformer Decoding: One Write-Head is All You Need](Papers/01_Attention/MQA/fast-transformer-decoding.md)
- [A Survey of Efficient Attention Methods: Hardware-efficient,  Sparse, Compact, and Linear Attention](Papers/01_Attention/Surveys/a-survey-of-efficient-attention-methods.md)
- [Attention Is All You Need](Papers/01_Attention/Transformer/attention-is-all-you-need.md)
- [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](Papers/01_Attention/FlashAttention/flashattention.md)
- [Kimi Linear: An Expressive, Efficient Attention Architecture](Papers/01_Attention/Kimi-Linear/kimi-linear.md)

### 推理与 KV Cache

- [Training-Free Long-Context Scaling of Large Language Models](Papers/02_Inference_and_KV_Cache/Dual-Chunk-Attention/training-free-long-context-scaling-of-large-language-models.md)
- [HiSparse: Scaling Sparse-Attention Decoding with Hierarchical KV Cache Management](Papers/02_Inference_and_KV_Cache/HiSparse/hisparse.md)
- [A Survey of LLM Inference Systems](Papers/02_Inference_and_KV_Cache/Surveys/a-survey-of-llm-inference-systems.md)
- [Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences](Papers/02_Inference_and_KV_Cache/GPU-Preemption/microsecond-scale-preemption-for-concurrent-gpu-accelerated-dnn-inferences.md)

### 分布式训练与 MoE

- [FlashNext-RL: A System Optimization Study for Long-Horizon Agentic RL of Qwen3.8-Flash-Next](Papers/03_Distributed_Training_and_MoE/FlashNext-RL/flashnext-rl.md)
- [MegaMoE](Papers/03_Distributed_Training_and_MoE/MegaMoE/megamoe.md)
- [PithTrain: A Compact and Agent-Native MoE Training System](Papers/03_Distributed_Training_and_MoE/PithTrain/pithtrain.md)
- [PockEngine: Sparse and Efficient Fine-tuning in a Pocket](Papers/03_Distributed_Training_and_MoE/PockEngine/pockengine.md)
- [Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning](Papers/03_Distributed_Training_and_MoE/Seer/seer.md)
- [SonicMoE: Accelerating MoE with IO and Tile-aware Optimizations](Papers/03_Distributed_Training_and_MoE/SonicMoE/sonicmoe.md)

### GPU 编译与性能

- [HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis](Papers/04_GPU_Compiler_and_Performance/Compiler/HIDA/hida.md)
- [MLIR: Scaling Compiler Infrastructure for Domain Specifific Computation](Papers/04_GPU_Compiler_and_Performance/Compiler/Papers/mlir.md)
- [The Deep Learning Compiler: A Comprehensive Survey](Papers/04_GPU_Compiler_and_Performance/Compiler/Papers/the-deep-learning-compiler.md)
- [Tiramisu: A Polyhedral Compiler for Expressing Fast and Portable Code](Papers/04_GPU_Compiler_and_Performance/Compiler/TIRAMISU-CGO/tiramisu.md)
- [Categorical Foundations for CuTe Layouts](Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/categorical-foundations-for-cute-layouts.md)
- [Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel](Papers/04_GPU_Compiler_and_Performance/Event-Tensor/event-tensor.md)
- [CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution](Papers/04_GPU_Compiler_and_Performance/Kernel-Generation/cake.md)
- [AVO: Agentic Variation Operators for Autonomous Evolutionary Search](Papers/04_GPU_Compiler_and_Performance/Kernel-Generation/avo.md)
- [Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning](Papers/04_GPU_Compiler_and_Performance/Compiler/Cocktailer/cocktailer.md)
- [Rammer: Enabling Holistic Deep Learning Compiler Optimizations with rTasks](Papers/04_GPU_Compiler_and_Performance/Compiler/Rammer/rammer.md)
- [Roller: Fast and Efficient Tensor Compilation for Deep Learning](Papers/04_GPU_Compiler_and_Performance/Compiler/ROLLER/roller.md)
- [Welder: Scheduling Deep Learning Memory Access via Tile-graph](Papers/04_GPU_Compiler_and_Performance/Compiler/Welder/welder.md)
- [AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures](Papers/04_GPU_Compiler_and_Performance/Compiler/AStitch/astitch.md)
- [Graphene: An IR for Optimized Tensor Computations on GPUs](Papers/04_GPU_Compiler_and_Performance/Compiler/Graphene/graphene.md)
- [BOLT: BRIDGING THE GAP BETWEEN AUTO-TUNERS AND HARDWARE-NATIVE PERFORMANCE](Papers/04_GPU_Compiler_and_Performance/Compiler/BOLT/bolt.md)
- [Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion](Papers/04_GPU_Compiler_and_Performance/Compiler/Chimera/chimera.md)
- [AMOS: Enabling Automatic Mapping for Tensor Computations On Spatial Accelerators with Hardware Abstraction](Papers/04_GPU_Compiler_and_Performance/Compiler/AMOS/amos.md)
- [Mirage Persistent Kernel: A Compiler and Runtime for Mega-Kernelizing Tensor Programs](Papers/04_GPU_Compiler_and_Performance/MPK/mirage-persistent-kernel.md)
- [Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References](Papers/04_GPU_Compiler_and_Performance/Compiler/Tawa/tawa.md)
- [Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B](Papers/04_GPU_Compiler_and_Performance/Megakernels/look-ma-no-bubbles-designing-a-low-latency-megakernel-for-llama1b.md)

### 模型架构与推理能力

- [SkillRT: Compiling Skills for Efficient Execution Everywhere](Papers/05_Model_Architecture_and_Reasoning/Agents/SkVM/skillrt.md)
- [DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](Papers/05_Model_Architecture_and_Reasoning/DeepSeek-V4/deepseek-v4.md)
- [Distilling the Knowledge in a Neural Network](Papers/05_Model_Architecture_and_Reasoning/Knowledge-Distillation/distilling-the-knowledge-in-a-neural-network.md)

### 计算基础

- [The Deminkernel Datapath OS Architecture for Microsecond-scale Datacenter Systems](Papers/06_Computing_Foundations/Operating-Systems/the-demikernel-datapath-os-architecture-for-microsecond-scale-datacenter-systems.md)
- [RedLeaf: Isolation and Communication in a Safe Operating System](Papers/06_Computing_Foundations/Operating-Systems/redleaf.md)
- [HyperBench: A Benchmark Suite for Virtualization Capabilities](Papers/06_Computing_Foundations/Virtualization/Benchmarks/hyperbench.md)
- [Security and Performance in the Delegated User-level Virtualization](Papers/06_Computing_Foundations/Virtualization/DuVisor/security-and-performance-in-the-delegated-user-level-virtualization.md)
- [Honeycomb: Secure and Efficient GPU Executions via Static Validation](Papers/06_Computing_Foundations/Virtualization/Honeycomb/honeycomb.md)
- [Nephele: Extending Virtualization Environments for Cloning Unikernel-based VMs](Papers/06_Computing_Foundations/Virtualization/Nephele/nephele.md)
- [A Loop Transformation Theory and an Algorithm to Maximize Parallelism](Papers/06_Computing_Foundations/Compiler/Loop-Transformation/a-loop-transformation-theory-and-an-algorithm-to-maximize-parallelism.md)
- [Unikraft: Fast, Specialized Unikernels the Easy Way](Papers/06_Computing_Foundations/Operating-Systems/Unikraft/unikraft.md)

## 项目

### SGLang

- [PD 分离与缓存传输](Projects/SGLang/Disaggregation/index.md)
- [Mooncake：GPU-source 传输取消与资源回收](Projects/SGLang/Disaggregation/mooncake-gpu-source-lifetime.md)
- [SGLang Attention backend：FlashAttention 与 DualChunk](Projects/SGLang/Layers/flashattention_backend.md)
- [WeLM Sparse Attention：计算、分页与缓存恢复](Projects/SGLang/WeLM-Sparse-Attention/index.md)

### FlashMLA

- [DSA Sparse Attention：Kernel 实现与公开性能](Projects/FlashMLA/dsa-sparse-attention.md)

### CuDNN

- [cuDNN QSA Backward：两遍计算与 Tensor Core 映射](Projects/CuDNN/qsa-backward.md)

### DeepEP

- [DeepEP：MoE 通信如何兼顾吞吐与计算重叠](Projects/DeepEP/overview.md)
- [NVSHMEM 与 DeepEP-like Buffer：初始化与内存模型](Projects/DeepEP/zhihu-reading.md)

### Light-DuoAttention

- [Light-DuoAttention：CuTeDSL 与 SGLang 实践](Projects/Light-DuoAttention/zhihu-reading.md)

### TileRT

- [TileRT：面向低延迟推理的 tile 运行时](Projects/TileRT/zhihu-reading.md)

### ThunderKittens

- [ThunderKittens：Register Tile](Projects/ThunderKittens/index.md)

### FractalTensor

- [FractalTensor 笔记](Projects/FractalTensor/index.md)

### InfiniTensor

- [InfiniTensor：从 ONNX 建图到后端执行](Projects/InfiniTensor/index.md)

### NNFusion

- [nnfusion 源码阅读](Projects/NNFusion/index.md)

### ArceOS

- [Arceos irq 分析](Projects/ArceOS/irq.md)
- [smoltcp](Projects/ArceOS/smoltcp.md)
- [ArceOS：从 feature 配置到 unikernel 启动](Projects/ArceOS/unikernel-build.md)

### QEMU

- [QEMU：RISC-V 构建配置](Projects/QEMU/index.md)

### Xv6-RISC-V

- [xv6-riscv 中的 KPTI 机制](Projects/Xv6-RISC-V/KPTI.md)
- [xv6-riscv 设备](Projects/Xv6-RISC-V/device.md)

### Xv6-Rust

- [动态内存分配](Projects/Xv6-Rust/alloc.md)
- [启动](Projects/Xv6-Rust/boot.md)
- [xv6-rust：环境配置与 GDB 调试](Projects/Xv6-Rust/env.md)
- [中断](Projects/Xv6-Rust/interrupt.md)
- [锁](Projects/Xv6-Rust/lock.md)
- [虚拟内存](Projects/Xv6-Rust/vm.md)
- [xv6 文件系统手册和代码阅读笔记](Projects/Xv6-Rust/xv6%20%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.md)
- [xv6-rust 设计报告](Projects/Xv6-Rust/xv6-rust-design.md)

## 基础

### Attention

- [FlashAttention 笔记](Foundations/01_Attention/FlashAttention.md)
- [Flash-Decoding for long-context inference](Foundations/01_Attention/FlashDecoding.md)
- [Linear Attention](Foundations/01_Attention/LinearAttention.md)
- [Multi-head Latent Attention](Foundations/01_Attention/MLA.md)
- [Sparse Attention](Foundations/01_Attention/SparseAttention.md)
- [Attention Sink、Learnable Sink 与 dsink：从输出含义到反向梯度](Foundations/01_Attention/Attention-Sinks/attention-sink-and-dsink.md)
- [[译] 用 60 幅图从零构建 FlashAttention-4](Foundations/01_Attention/B200-Attention/index.md)

### 推理与 KV Cache

- [推理的计算、访存与复用成本](Foundations/02_Inference_and_KV_Cache/inference-costs.md)

### 分布式训练与 MoE

- [Ring Attention、Ulysses 与在线归一化](Foundations/03_Distributed_Training_and_MoE/Sequence-Parallelism/distributed-attention.md)
- [MoE 数学与 SonicMoE](Foundations/03_Distributed_Training_and_MoE/MoE/zhihu-reading.md)
- [MoE：路由、Grouped GEMM、梯度与计算成本](Foundations/03_Distributed_Training_and_MoE/MoE/moe-math-and-cost.md)

### GPU 编译与性能

- [CUDA 内存与同步](Foundations/04_GPU_Compiler_and_Performance/CUDA/memory-and-streams.md)
- [GPU 内存池：空间管理与异步生命周期](Foundations/04_GPU_Compiler_and_Performance/CUDA/memory-pool.md)
- [GPU 执行、编译与排错](Foundations/04_GPU_Compiler_and_Performance/CUDA/execution-and-compilation.md)
- [RMSNorm、Softmax 与在线归约](Foundations/04_GPU_Compiler_and_Performance/Ops/normalization-and-softmax.md)
- [GEMM Pipeline 技术](Foundations/04_GPU_Compiler_and_Performance/CUDA/Pipeline.md)
- [Tensor Core 笔记](Foundations/04_GPU_Compiler_and_Performance/CUDA/TensorCore.md)
- [代码生成设计提案](Foundations/04_GPU_Compiler_and_Performance/CUDA/codegen_proposal.md)
- [Cute](Foundations/04_GPU_Compiler_and_Performance/CUDA/CUTLASS/cute.md)
- [Memory Coalescing](Foundations/04_GPU_Compiler_and_Performance/CUDA/Memory/coalescing.md)
- [swizzle](Foundations/04_GPU_Compiler_and_Performance/CUDA/Memory/swizzle.md)
- [向量化内存访问](Foundations/04_GPU_Compiler_and_Performance/CUDA/vec.md)
- [wmma](Foundations/04_GPU_Compiler_and_Performance/CUDA/Warp/wmma.md)
- [Warp-Level Primitives](Foundations/04_GPU_Compiler_and_Performance/CUDA/warp.md)
- [Scatter 算子](Foundations/04_GPU_Compiler_and_Performance/Ops/scatter.md)
- [[译] tcgen05 入门：从零实现 B200 GEMM](Foundations/04_GPU_Compiler_and_Performance/B200-GEMM/index.md)

### 模型架构与推理能力

- [Transformer](Foundations/05_Model_Architecture_and_Reasoning/Transformer.md)
- [LLM Training, Inference & Algorithms — Recommended Reading Path](Foundations/05_Model_Architecture_and_Reasoning/Learning-Paths/llm.md)
- [神经网络](Foundations/05_Model_Architecture_and_Reasoning/neural-network.md)
- [Adam 论文前置学习路线](Foundations/05_Model_Architecture_and_Reasoning/Optimization/adam-prerequisites.md)
- [2025 年度 LLM 研究总结](Foundations/05_Model_Architecture_and_Reasoning/Research-Reviews/llm-2025.md)

### 计算基础

- [Instruction Level Parallelism(ILP) and Its Exploitation](Foundations/06_Computing_Foundations/Architecture/CAAQA/ILP.md)
- [RISC V Compressed](Foundations/06_Computing_Foundations/Architecture/RISC-V/RISC-V%20Compressed.md)
- [RISC -V N 扩展](Foundations/06_Computing_Foundations/Architecture/RISC-V/RISC-V%20N.md)
- [RISC -V H 扩展](Foundations/06_Computing_Foundations/Architecture/RISC-V/RISC-V-H.md)
- [RISC -V Interrupt](Foundations/06_Computing_Foundations/Architecture/RISC-V/interrupt.md)
- [RISC-V IOMMU](Foundations/06_Computing_Foundations/Architecture/RISC-V/riscv-iommu.md)
- [SBI](Foundations/06_Computing_Foundations/Architecture/RISC-V/sbi.md)
- [TLB MMU](Foundations/06_Computing_Foundations/Architecture/TLB%20MMU.md)
- [寄存器分配](Foundations/06_Computing_Foundations/Compiler/reg_allocation.md)
- [C++ 对象、生命周期与并发](Foundations/06_Computing_Foundations/Programming/CPP/objects-and-lifetime.md)
- [迭代器](Foundations/06_Computing_Foundations/Programming/Rust/iterator.md)
- [Rust 智能指针](Foundations/06_Computing_Foundations/Programming/Rust/smart_pointer.md)
- [Rust trait](Foundations/06_Computing_Foundations/Programming/Rust/trait.md)
- [传输层](Foundations/06_Computing_Foundations/Systems/Network/transport.md)
- [FAT文件系统知识概览](Foundations/06_Computing_Foundations/Systems/OS/fat32%E7%AC%94%E8%AE%B0.md)
- [文件系统](Foundations/06_Computing_Foundations/Systems/OS/file_system.md)
- [io_uring 阅读笔记](Foundations/06_Computing_Foundations/Systems/OS/io_uring.md)
- [内存管理](Foundations/06_Computing_Foundations/Systems/OS/mm.md)
- [模块化内核](Foundations/06_Computing_Foundations/Systems/OS/moduler-os.md)
- [多核](Foundations/06_Computing_Foundations/Systems/OS/multicore.md)
- [虚拟化和云](Foundations/06_Computing_Foundations/Systems/OS/%E8%99%9A%E6%8B%9F%E5%8C%96%E5%92%8C%E4%BA%91.md)
- [Virtualizing I/O](Foundations/06_Computing_Foundations/Systems/Virtualization/io-virtualizing.md)
- [Virtualizing Memory](Foundations/06_Computing_Foundations/Systems/Virtualization/mm-virtualizing.md)
- [QEMU/KVM](Foundations/06_Computing_Foundations/Systems/Virtualization/qemu-kvm.md)
- [虚拟化硬件加速器调研](Foundations/06_Computing_Foundations/Systems/Virtualization/%E8%99%9A%E6%8B%9F%E5%8C%96.md)
- [Unikernel、Unikraft 与 ArceOS](Foundations/06_Computing_Foundations/Systems/Virtualization/Unikernel/zhihu-reading.md)

### 教材与技术参考

- [AI Infra 面试基础](Foundations/07_Books_and_Technical_References/Interview-AI-Infra/index.md)
- [超标量处理器概览](Foundations/07_Books_and_Technical_References/Books/Superscalar/Chapter1-Introduction.md)
- [Cache](Foundations/07_Books_and_Technical_References/Books/Superscalar/Chapter2-Cache.md)
- [Divide and Conquer](Foundations/07_Books_and_Technical_References/Courses/Algorithm/divide-and-conquer.md)
- [Introduction](Foundations/07_Books_and_Technical_References/Courses/Algorithm/introduction.md)
- [CUDA](Foundations/07_Books_and_Technical_References/Courses/CMU-15-418/CUDA.md)
- [现代多核处理器](Foundations/07_Books_and_Technical_References/Courses/CMU-15-418/modern_multicore_processor.md)
- [并行编程](Foundations/07_Books_and_Technical_References/Courses/CMU-15-418/parallel_prog.md)
- [并发控制](Foundations/07_Books_and_Technical_References/Courses/CMU-15-445/Concurrency-Control.md)
- [Deep Learning System -- Introduction](Foundations/07_Books_and_Technical_References/Courses/DL-System/00-interduction.md)
- [神经网络反向传播：理论与数学推导](Foundations/07_Books_and_Technical_References/Courses/DL-System/01-neural-network-backward.md)
- [Lab-2A Leader Election](Foundations/07_Books_and_Technical_References/Courses/MIT-6-824/6-824-Lab2A.md)
- [Lab-1 MapReduce](Foundations/07_Books_and_Technical_References/Courses/MIT-6-824/6-824-MapReduce.md)
- [Copy on Write Fork](Foundations/07_Books_and_Technical_References/Courses/MIT-6-S081/cow.md)
- [Lazy Page Allocation](Foundations/07_Books_and_Technical_References/Courses/MIT-6-S081/lazy.md)
- [Networking](Foundations/07_Books_and_Technical_References/Courses/MIT-6-S081/net.md)
- [User Level Threads](Foundations/07_Books_and_Technical_References/Courses/MIT-6-S081/uthread.md)
- [张量程序抽象](Foundations/07_Books_and_Technical_References/Courses/MLC/tensor-abstraction.md)
- [[译] 深度学习所需的矩阵微积分](Foundations/07_Books_and_Technical_References/Math/Matrix-Calculus/index.md)
- [Docker](Foundations/07_Books_and_Technical_References/Tools/Docker.md)
- [riscv-gnu-toolchain](Foundations/07_Books_and_Technical_References/Tools/riscv-gnu-toolchain.md)
- [Verilator 学习笔记](Foundations/07_Books_and_Technical_References/Tools/verilator.md)
- [Visual Studio Code](Foundations/07_Books_and_Technical_References/Tools/vscode.md)

### 量化

- [量化专题](Foundations/08_Quantization/index.md)
- [FP32、FP16、BF16 与混合精度](Foundations/08_Quantization/floating-point.md)
- [FP8 Current Scaling：量化、缩放与精度边界](Foundations/08_Quantization/fp8-current-scaling.md)
