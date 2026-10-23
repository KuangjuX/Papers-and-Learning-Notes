# 第 2.2 节：嵌套元组
[译文总目录](Layout.md) · [第 2.1 节：合并、紧致性、补布局与可处理性](Translation-03-Flat-Layout-Algebra.md) · [第 2.3 节：布局](Translation-05-Layouts.md)
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](Proofreading.md)。

## PDF 第 59 页 · 原书第 57 页
<a id="pdf-page-59"></a>

<a id="paper-section-2-2"></a>

### 2.2 嵌套元组

在本节中，我们将介绍嵌套元组，它们是定义完全通用布局所需的元组的概括。

<a id="paper-section-2-2-1"></a>

### 2.2.1 轮廓

嵌套元组 <img src="./assets/p059-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由其展平（普通元组）及其轮廓（描述 <img src="./assets/p059-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的括号模式）决定。我们精确地定义轮廓如下。

定义 2.2.1.1。轮廓 P 是以下两者之一：

![原文公式、图示或代码（PDF 第 59 页）](./assets/p059-visual-005.png)

2. 对某个 r ≥ 0，由轮廓 P₁, …, Pᵣ 组成的元组 P = (P₁, …, Pᵣ)。

将所有轮廓组成的集合记为 Profile。

示例 2.2.1.2. 以下是轮廓的一些示例。

![原文公式、图示或代码（PDF 第 59 页）](./assets/p059-visual-008.png)

让我们定义轮廓的一些重要属性。

定义 2.2.1.3. 假设 <img src="./assets/p059-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个轮廓。

• P 的秩为（原文此行将 P 写为 X）：

![原文公式、图示或代码（PDF 第 59 页）](./assets/p059-visual-011.png)

当 P = (P₁, …, Pᵣ) 为轮廓元组时，值为 r。

• <img src="./assets/p059-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的长度为

![原文公式、图示或代码（PDF 第 59 页）](./assets/p059-visual-013.png)

当 P = (P₁, …, Pᵣ) 为轮廓元组时，值为上式所示的长度之和。

• <img src="./assets/p059-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的深度为

![原文公式、图示或代码（PDF 第 59 页）](./assets/p059-visual-015.png)

当 P = (P₁, …, Pᵣ) 为轮廓元组时，值为 1 + max₁≤ᵢ≤ᵣ depth(Pᵢ)。

示例 2.2.1.4. 以下是轮廓的一些示例，以及它们的秩、长度和深度：

![原文公式、图示或代码（PDF 第 59 页）](./assets/p059-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 59 页原页](./assets/page-059.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.2 Nested Tuples

In this section, we introduce nested tuples, which are the generalization of tuples needed to define layouts in full generality.

2.2.1 Profiles

A nested tuple S is determined by its flattening, which is an ordinary tuple, and its profile, which describes parenthesization pattern on S. We define profiles precisely as follows.

Definition 2.2.1.1. A profile P is either

2. a tuple P = (P1, . . . , Pr) of profiles P1, . . . , Pr for some r ≥0.

We write Profile for the set of profiles.

Example 2.2.1.2. Here are some examples of profiles.

Let’s define some important attributes of profiles.

Definition 2.2.1.3. Suppose P is a profile.

• The rank of X is

r P = (P1, . . . , Pr) is a tuple of profiles.

• The length of P is

i=1 len(Pi) P = (P1, . . . , Pr) is a tuple of profiles.

• The depth of P is

1 + max1≤i≤r(depth(Pi)) P = (P1, . . . , Pr) is a tuple of profiles.

Example 2.2.1.4. Here are some examples of profiles, together with their rank, length, and depth :</pre>

</details>

## PDF 第 60 页 · 原书第 58 页
<a id="pdf-page-60"></a>

定义 2.2.1.5. 假设 <img src="./assets/p060-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有 <img src="./assets/p060-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.630em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓如果 <img src="./assets/p060-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.424em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p060-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p060-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模态为

P，当 depth(P) = 0 时（此时 i = r = 1）；

Pᵢ，当 P = (P₁, …, Pᵣ) 的深度至少为 1 时。

示例 2.2.1.6. 如果 <img src="./assets/p060-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.416em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p060-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态为

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-004.png)

下面的符号将会很有用。

记号 2.2.1.7。设轮廓 P 的深度大于 0。对任意 1 ≤ j ≤ rank(P)，记

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-006.png)

轮廓支持的最重要运算是代入：若 Q 是长度为 m 的轮廓，P₁, …, Pₘ 也是轮廓，则对每个 1 ≤ i ≤ m，将 Q 的第 i 个分量替换为 Pᵢ，便得到新轮廓 (P₁, …, Pₘ)Q。更准确地说，有如下定义。

定义 2.2.1.8。设 Q 是长度为 m 的轮廓，P₁, …, Pₘ 为轮廓。它们的 Q 代入是轮廓

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-008.png)

定义如下。写入 <img src="./assets/p060-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.937em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p060-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.656em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• 如果 <img src="./assets/p060-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.802em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p060-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们定义 <img src="./assets/p060-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.410em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• 再设 d > 0，并且已经对所有深度小于 d 的轮廓 Q′ 定义了 Q′ 代入。可写成

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-011.png)

其中每个模态 <img src="./assets/p060-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:6.797em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都有深度 <img src="./assets/p060-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.027em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果对于每个 <img src="./assets/p060-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.430em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们设置

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-012.png)

然后我们定义

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-013.png)

示例 2.2.1.9. 如果 <img src="./assets/p060-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.510em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p060-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:11.265em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-014.png)

更一般地说，如果 <img src="./assets/p060-b030-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.281em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有 <img src="./assets/p060-b030-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.916em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p060-b030-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.742em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓，则

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-015.png)

是普通的拼接。

![原文公式、图示或代码（PDF 第 60 页）](./assets/p060-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 60 页原页](./assets/page-060.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 2.2.1.5. Suppose P is a profile with rank(P) = r. If 1 ≤i ≤r, then the ith mode of P is

P depth(P) = 0 (hence i = r = 1),

Pi P = (P1, . . . , Pr) has depth ≥1.

Example 2.2.1.6. If P = ((∗, ∗), (()), ((∗, (∗, ∗)))) then the modes of P are

The following notation will be useful.

Notation 2.2.1.7. Suppose P is a profile of depth &gt; 0. For any 1 ≤j ≤rank(P), we write

The most important operation supported by profiles is substitution: If Q is a profile of length m, and P1, . . . , Pm are profiles, then we can obtain a new profile (P1, . . . , Pm)Q by substituting the ith entry of Q with the profile Pi, for each 1 ≤i ≤m. More precisely, we have the following definition.

Definition 2.2.1.8. Suppose Q is a profile of length m, and suppose P1, . . . , Pm are profiles. Then the Q-substitution of P1, . . . , Pm is the profile

defined as follows. Write depth(Q) = d and rank(Q) = r.

• If d = 0, then m = 1, and we define (P1)Q = P1.

• Suppose next that d &gt; 0, and that we have defined Q′-substitution for all profiles Q′ of depth &lt; d. We can write

where each mode Qi = modei(Q) has depth &lt; d. If for each 1 ≤i ≤r, we set

then we define

Example 2.2.1.9. If Q = (∗, ∗) and P1 = (∗, ∗), P2 = (∗, ∗, ∗),

More generally, if Q = (∗, . . . , ∗) is the profile with depth(Q) = 1 and len(Q) = rank(Q) = r, then

is ordinary concatenation.</pre>

</details>

## PDF 第 61 页 · 原书第 59 页
<a id="pdf-page-61"></a>

旁注 2.2.1.10。Q 代入可以用运算子（operad）来解释。轮廓的集合 Profile 具有

一个（非对称）运算子的结构：其中集合

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-002.png)

构成 Profile 的 n 元运算集合。如果 n = m₁ + ··· + mᵣ，那么结构映射

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-003.png)

由 Q 代入给出。也可以在这个非对称运算子上构造余自由对称运算子；这相当于在各个 n 元运算集合上赋予平凡的对称群作用。

<a id="paper-section-2-2-2"></a>

### 2.2.2 基本定义

定义了轮廓及其基本属性后，我们现在可以定义嵌套元组。

定义 2.2.2.1. 如果 <img src="./assets/p061-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.761em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个集合，则包含 <img src="./assets/p061-b009-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.761em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的分量的嵌套元组 <img src="./assets/p061-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一对 <img src="./assets/p061-b009-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.436em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中包含

1. 一个分量属于 V 的元组 X♭ = (x₁, …, xₘ)，称为 X 的展平；以及

2. 长度为 <img src="./assets/p061-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.332em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓 <img src="./assets/p061-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.525em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 称为 <img src="./assets/p061-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.361em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓

将所有分量属于集合 V 的嵌套元组组成的集合记为 Nest(V)。

示例 2.2.2.2. 以下是嵌套元组的一些示例，以及它们的展平和轮廓。

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-011.png)

符号 2.2.2.3. 我们有时会写

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-012.png)

用 <img src="./assets/p061-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.349em;width:8.115em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和轮廓 <img src="./assets/p061-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.941em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示嵌套元组

观察 2.2.2.4。如果 <img src="./assets/p061-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.761em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任意集合，那么根据定义，我们有下列拉回方块：

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-014.png)

注记 2.2.2.5。根据轮廓的递归定义，也可以等价地将分量属于 V 的嵌套元组定义为以下两者之一：

1. <img src="./assets/p061-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.259em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元素或

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 61 页原页](./assets/page-061.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Aside 2.2.1.10. There is an operadic interpretation of Q-substitution. The set Profile of profiles has

the structure of a (non-symmetric) operad: the set

forms the collection of n-ary operations of Profile, and if n = m1 + · · · + mr, then the structure map

is given by Q-substitution. One can also form the cofree symmetric operad on this non-symmetric operad, which amounts to endowing the sets of n-ary operations with trivial symmetric group action.

2.2.2 Basic definitions

Having defined profiles and their basic properties, we can now define nested tuples.

Definition 2.2.2.1. If V is a set, then a nested tuple X with entries in V is a pair (X♭, P) consisting of

1. a tuple X♭= (x1, . . . , xm) with entries in V , called the flattening of X, and

2. a profile prof(X) = P of length m, called the profile of X.

We write Nest(V ) for the set of all nested tuples with entries in a set V .

Example 2.2.2.2. Here are some examples of nested tuples, together with their flattening and profile.

Notation 2.2.2.3. We sometimes write

to denote a nested tuple with X♭= (x1, . . . , xm) and profile prof(X) = P.

Observation 2.2.2.4. If V is any set, then by definition, we have a pullback square

Remark 2.2.2.5. Given the recursive definition of profiles, we could equivalently define a nested tuple with entries in V to be either

1. an element of V , or</pre>

</details>

## PDF 第 62 页 · 原书第 60 页
<a id="pdf-page-62"></a>

2. 嵌套元组的元组，其分量位于 <img src="./assets/p062-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.259em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中

让我们定义嵌套元组的一些重要属性。嵌套元组 <img src="./assets/p062-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的每个此类属性都通过其展平 <img src="./assets/p062-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.406em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或其轮廓 <img src="./assets/p062-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.835em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 继承

定义 2.2.2.6. 假设 <img src="./assets/p062-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个嵌套元组，其分量位于 <img src="./assets/p062-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.260em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中

• <img src="./assets/p062-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的秩为 <img src="./assets/p062-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.401em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• <img src="./assets/p062-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的长度为 <img src="./assets/p062-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.314em;width:11.705em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• <img src="./assets/p062-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的深度为 <img src="./assets/p062-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.433em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• 如果是 <img src="./assets/p062-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:3.252em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p062-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的大小为 <img src="./assets/p062-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.314em;width:8.506em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.2.2.7. 以下是整数嵌套元组的一些示例，以及它们的秩、长度、深度和大小：

![原文公式、图示或代码（PDF 第 62 页）](./assets/p062-visual-008.png)

示例 2.2.2.8. 深度为 0 的嵌套整数元组只是一个整数。

例 2.2.2.9。深度为 1 的整数嵌套元组就是普通整数元组。如果 X 是这样的嵌套元组，则 rank(X) = len(X)。

定义 2.2.2.10. 假设 <img src="./assets/p062-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.288em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个嵌套元组，其中 <img src="./assets/p062-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.815em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果是 <img src="./assets/p062-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.461em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么 <img src="./assets/p062-b014-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p062-b014-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模态就是嵌套元组

![原文公式、图示或代码（PDF 第 62 页）](./assets/p062-visual-011.png)

示例 2.2.2.11. 如果

![原文公式、图示或代码（PDF 第 62 页）](./assets/p062-visual-012.png)

那么 <img src="./assets/p062-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态是

![原文公式、图示或代码（PDF 第 62 页）](./assets/p062-visual-013.png)

示例 2.2.2.12. 如果 <img src="./assets/p062-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.781em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p062-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态为

![原文公式、图示或代码（PDF 第 62 页）](./assets/p062-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 62 页原页](./assets/page-062.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2. a tuple of nested tuples with entries in V .

Let’s define some important attributes of nested tuples. Each such attribute of a nested tuple X is inhereted by its flattening X♭or its profile prof(X).

Definition 2.2.2.6. Suppose X is a nested tuple with entries in V .

• The rank of X is rank(X) = rank(P)

• The length of X is len(X) = len(P) = len(X♭)

• The depth of X is depth(X) = depth(P)

• If V = Z, then the size of X is size(X) = size(X♭).

Example 2.2.2.7. Here are some examples of nested tuples of integers, together with their rank, length, depth, and size:

Example 2.2.2.8. A nested tuple of integers with depth 0 is simply an integer.

Example 2.2.2.9. A nested tuple of integers with depth 1 is simply a tuple of integers. If X is such a nested tuple, then rank(X) = len(X).

Definition 2.2.2.10. Suppose X = (x1, . . . , xm)P is a nested tuple with rank(X) = r. If 1 ≤i ≤r, then the ith mode of X to be the nested tuple

Example 2.2.2.11. If

then the modes of X are

Example 2.2.2.12. If X = (32, 5, 6, 64), then the modes of X are</pre>

</details>

## PDF 第 63 页 · 原书第 61 页
<a id="pdf-page-63"></a>

引入以下符号将很方便。

表示法 2.2.2.13. 假设 <img src="./assets/p063-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是带有 <img src="./assets/p063-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.417em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的整数嵌套元组对于任何 <img src="./assets/p063-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.650em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p063-b001-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.966em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们写

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-002.png)

同样，我们写

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-003.png)

<img src="./assets/p063-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.051em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-004.png)

定义 2.2.2.14. 如果 <img src="./assets/p063-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.235em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组且 <img src="./assets/p063-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.817em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p063-b015-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p063-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分量是

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-005.png)

示例 2.2.2.15. 如果

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-006.png)

那么 <img src="./assets/p063-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的分量是

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-007.png)

示例 2.2.2.16. 如果 <img src="./assets/p063-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.781em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p063-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的分量为

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-008.png)

示例 2.2.2.17. 如果 <img src="./assets/p063-b030-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是深度为 1, 的嵌套元组，则 <img src="./assets/p063-b030-m04.png" alt="原文数学符号" style="display:inline-block;height:1.333em;width:9.947em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于所有 <img src="./assets/p063-b030-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.403em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p063-b030-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.169em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

观察 2.2.2.18. 如果 <img src="./assets/p063-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是整数的嵌套元组，则 <img src="./assets/p063-b031-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的分量是整数，而 <img src="./assets/p063-b031-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态本身就是整数的嵌套元组。

最后，引入嵌套元组的同形关系（congruence），用来表示它们具有相同轮廓。

![原文公式、图示或代码（PDF 第 63 页）](./assets/p063-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 63 页原页](./assets/page-063.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">It will be convenient to introduce the following notation.

Notation 2.2.2.13. Suppose X is a nested tuple of integers with depth(X) &gt; 0. For any 1 ≤j ≤ rank(X), we write

and similarly, we write

sizej(X), and

Definition 2.2.2.14. If X = (x1, . . . , xm)P is a nested tuple and 1 ≤i ≤m, then the ith entry of X is

Example 2.2.2.15. If

then the entries of X are

Example 2.2.2.16. If X = (32, 5, 6, 64), then the entries of X are

Example 2.2.2.17. If X is a nested tuple with depth 1, then modei(X) = entryi(X) for all 1 ≤i ≤ rank(X) = len(X).

Observation 2.2.2.18. If X is a nested tuple of integers, then the entries of X are integers, while the modes of X are themselves nested tuples of integers.

Finally, we introduce the notion of congruence of nested tuples, which indicates when nested tuples have the same profile.</pre>

</details>

## PDF 第 64 页 · 原书第 62 页
<a id="pdf-page-64"></a>

定义 2.2.2.19。设 X₁ 与 X₂ 为嵌套元组。如果满足下式，就称 X₁ 与 X₂ 同形：

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-001.png)

示例 2.2.2.20. 以下是嵌套元组 <img src="./assets/p064-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.402em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p064-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:1.733em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的一些示例以及它们是否同形

<img src="./assets/p064-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.777em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.275em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 同形

<img src="./assets/p064-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.995em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.493em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 同形

<img src="./assets/p064-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:8.426em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:8.925em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 同形

<img src="./assets/p064-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:12.854em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:12.854em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 同形

<img src="./assets/p064-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.777em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.051em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不同形

<img src="./assets/p064-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.995em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:7.430em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不同形

<img src="./assets/p064-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:8.426em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p064-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:9.700em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不同形

<a id="paper-section-2-2-3"></a>

### 2.2.3 代入

回想一下，如果 <img src="./assets/p064-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p064-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.629em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓，并且 <img src="./assets/p064-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.490em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是轮廓，那么我们定义了一个轮廓

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-011.png)

称为 P₁, …, Pᵣ 的 Q 代入。它将 Q 的第 i 个分量替换为轮廓 Pᵢ，从而得到新的轮廓。下面将这一运算推广到嵌套元组。

定义 2.2.3.1. 假设 <img src="./assets/p064-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:5.199em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有轮廓 <img src="./assets/p064-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.154em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组，并假设 <img src="./assets/p064-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p064-b014-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.332em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓我们定义 <img src="./assets/p064-b014-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 替换

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-013.png)

将 X₁, …, Xₘ 的 Q 代入定义为具有下列展平的嵌套元组：

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-014.png)

和轮廓

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-015.png)

更一般地，如果 <img src="./assets/p064-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:5.199em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组并且 <img src="./assets/p064-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.759em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p064-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.332em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组，我们定义

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-016.png)

示例 2.2.3.2. 如果 <img src="./assets/p064-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:11.137em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p064-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.503em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-017.png)

示例 2.2.3.3. 如果 <img src="./assets/p064-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:19.660em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p064-b026-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.219em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-018.png)

示例 2.2.3.4. 如果 <img src="./assets/p064-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.184em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p064-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.071em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 64 页）](./assets/p064-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 64 页原页](./assets/page-064.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 2.2.2.19. If X1 and X2 are nested tuples, we say X1 and X2 are congruent, if

Example 2.2.2.20. Here are some examples of nested tuples X1 and X2, and whether or not they are congruent

X1 = 27 X2 = 100 congruent

X1 = (2, 2) X2 = (8, 64) congruent

X1 = ((4, 8), (4, 8)) X2 = ((1, 1), (5, 10)) congruent

X1 = ((64, (8, 8)), (25, (5, 5))) X2 = ((2, (3, 5)), (7, (11, 13))) congruent

X1 = 27 X2 = (100) not congruent

X1 = (2, 2) X2 = (8, 64, 128) not congruent

X1 = ((4, 8), (4, 8)) X2 = (((1, 1), (5, 10))) not congruent

2.2.3 Substitution

Recall that if Q is a profile of length r and P1, . . . , Pr are profiles, then we defined a profile

called the Q-substitution of P1, . . . , Pr. This profile is obtained from Q by replacing the ith entry of Q with the profile Pi. We can extend this to an operation on nested tuples as follows.

Definition 2.2.3.1. Suppose X1, . . . , Xm are nested tuples with profiles P1, . . . , Pm, and suppose Q is a profile of length m. We define the Q-substitution

of X1, . . . , Xm to be the nested tuple with flattening

and profile

More generally, if X1, . . . , Xm are nested tuples and Y is a nested tuple of length m, we define

Example 2.2.3.2. If (X1, X2, X3) = (64, 16, 4) and Q = (∗, (∗, ∗)), then

Example 2.2.3.3. If (X1, X2, X3, X4) = ((2, 2), (3, 3), (5, 5), (7, 7)) and Q = ((∗, ∗), (∗, ∗)), then

Example 2.2.3.4. If X = (12) and Q = ∗, then</pre>

</details>

## PDF 第 65 页 · 原书第 63 页
<a id="pdf-page-65"></a>

示例 2.2.3.5. 如果 <img src="./assets/p065-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:12.687em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p065-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.728em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-001.png)

更一般地说，如果 <img src="./assets/p065-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:5.199em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何嵌套元组并且 <img src="./assets/p065-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.272em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-002.png)

是 <img src="./assets/p065-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.525em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接

旁注 2.2.3.6。嵌套元组的代入可以用运算子来解释。整数嵌套元组的集合 <img src="./assets/p065-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:3.523em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

是运算子 Profile 上的一个代数，其结构映射由 Q 代入给出：

![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-005.png)

<a id="paper-section-2-2-4"></a>

### 2.2.4 细化

在本节中，我们将介绍嵌套元组上的一个重要关系，称为细化。直观上，如果 <img src="./assets/p065-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p065-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是整数的嵌套元组，如果可以通过用相同大小的某个嵌套元组替换 <img src="./assets/p065-b010-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的每个分量来从 <img src="./assets/p065-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 获得 <img src="./assets/p065-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则我们说 <img src="./assets/p065-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化了 <img src="./assets/p065-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。更准确地说，我们有以下定义。

定义 2.2.4.1. 如果 <img src="./assets/p065-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p065-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组，那么我们说 <img src="./assets/p065-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化了 <img src="./assets/p065-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，如果

![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-008.png)

(b) <img src="./assets/p065-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:9.084em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

(c) 对于每个 <img src="./assets/p065-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.357em;width:12.358em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p065-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.742em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

书写方式 2.2.4.2. 写

![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-011.png)

表示<img src="./assets/p065-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />细化<img src="./assets/p065-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.361em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.2.4.3. 以下是嵌套元组细化的一些示例。

![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-013.png)

观察 2.2.4.4。嵌套元组的细化关系具有自反性、传递性与反对称性，因此在正整数嵌套元组的集合上确定了一个偏序。

如果 X′ 细化 X，就可以将 X′ 看作从 X 得到的嵌套元组：将 X 的每个分量 xᵢ 替换为某个大小为 xᵢ 的嵌套元组 X′ᵢ。将 X′ᵢ 称为 X′ 相对于 X 的第 i 个模态。更准确地说，有如下定义。





![原文公式、图示或代码（PDF 第 65 页）](./assets/p065-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 65 页原页](./assets/page-065.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.2.3.5. If X1 = 2, X2 = 2, X3 = (5, 5), and Q = (∗, ∗, ∗), then

More generally, if X1, . . . , Xm are any nested tuples and P = (∗, . . . , ∗) then

is the concatenation of X1, . . . , Xm.

Aside 2.2.3.6. There is an operadic interpretation of substitutions of nested tuples. The set Nest(Z)

of nested tuples of integers is an algebra over the operad Profile, with structure maps given by Q-substitution:

2.2.4 Refinement

In this section, we introduce an important relation on nested tuples called refinement. Intuitively, if X′ and X are nested tuples of integers, we say X′ refines X if X′ may be obtained from X by replacing each entry of X with some nested tuple of the same size. More precisely, we have the following definition.

Definition 2.2.4.1. If X′ and X are nested tuples, then we say X′ refines X if either

(b) rank(X′) = rank(X), and

(c) for each 1 ≤i ≤rank(X), modei(X′) refines modei(X).

Notation 2.2.4.2. We write

to indicate that X′ refines X.

Example 2.2.4.3. Here are some examples of refinements of nested tuples.

Observation 2.2.4.4. Refinement of nested tuples is reflexive, transitive, and antisymmetric, so refinement specifies a partial ordering on the collection of nested tuples of positive integers.

If X′ refines X, then we can think of X′ as being obtained from X by replacing each entry xi of X with some nested tuple X′

i as the ith mode of X′ relative to X. More precisely, we have the following definition.

i of size xi. We refer to the nested tuple X′</pre>

</details>

## PDF 第 66 页 · 原书第 64 页
<a id="pdf-page-66"></a>

构造 2.2.4.5. 假设 <img src="./assets/p066-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p066-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.331em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的整数的嵌套元组，并假设 <img src="./assets/p066-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p066-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.360em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于任何 <img src="./assets/p066-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.828em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们定义一个嵌套元组

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-001.png)

称为 X′ 相对于 X 的第 i 个模态，由下列公式定义：

X′，当 depth(X) = 0 时（此时 i = ℓ = 1）；

modeᵢ₋N(modeⱼ(X′), modeⱼ(X))，其中 j 为满足下式的最大整数：

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-004.png)

示例 2.2.4.6. 如果 <img src="./assets/p066-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.337em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p066-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:15.987em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p066-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p066-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p066-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p066-b010-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态为

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-005.png)

示例 2.2.4.7. 如果 <img src="./assets/p066-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何嵌套元组，则 <img src="./assets/p066-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p066-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.361em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且对于任何 <img src="./assets/p066-b015-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.550em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-006.png)

示例 2.2.4.8. 如果 <img src="./assets/p066-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.638em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个元组，并且 <img src="./assets/p066-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p066-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.360em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么对于任何 <img src="./assets/p066-b017-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.827em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-007.png)

示例 2.2.4.9. 如果 <img src="./assets/p066-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是带有 <img src="./assets/p066-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:6.146em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组，则 <img src="./assets/p066-b019-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p066-b019-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.366em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p066-b019-m06.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p066-b019-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的唯一模态是

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-008.png)

符号 2.2.4.10. 如果 <img src="./assets/p066-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.739em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个细化并且 <img src="./assets/p066-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.825em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么我们写

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-009.png)

定义 2.2.4.11. 假设 <img src="./assets/p066-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p066-b031-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.366em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并写成 <img src="./assets/p066-b031-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p066-b032-m01.png" alt="原文数学符号" style="display:inline-block;height:1.514em;width:8.090em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么<img src="./assets/p066-b032-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />相对于<img src="./assets/p066-b032-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的展平就是嵌套元组

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-011.png)

示例 2.2.4.12. 如果 <img src="./assets/p066-b035-m02.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:15.200em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p066-b035-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.331em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-012.png)

示例 2.2.4.13. 如果 <img src="./assets/p066-b037-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何嵌套元组，则 <img src="./assets/p066-b037-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p066-b037-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平为

![原文公式、图示或代码（PDF 第 66 页）](./assets/p066-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 66 页原页](./assets/page-066.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Construction 2.2.4.5. Suppose X is a nested tuple of integers of length m, and suppose X′ refines X. For any 1 ≤i ≤m, we define a nested tuple

called the ith mode of X′ relative to X, by the formula

X′ depth(X) = 0 (hence i = ℓ= 1)

modei−N(modej(X′), modej(X)) j is the largest integer such that

Example 2.2.4.6. If X = ((4, 9), (25, 36)), and X′ = (((2, 2), (3, 3)), (25, (6, (2, 3)))), then X′ refines X and the modes of X′ relative to X are

Example 2.2.4.7. If X is any nested tuple, then X refines X, and for any 1 ≤i ≤len(X) we have

Example 2.2.4.8. If X = X♭is a tuple, and X′ refines X, then for any 1 ≤i ≤len(X), we have

Example 2.2.4.9. If X′ is a nested tuple with size(X′) = N, then X′ refines N, and the only mode of X′ relative to N is

Notation 2.2.4.10. If X′ ↠X is a refinement and 1 ≤i ≤len(X), then we write

Definition 2.2.4.11. Suppose X′ refines X, and write X′

i = modei(X′, X). Then the flattening of X′ relative to X is the nested tuple

Example 2.2.4.12. If X′ = (((2, 2), (3, 3)), ((5, 5), (7, 7))) and X = ((4, 9), (25, 49)), then

Example 2.2.4.13. If X is any nested tuple, then the flattening of X relative to X is</pre>

</details>

## PDF 第 67 页 · 原书第 65 页
<a id="pdf-page-67"></a>

示例 2.2.4.14. 如果 <img src="./assets/p067-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.622em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组，并且 <img src="./assets/p067-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p067-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.355em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p067-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p067-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平为

![原文公式、图示或代码（PDF 第 67 页）](./assets/p067-visual-001.png)

示例 2.2.4.15. 如果 <img src="./assets/p067-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是带有 <img src="./assets/p067-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:6.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组，则 <img src="./assets/p067-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p067-b002-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.364em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p067-b002-m06.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p067-b002-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平为

![原文公式、图示或代码（PDF 第 67 页）](./assets/p067-visual-002.png)

观察 2.2.4.16. 如果 <img src="./assets/p067-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p067-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.361em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p067-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:4.857em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p067-b004-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.733em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 67 页）](./assets/p067-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 67 页原页](./assets/page-067.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.2.4.14. If X = X♭is a tuple, and X′ refines X, then the flattening of X′ relative to X is

Example 2.2.4.15. If X′ is a nested tuple with size(X′) = N, then X′ refines N, and the flattening of X′ relative to N is

Observation 2.2.4.16. If X′ refines X, then flat(X′, X) refines X♭.</pre>

</details>

---
[译文总目录](Layout.md) · [第 2.1 节：合并、紧致性、补布局与可处理性](Translation-03-Flat-Layout-Algebra.md) · [第 2.3 节：布局](Translation-05-Layouts.md)
