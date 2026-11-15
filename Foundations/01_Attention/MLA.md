# Multi-head Latent Attention

MLA 用低秩表示压缩每个 token 的 KV cache，并通过矩阵吸收避免在解码时展开全部 heads 的 K/V。历史 token 仍然保留；减少的是每个 token 的缓存表示。与之相比，MQA/GQA 通过减少独立 KV heads 压缩缓存。[DeepSeek-V2 §2.1](https://arxiv.org/html/2405.04434v5#S2.SS1)

<a id="_1-mla-的目标-解决-kv-cache-困境"></a>

## KV Joint Compression

使用列向量，令当前层输入为 $h_t$，共享的 KV latent 为：

$$
c_t^{KV}=W^{DKV}h_t,\qquad
k_{t,i}^{C}=W_i^{UK}c_t^{KV},\qquad
v_{t,i}=W_i^{UV}c_t^{KV}.
$$

$i$ 是 attention head，$C$ 表示不施加 RoPE 的内容分支。Key 和 Value 从**同一个** $c_t^{KV}$ 上投影，不是分别缓存 `k_hat` 与 `v_hat`。不同 heads 的上投影矩阵不同，恢复出的 K/V 也不同。Query 可另做低秩投影以节省训练激活，但不进入历史 KV cache。[§2.1.2，式 9–13](https://arxiv.org/html/2405.04434v5#S2.SS1.SSS2)

例如取 $c=[1,2]^T$、$W^{UK}=\operatorname{diag}(2,3)$、$W^{UV}=\operatorname{diag}(4,5)$，同一 latent 可以恢复 $k^C=[2,6]^T$ 和 $v=[4,10]^T$。这个小例子只验证共享表示与不同投影的关系，不表示模型配置。

<a id="_2-核心矛盾-低秩压缩与-rope-位置编码的-不兼容"></a>

## Matrix Absorption

内容分支的点积满足：

$$
(q_{t,i}^{C})^T k_{s,i}^{C}
=(q_{t,i}^{C})^T W_i^{UK}c_s^{KV}
=\left((W_i^{UK})^Tq_{t,i}^{C}\right)^T c_s^{KV}.
$$

把 $W_i^{UK}$ 吸收到 query 侧后，query 可以直接与缓存 latent 做点积。以上例的 $k^C=[2,6]^T$ 和 $q^C=[3,1]^T$ 为例，原点积为 12；吸收后 query 为 $[6,3]^T$，与 $c=[1,2]^T$ 点积仍为 12。

Value 侧也可将线性映射移出加权求和：

$$
o_{t,i}=\sum_s p_{t,s,i}W_i^{UV}c_s^{KV}
=W_i^{UV}\left(\sum_s p_{t,s,i}c_s^{KV}\right).
$$

若两个 latent 为 $[1,0]^T$、$[0,2]^T$，权重为 $1/4,3/4$，沿用 $W^{UV}=\operatorname{diag}(4,5)$，先展开再聚合与先聚合再上投影均得到 $[1,7.5]^T$。$W_i^{UV}$ 还可与输出投影对应的 head 分块组合；这些等式不要求各 head 共用 attention 概率。[§2.1.2](https://arxiv.org/html/2405.04434v5#S2.SS1.SSS2)

如果直接对展开后的 content key 施加 RoPE，位置相关的旋转矩阵会插入上述乘法，不能对所有历史位置吸收到同一个 query 投影中。MLA 因而将位置分支与内容分支分开。

<a id="_3-mla-的解决方案-分而治之"></a>

## Decoupled RoPE

每个 head 有位置 query $q_{t,i}^{R}$，各 head 共享位置 key $k_s^R$。它们应用 RoPE，content 分支保持不旋转。吸收后的 query 记作 $q_{t,i}^{A}=(W_i^{UK})^Tq_{t,i}^{C}$，则：

$$
a_{t,s,i}=\frac{(q_{t,i}^{A})^Tc_s^{KV}+(q_{t,i}^{R})^Tk_s^R}{\sqrt{d_h+d_h^R}},
\qquad p_{t,s,i}=\operatorname{softmax}_s(a_{t,s,i}).
$$

例如内容点积为 12、位置点积为 4，$d_h=d_h^R=2$，logit 为 $(12+4)/\sqrt4=8$。这说明两条分支在同一 logit 中合并，再对可见位置归一化。[§2.1.3，式 14–19](https://arxiv.org/html/2405.04434v5#S2.SS1.SSS3)

因此，一个 token 在一层的压缩 cache 是 $[c_t^{KV};k_t^R]$。忽略量化元数据、对齐与并行切分，长度为 $N$、共 $L$ 层、每元素 $b$ 字节时，缓存为 $NL(d_c+d_h^R)b$。DeepSeek-V2 的 $d_c=512$、$d_h^R=64$，对应每层每 token 576 个元素；若以 BF16 的 2 字节存储，则为 1,152 字节。[§3.1.2](https://arxiv.org/html/2405.04434v5#S3.SS1.SSS2)

缓存压缩比例取决于比较对象的 head 数、维度和 dtype，不能用单个 head 的维度变化替代总缓存比较。MLA 与稀疏选择结合时，选择名单决定读取哪些 latent entries；对应数据流见 [DSA 的 MLA 表示与执行](../../Papers/01_Attention/DeepSeek-DSA/deepseek-sparse-attention-dsa.md#_5-什么是-latent-kv-entry)。
