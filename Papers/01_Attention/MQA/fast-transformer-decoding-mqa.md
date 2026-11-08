---
tags:
  - papers/LLM
  - topics/attention
  - topics/llm-inference
  - topics/kv-cache
aliases:
  - "Fast Transformer Decoding"
  - "Multi-Query Attention"
  - "MQA"
date: 2019-11-07
doi: 10.48550/arXiv.1911.02150
---

# Fast Transformer Decoding: One Write-Head is All You Need

> Noam Shazeer，arXiv:1911.02150v1，2019。
> 原文：[arXiv](https://arxiv.org/abs/1911.02150) / [PDF](https://arxiv.org/pdf/1911.02150)；Roadmap：[Architecture and Modern Sparse Attention](../../index.md#architecture-and-modern-sparse-attention)。

## 增量解码为什么反复读取 KV {#_1-增量解码为什么反复读取-kv}

MQA 针对的是增量解码的历史 KV 搬运：保留多个 query heads，却让它们共用一组 K/V。减少持久状态的同时，也限制了各 head 独立编码历史的能力。理解这个取舍，需要先区分训练、prefill 与 decode 的数据生命周期。

三者使用同一个 causal-attention 公式：

$$
\boldsymbol O
=
\operatorname{softmax}\!\left(
\frac{\boldsymbol Q\boldsymbol K^\top}{\sqrt{d_h}}+\boldsymbol M
\right)\boldsymbol V,
$$

但数据是否已经知道、张量形状和执行方式完全不同。

| 阶段 | 已知 token | Query shape | KV 的处理 | 常见瓶颈 |
|---|---|---|---|---|
| Training | 整段训练样本 | $[b,h,n,d_h]$ | 当前 forward 一次生成；另需为 backward 保存或重算 activation | 大矩阵计算与训练 activation |
| Prefill | 整段 prompt | $[b,h,n,d_h]$ | 并行生成并写入 KV cache | 大矩阵计算；长 prompt 时 attention 计算显著 |
| Decode | 当前新 token | $[b,h,1,d_h]$ | 追加一对新 K/V，并重新读取全部历史 KV cache | KV/weight memory bandwidth 与串行 latency |

### 为什么 causal LM 训练可以并行 {#_1-1-为什么-causal-lm-训练可以并行}

给定训练文本：

$$
[\texttt{<BOS>},\ \text{我},\ \text{喜欢},\ \text{猫},\ \text{。}],
$$

next-token prediction 的输入与监督目标在逻辑上错开一个位置：

$$
\begin{aligned}
\text{输入}&=[\texttt{<BOS>},\ \text{我},\ \text{喜欢},\ \text{猫}],\\
\text{目标}&=[\text{我},\ \text{喜欢},\ \text{猫},\ \text{。}].
\end{aligned}
$$

训练数据已经给出所有真实 token，所以每个位置的 Q/K/V 可以同时计算；causal mask 只让位置 $i$ 看见 $j\le i$，并不要求硬件按位置串行执行。这就是 teacher forcing：训练时位置 $i+1$ 使用数据集里的真实 token，decode 时则必须使用模型刚生成的 token。

训练目标是：

$$
\mathcal L
=
-\sum_i\log p_\theta(x_{i+1}\mid x_{\le i}).
$$

如果位置 $i$ 能看见目标 $x_{i+1}$，优化仍然能够进行，甚至 loss 会很快下降；但这构成 label leakage，模型学到的是推理时不存在的“偷看答案”路径。

### 为什么 decode 不能沿生成位置并行 {#_1-2-为什么-decode-不能沿生成位置并行}

标准自回归生成满足：

$$
\text{prompt}\rightarrow y_1\rightarrow y_2\rightarrow\cdots.
$$

只有选出 $y_t$ 后，才能形成下一位置的输入并计算 $q_{t+1},k_{t+1},v_{t+1}$。因此未来 query 无法提前产生。第 $t$ 步需要读取前 $t$ 个位置的 K/V；完整生成 $n$ 个 token 时，累计读取的历史长度为：

$$
1+2+\cdots+n=\frac{n(n+1)}2=\Theta(n^2).
$$

Training/prefill 将这些交互组织成并行矩阵乘；decode 则分成 $n$ 个相互依赖的小步骤，反复读取增长中的 KV cache。

## Attention score、hidden dimension 与 vocabulary logits {#_2-attention-score、hidden-dimension-与-vocabulary-logits}

“attention”可能指完整算子，也可能专指 score matrix。二者的 shape 不应混在一起。

忽略 batch 和 head，设：

$$
\boldsymbol Q\in\mathbb R^{L_q\times d_h},\qquad
\boldsymbol K,\boldsymbol V\in\mathbb R^{L_k\times d_h}.
$$

Attention scores 为：

$$
\boldsymbol S=\frac{\boldsymbol Q\boldsymbol K^\top}{\sqrt{d_h}}
\in\mathbb R^{L_q\times L_k}.
$$

$d_h$ 在点积中被归约：

$$
S_{ij}=\frac1{\sqrt{d_h}}\sum_{r=1}^{d_h}Q_{ir}K_{jr}.
$$

因此每个 query-key 位置对只产生一个标量。再令：

$$
\boldsymbol A=\operatorname{softmax}(\boldsymbol S),\qquad
\boldsymbol O=\boldsymbol A\boldsymbol V,
$$

则：

$$
[L_q,L_k]\,[L_k,d_h]\rightarrow[L_q,d_h].
$$

完整 shape 流是：

$$
\underbrace{[L_q,d_h]}_Q
\underbrace{[d_h,L_k]}_{K^\top}
\rightarrow
\underbrace{[L_q,L_k]}_{\text{attention scores}}
\underbrace{[L_k,d_h]}_V
\rightarrow
\underbrace{[L_q,d_h]}_{\text{attention output}}.
$$

例如 $L_q=4,L_k=6,d_h=128$ 时：

- attention scores 是 $[4,6]$：每个 query position 对 6 个 key positions 打分；
- attention output 是 $[4,128]$：每个 query 聚合 6 个 values 后恢复 128 维表示。

Attention scores 与 vocabulary logits 还位于不同的轴：

| 分数 | 典型 shape | 回答的问题 |
|---|---|---|
| Attention scores | $[b,h,L_q,L_k]$ | 当前 query 应从哪些历史位置读取信息？ |
| Vocabulary logits | $[b,L_q,\lvert\mathcal V\rvert]$ | 下一个 token 应是词表中的哪个 token 类型？ |

最终 hidden state 经 LM head 得到：

$$
\boldsymbol z_i=\boldsymbol h_i\boldsymbol W_{vocab},\qquad
\boldsymbol z_i\in\mathbb R^{|\mathcal V|},
$$

再对 vocabulary logits 做 softmax 并与 $x_{i+1}$ 计算 cross-entropy。Loss 直接监督 vocabulary logits，但梯度会继续反传，间接训练产生 attention scores 的 $W_Q,W_K,W_V$。

## 一个 attention head 到底包含什么 {#_3-一个-attention-head-到底包含什么}

对输入表示 $x$，MHA 的第 $i$ 个 head 使用独立投影：

$$
q_i=xW_Q^{(i)},\qquad
k_i=xW_K^{(i)},\qquad
v_i=xW_V^{(i)}.
$$

可以把三者分别理解为：

- Q：当前 token 想寻找什么；
- K：历史 token 用什么特征标识自己；
- V：匹配到该位置后取回什么内容。

Head 并没有被人为指定为“语法头”或“位置头”。不同投影让各 head 可以学习不同的匹配空间、attention distribution 和输出表示，但具体语义不保证可解释。

## 从 MHA 到 MQA：只删除 KV 的 head 维度 {#_4-从-mha-到-mqa-只删除-kv-的-head-维度}

设 query-head 数为 $h$、每头维度为 $d_h$。忽略 batch 时：

| 张量 | MHA | MQA |
|---|---|---|
| Q | $[h,L_q,d_h]$ | $[h,L_q,d_h]$ |
| K/V | $[h,L_k,d_h]$ | $[L_k,d_h]$ |
| Scores | $[h,L_q,L_k]$ | $[h,L_q,L_k]$ |
| Per-head output | $[h,L_q,d_h]$ | $[h,L_q,d_h]$ |

MQA 的计算为：

$$
o_i
=
\operatorname{softmax}\!\left(
\frac{q_iK^\top}{\sqrt{d_h}}
\right)V.
$$

所有 query heads 使用同一个 $K,V$，但每个 $q_i$ 仍然不同，所以仍能产生不同的 attention distributions。比如：

$$
k_1=(1,0),\quad k_2=(0,1),\qquad
q_1=(3,0),\quad q_2=(0,3).
$$

则两个 query heads 对同一份 K 得到相反的偏好：第一个主要选择位置 1，第二个主要选择位置 2。

标题中的“One Write-Head”强调的正是这种不对称：每个 token 只向 cache 写入一组 K/V，后续仍由多个 query heads 读取。

### 为什么共享 K/V，而不是共享 Q {#_4-1-为什么共享-k-v-而不是共享-q}

当前步的 Q 是临时张量：

$$
Q_t:\Theta(hd_h)=\Theta(d).
$$

当前 Q 的输入 hidden state 已经包含上下文，但过去位置的 Q 不作为历史 cache 被后续 decode 重新读取。K/V 则需要随上下文累积：

$$
KV_{\le t}:\Theta(thd_h)=\Theta(td),
$$

并在后续每一步反复读取。共享 Q 只能减少一个与序列长度无关的临时张量，还会削弱 query-side 多样性；共享 K/V 则直接压缩持久状态。这是由 decode 数据生命周期导出的设计方向，不是随机猜测。

但数学分析只能保证访存下降，不能证明 K/V heads 在质量上冗余。共享 K/V 后模型是否仍够用，必须由实验验证。

## 复杂度分析：MQA 买到的是带宽，不是 $h$ 倍 FLOPs 缩减 {#_5-复杂度分析-mqa-买到的是带宽-不是-h-倍-flops-缩减}

论文采用：

$$
k=v=d/h,\qquad n\le d,
$$

其中 $b$ 为 batch size、$n$ 为序列长度、$d$ 为模型宽度、$h$ 为 head 数、$k,v$ 为每头 key/value 维度。[论文 §2.3–3.1, pp. 3–6](https://arxiv.org/pdf/1911.02150#page=3)

### Incremental MHA {#_5-1-incremental-mha}

跨完整的 $n$ 个解码调用：

$$
\text{arithmetic}=\Theta(bnd^2),
$$

$$
\text{memory access}=\Theta(bn^2d+nd^2).
$$

两者之比为：

$$
\Theta\!\left(\frac nd+\frac1b\right).
$$

$1/b$ 来自模型参数读取的 batch 摊销，可以通过增大 batch 改善；$n/d$ 来自每个序列自己的历史 K/V，增大 batch 时 KV 读取和对应计算同时增长，因此不会消失。

### Incremental MQA {#_5-2-incremental-mqa}

去掉 KV 的 head 维度后：

$$
\text{memory access}
=
\Theta(bnd+bn^2k+nd^2),
$$

$$
\frac{\text{memory access}}{\text{arithmetic}}
=
\Theta\!\left(
\frac1d+\frac{n}{dh}+\frac1b
\right).
$$

关键项从 $n/d$ 变成 $n/(dh)$，缩小 $h$ 倍。KV cache 本身也从：

$$
\underbrace{2bnhd_h}_{\text{MHA K+V}}
=2bnd
$$

变成：

$$
\underbrace{2bnd_h}_{\text{MQA K+V}}
=\frac{2bnd}{h}.
$$

然而每个 query head 仍需计算自己的 score 和 value aggregation：

$$
h\cdot n\cdot d_h=nd.
$$

因此核心 attention interaction 的计算量没有减少。K/V projections 确实变小，但论文的整体渐近算术量仍为 $\Theta(bnd^2)$。MQA 的主要收益是共享一次读取的 KV 数据，而不是把 attention FLOPs 降低 $h$ 倍；实际内核也必须在 query heads 间复用 shared-KV tile，才能兑现理论带宽收益。

## 实验：速度收益与质量代价 {#_6-实验-速度收益与质量代价}

### 设置 {#_6-1-设置}

WMT14 English-German 基线是 6 层 encoder-decoder Transformer：$d_{model}=1024$、$d_{ff}=4096$、$h=8$、$d_k=d_v=128$，共 211M 参数。MQA 替换 encoder self-attention、decoder self-attention 与 encoder-decoder attention，并把 $d_{ff}$ 扩至 5440，使总参数保持相同。作者还训练了 decoder local-attention 版本，窗口为当前位置加前 31 个位置。[论文 §4.1, pp. 6–7](https://arxiv.org/pdf/1911.02150#page=6)

Billion Word LM 实验使用 6 层 decoder、$d_{model}=1024$、$h=8$、$d_k=d_v=128$，各模型均为 192M 参数。

### 速度实验 {#_6-2-速度实验}

在单台 8-core TPUv2 上，论文以 batch 1024、source/target length 128 测试 incremental greedy inference：[论文 §4.3 与 Table 2, pp. 7–8](https://arxiv.org/pdf/1911.02150#page=7)

| 每个输出 token 的摊销成本 | MHA | MQA | 观察 |
|---|---:|---:|---|
| Training | 13.2 μs | 13.0 μs | 几乎不变 |
| Encoder | 1.7 μs | 1.5 μs | 小幅变化 |
| Incremental decoder | 46 μs | 3.8 μs | 约 $12.1\times$ 加速 |
| Beam-4 decoder | 203 μs | 32 μs | 约 $6.3\times$ 加速 |

Training 将所有位置组成大矩阵运算，且包含 backward，通常具有更高 arithmetic intensity；decode 每步只有一个新 query，却反复读取历史 KV，更容易 bandwidth-bound。因此相同架构变化在两阶段产生截然不同的 wall-clock 效果。

$12.1\times$ 不是由 $h=8$ 唯一决定的普适常数。端到端时间还包含 kernel 实现、固定 shape、padding、batch、硬件及其他算子。论文注明由于系统限制，decoder-self-attention 的 KV 张量被 padding 到最大长度 128，使每个 decoding step 用时相同。

### 质量实验 {#_6-3-质量实验}

| 指标 | MHA | MQA |
|---|---:|---:|
| WMT dev ln(PPL)，越低越好 | 1.424 | 1.439 |
| WMT dev BLEU | 26.7 | 26.5 |
| WMT test greedy BLEU | 27.7 | 27.5 |
| WMT test beam-4 BLEU | 28.4 | 28.5 |
| Billion Word dev PPL | 29.9 | 30.2 |

多数指标显示 MQA 略差；test beam-4 高 0.1 BLEU，但论文没有报告多次训练方差或置信区间，不能据此声称 MQA 质量更好。稳妥结论是：**观察到小幅质量损失，但效率收益可能值得。**[论文 §4.2 与 Tables 1–3, pp. 7–8](https://arxiv.org/pdf/1911.02150#page=7)

作者还比较了具有相似总 KV 宽度的缩小版 MHA。MQA 保留 $8\times128$ 的 query 表达，只把 K/V 总宽度降至 128；其他方案把 Q/K/V 一起缩小，例如 $h=1,d_k=d_v=128$ 或 $h=2,d_k=d_v=64$。它们的 WMT dev BLEU 为 25.8–26.2，低于 MQA 的 26.5；Billion Word PPL 为 30.9–31.2，高于 MQA 的 30.2。这支持“优先保留多个 query heads，只压缩 KV heads”的容量分配，但仍是经验性证据，不是表达等价定理。

### 与 local attention 正交 {#_6-4-与-local-attention-正交}

Local attention 把参与读取的位置数从 $n$ 降为窗口 $w$；MQA 把每个位置的 KV 副本数从 $h$ 降为 1。它们压缩不同维度，因此可以组合：

| Attention | Greedy decoder |
|---|---:|
| MHA | 46 μs |
| Local MHA | 23 μs |
| MQA | 3.8 μs |
| Local MQA | 3.3 μs |

Beam-4 下 local MQA 为 16 μs，低于完整 MQA 的 32 μs。这个实验支持两种优化方向的正交性，但不能推出任意 workload 下收益都会相乘。[论文 §4.1、Table 2, pp. 7–8](https://arxiv.org/pdf/1911.02150#page=7)

## 局限与未闭合问题 {#_8-局限与未闭合问题}

- 实验来自 2019 年的 192M/211M 模型、$h=8$、长度 128 和 TPUv2，不能直接外推到现代大模型、长上下文及 GPU kernels。
- MQA 从头训练；论文没有解决如何把已有 MHA checkpoint 稳定转换成 MQA。
- 为保持总参数相同，MQA 扩大了 FFN；这是合理的等参数比较，但使“仅改变 attention 参数化”的归因不完全纯净。
- 论文只考察 $H_{kv}=H_q$ 的 MHA 与 $H_{kv}=1$ 的 MQA 两个端点，没有探索中间的质量—带宽曲线。

## 与后续路线的连接 {#_9-与后续路线的连接}

MQA 把 KV-head 数量变成一个显式架构旋钮：

| 架构 | Query heads | KV heads | 含义 |
|---|---:|---:|---|
| MHA | $H_q$ | $H_q$ | 每个 query head 独享 K/V |
| GQA | $H_q$ | $1<H_{kv}<H_q$ | 一组 query heads 共享一个 KV head |
| MQA | $H_q$ | 1 | 所有 query heads 共享一组 K/V |

- **GQA** 填补 MHA 与 MQA 之间的连续设计空间，并研究从 MHA checkpoint uptraining 的方法。
- **MLA** 进一步压缩每个 token 的 KV 表示，而不只减少 KV-head 数。
- **Local/sparse attention** 减少需要访问的序列位置；MQA/GQA 减少每个位置的 KV 副本，两个方向彼此正交。
- **MSA/DSA** 在 GQA 或 MQA 基础上继续选择少量 KV positions；理解 MQA 的 shared-KV 与 decode bandwidth，是理解这些现代稀疏 attention 内核为何按 KV group 组织数据的前提。
