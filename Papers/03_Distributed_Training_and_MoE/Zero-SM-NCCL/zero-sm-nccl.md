---
tags:
  - papers/llm-training
  - topics/communication-computation-overlap
aliases:
  - Zero-SM NCCL
  - SM-Free GPU Communication
arxiv: "2611.18075"
---

# Zero-SM NCCL: A Systematic Guide to Designing and Deploying SM-Free GPU Communication

## Background

传统 NCCL 不仅用 SM 搬运数据，也用通信 kernel 轮询信号、执行 barrier 和跟踪完成状态；这些工作会与并行运行的计算争用 SM。仅将数据搬运交给 Copy Engine（CE）或网卡 DMA，仍不足以消除同步占用。Zero-SM NCCL 同时卸载搬运与同步，并要求通信保留 CUDA stream 顺序：先前工作完成后才能开始通信，依赖通信完成的后续工作才能继续。[§II-C、§III-A，pp.2–3][background]

这里的接口是 **host-initiated API**：CPU 向 CUDA stream 提交操作。GIN 等 device-initiated API 从 GPU kernel 内发起通信，适合与计算融合，但仍需要 SM。论文中 zero-SM 的要求是整项通信操作不启动 GPU kernel、不消耗 SM，而不只是传输期间不持续占用 SM。[§II-C、§III-A，pp.2–3][background]

方案依赖对称内存注册，使各 rank 预先取得对端数据缓冲区和信号地址；域内可通过 NVLink/PCIe 直接访问，跨域可经 GPUDirect RDMA 写入。支持范围是 AllGather、AlltoAll、Gather、Scatter 等纯数据搬运，以及单边 put/wait；需要算术归约的 AllReduce、ReduceScatter 尚未支持 zero-SM 模式。整体架构见[图 2，p.3][architecture]。

## Zero-SM Communication Design

`ncclPutSignal` 向对端注册内存写入数据，完成后更新远端信号；`ncclWaitSignal` 阻塞接收端的 CUDA stream，直到信号达到期望值。同步通过 `cuStreamWriteValue64`、`cuStreamWaitValue64` 等 stream memory operations 执行，无需轮询 kernel。普通 stream 执行使用单调递增的序号，每轮等待本轮值，避免上一轮信号错误放行。[§III-B/C，pp.3–5][protocol]

两条传输路径使用相同的“数据先于信号”语义，但推进机制不同：[图 3，p.4][protocol]

1. **Scale-up：CE 搬运。** 发送端依次提交数据到对端 buffer 的 CE copy、向本地 device staging word 写入本轮序号的 stream memory operation、把该序号复制到对端 signal 的 CE copy。需要本地 staging，是因为文中使用的 stream memory operation 不能直接写远端 GPU，而 CE copy 只能搬字节，不能对远端信号做原子递增。接收端等到信号后才能消费数据。
2. **Scale-out：CPU proxy 驱动 RDMA。** 主线程将传输描述符放入 CPU 队列，并在 stream 中提交 `ready=seq` 和等待 `done>=seq`。Proxy 同时检查描述符与 ready；只有 GPU 已完成源数据生产，才向网络插件提交 RDMA。插件保证远端信号晚于 payload 可见；proxy 检测传输完成后写 done，放行发送端 stream，接收端则等待自己的远端信号。单纯从 CPU 调用 RDMA 不能提供这种与 CUDA stream 的前后依赖。

CUDA Graph 重放需要另一套协议。捕获后，wait 的期望序号固定；若上次重放留下了满足条件的值，下次可能提前通过。作者因此使用 graph-private flags，在每次重放内由生产者置位、消费者清除，并加入确认操作，使下一次必须观察到新一轮状态变化。正确性代价是额外的 stream memory operations。[§III-B，pp.3–4][protocol]

## AllGather

域内 CE AllGather 包含三阶段：先用 ready barrier 确认所有目标 buffer 可写，各 rank 再把本地数据复制到对端对应位置，最后用 completion barrier 保证后续计算看到完整结果。为减少 CPU 调用开销，作者批量提交 CE copies 和 stream memory operations；NVLS 可用时，可通过 multicast 地址一次分发给多个 GPU。对 out-of-place AllGather 的本地 self-copy，论文还使用 `cudaMemcpyFlagPreferOverlapWithCompute` 选择 CE，避免同设备拷贝落到 SM 路径。[§III-D1，p.5][collectives]

跨域 AllGather 把不同 scale-up 域中 local rank 相同的 GPU 组成 rail，由 proxy 在 rail 上交换数据，再由 CE 向域内其他 GPU 分发。流程是 rail 入口同步、提交分块的 grouped puts、域内 ready barrier 与本地数据广播、逐块等待远端到达并立即分发，最后确认发出的 puts 完成并执行域内结束 barrier。关键是收到一个 chunk 就能开始域内复制，无需等待整个网络交换结束；较小 chunk 增加重叠机会，也增加同步开销。[§III-D2、图 4，pp.5–6][hierarchical]

文中还按节点数与消息大小选择 direct、pipelined 或 ring rail schedule。实验使用 **NCCL 2.32.3 加论文补丁**；pipelined schedule 与相关 tuner 在论文发表时尚未进入已发布版本，不能把全部实验结果视为原版 NCCL 2.32.3 的行为。[§III-D2、§IV-A，p.6][hierarchical]

## Evaluation

作者在 GB200 NVL72 和 B200 NVL8 上评估。前者一个 NVLink 域包含 18 个节点、72 张 GPU，因此不超过 72 GPU 的实验仍走域内 CE；后者每节点 8 GPU 构成一个域，多节点实验使用分层路径。端到端测试包含 32 或 64 GPU 上的 12 个全分片数据并行（FSDP）配置与 7 个流水线并行（PP）配置，二者分开运行。不同方案在同一节点分配上配对、轮换顺序，去除 warm-up 后按三个 block 报告均值与标准差；结果不是完整预训练跑完后的总耗时。[§IV-A、§IV-D、表 I/II，pp.6、8–9][setup]

| 实验 | 设置与基线 | 作者报告的结果 | 证据 |
| --- | --- | --- | --- |
| AllGather 微基准 | 单 NVLink 域；4 GiB 消息；CE、symmetric 与 legacy ring | CE 为 714–746 GB/s，symmetric 为 537–678 GB/s，legacy 为 613–698 GB/s；单节点 1 KiB 时 CE 延迟为 25–29 μs，SM kernels 为 12–18 μs | [§IV-B2、图 6，p.7][microbench] |
| GEMM 重叠 | 单个 B200 NVL8 节点；Qwen3-30B-A3B 的 100 个 MXFP8 GEMMs 与 144 MiB/rank AllGather 重叠 | 仅对各方案下减速超过 1% 的 GEMM 分别统计减速中位数（并非全部 100 个）：CE 为 3.9%（34 个），legacy ring（32 CTAs）为 32.9%（47 个），symmetric（4 CTAs）为 6.2%（26 个） | [图 1B，p.1](https://arxiv.org/pdf/2611.18075v1#page=1)、[§IV-C、图 7，p.8][overlap] |
| FSDP | 只替换参数 AllGather；与 legacy ring 比较 | GPU-bound dense 配置最高加速：GB200 为 3.5%，B200 为 1.9%；与低 CTA 的 symmetric kernel 比较则有胜有负 | [§IV-D1、图 8，pp.9–10][fsdp] |
| PP | 单边 put/wait 替换两边 Send/Recv | Qwen3-Next 在 GB200 上最高加速 14.9%；浅流水线不一定受益，Qwen3-32B 在 B200 上退化 3.9% | [§IV-D2、图 9，p.10][pp] |

GEMM 统计中不同方案影响的 GEMM 数量和所处通信阶段不同，不能将减速中位数当作整条链或训练 step 的加速；作者将 CE 剩余干扰归因于内存竞争。[§IV-C，p.8][overlap]

FSDP 的取舍同时取决于 **host 开销、消息大小和并发流量**。论文报告，提交一次 CE AllGather 的 host 时间在 GB200 上为 26–41 μs，symmetric kernel 为 11–17 μs；B200 上分别为 77–86 μs 和 5–7 μs。只有 host 能提前提交足够工作时，这部分开销才可能留在关键路径之外。对单 NVLink 域的微基准，CE 通常到 128–512 MiB 才超过 symmetric 的带宽；这些是实验中的交叉点，不是通用启用阈值。[§IV-B2、§IV-D1，pp.7、9][fsdp]

通信之间也会相互干扰。Multicast 只注入一份数据，但推进速度受最拥塞目的端约束；论文观察到，GB200 上并发张量并行（TP）流量集中到少数 peer 时，一个拥塞链路会拖住整次 multicast，而独立 unicast copies 仍可分别推进。链路空闲或负载分布较均匀时，multicast 则可能更有利。因此，单独测得最快的 AllGather 路径未必适合混合并行训练。[§IV-D1，p.10][pp]

PP 的主要收益来自**改变同步方式**。不同 stage 因层数、首尾 embedding/loss 和专家负载不同，完成 microbatch 的时间并不一致；Send/Recv rendezvous 会让较快 stage 等待邻居。单边 put 写入预分配的接收 slot 后可继续，接收端到消费时才等待数据。作者报告释放 SM 对计算的帮助最多约 1–2%，主要加速来自消除这些边界等待，因而不能把最高 14.9% 全部归因于 Zero-SM。[§IV-D2，p.10][pp]

代价是每次 put 的 host 提交与同步，以及把普通 PyTorch 内存中的 activation/gradient 复制到注册 staging buffer。实现按流水线 warm-up 深度准备接收 slots，接收端原地消费。深流水线有较多等待可消除时更有利；浅流水线或高度交错、传输频繁的配置，新增固定开销可能抵消收益。论文对 EP AlltoAll 仅说明可替换路径，没有给出与 FSDP/PP 等价的端到端收益验证。[§IV-D，pp.8–10][setup]

## NCCL 发布历史与 DeepEP-v2

核心功能早于论文的 2026-11-13 arXiv 提交：NCCL 2.28.3 在 2025-10-06 的公告中已介绍单个 NVLink 域内的 CE collectives，使用对称内存注册及 `NCCL_CTA_POLICY_ZERO`；NCCL 2.29.2 的 release notes 已列出 zero-SM 的 `ncclPutSignal` / `ncclWaitSignal`，并明确 NVLink 走 CE、网络走 CPU proxy。[2.28.3 公告][nccl228]、[2.29.2 release notes][nccl229]、[论文提交记录][paper]

DeepEP-v2 的发布 PR 于 2026-04-29 合并。对其中 2026-04-23 的提交 `41518903e065390a0532be9ce6f8b922bdf53061`，需要按路径区分，不能因“0 SM”标签就认定直接使用了论文的 NCCL host API：[PR #605 的提交记录][deep-ep-release]

| DeepEP 路径 | 固定版本的实现 | 与本文的关系 |
| --- | --- | --- |
| 上下文并行（CP）AllGather | `csrc/elastic/buffer.hpp::all_gather` 构造对端地址，调用 `cudaMemcpyBatchAsync`，随后 `cuda_driver::batched_write_and_wait` | 采用相近的 CE 搬运与同步路线；该入口直接组织 CUDA 操作，并非调用 NCCL CE AllGather |
| EP dispatch | 同文件调用 `launch_dispatch`，向通信 kernel 传入 SM 数等配置，并要求 `num_sms > 0` | 仍有通信 kernel，不能等同于本文不启动 kernel 的要求 |
| PP | 同文件调用 `launch_pp_send` / `launch_pp_recv`；`num_sms=0` 转换为设备全部 SM 数 | 不是 zero-SM 开关；Python 文档也注明 0 表示全部 SM |
| Engram | `engram_fetch` 调用 `launch_engram_fetch`，返回的 hook 再调用 `launch_engram_fetch_wait` | 发起和等待仍通过 kernel 完成，不能把网络传输与整个操作的 SM 使用混为一谈 |

源码：[C++ `csrc/elastic/buffer.hpp`][deep-ep-cpp]、[Python `deep_ep/buffers/elastic.py`][deep-ep-python]。这些结论只对应上述版本，不外推到后续 DeepEP 实现。

**个人判断（KuangjuX）**：这篇工作主要像是在介绍一个 Zero-SM API feature；相关能力是否早已存在、除了接口还有什么值得关注，是阅读时的核心疑问。[讨论记录][discussion]

**AI 解读**：发布记录支持“基础能力更早存在”，但论文不止列出 API；它解释了域内/跨域的 stream 顺序、Graph 重放协议和分层 AllGather，并用训练实验区分资源竞争、CPU 提交、并发网络流量与 stage 等待。其阅读价值更偏向这些部署取舍与收益归因。论文没有在相同调度下单独切换“是否占用 SM”来分离 PP 的全部因素，也没有与上述 DeepEP 版本作同条件对照；因此无法据此量化两者的相对收益。[§III、§IV-D，pp.3–10][architecture]

[paper]: https://arxiv.org/abs/2611.18075v1
[background]: https://arxiv.org/pdf/2611.18075v1#page=2
[architecture]: https://arxiv.org/pdf/2611.18075v1#page=3
[protocol]: https://arxiv.org/pdf/2611.18075v1#page=4
[collectives]: https://arxiv.org/pdf/2611.18075v1#page=5
[hierarchical]: https://arxiv.org/pdf/2611.18075v1#page=6
[setup]: https://arxiv.org/pdf/2611.18075v1#page=8
[microbench]: https://arxiv.org/pdf/2611.18075v1#page=7
[overlap]: https://arxiv.org/pdf/2611.18075v1#page=8
[fsdp]: https://arxiv.org/pdf/2611.18075v1#page=9
[pp]: https://arxiv.org/pdf/2611.18075v1#page=10
[nccl228]: https://github.com/NVIDIA/nccl/discussions/1869
[nccl229]: https://github.com/NVIDIA/nccl/releases/tag/v2.29.2-1
[deep-ep-release]: https://github.com/deepseek-ai/DeepEP/pull/605/files
[deep-ep-cpp]: https://github.com/deepseek-ai/DeepEP/blob/41518903e065390a0532be9ce6f8b922bdf53061/csrc/elastic/buffer.hpp
[deep-ep-python]: https://github.com/deepseek-ai/DeepEP/blob/41518903e065390a0532be9ce6f8b922bdf53061/deep_ep/buffers/elastic.py
[discussion]: https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/121#issuecomment-6937876747
