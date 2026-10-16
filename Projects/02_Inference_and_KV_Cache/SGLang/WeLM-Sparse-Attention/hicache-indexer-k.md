---
tags:
  - topics/sparse-attention
  - topics/kv-cache
  - topics/source-reading
date: 2026-10-16
---

# WeLM Sparse 的 HiCache：Indexer-K、Host 内存与页面恢复

本文依据 PR !497 的固定提交 `f96e0205bb312894edef6ec308fd04290931dfff`。比较基点为 `daa5fb89b3441b39ed61fa1fbcede40ac9ac5551`。讨论的是 WeLM sparse 接入单体 Host L2 缓存；已有的调度、控制器和前缀树机制也会用于解释调用链，但不应被误认为本 PR 全部新写。

## 1. 为什么 Attention KV 之外还需要 Indexer-K

稀疏 Attention 的两个职责需要分开：Indexer 根据当前 Query 判断哪些历史位置值得参与计算；主 Attention 对选中的位置执行正式的注意力计算，并用 V 汇总内容。

Indexer-K 保存的是历史 token 用于打分的向量，不是 Top-K 编号，不是主 Attention 的 K，也不是最终 attention 权重。当前 Query 的变化会改变打分和选择结果，因此保存可复用的历史 K，比把某次选择结果当作长期缓存更合理。这个 PR 的 L2 sidecar 保存 Indexer-K，不持久化 selection。

源码入口：[WeLMSparseIndexer.store_key / forward](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/layers/attention/welm_sparse_indexer.py#L155)。

`store_key()` 的主要步骤如下：

1. 从 backend metadata 中取得当前需要写入的 token 行与位置。
2. 对 hidden state 做 `wk` 投影。
3. 按特征维做 RMS 归一化，再应用 `gamma_k`；是否加 1 取决于 zero-centered 配置。
4. 转为 BF16，应用 RoPE。
5. 通过 `set_index_k_buffer()`，写入 `out_cache_loc` 对应的 GPU token 槽。

`forward()` 则生成 Indexer Query 和 head weights，读取历史 Indexer-K，将它们交给 `runtime.select()`，得到这次 Query 的选择结果。

```text
历史 token hidden ── wk / 归一化 / RoPE ──→ Indexer-K cache
                                                   ↓
当前 token hidden ── wq / ww ──→ Query、weights ──→ 打分与选块
                                                   ↓
主 Attention 自己的 Query、K、V ────────────────→ 稀疏 Attention
```

解释性例子：已经缓存 100 个历史 token，现在处理第 101 个 token。Indexer 用当前 Query 与历史 Indexer-K 比较，选出相关历史块；主 Attention 再读取那些块中的主 K/V。下一 token 可以复用这 100 个历史 Indexer-K，但通常需要重新计算选择结果。

Indexer 只承担打分，不需要像主 Attention 那样对自己的 V 做加权汇总，所以这里没有 Indexer-V。名称里的 K 是相似度匹配中的 Key，不意味着必须有一个配套 V buffer。

## 2. HiCache 为什么需要配套 Host 池

HiCache 是分层缓存机制。GPU 缓存可视为 L1，Host 内存为 L2；其他存储后端可构成更低层级，但本 PR 的 WeLM sparse 集成只支持单体 L2。

模型执行需要 GPU 上的缓存。此前初始化已建立的 GPU 池包括主 Attention KV、Indexer-K，以及配置启用时的 SWA 和 MTP draft 池。`build_welm_sparse_stack()` 并不重新创建这些 GPU 池，而是为它们建立配套 Host 存储与搬运控制器。

当一个前缀从 GPU 被驱逐但仍保留 Host 副本时，下一次命中该前缀可以恢复缓存，减少前缀重算。对 WeLM sparse，只恢复主 KV 不够：后续 Indexer 还要读取相应的历史打分向量；启用 MTP 时也需要恢复相应 draft 状态。

## 3. 初始化入口与配置检查

调用链发生在服务初始化阶段；每个相关执行进程建立自己的缓存资源，并不是每次请求都调用 builder。

```text
Scheduler 创建 UnifiedRadixCache，启用 hierarchical cache
  → UnifiedRadixCache.init_hicache()
  → attach_hybrid_pool_to_unified_cache()
  → 识别 WeLMSparseKVPool / WeLMSparseSWAKVPool
  → build_welm_sparse_stack()
  → 绑定 HostPoolGroup、HybridCacheController、INDEXER sidecar
```

源码入口：[Scheduler 初始化入口](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/managers/scheduler.py#L1126)、[build_welm_sparse_stack](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/mem_cache/hybrid_cache/hybrid_pool_assembler.py#L1023)。

builder 的输入包括已存在的 `kvcache`、缓存与模型初始化参数、server args、加载事件和通信组；输出是 Host pool group、controller 和传输层数。

开头要求：

- `storage_backend is None`，不接入 L3。
- `hicache_load_end_layer is None`，不接入 Deferred。
- `pp_size == 1`。
- write policy 为 `write_through`。
- layout 为 `layer_first` 或 `layer_page_first`。
- IO backend 为 `kernel` 或 `direct`。

这些是当前集成边界，不是 sparse attention 算法必然只能这样实现。更外层还有其他组合限制；尤其不能由此推出 PD + HiCache 已支持。

## 4. 分开管理，为什么又要关联页面

Attention KV 和 Indexer-K 有独立 buffer，不共享同一块物理内存；关联的是同一批 token 的页面身份与生命周期。

`INDEXER` sidecar 跟随 `KV` anchor，使用 `ALL_PAGES` 命中策略。SWA 有自己的窗口语义，不能因为主模型存在 SWA，就只保留窗口内的 Indexer 历史。源码绑定见 [INDEXER sidecar 注册](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/mem_cache/hybrid_cache/hybrid_pool_assembler.py#L1279)。

“相同页数”不等于“相同字节数”。page size 在这里首先表达每页容纳多少 token；不同池的每个 token 内容大小可以不同。

解释性例子：每页 64 token。假设主 KV 每个 token 占 4096 B，Indexer-K 每个 token 占 256 B，则一页分别占 256 KiB 和 16 KiB。两者都分配 100 页，能覆盖同样 6400 个 token 槽，但占用内存不同。这个主 KV 大小仅用于示例，不代表具体 checkpoint。

在实际 WeLM Index-K 配置中，单层每 token 为一个 128 维 BF16 向量，即 256 B。跨层总量还需要乘以 Indexer 层数。

Host 页号与 GPU 页号也不要求相同。恢复时可以将 Host 页 2 搬到 GPU 页 5；关键是对应 KV 和 Indexer-K 的映射与生命周期保持一致。

## 5. Host 预算如何分配

builder 对主 Full/SWA 池逐个统计实际 K/V buffer 的字节数，并把 Indexer-K 和 draft 的字节数加入总量。这里不直接使用 Full wrapper 可能包含 sidecar 的大小，避免把 Indexer-K 重复计费。

显式设置 `hicache_size` 时，主池预算的核心关系是：

```python
host_size_for_pool = hicache_size * sizes[name] / total_bytes
```

接着由 `build_kv_host_pool()` 把字节预算转换成池容量。Indexer Host 不再独立按一份任意预算决定 token 容量，而是复制 Full anchor 的 `size`、`page_num` 和 `page_size`；draft sidecar 也按所跟随的主池建立容量。

解释性例子：假设 GPU 实际存储中主 KV 占 8 GiB、Index-K 占 2 GiB，无 SWA/draft，总 Host 预算按比例扩大到 30 GiB。主 KV 分到约 24 GiB，Index-K 通过匹配主池容量占约 6 GiB，二者覆盖同样的 token 槽。实际配置中的 `hicache_size` 采用代码的十进制 GB 换算，示例只说明比例关系。

未使用绝对预算时，主池沿用 Host/GPU 容量 ratio。页对齐、取整和现有备用页规则意味着总分配不是对预算的逐字节精确切分；理解预算时应区分目标预算、逻辑 token 容量与实际 buffer 大小。

## 6. MHATokenToKOnlyPoolHost 的职责

[MHATokenToKOnlyPoolHost](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/mem_cache/memory_pool_host.py#L928) 是本 PR 新增的 class。它既负责 Host Indexer-K 的内存组织，也提供既有缓存框架需要的备份、逐层恢复和页面访问接口。

关键成员来自两类对象：

| 来源 | 属性 | 用途 |
| --- | --- | --- |
| GPU Index-K 池 | dtype、head_num、head_dim、layer_num | 决定每 token 的实际存储大小 |
| Full Host anchor | size、page_num、page_size | 保持可覆盖的 token 页容量一致 |

每 token 跨所有层的字节数是 `head_dim * head_num * layer_num * dtype.itemsize`。`layer_first` 可理解为按 `[layer, token, head, dim]` 组织；`layer_page_first` 将 token 拆为 page 和页内 token 维。

这里的 MHA 是存储家族的命名，不代表 WeLM 主 Attention 一定使用等量 Q/KV heads。GQA 也可以使用这个普通 head 布局的池，实际存储由 KV head 数决定。

不能直接替换为已有的 `NSAIndexerPoolHost`：后者适配 `NSATokenToKVPool` 的量化 Index-K 与 scale 打包表示，访问的是另一套字段和物理布局；WeLM 这里使用普通 BF16 K-only buffer。差异落在数据表示与接口契约，而不只是“模型算法名字不同”。

同理，复用名称带 `_mla` 的搬运函数也不意味着 WeLM 使用 MLA。搬运层可以复用单 buffer plane 的复制能力；MLA 的压缩 latent 表示与 WeLM 的 BF16 Index-K 在算法语义上仍不同。

## 7. PageTransfer 如何适配 K-only

[page_transfer.py](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/mem_cache/page_transfer.py) 将一次搬运拆成静态资源和动态映射：

| 对象 | 职责 |
| --- | --- |
| PageTransferBinding | 保存池的 buffer planes、指针表、每页字节数等长期信息 |
| PageTransferMap | 保存本次 Host/GPU 页对应关系；direct 路径生成连续拷贝段 |
| PreparedPageTransfer | 结合 binding 和 map，执行所有层或指定层的搬运 |
| PageTransferGroup | 把多个池按同一次缓存操作组织起来 |

以前主 KV 每层两个 plane：K、V。本 PR 允许 Indexer 每层只有一个 K plane，主要修改 `_select_planes()`、`planes_per_layer` 和逐层偏移计算。

```python
width = binding.planes_per_layer
start, count = (0, binding.plane_count) if layer is None else (layer * width, width)
```

解释性例子：三层主 KV 的 planes 为 `[K0, V0, K1, V1, K2, V2]`，第 1 层从位置 2 复制两个 plane；三层 Indexer 为 `[K0, K1, K2]`，第 1 层从位置 1 复制一个 plane。若仍固定乘 2，Index-K 的逐层恢复就会错位。

### kernel 与 direct

两种路径都实现 Host↔GPU 搬运，主要区别在执行方式。

- `kernel`：通过 GPU SM 执行复制 kernel。page 路径调用 `module.sm`，进入 `launch_hicache_pages` / `hicache_copy_pages`。
- `direct`：通过 CUDA memcpy API 提交复制。默认实现使用 `cudaMemcpyBatchAsync`；该代码还有其他实现分支。实际 CUDA 版本与 API 支持需要匹配，不应假设不支持时自动 fallback。

底层入口见 [hicache_pages.cuh](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/jit_kernel/csrc/hicache_pages.cuh)。本 PR 主要补齐 K-only 接线，没有新增这套 CUDA 页复制 kernel。`layer_first` 还通过 Host 类的既有 JIT/传统搬运函数执行，不能将所有 layout 都简化为同一个 PageTransferGroup 路径。

direct 不代表固定使用某个硬件引擎，也不能仅凭名字断言总比 kernel 快；碎片程度、连续段数量、调度开销和链路情况都会影响性能。

## 8. 从前缀命中到逐层恢复

运行时链路与初始化不同：

```text
请求匹配缓存前缀
  → 判定需要的 Host 数据已就绪
  → 分配 GPU 目标槽，建立 Host/GPU 映射
  → 提交加载操作
  → HybridCacheController.start_loading()
  → load stream 上按层恢复所需 pools
  → 记录对应层的完成事件
  → 模型消费者等待事件，再读取恢复的数据
```

[HybridCacheController](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/mem_cache/hybrid_cache/hybrid_cache_controller.py#L586) 的 `start_loading()` 是既有逻辑，不是本 PR 新增的主功能。新池接入这个控制器后，Index-K 与主 KV、必要 draft 状态一起参与所需的加载与同步。

记录完成事件不等于 CPU 当时已经等待复制完成。正确性来自 CUDA stream/event 顺序：消费者在使用某层数据前，必须等待覆盖该层必要 planes 的事件。

备份方向由 controller 的写入路径组织，通常将所需层从 GPU 搬到 Host；Host 数据完成并被确认后才可作为可用命中来源。备份已提交、Host ready、GPU 恢复已提交、模型可读取，是不同状态。

## 9. 复习时应保留的边界

- Sparse 的主 Attention KV、Indexer-K、selection 是不同数据；本次增加的是 Indexer-K 的 L2 存储与恢复适配。
- 配套容量和页面关联不等于共享物理 buffer，也不要求 Host/GPU 页号相同。
- builder 负责初始化资源；控制器和前缀缓存负责请求运行时行为。
- 阅读调用链需要包含已有代码，但应将它与 PR diff 区分。
- [PR 验收文档](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/docs/msa_merging/todo/05-msa-hicache.md) 报告了历史实机验收；其中明确指出取消观测时 CUDA 事件已完成。它不能被解释为已验证所有 DMA 进行中取消场景，也不能代替对当前提交的运行验证。

返回 [WeLM Sparse 学习入口](index.md)。同一 PR 的另一条工作线见 [Mooncake 并发修复](../Disaggregation/mooncake-gpu-source-lifetime.md)。
