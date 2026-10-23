# MoE：路由、Grouped GEMM、梯度与计算成本

AI 整理：[个人笔记](zhihu-reading.md)、[SonicMoE §2、附录 C](https://arxiv.org/html/2512.14080v1)。系统优化见 [SonicMoE](../../../Papers/03_Distributed_Training_and_MoE/SonicMoE/sonicmoe.md)。

## 从一个 token 到稀疏专家计算

记 $T$ 为一个 microbatch 的 token 数，$d$ 为模型宽度，$E$ 为专家总数，$K$ 为每个 token 选择的专家数。这里讨论 token-choice Top-k；实际模型可以使用不同 gate、分组约束和共享专家。

路由器先算分数 $S$，选出专家集合 $\mathcal E_t$，再聚合输出：

$$
S=\operatorname{softmax}(XW_g),\qquad
O_t=\sum_{e\in\mathcal E_t}s_{t,e}Y_{e,t}.
$$

$s_{t,e}$ 表示最终使用的路由权重；是否在 Top-k 后重新归一化由模型决定，不能把所有 MoE 都当成同一种约定。离散选择和连续权重也是不同的对象。

**可计算的例子。** 四个专家的分数为 $[0.6,0.3,0.08,0.02]$，选择前两个。假设它们的输出是 $[2,0]$ 和 $[0,4]$。使用原分数时输出为 $[1.2,1.2]$；若将两个入选分数重新归一化为 $[2/3,1/3]$，则输出为 $[4/3,4/3]$。路由相同，权重约定不同，输出也不同。

## Grouped GEMM 处理的是专家收到的不等长矩阵

对专家 $e$，收集它实际收到的 $T_e$ 个 token：

$$
X_e\in\mathbb R^{T_e\times d},\quad
H_e=X_eW_{1,e}\in\mathbb R^{T_e\times2n},\quad
A_e=\operatorname{SwiGLU}(H_e)\in\mathbb R^{T_e\times n},\quad
Y_e=A_eW_{2,e}\in\mathbb R^{T_e\times d}.
$$

因此 $W_{1,e}$ 的形状是 $d\times2n$，$W_{2,e}$ 是 $n\times d$。Gather 提供 token 行和原始位置的对应关系；聚合时必须利用这一关系回到原 token，而非直接把专家输出按存储次序相加。

**可计算的例子。** $T=4,E=3,K=2$，四个 token 分别选择专家 $(0,1),(1,2),(0,2),(0,1)$。三个专家的输入行号为 $[0,2,3]$、$[0,1,3]$、$[1,2]$，所以 $T_e$ 为 $[3,3,2]$，合计 $8=TK$。若 $d=4,n=2$，三个第一层 GEMM 的 $M$ 是 $3,3,2$，其他维度相同；这就是 varlen-$M$ Grouped GEMM。反向计算权重梯度要沿 token 行归约，所以可变维度改成 GEMM 的 $K$。

## 为什么路由权重梯度可以绕开专家输出缓存

记传入的输出梯度为 $D_t=\partial L/\partial O_t$。固定一个已选中的 token–expert 配对，忽略偏置，有：

$$
\frac{\partial L}{\partial s_{t,e}}
=\langle D_t,Y_{e,t}\rangle
=\langle D_tW_{2,e}^{\mathsf T},A_{e,t}\rangle.
$$

第二个等式利用 $Y_{e,t}=A_{e,t}W_{2,e}$ 和内积的结合关系。令 $G_{e,t}=D_tW_{2,e}^{\mathsf T}$，就能在求激活梯度时顺带计算 $ds_{t,e}$，不必专门缓存宽度为 $d$ 的 $Y_{e,t}$。这里求的是路由权重的梯度，尚未包含 softmax 等 gate 函数的链式法则，也不是对离散 Top-k 索引求导。

**可计算的例子。** $A=[2]$、$W_2=[3,4]$、$D=[1,2]$，则 $Y=[6,8]$，直接内积得到 $ds=6+16=22$。先求 $G=[1,2][3,4]^{\mathsf T}=11$，再算 $\langle G,A\rangle=22$，结果相同。若路由权重 $s=0.5$，则 $dY=[0.5,1]$、$dA=sG=5.5$；计算 $ds$ 时应使用未乘 $s$ 的 $G$。

其他专家梯度为：

$$
dH_e=\operatorname{dSwiGLU}(s_e\odot G_e,H_e),\qquad
dW_{1,e}=X_e^{\mathsf T}dH_e,\qquad
d\widetilde X_e=dH_eW_{1,e}^{\mathsf T},\qquad
dW_{2,e}=(s_e\odot A_e)^{\mathsf T}D_e.
$$

$s_e$ 按行广播，$D_e$ 是按该专家的 token 索引取得的梯度；最后对同一 token 的 $d\widetilde X_e$ 求和。

**形状与数值例子。** 若一个专家只有一行输入 $X_e=[1,2]$、$dH_e=[3,4]$，则 $dW_1=X_e^{\mathsf T}dH_e=\begin{bmatrix}3&4\\6&8\end{bmatrix}$。若 $W_1$ 为 $2\times2$ 单位矩阵，输入梯度就是 $[3,4]$。这也验证了权重梯度沿 token 维度归约，而输入梯度保留 token 行。

## 算术强度的公式包含哪些假设

按论文 §2.2 的简化口径，只统计两个 GEMM 的主要 IO，使用 BF16／FP16 的 2 字节元素，并省略 $H_e$ 的额外写回和重读、路由及索引等开销：

$$
F_e=4T_edn+2T_end=6T_edn,
$$

$$
B_e=4T_en+6nd+4T_ed,
\qquad
I_e=\frac{F_e}{B_e}
=\frac{3}{2/d+2/n+3/T_e}.
$$

旧文在列举单步写回字节数后直接给出这个简化总式，容易误以为它包括所有中间量。这里的 $B_e$ 不是完整实现的实测 HBM 流量；不能拿它直接预测任意实现耗时。

**可计算的例子。** $T_e=128,d=1024,n=256$，两次 GEMM 共 $201,326,592$ FLOPs，简化 IO 为 $2,228,224$ 字节，算术强度约 $90.35$ FLOP/byte。如果将 $n$ 减半到 128，算术强度降为约 $73.14$ FLOP/byte。这说明 GEMM 变小并不保证硬件执行更高效。

若路由均匀，$T_e\approx T\rho$；令激活率 $\rho=K/E$、专家粒度 $G=d/n$，则：

$$
I_e\approx\frac{3}{(2+2G)/d+3/(T\rho)}.
$$

固定 $d$ 时，提高 $G$ 或降低 $\rho$ 都使分母增加，算术强度下降。该方向性依赖上述口径；不均匀路由时应逐专家使用实际 $T_e$。

**可计算的例子。** $T=1024,K=4,E=32$，则平均 $T_e=128$。保持 $K=4$ 而把 $E$ 增至 64，平均 $T_e$ 降到 64。在 $d=1024,n=256$ 下，算术强度从 $90.35$ 降到约 $52.97$ FLOP/byte。增加专家总数保持稀疏 FLOPs，却减少了每个专家对权重的复用。

## Tile 填充浪费与改变路由是两件事

若专家 GEMM 的 token tile 高度为 $M_{tile}$，需要计算的物理行数近似为：

$$
\widetilde T_e=M_{tile}\left\lceil T_e/M_{tile}\right\rceil,
\qquad
\eta_e=T_e/\widetilde T_e.
$$

**可计算的例子。** $T_e=129,M_{tile}=128$，需要两个 tile，共 256 行，只有约 50.4% 的行有有效 token。普通 padding 保持全部路由不变，只遮蔽无效行；SonicMoE 的 token rounding 会调整专家实际接收的 token 数，属于模型路由变化，必须额外检查训练和推理质量。
