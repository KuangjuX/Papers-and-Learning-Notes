# NVSHMEM 与 DeepEP-like Buffer：初始化与内存模型

GPU kernel 要把数据写到其他 GPU，除了远端地址，还需要知道通信参与者、内存分配关系以及何时可以复用缓冲区。[NVSHMEM-Tutorial](https://github.com/KuangjuX/NVSHMEM-Tutorial/tree/e6c64f4f148ccb20ae5ec428420ef25ba4788715) 用 DeepEP-like Buffer 实验这些通信基础，不包含 MoE 路由和专家计算；原文见[初始化教程](https://zhuanlan.zhihu.com/p/1943366512783098660)。

## 用本地对称地址与 PE 编号定位远端对象

NVSHMEM 使用 PGAS（分区全局地址空间）模型。每个 PE（Processing Element）持有本地内存，远端对象通过“本地对称地址 + 目标 PE”定位。对称堆由 NVSHMEM 管理，`nvshmem_malloc` 等集合分配接口在参与 PE 上建立相应对象；对称性要求匹配的分配关系，**不要求各 PE 返回的指针数值相同**，也不能把一个 PE 的普通指针值直接交给另一个 PE 解引用。

例如 PE 0 与 PE 1 都为数组 `buf` 进行了匹配的对称分配。PE 0 调用 `nvshmem_putmem(buf + 16, src, 32, 1)`，其中 `buf + 16` 是 PE 0 本地的对称地址，运行时将其映射到 PE 1 对应对象的相同偏移。这里 `buf` 若为 `char*`，偏移为 16 B，载荷为 32 B；若元素类型不同，指针算术的偏移也随之改变。见 [NVSHMEM 地址与内存模型](https://docs.nvidia.com/nvshmem/api/latest/using.html)。

PGAS 简化了远端寻址，却没有把分布式显存变成普通缓存一致的共享内存。程序仍须遵守集合分配、访问有效期和同步约束。

## 单边传输省去匹配 receive，数据就绪仍需要协议

```cpp
void nvshmem_putmem(void *dest, const void *source, size_t nelems, int pe);
void nvshmem_getmem(void *dest, const void *source, size_t nelems, int pe);
```

`put` 将本地 `source` 的字节写入目标 PE 的对称对象，`dest` 用调用方的对应对称地址表示；`get` 则从目标 PE 的对称 `source` 读取到本地 `dest`。`nelems` 在这两个 `mem` 接口中是字节数。远端一侧不需要发布匹配的 receive，但生产者仍须保证源数据已就绪，消费者仍须知道写入何时完成。

通信可从 CUDA kernel 内发起，并依传输后端利用 NVLink 或 GPUDirect RDMA。由此能减少 CPU 参与，不意味着所有配置都完全硬件卸载，也不意味着接收端可以不做任何同步。与 MPI 双边收发相比，差别是无需匹配 receive；MPI 本身也提供单边通信接口。

`nvshmem_quiet()` 等待相关执行域中本 PE 先前发起的远端操作完成；`nvshmem_barrier_all()` 还要求参与 PE 到达全局屏障。Host 与 device 发起操作的排序域不能混用：CPU 上调用 quiet 不能被当作等待所有 GPU 发起通信的通用办法。CUDA stream 中的通信与计算还需使用相应 stream API 或显式依赖，见 [API ordering](https://docs.nvidia.com/nvshmem/api/latest/api/overview.html) 与 [CUDA interactions](https://docs.nvidia.com/nvshmem/api/latest/cuda-interactions.html)。

因此一次 `put` 之后的典型问题有两个：发送方何时能复用 source，接收方何时能消费 dest。全局 barrier 容易建立共同边界，却使无关 PE 也参与等待；更细粒度的信号与等待可缩小同步范围，但必须由协议正确维护数据先于信号可见的顺序。

## 初始化：先建立参与者，再分配对称内存

Unique ID 负责让各进程加入同一通信实例，不负责为应用广播数据。根进程生成 ID，借助 PyTorch distributed 等已有通道分发；各进程再用相同 ID、各自 rank 和总 rank 数初始化 NVSHMEM。教程 [`csrc/nvshmem.hpp`](https://github.com/KuangjuX/NVSHMEM-Tutorial/blob/e6c64f4f148ccb20ae5ec428420ef25ba4788715/csrc/nvshmem.hpp) 中的两个关键步骤如下。

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

## Team：同步范围与物理通信路径是两件事

Team 是 PE 的有序子集，成员在 Team 内具有本地 rank。例如将 16 个 PE 分成两个 8-PE Team 后，集合操作可以只覆盖所需的 8 个参与者。`nvshmem_broadcastmem` 从组内根节点广播，`nvshmem_alltoallmem` 让每个 PE 与其他成员交换相应的数据块。缩小参与集合可以避免不相关 PE 等待，但是否更快仍取决于拓扑、数据量和算法，创建 Team 不会自动选择全局最优路径。

DeepEP 的两种模式体现了“通信实例”和“子组”之间的差别。在 [`309785a9` 的 Buffer 初始化](https://github.com/deepseek-ai/DeepEP/blob/309785a94dedeb9ca3cb01091048584a31bfc799/deep_ep/buffer.py) 中：

- Normal 模式由 `rdma_rank == 0` 的各 GPU 生成 ID，不同节点相同 `nvl_rank` 的 GPU 使用对应 ID，构成跨节点的同号 GPU 通信实例；节点内再用 NVLink 转发。
- Low-latency 模式由全局 rank 0 生成 ID，所有 GPU 加入同一 NVSHMEM 实例。跨多个节点时，[`internode::init`](https://github.com/deepseek-ai/DeepEP/blob/309785a94dedeb9ca3cb01091048584a31bfc799/csrc/kernels/runtime.cu) 用 `start=rank % NUM_MAX_NVL_PEERS`、`stride=NUM_MAX_NVL_PEERS` 创建跨节点同号 GPU 的子 Team，而不是把每个节点切成一个 Team。

例如每节点 8 卡、总共 16 卡时，start=2、stride=8 的组为 `{2,10}`。这组参与者的构成说明同步对象，不能单独证明载荷走 RDMA 还是 NVLink。该版本允许 low-latency 使用 NVLink；传输和接收 hook 的重叠代价见 [DeepEP 通信设计](overview.md)。
