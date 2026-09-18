# 大模型与深度学习

从神经网络、Transformer 与注意力机制开始，连接训练、推理和具体实现。

从[LLM 学习路线](../../reading/learning-paths/llm.md)开始，或在[论文索引](../../reading/index.md)中查找原文。

原始附件：[LLM Inference Survey 笔记 PDF](surveys/Inference/llm_inference_survey.pdf)。

- [Adam 论文前置学习路线](adam-prerequisites.md)
- [DeepSeek Sparse Attention (DSA) 算法流程](deepseek-dsa/deepseek-sparse-attention-dsa.md)
- [DeepSeek-V4: 迈向高效百万级上下文智能](deepseek-v4/deepseek-v4.md)
- [Event Tensor：用“事件张量”编译动态 Megakernel](event-tensor/event-tensor.md)
- [神经网络](foundations/3Blue1Brown-nerual-network.md)
- [Dual Chunk Attention](foundations/DCA.md)
- [FlashAttention 笔记](foundations/FlashAttention.md)
- [Flash-Decoding for long-context inference](foundations/FlashDecoding.md)
- [Linear Attention](foundations/LinearAttention.md)
- [Multi-head Latent Attention](foundations/MLA.md)
- [Sparse Attention](foundations/SparseAttention.md)
- [Transformer](foundations/Transformer.md)
- [HiSparse：稀疏注意力的分层 KV Cache 管理](hisparse/hisparse.md)
- [IndexCache：跨层复用稀疏索引，以及它为什么能被训练](indexcache/indexcache.md)
- [Distilling the Knowledge in a Neural Network](knowledge-distillation/distilling-the-knowledge-in-a-neural-network.md)
- [MegaMoE：把 MoE 前向路径压进一个通信计算融合核](megamoe/megamoe.md)
- [MiniMax Sparse Attention：论文算法与代码实现精确对应](minimax-msa/MiniMax%20Sparse%20Attention%EF%BC%9A%E8%AE%BA%E6%96%87%E7%AE%97%E6%B3%95%E4%B8%8E%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E7%B2%BE%E7%A1%AE%E5%AF%B9%E5%BA%94.md)
- [MSA 中的 KL 对齐与局部知识蒸馏](minimax-msa/msa-kl-distillation.md)
- [MSA 为什么采用 KV-outer Sparse Attention Forward](minimax-msa/msa-kv-outer-forward.md)
- [MSA Indexer 与 DSA Lightning Indexer 的差别](minimax-msa/msa-vs-dsa-indexer.md)
- [MiniMax Sparse Attention (MSA)](minimax-msa/msa.md)
- [Fast Transformer Decoding: One Write-Head is All You Need](mqa/fast-transformer-decoding-mqa.md)
- [PithTrain 代码解读与训练系统学习路线](pithtrain/pithtrain-code-guide.md)
- [PithTrain: A Compact and Agent-Native MoE Training System](pithtrain/pithtrain.md)
- [A Survey of Efficient Attention Methods: Hardware-efficient,  Sparse, Compact, and Linear Attention](surveys/Attention/efficient_attention_survey.md)
- [A Survey of LLM Inference Systems](surveys/Inference/llm_inference_survey.md)

## 源码与推理实践

- [SGLang WeLM DSA：Indexer、Selection 与 FA3](../../projects/sglang/welm-dsa-forward.md)
- [WeLM DSA：Q heads、共享 Selection 与主 Attention 的计算形状](../../projects/sglang/welm-dsa-small-heads.md)
