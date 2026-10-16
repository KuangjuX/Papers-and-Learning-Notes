# Attention · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/01_Attention/index.md)

注意力机制、稀疏 Attention、高效内核、线性 Attention 与记忆。

共 31 个清单条目；已读 13，待读 18。保留原有跨分类重复条目与阅读状态。

## 本地笔记

- [DeepSeek Sparse Attention (DSA) 算法流程](DeepSeek-DSA/deepseek-sparse-attention-dsa.md)
- [FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling：阅读材料](FlashAttention-4/zotero-reading.md)
- [IndexCache：跨层复用稀疏索引，以及它为什么能被训练](IndexCache/indexcache.md)
- [MiniMax Sparse Attention：论文算法与代码实现精确对应](MiniMax-MSA/MiniMax%20Sparse%20Attention%EF%BC%9A%E8%AE%BA%E6%96%87%E7%AE%97%E6%B3%95%E4%B8%8E%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E7%B2%BE%E7%A1%AE%E5%AF%B9%E5%BA%94.md)
- [MSA 中的 KL 对齐与局部知识蒸馏](MiniMax-MSA/msa-kl-distillation.md)
- [MSA 为什么采用 KV-outer Sparse Attention Forward](MiniMax-MSA/msa-kv-outer-forward.md)
- [MSA Indexer 与 DSA Lightning Indexer 的差别](MiniMax-MSA/msa-vs-dsa-indexer.md)
- [MiniMax Sparse Attention (MSA)](MiniMax-MSA/msa.md)
- [Fast Transformer Decoding: One Write-Head is All You Need](MQA/fast-transformer-decoding-mqa.md)
- [A Survey of Efficient Attention Methods: Hardware-efficient,  Sparse, Compact, and Linear Attention](Surveys/efficient_attention_survey.md)

稀疏注意力部分包含架构、选择算法与训练方法，MSA 和 DSA 是其中的具体案例。

## LLM Inference / Long Context Inference

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Quest: Query-Aware Sparsity for Efficient Long-Context LLM Inference** | [ICML'24](https://arxiv.org/pdf/2406.10774) | 根据当前 query 和 KV 页元数据选择重要页面，减少长上下文解码中的 KV 读取 | [Paper](https://arxiv.org/pdf/2406.10774) |
| ✅ | **DuoAttention: Efficient Long-Context LLM Inference with Retrieval and Streaming Heads** | [ICLR'25](https://arxiv.org/pdf/2410.10819v1) | 区分 retrieval heads 与 streaming heads，为不同 head 分配不同 KV 保留策略 | [Paper](https://arxiv.org/pdf/2410.10819v1) |
| ✅ | **MiniMax Sparse Attention** | [arXiv'26](https://arxiv.org/abs/2606.13392) | 按 GQA group 选择 KV 块并协同设计稀疏 kernel，将块级稀疏转化为长上下文加速 | [Paper](https://arxiv.org/abs/2606.13392) / [Note](MiniMax-MSA/msa.md) |
| ✅ 📝 | **IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse** | [arXiv'26](https://arxiv.org/abs/2603.12201v1) | 跨层复用 Top-k 位置，用 LM-loss 搜索或多层 KL 蒸馏减少 indexer 计算，并区分索引缓存与主 KV 缓存 | [Paper](https://arxiv.org/abs/2603.12201v1) / [Note](IndexCache/indexcache.md) |

## Deep Learning / Attention Mechanisms & Variants

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Attention Is All You Need** | [NeurIPS'17](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) | 用多头自注意力替代循环与卷积，建立可并行训练的 Transformer 架构 | [Paper](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) / [Note](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/32) |
| ✅ | **Big Bird: Transformers for Longer Sequences** | [NeurIPS'20](https://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html) | 结合局部、随机与全局连接实现线性稀疏注意力，并分析其表达能力 | [Paper](https://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html) / [Note](../../Foundations/01_Attention/SparseAttention.md) |
| ✅ | **FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/file/67d57c32e20fd0a7a302cb81d36e40d5-Paper-Conference.pdf) | 通过分块、算子融合与重计算减少 HBM 读写，实现不近似的高效 attention | [Paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/67d57c32e20fd0a7a302cb81d36e40d5-Paper-Conference.pdf) / [Note](../../Foundations/01_Attention/FlashAttention.md) |
| ✅ | **FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/98ed250b203d1ac6b24bbcf263e3d4a7-Abstract-Conference.html) | 优化线程块与 warp 间工作划分，减少非矩阵计算和共享内存通信，提高 attention 吞吐 | [Paper](https://arxiv.org/pdf/2307.08691.pdf) / [Note](../../Foundations/01_Attention/FlashAttention.md) |
| ✅ | **Flash-Decoding for Long-Context Inference** | [Blog'23](https://crfm.stanford.edu/2023/10/12/flashdecoding.html) | 沿 KV 序列切分并合并部分 attention 结果，提高小 batch 长上下文 decode 的 GPU 利用率 | [Paper](https://crfm.stanford.edu/2023/10/12/flashdecoding.html) / [Note](../../Foundations/01_Attention/FlashDecoding.md) |
| ✅ | **A Survey of Efficient Attention Methods: Hardware-efficient, Sparse, Compact, and Linear Attention** | [Tech report'25](https://github.com/attention-survey/Efficient_Attention_Survey) | 统一梳理硬件优化、稀疏、KV 压缩与线性 attention，区分计算和缓存优化的作用范围 | [Paper](https://attention-survey.github.io/files/Attention_Survey.pdf) |

## Deep Learning / Sparse Attention Algorithms & Training / Architecture and Modern Sparse Attention

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **Fast Transformer Decoding: One Write-Head is All You Need** | [arXiv'19](https://arxiv.org/abs/1911.02150) | MQA 原始论文；理解所有 Query heads 共享 KV 与 decode 带宽瓶颈 | [Paper](https://arxiv.org/abs/1911.02150) / [Note](MQA/fast-transformer-decoding-mqa.md) |
| ⬜ | **GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints** | [EMNLP'23](https://aclanthology.org/2023.emnlp-main.298/) | 建立 MHA–GQA–MQA 的连续关系；理解 MSA 为什么按 GQA group 独立选择 | [Paper](https://arxiv.org/abs/2305.13245) |
| ⬜ | **DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model** | [arXiv'24](https://arxiv.org/abs/2405.04434) | MLA、latent KV compression、decoupled RoPE，以及 `uk_proj` / `uo_proj` 的矩阵吸收 | [Paper](https://arxiv.org/abs/2405.04434) |
| ⬜ | **SeerAttention: Learning Intrinsic Sparse Attention in Your LLMs** | [NeurIPS'25](https://proceedings.neurips.cc/paper_files/paper/2025/hash/50e9dbc4ab68d94f15261ddc26c8ca2b-Abstract-Conference.html) | 可学习的 block gate、自蒸馏与 block-sparse kernel；最接近 MSA Indexer 的对照之一 | [Paper](https://arxiv.org/abs/2410.13276) |
| ⬜ | **Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention** | [ACL'25](https://aclanthology.org/2025.acl-long.1126/) | 同时研究压缩、选择、局部窗口与硬件对齐；理解 DSA 的算法–kernel 协同背景 | [Paper](https://arxiv.org/abs/2502.11089) |
| ⬜ | **MoBA: Mixture of Block Attention for Long-Context LLMs** | [NeurIPS'25](https://proceedings.neurips.cc/paper_files/paper/2025/hash/19eae75beed66321d62272e794a9c2ac-Abstract-Conference.html) | MoE 风格的 block routing；适合对比 MSA 的 block max-pooling 与 group-specific selection | [Paper](https://arxiv.org/abs/2502.13189) |
| ⬜ | **MInference 1.0: Accelerating Pre-filling for Long-Context LLMs via Dynamic Sparse Attention** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5dfbe6f5671e82c76841ba687a8a9ecb-Abstract-Conference.html) | 无需重新训练的动态稀疏 prefill；对比学习式 Indexer 与预设 attention pattern | [Paper](https://arxiv.org/abs/2407.02490) |
| ⬜ | **SpargeAttn: Accurate Sparse Attention Accelerating Any Model Inference** | [ICML'25](https://proceedings.mlr.press/v267/zhang25ch.html) | 两阶段在线过滤与 softmax-aware pruning；理解推理期稀疏化的另一条路线 | [Paper](https://arxiv.org/abs/2502.18137) |
| ⬜ | **BLASST: Dynamic BLocked Attention Sparsity via Softmax Thresholding** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html) | 复用 online softmax 统计量跳过低贡献 blocks；无需训练并覆盖 MHA/GQA/MQA/MLA | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html) |

## Deep Learning / Sparse Attention Algorithms & Training / Algorithm and Training Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Generating Long Sequences with Sparse Transformers** | [arXiv'19](https://arxiv.org/abs/1904.10509) | 固定 factorized sparse pattern 与早期 block-sparse kernel；理解“规则但不自适应”的稀疏性 | [Paper](https://arxiv.org/abs/1904.10509) |
| ⬜ | **Longformer: The Long-Document Transformer** | [arXiv'20](https://arxiv.org/abs/2004.05150) | local window + global token；理解局部先验和全局信息通路 | [Paper](https://arxiv.org/abs/2004.05150) |
| ⬜ | **Reformer: The Efficient Transformer** | [ICLR'20](https://openreview.net/forum?id=rkgNKkHtVb) | LSH attention、bucket、排序和 reversible layers；理解动态候选集带来的数据重排成本 | [Paper](https://arxiv.org/abs/2001.04451) |
| ⬜ | **Efficient Content-Based Sparse Attention with Routing Transformers** | [TACL'21](https://aclanthology.org/2021.tacl-1.4/) | online k-means 内容路由；连接固定 sparse pattern 与 learned Indexer | [Paper](https://arxiv.org/abs/2003.05997) |
| ⬜ | **Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers** | [arXiv'24](https://arxiv.org/abs/2406.16747) | SparseK scoring network + differentiable Top-k；直接对比 MSA/DSA 的 hard Top-k + KL 路线 | [Paper](https://arxiv.org/abs/2406.16747) |
| ⬜ | **Differentiable Top-k Operator with Optimal Transport** | [NeurIPS'20](https://research.google/pubs/differentiable-top-k-operator-with-optimal-transport/) | 用熵正则 Optimal Transport 平滑 Top-k，理解连续松弛及其梯度 | [Paper](https://arxiv.org/abs/2002.06504) |
| ⬜ | **Fast, Differentiable and Sparse Top-k: A Convex Analysis Perspective** | [ICML'23](https://arxiv.org/abs/2302.01425) | 从凸优化构造可微且真正稀疏的 Top-k，并讨论 GPU/TPU-friendly 算法 | [Paper](https://arxiv.org/abs/2302.01425) |
| ⬜ | **Categorical Reparameterization with Gumbel-Softmax** | [ICLR'17](https://research.google/pubs/categorical-reparameterization-with-gumbel-softmax/) | 离散采样的经典连续松弛；理解 temperature、annealing 与 soft-train/hard-inference 差异 | [Paper](https://arxiv.org/abs/1611.01144) |
| ⬜ | **From Softmax to Sparsemax: A Sparse Model of Attention and Multi-Label Classification** | [ICML'16](https://proceedings.mlr.press/v48/martins16.html) | 在概率 simplex 上产生精确零值并保留可计算 Jacobian | [Paper](https://arxiv.org/abs/1602.02068) |
| ⬜ | **Adaptively Sparse Transformers** | [EMNLP-IJCNLP'19](https://aclanthology.org/D19-1223/) | 使用可学习的 $\alpha$-entmax 让不同 attention heads 自适应选择稠密或稀疏分布 | [Paper](https://arxiv.org/abs/1909.00015) |

## Deep Learning / New Architectures

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Gated Linear Attention Transformers with Hardware-Efficient Training** | [ICML'24](https://proceedings.mlr.press/v235/yang24ab.html) | 用数据依赖门控增强线性 attention，并以 IO 感知实现兼顾表达能力和训练吞吐 | [Paper](https://proceedings.mlr.press/v235/yang24ab.html) / [Note](../../Foundations/01_Attention/LinearAttention.md) |
| ✅ | **Kimi Linear: An Expressive, Efficient Attention Architecture** | [arXiv'25](https://arxiv.org/pdf/2510.26692) | 用 Kimi Delta Attention 与混合架构改善线性 attention 的表达能力、长上下文效率和缓存成本 | [Paper](https://arxiv.org/pdf/2510.26692) |
