# A Loop Transformation Theory and an Algorithm to Maximize Parallelism：开篇摘记，未完成

[所属主题](../../index.md) · [GitHub 历史笔记目录](../../../github-issues.md)

- 论文：[原文](https://ieeexplore.ieee.org/document/97902/)
- 原记录：[Issue #34](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/34) · 作者：KuangjuX
- 来源更新时间（UTC）：2024-01-22T14:08:15Z · 归档：2026-10-22
- 材料范围：开篇摘记，未完成；沿用现有论文清单的阅读状态，不由 issue 的 open/closed 判断是否读完。

## 阅读线索与覆盖范围

只记录循环变换的动机，以及 distance vector 和 direction vector 的区分；正文在 Introduction 结束，没有记录变换理论、算法与实验。

下方是个人历史阅读记录，保留原有技术细节、未完成的小标题和截图；其表述属于当时的阅读理解。本次 AI 整理了来源、章节层级、公式格式与本地图片，校注单独列出。

## 历史阅读笔记

来源：[正文](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/34)；KuangjuX；最后编辑（UTC）：2024-01-22T14:08:15Z。

这篇论文试图提出一种算法在 general loop nests 中找到最大并行。

### Introduction

Loo Transformations 例如 **interchange**，**reversal**，**skewing（歪曲）**，**tilling**。为了在大规模计算机上生成代码以及提高数据局部性，更有挑战性的问题是如何混合这些 transformations。

一种基于矩阵的转换方法已经被推荐使用在一个 loop nests 的重要子集上。这个 class 在稠密矩阵上包含了很多线性代数代码。，所有的 systolic array 算法都属于这个 class。Loop nests 的依赖可以被表示成一个有 n-deep loop nest 至少有 n-1 个并行度的原型，并且可能在所有的 loop 维度上剥削并行度。距离向量不能表示 general loop nests 的依赖，两个或更多的 loops 必须串行执行。通常表示这些依赖的是 **direction vectors**。
