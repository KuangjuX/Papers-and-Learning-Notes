---
tags:
  - topics/sparse-attention
date: 2026-09-18
---

# GQA 稀疏 Attention：共享 Selection 与计算形状

本文讨论 GQA、共享选块和矩阵形状之间的关系，使用符号描述，不对应特定模型配置。假设每个 query 在同一 GQA 组内共享一份 Selection；其他 Selection 设计需要另行分析。

前向数据流见 [DSA 前向路径：Indexer、块选择与分页 Attention](dsa-gqa-forward.md)。

## 1. 三种 head 概念

| 概念 | 职责 |
| --- | --- |
| 主 Attention Q heads | 每个 head 独立计算 attention 分布和输出 |
| 主 Attention KV heads | 为映射到该组的 Q heads 提供 K/V 向量 |
| Indexer heads | 参与相关性打分；不是主 Attention Q heads 的另一个名称 |

GQA 将多个 Q heads 映射到较少的 KV heads。在均匀分组的情形下，每组 Q heads 数为：

$$
G=H_q/H_{kv}.
$$

公开定义与模型背景见 [GQA 论文](https://arxiv.org/abs/2305.13245)。分布式实现中，应区分全模型和设备本地的 head 数；KV 切分或复制会影响本地分组关系。

## 2. 共享 KV 向量与共享 Selection 是两个条件

同一 GQA 组使用同一个 KV head 的向量，但 GQA 本身没有定义稀疏选块方式。Selection 可以按 query 共享，也可以带 head/group 轴。

| Selection 表示 | 描述的共享范围 |
| --- | --- |
| `[query, selected_blocks]` | 每个 query 共用一份块列表 |
| `[query, group, selected_blocks]` | 每个 query、每个 group 有自己的列表 |
| `[query, head, selected_blocks]` | 每个 query、每个 head 有自己的列表 |

在本文假设下，固定一个 GQA 组，query t 的集合记为 $S_t$。不含 sink、softcap 或其他附加项的基本表达式是：

$$
o_{t,h}=\operatorname{softmax}\left(q_{t,h}K_{S_t}^{\top}/\sqrt{D_q}\right)V_{S_t}.
$$

集合不带组内 head 下标，但不同 head 的 Q 不同。因此访问相同 K/V 和相同 token IDs，不要求 attention logits、权重或输出相同。

不同 KV groups 即使选中相同 token IDs，其 K/V 向量也不要求相同，不能把它们无条件合并成针对同一份 K/V 的矩阵行。

## 3. 把一组 Q heads 组织成矩阵

固定一个 query 和一个含 B 个 token 的 KV block：

$$
Q_t\in\mathbb R^{G\times D_q},\qquad
K_b\in\mathbb R^{B\times D_q},\qquad
V_b\in\mathbb R^{B\times D_v}.
$$

Q 的每一行是一个独立 head，不是沿 head 求和或把所有 heads 合成一个长向量。QK 的形状为：

$$
S_{t,b}=Q_tK_b^\top\in\mathbb R^{G\times B}.
$$

softmax 沿该 head 的全部选中 KV tokens 归一化。令 $P_{t,b}$ 为完整归一化权重在 block b 上的切片，则：

$$
O_{t,b}=P_{t,b}V_b\in\mathbb R^{G\times D_v},\qquad
O_t=\sum_b O_{t,b}.
$$

增加 B、Dq 或 Dv，不会改变组内 Q 行数 G。这是矩阵形状的关系，不是 kernel latency 或 Tensor Core 利用率的测量。

各 block 分别 softmax 后直接相加，一般不等价于对完整选中集合归一化。在线分块计算需要维护跨块的归一化与输出状态。[FlashAttention 论文](https://arxiv.org/abs/2205.14135)解释了这种分块计算的基本机制。

## 4. 多个 query 不等于多行共享同一紧凑 KV 矩阵

Dense attention 的多个 query 可以对同一个 K/V block 计算，再处理各自的 mask。逐 query 的 sparse Selection 则不要求相同，例如：

```text
query A → blocks {a, c}
query B → blocks {b, c}
```

普通 GEMM 的所有行共享右操作数。将两个 query 的 Q 堆叠，不会让两份不同的紧凑 KV 列表自动成为同一矩阵。相同的列下标必须有一致的 K/V 含义。

因此需要分别确认：

- 有多少 query 行。
- 哪些 Q heads 使用同一份 K/V 向量。
- 哪些 query/head 的 Selection 相同。
- 实际 kernel 如何组织这些行和列。

这些条件不能由模型的总 Q-head 数代替。在逐 query 页表接口中，多个 query 是独立的逻辑序列；接口本身不规定它们在 GPU 上如何分配 CTA、warp 或 MMA tile。

## 5. Indexer score 的 head 维不同

Weighted-ReLU indexer 先对各 index heads 做点积和非线性，再按权重沿 head 归约，产生 token score。主 Attention 则保留各 Q head 的输出。

选块之前，indexer 面对候选历史 K；选块之后，主 Attention 面对各 query 的选中集合。两阶段使用不同的张量和归约方式，因此某个 indexer kernel 的 padding、布局或性能结果不能直接套用到主 Attention。

## 6. Decode、Verify 与性能结论的证据边界

通常 decode 每请求处理一个新 query，verify 每请求可以处理多个候选 query。共用一个请求的历史 KV cache，不意味着各候选的 Selection 相同。

只知道 head 数、query 数或推理阶段，不能确定实际运行是访存瓶颈还是计算瓶颈。矩阵的数学形状也不能直接说明设备指令 padding、有效吞吐或加速比。

阅读 profile 时需要区分：

| 观测量 | 含义 |
| --- | --- |
| 单个 kernel duration | 对应设备 kernel 的执行时间 |
| 多个 kernel duration 之和 | 各次执行时间累计，可能包含互相重叠的区间 |
| GPU annotation 跨度 | 一个标注范围的起止时间差，可包含 kernel 间隙 |
| 请求延迟 | 用户请求的端到端时间，不能由某个局部累计值直接替代 |

比较不同实现时，输入形状、Selection、dtype、数值语义和计时边界必须一致，性能差异才有可解释的含义。本笔记不提供未测量的速度倍率或优化方案。

## 7. 关联阅读

- [DSA 前向路径与分页 Attention](dsa-gqa-forward.md)
- [GQA 论文](https://arxiv.org/abs/2305.13245)
- [FlashAttention 论文](https://arxiv.org/abs/2205.14135)
- [MSA / DSA indexer 对照](../../notes/llm/minimax-msa/msa-vs-dsa-indexer.md)
