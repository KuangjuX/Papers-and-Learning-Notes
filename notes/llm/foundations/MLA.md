# Multi-head Latent Attention

在标准 Transformer 模型中，自回归生成（即一个一个地生成 token）的性能瓶颈在于 KV 缓存 (KV Cache)。

- 在生成第 N+1 个 token 时，模型需要关注（attend to）前面所有的 N 个 token。
- 为了避免重复计算，我们会将前面 N 个 token 的 Key (K) 和 Value (V) 向量存储在 GPU 显存中。这个存储区域就是 KV 缓存。
- 随着上下文长度 N 的增加，KV 缓存的大小会线性增长，其大小为 2 * N * d_model * num_layers。
- 当 N 非常大时（例如几十万 token），KV 缓存会占用巨大的显存，并且从显存（HBM）中读取巨大的 K 和 V 矩阵成为主要的耗时操作，拖慢了推理速度。

MLA 的目标就是显著减小 KV 缓存的大小，从而加速长上下文推理。

它的核心思想非常巧妙：将 Key 和 Value 投影到一个尺寸小得多的“潜空间”（Latent Space），而 Query 保持其完整的维度。

- 标准 MHA：Q, K, V 都被投影到相同的维度 d_head。
- DeepSeek MLA：
    - Query (Q) 被投影到完整的头维度 d_head，以保留其丰富的表达能力。
    - Key (K) 和 Value (V) 被投影到一个非常小的压缩维度 d_k_comp 和 d_v_comp。
    通过这种方式，存储在 KV 缓存中的 K 和 V 向量变得非常短，从而实现了对 KV 缓存的大幅压缩。DeepSeek 论文中提到，他们可以将 KV 缓存压缩 16倍（例如，从 128 维压缩到 8 维）。


## 1. MLA 的目标：解决 KV Cache 困境

首先，我们要明白 MLA 要解决的核心问题是什么。在大型语言模型（LLM）进行推理（生成文本）时，为了避免重复计算，模型会将过去所有 token 的 Key (K) 和 Value (V) 向量缓存起来，这就是所谓的 KV Cache。

问题：随着生成文本的长度增加，KV Cache 会变得非常巨大，消耗大量显存，成为推理性能的主要瓶颈。
现有方案：
MQA (Multi-Query Attention)：所有头共享同一份 K 和 V。极大地减少了 KV Cache，但可能导致模型质量下降。
GQA (Grouped-Query Attention)：将头分组，组内共享 K 和 V。是 MHA 和 MQA 之间的一个折中。
MLA 的定位：DeepSeek 提出 MLA，旨在找到一种新的方法，既能显著压缩 KV Cache，又能保持甚至超越原始 MHA (Multi-Head Attention) 的性能。

## 2. 核心矛盾：低秩压缩与 RoPE 位置编码的“不兼容”
要理解 MLA 的精妙之处，必须先理解它所解决的一个关键技术矛盾。

a) 理想的压缩方式：低秩分解与矩阵吸收
MLA 的一个核心思路是低秩分解 (Low-Rank Decomposition)，这与 LoRA 的思想非常相似。

常规 MHA：`K = X * W_k`，`V = X * W_v`。其中 `W_k` 和 `W_v` 是大矩阵。我们需要缓存完整的 `K` 和 `V`。
低秩思路：将 `W_k` 分解为两个小矩阵 `W_k_down` 和 `W_k_up`。
`k_hat = X * W_k_down` （`k_hat` 是一个低维度的向量，比如 256 维）
`K = k_hat * W_k_up` （K 恢复到原始维度）
如果我们只用这个方法，会有一个巨大的优化潜力：我们只需要缓存低维的 k_hat 就行了！

为什么？因为在计算注意力分数 `score = Q * K^T` 时，我们可以利用矩阵乘法的结合律，进行所谓的 “矩阵吸收”。

常规计算：先计算 `K = k_hat * W_k_up`，缓存 K，然后计算 `Q * K^T`。
矩阵吸收：`score = Q * (k_hat * W_k_up)^T = Q * (W_k_up^T * k_hat^T) = (Q * W_k_up^T) * k_hat^T`。
我们可以把 `W_k_up^T` 这个变换“吸收”到 `Q` 的计算中。在推理时，我们直接用新的 `Q'` 去乘以缓存的、低维的 `k_hat`。
这样，我们成功地避免了计算和存储高维的 `K`，实现了 KV Cache 的压缩。

b) 矛盾出现：RoPE 的搅局

问题来了，现代 LLM 普遍使用 RoPE (Rotary Position Embedding) 来注入位置信息。RoPE 是通过一个与位置相关的旋转矩阵 R 来作用于 Q 和 K 的。

现在，注意力分数的计算变成了：
`score = (R_q * Q) * (R_k * K)^T`

如果我们代入低秩分解的 K：
`score = (R_q * Q) * (R_k * (k_hat * W_k_up))^T`

由于矩阵乘法不满足交换律，R_k 这个旋转矩阵被卡在了中间，我们无法再像之前那样，将 W_k_up 提前“吸收”到 Q 的计算中。R_k 会随着 token 位置的变化而变化，我们必须在每次计算时都用它去乘以高维的 K。

这就是论文所说的“RoPE与低秩KV不兼容”。 如果强行使用低秩分解，就必须放弃“矩阵吸收”这个优化，导致每次都要重新计算所有历史 token 的 K 向量，这会极大地拖慢推理速度。

## 3. MLA 的解决方案：“分而治之”
面对这个矛盾，MLA 提出了一种非常聪明的“分而治之”的策略：将 Key (和 Query) 拆分为两个部分，分别处理内容和位置信息。

第 1 部分：内容部分 (Content Part) - `k_hat`

这部分负责捕捉 token 的核心语义信息，它不使用 RoPE。

1. 计算：通过低秩分解计算 `k_hat` 和 `v_hat`。
`k_hat = X * W_k_down`
`v_hat = X * W_v_down`

2. 特点：
维度低（论文中 r=256），适合缓存。
没有 RoPE，因此可以完美地应用我们前面提到的“矩阵吸收”技巧。在计算注意力分数时，`W_k_up` 和 `W_v_up` 的变换可以被吸收到 Q 和最终输出的计算中。

3. 缓存：我们只需要缓存低维的 `k_hat` 和 `v_hat`。这是 KV Cache 压缩的主要来源。

第 2 部分：位置部分 (Position Part) - `k_rope`

这部分专门负责引入 RoPE 位置信息。

1. 计算：通过一个独立的、非常小的线性变换，并应用 RoPE。
`k_rope = RoPE(X * W_k_rope)`

2. 特点：
维度极低（论文中 `d_rope = d/2 = 64`）。
包含 RoPE，专门用于编码位置。
采用 MQA 模式，即每层所有头共享同一份 `k_rope`。
缓存：由于其维度极低且所有头共享，缓存 `k_rope` 的开销非常小。
整合：最终的注意力计算
最终的注意力分数是这两部分分数的加和：

`Score(Q_i, K_j) = (q_hat_i^T * k_hat_j) + (q_rope_i^T * k_rope_j)`

- `q_hat_i^T * k_hat_j`：内容与内容的匹配分数，通过矩阵吸收高效计算。
- `q_rope_i^T * k_rope_j`：位置与位置的匹配分数，常规计算，但因为维度低且是 MQA，所以开销很小。
得到最终的注意力权重后，再与 V 向量（由 `v_hat` 扩展而来）相乘，得到最终的输出。
