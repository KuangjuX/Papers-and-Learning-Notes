# DeepEP：年度总结中的计算通信重叠摘记

来源：[2025 年度 LLM 研究总结](../../../Foundations/05_Model_Architecture_and_Reasoning/Research-Reviews/llm-2025.md)。

## 要点与边界

- 入门代码与初始化见 [个人 NVSHMEM 教程](zhihu-reading.md)。
- 旧文的固定 SM 数、带宽值以及对 NCCL 的比较均绑定当时平台和实现，不能作当前版本的通用结论。
- “后台传输不占 SM”需要区分 NIC 的数据搬运与 GPU 侧发起、收尾／接收逻辑，不能理解成整个通信路径没有任何 GPU 指令。
- 未记录 DeepEP commit，本文作为历史阅读材料保存。

## 机制与实现

### 计算-通信重叠

今年在实习的时候也接触到了一些 compute-communication overlap 相关的事情，也学习了一些关于 DeepEP[17](https://zhuanlan.zhihu.com/p/1994788371738949558#ref_17) 在通信上的优化和技巧，当时我写了一篇文章：

本来是想写成一个系列的，结果后面因为时间的原因这个项目也没有继续做下去。

DeepEP 总的来说是为了对齐 DeepSeek 提出的 group-limited gated 算法，针对非对称域带宽转发（如 NVLink 到 RDMA）优化内核，兼顾训练和推理。

DeepEP 是设计了一套接口，分别为节点内（intranode）和节点间（internode）共同设计，同时在节点间还分为高吞吐量和低延迟的不同设计。高吞吐量模式（Normal Kernel）面向大批次、长序列的吞吐型场景，主要在训练和推理 Prefill 阶段，而低延迟模式（Low Latency Kernel）主要面向推理的 Decode 阶段。

在节点内只设计了 Normal Kernel 原因在于基于 NVLink 的通信延迟已经足够低了，而在节点间 RDMA 跨节点通信的延迟远高于 NVLink，因此在 Normal Kernel 阶段通过域转发、批量传输将 RDMA 带宽拉满，而在 Low Latency 阶段则是将 RDMA 绕过 SM 进行后台异步传输从而将通信延迟隐藏在计算阶段。

**节点内通信**

在节点内将 GPU SM 设定为偶数，默认为使用 20 个 SM，其他 112 个 SM 作为计算使用，DeepEP 通过将计算任务（MoE 前向/反向）放在 `compute_stream` 中，NVLink 通信任务放在 `comm_stream` 中，两个流并行执行，随后通过 CUDA Event 标记流任务的完成，实现计算与通信的依赖管理，且不阻塞 CPU。 同时 DeepEP 将 Top-K 计算和稀疏通信融合成一个 CUDA Kernel，可以消除 CPU-GPU 交互的间隙。

DeepEP 对 MoE 的节点内通信场景，相比 NCCL 的 All-to-All 实现了吞吐量更高、延迟更低、资源占用更优的优势。根据 DeepEP 在节点内的数据，在 Dispatch 阶段可以达到 153 GB/s，在 Combine 阶段可以达到 158 GB/s，几乎接近 H800 160GB/s 的理论上限。

DeepEP 针对 MoE 有以下几个优化：

- MoE 中每个 Token 仅路由到 Top-K 个 Expert，通过生成 `is_token_in_rank` 矩阵，仅传输目标 Rank 的 Token，过滤无效数据，相比之下 NCCL All-to-All 则是采用了全量传输。
- DeepEP 通过 FP8 低精度传输，将数据宽度从 2B 降到 1B，同等 NVLink 带宽下传输量翻倍。
- DeepEP 通过 SM 精细化调度，通过 SM 专用化，使得将计算 SM 和通信 SM 分离，而 NCCL 的通信 Kernel 则会抢占 SM，计算任务需要等待通信完成。

**节点间通信**

节点间通信分为 Normal kernel 和 Low Latency kernel。

Normal Kernel 首先通过节点内 NVLink 完成 8 卡 Token 聚合，生成节点级 Token，仅通过一次 RDMA 传输传输到目标节点，同时在聚合阶段基于 Top-K 生成 `is_token_in_remote_node` 传输，仅保留目标 Expert 的 Token，过滤掉所有无效数据。

同时，DeepEP 也在节点间通信做了一些硬件特有的优化，尽管 NVSHMEM 直接实现了 IBGDA 的基础能力，但无法直接适配 MoE 稀疏、分层转发的通信需求。比如 NVSHMEM 的 IBGDA 仅实现发送队列，接收逻辑复用共享队列，无法精准管控 RDMA 接收数据的范围，DeeoEP 通过修改 NVSHMEM 让 RDMA 每个通信通道能独立管理已接收/待处理的 RDMA 数据，避免跨节点聚合数据和节点内数据的队列混叠。

Low Latency Kernel 通过 Hook 函数将通信流程卸载到后台运行，不占用 GPU SM 资源，在 Decode 阶段对 SM 的利用率不高，但是对 SM 的响应延迟极高，通过将通信卸载到后台，避免了调度阻塞，让通信与计算完全并行，实现端到端的低延迟。

暂时写那么多，后面想起来再补充...
