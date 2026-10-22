# Categorical Foundations for CuTe Layouts

**CuTe 布局的范畴基础 · 中文全文译文**

- 作者：Colfax Research。
- 翻译底本：用户提供的 `Categories_of_Layouts_092425-rev1.pdf`，2025 年 9 月版；PDF 共 163 页，其中正文页码为 1–161。本文采用这份底本，不混入后续版本。
- 原文：[本地 PDF](source.pdf) · [作者页面](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/) · [配套实现](https://github.com/ColfaxResearch/layout-categories)。
- 文库：[Zotero 条目](zotero://select/library/items/Q3PT5C24) · [Zotero PDF](zotero://open-pdf/library/items/LUQPWFX6)。原 PDF 同时归档到 PapersPDF 的 `04_GPU_Compiler_and_Performance/01_DSL_and_Programming_Models/`。

## 译文说明

本次整理为**中文全文译文**，包括扉页、摘要、目录、第 1–4 章、附录 A 和参考文献，保持原文顺序，保留定义、命题、定理、引理、观察、旁注、例子和证明。摘要、引言及附录由 AI 直接翻译；其余正文使用经用户授权的 Google Translate 生成初译。2026 年 10 月 22 日已由 AI 对照底本逐句校对全文，重点复核数学定义、定理和证明，并修正术语、否定、整除方向、复合顺序与下标。

原文自身存在若干记号和论证疑点，均明确标作“校注”，集中列于[校对记录](Proofreading.md)；其中包括标准形式的单位边界与共同细化算法的循环末项。译文保留这些原陈述，不把校对意见冒充原文。

所有公式、布局图、交换图、表格和代码均从同一底本提取。复杂符号使用原文裁片，避免上下标、分式、箭头和层级括号在转换时失真；图内的原始文字与代码保留原样。每一页同时附有可展开的完整原页图与英文正文，方便核对。PDF 页码比原书印刷页码大 2；前两页为扉页与摘要。

英文原页、中文译文与 AI 校注分别标示。译文已生成不等于用户已读，阅读状态保持待读。

## 全文目录

| 译文章节 | 原书页码 | PDF 页码 |
| --- | --- | --- |
| [扉页、摘要与目录](Translation-00-Front-Matter.md) | 扉页、摘要、1–2 | 1–4 |
| [第 1 章：引言](Translation-01-Introduction.md) | 3–16 | 5–18 |
| [第 2.1 节：平坦布局的基本定义与运算](Translation-02-Flat-Layouts.md) | 17–34 | 19–36 |
| [第 2.1 节：合并、紧致性、补布局与可处理性](Translation-03-Flat-Layout-Algebra.md) | 35–56 | 37–58 |
| [第 2.2 节：嵌套元组](Translation-04-Nested-Tuples.md) | 57–65 | 59–67 |
| [第 2.3 节：布局](Translation-05-Layouts.md) | 66–85 | 68–87 |
| [第 3.1 节：Tuple 范畴、编码与具象化](Translation-06-Tuple.md) | 86–104 | 88–106 |
| [第 3.1 节：元组态射上的运算](Translation-07-Tuple-Operations.md) | 105–122 | 107–124 |
| [第 3.2 节：Nest 范畴与细化](Translation-08-Nest.md) | 123–137 | 125–139 |
| [第 3.2 节：嵌套元组态射上的运算](Translation-09-Nest-Operations.md) | 138–145 | 140–147 |
| [第 4 章：计算](Translation-10-Computations.md) | 146–156 | 148–158 |
| [附录 A：范畴入门与参考文献](Translation-11-Appendix.md) | 157–161 | 159–163 |

## Layout and their algebra

原有空白笔记的这一小节保留为入口，正文对应[第 2.1 节](Translation-02-Flat-Layouts.md)、[第 2.2 节](Translation-04-Nested-Tuples.md)和[第 2.3 节](Translation-05-Layouts.md)。

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

[主题索引](index.md) · [GPU 编译与性能](../index.md)
