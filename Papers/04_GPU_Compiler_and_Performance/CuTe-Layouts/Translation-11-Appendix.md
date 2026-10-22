# 附录 A：范畴入门与参考文献
[译文总目录](Layout.md) · [第 4 章：计算](Translation-10-Computations.md)
> 来源：Colfax Research，2025 年 9 月版。本文为中文逐段译文，保留原文顺序及定义、命题、例子、证明和公式；校对说明以“校注”明确区分于原文，详见[校对记录](Proofreading.md)。复杂数学式与图示直接使用本地原文裁片。每页末尾可展开原页核对。

## PDF 第 159 页 · 原书第 157 页
<a id="pdf-page-159"></a>

<a id="paper-section-A"></a>

### 附录 A

### 范畴入门

在本文中，我们自由地使用范畴的语言。范畴是将态射及其复合这一概念抽象出来的数学对象。本附录旨在对范畴的基础知识作简洁、易读的介绍。特别地，我们希望回答以下问题：

1. 什么是范畴？

2. 什么是函子？

能够有把握地回答这些问题，并且心中有具体例子的读者，就能够理解本文最重要的概念和构造。对于希望学习自然变换、伴随以及（余）极限等更高级范畴论概念的读者，我们推荐参考文献 [1]。

<a id="paper-section-A-1"></a>

### A.1 什么是范畴？

我们先讨论第一个问题。在给出定义之前，先考虑一个引出这一概念的

例子。设 $X,Y$ 为集合。函数 $f:X\to Y$ 为每个 $x\in X$ 指定一个元素 $f(x)\in Y$。称 $X$ 为 $f$ 的定义域，称 $g$ 为 $f$ 的陪域。〔校注：原文将陪域写成 $g$，应为 $Y$。〕

例 A.1.0.1。存在如下给出的函数 <img src="./assets/p159-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:4.484em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 159 页）](./assets/p159-visual-010.png)

例 A.1.0.2。存在函数 <img src="./assets/p159-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:5.938em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p159-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.933em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> True <img src="./assets/p159-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.457em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> False <img src="./assets/p159-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:0.955em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，具体定义如下：

True：如果 <img src="./assets/p159-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.750em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为偶数；

False：如果 <img src="./assets/p159-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.750em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为奇数。

如果 <img src="./assets/p159-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.634em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p159-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.548em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是函数，那么可以将 <img src="./assets/p159-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p159-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.963em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 复合。它们的复合是函数 <img src="./assets/p159-b017-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.191em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，由下式给出：

![原文公式、图示或代码（PDF 第 159 页）](./assets/p159-visual-014.png)

例 A.1.0.3。如果 <img src="./assets/p159-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p159-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分别是例 A.1.0.1 和例 A.1.0.2 中的函数，那么其复合 <img src="./assets/p159-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:7.198em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下式给出：

<img src="./assets/p159-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.398em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> True <img src="./assets/p159-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.457em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 159 页）](./assets/p159-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 159 页原页](./assets/page-159.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Appendix A

An introduction to categories

Throughout this work, we freely use the language of categories which are mathematical objects which abstract the notion of morphisms and their composition. The purpose of this appendix is to provide a concise and user-friendly introduction to the basics of categories. In particular, we aim to the answer the following questions:

1. What is a category?

2. What is a functor?

Those capable of answering these questions with confidence, and with examples in mind, will be able to understand the most important conepts and constructions in the current work. For those interested in learning the more advanced concepts from category theory, such as natural transformations, adjunctions, and (co)limits, we recommend [1].

A.1 What is a category?

We begin by addressing the first question. Before giving a definition, let’s consider a motivating

example. Suppose X and Y are sets. A function f : X →Y assigns to each element x ∈X some element f(x) ∈Y . We refer to X as the domain of f and to g as the codomain of f.

Example A.1.0.1. There is a function f : Z →Z given by

Example A.1.0.2. There is a function g : Z →Bool, where Bool = {True, False}, given by

True x is even,

False x is odd.

If f : X →Y and g : Y →Z are functions, then we can compose f and g: The composite of f and g is the function g ◦f : X →Z given by

Example A.1.0.3. If f and g are the functions of Examples A.1.0.1 and A.1.0.2, then the composite g ◦f : Z →Bool is given by

(g ◦f)(x) = True.</pre>

</details>

## PDF 第 160 页 · 原书第 158 页
<a id="pdf-page-160"></a>

函数复合满足两个基本性质。首先，复合满足结合律：如果 <img src="./assets/p160-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p160-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可复合，且 <img src="./assets/p160-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p160-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.754em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可复合，那么：

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-001.png)

其次，每个集合 <img src="./assets/p160-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都有恒等函数 <img src="./assets/p160-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.799em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其定义为：

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-002.png)

如果 <img src="./assets/p160-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.953em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任意函数，那么在其前面复合 <img src="./assets/p160-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.586em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，或在其后面复合 <img src="./assets/p160-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.401em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，都使函数 <img src="./assets/p160-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 保持不变：

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-003.png)

在纯数学和应用数学中，我们经常会遇到某一类对象以及这些对象之间的态射，它们具有与集合和函数相同的形式行为：态射可以按照满足结合律的方式复合，而对象具有恒等态射。尽管集合之间的函数是最典型的例子，范畴中的对象却不必是集合，

范畴中的态射也不必是函数。后面我们将看到许多这样的例子。为了刻画这一反复出现的结构，我们定义范畴的概念。

定义 A.1.0.4。范畴 `C` 由以下数据构成：

1. 一类对象：<img src="./assets/p160-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.104em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

根据范畴 <img src="./assets/p160-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的不同，这些对象可以是集合、元组、数、向量空间、矩阵，或其他某种数学结构。

2. 这些对象之间的一类态射：

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-009.png)

`C` 中的每个态射 <img src="./assets/p160-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.637em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都有一个定义域 <img src="./assets/p160-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和一个陪域 <img src="./assets/p160-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.257em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，它们都是 <img src="./assets/p160-b013-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的对象。

3. 复合规则：如果 <img src="./assets/p160-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.637em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p160-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.551em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p160-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的态射，那么存在一个态射

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-011.png)

称为 <img src="./assets/p160-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p160-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的复合。`C` 中态射的复合满足结合律，即

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-012.png)

只要式中的运算有定义，就有上述等式。

4. 恒等态射：如果 <img src="./assets/p160-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p160-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的对象，那么存在一个态射

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-014.png)

称为 <img src="./assets/p160-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.360em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的恒等态射。如果 <img src="./assets/p160-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.637em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p160-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的任意态射，那么：

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-015.png)

下面来看几个重要的范畴例子。我们从引出这一概念的例子开始。

![原文公式、图示或代码（PDF 第 160 页）](./assets/p160-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 160 页原页](./assets/page-160.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Composition of functions satisfies two essential properties. First, composition is associative: if f and g are composable, and g and h are composable, then

Second, every set X has an identity function idX : X →X given by

If f : X →Y is any function, then precomposing with idX or post-composing with idY leaves the function f unchanged:

In pure and applied mathematics, there are many instances where we have some collection of objects, and morphisms between those objects, which have the same formal behavior of sets and functions: morphisms can be composed in an associative fashion, and objects admit identity morphisms. While functions between sets are the prototypical example, the objects in a category need not be sets,

and the morphisms in a category need not be functions. We will see many such examples later on. To capture this recurring structure, we define the notion of a category.

Definition A.1.0.4. A category C consists of

1. a collection of objects: ob(C) = {X, Y, Z, . . . }.

These objects may be sets, tuples, numbers, vector spaces, matrices, or some other mathematical structure, depending on the category C.

2. a collection of morphisms between those objects:

Each morphism f : X →Y in C has a domain X and a codomain Y , which are objects in C.

3. a composition rule: If f : X →Y and g : Y →Z are morphisms in C, then there is a morphism

called the composite of f and g. Composition of morphisms in C is associative, in that

when defined.

4. identity morphisms: If X is an object in C, then there is a morphism

called the identity morphism on X. If f : X →Y is any morphism in C, then

Let’s take a look at some important examples of categories. We begin with the motivating example.</pre>

</details>

## PDF 第 161 页 · 原书第 159 页
<a id="pdf-page-161"></a>

例 A.1.0.5。存在一个范畴 `Set`，其对象是集合，态射是函数。态射的复合由函数复合给出：

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-001.png)

而集合 <img src="./assets/p161-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的恒等态射就是恒等函数：

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-002.png)

例 A.1.0.6。存在一个范畴 `Vect`，其对象是 n ≥ 0 时的向量空间 ℝⁿ，态射是矩阵。具体地，一个态射

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-003.png)

是一个 <img src="./assets/p161-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.870em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 矩阵 <img src="./assets/p161-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。`Vect` 中的复合由矩阵乘积给出：

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-004.png)

而 <img src="./assets/p161-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.392em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的恒等态射是下列 n × n 矩阵：

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-005.png)

例 A.1.0.7。存在一个范畴 `Div`，其对象是整数 a ≥ 1，并且当 a 整除 b 时，存在唯一的态射

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-006.png)

如果 a 整除 b，且 b 整除 c，那么 a 整除 c。这意味着下列复合规则具有良好定义：

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-007.png)

并且恒等态射

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-008.png)

<img src="./assets/p161-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:0.612em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 总是存在，因为每个正整数都整除自身。

除了范畴的定义之外，还有几个重要的范畴论概念需要理解。例如，同构这一概念十分重要，它推广了集合的双射概念。

定义 A.1.0.8。设 `C` 是范畴，<img src="./assets/p161-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.635em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p161-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.152em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的态射。如果 `C` 中存在态射 <img src="./assets/p161-b028-m05.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:5.850em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，使得以下条件成立，就称 <img src="./assets/p161-b028-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为同构：

<img src="./assets/p161-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.595em;width:7.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-012.png)

例 A.1.0.9。在范畴 <img src="./assets/p161-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.983em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中，同构就是双射：即函数 <img src="./assets/p161-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.649em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足，对于每个 <img src="./assets/p161-b031-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.997em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，都存在唯一的 <img src="./assets/p161-b031-m04.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.794em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，使得 <img src="./assets/p161-b031-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.235em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。例如，下式定义的函数 <img src="./assets/p161-b031-m06.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:4.483em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-013.png)

是双射，其逆函数 <img src="./assets/p161-b033-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:5.553em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下式给出：

![原文公式、图示或代码（PDF 第 161 页）](./assets/p161-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 161 页原页](./assets/page-161.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example A.1.0.5. There is a category Set whose objects are sets, and whose morphisms are functions. The composition of morphisms is given by functional composition:

and the identity morphism on a set X is the identity function

Example A.1.0.6. There is a category Vect whose objects are the vector spaces Rn for n ≥0, and whose morphisms are matrices. Specifically, a morphism

in Vect is a m × n matrix A. Composition in Vect is given by taking matrix products:

and the identity morphism on Rn is the n × n matrix

Example A.1.0.7. There is a category Div whose objects are integers a ≥1, and in which there is a unique morphism

if a divides b. If a divides b and b divides c, then a divides c, which means that we have a well defined composition rule

and the identity morphism

a exists since every positive integer a divides itself.

In addition to the definition of a category, there are a few important categorical concepts that we need to understand. For instance, it is important to understand the notion of an isomorphism, which generalizes the notion of a bijection of sets.

Definition A.1.0.8. Suppose C is a category, and suppose f : X →Y is a morphism in C. We say f is an isomorphism if there exists a morphism f −1 : Y →X in C such that

1. f −1 ◦f = idX, and

Example A.1.0.9. In the category Set, an isomorphism is a bijection: a function f : X →Y such that for each y ∈Y , there exists a unique x ∈X with f(x) = y. For example, the function f : Z →Z given by

is a bijection, with inverse f −1 : Z →Z given by</pre>

</details>

## PDF 第 162 页 · 原书第 160 页
<a id="pdf-page-162"></a>

例 A.1.0.10。在范畴 <img src="./assets/p162-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.554em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中，同构就是可逆矩阵。例如，下列矩阵

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-001.png)

是可逆的，其逆矩阵为：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-002.png)

因为：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-003.png)

例 A.1.0.11。在范畴 <img src="./assets/p162-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.002em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中，唯一的同构是恒等态射：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-004.png)

这是因为，如果 a 整除 b，且 b 整除 a，那么 a = b。

<a id="paper-section-A-2"></a>

### A.2 什么是函子？

接下来，我们转向第二个问题。

定义 A.2.0.1。设 `C` 与 `D` 为范畴。函子 <img src="./assets/p162-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.831em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下列数据构成：

1. 对于 <img src="./assets/p162-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的每个对象 <img src="./assets/p162-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，指定 <img src="./assets/p162-b020-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.248em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的一个对象 <img src="./assets/p162-b020-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.785em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />；以及

2. 对于 <img src="./assets/p162-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的每个态射 <img src="./assets/p162-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.637em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，指定一个态射

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-010.png)

并满足下列性质：

1. F 与复合兼容：如果 <img src="./assets/p162-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p162-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p162-b025-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中可复合的态射，那么：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-012.png)

2. F 与恒等态射兼容：如果 <img src="./assets/p162-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p162-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的对象，那么：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-013.png)

例 A.2.0.2。存在一个函子 <img src="./assets/p162-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.404em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其定义如下。在对象上，<img src="./assets/p162-b029-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下式给出：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-014.png)

在态射上，<img src="./assets/p162-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下式给出：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-015.png)

下面验证 <img src="./assets/p162-b035-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是函子。

1. F 与复合兼容：如果 a 整除 b，且 b 整除 c，那么：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-017.png)

2. F 与恒等态射兼容：如果 a ≥ 1，那么：

![原文公式、图示或代码（PDF 第 162 页）](./assets/p162-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 162 页原页](./assets/page-162.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example A.1.0.10. In the category Vect, an isomorphism is an invertible matrix. For example, the matrix

is invertible with inverse

since

Example A.1.0.11. In the category Div, the only isomorphisms are the identity morphisms

This is because if a divides b and b divides a, then a = b.

A.2 What is a functor?

Next, we turn our attention to the second question.

Definition A.2.0.1. Suppose C and D are categories. A functor F : C →D consists of

1. for each object X in C, an object FX in D, and

2. for each morphism f : X →Y in C, a morphism

satisfying the following properties:

1. F is compatible with composition: If f and g are composable morphisms in C, then

2. F is compatible with identities: If X is an object in C, then

Example A.2.0.2. There is a functor F : Div →Set defined as follows. On objects, F is given by

and on morphisms, F is given by

Let’s verify that F is a functor.

1. F is compatible with composition: If a divides b and b divides c, then

2. F is compatible with identities: If a ≥1, then</pre>

</details>

## PDF 第 163 页 · 原书第 161 页
<a id="pdf-page-163"></a>

<a id="paper-references"></a>

### 参考文献

[1] Saunders Mac Lane：《工作数学家的范畴论》（Categories for the Working Mathematician）。第 2 版，第 5 卷，Graduate Texts in Mathematics。Springer，1998 年。ISBN：978-0-387-98403-0。

![原文公式、图示或代码（PDF 第 163 页）](./assets/p163-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 163 页原页](./assets/page-163.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Bibliography

[1] Saunders Mac Lane. Categories for the Working Mathematician. 2nd ed. Vol. 5. Graduate Texts in Mathematics. Springer, 1998. isbn: 978-0-387-98403-0.</pre>

</details>

---
[译文总目录](Layout.md) · [第 4 章：计算](Translation-10-Computations.md)
