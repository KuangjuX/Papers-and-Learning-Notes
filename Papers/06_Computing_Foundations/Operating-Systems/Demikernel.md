# The Demikernel Datapath OS Architecture for Microsecond-scale Datacenter Systems

Zhang I, Raybuck A, Patel P, et al. The demikernel datapath os architecture for microsecond-scale datacenter systems[C]//Proceedings of the ACM SIGOPS 28th Symposium on Operating Systems Principles. 2021: 195-211.

## 微秒级 I/O 需要怎样的数据通路

网络、存储和 Redis 等系统已将部分操作的延迟降至微秒量级，OS 数据通路的预算因而进入纳秒量级。Kernel bypass 避开了内核 I/O 路径，但不同设备留下的网络协议、缓冲区管理与调度工作并不相同。Demikernel 用设备相关的库操作系统补齐这些功能，并向应用提供统一接口，在 Linux 或 Windows 之上支持异构设备。[论文 §1–2](https://irenezhang.net/papers/demikernel-sosp21.pdf)

## Demikernel Datapath OS Requirements

![](Demikernel/figure.png)

设备卸载能力、零拷贝缓冲区的生命周期和细粒度 CPU 调度共同约束这个接口。

### Support heterogenous OS Offloads

Portability 很有挑战性因为不同的设备 offload 需要不同的 OS 特性。例如，DPDK 提供了一种低水平的，裸的 NIC 接口，同时 RDMA 提供了带有拥塞控制和有序、可靠传输的网络协议。因此，使用 DPDK 工作的系统需要实现一个全网络栈，使用 RDMA 工作的系统不需要实现。

这种异构性来源于硬件设计长期以来的权衡。卸载（offload）更多特性可以提高性能但是增加了设备复杂性。举例来说，DPDK 现在是通用且被广泛使用的，但是 RDMA 在数据中心中实现了最低的 CPU 延迟开销。所以任何 datapath OS 必须同时支持二者。未来 NICs 可能会带来其他的权衡。

### Coordinate Zero-Copy Memory Access

Zero-copy IO 对于最小化延迟来说非常重要。然而，它需要很仔细地协调在 IO 设备、栈以及应用程序间进行访问。Kernel-bypass zero-copy IO 需要两种类型的内存访问协调方案，然而这两种方案对于程序员来说管理已经存在的 kernel-bypass OS 很困难。

首先，设备侧通过 IOMMU 或驱动提供的地址映射进行 DMA，CPU 则通过 MMU/TLB 访问虚拟内存；两侧必须指向正确且在 I/O 期间有效的物理页。为避免缺页或映射变化，kernel-bypass 设备通常需要固定的 DMA-capable 内存。不同设备工作方式不同：

- RDMA：显式 DMA 可用内存注册

- DPDK，SPDK：分离的 pool-based memory allocator

第二种形式涉及到对 IO 内存缓冲区的实际访问。因为 IO stack 和 kernel-bypass 设备直接工作在应用内存上，程序员禁止释放或者修改内存当正在进行 IO 时。这种协调不仅仅停留在等待 IO 完成的阶段。举例来说，TCP stack 可能会向网卡发送内存，但是网络丢失了 packets。如果 TCP stack 在此时修改或者释放了内存缓冲区，TCP stack 将没有机会重传。因此，应用程序在释放内存时必须与 TCP stack 进行协调。

### Multiplex and Schedule the CPU at µs-scale

微秒级数据中心系统每几微秒就要执行一次 IO 操作：因此，一个 datapath OS 必须能够在相似的速度下进行多路复用以及调度 IO 处理程序。但是现存的内核抽象，例如进程和线程对于微秒级调度过于粗粒度。

这些系统都不是理想的，因为它们的调度决策仍然是分布式的，要么在内核和用户级调度器之间（对于DPDK系统），要么在代码中（对于RDMA系统）。最近的研究，比如eRPC，已经表明，在单个线程上复用应用程序工作和数据路径操作系统任务是必要的，以实现纳秒级的开销。因此，Demikernel的设计需要一个微秒级的调度抽象和调度器。

## Demikernel Overview and Approach

### Design Goals

- 简化微秒级系统开发

- 在异构系统中提供可移植性。Demikernel 应该让应用程序跑在多种不同 kernel-bypass 设备中（例如 RDMA 和 DPDK）和虚拟化环境中

-  将 OS 数据通路开销控制在纳秒量级

### System Model and Assumptions

Demikernel 依赖于现在比较流行的 kernel-bypass 设备，例如 RDMA，DPDK，SPDK，但也对于未来的可编程的设备进行了预留。我们假设 Demikernel datapath OS 和应用程序运行在相同进程或者线程中，它们之间互相信任，而相互之间的隔离或者保护由 kernel 或者 kernel-bypass 设备提供。这些假设在数据中心是成立的，因为应用程序通常会携带自己的库和操作系统，而数据中心使用硬件强制隔离。

Demikernel 可以直接通过网络发送应用程序内存，所以应用程序必须仔细考虑敏感数据的位置。如果必要的话，可以将功能关掉。其他技术，像信息流控制或者认证，也可以被用于来确保应用程序内存的安全性。
