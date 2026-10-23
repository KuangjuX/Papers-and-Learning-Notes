# 推理的计算、访存与复用成本

来源：Notion 9.3 的 batch / Prefill / Decode / Grouped GEMM 与 9.16 Prefix Caching 问题，见 [归档入口](../07_Books_and_Technical_References/Interview-AI-Infra/index.md)。原文提供了前两项概览，Prefix Caching 只记录题目；以下成本模型、比较与例子为 AI 整理补充。

## Prefill 与 Decode 如何影响矩阵形状

Prefill 处理输入 prompt，通常有多个 query token；逐步自回归 Decode 通常每个活跃请求在每一步处理一个新 token，并复用已有 KV。Decode 不需要重新加载全部历史 token 的原始输入来计算，而是读取相应层的历史 K/V。Chunked prefill、混合调度和投机解码会改变单次执行形状，不能把所有推理都简化为两种固定 batch。

对一个线性层 Y=XW，设 X 为 [M,K]、W 为 [K,N]，一次乘加计 2 FLOPs：

$$
F=2MKN,\qquad
Q_{\mathrm{ideal}}=b(MK+KN+MN),\qquad
I=F/Q_{\mathrm{ideal}}.
$$

其中 b 是每元素字节数，Q 假设输入和权重各读一次、输出写一次，没有额外流量，是理想化估计；I 为 arithmetic intensity。

例：K=N=4096、b=2。M=1 时，F≈33.55 MFLOPs，Q≈33.57 MB，I≈1 FLOP/byte。M=128 时，F≈4.295 GFLOPs，Q≈35.65 MB，I≈120.47 FLOPs/byte。增加 M 让同一份权重服务更多 token，提高理想数据复用；并不意味着端到端时延同比改善。

若权重流量占主导且 K、N 足够大，上式可近似 I≈2M/b。例：FP16/BF16 的 b=2，则 I≈M；M=1 对应约 1，M=128 近似 128，而精确模型为 120.47，差异来自输入输出流量已经不可忽略。

## “小 batch 访存受限”需要说明是哪条路径

Roofline 可用下面的理想时间下界帮助定位：

$$
T\ge\max(F/P_{\mathrm{peak}}, Q/BW),
$$

P_peak 为相应 dtype / 指令路径的峰值算力，BW 为相关存储层带宽。例：假想 P_peak=100 TFLOPs/s、BW=1 TB/s，上面 M=1 的线性层算力下界约 0.336 微秒、流量下界约 33.57 微秒，理想模型表现为带宽约束。此例仅说明数量级，未计 launch、同步、缓存命中及实际效率，不是某张 GPU 的测试结果。

Decode 既可能受权重读取影响，也可能受长上下文 KV 读取影响。单步读取的历史 KV 元素量可粗略写为：

$$
Q_{\mathrm{KV}}\approx 2bB L H_{\mathrm{KV}}d.
$$

例：B=8、L=4096、KV heads=8、d=128、b=2，每层仅 K/V 就约 128 MiB。GQA 使 KV heads 少于 query heads，可减少这一部分存储，但不保证实际 kernel 不产生重复读取。公式未计新 KV 写入、元数据、其他层与缓存效果。

所以 Prefill 常有更大的矩阵、更容易发挥算力；Decode 常更依赖内存带宽。但大 batch Decode 也能提高线性层权重复用，小 prompt Prefill 也可能受 launch 或带宽影响，应按算子和形状分别判断。背景参考：[NVIDIA Matrix Multiplication Background](https://docs.nvidia.com/deeplearning/performance/dl-performance-matrix-multiplication/index.html)。

## Grouped GEMM：把多个独立问题交给一次调度

Grouped GEMM 处理一组可能不同形状的矩阵乘法，而 strided batched GEMM 通常针对相同形状与规则地址间隔。MoE 中各专家接收到的 token 数不同，产生不同 M 的 GEMM，正是典型使用场景；前置关系见 [MoE 计算成本](../03_Distributed_Training_and_MoE/MoE/moe-math-and-cost.md)。

调度粒度通常可以是输出 tile，不必“一 block 对应一个完整 GEMM”。本机 Triton 教程 `08-grouped-gemm.py`（commit `b575c0c38d428a609e25487db64051a5fa7bfab8`）将各问题展开为连续 tile 区间，program 根据 tile ID 定位问题与 tile 坐标，再以 NUM_SM 为步长处理后续 tile；它使用静态循环分配，并非必须依赖全局原子任务队列。

例：GEMM A 为 (M,N,K)=(64,128,256)，B 为 (192,128,256)，tile 为 64×64，则 A 有 2 个输出 tile，B 有 6 个，总共 8 个。4 个逻辑 worker 可先处理 tile 0…3，再各自处理 4…7；不需要把整个 B 独占地绑定给一个 block。这里只解释 tile 数量，不是该教程对所有尾部形状均正确的保证。来源：[固定版本的 Group GEMM 教程](https://github.com/triton-lang/triton/blob/b575c0c38d428a609e25487db64051a5fa7bfab8/python/tutorials/08-grouped-gemm.py)。

| 比较点 | Grouped GEMM | Multi-Stream GEMM |
| --- | --- | --- |
| 提交方式 | 一组问题在统一 kernel/调度内处理 | 多次独立库调用或 kernel launch |
| 可能收益 | 摊销 launch，跨问题分配 tile，改善小问题利用率 | 利用成熟单 GEMM 实现，独立选择算法，组织灵活 |
| 主要代价 | 元数据、动态形状、尾部浪费、问题间负载差异 | 多次 launch，并发受资源约束，可能互相争用 |
| 判断依据 | 实际问题集合、tile 分布、kernel 支持 | 单问题效率、并发资源、stream 依赖 |

两者都不保证更快。应比较相同输入、精度与总工作量，并记录单个/总时延、有效吞吐和 GPU 利用率。

## Prefix Caching：复用已计算的前缀 KV

原 Notion 这里只留了“了解 Prefix Caching”题目。整理补充：在 causal Transformer、模型及计算配置一致时，若请求共享完全相同的 token 前缀，对应层的前缀 KV 可以复用，减少重复 Prefill。共享前缀的 token 数决定可复用范围；输出文本相似不等于 token 前缀相同。

例：两次请求的 token 分别为 `[A,B,C,D]` 与 `[A,B,C,E]`，前三个 token 的 KV 可以成为复用候选，最后一个分支各自计算。若只是后缀相同，前面的上下文不同，通常不能这样复用。

Cache key 与有效性还涉及模型权重版本、adapter、位置/编码规则、可能的多模态输入及后端要求；内存回收需要引用与生命周期管理。命中减少的是重算量，仍有查找、加载与容量成本，也不能消除 Decode 对历史 KV 的读取。项目入口见 [SGLang 现有笔记](../../Projects/02_Inference_and_KV_Cache/SGLang/index.md)；这里不将通用说明当作某个 SGLang 版本的代码结论。
