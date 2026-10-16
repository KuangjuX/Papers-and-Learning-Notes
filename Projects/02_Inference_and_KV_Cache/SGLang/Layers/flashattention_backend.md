# sglang FlashAttention backend

code path: https://github.com/sgl-project/sglang/blob/main/python/sglang/srt/layers/attention/flashattention_backend.py

## 核心数据结构：`FlashAttentionMetadata`

```python
@dataclass
class FlashAttentionMetadata:
    # --- 最核心的 PagedAttention 参数 ---
    # (1) page_table: [batch_size, max_num_pages]
    #     记录了每个请求的 KV Cache Page 在物理显存池中的索引。
    #     这是 PagedAttention 的灵魂。FlashAttention 内核会用它来寻址。
    page_table: torch.Tensor = None

    # (2) cache_seqlens_int32: [batch_size]
    #     每个请求在 KV Cache 中的实际序列长度（Key 的长度）。
    cache_seqlens_int32: torch.Tensor = None

    # --- FlashAttention Varlen (可变长) 接口参数 ---
    # (3) cu_seqlens_q: [batch_size + 1]
    #     Query 序列长度的累加和 (Cumulative Sum)。
    #     例如，如果 q_lens = [10, 1, 1]，则 cu_seqlens_q = [0, 10, 11, 12]。
    #     它告诉 FlashAttention 如何从一个扁平化的 Q 张量中切分出每个请求的 Q。
    cu_seqlens_q: torch.Tensor = None

    # (4) cu_seqlens_k: [batch_size + 1]
    #     Key 序列长度的累加和。同上，用于切分 K。
    cu_seqlens_k: torch.Tensor = None

    # (5) max_seq_len_q: int
    #     当前批次中，单个请求的最大 Query 长度。
    #     在 Prefill 阶段，这个值可能很大；在 Decode 阶段，这个值通常是 1。
    max_seq_len_q: int = 1

    # --- 其他参数 ---
    # window_size: 用于滑动窗口注意力 (Sliding Window Attention, SWA)。
    window_size: tuple = (-1, -1)

    # encoder_...: 用于 Encoder-Decoder 模型的 Cross-Attention。
    # local_attn_metadata: 用于一种特殊的 chunked local attention 实现。
    # swa_spec_metadata: 用于推测解码 + SWA 的复杂场景。
```

## `FlashAttentionBackend` class

### `forward_extend` 和 `forward_decode`

这两个方法是执行阶段的核心，它们功能类似，但主要服务于 Prefill 和 Decode 两种不同的场景。

- `forward_extend`

1. 获取元数据：`metadata = self.forward_metadata`，直接复用 `init_forward_metadata` 的结果。
2. 准备参数：
    - `window_size`: 如果是 SWA 模型，设置滑动窗口大小。
    - `k_descale`, `v_descale`: 处理 FP8 KV Cache 的反量化尺度。
    - `causal`: 对于自回归模型，通常为 True。
3. 调用 `FlashAttention`:
    - `if not self.use_mla`: (标准多头注意力)
        - 获取 KV Cache 的物理 buffer。
        - 调用 `flash_attn_with_kvcache`。这个函数是 FlashAttention 官方提供的、支持 PagedAttention 的接口。我们将准备好的 `q`, `page_table`, `cache_seqlens`, `cu_seqlens_q` 等参数传入。
    - `else`: (多头隐注意力 MLA)
        - MLA 是一种特殊的注意力机制，它将 K 和 V 的一部分信息（通常是与位置无关的）吸收到一个隐状态中。这里的逻辑会分别处理 `rope` 部分和 `nope` 部分，并调用 `flash_attn_with_kvcache` 的一个变种接口。
4. 处理 Cascade Attention：
    -  if `use_cascade_attn`:，代码会调用两次 `flash_attn_with_kvcache`，一次使用 `metadata`，一次使用 `metadata_expand`。
    - 然后调用 `merge_state_v2_wrapper` 将两次的结果（`o` 和 `softmax_lse`）合并，得到最终的注意力输出。`softmax_lse` (Log-Sum-Exp) 是 FlashAttention 计算过程中的一个中间产物，可以用来安全地合并两次 attention 的结果。



