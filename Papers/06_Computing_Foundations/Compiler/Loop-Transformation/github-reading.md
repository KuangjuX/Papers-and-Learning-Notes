# A Loop Transformation Theory and an Algorithm to Maximize Parallelism：开篇摘记，未完成

[所属主题](../../index.md) · [GitHub 历史笔记目录](../../../github-issues.md)

- 论文：[原文](https://ieeexplore.ieee.org/document/97902/)
- 原记录：[Issue #34](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/34)

## 历史阅读笔记

这篇论文试图提出一种算法在 general loop nests 中找到最大并行。

### Introduction

Loo Transformations 例如 **interchange**，**reversal**，**skewing（歪曲）**，**tilling**。为了在大规模计算机上生成代码以及提高数据局部性，更有挑战性的问题是如何混合这些 transformations。

一种基于矩阵的转换方法已经被推荐使用在一个 loop nests 的重要子集上。这个 class 在稠密矩阵上包含了很多线性代数代码。，所有的 systolic array 算法都属于这个 class。Loop nests 的依赖可以被表示成一个有 n-deep loop nest 至少有 n-1 个并行度的原型，并且可能在所有的 loop 维度上剥削并行度。距离向量不能表示 general loop nests 的依赖，两个或更多的 loops 必须串行执行。通常表示这些依赖的是 **direction vectors**。
