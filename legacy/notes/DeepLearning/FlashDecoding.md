# Flash-Decoding for long-context inference

FLash-Decoding 是 Tri Dao 在他们在 FlashAttention-v2 之后发的一篇 blog，没有写论文。

Motivation 在于随着输出 tokens 长度增加，Attention 计算复杂度越来越高。因此希望 LLM 能够处理长上下文，增加上下文长度，LLM 可以输出更长文档。当上下文长度很长的时候，Attention 操作在推理中占据了很大的比例。此外，在 batch_size 增加的时候，即使在相对较小的上下文里，Attention 也可能成为瓶颈。因此提出了 Flash_decoding，可以在推理过程中显著加速 Attention 操作，主要思想是最大并行加载 keys 和 values 的效率，通过重新缩放组合得到正确结果。

## Multi-head attention for decoding

在 decoding 过程中，每个生成的新 token 需要与之前的 tokens 合并后才能继续执行 attentio 操作，$ softmax(Q \times K^T) \times V $。Attention 操作在**训练过程中的平静主要卡在访问内存读写中间结果($ Q \times K^T $) 的带宽**。

但上述优化不能直接用于**推理**过程。在训练过程中，FlashAttention 对 batch size 和 query length 进行了并行化加速。**而在推理过程中，query length 通常为 1，如果 batch suze 小于 GPU 上的 SM 数量，那么整个计算只用了 GPU 的一小部分**。特别是上下文较长时，通常会减少 batch size 来适应 GPU 内存。例如 batch size 为 1 时，FlashAttention 对 GPU 利用率小于 1%。

![](FlashDecoding/parallelization.gif)

## A faster attention for decoding: Flash-Decoding

FlashAttention 对 batch size 和 query length 进行了并行化加速，Flash-Decoding 在此基础上新增了一个并行化维度，keys/values 序列长度。即使 batch size 很小，但只要上下文足够长，就可以充分利用 GPU。与 FlashAttention 类似，Flash-Decoding 几乎不用额外存储大量数据到全局内存，从而减少了内存开销。

![](FlashDecoding/parallelization_kv.gif)

Flash Decoding 主要包含以下三个步骤：

- 将 keys 和 values 分成较小的 block
- **使用 Flash Attention 并行计算 query 与 每个 block 的注意力（与 Flash Attention 的最大区别）**。对于每个 block 的每行，Flash Decoding 会额外记录 attention values 的 log-sum-exp，用于第三步 rescale。
- 对所有输出 blocks 进行 reduction 得到最终输出，需要用 log-sum-exp 来重新调整每个块的贡献。

实际应用中第一步不设计 GPU 操作，需要对第 2 步第 3 步执行单独 kernels。最终的 reduction 会引入一些额外的计算，但总体上 Flash-Decoding 通过增加并行化的方式取得了更高的效率。

在 flashdecoding split kv 后需要按照 LSE 对不同的结果进行 rescale:

```python
        # This loop should be mapped to different blocks for parallel execution.
        for n in range(loop_n):
            k = ks[n]
            v = vs[n]
            
            output, lse = self.flash_attn_split_kv(q, k, v)
            
            # Compute the actual output by reducing over all the splits, using the log-sum-exp to scale the contribution of each split.
            
            new_max_logic = torch.max(max_logic, lse)
            
            old_scale = torch.exp(max_logic - new_max_logic)
            acc *= old_scale
            
            exp_logic = torch.exp(lse - new_max_logic)
            acc += exp_logic * output
            sum_exp = sum_exp * old_scale + exp_logic
            max_logic = new_max_logic
            
        return acc / sum_exp
```