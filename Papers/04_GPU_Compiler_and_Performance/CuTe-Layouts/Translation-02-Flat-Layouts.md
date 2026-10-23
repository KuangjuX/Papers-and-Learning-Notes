# 第 2.1 节：平坦布局的基本定义与运算
[译文总目录](Layout.md) · [第 1 章：引言](Translation-01-Introduction.md) · [第 2.1 节：合并、紧致性、补布局与可处理性](Translation-03-Flat-Layout-Algebra.md)
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](Proofreading.md)。

## PDF 第 19 页 · 原书第 17 页
<a id="pdf-page-19"></a>

<a id="paper-section-2"></a>

### 第 2 章

### 布局及其代数

本章旨在建立一套全面且有数学基础的布局理论。我们首先在第 2.1 节发展平坦布局的理论，并在第 2.2 节介绍

嵌套元组所需的背景知识，以便在第 2.3 节讨论完全一般的布局。

<a id="paper-section-2-1"></a>

### 2.1 平坦布局

本节研究平坦布局。这是一类重要的布局，其中形状和步长均为元组，而不是更一般的嵌套元组。为使讨论严格化，我们先约定与元组有关的记号。

<a id="paper-section-2-1-1"></a>

### 2.1.1 元组

定义 2.1.1.1。设 V 为集合。分量属于 V 的元组是一个有限有序列表

![原文公式、图示或代码（PDF 第 19 页）](./assets/p019-visual-008.png)

其中，对每个 1 ≤ i ≤ m，都有 xᵢ ∈ V。这样的元组 X = (x₁, …, xₘ) 的长度为

![原文公式、图示或代码（PDF 第 19 页）](./assets/p019-visual-009.png)

我们将所有分量属于 V 的元组组成的集合记为 Tuple(V)。我们特别关心

V = ℤ 的情形，此时将 X ∈ Tuple(ℤ) 称为整数元组。如果 X 为整数元组，则 X 的大小是下列乘积：

![原文公式、图示或代码（PDF 第 19 页）](./assets/p019-visual-011.png)

示例 2.1.1.2. 以下是元组的一些示例及其长度和大小：

![原文公式、图示或代码（PDF 第 19 页）](./assets/p019-visual-012.png)

定义 2.1.1.3. 如果 <img src="./assets/p019-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p019-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组，那么我们写

![原文公式、图示或代码（PDF 第 19 页）](./assets/p019-visual-013.png)

表示 X 与 Y 的拼接。

![原文公式、图示或代码（PDF 第 19 页）](./assets/p019-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 19 页原页](./assets/page-019.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Chapter 2

Layouts and their algebra

The goal of this chapter is to provide a comprehensive and mathematically grounded theory of layouts. We begin by developing a theory of flat layouts in section 2.1. We introduce the necessary background

on nested tuples in section 2.2, so that we may cover layouts in full generality in section 2.3.

2.1 Flat Layouts

In this section, we examine flat layouts, an important subclass of layouts in which both shape and stride are tuples, rather than more general nested tuples. To formalize our discussion, we begin by fixing notation related to tuples.

2.1.1 Tuples

Definition 2.1.1.1. If V is a set, then a tuple with entries in V is a finite ordered list

of elements xi ∈V for each 1 ≤i ≤m. The length of such a tuple X = (x1, . . . , xm) is

We write Tuple(V ) for the collection of all tuples with entries in V . We are especially interested in the

case V = Z, in which case we refer to X ∈Tuple(Z) as a tuple of integers. If X is a tuple of integers, then the size of X is the product

Example 2.1.1.2. Here are some examples of tuples, together with their length and size:

Definition 2.1.1.3. If X = (x1, . . . , xm) and Y = (y1, . . . , yn) are tuples, then we write

for the concatenation of X and Y .</pre>

</details>

## PDF 第 20 页 · 原书第 18 页
<a id="pdf-page-20"></a>

示例 2.1.1.4. 如果 <img src="./assets/p020-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.622em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p020-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.740em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-001.png)

备注 2.1.1.5. 如果 <img src="./assets/p020-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.761em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是集合，则该集合

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-002.png)

即所有分量属于 V 的元组所组成的集合，是 V 上的自由结合幺半群。其幺半群乘法为拼接，单位元为空元组 ()。

定义 2.1.1.6。设 X 和 X′ 为元组。如果存在元组 X″ 满足下式，就称 X′ 整除 X：

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-004.png)

例 2.1.1.7。如果 X′ = (81, 9)，X = (81, 9, 64, 8)，则 X′ 整除 X，因为元组 X″ = (64, 8) 满足

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-005.png)

定义 2.1.1.8. 如果 <img src="./assets/p020-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个元组并且 <img src="./assets/p020-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.429em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个置换，那么我们写

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-006.png)

表示用 σ 对 X 进行的置换。这确定了 Σₘ 在 ℤ×ᵐ 上的一个右作用。

示例 2.1.1.9. 如果 <img src="./assets/p020-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.002em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p020-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.486em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-008.png)

符号 2.1.1.10. 如果 <img src="./assets/p020-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.778em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个正整数，我们写

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-009.png)

如果 <img src="./assets/p020-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个正整数元组，我们写

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-010.png)

表示满足 0 ≤ xᵢ < sᵢ 的所有元组 (x₁, …, xₘ) 所组成的集合。

示例 2.1.1.11. 如果 <img src="./assets/p020-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-012.png)

<a id="paper-section-2-1-2"></a>

### 2.1.2 基本定义

有了固定的符号，我们就可以定义平坦布局了。

定义 2.1.2.1. 平坦布局是一对

![原文公式、图示或代码（PDF 第 20 页）](./assets/p020-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 20 页原页](./assets/page-020.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.1.1.4. If X = (64, 32) and Y = (8, 8, 8), then

Remark 2.1.1.5. If V is a set, then the collection

of all tuples with entries in V is the free associative monoid on V . The monoidal product is concatenation, and the unit is the empty tuple ().

Definition 2.1.1.6. If X and X′ are tuples, we say X′ divides X if there exists a tuple X′′ with

Example 2.1.1.7. If X′ = (81, 9) and X = (81, 9, 64, 8), then X′ divides X, since the tuple X′′ = (64, 8) satisfies

Definition 2.1.1.8. If X = (x1, . . . , xm) is a tuple and σ ∈Σm is a permutation, then we write

for the permutation of X by σ. This specifies a right action of Σm on Z×m.

Example 2.1.1.9. If X = (8, 16, 32, 64) and σ = (1 2)(3 4), then

Notation 2.1.1.10. If n is a positive integer, we write

and if S = (s1, . . . , sm) is a tuple of positive integers, we write

for the collection of tuples (x1, . . . , xm) with 0 ≤xi &lt; si.

Example 2.1.1.11. If S = (3, 2), then

2.1.2 Basic definitions

Having fixed notation, we are ready to define flat layouts.

Definition 2.1.2.1. A flat layout is a pair</pre>

</details>

## PDF 第 21 页 · 原书第 19 页
<a id="pdf-page-21"></a>

由正整数元组组成

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-001.png)

称为 L 的形状，以及一个非负整数元组

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-002.png)

称为 L 的步长。

备注 2.1.2.2. 如果 <img src="./assets/p021-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则根据定义，<img src="./assets/p021-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.990em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p021-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.907em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有相同的长度。

备注 2.1.2.3. 平坦布局是定义 2.3.1.1, 的更一般布局的示例，因此我们

有时将平坦布局 <img src="./assets/p021-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 称为布局。

示例 2.1.2.4. 以下是平坦布局的一些示例：

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-007.png)

示例 2.1.2.5. 我们可以将布局 <img src="./assets/p021-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.563em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 描述为

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-008.png)

我们可以将布局 <img src="./assets/p021-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.943em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 描述为

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-009.png)

我们在备注 2.1.2.17. 中明确了这些图片代表相关布局的意义

平坦布局中最重要的例子或许就是列主序布局和行主序布局，下面给出其定义。

定义 2.1.2.6. 假设

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-012.png)

是平坦布局。如果下式对每个 1 ≤ i ≤ m 成立，就称 L 为列主序布局：

![原文公式、图示或代码（PDF 第 21 页）](./assets/p021-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 21 页原页](./assets/page-021.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">consisting of a tuple of positive integers

called the shape of L, and a tuple of non-negative integers

called the stride of L.

Remark 2.1.2.2. If L is a flat layout, then by definition, shape(L) and stride(L) have the same length.

Remark 2.1.2.3. A flat layout is an example of the more general layout of Definition 2.3.1.1, so we

sometimes refer to a flat layout L as a layout.

Example 2.1.2.4. Here are some examples of flat layouts:

Example 2.1.2.5. We can depict the layout L = (8) : (5) as

and we can depict the layout L = (3, 5) : (2, 10) as

We make precise the sense in which these pictures represent the associated layout in Remark 2.1.2.17.

Perhaps the most important examples of flat layouts are the column-major and row-major layouts, which we define below.

Definition 2.1.2.6. Suppose

is a flat layout. We say L is column-major if</pre>

</details>

## PDF 第 22 页 · 原书第 20 页
<a id="pdf-page-22"></a>

其中 1 ≤ i ≤ m。如果下式对每个 1 ≤ i ≤ m 成立，就称 L 为行主序布局：

![原文公式、图示或代码（PDF 第 22 页）](./assets/p022-visual-001.png)

对于每个 <img src="./assets/p022-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.827em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.1.2.7. 布局

![原文公式、图示或代码（PDF 第 22 页）](./assets/p022-visual-003.png)

是列主序布局，而布局

![原文公式、图示或代码（PDF 第 22 页）](./assets/p022-visual-004.png)

是行主序布局。这些图清楚说明了术语的由来：如果 L 是秩为 2 的列主序布局，则 L 的各列在内存中连续；如果 L 是秩为 2 的行主序布局，则 L 的各行在内存中连续。

示例 2.1.2.8. 布局

![原文公式、图示或代码（PDF 第 22 页）](./assets/p022-visual-006.png)

是列主序布局，而布局

![原文公式、图示或代码（PDF 第 22 页）](./assets/p022-visual-007.png)

是行主序布局。

现在我们已经看到了一些示例，让我们定义平坦布局的一些重要属性。

定义 2.1.2.9. 假设 <img src="./assets/p022-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.373em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。

• <img src="./assets/p022-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的秩为 <img src="./assets/p022-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.944em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 22 页）](./assets/p022-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 22 页原页](./assets/page-022.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">for each 1 ≤i ≤m. We say L is row-major if

for each 1 ≤i ≤m.

Example 2.1.2.7. The layout

is column-major, while the layout

is row-major. These pictures make clear the reason for the terminology: If L is a column-major layout of rank 2, then the columns of L are contiguous, and if L is a row-major layout of rank 2, then the rows of L are contiguous.

Example 2.1.2.8. The layouts

are column-major, while the layouts

are row-major.

Now that we’ve seen a few examples, lets define some important attributes of flat layouts.

Definition 2.1.2.9. Suppose L = (s1, . . . , sm) : (d1, . . . , dm) is a flat layout.

• The rank of L is rank(L) = m.</pre>

</details>

## PDF 第 23 页 · 原书第 21 页
<a id="pdf-page-23"></a>

• <img src="./assets/p023-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的大小为

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-001.png)

• <img src="./assets/p023-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的余大小为

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-002.png)

• 对于任意 1 ≤ i ≤ rank(L)，L 的第 i 个模态为下列二元组：

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-003.png)

示例 2.1.2.10. 布局

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-004.png)

有 <img src="./assets/p023-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.446em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p023-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p023-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态为

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-005.png)

示例 2.1.2.11. 布局

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-006.png)

有 <img src="./assets/p023-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.803em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p023-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.843em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 布局 <img src="./assets/p023-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 有四种模态，例如 <img src="./assets/p023-b019-m04.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.285em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.1.2.12. 布局

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-008.png)

具有 <img src="./assets/p023-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p023-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.711em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 布局 <img src="./assets/p023-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有 5 模态，例如 <img src="./assets/p023-b022-m05.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.285em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

如果 L 是平坦布局，它就编码了一个坐标函数 $\varphi_L$。L 的坐标函数通过与 stride(L) 取点积，实现从多维到一维的变换。回顾一下，如果 S = (s₁, …, sₘ) 是正整数元组，那么

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-010.png)

是满足 0 ≤ xᵢ < sᵢ 的所有元组 (x₁, …, xₘ) 组成的集合。特别地，如果 S = () 为空元组，则 [0, S) = {()}。

构造 2.1.2.13（坐标函数）。如果

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-012.png)

是平坦布局，那么<img src="./assets/p023-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的坐标函数就是函数

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-013.png)

由下式给出：

![原文公式、图示或代码（PDF 第 23 页）](./assets/p023-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 23 页原页](./assets/page-023.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">• The size of L is

• The cosize of L is

• For any 1 ≤i ≤rank(L), the ith mode of L is the pair

Example 2.1.2.10. The layout

has rank(L) = 2, size(L) = 2048, and cosize(L) = 4032. The modes of L are

Example 2.1.2.11. The layout

has rank(L) = 4, size(L) = 1536, and cosize(L) = 1536. The layout L has four modes, for example mode3(L) = 8 : 24.

Example 2.1.2.12. The layout

has rank(L) = 5, size(L) = 32, and cosize(L) = 311. The layout L has 5 modes, for example mode5(L) = 2 : 10.

If L is a flat layout, then L encodes a coordinate function φL. The coordinate function of L is a multi-dimensional to one-dimensional transformation given by taking a dot product with stride(L). Recall that if S = (s1, . . . , sm) is a tuple of positive integers, then

is the set of all tuples (x1, . . . , xm) such that 0 ≤xi &lt; si. In particular, if S = () is the empty tuple, then [0, S) = {()}.

Construction 2.1.2.13 (Coordinate functions). If

is a flat layout, then the coordinate function of L is the function

given by</pre>

</details>

## PDF 第 24 页 · 原书第 22 页
<a id="pdf-page-24"></a>

坐标函数 $\varphi_L$ 可以经包含映射 [0, cosize(L)) ⊂ ℤ 分解。我们将

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-001.png)

记为分解后所得的映射。更一般地，对任意 N ≥ cosize(L)，将 $\varphi_L$ 经包含映射 [0, N) ⊂ ℤ 分解后所得的映射记为 $\varphi_L^N$。

稍微放宽术语的用法，我们也将这样的映射

$\varphi_L^N$ 称为 L 的坐标函数。

示例 2.1.2.14. 如果 <img src="./assets/p024-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.722em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则坐标函数

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-005.png)

由下式给出

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-006.png)

示例 2.1.2.15. 如果 <img src="./assets/p024-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.220em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则坐标函数

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-007.png)

由下式给出

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-008.png)

例 2.1.2.16。如果 E = () : () 是空布局，那么 E 的坐标函数为下列映射：

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-009.png)

由下式给出：

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-010.png)

备注 2.1.2.17. 例如，我们现在可以给出像的含义的精确描述

![原文公式、图示或代码（PDF 第 24 页）](./assets/p024-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 24 页原页](./assets/page-024.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">The coordinate function φL factors through the inclusion [0, cosize(L)) ⊂Z, and we write

for the factored map. More generally, for any N ≥cosize(L), we write φN

L for the factorization of φL through [0, N) ⊂Z, and by a mild abuse of terminology, we refer to such a map φN

L as the coordinate function of L.

Example 2.1.2.14. If L = (2, 3) : (1, 5), then the coordinate function

is given by

Example 2.1.2.15. If L = (2, 2) : (64, 2), then the coordinate function

is given by

Example 2.1.2.16. If E = () : () is the empty layout, then the coordinate function of E is the map

given by

Remark 2.1.2.17. We can now, for example, give a precise description of the sense in which the image</pre>

</details>

## PDF 第 25 页 · 原书第 23 页
<a id="pdf-page-25"></a>

表示布局 L = (3, 5) : (2, 10)：网格的第 (i, j) 个单元格标记为

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-001.png)

L 的坐标函数在该坐标处的值。

在实践中，平坦布局 L 最重要的不变量是其布局函数 $\Phi_L$。它由下列坐标函数

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-003.png)

在输入端与下列余字典序同构的逆进行复合而得：

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-004.png)

定义 2.1.2.18. 假设 <img src="./assets/p025-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个正整数元组，回想一下

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-005.png)

余字典序同构是下列映射：

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-006.png)

当元组 S 可以由上下文确定时，有时将 colexS 简记为 colex。

余字典序同构的逆为下列映射：

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-008.png)

由下式给出：

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-009.png)

其中

对 sᵢ 取模。

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-011.png)

请注意，如果 <img src="./assets/p025-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.952em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空元组，则

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-012.png)

和

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-013.png)

是规范同构。

构造2.1.2.19（布局函数）。如果

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-015.png)

是平坦布局，那么<img src="./assets/p025-b034-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数就是复合

![原文公式、图示或代码（PDF 第 25 页）](./assets/p025-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 25 页原页](./assets/page-025.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">depicts the layout L = (3, 5) : (2, 10): The (i, j)th cell of the grid is labeled by the value

of the coordinate function of L.

In practice, the most important invariant of a flat layout L is its layout function ΦL, which is obtained by precomposing the coordinate function

with the inverse of the colexicographic isomorphism

Definition 2.1.2.18. Suppose S = (s1, . . . , sm) is a tuple of positive integers and recall that

The colexicographic isorphism is the map

We sometimes write colex = colexS when the tuple S is clear from context. The inverse of the

colexicographic isomorphism is the map

given by

where

mod si.

Note that if S = () is the empty tuple, then

and

are the canonical isomorphisms.

Construction 2.1.2.19 (Layout functions). If

is a flat layout, then the layout function of L is the composite</pre>

</details>

## PDF 第 26 页 · 原书第 24 页
<a id="pdf-page-26"></a>

明确地，<img src="./assets/p026-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.443em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下式给出

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-001.png)

其中

对 sᵢ 取模。

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-003.png)

布局函数 $\Phi_L$ 可以经包含映射 [0, cosize(L)) ⊂ ℤ 分解。我们将

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-004.png)

记为分解后所得的映射。更一般地，对任意 N ≥ cosize(L)，将 $\Phi_L$ 经包含映射 [0, N) ⊂ ℤ 分解后所得的映射记为 $\Phi_L^N$。

稍微放宽术语的用法，我们也将这样的映射

称为 L 的布局函数。（原文此句将记号写为小写 $\varphi_L^N$；按本段构造应为大写 $\Phi_L^N$。）

示例 2.1.2.20. 如果 <img src="./assets/p026-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.721em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则布局函数

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-008.png)

由下式给出

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-009.png)

示例 2.1.2.21. 如果 <img src="./assets/p026-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.220em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则布局函数

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-010.png)

由下式给出

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-011.png)

示例 2.1.2.22. 如果 <img src="./assets/p026-b029-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.600em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则例如 <img src="./assets/p026-b029-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数满足

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-012.png)

示例 2.1.2.23. 如果 <img src="./assets/p026-b032-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.682em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空布局，则

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-013.png)

由下式给出

![原文公式、图示或代码（PDF 第 26 页）](./assets/p026-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 26 页原页](./assets/page-026.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Explicitly, ΦL is given by

where

mod si.

The layout function ΦL factors through the inclusion [0, cosize(L)) ⊂Z, and we write

for the factored map. More generally, for any N ≥cosize(L), we write ΦN

L for the factorization of ΦL through [0, N) ⊂Z, and by a mild abuse of terminology, we refer to such a map φN

L as the layout function of L.

Example 2.1.2.20. If L = (2, 3) : (1, 5), then the layout function

is given by

Example 2.1.2.21. If L = (2, 2) : (64, 2), then the layout function

is given by

Example 2.1.2.22. If L = (4, 2, 2) : (3, 3, 100), then for example, the layout function of L satisfies

Example 2.1.2.23. If E = () : () is the empty layout, then

is given by</pre>

</details>

## PDF 第 27 页 · 原书第 25 页
<a id="pdf-page-27"></a>

示例 2.1.2.24. 如果 <img src="./assets/p027-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任意平坦布局，则 <img src="./assets/p027-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数 <img src="./assets/p027-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.438em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-001.png)

注记 2.1.2.25。设 S = (s₁, …, sₘ) 为正整数元组。下列余字典序同构

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-002.png)

等于下列列主序布局 L 的坐标函数 φᶜᵒˢⁱᶻᵉ⁽ᴸ⁾L：

其中 L 为

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-004.png)

这意味着，如果平坦布局 L 为列主序布局，那么

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-005.png)

是 <img src="./assets/p027-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.011em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的恒等映射

注记 2.1.2.26。存在彼此不同但布局函数相同的布局，即 A ≠ B 而 $\Phi_A$ = $\Phi_B$。例如，下列布局

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-007.png)

并不相等，但 $\Phi_A$ = $\Phi_B$。稍后，我们将精确刻画两个平坦布局 A 与 B 具有相同布局函数的条件（见命题 2.1.4.18）。

在继续讨论布局操作之前，我们需要定义非退化性的概念。

定义 2.1.2.27. 假设

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-010.png)

是平坦布局。如果对任意 1 ≤ i ≤ m 都有下式，就称 L 为非退化布局：

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-011.png)

示例 2.1.2.28. 布局

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-012.png)

是非退化的，而布局

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-013.png)

是退化的。

观察 2.1.2.29。假设布局 <img src="./assets/p027-b034-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.097em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，并没有真正失去一般性。更准确地说，如果

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-015.png)

是形状相同的平坦布局，并且只要 sᵢ > 1 就有 dᵢ = d′ᵢ，

那么 $\varphi_L$ = $\varphi_{L\prime}$ 且 $\Phi_L$ = $\Phi_{L\prime}$。特别地，只要 sᵢ = 1，就可以将 dᵢ 设为 0，而不改变 L 的坐标函数或布局函数。

![原文公式、图示或代码（PDF 第 27 页）](./assets/p027-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 27 页原页](./assets/page-027.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.1.2.24. If L is any flat layout, then the layout function ΦL of L satisfies

Remark 2.1.2.25. If S = (s1, . . . , sm) is a tuple of positive integers, then the colexicographic isomorphism

is equal to the coordinate function φcosize(L)

L of the column major layout

This implies that if a flat layout L is column-major, then

is the identity map on [0, size(L)).

Remark 2.1.2.26. There exist distinct layouts A̸ = B with ΦA = ΦB. For example, the layouts

are not equal, yet ΦA = ΦB. Later, we will characterize precisely when two flat layouts A and B have the same layout function (see Proposition 2.1.4.18).

Before moving on to our discussion of layout operations, we need to define the notion of non- degeneracy.

Definition 2.1.2.27. Suppose

is a flat layout. We say L is non-degenerate if for any 1 ≤i ≤m, we have

Example 2.1.2.28. The layouts

are non-degenerate, while the layouts

are degenerate.

Observation 2.1.2.29. There is no real loss of generality in assuming that a layout L is non-degenerate. More precisely, if

are flat layouts with the same shape, and di = d′

i whenever si &gt; 1, then φL = φL′, and ΦL = ΦL′. In particular, we are free to set di = 0 whenever si = 1 without altering the coordinate function or layout function of L.</pre>

</details>

## PDF 第 28 页 · 原书第 26 页
<a id="pdf-page-28"></a>

<a id="paper-section-2-1-3"></a>

### 2.1.3 基本运算

建立了平坦布局的基本词汇后，我们转向它们支持的操作。在本节中，我们定义构建更复杂的操作（例如合并、补布局和复合）所需的基本操作。

2.1.3.1 限制

如果 L 是平坦布局，那么只保留 L 的部分模态往往很有用。回顾一下，对非负整数 m，我们记

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-004.png)

定义 2.1.3.1. 假设

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-005.png)

是一个平坦布局，假设

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-006.png)

是一个子集。我们定义<img src="./assets/p028-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />到<img src="./assets/p028-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.618em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的限制为平坦布局

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-007.png)

示例 2.1.3.2. 如果

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-008.png)

且 I = {2}，那么

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-009.png)

示例 2.1.3.3. 如果

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-010.png)

且 I = {1, 2, 3}，那么

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-011.png)

示例 2.1.3.4. 如果

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-012.png)

是平坦布局，且 I = ⟨m⟩，那么

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-013.png)

示例 2.1.3.5. 如果

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-014.png)

是平坦布局，<img src="./assets/p028-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:2.800em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空集，那么

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-015.png)

是空的布局。

![原文公式、图示或代码（PDF 第 28 页）](./assets/p028-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 28 页原页](./assets/page-028.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.3 Basic operations

Having established the basic vocabulary for flat layouts, we turn to the operations they support. In this section, we define basic operations that will be needed to construct more sophisticated operations such as coalesce, complement, and composition.

2.1.3.1 Restriction

If L is a flat layout, it is often useful to restrict to a subset of the modes of L. Recall that for a non-negative integer m, we write

Definition 2.1.3.1. Suppose

is a flat layout, and suppose

is a subset. We define the restriction of L to I to be the flat layout

Example 2.1.3.2. If

and I = {2}, then

Example 2.1.3.3. If

and I = {1, 2, 3}, then

Example 2.1.3.4. If

is a flat layout and I = ⟨m⟩, then

Example 2.1.3.5. If

is a flat layout and I = ∅is the empty set, then

is the empty layout.</pre>

</details>

## PDF 第 29 页 · 原书第 27 页
<a id="pdf-page-29"></a>

2.1.3.2 挤压

如果 <img src="./assets/p029-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则操作 <img src="./assets/p029-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.034em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 将删除 <img src="./assets/p029-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的所有模态 <img src="./assets/p029-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:2.609em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p029-b001-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.083em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

构造 2.1.3.6. 假设

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-003.png)

是一个平坦布局，让

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-004.png)

是其对应的形状分量不等于 1. 的索引的集合我们定义

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-005.png)

示例 2.1.3.7. 如果

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-006.png)

那么

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-007.png)

示例 2.1.3.8. 如果

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-008.png)

那么

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-009.png)

示例 2.1.3.9. 如果 <img src="./assets/p029-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-010.png)

当且仅当 <img src="./assets/p029-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.994em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不包含等于 1. 的分量

示例 2.1.3.10. 如果 <img src="./assets/p029-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-012.png)

是空布局当且仅当 <img src="./assets/p029-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.994em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的所有分量都等于 1.

该结构的一个基本属性是 <img src="./assets/p029-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.286em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 保持 <img src="./assets/p029-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数不变。

引理 2.1.3.11. 如果 <img src="./assets/p029-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-015.png)

<img src="./assets/p029-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:14.854em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-016.png)

证明。让

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-017.png)

表示对应形状分量满足 sᵢⱼ > 1 的那些指标组成的集合，于是

![原文公式、图示或代码（PDF 第 29 页）](./assets/p029-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 29 页原页](./assets/page-029.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.3.2 Squeeze

If L is a flat layout, then the operation L 7→squeeze(L) removes all modes si : di of L where si = 1.

Construction 2.1.3.6. Suppose

is a flat layout, and let

be the collection of indices whose corresponding shape entry is not equal to 1. We define

Example 2.1.3.7. If

then

Example 2.1.3.8. If

then

Example 2.1.3.9. If L is a flat layout, then

if and only if shape(L) contains no entries equal to 1.

Example 2.1.3.10. If L is a flat layout, then

is the empty layout if and only if all entries of shape(L) are equal to 1.

An essential property of this construction is that L 7→squeeze(L) leaves the layout function of L unchanged.

Lemma 2.1.3.11. If L is a flat layout, then

2. cosize(squeeze(L)) = cosize(L), and

Proof. Let

denote the collection of indices with sij &gt; 1, so that</pre>

</details>

## PDF 第 30 页 · 原书第 28 页
<a id="pdf-page-30"></a>

对于第一个断言，我们计算

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-001.png)

对于第二个断言，我们计算

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-002.png)

对于第三个断言，足以表明从平坦布局中删除 <img src="./assets/p030-b040-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.299em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 形式的模态会使布局函数保持不变。假设 <img src="./assets/p030-b040-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.592em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并假设一些 <img src="./assets/p030-b040-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.083em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-003.png)

表示从 L 中删除第 i 个模态得到的平坦布局，于是

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-004.png)

和 <img src="./assets/p030-b050-m01.png" alt="原文数学符号" style="display:inline-block;height:1.323em;width:0.928em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-005.png)

<img src="./assets/p030-b055-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数由下式给出

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-006.png)

对 sⱼ 取模。L′ 的布局函数则为

其中<img src="./assets/p030-b057-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:2.221em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-008.png)

其中<img src="./assets/p030-b064-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.979em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

对 s′ⱼ 取模。

我们观察到

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-011.png)

由于 <img src="./assets/p030-b077-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.407em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 必然是 0, 我们有

![原文公式、图示或代码（PDF 第 30 页）](./assets/p030-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 30 页原页](./assets/page-030.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">For the first assertion, we compute

For the second assertion, we compute

For the third assertion, it suffices to show that removing a mode of the form 1 : di from a flat layout leaves the layout function unchanged. Suppose L = (s1, . . . , sm) : (d1, . . . , dm), and suppose that some si = 1. Let

denote the flat layout obtained from L by removing its ith mode, so that

and d′

The layout function for L is given by

mod sj, and the layout function for L′ is given by

where xj =

where x′

mod s′

j. We observe that

and since xi ∈[0, 1) is necessarily 0, we have</pre>

</details>

## PDF 第 31 页 · 原书第 29 页
<a id="pdf-page-31"></a>

2.1.3.3 过滤零步长

如果 L 是平坦布局，那么运算 L ↦ filter(L) 会删除所有满足 dᵢ = 0 的模态 sᵢ : dᵢ。

定义 2.1.3.12. 假设

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-003.png)

是一个平坦布局，让

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-004.png)

是其对应步长分量不等于 0. 的索引的集合我们定义

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-005.png)

示例 2.1.3.13. 如果

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-006.png)

那么

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-007.png)

示例 2.1.3.14. 如果

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-008.png)

那么

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-009.png)

示例 2.1.3.15. 如果

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-010.png)

那么

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-011.png)

示例 2.1.3.16. 如果 <img src="./assets/p031-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-012.png)

当且仅当 <img src="./assets/p031-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.911em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的所有分量均非零时。

示例 2.1.3.17. 如果 <img src="./assets/p031-b029-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-014.png)

是空布局当且仅当 <img src="./assets/p031-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.911em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的所有分量都等于 0.

![原文公式、图示或代码（PDF 第 31 页）](./assets/p031-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 31 页原页](./assets/page-031.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.3.3 Filter zeros

If L is a flat layout, then the operation L 7→filter(L) removes all modes si : di with di = 0.

Definition 2.1.3.12. Suppose

is a flat layout, and let

be the collection of indices whose corresponding stride entry is not equal to 0. We define

Example 2.1.3.13. If

then

Example 2.1.3.14. If

then

Example 2.1.3.15. If

then

Example 2.1.3.16. If L is a flat layout, then

if and only if all entries of stride(L) are nonzero.

Example 2.1.3.17. If L is a flat layout, then

is the empty layout if and only if all entries of stride(L) are equal to 0.</pre>

</details>

## PDF 第 32 页 · 原书第 30 页
<a id="pdf-page-32"></a>

2.1.3.4 置换

回想一下，如果 <img src="./assets/p032-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p032-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.055em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组，并且 <img src="./assets/p032-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.429em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是置换，那么我们写

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-002.png)

用于 <img src="./assets/p032-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的置换 <img src="./assets/p032-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.062em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

定义 2.1.3.18. 如果 <img src="./assets/p032-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.593em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是秩 <img src="./assets/p032-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.055em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的平坦布局，并且 <img src="./assets/p032-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.528em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是置换，我们定义

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-004.png)

示例 2.1.3.19. 如果

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-005.png)

且 σ = (1 2) ∈ Σ₂ 是换位，那么

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-006.png)

是转置的布局。

示例 2.1.3.20. 如果

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-008.png)

且 σ = (1 2) ∈ Σ₃，那么

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-009.png)

示例 2.1.3.21. 如果

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-010.png)

且 σ = (1 5)(3 2 4) ∈ Σ₅，那么

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-011.png)

示例 2.1.3.22. 如果

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-012.png)

是一个平坦布局，其所有模态都相等，那么对于任何 <img src="./assets/p032-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.756em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 32 页）](./assets/p032-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 32 页原页](./assets/page-032.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.3.4 Permute

Recall that if X = (x1, . . . , xm) is a tuple of length m and σ ∈Σm is a permutation, then we write

for the permutation of X by σ.

Definition 2.1.3.18. If L = (s1, . . . , sm) : (d1, . . . , dm) is a flat layout of rank m and σ ∈Σm is a permutation, we define

Example 2.1.3.19. If

and σ = (1 2) ∈Σ2 is the transposition, then

is the transposed layout.

Example 2.1.3.20. If

and σ = (1 2) ∈Σ3, then

Example 2.1.3.21. If

and σ = (1 5)(3 2 4) ∈Σ5, then

Example 2.1.3.22. If

is a flat layout all of whose modes are equal, then for any σ ∈Σm, we have</pre>

</details>

## PDF 第 33 页 · 原书第 31 页
<a id="pdf-page-33"></a>

2.1.3.5 排序

如果 L 是平坦布局，那么往往可以按照下面的意义，对 L 进行置换，使其模态递增。

定义 2.1.3.23. 我们定义整数对 <img src="./assets/p033-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.996em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的线性序：

<img src="./assets/p033-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.566em;width:5.649em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p033-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.176em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p033-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:3.102em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或 <img src="./assets/p033-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.775em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p033-b003-m05.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.999em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.1.3.24. 我们有

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-005.png)

定义 2.1.3.25。设 L 为平坦布局。如果对任意 1 ≤ i < rank(L) 都满足下式，就称 L 已排序：

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-006.png)

示例 2.1.3.26. 布局

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-007.png)

已排序，而布局

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-008.png)

没有排序。

示例 2.1.3.27. 空布局 <img src="./assets/p033-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.682em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序。

示例 2.1.3.28. 如果

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-011.png)

是一个平坦布局，<img src="./assets/p033-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.911em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的所有分量等于 0,，那么 <img src="./assets/p033-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被排序当且仅当

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-012.png)

平坦布局 <img src="./assets/p033-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是否排序与 <img src="./assets/p033-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数 <img src="./assets/p033-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.446em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的行为密切相关，如以下引理中所述。

引理 2.1.3.29. 假设 <img src="./assets/p033-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平面布局。如果 <img src="./assets/p033-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.446em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非递减的，则 <img src="./assets/p033-b021-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序。〔校注：本引理原文未排除退化布局。若 $L=(1,2):(5,1)$，则 $\Phi_L$ 的值依次为 $0,1$，因而非递减，但步长 $5,1$ 未排序；所以按字面陈述存在反例，需补充假设或先规范化。〕

证明。我们证明其逆否命题。假设 L 未排序，将证明在 $\Phi_L$ 的定义域中存在 x ≤ y，使得 $\Phi_L$(x) > $\Phi_L$(y)。如果存在 1 ≤ i < m，使得 dᵢ > dᵢ₊₁，那么可以令

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-015.png)

<img src="./assets/p033-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.344em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p033-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.756em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-016.png)

在这种情况下 <img src="./assets/p033-b030-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.879em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 但是

![原文公式、图示或代码（PDF 第 33 页）](./assets/p033-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 33 页原页](./assets/page-033.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.3.5 Sort

If L is a flat layout, it is often useful to permute L so that its modes are increasing, in the following sense.

Definition 2.1.3.23. We define a linear ordering on pairs s : d of integers by

s : d ⪯s′ : d′ ⇔ d &lt; d′, or d = d′ and s ≤s′.

Example 2.1.3.24. We have

Definition 2.1.3.25. Suppose L is a flat layout. We say L is sorted if for any 1 ≤i &lt; rank(L), we have

Example 2.1.3.26. The layouts

are sorted, while the layouts

are not sorted.

Example 2.1.3.27. The empty layout E = () : () is sorted.

Example 2.1.3.28. If

is a flat layout with all entries of stride(L) equal to 0, then L is sorted if and only if

Whether or not a flat layout L is sorted is intimately related to the behavior of the layout function ΦL of L, as described in the following lemma.

Lemma 2.1.3.29. Suppose L is a flat layout. If ΦL is non-decreasing, then L is sorted.

Proof. We prove the contrapositive. Suppose that L is not sorted. We will show that there exists some x ≤y in the domain of ΦL with ΦL(x) &gt; ΦL(y). If there exists some 1 ≤i &lt; m such that di &gt; di+1, then we can let

sj, and y =

in which case x &lt; y, but</pre>

</details>

## PDF 第 34 页 · 原书第 32 页
<a id="pdf-page-34"></a>

另一方面，如果存在一些 <img src="./assets/p034-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.543em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p034-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.167em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p034-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:4.391em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们可以设置

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-001.png)

<img src="./assets/p034-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.643em;width:1.495em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p034-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.331em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-002.png)

在这种情况下 <img src="./assets/p034-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.879em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 但是

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-003.png)

我们得出结论，<img src="./assets/p034-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.442em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不是非递减的。

备注 2.1.3.30. 上一个引理的逆命题是假的。例如，平坦布局

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-005.png)

已排序，但是

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-006.png)

严格大于

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-007.png)

如果<img src="./assets/p034-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，那么我们可以对<img src="./assets/p034-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的模态进行置换以获得排序布局<img src="./assets/p034-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.462em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

构造 2.1.3.31. 假设

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-009.png)

是平坦布局。在 ⟨m⟩ 上定义线性序 ⪯：当且仅当以下条件成立时，规定 i ⪯ j：

<img src="./assets/p034-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:11.265em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

2. 如果 <img src="./assets/p034-b030-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:9.715em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p034-b030-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

令 σ ∈ Σₘ 为与 ⟨m⟩ 上的线性序 ⪯ 对应的置换。将 sort(L) 定义为用 σ 对 L 进行置换所得到的布局：

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-013.png)

示例 2.1.3.32. 如果

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-014.png)

那么

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-015.png)

示例 2.1.3.33. 如果

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-016.png)

那么

![原文公式、图示或代码（PDF 第 34 页）](./assets/p034-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 34 页原页](./assets/page-034.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">On the other hand, if there exists some 1 ≤i &lt; m such that di = di+1 and si &gt; si+1, we can set

, and y = (si+1 −1)

in which case x &lt; y, but

We conclude that ΦL is not non-decreasing.

Remark 2.1.3.30. The converse of the previous lemma is false. For example, the flat layout

is sorted, but

is strictly greater than

If L is a flat layout, then we can permute the modes of L to obtain a sorted layout sort(L).

Construction 2.1.3.31. Suppose

is a flat layout. Define a linear ordering ⪯on ⟨m⟩by i ⪯j if

1. modei(L) ⪯modej(L), and

2. if modei(L) = modej(L) then i ≤j.

Let σ ∈Σm be the permutation associated to the linear ordering ⪯of ⟨m⟩. We define sort(L) to be permutation of L by σ:

Example 2.1.3.32. If

then

Example 2.1.3.33. If

then</pre>

</details>

## PDF 第 35 页 · 原书第 33 页
<a id="pdf-page-35"></a>

示例 2.1.3.34. 如果 <img src="./assets/p035-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序，则 <img src="./assets/p035-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 特别是，这意味着 <img src="./assets/p035-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.298em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是幂等操作：

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-001.png)

观察 2.1.3.35。如果 L 是平坦布局，一般有 $\Phi_{\operatorname{sort}(L)}$ ≠ $\Phi_L$。不过，布局函数 $\Phi_L$ 与 $\Phi_{\operatorname{sort}(L)}$ 总有相同的像。为说明这一点，记

<img src="./assets/p035-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.650em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-003.png)

其中 σ ∈ Σₘ 为某个置换。如果整数 n 属于 $\Phi_L$ 的像，则存在元组 (x₁, …, xₘ) 属于

<img src="./assets/p035-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.435em;width:4.095em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这样

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-005.png)

在这种情况下，元组 <img src="./assets/p035-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.519em;width:10.590em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p035-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.435em;width:5.205em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-007.png)

这就证明了 $\operatorname{Image}(\Phi_{\operatorname{sort}(L)})\subseteq\operatorname{Image}(\Phi_L)$；反向包含可类似证明。〔校注：原文这里将包含方向写反了；前面的推导实际证明 $\operatorname{Image}(\Phi_L)\subseteq\operatorname{Image}(\Phi_{\operatorname{sort}(L)})$。等像结论不受影响。〕

2.1.3.6 拼接

回想一下，如果 <img src="./assets/p035-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.712em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p035-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.232em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组，那么 <img src="./assets/p035-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p035-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.759em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接就是元组

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-010.png)

这个定义自然地延伸到平坦布局的拼接。

定义 2.1.3.36. 假设

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-012.png)

是平坦布局。那么<img src="./assets/p035-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.255em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p035-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.255em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的拼接就是平坦布局

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-013.png)

平坦布局的拼接满足结合律。因此，更一般地，如果 L₁, …, Lₖ 为平坦布局，就可以构造它们的拼接：

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-014.png)

示例 2.1.3.37. 如果 <img src="./assets/p035-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:7.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p035-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:11.047em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-015.png)

示例 2.1.3.38. 如果 <img src="./assets/p035-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.682em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空布局，则对于任何平坦布局 <img src="./assets/p035-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 35 页）](./assets/p035-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 35 页原页](./assets/page-035.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.1.3.34. If L is sorted, then sort(L) = L. In particular, this implies that sort(−) is an idempotent operation:

Observation 2.1.3.35. If L is a flat layout, then typically Φsort(L)̸ = ΦL. However, the layout functions ΦL and Φsort(L) always have the same image. To see this, let’s write

L = (s1, . . . , sm) : (d1, . . . , dm), and

for some permutation σ ∈Σm. If an integer n is in the image of ΦL, then there exists a tuple (x1, . . . , xm) ∈Qm

i=1 [0, si) such that

in which case the tuple (xσ(1), . . . , xσ(m)) ∈Qm

i=1 [0, sσ(i)) satisfies

This proves that Image(Φsort(L)) ⊆Image(ΦL), and the reverse inclusion is proved similarly.

2.1.3.6 Concatenate

Recall that if X = (x1, . . . , xm) and Y = (y1, . . . , yn) are tuples, then the concatenation of X and Y is the tuple

This definition extends naturally to the concatenation of flat layouts.

Definition 2.1.3.36. Suppose

are flat layouts. Then the concatenation of L1 and L2 is the flat layout

Concatenation of flat layouts is associative, so more generally, if L1, . . . , Lk are flat layouts, we may form the concatenation

Example 2.1.3.37. If L1 = (7, 2) : (2, 1) and L2 = (3, 3, 3) : (0, 10, 30), then

Example 2.1.3.38. If E = () : () is the empty layout, then for any flat layout L we have</pre>

</details>

## PDF 第 36 页 · 原书第 34 页
<a id="pdf-page-36"></a>

观察 2.1.3.39. 假设

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-001.png)

是平坦布局。如果我们写

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-002.png)

那么我们可以将 <img src="./assets/p036-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 写为拼接

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-003.png)

如果<img src="./assets/p036-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.879em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，则拼接<img src="./assets/p036-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.234em;width:5.113em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数由<img src="./assets/p036-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.620em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数确定，如下所示。

命题 2.1.3.40。设 L₁, …, Lₖ 为平坦布局，其形状分别为 S₁, …, Sₖ，大小分别为 N₁, …, Nₖ。那么，下列坐标函数

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-005.png)

即 L₁ ⋆ ··· ⋆ Lₖ 的坐标函数，等于下列复合映射：

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-006.png)

和布局函数

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-007.png)

即 L₁ ⋆ ··· ⋆ Lₖ 的布局函数，等于下列复合映射：

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-008.png)

证明。让我们为每个 <img src="./assets/p036-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.503em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 写 <img src="./assets/p036-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.397em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 第一个声明成立，因为如果

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-009.png)

对应于

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-010.png)

在规范同构 <img src="./assets/p036-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.579em;width:17.568em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 下，则

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-011.png)

对于第二个主张，我们认为该图

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-012.png)

交换。由于余字典序同构满足结合律，左侧方块交换；由第一个结论，右侧三角形交换。

![原文公式、图示或代码（PDF 第 36 页）](./assets/p036-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 36 页原页](./assets/page-036.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Observation 2.1.3.39. Suppose

is a flat layout. If we write

then we can write L as the concatenation

If L1, . . . , Lk are flat layouts, then the layout function of the concatenation L1⋆· · ·⋆Lk is determined by the layout functions of L1, . . . , Lk as follows.

Proposition 2.1.3.40. Suppose L1, . . . , Lk are flat layouts of shape S1, . . . , Sk, and size N1, . . . , Nk, respectively. Then the coordinate function

of L1 ⋆· · · ⋆Lk is equal to the composite

and the layout function

of L1 ⋆· · · ⋆Lk is equal to the composite

Proof. Let’s write Li = Si : Di for each 1 ≤i ≤k. The first claim holds because if

corresponds to

under the canonical isomorphism [0, S1 ⋆· · · ⋆Sk) ∼= [0, S1) × · · · × [0, Sk), then

For the second claim, we argue that the diagram

commutes. The left-hand square commutes since colexicographic isomorphisms are associative, and the right-hand triangle commutes by the first claim.</pre>

</details>

---
[译文总目录](Layout.md) · [第 1 章：引言](Translation-01-Introduction.md) · [第 2.1 节：合并、紧致性、补布局与可处理性](Translation-03-Flat-Layout-Algebra.md)
