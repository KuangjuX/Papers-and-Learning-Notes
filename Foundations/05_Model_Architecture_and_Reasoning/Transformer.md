# Transformer

<a id="introcution"></a>

## Token Representation

Transformer 可以用于机器翻译，也可以构成自回归语言模型。原论文的 encoder–decoder 结构与 decoder-only 语言模型需要区分，前者包含读取 encoder 输出的交叉注意力。[Attention Is All You Need](../../Papers/01_Attention/Transformer/github-reading.md)

Tokenizer 将输入转为 token IDs，embedding 矩阵将 ID 映射为向量。随着 attention 与前馈层处理，向量逐步包含上下文信息。语言模型的输出投影把隐藏向量映射为词表 logits；是否与 embedding 共享权重属于模型设计，并非必然只是将同一个矩阵转置。

Softmax 将 logits 转成概率。对固定 logits，用正温度 $T$ 计算 $\operatorname{softmax}(z/T)$；增大 $T$ 会使分布趋于平缓。它处理的是未归一化分数，不是对已有概率再除一次分母。

## Attention

<a id="single-head-attention"></a>

对一个 head，行向量约定下的计算为：

$$
Q=XW_Q,\qquad K=XW_K,\qquad V=XW_V,
$$

$$
P=\operatorname{softmax}\left(QK^T/\sqrt{d_k}+M\right),\qquad O=PV.
$$

$M$ 是 mask：允许的位置为 0，被排除的位置为负无穷。Value 来自输入表示的投影，然后由概率矩阵加权；不是将 $W_V$ 直接乘在 attention score 上。若某个 query 对两个位置的概率为 $[1/4,3/4]$，对应 value 为 2、6，则输出为 5。

<a id="multi-head-attention"></a>

多个 heads 使用各自的 Q/K/V 投影，拼接输出后经过 $W_O$：

$$
Y=\operatorname{Concat}(O_1,\ldots,O_H)W_O.
$$

例如两个 head 各输出 4 维，拼接后为 8 维；取 $W_O\in\mathbb R^{8\times6}$，就映射回 6 维模型表示。$W_O$ 组合各 head 的输出，不是标准 Transformer 必须对 $W_V$ 做低秩分解得到的矩阵。单个 head 的 $W_V$ 与对应 $W_O$ 分块可以组合分析，但不能据此混淆二者在完整数据流中的位置。

在 causal decoder 中，每个位置只能访问自身及之前的位置。逐 token 生成时，最后一个位置的隐藏表示用于预测下一个 token；这个表示已经通过前面的层读取历史，并不意味着历史信息不参与预测。

<a id="一些比较好的文章"></a>

## 参考资料

- [Transformer 详解](https://wmathor.com/index.php/archives/1438/)
