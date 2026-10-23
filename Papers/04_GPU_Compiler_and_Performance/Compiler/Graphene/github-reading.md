# Graphene: An IR for Optimized Tensor Computations on GPUs：阅读笔记

[所属主题](../../index.md)

- 论文：[原文](https://mgarland.org/papers/2023/graphene/)

## 论文笔记

### 优化 GPU 数据移动

Nvidia Ampere GPU 能够通过单指令移动两维张量。`ldmatrix` 使用 warp(32 个线程)将一个 8x8 的矩阵从共享内存移动到 warp 线程的寄存器。`ldmatrix` 指令描述了严格的数据到线程映射。
![截屏2023-10-26 10 05 26](images/issue-27-01.png)
Figure 1a 表示没个线程在共享内存中必须访问的值，Figure 1b 表示在执行完指令后它在寄存器中接受的值。每个 warp 被分成每组有八个线程的四组。每一个八线程组在共享内存被分派一个独一无二的 8x8 tile。每个线程访问在共享内存中的一行，并在返回时接收每个 8x8 tile 中的两个相邻值，总共八个值。

![](images/issue-27-02.png) Figure 1c 和 1d 展示了 CUDA PTX 的实现和 IR 的实现。

### The Shape Of Tensors To Come

在这节里讲了如何使用新设计的 IR 去表示不同 memory layouts 的布局。
![](images/issue-27-03.png)

Figure 3(a) 和 Figure 3(b) 表示了列主序和行主序的矩阵表示方法，第一行表示维度，第二行表示步长，以 a 为例，维度为 (4, 8)，按行走步长为 1，按列走步长为 4。Figure 3(c) 和 Figure 3(d) 是更加复杂的维度表示。Figure 3(d) 分为 4 个维度，行上分为两个维度，小块步长为 1，大块步长为 4；列上也分为两个维度，小块步长为 2，大块步长为 8。

本节中也讲了如何使用 IR 去表示 tiling tensors。
![截屏2023-10-31 16 19 28](images/issue-27-04.png)

Figure 4(b) 中的 tile 解释如下：在第一个维度中两个逻辑上相邻构成一个 tile，步长为 1，在第二个维度中两个维度构成一个 tile，维度为 2。

### Logical Thread Groups

在高效的张量计算中需要在不同 kernel 点使用不同的线程排列。
![截屏2023-10-31 16 44 30](images/issue-27-05.png)
