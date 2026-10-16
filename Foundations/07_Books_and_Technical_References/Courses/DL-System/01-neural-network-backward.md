# 神经网络反向传播：理论与数学推导

## 1. 链式法则与上游梯度

设损失 $L$ 为标量，中间变量 $z=f(x,y)$。若 $x,y,z$ 都是标量，则

$$
\frac{\partial L}{\partial x}
=\frac{\partial L}{\partial z}\frac{\partial z}{\partial x},
\qquad
\frac{\partial L}{\partial y}
=\frac{\partial L}{\partial z}\frac{\partial z}{\partial y}.
$$

其中 $\partial L/\partial z$ 是上游梯度，$\partial z/\partial x$ 与 $\partial z/\partial y$ 是局部导数。反向传播反复应用这条链式法则，从 $L$ 逐层求出各输入和参数的梯度。

对于向量 $\mathbf y=f(\mathbf x)$，令雅可比矩阵 $J_{ij}=\partial y_i/\partial x_j$，并将梯度记为列向量，则

$$
\nabla_{\mathbf x}L=J^{\mathsf T}\nabla_{\mathbf y}L,
\qquad
\frac{\partial L}{\partial x_j}
=\sum_i\frac{\partial L}{\partial y_i}\frac{\partial y_i}{\partial x_j}.
$$

这个乘积称为向量—雅可比积（VJP）。反向传播只需计算该乘积，无须显式构造完整的 $J$。

## 2. 多路径的梯度累加

若变量 $x$ 经多条路径影响 $L$，各路径的贡献相加。例如 $L=x^2+x$ 中，乘法 $x\cdot x$ 的两个输入位置分别贡献 $x$，加法的另一条路径贡献 $1$，因此

$$
\frac{\mathrm dL}{\mathrm dx}=x+x+1=2x+1.
$$

在 $x=3$ 时，梯度为 $7$。对共享中间变量也一样：若 $u=x^2$ 且 $L=u+u$，则

$$
\frac{\partial L}{\partial u}=1+1=2,
\qquad
\frac{\mathrm dL}{\mathrm dx}
=\frac{\partial L}{\partial u}\frac{\mathrm du}{\mathrm dx}
=2(2x)=4x.
$$

计算图是有向无环图。同一节点可能接收多个下游节点的梯度，因此须先将这些贡献求和，再用该节点的局部导数继续向输入传播；这对应从输出到输入的反向拓扑顺序。

若 $E(v)$ 是从 $v$ 出发的计算图边的集合，$c(e)$ 是边 $e$ 所指向的下游节点，$J_e$ 是该输入位置的局部雅可比矩阵，则一般形式为

$$
\nabla_v L
=\sum_{e\in E(v)}J_e^{\mathsf T}\nabla_{c(e)}L.
$$

按边求和保留了 $x\cdot x$ 中指向同一乘法节点的两份贡献。

## 3. 逐元素运算

设 $X,Y,Z$ 形状相同，$G=\partial L/\partial Z$，符号 $\odot$ 与 $\oslash$ 分别表示逐元素乘、除。对每个元素应用标量链式法则，得到

| 前向运算 | $\partial L/\partial X$ | $\partial L/\partial Y$ |
| --- | --- | --- |
| $Z=X+Y$ | $G$ | $G$ |
| $Z=X-Y$ | $G$ | $-G$ |
| $Z=X\odot Y$ | $G\odot Y$ | $G\odot X$ |
| $Z=X\oslash Y$ | $G\oslash Y$ | $-(G\odot X)\oslash(Y\odot Y)$ |

例如 $z_i=x_i/y_i=x_i y_i^{-1}$。由幂函数求导，$\partial z_i/\partial y_i=-x_i/y_i^2$，所以 $\partial L/\partial y_i=-g_i x_i/y_i^2$。除法要求 $y_i\ne 0$。

## 4. 求和与均值

若 $s=\sum_{i=1}^{N}x_i$，则 $\partial s/\partial x_i=1$。令 $g=\partial L/\partial s$，有

$$
\frac{\partial L}{\partial x_i}=g,
\qquad i=1,\ldots,N.
$$

若 $m=\frac1N\sum_{i=1}^{N}x_i$，则

$$
\frac{\partial L}{\partial x_i}
=\frac{1}{N}\frac{\partial L}{\partial m}.
$$

对于按某些轴归约的张量求和，同一输出元素对应的所有输入元素都接收该输出元素的上游梯度；反向结果恢复到输入形状。

## 5. 广播的反向传播

设 $X\in\mathbb R^{B\times F}$、$b\in\mathbb R^F$，$Y_{ij}=X_{ij}+b_j$。令 $G_{ij}=\partial L/\partial Y_{ij}$，则

$$
\frac{\partial L}{\partial X_{ij}}=G_{ij},
\qquad
\frac{\partial L}{\partial b_j}=\sum_{i=1}^{B}G_{ij}.
$$

一般地，一个输入元素若在前向广播后参与多个输出位置，反向梯度就是这些位置的贡献之和，即沿广播引入的维度求和。

## 6. 矩阵乘法

设

$$
C=AB,
\qquad
A\in\mathbb R^{m\times k},\quad
B\in\mathbb R^{k\times n},\quad
C\in\mathbb R^{m\times n},
$$

并令 $G=\partial L/\partial C\in\mathbb R^{m\times n}$。由

$$
C_{ij}=\sum_{r=1}^{k}A_{ir}B_{rj}
$$

可知 $A_{pq}$ 只影响 $C$ 的第 $p$ 行，且 $\partial C_{pj}/\partial A_{pq}=B_{qj}$。因此

$$
\frac{\partial L}{\partial A_{pq}}
=\sum_{j=1}^{n}G_{pj}B_{qj},
\qquad
\boxed{\frac{\partial L}{\partial A}=GB^{\mathsf T}}.
$$

同理，$B_{pq}$ 只影响 $C$ 的第 $q$ 列，且 $\partial C_{iq}/\partial B_{pq}=A_{ip}$，因此

$$
\frac{\partial L}{\partial B_{pq}}
=\sum_{i=1}^{m}A_{ip}G_{iq},
\qquad
\boxed{\frac{\partial L}{\partial B}=A^{\mathsf T}G}.
$$

两式的形状分别为 $(m\times n)(n\times k)=m\times k$ 和 $(k\times m)(m\times n)=k\times n$，与 $A$、$B$ 一致。

若 $C=\alpha AB+\beta D$，且 $D$ 与 $C$ 同形状，则

$$
\frac{\partial L}{\partial A}=\alpha GB^{\mathsf T},
\qquad
\frac{\partial L}{\partial B}=\alpha A^{\mathsf T}G,
\qquad
\frac{\partial L}{\partial D}=\beta G.
$$

## 7. 反向传播的起点

标量损失的起始梯度为

$$
\frac{\partial L}{\partial L}=1.
$$

若输出为向量 $\mathbf y$，需要给定同形状的种子向量 $\mathbf g$。这等价于对标量 $s=\mathbf g^{\mathsf T}\mathbf y$ 求输入梯度：

$$
\nabla_{\mathbf x}s
=J^{\mathsf T}\mathbf g.
$$

因此，一次反向传播计算一个给定种子向量对应的 VJP；不同种子向量会得到不同的输入梯度。
