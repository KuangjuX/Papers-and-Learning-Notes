# 本地笔记目录

先按论文、项目、基础区分材料类型，再按主题查找。论文清单中未写笔记的条目见[论文归档](Papers/index.md)。

## 论文

### Attention

- [DeepSeek Sparse Attention (DSA) 算法流程](Papers/01_Attention/DeepSeek-DSA/deepseek-sparse-attention-dsa.md)
- [FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling：阅读材料](Papers/01_Attention/FlashAttention-4/zotero-reading.md)
- [IndexCache：跨层复用稀疏索引，以及它为什么能被训练](Papers/01_Attention/IndexCache/indexcache.md)
- [MiniMax Sparse Attention：论文算法与代码实现精确对应](Papers/01_Attention/MiniMax-MSA/MiniMax%20Sparse%20Attention%EF%BC%9A%E8%AE%BA%E6%96%87%E7%AE%97%E6%B3%95%E4%B8%8E%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E7%B2%BE%E7%A1%AE%E5%AF%B9%E5%BA%94.md)
- [MSA 中的 KL 对齐与局部知识蒸馏](Papers/01_Attention/MiniMax-MSA/msa-kl-distillation.md)
- [MSA 为什么采用 KV-outer Sparse Attention Forward](Papers/01_Attention/MiniMax-MSA/msa-kv-outer-forward.md)
- [MSA Indexer 与 DSA Lightning Indexer 的差别](Papers/01_Attention/MiniMax-MSA/msa-vs-dsa-indexer.md)
- [MiniMax Sparse Attention (MSA)](Papers/01_Attention/MiniMax-MSA/msa.md)
- [Fast Transformer Decoding: One Write-Head is All You Need](Papers/01_Attention/MQA/fast-transformer-decoding-mqa.md)
- [A Survey of Efficient Attention Methods: Hardware-efficient,  Sparse, Compact, and Linear Attention](Papers/01_Attention/Surveys/efficient_attention_survey.md)

### 推理与 KV Cache

- [Dual Chunk Attention](Papers/02_Inference_and_KV_Cache/Dual-Chunk-Attention/DCA.md)
- [HiSparse：稀疏注意力的分层 KV Cache 管理](Papers/02_Inference_and_KV_Cache/HiSparse/hisparse.md)
- [A Survey of LLM Inference Systems](Papers/02_Inference_and_KV_Cache/Surveys/llm_inference_survey.md)

### 分布式训练与 MoE

- [MegaMoE：把 MoE 前向路径压进一个通信计算融合核](Papers/03_Distributed_Training_and_MoE/MegaMoE/megamoe.md)
- [PithTrain: A Compact and Agent-Native MoE Training System](Papers/03_Distributed_Training_and_MoE/PithTrain/pithtrain.md)

### GPU 编译与性能

- [HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis](Papers/04_GPU_Compiler_and_Performance/Compiler/HIDA/hida.md)
- [MLIR: Scaling Compiler Infrastructure for Domain Specifific Computation](Papers/04_GPU_Compiler_and_Performance/Compiler/Papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md)
- [The Deep Learning Compiler: A Comprehensive Survey](Papers/04_GPU_Compiler_and_Performance/Compiler/Papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md)
- [TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code](Papers/04_GPU_Compiler_and_Performance/Compiler/TIRAMISU-CGO/tiramisu.md)
- [Categorical Foundations for CuTe Layouts](Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/Layout.md)
- [Event Tensor：用“事件张量”编译动态 Megakernel](Papers/04_GPU_Compiler_and_Performance/Event-Tensor/event-tensor.md)
- [CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution](Papers/04_GPU_Compiler_and_Performance/Kernel-Generation/CAKE.md)
- [AVO: Agentic Variation Operators for Autonomous Evolutionary Search](Papers/04_GPU_Compiler_and_Performance/Kernel-Generation/avo.md)

### 模型架构与推理能力

- [SkVM: Revisiting Language VM for Skills across Heterogenous LLMs and Harnesses](Papers/05_Model_Architecture_and_Reasoning/Agents/SkVM/skvm.md)
- [DeepSeek-V4: 迈向高效百万级上下文智能](Papers/05_Model_Architecture_and_Reasoning/DeepSeek-V4/deepseek-v4.md)
- [Distilling the Knowledge in a Neural Network](Papers/05_Model_Architecture_and_Reasoning/Knowledge-Distillation/distilling-the-knowledge-in-a-neural-network.md)

### 计算基础

- [The Deminkernel Datapath OS Architecture for Microsecond-scale Datacenter Systems](Papers/06_Computing_Foundations/Operating-Systems/Demikernel.md)
- [RedLeaf: Isolation and Communication in a Safe Operating System](Papers/06_Computing_Foundations/Operating-Systems/RedLeaf.md)
- [HyperBench: A Benchmark Suite for Virtualization Capabilities](Papers/06_Computing_Foundations/Virtualization/Benchmarks/Hyperbench-A-Benchmark-Suite-for-Virtualization-Capabilities.md)
- [Security and Performance in the Delegated User-level Virtualization](Papers/06_Computing_Foundations/Virtualization/DuVisor/duvisor.md)
- [Honeycomb: Secure and Efficient GPU Executions via Static Validation](Papers/06_Computing_Foundations/Virtualization/Honeycomb/honeycomb.md)
- [Nephele: Extending Virtualization Environments for Cloning Unikernel-based VMs](Papers/06_Computing_Foundations/Virtualization/Nephele/nephele.md)

## 项目

### 推理与 KV Cache

- [DSA 前向路径：Indexer、块选择与分页 Attention](Projects/02_Inference_and_KV_Cache/SGLang/WeLM-Sparse-Attention/dsa-gqa-forward.md)
- [GQA 稀疏 Attention：共享 Selection 与计算形状](Projects/02_Inference_and_KV_Cache/SGLang/WeLM-Sparse-Attention/dsa-gqa-head-shapes.md)
- [sglang DualChunk FlashAttention backend](Projects/02_Inference_and_KV_Cache/SGLang/Layers/dual_chunk_flashattention_backend.md)
- [sglang FlashAttention backend](Projects/02_Inference_and_KV_Cache/SGLang/Layers/flashattention_backend.md)

- [PD 分离与缓存传输](Projects/02_Inference_and_KV_Cache/SGLang/Disaggregation/index.md)
- [Mooncake：GPU-source 传输取消与资源回收](Projects/02_Inference_and_KV_Cache/SGLang/Disaggregation/mooncake-gpu-source-lifetime.md)
- [WeLM Sparse Attention 推理学习](Projects/02_Inference_and_KV_Cache/SGLang/WeLM-Sparse-Attention/index.md)
- [WeLM Sparse 的 HiCache：Indexer-K、Host 内存与页面恢复](Projects/02_Inference_and_KV_Cache/SGLang/WeLM-Sparse-Attention/hicache-indexer-k.md)

### 分布式训练与 MoE

- [PithTrain 代码解读与训练系统学习路线](Projects/03_Distributed_Training_and_MoE/PithTrain/index.md)

### GPU 编译与性能

- [FractalTensor 笔记](Projects/04_GPU_Compiler_and_Performance/FractalTensor/note.md)
- [Infinitensor 源码阅读](Projects/04_GPU_Compiler_and_Performance/InfiniTensor/infinitensor.md)
- [nnfusion 源码阅读](Projects/04_GPU_Compiler_and_Performance/NNFusion/index.md)
- [TK Tile](Projects/04_GPU_Compiler_and_Performance/ThunderKittens/Memory/tile.md)

### 计算基础

- [Arceos irq 分析](Projects/06_Computing_Foundations/ArceOS/irq.md)
- [smoltcp](Projects/06_Computing_Foundations/ArceOS/smoltcp.md)
- [boot_linux](Projects/06_Computing_Foundations/QEMU/boot_linux.md)
- [QEMU](Projects/06_Computing_Foundations/QEMU/config.md)
- [Virtio](Projects/06_Computing_Foundations/QEMU/virtio.md)
- [xv6-riscv 中的 KPTI 机制](Projects/06_Computing_Foundations/Xv6-RISC-V/KPTI.md)
- [xv6-riscv 设备](Projects/06_Computing_Foundations/Xv6-RISC-V/device.md)
- [动态内存分配](Projects/06_Computing_Foundations/Xv6-Rust/alloc.md)
- [启动](Projects/06_Computing_Foundations/Xv6-Rust/boot.md)
- [环境配置](Projects/06_Computing_Foundations/Xv6-Rust/env.md)
- [GDB调试](Projects/06_Computing_Foundations/Xv6-Rust/gdb.md)
- [中断](Projects/06_Computing_Foundations/Xv6-Rust/interrupt.md)
- [锁](Projects/06_Computing_Foundations/Xv6-Rust/lock.md)
- [进程与线程](Projects/06_Computing_Foundations/Xv6-Rust/process.md)
- [调度](Projects/06_Computing_Foundations/Xv6-Rust/scheduler.md)
- [虚拟内存](Projects/06_Computing_Foundations/Xv6-Rust/vm.md)
- [xv6 文件系统手册和代码阅读笔记](Projects/06_Computing_Foundations/Xv6-Rust/xv6%20%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.md)
- [xv6 rust design](Projects/06_Computing_Foundations/Xv6-Rust/xv6-rust-design.md)

## 基础

### Attention

- [FlashAttention 笔记](Foundations/01_Attention/FlashAttention.md)
- [Flash-Decoding for long-context inference](Foundations/01_Attention/FlashDecoding.md)
- [Linear Attention](Foundations/01_Attention/LinearAttention.md)
- [Multi-head Latent Attention](Foundations/01_Attention/MLA.md)
- [Sparse Attention](Foundations/01_Attention/SparseAttention.md)
- [Attention Sink、Learnable Sink 与 dsink：从输出含义到反向梯度](Foundations/01_Attention/Attention-Sinks/attention-sink-and-dsink.md)
- [[译] 用 60 幅图从零构建 FlashAttention-4](Foundations/01_Attention/B200-Attention/index.md)

### GPU 编译与性能

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

### 教材与技术参考

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
