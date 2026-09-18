# sglang DualChunk FlashAttention backend

## 代码结构

### `DualChunkFlashAttentionMetadata` 数据类

- `seq_lens`, `block_tables`: SGLang 的标准元数据，记录每个请求的长度和 KV Cache 页表。
- `query_start_loc`, `seq_start_loc`: 用于将一批请求的输入（Q, K, V）拼接成一个大张量后，还能找到每个请求的起止位置。这是 FlashAttention 的标准输入格式。
- DCA 专属元数据:
    - `seq_lens_intra`, `block_tables_intra`: 专门为 Intra-chunk 注意力计算准备的序列长度和页表。
    - `seq_lens_succ`, `block_tables_succ`: 专门为 Succ-chunk 注意力计算准备的。
    - `seq_lens_inter`: 专门为 Inter-chunk 注意力计算准备的。

### `DualChunkFlashAttentionBackend` 核心实现类

- `__init__`: 初始化
- `init_forward_metadata(self, forward_batch)`: 元数据初始化
- `forward_extend(self, ...)`: 处理 Prefill
    - 当用户输入一个新的 prompt 后会调用这个函数。
    - 步骤 1: 拆分 query：`torch.split(q, q.shape[-1] // 5, dim=-1)` 将模型输出的 Q 向量拆分成前面提到的 5 个专用 Query。
    - 步骤 2: 存储 KV：将新生成的 K 和 V 存入 SGLang 的 KV Cache 中。
    - 步骤 3: 调用核心 Prefill 函数：`self._dual_chunk_flash_attn_prefill(...)`。
- `foeward_decode(self, ...)`: 处理 Decode
    - 在逐个生成 token 时调用
    - 与 `forward_extend` 类似，也先拆分 Query，存储新的 KV。
    - 调用核心 decode 函数：`self._dual_chunk_flash_attn_decoding(...)`

