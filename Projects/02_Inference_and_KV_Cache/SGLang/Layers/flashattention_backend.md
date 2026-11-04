---
tags:
  - topics/source-reading
  - topics/attention
aliases:
  - sglang FlashAttention backend
  - sglang DualChunk FlashAttention backend
---

# SGLang Attention backend：FlashAttention 与 DualChunk

Attention backend 把模型产生的 Q/K/V 和请求调度器维护的缓存状态，转换成设备 attention 接口需要的张量、页表与长度。标准 FlashAttention 路径主要解决变长请求和分页缓存的适配；DualChunk 还要组织多种 query 表示以及 chunk 之间的注意力范围。

两条路径固定于 SGLang 提交 [`7152c143`](https://github.com/sgl-project/sglang/tree/7152c143841df01cb8f5d27dd059fd338f958576)。DualChunk 文件随后在 [`c0b790cf`](https://github.com/sgl-project/sglang/commit/c0b790cf7fe6dc1516c3ec1f23de9b37baca654a) 中删除，因此这里解释的是保留两种 backend 的历史实现，不能作为当前主线仍支持 DualChunk 的依据。源码阅读未包含 GPU 运行验证。

## 共同入口：先准备批次 metadata，再执行各层

```text
ForwardBatch：请求归属、序列长度、新 token 的 cache 位置
  → init_forward_metadata：构造本轮页表和长度
  → 各层生成 Q/K/V
  → forward_extend / forward_decode
      → 按条件写入新 K/V
      → 读取缓存、选择该层所需 metadata
      → 调用 attention 接口
      → 必要时合并多部分输出
```

metadata 与模型层权重的生命周期不同：一次批次的长度和页表可以在多层之间复用，每层仍读取自己的 KV buffer。CUDA Graph 路径另有 capture/replay 的 metadata 更新入口，不能假定普通 Python 初始化会在每次 replay 中重新执行。

## FlashAttention：用页表描述每个请求的历史 KV {#flashattention}

### 核心 metadata

[`FlashAttentionMetadata`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/flashattention_backend.py#L63) 把变长请求和分页缓存分开描述：

| 字段 | 形状或含义 | 消费方关心的问题 |
| --- | --- | --- |
| `page_table` | `[batch_size, max_num_pages]`，物理 cache 页号 | 请求的逻辑历史存在哪里 |
| `cache_seqlens_int32` | `[batch_size]`，各请求有效 KV 长度 | 最后一页哪些 token 有效 |
| `cu_seqlens_q` | `[batch_size + 1]`，query 长度前缀和 | 如何切分扁平化 Q |
| `cu_seqlens_k` | KV 长度前缀和 | 相关 varlen/新增 KV 接口如何切分 K |
| `max_seq_len_q/k` | 批次中的最大 Q/K 长度 | kernel 调度与长度上界 |
| `window_size` | 默认 `(-1, -1)`；调用时还会按层选择窗口 | 是否限制滑动窗口范围 |
| `encoder_*` | encoder 长度和页表 | cross-attention 读取哪份缓存 |
| `local_attn_metadata` | local query offsets、长度、block table | 局部 attention 的独立视图 |
| `swa_spec_metadata` | SWA 的 speculative decoding metadata | 滑窗与投机分支怎样组合 |

例如两条请求本轮分别产生 10 和 1 个 query，`cu_seqlens_q=[0,10,11]`。第一条历史长度为 100 并不改变第二条 query 在扁平化 Q 中的起点；历史长度由 cache metadata 单独表达。

### Extend：写 cache、选择计算范围、调用 kernel

[`forward_extend`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/flashattention_backend.py#L1224) 沿以下步骤执行：

1. 当提供了 K/V 且 `save_kv_cache=True` 时，将新状态写到该层的 cache 槽。普通 K/V 与 MLA 分别调用 `set_kv_buffer` 和 `set_mla_kv_buffer`；cross-attention 使用对应 encoder cache 位置。
2. 读取 `self.forward_metadata`。根据层类型选择 causal 语义、滑动窗口、local attention 或 encoder metadata；这些选项并非只由“prefill”这个阶段名决定。
3. `prepare_paged_mha_query` 处理 query 与 cache dtype 的适配，并准备适用的反量化尺度。普通 FP8 的 `k_descale/v_descale` 与 MXFP8 的 scale 表路径不同，不能把低精度缓存都解释成同一个参数。
4. 普通分页 MHA/GQA 路径取得缓存，调用 `flash_attn_with_kvcache`，传入 Q、K/V cache、page table、cache lengths、query offsets、缩放和窗口等参数。跳过 KV cache 的特定路径则使用 `flash_attn_varlen_func`。
5. MLA 分支根据是否处理 chunked prefix cache，选择展开的 MHA 计算或 absorbed MLA 路径；后者从压缩缓存取出 latent KV 与 RoPE key。它不是简单地把普通 K/V buffer 换一个名字。

关键参数组装见 [causal、窗口和 cascade 条件](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/flashattention_backend.py#L1300)，分页调用见 [MHA 主路径](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/flashattention_backend.py#L1494)。

### Decode 与 cascade attention

[`forward_decode`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/flashattention_backend.py#L1785) 同样完成新 KV 写入、metadata 选择和 attention 调用。通常 decode 每个请求只有一个新 query，但投机分支仍会引入额外的选择条件。

该版本 extend 的 cascade 条件是 `target_verify && topk > 1 && !is_swa_layer`；decode 中则以 `spec_info is not None && topk > 1` 判定，SWA 的处理还有自己的后续分支。因此不能把 cascade 当作所有 prefill/decode 都必经的步骤。

普通 cascade 路径将公共 prefix 与各分支 suffix 分开计算，分别得到输出和 LSE，再用 `merge_state_v2_wrapper` 合并。该固定提交还包含满足额外条件时的 UNO fused suffix merge，不能笼统地说每次 cascade 都恰好发起两次相同 API 调用。见 [suffix 分派与合并](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/flashattention_backend.py#L1516)。

## DualChunk：按 chunk 关系组织多份 Query {#dual-chunk}

### 配置和 metadata

[`DualChunkFlashAttentionBackend.__init__`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L106) 从模型配置读取 `dual_chunk_attention_config`，其中 `chunk_size` 默认 8192、`local_size` 默认 1024，并要求本地 Q-head 数可被 KV-head 数整除。

[`DualChunkFlashAttentionMetadata`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L38) 除总长度与 `block_tables` 外，还包含：

| 字段 | 职责 |
| --- | --- |
| `query_start_loc`、`seq_start_loc` | 切分批次中的 query 与序列 |
| `orig_seq_lens`、`scaling_factor` | 原始序列长度与配置启用时的长度缩放 |
| `seq_lens_intra`、`block_tables_intra` | 当前 chunk 的范围 |
| `seq_lens_succ`、`block_tables_succ` | 紧邻前一个 chunk 的范围 |
| `seq_lens_inter` | 更早 chunks 的有效范围 |

Decode metadata 中 `chunk_len=chunk_size-local_size`，以 `(cache_seq_len-1)//chunk_len` 确定当前 chunk，再建立 intra/succ/inter 视图。例如 `chunk_len=7168`、历史长度 8000 时，当前 chunk 编号为 1，intra 长度为 832，紧邻的前一 chunk 长度为 7168，更早的 inter 部分为空。这里的数字由源码长度计算推得，不是 profile 结果。见 [decode metadata 构造](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L278)。

### Extend：五份 Query 与 chunked prefill

[`forward_extend`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L335) 将模型传来的 Q 沿最后一维等分为五份：

```python
query, query_succ, query_inter, query_succ_critical, query_inter_critical = (
    torch.split(q, q.shape[-1] // 5, dim=-1)
)
```

各部分再 reshape 为 `[num_query_tokens, num_heads, head_size]`。K/V 只有对应的 KV-head 表示，不能由五份 Q 推断 cache 也有五份副本。

正常缓存路径按条件写入新 KV，取得分页缓存后进入 `_dual_chunk_flash_attn_prefill`，同时传入五份 Q、query offsets、原始长度和 block table。后者继续按请求、chunk 与配置组织子计算。`save_kv_cache=False` 的 profile 分支直接调用普通 varlen attention，不能把它的执行路径当作完整 DualChunk prefill。

### Decode：消费三种主要 Query 与分区页表

[`forward_decode`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L446) 也拆分五份 Q，并按条件保存 KV；但交给 `_dual_chunk_flash_attn_decoding` 的是 `query`、`query_succ`、`query_inter` 三种主要 Query。两份 critical Query 没有通过这个 decode 接口继续传入。

Decode helper 分别处理 intra、存在时的 succ 和 inter，并按 LSE 合并。它要求外层 `causal=True`，且 `chunk_len` 可被 cache block size 整除；子调用可设 `causal=False`，因为各分区的可见范围已由 metadata 描述。外层语义和单次子调用的 mask 参数不能混为一谈。见 [decode helper](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L1467)。

## 多部分 Attention 为什么需要 LSE 合并

设同一 query/head 在不重叠的可见子集上分别计算出输出 $O_s$ 和 $L_s=\log\sum_j\exp z_j$。整体输出需要按各子集的归一化质量加权：

$$
a=\max_s L_s,\qquad
w_s=\frac{\exp(L_s-a)}{\sum_r\exp(L_r-a)},\qquad
O=\sum_s w_s O_s.
$$

例如两个子集的未归一化质量分别为 2 和 6，局部标量输出分别为 1 和 3，则权重为 $1/4,3/4$，合并结果为 $2.5$。直接平均输出得到 2，会丢失两个子集的质量差异。

标准 cascade 与 DualChunk 都需要保存这类归一化信息，但两者划分的上下文及 query/logit 定义不同。DualChunk 的 [`_merge_attn_outputs`](https://github.com/sgl-project/sglang/blob/7152c143841df01cb8f5d27dd059fd338f958576/python/sglang/srt/layers/attention/dual_chunk_flashattention_backend.py#L1425) 对 LSE 做减最大值、指数和归一化后再加权输出。分块合并恒等式不意味着 DualChunk 与原始全上下文 attention 等价，也不消除浮点归约误差。

拆成多个 attention 子问题的代价，是额外的子调用、局部输出和 LSE 存储，以及最终 merge。标准 cascade 通过分离公共前缀组织投机分支；DualChunk 则用不同 query 表示和可见范围改变计算。两者都使用合并公式，但是否节省时间取决于被复用或重新组织的工作能否覆盖这些额外成本。

这里追踪到 Python backend 与 attention API 的边界。具体 GPU 模板、MMA 形状、launch 数和速度仍取决于构建、设备、输入与运行记录；不能由一个 Python 方法名直接推断。稀疏 selection 与页表的衔接见 [WeLM Sparse Attention](../WeLM-Sparse-Attention/index.md)。
