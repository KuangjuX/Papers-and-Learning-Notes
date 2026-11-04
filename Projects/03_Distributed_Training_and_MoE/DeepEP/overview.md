# DeepEP：MoE 通信如何兼顾吞吐与计算重叠

MoE 的每个 token 只去少数专家，但专家分布在不同 GPU 上。通信既要根据路由结果整理数据，又要跨越带宽不同的 NVLink 与 RDMA 域。DeepEP 将这两件事放进 dispatch/combine 路径：dispatch 把 token 送到专家，combine 将专家输出按路由权重合回源 token。它消费已经计算好的 `topk_idx`，并不替模型计算 router 的 Top-K。

接口与版本依据：[DeepEP `309785a9`](https://github.com/deepseek-ai/DeepEP/tree/309785a94dedeb9ca3cb01091048584a31bfc799)。原始阅读背景见[年度总结](../../../Foundations/05_Model_Architecture_and_Reasoning/Research-Reviews/llm-2025.md)；通信初始化的独立实践见 [NVSHMEM Buffer](zhihu-reading.md)。

## 大批次：先减少跨慢链路的重复传输

Normal kernel 面向训练和 prefill 等吞吐场景。`get_dispatch_layout(topk_idx, num_experts)` 先计算每个 rank、远端节点和专家的 token 数，以及 `is_token_in_rank`。例如一个 token 的两个目标专家都在同一个 rank，通信层可以向该 rank 发送一份 token，再由接收侧按专家组织；不必为每个专家各传一份相同向量。

跨节点时，NVLink/RDMA 转发进一步利用这种共享：向目标节点传入所需 token，再在目标节点分发到目标 GPU，减少慢链路上的重复载荷。这与 DeepSeek-V3 的 group-limited routing 配合，但代价是额外的布局统计、转发缓冲区和生产消费同步。路由模式越分散，能共享的传输越少。实现入口见 [`Buffer.dispatch`](https://github.com/deepseek-ai/DeepEP/blob/309785a94dedeb9ca3cb01091048584a31bfc799/deep_ep/buffer.py)。

FP8 dispatch 还减少了载荷宽度；BF16 数据元素为 2 B，FP8 为 1 B，但实际通信仍包含 scale、路由元数据和协议开销，不能直接把带宽收益写成端到端翻倍。combine 使用 BF16 的测试也不能与 FP8 dispatch 混成同一数据量口径。

[该版本 README 的 normal 测试](https://github.com/deepseek-ai/DeepEP/blob/309785a94dedeb9ca3cb01091048584a31bfc799/README.md#normal-kernels-with-nvlink-and-rdma-forwarding) 使用 H800、每 GPU 一张 CX7 400 Gb/s 网卡，batch 为 4096 token、hidden 为 7168、top-4 groups、top-8 experts，FP8 dispatch、BF16 combine。节点内 EP=8 时报告 dispatch 153 GB/s、combine 158 GB/s，接近其所列约 160 GB/s NVLink 带宽。这是特定通信测试的结果，不含 MoE GEMM，也没有在这张表中给出同设置的 NCCL 对照；不能据此断言 NCCL 总是发送无效 token 或无法重叠。

## 重叠的成本：通信也需要执行资源和依赖管理

Normal 路径通过独立通信 stream 与 event 管理输入就绪和结果消费，并允许控制通信使用的 SM 数。示例 `Buffer.set_num_sms(20)` 是可调配置，不代表任意 GPU 都有固定的“20 个通信 SM + 112 个计算 SM”。通信工作量和 SM 预算过小会拖长传输，过大则可能压缩 GEMM 的资源；最终收益取决于两侧能否同时推进。

`async_finish=True` 返回事件，调用方必须在使用接收结果之前建立等待依赖。省去 CPU 阻塞不等于结果立刻可用，也不保证 GPU 上两个 stream 的工作完全重叠。Normal 路径的 API 示例把 dispatch、专家计算和 combine 的依赖明确串起来，见 [README 用法](https://github.com/deepseek-ai/DeepEP/blob/309785a94dedeb9ca3cb01091048584a31bfc799/README.md#interfaces-and-examples)。

## 小批次：把接收等待推迟到真正消费结果时

Decode 的 token 少，批量聚合的吞吐优势可能抵不过额外延迟。Low-latency 路径提供 `return_recv_hook=True`：先发起发送，返回接收 hook，在消费数据前再调用 hook 完成接收侧工作。这样可以把另一 microbatch 的计算放进网络传输窗口；后台 NIC 传输阶段不持续占用计算 SM，但 GPU 侧发送、接收和合并仍然有工作，不能把整个路径称为“零 SM”。

该策略要求调度器找到独立计算填入窗口，并为两批数据及通信缓冲区保留空间。README 明确指出 low-latency buffer 的空间需求大于 normal 模式，也不提供 normal 路径同样的 SM 控制 API。若没有足够长的独立计算，hook 只改变等待位置，不能消除网络延迟。

[历史性能表](https://github.com/deepseek-ai/DeepEP/blob/309785a94dedeb9ca3cb01091048584a31bfc799/README.md#low-latency-kernels-with-pure-rdma) 使用 H800 + CX7、128 token/batch、hidden 7168、top-8 experts，与 normal 表的 batch 不同，不宜直接比较两表来证明模式优劣。早期 low-latency 采用 pure RDMA；该固定版本已包含 `allow_nvlink_for_low_latency_mode=True`，因此“节点内也始终走 RDMA”只适用于早期配置，而不是此版本的一般行为。
