# DeepSeek-V3.2 与 DSA：年度总结摘记

来源：[个人文章全文归档](../../../Foundations/05_Model_Architecture_and_Reasoning/Research-Reviews/llm-2025.md)；本文从原文章节拆出，2026-10-22 整理。

保留从 lightning indexer 到 Top-k 主注意力的初读记录，配合已有正式算法笔记复习。

## 整理与复习

- 详细流程见 [DSA 算法笔记](deepseek-sparse-attention-dsa.md)。
- 主 Attention 只读入选位置，不等于永久删除未入选的 KV；后续 query 仍可能选择它们。
- 固定预算使主 Attention 的访问量下降；不能据此断言包含全历史 indexer 打分的端到端复杂度也严格变为线性。
- “Lighting”应为“Lightning”；旧文章的投影来源描述应以实际模型和上述独立笔记为准。

## 原笔记相关章节

### DeepSeek-V3.2

DeepSeek-V3.2 主要创新性在于提出了 **DSA（DeepSeek Sparse Attention）**，DSA 是一种可以在训练中学习的稀疏注意力算法，相比原有的固定模式的稀疏注意力，可以在训练中被使用。

#### DeepSeek Sparse Attention

DSA 包含两个组件，一个**闪电索引器（lighting indexer）**和一个**细粒度词元选择器（fine-grained token selection mechanism)**。

![](../../../Foundations/05_Model_Architecture_and_Reasoning/Research-Reviews/images/work-summary-02.jpg)

DeepSeek Sparse Attention 架构图

首先针对 Lighting Indexer，DeepSeek 给出了一个数学公式如下：

$I_{t,s} = \sum^{H^I}_{j=1}w_{t,j}^{I} \cdot ReLU(q_{t, j}^{I} \cdot k_{s}^{I})$ 其中：

- $H_I$ ​：索引器的头数，数量较少，是保证效率的关键；
- $h_t \in \mathbb{R}^d$ ：当前的 query token 向量， $h_s \in \mathbb{R}^d$ ：前置的 token 向量；
- $q_{t, j}^{I} \in \mathbb{R}^{d_I}$ 、 $w_{t, j}^{I} \in \mathbb{R}$ ：由 query token $h_t$ 生成的查询向量和权重；
- $k_s^{I} \in \mathbb{R}^{d_I}$ ​：由前置 token $h_s$ ​ 生成的键向量；
- $ReLU$ ：作为激活函数，选择它的核心原因是**提升计算吞吐量**。

在 DSA 中，首先通过输入的 $h_t$ 投影得到 $c_t^Q$ ，这是通过 **MLA（Multi-head Latent Attention）**得到的，这个 $c_t^Q$ 同时为 DSA Indexer 和 MQA 同时提供输入，随后在 Lighting Indexer 阶段通过以下步骤进行计算：

- 从 $c_t^Q$ ​ 中**部分投影**得到 $q_t^{I}$ （对应论文的 $q_{t, j}^{I}$ ​）；
- 从所有前置 token 的 $c_t^{KV}$ ​（MLA 的 latent key-value 向量）中**部分投影**得到 $k_t^I$ （对应论文的 $k_s^I$）；
- 从 $c_t^{Q}$ ​中投影得到 $w_{t}^I$ ​（对应论文的 $w_{t, j}^I$ ）；
- 对 $q_t^I$ ​和 $k_t^I$ **部分施加 RoPE 位置编码**，再计算内积 + ReLU + 加权求和，得到索引分数（图中 “柱状图” 是分数的可视化）。

最终得到的计算分数 $I_{t, s}$ 被输入作为下一个细粒度 Top-K 选择。

这里有几个值得注意的点，这里的 $H_I \ll H$ ，同时选择 ReLU 可以提高吞吐量，同时该模块对精度的要求较低，可以使用 FP8 进行计算。

第二步是做 Token 的细粒度选择，在论文中给出了一个公式：

$u_t = Attn(ht, \{c_t | I_{t, s} \in Top-k(I_t,:)\})$ 这里 $I_{t, s}$ 代表的含义为，t 位置的 token 认为 s 位置的 token 的重要程度，得到的分数越高，重要性越强。DSA 通过筛选排名前 k 的分数对应的 token 位置，记为 $S_{topk} = \{ s_1, s_2,...,s_k\}$ ，随后 DSA 保留对应的 MLA 隐向量并丢弃所有其他位置的向量。

通过这一机制，DSA 将注意力就按的复杂度从 $o(L^2)$ 降到了 $O(KL)$ ，其中 K 是一个预设的，远小于 L 的一个常数，这种动态的基于内容分数的选择机制相比于固定的稀疏模式提供了更大的灵活度。
