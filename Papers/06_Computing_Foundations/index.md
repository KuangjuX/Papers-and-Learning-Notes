# 计算基础 · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/06_Computing_Foundations/index.md)

体系结构、编译原理、操作系统、虚拟化、网络与编程语言。

共 14 个清单条目；已读 14，待读 0。保留原有跨分类重复条目与阅读状态。

## 本地笔记

- [The Deminkernel Datapath OS Architecture for Microsecond-scale Datacenter Systems](Operating-Systems/Demikernel.md)
- [RedLeaf: Isolation and Communication in a Safe Operating System](Operating-Systems/RedLeaf.md)
- [HyperBench: A Benchmark Suite for Virtualization Capabilities](Virtualization/Benchmarks/Hyperbench-A-Benchmark-Suite-for-Virtualization-Capabilities.md)
- [Security and Performance in the Delegated User-level Virtualization](Virtualization/DuVisor/duvisor.md)
- [Honeycomb: Secure and Efficient GPU Executions via Static Validation](Virtualization/Honeycomb/honeycomb.md)
- [Nephele: Extending Virtualization Environments for Cloning Unikernel-based VMs](Virtualization/Nephele/nephele.md)

## Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Honeycomb: Secure and Efficient GPU Executions via Static Validation** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/mai) | 在加载时静态验证 GPU 程序，结合 CPU TEE 将 OS 与驱动移出可信计算基 | [Paper](https://www.usenix.org/conference/osdi23/presentation/mai) / [Note](Virtualization/Honeycomb/honeycomb.md) |

## Operating Systems

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **RedLeaf: Isolation and Communication in a Safe Operating System** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/narayanan-vikram) | 利用 Rust 类型与内存安全实现轻量隔离域、跨域零拷贝和驱动故障恢复 | [Paper](https://www.usenix.org/system/files/osdi20-narayanan_vikram.pdf) / [Note](Operating-Systems/RedLeaf.md) |
| ✅ | **Theseus: an Experiment in Operating System Structure and State Management** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/boos) | 减少组件间状态耦合并用 Rust 编译器约束系统语义，支持 OS 在线演化与故障恢复 | [Paper](https://www.usenix.org/system/files/osdi20-boos.pdf) |
| ✅ | **Unikraft: Fast, Specialized Unikernels the Easy Way** | [EuroSys'21](https://unikraft.org/blog/2021-04-26-unikraft-at-eurosys) | 以可组合微型库按应用裁剪 OS，降低构建高性能 unikernel 的移植和优化成本 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3447786.3456248) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/9) |
| ✅ | **The Demikernel Datapath OS Architecture for Microsecond-scale Datacenter Systems** | [SOSP'21](https://doi.org/10.1145/3477132.3483569) | 为 RDMA、DPDK 等异构 kernel-bypass 设备提供统一异步 API，降低微秒级数据中心 I/O 开销 | [Paper](https://irenezhang.net/papers/demikernel-sosp21.pdf) / [Note](Operating-Systems/Demikernel.md) |

## Hypervisor & Virtualization

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **HyperBench: A Benchmark Suite for Virtualization Capabilities** | [SIGMETRICS / POMACS'19](https://www.sigmetrics.org/opentoc/pomacs19_2toc.html) | 用独立于特定 hypervisor 的微基准测量 VM 切换、地址转换等关键虚拟化能力 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3341617.3326138) / [Note](Virtualization/Benchmarks/Hyperbench-A-Benchmark-Suite-for-Virtualization-Capabilities.md) |
| ✅ | **DuVisor: a User-level Hypervisor Through Delegated Virtualization** | [arXiv'22](https://arxiv.org/pdf/2201.09652.pdf) | 通过硬件授权把 VM 退出等运行时操作下放用户态，减少内核攻击面与特权切换成本 | [Paper](https://arxiv.org/pdf/2201.09652.pdf) |
| ✅ | **AvA: Accelerated Virtualization of Accelerators** | [ASPLOS'20](https://oscarlab.github.io/papers/ava-asplos20.pdf) | 以 API 描述生成加速器虚拟化与远程调用支持，兼顾多种加速器的兼容性和性能 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3373376.3378466) |
| ✅ | **Security and Performance in the Delegated User-level Virtualization** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/chen) | 分离 hypervisor 控制面与用户态 VM 处理面，用硬件授权同时降低攻击面和运行时开销 | [Paper](https://www.usenix.org/system/files/osdi23-chen.pdf) / [Note](Virtualization/DuVisor/duvisor.md) |
| ✅ | **System Virtualization for Neural Processing Units** | [HotOS'23](https://sigops.org/s/conferences/hotos/2023/papers/xue.pdf) | 提出 vNPU 抽象及分配、映射、调度机制，探索 NPU 多租户利用率与隔离的协同设计 | [Paper](https://sigops.org/s/conferences/hotos/2023/papers/xue.pdf) |
| ✅ | **Nephele: Extending Virtualization Environments for Cloning Unikernel-based VMs** | [EuroSys'23](https://cordis.europa.eu/project/id/758815/results) | 扩展虚拟化环境支持低开销克隆 unikernel VM，复用初始化状态并降低实例创建成本 | [Paper](http://nets.cs.pub.ro/~costin/files/nephele.pdf) / [Note](Virtualization/Nephele/nephele.md) |
| ✅ | **Honeycomb: Secure and Efficient GPU Executions via Static Validation** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/mai) | 在加载时静态验证 GPU 程序，结合 CPU TEE 将 OS 与驱动移出可信计算基 | [Paper](https://www.usenix.org/conference/osdi23/presentation/mai) / [Note](Virtualization/Honeycomb/honeycomb.md) |

## RISC-V

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **A First Look at RISC-V Virtualization from an Embedded Systems Perspective** | [IEEE TC'22 (online'21)](https://ieeexplore.ieee.org/document/9606600/) | 在 Rocket 上实现并评估 RISC-V H 扩展，分析嵌入式虚拟化中的中断、计时器与隔离开销 | [Paper](https://arxiv.org/pdf/2103.14951.pdf) |
| ✅ | **CVA6 RISC-V Virtualization: Architecture, Microarchitecture, and Design Space Exploration** | [IEEE TVLSI'23](https://cris.unibo.it/handle/11585/952940) | 为 CVA6 实现硬件虚拟化并探索 GTLB、L2 TLB 等设计的性能、功耗和面积权衡 | [Paper](https://arxiv.org/pdf/2302.02969.pdf) |
