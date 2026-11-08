# Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion：阅读笔记

[所属主题](../../index.md)

- 论文：[原文](https://light-of-hers.github.io/assets/Chimera.pdf)

## 计算密集型算子链为什么仍受数据移动限制

算力与片外带宽的差距使 GEMM、卷积等计算密集型算子链也可能受数据移动限制。融合要解决两件事：怎样安排计算块的顺序以复用数据，以及怎样在每个块内高效执行硬件指令。

![](images/issue-30-01.png)

Kernel Fusion 可以有效优化 Memory-bound 的算子。然而，在新兴模型中计算密集型算子经常形成严格的数据依赖链，因此对于计算密集型算子形成有效率的融合是困难的。首先，算子可能会被分解成不同的计算块指向之前的工作。这些计算块的不同执行顺序可能会造成不同的数据移动。当前的工作（Ansor，TVM，AStitch，DNNFusion，Roller）不能优化计算密集型算子的执行顺序因为它们缺乏精确的性能模型去模拟数据移动。除此之外，在每个块中使用 hardware-specific 优化计算是很有挑战性的，过去的工作（DNNFusion，Bolt，AStitch）使用 fixed micro 来做不能扩展到其他平台。

Chimera 将这两级优化分开：块间用数据移动模型选择执行顺序，块内用可替换 micro-kernel 适配硬件。

## 从 GEMM 链区分块间与块内问题

计算密集型算子链中的中间结果需要跨算子复用，不能只优化单个算子内部的 tile。

![](images/issue-30-02.png)

Figure 1 中展示了两个经典的例子，(a) self-attention 是一个在 Bert 和 ViT 中广泛使用的 Transformer-based 模型，这个 layer 主要部分包含一个 batch GEMM 链，其中包含两个 batch GEMM 和一个 softmax。b 包含一个卷积链，包含一个 3x3 和 1x1 的卷积和两个 ReLu 层。在某种特定的 input shape 情况下卷积也可以成为 memory bound。

### 主要的挑战

在生成有效率的计算密集型算子链中提出了两个主要的挑战：

- 块间的执行顺序。计算密集型算子链融合时不同的执行顺序具有不同的局部性优化。使用 Figure2 中的 GEMM chain 作为例子(C = A x B, E = C x D)去描述不同执行顺序的影响。在 GEMM chain 中有四个不同的维度（m,n,k,l）并且这两个 GEMM 被切分成多个计算块。mnkl 这个顺序首先执行维度 l，然后是维度 k，其次是维度 n，最后是维度 m。
![](images/issue-30-03.png)

![截屏2023-12-11 21 24 33](images/issue-30-04.png)

表 2 中的工作部分解决了这个问题。Ansor，TASO，DNNFusion，MOpt，AStitch 和 Roller 仅在一个计算密集型算子内优化 block orders 并且使用 expert rules 修复 inter-op 的顺序。DNNFusion 将计算密集型算子分类为 Many-to-Many 类型的算子，但是没有办法将两个或者多个 Many-to-Many 的算子融合在一起因为它的 code generator 不能预测复杂融合的收益。CoSA 使用 mixed-integer programming(MIP) 来优化全部的执行周期而不需要考虑 inter-block 内存访问。HASCO 使用强化学习和 Bayesian 优化方法去探索软硬协同空间。AKG 使用多面体模型提高局部性，但是多面体是一个通用的模型，搜索空间太过巨大而很难去全部枚举，因此它使用启发式算法去发现解决方案，因此在实践中给出的解决方法通常是次佳的。Atomic 仅仅考虑了 inter-engine 的数据重用（例如 Figure 2 中对矩阵 C 的重用）。但是输入输出的数据重用也对性能有很大的影响。

- 块内的代码生成。在一个块中调度计算是高性能 kernel 实现的核心。一个块中的指令应该被调度以隐藏内存访问延迟以及最大化计算流水线的利用。AKG，Ansor 使用 loop transformations 以及 tuning 生成 micro kernel，但为新的硬件高效生成 micro-kernel，仍需要相应后端与调优支持。DNNFusion、AStitch 以及 Bolt 使用 hand-tuned 去优化 fixed computation pipeline。然而，它们的 micro kernels 与 inter-block 优化紧密耦合，这使得支持新的运算符或新的加速器变得困难。

## 分块、重排与 micro-kernel 的分工

Chimera 将输入 DAG 划分为计算块，基于分析模型联合选择分块参数与块间执行顺序，再用可替换 micro-kernel 实现硬件相关的块内优化。

## 块间优化：联合选择分块参数与执行顺序

### Block Decomposition

每个计算密集型算子可以被分成多个计算块。分块通过 loop tiling 和重排序进行实现。一个计算块包含一个小的 tile，它访问输入数据的 tile，产生输出数据的 tile。一个计算块通常可以放在一个小的计算核心中，并且一个块中的访问数据可以容纳在芯片的本地内存中。这里使用一个向量来表示所有的分块参数，例如在一个 GEMM chain 中，我们使用（T_M，T_N，T_K，T_L）因为有四个维度要去分解，而在卷积中最多有十个维度。Chimera 计划选择最优的块分解策略从而使得性能最大化。

### Minimizing Data Movement Volume via Block Reordering

块间优化的目标是去找到块执行顺序以及分块参数最终最小化数据移动。最小化数据移动和最大化数据局部性是等同的。
