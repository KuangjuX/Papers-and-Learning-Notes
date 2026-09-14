---
tags:
  - papers/LLM
  - topics/sparse-attention
  - topics/kv-cache
  - topics/llm-serving
aliases:
  - "HiSparse"
  - "Hierarchical KV Cache Management"
date: 2026-09-14
---

# HiSparse：稀疏注意力的分层 KV Cache 管理

> 论文：[HiSparse: Scaling Sparse-Attention Decoding with Hierarchical KV Cache Management](https://arxiv.org/abs/2608.07009v1)，Zhiqiang Xie 等，2026-08-07，arXiv v1。
>
> 本笔记依据论文与阅读讨论整理。MSA 适配部分属于机制推论，不能视为 HiSparse 已验证的实现。
>
> 关联笔记：[DSA](../deepseek-dsa/deepseek-sparse-attention-dsa.md) · [MiniMax MSA](../minimax-msa/msa.md) · [MSA 与 DSA Indexer 对比](../minimax-msa/msa-vs-dsa-indexer.md)

## 1. 核心结论：少读 KV，不等于可以少存历史 KV

**DSA/MSA 的稀疏选择减少每步主注意力的计算和 KV 读取量；HiSparse 利用这种访问模式，减少主 KV 在 GPU 显存中的驻留量。**

设当前有 128K 个历史 tokens，每层每步只选 2048 个位置。当前 attention 只读取这 2048 个位置，但下一步可能选中其他位置，因此完整历史仍须可用。

| 概念 | 模型或系统需要保证什么 |
|---|---|
| 逻辑可用性 | 未来选中任何历史位置时，都能取得对应 KV |
| GPU 驻留 | 当前计算实际需要的 KV，必须在 attention 执行前到达 GPU |

全量 HBM 驻留把两者绑定在一起。HiSparse 则让完整历史保存在 CPU 内存，GPU 只缓存热点。它不永久删除未选中的 KV，也不改变原来的选择规则。[HiSparse §2–3](https://arxiv.org/html/2608.07009v1)

## 2. 单看算法，MSA 和 DSA 会减少 KV Cache 吗？

### 2.1 MSA：相对相同配置的 dense GQA，主 KV Cache 不减少

MSA 当前未选中的 block 仍可能在未来被选中，因此需要保存完整历史的主 K/V。

设一层的历史长度为 $N$，KV head 数为 $H_{kv}$，K/V 的 head 维度均为 $d_h$，每个元素占 $s$ 字节。忽略元数据、对齐与并行切分，该层主 KV Cache 为：

$$
M_{\mathrm{main\ KV}} = 2NH_{kv}d_hs.
$$

这个式子不包含 Top-k 的 $k$：选择数量控制当前读取的子集，不改变完整历史的保存量。MSA 还需要保留 Index Branch 的历史 key 表示，因此在同样精度、全量驻留 GPU 的比较下，总缓存还会增加索引状态的开销。

算法规定需要保留哪些状态；它们放在 CPU 还是 GPU 属于系统实现选择。不要把 attention 中间张量、工作空间的节省混同为持久 KV Cache 的节省。[MSA §2.3–3.1](https://arxiv.org/html/2606.13392v2)

### 2.2 DSA：稀疏选择不减少主缓存，MLA 压缩才减少每 token 的表示大小

DSA 同样需要保留可能在未来被选中的完整历史。相对使用相同 MLA 表示的 dense attention，DSA 的 Top-k 不缩小主 KV Cache，还需要额外的 Lightning Indexer keys。

| 机制 | 主要改变的维度 |
|---|---|
| MLA | 压缩每个 token 的 KV 表示，减少每条记录的大小 |
| DSA / MSA | 减少每步主 attention 访问的记录数 |
| HiSparse | 减少主 KV 在 GPU 中驻留的记录数，完整历史仍在主机 |

因此，将 DSA+MLA 与普通 MHA/GQA 比较时，不能把 MLA 带来的缓存压缩归因于 DSA 的稀疏选择。[DeepSeek-V3.2 §2.1](https://arxiv.org/abs/2512.02556)；[DeepSeek-V2：MLA](https://arxiv.org/abs/2405.04434)

## 3. HiSparse 解决的是显存容量瓶颈

对于长上下文请求，attention 每步只读取少量 KV，完整历史却持续占据 HBM。请求数增加后，显存先满，系统无法继续扩大 decode batch，即使计算资源仍有余量。

HiSparse 的目标是让每个请求的主 KV 显存占用主要由热点缓存容量决定，从而提高可容纳的并发。

这不是说 sparse attention 必须使用分层缓存才能运行。全量 KV 放得下时，普通驻留方式完全可行。HiSparse 解决的是容量受限时的扩展问题。

## 4. 为什么可以先选位置，再搬 KV？

关键是区分两份数据：

| 状态 | 用途 | 放置方式 |
|---|---|---|
| Indexer state | 为候选位置打分并产生选择名单 | 始终留在 GPU |
| 主 attention KV | 对选中的位置计算正式 attention | 完整历史在主机，热点子集在 GPU |

DSA 使用较小的 indexer keys，Quest 使用页面摘要；它们不需要先读回完整主 KV 才能确定本步访问集合。

```text
GPU 上的 Indexer state
        ↓
Indexer 产生逻辑位置名单
        ↓
HiSparse 查缓存：命中直接使用，缺失从 CPU 取回
        ↓
输出与名单对应的 GPU 物理槽位
        ↓
Sparse Attention 读取这些槽位中的 KV
```

**适用边界：** 如果某种筛选方法必须先读取全部完整 K，才能决定选择哪些位置，那么把 K 放到 CPU 后，筛选本身就可能需要全量传输，削弱按需搬运的优势。

HiSparse 不减少 Indexer 自身的扫描，也不卸载其状态。Indexer state 与部分元数据仍随上下文增长，不能把总显存占用都称为常数。[HiSparse §2.1、§3.2](https://arxiv.org/html/2608.07009v1)

## 5. 热点缓存为什么通常比 Top-k 更大？

设每步选 $k=3$ 个位置：

| 步骤 | 选择集合 |
|---|---|
| 1 | `{1, 4, 8}` |
| 2 | `{1, 5, 8}` |
| 3 | `{1, 4, 8}` |

如果 GPU 只能容纳 3 个 KV，第二步必须把 4 换成 5，第三步又要把 4 搬回来。如果能容纳 4 个，第二步之后可保留 `{1, 4, 5, 8}`，第三步便全部命中。

HiSparse 因而为每个请求、每层保留容量为 $B$ 的 GPU cache，要求 $B\geq k$。多出的空间保留近期有用、未来可能再次被访问的 KV。

替换采用 LRU，并有一个细节：本步命中的条目比本步新搬入的条目更靠近最近使用端，优先保留已表现出重复访问的记录。移出 GPU 的条目仍有完整主机副本。

| 增大 $B$ 的收益 | 增大 $B$ 的成本 |
|---|---|
| 通常提高命中率、减少缺失搬运 | 每请求显存占用更高，可容纳并发更少 |
| 减少暴露在关键路径上的 IO | 缓存探测与元数据扫描更多 |

论文中的实用范围通常为 $B\approx2k\text{–}4k$，具体选择取决于平台与访问模式，不能只追求最高命中率。[HiSparse §3.2、§4.3–4.5](https://arxiv.org/html/2608.07009v1)

## 6. 缓存容量与显存公式

设并发请求数为 $R$，稀疏层数为 $L$，每层每条 KV 记录包含 $W$ 个元素，每元素 $s$ 字节。在均匀层布局、忽略其他状态的简化下：

$$
M_{\mathrm{full}} = RLNWs,
\qquad
M_{\mathrm{hot}} = RLBWs.
$$

这描述的是主 KV 的驻留量。实际预算还需加上模型权重、Indexer state、元数据、其他注意力分支、activation 和 CUDA Graph 等开销。

论文 GLM-5.1 的例子：128K 上下文的完整 KV 约 13.09 GB；$B=4096$ 时 GPU 主 KV 缓存约 0.4 GB。该数值不是整个模型或单 GPU 的全部占用。[HiSparse §3.3](https://arxiv.org/html/2608.07009v1)

对于 block 或压缩 KV，必须统一计数单位：MSA 的 Top-k blocks 不等于 k 个 tokens；论文 DeepSeek-V4-Flash 的 top-512 压缩记录覆盖 2048 个 tokens。缓存大小应与实际管理的记录粒度对应。

## 7. 缺失处理与跨层预取

### 7.1 融合缺失处理

每个稀疏层在 attention 前必须完成命中检查、选择替换槽位、搬入缺失 KV、更新映射与 LRU。HiSparse 将这些步骤融合进一个 CUDA resolve kernel，并纳入 decode CUDA Graph。

内核先建立选择集合的共享内存哈希表，再探测 GPU cache，通过并行 scan 确定替换位置，使用 GPU 线程从 pinned host memory 读取缺失记录，最后输出物理槽位。它不是为每条缺失记录单独提交一次 CPU 驱动的拷贝。

Prefill 产生的完整 KV 写入主机池；新生成 token 的 KV 也会异步写回主机，并以同步事件保证后续读取正确。[HiSparse §3.3–3.4，图 2–3](https://arxiv.org/html/2608.07009v1)

### 7.2 精确预取需要提前知道后续层的选择

如果模型本来就让第 1～4 层共享选择名单，第 1 层选出 `{1, 5, 8}` 后，就可以在计算前面层的同时，提前搬入后面层对应位置的缺失 KV。

必须区分三件事：

- token 的逻辑编号固定，不代表每层都会选中它。
- 各层独立选择时，选择集合可以不同，不能直接把前一层的结果当作后一层的确定名单。
- 即使共享选择集合，每层的 KV 数值仍然不同，需要分别准备。

论文的 shared layers 跟随 anchor layer 的槽位布局，复用其 miss plan，但将各层自己的 KV 搬入各层缓存。后续层等待预取完成即可使用。

没有共享选择时，拿前一层的名单预测后一层只能算推测性预取。论文中这种方案没有可测的端到端收益；错误提示会浪费带宽，实际计算仍须按真实名单补齐 KV。精确预取只是把 IO 提前并与计算重叠，没有消除 IO；anchor 自己的缺失也不能靠这条路径提前获知。[HiSparse §3.5、§4.6](https://arxiv.org/html/2608.07009v1)

## 8. DSA、NSA、Quest 与 MSA 的适用性

| 类型 | 论文证据与适用边界 |
|---|---|
| DSA | 直接评测；先选 token，再准备对应主 KV |
| NSA 类 | 评测 DeepSeek-V4-Flash 的压缩 KV 选择分支，其他分支状态仍留在 GPU；不能扩展为所有 NSA 变体均已验证 |
| Quest | 直接评测；用页面摘要选择访问集合 |
| MiniMax MSA | 原理上适合，但 HiSparse 论文没有评测，group/block 布局需要适配 |
| 纯 sliding window | 若窗口外历史未来不会再访问，可直接滚动回收；通常不需要全历史动态召回 |

共同条件是：有较小的访问集合、选择能先于主 KV 读取完成、选择状态相对紧凑。性能收益还取决于缓存局部性与主机传输成本。[HiSparse §2.1、§4.1](https://arxiv.org/html/2608.07009v1)

### MSA 的适配推论：既要区分 block，也要区分 KV group

MSA 为不同 GQA groups 独立选择 blocks。同一 group 的 query heads 共用一个 KV head。[MSA §2.3–3.1](https://arxiv.org/html/2606.13392v2)

| Group | 选中 blocks | 实际需求 |
|---|---|---|
| 0 | `{2, 7}` | KV head 0 的 block 2、7 |
| 1 | `{7, 9}` | KV head 1 的 block 7、9 |

即使两个 group 都选择 block 7，也不是相同的 KV 数据。由此可以推导两种布局：

1. **按 group 精细管理：** 缓存条目身份包含 `请求 + 层 + KV group + block`，减少无关数据搬运，但管理与 kernel 适配更复杂。
2. **一个 block 包含所有 KV heads：** 管理可以更简单，但按选择并集搬运时，会把部分 group 没有选择的数据一起搬入。

两者都可能保持正确性，差别在搬运量和管理成本。还需处理强制 local block、因果边界及最新 KV 写回。这是适配方向，不是已实现或已测得的性能结论。

## 9. 实验说明了什么？

### 9.1 缓存局部性能否减少搬运？

**问题与设置：** 固定 GLM-5.1 的一个 LongBenchV2 请求选择轨迹，prompt 为 100,384 tokens，比较缓存策略；报告前 1000 个 decode steps、跨层统计。

**结果：** $k=2048$ 时，只保留当前 Top-k 的方案平均缺失率约 30%；$B=4096$ 的 LRU 缺失率为 13.4%，FIFO 为 17.2%，随机替换为 16.1%；LRU 增至 $B=8192$ 时为 6.7%。

**解释与边界：** 额外热点空间和替换策略确实减少了该轨迹上的搬运，但约 87% 的命中率不是所有模型、所有请求的保证。[HiSparse §4.3，图 6](https://arxiv.org/html/2608.07009v1)

### 9.2 吞吐提高来自哪里？

**问题与设置：** 与全量 KV 驻留 HBM 的 SGLang 基线比较；DeepSeek-V4-Flash，2×B200，32K 输入、8K 输出，并发 64，prefill/decode 共置。

| 指标 | 基线 | HiSparse |
|---|---:|---:|
| 生成吞吐 | 600 tokens/s | 1257 tokens/s |
| 平均 TTFT | 829 s | 171 s |

**解释：** 主要收益来自扩大可容纳的 decode batch、减轻排队，并不证明每个请求单步计算更快。

另一个配置中，Qwen3+Quest 在 GH200、200K 输入下，峰值生成吞吐由 111 增至 520 tokens/s，约 4.7 倍。该最高收益对应特定平台与负载，不应泛化为固定加速比。[HiSparse §4.2，图 4–5](https://arxiv.org/html/2608.07009v1)

### 9.3 搬运不是免费的，预取也不能完全隐藏它

**问题与设置：** GLM-5.2-FP8，8×H200，32K 输入、8K 输出，$k=2048$、$B=4096$；比较同步取回、精确预取和跳过 host IO 的 oracle。

**结果：** 并发 8 时，相对 no-IO oracle，同步路径暴露约 7.7 ms/token 的 IO 开销；精确预取降至约 3.0 ms/token。跨并发扫描，精确预取使 TPOT 相对同步方案降低约 13%～15%。

**边界：** no-IO oracle 在缺失时使用陈旧 KV，输出无效，只是固定输出长度下的性能上限对照。“管理开销没有可测影响”是这组实验的观察，不等于内核成本在所有配置下严格为零。[HiSparse §4.6，图 8](https://arxiv.org/html/2608.07009v1)

## 10. 什么时候使用，什么时候不使用？

| 部署情况 | 判断 |
|---|---|
| 长上下文、高并发，HBM 限制 batch | 适合评估 HiSparse，以少量 IO 换取容量和吞吐 |
| 单请求、完整 KV 放得下、追求最低单 token 延迟 | 通常关闭；没有容量收益抵消搬运成本 |
| 单请求，但完整 KV 已超过可用显存 | 分层存储仍有价值；瓶颈与请求数量无关 |
| 主机容量不足、链路慢或缓存局部性差 | 容量收益受限，或转移为严重传输瓶颈 |

论文的极长单请求可行性来自缓存容量设计的推导，没有单独实验验证；完整系统还受 prefill、索引状态、模型上下文限制及主机容量等约束。论文也没有运行物理分离的 prefill/decode 部署，而以 decode-only 吞吐作代理；主要基线是全量 HBM 驻留，并非其他卸载系统。[HiSparse §4.1–4.2、§5](https://arxiv.org/html/2608.07009v1)

## 11. 与其他缓存技术的区别及阅读结论

| 技术 | 核心作用 |
|---|---|
| PagedAttention | 分页分配、减少碎片和支持共享；不自动把每请求完整历史缩成热点子集 |
| MLA / KV 量化 | 减少每条 KV 记录的存储量 |
| 永久 KV eviction | 丢弃部分历史；可能改变以后能访问的信息 |
| HiCache | 分层 prefix cache，利用跨请求前缀复用 |
| HiSparse | 管理活跃请求 decode 的稀疏工作集，保留完整历史并按需取回 |

HiSparse 的 exact 指相对原有稀疏规则保持选择集合和结果，不是在宣称稀疏 attention 与原始 dense attention 等价。对 Quest 而言，它不增加额外近似，但也不消除 Quest 自身的近似。[HiSparse §3.1、§6、附录 A](https://arxiv.org/html/2608.07009v1)

本次讨论最重要的区别是：**读取量、完整历史保存量、GPU 驻留量是三个不同的量。DSA/MSA 主要减少第一个，MLA 压缩每条记录，HiSparse 在保留完整历史的同时减少第三个。**
