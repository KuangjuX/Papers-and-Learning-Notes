---
tags:
  - papers/llm-training
  - systems/storage
aliases:
  - "Efficient Training of Large Language Models on Distributed Infrastructures: A Survey"
arxiv: "2407.20018"
zotero: "3FACA9QB"
---

# Efficient Training of Large Language Models on Distributed Infrastructures: A Survey

## Checkpoint 与训练恢复

Checkpoint 是某个训练时刻的状态快照。恢复训练通常需要模型权重、优化器状态、step 和学习率调度状态；需要续接数据顺序与随机过程时，还要保存采样器和随机数状态。仅恢复权重会丢失 Adam 等优化器的历史统计，不能等同于从原来的训练状态继续。[PyTorch checkpoint 教程][checkpoint]

在参数更新结束后保存时，通常不需要保留上一轮的中间激活。持久化可以分成快照与写入两个阶段：先取得一致状态，再异步写入存储，减少训练停顿；快照完成和可靠副本写完是两个不同的时刻。[论文 §8.3][recovery]

## 训练数据与 checkpoint 的存储需求

- **Training Data Storage** 保存训练输入，训练期间持续读取 batch，重点是稳定供给与缓存预取，避免 GPU 等待数据。
- **Checkpoint Storage** 周期性集中写入训练状态，恢复时大量读取，重点是保存开销、恢复速度和完整性。

二者按负载区分，可以使用同一套系统。论文 §3.3、Fig. 4 中的系统分别承担文件访问、持久存储、缓存或编排职责，并非只能服务于图中指定的一类数据。[论文 §3.3][storage]

| 系统 | 主要职责 |
| --- | --- |
| Tectonic、HDFS | 分布式文件系统；论文列举其用于 checkpoint 的部署案例 |
| Lustre、GPFS、BeeGFS | 并行文件系统，支持多节点并发访问共享文件 |
| Ceph Object Storage | 通过对象接口存取数据；Ceph RGW 提供 S3 兼容接口 |
| JuiceFS | 提供文件接口，文件数据存入对象后端，元数据由独立引擎管理，并提供缓存 |
| Alluxio、Quiver | 数据缓存与访问加速；Quiver 利用训练访问特征及跨任务复用 |
| Fluid | 编排数据集与缓存运行时，管理缓存资源 |

Lustre 通过将文件数据条带化到多个存储目标上提供并行 I/O；JuiceFS 将文件接口与对象存储后端连接起来。两者的数据组织方式不同，不能只按挂载路径判断其性能。[Lustre 架构][lustre]、[JuiceFS 架构][juicefs]

## Lustre、JuiceFS、CephFS 的混用

三者可以通过不同挂载点并列服务于训练任务，也可以存在上下层组合。**CephFS 是 RADOS 上的 POSIX 文件系统；Ceph RGW 提供对象接口。** JuiceFS 使用 Ceph 对象后端时，并不经过 CephFS。[CephFS 架构][cephfs]、[RGW 文档][rgw]

一种受支持的组合关系是：JuiceFS 客户端经 Ceph RGW 读写 RADOS，元数据使用 JuiceFS 自己的引擎；CephFS 客户端直接访问 RADOS 中的文件数据，由 Ceph MDS 管理文件元数据。[JuiceFS 架构][juicefs]、[CephFS 架构][cephfs]

混用是否合适，取决于实际数据路径、读写负载和持久化边界。同一后端上的不同入口仍可能争用磁盘与网络；checkpoint 是否可恢复，要看完整状态是否已可靠保存，而不是目录是否已经出现。

[checkpoint]: https://docs.pytorch.org/tutorials/beginner/saving_loading_models.html#saving-loading-a-general-checkpoint-for-inference-and-or-resuming-training
[storage]: https://arxiv.org/html/2407.20018v1#S3.SS3
[recovery]: https://arxiv.org/html/2407.20018v1#S8.SS3
[lustre]: https://wiki.lustre.org/Lustre_Architecture_for_Admins
[juicefs]: https://juicefs.com/docs/community/architecture/
[cephfs]: https://docs.ceph.com/en/latest/cephfs/
[rgw]: https://docs.ceph.com/en/latest/radosgw/
