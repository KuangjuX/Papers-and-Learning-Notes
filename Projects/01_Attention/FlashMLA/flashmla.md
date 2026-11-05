---
tags:
  - projects/FlashMLA
  - topics/sparse-attention
  - topics/GPU-performance
aliases:
  - FlashMLA
---

# FlashMLA：DSA 的分块、加载重叠与公开性能

Tokenwise sparse attention 为每个 query token 选择不同的 KV 集合，难以像普通 dense attention 那样，让相邻 query 稳定复用同一块 KV。DSA 的 MLA MQA-mode 提供了另一种复用：**同一个 query 的多个 heads 共用一份 Top-k 列表和 latent KV，因此可以沿 head 维组织规则的矩阵计算。** 离散性主要体现在 KV token 的地址上，进入 shared memory 后仍可形成稠密的计算 tile。

DSA 的选择机制与 MLA 投影关系见[已有算法笔记](../../../Papers/01_Attention/DeepSeek-DSA/deepseek-sparse-attention-dsa.md)。下面的 Hopper prefill 实现对应 FlashMLA 的 V3.2 兼容提交 [`ba89a34`][revision]；`64×64` 和 `cp.async` 的描述限定于这条路径，不代表所有架构和后端都采用同样的分块与加载方法。

## 2048 个入选 token 如何变成 64×64 tile

V3.2 主 attention 在 absorbed latent 空间中使用 $d_{QK}=576$、$d_V=512$。其中 576 维包含 512 维 latent 和 64 维 RoPE key，V 使用 latent 的前 512 维。对一个 query token 的一组 64 个 heads，完整的稀疏 attention 计算为：

$$
Q_t\in\mathbb R^{64\times576},\qquad
K_{\mathcal S_t}\in\mathbb R^{2048\times576},\qquad
V_{\mathcal S_t}\in\mathbb R^{2048\times512},
$$

$$
P_t=\operatorname{softmax}\!\left(\alpha Q_tK_{\mathcal S_t}^{\mathsf T}\right),
\qquad O_t=P_tV_{\mathcal S_t}.
$$

$\mathcal S_t$ 是 query $t$ 的入选 token 集合，$\alpha$ 是调用方传入的 attention scale。各 head 共用集合，但仍分别计算自己的 logits、softmax 和输出。按 [Python 接口][interface]，一批 query 的输入为 `q[T,H,576]`、`kv[S,1,576]`、`indices[T,1,2048]`，输出为 `output[T,H,512]`；$T$ 是 query token 数，$S$ 是可寻址的 KV token 数，$H$ 是传入 kernel 的 query head 数。

Hopper sparse prefill 的[配置][sm90-config]给出：

```cpp
static constexpr int B_H = 64;
static constexpr int B_TOPK = 64;
```

这两个 64 的含义不同：

| 维度 | 对应对象 | 在 QK 中的作用 |
|---|---|---|
| `B_H=64` | 同一 query token 的 64 个 query heads | GEMM 的 M 维 |
| `B_TOPK=64` | 入选列表中的 64 个 KV tokens | GEMM 的 N 维 |
| $d_{QK}=576$ | 每个 Q/K 向量的特征维 | GEMM 的归约维 |

因此，每个逻辑 tile 的计算形状是：

```text
QK: [64 heads, 576] × [576, 64 selected tokens] → [64, 64]
PV: [64 heads, 64 selected tokens] × [64 selected tokens, 512] → [64, 512]
```

总共选中的 2048 个 token 被分成 $2048/64=32$ 个 KV tiles：

```text
同一组 64 个 query heads
    × indices[t, 0,    0:  64]
    × indices[t, 0,   64: 128]
    ...
    × indices[t, 0, 1984:2048]
```

列表位置连续不意味着原序列地址连续；例如一个 tile 可以包含原序列的第 3、19、205、9001 等位置。这里没有把每个命中 token 扩展为原序列中的一整块连续 tokens。

**2048 是模型的选择预算，64 是实现的分块参数。** head 维本来就存在于输入张量中，“用 64 个 heads 拼 WGMMA tile”描述的是计算映射，不要求先做一次额外的 head 拼接拷贝。上面的逻辑 tile 由多条 MMA 指令完成，而非一条指令完成全部 576 维归约。[MMA 定义][sm90-config]

## 从 tokenwise gather 到 WGMMA 流水线

[`flash_mla_sparse_fwd`][interface] 将 Q、KV 和索引交给 C++ 的 [`sparse_attn_prefill_interface`][prefill-api]，再分派到 SM90 kernel。每个 CTA 负责一个 query token 的一组 64 heads；128 heads 对应两组 CTA。kernel 内部由 producer warpgroup 与计算 warpgroups 分工完成加载与计算。[CTA 映射与分工][sm90-kernel]

producer 的任务是把离散 token 地址转成计算侧需要的规则 tile：

1. 从 `indices` 读取 token 索引，乘以 KV 的 token stride 得到行偏移，同时记录索引是否有效。
2. 以 8 个线程为一组，协作读取一个 token 内连续的特征片段。token 之间可以离散，token 内仍是连续向量。
3. 使用 `cp.async` 将数据搬入适配 WGMMA 的 shared-memory 布局，并通过 barrier 通知消费者数据就绪。[producer 源码][sm90-producer]

计算侧执行 QK、online softmax 和 PV；producer 使用两份 KV buffer，在计算侧消费数据时准备后继数据。上面的 32 个逻辑 KV tiles 用于解释分块，实际执行由这些 warpgroup 交叠推进，不是逐块完成加载后再串行计算。[主循环与同步][sm90-kernel]

每处理一个 tile，online softmax 都会维护跨 tile 的最大值、归一化分母和输出累加值。最终归一化范围仍是全部 2048 个入选 token，而不是对 32 个小块各自 softmax 后直接相加。这个过程也避免把完整的 `64×2048` scores/probabilities 写回显存。[在线归一化实现][sm90-softmax]

这条路径的效率前提是 **shared memory 中的一份 KV 被多个 heads 复用**，从而有足够的矩阵计算可与加载交叠。`cp.async`、双缓冲和 warpgroup 分工实现这种交叠，但不保证加载成本在所有形状下都能完全隐藏。

## 计算时间能否隐藏 load

需要区分两种约束：**延迟**决定一次加载要提前多久发出；**吞吐**决定流水线能否持续按消费者的速度供数。异步加载与缓冲提供重叠窗口，但若持续需要的字节数超过内存系统的供给能力，增加流水线深度也不能解决。

### 一个 64×64 tile 的计算窗口

下面是依据源码形状与硬件参数进行的成本估算，不是该 kernel 的实测周期。只计 QK 和 PV，一个 tile 的 FLOPs 为：

$$
F_{\mathrm{tile}}
=2B_HB_{\mathrm{TOPK}}(d_{QK}+d_V)
=2\times64\times64\times(576+512)
=8{,}912{,}896.
$$

[官方周期分析][decode-blog]采用 H800 单 SM 每周期 4096 BF16 MMA FLOPs、1.83 GHz 的口径。代入后：

$$
T_{\mathrm{MMA,ideal}}
=\frac{8{,}912{,}896}{4096}
=2176\ \mathrm{cycles}
\approx1.19\ \mu\mathrm{s}.
$$

这说明每个逻辑 tile 具备微秒量级的纯 MMA 计算窗口。实际执行还包含 softmax、同步和指令调度，且有流水线启动与收尾；不能把这个理想窗口直接等同于已经隐藏的 HBM 访问时间。

### BF16 KV 的供数上界

先假设每个 CTA 所需的 KV 都从 HBM 读取一次，忽略 Q/O、索引和额外流量。一个 tile 读取：

$$
D_{\mathrm{KV}}=64\times576\times2=73{,}728\ \mathrm{B}=72\ \mathrm{KiB}.
$$

V 与 latent K 共用数据，因此此模型不再单独加一次完整 V 的读取。算术强度为：

$$
AI_{64}=\frac{F_{\mathrm{tile}}}{D_{\mathrm{KV}}}
\approx120.9\ \mathrm{FLOP/B}.
$$

[NVIDIA H800 SXM 数据表][h800-spec]给出的 HBM 峰值带宽是 3.35 TB/s，不使用 2:4 结构化稀疏加速的 BF16 Tensor Core 峰值约为 989 TFLOPS。上述流量假设下，HBM roofline 为：

$$
P_{\mathrm{HBM},64}
\le120.9\times3.35
\approx405\ \mathrm{TFLOPS}.
$$

这个忽略其他流量的乐观上界仍低于计算峰值：**若所有 CTA 的 KV 加载都独立落到 HBM，64-head BF16 路径无法仅靠流水线成为满算力的计算受限 kernel。**

但实际 HBM 流量不一定等于所有 CTA 逻辑读取量之和。同一个 query 的两组 heads 读取相同 KV，可以通过 L2 复用；不同 query 的入选集合也可能重叠。若一份 BF16 KV 在 HBM 层面只读一次、服务 128 heads，理想算术强度翻倍：

$$
AI_{128}=\frac{2\times128\times(576+512)}{576\times2}
\approx241.8\ \mathrm{FLOP/B},
\qquad
P_{\mathrm{HBM},128}\le810\ \mathrm{TFLOPS}.
$$

这两个估算说明了缓存复用为何会改变瓶颈判断：每 CTA 独立 HBM 读取的模型只能支持约 405 TFLOPS，而 128-head 共享 HBM 读取的理想模型允许达到官方报告的 640 TFLOPS。

**这不是对 640 TFLOPS 来源的实测归因。** 官方峰值对应的具体缓存命中率、实际 DRAM 字节数和加载等待时间并未在引用材料中给出。成本模型只能说明该数值与何种供数条件相容，不能据此断言 load 已经完全隐藏。

## 公开性能数据与利用率口径

下表记录 V3.2 兼容版本的官方公开结果，均非本地复现。存储精度与 MMA 精度分别列出，仅用于确定吞吐和峰值分母的口径。

| GPU / 路径 | KV 存储 / MMA 精度 | 公开吞吐 | BF16 dense 峰值占比 | 形状、软件与证据 |
|---|---|---:|---:|---|
| H800 SXM5 sparse prefill | BF16 / BF16 | 最高 **640 TFLOPS** | **64.7%** | CUDA 12.8；未公布峰值完整 shape；[README][perf-readme] |
| H800 SXM5 sparse decode | FP8 latent、BF16 RoPE / BF16 | **410 TFLOPS** | **41.5%** | batch=128、heads=128、query length=2、Top-k=2048，$d_{QK}=576,d_V=512$；README 标注 CUDA 12.8；[技术说明][decode-blog] |
| B200 sparse prefill | BF16 / BF16 | 最高 **1450 TFLOPS** | 约 **64.4%** | CUDA 12.9；未公布峰值完整 shape；[README][perf-readme] |
| B200 sparse decode | FP8 KV / BF16 | 最高 **700 TFLOPS** | 约 **31.1%** | 未公布峰值完整 shape 与该数值的具体 CUDA 版本；[README][perf-readme] |

H800 比例采用官方分析中的约 989 TFLOPS 峰值。B200 按 [NVIDIA HGX 规格][b200-spec]换算：8 卡 BF16 结构化稀疏峰值为 36 PFLOPS，dense 为其一半，因此单卡 dense 峰值约为 $36/2/8=2.25$ PFLOPS；例如 $1450/2250\approx64.4\%$。

这些是各自配置下的公开结果，不是相同 workload 的跨 GPU 对照。兼容版本还覆盖其他模型形状，测试集中也有更大 Top-k 的峰值测试；不能默认 B200 的两个最高值都来自 V3.2 的 Top-k=2048。当前 [prefill 测试][prefill-test]中，V3.2 性能用例为 query tokens=4096、heads=128、Top-k=2048、KV 长度从 8192 到 131072，但 README 未指出其中哪个用例产生其峰值。

### FLOPs 的分子与时间范围

[计数代码][flop-count]以主 attention 的 QK 和 PV 为 FLOPs 口径。所有 query 均有 $k$ 个有效入选 token 时，$N_q$ 个 query 的工作量是：

$$
F_{\mathrm{attn}}=2N_qHk(d_{QK}+d_V).
$$

例如，一个 query、128 heads、Top-k=2048 时：

$$
F_{\mathrm{attn}}
=2\times128\times2048\times1088
\approx0.5704\ \mathrm{GFLOPs}.
$$

不能把未计算的其他历史 token pairs 也计入分子。128K 上下文选 2048 个 token，主 attention 的 token pairs 约为全量的 $1/64$，但既不代表端到端加速 64 倍，也不能据此把有效 TFLOPS 乘以 64。

[Prefill benchmark][prefill-test]取 sparse forward kernel 的时间；[decode benchmark][decode-test]在存在 split-KV combine 时，将主 kernel 到 combine 的时间范围纳入统计。这些计时均不是完整的 DSA 层或模型延迟：Indexer、Top-k，以及 attention 外部投影和其他模型算子不包含在上述主 attention 吞吐中。

### 为什么这里不直接称为模型 MFU

表中的比例定义为：

$$
U_{\mathrm{attn}}
=\frac{F_{\mathrm{attn}}/T_{\mathrm{attn}}}
{P_{\mathrm{BF16,dense,peak}}}.
$$

例如 H800 sparse decode 的 $410/989\approx41.5\%$，表示上述工作量与时间口径下相对于 BF16 理论峰值的比例。它不是整个模型的 MFU，也不是 Tensor Core active 周期的硬件计数器读数。

分母必须与计算路径匹配：FP8 KV 存储不等于 FP8 MMA；tokenwise sparsity 也不等于 Tensor Core 的 2:4 结构化稀疏指令。因此，这些路径应使用 BF16 **dense** 峰值，而不是 FP8 峰值或规格表中翻倍的结构化稀疏峰值。

## 尚不能从公开峰值确定的边界

“有 WGMMA 和双缓冲”说明加载与计算具备重叠机制，640 TFLOPS 说明某些配置下执行效率较高；二者都不能单独证明所有 load stall 已被隐藏。确定具体形状的瓶颈，需要同时知道实际 DRAM/L2 流量、数据就绪 barrier 的等待，以及 MMA 发射间隙，才能区分带宽不足、延迟未覆盖和计算侧的其他开销。

TP 后真正参与复用的本地 head 数也会改变结论。即使实现把输入补齐到 64 或 128 heads，padding 也不会增加有效工作量；表中的公开峰值不应直接外推到少 heads、小 batch 或不同缓存状态的部署配置。

[revision]: https://github.com/deepseek-ai/FlashMLA/tree/ba89a3466e9470ad08ab39738d4e7bb66989e1e7
[interface]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/flash_mla/flash_mla_interface.py#L185
[prefill-api]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/csrc/api/sparse_prefill.cpp
[sm90-config]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/csrc/kernels/sm90/prefill/sparse/config.h
[sm90-kernel]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/csrc/kernels/sm90/prefill/sparse/phase1.cuh
[sm90-producer]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/csrc/kernels/sm90/prefill/sparse/phase1.cuh#L463
[sm90-softmax]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/csrc/kernels/sm90/prefill/sparse/phase1.cuh#L133
[decode-blog]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/docs/20250929-hopper-fp8-sparse-deep-dive.md
[h800-spec]: https://chaoqing-i.com/upload/20231128/NVIDIA%20H800%20GPU%20Datasheet.pdf
[b200-spec]: https://www.nvidia.com/en-au/data-center/hgx/
[perf-readme]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/README.md#performance
[prefill-test]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/tests/test_flash_mla_sparse_prefill.py
[decode-test]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/tests/test_flash_mla_sparse_decoding.py
[flop-count]: https://github.com/deepseek-ai/FlashMLA/blob/ba89a3466e9470ad08ab39738d4e7bb66989e1e7/tests/lib.py#L363
