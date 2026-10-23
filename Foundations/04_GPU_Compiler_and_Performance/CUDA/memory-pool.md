# GPU 内存池：空间管理与异步生命周期

基于[原始问答](../../07_Books_and_Technical_References/Interview-AI-Infra/index.md)的 AI 整理，代码为未经 GPU 验证的设计草稿。

## 原设计的数据流

Arena 是从 CUDA 一次申请的大块内存。池在 arena 内划分 block，并维护三类状态：

| 状态 | 原结构 | 作用 |
| --- | --- | --- |
| 所有 arena | `vector<void*>` | 最终交还给 CUDA |
| 空闲块 | `map<size_t, list<void*>>` | 按大小 `lower_bound(size)` 搜索不小于请求的块 |
| 已分配块 | `map<void*, size_t>` | 释放时找回块大小，检查地址是否归本池管理 |

分配依次执行：请求大小规范化 → 搜索空闲块 → 从索引摘除 → 必要时切分 → 记录分配；找不到时增加 arena。释放执行：校验 ownership → 等待或追踪最后一次 GPU 使用 → 合并可合并相邻块 → 放回空闲索引。

`map` 的查找是对数复杂度；不能把 best-fit 内存池当成 O(1) allocator。CUDA arena 扩容还可能成为远大于元数据查找的慢路径。

## 切分必须先满足对齐

设请求字节数为 r，选择的对齐为 A，则在检查加法不会溢出后向上取整：

$$
r_{\mathrm{aligned}}=\left\lceil r/A\right\rceil A.
$$

例：arena `[0,1024)`，对齐 A=256，请求 r=300，实际占用 512；剩余 `[512,1024)` 仍是对齐地址。原代码直接用 `ptr + 300` 创建剩余块，后续返回地址就可能不再满足所需对齐。“剩余超过 128 字节才切分”只是一种碎片阈值，不能代替对齐。

还要明确零字节请求、超过最大 arena 的请求、大小溢出、CUDA 申请失败与异常安全。不要固定预分配 1 GiB 并假设所有部署环境都接受。

## 原扩容路径的自我死锁

原文关键片段：

```cpp
void* alloc(size_t size) {
    std::lock_guard<std::mutex> lock(m_mutex);
    // ...找不到空闲块，申请新 arena，加入 free list...
    return alloc(size);  // 原草稿：同一线程再次进入并尝试锁住 m_mutex。
}
```

外层持有锁，只有递归返回后才释放；内层需要先获取这把非递归锁，因此无法继续。问题不在递归深度。更合理的教学流程是同一持锁范围内重试，或将已持锁的逻辑放入专门内部函数：

```text
alloc(r):
    validate_and_align(r)
    lock(metadata_mutex)
    reclaim_only_completed_pending_blocks()
    while no_suitable_free_block(r):
        grow_arena_and_insert_free_block(r)  # 不再调用公开 alloc
    take_split_and_record(r)
    unlock(metadata_mutex)
    return allocation
```

这是控制流示意，不是完整实现。真实实现若要将耗时的 arena 申请移到锁外，还要处理重新检查、失败回滚和并发增长问题。

## 合并需要地址与 arena 信息

仅按大小索引无法高效判断相邻块。通常还需要记录 arena ID、offset、size，以及按地址查找前后邻居的结构。只有**属于同一 arena 且相邻的空闲范围**才可合并；不同 arena 的地址恰好相邻也不能混成一个可整体释放的分配来源。

例：同一 arena 的 `[0,256)` 和 `[256,768)` 都空闲时，可以合成 `[0,768)`。若只剩 `[0,256)` 与 `[512,768)`，总空闲 512 字节仍无法满足连续 400 字节请求，这就是外部碎片。切分、合并会同时修改大小索引和地址索引，需要维护一致性。

## Host free 不等于 GPU 已不用

原 `dealloc` 立即把地址塞回 free list，只解决了 Host 元数据回收，未保证异步 kernel 已停止访问。Host mutex 不会等待 GPU。

例：A stream 的 kernel 正在读地址 p，CPU 紧接着 `dealloc(p)`，B stream 又 `alloc` 得到 p 并写入。两个 Host 操作完全加锁也仍可能产生 GPU 数据竞争。

可采用约定的 stream ownership、记录完成 Event 后放入 pending list，或使用 CUDA 的 stream-ordered allocator。若一个分配被多个 stream 使用，回收依赖必须覆盖**所有使用者**，不能只在任意一个 stream 上记 event。`cudaMallocAsync` / `cudaFreeAsync` 的跨 stream 使用同样需要显式依赖；“Async”不会自动发现全部别名访问。依据：[Stream-Ordered Memory Allocator](https://docs.nvidia.com/cuda/cuda-programming-guide/04-special-topics/stream-ordered-memory-allocation.html)（本机核对 13.3 快照）。

销毁池之前也必须保证 outstanding allocation 和所有 GPU 使用已经结束。析构中的 `cudaFree` 不应被当作完整的所有权协议；错误处理也要避免析构路径抛异常。

## 复习时先答这三个不变量

1. 任一地址范围在 allocated、pending、free 中只属于一个状态。
2. 返回的地址满足所需大小、对齐和 ownership，空闲索引与真实范围一致。
3. 从 pending 转为 free 时，先前所有 GPU 使用都已完成或被正确的顺序关系覆盖。

这三个条件分别约束空间、数据结构与时间。完整实现还需要用压力测试和 GPU 工具验证，原面试草稿不能直接作为可复用 allocator。
