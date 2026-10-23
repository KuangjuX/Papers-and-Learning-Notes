# CUDA 内存与同步

来源：Notion 8.13 CUDA 八股，见 [归档入口](../../07_Books_and_Technical_References/Interview-AI-Infra/index.md)。原文列出内存题、回答了 Stream；本文的内存例子、边界条件与订正为 AI 整理补充。语义核对 CUDA Programming Guide 13.3 与 Best Practices 官方快照。

## 先区分地址空间、缓存和共享范围

| 名称 | 主要用途与范围 | 易错点 |
| --- | --- | --- |
| Register | 单个线程的标量或编译器分配的数据 | 寄存器压力会限制驻留；并非所有局部变量都进入寄存器 |
| Local memory | 每线程私有地址空间，如 spill 或无法放入寄存器的局部数组 | “私有”不代表物理上位于片上，通常由设备内存承载并经缓存访问 |
| Shared memory | block 内线程协作、tile 暂存 | 软件管理，需要正确同步；cluster 的 distributed shared memory 是另外的扩展 |
| Global memory | 跨 block 的设备数据 | 地址可见不等于读写有序，缓存也不替代同步 |
| Constant memory | 只读常量，适合 warp 内同址读取 | 不同线程读取很多不同地址时不能一概认为更快 |

L1、L2 是缓存层次，不应与上述地址空间并列成完全互斥的“几种内存”。具体缓存路径依架构、指令与配置而定。

## 合并访问和向量化分别改善什么

合并访问关注**一个 warp 的地址集合**能否落在较少的内存事务中。向量化关注**单线程每条指令**加载几个元素。向量化可以减少指令数，但不自动减少总字节，也不能修复不合理的跨线程地址分布。

例：连续 FP32 数组中 lane `t` 读 `x[t]`，32 个线程共请求连续 128 字节；lane `t` 读 `x[32*t]` 则地址跨度显著增大。若每线程改读 `float4`，需要满足 16 字节对齐、有效边界、类型访问规则，并检查实际生成指令；直接把任意偏移的地址强转为 `float4*` 不构成正确优化。

搬运优化通常依次考虑减少数据量、融合避免中间落盘、连续访问、复用，再考虑向量化和流水线。Host↔Device 搬运还要考虑 pinned buffer、传输粒度和异步 overlap。已有 [合并访问](Memory/coalescing.md)、[向量化](vec.md) 可继续展开。

## bank conflict：按一次 shared memory 请求分析

对于现代 NVIDIA GPU 常用的 32 个 bank、连续 32-bit word 交错映射，分析标量 FP32 请求时可写为：

$$
\operatorname{bank}(a)=\left\lfloor a/4\right\rfloor\bmod 32.
$$

例：`float s[32][32]` 按列读取 `s[t][0]`，相邻 lane 的 word 地址相差 32，全部映射到同一 bank 的不同地址。改为 `s[32][33]` 后，bank 是 `33t mod 32 = t`，32 个线程分散到不同 bank。多个线程读取同一个 shared word 可以广播，不能算作这种冲突。

这个例子针对特定访问宽度；向量访问会被拆成事务，不能只按源码中一个“128-bit load”判断冲突阶数。Padding 与 [swizzle](Memory/swizzle.md) 都是布局手段，需同时满足消费者的索引与指令约束。依据：[Best Practices §10.2.3](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html#shared-memory)。

## Stream 是顺序与依赖的表达

通常的 stream 内操作按入队顺序执行；不同 stream 可以并发，但没有天然先后关系，也不保证实际重叠。资源不足、隐式依赖和调度都可能导致串行。特殊的 programmatic dependent launch 等机制有额外规则，不用于推翻普通 stream 的依赖模型。

| 操作 | 等待什么 | Host 是否等待 GPU 完成 |
| --- | --- | --- |
| `cudaStreamSynchronize(s)` | s 中此前提交的工作 | 是 |
| `cudaDeviceSynchronize()` | 当前设备此前提交的工作 | 是 |
| `cudaEventRecord(e, a)` | 把事件记录排入 a | 此调用不要求 Host 等到 GPU 执行完 |
| `cudaStreamWaitEvent(b, e, 0)` | b 后续工作等待 e 所代表的前驱 | 不要求 Host 等待事件完成 |

例：A 写入 `x`，B 读取 `x`，需要显式建立依赖：

```cpp
// 片段：省略创建、错误检查与销毁。
produce<<<grid, block, 0, stream_a>>>(x);
cudaEventRecord(ready, stream_a);
cudaStreamWaitEvent(stream_b, ready, 0);
consume<<<grid, block, 0, stream_b>>>(x);
```

只有 `produce → ready → wait → consume` 这条路径保证读取发生在写入后；两个 launch 在 CPU 上前后出现、但分别属于不同 stream，并不足够。

Legacy default stream 会与普通 blocking stream 产生隐式同步；`cudaStreamNonBlocking` 的名字是相对 legacy default stream 的同步行为，不是“所有调用都不阻塞 CPU”的承诺。Per-thread default stream 是另一种模式。Host buffer 使用 pageable memory 时，`cudaMemcpyAsync` 的实际 Host 异步行为可能受 staging 等因素影响；要可靠争取拷贝与计算重叠，应使用 pinned memory，并确认设备与复制引擎支持、stream 依赖和 buffer 生命周期。依据：[Asynchronous Execution §2.5](https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/asynchronous-execution.html)。

## 三种同步不能互相替代

- warp shuffle / warp 同步只涵盖指定 warp 内参与线程，不能跨 warp 广播。
- `__syncthreads()` 协调一个 block 的线程及相应内存可见性，不是跨 block 全局栅栏；条件分支中的参与必须正确。
- Stream / Event 建立 GPU 工作之间的依赖，与 Host mutex 解决不同层次的问题。

例如两个 block 通过 global memory 交换结果，单靠各自一次 `__syncthreads()` 没有建立 block 之间的顺序。可拆成有序 kernel，或使用满足约束的专门同步协议。归约中的具体错误见 [归一化与在线归约](../Ops/normalization-and-softmax.md)。
