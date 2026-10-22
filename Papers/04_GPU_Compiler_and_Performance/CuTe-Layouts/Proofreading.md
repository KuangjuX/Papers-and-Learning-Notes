# 全文译文校对记录

本记录为 **AI 校对说明**，不属于论文原文，也不是作者发布的勘误。底本为 Colfax Research《Categorical Foundations for CuTe Layouts》，2025 年 9 月 rev1；SHA-256 见[来源记录](source-manifest.txt)。

## 本轮校对范围

2026 年 10 月 22 日，对全部 163 个 PDF 页面（印刷页 1–161，另含扉页和摘要）的中英文正文逐句对照；提取材料共 2168 个文本块。重点检查定义、量词、否定、整除方向、充要条件、函数定义域与陪域、复合顺序、上下标及证明中的引用。断开的数学下标和跨行句子按原页重连，图中的数字、箭头与标签按原页整体提取。

初译使用经用户授权的 Google Translate；本轮由 AI 对照本地底本校对。修正了“右作用”误译为“正确操作”、整除方向不清、否定条件漏译、可处理性与紧致性混淆，以及把“关联的布局”误写成“满足结合律的布局”等问题。术语统一见[总目录](Layout.md#术语约定)。

译文保持原文的论证顺序和图式。明显的原文记号错误用“校注”标识；涉及缺失假设或反例的地方保留原陈述并说明疑点。逐句校对不等于对整篇论文完成形式化证明。

## 影响数学陈述的边界问题

- **引理 2.1.3.29 的退化形状**：$L=(1,2):(5,1)$ 的布局函数依次取 $0,1$，是非递减函数，但布局未排序。原引理没有写出排除此例的假设。见[PDF 第 33 页](Translation-02-Flat-Layouts.md#pdf-page-33)。
- **标准形式的一一对应与单位对象**：按定义 3.1.2.12，唯一态射 $f:()\to()$ 与 $g:()\to(1)$ 都满足标准形式和非退化条件，却编码相同的空布局。定义中的 $n>1$ 条件无法区分这两个陪域。引理 3.1.2.20、定理 3.1.2.21 及其 Nest 版本需要明确单位对象的规范化约定。见[PDF 第 97–99 页](Translation-06-Tuple.md#pdf-page-97)。
- **filter 与非退化性**：观察 3.1.2.19 的表述与此前 filter 的定义不完全相容；例如 $(1):(3)$ 不会被 filter 删除，却是退化布局。删除零步长模态也会改变坐标函数的定义域。见[PDF 第 98 页](Translation-06-Tuple.md#pdf-page-98)。
- **共同细化算法的循环末项**：算法 4.1.1 第 37 行为 `j < len(Y)`。代入 $T=(2)$、$U=(2,3)$，主循环一次后 $i=2,j=2$，末项 $3$ 不会追加，返回的 $U'=(2)$ 不是 $U$ 的细化。原文条件在译文中保留，并给出此反例。见[PDF 第 152 页](Translation-10-Computations.md#pdf-page-152)。

以上是按本版本书面定义检查所得的 AI 判断；没有将后续版本的定义或实现行为代入本底本。

## 逐页校注索引

下列条目汇集译文中的校注，链接可定位到同页原图；“应为”“需补充”等均是校对意见。

- [PDF 第 33 页（印刷第 31 页）](Translation-02-Flat-Layouts.md#pdf-page-33)：本引理原文未排除退化布局。若 $L=(1,2):(5,1)$，则 $\Phi_L$ 的值依次为 $0,1$，因而非递减，但步长 $5,1$ 未排序；所以按字面陈述存在反例，需补充假设或先规范化。
- [PDF 第 35 页（印刷第 33 页）](Translation-02-Flat-Layouts.md#pdf-page-35)：原文这里将包含方向写反了；前面的推导实际证明 $\operatorname{Image}(\Phi_L)\subseteq\operatorname{Image}(\Phi_{\operatorname{sort}(L)})$。等像结论不受影响。
- [PDF 第 43 页（印刷第 41 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-43)：原文这一开头直接从“紧致”推出待证的置换条件，论证顺序有循环。此段实际验证的是“存在该置换条件 ⇒ 紧致”；必要性由后面的归纳论证给出。
- [PDF 第 44 页（印刷第 42 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-44)：原文后一处布局漏写了置换上标，应为 $(\operatorname{sort}(\operatorname{squeeze}(L)))^{\sigma'}$。
- [PDF 第 45 页（印刷第 43 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-45)：原文这里的 $A\perp A$ 应为 $A\perp E$；后面的例 2.1.6.6 才讨论自互补。
- [PDF 第 46 页（印刷第 44 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-46)：右侧的 $L$ 未定义，应为 $A$。
- [PDF 第 53 页（印刷第 51 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-53)：原文式中的 $L$ 应为 $A$。
- [PDF 第 53 页（印刷第 51 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-53)：按本命题的变量约定，原文 $L$ 应为 $A$。
- [PDF 第 54 页（印刷第 52 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-54)：原文限制区间的上界应为 $\operatorname{size}(C_1)$，才能与 $\Phi_{C_1}$ 的定义域一致。
- [PDF 第 55 页（印刷第 53 页）](Translation-03-Flat-Layout-Algebra.md#pdf-page-55)：定义 2.1.7.1 将结果命名为 $C$，后续条件及本备注却写成 $R$，应统一为 $C$。
- [PDF 第 75 页（印刷第 73 页）](Translation-05-Layouts.md#pdf-page-75)：原文将“变体”写成 invariant（不变量）；按本段定义及用途，应读作 variant。
- [PDF 第 77 页（印刷第 75 页）](Translation-05-Layouts.md#pdf-page-77)：本引理的相对基准应为 $\bar S$；原文这里及上一行写成了 $S$。
- [PDF 第 89 页（印刷第 87 页）](Translation-06-Tuple.md#pdf-page-89)：原文量词使用 $n$，陪域却使用 $m$；二者应统一。
- [PDF 第 93 页（印刷第 91 页）](Translation-06-Tuple.md#pdf-page-93)：本页前面在定义到 $\langle\ell\rangle_*$ 的映射时使用了 $\alpha$，而分段式及此处使用 $\alpha'$；应将那个初始映射记为 $\alpha'$，$\alpha$ 留给删去冗余陪域分量后的映射。
- [PDF 第 98 页（印刷第 96 页）](Translation-06-Tuple.md#pdf-page-98)：本句按原文译出，但与此前 filter 的定义不完全相容。例如 $L=(1):(3)$ 已被 filter 保留，却不满足本页的非退化条件；删除零步长模态后，坐标函数的定义域也可能改变。此处不能直接当作已证明结论使用。
- [PDF 第 98 页（印刷第 96 页）](Translation-06-Tuple.md#pdf-page-98)：标准形式的单位边界还需要额外约定。按定义 3.1.2.12 的字面条件，$f:()\to()$ 与 $g:()\to(1)$ 都是标准形式的非退化元组态射，且编码同一空布局；因此本引理与后续一一对应定理在该边界上存在歧义，详见校对记录。
- [PDF 第 99 页（印刷第 97 页）](Translation-06-Tuple.md#pdf-page-99)：原文 $\beta(j)$ 中的指标应为 $i$。
- [PDF 第 99 页（印刷第 97 页）](Translation-06-Tuple.md#pdf-page-99)：本定理沿用引理 3.1.2.20；单位及空元组边界的疑点见校对记录，译文未擅自补充原文没有写出的假设。
- [PDF 第 111 页（印刷第 109 页）](Translation-07-Tuple-Operations.md#pdf-page-111)：本句原文的 $i_1,i_2$ 与正在比较的 $j_1,j_2$ 不一致，应读作 $\alpha(j_1)\le\alpha(j_2)$。
- [PDF 第 113 页（印刷第 111 页）](Translation-07-Tuple-Operations.md#pdf-page-113)：原文本句第一次出现的 $s_i$ 缺少撇号，应为 $s'_i$。
- [PDF 第 113 页（印刷第 111 页）](Translation-07-Tuple-Operations.md#pdf-page-113)：本例首幅图的 $f:(2,3)\to(3,2)$ 与 $g:(10,25)\to(25,10)$ 实际不可复合，与这句话及后图不一致。若按后图及所述恒等态射理解，首幅 $f$ 应为 $(25,10)\to(10,25)$ 的交换态射；原图保持不改。
- [PDF 第 116 页（印刷第 114 页）](Translation-07-Tuple-Operations.md#pdf-page-116)：本段前半的 $\Phi_f$ 是关联布局函数 $\Phi_{L_f}$ 的简写。
- [PDF 第 120 页（印刷第 118 页）](Translation-07-Tuple-Operations.md#pdf-page-120)：一般的 $f^c$ 虽然已排序，却未必已合并；本句用于合并后的布局，不能据此断言任意补态射均已合并。
- [PDF 第 128 页（印刷第 126 页）](Translation-08-Nest.md#pdf-page-128)：原文此处将应排除的对象写成 non-degenerate（非退化）；按后续定义及命题，应为 degenerate（退化）。一一对应所保留的对象是非退化对象。
- [PDF 第 129 页（印刷第 127 页）](Translation-08-Nest.md#pdf-page-129)：原文此句省略了 non-degenerate 限定，但上方对应图明确保留该限定；此处按对应图补明。
- [PDF 第 130 页（印刷第 128 页）](Translation-08-Nest.md#pdf-page-130)：原文漏写 morphism（态射），仅写了 nested tuple。
- [PDF 第 131 页（印刷第 129 页）](Translation-08-Nest.md#pdf-page-131)：原文此句对象混用；所定义的态射应称为 $f$ 的第 $i$ 个模态，而该态射编码的布局是下式中的 $\operatorname{mode}_i(L_f)$。
- [PDF 第 133 页（印刷第 131 页）](Translation-08-Nest.md#pdf-page-133)：按构造，此处应为沿细化 $T'\twoheadrightarrow T$ 的拉回；原文仅写了 $T$。
- [PDF 第 135 页（印刷第 133 页）](Translation-08-Nest.md#pdf-page-135)：原文这里的等式应为 $\alpha'_i(t+1)=\alpha'_i(t)+1$；上述显式映射也直接给出这一关系。另“列主序布局”在此须结合后续整体步长 $e$ 理解，不能一概理解为首步长为 $1$。
- [PDF 第 137 页（印刷第 135 页）](Translation-08-Nest.md#pdf-page-137)：按构造，前推所沿的是细化 $S'\twoheadrightarrow S$；原文这里误写为 $T$。
- [PDF 第 137 页（印刷第 135 页）](Translation-08-Nest.md#pdf-page-137)：本段讨论前推，原文的 pullbacks 应为 pushforwards；后续命题 3.2.5.15 明确陈述前推情形。
- [PDF 第 144 页（印刷第 142 页）](Translation-09-Nest-Operations.md#pdf-page-144)：原文此处未重述可取补条件；构造依赖构造 3.1.5.46，故要求 $f^\flat$ 所在的保基点映射为单射。
- [PDF 第 144 页（印刷第 142 页）](Translation-09-Nest-Operations.md#pdf-page-144)：这里原文引用了正在证明的命题自身；相应平坦情形应参照命题 3.1.5.43。
- [PDF 第 146 页（印刷第 144 页）](Translation-09-Nest-Operations.md#pdf-page-146)：按上下文及下式，这里的对象是嵌套元组态射；原文省略了 morphisms。
- [PDF 第 155 页（印刷第 153 页）](Translation-10-Computations.md#pdf-page-155)：算法可能返回 `None`；本句中“输出 $C$”应理解为确实返回布局时。另算法 4.1.1 第 37 行的边界条件有疑点，见该算法后的校注。
- [PDF 第 155 页（印刷第 153 页）](Translation-10-Computations.md#pdf-page-155)：这里原文的算法编号应为 4.1.2，即前面的可处理布局复合算法。
- [PDF 第 159 页（印刷第 157 页）](Translation-11-Appendix.md#pdf-page-159)：原文将陪域写成 $g$，应为 $Y$。

[返回全文目录](Layout.md) · [主题索引](index.md)
