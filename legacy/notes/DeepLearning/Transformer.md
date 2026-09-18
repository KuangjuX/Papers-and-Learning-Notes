# Transformer

## Introcution

用于机器翻译

```
          ---------------------
Inputs -> |Encoders -> Decoders| -> Outputs
          ---------------------
```

首先将 words 分成 tokens。

遇到的第一个矩阵 **Embedding Matrix**，代表了单词库，每个单词是向量的一列，叫做 $W_E$。这些 Embedding Vectors 在训练中被确定（相同含义的词有类似的向量值）。开始的时候每个向量只能编码单个单词的含义。流经这个网络的意义在于能够使这些向量获得比单个词更丰富具体的含义。

**Unembedding Matrix** 与 Embedding 含义类似，行列对调。叫做 $W_U$。

**Softmax** 用于对概率进行归一化。Softmax with **temperature**，效果是当 T 较大时，给低值赋予更多权重。

## Attention

Attention 将互相不关联的向量联系起来。当经过多层 Attention 后预测后一个 token 的生成将完全基于序列中的最后一个向量。

### Single Head Attention

一个向量和其他向量进行关联，这样被编码为了另一组向量，叫做 **Query** ，$W_Q$。第二个需要的矩阵是 **Key Matrix**，与每个嵌入向量相乘，产生的第二个向量叫做 **Key**，可以把 Key 视为想要回答 Query。Key 与 Query 相乘，得到相关性矩阵，得到的数越大，相关性越大，通过 softmax 归一化变为概率矩阵，叫做 Attention Pattern。为了避免后方 token 影响前方 token，需要使用 Mask。

引入第三个矩阵，**Value Matrix** 乘前面的结果，得到值向量，用于给嵌入向量增加相关性信息。

Value Matrix 参数量很大，将其化为两个矩阵相乘（Low Rank 低秩分解）。Output 矩阵实际上就是把 Value 矩阵拆解的结果。

### Multi-Head Attention

每个 Attention 都有不同 Q, K, V。多头 Attention 可以使模型学习到根据上下文来改变语义的多种方式。

## 一些比较好的文章

- [Transformer 详解](https://wmathor.com/index.php/archives/1438/)