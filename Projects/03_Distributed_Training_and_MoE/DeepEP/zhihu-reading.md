# NVSHMEM 与 DeepEP-like Buffer：初始化与内存模型

- 来源：[NVSHMEM-Tutorial：Build a DeepEP-like GPU Buffer（一）](https://zhuanlan.zhihu.com/p/1943366512783098660)。

对称地址、同步与硬件卸载的简化解释需结合 [NVSHMEM 官方文档](https://docs.nvidia.com/nvshmem/api/index.html) 理解，不作为当前所有实现的保证。

最近学习了一下 NVSHMEM 以及 DeepEP，由于 Deepep 本身自己的处理逻辑和 MoE 比较强相关，同时也过于复杂，不太适合作为一个纯粹的 GPU 通信的教程去学习，因此我自己做了一个 DeepEP-like Buffer 用来实验 DeepEP 中的一些特性，仅仅实现了 Deepep 中针对 GPU 通信相关的技术而不去针对 MoE 的通信逻辑进行实现，目前已开源在 github 中：

[https://github.com/KuangjuX/NVSHMEM-Tutorialgithub.com/KuangjuX/NVSHMEM-Tutorial](https://github.com/KuangjuX/NVSHMEM-Tutorial)

后续会持续更新。

在本系列的第一篇文章中会介绍 NVSHMEM 相关的概念以及初始化流程，在后续的文章中将基于 DeepEp-like Buffer 介绍节点内与节点间混合通信以及一些通信原语的实现。

### NVSHMEM 介绍

NVSHMEM (NVIDIA SHared MEMory) 是一个基于 OpenSHMEM 标准的并行编程库。它的核心思想是实现一个**分区全局地址空间 (Partitioned Global Address Space, PGAS)** 模型。

理解 PGAS 是理解 NVSHMEM 的关键。想象一下，在一个多 GPU 系统中，所有参与计算的 GPU 共享一个**逻辑上**的全局地址空间，但这个空间在**物理上**是分布在各个 GPU 各自的显存中的。

这意味着什么呢？这意味着任何一个 GPU 都可以通过简单的内存操作（我们稍后会讲到的 `put` 和 `get`）直接、单边地访问另一个 GPU 上的数据，而**无需目标 GPU 的显式参与**。这正是 NVSHMEM 强大能力的源泉。

相比于我们熟知的 MPI，NVSHMEM 有几个显著的特性，让它在 GPU 通信领域独树一帜：

1. **单边通信 (One-sided Communication)**：这是与传统 MPI 双边通信最本质的区别。在 NVSHMEM 中，一个 GPU 可以直接对另一个 GPU 的内存进行读写，无需目标 GPU 进行任何匹配操作（如 `MPI_Recv`）。这极大地减少了通信中的同步开销和延迟。
2. **GPU 原生通信 (GPU-native Communication)**：通信操作可以直接在 CUDA kernel 内部发起。这消除了传统通信中频繁的 CPU-GPU 上下文切换，使得计算与通信可以更紧密地重叠（Overlap），从而提升整体性能。
3. **硬件卸载 (Hardware Offload)**：NVSHMEM 的操作可以被直接卸载到硬件执行。通过 **NVLink/NVSwitch**（节点内）和 **RDMA**（节点间），数据传输可以绕过 CPU 和操作系统内核，直接在 GPU、网络接口和内存控制器之间进行，实现极致的低延迟和高带宽。

### NVSHMEM 内存模型

NVSHMEM 的 PGAS 模型依赖于两个核心概念：**对称堆 (Symmetric Heap)** 和我们已经提到的**分区全局地址空间 (PGAS)**。

**对称堆**是 NVSHMEM 在每个 PE（Processing Element，在这里就是每个 GPU）的显存中划分出来的一块特殊内存区域。这块区域由 NVSHMEM 库管理，并且必须通过专门的 API（如 `nvshmem_malloc`）进行分配。

对称堆最神奇的特性在于：如果你在对称堆上分配了一个对象，那么这个对象的指针变量 `ptr`，在**所有 PE 上都具有相同的逻辑地址值**。然而，它在每个 PE 上指向的物理地址是不同的，是位于各自 PE 的本地显存中的。

当所有 PE 的对称堆集合在一起时，它们就共同构成了一个分区的全局地址空间 (PGAS)：

- **全局 (Global)**: 从任何一个 PE 的角度来看，它都可以访问这个地址空间中的任何位置，就好像在访问一个巨大的、统一的内存池一样。
- **分区 (Partitioned)**: 这个全局地址空间在物理上是分散的（分区的），每个 PE “拥有”并管理其中的一部分（即它自己的对称堆）。

### 核心通信原语

`put` 和 `get` 是 NVSHMEM 中最基本、最核心的单边操作原语。

### `nvshmem_putmem`：把我的数据“放”到你那里

```
void nvshmem_putmem(void *dest, const void *source, size_t nelems, int pe);
```

这个函数将本地内存 (`source`) 中的数据，直接写入到目标 PE (`pe`) 的对称堆上的指定地址 (`dest`)。

**工作流程:**

1. 源 PE (例如 PE 0) 准备好要发送的数据。这些数据可以位于其本地的任何地方（包括对称堆或普通的 `cudaMalloc` 内存）。
2. 源 PE 指定目标地址。这个目标地址**必须**是位于目标 PE (例如 PE 1) 的对称堆中的一个有效地址。由于对称性，源 PE “知道”这个地址。
3. 源 PE 调用 `nvshmem_putmem`。
4. NVSHMEM 运行时库和硬件接管一切：它将 `dest` 解释为 PE 1 上的逻辑地址，并通过 NVLink/RDMA 等高速互连，直接将 `source` 指向的数据传输到 PE 1 的物理显存中。
5. **整个过程，PE 1 的 CPU 或 GPU 内核完全不参与**。它甚至不知道这次写入的发生。这就是“单边”的含义。

### `nvshmem_getmem`：把你那的数据“拿”到我这里

```
void nvshmem_getmem(void *dest, const void *source, size_t nelems, int pe);
```

这个函数从目标 PE (`pe`) 的对称堆上的指定地址 (`source`)，直接读取数据到本地内存 (`dest`) 中。

**工作流程:**

1. 源 PE (例如 PE 0) 在自己的本地内存中准备好一块缓冲区，用于存放即将读取的数据。
2. 源 PE 指定要从哪个目标 PE (例如 PE 1) 的哪个对称堆地址 (`source`) 读取数据。
3. 源 PE 调用 `nvshmem_getmem`。
4. 硬件将数据从 PE 1 的对称堆中抓取，并通过互连网络传输回 PE 0，存入本地缓冲区。
5. 同样，这个过程对 PE 1 来说是完全透明和无感的。

### 同步与内存一致性

既然通信是单边的，那么一个至关重要的问题就出现了：PE 0 向 PE 1 `put` 了一个数据后，PE 1 什么时候才能安全地读取这个新数据呢？

网络传输需要时间，直接的内存操作不是瞬间完成的。因此，NVSHMEM 提供了一套同步原语来保证内存一致性。

- `nvshmem_quiet()`: 这是一个关键的函数。当一个 PE 调用它时，会暂停执行，直到**由该 PE 发起的所有远程内存操作**（put, get, 原子操作等）都已经在目标 PE 上**全部完成**。
- `nvshmem_barrier_all()`: 这是一个更强的全局同步。它会阻塞所有 PE，直到**所有 PE 发起的所有远程操作都已完成**，并且**所有 PE 都到达了这个屏障点**。它隐含了 `quiet` 的功能。

### 集合通信

除了单边的 `put`/`get`，NVSHMEM 也提供了类似 MPI 的集合通信 API，例如：

- `nvshmem_broadcastmem`: 将数据从一个指定的根 PE 广播到同一个通信组（Team）的其他所有 PE。
- `nvshmem_alltoallmem`: 每个 PE 将自己的数据块分割成 N 份，第 i 份发送给第 i 个 PE。最终，每个 PE 都从其他所有 PE（包括自己）那里接收到一小份数据，组成一个新的数据块。

### 万事开头难：NVSHMEM 初始化

NVSHMEM 的初始化过程非常关键，它负责建立起所有 PE 之间的联系。这里我们介绍一种常用且灵活的方式：**基于 Unique ID 的初始化**。

核心思想如下：

1. 由一个指定的“根”进程（通常是 rank 0）创建一个全局唯一的标识符 (Unique ID)。
2. 根进程通过某种外部机制（例如 MPI、PyTorch `dist` 等）将这个 Unique ID 分发给所有其他参与的进程。
3. 所有进程使用这个**相同的 Unique ID** 以及各自的 rank 信息来初始化自己的 NVSHMEM 环境。

下面我们来看一下关键代码：

**1. Rank 0 生成 Unique ID**

```
// 由 rank 0 进程调用，生成一个全局唯一的 ID
std::vector<uint8_t> get_unique_id() {
    nvshmemx_uniqueid_t unique_id;
    // 调用 NVSHMEM 扩展 API 来获取一个 ID 结构体
    nvshmemx_get_uniqueid(&unique_id);

    // 将 ID 序列化到一个字节向量中，以便于传输
    std::vector<uint8_t> result(sizeof(nvshmemx_uniqueid_t));
    std::memcpy(result.data(), &unique_id, sizeof(nvshmemx_uniqueid_t));
    return result;
}
```

这里我们将 `unique_id` 拷贝到一个 `std::vector<uint8_t>` 中，使其变成一个可序列化的字节流，方便后续广播给其他进程。

**2. 所有进程使用 Unique ID 进行初始化**

```
int init(const std::vector<uint8_t> &root_unique_id_val, int rank, int num_ranks) {
    nvshmemx_uniqueid_t root_unique_id;
    nvshmemx_init_attr_t attr;

    // 1. 将接收到的字节流反序列化回 unique_id 结构体
    std::memcpy(&root_unique_id, root_unique_id_val.data(), sizeof(nvshmemx_uniqueid_t));

    // 2. 将进程身份信息(rank, num_ranks)和通信组标识(root_unique_id)打包到属性结构体 attr 中
    nvshmemx_set_attr_uniqueid_args(rank, num_ranks, &root_unique_id, &attr);

    // 3. 初始化！NVSHMEM 运行时会使用 unique_id 寻找并连接到其他持有相同 ID 的伙伴
    nvshmemx_init_attr(NVSHMEMX_INIT_WITH_UNIQUEID, &attr);

    // ... 后续操作 ...

    nvshmem_barrier_all();
    return nvshmem_my_pe();
}
```

### 团队协作：NVSHMEM Team

在初始化代码中，我们经常会看到 `nvshmem_team_split_strided` 这样的函数，它引出了 NVSHMEM 的另一个重要概念：**Team**。

一个 Team 是 PE（处理单元）的一个有序子集。想象一下整个程序有 16 个 GPU，它们的全局 Rank 是 0 到 15，这是一个大的、默认的通信组，被称为 `NVSHMEM_TEAM_WORLD`。我们可以根据需要，将这 16 个 GPU 划分成多个更小的 Team。在每个 Team 内部，成员们都有一个新的、从 0 开始的本地 Rank。

为什么要使用 Team？

- **匹配硬件拓扑**：在多节点集群中，节点内的 GPU 通过 NVLink 连接，速度极快；节点间的 GPU 通过 RDMA 连接，速度相对较慢。我们可以为每个节点内的 GPU 创建一个 Team，在 Team 内部使用为 NVLink 优化的通信算法，在 Team 之间使用为 RDMA 优化的算法，从而实现全局最优性能。
- **实现算法分区**：例如，在模型并行中，模型的不同层可以分布在不同的 GPU 组上，每一组可以是一个 Team。层内的 GPU 协同计算，层间的 GPU 完成数据传递。
- **减少同步开销**：在 `NVSHMEM_TEAM_WORLD` 上执行 `nvshmem_barrier_all` 需要所有 PE 参与，开销很大。如果逻辑上只需要一小部分 PE 同步，那么在一个只包含这些 PE 的 Team 上执行同步会快得多。

### DeepEP 中的初始化策略

回到我们最初提到的 DeepEP，它在高吞吐和低延迟模式下就采用了不同的初始化和 Team 创建策略：

- **高吞吐模式**：为 `rdma_rank == 0` 的每个 GPU 生成一个 unique_id，并广播到其他 `rdma_rank`  GPU。这样。此时 node 间相同 `nvl_rank` 具有相同的 `unique_id`，因此 node 间可以通过同号 rank 进行发送，到了同号 rank 后再通过 nvlink 转发到目的 rank。
- **低延迟模式**：仅由全局 rank 0 生成一个 `unique_id` 并广播给所有 GPU。初始化后，立刻调用 `nvshmem_team_split_strided`，根据物理拓扑（例如节点）将 `NVSHMEM_TEAM_WORLD` 分割成多个子 Team。在 low latency 的模式下所有通信均适用 IBGDA，即使在节点内也不使用 nvlink，因此可以不占用 SM，做到计算与通信 overlap。

### 总结

在本文中，我们介绍了 NVSHMEM 的核心概念，以及其底层的对称堆内存模型。我们还学习了 `put`/`get` 这两个核心通信原语，并了解了如何通过 `quiet` 和 `barrier` 来保证同步。最后，我们详细拆解了基于 Unique ID 的初始化流程，并引出了强大的 Team 概念。

在下一篇文章中，我们将深入 `DeepEP-like Buffer` 的代码，实践如何利用我们今天学到的知识，实现节点内与节点间的混合通信以及一些关键的通信模式。
