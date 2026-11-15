<a id="collection-cute-layouts"></a>
<a id="collection-阅读入口"></a>
<a id="collection-原论文章节目录"></a>

# Categorical Foundations for CuTe Layouts

**CuTe 布局的范畴基础 · 中文全文译文**

- Colfax Research，2025 年 9 月 rev1 中文译文。
- 原文：[本地 PDF](source.pdf) · [作者页面](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/) · [配套实现](https://github.com/ColfaxResearch/layout-categories)。
- 文库：[Zotero 条目](zotero://select/library/items/Q3PT5C24) · [Zotero PDF](zotero://open-pdf/library/items/LUQPWFX6)。

[校对记录](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。PDF 页码比原书印刷页码大 2。

## 全文目录

<!-- sidebar:start -->

- [扉页、摘要与目录](categorical-foundations-for-cute-layouts.md#translation-00-front-matter-扉页、摘要与目录)
- [第 1 章：引言](categorical-foundations-for-cute-layouts.md#paper-section-1)
  - [1.1 主要结果概述](categorical-foundations-for-cute-layouts.md#paper-section-1-1)
  - [1.2 文章结构](categorical-foundations-for-cute-layouts.md#paper-section-1-2)
  - [1.3 实现](categorical-foundations-for-cute-layouts.md#paper-section-1-3)
  - [1.4 记号](categorical-foundations-for-cute-layouts.md#paper-section-1-4)
- [第 2 章：布局及其代数](categorical-foundations-for-cute-layouts.md#paper-section-2)
  - [2.1 平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1)
    - [2.1.1 元组](categorical-foundations-for-cute-layouts.md#paper-section-2-1-1)
    - [2.1.2 基本定义](categorical-foundations-for-cute-layouts.md#paper-section-2-1-2)
    - [2.1.3 基本运算](categorical-foundations-for-cute-layouts.md#paper-section-2-1-3)
    - [2.1.4 平坦合并](categorical-foundations-for-cute-layouts.md#paper-section-2-1-4)
    - [2.1.5 紧致平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1-5)
    - [2.1.6 补布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1-6)
    - [2.1.7 进一步的运算](categorical-foundations-for-cute-layouts.md#paper-section-2-1-7)
    - [2.1.8 可处理平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1-8)
  - [2.2 嵌套元组](categorical-foundations-for-cute-layouts.md#paper-section-2-2)
    - [2.2.1 轮廓](categorical-foundations-for-cute-layouts.md#paper-section-2-2-1)
    - [2.2.2 基本定义](categorical-foundations-for-cute-layouts.md#paper-section-2-2-2)
    - [2.2.3 代入](categorical-foundations-for-cute-layouts.md#paper-section-2-2-3)
    - [2.2.4 细化](categorical-foundations-for-cute-layouts.md#paper-section-2-2-4)
  - [2.3 布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3)
    - [2.3.1 基本定义](categorical-foundations-for-cute-layouts.md#paper-section-2-3-1)
    - [2.3.2 基本运算](categorical-foundations-for-cute-layouts.md#paper-section-2-3-2)
    - [2.3.3 合并](categorical-foundations-for-cute-layouts.md#paper-section-2-3-3)
    - [2.3.4 相对合并](categorical-foundations-for-cute-layouts.md#paper-section-2-3-4)
    - [2.3.5 紧致布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3-5)
    - [2.3.6 补布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3-6)
    - [2.3.7 复合](categorical-foundations-for-cute-layouts.md#paper-section-2-3-7)
    - [2.3.8 逻辑除法](categorical-foundations-for-cute-layouts.md#paper-section-2-3-8)
    - [2.3.9 逻辑乘积](categorical-foundations-for-cute-layouts.md#paper-section-2-3-9)
    - [2.3.10 可处理布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3-10)
- [第 3 章：布局的范畴](categorical-foundations-for-cute-layouts.md#paper-section-3)
  - [3.1 Tuple 范畴](categorical-foundations-for-cute-layouts.md#paper-section-3-1)
    - [3.1.1 基本定义](categorical-foundations-for-cute-layouts.md#paper-section-3-1-1)
    - [3.1.2 从元组态射到平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-3-1-2)
    - [3.1.3 例子](categorical-foundations-for-cute-layouts.md#paper-section-3-1-3)
    - [3.1.4 元组态射的具象化](categorical-foundations-for-cute-layouts.md#paper-section-3-1-4)
    - [3.1.5 元组态射上的运算](categorical-foundations-for-cute-layouts.md#paper-section-3-1-5)
  - [3.2 Nest 范畴](categorical-foundations-for-cute-layouts.md#paper-section-3-2)
    - [3.2.1 基本定义](categorical-foundations-for-cute-layouts.md#paper-section-3-2-1)
    - [3.2.2 从嵌套元组态射到布局](categorical-foundations-for-cute-layouts.md#paper-section-3-2-2)
    - [3.2.3 例子](categorical-foundations-for-cute-layouts.md#paper-section-3-2-3)
    - [3.2.4 嵌套元组态射的具象化](categorical-foundations-for-cute-layouts.md#paper-section-3-2-4)
    - [3.2.5 细化](categorical-foundations-for-cute-layouts.md#paper-section-3-2-5)
    - [3.2.6 嵌套元组态射上的运算](categorical-foundations-for-cute-layouts.md#paper-section-3-2-6)
- [第 4 章：计算](categorical-foundations-for-cute-layouts.md#paper-section-4)
  - [4.1 复合](categorical-foundations-for-cute-layouts.md#paper-section-4-1)
    - [4.1.1 共同细化](categorical-foundations-for-cute-layouts.md#paper-section-4-1-1)
    - [4.1.2 从共同细化到可复合态射](categorical-foundations-for-cute-layouts.md#paper-section-4-1-2)
    - [4.1.3 复合算法](categorical-foundations-for-cute-layouts.md#paper-section-4-1-3)
    - [4.1.4 例子](categorical-foundations-for-cute-layouts.md#paper-section-4-1-4)
- [附录 A：范畴入门](categorical-foundations-for-cute-layouts.md#paper-section-A)
  - [A.1 什么是范畴？](categorical-foundations-for-cute-layouts.md#paper-section-A-1)
  - [A.2 什么是函子？](categorical-foundations-for-cute-layouts.md#paper-section-A-2)
- [参考文献](categorical-foundations-for-cute-layouts.md#paper-references)

<!-- sidebar:end -->

## 术语约定

| 原文 | 本译文 |
| --- | --- |
| layout / flat layout | 布局 / 平坦布局 |
| shape / stride / mode | 形状 / 步长 / 模态 |
| size / cosize / rank | 大小 / 余大小 / 秩 |
| nested tuple / profile | 嵌套元组 / 轮廓 |
| tractable / compact | 可处理 / 紧致 |
| coalesce / relative coalesce | 合并 / 相对合并 |
| complement | 补；对布局称补布局，对态射称补态射 |
| composition / logical division / logical product | 复合 / 逻辑除法 / 逻辑乘积 |
| category / morphism / functor | 范畴 / 态射 / 函子 |
| refinement / mutual refinement | 细化 / 共同细化 |
| realization / operad / pullback | 具象化 / 运算子（operad）/ 拉回 |
| colexicographic order | 余字典序 |
| congruent | 同形（轮廓相同） |
| pointed map / pointed set | 保基点映射 / 带基点集合 |
| divides / increasing / non-decreasing | 整除 / 严格递增 / 非递减 |
| product admissible | 乘积可容许 |

[GPU 编译与性能](../index.md)

<a id="layout-and-their-algebra"></a>

<a id="translation-00-front-matter-扉页、摘要与目录"></a>

## 扉页、摘要与目录
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-00-front-matter-pdf-第-1-页"></a>

### PDF 第 1 页
<a id="pdf-page-1"></a>

<a id="translation-00-front-matter-cute-布局的范畴基础"></a>

#### CuTe 布局的范畴基础

<a id="translation-00-front-matter-colfax-research"></a>

#### Colfax Research

<a id="translation-00-front-matter-_2025-年-9-月"></a>

#### 2025 年 9 月

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 1 页原页](./assets/page-001.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Categorical Foundations for CuTe Layouts

Colfax Research

September 2025</pre>

</details>

<a id="translation-00-front-matter-pdf-第-2-页"></a>

### PDF 第 2 页
<a id="pdf-page-2"></a>

摘要

NVIDIA 的 CUTLASS 库提供了一套稳健且富有表达力的方法，用于描述和操作 GPU 上的多维张量数据。这些方法在概念上以 CuTe 布局这一抽象概念及其丰富的布局代数为基础，其中包括复合、逻辑乘积和逻辑除法等运算。本文聚焦于一类自然出现的可处理布局，提出了一个用于理解这一布局代数的范畴论框架。为此，我们定义了两个范畴 Tuple 和 Nest，其中的态射能够产生布局。我们在这些范畴的态射上定义了一组运算，并证明它们与相应的布局运算兼容。此外，我们完整刻画了通过我们的构造所产生的布局。最后，我们给出了这些范畴论构造的 Python 实现，并提供了测试，以展示其行为与 CUTLASS 一致。实现位于我们的 Git 仓库：https://github.com/ColfaxResearch/layout-categories。

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 2 页原页](./assets/page-002.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Abstract

NVIDIA’s CUTLASS library provides a robust and expressive set of methods for describing and manipulating multi-dimensional tensor data on the GPU. These methods are conceptually grounded in the abstract notion of a CuTe layout and a rich algebra of such layouts, including operations such as composition, logical product, and logical division. In this paper, we present a categorical framework for understanding this layout algebra by focusing on a naturally occurring class of tractable layouts. To this end, we define two categories Tuple and Nest whose morphisms give rise to layouts. We define a suite of operations on morphisms in these categories and prove their compatibility with the corresponding layout operations. Moreover, we give a complete characterization of the layouts which arise from our construction. Finally, we provide a Python implementation of our categorical constructions, along with tests that demonstrate alignment with CUTLASS behavior. This implementation can be found at our git repository https://github.com/ColfaxResearch/layout-categories.</pre>

</details>

<a id="translation-00-front-matter-pdf-第-3-页-·-原书第-1-页"></a>

### PDF 第 3 页 · 原书第 1 页
<a id="pdf-page-3"></a>

| 节 | 标题 | 原书页码 |
| --- | --- | --- |
| 1 | [引言](categorical-foundations-for-cute-layouts.md#paper-section-1) | 3 |
| 1.1 | [主要结果概述](categorical-foundations-for-cute-layouts.md#paper-section-1-1) | 6 |
| 1.2 | [文章结构](categorical-foundations-for-cute-layouts.md#paper-section-1-2) | 8 |
| 1.3 | [实现](categorical-foundations-for-cute-layouts.md#paper-section-1-3) | 10 |
| 1.4 | [记号](categorical-foundations-for-cute-layouts.md#paper-section-1-4) | 16 |
| 2 | [布局及其代数](categorical-foundations-for-cute-layouts.md#paper-section-2) | 17 |
| 2.1 | [平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1) | 17 |
| 2.1.1 | [元组](categorical-foundations-for-cute-layouts.md#paper-section-2-1-1) | 17 |
| 2.1.2 | [基本定义](categorical-foundations-for-cute-layouts.md#paper-section-2-1-2) | 18 |
| 2.1.3 | [基本运算](categorical-foundations-for-cute-layouts.md#paper-section-2-1-3) | 26 |
| 2.1.4 | [平坦合并](categorical-foundations-for-cute-layouts.md#paper-section-2-1-4) | 35 |
| 2.1.5 | [紧致平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1-5) | 40 |
| 2.1.6 | [补布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1-6) | 43 |
| 2.1.7 | [进一步的运算](categorical-foundations-for-cute-layouts.md#paper-section-2-1-7) | 53 |
| 2.1.8 | [可处理平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-2-1-8) | 55 |
| 2.2 | [嵌套元组](categorical-foundations-for-cute-layouts.md#paper-section-2-2) | 57 |
| 2.2.1 | [轮廓](categorical-foundations-for-cute-layouts.md#paper-section-2-2-1) | 57 |
| 2.2.2 | [基本定义](categorical-foundations-for-cute-layouts.md#paper-section-2-2-2) | 59 |
| 2.2.3 | [代入](categorical-foundations-for-cute-layouts.md#paper-section-2-2-3) | 62 |
| 2.2.4 | [细化](categorical-foundations-for-cute-layouts.md#paper-section-2-2-4) | 63 |
| 2.3 | [布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3) | 66 |
| 2.3.1 | [基本定义](categorical-foundations-for-cute-layouts.md#paper-section-2-3-1) | 66 |
| 2.3.2 | [基本运算](categorical-foundations-for-cute-layouts.md#paper-section-2-3-2) | 69 |
| 2.3.3 | [合并](categorical-foundations-for-cute-layouts.md#paper-section-2-3-3) | 71 |
| 2.3.4 | [相对合并](categorical-foundations-for-cute-layouts.md#paper-section-2-3-4) | 73 |
| 2.3.5 | [紧致布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3-5) | 76 |
| 2.3.6 | [补布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3-6) | 77 |
| 2.3.7 | [复合](categorical-foundations-for-cute-layouts.md#paper-section-2-3-7) | 79 |
| 2.3.8 | [逻辑除法](categorical-foundations-for-cute-layouts.md#paper-section-2-3-8) | 80 |
| 2.3.9 | [逻辑乘积](categorical-foundations-for-cute-layouts.md#paper-section-2-3-9) | 83 |
| 2.3.10 | [可处理布局](categorical-foundations-for-cute-layouts.md#paper-section-2-3-10) | 84 |
| 3 | [布局的范畴](categorical-foundations-for-cute-layouts.md#paper-section-3) | 86 |
| 3.1 | [Tuple 范畴](categorical-foundations-for-cute-layouts.md#paper-section-3-1) | 86 |
| 3.1.1 | [基本定义](categorical-foundations-for-cute-layouts.md#paper-section-3-1-1) | 86 |

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 3 页原页](./assets/page-003.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Contents

1 Introduction 3 1.1 Summary of main results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 1.2 Organization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 1.3 Implementation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 1.4 Notation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

2 Layouts and their algebra 17 2.1 Flat Layouts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 2.1.1 Tuples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 2.1.2 Basic definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.1.3 Basic operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 2.1.4 Flat coalesce . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 2.1.5 Compact flat layouts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 2.1.6 Complements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 2.1.7 Further operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 2.1.8 Tractable flat layouts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55 2.2 Nested Tuples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 2.2.1 Profiles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 2.2.2 Basic definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59 2.2.3 Substitution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 2.2.4 Refinement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63 2.3 Layouts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66 2.3.1 Basic definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66 2.3.2 Basic operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69 2.3.3 Coalesce . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71 2.3.4 Relative coalesce . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73 2.3.5 Compact layouts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76 2.3.6 Complements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77 2.3.7 Composition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79 2.3.8 Logical division . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 2.3.9 Logical product . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83 2.3.10 Tractable layouts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84

3 Categories of layouts 86 3.1 The category Tuple . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86 3.1.1 Basic definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86</pre>

</details>

<a id="translation-00-front-matter-pdf-第-4-页-·-原书第-2-页"></a>

### PDF 第 4 页 · 原书第 2 页
<a id="pdf-page-4"></a>

| 节 | 标题 | 原书页码 |
| --- | --- | --- |
| 3.1.2 | [从元组态射到平坦布局](categorical-foundations-for-cute-layouts.md#paper-section-3-1-2) | 90 |
| 3.1.3 | [例子](categorical-foundations-for-cute-layouts.md#paper-section-3-1-3) | 98 |
| 3.1.4 | [元组态射的具象化](categorical-foundations-for-cute-layouts.md#paper-section-3-1-4) | 102 |
| 3.1.5 | [元组态射上的运算](categorical-foundations-for-cute-layouts.md#paper-section-3-1-5) | 105 |
| 3.2 | [Nest 范畴](categorical-foundations-for-cute-layouts.md#paper-section-3-2) | 123 |
| 3.2.1 | [基本定义](categorical-foundations-for-cute-layouts.md#paper-section-3-2-1) | 123 |
| 3.2.2 | [从嵌套元组态射到布局](categorical-foundations-for-cute-layouts.md#paper-section-3-2-2) | 124 |
| 3.2.3 | [例子](categorical-foundations-for-cute-layouts.md#paper-section-3-2-3) | 127 |
| 3.2.4 | [嵌套元组态射的具象化](categorical-foundations-for-cute-layouts.md#paper-section-3-2-4) | 129 |
| 3.2.5 | [细化](categorical-foundations-for-cute-layouts.md#paper-section-3-2-5) | 130 |
| 3.2.6 | [嵌套元组态射上的运算](categorical-foundations-for-cute-layouts.md#paper-section-3-2-6) | 138 |
| 4 | [计算](categorical-foundations-for-cute-layouts.md#paper-section-4) | 146 |
| 4.1 | [复合](categorical-foundations-for-cute-layouts.md#paper-section-4-1) | 146 |
| 4.1.1 | [共同细化](categorical-foundations-for-cute-layouts.md#paper-section-4-1-1) | 147 |
| 4.1.2 | [从共同细化到可复合态射](categorical-foundations-for-cute-layouts.md#paper-section-4-1-2) | 151 |
| 4.1.3 | [复合算法](categorical-foundations-for-cute-layouts.md#paper-section-4-1-3) | 152 |
| 4.1.4 | [例子](categorical-foundations-for-cute-layouts.md#paper-section-4-1-4) | 153 |
| A | [范畴入门](categorical-foundations-for-cute-layouts.md#paper-section-A) | 157 |
| A.1 | [什么是范畴？](categorical-foundations-for-cute-layouts.md#paper-section-A-1) | 157 |
| A.2 | [什么是函子？](categorical-foundations-for-cute-layouts.md#paper-section-A-2) | 160 |

![原文公式、图示或代码（PDF 第 4 页）](./assets/p004-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 4 页原页](./assets/page-004.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.1.2 From tuple morphisms to flat layouts . . . . . . . . . . . . . . . . . . . . . . . 90 3.1.3 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98 3.1.4 Realization of tuple morphisms . . . . . . . . . . . . . . . . . . . . . . . . . . . 102 3.1.5 Operations on tuple morphisms . . . . . . . . . . . . . . . . . . . . . . . . . . . 105 3.2 The category Nest . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123 3.2.1 Basic definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123 3.2.2 From nested tuple morphisms to layouts . . . . . . . . . . . . . . . . . . . . . . 124 3.2.3 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127 3.2.4 Realization of nested tuple morphisms . . . . . . . . . . . . . . . . . . . . . . . 129 3.2.5 Refinements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130 3.2.6 Operations on nested tuple morphisms . . . . . . . . . . . . . . . . . . . . . . . 138

4 Computations 146 4.1 Composition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146 4.1.1 Mutual refinements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147 4.1.2 From mutual refinements to composable morphisms . . . . . . . . . . . . . . . 151 4.1.3 The composition algorithm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152 4.1.4 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153

A An introduction to categories 157 A.1 What is a category? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 157 A.2 What is a functor? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160</pre>

</details>

---

<a id="translation-01-introduction-第-1-章-引言"></a>

## 第 1 章：引言
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-01-introduction-pdf-第-5-页-·-原书第-3-页"></a>

### PDF 第 5 页 · 原书第 3 页
<a id="pdf-page-5"></a>

<a id="paper-section-1"></a>

<a id="translation-01-introduction-第-1-章"></a>

#### 第 1 章

<a id="translation-01-introduction-引言"></a>

#### 引言

在现代计算中，尤其是在 GPU 编程中，性能在很大程度上取决于多维数据在内存中的存储和访问方式。我们关心的大多数数据，例如图像、视频和机器学习中的张量，本质上都是多维的，而计算机内存在根本上却是一维的。这意味着，当我们想要加载、存储或以其他方式操作数据时，需要将多维逻辑坐标映射到一维物理坐标。这种称为布局的映射，对于正确且高效地读写内存至关重要。此外，在 GPU 的 SIMT 执行模型中，布局还用于描述和操作线程在数据上的划分。这对于优化内存访问模式，以及正确调用用于张量核心等专用硬件的指令，都十分重要。

作为一个引出问题的例子，假设我们希望将 <img src="./assets/p005-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:2.385em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 矩阵

![原文公式、图示或代码（PDF 第 5 页）](./assets/p005-visual-004.png)

存入内存。为此，我们需要为矩阵的每一个元素指定一个内存地址。做法是为 <img src="./assets/p005-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.199em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 (0, 0) 个元素选定一个地址，再为其余各元素指定相对于该地址的偏移量。一种常见选择是行主序布局：

![原文公式、图示或代码（PDF 第 5 页）](./assets/p005-visual-005.png)

记号 <img src="./assets/p005-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:8.612em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示，矩阵第 (i, j) 个元素的偏移量为：

![原文公式、图示或代码（PDF 第 5 页）](./assets/p005-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 5 页原页](./assets/page-005.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Chapter 1

Introduction

In modern computing, particularly in GPU programming, performance depends critically on how multi-dimensional data is stored and accessed in memory. While most data that we care about—such as images, videos, and tensors in machine learning—are inherently multi-dimensional, a computer’s memory is fundamentally one-dimensional. This means that when we want to load, store, or otherwise manipulate data, we need to map its multi-dimensional logical coordinates to one-dimensional physical coordinates. This mapping, known as a layout, is essential for reading from and writing to memory correctly and efficiently. Moreover, with respect to the GPU’s SIMT execution model, layouts are used to describe and manipulate partitionings of threads over data. This is important to ensure optimized memory access patterns and correct invocation of specialized hardware instructions such as those used to target tensor cores.

As a motivating example, suppose we want to store the 4 × 8 matrix

in memory. In order to do so, we need to specify a memory address for each entry of A. We do this by choosing some address for the (0, 0)th entry of A, and specifying an offset for each other entry of A. One common choice is the row-major layout

The notation Lrow = (4, 8) : (8, 1) indicates that the offset of the (i, j)th entry of our matrix is</pre>

</details>

<a id="translation-01-introduction-pdf-第-6-页-·-原书第-4-页"></a>

### PDF 第 6 页 · 原书第 4 页
<a id="pdf-page-6"></a>

另一种常见选择是列主序布局：

![原文公式、图示或代码（PDF 第 6 页）](./assets/p006-visual-001.png)

同样，记号 <img src="./assets/p006-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:8.371em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示，矩阵第 (i, j) 个元素的偏移量为：

![原文公式、图示或代码（PDF 第 6 页）](./assets/p006-visual-002.png)

这些布局非常有用，但并不能满足所有用途。例如，在高性能计算中，人们经常通过以下步骤计算矩阵乘积 <img src="./assets/p006-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.683em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

1. 将操作数矩阵 <img src="./assets/p006-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p006-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 划分成分块；

2. 计算各个分块之间的矩阵乘积；

3. 合并这些部分结果，得到完整结果 <img src="./assets/p006-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

例如，我们可以将 <img src="./assets/p006-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:2.386em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 矩阵 <img src="./assets/p006-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 划分为 <img src="./assets/p006-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:2.393em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的分块，如下图所示。

![原文公式、图示或代码（PDF 第 6 页）](./assets/p006-visual-007.png)

现在假设我们希望从 <img src="./assets/p006-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.201em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中切出单独的分块，并假设该矩阵在内存中按列主序布局存放。为此，可以手动计算偏移量：对于第 (i, j) 个分块，索引到该分块左上角元素的偏移量为 <img src="./assets/p006-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.518em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。另一方面，为了更好地组织这项计算，我们可以使用分块的交错布局：

![原文公式、图示或代码（PDF 第 6 页）](./assets/p006-visual-008.png)

其中，各列对应 <img src="./assets/p006-b034-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的各个分块，各行对应分块形状内的坐标。这里，我们采用余字典序对分块和分块内的坐标进行线性枚举，因此布局 <img src="./assets/p006-b034-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.518em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的顶层形状为 <img src="./assets/p006-b034-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.389em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

![原文公式、图示或代码（PDF 第 6 页）](./assets/p006-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 6 页原页](./assets/page-006.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Another common choice is the column-major layout

Again, the notation Lcol = (4, 8) : (1, 4) indicates that the offset of the (i, j)th entry of our matrix is

These layouts are extremely useful, but do not suffice for all purposes. For example, in high-performance computing, one often computes matrix products AB by

1. dividing the operand matrices A and B into tiles,

2. computing matrix products of the various tiles, and

3. combining these partial results to obtain the full result AB.

For instance, we could divide our 4 × 8 matrix A into 2 × 2 tiles, as depicted below.

Suppose now that we wanted to slice out individual tiles of A, which we assume is laid out in column- major format in memory. To do this, one could manually compute offsets as follows: for the (i, j)th tile, the offset to index into the top-left entry of the tile is given by 2i + 8j. On the other hand, to better organize this computation, we could use the interleaved layout of tiles

where the columns are given by tiles of A and the rows are given by coordinates within the tile shape. Here, we use colexicographic ordering to linearly enumerate tiles and coordinates within tiles, hence the top-level shape (4, 8) of the layout Ltiled.</pre>

</details>

<a id="translation-01-introduction-pdf-第-7-页-·-原书第-5-页"></a>

### PDF 第 7 页 · 原书第 5 页
<a id="pdf-page-7"></a>

然而，注意 <img src="./assets/p007-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.192em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 所示的交错模式意味着，无论步长 <img src="./assets/p007-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.848em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如何选择，都不能将其表示为布局 <img src="./assets/p007-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.338em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。我们可以转而对形状 <img src="./assets/p007-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.349em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的各个模态进行因子分解，并定义：

![原文公式、图示或代码（PDF 第 7 页）](./assets/p007-visual-001.png)

于是，对 <img src="./assets/p007-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.192em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在坐标 <img src="./assets/p007-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.174em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 处求值，就得到先前的偏移量计算 <img src="./assets/p007-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />；分块本身的布局则由第一个模态给出。因此，为 <img src="./assets/p007-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 赋予布局 <img src="./assets/p007-b002-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.192em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，形成 <img src="./assets/p007-b002-m06.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.587em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 后，我们可以用下列切片得到矩阵的第 (i, j) 个分块：

![原文公式、图示或代码（PDF 第 7 页）](./assets/p007-visual-002.png)

CUTLASS 所发展的一项核心思想是，像 <img src="./assets/p007-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.192em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这样有用但较为复杂的辅助布局，

可以通过某些基本运算，从更简单的布局中系统地推导出来。在 <img src="./assets/p007-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.518em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的例子中，这项运算称为逻辑除法。如果我们将分块布局写成：

![原文公式、图示或代码（PDF 第 7 页）](./assets/p007-visual-004.png)

那么，<img src="./assets/p007-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.192em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 就是以下逻辑除法的结果：

![原文公式、图示或代码（PDF 第 7 页）](./assets/p007-visual-005.png)

如下图所示。

![原文公式、图示或代码（PDF 第 7 页）](./assets/p007-visual-006.png)

除了逻辑除法之外，其他基本布局运算还包括逻辑乘积、补布局，以及最重要的复合。这些布局运算构成了 CUTLASS 的支柱；深入理解其行为，有助于编写正确且具有很高

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 7 页原页](./assets/page-007.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">However, note that the interleaving pattern shown for Ltiled means that it can’t be expressed as a layout (4, 8) : (a, b) for any strides a, b. Instead, we can factor the modes of the shape (4, 8) and define

The prior offset calculation 2i + 8j then appears through evaluating Ltiled on the coordinate (0, (i, j)), and the tile layout itself is given by the first mode. Thus, after endowing A with the layout Ltiled to form Atiled, we can obtain the (i, j)th tile of A as the slice

A key idea developed in CUTLASS is that useful but more complex auxiliary layouts such as Ltiled

may be systematically deduced from simpler layouts via certain fundamental operations. In the case of Ltiled, the operation in question is called logical division. If we write

for the tile layout, then Ltiled is the logical division

as depicted below.

In addition to logical division, other fundamental layout operations include logical products, complements, and most importantly, composition. These layout operations are the backbone of CUTLASS, and a deep understanding of their behavior is helpful for writing correct and highly</pre>

</details>

<a id="translation-01-introduction-pdf-第-8-页-·-原书第-6-页"></a>

### PDF 第 8 页 · 原书第 6 页
<a id="pdf-page-8"></a>

性能的代码。然而，这些运算的定义和构造相当微妙。例如，只有当布局 <img src="./assets/p008-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p008-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足某些整除性约束时，它们的复合 <img src="./assets/p008-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.709em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 才有良好定义；CUTLASS 会在内部检查这些约束。具体而言，两个布局什么时候可以复合，以及应当如何解释其复合，并不总是一目了然。

<a id="paper-section-1-1"></a>

<a id="translation-01-introduction-_1-1-主要结果概述"></a>

#### 1.1 主要结果概述

本工作的主要思想是：将注意力限制在可处理布局上，就能建立一个直观而强大的数学框架来处理布局。可处理布局的各个分量满足一个简单的整除性条件（见定义 2.3.10.1）。可处理布局涵盖了实际中遇到的几乎所有布局，例如：

• 无处不在的行主序布局和列主序布局；

• 将数据存储在连续内存地址中的紧致布局；

• 用于广播多份数据副本的投影；

• 支持带填充的加载与存储的扩张。

如果 <img src="./assets/p008-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理布局，就可以用图来表示它。例如，布局 <img src="./assets/p008-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.308em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />、<img src="./assets/p008-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.061em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p008-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.192em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可以用下面的图表示。

![原文公式、图示或代码（PDF 第 8 页）](./assets/p008-visual-008.png)

这些图可以解释为某个范畴中的态射。这样，我们就能利用范畴论来描述布局及其运算。1

更准确地说，我们定义了一个范畴 `Nest`，其对象是正整数的嵌套元组，其态射 <img src="./assets/p008-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对应于上述这类图（详细内容见定义 3.1.1.13 和定义 3.2.1.1）。如果 <img src="./assets/p008-b016-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的可处理布局（见定义 2.3.1.24），那么就存在一个本质唯一的 Nest 态射来编码它，下面的对应定理说明了这一点。

定理 A（见 3.2.2.15）。存在以下一一对应：

![原文公式、图示或代码（PDF 第 8 页）](./assets/p008-visual-999.png)

非退化的可处理布局 ↔ 标准形式的非退化 Nest 态射。
**定理 A 的原图及脚注：**
![非退化可处理布局与标准形式的非退化 Nest 态射的一一对应](./assets/theorem-a-original.png)
脚注 1：我们在附录 A 中为不熟悉这一主题的读者提供了范畴论入门。

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 8 页原页](./assets/page-008.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">performant code. However, the definitions and constructions of these operations are fairly subtle. For example, the composition B ◦A of layouts A and B is well-defined only if A and B satisfy certain divisibility constraints, which CUTLASS checks under the hood. In particular, it is not always obvious when two layouts are composable, or how to interpret their composition.

1.1 Summary of main results

The main idea of this work is that we can develop an intuitive and powerful mathematical framework for working with layouts by restricting our attention to tractable layouts, whose entries satisfy a simple divisibility condition (see Definition 2.3.10.1). Tractable layouts include almost all layouts one encounters in practice, such as

• row-major and column-major layouts, which are ubiquitous,

• compact layouts, which store data in consecutive memory addresses,

• projections, which broadcast multiple copies of data, and

• dilations, which enable padded loads and stores.

If L is a tractable layout, then we can represent L with a diagram. For example, the layouts Lrow, Lcol, and Ltiled are represented by the following diagrams.

These diagrams may be interpreted as morphisms in a category. This allows us to leverage the power of category theory to describe layouts and their operations.1

More precisely, we define a category Nest whose objects are nested tuples of positive integers, and whose morphisms f : S →T correspond to diagrams such as those above (see Definition 3.1.1.13 and Definition 3.2.1.1 for details). If L is a non-degenerate tractable layout (see Definition 2.3.1.24), then there is an essentially unique Nest-morphism f which encodes L, as illustrated by the following correspondence theorem.

Theorem A. (see 3.2.2.15) There is a one-to-one correspondence

 Non-degenerate

Non-degenerate Nest-morphisms

tractable layouts

of standard form</pre>

</details>

<a id="translation-01-introduction-pdf-第-9-页-·-原书第-7-页"></a>

### PDF 第 9 页 · 原书第 7 页
<a id="pdf-page-9"></a>

复合、逻辑除法和逻辑乘积等布局运算，可以在范畴 <img src="./assets/p009-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.580em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中得到自然解释。如果

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-001.png)

是 Nest 态射，那么我们可以通过拼接对应的图，形成其复合：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-002.png)

例如：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-003.png)

我们证明，`Nest` 中的复合与布局复合兼容。

定理 B（见 3.2.6.21）。如果 <img src="./assets/p009-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p009-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化且可复合的 Nest 态射，那么：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-005.png)

我们可以通过收缩相邻箭头，合并 Nest 态射 <img src="./assets/p009-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。例如：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-006.png)

我们证明，这项运算与布局合并兼容。

定理 C（见 3.2.6.13）。如果 <img src="./assets/p009-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 Nest 态射，那么：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-008.png)

Nest 态射 <img src="./assets/p009-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补态射，是没有被 <img src="./assets/p009-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 命中的那些分量的包含映射。例如：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-009.png)

我们证明，`Nest` 中的补态射与布局的补布局运算兼容。

定理 D（见 3.2.6.20）。如果 <img src="./assets/p009-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射的 Nest 态射，并且 <img src="./assets/p009-b020-m04.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:5.714em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么：

![原文公式、图示或代码（PDF 第 9 页）](./assets/p009-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 9 页原页](./assets/page-009.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Layout operations such as composition, logical division, and logical products may be interpreted naturally in the category Nest. If

are Nest-morphisms, then we may form the composite

by pasting the associated diagrams together. For example,

We prove that composition in Nest is compatible with layout composition.

Theorem B. (see 3.2.6.21) If f and g are non-degenerate composable Nest-morphisms, then

We can coalesce a Nest-morphism f by collapsing adjacent arrows. For example,

We prove that this operation is compatible with layout coalesce.

Theorem C. (see 3.2.6.13) If f is a Nest-morphism, then

The complement of a Nest-morphism f is the inclusion of the entries not hit by f. For example,

We prove that complements in Nest are compatible with layout complements.

Theorem D. (see 3.2.6.20) If f : S →T is an injective Nest-morphism and N = size(T), then</pre>

</details>

<a id="translation-01-introduction-pdf-第-10-页-·-原书第-8-页"></a>

### PDF 第 10 页 · 原书第 8 页
<a id="pdf-page-10"></a>

我们定义了 Nest 态射的整除性，并在 g 整除 f 时定义逻辑除法运算：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-001.png)

例如：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-002.png)

我们证明，`Nest` 中的逻辑除法与布局的逻辑除法兼容。

定理 E（见 3.2.6.26）。如果 <img src="./assets/p010-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p010-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的 Nest 态射，并且 <img src="./assets/p010-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 整除 <img src="./assets/p010-b006-m06.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.081em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-004.png)

我们定义了 Nest 态射的乘积容许性，并在 f 与 g 满足乘积容许条件时定义逻辑乘积运算：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-005.png)

例如：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-006.png)

我们证明，`Nest` 中的逻辑乘积与布局的逻辑乘积兼容。

定理 F（见 3.2.6.31）。如果 <img src="./assets/p010-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p010-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的 Nest 态射，并且两者满足乘积容许条件，那么：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-008.png)

在第 4 章中，我们说明如何使用这个新框架计算复合、逻辑除法和逻辑乘积等重要的布局运算。具体而言，我们给出了一种算法（算法 4.1.3），用于计算可处理布局 <img src="./assets/p010-b016-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.209em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p010-b016-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.542em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的复合 <img src="./assets/p010-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.767em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。略去细节，这种算法的基本思想是：如果希望计算复合 <img src="./assets/p010-b016-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.951em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，可以用恰当选择的 Nest 态射 <img src="./assets/p010-b016-m10.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p010-b016-m11.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.973em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分别表示这两个布局，将这些态射复合成 <img src="./assets/p010-b016-m12.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.504em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，再取出它所编码的布局，得到：

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-009.png)

我们通过许多例子说明这一算法。

<a id="paper-section-1-2"></a>

<a id="translation-01-introduction-_1-2-文章结构"></a>

#### 1.2 文章结构

本文的组织如下。

![原文公式、图示或代码（PDF 第 10 页）](./assets/p010-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 10 页原页](./assets/page-010.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">We define divisibility of Nest-morphisms, and a logical division operation

when g divides f. For example,

We prove that logical division in Nest is compatible with logical division of layouts.

Theorem E. (see 3.2.6.26) If f and g are non-degenerate Nest-morphisms and g divides f, then

We define product admissibility of Nest-morphisms, and a logical product operation

when f and g are product admissible. For example,

We prove that the logical products in Nest are compatible with logical products of layouts.

Theorem F. (see 3.2.6.31) If f and g are non-degenerate Nest-morphisms and f and g are product admissible, then

In Chapter 4, we illustrate how our new framework may be used to compute important layout operations such as composition, logical division, and logical products. In particular, we present an algorithm (Algorithm 4.1.3) for computing the composition B ◦A of tractable layouts A and B. Eliding details, the basic idea of our algorithm is that if we want to compute the composition B ◦A, we can represent A and B by suitably chosen Nest-morphisms f and g, compose these morphisms to form g ◦f, then take the encoded layout to obtain

We illustrate this algorithm with many examples.

1.2 Organization

The current work is organized as follows.</pre>

</details>

<a id="translation-01-introduction-pdf-第-11-页-·-原书第-9-页"></a>

### PDF 第 11 页 · 原书第 9 页
<a id="pdf-page-11"></a>

第 1.3 节介绍布局在 cute 中的实现细节。我们以 tract 模块的形式提供了范畴 Nest 的 Python 实现，并展示 tract 与 cute 的兼容性。Python 实现位于我们的 Git 仓库：https://github.com/ColfaxResearch/layout-categories。

第 2 章是布局及其代数的综合参考。它对布局及其支持的运算给出严格定义，并建立这些运算的基本性质。这一章包含大量例子，对实际编程的程序员可能有所帮助。

第 3 章提出了一个处理可处理布局的新数学框架。具体而言，我们将布局及其代数与范畴和运算子（operad）理论联系起来。这一章的内容具有独立的数学意义，也具有实际价值，因为它提供了一种用于可视化布局和计算各种布局运算的新框架。

第 4 章利用第 3 章建立的框架，给出计算可处理布局 <img src="./assets/p011-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p011-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之复合的算法，并通过许多例子说明该复合算法。

![原文公式、图示或代码（PDF 第 11 页）](./assets/p011-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 11 页原页](./assets/page-011.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">In section 1.3, we provide details regarding the cute implementation of layouts. We provide a Python implementation of the category Nest in the form of a module tract, and illustrate the compatibility of tract with cute. Our Python implementation may be found at our git repository https://github.com/ColfaxResearch/layout-categories.

Chapter 2 serves as a comprehensive reference for layouts and their algebra. It provides rigorous definitions of layouts and the operations they support, and establishes the fundamental properties of these operations. This chapter is replete with examples, and may be of use to the working programmer.

In Chapter 3, we present a new mathematical framework for working with tractable layouts. In particular, we connect layouts and their algebra to the theory of categories and operads. The content of this chapter is of independent mathematical interest. It is also of practical value, as it provides a new framework for visualizing layouts and computing their various operations.

In Chapter 4, we provide an algorithm for computing the composite of tractable layouts A and B using the framework developed in Chapter 3. We illustrate the composition algorithm with many examples.</pre>

</details>

<a id="translation-01-introduction-pdf-第-12-页-·-原书第-10-页"></a>

### PDF 第 12 页 · 原书第 10 页
<a id="pdf-page-12"></a>

<a id="paper-section-1-3"></a>

<a id="translation-01-introduction-_1-3-实现"></a>

#### 1.3 实现

本节介绍如何在 NVIDIA 的 CuTe DSL 中处理布局，我们将 CuTe DSL 记为 cute。我们在 Git 仓库 https://github.com/ColfaxResearch/layout-categories 中，以 Python 模块 tract 的形式提供了这个范畴论框架的实现。这里展示 cute 与 tract 的兼容性。

1. 构造元组与嵌套元组：我们在 Python 中按以下方式构造元组与嵌套元组。

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-003.png)

注意，如果要构造长度为 1 的元组，必须在该元组的分量后面加上逗号。例如：

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-004.png)

返回：

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-005.png)

2. 构造布局与态射：我们在 cute 中按如下方式构造布局

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-006.png)

如下所示。

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-007.png)

例如：

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-008.png)

返回：

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-009.png)

我们在 tract 中按如下方式构造嵌套元组态射

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-010.png)

如下所示。

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-011.png)

例如：

![原文公式、图示或代码（PDF 第 12 页）](./assets/p012-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 12 页原页](./assets/page-012.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">1.3 Implementation

In this section, we illustrate how to work with layouts in NVIDIA’s CuTe DSL, which we denote as cute. We provide an implementation of our categorical framework in the form of a Python module tract in our git repository https://github.com/ColfaxResearch/layout-categories. Here, we show the compatibility of cute and tract.

1. Constructing tuples and nested tuples: We construct tuples and nested tuples in Python as follows.

Note that if we want to construct a tuple of length 1, we must include a comma following the tuple’s entry. For example,

returns

2. Constucting layouts and morphisms: We construct a layout

in cute as follows.

For example,

returns

We construct a nested tuple morphism

in tract as follows.

For example,</pre>

</details>

<a id="translation-01-introduction-pdf-第-13-页-·-原书第-11-页"></a>

### PDF 第 13 页 · 原书第 11 页
<a id="pdf-page-13"></a>

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-000.png)

返回：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-001.png)

注意，在 tract 中指定映射时，我们使用符号 0，而不是 <img src="./assets/p013-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.678em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

3. 在可处理布局与态射之间转换：如果 <img src="./assets/p013-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，我们可以用以下方式检查 <img src="./assets/p013-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是否可处理：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-003.png)

例如：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-004.png)

返回：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-005.png)

如果 <img src="./assets/p013-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理布局，那么可以用以下方式构造其标准表示 <img src="./assets/p013-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.214em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-006.png)

例如：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-007.png)

返回：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-008.png)

如果 <img src="./assets/p013-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，那么可以用以下方式构造由 <img src="./assets/p013-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局 <img src="./assets/p013-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-009.png)

例如：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-010.png)

返回：

![原文公式、图示或代码（PDF 第 13 页）](./assets/p013-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 13 页原页](./assets/page-013.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">returns

Note that we use the symbol 0 rather than ∗when specifying maps in tract.

3. Translating between tractable layouts and morphisms: If L is a layout, we can check if L is tractable with

For example,

returns

If L is a tractable layout, then we can construct the standard representation fL with

For example,

returns

If f is a nested tuple morphism, we can construct the layout Lf encoded by f with

For example,

returns</pre>

</details>

<a id="translation-01-introduction-pdf-第-14-页-·-原书第-12-页"></a>

### PDF 第 14 页 · 原书第 12 页
<a id="pdf-page-14"></a>

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-000.png)

4. 复合：在有定义时，这项运算从一对布局 <img src="./assets/p014-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p014-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.264em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 产生布局 <img src="./assets/p014-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.663em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。精确定义见定义 2.3.7.1。我们可以在 cute 中用以下方式计算复合 <img src="./assets/p014-b002-m06.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.674em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-001.png)

例如，运行：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-002.png)

返回：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-003.png)

如果 <img src="./assets/p014-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p014-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合的嵌套元组态射，那么可以在 tract 中用以下方式计算复合 <img src="./assets/p014-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.085em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-004.png)

例如：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-005.png)

返回：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-006.png)

5. 合并：这项运算从布局 <img src="./assets/p014-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.210em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 产生布局 <img src="./assets/p014-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.375em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 2.3.3.1。我们可以在 cute 中用以下方式计算 <img src="./assets/p014-b022-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.360em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-007.png)

例如：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-008.png)

返回：

![原文公式、图示或代码（PDF 第 14 页）](./assets/p014-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 14 页原页](./assets/page-014.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">4. Composition: When defined, this operation produces a layout B ◦A from a pair of layouts A and B. See Definition 2.3.7.1 for a precise definition. We can compute the composition B ◦A in cute with

For example, running

returns

If f and g are composable nested tuple morphisms, we can compute the composition g ◦f in tract with

For example,

returns

5. Coalesce: This operation produces a layout coal(A) from a layout A. See Definition 2.3.3.1 for details. We can compute coal(A) in cute with

For example,

returns</pre>

</details>

<a id="translation-01-introduction-pdf-第-15-页-·-原书第-13-页"></a>

### PDF 第 15 页 · 原书第 13 页
<a id="pdf-page-15"></a>

还存在相对合并运算 <img src="./assets/p015-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，它额外接收一个嵌套元组 <img src="./assets/p015-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.077em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 作为输入；布局的形状是这个元组的细化。详见定义 2.3.4.7。我们可以在 cute 中用以下方式计算 <img src="./assets/p015-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.471em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-001.png)

返回：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-002.png)

如果 <img src="./assets/p015-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，就可以构造 <img src="./assets/p015-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.506em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 3.2.6.11。我们在 tract 中按以下方式计算 <img src="./assets/p015-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.208em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-003.png)

例如：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-004.png)

返回：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-005.png)

6. 补布局：在有定义时，这项运算从布局 <img src="./assets/p015-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和正整数 N 产生布局 <img src="./assets/p015-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.305em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 2.3.6.5。我们可以在 cute 中用以下方式计算 <img src="./assets/p015-b016-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.301em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-006.png)

例如：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-007.png)

返回：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-008.png)

如果 <img src="./assets/p015-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，就可以构造其补态射 <img src="./assets/p015-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 3.2.6.17。我们在 tract 中按以下方式计算 <img src="./assets/p015-b024-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-009.png)

例如：

![原文公式、图示或代码（PDF 第 15 页）](./assets/p015-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 15 页原页](./assets/page-015.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">There is also a relative coalesce operation A 7→coal(A, S), which receives as input an additional nested tuple S which is refined by the shape of A. See Definition 2.3.4.7 for details. We can compute coal(A, S) in cute with

returns

If f is a nested tuple morphism, we may form coal(f). See Definition 3.2.6.11 for details. We compute coal(f) in tract with

For example,

returns

6. Complement: When defined, this operation produces a layout comp(A, N) from a layout A and positive integer N. See Definition 2.3.6.5 for details. We can compute comp(A, N) in cute with

For example,

returns

If f is a nested tuple morphism, then we may form the complement f c of f. See Definition 3.2.6.17 for details. We compute f c in tract with

For example,</pre>

</details>

<a id="translation-01-introduction-pdf-第-16-页-·-原书第-14-页"></a>

### PDF 第 16 页 · 原书第 14 页
<a id="pdf-page-16"></a>

返回：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-001.png)

7. 逻辑除法：在有定义时，这项运算从一对布局 <img src="./assets/p016-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p016-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 产生布局 <img src="./assets/p016-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.885em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 2.3.8.1。我们在 cute 中按以下方式计算 <img src="./assets/p016-b003-m06.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.901em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-002.png)

例如：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-003.png)

返回：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-004.png)

如果 <img src="./assets/p016-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p016-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，并且 <img src="./assets/p016-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 整除 <img src="./assets/p016-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.046em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，就可以构造逻辑除法 <img src="./assets/p016-b013-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.730em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 3.2.6.23。我们在 tract 中按以下方式计算 <img src="./assets/p016-b013-m07.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.468em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-005.png)

例如：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-006.png)

返回：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-007.png)

8. 逻辑乘积：在有定义时，这项运算从一对布局 <img src="./assets/p016-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p016-b023-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 产生布局 <img src="./assets/p016-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.887em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 2.3.9.1。我们在 cute 中按以下方式计算 <img src="./assets/p016-b023-m06.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.901em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-008.png)

例如，运行：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-009.png)

返回：

![原文公式、图示或代码（PDF 第 16 页）](./assets/p016-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 16 页原页](./assets/page-016.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">returns

7. Logical Division: When defined, this operation produces a layout A ⊘B from a pair of layouts A and B. See Definition 2.3.8.1 for details. We compute A ⊘B in cute with

For example,

returns

If f and g are nested tuple morphisms and g divides f, then we may form the logical division f ⊘g. See Definition 3.2.6.23 for details. We compute f ⊘g in tract with

For example,

returns

8. Logical Product: When defined, this operation produces a layout A ⊗B from a pair of layouts A and B. See Definition 2.3.9.1 for details. We compute A ⊗B in cute with

For example, running

returns</pre>

</details>

<a id="translation-01-introduction-pdf-第-17-页-·-原书第-15-页"></a>

### PDF 第 17 页 · 原书第 15 页
<a id="pdf-page-17"></a>

如果 <img src="./assets/p017-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p017-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，并且 <img src="./assets/p017-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p017-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足乘积容许条件，就可以构造逻辑乘积 <img src="./assets/p017-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.781em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。详见定义 3.2.6.28。我们在 tract 中按以下方式计算 <img src="./assets/p017-b000-m07.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.468em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 17 页）](./assets/p017-visual-001.png)

例如：

![原文公式、图示或代码（PDF 第 17 页）](./assets/p017-visual-002.png)

返回：

![原文公式、图示或代码（PDF 第 17 页）](./assets/p017-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 17 页原页](./assets/page-017.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">If f and g are nested tuple morphisms and f and g are product admissible, then we may form the logical product f ⊗g. See Definition 3.2.6.28 for details. We compute f ⊗g in tract with

For example,

returns</pre>

</details>

<a id="translation-01-introduction-pdf-第-18-页-·-原书第-16-页"></a>

### PDF 第 18 页 · 原书第 16 页
<a id="pdf-page-18"></a>

<a id="paper-section-1-4"></a>

<a id="translation-01-introduction-_1-4-记号"></a>

#### 1.4 记号

![原文公式、图示或代码（PDF 第 18 页）](./assets/p018-visual-001.png)

<img src="./assets/p018-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.015em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p018-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:4.667em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

<img src="./assets/p018-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p018-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:3.833em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

![原文公式、图示或代码（PDF 第 18 页）](./assets/p018-visual-003.png)

<img src="./assets/p018-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.383em;width:9.277em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：长度为 m 的元组，其中

第 i 个分量为 1，其余分量均为 0。

<img src="./assets/p018-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:2.494em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：集合 <img src="./assets/p018-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的对称群。

<img src="./assets/p018-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.681em;width:10.498em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p018-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为元组，

<img src="./assets/p018-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.756em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为置换。

<img src="./assets/p018-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.876em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：<img src="./assets/p018-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p018-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.092em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的平坦拼接。

<img src="./assets/p018-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.314em;width:2.508em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：嵌套元组 <img src="./assets/p018-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.306em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平。

<img src="./assets/p018-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.609em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：嵌套元组 <img src="./assets/p018-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.306em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓。

<img src="./assets/p018-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:6.809em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：<img src="./assets/p018-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:5.259em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的（嵌套）拼接。

<img src="./assets/p018-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:7.486em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：对于轮廓 <img src="./assets/p018-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.245em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，将 <img src="./assets/p018-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.915em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 作 Q 代入。

<img src="./assets/p018-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.115em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：分量属于集合 <img src="./assets/p018-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.094em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组所组成的集合。

<img src="./assets/p018-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.700em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：分量属于集合 <img src="./assets/p018-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.094em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组所组成的集合。

<img src="./assets/p018-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.922em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：轮廓的集合。

<img src="./assets/p018-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.671em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：平坦布局的集合。

<img src="./assets/p018-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.027em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：布局的集合。

<img src="./assets/p018-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.726em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：A 与 B 的复合。

<img src="./assets/p018-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.002em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：A 除以 B 的逻辑除法。

<img src="./assets/p018-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.002em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：A 与 B 的逻辑乘积。

<img src="./assets/p018-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.752em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：集合范畴。

<img src="./assets/p018-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.175em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：有限集范畴。

<img src="./assets/p018-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.654em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：由 n ≥ 0 时的 ⟨n⟩ 张成的 FinSet 的满子范畴。

<img src="./assets/p018-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:4.633em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：带基点的有限集范畴。

<img src="./assets/p018-b030-m01.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:3.112em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：由 n ≥ 0 时的 ⟨n⟩∗ 张成的 FinSet∗ 的满子范畴。

<img src="./assets/p018-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.753em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：元组与元组态射的范畴。

<img src="./assets/p018-b032-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.355em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：嵌套元组与嵌套元组态射的范畴。

<img src="./assets/p018-b033-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.848em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：嵌套元组与细化的范畴。

<img src="./assets/p018-b034-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：（小）范畴与函子的范畴。

![原文公式、图示或代码（PDF 第 18 页）](./assets/p018-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 18 页原页](./assets/page-018.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">1.4 Notation

[0, n) = {0, . . . , n −1}, and [0, 0) = ∅.

⟨n⟩= {1, 2, . . . , n}, and ⟨0⟩= ∅.

i = (0, . . . , 1, . . . , 0), the tuple of length m with

ith entry 1 and all other entries 0.

Σn = the symmetric group on ⟨n⟩.

Xσ = (xσ(1), . . . , xσ(m)) for a tuple X = (x1, . . . , xm)

and a permutation σ ∈Σm.

X ⋆Y = the flat concatenation of X and Y.

X♭= the flattening of a nested tuple X.

prof(X) = the profile of a nested tuple X.

(X1, . . . , Xk) = the (nested) concatenation of X1, . . . , Xk.

(X1, . . . , Xk)Q = the Q-substitution of X1, . . . , Xk for a profile Q.

Tuple(V ) = the set of tuples with entries in a set V.

Nest(V ) = the set of nested tuples with entries in a set V.

Profile = the set of profiles.

FlatLayout = the set of flat layouts.

Layout = the set of layouts.

B ◦A = the composition of A and B.

A ⊘B = the logical division of A by B.

A ⊗B = the logical product of A and B.

Set = the category of sets.

FinSet = the category of finite sets.

Fin = the full subcategory of FinSet spanned by ⟨n⟩for n ≥0.

FinSet∗= the category of pointed finite sets.

Fin∗= the full subcategory of FinSet∗spanned by ⟨n⟩∗for n ≥0.

Tuple = the category of tuples and tuple morphisms.

Nest = the category of nested tuples and nested tuple morphisms.

Ref = the category of nested tuples and refinements.

Cat = the category of (small) categories and functors.</pre>

</details>

---

<a id="translation-02-flat-layouts-第-2-1-节-平坦布局的基本定义与运算"></a>

## 第 2.1 节：平坦布局的基本定义与运算
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-02-flat-layouts-pdf-第-19-页-·-原书第-17-页"></a>

### PDF 第 19 页 · 原书第 17 页
<a id="pdf-page-19"></a>

<a id="paper-section-2"></a>

<a id="translation-02-flat-layouts-第-2-章"></a>

#### 第 2 章

<a id="translation-02-flat-layouts-布局及其代数"></a>

#### 布局及其代数

本章旨在建立一套全面且有数学基础的布局理论。我们首先在第 2.1 节发展平坦布局的理论，并在第 2.2 节介绍

嵌套元组所需的背景知识，以便在第 2.3 节讨论完全一般的布局。

<a id="paper-section-2-1"></a>

<a id="translation-02-flat-layouts-_2-1-平坦布局"></a>

#### 2.1 平坦布局

本节研究平坦布局。这是一类重要的布局，其中形状和步长均为元组，而不是更一般的嵌套元组。为使讨论严格化，我们先约定与元组有关的记号。

<a id="paper-section-2-1-1"></a>

<a id="translation-02-flat-layouts-_2-1-1-元组"></a>

#### 2.1.1 元组

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

<a id="translation-02-flat-layouts-pdf-第-20-页-·-原书第-18-页"></a>

### PDF 第 20 页 · 原书第 18 页
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

<a id="translation-02-flat-layouts-_2-1-2-基本定义"></a>

#### 2.1.2 基本定义

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

<a id="translation-02-flat-layouts-pdf-第-21-页-·-原书第-19-页"></a>

### PDF 第 21 页 · 原书第 19 页
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

<a id="translation-02-flat-layouts-pdf-第-22-页-·-原书第-20-页"></a>

### PDF 第 22 页 · 原书第 20 页
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

<a id="translation-02-flat-layouts-pdf-第-23-页-·-原书第-21-页"></a>

### PDF 第 23 页 · 原书第 21 页
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

<a id="translation-02-flat-layouts-pdf-第-24-页-·-原书第-22-页"></a>

### PDF 第 24 页 · 原书第 22 页
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

<a id="translation-02-flat-layouts-pdf-第-25-页-·-原书第-23-页"></a>

### PDF 第 25 页 · 原书第 23 页
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

<a id="translation-02-flat-layouts-pdf-第-26-页-·-原书第-24-页"></a>

### PDF 第 26 页 · 原书第 24 页
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

<a id="translation-02-flat-layouts-pdf-第-27-页-·-原书第-25-页"></a>

### PDF 第 27 页 · 原书第 25 页
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

<a id="translation-02-flat-layouts-pdf-第-28-页-·-原书第-26-页"></a>

### PDF 第 28 页 · 原书第 26 页
<a id="pdf-page-28"></a>

<a id="paper-section-2-1-3"></a>

<a id="translation-02-flat-layouts-_2-1-3-基本运算"></a>

#### 2.1.3 基本运算

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

<a id="translation-02-flat-layouts-pdf-第-29-页-·-原书第-27-页"></a>

### PDF 第 29 页 · 原书第 27 页
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

<a id="translation-02-flat-layouts-pdf-第-30-页-·-原书第-28-页"></a>

### PDF 第 30 页 · 原书第 28 页
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

<a id="translation-02-flat-layouts-pdf-第-31-页-·-原书第-29-页"></a>

### PDF 第 31 页 · 原书第 29 页
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

<a id="translation-02-flat-layouts-pdf-第-32-页-·-原书第-30-页"></a>

### PDF 第 32 页 · 原书第 30 页
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

<a id="translation-02-flat-layouts-pdf-第-33-页-·-原书第-31-页"></a>

### PDF 第 33 页 · 原书第 31 页
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

<a id="translation-02-flat-layouts-pdf-第-34-页-·-原书第-32-页"></a>

### PDF 第 34 页 · 原书第 32 页
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

<a id="translation-02-flat-layouts-pdf-第-35-页-·-原书第-33-页"></a>

### PDF 第 35 页 · 原书第 33 页
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

<a id="translation-02-flat-layouts-pdf-第-36-页-·-原书第-34-页"></a>

### PDF 第 36 页 · 原书第 34 页
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

<a id="translation-03-flat-layout-algebra-第-2-1-节-合并、紧致性、补布局与可处理性"></a>

## 第 2.1 节：合并、紧致性、补布局与可处理性
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-03-flat-layout-algebra-pdf-第-37-页-·-原书第-35-页"></a>

### PDF 第 37 页 · 原书第 35 页
<a id="pdf-page-37"></a>

我们可以如下描述拼接布局的重要属性。

命题 2.1.3.41. 假设 <img src="./assets/p037-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.620em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。然后

1. <img src="./assets/p037-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:5.450em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的秩是

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-003.png)

2. <img src="./assets/p037-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:5.450em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的大小为

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-004.png)

3. <img src="./assets/p037-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:5.450em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的余大小为

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-005.png)

证明。对每个 1 ≤ i ≤ k，记 Lᵢ = Sᵢ : Dᵢ。对结论 1，计算得

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-006.png)

对于 2, 我们计算

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-007.png)

对于 3, 我们计算

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-008.png)

这里使用了命题 2.1.3.40 给出的拼接布局函数的表达式。

<a id="paper-section-2-1-4"></a>

<a id="translation-03-flat-layout-algebra-_2-1-4-平坦合并"></a>

#### 2.1.4 平坦合并

我们已经看到，平坦布局 L 的布局函数 $\Phi_L$ 是一个重要不变量。许多情况下，我们只关心布局函数 $\Phi_L$，因此可以使用任何具有相同布局函数的布局。平坦合并运算

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-011.png)

为我们提供了最简单的平坦布局，其布局函数为<img src="./assets/p037-b045-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.433em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />（见命题<img src="./assets/p037-b045-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:4.166em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />）

我们首先定义合并平坦布局的概念。

![原文公式、图示或代码（PDF 第 37 页）](./assets/p037-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 37 页原页](./assets/page-037.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">We can describe the important attributes of a concatenated layout as follows.

Proposition 2.1.3.41. Suppose L1, . . . , Lk are flat layouts. Then

1. the rank of L1 ⋆· · · ⋆Lk is

2. the size of L1 ⋆· · · ⋆Lk is

3. the cosize of L1 ⋆· · · ⋆Lk is

Proof. Let’s write Li = Si : Di for each 1 ≤i ≤k. For 1, we compute

For 2, we compute

For 3, we compute

where we have used our identification of ΦL1⋆···⋆Lk from Proposition 2.1.3.40.

2.1.4 Flat coalesce

We have seen that the layout function ΦL of a flat layout L is an important invariant. In many cases, we are only interested in the layout function ΦL, and are free to work with any layout whose layout function is ΦL. The flat coalesce operation

provides us with the simplest flat layout whose layout function is ΦL (see Proposition 2.1.4.19).

We begin by defining the notion of a coalesced flat layout.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-38-页-·-原书第-36-页"></a>

### PDF 第 38 页 · 原书第 36 页
<a id="pdf-page-38"></a>

定义 2.1.4.1。设 L = (s₁, …, sₘ) : (d₁, …, dₘ) 为平坦布局。如果满足以下条件，就称 L 已合并：

1. 对任意 1 ≤ i ≤ m，都有 sᵢ ≠ 1；并且

2. 对任意 1 ≤ i < m，都有 sᵢdᵢ ≠ dᵢ₊₁。

示例 2.1.4.2. 平坦布局

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-004.png)

未合并，因为 <img src="./assets/p038-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:4.491em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.1.4.3. 平坦布局

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-006.png)

是合并的。

示例 2.1.4.4. 空布局 <img src="./assets/p038-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.682em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已合并。

例 2.1.4.5。如果 L = (s) : (d)，且 s ≠ 1，那么 L 已合并。

示例 2.1.4.6. 如果 <img src="./assets/p038-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.321em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有 <img src="./assets/p038-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.536em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的列主序布局，则 <img src="./assets/p038-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不会合并，因为对于任何 <img src="./assets/p038-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.822em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-010.png)

示例 2.1.4.7. 如果 <img src="./assets/p038-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:14.285em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是行主序布局，且所有 <img src="./assets/p038-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 均具有 <img src="./assets/p038-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:3.245em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p038-b013-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并： 如果 <img src="./assets/p038-b013-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.825em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-011.png)

例 2.1.4.8。形如下式的平坦布局

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-012.png)

已合并，当且仅当 m ≤ 1。

如果 L 是平坦布局，可以先去掉满足 sᵢ = 1 的模态，再将满足 sᵢdᵢ = dᵢ₊₁ 的相邻模态合并，从而得到与 L 具有相同布局函数的已合并布局 coal♭(L)。更准确地说，作如下构造。

构造2.1.4.9. 假设<img src="./assets/p038-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，则写

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-015.png)

在 ⟨m⟩ 上，以满足下式的相邻指标之间的关系 i ∼ i + 1 生成一个等价关系 ∼：

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-016.png)

商集 ⟨m⟩/∼ 的次序由 i ≤ i′ ⇒ [i] ≤ [i′] 给出，因此可将它与 ⟨m̄⟩ 等同，其中 m̄ 为商集 ⟨m⟩/∼ 的大小。如果 i ∈ ⟨m̄⟩ 对应于下列等价类

![原文公式、图示或代码（PDF 第 38 页）](./assets/p038-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 38 页原页](./assets/page-038.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 2.1.4.1. Suppose L = (s1, . . . , sm) : (d1, . . . , dm) is a flat layout. We say L is coalesced if

1. for any 1 ≤i ≤m, we have si̸ = 1, and

2. for any 1 ≤i &lt; m, we have sidi̸ = di+1.

Example 2.1.4.2. The flat layout

is not coalesced because 3 · 7 = 21.

Example 2.1.4.3. The flat layout

is coalesced.

Example 2.1.4.4. The empty layout E = () : () is coalesced.

Example 2.1.4.5. If L = (s) : (d) and s̸ = 1, then L is coalesced.

Example 2.1.4.6. If L = (s1, . . . , sm) : (d1, . . . , dm) is a column-major layout with rank(L) &gt; 1, then L is not coalesced, since for any 1 ≤i &lt; m, we have

Example 2.1.4.7. If L = (s1, . . . , sm) : (d1, . . . , dm) is a row-major layout with si &gt; 1 for all 1 ≤i ≤m, then L is coalesced: If 1 ≤i &lt; m, then

Example 2.1.4.8. A flat layout of the form

is coalesced if and only if m ≤1.

If L is a flat layout, then we may obtain a coalesced layout coal♭(L) with the same layout function as L by removing modes with si = 1, and combining modes with sidi = di+1. More precisely, we make the following construction.

Construction 2.1.4.9. Suppose L is a flat layout, and write

Let ∼be the equivalence relation on ⟨m⟩generated by i ∼i + 1 if

The quotient ⟨m⟩/ ∼is ordered by [i] ≤[i′] if i ≤i′, so we may identify ⟨m⟩/ ∼with ⟨¯m⟩, where ¯m is the size of ⟨m⟩/ ∼. If i ∈⟨¯m⟩corresponds to the equivalence class</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-39-页-·-原书第-37-页"></a>

### PDF 第 39 页 · 原书第 37 页
<a id="pdf-page-39"></a>

然后我们将整数 <img src="./assets/p039-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:0.929em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p039-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.502em;width:0.980em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-001.png)

和

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-002.png)

并定义

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-003.png)

观察 2.1.4.10. 检查定义，我们可以等效地将 <img src="./assets/p039-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:3.651em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为从

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-004.png)

通过迭代执行操作

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-005.png)

直至结果合并。

示例 2.1.4.11. 如果 <img src="./assets/p039-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:18.348em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-007.png)

示例 2.1.4.12. 如果 <img src="./assets/p039-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.983em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-008.png)

示例 2.1.4.13. 如果 <img src="./assets/p039-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.375em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是列主的，并且并非所有 <img src="./assets/p039-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.929em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都等于 1,，则

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-009.png)

示例 2.1.4.14. 如果 <img src="./assets/p039-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是行主序，则

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-010.png)

我们来证明操作 <img src="./assets/p039-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:5.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 会导致合并布局。

引理 2.1.4.15. 如果 <img src="./assets/p039-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则 <img src="./assets/p039-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:3.663em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是合并的。

证明。借用构造 2.1.4.9, 的符号让

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-013.png)

并让

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-014.png)

我们要证明 coal♭(L) 已合并。设 1 ≤ i ≤ m̄，那么 i 对应于一个非空的

等价类 I ∈ ⟨m⟩/∼，并且

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-016.png)

是整数 <img src="./assets/p039-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.270em;width:3.352em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的乘积，所以 <img src="./assets/p039-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:3.082em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 39 页）](./assets/p039-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 39 页原页](./assets/page-039.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">then we define integers ¯si and ¯di as

and

and define

Observation 2.1.4.10. Examining the definition, we could equivalently define coal♭(L) to be the flat layout obtained from

by iteratively performing the operation

until the result is coalesced.

Example 2.1.4.11. If L = (2, 2, 2, 2, 2) : (8, 16, 1024, 2048, 4096), then

Example 2.1.4.12. If L = (3, 4, 1, 5) : (1, 8, 3, 32), then

Example 2.1.4.13. If L = (s1, . . . , sm) : (d1, . . . , dm) is column-major, and not all si are equal to 1, then

Example 2.1.4.14. If L is row-major, then

Let’s justify that the operation L 7→coal♭(L) results in a coalesced layout.

Lemma 2.1.4.15. If L is a flat layout, then coal♭(L) is coalesced.

Proof. Borrowing the notation of Construction 2.1.4.9, let

and let

We want to show that coal♭(L) is coalesced. Suppose 1 ≤i ≤¯m. Then i corresponds to a (non-empty)

equivalence class I ∈⟨m⟩/ ∼, and

is a product of integers si′ &gt; 1, so ¯si &gt; 1.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-40-页-·-原书第-38-页"></a>

### PDF 第 40 页 · 原书第 38 页
<a id="pdf-page-40"></a>

假设 <img src="./assets/p040-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.827em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们声称 <img src="./assets/p040-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.549em;width:5.293em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p040-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对应于等价类

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-001.png)

假设 <img src="./assets/p040-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.239em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对应于等价类

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-002.png)

然后通过使用 <img src="./assets/p040-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.521em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的等式 <img src="./assets/p040-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:8.512em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们可以写

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-003.png)

由于 <img src="./assets/p040-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:2.539em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p040-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:4.286em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不属于同一等价类，因此我们有

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-004.png)

示例 2.1.4.16. 如果 <img src="./assets/p040-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，则 <img src="./assets/p040-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:5.963em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 特别是，这意味着 <img src="./assets/p040-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:3.767em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是幂等操作：

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-005.png)

接下来，我们认为合并平坦布局会使布局函数保持不变。

引理 2.1.4.17. 如果 <img src="./assets/p040-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则 <img src="./assets/p040-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.405em;width:6.648em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

证明。通过观察 2.1.4.10, 足以表明，用 <img src="./assets/p040-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.417em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 替换 <img src="./assets/p040-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:6.949em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的实例会使布局函数保持不变。假设

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-008.png)

是一个平坦布局，并且存在一些 <img src="./assets/p040-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.547em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p040-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.293em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-009.png)

表示将 L 的第 i 与第 i + 1 个模态合并所得到的平坦布局。更准确地说，有

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-010.png)

和 <img src="./assets/p040-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.323em;width:0.928em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-011.png)

<img src="./assets/p040-b034-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数由下式给出

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-012.png)

对 sⱼ 取模。L′ 的布局函数则为

其中 <img src="./assets/p040-b036-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:2.221em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 40 页）](./assets/p040-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 40 页原页](./assets/page-040.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Suppose 1 ≤i &lt; ¯m. We claim that ¯si ¯di̸ = ¯di+1. Suppose i corresponds to the equivalence class

and suppose i + 1 corresponds to the equivalence class

Then by using the equalities si′+tdi′+t = di′+t+1 for 0 ≤t &lt; k, we may write

and since i′ + k and i′ + k + 1 do not lie in the same equivalence class, we have

Example 2.1.4.16. If L is coalesced, then coal♭(L) = L. In particular, this implies that coal♭(−) is an idempotent operation:

Next, we argue that coalescing a flat layout leaves the layout function unchanged.

Lemma 2.1.4.17. If L is a flat layout, then Φcoal♭(L) = ΦL.

Proof. By Observation 2.1.4.10, it suffices to show that replacing an instance of si, si+1 : di, sidi with sisi+1 : di leaves the layout function unchanged. Suppose

is a flat layout, and there exists some 1 ≤i &lt; m such that di+1 = sidi. Let

denote the flat layout obtained from L by combining the ith and (i + 1)th modes of L. More precisely, we have

and d′

The layout function for L is given by

mod sj, and the layout function for L′ is given by

where xj =</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-41-页-·-原书第-39-页"></a>

### PDF 第 41 页 · 原书第 39 页
<a id="pdf-page-41"></a>

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-000.png)

其中<img src="./assets/p041-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.979em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

对 s′ⱼ 取模。

我们观察到

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-003.png)

因此

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-004.png)

我们可以利用合并运算，刻画两个平坦布局何时具有相同的布局函数。

命题 2.1.4.18. 假设 <img src="./assets/p041-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p041-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。然后

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-006.png)

证明。如果 <img src="./assets/p041-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:8.948em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么根据引理 2.1.4.17, 我们有

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-007.png)

相反，假设 <img src="./assets/p041-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:8.948em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们将论证 <img src="./assets/p041-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.556em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让我们写

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-008.png)

如果 <img src="./assets/p041-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.096em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之一非零，另一个是 0,，那么显然是 <img src="./assets/p041-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.516em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此我们可以假设 <img src="./assets/p041-b028-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.190em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让 <img src="./assets/p041-b028-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示满足 <img src="./assets/p041-b028-m06.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:7.299em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的最小整数那么，特别是，对于任何 <img src="./assets/p041-b028-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们都有 <img src="./assets/p041-b028-m07.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:7.779em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 有两种情况考虑：

• （情况 <img src="./assets/p041-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p041-b029-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.431em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让 <img src="./assets/p041-b029-m03.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:12.262em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-010.png)

所以 <img src="./assets/p041-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.405em;width:8.964em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p041-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.555em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• （情况 <img src="./assets/p041-b032-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.366em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p041-b032-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.523em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p041-b032-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.367em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不失一般性，我们可以假设 <img src="./assets/p041-b032-m04.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:3.352em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让 <img src="./assets/p041-b032-m05.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:12.816em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-012.png)

同时

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-013.png)

由于 <img src="./assets/p041-b037-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:3.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，我们有 <img src="./assets/p041-b037-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.308em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们推断出 <img src="./assets/p041-b037-m03.png" alt="原文数学符号" style="display:inline-block;height:1.405em;width:8.995em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 以及 <img src="./assets/p041-b037-m04.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.557em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 41 页）](./assets/p041-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 41 页原页](./assets/page-041.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">where x′

mod s′

j. We observe that

and so

We can use the coalesce operation to characterize when two flat layouts have the same layout function.

Proposition 2.1.4.18. Suppose A and B are flat layouts. Then

Proof. If coal♭(A) = coal♭(B), then by Lemma 2.1.4.17, we have

Inversely, suppose that coal♭(A)̸ = coal♭(B). We will argue that ΦA̸ = ΦB. Let’s write

If one of m, n is nonzero and the other is 0, then clearly ΦA̸ = ΦB, so we may assume m, n ≥1. Let i denote the least integer such that (si, di)̸ = (ti, ei). Then, in particular, we have s1 · · · sj = t1 · · · tj for any j &lt; i. There are two cases to consider:

• (Case 1): Suppose di̸ = ei. Let N = s1 · · · si−1 = t1 · · · ti−1. Then

so Φcoal♭(A)̸ = Φcoal♭(B), and hence ΦA̸ = ΦB.

• (Case 2): Suppose di = ei, so that si̸ = ti. Without loss of generality we may assume si &lt; ti. Let N = s1 · · · si = (t1 · · · ti−1)si. Then

while

and since coal♭(A) is coalesced, we have di+1̸ = sidi. We deduce that Φcoal♭(A)̸ = Φcoal♭(B), and hence ΦA̸ = ΦB.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-42-页-·-原书第-40-页"></a>

### PDF 第 42 页 · 原书第 40 页
<a id="pdf-page-42"></a>

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-000.png)

前面的命题为我们提供了 <img src="./assets/p042-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:3.940em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的以下抽象特征

命题 2.1.4.19。设 L 为平坦布局。在所有布局函数等于 $\Phi_L$ 的平坦布局中，coal♭(L) 是秩最小的唯一一个。

证明。设 L′ 为满足 $\Phi_{L\prime}$ = $\Phi_L$ 的平坦布局。由命题 2.1.4.18，有

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-003.png)

由此可见

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-004.png)

其中相等成立当且仅当

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-005.png)

<a id="paper-section-2-1-5"></a>

<a id="translation-03-flat-layout-algebra-_2-1-5-紧致平坦布局"></a>

#### 2.1.5 紧致平坦布局

在处理布局补之前，我们必须定义一个重要的布局系列，称为紧致平坦布局。这些是平坦布局，其布局函数是双射的。就描述布局的标准网格图而言，如果每个整数 <img src="./assets/p042-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.624em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 恰好出现一次，则平坦布局 <img src="./assets/p042-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的。例如，布局

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-007.png)

紧致，而布局

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-008.png)

和

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-009.png)

不紧致。更准确地说，我们有以下定义。

![原文公式、图示或代码（PDF 第 42 页）](./assets/p042-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 42 页原页](./assets/page-042.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">The previous proposition affords us the following abstract characterization of coal♭(L).

Proposition 2.1.4.19. If L is a flat layout, then coal♭(L) is the unique flat layout of minimal rank whose layout function is ΦL.

Proof. Suppose L′ is a flat layout with ΦL′ = ΦL. Then by Proposition 2.1.4.18, we have

and it follows that

where equality holds if and only if

2.1.5 Compact flat layouts

Before treating layout complements, we must define an important family of layouts called compact flat layouts. These are the flat layouts whose layout functions are bijective. In terms of the standard grid diagrams depicting layouts, a flat layout L is compact if each integer 0 ≤i &lt; size(L) appears exactly once. For instance, the layout

is compact, while the layouts

and

are not compact. More precisely, we have the following definition.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-43-页-·-原书第-41-页"></a>

### PDF 第 43 页 · 原书第 41 页
<a id="pdf-page-43"></a>

定义 2.1.5.1. 假设 <img src="./assets/p043-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。我们说 <img src="./assets/p043-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的，如果

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-001.png)

是同构。

示例 2.1.5.2. 平坦布局

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-003.png)

是紧致的。更一般地，如果 <img src="./assets/p043-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是列主序的，则 <img src="./assets/p043-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的。

示例 2.1.5.3. 平坦布局

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-005.png)

是紧致的。更一般地，如果 <img src="./assets/p043-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是行主序的，则 <img src="./assets/p043-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的。

示例 2.1.5.4. 空布局

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-007.png)

是紧致的。

示例 2.1.5.5. 假设

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-009.png)

是平坦布局。如果 L 存在一个模态满足 sᵢ > 1 且 dᵢ = 0，那么 L 不是紧致布局。

我们可以如下给出紧致布局的明确特征。

命题 2.1.5.6. 假设 <img src="./assets/p043-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，并写

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-012.png)

那么，L 为紧致布局，当且仅当存在置换 σ ∈ Σₘ，使得

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-013.png)

对于所有 <img src="./assets/p043-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.847em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 换句话说，<img src="./assets/p043-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的当且仅当存在置换 <img src="./assets/p043-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.419em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p043-b021-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:5.267em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是列主序的。

证明。假设<img src="./assets/p043-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，并写

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-015.png)

先假设 $L$ 紧致，因而存在置换 $\sigma\in\Sigma_m$，使每个 $1\le i\le m$ 都满足 $d_{\sigma(i)}=s_{\sigma(1)}\cdots s_{\sigma(i-1)}$。记 $S^\sigma=(s_{\sigma(1)},\ldots,s_{\sigma(m)})$，则可将 $\Phi_L^{\operatorname{cosize}(L)}$ 写成〔校注：原文这一开头直接从“紧致”推出待证的置换条件，论证顺序有循环。此段实际验证的是“存在该置换条件 ⇒ 紧致”；必要性由后面的归纳论证给出。〕

表示为下列复合映射：

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-017.png)

由于这些映射中的每一个都是同构，所以复合 <img src="./assets/p043-b030-m01.png" alt="原文数学符号" style="display:inline-block;height:1.402em;width:3.866em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 也是同构

![原文公式、图示或代码（PDF 第 43 页）](./assets/p043-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 43 页原页](./assets/page-043.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 2.1.5.1. Suppose L is a flat layout. We say L is compact if

is an isomorphism.

Example 2.1.5.2. The flat layout

is compact. More generally, if L is column-major, then L is compact.

Example 2.1.5.3. The flat layout

is compact. More generally, if L is row-major, then L is compact.

Example 2.1.5.4. The empty layout

is compact.

Example 2.1.5.5. Suppose

is a flat layout. If there is some mode of L with si &gt; 1 and di = 0, then L is not compact.

We can give an explicit characterization of compact layouts as follows.

Proposition 2.1.5.6. Suppose L is a flat layout, and write

then L is compact if and only if there exists a permutation σ ∈Σm such that

for all 1 ≤i ≤m. In other words, L is compact if and only if there exists a permutation σ ∈Σm such that squeeze(L)σ is column-major.

Proof. Suppose L is a flat layout, and write

Suppose first that L is compact, so there exists a permutation σ ∈Σm such that dσ(i) = sσ(1) · · · sσ(i−1) for each 1 ≤i ≤m. If we write Sσ = (sσ(1), . . . , sσ(m)), then we can write Φcosize(L)

L as the composite

and since each of these maps is an isomorphism, so is the composite Φcosize(L)</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-44-页-·-原书第-42-页"></a>

### PDF 第 44 页 · 原书第 42 页
<a id="pdf-page-44"></a>

相反，假设 <img src="./assets/p044-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.402em;width:3.889em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p044-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:0.727em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是同构。首先，我们注意到步长 <img src="./assets/p044-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.585em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 必须成对不同：假设 <img src="./assets/p044-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.553em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并让 <img src="./assets/p044-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.368em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p044-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:0.462em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p044-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.368em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p044-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:0.510em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示第 <img src="./assets/p044-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />（分别为 <img src="./assets/p044-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.590em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />）分量为 1, 且所有其他分量为 0. 的元组这些元组满足

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-004.png)

由于下列布局函数

是单射，必有 i = j。既然步长 d₁, …, dₘ 两两不同，就令 σ ∈ Σₘ 为满足下式的置换：

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-006.png)

我们将通过对 <img src="./assets/p044-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.340em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的归纳来论证 <img src="./assets/p044-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.322em;width:10.169em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于基本情况 <img src="./assets/p044-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.595em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们注意到 1 在 <img src="./assets/p044-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.402em;width:3.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p044-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:0.727em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的像中，并且 <img src="./assets/p044-b010-m07.png" alt="原文数学符号" style="display:inline-block;height:1.402em;width:3.887em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的最小非零值

<img src="./assets/p044-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:0.727em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p044-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.270em;width:2.537em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 因此可以得出 <img src="./assets/p044-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.316em;width:4.399em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p044-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.652em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且我们已经证明了所有 <img src="./assets/p044-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.611em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的声明考虑步长 <img src="./assets/p044-b011-m06.png" alt="原文数学符号" style="display:inline-block;height:1.270em;width:2.422em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们知道不存在 <img src="./assets/p044-b011-m07.png" alt="原文数学符号" style="display:inline-block;height:1.349em;width:10.213em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 形式的元组使得

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-008.png)

因为这样的表达式的最大可能值是

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-009.png)

由于布局函数

是满射，并且 dσ(i) < dσ(i+1) < ··· < dσ(m)，所以它的下一个更大的值

为 dσ(i)，因此必有 dσ(i) = sσ(1) ··· sσ(i−1)，所证即得。

我们通过给出一系列使平坦布局 <img src="./assets/p044-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 紧致的等效条件来结束本节。

命题 2.1.5.7. 假设 <img src="./assets/p044-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。那么下面的都是等价的。

1. L 紧致。

2. coal♭(L) 紧致。

3. squeeze(L) 紧致。

4. sort(L) 紧致。

证明。 1, 2, 和 3, 的等效性来自以下事实：

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-019.png)

还需证明 $L$ 紧致当且仅当 $\operatorname{sort}(L)$ 紧致。利用以下事实：

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-020.png)

我们有

sort(L) 紧致 ⇔ squeeze(sort(L)) 紧致。

⇔ sort(squeeze(L)) 紧致。

对某个 $\tau\in\Sigma_m$，有 $\operatorname{sort}(\operatorname{squeeze}(L))=\operatorname{squeeze}(L)^\tau$。因此，存在 $\sigma$ 使 $\operatorname{squeeze}(L)^\sigma$ 为列主序布局，当且仅当存在 $\sigma'\in\Sigma_m$ 使 $\operatorname{sort}(\operatorname{squeeze}(L))$ 为列主序布局，其中 $\sigma'=\tau^{-1}\sigma$。于是〔校注：原文后一处布局漏写了置换上标，应为 $(\operatorname{sort}(\operatorname{squeeze}(L)))^{\sigma'}$。〕

sort(squeeze(L)) 紧致 ⇔ squeeze(L) 紧致。

⇔ L 紧致。

![原文公式、图示或代码（PDF 第 44 页）](./assets/p044-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 44 页原页](./assets/page-044.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Conversely, suppose that Φcosize(L)

L is an isomorphism. First, we note that the strides d1, . . . , dm must be pairwise distinct: Suppose di = dj, and let δm

i and δm

j denote the tuples whose ith (resp. jth) entry is 1, and all of whose other entries are 0. These tuples satisfy

and since Φcosize(L)

L is injective, we must have i = j. Given that the strides d1, . . . , dm are pairwise distinct, let σ ∈Σm be the permutation such that

We will argue by induction on i ≥1 that dσ(i) = sσ(1) · · · sσ(i−1). For the base case i = 1, we note that 1 is in the image of Φcosize(L) L , and the smallest non-zero value of Φcosize(L)

L is dσ(1), so it follows that dσ(1) = 1. Suppose i &gt; 1, and that we have proved the claim for all j &lt; i. Consider the stride dσ(i). We know that there is no tuple of the form (x1, . . . , xi−1, 0, . . . , 0)σ such that

since the largest possible value of such an expression is

Since Φcosize

L (L) is surjective, and dσ(i) &lt; dσ(i+1) &lt; · · · &lt; dσ(m), it follows that the next largest value

L is dσ(i), so we must have dσ(i) = sσ(1) · · · sσ(i−1), as claimed.

We conclude this section by giving a family of equivalent conditions for a flat layout L to be compact.

Proposition 2.1.5.7. Suppose L is a flat layout. Then the following are equivalent.

1. L is compact.

2. coal♭(L) is compact.

3. squeeze(L) is compact.

4. sort(L) is compact.

Proof. The equivalence of 1, 2, and 3, follows from the fact that

It remains to prove that L is compact if and only if sort(L) is compact. Using the fact that

we have

sort(L) is compact. ⇔ squeeze(sort(L)) is compact.

⇔ sort(squeeze(L)) is compact.

Now sort(squeeze(L)) = squeeze(L)τ for some permutation τ ∈Σm, so there exists a permutation σ such that squeeze(L)σ is column-major if and only if there exists a permutation σ′ ∈Σm such that sort(squeeze(L)) is column-major, namely σ′ = τ −1σ. It follows that

sort(squeeze(L)) is compact. ⇔ squeeze(L) is compact.

⇔ L is compact.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-45-页-·-原书第-43-页"></a>

### PDF 第 45 页 · 原书第 43 页
<a id="pdf-page-45"></a>

<a id="paper-section-2-1-6"></a>

<a id="translation-03-flat-layout-algebra-_2-1-6-补布局"></a>

#### 2.1.6 补布局

在本节中，我们定义互补平坦布局的概念。回想一下定义 2.1.5.1，如果布局函数如下，则平坦布局 <img src="./assets/p045-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-002.png)

是同构。

定义 2.1.6.1。设 A 与 B 为平坦布局。如果拼接布局 A ⋆ B 紧致，就称 B 为 A 的一个补布局，并记为 A ⊥ B。

例 2.1.6.2。如果 A = (3) : (5)，B = (5) : (1)，则 A ⊥ B，因为

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-005.png)

是紧致的。

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-006.png)

例 2.1.6.3。如果 A = (4, 2, 10) : (1400, 2, 20)，B = (2, 5, 7, 2) : (1, 4, 200, 5600)，则 A ⊥ B，因为

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-007.png)

是紧致的。

例 2.1.6.4. 若 $A$ 为平坦布局，$E=():()$ 为空布局，则 $A\perp A$ 当且仅当 $A$ 紧致，因为〔校注：原文这里的 $A\perp A$ 应为 $A\perp E$；后面的例 2.1.6.6 才讨论自互补。〕

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-009.png)

示例 2.1.6.5. 如果 <img src="./assets/p045-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p045-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-010.png)

示例 2.1.6.6. 如果 <img src="./assets/p045-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则 <img src="./assets/p045-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:3.003em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 当且仅当 <img src="./assets/p045-b025-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.302em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

观察 2.1.6.7。A 存在补布局的必要条件是 $\Phi_A$ 为单射。不过，确实存在 $\Phi_A$ 为单射但 A 没有补布局的平坦布局 A。例如，考虑布局

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-012.png)

<img src="./assets/p045-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数是单射的，因为

<img src="./assets/p045-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:15.079em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p045-b029-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.924em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 45 页）](./assets/p045-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 45 页原页](./assets/page-045.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.6 Complements

In this section, we define the notion of complementary flat layouts. Recall from Definition 2.1.5.1 that a flat layout L is compact if the layout function

is an isomorphism.

Definition 2.1.6.1. Suppose A and B are flat layouts. We say B is a complement of A, and write A ⊥B, if the concatenated layout A ⋆B is compact.

Example 2.1.6.2. If A = (3) : (5) and B = (5) : (1), then A ⊥B since

is compact.

Example 2.1.6.3. If A = (4, 2, 10) : (1400, 2, 20) and B = (2, 5, 7, 2) : (1, 4, 200, 5600), then A ⊥B since

is compact.

Example 2.1.6.4. If A is a flat layout and E = () : () is the empty layout, then A ⊥A if and only if A is compact, since

Example 2.1.6.5. If A and B are flat layouts, then

Example 2.1.6.6. If A is a flat layout, then A ⊥A if and only if size(A) = 1.

Observation 2.1.6.7. In order for A to admit a complement, it is necessary that ΦA is injective. There do, however, exist flat layouts A such that ΦA is injective, and A does not admit a complement. For example, consider the layout

The layout function of A is injective since

ΦA(0) = 0, ΦA(1) = 1, ΦA(2) = 3, and ΦA(3) = 4,</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-46-页-·-原书第-44-页"></a>

### PDF 第 46 页 · 原书第 44 页
<a id="pdf-page-46"></a>

但 A 不存在补布局：假设

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-001.png)

是任何其他平坦布局。如果不存在元组

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-002.png)

使得 <img src="./assets/p046-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.790em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p046-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.635em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不是紧致的。否则假设有这样一个元组 <img src="./assets/p046-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.541em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p046-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:11.558em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

•（情况 <img src="./assets/p046-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p046-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-004.png)

•（情况 <img src="./assets/p046-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p046-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-005.png)

•（情况 <img src="./assets/p046-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p046-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-006.png)

无论如何，我们推断 <img src="./assets/p046-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:2.441em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不是单射的，因此 <img src="./assets/p046-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.866em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 也不是。这意味着 <img src="./assets/p046-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.624em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不是紧的，所以 <img src="./assets/p046-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不是 <img src="./assets/p046-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局

观察 2.1.6.8. 补布局不是唯一的。例如，如果

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-008.png)

然后每个布局

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-009.png)

都是 A 的补布局。因此，A 的补布局构成一个可能为空的集合：

<img src="./assets/p046-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:9.324em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 平坦布局 <img src="./assets/p046-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.572em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p046-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.702em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补

即所有与 A 互补的平坦布局。

给出 B 为 A 的补布局的一组等价条件很有用（见命题 2.1.6.10）。为此，需要下面的技术性引理，它描述拼接运算与 squeeze(−)、sort(−)、coal♭(−) 各运算之间的相互关系。

引理 2.1.6.9. 假设 <img src="./assets/p046-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p046-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。然后

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-014.png)

2. $\operatorname{sort}(A\star B)=\operatorname{sort}(L\star\operatorname{sort}(B))$，且〔校注：右侧的 $L$ 未定义，应为 $A$。〕

![原文公式、图示或代码（PDF 第 46 页）](./assets/p046-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 46 页原页](./assets/page-046.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">but A does not admit a complement: Suppose

is any other flat layout. If there does not exist a tuple

such that φA⋆B(x1, x2, y1, . . . , ym) = 2, then A ⋆B is not compact. Suppose otherwise that there is such a tuple (x1, x2, y1, . . . , ym). Then φB(y1, . . . , ym) ∈{0, 1, 2}.

• (Case 1): If φB(y1, . . . , ym) = 0, then

• (Case 2): If φB(y1, . . . , ym) = 1, then

• (Case 3): If φB(y1, . . . , ym) = 2, then

In any case, we deduce that φA⋆B is not injective, hence neither is ΦA⋆B. This implies that A ⋆B is not compact, so B is not a complement of A.

Observation 2.1.6.8. Complements are not unique. For example, if

then each of the layouts

is a complement of A. Instead, there is a (possibly empty) set

complements♭(A) = {flat layouts B | B is a complement of A}.

of layouts which are complementary to A.

It will be useful to provide a family of equivalent conditions for B to be a complement of A (see Proposition 2.1.6.10). In order to do so, we need the following technical lemma, which describes the interplay between concatenation, and the operations squeeze(−), sort(−), and coal♭(−).

Lemma 2.1.6.9. Suppose A and B are flat layouts. Then

2. sort(A ⋆B) = sort(L ⋆sort(B)), and</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-47-页-·-原书第-45-页"></a>

### PDF 第 47 页 · 原书第 45 页
<a id="pdf-page-47"></a>

证明。写

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-001.png)

如果我们让 <img src="./assets/p047-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:10.255em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示 <img src="./assets/p047-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.391em;width:3.589em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的索引，<img src="./assets/p047-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.234em;width:8.212em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示 <img src="./assets/p047-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.391em;width:3.370em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的索引，那么

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-002.png)

这证明了 1. 对于 2,，我们注意到对于任何平坦布局 <img src="./assets/p047-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.141em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和任何置换 <img src="./assets/p047-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.270em;width:5.169em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有 <img src="./assets/p047-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:8.333em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 结果来自观察

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-003.png)

其中 σ 是形如 σ = id × σ′ ∈ Σₘ × Σₙ ⊂ Σₘ₊ₙ 的分块置换。对于结论 3，只需证明 A ⋆ B 与 A ⋆ coal♭(B) 具有相同的布局函数；这由命题 2.1.3.40 得到。

命题 2.1.6.10. 假设 <img src="./assets/p047-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p047-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。那么下面的都是等价的。

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-005.png)

证明。我们使用命题 2.1.5.7 和引理 2.1.6.9 来证明这些条件的等价性。首先，我们注意到 <img src="./assets/p047-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.377em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 意味着 1 和 2. 等价接下来，我们注意到，根据引理 2.1.6.9,，如果 <img src="./assets/p047-b015-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是操作 <img src="./assets/p047-b015-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或 <img src="./assets/p047-b015-m09.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:4.037em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的任何一个，则

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-006.png)

因此

A ⊥ B ⇔ A ⋆ B 紧致。

⇔ op(A ⋆ B) 紧致。

⇔ op(A ⋆ op(B)) 紧致。

⇔ op(B) 是 A 的补布局。

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-011.png)

我们想要描述平坦布局何时允许补。为此，我们制定

以下定义。

定义 2.1.6.11. 假设 <img src="./assets/p047-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则写

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-014.png)

如果对任意 1 ≤ i < m，整数 sᵢdᵢ 都整除 dᵢ₊₁，就称 A 可取补。

![原文公式、图示或代码（PDF 第 47 页）](./assets/p047-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 47 页原页](./assets/page-047.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Write

If we let {i1 &lt; · · · &lt; im′} ⊂⟨m⟩denote the indices with sik̸ = 1, and {j1, . . . , jn′} ⊂⟨n⟩denote the indices with tjℓ̸ = 1, then

This proves 1. For 2, we note that for any flat layout L, and any permutation σ ∈Σlen(L), we have sort(L) = sort(Lσ). The result follows from the observation that

where σ is a block permutation of the form σ = id × σ′ ∈Σm × Σn ⊂Σm+n. For 3., it suffices to show that A ⋆B and A ⋆coal♭(B) have the same layout function. This follows from Proposition 2.1.3.40.

Proposition 2.1.6.10. Suppose A and B are flat layouts. Then the following are equivalent.

Proof. We use Proposition 2.1.5.7 and Lemma 2.1.6.9 to prove the equivalence of these conditions. First, we note that sort(A ⋆B) = sort(B ⋆A), which implies the equivalence of 1 and 2. Next, we note that, by Lemma 2.1.6.9, if op(−) is any of the operations squeeze(−), sort(−), or coal♭(−), then

and so

A ⊥B ⇔ A ⋆B is compact.

⇔ op(A ⋆B) is compact.

⇔ op(A ⋆op(B)) is compact.

⇔ op(B) is a complement of A.

We would like to characterize when a flat layout admits a complement. To this end, we make the

following definition.

Definition 2.1.6.11. Suppose A is a flat layout, and write

We say A is complementable if for any 1 ≤i &lt; m, the integer sidi divides di+1.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-48-页-·-原书第-46-页"></a>

### PDF 第 48 页 · 原书第 46 页
<a id="pdf-page-48"></a>

示例 2.1.6.12. 平坦布局

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-001.png)

可取补，而平坦布局

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-002.png)

不可取补。

示例 2.1.6.13. 平坦布局

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-004.png)

可取补，而平坦布局

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-005.png)

不可取补。

示例 2.1.6.14. 如果 <img src="./assets/p048-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的，则根据命题 <img src="./assets/p048-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.352em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的。

示例 2.1.6.15. 假设

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-008.png)

是平坦布局。如果存在 1 ≤ i ≤ m，使得 sᵢ ≠ 1 且 dᵢ = 0，那么 A 不可取补。

如果 <img src="./assets/p048-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的，那么我们可以如下构造 <img src="./assets/p048-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局。

构造2.1.6.16. 假设<img src="./assets/p048-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，则写

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-011.png)

如果 <img src="./assets/p048-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的，那么我们将平坦布局 <img src="./assets/p048-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:4.322em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-012.png)

其中

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-013.png)

示例 2.1.6.17. 如果 <img src="./assets/p048-b032-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-014.png)

是空的布局。更一般地，如果 <img src="./assets/p048-b034-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的，则 <img src="./assets/p048-b034-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:8.031em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空布局。

示例 2.1.6.18. 如果 <img src="./assets/p048-b035-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-016.png)

示例 2.1.6.19. 如果 <img src="./assets/p048-b037-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.669em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-017.png)

让我们证明 <img src="./assets/p048-b039-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:4.322em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 实际上是 <img src="./assets/p048-b039-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局

![原文公式、图示或代码（PDF 第 48 页）](./assets/p048-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 48 页原页](./assets/page-048.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.1.6.12. The flat layout

is complementable, while the flat layout

is not complementable.

Example 2.1.6.13. The flat layout

complementable, while the flat layout

is not complementable.

Example 2.1.6.14. If A is compact, then by Proposition 2.1.5.6, A is complementable.

Example 2.1.6.15. Suppose

is a flat layout. If there is any 1 ≤i ≤m such that si̸ = 1 and di = 0, then A is not complementable.

If A is complementable, then we can construct a complement of A as follows.

Construction 2.1.6.16. Suppose A is a flat layout, and write

If A is complementable, then we define a flat layout comp♭(A) as

where

Example 2.1.6.17. If A = (8, 8) : (1, 8), then

is the empty layout. More generally, if A is compact, then comp♭(A) = () : () is the empty layout.

Example 2.1.6.18. If A = (2, 2) : (2, 8), then

Example 2.1.6.19. If A = (3, 3, 8) : (16, 96, 1), then

Let’s justify that comp♭(A) is, in fact, a complement of A.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-49-页-·-原书第-47-页"></a>

### PDF 第 49 页 · 原书第 47 页
<a id="pdf-page-49"></a>

引理 2.1.6.20。设 A 为平坦布局。如果 A 可取补，那么

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-001.png)

证明。让我们写一下

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-002.png)

所以 <img src="./assets/p049-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:9.238em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 哪里

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-003.png)

由命题 2.1.6.10，只需证明 C 是 sort(squeeze(A)) 的补布局。事实确实如此，因为拼接布局

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-004.png)

等于

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-005.png)

它的排序等于

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-006.png)

为列主序布局。

我们已经证明，如果 A 可取补，那么 A 存在补布局。接下来证明其逆命题也成立。

命题 2.1.6.21. 假设 <img src="./assets/p049-b036-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。那么当且仅当 <img src="./assets/p049-b036-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的时，存在 <img src="./assets/p049-b036-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局 <img src="./assets/p049-b036-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

证明。如果 <img src="./assets/p049-b037-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的，则根据引理 2.1.6.20，布局 <img src="./assets/p049-b037-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:6.442em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p049-b037-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局。反之，假设存在 <img src="./assets/p049-b037-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局 <img src="./assets/p049-b037-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并考虑平坦布局

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-010.png)

由于 <img src="./assets/p049-b043-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.972em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p049-b043-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.459em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射的，我们知道 <img src="./assets/p049-b043-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.310em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们将认为 <img src="./assets/p049-b043-m04.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.913em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 即 <img src="./assets/p049-b043-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是列主序的。由于

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-011.png)

是双射，我们知道 1 在 <img src="./assets/p049-b046-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.781em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的像中，这意味着 <img src="./assets/p049-b046-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.277em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p049-b046-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.843em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并假设我们已经证明 <img src="./assets/p049-b046-m05.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.713em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于所有 <img src="./assets/p049-b046-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 考虑步长 <img src="./assets/p049-b046-m07.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.308em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们知道不存在这样的 <img src="./assets/p049-b046-m08.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:9.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p049-b046-m09.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:21.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 因为这样的表达式的最大可能值为

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-012.png)

由于 $\Phi_L$ 为满射，且 dᵢ ≤ dᵢ₊₁ ≤ ··· ≤ dₘ，其下一个更大的值为 dᵢ，因此必有 dᵢ = s₁ ··· sᵢ₋₁，所证即得。

![原文公式、图示或代码（PDF 第 49 页）](./assets/p049-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 49 页原页](./assets/page-049.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Lemma 2.1.6.20. Suppose A is a flat layout. If A is a complementable, then

Proof. Lets write

so that comp♭(A) = coal♭(C) where

By Proposition 2.1.6.10, it suffices to prove that C is a complement of sort(squeeze(A)). This is the case since the concatenation

is equal to

and its sorting is equal to

which is column-major.

We have shown that if A is complementable, then A admits a complement. Next, we prove that the converse also holds.

Proposition 2.1.6.21. Suppose A is a flat layout. Then there exists a complement B of A if and only if A is complementable.

Proof. If A is complementable, then by Lemma 2.1.6.20 the layout B = comp♭(A) is a complement of A. Conversely, suppose there exists a complement B of A, and consider the flat layout

Since ΦL(0) = 0, and ΦL is injective, we know that d1̸ = 0. We will argue that di = s1 · · · si−1, i.e., that L is column-major. Since

is a bijection, we know that 1 is in the image of ΦL, which implies that d1 = 1. Suppose 1 &lt; i ≤m, and suppose we have proved that dj = s1 · · · sj−1 for all j &lt; i. Consider the stride di. We know that there is no (x1, . . . , xi−1, 0, . . . , 0) such that (x1, . . . , xi−1, 0, . . . , 0) · (d1, . . . , dm) = s1 · · · si−1, since the largest possible value of such an expression is

Since ΦL is surjective, and di ≤di+1 ≤· · · ≤dm, it follows that the next largest value of ΦL is di, so we must have di = s1 · · · si−1, as claimed.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-50-页-·-原书第-48-页"></a>

### PDF 第 50 页 · 原书第 48 页
<a id="pdf-page-50"></a>

回到我们的主要目标，考虑布局

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-001.png)

那么存在 <img src="./assets/p050-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:6.355em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p050-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.876em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p050-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.396em;width:2.999em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p050-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.928em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p050-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.396em;width:3.051em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于每个 <img src="./assets/p050-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.285em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p050-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.287em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-004.png)

整除

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-005.png)

因此可知 A 可取补。

我们的下一个目标是给出平坦布局 <img src="./assets/p050-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.206em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局 <img src="./assets/p050-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:4.327em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的抽象表征。为此，我们需要以下引理。

引理 2.1.6.22. 假设 <img src="./assets/p050-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。如果 <img src="./assets/p050-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补且已排序，则布局函数

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-008.png)

严格递增。

证明。写

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-010.png)

如果 <img src="./assets/p050-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.037em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们声称

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-011.png)

k = 1 时，由于求和范围为空，此式自然成立。再对 k 归纳，得到

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-012.png)

现在，假设我们有 <img src="./assets/p050-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.612em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p050-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.896em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这些整数在余字典序同构下对应于元组。

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-013.png)

由于 x ≤ y，存在最大的指标 1 ≤ k ≤ m，使得 xₖ < yₖ，并且对所有 k < ℓ ≤ m 都有 xℓ = yℓ。现在可以计算（x = y 的情形直接给出相等；原文这里未单列该情形）：

![原文公式、图示或代码（PDF 第 50 页）](./assets/p050-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 50 页原页](./assets/page-050.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Returning to our main goal, consider the layout

Then there exist j1 &lt; · · · &lt; jm′ such that s′

i = sji and d′

i = dji for each 1 ≤i ≤m′. If 1 ≤i &lt; m′, then

divides

so we conclude that A is complementable.

Our next goal is to give an abstract characterization of the complement comp♭(A) of a flat layout A. In order to do so, we need the following lemma.

Lemma 2.1.6.22. Suppose A is a flat layout. If A is complementable and sorted, then the layout function

is increasing.

Proof. Write

If 1 ≤k ≤m, we claim that

If k = 1, this holds vacuously, and by induction on k, we have

Now, suppose we have x, y ∈[0, size(A)) with x ≤y. These integers correspond, under the colexico- graphic isomorphism, to tuples.

Since x ≤y, we know there is some maximal 1 ≤k ≤m such that xk &lt; yk, and xℓ= yℓfor all k &lt; ℓ≤m. Now we can compute</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-51-页-·-原书第-49-页"></a>

### PDF 第 51 页 · 原书第 49 页
<a id="pdf-page-51"></a>

命题 2.1.6.23. 假设 <img src="./assets/p051-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p051-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。如果

![原文公式、图示或代码（PDF 第 51 页）](./assets/p051-visual-001.png)

<img src="./assets/p051-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:2.249em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，并且

<img src="./assets/p051-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:2.249em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序，

然后<img src="./assets/p051-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.266em;width:6.761em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

证明。条件1和2意味着<img src="./assets/p051-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.490em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p051-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.320em;width:4.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />具有相同的像。由于 <img src="./assets/p051-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p051-b006-m06.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:4.314em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序，根据引理 2.1.6.22 我们知道 <img src="./assets/p051-b006-m08.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.502em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p051-b006-m09.png" alt="原文数学符号" style="display:inline-block;height:1.320em;width:4.144em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是递增的。结合这两个事实，得出 <img src="./assets/p051-b006-m10.png" alt="原文数学符号" style="display:inline-block;height:1.320em;width:7.196em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 命题 2.1.4.18 和条件 3 意味着

![原文公式、图示或代码（PDF 第 51 页）](./assets/p051-visual-005.png)

定义 2.1.6.24。设 A、B 为平坦布局，N 为正整数。如果 B 是 A 的补布局，并且满足下式，就称 B 为 A 的一个 N 补布局：

![原文公式、图示或代码（PDF 第 51 页）](./assets/p051-visual-006.png)

定义 2.1.6.25. 假设 <img src="./assets/p051-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则写

![原文公式、图示或代码（PDF 第 51 页）](./assets/p051-visual-007.png)

如果满足以下条件，就称 A 可取 N 补：

1. 对所有 1 ≤ i < m，整数 sᵢdᵢ 整除 dᵢ₊₁；并且

2. 整数 sₘdₘ 整除 N。

观察 2.1.6.26。如果 <img src="./assets/p051-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补，且 <img src="./assets/p051-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.069em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局 <img src="./assets/p051-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.516em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的最后一个模态，那么 <img src="./assets/p051-b015-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可以取 N 补，当且仅当 N 是 <img src="./assets/p051-b015-m08.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.956em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的正整数倍。

观察 2.1.6.27。N 补布局并不唯一。例如，如果 A = (2, 2) : (1, 50)，N = 100，那么布局 B₁ = (25) : (2) 与 B₂ = (5, 5) : (2, 10) 都是 A 的 N 补布局。更一般地，如果 B 是 A 的 N 补布局，则 coal♭(B) 也是 A 的 N 补布局。

注记 2.1.6.28。设 A 为平坦布局，B₁ 与 B₂ 都是 A 的 N 补布局。它们的布局

函数 $\Phi_{B_1}$ 与 $\Phi_{B_2}$ 未必相等，但两者必有相同的像。例如，如果 A = (4) : (63)，N = 252，则 B₁ = (7, 9) : (1, 7) 与 B₂ = (9, 7) : (7, 1) 都是 A 的 N 补布局，且 $\Phi_{B_1}$ ≠ $\Phi_{B_2}$，因为

![原文公式、图示或代码（PDF 第 51 页）](./assets/p051-visual-014.png)

更一般地，如果 B 是 A 的 N 补布局，则 sort(B) 也是 A 的 N 补布局。

构造 2.1.6.29。假设<img src="./assets/p051-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.165em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，<img src="./assets/p051-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.237em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是正整数，并且<img src="./assets/p051-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.162em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是<img src="./assets/p051-b021-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.221em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />可取补的。如果我们写

![原文公式、图示或代码（PDF 第 51 页）](./assets/p051-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 51 页原页](./assets/page-051.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proposition 2.1.6.23. Suppose A and B are flat layouts. If

3. B is coalesced, and

4. B is sorted,

then B = comp♭(A).

Proof. Conditions 1 and 2 imply that ΦB and Φcomp♭(A) have the same image. Since B and comp♭(A) are sorted, we know by Lemma 2.1.6.22 that ΦB and Φcomp♭(A) are increasing. Combining these two facts, it follows that ΦB = Φcomp♭(A). Proposition 2.1.4.18 and condition 3 then imply that

Definition 2.1.6.24. Suppose A and B are flat layouts, and N is a positive integer. We say B is a N-complement of A if B is a complement of A and

Definition 2.1.6.25. Suppose A is a flat layout, and write

We say A is N-complementable if

1. for all 1 ≤i &lt; m, the integer sidi divides di+1, and

2. the integer smdm divides N.

Observation 2.1.6.26. If A is complementable, and sm : dm is the last mode in the layout sort(squeeze(A)), then A is N-complementable exactly when N is a positive integer multiple of smdm.

Observation 2.1.6.27. N-complements are not unique. For example, if A = (2, 2) : (1, 50) and N = 100, then each of the layouts B1 = (25) : (2), and B2 = (5, 5) : (2, 10) is a N-complement of A. As a more general example, if B is a N-complement of A, then coal♭(B) is also a N-complement of A.

Remark 2.1.6.28. Suppose A is a flat layout and B1 and B2 are N-complements of A. Then the layout

functions ΦB1 and ΦB2 need not be equal, but they necessarily have the same image. For example, if A = (4) : (63) and N = 252 then B1 = (7, 9) : (1, 7) and B2 = (9, 7) : (7, 1) are N-complements of A, and ΦB1̸ = ΦB2, since

As a more general example, if B is a N-complement of A, then sort(B) is also a N-complement of A.

Construction 2.1.6.29. Suppose A is a flat layout, N is a positive integer, and A is N-complementable. If we write</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-52-页-·-原书第-50-页"></a>

### PDF 第 52 页 · 原书第 50 页
<a id="pdf-page-52"></a>

然后我们定义一个平坦布局 <img src="./assets/p052-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:5.673em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-001.png)

其中

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-002.png)

示例 2.1.6.30. 如果 <img src="./assets/p052-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.510em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p052-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.687em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-003.png)

引理 2.1.6.31. 假设 <img src="./assets/p052-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，<img src="./assets/p052-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是正整数，并且 <img src="./assets/p052-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p052-b017-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补的。那么 <img src="./assets/p052-b017-m06.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:5.673em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p052-b017-m08.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.233em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的 <img src="./assets/p052-b017-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 补布局

证明。让我们写一下

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-005.png)

所以 <img src="./assets/p052-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:10.590em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 哪里

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-006.png)

首先，我们计算

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-007.png)

我们需要检查 <img src="./assets/p052-b058-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是否紧致。同样，我们需要检查 <img src="./assets/p052-b058-m02.png" alt="原文数学符号" style="display:inline-block;height:1.246em;width:1.506em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p052-b059-m01.png" alt="原文数学符号" style="display:inline-block;height:0.837em;width:1.789em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是同构。由引理 2.1.5.6, 足以证明

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-009.png)

是紧致的。就是这种情况，因为这个布局等于

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-010.png)

所以它的排序

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-011.png)

等于

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-012.png)

这是列主。

![原文公式、图示或代码（PDF 第 52 页）](./assets/p052-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 52 页原页](./assets/page-052.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">then we define a flat layout comp♭(A, N) by

where

Example 2.1.6.30. If A = (3, 10) : (80, 4) and N = 2400, then

Lemma 2.1.6.31. Suppose A is a flat layout, N is a positive integer, and A is N-complementable. Then comp♭(A, N) is a N-complement of A.

Proof. Lets write

so that comp♭(A, N) = coal♭(C) where

First, we compute

We need to check that A ⋆B is compact. Equivalently, we need to check that ΦN

A⋆B is an isomorphism. By Lemma 2.1.5.6, it suffices to prove that

is compact. This is the case since this layout is equal to

and so its sorting

is equal to

which is column-major.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-53-页-·-原书第-51-页"></a>

### PDF 第 53 页 · 原书第 51 页
<a id="pdf-page-53"></a>

命题 2.1.6.32。设 A 为平坦布局，N 为正整数。A 存在 N 补布局 B，当且仅当 A 可取 N 补。

证明。若 $A$ 可取 $N$-补，则由引理 2.1.6.31，布局 $B=\operatorname{comp}^{\flat}(L,N)$ 是 $A$ 的一个 $N$-补布局。〔校注：原文式中的 $L$ 应为 $A$。〕

另一方面，假设存在 <img src="./assets/p053-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的 <img src="./assets/p053-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> -补 <img src="./assets/p053-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 考虑平坦布局

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-003.png)

由于 <img src="./assets/p053-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.972em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p053-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.459em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射的，我们知道 <img src="./assets/p053-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.310em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们将认为 <img src="./assets/p053-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.913em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 即 <img src="./assets/p053-b008-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是列主序的。由于

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-004.png)

是双射，我们知道 1 在 <img src="./assets/p053-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.781em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的像中，这意味着 <img src="./assets/p053-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.277em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p053-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.843em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并假设我们已经证明 <img src="./assets/p053-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.713em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于所有 <img src="./assets/p053-b011-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 考虑步长 <img src="./assets/p053-b011-m07.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.308em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们知道不存在这样的 <img src="./assets/p053-b011-m08.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:9.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p053-b011-m09.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:21.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 因为这样的表达式的最大可能值为

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-005.png)

由于 <img src="./assets/p053-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.443em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是满射的，并且 <img src="./assets/p053-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:9.588em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 遵循 <img src="./assets/p053-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.437em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的下一个最大值是 <img src="./assets/p053-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.307em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此我们必须具有所声明的 <img src="./assets/p053-b015-m05.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.862em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

回到我们的主要目标，考虑布局

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-007.png)

那么存在 <img src="./assets/p053-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:6.355em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p053-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.876em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p053-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.396em;width:2.999em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p053-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.928em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p053-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.396em;width:3.051em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于每个 <img src="./assets/p053-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.285em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p053-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.287em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-010.png)

整除

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-011.png)

如果 <img src="./assets/p053-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:3.283em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-012.png)

整除

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-013.png)

因此，A 可取 N 补。

命题 2.1.6.33. 假设 <img src="./assets/p053-b036-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是正整数，并且 <img src="./assets/p053-b036-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p053-b036-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补的平坦布局。如果 <img src="./assets/p053-b036-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，使得

1. $B$ 是 $L$ 的一个 $N$-补布局，〔校注：按本命题的变量约定，原文 $L$ 应为 $A$。〕

<img src="./assets/p053-b038-m01.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:2.249em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，并且

<img src="./assets/p053-b039-m01.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:2.249em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />已排序，

然后<img src="./assets/p053-b040-m01.png" alt="原文数学符号" style="display:inline-block;height:1.265em;width:8.113em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 53 页）](./assets/p053-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 53 页原页](./assets/page-053.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proposition 2.1.6.32. Suppose A is a flat layout and N is a positive integer. Then there exists a N-complement B of A if and only if A is N-complementable.

Proof. If A is N-complementable, then by Lemma 2.1.6.31 the layout B = comp♭(L, N) is a N- complement of A.

On the other hand, suppose there exists a N-complement B of A. Consider the flat layout

Since ΦL(0) = 0, and ΦL is injective, we know that d1̸ = 0. We will argue that di = s1 · · · si−1, i.e., that L is column-major. Since

is a bijection, we know that 1 is in the image of ΦL, which implies that d1 = 1. Suppose 1 &lt; i ≤m, and suppose we have proved that dj = s1 · · · sj−1 for all j &lt; i. Consider the stride di. We know that there is no (x1, . . . , xi−1, 0, . . . , 0) such that (x1, . . . , xi−1, 0, . . . , 0) · (d1, . . . , dm) = s1 · · · si−1, since the largest possible value of such an expression is

Since ΦL is surjective, and di ≤di+1 ≤· · · ≤dm, it follows that the next largest value of ΦL is di, so we must have di = s1 · · · si−1, as claimed.

Returning to our main goal, consider the layout

Then there exist j1 &lt; · · · &lt; jm′ such that s′

i = sji and d′

i = dji for each 1 ≤i ≤m′. If 1 ≤i &lt; m′, then

divides

If i = m′, then

divides

We conclude that A is N-complementable.

Proposition 2.1.6.33. Suppose N is a positive integer, and A is a N-complementable flat layout. If B is a flat layout such that

1. B is a N-complement of L,

2. B is coalesced, and

3. B is sorted,

then B = comp♭(A, N).</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-54-页-·-原书第-52-页"></a>

### PDF 第 54 页 · 原书第 52 页
<a id="pdf-page-54"></a>

证明。条件 1、2 表明 $\Phi_B$ 与 $\Phi_{\operatorname{comp}^{\flat}(A,N)}$ 具有相同的像。由于 B 和 comp♭(A, N) 都已排序，由引理 2.1.6.22，它们的布局函数均严格递增。结合这两点，得到 $\Phi_B$ = $\Phi_{\operatorname{comp}^{\flat}(A,N)}$。再由命题 2.1.4.18 及条件 3，可得

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-001.png)

引理 2.1.6.34. 假设 <img src="./assets/p054-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。如果 <img src="./assets/p054-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.335em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是正整数，使得 <img src="./assets/p054-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p054-b002-m05.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.377em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补的并且 <img src="./assets/p054-b002-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p054-b002-m07.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.377em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补的，则

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-002.png)

证明。写

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-003.png)

并写

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-004.png)

这样

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-005.png)

然后我们有一个交换图

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-006.png)

其中，由命题 2.1.3.40，顶行的复合是 $C_1=C\star E_1$ 的布局函数，底行的复合是 $C_2=C\star E_2$ 的布局函数。这说明 $\Phi_{C_2}$ 在 $[0,\operatorname{size}(C_2))$ 上的限制为 $\Phi_{C_1}$，再由下列事实即得结论：〔校注：原文限制区间的上界应为 $\operatorname{size}(C_1)$，才能与 $\Phi_{C_1}$ 的定义域一致。〕

![原文公式、图示或代码（PDF 第 54 页）](./assets/p054-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 54 页原页](./assets/page-054.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Conditions 1 and 2 imply that ΦB and Φcomp♭(A,N) have the same image. Since B and comp♭(A, N) are sorted, we know by Lemma 2.1.6.22 that ΦB and Φcomp♭(A,N) are increasing. Combining these two facts, it follows that ΦB = Φcomp♭(A,N). Proposition 2.1.4.18 and condition 3 then imply that

Lemma 2.1.6.34. Suppose A is a flat layout. If N1 ≤N2 are positive integers such that A is N1-complementable and A is N2-complementable, then

Proof. Write

and write

so that

Then we have a commuting diagram

where, by Proposition 2.1.3.40, the composite of the top row is the layout function of C1 = C ⋆E1, and the composite of the bottom row is the layout function of C2 = C ⋆E2. This tells us that the restriction of ΦC2 to [0, size(C2)) is ΦC1, and the result follow from the fact that</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-55-页-·-原书第-53-页"></a>

### PDF 第 55 页 · 原书第 53 页
<a id="pdf-page-55"></a>

<a id="paper-section-2-1-7"></a>

<a id="translation-03-flat-layout-algebra-_2-1-7-进一步的运算"></a>

#### 2.1.7 进一步的运算

本节在平坦布局上进一步定义复合、平坦除法与平坦乘积。这些是（嵌套）布局上更自然的运算经展平后得到的版本。虽然实际中并不经常直接使用这些运算，为完整起见，仍在此列出。

2.1.7.1 复合

如果<img src="./assets/p055-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p055-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，则复合<img src="./assets/p055-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.715em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局，其布局函数是<img src="./assets/p055-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p055-b003-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数的复合。更准确地说，我们有以下定义。

定义 2.1.7.1。设 <img src="./assets/p055-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p055-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。如果满足以下条件，就称平坦布局 <img src="./assets/p055-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为 <img src="./assets/p055-b004-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p055-b004-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的复合，并记作 <img src="./assets/p055-b004-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.062em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

<img src="./assets/p055-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.165em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-006.png)

备注 2.1.7.2. 定义中的条件 2 保证 $\Phi_R$ 与 $\Phi_A$ 具有相同的定义域，〔校注：定义 2.1.7.1 将结果命名为 $C$，后续条件及本备注却写成 $R$，应统一为 $C$。〕

条件 3 意味着 <img src="./assets/p055-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.1.7.3. 如果 <img src="./assets/p055-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p055-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.964em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-009.png)

更一般地说，如果

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-010.png)

是非退化平坦布局，并且

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-011.png)

是一个秩为 1 且满足 t ≥ cosize(A) 的平坦布局，那么 A 与 B 可复合，并且

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-012.png)

示例 2.1.7.4. 如果 <img src="./assets/p055-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.506em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p055-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-013.png)

更一般地，如果 A 是所有步长分量均为零的平坦布局，B 是任意平坦布局，那么 A 与 B 可复合，且 B ◦ A = A。

示例 2.1.7.5. 如果 <img src="./assets/p055-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.506em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p055-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.332em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-015.png)

更一般地说，如果 <img src="./assets/p055-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何平坦布局，并且 <img src="./assets/p055-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有 <img src="./assets/p055-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的列主平坦布局，则 <img src="./assets/p055-b023-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.026em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

例 2.1.7.6。如果 A = (4) : (2)，B = (2, 2, 6) : (12, 6, 1)，就不存在满足 R = B ◦ A 的平坦布局 R。

备注 2.1.7.7. 如果 <img src="./assets/p055-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.215em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p055-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有相同的布局函数，则 <img src="./assets/p055-b025-m04.png" alt="原文数学符号" style="display:inline-block;height:1.511em;width:7.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

备注 2.1.7.8. 平坦布局是更一般的布局概念的特例（定义 <img src="./assets/p055-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:3.885em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

事实上，在某些情形下（如例 2.1.7.6），不存在满足 C = B ◦ A 的平坦布局 C，却存在满足该等式的（嵌套）布局 C（见例 2.3.7.6）。因此，我们暂缓对复合的深入讨论，待定义了完全一般的布局之后再进行分析。

![原文公式、图示或代码（PDF 第 55 页）](./assets/p055-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 55 页原页](./assets/page-055.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.7 Further operations

In this section, we define several further operations on flat layouts, namely composition, flat division, and flat products. These are the flattened variants of more natural operations on (nested) layouts. We do not often work with these operations, but include them anyway for completeness.

2.1.7.1 Composition

If A and B are flat layouts, then the composite B ◦A is a flat layout whose layout function is the composite of the layout functions of A and B. More precisely, we have the following definition.

Definition 2.1.7.1. Suppose A and B are flat layouts. We say the flat layout C is the composition of A and B, and write C = B ◦A, if

1. C is non-degenerate,

Remark 2.1.7.2. Note that condition 2 in our definition ensures that ΦR and ΦA have the same domain,

and condition 3 implies cosize(A) ≤size(B).

Example 2.1.7.3. If A = (2, 3) : (5, 6) and B = (80) : (10), then

More generally, if

is a non-degenerate flat layout, and

is a rank 1 flat layout with t ≥cosize(A), then A and B are composable, and

Example 2.1.7.4. If A = (128, 128) : (0, 0) and B = (64, 32) : (1, 64), then

More generally, if A is a flat layout each of whose stride entries is zero, and B is any flat layout, then A and B are composable with B ◦A = A.

Example 2.1.7.5. If A = (64, 32) : (2, 256) and B = (2048, 2048) : (1, 2048), then

More generally, if A is any flat layout, and B is a column-major flat layout with cosize(A) ≤size(B), then B ◦A = A.

Example 2.1.7.6. If A = (4) : (2) and B = (2, 2, 6) : (12, 6, 1), then there is no flat layout R with R = B ◦A.

Remark 2.1.7.7. If B′ and B have the same layout function, then B ◦A = B′ ◦A.

Remark 2.1.7.8. Flat layouts are a special case of the more general notion of layouts (Definition 2.3.1.1).

It turns out that there are cases (such as Example 2.1.7.6) where there does not exist a flat layout C with C = B ◦A, but there does exist a (nested) layout C with C = B ◦A (see Example 2.3.7.6). For this reason, we postpone further discussion and analysis of composition until we have defined layouts in their full generality.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-56-页-·-原书第-54-页"></a>

### PDF 第 56 页 · 原书第 54 页
<a id="pdf-page-56"></a>

2.1.7.2 平坦除法

设 A 与 B 为平坦布局。A 除以 B 的平坦除法，是布局逻辑除法经展平后得到的版本。详见第 2.3.8 节。

定义 2.1.7.9. 假设 <img src="./assets/p056-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p056-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，并且 <img src="./assets/p056-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p056-b002-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.810em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> )-可取补的，有

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-003.png)

我们将 A 除以 B 的平坦除法定义为下列平坦布局：

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-004.png)

示例 2.1.7.10. 如果 <img src="./assets/p056-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.277em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p056-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.849em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-005.png)

示例 2.1.7.11. 如果 <img src="./assets/p056-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.775em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p056-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.845em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-006.png)

示例 2.1.7.12. 如果 <img src="./assets/p056-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任意平坦布局且 <img src="./assets/p056-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.695em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空布局，则

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-007.png)

2.1.7.3 平坦乘积

设 A 与 B 为平坦布局。它们的平坦乘积 A ⊗♭ B，是布局逻辑乘积经展平后得到的版本。详见第 2.3.9 节。

定义 2.1.7.13。假设 <img src="./assets/p056-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.146em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p056-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.157em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，并且 <img src="./assets/p056-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.144em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p056-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.252em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> )-可取补的，

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-010.png)

我们将 A 与 B 的平坦乘积定义为：

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-011.png)

示例 2.1.7.14. 如果 <img src="./assets/p056-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.396em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p056-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.731em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-012.png)

示例 2.1.7.15. 如果 <img src="./assets/p056-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.396em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p056-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.849em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-013.png)

示例 2.1.7.16. 如果 <img src="./assets/p056-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任意平坦布局，而 <img src="./assets/p056-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.695em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空布局，则

![原文公式、图示或代码（PDF 第 56 页）](./assets/p056-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 56 页原页](./assets/page-056.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.7.2 Flat division

If A and B are flat layouts, then the flat division of A by B is a flattened version of the more natural logical division of layouts. See Section 2.3.8 for details.

Definition 2.1.7.9. Suppose A and B are flat layouts, and that B is size(A)-complementable, with

We define the flat division of A by B to be the flat layout

Example 2.1.7.10. If A = (2, 2, 2, 2) : (1, 4, 2, 8) and B = (2, 2) : (4, 2), then

Example 2.1.7.11. If A = (3, 5, 9, 6) : (54, 0, 6, 1) and B = (6, 3) : (135, 1), then

Example 2.1.7.12. If A is any flat layout and B = () : () is the empty layout, then

2.1.7.3 Flat products

If A and B are flat layouts, then the flat product A ⊗♭B of A and B is a flattened version of the more natural logical product of layouts. See Section 2.3.9 for details.

Definition 2.1.7.13. Suppose A and B are flat layouts, and that A is size(A)·cosize(B)-complementable, with

We define the flat product of A and B by

Example 2.1.7.14. If A = (2, 2, 2) : (1, 2, 4) and B = (2, 2, 2) : (1, 2, 4), then

Example 2.1.7.15. If A = (2, 2, 2) : (1, 2, 4) and B = (3, 5) : (5, 1), then

Example 2.1.7.16. If A is any flat layout and B = () : () is the empty layout, then</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-57-页-·-原书第-55-页"></a>

### PDF 第 57 页 · 原书第 55 页
<a id="pdf-page-57"></a>

<a id="paper-section-2-1-8"></a>

<a id="translation-03-flat-layout-algebra-_2-1-8-可处理平坦布局"></a>

#### 2.1.8 可处理平坦布局

本节定义一类性质特别良好的平坦布局，称为可处理平坦布局。它们包含最重要的实际例子，例如行主序、列主序、紧致和可取补布局。稍后将看到，可处理布局恰好是由某个范畴 Tuple 产生的布局。

定义 2.1.8.1. 假设 <img src="./assets/p057-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，则写

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-003.png)

如果对每个 <img src="./assets/p057-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.827em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都满足下列条件，我们就称 <img src="./assets/p057-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的：

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-004.png)

2. sᵢdᵢ 整除 dᵢ₊₁。

示例 2.1.8.2. 平坦布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-006.png)

是可处理的。更一般地说，任何秩为 1 的平坦布局都是可处理的。

示例 2.1.8.3. 平坦布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-008.png)

是可处理的。更一般地说，任何以列为主的布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-009.png)

是可处理的。

示例 2.1.8.4. 平坦布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-011.png)

是可处理的。更一般地说，任何行主序布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-012.png)

是可处理的。

示例 2.1.8.5. 平坦布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-014.png)

是可处理的。更一般地说，任何紧致的平坦布局都是可处理的。

示例 2.1.8.6. 平坦布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-016.png)

是可处理的。更一般地说，任何具有恰好一个非零步长的平坦布局都是可处理的。

示例 2.1.8.7. 平坦布局

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-018.png)

是可处理的。更一般地说，任何可取补的平坦布局都是可处理的。

![原文公式、图示或代码（PDF 第 57 页）](./assets/p057-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 57 页原页](./assets/page-057.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.1.8 Tractable flat layouts

In this section we define an especially well-behaved class of flat layouts, called tractable flat layouts. Tractable flat layouts include the most important examples of interest, such as row-major, column- major, compact, and complementable layouts. Later on, we will see that tractable flat layouts are precisely the layouts which arise from a certain category Tuple.

Definition 2.1.8.1. Suppose L is a flat layout, and write

We say L is tractable if for each 1 ≤i &lt; m, we have

2. sidi divides di+1.

Example 2.1.8.2. The flat layout

is tractable. More generally, any flat layout of rank 1 is tractable.

Example 2.1.8.3. The flat layout

is tractable. More generally, any column-major layout

is tractable.

Example 2.1.8.4. The flat layout

is tractable. More generally, any row-major layout

is tractable.

Example 2.1.8.5. The flat layout

is tractable. More generally, any compact flat layout is tractable.

Example 2.1.8.6. The flat layout

is tractable. More generally, any flat layout with exactly one non-zero stride is tractable.

Example 2.1.8.7. The flat layout

is tractable. More generally, any complementable flat layout is tractable.</pre>

</details>

<a id="translation-03-flat-layout-algebra-pdf-第-58-页-·-原书第-56-页"></a>

### PDF 第 58 页 · 原书第 56 页
<a id="pdf-page-58"></a>

示例 2.1.8.8. 假设 <img src="./assets/p058-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。如果 <img src="./assets/p058-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的并且 <img src="./assets/p058-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:3.674em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何子集，则限制 <img src="./assets/p058-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.233em;width:1.764em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。特别是，如果 <img src="./assets/p058-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，则 <img src="./assets/p058-b000-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.793em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p058-b000-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.549em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。

示例 2.1.8.9. 平坦布局

![原文公式、图示或代码（PDF 第 58 页）](./assets/p058-visual-002.png)

不可处理。特别地，这说明，即使 L₁ 与 L₂ 都是可处理平坦布局，其拼接 L₁ ⋆ L₂ 也未必可处理。

观察 2.1.8.10. 如果 <img src="./assets/p058-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的平坦布局，并且 <img src="./assets/p058-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.895em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的任何分量都不等于 0,，则 <img src="./assets/p058-b004-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的。特别是，如果 <img src="./assets/p058-b004-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，则 <img src="./assets/p058-b004-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.561em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的。

我们通过枚举使平坦布局 <img src="./assets/p058-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可处理的一系列等效条件来结束本节。

命题 2.1.8.11. 假设 <img src="./assets/p058-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。那么下面的条件是等价的。

1. L 可处理。

2. sort(L) 可处理。

3. filter(L) 可处理。

4. filter(L) 可取补。

证明。假设<img src="./assets/p058-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是平坦布局。

<img src="./assets/p058-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:5.045em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这是因为

![原文公式、图示或代码（PDF 第 58 页）](./assets/p058-visual-012.png)

<img src="./assets/p058-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:5.045em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这是因为

![原文公式、图示或代码（PDF 第 58 页）](./assets/p058-visual-013.png)

<img src="./assets/p058-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:5.045em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这是根据以下事实得出的：如果

![原文公式、图示或代码（PDF 第 58 页）](./assets/p058-visual-014.png)

是一个平坦布局，使得每个步长分量 <img src="./assets/p058-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.274em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都不为零，那么可处理性的定义与可互补性的定义一致。

![原文公式、图示或代码（PDF 第 58 页）](./assets/p058-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 58 页原页](./assets/page-058.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.1.8.8. Suppose L is a flat layout. If L is tractable and I ⊂⟨m⟩is any subset, then the restriction L |I is tractable. In particular, if L is tractable, then squeeze(L) and filter(L) are tractable.

Example 2.1.8.9. The flat layout

is not tractable. In particular, this shows that the concatenation L1 ⋆L2 of tractable flat layouts L1 and L2 need not be tractable.

Observation 2.1.8.10. If L is a tractable flat layout and no entry of stride(L) is equal to 0, then L is complementable. In particular, if L is tractable, then filter(L) is complementable.

We conclude this section by enumerating a family of equivalent conditions for a flat layout L to be tractable.

Proposition 2.1.8.11. Suppose L is a flat layout. Then the following conditions are equivalent.

1. L is tractable.

2. sort(L) is tractable.

3. filter(L) is tractable.

4. filter(L) is complementable.

Proof. Suppose L is a flat layout.

• (1 ⇔2): This follows from the fact that

• (1 ⇔3): This follows from the fact that

• (3 ⇔4): This follows from the fact that if

is a flat layout such that each of the stride entries di is nonzero, then the definition of tractability coincides with that of complementability.</pre>

</details>

---

<a id="translation-04-nested-tuples-第-2-2-节-嵌套元组"></a>

## 第 2.2 节：嵌套元组
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-04-nested-tuples-pdf-第-59-页-·-原书第-57-页"></a>

### PDF 第 59 页 · 原书第 57 页
<a id="pdf-page-59"></a>

<a id="paper-section-2-2"></a>

<a id="translation-04-nested-tuples-_2-2-嵌套元组"></a>

#### 2.2 嵌套元组

在本节中，我们将介绍嵌套元组，它们是定义完全通用布局所需的元组的概括。

<a id="paper-section-2-2-1"></a>

<a id="translation-04-nested-tuples-_2-2-1-轮廓"></a>

#### 2.2.1 轮廓

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

<a id="translation-04-nested-tuples-pdf-第-60-页-·-原书第-58-页"></a>

### PDF 第 60 页 · 原书第 58 页
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

<a id="translation-04-nested-tuples-pdf-第-61-页-·-原书第-59-页"></a>

### PDF 第 61 页 · 原书第 59 页
<a id="pdf-page-61"></a>

旁注 2.2.1.10。Q 代入可以用运算子（operad）来解释。轮廓的集合 Profile 具有

一个（非对称）运算子的结构：其中集合

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-002.png)

构成 Profile 的 n 元运算集合。如果 n = m₁ + ··· + mᵣ，那么结构映射

![原文公式、图示或代码（PDF 第 61 页）](./assets/p061-visual-003.png)

由 Q 代入给出。也可以在这个非对称运算子上构造余自由对称运算子；这相当于在各个 n 元运算集合上赋予平凡的对称群作用。

<a id="paper-section-2-2-2"></a>

<a id="translation-04-nested-tuples-_2-2-2-基本定义"></a>

#### 2.2.2 基本定义

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

<a id="translation-04-nested-tuples-pdf-第-62-页-·-原书第-60-页"></a>

### PDF 第 62 页 · 原书第 60 页
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

<a id="translation-04-nested-tuples-pdf-第-63-页-·-原书第-61-页"></a>

### PDF 第 63 页 · 原书第 61 页
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

<a id="translation-04-nested-tuples-pdf-第-64-页-·-原书第-62-页"></a>

### PDF 第 64 页 · 原书第 62 页
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

<a id="translation-04-nested-tuples-_2-2-3-代入"></a>

#### 2.2.3 代入

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

<a id="translation-04-nested-tuples-pdf-第-65-页-·-原书第-63-页"></a>

### PDF 第 65 页 · 原书第 63 页
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

<a id="translation-04-nested-tuples-_2-2-4-细化"></a>

#### 2.2.4 细化

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

<a id="translation-04-nested-tuples-pdf-第-66-页-·-原书第-64-页"></a>

### PDF 第 66 页 · 原书第 64 页
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

<a id="translation-04-nested-tuples-pdf-第-67-页-·-原书第-65-页"></a>

### PDF 第 67 页 · 原书第 65 页
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

<a id="translation-05-layouts-第-2-3-节-布局"></a>

## 第 2.3 节：布局
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-05-layouts-pdf-第-68-页-·-原书第-66-页"></a>

### PDF 第 68 页 · 原书第 66 页
<a id="pdf-page-68"></a>

<a id="paper-section-2-3"></a>

<a id="translation-05-layouts-_2-3-布局"></a>

#### 2.3 布局

有了嵌套元组的必要背景，现在转向布局。布局推广了平坦布局：其形状和步长可为嵌套元组。

<a id="paper-section-2-3-1"></a>

<a id="translation-05-layouts-_2-3-1-基本定义"></a>

#### 2.3.1 基本定义

定义 2.3.1.1. 布局是一对

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-004.png)

由正整数的嵌套元组组成

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-005.png)

称为 L 的形状，以及一个非负整数嵌套元组

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-006.png)

称为 L 的步长；要求 S 与 D 同形，即具有相同的轮廓。

定义 2.3.1.2. 如果 <img src="./assets/p068-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.526em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则 <img src="./assets/p068-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的秩、长度、深度、大小和轮廓分别定义为 <img src="./assets/p068-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的秩、长度、深度、大小和轮廓。

示例 2.3.1.3. 布局 <img src="./assets/p068-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.374em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可能如下图所示。

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-009.png)

示例 2.3.1.4. 布局 <img src="./assets/p068-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:14.308em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可能如下图所示。

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-010.png)

示例 2.3.1.5. 布局

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-011.png)

有 <img src="./assets/p068-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:22.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p068-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.435em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 68 页）](./assets/p068-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 68 页原页](./assets/page-068.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.3 Layouts

Having developed the necessary background on nested tuples, we turn our attention to layouts. These are a generalization of flat layouts in which shapes and strides are allowed to be nested tuples, rather than (flat) tuples.

2.3.1 Basic definitions

Definition 2.3.1.1. A layout is a pair

consisting of a nested tuple of positive integers

called the shape of L, and a nested tuple of non-negative integers

called the stride of L, such that S and D are congruent.

Definition 2.3.1.2. If L = S : D is a layout, then the rank, length, depth, size, and profile of L are defined to be the rank, length, depth, size, and profile of S, respectively.

Example 2.3.1.3. The layout L = (3, (3, 2)) : (3, (1, 10)) may be pictured as follows.

Example 2.3.1.4. The layout L = ((2, 2), (2, 2)) : ((1, 4), (2, 8)) may be pictured as follows.

Example 2.3.1.5. The layout

has rank(L) = 1, len(L) = 1, depth(L) = 0, size(L) = 10, and prof(L) = ∗.</pre>

</details>

<a id="translation-05-layouts-pdf-第-69-页-·-原书第-67-页"></a>

### PDF 第 69 页 · 原书第 67 页
<a id="pdf-page-69"></a>

示例 2.3.1.6. 布局

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-001.png)

有 <img src="./assets/p069-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:24.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p069-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.465em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.3.1.7. 布局

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-003.png)

有 <img src="./assets/p069-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:22.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p069-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.3.1.8. 该对

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-005.png)

不是布局，因为 S 与 D 不同形。

定义 2.3.1.9. 如果 <img src="./assets/p069-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.502em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局，那么对于任何 <img src="./assets/p069-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.947em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们将 <img src="./assets/p069-b009-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p069-b009-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模态定义为布局

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-007.png)

对于任何 <img src="./assets/p069-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.601em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们将 <img src="./assets/p069-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p069-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分量定义为布局

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-008.png)

示例 2.3.1.10. 如果 <img src="./assets/p069-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.910em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

，则 <img src="./assets/p069-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的模态为

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-010.png)

<img src="./assets/p069-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的分量是

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-011.png)

注记 2.3.1.11。如果 L 是布局，其模态仍是布局，而其各个分量都是

深度为 0 的布局。

注记 2.3.1.12。平坦布局恰好就是深度为 1 的布局。另一方面，对于任意布局 L，可以按以下方式得到平坦布局 L♭。

定义 2.3.1.13. 如果 <img src="./assets/p069-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.510em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局，我们将 <img src="./assets/p069-b031-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平定义为平坦布局

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-015.png)

示例 2.3.1.14. <img src="./assets/p069-b033-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.511em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平为 <img src="./assets/p069-b033-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:6.710em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.3.1.15. 的展平

![原文公式、图示或代码（PDF 第 69 页）](./assets/p069-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 69 页原页](./assets/page-069.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.3.1.6. The layout

has rank(L) = 3, len(L) = 6, depth(L) = 2, size(L) = 11760, and prof(L) = (∗, (∗, ∗, ∗), (∗, ∗)).

Example 2.3.1.7. The layout

has rank(L) = 1, len(L) = 5, depth(L) = 3, size(L) = 32, and prof(L) = ((∗, ∗, ∗, (∗, ∗))).

Example 2.3.1.8. The pair

is NOT a layout because S and D are not congruent.

Definition 2.3.1.9. If L = S : D is a layout, then for any 1 ≤i ≤rank(L) we define the ith mode of L to be the layout

and for any 1 ≤i ≤len(L), we define the ith entry of L to be the layout

Example 2.3.1.10. If L =

, then the modes of L are

and the entries of L are

Remark 2.3.1.11. If L is a layout, then the modes of L are also layouts, and the entries of L are layouts

of depth 0.

Remark 2.3.1.12. A flat layout L is precisely a layout of depth 1. On the other hand, if L is a layout, we may obtain a flat layout L♭as follows.

Definition 2.3.1.13. If L = S : D is a layout, we define the flattening of L to be the flat layout

Example 2.3.1.14. The flattening of L = 10 : 4 is L♭= (10) : (4).

Example 2.3.1.15. The flattening of</pre>

</details>

<a id="translation-05-layouts-pdf-第-70-页-·-原书第-68-页"></a>

### PDF 第 70 页 · 原书第 68 页
<a id="pdf-page-70"></a>

备注 2.3.1.16. 如果 <img src="./assets/p070-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则 <img src="./assets/p070-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:8.090em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且对于任何 <img src="./assets/p070-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.602em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-001.png)

我们可以使用上面的展平结构将许多概念从平坦布局扩展到嵌套

布局。例如：

构造2.3.1.17（布局函数）。如果<img src="./assets/p070-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是嵌套布局，我们定义<img src="./assets/p070-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数<img src="./assets/p070-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.431em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />为

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-004.png)

其中 <img src="./assets/p070-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.319em;width:1.757em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是构造 2.1.2.19. 的布局函数类似地，如果 <img src="./assets/p070-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是这样的 <img src="./assets/p070-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:5.841em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p070-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.976em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-005.png)

为 $\Phi_L$ 经包含映射 [0, N) ⊂ ℤ 分解后所得的映射。

示例 2.3.1.18. 如果 <img src="./assets/p070-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.651em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则布局函数

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-007.png)

<img src="./assets/p070-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的计算公式为

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-008.png)

给定布局 <img src="./assets/p070-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们可以获得平坦布局 <img src="./assets/p070-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.507em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和轮廓 <img src="./assets/p070-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.715em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相反，如果给定平坦布局 <img src="./assets/p070-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和与 <img src="./assets/p070-b017-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 长度相同的轮廓 <img src="./assets/p070-b017-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么我们可以构造具有展平 <img src="./assets/p070-b017-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和轮廓的布局<img src="./assets/p070-b017-m08.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />如下。

构造 2.3.1.19. 如果 <img src="./assets/p070-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，并且 <img src="./assets/p070-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有 <img src="./assets/p070-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓，那么我们可以定义

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-010.png)

为形状如下的布局：

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-011.png)

步长为

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-012.png)

其中 <img src="./assets/p070-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.235em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是定义 2.2.1.8. 的 <img src="./assets/p070-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 替换操作

示例 2.3.1.20. 如果 <img src="./assets/p070-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.824em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p070-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.493em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-014.png)

示例 2.3.1.21. 如果 <img src="./assets/p070-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.559em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p070-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.061em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-015.png)

命题 2.3.1.22。如果 L′ 是平坦布局，P 为轮廓，且 len(L′) = len(P)，则存在唯一的布局 L，其展平为 L♭ = L′，轮廓为 prof(L) = P；具体而言，L = L′ₚ，其中下标 P 表示按轮廓 P 进行代入。

证明。这是根据嵌套元组的定义得出的，因为嵌套元组是由其展平和轮廓唯一确定的。

![原文公式、图示或代码（PDF 第 70 页）](./assets/p070-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 70 页原页](./assets/page-070.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Remark 2.3.1.16. If L is a layout then len(L) = rank(L♭), and for any 1 ≤i ≤len(L), we have

We can use the flattening construction above to extend many concepts from flat layouts to nested

layouts. For example:

Construction 2.3.1.17 (Layout function). If L is a nested layout, we define the layout function ΦL of L by

where ΦL♭is the layout function of Construction 2.1.2.19. Similarly, if N is such that Image(ΦL) ⊂ [0, N), we define

to be the factorization of ΦL through the inclusion [0, N) ⊂Z.

Example 2.3.1.18. If L = ((2, 2), 2) : ((3, 0), 10), then the layout function

of L is given by

Given a layout L, we can obtain a flat layout L♭, and a profile P = prof(L). Conversely, if we are given a flat layout L and a profile P with the same length as L, then we can construct a layout with flattening L and profile P as follows.

Construction 2.3.1.19. If L is a flat layout, and P is a profile with len(P) = len(L), then we can define

to be the layout with shape

and stride

where (−)P is the P-substitution operation of Definition 2.2.1.8.

Example 2.3.1.20. If L = (8, 8, 8) : (1, 64, 8) and P = (∗, (∗, ∗)), then

Example 2.3.1.21. If L = (128) : (2) and P = ∗, then

Proposition 2.3.1.22. If L′ is a flat layout and P is a profile with len(L′) = len(P), then there exists a unique layout L whose flattening is L♭= L′ and whose profile is prof(L) = P, namely L = L′

Proof. This follows from the definition of nested tuples, since a nested tuple is uniquely determined by its flattening and its profile.</pre>

</details>

<a id="translation-05-layouts-pdf-第-71-页-·-原书第-69-页"></a>

### PDF 第 71 页 · 原书第 69 页
<a id="pdf-page-71"></a>

观察 2.3.1.23。前一个命题表明，我们有下列拉回方块：

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-001.png)

我们可以将非退化性的概念扩展到嵌套情况，如下所示。

定义 2.3.1.24. 假设 <img src="./assets/p071-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。如果对于所有 <img src="./assets/p071-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.580em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足以下条件，我们称 <img src="./assets/p071-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的：

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-003.png)

示例 2.3.1.25. 布局

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-004.png)

是非退化的，而布局

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-005.png)

是退化的。

<a id="paper-section-2-3-2"></a>

<a id="translation-05-layouts-_2-3-2-基本运算"></a>

#### 2.3.2 基本运算

建立了布局的基本词汇后，我们转向它们支持的操作。在本节中，我们定义构建更复杂的操作所需的基本操作，例如合并、求补、复合、逻辑除法和逻辑乘积。

2.3.2.1 展平

如果<img src="./assets/p071-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是一个布局，那么我们可以通过展平<img src="./assets/p071-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的形状和步长来获得平坦布局<img src="./assets/p071-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.180em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

定义 2.3.2.1. 如果 <img src="./assets/p071-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.510em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局，我们将 <img src="./assets/p071-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平定义为平坦布局

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-011.png)

示例 2.3.2.2. 的展平

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-012.png)

示例 2.3.2.3. <img src="./assets/p071-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.511em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平为 <img src="./assets/p071-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:6.710em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.3.2.4. 假设 <img src="./assets/p071-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。那么 <img src="./assets/p071-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.807em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 当且仅当 <img src="./assets/p071-b028-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 71 页）](./assets/p071-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 71 页原页](./assets/page-071.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Observation 2.3.1.23. The previous proposition tells us that we have a pullback square

We can extend the notion of non-degeneracy to the nested case as follows.

Definition 2.3.1.24. Suppose L is a layout. We say L is non-degenerate if for all 1 ≤i ≤len(L), the following condition holds:

Example 2.3.1.25. The layouts

are non-degenerate, while the layouts

are degenerate.

2.3.2 Basic operations

Having established the basic vocabulary for layouts, we turn to the operations they support. In this section, we define basic operations that will be needed to construct more sophisticated operations such as coalesce, complement, composition, logical division, and logical product.

2.3.2.1 Flattening

If L is a layout, then we may obtain a flat layout L♭by flattening the shape and stride of L.

Definition 2.3.2.1. If L = S : D is a layout, we define the flattening of L to be the flat layout

Example 2.3.2.2. The flattening of

Example 2.3.2.3. The flattening of L = 10 : 4 is L♭= (10) : (4).

Example 2.3.2.4. Suppose L is a layout. Then depth(L) = 1 if and only if L = L♭.</pre>

</details>

<a id="translation-05-layouts-pdf-第-72-页-·-原书第-70-页"></a>

### PDF 第 72 页 · 原书第 70 页
<a id="pdf-page-72"></a>

2.3.2.2 拼接

我们可以通过拼接它们的形状和拼接它们的步长来拼接布局。

定义 2.3.2.5. 如果 <img src="./assets/p072-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.499em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p072-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:5.315em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则 <img src="./assets/p072-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p072-b002-m05.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.087em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接就是布局 <img src="./assets/p072-b002-m06.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:3.031em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-003.png)

更一般地，如果 <img src="./assets/p072-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.871em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局的任何有限集合，与 <img src="./assets/p072-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.623em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> ，则 <img src="./assets/p072-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.620em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接是布局

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-004.png)

注记 2.3.2.6。嵌套元组的拼接不满足结合律，因此布局的拼接也不满足结合律。例如，

取 <img src="./assets/p072-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:9.625em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p072-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.737em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 然后

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-006.png)

而且，这些布局都不等于“三重”拼接 <img src="./assets/p072-b030-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:10.292em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p072-b030-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.635em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 但是，我们看到这些布局中的每一个都具有相同的展平，因此这些布局中的每一个

具有相同的布局函数。

示例 2.3.2.7. 如果 <img src="./assets/p072-b032-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.326em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p072-b032-m03.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:14.089em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-009.png)

备注 2.3.2.8. 拼接增加了布局的深度。更准确地说，我们有

depth(L, L′) = 1 + max(depth(L), depth(L′))。

注记 2.3.2.9。当 L 与 L′ 为平坦布局时，定义 2.3.2.5 的拼接运算

并不同于定义 2.1.3.36 中平坦布局的拼接。不过，两者满足下列关系：

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-013.png)

备注 2.3.2.10. 如果 <img src="./assets/p072-b039-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是带有 <img src="./assets/p072-b039-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.806em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p072-b039-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.546em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的任何布局，那么我们可以写

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-014.png)

作为其模态的拼接。

示例 2.3.2.11. 如果

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-016.png)

那么 <img src="./assets/p072-b044-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.222em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 其中

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-017.png)

<img src="./assets/p072-b052-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.737em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 72 页）](./assets/p072-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 72 页原页](./assets/page-072.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.3.2.2 Concatenate

We can concatenate layouts by concatenating their shapes and concatenating their strides.

Definition 2.3.2.5. If L = S : D and L′ = S′ : D′ are layouts, then the concatenation of L and L′ is the layout (L, L′)

More generally, if L1, . . . , Lk is any finite collection of layouts, with Li = Si : Di, then the concatenation of L1, . . . , Lk is the layout

Remark 2.3.2.6. Concatenation of nested tuples (and hence of layouts) is not associative. For example,

take L1 = 3 : 4, L2 = 2 : 2, and L3 = 5 : 1. Then

Moreover, neither of these layouts is equal to the “three-fold” concatenation (L1, L2, L3) = (3, 2, 5) : (4, 2, 1). However, we see that each of these layouts has the same flattening, so each of these layouts

has the same layout function.

Example 2.3.2.7. If L = (3, 7, 2) : (1, 3, 6) and L′ = (2, (2, (4, 3))) : (5, 3, (2, 2)), then

Remark 2.3.2.8. Concatenation increases the depth of layouts. More precisely, we have

depth(L, L′) = 1 + max(depth(L), depth(L′)).

Remark 2.3.2.9. When L and L′ are flat layouts, the concatenation of Definition 2.3.2.5 does NOT

agree with the concatenation of flat layouts of Definition 2.1.3.36. Instead, these operations are related by the formula

Remark 2.3.2.10. If L is any layout with depth(L) &gt; 0 and rank(L) = r, then we may write

as the concatenation of its modes.

Example 2.3.2.11. If

then L = (L1, L2, L3) where

L2 = 2 : 0, and</pre>

</details>

<a id="translation-05-layouts-pdf-第-73-页-·-原书第-71-页"></a>

### PDF 第 73 页 · 原书第 71 页
<a id="pdf-page-73"></a>

2.3.2.3 代入

回想一下，如果 <img src="./assets/p073-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.915em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组，并且 <img src="./assets/p073-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有 <img src="./assets/p073-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.080em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的轮廓，那么我们可以形成 <img src="./assets/p073-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 替换

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-002.png)

它是将轮廓 <img src="./assets/p073-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 i 个分量替换为嵌套元组 <img src="./assets/p073-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.620em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 得到的。我们可以按以下方式，将这一构造从嵌套元组推广到布局。

定义 2.3.2.12. 假设 <img src="./assets/p073-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.779em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局，并假设 <img src="./assets/p073-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.106em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个轮廓，其中 <img src="./assets/p073-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.054em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-004.png)

其中 Sₚ 和 Dₚ 分别是对 S 与 D 的各个模态进行 P 代入所得的结果。

示例 2.3.2.13. 如果 <img src="./assets/p073-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.216em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p073-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.101em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-006.png)

示例 2.3.2.14. 如果 <img src="./assets/p073-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.604em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-007.png)

那么

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-008.png)

示例 2.3.2.15. 如果 <img src="./assets/p073-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.061em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p073-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.061em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-009.png)

<a id="paper-section-2-3-3"></a>

<a id="translation-05-layouts-_2-3-3-合并"></a>

#### 2.3.3 合并

回想一下，如果 <img src="./assets/p073-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个平坦布局，那么 <img src="./assets/p073-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:3.649em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 就是一个最小秩的唯一平坦布局，其布局函数为 <img src="./assets/p073-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.781em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们可以在任意（嵌套）布局的设置中进行类似的构造。我们首先定义合并布局的概念。

定义 2.3.3.1. 假设 <img src="./assets/p073-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。如果满足以下条件之一，我们称 <img src="./assets/p073-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已合并。

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-012.png)

<img src="./assets/p073-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.079em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p073-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.097em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或

<img src="./assets/p073-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:13.075em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p073-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在定义 2.1.4.1. 的意义上合并

示例 2.3.3.2. 布局

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-015.png)

未合并，因为 depth(L) > 1。

示例 2.3.3.3. 布局

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-017.png)

没有合并，而布局

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-018.png)

是合并的。

![原文公式、图示或代码（PDF 第 73 页）](./assets/p073-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 73 页原页](./assets/page-073.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">2.3.2.3 Substitution

Recall that if X1, . . . , Xk are nested tuples and P is a profile with len(P) = k, then we may form the P-substitution

which is obtained by replacing the ithe entry of P with the nested tuple Xi. We can extend this construction from nested tuples to layouts as follows.

Definition 2.3.2.12. Suppose L = S : D is a layout, and suppose P is a profile with len(P) = rank(L). We define

where SP and DP are the P-substitutions of (the modes of) S and D.

Example 2.3.2.13. If P = (∗, (∗, ∗)) and L = (8, 8, 8) : (1, 8, 64), then

Example 2.3.2.14. If P = (∗, (∗, ∗))) and

then

Example 2.3.2.15. If L = (16) : (1) and P = ∗, then

2.3.3 Coalesce

Recall that if L is a flat layout, then coal♭(L) is a the unique flat layout of minimal rank whose layout function is ΦL. We can make a similar construction in the setting of arbitrary (nested) layouts. We begin by defining the notion of a coalesced layout.

Definition 2.3.3.1. Suppose L is a layout. We say L is coalesced if one of the following conditions holds.

2. depth(L) = 0 and shape(L) &gt; 1, or

3. depth(L) = 1, rank(L) &gt; 1, and L is coalesced in the sense of Definition 2.1.4.1.

Example 2.3.3.2. The layout

is not coalesced since depth(L) &gt; 1.

Example 2.3.3.3. The layout

is not coalesced, while the layout

is coalesced.</pre>

</details>

<a id="translation-05-layouts-pdf-第-74-页-·-原书第-72-页"></a>

### PDF 第 74 页 · 原书第 72 页
<a id="pdf-page-74"></a>

示例 2.3.3.4. 布局

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-001.png)

没有合并，而布局

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-002.png)

是合并的。

示例 2.3.3.5. 空布局

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-004.png)

没有合并。

观察 2.3.3.6. 回想一下，布局 <img src="./assets/p074-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，如果

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-006.png)

如果 <img src="./assets/p074-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，则 <img src="./assets/p074-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的。

如果<img src="./assets/p074-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是任意布局，我们可以获得如下合并布局<img src="./assets/p074-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.291em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

构造2.3.3.7. 假设<img src="./assets/p074-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是一个布局，并写

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-009.png)

1. 如果 <img src="./assets/p074-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.158em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义 <img src="./assets/p074-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:8.474em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

2. 如果 <img src="./assets/p074-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义 <img src="./assets/p074-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:7.278em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

3. 如果 <img src="./assets/p074-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义 <img src="./assets/p074-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.722em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 2.3.3.8. 如果 <img src="./assets/p074-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.682em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是空布局，则

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-013.png)

示例 2.3.3.9. 如果 <img src="./assets/p074-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.722em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-014.png)

示例 2.3.3.10. 如果 <img src="./assets/p074-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.836em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-015.png)

示例 2.3.3.11. 如果 <img src="./assets/p074-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.603em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-016.png)

示例 2.3.3.12. 如果 <img src="./assets/p074-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:17.463em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-017.png)

备注 2.3.3.13. 如果 <img src="./assets/p074-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则 <img src="./assets/p074-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.291em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有深度 0 或 1.

![原文公式、图示或代码（PDF 第 74 页）](./assets/p074-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 74 页原页](./assets/page-074.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.3.3.4. The layout

is not coalesced, while the layout

is coalesced.

Example 2.3.3.5. The empty layout

is not coalesced.

Observation 2.3.3.6. Recall that a layout L is non-degenerate if

If L is coalesced, then L is non-degenerate.

If L is any layout, we can obtain a coalesced layout coal(L) as follows.

Construction 2.3.3.7. Suppose L is a layout, and write

1. If m &gt; 1, we define coal(L) = coal♭(L♭)

2. If m = 1, we define coal(L) = s1 : d1

3. If m = 0, we define coal(L) = 1 : 0.

Example 2.3.3.8. If E = () : () is the empty layout, then

Example 2.3.3.9. If L = (1, 1) : (2, 4), then

Example 2.3.3.10. If L = (512) : (4), then

Example 2.3.3.11. If L = (2, 2, 2) : (1, 2, 4), then

Example 2.3.3.12. If L = ((2, 2, 2), (5, 5)) : ((1, 2, 4), (10, 50)), then

Remark 2.3.3.13. If L is a layout, then coal(L) has depth 0 or 1.</pre>

</details>

<a id="translation-05-layouts-pdf-第-75-页-·-原书第-73-页"></a>

### PDF 第 75 页 · 原书第 73 页
<a id="pdf-page-75"></a>

命题 2.3.3.14. 如果 <img src="./assets/p075-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p075-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-001.png)

证明。使用命题 2.1.4.18, 我们有

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-002.png)

定义 2.3.3.15. 如果 <img src="./assets/p075-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则将 <img src="./assets/p075-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的复杂度定义为整数

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-003.png)

命题 2.3.3.16. 如果 <img src="./assets/p075-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，<img src="./assets/p075-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.158em;width:5.694em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p075-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.306em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是唯一的复杂度最小化布局，其布局函数为 <img src="./assets/p075-b008-m05.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.802em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

证明。假设 <img src="./assets/p075-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.087em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个与 <img src="./assets/p075-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.132em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有相同布局函数的布局，并假设 <img src="./assets/p075-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:6.965em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-005.png)

有两种情况需要考虑。

• （案例 <img src="./assets/p075-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.366em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p075-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.742em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p075-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:14.984em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 结合这些不等式，我们观察到

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-007.png)

其中等式成立当且仅当 <img src="./assets/p075-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:10.572em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• （情况 <img src="./assets/p075-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.366em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p075-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.363em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p075-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:6.094em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或 <img src="./assets/p075-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:4.513em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于某些整数 <img src="./assets/p075-b015-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.589em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p075-b015-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.802em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在任何一种情况下，我们都有 <img src="./assets/p075-b015-m07.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:6.991em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-009.png)

其中等式成立当且仅当 <img src="./assets/p075-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:8.998em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-010.png)

备注 2.3.3.17. 我们需要排除 <img src="./assets/p075-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.962em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 情况的唯一原因是，如果 <img src="./assets/p075-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.240em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

那么 1 : 0 和空布局 () : () 是具有最小复杂度的不同布局，并且与 <img src="./assets/p075-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有相同的布局函数（即平凡布局函数 <img src="./assets/p075-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:3.384em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<a id="paper-section-2-3-4"></a>

<a id="translation-05-layouts-_2-3-4-相对合并"></a>

#### 2.3.4 相对合并

合并运算有一种重要的变体，称为相对合并，记为 $\operatorname{coal}(L,\bar S)$。它额外接收一个被 $\operatorname{shape}(L)$ 细化的嵌套元组 $\bar S$ 作为输入。在保证结果的形状仍细化 $\bar S$ 的前提下，相对合并尽可能简化布局 $L$。〔校注：原文将“变体”写成 invariant（不变量）；按本段定义及用途，应读作 variant。〕

![原文公式、图示或代码（PDF 第 75 页）](./assets/p075-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 75 页原页](./assets/page-075.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proposition 2.3.3.14. If A and B are layouts, then

Proof. Using Proposition 2.1.4.18, we have

Definition 2.3.3.15. If L is a layout, define the complexity of L to be the integer

Proposition 2.3.3.16. If L is a layout and size(L) &gt; 1, then coal(L) is the unique complexity minimizing layout whose layout function is ΦL.

Proof. Suppose L′ is a layout with the same layout function as L, and suppose coal(L′)̸ = 1 : 0. Then

There are two cases to consider.

• (Case 1): Suppose len(L′) &gt; 1. Then depth(L′) ≥1 ≥depth(coal(L)). Combining these inequalities, we observe that

where equality holds if and only if L′ = coal(L′) = coal(L).

• (Case 2): Suppose len(L′) = 1. Then L′ = (s) : (d) or L′ = s : d for some integers s &gt; 1 and d ≥0. In either case, we have coal(L′) = s : d, and

where equality holds if and only if L′ = s : d = coal(L).

Remark 2.3.3.17. The only reason that we need to exclude the case size(L) = 1 is that if size(L) = 1,

then 1 : 0 and the empty layout () : () are distinct layouts with minimal complexity, and the same layout function as L (namely the trivial layout function 0 7→0).

2.3.4 Relative coalesce

There is an important invariant of coalesce called relative coalesce, denoted coal(L, ¯S). This operation receives as an additional input a nested tuple ¯S which is refined by shape(L). In this case, the relative coalesce operation simplifies the layout L has much as possible, while ensuring that the resulting shape still refines ¯S.</pre>

</details>

<a id="translation-05-layouts-pdf-第-76-页-·-原书第-74-页"></a>

### PDF 第 76 页 · 原书第 74 页
<a id="pdf-page-76"></a>

定义 2.3.4.1。设 L = S : D 为布局，S̄ 为长度为 m 且被 S 细化的嵌套元组。回顾一下，对于任意 1 ≤ i ≤ m，可以考虑 S 相对于 S̄ 的第 i 个模态，记作

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-001.png)

由于 <img src="./assets/p076-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p076-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.005em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 同形，因此存在一个嵌套元组

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-002.png)

对应于<img src="./assets/p076-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.491em;width:5.563em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们将<img src="./assets/p076-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />相对于<img src="./assets/p076-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:0.846em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的<img src="./assets/p076-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />模态定义为布局

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-003.png)

示例 2.3.4.2. 如果 <img src="./assets/p076-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.407em;width:6.605em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-004.png)

那么

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-005.png)

观察 2.3.4.3. 假设 <img src="./assets/p076-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.530em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局，并假设 <img src="./assets/p076-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.407em;width:0.846em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个嵌套元组，长度为 <img src="./assets/p076-b012-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.055em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，轮廓为 <img src="./assets/p076-b012-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.820em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，由 <img src="./assets/p076-b012-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化如果对于任何 <img src="./assets/p076-b012-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.827em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们写

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-006.png)

那么

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-007.png)

是其各个相对模态的 P 代入。

定义 2.3.4.4。设 L = S : D 为布局，S̄ 是长度为 m、轮廓为 P 且被 S 细化的嵌套元组。如果每个相对模态

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-009.png)

都已合并，就称 L 在 S̄ 上已合并。

观察 2.3.4.5. 在定义 2.3.4.4, 的设置中，如果 <img src="./assets/p076-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 合并到 <img src="./assets/p076-b020-m04.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上，则 <img src="./assets/p076-b020-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的。

示例 2.3.4.6. 如果 <img src="./assets/p076-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.143em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则 <img src="./assets/p076-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.140em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 会合并到 <img src="./assets/p076-b021-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.879em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上，当且仅当 <img src="./assets/p076-b021-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.140em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，即

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-012.png)

定义 2.3.4.7（相对合并）。设 L = S : D 为布局，S̄ 是长度为 m、轮廓为 P 且被 S 细化的嵌套元组。定义

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-013.png)

备注 2.3.4.8. 在定义 2.3.4.7, 的设置中，<img src="./assets/p076-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:4.402em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的形状细化了 <img src="./assets/p076-b025-m04.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 76 页）](./assets/p076-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 76 页原页](./assets/page-076.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 2.3.4.1. Suppose L = S : D is a layout, and suppose ¯S is some nested tuple of length m which is refined by S. Recall that for any 1 ≤i ≤m, we may consider the ith mode of S relative to ¯S, denoted

Since S and D are congruent, there is a nested tuple

corresponding to modei(S, ¯S), and we define the ith mode of L relative to ¯S to be the layout

Example 2.3.4.2. If ¯S = (4, (9, 25)) and

then

Observation 2.3.4.3. Suppose L = S : D is a layout, and suppose ¯S is a nested tuple of length m and profile P which is refined by S. If for any 1 ≤i ≤m, we write

then

is the P-substitution of its relative modes.

Definition 2.3.4.4. Suppose L = S : D is a layout, and suppose ¯S is a nested tuple of length m and profile P which is refined by S. We say L is coalesced over ¯S if each relative mode

is coalesced.

Observation 2.3.4.5. In the setting of Definition 2.3.4.4, if L is coalesced over ¯S, then L is non- degenerate.

Example 2.3.4.6. If L is a layout, then L is coalesced over shape(L) if and only if L is non-degenerate, i.e.

Definition 2.3.4.7 (Relative coalesce). Suppose L = S : D is a layout, and suppose ¯S is a nested tuple of length m and profile P which is refined by S. We define

Remark 2.3.4.8. In the setting of Definition 2.3.4.7, the shape of coal(L, ¯S) refines ¯S.</pre>

</details>

<a id="translation-05-layouts-pdf-第-77-页-·-原书第-75-页"></a>

### PDF 第 77 页 · 原书第 75 页
<a id="pdf-page-77"></a>

引理 2.3.4.9. 如果 <img src="./assets/p077-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.510em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局并且 <img src="./assets/p077-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p077-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.408em;width:1.154em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-001.png)

证明。如上，让

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-002.png)

表示 $L$ 相对于 $S$ 的第 $i$ 个模态，并令 $\bar L_i=\operatorname{coal}(L_i)$。于是〔校注：本引理的相对基准应为 $\bar S$；原文这里及上一行写成了 $S$。〕

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-003.png)

命题 2.3.4.10. 假设 <img src="./assets/p077-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p077-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，并假设 <img src="./assets/p077-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:0.846em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p077-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.055em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组，使得 <img src="./assets/p077-b006-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.063em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p077-b006-m07.png" alt="原文数学符号" style="display:inline-block;height:1.407em;width:0.846em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，<img src="./assets/p077-b006-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.121em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p077-b006-m09.png" alt="原文数学符号" style="display:inline-block;height:1.408em;width:1.154em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-004.png)

证明。如果 <img src="./assets/p077-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.407em;width:10.426em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使用引理 2.3.4.9, 我们有

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-005.png)

反过来，设 $\Phi_A$ = $\Phi_B$。将证明 coal(A, S̄) = coal(B, S̄)。令 P = prof(S̄)，并对任意 1 ≤ i ≤ m 令

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-006.png)

由于

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-007.png)

和

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-008.png)

只需证明对所有 1 ≤ i ≤ m 都有 coal(Aᵢ) = coal(Bᵢ)。利用余字典序同构的结合性，可以将 A 的布局函数 $\Phi_A$ 写为

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-009.png)

我们可以将<img src="./assets/p077-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数<img src="./assets/p077-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.494em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />写为

![原文公式、图示或代码（PDF 第 77 页）](./assets/p077-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 77 页原页](./assets/page-077.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Lemma 2.3.4.9. If L = S : D is a layout and S refines ¯S, then

Proof. As above, let

denote the ith mode of L relative to S, and set ¯Li = coal(Li). Then

Proposition 2.3.4.10. Suppose A and B are layouts, and suppose ¯S is a nested tuple of length m such that shape(A) refines ¯S and shape(B) refines ¯S. Then

Proof. If coal(A, ¯S) = coal(B, ¯S), the using Lemma 2.3.4.9, we have

Conversely, suppose that ΦA = ΦB. We will argue that coal(A, ¯S) = coal(B, ¯S). Set P = prof( ¯S), and for any 1 ≤i ≤m, set

Since

and

it suffices to prove that coal(Ai) = coal(Bi) for all 1 ≤i ≤m. By the associativity of colexicographic isomorphisms, we can write the layout function ΦA of A as

and we can write the layout function ΦB of B as</pre>

</details>

<a id="translation-05-layouts-pdf-第-78-页-·-原书第-76-页"></a>

### PDF 第 78 页 · 原书第 76 页
<a id="pdf-page-78"></a>

对于固定的 <img src="./assets/p078-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.828em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 考虑子集

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-001.png)

及其像

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-002.png)

由于 <img src="./assets/p078-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:8.392em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于所有 <img src="./assets/p078-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.952em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这与像相同

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-003.png)

<img src="./assets/p078-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.482em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />对此子集的限制是<img src="./assets/p078-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.295em;width:2.120em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，<img src="./assets/p078-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />对此子集的限制是<img src="./assets/p078-b009-m04.png" alt="原文数学符号" style="display:inline-block;height:1.295em;width:2.123em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此可以得出<img src="./assets/p078-b009-m05.png" alt="原文数学符号" style="display:inline-block;height:1.385em;width:5.156em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且根据命题2.3.3.14,，我们有<img src="./assets/p078-b009-m07.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:8.817em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们推论

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-004.png)

根据需要。

<a id="paper-section-2-3-5"></a>

<a id="translation-05-layouts-_2-3-5-紧致布局"></a>

#### 2.3.5 紧致布局

我们可以轻松地将紧致布局的概念扩展到嵌套情况。再次，从标准上来说

描述布局的网格图，如果每个整数 <img src="./assets/p078-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.614em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 只出现一次，则布局 <img src="./assets/p078-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的。更准确地说，我们有以下定义。

定义 2.3.5.1。设 L 为布局。如果下列布局函数

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-009.png)

是同构。

示例 2.3.5.2. 布局

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-011.png)

紧致，而布局

![原文公式、图示或代码（PDF 第 78 页）](./assets/p078-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 78 页原页](./assets/page-078.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">For a fixed 1 ≤i ≤m, consider the subset

and its image

Since size(Aj) = size(Bj) for all 1 ≤j ≤m, this is the same as the image

The restriction of ΦA to this subset is ΦAi, and the restriction of B to this subset is ΦBi, so it follows that ΦAi = ΦBi, and by Proposition 2.3.3.14, we have coal(Ai) = coal(Bi). We deduce that

as desired.

2.3.5 Compact layouts

We can easily extend the concept of compact layouts to the nested case. Again, in terms of the standard

grid diagrams depicting layouts, a layout L is compact if each integer 0 ≤i &lt; size(L) appears exactly once. More preciesly, we have the following definition.

Definition 2.3.5.1. Suppose L is a layout. We say L is compact if the layout function

is an isomorphism.

Example 2.3.5.2. The layout

is compact, while the layouts</pre>

</details>

<a id="translation-05-layouts-pdf-第-79-页-·-原书第-77-页"></a>

### PDF 第 79 页 · 原书第 77 页
<a id="pdf-page-79"></a>

和

![原文公式、图示或代码（PDF 第 79 页）](./assets/p079-visual-001.png)

不紧致。

示例 2.3.5.3. 以下布局是紧致的：

![原文公式、图示或代码（PDF 第 79 页）](./assets/p079-visual-003.png)

示例 2.3.5.4. 布局

![原文公式、图示或代码（PDF 第 79 页）](./assets/p079-visual-004.png)

不是紧致的，因为整数 <img src="./assets/p079-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.313em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不在 <img src="./assets/p079-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的像中更一般地，如果 <img src="./assets/p079-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.624em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p079-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不是紧致的。

我们通过列出 <img src="./assets/p079-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 布局紧致的一些等效条件来结束本节。

命题 2.3.5.5. 假设 <img src="./assets/p079-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。那么下面的条件是等价的。

<img src="./assets/p079-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:2.171em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 紧致。

<img src="./assets/p079-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.265em;width:2.493em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 紧致。

<img src="./assets/p079-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:4.604em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 紧致。

证明。这些条件的等价性源自以下事实：

![原文公式、图示或代码（PDF 第 79 页）](./assets/p079-visual-011.png)

<a id="paper-section-2-3-6"></a>

<a id="translation-05-layouts-_2-3-6-补布局"></a>

#### 2.3.6 补布局

我们可以轻松地将补布局的概念扩展到嵌套情况，如下所示。

定义 2.3.6.1。设 A 与 B 为布局。如果拼接布局 (A, B) 紧致，就称 B 为 A 的补布局，并记为 A ⊥ B。

引理 2.3.6.2. 假设 <img src="./assets/p079-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p079-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局。然后

![原文公式、图示或代码（PDF 第 79 页）](./assets/p079-visual-015.png)

证明。这是根据 <img src="./assets/p079-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:8.160em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的观察得出的

![原文公式、图示或代码（PDF 第 79 页）](./assets/p079-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 79 页原页](./assets/page-079.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">and

are not compact.

Example 2.3.5.3. The following layouts are compact:

Example 2.3.5.4. The layout

is not compact since the integer 1 ∈[0, 29) = [0, cosize(L)) is not in the image of ΦL. More generally, if size(L)̸ = cosize(L), then L is not compact.

We conclude this section by listing some equivalent conditions for a layout L to be compact.

Proposition 2.3.5.5. Suppose L is a layout. Then the following conditions are equivalent.

1. L is compact.

2. L♭is compact.

3. coal(L) is compact.

Proof. The equivalence of these conditions follows from the fact that

2.3.6 Complements

We can easily extend the concept of complement to the nested case as follows.

Definition 2.3.6.1. Suppose A and B are layouts. We say B is a complement of A, and write A ⊥B, if the concatenated layout (A, B) is compact.

Lemma 2.3.6.2. Suppose A and B are layouts. Then

Proof. This follows from the observation that (A, B)♭= A♭⋆B♭.</pre>

</details>

<a id="translation-05-layouts-pdf-第-80-页-·-原书第-78-页"></a>

### PDF 第 80 页 · 原书第 78 页
<a id="pdf-page-80"></a>

定义 2.3.6.3. 假设 <img src="./assets/p080-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。如果 <img src="./assets/p080-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.249em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补，我们就说 <img src="./assets/p080-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补。

引理 2.3.6.4. 假设 <img src="./assets/p080-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。那么存在 <img src="./assets/p080-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局 <img src="./assets/p080-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 当且仅当 <img src="./assets/p080-b001-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的。

证明。若 $A$ 可取补，则 $A^\flat$ 可取补，故存在平坦布局 $B$，使平坦拼接 $A^\flat\star B$ 紧致。于是嵌套拼接 $(A,B)$ 也紧致，故 $A$ 存在补布局。反之，若存在布局 $B$ 使 $(A,B)$ 紧致，则 $B^\flat$ 是 $A^\flat$ 的补布局。由命题 2.1.6.21，$A^\flat$ 可取补，因而按定义 $A$ 也可取补。

定义 2.3.6.5. 假设 <img src="./assets/p080-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。如果 <img src="./assets/p080-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的，那么我们定义

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-004.png)

如构造 2.1.6.16. 如果 <img src="./assets/p080-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是正整数并且 <img src="./assets/p080-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p080-b005-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补的，那么我们定义

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-005.png)

如构造 2.1.6.29.

备注 2.3.6.6. 假设 <img src="./assets/p080-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补布局。那么我们几乎总是有 <img src="./assets/p080-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.110em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p080-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:4.971em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 更准确地说，如果 <img src="./assets/p080-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:4.694em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的长度为 <img src="./assets/p080-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.007em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-008.png)

如果 <img src="./assets/p080-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:9.388em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的长度为 1, 那么

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-009.png)

如果 <img src="./assets/p080-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:8.680em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-010.png)

定义 2.3.6.7。设 A 为布局，N 为正整数。如果 A ⊥ B，并且满足下式，就称布局 B 为 A 的一个 N 补布局：

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-011.png)

定义 2.3.6.8。设 A 为布局，N 为正整数。如果平坦布局 A♭ 可取 N 补，就称 A 可取 N 补，具体条件见定义 2.1.6.25（原文此处误引为 2.1.6.24）。

命题 2.3.6.9. 假设 <img src="./assets/p080-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。那么存在 <img src="./assets/p080-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的 <img src="./assets/p080-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 补布局当且仅当 <img src="./assets/p080-b018-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p080-b018-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.981em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可取补布局。

证明。如果 B 是 A 的 N 补布局，则 B♭ 是 A♭ 的 N 补布局。由命题 2.1.6.32，A♭ 可取 N 补，因此 A 也可取 N 补。反过来，如果 A 可取 N 补，则 comp(A, N) 是 A 的 N 补布局。

示例 2.3.6.10. 如果 <img src="./assets/p080-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:16.370em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p080-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.912em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-015.png)

示例 2.3.6.11. 如果 <img src="./assets/p080-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.938em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p080-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.410em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 80 页）](./assets/p080-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 80 页原页](./assets/page-080.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 2.3.6.3. Suppose A is a layout. We say A is complementable if A♭is complementable.

Lemma 2.3.6.4. Suppose A is a layout. Then there exists a complement B of A if and only if A is complementable.

Proof. If A is complementable, then A♭is complementable, so there exists a flat layout B such that the flat concatenation A♭⋆B is compact. It follows that the concatenation (A, B) is also compact, so A admits a complement. Conversely, suppose there exists a layout B such that (A, B) is compact. Then B♭is a complement of A♭, so by Proposition 2.1.6.21, A♭is complementable, hence, by definition, so is A.

Definition 2.3.6.5. Suppose A is a layout. If A is complementable, then we define

as in Construction 2.1.6.16. If N is a positive integer and A is N-complementable, then we define

as in Construction 2.1.6.29.

Remark 2.3.6.6. Suppose A is a complementable layout. Then we almost always have comp(A) =

comp♭(A♭). More precisely, if comp♭(A♭) has length &gt; 1, then

if comp♭(A♭) = (s) : (d) has length 1, then

and if comp♭(A♭) = () : (), then

Definition 2.3.6.7. Suppose A is a layout and N is a positive integer. We say a layout B is a N-complement of A if A ⊥B, and

Definition 2.3.6.8. Suppose A is a layout and N is a positive integer. We say A is N-complementable if the flat layout A♭is N-complementable, as in Definition 2.1.6.24.

Proposition 2.3.6.9. Suppose A is a layout. Then there exists a N-complement of A if and only if A is N-complementable.

Proof. If B is a N-complement of A, then B♭is a N-complement A♭, and so by Proposition 2.1.6.32, A♭is N-complementable, hence, so is A. Conversely, if A is N-complementable, then comp(A, N) is a N-complement of A.

Example 2.3.6.10. If A = ((4, 2), (2, 2)) : ((3, 24), (192, 96)) and N = 768 then

Example 2.3.6.11. If A = ((16, 4), 64) : ((1, 16), 64) and N = 4096 then</pre>

</details>

<a id="translation-05-layouts-pdf-第-81-页-·-原书第-79-页"></a>

### PDF 第 81 页 · 原书第 79 页
<a id="pdf-page-81"></a>

示例 2.3.6.12. 如果 <img src="./assets/p081-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.938em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.410em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-001.png)

示例 2.3.6.13. 如果 <img src="./assets/p081-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.938em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.185em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-002.png)

<a id="paper-section-2-3-7"></a>

<a id="translation-05-layouts-_2-3-7-复合"></a>

#### 2.3.7 复合

在本节中，我们讨论布局上最重要的操作，即复合。如果<img src="./assets/p081-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p081-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是布局，那么<img src="./assets/p081-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p081-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的复合就是一个布局<img src="./assets/p081-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.642em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其布局函数是<img src="./assets/p081-b007-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p081-b007-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数的复合。更准确地说，我们有以下定义。

定义 2.3.7.1（布局的复合）。设 A 与 B 为布局。它们的复合是满足以下性质的唯一布局 B ◦ A：

<img src="./assets/p081-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.082em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p081-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.340em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

2. B ◦ A 在 shape(A) 上已合并；并且

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-007.png)

备注 2.3.7.2. 为了使 <img src="./assets/p081-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.674em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 存在，我们必须有

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-008.png)

备注 2.3.7.3. 布局复合的定义中有一个隐含的断言，即

最多有一种布局满足这三个条件。命题 2.3.4.10. 证明了这一点。我们可以将 <img src="./assets/p081-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的弱复合定义为满足条件 1. 和 3. 的布局 <img src="./assets/p081-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />（但是

不一定 <img src="./assets/p081-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.620em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在这种情况下

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-011.png)

稍后我们将看到，当尝试计算布局的复合时，计算

<img src="./assets/p081-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的任何弱复合 <img src="./assets/p081-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 然后在 <img src="./assets/p081-b019-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.063em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上合并以形成实际的复合 <img src="./assets/p081-b019-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.951em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

备注 2.3.7.4. 请注意，通过观察 2.3.4.5, 复合定义中的条件 2 意味着

<img src="./assets/p081-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.674em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的。

示例 2.3.7.5. 如果 <img src="./assets/p081-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.012em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.964em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-016.png)

示例 2.3.7.6. 如果 <img src="./assets/p081-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.632em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.229em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p081-b024-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b024-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的组成为

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-017.png)

注记 2.3.7.7。例 2.3.7.6 表明，平坦布局 A 与 B 的复合

未必仍然是平坦布局。

示例 2.3.7.8. 如果 <img src="./assets/p081-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.945em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p081-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.111em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 81 页）](./assets/p081-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 81 页原页](./assets/page-081.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.3.6.12. If A = ((16, 4), 64) : ((1, 16), 64) and N = 8192 then

Example 2.3.6.13. If A = ((16, 4), 64) : ((8, 1), 128) and N = 16384, then

2.3.7 Composition

In this section, we discuss the most important operation on layouts, namely composition. If A and B are layouts, then the composition of A and B is a layout B ◦A whose layout function is the composite of the layout functions of A and B. More precisely, we have the following definition.

Definition 2.3.7.1 (Composition of layouts). Suppose A and B are layouts. The composite of A and B is the unique layout B ◦A satisfying the following properties.

1. shape(B ◦A) refines shape(A),

2. B ◦A is coalesced over shape(A), and

Remark 2.3.7.2. In order for B ◦A to exist, we must have

Remark 2.3.7.3. There is an implicit assertion in the definition of layout composition, namely that

there is at most one layout satisfying the three conditions. This is justified by Proposition 2.3.4.10. We might define a weak composite of A and B to be a layout C satisfying conditions 1. and 3. (but

not necessarily 2.), in which case

We will see later on that when attempting to compute compositions of layouts, it is useful to compute

any weak composite C of A and B, then coalesce over shape(A) to form the actual composite B ◦A.

Remark 2.3.7.4. Note that, by Observation 2.3.4.5, condition 2. in the definition of composition implies

that B ◦A is non-degenerate.

Example 2.3.7.5. If A = (3, 5) : (10, 2) and B = (100) : (7), then

Example 2.3.7.6. If A = (4) : (2) and B = (2, 2, 6) : (12, 6, 1), then the composition of A and B is

Remark 2.3.7.7. Example 2.3.7.6 illustrates the fact that the composition of flat layouts A and B need

not be flat.

Example 2.3.7.8. If A = ((2, 4), 8) : ((4, 8), 8) and B = (4, 4, 4, 4) : (2, 4, 8, 16), then</pre>

</details>

<a id="translation-05-layouts-pdf-第-82-页-·-原书第-80-页"></a>

### PDF 第 82 页 · 原书第 80 页
<a id="pdf-page-82"></a>

示例 2.3.7.9. 如果 <img src="./assets/p082-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:15.871em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:12.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-001.png)

接下来，我们开发一些有用的属性来计算布局的组成。

命题 2.3.7.10. 假设 <img src="./assets/p082-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局，并假设 <img src="./assets/p082-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，使得

<img src="./assets/p082-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.408em;width:9.240em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-004.png)

如果 <img src="./assets/p082-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可复合，则

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-005.png)

证明。假设 <img src="./assets/p082-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合的。那么 <img src="./assets/p082-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.903em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 以及 <img src="./assets/p082-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.692em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p082-b008-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b008-m06.png" alt="原文数学符号" style="display:inline-block;height:1.406em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的复合物这一事实由等式得出

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-006.png)

推论 2.3.7.11. 如果 <img src="./assets/p082-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则 <img src="./assets/p082-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b013-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合的当且仅当 <img src="./assets/p082-b013-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p082-b013-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.418em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合的，并且

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-007.png)

现在我们已经掌握了布局复合的基本属性，我们将注意力转向复合的两个最重要的实例，即逻辑除法和逻辑乘积。

<a id="paper-section-2-3-8"></a>

<a id="translation-05-layouts-_2-3-8-逻辑除法"></a>

#### 2.3.8 逻辑除法

在本节中，我们定义布局的逻辑除法。作为一个激励示例，请考虑布局

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-010.png)

出于各种目的，我们可能希望对布局 <img src="./assets/p082-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.210em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行平铺，例如，以下是通过各种布局 <img src="./assets/p082-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对 <img src="./assets/p082-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行平铺

![原文公式、图示或代码（PDF 第 82 页）](./assets/p082-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 82 页原页](./assets/page-082.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.3.7.9. If A = ((3, (2, 2)), 24) : ((3, (9, 18)), 72) and B = (9, 8, 3, 8) : (24, 3, 1, 384) then

Next, we develop some useful properties for computing the composition of layouts.

Proposition 2.3.7.10. Suppose A is a layout, and suppose B and ˜B are layouts such that

• size(B) ≤size( ˜B), and

If A and B are composable, then

Proof. Suppose A and B are composable. Then cosize(A) ≤size(B), and the fact that B ◦A is the composite of A and ˜B follows from the equality

Corollary 2.3.7.11. If A and B are layouts, then A and B are composable if and only if A and coal(B) are composable, and

Now that we have developed the basic properties of layout composition, we turn our attention to the two most important instances of composition, namely logical division and logical products.

2.3.8 Logical division

In this section, we define the logical division of layouts. As a motivating example, consider the layout

For various purposes, we may want to tile the layout A. For example, here are the tilings of A by various layouts B.</pre>

</details>

<a id="translation-05-layouts-pdf-第-83-页-·-原书第-81-页"></a>

### PDF 第 83 页 · 原书第 81 页
<a id="pdf-page-83"></a>

![原文公式、图示或代码（PDF 第 83 页）](./assets/p083-visual-000.png)

处理这样的分块布局时，我们希望用形如 (tile coordinate, tile) 的坐标进行索引，其中 tile 指定正在处理哪个分块，tile coordinate 指定该分块内的一个坐标。例如，如果 A 与 B 的秩均为 2，就希望将 ((i, j), (k, ℓ)) 写成 A 的第 (k, ℓ) 个分块中第 (i, j) 个分量的索引。逻辑除法 A ⊘ B 恰好给出了支持这种索引方式的布局。

定义 2.3.8.1. 假设 <img src="./assets/p083-b036-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p083-b036-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，并假设

![原文公式、图示或代码（PDF 第 83 页）](./assets/p083-visual-002.png)

是 <img src="./assets/p083-b038-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p083-b038-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.475em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局那么 <img src="./assets/p083-b038-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 除以 <img src="./assets/p083-b038-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的逻辑除法就是布局

![原文公式、图示或代码（PDF 第 83 页）](./assets/p083-visual-003.png)

示例 2.3.8.2. 如果 <img src="./assets/p083-b041-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p083-b041-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.849em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 83 页）](./assets/p083-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 83 页原页](./assets/page-083.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">When working with such tiled layouts, we would like to index into our layout with coordinates of the form (tile coordinate, tile) where tile specifies which tile we are working with, and tile coordinate specifies a coordinate within the specified tile. For example, if both A and B have rank 2, we would like to write ((i, j), (k, ℓ)) as the index of the (i, j)th entry of the (k, ℓ)th tile of A. The logical division of A ⊘B is precisely the layout which affords us this ability.

Definition 2.3.8.1. Suppose A and B are layouts, and suppose

is the complement of B with respect to size(A). Then the logical division of A by B is the layout

Example 2.3.8.2. If A = (4, 8) : (1, 4) and B = (2, 2) : (1, 4), then</pre>

</details>

<a id="translation-05-layouts-pdf-第-84-页-·-原书第-82-页"></a>

### PDF 第 84 页 · 原书第 82 页
<a id="pdf-page-84"></a>

如下图所示。

![原文公式、图示或代码（PDF 第 84 页）](./assets/p084-visual-001.png)

注记 2.3.8.3。A ⊘ B 中每个分量的颜色表示其所属分块，而每个分量的

不透明度表示它在所属分块中对应哪个分量。因此，A ⊘ B 的每一列颜色相同，每一行不透明度相同。

示例 2.3.8.4. 如果 <img src="./assets/p084-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p084-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.849em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 84 页）](./assets/p084-visual-004.png)

如下图所示。

![原文公式、图示或代码（PDF 第 84 页）](./assets/p084-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 84 页原页](./assets/page-084.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">as depicted below.

Remark 2.3.8.3. The color of each entry in A ⊘B indicates the tile to which it belongs, and the opacity

of each entry in A ⊘B indicates which entry of the tile it represents. This is why each column of A ⊘B has the same color, and each row of A ⊘B has the same opacity.

Example 2.3.8.4. If A = (4, 8) : (1, 4) and B = (2, 2) : (4, 1), then

as depicted below.</pre>

</details>

<a id="translation-05-layouts-pdf-第-85-页-·-原书第-83-页"></a>

### PDF 第 85 页 · 原书第 83 页
<a id="pdf-page-85"></a>

备注 2.3.8.5. 请注意前两个示例之间的差异。 <img src="./assets/p085-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的平铺在每个

这两个示例是相同的，但每个图块的布局不同。在第一个示例中，图块具有列主序布局，而在第二个示例中，图块具有行主序布局。当进行逻辑除法时，这会导致不同的布局。

示例 2.3.8.6. 如果 <img src="./assets/p085-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.849em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-003.png)

示例 2.3.8.7. 如果 <img src="./assets/p085-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.012em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.418em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-004.png)

示例 2.3.8.8. 如果 <img src="./assets/p085-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:17.034em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-005.png)

示例 2.3.8.9. 如果 <img src="./assets/p085-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.186em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.019em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-006.png)

<a id="paper-section-2-3-9"></a>

<a id="translation-05-layouts-_2-3-9-逻辑乘积"></a>

#### 2.3.9 逻辑乘积

在本节中，我们定义布局的逻辑积。

定义 2.3.9.1. 假设 <img src="./assets/p085-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，并假设

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-009.png)

是 <img src="./assets/p085-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p085-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.185em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补布局那么 <img src="./assets/p085-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的逻辑积就是布局

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-010.png)

观察 2.3.9.2. 通过命题 2.3.7.10 和命题 2.3.7.11, 如果我们让

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-011.png)

对于任何有效的 <img src="./assets/p085-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.449em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-012.png)

这意味着在计算 <img src="./assets/p085-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.853em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 时，我们可以将 <img src="./assets/p085-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.539em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 视为 <img src="./assets/p085-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的任何足够大（已排序）的补布局

示例 2.3.9.3. 如果 <img src="./assets/p085-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.012em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p085-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.572em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局

![原文公式、图示或代码（PDF 第 85 页）](./assets/p085-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 85 页原页](./assets/page-085.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Remark 2.3.8.5. Note the difference between the previous two examples. The tiling of A in each of

the two examples is identical, but the layout of each tile is different. In first example, the tiles have column-major layouts, while in the second example, the tiles have row-major layouts. This results in different layouts when one performs logical division.

Example 2.3.8.6. If A = (4, 8) : (1, 4) and B = (2, 4) : (2, 4), then

Example 2.3.8.7. If A = (4, 6) : (1, 40) and B = 6 : 4, then

Example 2.3.8.8. If A = (4, 6, 2, 4, 2, 5) : (36, 1, 18, 0, 0, 144) and B = (4, 10) : (1, 192), then

Example 2.3.8.9. If A = (8, (4, 4)) and B = (2, (8, 16)), then

2.3.9 Logical product

In this section, we define the logical product of layouts.

Definition 2.3.9.1. Suppose A and B are layouts, and suppose

is the complement of A with respect to size(A) · cosize(B). Then the logical product of A and B is the layout

Observation 2.3.9.2. By Proposition 2.3.7.10 and Proposition 2.3.7.11, if we let

for any valid N ≥size(A) · cosize(B), then

This means that when computing A⊗B, we can take Ac to be any sufficiently large (sorted) complement of A.

Example 2.3.9.3. If A = (2, 2) : (5, 10) and B = (3, 5) : (5, 1) are the layouts</pre>

</details>

<a id="translation-05-layouts-pdf-第-86-页-·-原书第-84-页"></a>

### PDF 第 86 页 · 原书第 84 页
<a id="pdf-page-86"></a>

那么 <img src="./assets/p086-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.901em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 就是布局

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-001.png)

如下图所示。

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-002.png)

示例 2.3.9.4. 如果 <img src="./assets/p086-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p086-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.344em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-003.png)

示例 2.3.9.5. 如果 <img src="./assets/p086-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.506em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p086-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.347em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-004.png)

示例 2.3.9.6. 如果 <img src="./assets/p086-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:10.946em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p086-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.281em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-005.png)

<a id="paper-section-2-3-10"></a>

<a id="translation-05-layouts-_2-3-10-可处理布局"></a>

#### 2.3.10 可处理布局

在本节中，我们定义一类表现特别良好的布局，称为可处理布局。我们将看到可处理布局正是源自某个范畴 <img src="./assets/p086-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.580em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局

定义 2.3.10.1. 若平坦布局 $L^\flat$ 在定义 2.1.8.1 的意义下可处理，就称布局 $L$ 可处理。具体而言，若下列平坦布局

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-008.png)

写出后，要求对每个 1 ≤ i < m 满足以下条件：

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-009.png)

2. sᵢdᵢ 整除 dᵢ₊₁。

示例 2.3.10.2. 布局

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-011.png)

是可处理的。更一般地，任何长度为 1 的布局 <img src="./assets/p086-b030-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都是可处理的。

示例 2.3.10.3. 布局

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-013.png)

是可处理的。更一般地说，任何以列为主的布局都是可处理的。

![原文公式、图示或代码（PDF 第 86 页）](./assets/p086-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 86 页原页](./assets/page-086.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">then A ⊗B is the layout

as depicted below.

Example 2.3.9.4. If A = (3, 3) : (6, 1) and B = (10, 12) : (24, 2), then

Example 2.3.9.5. If A = (2, 10) : (1680, 4) and B = (4, 9) : (2, 56), then

Example 2.3.9.6. If A = (4, (2, 2)) : (9, (1, 3)) and B = ((2, 4), 8) : ((1, 4), 2), then

2.3.10 Tractable layouts

In this section we define an especially well-behaved class of layouts, called tractable layouts. We will see that tractable layouts are precisely the layouts which arise from a certain category Nest.

Definition 2.3.10.1. We say a layout L is tractable if the flat layout L♭is tractable, in the sense of Definition 2.1.8.1. Explicitly, L is tractable if the flat layout

is such that for each 1 ≤i &lt; m, we have

2. sidi divides di+1.

Example 2.3.10.2. The layout

is tractable. More generally, any layout L of length 1 is tractable.

Example 2.3.10.3. The layout

is tractable. More generally, any column-major layout is tractable.</pre>

</details>

<a id="translation-05-layouts-pdf-第-87-页-·-原书第-85-页"></a>

### PDF 第 87 页 · 原书第 85 页
<a id="pdf-page-87"></a>

示例 2.3.10.4. 布局

![原文公式、图示或代码（PDF 第 87 页）](./assets/p087-visual-001.png)

是可处理的。更一般地说，任何行主序布局 <img src="./assets/p087-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都是可处理的。

示例 2.3.10.5. 布局

![原文公式、图示或代码（PDF 第 87 页）](./assets/p087-visual-003.png)

是可处理的。更一般地说，任何紧致的布局都是可处理的。

示例 2.3.10.6. 布局

![原文公式、图示或代码（PDF 第 87 页）](./assets/p087-visual-005.png)

是可处理的。更一般地说，任何具有恰好一个非零步长分量的布局都是可处理的。

示例 2.3.10.7. 布局

![原文公式、图示或代码（PDF 第 87 页）](./assets/p087-visual-007.png)

是可处理的。更一般地说，任何可取补的布局都是可处理的。

示例 2.3.10.8. 布局

![原文公式、图示或代码（PDF 第 87 页）](./assets/p087-visual-009.png)

不可处理。特别地，这说明可处理布局 L₁、L₂ 的拼接 (L₁, L₂) 未必可处理。

![原文公式、图示或代码（PDF 第 87 页）](./assets/p087-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 87 页原页](./assets/page-087.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 2.3.10.4. The layout

is tractable. More generally, any row-major layout L is tractable.

Example 2.3.10.5. The layout

is tractable. More generally, any compact layout is tractable.

Example 2.3.10.6. The layout

is tractable. More generally, any layout with exactly one non-zero stride entry is tractable.

Example 2.3.10.7. The layout

is tractable. More generally, any complementable layout is tractable.

Example 2.3.10.8. The layout

is not tractable. In particular, this shows that the concatenation (L1, L2) of tractable layouts L1 and L2 need not be tractable.</pre>

</details>

---

<a id="translation-06-tuple-第-3-1-节-tuple-范畴、编码与具象化"></a>

## 第 3.1 节：Tuple 范畴、编码与具象化
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-06-tuple-pdf-第-88-页-·-原书第-86-页"></a>

### PDF 第 88 页 · 原书第 86 页
<a id="pdf-page-88"></a>

<a id="paper-section-3"></a>

<a id="translation-06-tuple-第-3-章"></a>

#### 第 3 章

<a id="translation-06-tuple-布局范畴"></a>

#### 布局范畴

在彻底探索了布局的代数之后，我们现在将注意力转向这项工作的数学核心：将布局具象化为适当定义的范畴中的态射。在此过程中，我们开发了布局图的图形演算，可以提供更直接的布局操作计算。

<a id="paper-section-3-1"></a>

<a id="translation-06-tuple-_3-1-tuple-范畴"></a>

#### 3.1 Tuple 范畴

在本节中，我们定义一个范畴 `Tuple`，其对象是正整数的元组，其态射我们称为元组态射。每个元组态射 <img src="./assets/p088-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.066em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码一个平坦布局 <img src="./assets/p088-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.657em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 元组态射的复合与布局复合兼容，因为如果 <img src="./assets/p088-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p088-b004-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合的元组态射，则

![原文公式、图示或代码（PDF 第 88 页）](./assets/p088-visual-005.png)

我们定义一个具象化函子（构造 3.1.4.4）：

![原文公式、图示或代码（PDF 第 88 页）](./assets/p088-visual-006.png)

通过公式恢复<img src="./assets/p088-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的布局函数

![原文公式、图示或代码（PDF 第 88 页）](./assets/p088-visual-007.png)

我们建立“元组态射代数”，其中包含排序（第 3.1.5.3 节）、合并（第 3.1.5.4 节）、补态射（第 3.1.5.6 节）、拼接（第 3.1.5.5 节）、平坦除法（第 3.1.5.7 节）和平坦乘积（第 3.1.5.8 节）等运算，它们与

平坦布局上的相应运算兼容。

<a id="paper-section-3-1-1"></a>

<a id="translation-06-tuple-_3-1-1-基本定义"></a>

#### 3.1.1 基本定义

定义 3.1.1.1。令 Fin∗ 表示下列范畴：其对象是带基点的有限集

![原文公式、图示或代码（PDF 第 88 页）](./assets/p088-visual-011.png)

其中 m ≥ 0；其态射 α : ⟨m⟩∗ → ⟨n⟩∗ 是满足 α(∗) = ∗ 的函数。这些态射称为保基点映射，或简称映射。

旁注 3.1.1.2。Fin∗ 是有限带基点集范畴 FinSet∗ 的一个骨架。

![原文公式、图示或代码（PDF 第 88 页）](./assets/p088-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 88 页原页](./assets/page-088.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Chapter 3

Categories of layouts

Having thoroughly explored the algebra of layouts, we now turn our attention to the mathematical heart of this work: realizing layouts as morphisms in suitably-defined categories. Along the way, we develop a graphical calculus of layout diagrams that affords more straightforward computation of layout operations.

3.1 The category Tuple

In this section, we define a category Tuple whose objects are tuples of positive integers, and whose morphisms we call tuple morphisms. Each tuple morphism f : S →T encodes a flat layout Lf. Composition of tuple morphisms is compatible with layout composition, in that if f and g are composable tuple morphisms, then

We define a realization functor (Construction 3.1.4.4)

which recovers the layout function of Lf via the formula

We develop an “algebra of tuple morphisms” which includes operations such as sort (Section 3.1.5.3), coalesce (Section 3.1.5.4), complement (Section 3.1.5.6), concatenate (Section 3.1.5.5), flat division (Section 3.1.5.7), and flat products (Section 3.1.5.8), which are compatible with the corresponding

operations on flat layouts.

3.1.1 Basic definitions

Definition 3.1.1.1. Let Fin∗denote the category whose objects are the pointed finite sets

for m ≥0, and whose morphisms α : ⟨m⟩∗→⟨n⟩∗are functions satisfying α(∗) = ∗. We call these morphisms pointed maps, or simply maps.

Aside 3.1.1.2. Fin∗is a skeleton of the category FinSet∗of finite pointed sets.</pre>

</details>

<a id="translation-06-tuple-pdf-第-89-页-·-原书第-87-页"></a>

### PDF 第 89 页 · 原书第 87 页
<a id="pdf-page-89"></a>

记号 3.1.1.3。当保基点映射 α : ⟨m⟩∗ → ⟨n⟩∗ 的陪域可以由上下文确定时，有时将

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-001.png)

作为长度为 <img src="./assets/p089-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.055em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组，其中分量位于 <img src="./assets/p089-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:2.288em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中

示例 3.1.1.4. <img src="./assets/p089-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.211em;width:2.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中有一个态射 <img src="./assets/p089-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:6.613em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，由下式给出

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-003.png)

我们可以使用下图来可视化。

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-004.png)

注意，对应于分量 3 的圆点没有箭头，因为它被映到基点 ∗。

示例 3.1.1.5. <img src="./assets/p089-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.211em;width:2.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中有一个态射 <img src="./assets/p089-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:6.588em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，由下式给出

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-006.png)

我们可以使用下图来可视化。

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-007.png)

示例 3.1.1.6. 对于任何 <img src="./assets/p089-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.167em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，<img src="./assets/p089-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.211em;width:2.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中存在唯一的态射，其形式为 <img src="./assets/p089-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:7.292em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，即

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-008.png)

例 3.1.1.7. 对任意 $n\ge0$，$\mathrm{Fin}_*$ 中存在唯一的形如 $\delta:\langle0\rangle_*\to\langle m\rangle_*$ 的态射，即〔校注：原文量词使用 $n$，陪域却使用 $m$；二者应统一。〕

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-009.png)

旁注 3.1.1.8。范畴 Fin∗ 是交换运算子的算子范畴，因此我们

有时写

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-011.png)

我们对 <img src="./assets/p089-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:2.337em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中可处理的态射特别感兴趣，我们在下面定义它。

定义 3.1.1.9。如果对任意 j ∈ ⟨n⟩ ⊂ ⟨n⟩∗，原像 α⁻¹(j) 为空或仅包含一个元素，就称保基点映射 α : ⟨m⟩∗ → ⟨n⟩∗ 可处理。

![原文公式、图示或代码（PDF 第 89 页）](./assets/p089-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 89 页原页](./assets/page-089.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Notation 3.1.1.3. If the codomain of a pointed map α : ⟨m⟩∗→⟨n⟩∗is understood, we sometimes write

as a tuple of length m with entries in ⟨n⟩∗.

Example 3.1.1.4. There is a morphism α : ⟨4⟩∗→⟨6⟩∗in Fin∗given by

which we can visualize using the following diagram.

Note that the bullet corresponding to entry 3 does not support an arrow, reflecting the fact that it gets sent to ∗.

Example 3.1.1.5. There is a morphism β : ⟨5⟩∗→⟨3⟩∗in Fin∗given by

which we can visualize using the following diagram.

Example 3.1.1.6. For any m ≥0, there is a unique morphism in Fin∗of the form π : ⟨m⟩∗→⟨0⟩∗, namely

Example 3.1.1.7. For any n ≥0, there is a unique morphism in Fin∗of the form δ : ⟨0⟩∗→⟨m⟩∗, namely

Aside 3.1.1.8. The category Fin∗is the category of operators for the commutative operad, so we

sometimes write

We are especially interested in tractable morphisms in Fin∗, which we define below.

Definition 3.1.1.9. We say a pointed map α : ⟨m⟩∗→⟨n⟩∗is tractable if for any j ∈⟨n⟩⊂⟨n⟩∗, the preimage α−1(j) is empty or consists of a single element.</pre>

</details>

<a id="translation-06-tuple-pdf-第-90-页-·-原书第-88-页"></a>

### PDF 第 90 页 · 原书第 88 页
<a id="pdf-page-90"></a>

示例 3.1.1.10. 映射

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-001.png)

可处理，而映射

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-002.png)

不可处理

备注 3.1.1.11. 如果我们将 <img src="./assets/p090-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.211em;width:2.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的态射 <img src="./assets/p090-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:7.089em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示为元组，即

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-004.png)

那么，α 可处理，当且仅当 α 中没有任何正整数出现超过一次。

旁注 3.1.1.12。由可处理的保基点映射组成的宽子范畴

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-006.png)

在可处理的带基点映射上得到的范畴，就是 E₀ 运算子的算子范畴。

定义 3.1.1.13。令 Tuple 表示下列范畴：其对象是元组

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-008.png)

其中各分量为正整数；而态射

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-009.png)

由满足下列条件的可处理保基点映射 α : ⟨m⟩∗ → ⟨n⟩∗ 指定：

• 如果 <img src="./assets/p090-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.552em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p090-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.043em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p090-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.316em;width:4.748em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

我们说这样的态射 <img src="./assets/p090-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p090-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.098em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上，并将 <img src="./assets/p090-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 称为元组态射。

符号 3.1.1.14. 如果 <img src="./assets/p090-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.975em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p090-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.097em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的元组态射，那么我们有时将 <img src="./assets/p090-b020-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 描述为

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-013.png)

我们开发的布局的图形演算基于 <img src="./assets/p090-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.978em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中态射的自然可视化，如下所示。

![原文公式、图示或代码（PDF 第 90 页）](./assets/p090-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 90 页原页](./assets/page-090.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.1.10. The maps

are tractable, while the maps

are not tractable

Remark 3.1.1.11. If we represent a morphism α : ⟨m⟩∗→⟨n⟩∗in Fin∗as a tuple, i.e.

then α is tractable if and only if no positive integer occurs more than once in α.

Aside 3.1.1.12. The wide subcategory

on the tractable pointed maps is the category of operators for the E0 operad.

Definition 3.1.1.13. Let Tuple denote the category whose objects are tuples

of positive integers, where a morphism

is specified by a tractable pointed map α : ⟨m⟩∗→⟨n⟩∗satisfying the property that

• if 1 ≤i ≤m and α(i)̸ = ∗, then si = tα(i) .

We say that such a morphism f lies over α, and refer to f as a tuple morphism.

Notation 3.1.1.14. If f : (s1, . . . , sm) →(t1, . . . , tn) is a tuple morphism which lies over α, then we sometimes depict f as

The graphical calculus of layouts we develop is based on the natural visualizations of morphisms in Tuple, as exemplified below.</pre>

</details>

<a id="translation-06-tuple-pdf-第-91-页-·-原书第-89-页"></a>

### PDF 第 91 页 · 原书第 89 页
<a id="pdf-page-91"></a>

示例 3.1.1.15. 元组态射

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-001.png)

可以使用下图进行可视化。

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-002.png)

示例 3.1.1.16. 元组态射

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-003.png)

可以使用下图进行可视化。

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-004.png)

示例 3.1.1.17. 元组态射

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-005.png)

可以使用下图进行可视化。

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-006.png)

观察 3.1.1.18。我们可以按以下方式，将范畴 Tuple 与若干熟知的运算子联系起来。令 <img src="./assets/p091-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.746em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

表示以整除关系为序的正整数偏序集，并将其视为一个对称幺半范畴，其幺半乘积由整数乘法给出。令

下列记号表示这个对称幺半范畴的算子范畴：

<img src="./assets/p091-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.338em;width:1.527em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么有明显的函子

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-010.png)

和

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-011.png)

使得该图

![原文公式、图示或代码（PDF 第 91 页）](./assets/p091-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 91 页原页](./assets/page-091.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.1.15. The tuple morphism

can be visualized using the following diagram.

Example 3.1.1.16. The tuple morphism

can be visualized using the following diagram.

Example 3.1.1.17. The tuple morphism

can be visualized using the following diagram.

Observation 3.1.1.18. We can relate the category Tuple to some well-known operads as follows. Let Zdiv

&gt;0 denote the poset of positive integers under the divisibility relation, considered as a symmetric monoidal category with product given by multiplication of integers. Let (Zdiv

&gt;0)⊗denote the category of operators of Zdiv

&gt;0. Then there are evident functors

and

such that the diagram</pre>

</details>

<a id="translation-06-tuple-pdf-第-92-页-·-原书第-90-页"></a>

### PDF 第 92 页 · 原书第 90 页
<a id="pdf-page-92"></a>

交换。这表明，Tuple 是下列拉回运算子的一个宽子范畴：

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-001.png)

中，由下列态射组成的子范畴：

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-002.png)

满足

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-003.png)

<a id="paper-section-3-1-2"></a>

<a id="translation-06-tuple-_3-1-2-从元组态射到平坦布局"></a>

#### 3.1.2 从元组态射到平坦布局

使用范畴 `Tuple` 的动力是每个元组态射 <img src="./assets/p092-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.915em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码一个平坦布局 <img src="./assets/p092-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.895em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 此外，每个可处理布局 <img src="./assets/p092-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 产生一个元组态射 <img src="./assets/p092-b008-m05.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.536em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们证明作为命题 3.1.2.10 这些结构在某种意义上是逆的，并且可处理布局正是由元组态射编码的布局。

构造 3.1.2.1. 假设

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-006.png)

是元组态射。我们将 <img src="./assets/p092-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为平坦布局，其形状

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-007.png)

是 <img src="./assets/p092-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的域，其步长

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-008.png)

由公式定义

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-009.png)

我们将 Lf 称为 f 编码的布局，或与 f 关联的布局。

示例 3.1.2.2. 元组态射

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-011.png)

示例 3.1.1.15 对布局进行编码

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-012.png)

注意，利用构造 3.1.2.1 的公式计算步长，就是从某个形状分量沿箭头找到其目标分量，然后将目标分量下方的所有分量相乘，空乘积取为 1。

![原文公式、图示或代码（PDF 第 92 页）](./assets/p092-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 92 页原页](./assets/page-092.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">commutes. This exhibits Tuple as the wide subcategory of the pullback operad

on the morphisms

satisfying

3.1.2 From tuple morphisms to flat layouts

The impetus for working with the category Tuple is that each tuple morphism f encodes a flat layout Lf. Moreover, each tractable layout L gives rise to a tuple morphism fL. We prove as Proposition 3.1.2.10 that these constructions are in some sense inverses, and that tractable layouts are precisely those encoded by tuple morphisms.

Construction 3.1.2.1. Suppose

is a tuple morphism. We define Lf to be the flat layout whose shape

is the domain of f, and whose stride

is defined by the formula

We refer to Lf as the layout encoded by f or the layout associated to f.

Example 3.1.2.2. The tuple morphism

of Example 3.1.1.15 encodes the layout

Note that computing the stride via the formula in Construction 3.1.2.1 amounts to following the arrow from a specific shape entry to its target entry and multiplying together all entries below that one (taking the empty product to equal 1).</pre>

</details>

<a id="translation-06-tuple-pdf-第-93-页-·-原书第-91-页"></a>

### PDF 第 93 页 · 原书第 91 页
<a id="pdf-page-93"></a>

示例 3.1.2.3. 元组态射

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-001.png)

示例 3.1.1.16 对布局进行编码

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-002.png)

示例 3.1.2.4. 元组态射

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-003.png)

示例 3.1.1.17 对布局进行编码

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-004.png)

我们已经看到了如何计算由元组态射 <img src="./assets/p093-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.057em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的平坦布局 <img src="./assets/p093-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 另一方面，如果 <img src="./assets/p093-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，那么我们可以朝另一个方向走，构造一个编码 <img src="./assets/p093-b009-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组态射 <img src="./assets/p093-b009-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 回顾定义 2.1.8.1 ，平坦布局<img src="./assets/p093-b009-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，如果

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-005.png)

满足以下性质：

对每个 1 ≤ i < m，都有 dᵢ = 0，或 sᵢdᵢ 整除 dᵢ₊₁。

构造 3.1.2.5. 假设 <img src="./assets/p093-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.373em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可处理，并且设置

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-008.png)

因此存在置换 σ ∈ Σₘ，使得 sort(L) = Lσ。换言之，对每个 1 ≤ i ≤ m，有 s′ᵢ = sσ(i)，d′ᵢ = dσ(i)。



如果每个 d′ᵢ 都非零，

令 k = 0；否则，令 k 为满足

<img src="./assets/p093-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.418em;width:2.774em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让 <img src="./assets/p093-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.116em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且让

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-013.png)

我们定义

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-014.png)

是位于映射 <img src="./assets/p093-b048-m01.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:6.906em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-015.png)

令 <img src="./assets/p093-b053-m01.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:11.300em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示索引集合，使得 <img src="./assets/p093-b053-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.872em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为偶数或 <img src="./assets/p093-b053-m03.png" alt="原文数学符号" style="display:inline-block;height:1.385em;width:3.339em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-016.png)

令 $\iota:\langle n\rangle_*\to\langle\ell\rangle_*$ 为包含映射 $i\mapsto j_i$。由构造，$\alpha'$ 分解为 $\alpha'=\iota\circ\alpha$，定义 $L$ 的标准表示为下列元组态射：〔校注：本页前面在定义到 $\langle\ell\rangle_*$ 的映射时使用了 $\alpha$，而分段式及此处使用 $\alpha'$；应将那个初始映射记为 $\alpha'$，$\alpha$ 留给删去冗余陪域分量后的映射。〕

![原文公式、图示或代码（PDF 第 93 页）](./assets/p093-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 93 页原页](./assets/page-093.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.2.3. The tuple morphism

of Example 3.1.1.16 encodes the layout

Example 3.1.2.4. The tuple morphism

of Example 3.1.1.17 encodes the layout

We have seen how to compute the flat layout Lf encoded by a tuple morphism f. On the other hand, if L is tractable, then we can go in the other direction, constructing a tuple morphism f which encodes L. Recall from Definition 2.1.8.1 that a flat layout L is tractable if

satisfies the following property:

If 1 ≤i &lt; m, then di = 0, or sidi divides di+1.

Construction 3.1.2.5. Suppose L = (s1, . . . , sm) : (d1, . . . , dm) is tractable, and set

so there is some permutation σ ∈Σm such that sort(L) = Lσ. In other words, s′

i = sσ(i) and d′

i = dσ(i) for each 1 ≤i ≤m. If each d′

i is nonzero, then let k = 0. Otherwise, let k be the largest integer such that d′

k = 0. Let ℓ= 2(m −k), and let

We define

to be the tuple morphism lying over the map α : ⟨m⟩∗→⟨ℓ⟩∗given by

Let J = {j1 &lt; · · · &lt; jn} ⊂⟨ℓ⟩denote the collection of indices such that ji is even or tji̸ = 1. Let

and let ι : ⟨n⟩∗→⟨ℓ⟩∗be the inclusion map i 7→ji. Then by construction, the map α′ factors as α′ = ι ◦α, and we define the standard representation of L to be the tuple morphism</pre>

</details>

<a id="translation-06-tuple-pdf-第-94-页-·-原书第-92-页"></a>

### PDF 第 94 页 · 原书第 92 页
<a id="pdf-page-94"></a>

示例 3.1.2.6. 如果

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-001.png)

那么 <img src="./assets/p094-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，<img src="./assets/p094-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示是元组态射

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-002.png)

请注意，非正式地，通过构造 3.1.2.5 计算 <img src="./assets/p094-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.214em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相当于

• 将陪域初始化为空元组 ()；

• 以升序遍历 <img src="./assets/p094-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的非零步长，

• 如果 <img src="./assets/p094-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.028em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是当前步长，并且 <img src="./assets/p094-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.980em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是之前访问过的步长，则附加

<img src="./assets/p094-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.913em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p094-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.373em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-007.png)

和

• 映射<img src="./assets/p094-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:3.780em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 3.1.2.7. 如果

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-010.png)

那么 <img src="./assets/p094-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，<img src="./assets/p094-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示是元组态射

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-011.png)

示例 3.1.2.8. 如果

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-012.png)

那么 <img src="./assets/p094-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，而 <img src="./assets/p094-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示是元组态射

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-013.png)

让我们证明构造 3.1.2.5 的元组态射 <img src="./assets/p094-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.215em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 实际上对布局 <img src="./assets/p094-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行了编码

引理 3.1.2.9. 假设 <img src="./assets/p094-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个可处理的平坦布局，而 <img src="./assets/p094-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.124em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p094-b028-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.158em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示，那么 <img src="./assets/p094-b028-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局是

![原文公式、图示或代码（PDF 第 94 页）](./assets/p094-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 94 页原页](./assets/page-094.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.2.6. If

then L is tractable, and the standard representation of L is the tuple morphism

Note that, informally, computing fL via Construction 3.1.2.5 amounts to

• initializing the codomain as (),

• traversing the non-zero strides of L in increasing order,

• if dj is the current stride, and di is the previously visited stride, appending

– (sj) if sidi = dj, or

and

• mapping sj 7→sj.

Example 3.1.2.7. If

then L is tractable, and the standard representation of L is the tuple morphism

Example 3.1.2.8. If

then L is tractable, and the standard representation of L is the tuple morphism

Let’s justify that the tuple morphism fL of Construction 3.1.2.5 does, in fact, encode the layout L.

Lemma 3.1.2.9. Suppose L is a tractable flat layout, and f = fL is the standard representation of L. Then the layout encoded by f is</pre>

</details>

<a id="translation-06-tuple-pdf-第-95-页-·-原书第-93-页"></a>

### PDF 第 95 页 · 原书第 93 页
<a id="pdf-page-95"></a>

证明。假设 <img src="./assets/p095-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.373em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，并且让

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-001.png)

为 L 的标准表示。显然

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-002.png)

需要检查 stride(Lf) = stride(L)。换言之，对任意 1 ≤ i ≤ m，需要验证

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-003.png)

借用构造 3.1.2.5 的记号。如果 α(i) = ∗，则 α′(i) = ∗，因此 σ⁻¹(i) ≤ k。这

意味着

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-005.png)

否则，设 α(i) ≠ ∗，则 α′(i) ≠ ∗，因此 k + 1 ≤ σ⁻¹(i) ≤ m。计算得

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-006.png)

我们已经证明，如果<img src="./assets/p095-b046-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是一个可处理的平坦布局，那么就存在一个编码<img src="./assets/p095-b046-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.140em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的元组态射<img src="./assets/p095-b046-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。接下来，我们证明了相反的情况，这意味着可处理的平坦布局正是由元组态射编码的布局。

命题 3.1.2.10. 假设 <img src="./assets/p095-b047-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局。那么存在编码 <img src="./assets/p095-b047-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组态射 <img src="./assets/p095-b047-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 当且仅当 <img src="./assets/p095-b047-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。

证明。首先，假设 <img src="./assets/p095-b048-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是平坦布局，而 <img src="./assets/p095-b048-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是与 <img src="./assets/p095-b048-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.658em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组态射。我们想要证明 <img src="./assets/p095-b048-m04.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。让

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-009.png)

为 L 的排序，设 1 ≤ i < m。将证明 dᵢ = 0，或者 s′ᵢdᵢ 整除 dᵢ₊₁。

若 dᵢ = 0，则结论成立。否则，设 dᵢ ≠ 0。那么

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-011.png)

其中某个 1 ≤ k ≤ n 满足

s′ᵢ = tₖ。由于 dᵢ₊₁ ≥ dᵢ，必有 dᵢ₊₁ ≠ 0，因此 dᵢ₊₁ 具有下列形式：

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-013.png)

对于某些<img src="./assets/p095-b063-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.624em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 有两种情况需要考虑：

![原文公式、图示或代码（PDF 第 95 页）](./assets/p095-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 95 页原页](./assets/page-095.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Suppose L = (s1, . . . , sm) : (d1, . . . , dm) is tractable, and let

be the standard representation of L. Clearly

We need to check that stride(Lf) = stride(L). In other words, we need to check that for any 1 ≤i ≤m, we have

We borrow the notation of Construction 3.1.2.5. If α(i) = ∗, then α′(i) = ∗, and so σ−1(i) ≤k. This

implies

Suppose otherwise that α(i)̸ = ∗. Then α′(i)̸ = ∗, and so k + 1 ≤σ−1(i) ≤m. We compute

We have proved that if L is a tractable flat layout, then there exists a tuple morphism f which encodes L. Next, we prove the converse, which implies that tractable flat layouts are precisely the layouts encoded by tuple morphisms.

Proposition 3.1.2.10. Suppose L is a flat layout. Then there exists a tuple morphism f encoding L if and only if L is tractable.

Proof. First, suppose L is a flat layout, and f : (s1, . . . , sm) →(t1, . . . , tn) is a tuple morphism with Lf = L. We want to show that Lf is tractable. Let

be the sorting of L, and suppose that 1 ≤i &lt; m. We will argue that di = 0, or s′

idi divides di+1. If di = 0, then we are done. Suppose otherwise that di̸ = 0. Then

for some 1 ≤k ≤n with s′

i = tk. Since di+1 ≥di, we know that di+1̸ = 0, so di+1 has the form

for some 1 ≤ℓ≤n. There are two cases to consider:</pre>

</details>

<a id="translation-06-tuple-pdf-第-96-页-·-原书第-94-页"></a>

### PDF 第 96 页 · 原书第 94 页
<a id="pdf-page-96"></a>

•（案例 <img src="./assets/p096-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.066em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p096-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.750em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-001.png)

s′ᵢdᵢ 整除 dᵢ₊₁。

• 情况 2：若 ℓ ≤ k，由于

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-003.png)

我们必须有

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-004.png)

和

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-005.png)

特别是，我们有 <img src="./assets/p096-b036-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.876em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

s′ᵢ₊₁ = tℓ = 1。但 sort(Lf) 已排序，且 dᵢ₊₁ = dᵢ，所以

<img src="./assets/p096-b040-m01.png" alt="原文数学符号" style="display:inline-block;height:1.396em;width:2.616em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们推断

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-008.png)

所以特别是 <img src="./assets/p096-b043-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:0.876em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

s′ᵢdᵢ 整除 dᵢ₊₁。

我们的结论是 <img src="./assets/p096-b045-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。

接下来，假设 <img src="./assets/p096-b046-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。然后我们可以将 <img src="./assets/p096-b046-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.122em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 作为 <img src="./assets/p096-b046-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示（参见构造 <img src="./assets/p096-b046-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:3.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在这种情况下，根据引理 3.1.2.9, 我们有 <img src="./assets/p096-b046-m06.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.658em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

注记 3.1.2.11。需要注意，许多不同的元组态射可以

编码同一个布局。例如，下图中的每个元组态射

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-014.png)

对布局进行编码

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-015.png)

其中，f 最简单：与 g 不同，f 的像上方没有多余分量；与 h 不同，未被 f 命中的分量已合并在一起。为精确表达 f 相对于这些态射的简单性，引入标准形式的概念。

定义 3.1.2.12. 假设

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-017.png)

是元组态射。如果满足以下条件，我们称 <img src="./assets/p096-b056-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式：

![原文公式、图示或代码（PDF 第 96 页）](./assets/p096-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 96 页原页](./assets/page-096.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">• (Case 1) If ℓ&gt; k, then

idi divides di+1.

• (Case 2) If ℓ≤k, then since Y

we must have

and

In particular, we have s′

i+1 = tℓ= 1. But since sort(Lf) is sorted and di+1 = di, we have s′

i = 1. We deduce that

so in particular, s′

idi divides di+1.

We conclude that L is tractable.

Next, suppose that L is tractable. Then we can take f = fL to be the standard representation of L (see Construction 3.1.2.5), in which case, by Lemma 3.1.2.9, we have L = Lf.

Remark 3.1.2.11. It is important to note that there are many different tuple morphisms which give

rise to the same layout. For example, each of the tuple morphisms shown below

encodes the layout

Among these, f is the simplest: There are no extraneous entries lying above the image of f (unlike g), and the entries not hit by f are condensed (unlike h). To make precise the simplicity of f among these morphisms, we introduce the notion of standard form.

Definition 3.1.2.12. Suppose

is a tuple morphism. We say f has standard form if the following conditions hold:</pre>

</details>

<a id="translation-06-tuple-pdf-第-97-页-·-原书第-95-页"></a>

### PDF 第 97 页 · 原书第 95 页
<a id="pdf-page-97"></a>

1. 如果 <img src="./assets/p097-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.881em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p097-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.177em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

2. 如果 <img src="./assets/p097-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.677em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

若 j ∉ Image(α)，则要求 tⱼ ≠ 1，并且 j + 1 ∈ Image(α)。

示例 3.1.2.13. 备注 3.1.2.11 的元组态射 <img src="./assets/p097-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式，而 <img src="./assets/p097-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p097-b003-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.754em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则没有。

示例 3.1.2.14. 元组态射

![原文公式、图示或代码（PDF 第 97 页）](./assets/p097-visual-005.png)

具有标准形式，而元组态射

![原文公式、图示或代码（PDF 第 97 页）](./assets/p097-visual-006.png)

不。

示例 3.1.2.15. 如果 <img src="./assets/p097-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理布局，则通过构造，<img src="./assets/p097-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示 <img src="./assets/p097-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.511em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式。

如果我们限制标准形式的元组态射，那么与可处理布局几乎是一一对应的。但是，我们需要排除一种有问题的情况，如以下示例所示。

示例 3.1.2.16. 考虑下面所示的元组态射 <img src="./assets/p097-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p097-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

![原文公式、图示或代码（PDF 第 97 页）](./assets/p097-visual-010.png)

<img src="./assets/p097-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p097-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />都有标准形式，并且

![原文公式、图示或代码（PDF 第 97 页）](./assets/p097-visual-011.png)

此示例说明 <img src="./assets/p097-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.049em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p097-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.015em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 形式的分量的存在可能导致标准形式的表示元组态射的非唯一性。在布局方面，这对应于形状分量 <img src="./assets/p097-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.217em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> = 1 和步长 <img src="./assets/p097-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.393em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为了排除这种病态的例子，我们引入了非退化性的概念。

![原文公式、图示或代码（PDF 第 97 页）](./assets/p097-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 97 页原页](./assets/page-097.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">1. If n &gt; 1, then n ∈Image(α).

2. If 1 ≤j &lt; n, then

j /∈Image(α) ⇒ tj̸ = 1, and j + 1 ∈Image(α)

Example 3.1.2.13. The tuple morphisms f of Remark 3.1.2.11 has standard form, while g and h do not.

Example 3.1.2.14. The tuple morphisms

have standard form, while the tuple morphisms

do not.

Example 3.1.2.15. If L is a tractable layout, then by construction, the standard representation fL of L has standard form.

If we restrict to tuple morphisms of standard form, then there is almost a one-to-one correspondence with tractable layouts. However, there is one problematic case we need to exclude, as explicated in the following example.

Example 3.1.2.16. Consider the tuple morphisms f and g shown below.

Both f and g have standard form, and

This example illustrates that the presence of entries of the form si = 1 and α(i)̸ = ∗can lead to non-uniqueness of a representing tuple morphism of standard form. On the layout side, this corresponds to shape entries si = 1 with stride di̸ = 0. In order to exclude such pathological examples, we introduce the notion of non-degeneracy.</pre>

</details>

<a id="translation-06-tuple-pdf-第-98-页-·-原书第-96-页"></a>

### PDF 第 98 页 · 原书第 96 页
<a id="pdf-page-98"></a>

定义 3.1.2.17. 假设

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-001.png)

是一个元组态射并且

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-002.png)

是平坦布局。

1. 如果 <img src="./assets/p098-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:2.806em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p098-b005-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.176em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p098-b005-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.043em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们说 <img src="./assets/p098-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的

2. 如果 <img src="./assets/p098-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:2.806em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p098-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.176em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p098-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.134em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们说 <img src="./assets/p098-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的

观察 3.1.2.18. 如果 <img src="./assets/p098-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化元组态射，则由 <img src="./assets/p098-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局 <img src="./assets/p098-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的。相反，如果 <img src="./assets/p098-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化平坦布局，则 <img src="./assets/p098-b007-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示 <img src="./assets/p098-b007-m06.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.214em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的。

观察 3.1.2.19. 限制到非退化平坦布局并不真正损失一般性。若 $L$ 是任意平坦布局，则 $\operatorname{filter}(L)$ 是非退化平坦布局，并且与 $L$ 具有相同的坐标函数和布局函数。〔校注：本句按原文译出，但与此前 filter 的定义不完全相容。例如 $L=(1):(3)$ 已被 filter 保留，却不满足本页的非退化条件；删除零步长模态后，坐标函数的定义域也可能改变。此处不能直接当作已证明结论使用。〕

标准形式的非退化元组态射的基本属性是它们由它们编码的布局来表征。具体如下。

引理 3.1.2.20. 假设 <img src="./assets/p098-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p098-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是标准形式的非简并元组态射。如果 <img src="./assets/p098-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.129em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p098-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:2.920em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />〔校注：标准形式的单位边界还需要额外约定。按定义 3.1.2.12 的字面条件，$f:()\to()$ 与 $g:()\to(1)$ 都是标准形式的非退化元组态射，且编码同一空布局；因此本引理与后续一一对应定理在该边界上存在歧义，详见校对记录。〕

证明。假设

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-010.png)

和

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-011.png)

为标准形式的非退化元组态射，并满足

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-012.png)

我们想要证明 <img src="./assets/p098-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 首先，我们将论证 <img src="./assets/p098-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:11.516em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-013.png)

分别表示<img src="./assets/p098-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:4.853em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p098-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.472em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的前缀积的集合。我们声称 <img src="./assets/p098-b021-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.468em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 因为这些集合中的每一个都等于

<img src="./assets/p098-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:10.903em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p098-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.632em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

让我们论证 <img src="./assets/p098-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.768em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p098-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果存在一些 <img src="./assets/p098-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:3.697em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p098-b023-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.355em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p098-b023-m05.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:6.494em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 另一方面，如果 <img src="./assets/p098-b023-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.590em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不在 <img src="./assets/p098-b023-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.092em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的像中，那么由于 <img src="./assets/p098-b023-m08.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式，因此存在一些<img src="./assets/p098-b023-m09.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:3.577em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p098-b023-m10.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.051em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在这种情况下 <img src="./assets/p098-b023-m11.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:5.924em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这证明了 <img src="./assets/p098-b023-m12.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.632em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 98 页）](./assets/p098-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 98 页原页](./assets/page-098.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 3.1.2.17. Suppose

is a tuple morphism and

is a flat layout.

1. We say f is non-degenerate if si = 1 ⇒ α(i) = ∗.

2. We say L is non-degenerate if si = 1 ⇒ di = 0.

Observation 3.1.2.18. If f is a non-degenerate tuple morphism, then the layout Lf encoded by f is non-degenerate. Conversely, if L is a non-degenerate flat layout, then the standard representation fL of L is non-degenerate.

Observation 3.1.2.19. Restricting to non-degenerate flat layouts is no real loss of generality. If L is an arbitrary flat layout, then filter(L) is a non-degenerate flat layout with the same coordinate function and layout function as L.

The essential property of non-degenerate tuple morphisms of standard form is that they are characterized by the layouts which they encode. This is made precise as follows.

Lemma 3.1.2.20. Suppose f and g are non-degenerate tuple morphisms of standard form. If Lf = Lg, then f = g.

Proof. Suppose

and

are non-degenerate tuple morphisms of standard form with

We want to show that f = g. First, we will argue that (t1, . . . , tn) = (u1, . . . , up). Let

denote the sets of prefix products of (t1, . . . , tn) and (u1, . . . , up), respectively. We claim X = Y , since each of these sets is equal to

Z = {di, sidi | 1 ≤i ≤m and di̸ = 0}.

Lets argue that X = Z. Suppose 1 ≤j ≤n. If there exists some i ∈⟨m⟩with α(i) = j, then t1 · · · tj = sidi. On the other hand, if j is not in the image of α, then since f has standard form, there exists some i ∈⟨m⟩such that α(i) = j + 1, in which case t1 · · · tj = di. This proves that X ⊆Z.</pre>

</details>

<a id="translation-06-tuple-pdf-第-99-页-·-原书第-97-页"></a>

### PDF 第 99 页 · 原书第 97 页
<a id="pdf-page-99"></a>

反之，如果 <img src="./assets/p099-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.539em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p099-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.401em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p099-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:7.743em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p099-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:7.845em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 证明 <img src="./assets/p099-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.730em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们推论 <img src="./assets/p099-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.440em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 同样的论证证明 <img src="./assets/p099-b000-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.336em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

由于 <img src="./assets/p099-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p099-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是标准形式的非退化，我们知道每个 <img src="./assets/p099-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.870em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和每个 <img src="./assets/p099-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.174em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都大于 1,，这意味着

![原文公式、图示或代码（PDF 第 99 页）](./assets/p099-visual-002.png)

又因为 X = Y，故 n = p，且对每个 1 ≤ j ≤ n 都有 t₁ ··· tⱼ = u₁ ··· uⱼ。因此，(t₁, …, tₙ) = (u₁, …, uₚ)。

接下来证明 α = β。反设存在 i ∈ ⟨m⟩，使得 α(i) ≠ β(i)。分两种情况讨论。

• 如果 <img src="./assets/p099-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.105em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p099-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:9.585em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

矛盾。案例<img src="./assets/p099-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.828em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 类似。

• 若 $\alpha(i)\ne *\ne\beta(i)$，则不失一般性可设 $\alpha(i)<\beta(j)$，此时〔校注：原文 $\beta(j)$ 中的指标应为 $i$。〕

![原文公式、图示或代码（PDF 第 99 页）](./assets/p099-visual-007.png)

矛盾。

我们推断 <img src="./assets/p099-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.042em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 所以 <img src="./assets/p099-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

我们现在准备证明我们的对应定理，该定理识别标准形式的非退化元组态射与非退化可处理的平坦布局。

定理 3.1.2.21. 映射

![原文完整对应图（PDF 第 99 页）](./assets/p099-b013-complete-diagram.png)











构造 3.1.2.1 和 3.1.2.5 确定标准形式的非简并元组态射与非简并易处理的平面布局之间的一对一对应关系。〔校注：本定理沿用引理 3.1.2.20；单位及空元组边界的疑点见校对记录，译文未擅自补充原文没有写出的假设。〕

证明。要证明，当限制在上述形式的态射与布局上时，构造 f ↦ Lf 与 L ↦ fL 互为逆。如果 L 是非退化可处理平坦布局，由引理 3.1.2.9，有 LfL = L。再设 f 是标准形式的非退化元组态射，L = Lf 为其编码的布局。f 和 fLf 都是标准形式的非退化元组态射，且编码的布局相同，因此由引理 3.1.2.20，f = fLf。

![原文公式、图示或代码（PDF 第 99 页）](./assets/p099-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 99 页原页](./assets/page-099.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Conversely, if 1 ≤i ≤m and di̸ = 0, then di = t1 · · · tα(i)−1 and sidi = t1 · · · tα(i), which proves Z ⊆X. We deduce that X = Z. The same argument proves Y = Z.

Since f and g are non-degenerate of standard form, we know that each tj and each uk is greater than 1, which implies

and since X = Y , it follows that n = p, and t1 · · · tj = u1 · · · uj for each 1 ≤j ≤n. We deduce that (t1, . . . , tn) = (u1, . . . , up).

Next, we need to argue that α = β. Suppose for contradiction that there exists some i ∈⟨m⟩with α(i)̸ = β(i). There are two cases to consider.

• If α(i) = ∗̸ = β(i), then 0 = di = t1 · · · tβ(i)−1,

a contradiction. The case α(i)̸ = ∗= β(i) is analogous.

• If α(i)̸ = ∗̸ = β(i), then without loss of generality we may assume α(i) &lt; β(j), in which case

a contradiction.

We deduce that α = β, so f = g.

We are now ready to prove our correspondence theorem, which identifies non-degenerate tuple morphisms of standard form with non-degenerate tractable flat layouts.

Theorem 3.1.2.21. The maps

Non-degenerate tuple morphisms of

Non-degenerate

tractable flat

standard form

layouts

of Constructions 3.1.2.1 and 3.1.2.5 determine a one-to-one correspondence between non-degenerate tuple morphisms of standard form, and non-degenerate tractable flat layouts.

Proof. We want to show that the constructions f 7→Lf and L 7→fL are inverses, when restricted to tuple morphisms and layouts of the stated form. If L is a non-degenerate tractable flat layout, then by Lemma 3.1.2.9 we have LfL = L. Suppose next that f is a non-degenerate tuple morphism of standard form and L = Lf is the layout encoded by f. Since f and fLf are non-degenerate tuple morphisms of standard form, and the layouts encoded by these tuple morphsims are equal, it follows from Lemma 3.1.2.20 that f = fLf .</pre>

</details>

<a id="translation-06-tuple-pdf-第-100-页-·-原书第-98-页"></a>

### PDF 第 100 页 · 原书第 98 页
<a id="pdf-page-100"></a>

<a id="paper-section-3-1-3"></a>

<a id="translation-06-tuple-_3-1-3-例子"></a>

#### 3.1.3 例子

在本节中，我们将介绍一些重要的元组态射族，并描述它们所产生的平坦布局。

示例 3.1.3.1（恒等态射）。我们说元组态射 <img src="./assets/p100-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是恒等态射，如果 <img src="./assets/p100-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.448em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于某些元组 <img src="./assets/p100-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p100-b002-m05.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.448em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是恒等态射，则 <img src="./assets/p100-b002-m06.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有形状 <img src="./assets/p100-b002-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.120em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的列主序布局例如，这里是恒等态射的示例<img src="./assets/p100-b002-m08.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其相关布局 <img src="./assets/p100-b002-m09.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.651em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 100 页）](./assets/p100-visual-003.png)

示例 3.1.3.2（同构）。如果存在元组态射 <img src="./assets/p100-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.397em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p100-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.756em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p100-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.165em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> ，则元组态射 <img src="./assets/p100-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.400em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是同构。如果 <img src="./assets/p100-b007-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是同构，则其关联布局 <img src="./assets/p100-b007-m07.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是紧致的。例如，这是一个同构 <img src="./assets/p100-b007-m08.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其相关布局 <img src="./assets/p100-b007-m09.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.651em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 100 页）](./assets/p100-visual-004.png)

观察 3.1.3.3. 请注意，如果元组态射

![原文公式、图示或代码（PDF 第 100 页）](./assets/p100-visual-005.png)

是同构，则 <img src="./assets/p100-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:8.259em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是双射，因此 <img src="./assets/p100-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.269em;width:5.602em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是置换。相反，如果 <img src="./assets/p100-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.435em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个置换，并且 <img src="./assets/p100-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.309em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个正整数元组，那么我们可以构造同构

![原文公式、图示或代码（PDF 第 100 页）](./assets/p100-visual-006.png)

我们得出结论，具有域 <img src="./assets/p100-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.584em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的元组同构 <img src="./assets/p100-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p100-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.929em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的置换之间存在一一对应关系

示例 3.1.3.4（投影）。假设 <img src="./assets/p100-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个形状，并且假设

![原文公式、图示或代码（PDF 第 100 页）](./assets/p100-visual-008.png)

是某个子集。让

![原文公式、图示或代码（PDF 第 100 页）](./assets/p100-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 100 页原页](./assets/page-100.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.1.3 Examples

In this section, we introduce some important families of tuple morphisms, and describe the flat layouts to which they give rise.

Example 3.1.3.1 (Identity morphisms). We say a tuple morphism f is an identity morphism if f = idS for some tuple S. If f = idS is an identity morphism, then Lf is the column-major layout with shape S. For instance, here is an example of an identity morphism f together with its associated layout Lf.

Example 3.1.3.2 (Isomorphisms). A tuple morphism f : S →T is an isomorphism if there is a tuple morphism g : T →S such that g ◦f = idS and f ◦g = idT . If f is an isomorphism, then its associated layout Lf is compact. For instance, here is an isomorphism f together with its associated layout Lf.

Observation 3.1.3.3. Note that if a tuple morphism

is an isomorphism, then α : ⟨m⟩∗→⟨m⟩∗is a bijection, and so α |⟨m⟩∈Σm is a permutation. Conversely, if σ ∈Σm is a permutation, and (s1, . . . , sm) is a tuple of positive integers, then we may construct the isomorphism

We conclude that there is a one-to-one correspondence between tuple isomorphisms f with domain (s1, . . . , sm), and permutations in Σm.

Example 3.1.3.4 (Projections). Suppose S = (s1, . . . , sm) is a shape, and suppose

is some subset. Let</pre>

</details>

<a id="translation-06-tuple-pdf-第-101-页-·-原书第-99-页"></a>

### PDF 第 101 页 · 原书第 99 页
<a id="pdf-page-101"></a>

是位于映射 <img src="./assets/p101-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射

j，当 x = iⱼ 时；∗，其他情形。

我们将 <img src="./assets/p101-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 称为 <img src="./assets/p101-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.307em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在 <img src="./assets/p101-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.295em;width:5.834em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的投影 <img src="./assets/p101-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局是

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-003.png)

其中

si₁ ··· siⱼ₋₁，当存在 1 ≤ j ≤ r 使得 i = iⱼ 时；

否则为 0。

例如，以下是 <img src="./assets/p101-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.272em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 到 <img src="./assets/p101-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.168em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的投影 <img src="./assets/p101-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其关联布局。

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-007.png)

示例 3.1.3.5（膨胀）。假设 <img src="./assets/p101-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.700em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个形状，并且假设 <img src="./assets/p101-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.410em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是正整数。元组态射

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-008.png)

称为 <img src="./assets/p101-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.533em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对 <img src="./assets/p101-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.322em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的膨胀与此态射相关的布局 <img src="./assets/p101-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p101-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:14.166em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-009.png)

例如，下面给出按 (2, 4) 对 (512, 512) 进行的扩张 f，以及其关联布局。

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-010.png)

示例 3.1.3.6（扩展）。假设<img src="./assets/p101-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.272em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是一个正整数元组，假设<img src="./assets/p101-b028-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:5.109em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />使得<img src="./assets/p101-b028-m04.png" alt="原文数学符号" style="display:inline-block;height:1.601em;width:7.852em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />整除<img src="./assets/p101-b028-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />则元组态射

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-011.png)

称为 <img src="./assets/p101-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 到 <img src="./assets/p101-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的扩展 <img src="./assets/p101-b031-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.644em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局是形状为 <img src="./assets/p101-b031-m04.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:5.853em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的列主序布局例如，这里是 <img src="./assets/p101-b031-m05.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:4.670em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 到 <img src="./assets/p101-b031-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.550em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的扩展

![原文公式、图示或代码（PDF 第 101 页）](./assets/p101-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 101 页原页](./assets/page-101.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">be the tuple morphism lying over the map α with

j x = ij ∗ else.

We call p the projection of (s1, . . . , sm) onto (si1, . . . , sir). The layout encoded by p is

where

si1 · · · sij−1 i = ij for some 1 ≤j ≤r

0 otherwise.

For instance, here is a projection p of (64, 64, 3, 8) onto (64, 3), together with its associated layout.

Example 3.1.3.5 (Dilations). Suppose S = (s1, . . . , sm) is a shape, and suppose c1, . . . , cm are positive integers. The tuple morphism

is called the dilation of (s1, . . . , sm) by (c1, . . . , cm). The layout Lf associated to this morphism is Lf = (s1, . . . , sm) : (d1, . . . , dm), where

For instance, here is the dilation f of (512, 512) by (2, 4), together with its associated layout.

Example 3.1.3.6 (Expansions). Suppose S = (s1, . . . , sm) is a tuple of positive integers, and suppose 1 ≤i ≤m′, so that S′ = (s1, . . . , sm′) divides S. Then the tuple morphism

is called the expansion of S′ to S. The layout encoded by e is the column-major layout with shape (s1, . . . , sm′). For instance, here is the expansion of S′ = (4, 4) to S = (4, 4, 8, 8).</pre>

</details>

<a id="translation-06-tuple-pdf-第-102-页-·-原书第-100-页"></a>

### PDF 第 102 页 · 原书第 100 页
<a id="pdf-page-102"></a>

扩展的一个重要属性是，如果 <img src="./assets/p102-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何元组态射并且 <img src="./assets/p102-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:4.694em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是扩展，那么

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-001.png)

换言之，在 f 之后复合一个扩展态射，不改变 f 编码的布局。

示例 3.1.3.7（限制）。假设

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-003.png)

是一个元组态射，并且假设

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-004.png)

是索引的子集。然后是元组态射

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-005.png)

称为 <img src="./assets/p102-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对 <img src="./assets/p102-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.973em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的限制如果 <img src="./assets/p102-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局为

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-006.png)

那么<img src="./assets/p102-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.233em;width:1.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局是

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-007.png)

例如，这里是元组态射 <img src="./assets/p102-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的限制 <img src="./assets/p102-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.233em;width:1.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p102-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.737em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-008.png)

例 3.1.3.8（分量包含映射）。前一构造的一个重要特例如下。如果 f : (s₁, …, sₘ) → (t₁, …, tₘ) 是元组态射，且 1 ≤ i ≤ m，那么 f 的第 i 个分量 fᵢ 为

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-009.png)

如果<img src="./assets/p102-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局是

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-010.png)

那么<img src="./assets/p102-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.950em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局是

![原文公式、图示或代码（PDF 第 102 页）](./assets/p102-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 102 页原页](./assets/page-102.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">An important property of expansions is that if f : S →T is any tuple morphism and e : T →T ′ is an expansion, then

In other words, post-composing f with an expansion does not change the layout encoded by f.

Example 3.1.3.7 (Restrictions). Suppose

is a tuple morphism, and suppose

is a subset of indices. Then the tuple morphism

is called the restriction of f to I. If the layout encoded by f is

then the layout encoded by f |I is

For instance, here is the restriction f |I of a tuple morphism f, where I = {2, 4}.

Example 3.1.3.8 (Entry inclusions). An important special case of the previous construction is as follows. If f : (s1, . . . , sm) →(t1, . . . , tm) is a tuple morphism and 1 ≤i ≤m, then the ith entry fi of f is

If the layout encoded by f is

then the layout encoded by fi is</pre>

</details>

<a id="translation-06-tuple-pdf-第-103-页-·-原书第-101-页"></a>

### PDF 第 103 页 · 原书第 101 页
<a id="pdf-page-103"></a>

例如，这是一个元组态射 <img src="./assets/p103-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其第四个分量 <img src="./assets/p103-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:1.392em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-001.png)

注记 3.1.3.9。给定 ⟨n⟩∗ ∈ Fin∗，对每个 i ∈ ⟨n⟩，都有一个态射 φᵢ : ⟨1⟩∗ → ⟨n⟩∗，它将

<img src="./assets/p103-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.726em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p103-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.831em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于位于 <img src="./assets/p103-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:7.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的元组态射 <img src="./assets/p103-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.943em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，第 <img src="./assets/p103-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分量位于复合 <img src="./assets/p103-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:8.964em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上

示例 3.1.3.10（因式分解）。假设

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-004.png)

是一个元组态射，并且假设

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-005.png)

为满足 Image(α) ⊆ J ∪ {∗} 的子集。将映射 k ↦ jₖ 记为 ι : ⟨ℓ⟩∗ → ⟨n⟩∗，则存在唯一的映射 ᾱ : ⟨m⟩∗ → ⟨ℓ⟩∗，使得 α = ι ◦ ᾱ。我们将 f 经 J 的分解定义为下列元组态射：

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-006.png)

如果<img src="./assets/p103-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局是

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-007.png)

那么<img src="./assets/p103-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局是

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-008.png)

其中

![原文公式、图示或代码（PDF 第 103 页）](./assets/p103-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 103 页原页](./assets/page-103.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">For instance, here is a tuple morphism f, and its fourth entry f4.

Remark 3.1.3.9. Given an ⟨n⟩∗∈Fin∗, there is a morphism φi : ⟨1⟩∗→⟨n⟩∗for each i ∈⟨n⟩sending

∗7→∗and 1 7→i. For a tuple morphism f : (s1, . . . , sm) →(t1, . . . , tn) lying over α : ⟨m⟩∗→⟨n⟩∗, the i-th entry lies over the composite α ◦φi : ⟨1⟩∗→⟨n⟩∗.

Example 3.1.3.10 (Factorizations). Suppose

is a tuple morphism, and suppose

is a subset such that Image(α) ⊆J ∪{∗}. If we write ι : ⟨ℓ⟩∗→⟨n⟩∗for the map k 7→jk, then α factors as α = ι ◦¯α for a unique map ¯α : ⟨m⟩∗→⟨ℓ⟩∗, and we define the factorization of f through J to be the tuple morphism

If the layout encoded by f is

then the layout encoded by f |J is

where</pre>

</details>

<a id="translation-06-tuple-pdf-第-104-页-·-原书第-102-页"></a>

### PDF 第 104 页 · 原书第 102 页
<a id="pdf-page-104"></a>

例如，这里是元组态射 <img src="./assets/p104-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的因式分解 <img src="./assets/p104-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p104-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.810em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 104 页）](./assets/p104-visual-001.png)

备注 3.1.3.11. 因式分解有范畴论解释。借用记号

例 3.1.3.10，我们可以观察到，存在一个位于 <img src="./assets/p104-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.810em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的元组态射 <img src="./assets/p104-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.301em;width:12.795em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p104-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.769em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p104-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 沿 <img src="./assets/p104-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.800em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拉回：

![原文公式、图示或代码（PDF 第 104 页）](./assets/p104-visual-003.png)

<a id="paper-section-3-1-4"></a>

<a id="translation-06-tuple-_3-1-4-元组态射的具象化"></a>

#### 3.1.4 元组态射的具象化

正如我们所看到的，元组态射 <img src="./assets/p104-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.899em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码平坦布局 <img src="./assets/p104-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.657em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在本节中，我们将构造一个具象化函子

![原文公式、图示或代码（PDF 第 104 页）](./assets/p104-visual-005.png)

这使得这种编码变得明确。具象化函子 <img src="./assets/p104-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.378em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 将元组态射 <img src="./assets/p104-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 发送到 <img src="./assets/p104-b020-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.657em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数 <img src="./assets/p104-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.329em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为了构造我们的具象化函子 <img src="./assets/p104-b020-m05.png" alt="原文数学符号" style="display:inline-block;height:1.142em;width:1.756em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们首先构造一个辅助函子

![原文公式、图示或代码（PDF 第 104 页）](./assets/p104-visual-006.png)

我们将在我们的构造中使用它。

构造 3.1.4.1. 我们定义一个函子

![原文公式、图示或代码（PDF 第 104 页）](./assets/p104-visual-008.png)

如下。

• 对于<img src="./assets/p104-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.978em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的对象<img src="./assets/p104-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们定义

![原文公式、图示或代码（PDF 第 104 页）](./assets/p104-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 104 页原页](./assets/page-104.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">For instance, here is the factorization f |J of a tuple morphism f, where J = {2, 4, 5}.

Remark 3.1.3.11. There is a categorical interpretation of factorizations. Borrowing the notation of

Example 3.1.3.10, we may observe that there is a tuple morphism i : (tj1, . . . , tjℓ) →(t1, . . . , tn) lying over ι, and f |J is the pullback of f along i:

3.1.4 Realization of tuple morphisms

As we have seen, a tuple morphism f : S →T encodes a flat layout Lf. In this section, we will construct a realization functor

which makes this encoding explicit. The realization functor | · | sends a tuple morphism f to the layout function |f| of Lf. In order to construct our realization functor | · |, we first construct an auxiliary functor

which we will use in our construction.

Construction 3.1.4.1. We define a functor

as follows.

• For an object S = (s1, . . . , sm) in Tuple, we define</pre>

</details>

<a id="translation-06-tuple-pdf-第-105-页-·-原书第-103-页"></a>

### PDF 第 105 页 · 原书第 103 页
<a id="pdf-page-105"></a>

• 对于 `Tuple` 中的态射 <img src="./assets/p105-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.254em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p105-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.103em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上，我们将 <img src="./assets/p105-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.447em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为映射

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-001.png)

由下式给出：

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-002.png)

其中

xᵢ，当存在 1 ≤ i ≤ m 使得 α(i) = j 时；

0，其他情形。

人们可以很容易地验证 <img src="./assets/p105-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.607em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p105-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.837em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此 <img src="./assets/p105-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 实际上是一个函子。

示例 3.1.4.2. 假设 <img src="./assets/p105-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p105-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.640em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射那么

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-007.png)

由下式给出

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-008.png)

示例 3.1.4.3. 假设 <img src="./assets/p105-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:15.903em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p105-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.497em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射那么

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-009.png)

由下式给出

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-010.png)

构造 3.1.4.4. 我们定义一个函子

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-011.png)

如下。

• 对于<img src="./assets/p105-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.978em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的对象<img src="./assets/p105-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们定义

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-013.png)

• 对于元组态射 <img src="./assets/p105-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们定义

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-014.png)

（回顾定义 <img src="./assets/p105-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:4.166em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

如果 <img src="./assets/p105-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p105-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.472em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合元组态射，那么

![原文公式、图示或代码（PDF 第 105 页）](./assets/p105-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 105 页原页](./assets/page-105.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">• For a morphism f : (s1, . . . , sm) →(t1, . . . , tn) in Tuple lying over α, we define Ff to be the map

given by

where

xi there exists 1 ≤i ≤m with α(i) = j,

0 else.

One may easily verify that F(g ◦f) = Fg ◦Ff and FidS = idF S, so F is in fact a functor.

Example 3.1.4.2. Suppose f : (4, 4) →(4, 4, 4) is the tuple morphism lying over α = (1, 3). Then

is given by

Example 3.1.4.3. Suppose g : (3, 256, 256, 512) →(3, 256, 256) is the tuple morphism lying over β = (∗, 3, 2, ∗). Then

is given by

Construction 3.1.4.4. We define a functor

as follows.

• For an object S = (s1, . . . , sm) in Tuple, we define

• For a tuple morphism f : S →T, we define

(recall Definition 2.1.2.18).

If f : S →T and g : T →U are composable tuple morphisms then</pre>

</details>

<a id="translation-06-tuple-pdf-第-106-页-·-原书第-104-页"></a>

### PDF 第 106 页 · 原书第 104 页
<a id="pdf-page-106"></a>

如果 <img src="./assets/p106-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.346em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是恒等态射，那么

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-001.png)

所以 <img src="./assets/p106-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.454em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 实际上指定了一个函子。接下来，我们观察到，对于 <img src="./assets/p106-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.974em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的态射 <img src="./assets/p106-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，映射 <img src="./assets/p106-b005-m04.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.329em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p106-b005-m05.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.650em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数。这使我们能够轻松推断出 `Tuple` 中态射的复合与平坦布局的复合兼容（参见推论 <img src="./assets/p106-b005-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:3.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

引理 3.1.4.5. 如果 <img src="./assets/p106-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.400em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则 <img src="./assets/p106-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的具象化 <img src="./assets/p106-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.329em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 就是 <img src="./assets/p106-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.680em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-003.png)

证明。设 <img src="./assets/p106-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:14.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并设

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-004.png)

表示与 <img src="./assets/p106-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 关联的布局，其步长 <img src="./assets/p106-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.980em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由以下公式定义

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-005.png)

其余情形取上式所示的乘积。

在输入端与余字典序同构预复合后，

只需证明，对于任意 (x₁, …, xₘ) ∈ ∏ᵢ₌₁ᵐ [0, sᵢ)，

都有下式成立：

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-009.png)

对一般的输入 (x₁, …, xₘ) ∈ ∏ᵢ₌₁ᵐ [0, sᵢ)，

有

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-011.png)

其中，当 <img src="./assets/p106-b023-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.012em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 时，<img src="./assets/p106-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:0.998em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 等于 <img src="./assets/p106-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.031em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，否则等于 0。由此可得：

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-012.png)

所证即得。

推论 3.1.4.6. 如果 <img src="./assets/p106-b035-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p106-b035-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化可复合元组态射，则

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-014.png)

证明。假设 <img src="./assets/p106-b037-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.533em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p106-b037-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.600em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 `Tuple` 中的态射，分别位于 <img src="./assets/p106-b037-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p106-b037-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.079em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上。写入 <img src="./assets/p106-b037-m06.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p106-b037-m07.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.204em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们需要检查

![原文公式、图示或代码（PDF 第 106 页）](./assets/p106-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 106 页原页](./assets/page-106.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">and if f = idS is an identity morphism, then

so | · | does in fact specify a functor. Next, we observe that for a morphism f in Tuple, the map |f| is the layout function of Lf. This allows us to easily deduce that composition of morphisms in Tuple is compatible with composition of flat layouts (see Corollary 3.1.4.6).

Lemma 3.1.4.5. If f : S →T is a tuple morphism, then the realization |f| of f is the layout function of Lf:

Proof. Let S = (s1, . . . , sm), T = (t1, . . . , tn), and let

denote the layout associated to f, whose strides di are defined by the formula

j&lt;α(i) tj else.

By precomposing with colexS : Qm

i=1[0, si) →[0, size(S)), it suffices to prove that for any (x1, . . . , xm) ∈ Qm

i=1[0, si), we have

For a general input (x1, . . . , xm) ∈Qm

i=1[0, si), we have

where yj is equal to xi if α(i) = j, and 0 otherwise. It follows that

as desired.

Corollary 3.1.4.6. If f and g are non-degenerate composable tuple morphisms, then

Proof. Suppose f : S →T and g : T →U are morphisms in Tuple lying over α and β, respectively. Write S = (s1, . . . , sm) and T = (t1, . . . , tn). We need to check that</pre>

</details>

---

<a id="translation-07-tuple-operations-第-3-1-节-元组态射上的运算"></a>

## 第 3.1 节：元组态射上的运算
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-07-tuple-operations-pdf-第-107-页-·-原书第-105-页"></a>

### PDF 第 107 页 · 原书第 105 页
<a id="pdf-page-107"></a>

<img src="./assets/p107-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:6.605em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p107-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.787em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 这成立，因为 <img src="./assets/p107-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:2.068em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的形状都等于 <img src="./assets/p107-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p107-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.341em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 合并在 <img src="./assets/p107-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.794em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上这是成立的，因为元组态射 <img src="./assets/p107-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.120em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，因此布局 <img src="./assets/p107-b001-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.473em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 也是非退化的

<img src="./assets/p107-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.679em;width:11.371em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p107-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:0.900em;width:1.067em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> ：使用引理 3.1.4.5, 我们有

![原文公式、图示或代码（PDF 第 107 页）](./assets/p107-visual-003.png)

并通过包含 <img src="./assets/p107-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:7.073em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行后复合并观察 <img src="./assets/p107-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:8.145em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，结果如下。

![原文公式、图示或代码（PDF 第 107 页）](./assets/p107-visual-004.png)

<a id="paper-section-3-1-5"></a>

<a id="translation-07-tuple-operations-_3-1-5-元组态射上的运算"></a>

#### 3.1.5 元组态射上的运算

接下来建立“元组态射代数”，其中包含合并、补态射、复合、平坦除法和平坦乘积等运算。将证明，这些运算分别

与平坦布局上的相应操作兼容。

3.1.5.1 和

元组态射 <img src="./assets/p107-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的和 <img src="./assets/p107-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.465em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是通过拼接 <img src="./assets/p107-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b013-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.972em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的域和陪域得到的。为了精确地定义这个运算，我们首先在 <img src="./assets/p107-b013-m06.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:2.337em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中定义一个对应的态射运算

定义 3.1.5.1. 假设 <img src="./assets/p107-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:7.089em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:6.573em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p107-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:2.336em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的态射我们定义 <img src="./assets/p107-b014-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b014-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的和为态射

![原文公式、图示或代码（PDF 第 107 页）](./assets/p107-visual-010.png)

由下式给出：

![原文公式、图示或代码（PDF 第 107 页）](./assets/p107-visual-011.png)

这一运算满足结合律，因此对 Fin∗ 中任意有限多个态射 α₁, …, αₖ，都可以考虑其和 α₁ ⊕ ··· ⊕ αₖ。

备注 3.1.5.2. 如果 <img src="./assets/p107-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的保基点映射，则 <img src="./assets/p107-b024-m04.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.602em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的。

现在我们可以定义 <img src="./assets/p107-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.978em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的态射之和

定义 3.1.5.3. 假设 <img src="./assets/p107-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.682em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b026-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.717em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分别是位于 <img src="./assets/p107-b026-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b026-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.079em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射。我们将 <img src="./assets/p107-b026-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p107-b026-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的和定义为元组态射

![原文公式、图示或代码（PDF 第 107 页）](./assets/p107-visual-015.png)

它位于 α ⊕ β 之上。这一运算满足结合律，因此对 Tuple 中任意有限多个态射 f₁, …, fₖ，都可以考虑其和 f₁ ⊕ ··· ⊕ fₖ。

![原文公式、图示或代码（PDF 第 107 页）](./assets/p107-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 107 页原页](./assets/page-107.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">1. shape(Lg◦f) refines shape(Lf): This holds since the shape of Lf and Lg◦f are both equal to S.

2. Lg◦f is coalesced over shape(Lf): This holds since the tuple morphism g ◦f is non-degenerate, hence so is the layout Lg◦f.

3. ΦLg◦f = ΦLg ◦Φsize(Lg) Lf : Using Lemma 3.1.4.5, we have

and by postcomposing with the inclusion [0, size(U)) ⊂Z, and observing that size(T) = size(Lg), the result follows.

3.1.5 Operations on tuple morphisms

Our next goal is to develop an “algebra of tuple morphisms”, which includes operations such as coalesce, complement, composition, flat division, and flat products. We will prove that each of these operations

is compatible with a corresponding operation on flat layouts.

3.1.5.1 Sum

The sum f ⊕g of tuple morphisms f and g is obtained by concatenating the domains and codomains of f and g. In order to define this operations precisely, we first define a corresponding operation on morphisms in Fin∗.

Definition 3.1.5.1. Suppose α : ⟨m⟩∗→⟨n⟩∗and β : ⟨p⟩∗→⟨q⟩∗are morphisms in Fin∗. We define the sum of α and β to be the morphism

given by

This operation is associative, so we can consider the sum α1 ⊕· · · ⊕αk for any finite collection of morphisms α1, . . . , αk in Fin∗.

Remark 3.1.5.2. If α and β are tractable pointed maps, then α ⊕β is tractable.

Now we can define the sum of morphisms in Tuple.

Definition 3.1.5.3. Suppose f : S →T and g : U →V are tuple morphisms lying over α and β, respectively. We define the sum of f and g to be the tuple morphism

lying over α ⊕β. This operation is associative, so we can consider the sum f1 ⊕· · · ⊕fk for any finite collection of morphisms f1, . . . , fk in Tuple.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-108-页-·-原书第-106-页"></a>

### PDF 第 108 页 · 原书第 106 页
<a id="pdf-page-108"></a>

示例 3.1.5.4. 以下是元组态射 <img src="./assets/p108-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p108-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之和 <img src="./assets/p108-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.468em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的示例

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-001.png)

示例 3.1.5.5. 下面是元组态射 <img src="./assets/p108-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p108-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之和 <img src="./assets/p108-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.468em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的另一个示例

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-002.png)

备注 3.1.5.6. 元组态射之和有一个范畴论解释：如果 <img src="./assets/p108-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.400em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

<img src="./assets/p108-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.441em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，那么

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-004.png)

是箭头范畴 $\operatorname{Ar}(\mathrm{Tuple})$ 中 $f$ 与 $g$ 的余积。

3.1.5.2 挤压

通常情况下，我们希望从元组中删除整数 1 的任何实例。这是通过挤压函子来完成的。

定义 3.1.5.7. 我们定义一个函子

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-008.png)

如下。如果 <img src="./assets/p108-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p108-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.978em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中的一个对象，我们定义

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-009.png)

其中 $\{i_1<\cdots<i_k\}\subset\langle m\rangle$ 是满足 $s_{i_j}\ne1$ 的那些指标。若 $f:(s_1,\ldots,s_m)\to(t_1,\ldots,t_n)$ 是元组态射，则定义

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-010.png)

是元组态射

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-011.png)

其中 <img src="./assets/p108-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.233em;width:1.681em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p108-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的限制

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-012.png)

其中的限制见定义 3.1.3.7，而 $(f|_I)|_J$ 是 $f|_I$ 经由下列对象得到的分解：

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-013.png)

如定义 3.1.3.10.

![原文公式、图示或代码（PDF 第 108 页）](./assets/p108-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 108 页原页](./assets/page-108.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.5.4. Here is an example of the sum f ⊕g of tuple morphisms f and g.

Example 3.1.5.5. Here is another example of the sum f ⊕g of tuple morphisms f and g.

Remark 3.1.5.6. There is a categorical interpretation of the sum of tuple morphisms: if f : S →T and

g : U →V are tuple morphisms, then

is the coproduct of f and g in the arrow category Ar(Tuple).

3.1.5.2 Squeeze

It is often the case that we want to remove any instances of the integer 1 from our tuples. This is accomplished by the squeeze functor.

Definition 3.1.5.7. We define a functor

as follows. If S = (s1, . . . , sm) is an object in Tuple, we define

where {i1 &lt; · · · &lt; ik} ⊂⟨m⟩are the indices with sij̸ = 1. If f : (s1, . . . , sm) →(t1, . . . , tn) is a tuple morphism, we define

to be the tuple morphism

where f |I is the restriction of f to

as in Definition 3.1.3.7, and where (f |I) |J is be the factorization of f |I through

as in Definition 3.1.3.10.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-109-页-·-原书第-107-页"></a>

### PDF 第 109 页 · 原书第 107 页
<a id="pdf-page-109"></a>

示例 3.1.5.8. 下面是态射 <img src="./assets/p109-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和相应态射 <img src="./assets/p109-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.987em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的示例

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-001.png)

示例 3.1.5.9. 如果 <img src="./assets/p109-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.979em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则

$f=\operatorname{squeeze}(f)$ 当且仅当所有 $s_i$、$t_j$ 均不等于 $1$。

命题 3.1.5.10. 如果 <img src="./assets/p109-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-004.png)

证明。假设 <img src="./assets/p109-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.194em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，令

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-005.png)

是与 <img src="./assets/p109-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.057em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 关联的平坦布局令 <img src="./assets/p109-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:11.996em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示 <img src="./assets/p109-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.391em;width:3.518em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的索引子集那么

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-006.png)

令<img src="./assets/p109-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:12.027em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示<img src="./assets/p109-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.391em;width:3.709em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的索引子集，使得<img src="./assets/p109-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:10.072em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 令<img src="./assets/p109-b012-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示<img src="./assets/p109-b012-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.723em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 所在的映射。然后

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-007.png)

其中

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-008.png)

因为对任意 $\ell\notin J$，都有 $t_\ell=1$。于是得到

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-009.png)

观察 3.1.5.11. 如果 <img src="./assets/p109-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-010.png)

是幂等函子。

![原文公式、图示或代码（PDF 第 109 页）](./assets/p109-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 109 页原页](./assets/page-109.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.5.8. Here is an example of a morphism f and the corresponding morphism squeeze(f).

Example 3.1.5.9. If f : (s1, . . . , sm) →(t1, . . . , tn) is a tuple morphism, then

f = squeeze(f) ⇔ no si, tj is equal to 1.

Proposition 3.1.5.10. If f is a tuple morphism, then

Proof. Suppose f : (s1, . . . , sm) →(t1, . . . , tm) is a tuple morphism, and let

be the flat layout associated to f. Let I = {i1 &lt; · · · &lt; im′} ⊂⟨m⟩denote the subset of indices with sik̸ = 1. Then

Let J = {j1 &lt; · · · &lt; jn′} ⊂⟨n⟩denote the subset of indices with tjk̸ = 1, so that squeeze(f) = (f |I) |J. Let β denote the map over which squeeze(f) lies. Then

where

since tℓ= 1 for any ℓ/∈J. We conclude that

Observation 3.1.5.11. If f is a tuple morphism, then

is an idempotent functor.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-110-页-·-原书第-108-页"></a>

### PDF 第 110 页 · 原书第 108 页
<a id="pdf-page-110"></a>

3.1.5.3 排序

排序运算 $f\mapsto\operatorname{sort}(f)$ 对 $f$ 的定义域作置换，使所得态射满足下面定义的“已排序”条件。

定义 3.1.5.12. 对于元组态射

![原文公式、图示或代码（PDF 第 110 页）](./assets/p110-visual-003.png)

若对任意 $1\le i,j\le m$，以下条件均成立，就称其为已排序的：

1. 如果 <img src="./assets/p110-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.254em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p110-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.596em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

2. 如果 <img src="./assets/p110-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.254em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p110-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.262em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p110-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.176em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p110-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.471em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

3. 如果 <img src="./assets/p110-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.254em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p110-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.262em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p110-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.176em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> <img src="./assets/p110-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.428em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 3.1.5.13. 态射 <img src="./assets/p110-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:2.935em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p110-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.065em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如下所示

![原文公式、图示或代码（PDF 第 110 页）](./assets/p110-visual-008.png)

已排序，态射 <img src="./assets/p110-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:2.910em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p110-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如下所示

![原文公式、图示或代码（PDF 第 110 页）](./assets/p110-visual-009.png)

没有排序。态射 <img src="./assets/p110-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:2.910em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p110-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分别违反条件 3, 1, 和 2,。

命题 3.1.5.14. 如果 <img src="./assets/p110-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是排序元组态射，则平坦布局 <img src="./assets/p110-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是排序的。

证明。假设

![原文公式、图示或代码（PDF 第 110 页）](./assets/p110-visual-012.png)

已排序，并考虑布局

![原文公式、图示或代码（PDF 第 110 页）](./assets/p110-visual-013.png)

假设 <img src="./assets/p110-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.812em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们想要表明 <img src="./assets/p110-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:4.489em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或 <img src="./assets/p110-b019-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.152em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p110-b019-m04.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.386em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 有两种情况需要考虑。

• （案例 <img src="./assets/p110-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.083em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p110-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.165em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p110-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.250em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p110-b020-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.940em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p110-b020-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.976em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且由于 <img src="./assets/p110-b020-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序，我们有 <img src="./assets/p110-b020-m07.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.391em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p110-b020-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.758em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p110-b020-m09.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:8.147em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 110 页）](./assets/p110-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 110 页原页](./assets/page-110.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.1.5.3 Sort

The sort operation f 7→sort(f) permutes the domain of f so that the resulting morphism is sorted, in the following sense.

Definition 3.1.5.12. We say a tuple morphism

is sorted if for any 1 ≤i, j ≤m, the following conditions hold.

1. If α(i) = ∗̸ = α(j), then i &lt; j.

2. If α(i) = ∗= α(j), then i ≤j ⇒ si ≤sj.

3. If α(i)̸ = ∗̸ = α(j), then i ≤j ⇒ α(i) ≤α(j).

Example 3.1.5.13. The morphisms f1, f2, and f3 shown below

are sorted, while the morphisms g1, g2, and g3 shown below

are not sorted. The morphisms g1, g2, and g3 violate conditions 3, 1, and 2, respectively.

Proposition 3.1.5.14. If f is a sorted tuple morphism, then the flat layout Lf is sorted.

Proof. Suppose

is sorted, and consider the layout

Suppose 1 ≤i &lt; m. We want to show that di &lt; di+1, or di = di+1 and si ≤si+1. There are two cases to consider.

• (Case 1) Suppose that α(i) = ∗, so that di = 0. If α(i + 1) = ∗, then di+1 = 0 and since f is sorted we have si ≤si+1. If α(i + 1)̸ = ∗, then di+1 ≥1 &gt; 0 = di.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-111-页-·-原书第-109-页"></a>

### PDF 第 111 页 · 原书第 109 页
<a id="pdf-page-111"></a>

• (案例 <img src="./assets/p111-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.066em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p111-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.043em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在这种情况下 <img src="./assets/p111-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.481em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p111-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.019em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-001.png)

其中仅当 <img src="./assets/p111-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.316em;width:6.243em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 时相等才成立，这意味着 <img src="./assets/p111-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.391em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

我们得出结论 <img src="./assets/p111-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序。

接下来，我们在 <img src="./assets/p111-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.269em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上定义 <img src="./assets/p111-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.561em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 操作。如果 <img src="./assets/p111-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.967em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则通过将 <img src="./assets/p111-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与适当的置换 <img src="./assets/p111-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.968em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行预复合来获得 <img src="./assets/p111-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.381em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

构造 3.1.5.15. 假设

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-005.png)

是元组态射。我们如下定义置换 $\sigma\in\Sigma_m$。令

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-006.png)

于是 $\langle m\rangle$ 是 $P$ 与 $Q$ 的不交并。在 $P$ 上定义线性序：当下列条件之一成立时，规定 $i_1\preceq_P i_2$：

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-007.png)

<img src="./assets/p111-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.385em;width:5.057em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p111-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:3.366em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

在 $Q$ 上定义线性序：当 $\alpha(i_1)\le\alpha(i_2)$ 时，规定 $j_1\preceq_Q j_2$。再如下定义 $\langle m\rangle$ 上的线性序：〔校注：本句原文的 $i_1,i_2$ 与正在比较的 $j_1,j_2$ 不一致，应读作 $\alpha(j_1)\le\alpha(j_2)$。〕

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-009.png)

<img src="./assets/p111-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.100em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p111-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:3.252em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p111-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:5.333em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p111-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:4.030em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或

<img src="./assets/p111-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:5.482em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p111-b023-m02.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:4.043em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

令 $\sigma$ 为 $\langle m\rangle$ 上线性序 $\preceq$ 对应的置换，$\sigma^{-1}$ 为其逆。保基点映射 $\sigma^{-1}_*:\langle m\rangle_*\to\langle m\rangle_*$ 由下列元组态射覆盖：



![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-014.png)

我们定义 <img src="./assets/p111-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.103em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为复合

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-015.png)

示例 3.1.5.16. 显示了示例 3.1.5.13 的态射 <img src="./assets/p111-b029-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:2.975em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p111-b029-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的排序

![原文公式、图示或代码（PDF 第 111 页）](./assets/p111-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 111 页原页](./assets/page-111.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">• (Case 2) Suppose that α(i)̸ = ∗, in which case α(i + 1)̸ = ∗and α(i) &lt; α(i + 1). Then

where equality holds only if si = tα(i) = 1, which implies si ≤si+1.

We conclude that Lf is sorted.

Next, we define our sort(−) operation on Tuple. If f is a tuple morphism, then sort(f) will be obtained by precomposing f with an appropriate permutation g.

Construction 3.1.5.15. Suppose

is a tuple morphism. We define a permutation σ ∈Σm as follows. Set

so ⟨m⟩is the disjoint union of P and Q. We define a linear ordering of P by i1 ⪯P i2 if

2. si1 = si2 and i1 ≤i2.

We define a linear ordering on Q by j1 ⪯Q j2 if α(i1) ≤α(i2). We define a linear ordering on ⟨m⟩by

1. i1 ∈P and i2 ∈Q,

2. i1, i2 ∈P and i1 ⪯P i2, or

3. i1, i2 ∈Q and i1 ⪯Q i2.

Let σ be permutation associated to the linear ordering ⪯of ⟨m⟩, and let σ−1 be its inverse. The map σ−1

∗ : ⟨m⟩∗→⟨m⟩∗is covered by a tuple morphism

and we define sort(f) to be the composite

Example 3.1.5.16. The sortings of the morphisms g1, g2, and g3 of Example 3.1.5.13 are shown</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-112-页-·-原书第-110-页"></a>

### PDF 第 112 页 · 原书第 110 页
<a id="pdf-page-112"></a>

下面。

![原文公式、图示或代码（PDF 第 112 页）](./assets/p112-visual-001.png)

引理 3.1.5.17. 假设 <img src="./assets/p112-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.400em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射。那么 <img src="./assets/p112-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被排序当且仅当 <img src="./assets/p112-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.295em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

证明。排序运算的构造保证：对任意元组态射 $f$，$\operatorname{sort}(f)$ 都是已排序的。因此，若 $f=\operatorname{sort}(f)$，则 $f$ 已排序。反之，若 $f$ 已排序，则构造 3.1.5.15 中的 $\sigma\in\Sigma_m$ 为恒等置换，故 $g=\operatorname{id}_S$，从而

![原文公式、图示或代码（PDF 第 112 页）](./assets/p112-visual-003.png)

命题 3.1.5.18. 如果 <img src="./assets/p112-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则

![原文公式、图示或代码（PDF 第 112 页）](./assets/p112-visual-004.png)

证明。沿用构造 3.1.5.15 的记号，有 $\operatorname{sort}(f)=f\circ g$，其中

![原文公式、图示或代码（PDF 第 112 页）](./assets/p112-visual-005.png)

位于保基点映射 $\sigma^{-1}_*:\langle m\rangle_*\to\langle m\rangle_*$ 之上。若 $L_f=(s_1,\ldots,s_m):(d_1,\ldots,d_m)$，则



![原文公式、图示或代码（PDF 第 112 页）](./assets/p112-visual-007.png)

由于 $L_{\operatorname{sort}(f)}$ 的模态是 $L_f$ 的模态的一个置换，只需证明前者已排序。设 $1\le i<m$。先设 $\sigma^{-1}(i)\in P$，于是 $d'_i=d_{\sigma^{-1}(i)}=0$。若 $\sigma^{-1}(i+1)\in P$，则 $d'_{i+1}=d_{\sigma^{-1}(i+1)}=0$。由 $\sigma$ 的构造，$s'_i=s_{\sigma^{-1}(i)}\le s_{\sigma^{-1}(i+1)}=s'_{i+1}$。若 $\sigma^{-1}(i+1)\in Q$，则 $d'_{i+1}=d_{\sigma^{-1}(i+1)}>0=d'_i$。再设 $\sigma^{-1}(i)\in Q$。由 $\sigma$ 的构造，$\sigma^{-1}(i+1)\in Q$ 且 $\alpha(\sigma^{-1}(i))<\alpha(\sigma^{-1}(i+1))$，因此









![原文公式、图示或代码（PDF 第 112 页）](./assets/p112-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 112 页原页](./assets/page-112.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">below.

Lemma 3.1.5.17. Suppose f : S →T is a tuple morphism. Then f is sorted if and only if sort(f) = f.

Proof. Our construction of sort(−) guarantees that sort(f) is sorted for any tuple morphism f. In particular, if f = sort(f), then f is sorted. Conversely, if f is sorted, then the permutation σ ∈Σm from Construction 3.1.5.15 is the identity permutation, so g = idS, and so

Proposition 3.1.5.18. If f is a tuple morphism, then

Proof. Borrowing our notation form Construction 3.1.5.15, we have sort(f) = f ◦g where

lies over σ−1

∗ : ⟨m⟩∗→⟨m⟩∗. If Lf = (s1, . . . , sm) : (d1, . . . , dm), then

Since the modes of Lsort(f) are a permutation of the modes of Lf, it suffices to prove that Lsort(f) is sorted. Suppose 1 ≤i &lt; m. Suppose first that σ−1(i) ∈P, so that d′

i = dσ−1(i) = 0. If σ−1(i + 1) ∈P, then d′

i+1 = dσ−1(i+1) = 0. By construction of σ, we have s′

i+1. If instead σ−1(i + 1) ∈Q, then d′

i. Suppose next that σ−1(i) ∈Q. Then by construction of σ, we have σ−1(i + 1) ∈Q and α(σ−1(i)) &lt; α(σ−1(i + 1)), and we have</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-113-页-·-原书第-111-页"></a>

### PDF 第 113 页 · 原书第 111 页
<a id="pdf-page-113"></a>

其中等号成立当且仅当 $t_{\alpha(\sigma^{-1}(i))}=\cdots=t_{\alpha(\sigma^{-1}(i+1))-1}=1$。特别地，$s'_i=s_{\sigma^{-1}(i)}=t_{\alpha(\sigma^{-1}(i))}=1$，故 $s'_i\le s'_{i+1}$。于是 $L_{\operatorname{sort}(f)}$ 已排序，从而 $L_{\operatorname{sort}(f)}=\operatorname{sort}(L_f)$。〔校注：原文本句第一次出现的 $s_i$ 缺少撇号，应为 $s'_i$。〕



备注 3.1.5.19. 运算 $\operatorname{sort}(-)$ 不具有函子性。例如，考虑以下元组态射：



![原文完整对应图（PDF 第 113 页）](./assets/p113-b004-complete-diagram.png)

$f$ 与 $g$ 可复合，且 $g\circ f=\operatorname{id}_{(25,10)}$，但以下排序后的态射〔校注：本例首幅图的 $f:(2,3)\to(3,2)$ 与 $g:(10,25)\to(25,10)$ 实际不可复合，与这句话及后图不一致。若按后图及所述恒等态射理解，首幅 $f$ 应为 $(25,10)\to(10,25)$ 的交换态射；原图保持不改。〕



![原文完整对应图（PDF 第 113 页）](./assets/p113-b009-complete-diagram.png)

不可复合。

3.1.5.4 合并

我们首先介绍合并元组态射的概念。

定义 3.1.5.20. 假设 <img src="./assets/p113-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p113-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.098em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的元组态射我们说 <img src="./assets/p113-b016-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是合并的，如果

<img src="./assets/p113-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.066em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

2. 对于任何 <img src="./assets/p113-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.592em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 恰好满足以下条件之一：

![原文公式、图示或代码（PDF 第 113 页）](./assets/p113-visual-012.png)

(d) $\alpha(i)<\alpha(i+1)$，且存在满足 $\alpha(i)<j<\alpha(i+1)$ 的 $j$，使得 $t_j>1$。

例 3.1.5.21. 若存在 $1\le i<\operatorname{len}(S)$ 使 $\alpha(i+1)=\alpha(i)+1$，则 $f$ 不是已合并的。

备注 3.1.5.22. 设元组态射 $f:S\to T$ 满足 $f=\operatorname{squeeze}(f)$。则 $f$ 已合并，当且仅当对任意 $1\le i<\operatorname{len}(S)$，以下条件之一成立：



![原文公式、图示或代码（PDF 第 113 页）](./assets/p113-visual-016.png)

示例 3.1.5.23. 态射

![原文公式、图示或代码（PDF 第 113 页）](./assets/p113-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 113 页原页](./assets/page-113.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">where equality holds if and only if tα(σ−1(i)) = · · · = tα(σ−1(i+1))−1 = 1. In particular, we have si = sσ−1(i) = tα(σ−1(i)) = 1, and so s′

i+1. We conclude that Lsort(f) is sorted, so Lsort(f) = sort(Lf).

Remark 3.1.5.19. The operation sort(−) is not functorial. For example, consider the tuple morphisms

(2, 3) (3, 2) and (10, 25) (25, 10) f

Then f and g are composable with g ◦f = id(25,10), but the sorted morphisms

(10, 25) (10, 25) and (25, 10) (25, 10) sort(f)

are not composable.

3.1.5.4 Coalesce

We begin by introducing the notion of a coalesced tuple morphism.

Definition 3.1.5.20. Suppose f : S →T is a tuple morphism lying over α. We say f is coalesced if

1. S = squeeze(S) and

2. for any 1 ≤i &lt; len(S), exactly one of the following conditions holds:

(d) α(i) &lt; α(i + 1), and there exists α(i) &lt; j &lt; α(i + 1) with tj &gt; 1.

Example 3.1.5.21. If there exists some 1 ≤i &lt; len(S) with α(i + 1) = α(i) + 1, then f is not coalesced.

Remark 3.1.5.22. If f : S →T is a tuple morphism such that f = squeeze(f), then f is coalesced if

and only if for any 1 ≤i &lt; len(S), one of the following conditions holds:

Example 3.1.5.23. The morphisms</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-114-页-·-原书第-112-页"></a>

### PDF 第 114 页 · 原书第 112 页
<a id="pdf-page-114"></a>

被合并，而态射

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-001.png)

没有合并。

命题 3.1.5.24. 假设 <img src="./assets/p114-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射。然后，当且仅当 <img src="./assets/p114-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并时，<img src="./assets/p114-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 才被合并。

证明。假设 <img src="./assets/p114-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.979em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，令

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-004.png)

是<img src="./assets/p114-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局

首先假设 <img src="./assets/p114-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已合并。那么 <img src="./assets/p114-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:10.237em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中没有分量等于 1. 假设 <img src="./assets/p114-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们想证明 <img src="./assets/p114-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.779em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 不等于 <img src="./assets/p114-b007-m06.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:2.316em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p114-b007-m07.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.134em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p114-b007-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.043em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-006.png)

但是，由于我们假定 <img src="./assets/p114-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已合并，有 <img src="./assets/p114-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.848em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此 <img src="./assets/p114-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.334em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。如果 <img src="./assets/p114-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.184em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么 <img src="./assets/p114-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.063em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。如果 <img src="./assets/p114-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.794em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么 <img src="./assets/p114-b010-m07.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:4.160em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，故 <img src="./assets/p114-b010-m08.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.306em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。如果 <img src="./assets/p114-b010-m09.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.055em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么 <img src="./assets/p114-b010-m10.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.498em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />；又因为 <img src="./assets/p114-b010-m11.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.083em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，有 <img src="./assets/p114-b010-m12.png" alt="原文数学符号" style="display:inline-block;height:1.304em;width:5.293em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。最后，如果 <img src="./assets/p114-b010-m13.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.019em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，那么：

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-007.png)

我们得出的结论是 <img src="./assets/p114-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已合并。

接下来假设布局 <img src="./assets/p114-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.518em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已合并。那么 <img src="./assets/p114-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:9.960em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中没有分量等于 1。假设 <img src="./assets/p114-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p114-b027-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.018em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p114-b027-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.113em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且由于 <img src="./assets/p114-b027-m06.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，我们必须有 <img src="./assets/p114-b027-m07.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:7.089em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 因此 <img src="./assets/p114-b027-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.683em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p114-b027-m09.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.006em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和<img src="./assets/p114-b027-m10.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.944em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由于 <img src="./assets/p114-b027-m11.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，我们有 <img src="./assets/p114-b027-m12.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:5.272em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 但如果我们写

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-009.png)

和

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-010.png)

这意味着 $\prod_{\alpha(i)<j<\alpha(i+1)}t_j\ne1$。特别地，存在 $\alpha(i)<j<\alpha(i+1)$ 使得 $t_j>1$。于是 $f$ 已合并。



接下来，我们定义元组态射上的 <img src="./assets/p114-b039-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.388em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 操作。

![原文公式、图示或代码（PDF 第 114 页）](./assets/p114-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 114 页原页](./assets/page-114.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">are coalesced, while the morphisms

are not coalesced.

Proposition 3.1.5.24. Suppose f is a tuple morphism. Then f is coalesced if and only if Lf is coalesced.

Proof. Suppose f : (s1, . . . , sm) →(t1, . . . , tn) is a tuple morphism, and let

be the layout encoded by f.

Suppose first that f is coalesced. Then no entry of shape(Lf) = domain(f) is equal to 1. Suppose 1 ≤i &lt; m. We want to show that sidi is not equal to di+1. If di = 0, then α(i) = ∗, and we have

but by our assumption that f is coalesced, we have α(i + 1)̸ = ∗, hence sidi̸ = di+1. If di̸ = 0, then α(i)̸ = ∗. If α(i + 1) = ∗, then di+1 = 0, so sidi̸ = di+1. If α(i + 1) &lt; α(i), then di ≥di+1, and since si̸ = 1, we have sidi &gt; di+1. Finally, if α(i) &lt; α(i + 1), then

We conclude that Lf is coalesced.

Suppose next that the layout Lf is coalesced. Then no entry in domain(f) = shape(Lf) is equal to 1. Suppose 1 ≤i &lt; m. If α(i) = ∗, then di = 0, and since Lf is coalesced, we must have di+1̸ = sidi = 0, hence α(i + 1)̸ = ∗. Suppose α(i)̸ = ∗, and α(i) &lt; α(i + 1). Since Lf is coalesced, we have sidi̸ = di+1. But if we write

and

this implies that Q

α(i)&lt;j&lt;α(i+1) tj̸ = 1. In particular, there exists some α(i) &lt; j &lt; α(i+1) with tj &gt; 1. We conclude that f is coalesced.

Next, we define our coal(−) operation on tuple morphisms.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-115-页-·-原书第-113-页"></a>

### PDF 第 115 页 · 原书第 113 页
<a id="pdf-page-115"></a>

构造 3.1.5.25. 假设 <img src="./assets/p115-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射。我们定义态射 <img src="./assets/p115-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.208em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如下：

1. 首先，令 $g=\operatorname{squeeze}(f)$，并以 $\beta:\langle m\rangle_*\to\langle n\rangle_*$ 表示 $g$ 所在的保基点映射。

2. 接下来，我们在 <img src="./assets/p115-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.830em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上定义一个等价关系 <img src="./assets/p115-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.955em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p115-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.424em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果

(a) <img src="./assets/p115-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:4.250em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 用于 <img src="./assets/p115-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.511em;width:4.932em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 或

(b) <img src="./assets/p115-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.511em;width:9.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为 <img src="./assets/p115-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.511em;width:4.932em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

在商 $\langle m\rangle/{\sim}$ 上，按 $i_1\le i_2$ 时 $[i_1]\le[i_2]$ 定义次序。因此可将该商与 $\langle\bar m\rangle$ 视为同一对象，其中 $\bar m$ 是该商的大小。

3. 接下来，在 <img src="./assets/p115-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.553em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上定义一个等价关系 <img src="./assets/p115-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.955em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，其中 <img src="./assets/p115-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.672em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果存在 <img src="./assets/p115-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:3.391em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，使得

![原文公式、图示或代码（PDF 第 115 页）](./assets/p115-visual-007.png)

对所有 $j\le j''\le j'$ 均成立。在商 $\langle n\rangle/{\sim}$ 上，按 $j_1\le j_2$ 时 $[j_1]\le[j_2]$ 定义次序。因此可将该商与 $\langle\bar n\rangle$ 视为同一对象，其中 $\bar n$ 是该商的大小。

4. 注意到映射 $\beta:\langle m\rangle_*\to\langle n\rangle_*$ 在商上诱导出映射

![原文公式、图示或代码（PDF 第 115 页）](./assets/p115-visual-009.png)

由 <img src="./assets/p115-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.418em;width:6.371em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 给出

5. <img src="./assets/p115-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.208em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的域 <img src="./assets/p115-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.492em;width:7.303em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 通过设置定义

![原文公式、图示或代码（PDF 第 115 页）](./assets/p115-visual-011.png)

其中 $i\in\langle\bar m\rangle$ 对应于等价类 $I\in\langle m\rangle/{\sim}$。$\operatorname{coal}(f)$ 的陪域 $\bar T=(\bar t_1,\ldots,\bar t_{\bar n})$ 定义为

![原文公式、图示或代码（PDF 第 115 页）](./assets/p115-visual-012.png)

如果 <img src="./assets/p115-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.238em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对应于等价类 <img src="./assets/p115-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.245em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们然后定义

![原文公式、图示或代码（PDF 第 115 页）](./assets/p115-visual-013.png)

是 <img src="./assets/p115-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.418em;width:1.073em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射

示例 3.1.5.26. 下面是元组态射 <img src="./assets/p115-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和合并态射 <img src="./assets/p115-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.485em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的示例

![原文公式、图示或代码（PDF 第 115 页）](./assets/p115-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 115 页原页](./assets/page-115.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Construction 3.1.5.25. Suppose f is a tuple morphism. We define a morphism coal(f) as follows:

1. First, we set g = squeeze(f), and we write β : ⟨m⟩∗→⟨n⟩∗for the map over which g lies.

2. Next, we define an equivalence relation ∼on ⟨m⟩where i ∼i′ if either

(a) β(i′′) = ∗for i ≤i′′ ≤i′, or

(b) β(i′′) = β(i) + (i′′ −i) for i ≤i′′ ≤i′.

The quotient ⟨m⟩/ ∼is ordered by [i1] ≤[i2] if i1 ≤i2, so we can identify this quotient with ⟨¯m⟩ where ¯m is the size of ⟨m⟩/ ∼.

3. Next, define an equivalence relation ∼on ⟨n⟩where j ∼j′ if there exists i ∈⟨m⟩such that

for all j ≤j′′ ≤j′. The quotient ⟨n⟩/ ∼is ordered by [j1] ≤[j2] if j1 ≤j2, so we can identify this quotient with ⟨¯n⟩where ¯n is the size of ⟨n⟩/ ∼.

4. Next, we observe that the map β : ⟨m⟩∗→⟨n⟩∗descends to a map

given by ¯β([i]) = [β(i)].

5. The domain ¯S = (¯s1, . . . , ¯s ¯m) of coal(f) is defined by setting

if i ∈⟨¯m⟩corresponds to the equivalence class I ∈⟨m⟩/ ∼. The codomain ¯T = (¯t1, . . . , ¯t¯n) of coal(f) is defined by setting

if j ∈⟨¯n⟩corresponds to the equivalence class J ∈⟨n⟩/ ∼. We then define

to be the tuple morphism lying over ¯β.

Example 3.1.5.26. Here is an example of a tuple morphism f and the coalesced morphism coal(f).</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-116-页-·-原书第-114-页"></a>

### PDF 第 116 页 · 原书第 114 页
<a id="pdf-page-116"></a>

示例 3.1.5.27. 我们可以按如下方式合并示例 3.1.5.8 的态射 <img src="./assets/p116-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 116 页）](./assets/p116-visual-001.png)

命题 3.1.5.28. 如果 <img src="./assets/p116-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是元组态射，则

<img src="./assets/p116-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:4.521em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 被合并，并且

![原文公式、图示或代码（PDF 第 116 页）](./assets/p116-visual-003.png)

证明。先证明 $\operatorname{coal}(f)$ 已合并。这由构造直接可得：应用 $\operatorname{squeeze}$ 去除了所有等于 $1$ 的模态，而取商将所有满足 $\alpha(i+1)=\alpha(i)+1$ 的相邻模态合并了。

接下来证明 $L_{\operatorname{coal}(f)}=\operatorname{coal}(L_f)$。根据命题 2.1.4.18 和 3.1.5.24，只需证明 $\Phi_{\operatorname{coal}(f)}=\Phi_f$。对 $f$ 应用 $\operatorname{squeeze}(-)$ 显然不影响所关联的布局函数，因此只需说明构造中的取商也不改变该函数。这个商可逐步形成，每一步合并满足 $\alpha(i)=*=\alpha(i+1)$ 或 $\alpha(i+1)=\alpha(i)+1$ 的相邻模态。它们分别对应于将 $s_i,s_{i+1}:0,0$ 替换成 $s_is_{i+1}:0$，以及将 $s_i,s_{i+1}:d_i,s_id_i$ 替换成 $s_is_{i+1}:d_i$。两种操作都不改变布局函数，故 $\Phi_{L_{\operatorname{coal}(f)}}=\Phi_{\operatorname{coal}(L_f)}$，得证。〔校注：本段前半的 $\Phi_f$ 是关联布局函数 $\Phi_{L_f}$ 的简写。〕

3.1.5.5 拼接

接下来，我们将定义元组态射的拼接操作。该操作可以在满足“不相交”条件的元组态射上执行，我们在下面指定。

定义 3.1.5.29. 假设 <img src="./assets/p116-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:7.094em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p116-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:6.695em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p116-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.211em;width:2.010em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中具有相同陪域的态射。我们说 <img src="./assets/p116-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p116-b010-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像，如果

![原文公式、图示或代码（PDF 第 116 页）](./assets/p116-visual-008.png)

构造 3.1.5.30. 如果 <img src="./assets/p116-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:7.084em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p116-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:6.685em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 有不相交的像，那么我们有一个明确定义的态射

![原文公式、图示或代码（PDF 第 116 页）](./assets/p116-visual-009.png)

由下式给出：

![原文公式、图示或代码（PDF 第 116 页）](./assets/p116-visual-010.png)

此运算满足结合律，因此对 $\mathrm{Fin}_*$ 中像两两不交的任意一组态射 $\alpha_1,\ldots,\alpha_k$，均可构造 $\alpha_1\star\cdots\star\alpha_k$。

![原文公式、图示或代码（PDF 第 116 页）](./assets/p116-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 116 页原页](./assets/page-116.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.5.27. We can coalesce the morphism f of Example 3.1.5.8 as follows

Proposition 3.1.5.28. If f is a tuple morphism, then

1. coal(f) is coalesced, and

Proof. First, we will argue that coal(f) is coalesced. This is immediate from our construction, since applying squeeze eliminates all modes equal to 1, and passing to the quotient in our construction consolidated all adjacent modes with α(i + 1) = α(i) + 1.

Next, we will prove that Lcoal(f) = coal(Lf). In light of Proposition 2.1.4.18 and Proposition 3.1.5.24, it suffices to prove that Φcoal(f) = Φf. Certainly applying squeeze(−) to f has no impact on the associated layout function, so we need to argue that passing to the quotient in our construction does not change the layout function of the associated layout. This follows from the fact that forming our quotient can be formed in steps, where in each step we combine adjacent modes with either α(i) = ∗= α(i + 1), or α(i + 1) = α(i) + 1. These correspond to replacing adjacent modes of the form si, si+1 : 0, 0 with sisi+1 : 0, and si, si+1 : di, sidi with sisi+1 : di, respectively. Neither such operation changes the layout function of a layout, and so we conclude that ΦLcoal(f) = Φcoal(Lf ), as desired.

3.1.5.5 Concatenate

Next, we will define a concatenation operation on tuple morphisms. This operation may be performed on tuple morphisms satisfying a “disjointness” condition, which we specify below.

Definition 3.1.5.29. Suppose α : ⟨m⟩∗→⟨n⟩∗and β : ⟨p⟩∗→⟨n⟩∗are morphisms in Fin∗with the same codomain. We say α and β have disjoint images if

Construction 3.1.5.30. If α : ⟨m⟩∗→⟨n⟩∗and β : ⟨p⟩∗→⟨n⟩∗have disjoint images, then we have a well-defined morphism

given by

This operation is associative, so we can consider α1 ⋆· · ·⋆αk for any collection of morphisms α1, . . . , αk in Fin∗with pairwise disjoint images.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-117-页-·-原书第-115-页"></a>

### PDF 第 117 页 · 原书第 115 页
<a id="pdf-page-117"></a>

备注 3.1.5.31. 如果 <img src="./assets/p117-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的保基点映射，并且 <img src="./assets/p117-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像，则 <img src="./assets/p117-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.326em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

是可处理的。

定义 3.1.5.32. 假设

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-003.png)

和

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-004.png)

分别是 <img src="./assets/p117-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.079em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射。如果态射 <img src="./assets/p117-b006-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b006-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交像，我们就说 <img src="./assets/p117-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b006-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交像。

示例 3.1.5.33. 考虑如下所示的元组态射 <img src="./assets/p117-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.172em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.754em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-006.png)

那么<img src="./assets/p117-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p117-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />有不相交的像，而<img src="./assets/p117-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.754em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p117-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />没有不相交的像。

构造 3.1.5.34. 假设

<img src="./assets/p117-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.821em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.442em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

分别是位于 <img src="./assets/p117-b013-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.113em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.068em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的元组态射，并且 <img src="./assets/p117-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.964em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像。我们将 <img src="./assets/p117-b013-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p117-b013-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接定义为态射

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-010.png)

位于 $\alpha\star\beta$ 之上。此运算满足结合律，所以对像两两不交的任意有限组态射 $f_i$，均可构造 $f_1\star\cdots\star f_k$。

例 3.1.5.35. 若 $f,g$ 为例 3.1.5.33 中的 Tuple 态射，则它们的拼接为下图所示态射。

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-012.png)

示例 3.1.5.36。假设 <img src="./assets/p117-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.740em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> ) 是一个元组态射，对于任何 1 <img src="./assets/p117-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.321em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-013.png)

表示 <img src="./assets/p117-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p117-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分量，如示例 3.1.3.8. 那么我们可以写

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-014.png)

作为其分量的拼接。

![原文公式、图示或代码（PDF 第 117 页）](./assets/p117-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 117 页原页](./assets/page-117.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Remark 3.1.5.31. If α and β are tractable pointed maps and α and β have disjoint images, then α ⋆β

is tractable.

Definition 3.1.5.32. Suppose

and

are tuple morphisms lying over α and β, respectively. We say f and g have disjoint images if the morphisms α and β have disjoint images.

Example 3.1.5.33. Consider the tuple morphisms f, g, and h shown below.

Then f and g have disjoint images, while h and g do not have disjoint images.

Construction 3.1.5.34. Suppose

f : S →T, and g : U →T

are tuple morphisms lying over α and β, respectively, and that f and g have disjoint images. We define the concatenation of f and g to be the morphism

lying over α ⋆β. This operation is associative, so we can consider f1 · · · fk for any finite collection of morphisms fi with pairwise disjoint images.

Example 3.1.5.35. If f and g are the morphisms in Tuple from Example 3.1.5.33, then the concate- nation of f and g is the morphism shown below.

Example 3.1.5.36. Suppose f : (s1, . . . , sm) →(t1, . . . , tn) is a tuple morphism, and for any 1 ≤i ≤m, let

denote the ith entry of f, as in Example 3.1.3.8. Then we can write

as the concatenation of its entries.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-118-页-·-原书第-116-页"></a>

### PDF 第 118 页 · 原书第 116 页
<a id="pdf-page-118"></a>

引理 3.1.5.37. 假设 <img src="./assets/p118-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:5.139em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p118-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:5.139em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有不相交像的元组态射。如果 <img src="./assets/p118-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.472em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任意元组态射，则

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-001.png)

证明。假设 <img src="./assets/p118-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:3.091em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p118-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 分别位于 <img src="./assets/p118-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:17.566em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p118-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.888em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上。所讨论的两个映射具有相同的域和相同的陪域，因此足以证明

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-002.png)

我们计算

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-003.png)

命题 3.1.5.38. 假设 <img src="./assets/p118-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.240em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 `Tuple` 中具有相同陪域且具有成对不相交像的态射。那么布局 <img src="./assets/p118-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.283em;width:5.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 满足

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-004.png)

证明。首先，我们证明 <img src="./assets/p118-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.834em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的结果假设

<img src="./assets/p118-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.754em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p118-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.805em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

有不相交的像，并写

$L_f=(s_1,\ldots,s_m):(d_1,\ldots,d_m)$，以及 $L_g=(u_1,\ldots,u_p):(d'_1,\ldots,d'_p)$。

那么布局 <img src="./assets/p118-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:2.121em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由下式给出

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-009.png)

其中

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-010.png)

这总结了当 <img src="./assets/p118-b045-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.838em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 时结果的证明。 一般情况来自元组态射拼接的结合性和平坦布局拼接的结合性。

![原文公式、图示或代码（PDF 第 118 页）](./assets/p118-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 118 页原页](./assets/page-118.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Lemma 3.1.5.37. Suppose f1 : S1 →T and f2 : S2 →T are tuple morphisms with disjoint images. If g : T →U is any tuple morphism, then

Proof. Suppose f1, f2, and g lie over α1 : ⟨m1⟩∗→⟨n⟩, α2 : ⟨m2⟩∗→⟨n⟩, and β : ⟨n⟩→⟨p⟩, respectively. The two maps in question have the same domains and the same codomains, so it suffices to prove that

We compute

Proposition 3.1.5.38. Suppose f1, . . . , fk are morphisms in Tuple with the same codomain and with pairwise disjoint images. Then the layouts Lf1, . . . , Lfk satisfy

Proof. First, we prove the result for k = 2. Suppose

f = (s1, . . . , sm) →(t1, . . . , tn), and g : (u1, . . . , up) →(t1, . . . , tn)

have disjoint images, and write

Lf = (s1, . . . , sm) : (d1, . . . , dm), and Lg = (u1, . . . , up) : (d′

Then the layout Lf⋆g is given by

where

This concludes the proof of the result when k = 2. The general case follows from the associativity of concatenation of tuple morphisms, and the associativity of concatenation of flat layouts.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-119-页-·-原书第-117-页"></a>

### PDF 第 119 页 · 原书第 117 页
<a id="pdf-page-119"></a>

3.1.5.6 补

我们首先定义互补元组态射的概念。

定义 3.1.5.39. 设 $f:S\to T$ 与 $g:U\to T$ 是元组态射。若满足以下条件，就称 $g$ 为 $f$ 的一个补态射：

<img src="./assets/p119-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.941em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p119-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像，并且

2. 拼接 $f\star g:S\star U\to T$

是同构。

示例 3.1.5.40. 如果 <img src="./assets/p119-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p119-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是如下所示的态射

![原文公式、图示或代码（PDF 第 119 页）](./assets/p119-visual-007.png)

则 $g$ 是 $f$ 的一个补态射。

示例 3.1.5.41. 如果 <img src="./assets/p119-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是如下所示的态射

![原文公式、图示或代码（PDF 第 119 页）](./assets/p119-visual-009.png)

则 $f$ 不存在补态射。

接下来，我们证明互补元组态射会产生互补平坦布局。

命题 3.1.5.42. 若 $f:S\to T$ 是元组态射，且 $g$ 是 $f$ 的补态射，则 $L_g$ 是 $L_f$ 的一个 $\operatorname{size}(T)$-补布局。

证明。写<img src="./assets/p119-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:14.301em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p119-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:14.836em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 首先，我们注意到

![原文公式、图示或代码（PDF 第 119 页）](./assets/p119-visual-013.png)

接下来，我们注意到 <img src="./assets/p119-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:2.191em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是同构，因此也是

![原文公式、图示或代码（PDF 第 119 页）](./assets/p119-visual-014.png)

这里使用了引理 3.1.4.5 对 $\Phi_{L_{f\star g}}^{\operatorname{size}(T)}$ 的刻画。



![原文公式、图示或代码（PDF 第 119 页）](./assets/p119-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 119 页原页](./assets/page-119.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.1.5.6 Complement

We begin by defining the notion of complementary tuple morphisms.

Definition 3.1.5.39. Suppose f : S →T and g : U →T are tuple morphisms. We say g is a complement of f if

1. f and g have disjoint images, and

2. the concatenation f ⋆g : S ⋆U T ∼ =

is an isomorphism.

Example 3.1.5.40. If f and g are the morphisms shown below

then g is a complement of f.

Example 3.1.5.41. If f is the morphism shown below

then f does not admit a complement.

Next, we prove that complementary tuple morphisms give rise to complementary flat layouts.

Proposition 3.1.5.42. If f : S →T is a tuple morphism and g is a complement of f, then Lg is a size(T)-complement of Lf.

Proof. Write S = domain(f), U = domain(g), and T = codomain(f) = codomain(g). First, we note that

Next, we note that f ⋆g is an isomorphism, hence so is

where we have used the identification of Φsize(T )

Lf⋆g of Lemma 3.1.4.5.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-120-页-·-原书第-118-页"></a>

### PDF 第 120 页 · 原书第 118 页
<a id="pdf-page-120"></a>

命题 3.1.5.43. 如果 <img src="./assets/p120-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射元组态射，则

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-001.png)

证明。由命题 3.1.5.42，$L_{f^c}$ 是 $L_f$ 的一个 $\operatorname{size}(T)$-补布局。由于 $f^c$ 已排序，$L_{f^c}$ 也已排序。由命题 2.1.6.33，得到

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-002.png)

因为这两个布局都是 $L_f$ 的大小相同、已排序且已合并的平坦补布局。〔校注：一般的 $f^c$ 虽然已排序，却未必已合并；本句用于合并后的布局，不能据此断言任意补态射均已合并。〕

命题 3.1.5.44. 如果 <img src="./assets/p120-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:13.008em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是标准形式的单射元组态射，则

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-004.png)

证明。写

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-005.png)

表示 $f$ 编码的布局。由命题 3.1.5.42，$L_{f^c}$ 是 $L_f$ 的一个 $\operatorname{size}(T)$-补布局，其中

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-006.png)

通过构造，<img src="./assets/p120-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 已排序，因此 <img src="./assets/p120-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.020em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 也已排序。此外，由于 <img src="./assets/p120-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式，因此可以得出 <img src="./assets/p120-b012-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

是合并的。根据命题 2.1.6.23, 我们推断

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-008.png)

定义 3.1.5.45. 假设 <img src="./assets/p120-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p120-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:8.076em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的元组态射如果 <img src="./assets/p120-b015-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射的，我们说 <img src="./assets/p120-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补的。

构造3.1.5.46. 假设<img src="./assets/p120-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:12.942em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补元组态射。令 <img src="./assets/p120-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.299em;width:7.091em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示 <img src="./assets/p120-b016-m04.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.553em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 中不在 <img src="./assets/p120-b016-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.092em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的像中的索引的集合我们将 <img src="./assets/p120-b016-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的补定义为元组态射

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-010.png)

它位于映射 $\operatorname{complement}(\alpha):\langle n-m\rangle_*\to\langle n\rangle_*$ 之上，该映射由 $k\mapsto j_k$ 给出。由构造可见，$f^c$ 是定义 3.1.5.39 意义下 $f$ 的一个补态射。

例 3.1.5.47. 下图给出态射 $f$ 及其补态射 $f^c$ 的一个例子。

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-012.png)

命题 3.1.5.48. 若 $f$ 是元组态射，且 $g$ 是 $f$ 的补态射，则

![原文公式、图示或代码（PDF 第 120 页）](./assets/p120-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 120 页原页](./assets/page-120.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proposition 3.1.5.43. If f is an injective tuple morphism, then

Proof. By Proposition 3.1.5.42, we know that Lf c is a size(T)-complement of Lf. Since f c is sorted, so is Lf c and it follows from Proposition 2.1.6.33, it follows that

since both of these layouts are flat, sorted, coalesced complements of Lf of the same size.

Proposition 3.1.5.44. If f : (s1, . . . , sm) →(t1, . . . , tn) is an injective tuple morphism of standard form, then

Proof. Write

for the layout encoded by f. By Proposition 3.1.5.42, we know that Lf c is a size(T)-complement of Lf. Where

By construction, f c is sorted, hence so is Lf c. Moreover, since f has standard form, it follows that f c

is coalesced. By Proposition 2.1.6.23, we deduce that

Definition 3.1.5.45. Suppose f is a tuple morphism lying over α : ⟨m⟩∗→⟨n⟩∗. We say f is complementable if α is injective.

Construction 3.1.5.46. Suppose f : (s1, . . . , sm) →(t1, . . . , tn) is a complementable tuple morphism. Let j1 &lt; · · · &lt; jn−m denote the collection of indices in ⟨n⟩which are not in the image of α. We define the complement of f to be the tuple morphism

lying over the map complement(α) : ⟨n −m⟩∗→⟨n⟩∗given by k 7→jk. By construction, we may observe that f c is a complement of f, in the sense of Definition 3.1.5.39

Example 3.1.5.47. Below is an example of a morphism f and its complement f c.

Proposition 3.1.5.48. If f is a tuple morphism and g is a complement of f, then</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-121-页-·-原书第-119-页"></a>

### PDF 第 121 页 · 原书第 119 页
<a id="pdf-page-121"></a>

证明。假设 <img src="./assets/p121-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p121-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:11.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p121-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:9.281em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上，并且 <img src="./assets/p121-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p121-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.591em;width:9.638em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上，则 <img src="./assets/p121-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.744em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p121-b000-m07.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.177em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有相同像的递增映射，即

![原文公式、图示或代码（PDF 第 121 页）](./assets/p121-visual-001.png)

因此 <img src="./assets/p121-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.448em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p121-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:5.624em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

命题 3.1.5.49. 元组态射 $f$ 存在补态射，当且仅当它是定义 3.1.5.45 意义下可取补的。

证明。若 $f$ 所在的映射 $\alpha$ 不是单射，则对任意与 $f$ 具有不相交像的态射 $f^*$，

$f\star f^*$ 所在的映射也不是单射，因此 $f\star f^*$ 不是同构。反之，若 $f$ 所在的映射为单射，则构造 3.1.5.46 中的 $f^c$ 是 $f$ 的一个补态射。

命题 3.1.5.50. 如果 <img src="./assets/p121-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可取补元组态射，则

![原文公式、图示或代码（PDF 第 121 页）](./assets/p121-visual-006.png)

证明。两个映射都严格递增且为单射，并具有相同的像，因此它们相等。

3.1.5.7 平坦除法

在本节中，我们定义元组态射的除法运算。

定义 3.1.5.51. 设 $f,g$ 是元组态射。若 $g$ 与 $f$ 可复合，则称 $g$ 整除 $f$。换言之，

![原文公式、图示或代码（PDF 第 121 页）](./assets/p121-visual-010.png)

定义 3.1.5.52. 设 $g:S\to T$ 与 $f:T\to U$ 是元组态射。$f$ 除以 $g$ 的平坦除法定义为元组态射

![原文公式、图示或代码（PDF 第 121 页）](./assets/p121-visual-011.png)

示例 3.1.5.53. 下面是元组态射 <img src="./assets/p121-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p121-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其平坦商 <img src="./assets/p121-b015-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.153em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的示例

![原文公式、图示或代码（PDF 第 121 页）](./assets/p121-visual-012.png)

示例 3.1.5.54. 下面是元组态射 <img src="./assets/p121-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p121-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其平坦商 <img src="./assets/p121-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.153em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的示例

![原文公式、图示或代码（PDF 第 121 页）](./assets/p121-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 121 页原页](./assets/page-121.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Suppose f lies over α : ⟨m⟩∗→⟨n⟩∗, sort(g) lies over β : ⟨n −m⟩∗→⟨n⟩∗and f c lies over αc : ⟨n −m⟩∗→⟨n⟩∗. Then β and αc are increasing maps with the same image, namely

hence β = αc, and hence sort(g) = f c.

Proposition 3.1.5.49. Suppose f is a tuple morphism. Then f admits a complement if and only if f is complementable, in the sense of Definition 3.1.5.45.

Proof. If f lies over a map α which is not injective, then for any morphism f ∗such that f and f ∗

have disjoint images, the morphism f ⋆f ∗lies over a map which is not injective, hence f ⋆f ∗is not an isomorphism. Conversely, if f lies over an injective map, then the morphism f c of Construction 3.1.5.46 is a complement of f.

Proposition 3.1.5.50. If f is a complementable tuple morphism, then

Proof. Both maps are increasing, injective, and have the same image, so they are equal.

3.1.5.7 Flat division

In this section, we define a division operation on tuple morphisms.

Definition 3.1.5.51. If f and g are tuple morphisms, we say g divides f if g and f are composable. In other words,

Definition 3.1.5.52. Suppose g : S →T and f : T →U are tuple morphisms. The flat division of f by g is the tuple morphism

Example 3.1.5.53. Here is an example of tuple morphisms f and g together with their flat quotient f ⊘♭g.

Example 3.1.5.54. Here is an example of tuple morphisms f and g together with their flat quotient f ⊘♭g.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-122-页-·-原书第-120-页"></a>

### PDF 第 122 页 · 原书第 120 页
<a id="pdf-page-122"></a>

示例 3.1.5.55. 下面是元组态射 <img src="./assets/p122-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p122-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 及其平坦商 <img src="./assets/p122-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:3.153em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的示例

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-001.png)

命题 3.1.5.56. 如果 <img src="./assets/p122-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p122-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化可复合元组态射，则

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-002.png)

证明。根据命题 3.2.6.20,，我们有

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-003.png)

我们计算

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-004.png)

3.1.5.8 平坦乘积

在本节中，我们定义元组态射的乘积运算。

定义 3.1.5.57. 设 $f,g$ 是元组态射。若 $\operatorname{codomain}(g)=\operatorname{domain}(f^c)$，就称 $f,g$ 是乘积可容许的。在此条件下，定义 $f,g$ 的平坦乘积为

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-007.png)

示例 3.1.5.58. 如果 <img src="./assets/p122-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p122-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是如下所示的元组态射

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-008.png)

那么 <img src="./assets/p122-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p122-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是乘积可容许的，<img src="./assets/p122-b020-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.840em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是如下所示的元组态射。

![原文公式、图示或代码（PDF 第 122 页）](./assets/p122-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 122 页原页](./assets/page-122.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.5.55. Here is an example of tuple morphisms f and g together with their flat quotient f ⊘♭g.

Proposition 3.1.5.56. If f and g are non-degenerate composable tuple morphisms, then

Proof. By Proposition 3.2.6.20, we have

and we compute

3.1.5.8 Flat products

In this section we define a product operation on tuple morphisms.

Definition 3.1.5.57. Suppose f and g are tuple morphisms. We say f and g are product admissible if codomain(g) = domain(f c). If f and g are product admissible, then we define flat product of f and g to be

Example 3.1.5.58. If f and g are the tuple morphisms shown below

then f and g are product-admissible, and f ⊗♭g is the tuple morphism shown below.</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-123-页-·-原书第-121-页"></a>

### PDF 第 123 页 · 原书第 121 页
<a id="pdf-page-123"></a>

示例 3.1.5.59. 如果 <img src="./assets/p123-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p123-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是如下所示的元组态射

![原文公式、图示或代码（PDF 第 123 页）](./assets/p123-visual-001.png)

那么 <img src="./assets/p123-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p123-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是乘积可容许的，<img src="./assets/p123-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.840em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是如下所示的元组态射。

![原文公式、图示或代码（PDF 第 123 页）](./assets/p123-visual-002.png)

引理 3.1.5.60. 若 $f,g$ 乘积可容许，且 $g$ 为单射，则 $f\otimes^\flat g$ 为单射，并且

![原文公式、图示或代码（PDF 第 123 页）](./assets/p123-visual-003.png)

证明。元组态射 $(f\otimes^\flat g)^c$ 与 $f^c\circ g^c$ 均为单射且严格递增，并具有相同的陪域，故只需证明它们的像相同。$(f\otimes^\flat g)^c=(f\star(f^c\circ g))^c$ 的像由既不在 $f$ 的像中、也不在 $f^c\circ g$ 的像中的分量组成。$f^c$ 的像由不在 $f$ 的像中的分量组成，所以复合 $f^c\circ g^c$ 的像也由既不在 $f$ 的像中、也不在 $f^c\circ g$ 的像中的分量组成。





命题 3.1.5.61. 设 $f,g$ 乘积可容许，且 $g,h$ 乘积可容许，则

1. $f\otimes^\flat g$ 与 $h$ 乘积可容许，

2. $f$ 与 $g\otimes^\flat h$ 乘积可容许，且

![原文公式、图示或代码（PDF 第 123 页）](./assets/p123-visual-009.png)

证明。使用引理 3.1.5.37 和引理 3.1.5.60, 我们计算

![原文公式、图示或代码（PDF 第 123 页）](./assets/p123-visual-010.png)

命题 3.1.5.62. 设 $f,g$ 是非退化元组态射，且乘积可容许，则

![原文公式、图示或代码（PDF 第 123 页）](./assets/p123-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 123 页原页](./assets/page-123.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.1.5.59. If f and g are the tuple morphisms shown below

then f and g are product-admissible, and f ⊗♭g is the tuple morphism shown below.

Lemma 3.1.5.60. If f and g are product admissible and g is injective, then f ⊗♭g is injective and

Proof. The tuple morphisms (f ⊗♭g)c and f c ◦gc are injective, increasing, and have the same codomain, so it suffices to show that they have the same image. The image of (f ⊗♭g)c = (f ⋆(f c ◦g))c consists of those entries which are not in the image of f, and not in the image of f c ◦g. The image of f c

consists of those entries which are not in the image of f, and so the image of the composition f c ◦gc

consists of those entries which are not in the image of f, and not in the image of f c ◦g.

Proposition 3.1.5.61. Suppose f and g are product admissible, and g and h are product admissible. Then

1. f ⊗♭g and h are product admissible,

2. f and g ⊗♭h are product admissible, and

Proof. Using Lemma 3.1.5.37 and Lemma 3.1.5.60, we compute

Proposition 3.1.5.62. Suppose f and g are non-degenerate tuple morphisms and that f and g are product admissible. Then</pre>

</details>

<a id="translation-07-tuple-operations-pdf-第-124-页-·-原书第-122-页"></a>

### PDF 第 124 页 · 原书第 122 页
<a id="pdf-page-124"></a>

证明。设 $f:S\to T$ 与 $g:U\to V$ 乘积可容许，并令

![原文公式、图示或代码（PDF 第 124 页）](./assets/p124-visual-001.png)

由于 <img src="./assets/p124-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射的，并且 <img src="./assets/p124-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的陪域是 <img src="./assets/p124-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.458em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的域，因此可以得出：

![原文公式、图示或代码（PDF 第 124 页）](./assets/p124-visual-002.png)

利用这个事实，以及事实

![原文公式、图示或代码（PDF 第 124 页）](./assets/p124-visual-003.png)

我们有

![原文公式、图示或代码（PDF 第 124 页）](./assets/p124-visual-004.png)

利用这个事实，我们计算

![原文公式、图示或代码（PDF 第 124 页）](./assets/p124-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 124 页原页](./assets/page-124.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Suppose f : S →T and g : U →V are product admissible, and set

Since f is injective and the codomain of g is the domain of f c, it follows that

Using this fact, and the fact that

we have

Using this fact, we compute</pre>

</details>

---

<a id="translation-08-nest-第-3-2-节-nest-范畴与细化"></a>

## 第 3.2 节：Nest 范畴与细化
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-08-nest-pdf-第-125-页-·-原书第-123-页"></a>

### PDF 第 125 页 · 原书第 123 页
<a id="pdf-page-125"></a>

<a id="paper-section-3-2"></a>

<a id="translation-08-nest-_3-2-nest-范畴"></a>

#### 3.2 Nest 范畴

上一节介绍了 Tuple 范畴，其态射编码可处理平坦布局。本节介绍 Nest 范畴，其态射编码具有任意嵌套结构的可处理布局。

<a id="paper-section-3-2-1"></a>

<a id="translation-08-nest-_3-2-1-基本定义"></a>

#### 3.2.1 基本定义

回想一下，对于嵌套元组 <img src="./assets/p125-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.129em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，我们编写 <img src="./assets/p125-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.170em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 来展平 <img src="./assets/p125-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.129em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 例如，如果 <img src="./assets/p125-b003-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.937em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么 <img src="./assets/p125-b003-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:6.479em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

定义 3.2.1.1. 令 `Nest` 表示其对象是正整数嵌套元组的范畴，并且其中态射

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-005.png)

`Nest` 中由元组态射指定

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-006.png)

换句话说，

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-007.png)

具体而言，Nest 中的态射 $f:S\to T$ 由可处理的保基点映射 $\alpha:\langle\operatorname{len}(S)\rangle_*\to\langle\operatorname{len}(T)\rangle_*$ 给出，该映射满足以下条件：

• 如果 <img src="./assets/p125-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.317em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p125-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.043em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则 <img src="./assets/p125-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.334em;width:10.787em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

我们说这样的态射 <img src="./assets/p125-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p125-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.098em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上，并将 <img src="./assets/p125-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 称为嵌套元组态射。

符号 3.2.1.2. 如果 <img src="./assets/p125-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p125-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.098em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的嵌套元组态射，我们将 <img src="./assets/p125-b013-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 描述为

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-011.png)

示例 3.2.1.3. 以下是嵌套元组态射的一些示例。

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-012.png)

观察 3.2.1.4。如果 X 是集合，将 X 上的混沌范畴（indiscrete category）记为 Xᵢₙd。这个范畴的对象是 X 的元素，并且任意两个对象之间都存在唯一的（同构）态射。根据 Nest 的定义，我们有下列拉回方块：

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-013.png)

我们可以将其视为拉回方块 2.2.2.4 的范畴化。

![原文公式、图示或代码（PDF 第 125 页）](./assets/p125-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 125 页原页](./assets/page-125.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.2 The category Nest

In the previous section, we introduced a category Tuple, whose morphisms encode flat tractable layouts. In this section, we introduce a category Nest, whose morphisms encode tractable layouts with arbitrary nesting.

3.2.1 Basic definitions

Recall that for a nested tuple S, we write S♭for the flattening of S. For example, if S = (64, (8, 8)), then S♭= (64, 8, 8).

Definition 3.2.1.1. Let Nest denote the category whose objects are nested tuples of positive integers, and in which a morphism

in Nest is specified by a tuple morphism

In other words,

Explicitly, a morphism f : S →T in Nest is specified by a tractable pointed map α : ⟨len(S)⟩∗→ ⟨len(T)⟩∗satisfying the following property:

• If 1 ≤i ≤len(S) and α(i)̸ = ∗, then entryi(S) = entryα(i)(T).

We say such a morphism f lies over α, and refer to f as a nested tuple morphism.

Notation 3.2.1.2. If f : S →T is a nested tuple morphism which lies over α, we depict f as

Example 3.2.1.3. Here are some examples of nested tuple morphisms.

Observation 3.2.1.4. If X is a set, lets write Xind for the indiscrete category on X. This is the category whose objects are the elements of X, and in which there is a unique (iso)morphism between any two objects. Then by definition of Nest, we have a pullback square

We may view this as a categorification of the pullback square 2.2.2.4.</pre>

</details>

<a id="translation-08-nest-pdf-第-126-页-·-原书第-124-页"></a>

### PDF 第 126 页 · 原书第 124 页
<a id="pdf-page-126"></a>

示例 3.2.1.5. 假设 <img src="./assets/p126-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是长度为 <img src="./assets/p126-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.326em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组如果 <img src="./assets/p126-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.542em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则存在嵌套元组态射

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-001.png)

位于 <img src="./assets/p126-b002-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.891em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 给出的映射 <img src="./assets/p126-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.230em;width:5.558em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上例如，如果 <img src="./assets/p126-b002-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.721em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p126-b002-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.688em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么我们有一个嵌套元组态射

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-002.png)

示例 3.2.1.6. 假设 <img src="./assets/p126-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是秩为 <img src="./assets/p126-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.940em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组如果 <img src="./assets/p126-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.760em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 则存在规范嵌套元组态射

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-003.png)

位于 <img src="./assets/p126-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:7.752em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 给出的映射 <img src="./assets/p126-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:9.756em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 例如，如果 <img src="./assets/p126-b006-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.886em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么我们有一个嵌套元组态射

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-004.png)

观察 3.2.1.7. 有与范畴 `Nest` 和 <img src="./assets/p126-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.979em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相关的函子首先，有一个包含函子

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-005.png)

它将元组态射 <img src="./assets/p126-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.411em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 视为嵌套元组态射。接下来，有一个展平函子

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-006.png)

它将嵌套元组态射 $f:S\to T$ 映到其底层元组态射 $f^\flat:S^\flat\to T^\flat$。复合函子

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-007.png)

是 <img src="./assets/p126-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.268em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的恒等函子，因此 `Tuple` 是 <img src="./assets/p126-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.870em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的回缩子范畴。此外，这些函子形成范畴的伴随等价。

备注 3.2.1.8. 人们可能希望考虑某种范畴 `C`，其态射编码可处理

布局，但与 Tuple 不等价。作者考虑过几个这样的例子，留待未来研究。

<a id="paper-section-3-2-2"></a>

<a id="translation-08-nest-_3-2-2-从嵌套元组态射到布局"></a>

#### 3.2.2 从嵌套元组态射到布局

范畴 `Nest` 的关键特征是，如果 <img src="./assets/p126-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.406em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，则 <img src="./assets/p126-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码布局 <img src="./assets/p126-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.657em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。该布局是通过为平坦布局 <img src="./assets/p126-b018-m05.png" alt="原文数学符号" style="display:inline-block;height:1.301em;width:1.622em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 配备 <img src="./assets/p126-b018-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套轮廓来获得的。更准确地说，我们有以下构造。

构造 3.2.2.1. 假设

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-013.png)

是一个嵌套元组态射，假设 <img src="./assets/p126-b021-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.706em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义 <img src="./assets/p126-b021-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 为布局

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-014.png)

其中 $(-)_P$ 是定义 2.3.1.19 的 $P$-代入运算。称 $L_f$ 为 $f$ 所编码的布局。

![原文公式、图示或代码（PDF 第 126 页）](./assets/p126-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 126 页原页](./assets/page-126.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.1.5. Suppose S is a nested tuple of length m. If 1 ≤i ≤m then there is a nested tuple morphism

lying over the map ⟨1⟩∗→⟨m⟩∗given by 1 7→i. For instance, if S = (64, (8, 8)) and i = 1, then we have a nested tuple morphism

Example 3.2.1.6. Suppose S is a nested tuple of rank r. If 1 ≤i ≤r, then there is a canonical nested tuple morphism

lying over the map ⟨leni(S)⟩∗→⟨len(S)⟩∗given by j 7→j + len&lt;i(S). For instance, if S = (64, (8, 8)), then we have a nested tuple morphism

Observation 3.2.1.7. There are functors relating the categories Nest and Tuple. First, there is an inclusion functor

which considers a tuple morphism f : S →T as a nested tuple morphism. Next, there is a flattening functor

which sends a nested tuple morphism f : S →T to the underlying tuple morphism f ♭: S♭→T ♭. The composite

is the identity functor on Tuple, so Tuple is a retractive subcategory of Nest. Moreover, these functors form an adjoint equivalence of categories.

Remark 3.2.1.8. One might wish to consider some category C whose morphisms encode tractable

layouts, but which is not equivalent to Tuple. The authors have considered several such examples, but leave their investigation to future work.

3.2.2 From nested tuple morphisms to layouts

The key feature of the category Nest is that if f : S →T is a nested tuple morphism, then f encodes a layout Lf. This layout is obtained by equipping the flat layout Lf ♭with the nesting profile of S. More precisely, we have the following construction.

Construction 3.2.2.1. Suppose

is a nested tuple morphism, and suppose P = prof(S). We define Lf to be the layout

where (−)P is the P-substitution operation of Definition 2.3.1.19. We refer to Lf as the layout encoded by f.</pre>

</details>

<a id="translation-08-nest-pdf-第-127-页-·-原书第-125-页"></a>

### PDF 第 127 页 · 原书第 125 页
<a id="pdf-page-127"></a>

构造 3.2.2.2. 假设

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-001.png)

是一个嵌套元组态射。我们将 <img src="./assets/p127-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为其形状的布局

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-002.png)

是 <img src="./assets/p127-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的域，其步长

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-003.png)

具有由公式定义的分量

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-004.png)

我们将<img src="./assets/p127-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />称为<img src="./assets/p127-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.052em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />编码的布局

示例 3.2.2.3. 编码的布局

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-006.png)

示例 3.2.2.4. 编码的布局

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-007.png)

观察 3.2.2.5. 展平函子

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-008.png)

与布局展平兼容，因为如果 <img src="./assets/p127-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，则

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-009.png)

如果 <img src="./assets/p127-b026-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个可处理布局，那么我们可以构造一个嵌套元组态射，如下所示对 <img src="./assets/p127-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行编码。

构造 3.2.2.6. 假设 <img src="./assets/p127-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个可处理布局。我们将 <img src="./assets/p127-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示定义为嵌套元组态射

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-011.png)

其中，<img src="./assets/p127-b029-m01.png" alt="原文数学符号" style="display:inline-block;height:1.429em;width:5.076em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是其展平布局的标准表示，S = shape(L) 是 L 的形状，而 <img src="./assets/p127-b029-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.762em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p127-b029-m05.png" alt="原文数学符号" style="display:inline-block;height:1.319em;width:1.888em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的陪域。

![原文公式、图示或代码（PDF 第 127 页）](./assets/p127-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 127 页原页](./assets/page-127.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Construction 3.2.2.2. Suppose

is a nested tuple morphism. We define Lf to be the layout whose shape

is the domain of f, and whose stride

has entries defined by the formula

We refer to Lf as the layout encoded by f.

Example 3.2.2.3. The layout encoded by

Example 3.2.2.4. The layout encoded by

Observation 3.2.2.5. The flattening functor

is compatible with flattening of layouts, in that if f is a nested tuple morphism, then

If L is a tractable layout, then we can construct a nested tuple morphism which encodes L as follows.

Construction 3.2.2.6. Suppose L is a tractable layout. We define the standard representation of L to be the nested tuple morphism

where (fL)♭= fL♭is the standard representation of L♭, S = shape(L) is the shape of L, and T is the codomain of fL♭.</pre>

</details>

<a id="translation-08-nest-pdf-第-128-页-·-原书第-126-页"></a>

### PDF 第 128 页 · 原书第 126 页
<a id="pdf-page-128"></a>

示例 3.2.2.7. 如果

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-001.png)

那么 <img src="./assets/p128-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示是

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-002.png)

引理 3.2.2.8. 如果 <img src="./assets/p128-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理布局，并且 <img src="./assets/p128-b004-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.138em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p128-b004-m04.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.164em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示，则

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-003.png)

证明。我们有

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-004.png)

和

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-005.png)

命题 3.2.2.9. 假设 <img src="./assets/p128-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个布局。那么，当且仅当 <img src="./assets/p128-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 可处理时，存在编码 <img src="./assets/p128-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组态射 <img src="./assets/p128-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

证明。首先假设 <img src="./assets/p128-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.508em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 对于某些嵌套元组态射 <img src="./assets/p128-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.057em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 然后 <img src="./assets/p128-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.429em;width:5.943em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并根据命题 3.1.2.10, 我们知道 <img src="./assets/p128-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.180em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，因此 <img src="./assets/p128-b011-m06.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.129em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 也是如此。相反，如果 <img src="./assets/p128-b011-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理的，那么我们可以取<img src="./assets/p128-b011-m08.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p128-b011-m09.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.134em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示，根据引理 3.2.2.8,，我们有 <img src="./assets/p128-b011-m11.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.654em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

为了在可处理布局和某些嵌套元组态射之间建立一对一的对应关系，我们引入了嵌套元组态射的标准形式的概念。

定义 3.2.2.10. 假设 <img src="./assets/p128-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.402em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个嵌套元组态射。我们说 <img src="./assets/p128-b013-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式，如果

<img src="./assets/p128-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.370em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式，如定义 3.1.2.12, 和

2. $T$ 为平坦元组。

示例 3.2.2.11. 嵌套元组态射

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-012.png)

有标准形式。

示例 3.2.2.12. 嵌套元组态射

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-014.png)

由于 <img src="./assets/p128-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的陪域不平坦，因此没有标准形式。

与平坦情形一样，为在标准形式的嵌套元组态射与可处理布局之间建立一一对应，需要排除非退化的嵌套元组态射和非退化布局。为此作如下定义。〔校注：原文此处将应排除的对象写成 non-degenerate（非退化）；按后续定义及命题，应为 degenerate（退化）。一一对应所保留的对象是非退化对象。〕

![原文公式、图示或代码（PDF 第 128 页）](./assets/p128-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 128 页原页](./assets/page-128.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.2.7. If

then the standard representation of L is

Lemma 3.2.2.8. If L is a tractable layout, and f = fL is the standard representation of L, then

Proof. We have

and

Proposition 3.2.2.9. Suppose L is a layout. Then there exists a nested tuple morphism f encoding L if and only if L is tractable.

Proof. Suppose first that L = Lf for some nested tuple morphism f. Then (Lf)♭= Lf ♭, and by Proposition 3.1.2.10, we know that L♭is tractable, hence so is L. Conversely, if L is tractable, then we can take f = fL to be the standard representation of L, and by Lemma 3.2.2.8, we have Lf = L.

In order to establish a one-to-one correspondence between tractable layouts and certain nested tuple morphisms, we introduce the notion of standard form for nested tuple morphisms.

Definition 3.2.2.10. Suppose f : S →T is a nested tuple morphism. We say f has standard form if

1. f ♭has standard form, as in Definition 3.1.2.12, and

2. T is flat.

Example 3.2.2.11. The nested tuple morphism

has standard form.

Example 3.2.2.12. The nested tuple morphism

does not have standard form since the codomain of g is not flat.

Just as in the flat case, we need to exclude non-degenerate nested tuple morphisms and non- degenerate layouts in order to obtain a one-to-one correspondence between nested tuple morphisms of standard form and tractable layouts. To this end, we make the following definition.</pre>

</details>

<a id="translation-08-nest-pdf-第-129-页-·-原书第-127-页"></a>

### PDF 第 129 页 · 原书第 127 页
<a id="pdf-page-129"></a>

定义 3.2.2.13. 假设

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-001.png)

是一个嵌套元组态射，并且假设

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-002.png)

是一个布局。

1. 我们说 <img src="./assets/p129-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，如果

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-004.png)

2. 我们说 <img src="./assets/p129-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，如果

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-005.png)

备注 3.2.2.14. 如果 <img src="./assets/p129-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，则 <img src="./assets/p129-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的当且仅当 <img src="./assets/p129-b009-m04.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.097em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是

非退化。如果 <img src="./assets/p129-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是布局，则当且仅当 <img src="./assets/p129-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.180em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化时，<img src="./assets/p129-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的。

命题 3.2.2.15. 映射

![原文完整对应图（PDF 第 129 页）](./assets/p129-b011-complete-diagram.png)









构造 3.2.2.2 与 3.2.2.6 给出了标准形式的非退化嵌套元组态射与非退化可处理布局之间的一一对应。〔校注：原文此句省略了 non-degenerate 限定，但上方对应图明确保留该限定；此处按对应图补明。〕

证明。我们已经在命题 3.2.2.9 中证明，如果 <img src="./assets/p129-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.858em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可处理布局，并且 <img src="./assets/p129-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.135em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p129-b024-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.140em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准形式，那么 <img src="./assets/p129-b024-m05.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.772em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 接下来假设 <img src="./assets/p129-b024-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有标准形式，并让 <img src="./assets/p129-b024-m07.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.361em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是由 <img src="./assets/p129-b024-m08.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.057em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 编码的布局。证明 <img src="./assets/p129-b024-m09.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 等于 <img src="./assets/p129-b024-m11.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.140em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示 <img src="./assets/p129-b024-m10.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.215em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由命题 3.1.2.21, 我们知道 <img src="./assets/p129-b024-m13.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.097em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 等于 <img src="./assets/p129-b024-m15.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.507em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的标准表示 <img src="./assets/p129-b024-m14.png" alt="原文数学符号" style="display:inline-block;height:1.301em;width:1.512em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并且因为

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-014.png)

和

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-015.png)

我们推断 <img src="./assets/p129-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.464em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<a id="paper-section-3-2-3"></a>

<a id="translation-08-nest-_3-2-3-例子"></a>

#### 3.2.3 例子

在本节中，我们列出了一些重要的嵌套元组态射家族。

![原文公式、图示或代码（PDF 第 129 页）](./assets/p129-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 129 页原页](./assets/page-129.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Definition 3.2.2.13. Suppose

is a nested tuple morphism, and suppose

is a layout.

1. We say f is non-degenerate if

2. We say L is non-degenerate if

Remark 3.2.2.14. If f is a nested tuple morphism, then f is non-degenerate if and only if f ♭is

non-degenerate. If L is a layout, then L is non-degenerate if and only if L♭is non-degenerate.

Proposition 3.2.2.15. The maps

 Non-degenerate

Non-degenerate nested tuple morphisms

tractable layouts

of standard form

of Constructions 3.2.2.2 and 3.2.2.6 determine a one-to-one correspondence between nested tuple morphisms of standard form, and tractable layouts.

Proof. We have already shown in Proposition 3.2.2.9 that if L is a tractable layout and f = fL is the standard form of L, then Lf = L. Suppose next that f has standard form, and let L = Lf be the layout encoded by f. We want to show that f is equal to the standard representation fL of L. By Proposition 3.1.2.21, we know that f ♭is equal to the standard representation fL♭of L♭, and since

and

we deduce that f = fL.

3.2.3 Examples

In this section, we list some important families of nested tuple morphisms.</pre>

</details>

<a id="translation-08-nest-pdf-第-130-页-·-原书第-128-页"></a>

### PDF 第 130 页 · 原书第 128 页
<a id="pdf-page-130"></a>

例 3.2.3.1（重括号化）。设嵌套元组 $S_1,S_2$ 具有相同的展平结果：

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-001.png)

然后就有了重括号同构

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-002.png)

位于恒等映射之上。这些态射满足传递性，即

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-003.png)

并且与恒等态射相容，即

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-004.png)

<img src="./assets/p130-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:0.894em;width:1.008em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是重括号同构，则 <img src="./assets/p130-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是形状为 <img src="./assets/p130-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:1.515em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的列主序布局

示例 3.2.3.2（展平）。作为上一个示例的特例，如果 <img src="./assets/p130-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是任何嵌套元组，那么我们就有一个展平同构

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-006.png)

以及逆展平同构

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-007.png)

观察 3.2.3.3. 若 $f:S\to T$ 是嵌套元组态射，则 $f$ 等于以下复合：〔校注：原文漏写 morphism（态射），仅写了 nested tuple。〕

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-008.png)

换言之，有如下典范分解：

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-009.png)

示例 3.2.3.4（分量）。假设

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-010.png)

是嵌套元组态射。设 $1\le i\le\operatorname{len}(S)$，并记 $j=\alpha(i)$。将以下嵌套元组态射

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-011.png)

称为 $f$ 的第 $i$ 个分量。$\operatorname{entry}_i(f)$ 所编码的布局为

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-012.png)

例 3.2.3.5（分量包含映射）。作为前例的特例，若 $S$ 是嵌套元组且 $1\le i\le\operatorname{len}(S)$，取 $f=\operatorname{id}_S$，此时

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-013.png)

是 $S$ 的第 $i$ 个分量的包含映射。

![原文公式、图示或代码（PDF 第 130 页）](./assets/p130-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 130 页原页](./assets/page-130.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.3.1 (Reparenthesizations). Suppose S1 and S2 are nested tuples with the same flattening

Then there is a reparenthesization isomorphism

lying over the identity. These morphisms are transitive, in that

and compatible with identities, in that

S1 is a reparenthesization isomorphism, then Lf is the column major layout with shape S1.

Example 3.2.3.2 (Flattenings). As a special case of the previous example, if S is any nested tuple, then we have a flattening isomorphism

and an unflattening isomorphism

Observation 3.2.3.3. If f : S →T is a nested tuple, then f is equal to the composite

In other words, we have a canonical factorization

Example 3.2.3.4 (Entries). Suppose

is a nested tuple morphism. Suppose 1 ≤i ≤len(S), and write j = α(i). Then we refer to the nested tuple morphism

as the ith entry of f. The layout encoded by entryi(f) is

Example 3.2.3.5 (Entry inclusions). As a special case of the previous example, if S is a nested tuple and 1 ≤i ≤len(S), we can take f = idS, in which case

is the inclusion of the ith entry of S.</pre>

</details>

<a id="translation-08-nest-pdf-第-131-页-·-原书第-129-页"></a>

### PDF 第 131 页 · 原书第 129 页
<a id="pdf-page-131"></a>

示例 3.2.3.6（模态）。假设

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-001.png)

是一个嵌套元组态射。假设 <img src="./assets/p131-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.943em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并写

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-002.png)

然后我们引用嵌套元组态射

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-003.png)

称为 $S$ 的第 $i$ 个模态。$\operatorname{mode}_i(L_f)$ 所编码的布局为〔校注：原文此句对象混用；所定义的态射应称为 $f$ 的第 $i$ 个模态，而该态射编码的布局是下式中的 $\operatorname{mode}_i(L_f)$。〕

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-004.png)

示例 3.2.3.7（模态包含）。作为上一个示例的特例，我们可以采用 <img src="./assets/p131-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.694em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，在这种情况下

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-005.png)

是 <img src="./assets/p131-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p131-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模态的包含我们有时将此映射表示为

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-006.png)

<a id="paper-section-3-2-4"></a>

<a id="translation-08-nest-_3-2-4-嵌套元组态射的具象化"></a>

#### 3.2.4 嵌套元组态射的具象化

在平坦情形中，我们构造了具象化函子

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-008.png)

它将元组态射 <img src="./assets/p131-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 发送到 <img src="./assets/p131-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:1.657em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数我们可以将其扩展为具象化函子

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-009.png)

通过与展平函子 <img src="./assets/p131-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.651em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 进行预复合

定义 3.2.4.1. 我们定义具象化函子

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-011.png)

为以下函子的复合：

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-012.png)

引理 3.2.4.2. 如果 <img src="./assets/p131-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.407em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，则 <img src="./assets/p131-b024-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的具象化 <img src="./assets/p131-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.329em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 就是 <img src="./assets/p131-b024-m05.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.680em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的布局函数

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-013.png)

证明。由 3.1.4.5 立即可得，因为

![原文公式、图示或代码（PDF 第 131 页）](./assets/p131-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 131 页原页](./assets/page-131.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.3.6 (Modes). Suppose

is a nested tuple morphism. Suppose 1 ≤i ≤rank(S) and, write

Then we refer to the nested tuple morphism

as the ith mode of S. The layout encoded by modei(Lf) is

Example 3.2.3.7 (Mode inclusions). As a special case of the previous example we may take f = idS, in which case

is the inclusion of the ith mode of S. We sometime denote this map by

3.2.4 Realization of nested tuple morphisms

In the flat case, we constructed a realization functor

which sends a tuple morphism f to the layout function of Lf. We can extend this to a realization functor

by precomposing with the flattening functor Nest →Tuple.

Definition 3.2.4.1. We define the realization functor

to be the composite

Lemma 3.2.4.2. If f : S →T is a nested tuple morphism, then the realization |f| of f is the layout function of Lf:

Proof. This follows immediately from 3.1.4.5, since</pre>

</details>

<a id="translation-08-nest-pdf-第-132-页-·-原书第-130-页"></a>

### PDF 第 132 页 · 原书第 130 页
<a id="pdf-page-132"></a>

<a id="paper-section-3-2-5"></a>

<a id="translation-08-nest-_3-2-5-细化"></a>

#### 3.2.5 细化

在本节中，我们从范畴论角度重新审视嵌套元组的细化。回想一下 2.2.4 节，嵌套元组 <img src="./assets/p132-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化了 <img src="./assets/p132-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 表示

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-002.png)

如果可以通过用相同大小的嵌套元组替换 <img src="./assets/p132-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的每个分量来从 <img src="./assets/p132-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 获得 <img src="./assets/p132-b003-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。例如，

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-003.png)

和

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-004.png)

如果 <img src="./assets/p132-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.022em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p132-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.705em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么我们可以写

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-005.png)

写成相对模态的 $P$-代入：

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-006.png)

我们指的是普通的拼接

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-007.png)

作为 <img src="./assets/p132-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p132-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的展平

设 `Ref` 表示细化下的正整数嵌套元组的偏序集范畴，因此 `Ref` 中的态射是细化 <img src="./assets/p132-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.623em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p132-b017-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组，则令

<img src="./assets/p132-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.560em;width:7.742em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p132-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:1.346em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

表示所有细化 $S$ 的嵌套元组所组成的偏序集。等价地，$\operatorname{Ref}(S)$ 是切片范畴 $\operatorname{Ref}/S$。

构造3.2.5.1. [相对模态包含] 假设<img src="./assets/p132-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.288em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />是一个细化，并写

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-012.png)

表示 $S'$ 相对于 $S$ 的模态。$S'$ 与 $(S'_1,\ldots,S'_m)$ 具有相同的展平结果，因此有重括号化同构



![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-014.png)

我们定义

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-015.png)

为以下复合：

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-016.png)

即将 $(S'_1,\ldots,S'_m)$ 的第 $i$ 个模态包含映射与重括号化同构 $(S'_1,\ldots,S'_m)\cong S'$ 复合。



示例 3.2.5.2. 如果 <img src="./assets/p132-b041-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.639em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p132-b041-m03.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:10.650em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则 <img src="./assets/p132-b041-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p132-b041-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.128em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，并且 <img src="./assets/p132-b041-m06.png" alt="原文数学符号" style="display:inline-block;height:1.358em;width:4.901em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射

![原文公式、图示或代码（PDF 第 132 页）](./assets/p132-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 132 页原页](./assets/page-132.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.2.5 Refinements

In this section, we revisit the refinement of nested tuples from a categorical perspective. Recall from section 2.2.4 that a nested tuple S′ refines S, denoted

if S′ may be obtained from S by replacing each entry of S with some nested tuple of the same size. For example,

and

If len(S) = m and prof(S) = P, then we can write

as the P-substitution of the relative modes

We refer to the ordinary concatenation

as the flattening of S′ relative to S.

Let Ref denote the poset category of nested tuples of positive integers under refinement, so that a morphism in Ref is a refinement S′ ↠S. If S is a nested tuple, let

Ref(S) = {S′ | S′ refines S}

denote the poset of nested tuples refining S. Equivalently, Ref(S) is the slice category Ref/S.

Construction 3.2.5.1. [Relative mode inclusions] Suppose S′ ↠S is a refinement, and write

for the modes of S′ relative to S. Then S′ and (S′

1, . . . , S′ m) have the same flattening, so we have a reparenthesization isomorphism

and we define

to be the composite

of the ith mode inclusion of (S′

1, . . . , S′ m) with the reparenthesization isomorphism (S′

Example 3.2.5.2. If S = (4, (9, 25)) and S′ = ((2, 2), ((3, 3), 25)), then S′ refines S, and incl2(S′, S) is the nested tuple morphism</pre>

</details>

<a id="translation-08-nest-pdf-第-133-页-·-原书第-131-页"></a>

### PDF 第 133 页 · 原书第 131 页
<a id="pdf-page-133"></a>

构造 3.2.5.3. [相对模态] 假设 <img src="./assets/p133-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:5.829em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个嵌套元组态射，并且假设 <img src="./assets/p133-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p133-b000-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义 <img src="./assets/p133-b000-m06.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p133-b000-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.125em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的 <img src="./assets/p133-b000-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模态，表示为

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-001.png)

为以下复合：

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-002.png)

特别是，我们有

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-003.png)

示例 3.2.5.4. 假设 <img src="./assets/p133-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.571em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p133-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:10.536em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 使得 <img src="./assets/p133-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p133-b008-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.123em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p133-b008-m06.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-004.png)

那么 <img src="./assets/p133-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.358em;width:5.662em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-005.png)

构造 3.2.5.5（拉回）。设 <img src="./assets/p133-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.401em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是位于 <img src="./assets/p133-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.094em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上的嵌套元组态射，并设 <img src="./assets/p133-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.312em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是细化。令：

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-006.png)

表示 $T'$ 相对于 $T$ 的第 $j$ 个模态。对任意 $1\le i\le\operatorname{len}(S)$，令

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-007.png)

我们将 <img src="./assets/p133-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.130em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 沿 <img src="./assets/p133-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拉回定义为嵌套元组：

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-008.png)

对于任何 <img src="./assets/p133-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.829em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-009.png)

在 $\alpha(i)=*$ 时为平凡映射；在 $\alpha(i)=j$ 时为以下包含映射：

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-010.png)

映射 $f'_1,\ldots,f'_m$ 的像两两不交，因此可形成拼接



![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-012.png)

我们将 <img src="./assets/p133-b040-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:4.279em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为复合映射

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-013.png)

称 $f'$ 为 $f$ 沿 $T$ 的拉回，并将此拉回画为下列方块。〔校注：按构造，此处应为沿细化 $T'\twoheadrightarrow T$ 的拉回；原文仅写了 $T$。〕

![原文公式、图示或代码（PDF 第 133 页）](./assets/p133-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 133 页原页](./assets/page-133.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Construction 3.2.5.3. [Relative modes] Suppose f ′ : S′ →T ′ is a nested tuple morphism, and suppose S′ refines S. We define the ith mode of f ′ relative to S, denoted

to be the composite

In particular, we have

Example 3.2.5.4. Suppose S = (4, (9, 25)) and S′ = ((2, 2), ((3, 3), 25)), so that S′ refines S. If f ′ is the nested tuple morphism

then mode2(f ′, S) is the nested tuple morphism

Construction 3.2.5.5 (Pullbacks). Suppose f : S →T is a nested tuple morphism lying over α, and suppose T ′ ↠T is a refinement. Let

denote the jth mode of T ′ relative to T, and for any 1 ≤i ≤len(S), set

We define the pullback of T ′ along f to be the nested tuple

For any 1 ≤i ≤m, let

be the trivial map if α(i) = ∗, and the inclusion

if α(i) = j. The maps f ′

1, . . . , f ′ m have disjoint images, so we form the concatenation

We define f ′ = T ′∗f to be the composite

We refer to f ′ as the pullback of f along T, and depict such a pullback as a square</pre>

</details>

<a id="translation-08-nest-pdf-第-134-页-·-原书第-132-页"></a>

### PDF 第 134 页 · 原书第 132 页
<a id="pdf-page-134"></a>

例 3.2.5.6。设 <img src="./assets/p134-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.464em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p134-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.643em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上。那么有下列拉回方块：

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-001.png)

其中 <img src="./assets/p134-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p134-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:6.802em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上方

例 3.2.5.7. 设 $S$ 是嵌套元组，其展平结果为

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-003.png)

并设 $S'\twoheadrightarrow S$ 是细化，其相对展平结果为

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-004.png)

那么，<img src="./assets/p134-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.288em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 沿着下列逆展平同构的拉回

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-005.png)

是重括号同构

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-006.png)

例 3.2.5.8。设 <img src="./assets/p134-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.288em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是细化，并考虑第 i 个分量的包含映射：

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-007.png)

那么，<img src="./assets/p134-b027-m01.png" alt="原文数学符号" style="display:inline-block;height:1.715em;width:3.288em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 沿 <img src="./assets/p134-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.286em;width:3.139em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拉回，就是第 i 个相对模态的包含映射：

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-008.png)

观察 3.2.5.9。上述拉回构造确定了一个逆变函子：

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-009.png)

拉回的关键性质是，f′ 的布局函数等于 f 的布局函数。

![原文公式、图示或代码（PDF 第 134 页）](./assets/p134-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 134 页原页](./assets/page-134.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.5.6. Suppose f : (64, 32) →(4, 64, 4, 32) lies over α = (2, 4). Then we have a pullback square

where f ′ lies over α′ = (3, 4, 7, 8).

Example 3.2.5.7. Suppose S is a nested tuple with flattening

and suppose S′ ↠S is a refinement with relative flattening

Then the pullback of S′ ↠S along the unflattening isomorphism

is the reparenthesization isomorphism

Example 3.2.5.8. Suppose S′ ↠S is a refinement, and consider the ith entry inclusion

Then the pullback of S′ ↠S along si →S is the ith relative mode inclusion

Observation 3.2.5.9. The pullback construction above specifies a contravariant functor

The key property of pullbacks is that the layout function of f ′ is equal to that of f.</pre>

</details>

<a id="translation-08-nest-pdf-第-135-页-·-原书第-133-页"></a>

### PDF 第 135 页 · 原书第 133 页
<a id="pdf-page-135"></a>

引理 3.2.5.10. 假设

![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-001.png)

是拉回方块，其中 <img src="./assets/p135-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 位于 <img src="./assets/p135-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.127em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上。令：

![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-002.png)

表示 <img src="./assets/p135-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p135-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.154em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p135-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模态，并让

![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-003.png)

那么对于任何 <img src="./assets/p135-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:4.859em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-004.png)

证明。设 $1\le i\le m$。若 $\alpha(i)=*$，则 $f'_i$ 为平凡映射，所以



![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-006.png)

特别地，$\operatorname{coal}(L_{f'_i})=s_i:0=s_i:d_i$。再设 $\alpha(i)=j\ne *$。由 $f'$ 的构造，有



![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-008.png)

它位于映射 $\alpha'_i$ 之上，该映射由 $t\mapsto\operatorname{len}_{<j}(T',T)+t$ 给出。对每个 $1\le t<\operatorname{len}(T'_j)$，都有 $\alpha'_i(t)=\alpha'_i(t+1)$，所以 $L_{f'_i}$ 是大小为 $\operatorname{size}(T'_j)=t_j=s_i$ 的列主序布局。这说明 $\operatorname{coal}(L_{f'_i})$ 是下列形式的深度为 $0$ 的布局：〔校注：原文这里的等式应为 $\alpha'_i(t+1)=\alpha'_i(t)+1$；上述显式映射也直接给出这一关系。另“列主序布局”在此须结合后续整体步长 $e$ 理解，不能一概理解为首步长为 $1$。〕











![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-014.png)

其中 $e\ge0$ 为整数。我们断言 $e=d_i$。记 $t'_{j'}=\operatorname{entry}_{j'}(T')$，则



![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-016.png)

命题 3.2.5.11. 如果

![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-017.png)

是拉回方块，那么 <img src="./assets/p135-b064-m01.png" alt="原文数学符号" style="display:inline-block;height:1.391em;width:5.614em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

![原文公式、图示或代码（PDF 第 135 页）](./assets/p135-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 135 页原页](./assets/page-135.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Lemma 3.2.5.10. Suppose

is a pullback square, where f lies over α. Let

denote the ith mode of f ′ relative to S, and let

Then for any 1 ≤i ≤m, we have

Proof. Suppose 1 ≤i ≤m. If α(i) = ∗, then f ′

i is the trivial map, so

i) = si : 0 = si : di. Suppose next that α(i) = j̸ = ∗. By construction of f ′, we have that

In particular, coal(Lf ′

which lies over the map α′

i given by t 7→len&lt;j(T ′, T) + t. For each 1 ≤t &lt; len(T ′

j), we have α′

i is a column major layout with size size(T ′

j) = tj = si. This implies that coal(Lf ′

i) is a depth 0 layout of the form

for some integer e ≥0. We claim that e = di. If we write t′

j′ = entryj′(T ′), then we have

Proposition 3.2.5.11. If

is a pullback square, then ΦLf = ΦLf′.</pre>

</details>

<a id="translation-08-nest-pdf-第-136-页-·-原书第-134-页"></a>

### PDF 第 136 页 · 原书第 134 页
<a id="pdf-page-136"></a>

证明。我们从固定符号开始。设 <img src="./assets/p136-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.299em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并设

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-001.png)

考虑重新括号同构

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-002.png)

此映射与 $f'$ 的复合是拼接 $(f'_1,\ldots,f'_m)$，其中 $f'_i$ 在 $\alpha(i)=*$ 时为平凡映射，否则为相对模态包含映射





![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-005.png)

利用引理 3.2.5.10，以及 $L_{f'}=L_{(f'_1,\ldots,f'_m)}$，计算得



![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-007.png)

根据命题 2.3.3.14, 我们推断出 <img src="./assets/p136-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.391em;width:5.579em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

构造 3.2.5.12（前推）。设 $f:S\to T$ 是位于 $\alpha$ 之上的嵌套元组态射，且 $S'\twoheadrightarrow S$ 是细化。令

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-009.png)

表示 $S'$ 相对于 $S$ 的第 $i$ 个模态。对任意 $1\le j\le\operatorname{len}(T)$，令

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-010.png)

我们将 <img src="./assets/p136-b038-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 沿 <img src="./assets/p136-b038-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的前推定义为嵌套元组

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-011.png)

对于任何 <img src="./assets/p136-b041-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.829em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 让

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-012.png)

在 $\alpha(i)=*$ 时为平凡映射，在 $\alpha(i)=j$ 时为相对模态包含映射

![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-013.png)

态射 $f'_1,\ldots,f'_m$ 的像两两不交，故可形成拼接



![原文公式、图示或代码（PDF 第 136 页）](./assets/p136-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 136 页原页](./assets/page-136.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. We begin by fixing notation. Let m = len(S), and let

Consider the reparenthesization isomorphism

The composite of this map with f ′ is the concatenation (f ′

1, . . . , f ′ m) where f ′

i is the trivial map if α(i) = ∗, and the relative mode inclusion

otherwise. Using Lemma 3.2.5.10, and the fact that Lf ′ = L(f ′

1,...,f ′m), we compute

By Proposition 2.3.3.14, we deduce that ΦLf′ = ΦLf .

Construction 3.2.5.12 (Pushforwards). Suppose f : S →T is a nested tuple morphism lying over α, and suppose S′ ↠S is a refinement. Let

denote the ith mode of S′ relative to S, and for any 1 ≤j ≤len(T), set

We define the pushforward of S′ along f to be the nested tuple

For any 1 ≤i ≤m, let

be the trivial map if α(i) = ∗, and the relative mode inclusion

if α(i) = j. The morphisms f ′

1, . . . , f ′ m have disjoint images, so we can form the concatenation</pre>

</details>

<a id="translation-08-nest-pdf-第-137-页-·-原书第-135-页"></a>

### PDF 第 137 页 · 原书第 135 页
<a id="pdf-page-137"></a>

定义 $f'=S'_*f$ 为下列复合：



![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-002.png)

称 $f'$ 为 $f$ 沿 $T$ 的前推，画为下列方块。〔校注：按构造，前推所沿的是细化 $S'\twoheadrightarrow S$；原文这里误写为 $T$。〕

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-003.png)

例 3.2.5.13. 若 $f:(64,32)\to(4,64,4,32)$ 位于 $\alpha=(2,4)$ 之上，则有下列前推方块：

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-004.png)

拉回的关键性质是，$f'$ 的布局函数等于 $f$ 的布局函数。〔校注：本段讨论前推，原文的 pullbacks 应为 pushforwards；后续命题 3.2.5.15 明确陈述前推情形。〕

引理 3.2.5.14. 假设

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-006.png)

是前推方块，其中 $f$ 位于 $\alpha$ 之上。令

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-007.png)

表示 <img src="./assets/p137-b031-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 相对于 <img src="./assets/p137-b031-m03.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.154em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的第 <img src="./assets/p137-b031-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.524em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 模，令

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-008.png)

那么对于任何 <img src="./assets/p137-b033-m01.png" alt="原文数学符号" style="display:inline-block;height:1.156em;width:4.859em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们有

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-009.png)

证明。证明与引理 3.2.5.10 相同

命题 3.2.5.15. 如果

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-011.png)

是前推方块，则 $\Phi_{L_f}=\Phi_{L_{f'}}$。

证明。证明与命题3.2.5.11.相同

![原文公式、图示或代码（PDF 第 137 页）](./assets/p137-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 137 页原页](./assets/page-137.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">We define f ′ = S′

∗f to be the composite

We refer to f ′ as the pushforward of f along T. We depict such a pushforward as

Example 3.2.5.13. If f : (64, 32) →(4, 64, 4, 32) lies over α = (2, 4), then we have a pushforward square

The key property of pullbacks is that the layout function of f ′ is equal to that of f.

Lemma 3.2.5.14. Suppose

is a pushforward square, where f lies over α. Let

denote the ith mode of f ′ relative to S, and let

Then for any 1 ≤i ≤m, we have

Proof. The proof is identical to that of Lemma 3.2.5.10

Proposition 3.2.5.15. If

is a pushforward square, then ΦLf = ΦLf′.

Proof. The proof is identical to that of Proposition 3.2.5.11.</pre>

</details>

<a id="translation-08-nest-pdf-第-138-页-·-原书第-136-页"></a>

### PDF 第 138 页 · 原书第 136 页
<a id="pdf-page-138"></a>

观察 3.2.5.16. 上面定义的前推构造指定了一个协变函子

![原文公式、图示或代码（PDF 第 138 页）](./assets/p138-visual-001.png)

观察 3.2.5.17. 如果 <img src="./assets/p138-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组的同构，则

![原文公式、图示或代码（PDF 第 138 页）](./assets/p138-visual-002.png)

和

![原文公式、图示或代码（PDF 第 138 页）](./assets/p138-visual-003.png)

是范畴的逆同构。具体来说，

<img src="./assets/p138-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.398em;width:5.302em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p138-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.398em;width:5.735em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

观察 3.2.5.18. 如果 <img src="./assets/p138-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.188em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p138-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:1.188em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是带有 <img src="./assets/p138-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.240em;width:8.622em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组，则存在规范的嵌套元组同构 <img src="./assets/p138-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.566em;width:3.901em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此存在规范的范畴同构

![原文公式、图示或代码（PDF 第 138 页）](./assets/p138-visual-006.png)

我们还需要明确一个概念，称为共同细化。当我们在布局复合算法中使用这个概念时，这个概念的重要性将在 4, 章中变得清晰。

定义 3.2.5.19. 设 $T,U$ 为嵌套元组。$(T,U)$ 的一个共同细化是如下形式的图：

![原文公式、图示或代码（PDF 第 138 页）](./assets/p138-visual-008.png)

明确地，这是一对嵌套元组 <img src="./assets/p138-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:3.456em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，使得

<img src="./assets/p138-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.403em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p138-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.178em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p138-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.471em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p138-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

3. $T'$ 整除 $U'$。

除了共同细化的定义之外，我们还需要以下事实。

引理 3.2.5.20. 设 $T,U$ 为嵌套元组。则 $(T,U)$ 的共同细化与 $(T^\flat,U^\flat)$ 的共同细化之间存在一一对应。

证明。若 $(T',U')$ 是 $(T,U)$ 的共同细化，则沿逆展平同构 $\operatorname{id}^{T}_{T^\flat}:T^\flat\cong T$ 与 $\operatorname{id}^{U}_{U^\flat}:U^\flat\cong U$ 作拉回，得到共同细化





![原文公式、图示或代码（PDF 第 138 页）](./assets/p138-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 138 页原页](./assets/page-138.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Observation 3.2.5.16. The pushforward construction defined above specifies a covariant functor

Observation 3.2.5.17. If f : S →T is an isomorphism of nested tuples, then

and

are inverse isomorphisms of categories. Specifically,

(f −1)∗= f∗ and (f −1)∗= f ∗.

Observation 3.2.5.18. If S1 and S2 are nested tuples with flat(S1) = flat(S2), then there is a canonical nested tuple isomorphism S1 ∼= S2, and hence, a canonical isomorphism of categories

There is one more concept we need to specify, called mutual refinements. The importance of this concept will be come clear in Chapter 4, when we use this concept in our layout composition algorithm.

Definition 3.2.5.19. Suppose T and U are nested tuples. A mutual refinement of (T, U) is a diagram of the form

Explicitly, this is a pair of nested tuples (T ′, U ′) such that

1. T ′ refines T,

2. U ′ refines U, and

3. T ′ divides U ′.

In addition to the definition of mutual refinements, we need the following fact.

Lemma 3.2.5.20. Suppose T and U are nested tuples. Then there is a one-to-one correspondence between mutual refinements of (T, U), and mutual refinements of (T ♭, U ♭).

Proof. If (T ′, U ′) is a mutual refinement of (T, U), then pulling back along the unflattening isomorphisms idT

T ♭and idU

U ♭yields a mutual refinement</pre>

</details>

<a id="translation-08-nest-pdf-第-139-页-·-原书第-137-页"></a>

### PDF 第 139 页 · 原书第 137 页
<a id="pdf-page-139"></a>

它是 $(T^\flat,U^\flat)$ 的共同细化。反之，若 $((T^\flat)',(U^\flat)')$ 是 $(T^\flat,U^\flat)$ 的共同细化，则沿展平同构 $\operatorname{id}^{T^\flat}_{T}:T\cong T^\flat$ 与 $\operatorname{id}^{U^\flat}_{U}:U\cong U^\flat$ 作拉回，得到共同细化





![原文公式、图示或代码（PDF 第 139 页）](./assets/p139-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 139 页原页](./assets/page-139.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">of (T ♭, U ♭). Conversely, if ((T ♭)′, (U ♭)′) is a mutual refinement of T ♭, U ♭, then pulling back along the flattening isomorphisms idT ♭

T and idU ♭

U yields a mutual refinement</pre>

</details>

---

<a id="translation-09-nest-operations-第-3-2-节-嵌套元组态射上的运算"></a>

## 第 3.2 节：嵌套元组态射上的运算
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-09-nest-operations-pdf-第-140-页-·-原书第-138-页"></a>

### PDF 第 140 页 · 原书第 138 页
<a id="pdf-page-140"></a>

<a id="paper-section-3-2-6"></a>

<a id="translation-09-nest-operations-_3-2-6-嵌套元组态射上的运算"></a>

#### 3.2.6 嵌套元组态射上的运算

我们的下一个任务是开发“嵌套元组态射代数”。由于我们已经为元组态射开发了这样的“代数”，因此我们可以通过为各种操作的输出配备适当的轮廓来扩展到嵌套情况。

3.2.6.1 拼接

接下来，我们定义嵌套元组态射的拼接操作，它与布局的拼接兼容，因为

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-004.png)

我们通过拼接 <img src="./assets/p140-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b005-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:0.970em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的域来拼接嵌套元组态射 <img src="./assets/p140-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

为了明确定义，我们需要 <img src="./assets/p140-b006-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b006-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 来满足不相交条件，我们在下面指定。

定义 3.2.6.1. 假设 <img src="./assets/p140-b007-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b007-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有相同陪域的嵌套元组态射。如果 <img src="./assets/p140-b007-m06.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.097em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b007-m07.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.013em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像，则我们说 <img src="./assets/p140-b007-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b007-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像，如定义 3.1.5.32. 中所示

示例 3.2.6.2. 如果

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-008.png)

位于 <img src="./assets/p140-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.332em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上并且

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-009.png)

位于 <img src="./assets/p140-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.669em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上方，则 <img src="./assets/p140-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像。

示例 3.2.6.3. 如果

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-011.png)

位于 <img src="./assets/p140-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.304em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上并且

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-012.png)

位于 <img src="./assets/p140-b017-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.615em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上方，则 <img src="./assets/p140-b017-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b017-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像。

构造 3.2.6.4. 假设 <img src="./assets/p140-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.408em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.445em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是分别位于 <img src="./assets/p140-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.818em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b018-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.069em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上的嵌套元组态射，并且 <img src="./assets/p140-b018-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b018-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有不相交的像。我们将 <img src="./assets/p140-b018-m08.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b018-m09.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接定义为嵌套元组态射

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-014.png)

与

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-015.png)

更一般地，如果 <img src="./assets/p140-b022-m01.png" alt="原文数学符号" style="display:inline-block;height:1.291em;width:4.904em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p140-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.499em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的嵌套元组态射，并且 <img src="./assets/p140-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.240em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有成对不相交像，那么我们定义拼接

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-016.png)

是嵌套元组态射

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-017.png)

示例 3.2.6.5. 示例 3.2.6.2 的态射 <img src="./assets/p140-b027-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p140-b027-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接是嵌套元组态射

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-018.png)

位于 $\alpha\star\beta=(*,2,4,1,3)$ 之上。

![原文公式、图示或代码（PDF 第 140 页）](./assets/p140-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 140 页原页](./assets/page-140.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.2.6 Operations on nested tuple morphisms

Our next task is to develop an “algebra of nested tuple morphisms”. Since we have already developed such an “algebra” for tuple morphisms, we can extend to the nested case by equipping the outputs of our various operations with an appropriate profile.

3.2.6.1 Concatenate

Next, we define a concatenation operation on nested tuple morphisms, which is compatible with concatenation of layouts, in that

We concatenate nested tuple morphisms f and g by concatenating the domains of f and g. In order

for this to be well-defined, we need f and g to satisfy a disjointness condition, which we specify below.

Definition 3.2.6.1. Suppose f and g are nested tuple morphisms with the same codomain. We say f and g have disjoint images if f ♭and g♭have disjoint images, as in Definition 3.1.5.32.

Example 3.2.6.2. If

lies over (∗, 2, 4) and

lies over (1, 3), then f and g have disjoint images.

Example 3.2.6.3. If

lies over α = (3, 1, 5) and

lies over β = (2, 4), then f and g have disjoint images.

Construction 3.2.6.4. Suppose f : S →T and g : U →T are nested tuple morphisms lying over α and β, respectively, and that f and g have disjoint images. We define the concatenation of f and g to be the nested tuple morphism

with

More generally, if fi : Si →T are nested tuple morphisms for 1 ≤i ≤k, and f1, . . . , fk have pairwise disjoint images, then we define the concatenation

to be the nested tuple morphism with

Example 3.2.6.5. The concatenation of the morphisms f and g of Example 3.2.6.2 is the nested tuple morphism

lying over α ⋆β = (∗, 2, 4, 1, 3).</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-141-页-·-原书第-139-页"></a>

### PDF 第 141 页 · 原书第 139 页
<a id="pdf-page-141"></a>

示例 3.2.6.6. 示例 3.2.6.3 的态射 <img src="./assets/p141-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p141-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的拼接是嵌套元组态射

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-001.png)

位于 $\alpha\star\beta=(3,1,5,2,4)$ 之上。

示例 3.2.6.7. 如果

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-003.png)

位于 <img src="./assets/p141-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.363em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-004.png)

位于 <img src="./assets/p141-b007-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.615em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上并且

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-005.png)

位于 <img src="./assets/p141-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.571em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上，则 <img src="./assets/p141-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.859em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p141-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.754em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 具有成对不相交像，并且拼接

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-006.png)

位于 <img src="./assets/p141-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.473em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 3.2.6.8. 假设 <img src="./assets/p141-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，并假设

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-008.png)

回想一下示例 3.2.3.4，对于任何 <img src="./assets/p141-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.824em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都存在嵌套元组态射

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-009.png)

称为 $f$ 的第 $i$ 个分量。这些态射的像两两不交，其拼接

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-010.png)

是复合的

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-011.png)

示例 3.2.3.2

示例 3.2.6.9. 假设 <img src="./assets/p141-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，并假设

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-013.png)

回想一下示例 3.2.3.6，对于任何 <img src="./assets/p141-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.426em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都存在嵌套元组态射

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-014.png)

称为 $f$ 的第 $i$ 个模态。这些态射的像两两不交，其拼接

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-015.png)

等于 <img src="./assets/p141-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.050em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 换句话说，每个嵌套元组态射 <img src="./assets/p141-b028-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 都可以写成其模态的拼接：

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-016.png)

命题 3.2.6.10. 如果 <img src="./assets/p141-b030-m02.png" alt="原文数学符号" style="display:inline-block;height:1.221em;width:4.240em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是具有相同陪域且具有成对不相交像的嵌套元组态射，则

![原文公式、图示或代码（PDF 第 141 页）](./assets/p141-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 141 页原页](./assets/page-141.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.6.6. The concatenation of the morphisms f and g of Example 3.2.6.3 is the nested tuple morphism

lying over α ⋆β = (3, 1, 5, 2, 4).

Example 3.2.6.7. If

lies over α = (1, 4)

lies over β = (2, 5), and

lies over γ = (3, 6), then f, g and h have pairwise disjoint images, and the concatenation

lies over α ⋆β ⋆γ = (1, 4, 2, 5, 3, 6).

Example 3.2.6.8. Suppose f : S →T is a nested tuple morphism, and suppose

Recall from example 3.2.3.4 that for any 1 ≤i ≤m, there is a nested tuple morphism

called the ith entry of f. These morphisms have pairwise disjoint images, and the concatenation

is the composite

of Example 3.2.3.2

Example 3.2.6.9. Suppose f : S →T is a nested tuple morphism, and suppose

Recall from example 3.2.3.6 that for any 1 ≤i ≤r, there is a nested tuple morphism

called the ith mode of f. These morphisms have pairwise disjoint images, and the concatenation

is equal to f. In other words, every nested tuple morphism f may be written as the concatenation of its modes:

Proposition 3.2.6.10. If f1, . . . , fk are nested tuple morphisms with the same codomain and with pairwise disjoint images, then</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-142-页-·-原书第-140-页"></a>

### PDF 第 142 页 · 原书第 140 页
<a id="pdf-page-142"></a>

证明。通过构建，我们有

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-001.png)

并使用 3.1.5.38, 命题，我们有

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-002.png)

3.2.6.2 合并

如果 <img src="./assets/p142-b011-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，那么我们可以将 <img src="./assets/p142-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.208em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为 <img src="./assets/p142-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:4.229em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 理论上，这是一个合理的定义。然而，为了使我们的定义与 `cute` 实现兼容，我们对 <img src="./assets/p142-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.485em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的定义进行了小小的修改

定义 3.2.6.11. 假设 <img src="./assets/p142-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是一个嵌套元组态射，并写成

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-005.png)

•（案例 <img src="./assets/p142-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p142-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.158em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们定义 <img src="./assets/p142-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.348em;width:8.585em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

• （案例 <img src="./assets/p142-b015-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p142-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们将 <img src="./assets/p142-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.208em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为复合

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-007.png)

• （案例 <img src="./assets/p142-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果 <img src="./assets/p142-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 我们将 <img src="./assets/p142-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.208em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 定义为复合

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-008.png)

示例 3.2.6.12. 如果

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-009.png)

那么位于 <img src="./assets/p142-b023-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.404em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 之上

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-010.png)

位于 <img src="./assets/p142-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:5.861em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

命题 3.2.6.13. 如果 <img src="./assets/p142-b026-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，则

![原文公式、图示或代码（PDF 第 142 页）](./assets/p142-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 142 页原页](./assets/page-142.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. By construction, we have

and using Proposition 3.1.5.38, we have

3.2.6.2 Coalesce

If f is a nested tuple morphism, then we might define coal(f) to be coal♭(f ♭). Theoretically, this is a sound definition. However, in order to make our definitions compatible with the cute implementation, we make a small modification to our definition of coal(f).

Definition 3.2.6.11. Suppose f : S →T is a nested tuple morphism, and write

• (Case 1): If m &gt; 1, we define coal(f) = coal♭(f ♭).

• (Case 2): If m = 1, we define coal(f) to be the composite

• (Case 3): If m = 0, we define coal(f) to be the composite

Example 3.2.6.12. If

lies over α = (5, 6, 3, 4, 1, 2), then

lies over α′ = (3, 2, 1).

Proposition 3.2.6.13. If f : S →T is a nested tuple morphism, then</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-143-页-·-原书第-141-页"></a>

### PDF 第 143 页 · 原书第 141 页
<a id="pdf-page-143"></a>

证明。我们再写一下

![原文公式、图示或代码（PDF 第 143 页）](./assets/p143-visual-001.png)

需要考虑三种情况。

•（案例 <img src="./assets/p143-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p143-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.158em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 143 页）](./assets/p143-visual-003.png)

•（案例 <img src="./assets/p143-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p143-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 143 页）](./assets/p143-visual-004.png)

•（案例 <img src="./assets/p143-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.343em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 假设 <img src="./assets/p143-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.159em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 143 页）](./assets/p143-visual-005.png)

3.2.6.3 补

在本节中，我们定义互补嵌套元组态射的概念。

定义 3.2.6.14. 设 $f:S\to T$ 与 $g:U\to T$ 是像不相交的嵌套元组态射。若下列态射为同构，就称 $g$ 是 $f$ 的补态射：

![原文公式、图示或代码（PDF 第 143 页）](./assets/p143-visual-008.png)



备注 3.2.6.15. 对于嵌套元组态射 $f:S\to T$ 与 $g:U\to T$，$g$ 是 $f$ 的补态射，当且仅当 $g^\flat$ 是 $f^\flat$ 的补态射，因为 $(f,g)^\flat=f^\flat\star g^\flat$。



命题 3.2.6.16. 若 $f:S\to T$ 是嵌套元组态射，且 $g:U\to T$ 是 $f$ 的补态射，则 $L_g$ 是 $L_f$ 的一个 $\operatorname{size}(T)$-补布局。

![原文公式、图示或代码（PDF 第 143 页）](./assets/p143-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 143 页原页](./assets/page-143.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Let’s again write

There are three cases to consider.

• (Case 1): Suppose m &gt; 1. Then

• (Case 2): Suppose m = 1. Then

• (Case 3): Suppose m = 0. Then

3.2.6.3 Complement

In this section, we define the notion of complementary nested tuple morphisms.

Definition 3.2.6.14. Suppose f : S →T and g : U →T are nested tuple morphisms with disjoint images. We say g is a complement of f if

is an isomorphism.

Remark 3.2.6.15. If f : S →T and g : U →T are nested tuple morphisms, then g is a complement of

f if and only if g♭is a complement of f ♭, since (f, g)♭= f ♭⋆g♭.

Proposition 3.2.6.16. If f : S →T is a nested tuple morphism and g : U →T is a complement of f, then Lg is a size(T)-complement of Lf.</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-144-页-·-原书第-142-页"></a>

### PDF 第 144 页 · 原书第 142 页
<a id="pdf-page-144"></a>

证明。观察 3.2.2.5 意味着

<img src="./assets/p144-b001-m01.png" alt="原文数学符号" style="display:inline-block;height:1.478em;width:5.669em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-002.png)

引理 2.3.6.2 允许我们简化为平坦情形（命题 <img src="./assets/p144-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:4.166em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

构造 3.2.6.17. 设 $f:S\to T$ 是嵌套元组态射。定义 $f$ 的补态射为以下复合：〔校注：原文此处未重述可取补条件；构造依赖构造 3.1.5.46，故要求 $f^\flat$ 所在的保基点映射为单射。〕

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-004.png)



其中 $(f^\flat)^c$ 按构造 3.1.5.46 定义，而 $\operatorname{id}^{T}_{T^\flat}:T^\flat\cong T$ 是逆展平同构。

例 3.2.6.18. 以下嵌套元组态射的补态射为

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-007.png)

命题 3.2.6.19. 设 $f:S\to T$ 与 $g:U\to T$ 为嵌套元组态射。若 $f$ 为单射，且 $g$ 为 $f$ 的补态射，则 $L_g$ 为 $L_f$ 的一个 $\operatorname{size}(T)$-补布局。

证明。这是从命题 3.1.5.42 和引理 2.3.6.2 得出的，因为

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-009.png)

命题 3.2.6.20. 如果 <img src="./assets/p144-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.405em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是单射嵌套元组态射，则

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-010.png)

证明。由于 <img src="./assets/p144-b024-m01.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:1.131em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是通过重新括号同构后复合从 <img src="./assets/p144-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.264em;width:2.283em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 获得的，因此可以得出：

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-011.png)

因此，由命题 3.2.6.20 得〔校注：这里原文引用了正在证明的命题自身；相应平坦情形应参照命题 3.1.5.43。〕

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-012.png)

将 <img src="./assets/p144-b028-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.388em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 应用到两侧即可得到结果。

![原文公式、图示或代码（PDF 第 144 页）](./assets/p144-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 144 页原页](./assets/page-144.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Proof. Observation 3.2.2.5 implies that

(Lf)♭= Lf ♭, and

and Lemma 2.3.6.2 allows us to reduce to the flat case (Proposition 3.1.5.42).

Construction 3.2.6.17. Suppose f : S →T is a nested nested tuple morphism. We define the complement of f to be the composite

T ♭: T ♭∼= T is the unflattening isomorphism.

where (f ♭)c, is as defined in Construction 3.1.5.46, and idT

Example 3.2.6.18. The complement of the nested tuple morphism

Proposition 3.2.6.19. Suppose f : S →T and g : U →T are nested tuple morphisms. If f is injective and g is a complement of f, then Lg is a size(T)-complement of Lf.

Proof. This follows from Proposition 3.1.5.42 and Lemma 2.3.6.2 since

Proposition 3.2.6.20. If f : S →T is an injective nested tuple morphism, then

Proof. Since f c is obtained from (f ♭)c by post-composing with a reparenthesization isomorphism, it follows that

so by Proposition 3.2.6.20, it follows that

Applying coal(−) to both sides yields the result.</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-145-页-·-原书第-143-页"></a>

### PDF 第 145 页 · 原书第 143 页
<a id="pdf-page-145"></a>

3.2.6.4 组成

我们可以使用 3.2.4 节的具象化函子来证明嵌套元组态射的复合

与相关布局的复合兼容。

定理 3.2.6.21. 如果 <img src="./assets/p145-b003-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p145-b003-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化可复合嵌套元组态射，则

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-004.png)

证明。假设 <img src="./assets/p145-b005-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.504em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p145-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.570em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化嵌套元组态射。我们需要检查一下

1. $\operatorname{shape}(L_{g\circ f})$ 细化 $\operatorname{shape}(L_f)$。这是因为

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-006.png)

<img src="./assets/p145-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.341em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 合并于 <img src="./assets/p145-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:4.808em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 由于嵌套元组态射 <img src="./assets/p145-b008-m03.png" alt="原文数学符号" style="display:inline-block;height:1.149em;width:2.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化的，因此布局 <img src="./assets/p145-b008-m04.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:2.473em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 也是如此

3. $\Phi_{L_{g\circ f}}=\Phi_{L_g}\circ\Phi^{\operatorname{size}(L_g)}_{L_f}$。由引理 3.2.4.2，有

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-008.png)

再与包含映射 $[0,\operatorname{size}(U))\hookrightarrow\mathbb Z$ 作后复合，并注意到 $\operatorname{size}(T)=\operatorname{size}(L_g)$，即得结论。

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-009.png)

3.2.6.5 逻辑除法

接下来介绍嵌套元组态射的逻辑除法。这一构造由平坦除法引入嵌套轮廓得到，无须额外的相容性约束。

定义 3.2.6.22. 假设 <img src="./assets/p145-b018-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p145-b018-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射。如果 <img src="./assets/p145-b018-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p145-b018-m07.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是可复合的，我们就说 <img src="./assets/p145-b018-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 整除 <img src="./assets/p145-b018-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。换句话说，

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-012.png)

定义 3.2.6.23. 设 $g:S\to T$ 与 $f:T\to U$ 为嵌套元组态射。定义 $f$ 除以 $g$ 的逻辑除法为以下嵌套元组态射：

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-013.png)

示例 3.2.6.24. 的逻辑除法

![原文公式、图示或代码（PDF 第 145 页）](./assets/p145-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 145 页原页](./assets/page-145.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3.2.6.4 Composition

We can use the realization functor of Section 3.2.4 to prove that composition of nested tuple morphisms

is compatible with composition of the associated layouts.

Theorem 3.2.6.21. If f and g are non-degenerate composable nested tuple morphisms, then

Proof. Suppose f : S →T and g : T →U are non-degenerate nested tuple morphisms. We need to check that

1. shape(Lg◦f) refines shape(Lf): This holds since

2. Lg◦f is coalesced over shape(Lf): This holds since the nested tuple morphism g ◦f is non- degenerate, hence so is the layout Lg◦f.

3. ΦLg◦f = ΦLg ◦Φsize(Lg) Lf : Using Lemma 3.2.4.2, we have

and by postcomposing with the inclusion [0, size(U)) ⊂Z, and observing that size(T) = size(Lg), the result follows.

3.2.6.5 Logical division

Next, we introduce logical division of nested tuple morphisms. This construction is obtained from flat division by introducing nesting profiles, with no compatibility constraints.

Definition 3.2.6.22. Suppose f and g are nested tuple morphisms. We say g divides f if g and f are composable. In other words,

Definition 3.2.6.23. Suppose g : S →T and f : T →U are nested tuple morphisms. We define the logical division of f by g to be the nested tuple morphism

Example 3.2.6.24. The logical division of</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-146-页-·-原书第-144-页"></a>

### PDF 第 146 页 · 原书第 144 页
<a id="pdf-page-146"></a>

示例 3.2.6.25. 的逻辑除法

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-001.png)

命题 3.2.6.26. 如果 <img src="./assets/p146-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.316em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p146-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.551em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是非退化嵌套元组态射，则

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-002.png)

证明。根据命题 3.2.6.20,，我们有

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-003.png)

我们计算

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-004.png)

命题 3.2.6.27. 若 $f,g$ 是嵌套元组，且 $g$ 整除 $f$，则〔校注：按上下文及下式，这里的对象是嵌套元组态射；原文省略了 morphisms。〕

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-005.png)

证明。我们计算

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-006.png)

3.2.6.6 逻辑乘积

在本节中，我们定义嵌套元组态射的逻辑积。

定义 3.2.6.28. 设 $f,g$ 为嵌套元组态射。若 $\operatorname{codomain}(g)=\operatorname{domain}(f^c)$，就称 $f,g$ 乘积可容许。此时定义它们的逻辑乘积

为以下嵌套元组态射：

![原文公式、图示或代码（PDF 第 146 页）](./assets/p146-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 146 页原页](./assets/page-146.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.6.25. The logical division of

Proposition 3.2.6.26. If g : S →T and f : T →U are non-degenerate nested tuple morphisms, then

Proof. By Proposition 3.2.6.20, we have

and we compute

Proposition 3.2.6.27. If f and g are nested tuples and g divides f, then

Proof. We compute

3.2.6.6 Logical products

In this section, we define the logical product of nested tuple morphisms.

Definition 3.2.6.28. Suppose f and g are nested tuple morphisms. We say f and g are product admissible if codomain(g) = domain(f c). If f and g are product admissible we define the logical product

of f and g to be the nested tuple morphism</pre>

</details>

<a id="translation-09-nest-operations-pdf-第-147-页-·-原书第-145-页"></a>

### PDF 第 147 页 · 原书第 145 页
<a id="pdf-page-147"></a>

示例 3.2.6.29. 嵌套元组态射

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-001.png)

和

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-002.png)

乘积可容许，其逻辑乘积为

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-003.png)

示例 3.2.6.30. 嵌套元组态射

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-004.png)

和

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-005.png)

乘积可容许，其逻辑乘积为

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-006.png)

命题 3.2.6.31. 设 $f,g$ 是非退化嵌套元组态射，且乘积可容许，则

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-007.png)

证明。设 $f:S\to T$ 与 $g:U\to V$ 乘积可容许，并令

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-008.png)

由于 $f$ 为单射，且 $\operatorname{codomain}(g)=\operatorname{domain}(f^c)$，因此

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-009.png)

利用这个事实，以及事实

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-010.png)

我们有

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-011.png)

利用这个事实，我们计算

![原文公式、图示或代码（PDF 第 147 页）](./assets/p147-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 147 页原页](./assets/page-147.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 3.2.6.29. The nested tuple morphisms

and

are product admissible, and their logical product is

Example 3.2.6.30. The nested tuple morphisms

and

are product admissible, and their logical product is

Proposition 3.2.6.31. Suppose f and g are non-degenerate nested tuple morphisms and that f and g are product-admissible. Then

Proof. Suppose f : S →T and g : U →V are product admissible, and set

Since f is injective and codomain(g) = domain(f c), it follows that

Using this fact, and the fact that

we have

Using this fact, we compute</pre>

</details>

---

<a id="translation-10-computations-第-4-章-计算"></a>

## 第 4 章：计算
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-10-computations-pdf-第-148-页-·-原书第-146-页"></a>

### PDF 第 148 页 · 原书第 146 页
<a id="pdf-page-148"></a>

<a id="paper-section-4"></a>

<a id="translation-10-computations-第-4-章"></a>

#### 第 4 章

<a id="translation-10-computations-计算"></a>

#### 计算

范畴 Tuple 和 Nest 为可处理布局的计算提供了一个强大的框架。然而，在实践中，我们经常会遇到这样的可处理布局 A 和 B：它们在 cute 中可以复合，但其标准表示在 Tuple 和 Nest 中都不可复合。本章将详细说明，尽管如此，仍然可以借助共同细化的概念，使用范畴 Tuple 和 Nest 来计算可处理布局的复合、逻辑除法和逻辑乘积。我们在第 4.1.1 节介绍这一概念，在算法 4.1.1 中给出计算共同细化的算法，并详细分析许多具体例子。

<a id="paper-section-4-1"></a>

<a id="translation-10-computations-_4-1-复合"></a>

#### 4.1 复合

设要计算以下可处理布局的复合 $B\circ A$：

![原文公式、图示或代码（PDF 第 148 页）](./assets/p148-visual-005.png)

可以尝试先计算 $A,B$ 的标准表示 $f,g$ 的复合：



![原文公式、图示或代码（PDF 第 148 页）](./assets/p148-visual-007.png)

但这两个态射不可复合，因为 $f$ 的陪域 $(6,6)$ 不等于 $g$ 的定义域 $(12,3,6)$。这意味着不能直接使用 $f,g$ 计算复合 $B\circ A$。

不过，可以通过寻找 $(6,6)$ 与 $(12,3,6)$ 的共同细化来继续计算，如下图所示：

![原文公式、图示或代码（PDF 第 148 页）](./assets/p148-visual-009.png)

这样可将 $f,g$ 转换为可复合的态射 $f',g'$：

![原文公式、图示或代码（PDF 第 148 页）](./assets/p148-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 148 页原页](./assets/page-148.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Chapter 4

Computations

The categories Tuple and Nest offer a powerful framework for computing with tractable layouts. It is frequently the case that in practice, however, one comes across tractable layouts A and B that are composable in the context of cute but whose standard representations are neither composable in Tuple nor Nest. This chapter is dedicated to the explication of how one may nevertheless use the categories Tuple and Nest to compute the composition, logical division, and logical product of tractable layouts, using the notion of mutual refinement. We introduce this notion in Section 4.1.1, present an algorithm for computing mutual refinements in Algorithm 4.1.1, and work through many explicit examples.

4.1 Composition

Suppose we want to compute the composition B ◦A of the tractable layouts

We might try to compute B ◦A by computing the composite of the standard representations f and g

of A and B:

However, these morphisms are not composable, since the codomain (6, 6) of f is not equal to the domain (12, 3, 6) of g. This means that we can not use the morphisms f and g to compute the composite B ◦A

directly. We can, however, proceed with our computation by finding a mutual refinement of (6, 6) and (12, 3, 6), as depicted below

This is a device which converts f and g into composable morphisms f ′ and g′:</pre>

</details>

<a id="translation-10-computations-pdf-第-149-页-·-原书第-147-页"></a>

### PDF 第 149 页 · 原书第 147 页
<a id="pdf-page-149"></a>

![原文公式、图示或代码（PDF 第 149 页）](./assets/p149-visual-000.png)

态射 $f',g'$ 可复合，因此可以形成以下复合：

![原文公式、图示或代码（PDF 第 149 页）](./assets/p149-visual-001.png)

计算其所编码的布局，得到

![原文公式、图示或代码（PDF 第 149 页）](./assets/p149-visual-002.png)

本节的目标是将这个计算过程形式化为一种算法，用于计算可处理布局 <img src="./assets/p149-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p149-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.267em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的复合。正如我们在示例中看到的，计算中的重要步骤是

1. 发现某些（嵌套）元组的共同细化，以及

2. 使用共同细化将 <img src="./assets/p149-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p149-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 转换为可复合态射 <img src="./assets/p149-b011-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p149-b011-m05.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

我们将用以下两节来解释这些步骤。

<a id="paper-section-4-1-1"></a>

<a id="translation-10-computations-_4-1-1-共同细化"></a>

#### 4.1.1 共同细化

在使用 3, 章的范畴论框架给出共同细化的精确定义之前，我们给出一个非正式的概述。考虑我们的激励示例中的元组 <img src="./assets/p149-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.371em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p149-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.812em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。我们断言该图

![原文公式、图示或代码（PDF 第 149 页）](./assets/p149-visual-008.png)

是 <img src="./assets/p149-b016-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.407em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p149-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.139em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化我们可以如下对这种共同细化给出更精确的描述。该图的左半部分代表细化 <img src="./assets/p149-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:8.194em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 149 页）](./assets/p149-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 149 页原页](./assets/page-149.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">The morphisms f ′ and g′ are composable, so we may form the composite

and computing the encoded layout yields

The goal of this section is to formalize this computational process into an algorithm for computing the composite of tractable layouts A and B. As we saw in our example, the non-trivial steps in our computation were

1. finding a mutual refinement of certain (nested) tuples, and

2. using the mutual refinement to convert f and g into composable morphisms f ′ and g′.

We dedicate the following two sections to the explication of these steps.

4.1.1 Mutual refinements

Before giving a precise definition of mutual refinements using the categorical framework of Chapter 3, we give an informal overview. Consider the tuples (6, 6) and (12, 3, 6) of our motivating example. We asserted that the diagram

is a mutual refinement of (6, 6) and (12, 3, 6). We can give a more precise description of this mutual refinement as follows. The left half of the diagram represents the refinement (6, 6) ↞(6, (2, 3)), and</pre>

</details>

<a id="translation-10-computations-pdf-第-150-页-·-原书第-148-页"></a>

### PDF 第 150 页 · 原书第 148 页
<a id="pdf-page-150"></a>

图的右半部分代表细化 <img src="./assets/p150-b000-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:10.518em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 150 页）](./assets/p150-visual-001.png)

图的左右两半能够拼接，正对应于嵌套元组 $(6,(2,3))$ 整除 $((6,2),3,6)$，记为

![原文公式、图示或代码（PDF 第 150 页）](./assets/p150-visual-002.png)

将这些观察结果放在一起，我们可以将我们的共同细化准确地表达为

![原文公式、图示或代码（PDF 第 150 页）](./assets/p150-visual-003.png)

我们选择垂直描绘 <img src="./assets/p150-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:7.898em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p150-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.354em;width:10.297em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的细化。我们现在可以给出共同细化的精确定义。

定义 4.1.1.1. 设 $T,U$ 为嵌套元组。$(T,U)$ 的一个共同细化是如下形式的图：

![原文公式、图示或代码（PDF 第 150 页）](./assets/p150-visual-005.png)

明确地，这是一对嵌套元组 <img src="./assets/p150-b018-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:3.456em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，使得

<img src="./assets/p150-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.403em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p150-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.178em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

<img src="./assets/p150-b020-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:2.471em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化 <img src="./assets/p150-b020-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

3. $T'$ 整除 $U'$。

示例 4.1.1.2. <img src="./assets/p150-b022-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.443em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p150-b022-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.452em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化由下式给出

![原文公式、图示或代码（PDF 第 150 页）](./assets/p150-visual-010.png)

我们将这种共同细化描述如下。

![原文公式、图示或代码（PDF 第 150 页）](./assets/p150-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 150 页原页](./assets/page-150.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">the right half of the diagram represents the refinement ((6, 2), 3, 6) ↠(12, 3, 6):

The fact that the two halves of the diagram may be glued together corresponds to the fact that the nested tuple (6, (2, 3)) divides ((6, 2), 3, 6), which we denote

Putting these observations together, we may express our mutual refinement precisely as

where we opt to depict the refinements (6, 6) ↞(6, (2, 3)) and ((6, 2), 3, 6) ↠(12, 3, 6) vertically. We can now give a precise definition of mutual refinements.

Definition 4.1.1.1. Suppose T and U are nested tuples. A mutual refinement of (T, U) is a diagram of the form

Explicitly, this is a pair of nested tuples (T ′, U ′) such that

1. T ′ refines T,

2. U ′ refines U, and

3. T ′ divides U ′.

Example 4.1.1.2. A mutual refinement of T = (6, 6) and U = (2, 6, 3) is given by

We depict this mutual refinement as follows.</pre>

</details>

<a id="translation-10-computations-pdf-第-151-页-·-原书第-149-页"></a>

### PDF 第 151 页 · 原书第 149 页
<a id="pdf-page-151"></a>

示例 4.1.1.3. <img src="./assets/p151-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.384em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p151-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.393em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化由下式给出

![原文公式、图示或代码（PDF 第 151 页）](./assets/p151-visual-001.png)

我们将这种共同细化描述如下。

![原文公式、图示或代码（PDF 第 151 页）](./assets/p151-visual-002.png)

示例 4.1.1.4. <img src="./assets/p151-b005-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:6.823em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p151-b005-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.508em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化由下式给出

![原文公式、图示或代码（PDF 第 151 页）](./assets/p151-visual-003.png)

我们将这种共同细化描述如下。

![原文公式、图示或代码（PDF 第 151 页）](./assets/p151-visual-004.png)

示例 4.1.1.5. 如果 <img src="./assets/p151-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.410em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p151-b010-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.685em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，则不存在 <img src="./assets/p151-b010-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.762em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p151-b010-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化

观察 4.1.1.6。在前面的每个例子中，我们考虑的都是平坦元组 T 与 U 的共同细化。但是，共同细化的定义允许 T 与 U 为任意嵌套元组。无论如何，将讨论限制在平坦情形并不损失一般性，因为一对嵌套元组 (T, U) 的共同细化，与其展平 (T♭, U♭) 的共同细化之间存在一一对应（见引理 3.2.5.20）。具体而言，(T, U) 存在共同细化，当且仅当 (T♭, U♭) 存在共同细化。

做出适当的定义后，我们提供了一种计算 <img src="./assets/p151-b012-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.129em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 共同细化的算法

![原文公式、图示或代码（PDF 第 151 页）](./assets/p151-visual-007.png)

算法 4.1.1: 共同细化算法

1 输入：嵌套元组 <img src="./assets/p151-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.762em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p151-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.246em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 151 页）](./assets/p151-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 151 页原页](./assets/page-151.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 4.1.1.3. A mutual refinement of T = (8, 8, 8) and U = (2, 8, 8, 8) is given by

We depict this mutual refinement as follows.

Example 4.1.1.4. A mutual refinement of T = (4, 2, 2, 32) and U = (32, 32) is given by

We depict this mutual refinement as follows.

Example 4.1.1.5. If T = (8, 8) and U = (3, 8, 8), then there does not exist a mutual refinement of T and U.

Observation 4.1.1.6. In each of the previous examples, we have considered mutual refinements of flat tuples T and U. The definition of mutual refinement, however, allows T and U to be any nested tuples. In any case, restricting to the flat case is no loss of generality, because there is a one-to-one correspondence between mutual refinements of a pair of nested tuples (T, U), and mutual refinements of their flattenings (T ♭, U ♭) (see Lemma 3.2.5.20). In particular, there exists a mutual refinement of (T, U) if and only if there exists a mutual refinement of (T ♭, U ♭).

Having made the appropriate definitions, we provide an algorithm for computing a mutual refinement of (T, U).

Algorithm 4.1.1: Mutual refinement algorithm

1 Input: Nested tuples T and U.</pre>

</details>

<a id="translation-10-computations-pdf-第-152-页-·-原书第-150-页"></a>

### PDF 第 152 页 · 原书第 150 页
<a id="pdf-page-152"></a>

<a id="translation-10-computations-算法-4-1-1-续-共同细化算法"></a>

#### 算法 4.1.1（续）：共同细化算法

```text
 2 输出：(T, U) 的共同细化 (T′, U′)；若不存在，则为 None。
 3 X ← T；Y ← U
 4 X′, Y′, X_mode, Y_mode ← ()
 5 i ← 1；j ← 1
 6 当 i ≤ len(X) 且 j ≤ len(Y) 时循环
 7     若 entry_i(X) = entry_j(Y)，则
 8         将 entry_i(X) 追加到 X_mode；将 X_mode 追加到 X′；X_mode ← ()
 9         将 entry_j(Y) 追加到 Y_mode
10         将 Y_mode 追加到 Y′
11         Y_mode ← ()
12         i ← i + 1
13         j ← j + 1
14     否则，若 entry_i(X) 整除 entry_j(Y)，则
15         将 entry_i(X) 追加到 X_mode
16         将 X_mode 追加到 X′
17         X_mode ← ()
18         将 entry_i(X) 追加到 Y_mode
19         entry_j(Y) ← entry_j(Y) / entry_i(X)
20         i ← i + 1
21     否则，若 entry_j(Y) 整除 entry_i(X)，则
22         将 entry_j(Y) 追加到 X_mode
23         将 entry_j(Y) 追加到 Y_mode
24         将 Y_mode 追加到 Y′
25         Y_mode ← ()
26         entry_i(X) ← entry_i(X) / entry_j(Y)
27         j ← j + 1
28     否则
29         返回 None
30     结束条件分支
31 结束循环
32 若 Y_mode ≠ ()，则
33     将 entry_j(Y) 追加到 Y_mode
34     将 Y_mode 追加到 Y′
35     j ← j + 1
36 结束条件分支
37 当 j < len(Y) 时循环
38     将 entry_j(Y) 追加到 Y′
39     j ← j + 1
40 结束循环
41 T′ ← (X′)_{prof(T)}
42 U′ ← (Y′)_{prof(U)}
43 返回 (T′, U′)
```

〔校注（非原文）：第 37 行原文为严格不等号 `<`，此处如实保留。但这会漏掉最后一个尚未处理的 Y 分量。例如 T=(2)、U=(2,3)，第一次循环后 i=2、j=2、Y_mode=()；第 37 行的 2<2 为假，最终 U′=(2) 不是 U 的细化。对该例需将条件改为 j≤len(Y) 才能保留末项。本译文不将此算法当作已经验证的可执行实现。〕


<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 152 页原页](./assets/page-152.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Algorithm 4.1.1 (continued): Mutual refinement algorithm

2 Output: A mutual refinement (T ′, U ′) of (T, U), if one exists, else None.

6 while i ≤len(X) and j ≤len(Y ) do

7 if entryi(X) = entryj(Y ) then

8 append entryi(X) to Xmode; append Xmode to X′; Xmode ←()

9 append entryj(Y ) to Ymode;

10 append Ymode to Y ′;

14 else if entryi(X) divides entryj(Y ) then

15 append entryi(X) to Xmode;

16 append Xmode to X′;

18 append entryi(X) to Ymode

21 else if entryj(Y ) divides entryi(X) then

22 append entryj(Y ) to Xmode;

23 append entryj(Y ) to Ymode;

24 append Ymode to Y ′;

28 else

29 return None

30 end if

31 end while

32 if Ymode̸ = () then

33 append entryj(Y ) to Ymode;

34 append Ymode to Y ′;

36 end if

37 while j &lt; len(Y ) do

38 append entryj(Y ) to Y ′;

40 end while

43 return (T ′, U ′)</pre>

</details>

<a id="translation-10-computations-pdf-第-153-页-·-原书第-151-页"></a>

### PDF 第 153 页 · 原书第 151 页
<a id="pdf-page-153"></a>

<a id="paper-section-4-1-2"></a>

<a id="translation-10-computations-_4-1-2-从共同细化到可复合态射"></a>

#### 4.1.2 从共同细化到可复合态射

回顾一下：为计算以下布局的复合 $B\circ A$，

<img src="./assets/p153-b002-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.514em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-003.png)

我们构造了元组态射

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-004.png)

以及一个共同细化。

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-005.png)

我们计算的下一步是使用共同细化将 <img src="./assets/p153-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p153-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.655em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 转换为可复合态射 <img src="./assets/p153-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p153-b009-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 在给出此过程的正式、范畴论定义之前，让我们用一个示例来说明该过程。

我们从 <img src="./assets/p153-b010-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.668em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和我们共同细化的左半部分构建 <img src="./assets/p153-b010-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />：

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-007.png)

该结构是通过替换

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-008.png)

并进行更换

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-009.png)

更一般地，我们进行替换

![原文公式、图示或代码（PDF 第 153 页）](./assets/p153-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 153 页原页](./assets/page-153.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">4.1.2 From mutual refinements to composable morphisms

Recall that in order to compute the composition B ◦A of

A = (6, 6) : (6, 1) and

we constructed tuple morphisms

and a mutual refinement.

The next step in our computation is to use our mutual refinement to convert f and g into composable morphisms f ′ and g′. Before giving a formal, categorical definition of this process, let’s illustrate the process with an example.

We construct f ′ from f and the left half of our mutual refinement:

This construction is made by making the replacement

and making the replacement

More generally, we make the replacement</pre>

</details>

<a id="translation-10-computations-pdf-第-154-页-·-原书第-152-页"></a>

### PDF 第 154 页 · 原书第 152 页
<a id="pdf-page-154"></a>

由 $g$ 和共同细化的右半部分构造 $g'$ 的过程与此类似。

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-001.png)

这个结构是通过替换来完成的

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-002.png)

更一般地，我们进行替换

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-003.png)

在对我们的程序进行了非正式的描述之后，我们将事情精确化如下。

构造 4.1.2.1。设 <img src="./assets/p154-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.404em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 与 <img src="./assets/p154-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:4.439em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是嵌套元组态射，且 <img src="./assets/p154-b012-m04.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:3.455em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p154-b012-m05.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.145em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化。那么，可以使用第 3.2.5 节中的拉回与前推构造，得到下图：

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-005.png)

如果我们设置 <img src="./assets/p154-b019-m01.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:4.380em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p154-b019-m02.png" alt="原文数学符号" style="display:inline-block;height:1.516em;width:3.087em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 那么

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-006.png)

是可复合的嵌套元组态射。

<a id="paper-section-4-1-3"></a>

<a id="translation-10-computations-_4-1-3-复合算法"></a>

#### 4.1.3 复合算法

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-008.png)

算法 4.1.2: 可处理布局复合算法

1 输入：可处理布局 <img src="./assets/p154-b024-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p154-b024-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 154 页）](./assets/p154-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 154 页原页](./assets/page-154.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">The process for constructing g′ from g, and the right half of our mutual refinement is similar.

This construction is made by making the replacements

More generally, we make the replacement

Having given an informal description of our procedure, we make things precise as follows.

Construction 4.1.2.1. Suppose f : S →T and g : U →V are nested tuple morphisms, and (T ′, U ′) is a mutual refinement of (T, U). Then we may use the pullback and pushforward constructions of section 3.2.5 to form the diagram:

If we set f ′ = i ◦˜f and g′ = ˜g, then

are composable nested tuple morphisms.

4.1.3 The composition algorithm

Algorithm 4.1.2: Tractable layout Composition Algorithm

1 Input: Tractable layouts A and B.</pre>

</details>

<a id="translation-10-computations-pdf-第-155-页-·-原书第-153-页"></a>

### PDF 第 155 页 · 原书第 153 页
<a id="pdf-page-155"></a>

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-000.png)

算法 4.1.2（续）：可处理布局复合算法

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-001.png)

2 输出：若存在，给出 $A,B$ 的一个弱复合 $C$；否则返回 `None`。

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-002.png)

3 取标准表示法

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-003.png)

分别为 <img src="./assets/p155-b004-m01.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p155-b004-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.695em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />。

4 使用算法 4.1.1 产生共同细化

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-005.png)

<img src="./assets/p155-b008-m01.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.129em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 如果不存在 <img src="./assets/p155-b008-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:3.119em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的共同细化，则返回 None。

5 使用构造 4.1.2.1 获取可复合嵌套元组态射

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-007.png)

6 复合 <img src="./assets/p155-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.004em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p155-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.247em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 并计算编码布局

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-008.png)

7 返回 <img src="./assets/p155-b013-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-009.png)

定理 4.1.3.1. 如果 <img src="./assets/p155-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p155-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.936em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是易于处理的布局，则先前算法的输出 <img src="./assets/p155-b014-m04.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p155-b014-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p155-b014-m06.png" alt="原文数学符号" style="display:inline-block;height:1.137em;width:1.291em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的弱复合，因此，〔校注：算法可能返回 `None`；本句中“输出 $C$”应理解为确实返回布局时。另算法 4.1.1 第 37 行的边界条件有疑点，见该算法后的校注。〕

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-010.png)

证明。命题 3.2.5.15 告诉我们

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-011.png)

命题 3.2.5.11 和示例 3.1.3.6 告诉我们

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-012.png)

定理 3.2.6.21 意味着

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-013.png)

通过构造，<img src="./assets/p155-b025-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:1.544em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的形状 <img src="./assets/p155-b025-m01.png" alt="原文数学符号" style="display:inline-block;height:1.273em;width:1.078em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 细化了 <img src="./assets/p155-b025-m04.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.210em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的形状 <img src="./assets/p155-b025-m03.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此我们得出结论 <img src="./assets/p155-b025-m05.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.892em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 是 <img src="./assets/p155-b025-m06.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p155-b025-m07.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:1.263em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 的弱复合

<a id="paper-section-4-1-4"></a>

<a id="translation-10-computations-_4-1-4-例子"></a>

#### 4.1.4 例子

本节说明如何利用算法 4.1.3 计算可处理布局 $A,B$ 的复合 $B\circ A$。〔校注：这里原文的算法编号应为 4.1.2，即前面的可处理布局复合算法。〕

![原文公式、图示或代码（PDF 第 155 页）](./assets/p155-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 155 页原页](./assets/page-155.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Algorithm 4.1.2 (continued): Tractable layout Composition Algorithm

2 Output: A weak composite C of A and B, if one exists, else None..

3 Take the standard representations

of A and coal(B), respectively.

4 Use Algorithm 4.1.1 to produce a mutual refinement

of (T, U). If there does not exist a mutual refinement of (T, U), return None.

5 Use Construction 4.1.2.1 to obtain the composable nested tuple morphisms

6 Compose f ′ and g′, and compute the encoded layout

7 return C

Theorem 4.1.3.1. If A and B are tractable layouts, then the output C of the previous algorithm is a weak composite of A and B. Consequently,

Proof. Proposition 3.2.5.15 and tells us that

and Proposition 3.2.5.11 and Example 3.1.3.6 tell us that

Theorem 3.2.6.21 then implies that

By construction, the shape S′ of Lf ′ refines the shape S of A, so we conclude that C is a weak composite of A and B.

4.1.4 Examples

In this section we illustrate how Algorithm 4.1.3 may be used to compute the composition B ◦A of tractable layouts A and B.</pre>

</details>

<a id="translation-10-computations-pdf-第-156-页-·-原书第-154-页"></a>

### PDF 第 156 页 · 原书第 154 页
<a id="pdf-page-156"></a>

示例 4.1.4.1. 假设 <img src="./assets/p156-b000-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.909em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p156-b000-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.849em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

1. 取<img src="./assets/p156-b001-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p156-b001-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.829em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的标准表示

![原文公式、图示或代码（PDF 第 156 页）](./assets/p156-visual-002.png)

2. 应用算法 4.1.1 获得共同细化

![原文公式、图示或代码（PDF 第 156 页）](./assets/p156-visual-003.png)

3. 构造下图：

![原文完整对应图（PDF 第 156 页）](./assets/p156-b006-complete-diagram.png)

4. 化简该图：

![原文完整对应图（PDF 第 156 页）](./assets/p156-b008-complete-diagram.png)

5. 将 $f',g'$ 复合，得到

![原文完整对应图（PDF 第 156 页）](./assets/p156-b010-complete-diagram.png)

6. 计算关联布局

![原文公式、图示或代码（PDF 第 156 页）](./assets/p156-visual-007.png)

<img src="./assets/p156-b014-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.909em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 合并于 <img src="./assets/p156-b014-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:1.730em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />，因此 <img src="./assets/p156-b014-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.087em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

示例 4.1.4.2. 假设 <img src="./assets/p156-b015-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:7.791em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p156-b015-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:11.225em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

1. 取<img src="./assets/p156-b016-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p156-b016-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.829em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的标准表示

![原文公式、图示或代码（PDF 第 156 页）](./assets/p156-visual-010.png)

2. 应用算法 4.1.1 获得共同细化

![原文公式、图示或代码（PDF 第 156 页）](./assets/p156-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 156 页原页](./assets/page-156.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">Example 4.1.4.1. Suppose A = (4) : (1), and B = (2, 2) : (2, 1).

1. Take the standard representations of A and coal(B) = B.

2. Apply Algorithm 4.1.1 to obtain the mutual refinement

3. Form the diagram 2 2 2 4 4 2 2 2

4. Resolve the diagram 2 2 2 4 2 2 2

5. Compose f ′ and g′ to obtain 2 2 4 2 2

6. Compute the associated layout

7. Lg′◦f ′ is coalesced over (4), so B ◦A = ((2, 2)) : ((2, 1)).

Example 4.1.4.2. Suppose A = (6, 6) : (6, 1), and B = (12, 3, 6) : (1, 72, 12).

1. Take the standard representations of A and coal(B) = B.

2. Apply Algorithm 4.1.1 to obtain the mutual refinement</pre>

</details>

<a id="translation-10-computations-pdf-第-157-页-·-原书第-155-页"></a>

### PDF 第 157 页 · 原书第 155 页
<a id="pdf-page-157"></a>

3. 构造下图：

![原文完整对应图（PDF 第 157 页）](./assets/p157-b000-complete-diagram.png)

4. 解析图获得

![原文公式、图示或代码（PDF 第 157 页）](./assets/p157-visual-002.png)

5. 将 $f',g'$ 复合，得到

![原文完整对应图（PDF 第 157 页）](./assets/p157-b005-complete-diagram.png)

6. 计算关联布局

![原文公式、图示或代码（PDF 第 157 页）](./assets/p157-visual-004.png)

<img src="./assets/p157-b009-m01.png" alt="原文数学符号" style="display:inline-block;height:1.239em;width:3.909em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 合并到 <img src="./assets/p157-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.666em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上，因此

![原文公式、图示或代码（PDF 第 157 页）](./assets/p157-visual-005.png)

示例 4.1.4.3. 假设 <img src="./assets/p157-b011-m02.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:8.289em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 和 <img src="./assets/p157-b011-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:9.842em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />

1. 取<img src="./assets/p157-b012-m02.png" alt="原文数学符号" style="display:inline-block;height:1.136em;width:0.927em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />和<img src="./assets/p157-b012-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:5.829em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" />的标准表示

![原文公式、图示或代码（PDF 第 157 页）](./assets/p157-visual-007.png)

2. 应用算法 4.1.1 获得共同细化

![原文公式、图示或代码（PDF 第 157 页）](./assets/p157-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 157 页原页](./assets/page-157.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3. Form the diagram 6 3 6 3 6 6 2 3 6 6 6 6 12 12

4. Resolve the diagram to obtain

5. Compose f ′ and g′ to obtain 3 6 6 6 3 2 6 2 6

6. Compute the associated layout

7. Lg′◦f ′ is coalesced over (6, 6), hence

Example 4.1.4.3. Suppose A = (6, 6) : (5, 60), and B = (10, 360) : (2, 60).

1. Take the standard representations of A and coal(B) = B.

2. Apply algorithm 4.1.1 to obtain the mutual refinement</pre>

</details>

<a id="translation-10-computations-pdf-第-158-页-·-原书第-156-页"></a>

### PDF 第 158 页 · 原书第 156 页
<a id="pdf-page-158"></a>

3. 构造下图：

![原文完整对应图（PDF 第 158 页）](./assets/p158-b000-complete-diagram.png)

4. 解析图获得

![原文公式、图示或代码（PDF 第 158 页）](./assets/p158-visual-002.png)

5. 将 $f',g'$ 复合，得到

![原文完整对应图（PDF 第 158 页）](./assets/p158-b005-complete-diagram.png)

6. 计算关联布局

![原文公式、图示或代码（PDF 第 158 页）](./assets/p158-visual-004.png)

7. 布局 <img src="./assets/p158-b009-m02.png" alt="原文数学符号" style="display:inline-block;height:1.220em;width:2.636em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 合并在 <img src="./assets/p158-b009-m03.png" alt="原文数学符号" style="display:inline-block;height:1.155em;width:2.666em;vertical-align:-0.24em;max-width:none;margin:0 0.08em" loading="lazy" /> 上，因此

![原文公式、图示或代码（PDF 第 158 页）](./assets/p158-visual-999.png)

<details>
<summary>展开原页对照（保留全部图示、代码、标签和数学排版）</summary>

![PDF 第 158 页原页](./assets/page-158.png)

</details>

<details>
<summary>展开本页英文正文</summary>

<pre v-pre style="white-space:pre-wrap;overflow-wrap:anywhere">3. Form the diagram 10 6 6 2 360 2 3 3 6 6 2 360 10 6 5 5 10 2

4. Resolve the diagram to obtain

5. Compose f ′ and g′ to obtain 10 6 2 3 3 6 2 6 3 5 6 2 2

6. Compute the associated layout

7. The layout Lg′◦f ′ is coalesced over (6, 6), so</pre>

</details>

---

<a id="translation-11-appendix-附录-a-范畴入门与参考文献"></a>

## 附录 A：范畴入门与参考文献
> 中文译文：[Colfax Research，2025 年 9 月版](source.pdf)。[校注](categorical-foundations-for-cute-layouts.md#proofreading-全文译文校对记录)。

<a id="translation-11-appendix-pdf-第-159-页-·-原书第-157-页"></a>

### PDF 第 159 页 · 原书第 157 页
<a id="pdf-page-159"></a>

<a id="paper-section-A"></a>

<a id="translation-11-appendix-附录-a"></a>

#### 附录 A

<a id="translation-11-appendix-范畴入门"></a>

#### 范畴入门

在本文中，我们自由地使用范畴的语言。范畴是将态射及其复合这一概念抽象出来的数学对象。本附录旨在对范畴的基础知识作简洁、易读的介绍。特别地，我们希望回答以下问题：

1. 什么是范畴？

2. 什么是函子？

能够有把握地回答这些问题，并且心中有具体例子的读者，就能够理解本文最重要的概念和构造。对于希望学习自然变换、伴随以及（余）极限等更高级范畴论概念的读者，我们推荐参考文献 [1]。

<a id="paper-section-A-1"></a>

<a id="translation-11-appendix-a-1-什么是范畴"></a>

#### A.1 什么是范畴？

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

<a id="translation-11-appendix-pdf-第-160-页-·-原书第-158-页"></a>

### PDF 第 160 页 · 原书第 158 页
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

<a id="translation-11-appendix-pdf-第-161-页-·-原书第-159-页"></a>

### PDF 第 161 页 · 原书第 159 页
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

<a id="translation-11-appendix-pdf-第-162-页-·-原书第-160-页"></a>

### PDF 第 162 页 · 原书第 160 页
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

<a id="translation-11-appendix-a-2-什么是函子"></a>

#### A.2 什么是函子？

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

<a id="translation-11-appendix-pdf-第-163-页-·-原书第-161-页"></a>

### PDF 第 163 页 · 原书第 161 页
<a id="pdf-page-163"></a>

<a id="paper-references"></a>

<a id="translation-11-appendix-参考文献"></a>

#### 参考文献

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

<a id="proofreading-全文译文校对记录"></a>

## 全文译文校对记录

本记录为 **AI 校对说明**，不属于论文原文，也不是作者发布的勘误。底本为 Colfax Research《Categorical Foundations for CuTe Layouts》，2025 年 9 月 rev1；SHA-256 见[来源记录](source-manifest.txt)。

<a id="proofreading-本轮校对范围"></a>

### 本轮校对范围

2026 年 10 月 22 日，对全部 163 个 PDF 页面（印刷页 1–161，另含扉页和摘要）的中英文正文逐句对照；提取材料共 2168 个文本块。重点检查定义、量词、否定、整除方向、充要条件、函数定义域与陪域、复合顺序、上下标及证明中的引用。断开的数学下标和跨行句子按原页重连，图中的数字、箭头与标签按原页整体提取。

初译使用经用户授权的 Google Translate；本轮由 AI 对照本地底本校对。修正了“右作用”误译为“正确操作”、整除方向不清、否定条件漏译、可处理性与紧致性混淆，以及把“关联的布局”误写成“满足结合律的布局”等问题。术语统一见[总目录](categorical-foundations-for-cute-layouts.md#术语约定)。

译文保持原文的论证顺序和图式。明显的原文记号错误用“校注”标识；涉及缺失假设或反例的地方保留原陈述并说明疑点。逐句校对不等于对整篇论文完成形式化证明。

<a id="proofreading-影响数学陈述的边界问题"></a>

### 影响数学陈述的边界问题

- **引理 2.1.3.29 的退化形状**：$L=(1,2):(5,1)$ 的布局函数依次取 $0,1$，是非递减函数，但布局未排序。原引理没有写出排除此例的假设。见[PDF 第 33 页](categorical-foundations-for-cute-layouts.md#pdf-page-33)。
- **标准形式的一一对应与单位对象**：按定义 3.1.2.12，唯一态射 $f:()\to()$ 与 $g:()\to(1)$ 都满足标准形式和非退化条件，却编码相同的空布局。定义中的 $n>1$ 条件无法区分这两个陪域。引理 3.1.2.20、定理 3.1.2.21 及其 Nest 版本需要明确单位对象的规范化约定。见[PDF 第 97–99 页](categorical-foundations-for-cute-layouts.md#pdf-page-97)。
- **filter 与非退化性**：观察 3.1.2.19 的表述与此前 filter 的定义不完全相容；例如 $(1):(3)$ 不会被 filter 删除，却是退化布局。删除零步长模态也会改变坐标函数的定义域。见[PDF 第 98 页](categorical-foundations-for-cute-layouts.md#pdf-page-98)。
- **共同细化算法的循环末项**：算法 4.1.1 第 37 行为 `j < len(Y)`。代入 $T=(2)$、$U=(2,3)$，主循环一次后 $i=2,j=2$，末项 $3$ 不会追加，返回的 $U'=(2)$ 不是 $U$ 的细化。原文条件在译文中保留，并给出此反例。见[PDF 第 152 页](categorical-foundations-for-cute-layouts.md#pdf-page-152)。

以上是按本版本书面定义检查所得的 AI 判断；没有将后续版本的定义或实现行为代入本底本。

<a id="proofreading-逐页校注索引"></a>

### 逐页校注索引

下列条目汇集译文中的校注，链接可定位到同页原图；“应为”“需补充”等均是校对意见。

- [PDF 第 33 页（印刷第 31 页）](categorical-foundations-for-cute-layouts.md#pdf-page-33)：本引理原文未排除退化布局。若 $L=(1,2):(5,1)$，则 $\Phi_L$ 的值依次为 $0,1$，因而非递减，但步长 $5,1$ 未排序；所以按字面陈述存在反例，需补充假设或先规范化。
- [PDF 第 35 页（印刷第 33 页）](categorical-foundations-for-cute-layouts.md#pdf-page-35)：原文这里将包含方向写反了；前面的推导实际证明 $\operatorname{Image}(\Phi_L)\subseteq\operatorname{Image}(\Phi_{\operatorname{sort}(L)})$。等像结论不受影响。
- [PDF 第 43 页（印刷第 41 页）](categorical-foundations-for-cute-layouts.md#pdf-page-43)：原文这一开头直接从“紧致”推出待证的置换条件，论证顺序有循环。此段实际验证的是“存在该置换条件 ⇒ 紧致”；必要性由后面的归纳论证给出。
- [PDF 第 44 页（印刷第 42 页）](categorical-foundations-for-cute-layouts.md#pdf-page-44)：原文后一处布局漏写了置换上标，应为 $(\operatorname{sort}(\operatorname{squeeze}(L)))^{\sigma'}$。
- [PDF 第 45 页（印刷第 43 页）](categorical-foundations-for-cute-layouts.md#pdf-page-45)：原文这里的 $A\perp A$ 应为 $A\perp E$；后面的例 2.1.6.6 才讨论自互补。
- [PDF 第 46 页（印刷第 44 页）](categorical-foundations-for-cute-layouts.md#pdf-page-46)：右侧的 $L$ 未定义，应为 $A$。
- [PDF 第 53 页（印刷第 51 页）](categorical-foundations-for-cute-layouts.md#pdf-page-53)：原文式中的 $L$ 应为 $A$。
- [PDF 第 53 页（印刷第 51 页）](categorical-foundations-for-cute-layouts.md#pdf-page-53)：按本命题的变量约定，原文 $L$ 应为 $A$。
- [PDF 第 54 页（印刷第 52 页）](categorical-foundations-for-cute-layouts.md#pdf-page-54)：原文限制区间的上界应为 $\operatorname{size}(C_1)$，才能与 $\Phi_{C_1}$ 的定义域一致。
- [PDF 第 55 页（印刷第 53 页）](categorical-foundations-for-cute-layouts.md#pdf-page-55)：定义 2.1.7.1 将结果命名为 $C$，后续条件及本备注却写成 $R$，应统一为 $C$。
- [PDF 第 75 页（印刷第 73 页）](categorical-foundations-for-cute-layouts.md#pdf-page-75)：原文将“变体”写成 invariant（不变量）；按本段定义及用途，应读作 variant。
- [PDF 第 77 页（印刷第 75 页）](categorical-foundations-for-cute-layouts.md#pdf-page-77)：本引理的相对基准应为 $\bar S$；原文这里及上一行写成了 $S$。
- [PDF 第 89 页（印刷第 87 页）](categorical-foundations-for-cute-layouts.md#pdf-page-89)：原文量词使用 $n$，陪域却使用 $m$；二者应统一。
- [PDF 第 93 页（印刷第 91 页）](categorical-foundations-for-cute-layouts.md#pdf-page-93)：本页前面在定义到 $\langle\ell\rangle_*$ 的映射时使用了 $\alpha$，而分段式及此处使用 $\alpha'$；应将那个初始映射记为 $\alpha'$，$\alpha$ 留给删去冗余陪域分量后的映射。
- [PDF 第 98 页（印刷第 96 页）](categorical-foundations-for-cute-layouts.md#pdf-page-98)：本句按原文译出，但与此前 filter 的定义不完全相容。例如 $L=(1):(3)$ 已被 filter 保留，却不满足本页的非退化条件；删除零步长模态后，坐标函数的定义域也可能改变。此处不能直接当作已证明结论使用。
- [PDF 第 98 页（印刷第 96 页）](categorical-foundations-for-cute-layouts.md#pdf-page-98)：标准形式的单位边界还需要额外约定。按定义 3.1.2.12 的字面条件，$f:()\to()$ 与 $g:()\to(1)$ 都是标准形式的非退化元组态射，且编码同一空布局；因此本引理与后续一一对应定理在该边界上存在歧义，详见校对记录。
- [PDF 第 99 页（印刷第 97 页）](categorical-foundations-for-cute-layouts.md#pdf-page-99)：原文 $\beta(j)$ 中的指标应为 $i$。
- [PDF 第 99 页（印刷第 97 页）](categorical-foundations-for-cute-layouts.md#pdf-page-99)：本定理沿用引理 3.1.2.20；单位及空元组边界的疑点见校对记录，译文未擅自补充原文没有写出的假设。
- [PDF 第 111 页（印刷第 109 页）](categorical-foundations-for-cute-layouts.md#pdf-page-111)：本句原文的 $i_1,i_2$ 与正在比较的 $j_1,j_2$ 不一致，应读作 $\alpha(j_1)\le\alpha(j_2)$。
- [PDF 第 113 页（印刷第 111 页）](categorical-foundations-for-cute-layouts.md#pdf-page-113)：原文本句第一次出现的 $s_i$ 缺少撇号，应为 $s'_i$。
- [PDF 第 113 页（印刷第 111 页）](categorical-foundations-for-cute-layouts.md#pdf-page-113)：本例首幅图的 $f:(2,3)\to(3,2)$ 与 $g:(10,25)\to(25,10)$ 实际不可复合，与这句话及后图不一致。若按后图及所述恒等态射理解，首幅 $f$ 应为 $(25,10)\to(10,25)$ 的交换态射；原图保持不改。
- [PDF 第 116 页（印刷第 114 页）](categorical-foundations-for-cute-layouts.md#pdf-page-116)：本段前半的 $\Phi_f$ 是关联布局函数 $\Phi_{L_f}$ 的简写。
- [PDF 第 120 页（印刷第 118 页）](categorical-foundations-for-cute-layouts.md#pdf-page-120)：一般的 $f^c$ 虽然已排序，却未必已合并；本句用于合并后的布局，不能据此断言任意补态射均已合并。
- [PDF 第 128 页（印刷第 126 页）](categorical-foundations-for-cute-layouts.md#pdf-page-128)：原文此处将应排除的对象写成 non-degenerate（非退化）；按后续定义及命题，应为 degenerate（退化）。一一对应所保留的对象是非退化对象。
- [PDF 第 129 页（印刷第 127 页）](categorical-foundations-for-cute-layouts.md#pdf-page-129)：原文此句省略了 non-degenerate 限定，但上方对应图明确保留该限定；此处按对应图补明。
- [PDF 第 130 页（印刷第 128 页）](categorical-foundations-for-cute-layouts.md#pdf-page-130)：原文漏写 morphism（态射），仅写了 nested tuple。
- [PDF 第 131 页（印刷第 129 页）](categorical-foundations-for-cute-layouts.md#pdf-page-131)：原文此句对象混用；所定义的态射应称为 $f$ 的第 $i$ 个模态，而该态射编码的布局是下式中的 $\operatorname{mode}_i(L_f)$。
- [PDF 第 133 页（印刷第 131 页）](categorical-foundations-for-cute-layouts.md#pdf-page-133)：按构造，此处应为沿细化 $T'\twoheadrightarrow T$ 的拉回；原文仅写了 $T$。
- [PDF 第 135 页（印刷第 133 页）](categorical-foundations-for-cute-layouts.md#pdf-page-135)：原文这里的等式应为 $\alpha'_i(t+1)=\alpha'_i(t)+1$；上述显式映射也直接给出这一关系。另“列主序布局”在此须结合后续整体步长 $e$ 理解，不能一概理解为首步长为 $1$。
- [PDF 第 137 页（印刷第 135 页）](categorical-foundations-for-cute-layouts.md#pdf-page-137)：按构造，前推所沿的是细化 $S'\twoheadrightarrow S$；原文这里误写为 $T$。
- [PDF 第 137 页（印刷第 135 页）](categorical-foundations-for-cute-layouts.md#pdf-page-137)：本段讨论前推，原文的 pullbacks 应为 pushforwards；后续命题 3.2.5.15 明确陈述前推情形。
- [PDF 第 144 页（印刷第 142 页）](categorical-foundations-for-cute-layouts.md#pdf-page-144)：原文此处未重述可取补条件；构造依赖构造 3.1.5.46，故要求 $f^\flat$ 所在的保基点映射为单射。
- [PDF 第 144 页（印刷第 142 页）](categorical-foundations-for-cute-layouts.md#pdf-page-144)：这里原文引用了正在证明的命题自身；相应平坦情形应参照命题 3.1.5.43。
- [PDF 第 146 页（印刷第 144 页）](categorical-foundations-for-cute-layouts.md#pdf-page-146)：按上下文及下式，这里的对象是嵌套元组态射；原文省略了 morphisms。
- [PDF 第 155 页（印刷第 153 页）](categorical-foundations-for-cute-layouts.md#pdf-page-155)：算法可能返回 `None`；本句中“输出 $C$”应理解为确实返回布局时。另算法 4.1.1 第 37 行的边界条件有疑点，见该算法后的校注。
- [PDF 第 155 页（印刷第 153 页）](categorical-foundations-for-cute-layouts.md#pdf-page-155)：这里原文的算法编号应为 4.1.2，即前面的可处理布局复合算法。
- [PDF 第 159 页（印刷第 157 页）](categorical-foundations-for-cute-layouts.md#pdf-page-159)：原文将陪域写成 $g$，应为 $Y$。
