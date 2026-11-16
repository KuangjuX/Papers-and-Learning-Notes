<a id="a-loop-transformation-theory-and-an-algorithm-to-maximize-parallelism-开篇摘记-未完成"></a>

# A Loop Transformation Theory and an Algorithm to Maximize Parallelism

[所属主题](../../index.md)

这篇论文研究如何组合循环变换，在 general loop nests 中暴露最大并行度。这里的并行度指 **DOALL 循环的数量，即可并行执行的循环层数**；DOALL 要求该循环不承载迭代间依赖。它不是线程数或程序加速比。（§III-B，p. 456）

Michael E. Wolf、Monica S. Lam，IEEE TPDS 2(4)，1991，pp. 452–471。[论文 DOI](https://doi.org/10.1109/71.97902) · [Zotero PDF](zotero://open-pdf/library/items/R3PQDJEZ)。下文页码均为期刊页码。

## Introduction

**Interchange** 改变循环嵌套顺序，**reversal** 反转遍历方向，**skewing** 将一个循环坐标与另一个坐标线性组合，**tiling** 将迭代空间分块。这些变换可用于并行化和提高数据局部性，困难在于如何组合它们：一个变换可能只是为后续变换创造条件，无法逐步按即时收益决定；skewing 又有无穷多个整数系数，不能穷举所有组合。（[§I，p. 452][p452]）

已有矩阵方法适用于依赖能由一组固定整数距离向量表示的循环，包括许多稠密线性代数代码以及作者所讨论的 systolic array 算法。在这一模型下，$n$ 层循环至少可暴露 $n-1$ 个并行维度，并可在所有循环维度上利用**数据局部性**。一般循环的依赖需要 direction vectors 表示，可能必须保留两层或更多串行循环，不能沿用这一并行度保证。论文将距离与方向信息纳入同一矩阵框架，直接求解满足依赖约束的组合变换。（[§I，pp. 452–453][p452]）

## Unimodular Transformations

用整数列向量 $x=(x_1,\ldots,x_n)^T$ 表示一次迭代，分量从最外层循环到最内层排列。若源迭代 $x$ 必须先于目标迭代 $y$ 执行，则依赖距离为 $d=y-x$。顺序循环按字典序遍历，因此迭代间依赖必须字典序为正：第一个非零分量为正。例如 $(1,-2)^T$ 合法，外层坐标的推进已经确定先后关系；全零向量是同一次迭代内的关系，不作为这里的跨迭代约束。（§II-A，pp. 453–454；§V-A，p. 459）

Interchange、reversal 和 skewing 可分别表示为整数矩阵；组合变换是这些矩阵按执行顺序相乘。它们统一为**幺模变换**：$T$ 的元素为整数且 $\det T=\pm1$，从而 $T^{-1}$ 也是整数矩阵，迭代点在整数格上保持一一对应。迭代坐标和依赖同时变换为

$$
x'=Tx,\qquad d'=Ty-Tx=T(y-x)=Td.
$$

对固定距离向量集合 $D$，变换合法的充要条件是

$$
\forall d\in D,\qquad Td>_{\mathrm{lex}}0.
$$

因此可以直接判断最终组合的合法性，无须要求每个中间步骤都合法。原文的例子中，依赖 $(1,-1)^T$ 经 interchange 变成 $(-1,1)^T$，单独交换不合法；再反转新的外层循环，则变成 $(1,1)^T$，组合变换合法。（[§II-B–C，定理 2.1，pp. 454–455][p454]）

## Direction Vectors

一般依赖可能只知道某维距离的方向，而不知道固定距离。作者用整数区间表示每个分量：精确距离 $a$ 是 $[a,a]$，方向符号则表示

$$
 +\equiv[1,+\infty)\cap\mathbb Z,\qquad
 -\equiv(-\infty,-1]\cap\mathbb Z,\qquad
 *\equiv\mathbb Z.
$$

一个方向向量 $d$ 对应所有分量分别取值所形成的距离向量集合 $E(d)$。表示本身必须反映执行先后关系，例如完全串行的二维循环不能只写成 $(*,*)$，而要细化为 $(0,+)$ 与 $(+,*)$：前者约束同一外层迭代内的执行，后者约束不同外层迭代的执行。（[§IV，p. 458][p458]）

作者定义区间加法和整数倍乘，使 $Td$ 仍可直接计算，但结果可能丢失分量之间的关联。例如原文用

$$
T=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad d=(0,+)^T.
$$

精确变换后的集合为 $\{(1,1)^T,(2,2)^T,\ldots\}$，范围运算只能表示成 $(+,+)^T$，额外包含了两维不相等的距离。因此，对方向向量用范围运算检查 $Td>_{\mathrm{lex}}0$ 是合法性的**充分条件**；未通过该判据不等于精确依赖一定被违反。对于只由 permutation 与 reversal 组成的变换，不产生这种信息损失，论文给出其充要判据。（[§IV，定理 4.1–4.2，p. 459][p459]）

## Fully Permutable Nests 与 Wavefront

一个完全可置换循环组（fully permutable nest）允许组内循环任意交换顺序而保持合法。判断时只需考虑尚未由更外层循环满足的依赖；这些依赖在组内各维的分量必须非负。完全可置换不等于已可并行，它提供了可以进一步集中依赖的结构。（§II-C，定理 2.2，p. 455）

对于有限的、字典序为正的距离向量集合，可以由外向内 skew 内层循环，把负分量补为非负，最终使整个循环巢完全可置换。原文例子 $D=\{(0,1),(1,-2),(1,-1)\}$ 中，令 $j'=j+2i$，依赖变为 $\{(0,1),(1,0),(1,1)\}$。负距离有有限下界，才能选择足够大的固定 skewing 系数；方向向量 $(1,-)$ 的第二维负向无界，不能用这一办法保证非负。（§III-A，定理 3.1，p. 455；§VI-B，p. 461）

对 $k$ 层完全可置换循环，wavefront 变换把组内坐标之和放到最外层作为时间坐标，其余 $k-1$ 个独立坐标作为空间坐标。组内承载的非零依赖各分量非负，求和后严格为正，因而全部由时间循环承载，同一时间步内的迭代可以并行。作者证明：组内若承载依赖，最大为 $k-1$ 个 DOALL 维度；若不承载依赖，则为 $k$ 个。（[§III-B，p. 456][p456]；[附录 B，定理 B.2，p. 468][p468]）

简化算例（AI 补充）：取 $D=\{(1,0)^T,(0,1)^T\}$，令

$$
\begin{pmatrix}t\\s\end{pmatrix}
=\begin{pmatrix}1&1\\1&0\end{pmatrix}
\begin{pmatrix}i\\j\end{pmatrix}.
$$

两条依赖分别变成 $(1,1)^T$ 和 $(1,0)^T$：$t$ 都增加 1，所以按 $t$ 顺序执行，每个固定 $t$ 内的 $s$ 可并行。原论文的二维循环、skewing 后的空间及其波前见 [Fig. 1–3，pp. 455–457][p455]。

## Canonical Form 与并行化算法

含方向信息时，整个循环巢未必能成为一个完全可置换组。规范形式因此是一系列嵌套的完全可置换组，并让每个外层组尽可能大。算法先找最大外层组，固定后递归处理剩余循环；进入内层时，只保留尚未由外层满足的依赖。再对各组进行 wavefront 变换，提取各组的 DOALL 维度。（[§V-B，p. 460][p460]）

作者的最优性论证依赖于最大外层组的结构：任意两个合法外层完全可置换组所张成的行空间，都能包含在某个共同的合法外层组中。因而可先构造最大外层组，再递归求内层，而不会损失幺模变换所能暴露的最大 DOALL 数量。这是给定依赖模型与变换空间内的结论。（§V-B；[附录 B，定理 B.5–B.6，p. 470][p470]）

求最大外层组是最困难的步骤。实用算法 `Find_FPNest` 按以下顺序缩小问题：

1. **排除 serializing loops。** 若某循环维度在当前依赖集合中既出现负向无界分量，又出现正向无界分量，那么构造外层完全可置换组的矩阵行在该维的系数只能为零。这些循环暂时不能进入当前外层组，但外层满足部分依赖后，内层问题会重新判断。（§VI-A，定理 6.1，p. 461）
2. **用 SRP 扩充组。** 尝试 permutation、reversal、skewing 的组合 $T=SRP$，将更多循环的相关依赖分量变为非负。$P$ 是置换矩阵，$R$ 的对角元为 $\pm1$，$S$ 是单位对角的下三角矩阵。只需最终组合合法，单独应用 $P$ 可能不合法。（§VI-B，p. 462）
3. **对剩余循环使用 time-cone 方法。** 寻找与各非零依赖内积为正的时间方向，使依赖由新的外层循环承载。二维情形中，把时间向量 $(t_1,t_2)$ 约成互素整数，利用扩展 Euclid 算法求整数 $x,y$ 满足 $t_1y-t_2x=1$，即可补成幺模矩阵；再用 skewing 形成完全可置换组。（§VI-C，pp. 462–463，Fig. 6）

**理论上的规范形式最优性与高效算法的保证范围不同。** 作者推荐只对剩余问题使用二维 time-cone 方法：剩余待处理循环不超过两层时最优，更多时按循环对尝试属于启发式。整体复杂度为 $O(n^3d)$，其中 $n$ 为循环深度、$d$ 为依赖向量数量；仅 SRP 就足够时为 $O(n^2d)$。论文保证深度小于 5 的循环巢能获得最大并行度，不能据此断言任意更深循环都最优。（[§VI，pp. 461–463][p461]；[§VIII，p. 466][p466]）

## 并行粒度、Tiling 与代码生成

Wavefront 自然把 DOALL 循环放在串行时间循环内，适合细粒度并行。粗粒度并行则希望尽量把 DOALL 放到外层，使一个并行任务包含更多计算、减少同步。对距离向量，若某行向量 $s$ 满足对所有依赖都有 $s\cdot d=0$，就可用它构造外层 DOALL 坐标。原文例子中依赖为 $(1,1)^T$，令 $i'=i-j,\ j'=j$，则依赖变为 $(0,1)^T$，外层 $i'$ 可并行。一般可从依赖矩阵的零空间构造这些坐标。（[§III-B2，p. 456][p456]）

若每个 wavefront 都做全局 barrier，同步粒度仍可能过细。完全可置换组也可以安全 tiling：先分块，再对 tile 的 controlling loops 做 wavefront，让每次同步之间执行一个 tile 的工作；或者在 tile 层使用 DOACROSS，以依赖 tile 之间的局部同步代替整条波前的全局 barrier。块内仍可提取细粒度并行，有跨迭代数据复用时也可改善局部性。**Tiling 本身不是幺模变换**：它引入额外的块级循环，通常将 $n$ 层变成 $2n$ 层，而幺模变换保持维数。（[§III-B3，pp. 456–458，Fig. 4–5][p456]）

确定组合矩阵后，循环体通过 $x=T^{-1}x'$ 替换原索引；边界则从原循环的整数不等式出发，变换索引后重新计算每层上下界。论文的方法支持由 `min`、`max` 和取整除法构成的指定边界形式，非单位步长需先规范化；不能满足边界形式的循环不能参与这套变换。生成结果可能含冗余边界计算或没有实际循环体执行的外层迭代，因此暴露更多 DOALL 层数并不直接给出运行时间收益。（[§VII，pp. 463–465][p463]）

[p452]: zotero://open-pdf/library/items/R3PQDJEZ?page=1
[p454]: zotero://open-pdf/library/items/R3PQDJEZ?page=3
[p455]: zotero://open-pdf/library/items/R3PQDJEZ?page=4
[p456]: zotero://open-pdf/library/items/R3PQDJEZ?page=5
[p458]: zotero://open-pdf/library/items/R3PQDJEZ?page=7
[p459]: zotero://open-pdf/library/items/R3PQDJEZ?page=8
[p460]: zotero://open-pdf/library/items/R3PQDJEZ?page=9
[p461]: zotero://open-pdf/library/items/R3PQDJEZ?page=10
[p463]: zotero://open-pdf/library/items/R3PQDJEZ?page=12
[p466]: zotero://open-pdf/library/items/R3PQDJEZ?page=15
[p468]: zotero://open-pdf/library/items/R3PQDJEZ?page=17
[p470]: zotero://open-pdf/library/items/R3PQDJEZ?page=19
