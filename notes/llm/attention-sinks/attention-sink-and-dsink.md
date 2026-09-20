---
tags:
  - topics/attention
  - topics/sparse-attention
  - topics/llm-inference
  - topics/gradient
aliases:
  - "Attention Sink 与 dsink"
  - "Learnable Sink"
date: 2026-09-20
---

# Attention Sink、Learnable Sink 与 dsink：从输出含义到反向梯度

> 讨论整理：2026-09-20。
> 关联论文：[Efficient Streaming Language Models with Attention Sinks](https://arxiv.org/abs/2309.17453)，ICLR 2024，本文参考 v4。
> 范围：记录本次概念澄清和本地源码阅读；不是论文全部实验的精读，也不是 TileLang 实现或 GPU 验收报告。
> 相关笔记：[Sparse Attention](../foundations/SparseAttention.md)、[DSA 算法流程](../deepseek-dsa/deepseek-sparse-attention-dsa.md)。

## 1. 先分清 score、概率和 attention 输出

对当前 query 的一个 head，attention 的数据流是：

```text
Q 与可见 K 做点积并缩放
          ↓
       scores
          ↓ softmax
   每个可见 token 的概率
          ↓ 对 V 加权求和
    当前 head 的输出向量
```

记 query 位置为 $i$，query head 为 $h$，稀疏选择与 mask 共同决定的有效 key 集合为 $\mathcal A_{ih}$。令 $g(h)$ 表示 GQA 中 query head 对应的 KV head，$\alpha$ 为 softmax scale：

$$
x_{ijh}=\alpha\langle Q_{ih},K_{j,g(h)}\rangle,
\qquad
P_{ijh}=\frac{e^{x_{ijh}}}{\sum_{k\in\mathcal A_{ih}}e^{x_{ikh}}}.
$$

attention 输出是：

$$
O_{ih}=\sum_{j\in\mathcal A_{ih}}P_{ijh}V_{j,g(h)}.
$$

**Score 是匹配分数，概率是取信息的权重，输出才是汇总得到的特征向量。** 输出不是最终的词表概率。

例如，一个 head 读取两个 value：

```text
V₁ = [2, 0]
V₂ = [0, 4]
权重 = [0.75, 0.25]

O = 0.75 × V₁ + 0.25 × V₂ = [1.5, 1]
```

代码中 `out` 的形状为 `[T, Hq, D]`：每个 packed query、每个 query head 都产生一个长度为 $D$ 的向量。

## 2. Sink 不是“选择重要 token”的同义词

论文观察到：开头 token 即使语义不重要，也可能获得很高 attention，成为 attention sinks。StreamingLLM 主方案在**训练后的推理阶段**保留开头少量 KV 与最近窗口，丢弃中间历史，无需微调；这是利用已有 sink 现象的稀疏访问方式，不是对所有历史做内容重要性排序。[论文 §3.1–3.2](https://arxiv.org/html/2309.17453v4#S3.SS1)

```text
完整历史：[开头] [大量中间历史] [最近窗口]
保留 KV：[开头]                [最近窗口]
```

它支持持续流式生成，但不会使被丢弃的历史仍然可访问。[作者仓库 FAQ](https://github.com/mit-han-lab/streaming-llm#faq)

下面是解释归一化影响的假设例子，不是论文测量结果：

```text
原概率：开头 sink 0.80，A 0.15，B 0.05
删掉开头 token、保持 A/B logits 不变后：A 0.75，B 0.25
```

移除 sink 后，剩余概率必须重新归一化。这说明“语义不重要”不等于“删除后不影响计算”。

在当前代码讨论中，两个职责应分开：

- `block_indices` 描述稀疏选择的块；窗口、因果关系和样本边界进一步约束可见 token。
- `learnable_sink` 影响可见 token 的归一化和输出幅度，不执行 Top-k 或选择 block。

## 3. 论文的 sink token 与代码的标量 sink

论文中的真实 sink token 有 K/V，value 不被规定为零。论文 §3.3 还比较了分母加固定 $1$ 的 **Zero Sink**，以及在训练样本开头加入可学习占位 token 的方案；后者也不是每 head 一个标量。[论文 §3.3、公式 2](https://arxiv.org/html/2309.17453v4#S3.SS3)

当前 Mimikyu 代码采用的是显式标量：每个 query head 有一个可训练 logit $a_h$，数学上对应 value 为零的虚拟位置。

| 对象 | 在本次讨论中的含义 |
| --- | --- |
| 真实 sink token | 序列中吸收较多 attention 的位置，有真实 K/V |
| `learnable_sink[h]` | 当前实现的参数 $a_h$，是 logit，不是概率 |
| $p^{sink}_{ih}$ | 当前 query、head 分给虚拟 sink 的概率 |
| `sink_s[i,h]` | 当前实现中真实 token 的总概率，也就是输出缩放比例 |
| `dsink[h]` | 损失对参数 $a_h$ 的梯度 |

这里仅建立机制和公式上的联系，不据此推断 Mimikyu 实现的设计来源。

## 4. Learnable sink 为什么等价于输出缩放

对固定的 query 和 head，暂时省略下标，定义：

$$
Z=\sum_{j\in\mathcal A}e^{x_j},
\qquad L_{orig}=\log Z.
$$

没有显式 sink 时，输出为 $O_{orig}=\sum_j e^{x_j}V_j/Z$。加入 sink logit $a$ 后：

$$
L_{new}=\log(Z+e^a),
\qquad p_{sink}=\frac{e^a}{Z+e^a}.
$$

真实 token 总共获得的概率为：

$$
s=\frac{Z}{Z+e^a}
=e^{L_{orig}-L_{new}}
=1-p_{sink}
=\sigma(L_{orig}-a).
$$

由于 sink value 为零：

$$
O_{new}=\sum_j\frac{e^{x_j}}{Z+e^a}V_j=sO_{orig}.
$$

因此，本实现可以先计算普通 sparse attention，再缩放输出；数学上等价于在 softmax 分母增加 $e^a$。

延续第一节的例子，若 $s=0.2$：

```text
原始概率：A 0.75，B 0.25
新概率：  A 0.15，B 0.05，零值 sink 0.80
原输出：  [1.5, 1]
新输出：  [0.3, 0.2] = 0.2 × 原输出
```

需要记住：

- QK scores 本身没有被 sink 修改；改变的是归一化分母、真实 token 概率及输出。
- 真实 token 之间的相对概率保持不变。
- $a_h$ 按 head 共享，但 $Z_{ih}$ 随 query 改变，因此 $s_{ih}$ 不是固定的 head 权重。
- `learnable_sink=0` 仍贡献 $e^0=1$；当前 Python 接口用 `None` 表示不启用。
- 固定 $a=0$ 时，分母形式对应 Zero Sink；将其变为可训练 $a_h$ 是数学推广，并不等于训练一个真实 sink token。

## 5. 为什么这不是“中和不同 head 的 score”

每个 head 在自己可见的 token 之间独立做 softmax，不是在不同 head 之间共享一个概率预算。

这个实现允许某个 head 在当前 query 上减少从真实 token 取回的信息。它不比较不同 head 的 score，不把它们拉到相同水平，也不意味着该 head 永久不重要。

“允许少输出信息”是理解零值 sink 的功能性解释。是否真的改善训练或推理质量，需要实验；不能仅从公式推导质量收益。

## 6. Head 输出变小，对后续有什么影响

标准多头 attention 会拼接各 head 输出，再经过输出投影。按 head 分块后可以写成：

$$
Y_i=\operatorname{Concat}(O_i^{(1)},\ldots,O_i^{(H)})W_O
=\sum_h O_i^{(h)}W_O^{(h)}.
$$

若仅 head 1 缩放为 $s_{i1}$ 倍，它对 attention 分支的直接贡献就变成 $s_{i1}O_i^{(1)}W_O^{(1)}$。其他 head 不会自动放大来补偿。

用常见残差结构示意，省略归一化和其他操作：

$$
X_{after}=X_{before}+Y.
$$

Sink 改变的是 attention 分支提供的一份更新，原表示仍通过残差路径保留。之后的 MLP、后续层和词表投影会继续处理这个变化。

因此，减弱某个 head 不等于所有词的 logits 或概率一起变小；特征与投影有正负，后续还有非线性运算。具体预测怎样变化由整个网络决定。

## 7. dsink 是什么，公式怎样得到

`dsink` 是损失 $\mathcal L$ 对 `learnable_sink` 的梯度：

$$
dsink_h=\frac{\partial\mathcal L}{\partial a_h}.
$$

求 $a_h$ 的偏导时固定 Q/K/V，$O_{orig}$ 和 $L_{orig}$ 不随该参数变化。由 $s=\sigma(L_{orig}-a)$：

$$
\frac{\partial s}{\partial a}=-s(1-s),
\qquad
\frac{\partial O_{new}}{\partial a}
=-s(1-s)O_{orig}=-(1-s)O_{new}.
$$

记上游输出梯度为 $dO_{ihd}=\partial\mathcal L/\partial O_{new,ihd}$，定义：

$$
\Delta_{ih}=\sum_d dO_{ihd}O_{new,ihd}.
$$

同一 $a_h$ 被所有 query 共享，所以：

$$
\boxed{dsink_h=-\sum_i\Delta_{ih}(1-s_{ih})
=-\sum_i\Delta_{ih}p^{sink}_{ih}.}
$$

对应代码：

```python
delta = (dout.float() * out.float()).sum(dim=-1)  # [T, Hq]
dsink = -(delta * (1.0 - sink_s)).sum(dim=0)      # [Hq]
dsink = dsink.to(sink_orig_dtype)
```

沿 $D$ 求和得到单个 query/head 的贡献，再沿 $T$ 求和得到共享参数梯度。损失的平均系数已包含在 `dout` 中，不应额外随意除以 token 数。

用梯度下降解释符号：若某个 query 的 $\Delta>0$，沿当前输出方向增大幅度会增大损失，其 sink 梯度贡献为负；更新 $a\leftarrow a-\eta\,dsink$ 会倾向于增大 sink、减小输出。不同 query 的贡献可以抵消；实际优化器还会使用历史状态。

两个易错点：

1. 使用 `out_new` 时不再额外乘 $s$；若用 `out_orig`，公式必须包含 $s(1-s)$。
2. 本实现的 sink logit 没有乘 softmax scale，所以 `dsink` 不再额外乘 $\alpha$。

## 8. 为什么 dQ/dK/dV 也能正确包含 sink 的影响

真实 token 的 score 梯度仍是：

$$
\frac{\partial\mathcal L}{\partial x_{ijh}}
=P_{ijh}\left(\langle dO_{ih},V_{j,g(h)}\rangle-\Delta_{ih}\right).
$$

因此，现有 backward 若用包含 sink 的 $L_{new}$ 重建 $P=e^{x-L_{new}}$，并用 $O_{new}$ 计算 $\Delta$，其 dQ/dK/dV 就已包含 sink 对归一化的影响。`dsink` 是新增参数的梯度，不是给 dQ/dK/dV 再做一次缩放修正。

## 9. 本地源码核对记录

Mimikyu 检查版本：`83c7cf172`。以下路径相对本机仓库 `/Users/kuangjux/codes/mimikyu-dsa`，行号是本次检查时的定位，不是稳定 API。

| 源码 | 位置与确认内容 |
| --- | --- |
| `mmq/mmq/modules/block/memory_optimizer/qkv_attn/ring_sparse_varlen_attn.py` | 125–143 行：`logaddexp` 计算新 LSE，保存 FP32 `sink_s`，缩放输出 |
| 同上 | 229–230 行：recompute 将重算的普通输出乘上保存的 `sink_s` |
| 同上 | 272–314 行：将 sink-adjusted out/LSE 传给 backward，单独计算 `dsink` |
| 同上 | 163–167 行：返回给 teacher 的是 raw LSE；ctx 中用于主 attention backward 的是新 LSE |
| `mmq/mmq/modules/attention/allgather_ring_sparse_attn.py` | 394–415 行：将 out/LSE 传入 `dsa_bwd` |
| `mmq_kernels/mmq_kernels/triton_kernels/dsa/dsa_backward.py` | 1651 行：底层已有 `delta = preprocess(out, dout, head_dim)` |
| `mmq/mmq/modules/attention/cp_attention.py` | 147–151 行：reduce-scatter 处理 dK/dV，不包括上层单独计算的 `dsink` |
| `mmq/mmq/modules/block/submodules/mixer.py` | 1717、1775 行：提取 `dsink` 并作为 sink 输入对应的梯度返回 |

**分布式边界：** 该 attention 函数只对本 rank 的 query 归约 `dsink`。共享参数需要合并各 rank 的梯度贡献，但本次未验证训练 reducer 的完整覆盖，不能断言全局同步已正确或遗漏，也不应未经核对就增加一次 all-reduce。

**数值边界：** 前向将 FP32 `sink_s` 转成输出 dtype 后相乘；反向把已有的 out/dout 转成 FP32 计算。上面的数学等价不意味着 BF16 实现与全 FP32 或融合实现逐位一致。

## 10. 下一次讨论：如何接到 TileLang

本次仅记录已经检查出的接口条件和候选方向，尚未修改或验证 kernel。

当前仓库 `/Users/kuangjux/codes/welm-sparse-attention`：

- `kernels/blackwell/sparse-attn/tilelang_sparse_fwd.py` 的前向输出已包含 sink，但写出的 `Lse` 是真实 token 的 LSE。backward 所需 `LseTotal` 必须通过 `logaddexp(lse_real, sink)` 得到，或修改前向接口直接提供；不能混用。
- `tilelang_sparse_bwd.py` 已接收 FP32 `Delta` 和 `LseTotal`，现有公式可表达 sink-aware dQ/dK/dV，但当前没有 `dsink` 输出。
- 可复用已计算的 `Delta`，按 query tile 生成 FP32 sink 梯度 partial，再归约成 `[Hq]`。这是一种候选方案，具体融合位置和接口留待下一次讨论。
- 候选概率表达式为 `exp(sink - lse_total)`，可避免 `1 - sink_s` 在 `sink_s` 接近 1 时的相减精度损失；替换后需要检查数值差异。
- 当前 fused backward 按 KV block 的 reverse CSR 分工，同一 query 可出现在多个 block。不能在每次遇到 query 时都累加完整的 `-Delta * p_sink`，否则会重复计数。
- 后续需明确归约所有权、参数 dtype、workspace、分布式同步与验证用例；空支持集、极端 sink 和 padding 等边界也应纳入验证。

以上是源码检查和公式推导，没有 GPU 精度或性能实测结论。
