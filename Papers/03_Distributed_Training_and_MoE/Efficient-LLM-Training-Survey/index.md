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

大模型训练中的存储承担两种不同职责：持续供给训练数据，以及可靠保存已经完成的训练进度。前者跟不上计算，会让 GPU 等待；后者保存缓慢或无法恢复，会增加停顿和故障后的重算成本。因此，选择存储系统需要同时考虑访问方式、有效吞吐、数据完整性和故障边界。

[Duan 等，arXiv:2407.20018v1](https://arxiv.org/abs/2407.20018v1)，§3.3 Storage；[Zotero](zotero://select/library/items/3FACA9QB)。

## Checkpoint 保存什么，才能继续训练

Checkpoint 包含某个训练时刻的权重，但用于恢复训练的完整存档通常还需要优化器、训练进度等状态。仅导出模型权重可以用于推理，也可以作为新一轮训练的初始值；它不一定足以续接原来的训练过程。

| 状态 | 恢复时的作用 |
| --- | --- |
| 模型权重与必要的模型 buffers | 恢复当时的模型状态 |
| 优化器状态 | 例如 Adam 的一阶、二阶矩，续接历史梯度统计 |
| global step、学习率调度器等状态 | 恢复训练进度及相应的更新设置 |
| 随机数、数据采样器等状态 | 按恢复目标续接随机过程、数据读取位置与顺序 |

例如第 10,000 step 完成后保存 checkpoint，第 10,300 step 故障，恢复时只能从已经可靠保存的状态继续，尚未保存的进度需要重做。如果只加载权重而重新初始化 Adam，历史统计被清零，即使下一批数据相同，参数更新也可能与不中断训练时不同。[PyTorch 保存与加载教程，Saving & Loading a General Checkpoint](https://docs.pytorch.org/tutorials/beginner/saving_loading_models.html#saving-loading-a-general-checkpoint-for-inference-and-or-resuming-training) 明确区分了模型状态与恢复训练所需的优化器等状态。

Checkpoint 也不等于显存的完整拷贝。在参数更新结束的边界保存，通常不需要保留上一轮前向传播的全部中间激活；若要在其他执行位置恢复，保存内容会不同。上表中的随机数和采样状态属于恢复语义的补充解释，具体支持取决于训练框架；即使恢复了这些状态，也不自动保证逐位一致。

## 为什么区分 Checkpoint Storage 与 Training Data Storage

论文 §3.3 按用途区分两类存储负载。训练数据是计算的输入，checkpoint 是训练产生的状态快照，两者的读写节奏不同。

| 维度 | Checkpoint Storage | Training Data Storage |
| --- | --- | --- |
| 主要内容 | 模型及其他恢复状态的版本化快照 | 文本、token 数据及数据准备产物 |
| 典型访问 | 周期性集中写入，启动或恢复时大量读取 | 数据准备时写入，训练期间持续读取 batch |
| 性能目标 | 降低保存阻塞，缩短恢复时间 | 稳定供给数据，减少 GPU 等待 |
| 正确性重点 | 分片完整、属于同一个一致状态、故障后可恢复 | 数据内容与版本正确，采样和分片符合训练要求 |

这是工作负载分类，不是存储产品的用途限制。同一个系统可以同时存两类数据；它们也可能争用相同的磁盘和网络。作为机制上的推论，集中写 checkpoint 即使没有阻塞训练线程，也可能挤占数据读取带宽，间接影响后续 batch 的供给。[原文 §3.3.1–§3.3.2](https://arxiv.org/html/2407.20018v1#S3.SS3)

## 文件系统、对象存储与缓存分别解决什么问题

文件系统提供目录、路径和文件操作；对象存储通过对象 key 和接口存取数据；缓存将数据放到更靠近计算的位置；编排系统管理数据及缓存资源。它们处在不同层次，因此论文 Fig. 4 中的名字并不是一组互斥产品，也不能直接排列成性能高低。

| 系统 | 主要定位 | 与训练存储问题的联系 |
| --- | --- | --- |
| Tectonic、HDFS | 分布式文件系统 | 在多台存储服务器上组织文件，论文列举其用于 checkpoint 的部署案例 |
| Ceph Object Storage | 对象存储接口 | 以 bucket 和对象 key 组织数据，提供容量扩展与持久存储 |
| Lustre、GPFS、BeeGFS | 并行文件系统 | 支持多个计算节点并发访问共享文件，聚合存储端 I/O 能力 |
| Alluxio | 数据访问与缓存层 | 从较慢后端预取、缓存数据，缩短数据访问路径 |
| JuiceFS | 以对象存储为数据后端的分布式文件系统 | 提供文件接口，独立管理元数据，并通过缓存加速访问 |
| Quiver | 面向深度学习的缓存系统 | 利用训练访问特征及多任务间的数据复用 |
| Fluid | 数据编排与加速管理系统 | 管理数据集及缓存运行时，调节缓存资源 |

分类对应论文 §3.3 与 Fig. 4；系统职责补充见 [JuiceFS 架构](https://juicefs.com/docs/community/architecture/)、[Quiver 原论文](https://www.usenix.org/conference/fast20/presentation/kumar)、[Fluid 项目](https://github.com/fluid-cloudnative/fluid)。

这些层次各自有不同约束。HDFS 面向大文件和流式访问，并不提供完整的本地 POSIX 文件系统语义；Lustre 可以将文件数据条带化到多个存储目标上，让并行访问利用多台服务器带宽。缓存可以减少慢后端访问，但冷缓存读取仍受后端能力限制。预取即使没有跨 epoch 的重复读取，也可以提前搬运数据、吸收一部分访问延迟；它无法长期弥补后端持续吞吐不足。[HDFS 架构](https://hadoop.apache.org/docs/r3.4.3/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html)、[Lustre 架构](https://wiki.lustre.org/Lustre_Architecture_for_Admins)、[综述 §3.3.2](https://arxiv.org/html/2407.20018v1#S3.SS3)

### CephFS 与 Ceph Object Storage 不能混为一谈

CephFS 是构建在 Ceph 分布式对象存储 RADOS 上的 POSIX 文件系统，文件元数据由 Metadata Server（MDS）管理，客户端直接访问 RADOS 中的文件数据。Ceph Object Gateway（RGW）则提供 S3 等对象访问接口。它们属于同一 Ceph 平台的不同访问方式；论文图中的 Ceph Object Storage 不等于 CephFS。[CephFS 官方架构](https://docs.ceph.com/en/latest/cephfs/)、[Ceph Object Gateway](https://docs.ceph.com/en/latest/radosgw/)

JuiceFS 同样不能只理解为缓存。它需要管理自己的目录、权限和文件到数据块的映射，文件数据通常存入对象后端，元数据由独立引擎保存。理解实际数据路径时，需要把文件接口、元数据服务、缓存与持久数据后端分别识别出来。[JuiceFS 架构](https://juicefs.com/docs/community/architecture/)

## Lustre、JuiceFS、CephFS 为什么可以混用

同一训练任务需要的数据来源和读写需求不必由一种系统承担。不同存储可以并列使用，也可以形成上下层组合；是否合理取决于分工、数据路径及持久化边界。

**并列使用**时，程序通过不同挂载路径访问不同系统。一个解释性的部署例子是：从带缓存的 JuiceFS 读取数据集，在配置合适的 Lustre 上执行大吞吐读写或暂存 checkpoint，通过 CephFS 访问共享工作目录、配置和日志。这个分工并非固定规则，也不是对实际集群配置的认定：三者均可承载训练数据或 checkpoint，可靠性与性能取决于部署，不能仅凭名字把某个系统等同于临时盘或最终归档。

**上下层组合**时，一种系统可以使用另一平台提供的后端。例如 JuiceFS 使用 Ceph 的 S3 兼容对象服务，数据路径可以是：

```text
训练程序 → JuiceFS 客户端 → Ceph RGW → RADOS
                     ↘ 独立的 JuiceFS 元数据引擎

训练程序 → CephFS 客户端 → RADOS（文件数据）
                    ↘ Ceph MDS（文件元数据）
```

这是根据官方架构给出的组合示意；JuiceFS 访问 Ceph 对象服务并不意味着经过 CephFS。JuiceFS 支持 Ceph 对象后端，而 CephFS 使用自己的文件元数据服务。[JuiceFS 架构](https://juicefs.com/docs/community/architecture/)、[CephFS 架构](https://docs.ceph.com/en/latest/cephfs/)

由此可以推论：如果两个入口实际共用同一套 RADOS 集群，它们仍可能争用底层磁盘和网络。不同挂载路径不代表性能或故障相互隔离。仅观察到三种系统同时存在，还不足以判断其分工是否合适；这一判断依赖实际挂载、后端配置、共享资源和测量结果。

## 保存速度与可靠恢复的代价

存储设计需要同时考察容量与成本、持续读吞吐、集中写入与恢复耗时，以及保存完成时真正到达的持久化层。多个 checkpoint 版本和存储冗余会放大物理空间；大量小文件则可能让元数据操作成为瓶颈，不能仅看大文件顺序带宽。

以一个教学算例说明写入代价：checkpoint 大小为 $C$，整条路径可持续达到的有效写带宽为 $B$，忽略序列化、同步和其他开销时，传输时间满足 $T \ge C/B$。若 $C=1\,\mathrm{TB}$、$B=20\,\mathrm{GB/s}$，均采用十进制单位，则至少需要 $1000/20=50\,\mathrm{s}$。这是理想下界，不是实测性能，也不是某个产品的吞吐承诺。

异步保存将一部分写入与后续训练重叠，可以减少暴露在训练关键路径上的时间，但数据仍需传输，并且快照内容不能被后续参数更新破坏。相比只看保存函数何时返回，更有意义的是区分：一致快照何时形成、可靠副本何时完成、故障后何时能重新开始有效训练。关于快照与持久化流水，见[综述 §8.3 Checkpoint-Based Recovery](https://arxiv.org/html/2407.20018v1#S8.SS3)。

作为上述恢复语义的工程推论，跨存储转存需要在目的端确认分片和必要元数据完整、校验通过后，才将该版本发布为可恢复存档。路径已经出现，不能说明全部数据已经到齐；跨文件系统搬运也不能视为一次原子 rename。暂存副本与最终持久副本的完成时间、保留策略和可承受故障范围，是判断混合存储设计的重要边界。
