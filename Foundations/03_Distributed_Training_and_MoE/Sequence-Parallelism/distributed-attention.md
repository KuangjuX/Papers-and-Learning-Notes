# Ring Attention、Ulysses 与在线归一化

基于[原始问答](../../07_Books_and_Technical_References/Interview-AI-Infra/index.md)的 AI 整理。

## Ring Attention：固定本地 Q，轮转 KV

把序列沿 token 维切为 P 份，每卡保留本地 Q 与对应输出，逐步接收其他卡的 KV 分块。每一轮为本地 Q 计算一个 KV 块的贡献，同时可以发送/接收下一块 KV。计算与传输是否能重叠，取决于异步实现、buffer 管理及两者耗时；不能只画环就认定通信被隐藏。依据：[Ring Attention §3](https://arxiv.org/html/2310.01889v4#S3)。

例：P=2、N=8。卡 0 的 Q 为 token 0…3，第一轮计算本地 K/V 0…3，第二轮计算收到的 4…7；卡 1 对自己的 Q 做对应计算。非 causal 情况两轮都需要。Causal 情况要按全局 token 索引排除未来块，同一位置块内部仍用三角 mask；交错或 zigzag 分片不能直接套用连续分片的 `step <= rank` 判断。

## 为什么不能直接相加局部 Softmax 输出

对一个 query，记第 j 块的 score 为 s_jt，定义最大值、分母与未归一化输出：

$$
m_j=\max_t s_{jt},\qquad
\ell_j=\sum_t e^{s_{jt}-m_j},\qquad
u_j=\sum_t e^{s_{jt}-m_j}v_{jt}.
$$

例：A 块只有 score=0、value=2；B 块只有 score=ln(3)、value=10。两块分别得到 (m,ell,u)=(0,1,2) 和 (ln(3),1,10)，各自归一化输出为 2 和 10。直接相加得到 12，简单平均得到 6，都不是全局 Attention。

合并两块时选 m=max(m_A,m_B)，分母和输出都重缩放：

$$
\ell=e^{m_A-m}\ell_A+e^{m_B-m}\ell_B,\qquad
u=e^{m_A-m}u_A+e^{m_B-m}u_B,\qquad O=u/\ell.
$$

代入上例，A 的缩放为 1/3，B 为 1；ell=4/3，u=2/3+10=32/3，O=8。这对应全局概率 (1/4,3/4)，验证了合并规则。

若局部 kernel 返回已归一化的 O_j 与 LSE_j=log(sum exp(s_jt))，也可维护归一化结果，用 logaddexp 合并分母，再按分母比例合并 O：

$$
L=\operatorname{logaddexp}(L_A,L_B),\qquad
O=e^{L_A-L}O_A+e^{L_B-L}O_B.
$$

例：L_A=0，L_B=ln(3)，合并 L=ln(4)，输出仍为 (1/4)×2+(3/4)×10=8。原 Notion 的 `update_out_and_lse` 属于这种合并思路，但未记录源码版本，本篇不保证其 API 签名。

因此“每轮 renormalization 还是最后 renormalization”要先说明保存的状态：维护未归一化 (m,ell,u) 时，每轮要做尺度调整，最终除以 ell；维护 (O,LSE) 时，每轮合并已经归一化的局部输出。两种表示都需要正确权重。全 mask 的块作为空贡献处理，不能直接计算 `-inf - -inf`。前置推导见 [Online Softmax](../../04_GPU_Compiler_and_Performance/Ops/normalization-and-softmax.md)。

## Ulysses：sequence 分片与 head 分片之间的转换

考虑标准 MHA，Q/K/V 全形状为 [B,N,H,d]，P 整除 N 和 H。最初每卡持有 [B,N/P,H,d]。Attention 前一次 **All-to-All** 将其转为 [B,N,H/P,d]：每卡取得完整序列的一部分完整 heads。计算这些 heads 后，第二次 All-to-All 把输出恢复为 [B,N/P,H,d]。依据：[DeepSpeed Ulysses 官方设计](https://github.com/deepspeedai/DeepSpeed/blob/master/blogs/deepspeed-ulysses/README.md#core-design-of-deepspeed-ulysses)。

例：B=1、N=8、H=4、d=2、P=2。卡 0 初始持有前 4 个 token 的全部 4 个 heads；交换后持有全部 8 个 token 的 head 0、1，卡 1 持有全部序列的 head 2、3。每卡能对自己完整的 heads 独立计算 Attention。逆交换后，各卡重新得到自己 4 个 token 的全部 heads。

原文将它写成“本地 token 分片再乘本地列分片权重 → All-Gather K/V → Reduce-Scatter 输出”。这既混淆了另一类 sequence/tensor parallel 通信，也漏掉了交叉的 token-head 组合：卡 0 算前半 token 的前半 heads、卡 1 算后半 token 的后半 heads，并没有覆盖全部 QKV。不同 token 行也不能直接按对应位置求和。单独切分一个 head 的 d 维时，则需要在 Softmax 前完成点积的必要归约，不能把已过 Softmax 的输出随意相加。

实际 MQA/GQA 的 KV heads、通信组及 TP 组合需要额外设计，不能把上面的标准 MHA 形状直接套用。

| 比较点 | Ring | Ulysses 基本形式 |
| --- | --- | --- |
| 本地 Attention 工作 | 本地 Q，逐块遍历全局 KV | 全序列，一部分完整 heads |
| 主要通信 | 环上 KV 传递 | Attention 前后两次 All-to-All |
| 结果合并 | 在线统计/输出合并 | 布局转换回 token 分片 |
| 关键约束 | overlap、buffer、负载与 mask | head 划分、All-to-All 网络与形状 |

## Varlen、causal 与任意 mask 不等价

原文把 Jagged Sequence 与 custom mask 合并讨论，并推测 FlashAttention 不支持。应分别确认：变长 batch 如何打包、causal mask 如何对齐、是否可传任意稀疏模式。官方接口已有 `flash_attn_varlen_func`；这不意味着任意二维 mask 都被同一个接口接受。依据：[FlashAttention 官方接口及 2.0/2.1 变更说明](https://github.com/Dao-AILab/flash-attention#changelog)。

例：两条长度为 2、3 的序列可拼成 5 个 token，边界为 `[0,2,5]`；varlen attention 仍应让两条序列相互不可见。这个 packed batch 的“锯齿状”边界，与在单条序列内任意屏蔽 BigBird 式块，是两个问题。具体接口与支持范围按后端、版本核对，不能保留成跨版本的“不支持”结论。
