# RedLeaf: Isolation and Communication in a Safe Operating System

Narayanan V, Huang T, Detweiler D, et al. Redleaf: Isolation and communication in a safe operating system[C]//Proceedings of the 14th USENIX Conference on Operating Systems Design and Implementation. 2020: 21-39.

## Abstract

RedLeaf 是一个完全由头开始开发的操作系统，采用 Rust 语言来探索语言安全性对操作系统组织所产生的影响。与通用系统不同，RedLeaf 不依赖于硬件地址空间来进行隔离，而仅仅使用Rust语言的类型和内存安全性。不再依靠昂贵的硬件隔离机制使我们有机会探索采用轻量级的细粒度隔离的系统设计空间。我们开发了一个全新的轻量级基于语言的隔离领域的抽象，提供一个信息隐蔽和故障隔离的单元。领域可以进行动态加载和清理终止，即一个领域中的错误不会影响其他 domain 的执行。在 RedLeaf 隔离机制的基础上，我们展示了实现端到端的 zerp copy、fault isolation 和 transparent recovery 设备驱动程序的可能性。为了评估 RedLeaf 抽象的实用性，我们将 POSIX 子集操作系统 Rv6 实现为一组 RedLeaf domains。最后，为了证明 Rust 和细粒度隔离是实用的，我们开发了高效率的 10Gbps Intel ixgbe 网络和 NVMe 固态磁盘设备驱动程序的版本，与 DPDK 和 SPDK 最快的等效驱动程序相匹配。
