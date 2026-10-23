# KuangjuX’s Notes

技术学习与实践的长期笔记库。

[在线阅读](https://notes.kuangjux.top/) · [全部笔记目录](CATALOG.md) · [LLM 学习路线](Foundations/05_Model_Architecture_and_Reasoning/Learning-Paths/llm.md)

## 归档入口

先区分材料类型，再在每一类下面按主题归档。

| 目录 | 保存内容 |
| --- | --- |
| [Papers/ · 论文](Papers/index.md) | 论文清单、阅读状态、原始标注与正式论文笔记。 |
| [Projects/ · 项目](Projects/index.md) | 具体代码仓库的设计、源码阅读、实验与调试记录。 |
| [Foundations/ · 基础](Foundations/index.md) | 原理、算法、数学推导、教程、课程、教材与工具参考。 |

正文目录使用首字母大写的单词，并保留 SGLang、WeLM、CUDA、CUTLASS 等专名的大小写；文件名保留原写法。

按以下主题组织：

```text
Papers/ | Projects/ | Foundations/
├── 00_Inbox
├── 01_Attention
├── 02_Inference_and_KV_Cache
├── 03_Distributed_Training_and_MoE
├── 04_GPU_Compiler_and_Performance
├── 05_Model_Architecture_and_Reasoning
├── 06_Computing_Foundations
├── 07_Books_and_Technical_References
└── 08_Quantization
```

例如，FlashAttention-4 的论文标注放在 `Papers/01_Attention/`，SGLang 的源码分析放在 `Projects/02_Inference_and_KV_Cache/`，Attention 教程放在 `Foundations/01_Attention/`。课程在 `Foundations/07_Books_and_Technical_References/Courses/` 中保留章节与实验顺序。

<!-- paper-reading-list:start -->
## Paper 阅读清单

共 **342 个分类条目**：已读 75，待读 267。

✅ 已读 · ⬜ 待读 · 📝 有笔记。

| 主题 | 条目 | 已读 | 待读 |
| --- | ---: | ---: | ---: |
| [待分类](Papers/00_Inbox/index.md) | 0 | 0 | 0 |
| [Attention](Papers/01_Attention/index.md) | 42 | 14 | 28 |
| [推理与 KV Cache](Papers/02_Inference_and_KV_Cache/index.md) | 47 | 6 | 41 |
| [分布式训练与 MoE](Papers/03_Distributed_Training_and_MoE/index.md) | 53 | 8 | 45 |
| [GPU 编译与性能](Papers/04_GPU_Compiler_and_Performance/index.md) | 64 | 29 | 35 |
| [模型架构与推理能力](Papers/05_Model_Architecture_and_Reasoning/index.md) | 108 | 4 | 104 |
| [计算基础](Papers/06_Computing_Foundations/index.md) | 18 | 14 | 4 |
| [教材与技术参考](Papers/07_Books_and_Technical_References/index.md) | 0 | 0 | 0 |
| [量化](Papers/08_Quantization/index.md) | 10 | 0 | 10 |

<details>
<summary>Attention（42 篇；已读 14，待读 28）</summary>

### LLM Inference / Long Context Inference

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-gr8gnqvf"></a>**Quest: Query-Aware Sparsity for Efficient Long-Context LLM Inference** | [ICML'24](https://arxiv.org/pdf/2406.10774) | 根据当前 query 和 KV 页元数据选择重要页面，减少长上下文解码中的 KV 读取 | [Paper](https://arxiv.org/pdf/2406.10774) |
| ✅ 📝 | **DuoAttention: Efficient Long-Context LLM Inference with Retrieval and Streaming Heads** | [ICLR'25](https://arxiv.org/pdf/2410.10819v1) | 区分 retrieval heads 与 streaming heads，为不同 head 分配不同 KV 保留策略 | [Paper](https://arxiv.org/pdf/2410.10819v1) / [Note](Projects/02_Inference_and_KV_Cache/Light-DuoAttention/zhihu-reading.md) |
| ✅ | <a id="pdf-hzcjag36"></a>**MiniMax Sparse Attention** | [arXiv'26](https://arxiv.org/abs/2606.13392) | 按 GQA group 选择 KV 块并协同设计稀疏 kernel，将块级稀疏转化为长上下文加速 | [Paper](https://arxiv.org/abs/2606.13392) / [Note](Papers/01_Attention/MiniMax-MSA/msa.md) |
| ✅ 📝 | <a id="pdf-xxevr2qa"></a>**IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse** | [arXiv'26](https://arxiv.org/abs/2603.12201v1) | 跨层复用 Top-k 位置，用 LM-loss 搜索或多层 KL 蒸馏减少 indexer 计算，并区分索引缓存与主 KV 缓存 | [Paper](https://arxiv.org/abs/2603.12201v1) / [Note](Papers/01_Attention/IndexCache/indexcache.md) |
| ⬜ | <a id="pdf-ny88ejjb"></a>**Efficient Context Scaling with LongCat ZigZag Attention** | arXiv · 2026 | 标签：Attention / 稀疏 Attention | [Paper](http://arxiv.org/abs/2512.23966) / [PDF](zotero://open-pdf/library/items/2VJX3AWK) / [Zotero](zotero://select/library/items/NY88EJJB) |

### Deep Learning / Attention Mechanisms & Variants

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **Attention Is All You Need** | [NeurIPS'17](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) | 用多头自注意力替代循环与卷积，建立可并行训练的 Transformer 架构 | [Paper](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) / [Note](Papers/01_Attention/Transformer/github-reading.md) |
| ✅ | <a id="pdf-fvzdyfpl"></a>**Big Bird: Transformers for Longer Sequences** | [NeurIPS'20](https://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html) | 结合局部、随机与全局连接实现线性稀疏注意力，并分析其表达能力 | [Paper](https://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html) / [Note](Foundations/01_Attention/SparseAttention.md) |
| ✅ 📝 | <a id="pdf-jua6hwcg"></a>**FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/file/67d57c32e20fd0a7a302cb81d36e40d5-Paper-Conference.pdf) | 通过分块、算子融合与重计算减少 HBM 读写，实现不近似的高效 attention | [Paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/67d57c32e20fd0a7a302cb81d36e40d5-Paper-Conference.pdf) / [Note](Foundations/01_Attention/FlashAttention.md) / [笔记](Papers/01_Attention/FlashAttention/github-reading.md) |
| ✅ | <a id="pdf-e269ji6y"></a>**FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/98ed250b203d1ac6b24bbcf263e3d4a7-Abstract-Conference.html) | 优化线程块与 warp 间工作划分，减少非矩阵计算和共享内存通信，提高 attention 吞吐 | [Paper](https://arxiv.org/pdf/2307.08691.pdf) / [Note](Foundations/01_Attention/FlashAttention.md) |
| ✅ | **Flash-Decoding for Long-Context Inference** | [Blog'23](https://crfm.stanford.edu/2023/10/12/flashdecoding.html) | 沿 KV 序列切分并合并部分 attention 结果，提高小 batch 长上下文 decode 的 GPU 利用率 | [Paper](https://crfm.stanford.edu/2023/10/12/flashdecoding.html) / [Note](Foundations/01_Attention/FlashDecoding.md) |
| ✅ | <a id="pdf-ycadddv3"></a>**A Survey of Efficient Attention Methods: Hardware-efficient, Sparse, Compact, and Linear Attention** | [Tech report'25](https://github.com/attention-survey/Efficient_Attention_Survey) | 统一梳理硬件优化、稀疏、KV 压缩与线性 attention，区分计算和缓存优化的作用范围 | [Paper](https://attention-survey.github.io/files/Attention_Survey.pdf) |

### Deep Learning / Sparse Attention Algorithms & Training / Architecture and Modern Sparse Attention

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **Fast Transformer Decoding: One Write-Head is All You Need** | [arXiv'19](https://arxiv.org/abs/1911.02150) | MQA 原始论文；理解所有 Query heads 共享 KV 与 decode 带宽瓶颈 | [Paper](https://arxiv.org/abs/1911.02150) / [Note](Papers/01_Attention/MQA/fast-transformer-decoding-mqa.md) |
| ⬜ | **GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints** | [EMNLP'23](https://aclanthology.org/2023.emnlp-main.298/) | 建立 MHA–GQA–MQA 的连续关系；理解 MSA 为什么按 GQA group 独立选择 | [Paper](https://arxiv.org/abs/2305.13245) |
| ⬜ | **DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model** | [arXiv'24](https://arxiv.org/abs/2405.04434) | MLA、latent KV compression、decoupled RoPE，以及 `uk_proj` / `uo_proj` 的矩阵吸收 | [Paper](https://arxiv.org/abs/2405.04434) |
| ⬜ | **SeerAttention: Learning Intrinsic Sparse Attention in Your LLMs** | [NeurIPS'25](https://proceedings.neurips.cc/paper_files/paper/2025/hash/50e9dbc4ab68d94f15261ddc26c8ca2b-Abstract-Conference.html) | 可学习的 block gate、自蒸馏与 block-sparse kernel；最接近 MSA Indexer 的对照之一 | [Paper](https://arxiv.org/abs/2410.13276) |
| ⬜ | <a id="pdf-kniu8he3"></a>**Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention** | [ACL'25](https://aclanthology.org/2025.acl-long.1126/) | 同时研究压缩、选择、局部窗口与硬件对齐；理解 DSA 的算法–kernel 协同背景 | [Paper](https://arxiv.org/abs/2502.11089) |
| ⬜ | <a id="pdf-q3y9x5v3"></a>**MoBA: Mixture of Block Attention for Long-Context LLMs** | [NeurIPS'25](https://proceedings.neurips.cc/paper_files/paper/2025/hash/19eae75beed66321d62272e794a9c2ac-Abstract-Conference.html) | MoE 风格的 block routing；适合对比 MSA 的 block max-pooling 与 group-specific selection | [Paper](https://arxiv.org/abs/2502.13189) |
| ⬜ | **MInference 1.0: Accelerating Pre-filling for Long-Context LLMs via Dynamic Sparse Attention** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5dfbe6f5671e82c76841ba687a8a9ecb-Abstract-Conference.html) | 无需重新训练的动态稀疏 prefill；对比学习式 Indexer 与预设 attention pattern | [Paper](https://arxiv.org/abs/2407.02490) |
| ⬜ | <a id="pdf-9h6z7sbe"></a>**SpargeAttn: Accurate Sparse Attention Accelerating Any Model Inference** | [ICML'25](https://proceedings.mlr.press/v267/zhang25ch.html) | 两阶段在线过滤与 softmax-aware pruning；理解推理期稀疏化的另一条路线 | [Paper](https://arxiv.org/abs/2502.18137) |
| ⬜ | **BLASST: Dynamic BLocked Attention Sparsity via Softmax Thresholding** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html) | 复用 online softmax 统计量跳过低贡献 blocks；无需训练并覆盖 MHA/GQA/MQA/MLA | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html) |
| ⬜ | <a id="pdf-cmk845zm"></a>**Block Sparse Attention with Log-Linear Complexity** | arXiv · 2026 | 标签：Attention / 稀疏 Attention | [Paper](http://arxiv.org/abs/2609.31093) / [PDF](zotero://open-pdf/library/items/DK2DV9UZ) / [Zotero](zotero://select/library/items/CMK845ZM) |
| ⬜ 📝 | <a id="pdf-l447a648"></a>**DoSA: Dots Sparse Attention** | arXiv · 2026 | 阅读中；标签：Attention / 稀疏 Attention | [Paper](http://arxiv.org/abs/2610.13990) / [PDF](zotero://open-pdf/library/items/Y75KTIVE) / [Zotero](zotero://select/library/items/L447A648) / [Note](Papers/01_Attention/DoSA/dosa.md) / [Annotations](Papers/01_Attention/DoSA/zotero-reading.md) |
| ⬜ | <a id="pdf-yugv34kq"></a>**FSA: An Alternative Efficient Implementation of Native Sparse Attention Kernel** | arXiv · 2026 | 标签：Attention / 稀疏 Attention | [Paper](http://arxiv.org/abs/2508.18224) / [PDF](zotero://open-pdf/library/items/ZUQSHLJQ) / [Zotero](zotero://select/library/items/YUGV34KQ) |
| ✅ 📝 | <a id="pdf-ehqb8nyq"></a>**PageWeaver: KV-Guided Query Unions for Sparse Attention** | arXiv · 2026 | 根据 KV page 重叠在线重组 Query，以双 CTA Union8 共享搬运，并计入分组开销 | [Paper](http://arxiv.org/abs/2610.11201) / [PDF](zotero://open-pdf/library/items/SBISCM3P) / [Zotero](zotero://select/library/items/EHQB8NYQ) / [Note](Papers/01_Attention/PageWeaver/pageweaver.md) / [Annotations](Papers/01_Attention/PageWeaver/zotero-reading.md) |

### Deep Learning / Sparse Attention Algorithms & Training / Algorithm and Training Foundations

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

### Deep Learning / New Architectures

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-qxn82qc9"></a>**Gated Linear Attention Transformers with Hardware-Efficient Training** | [ICML'24](https://proceedings.mlr.press/v235/yang24ab.html) | 用数据依赖门控增强线性 attention，并以 IO 感知实现兼顾表达能力和训练吞吐 | [Paper](https://proceedings.mlr.press/v235/yang24ab.html) / [Note](Foundations/01_Attention/LinearAttention.md) |
| ✅ 📝 | <a id="pdf-l42twfp4"></a>**Kimi Linear: An Expressive, Efficient Attention Architecture** | [arXiv'25](https://arxiv.org/pdf/2510.26692) | 用 Kimi Delta Attention 与混合架构改善线性 attention 的表达能力、长上下文效率和缓存成本 | [Paper](https://arxiv.org/pdf/2510.26692) / [Note](Papers/01_Attention/Kimi-Linear/zhihu-reading.md) |
| ⬜ | <a id="pdf-l8sl8v37"></a>**Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models** | 来源待补全 | 标签：Attention / 线性 Attention 与记忆 | [PDF](zotero://open-pdf/library/items/2RFQ4ZTQ) / [Zotero](zotero://select/library/items/L8SL8V37) |
| ⬜ | <a id="pdf-ywh3l2eu"></a>**Fast Weight Attention for Continual Learning** | arXiv · 2026 | 标签：Attention / 线性 Attention 与记忆 | [Paper](http://arxiv.org/abs/2608.27763) / [PDF](zotero://open-pdf/library/items/ZHREG8JF) / [Zotero](zotero://select/library/items/YWH3L2EU) |
| ⬜ | <a id="pdf-dgf2kzzi"></a>**Memory Attention** | arXiv · 2026 | 标签：Attention / 线性 Attention 与记忆；推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2609.28399) / [PDF](zotero://open-pdf/library/items/S4YNUDPW) / [Zotero](zotero://select/library/items/DGF2KZZI) |

### Attention / 高效 Attention 内核

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-mnpehw5y"></a>**FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision** | arXiv · 2024 | 标签：Attention / 高效 Attention 内核 | [Paper](http://arxiv.org/abs/2407.08608) / [PDF](zotero://open-pdf/library/items/HTMXSCYS) / [Zotero](zotero://select/library/items/MNPEHW5Y) |
| ⬜ | <a id="pdf-tghhgfqg"></a>**FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling** | arXiv · 2026 | 阅读中；标签：Attention / 高效 Attention 内核 | [Paper](http://arxiv.org/abs/2603.05451) / [PDF](zotero://open-pdf/library/items/M8IKPE3M) / [Zotero](zotero://select/library/items/TGHHGFQG) / [Annotations](Papers/01_Attention/FlashAttention-4/zotero-reading.md) |
| ⬜ | <a id="pdf-5k4mwtrc"></a>**FlashDecoding++: Faster Large Language Model Inference on GPUs** | arXiv · 2024 | 标签：Attention / 高效 Attention 内核 | [Paper](http://arxiv.org/abs/2311.01282) / [PDF](zotero://open-pdf/library/items/8QQKNGYR) / [Zotero](zotero://select/library/items/5K4MWTRC) |

</details>

<details>
<summary>推理与 KV Cache（47 篇；已读 6，待读 41）</summary>

### LLM Inference / Decoding Algorithms

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **The Curious Case of Neural Text Degeneration** | [ICLR'20](https://pubs.cs.uct.ac.za/1407/1/the_curious_case_of_neural_text_degeneration.pdf) | 系统比较 greedy、beam、top-k 与 nucleus sampling，理解生成质量、随机性和退化 | [Paper](https://arxiv.org/abs/1904.09751) |
| ⬜ | <a id="pdf-3d2kg559"></a>**Fast Inference from Transformers via Speculative Decoding** | [ICML'23](https://proceedings.mlr.press/v202/leviathan23a.html) | draft–verify 与拒绝采样；在保持目标分布不变的前提下并行生成多个 token | [Paper](https://proceedings.mlr.press/v202/leviathan23a.html) / [Zotero](zotero://select/library/items/3D2KG559) |
| ⬜ | **Accelerating Large Language Model Decoding with Speculative Sampling** | [arXiv'23](https://arxiv.org/abs/2302.01318) | speculative sampling 的独立推导与工程验证，适合和上一论文对照阅读 | [Paper](https://arxiv.org/abs/2302.01318) |
| ⬜ | **SpecInfer: Accelerating Large Language Model Serving with Tree-based Speculative Inference and Verification** | [ASPLOS'24](https://hsword.github.io/publications/) | 用候选树提高并行验证宽度，连接解码算法与 serving batch | [Paper](https://arxiv.org/abs/2305.09781) |
| ⬜ | <a id="pdf-zl7r492b"></a>**Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads** | [ICML'24](https://proceedings.mlr.press/v235/cai24b.html) | 不依赖独立 draft model 的多头预测与 tree attention | [Paper](https://arxiv.org/abs/2401.10774) / [Zotero](zotero://select/library/items/ZL7R492B) |
| ⬜ | **Break the Sequential Dependency of LLM Inference Using Lookahead Decoding** | [ICML'24](https://icml.cc/virtual/2024/poster/33512) | 从 Jacobi iteration 理解无额外模型的并行候选生成 | [Paper](https://arxiv.org/abs/2402.02057) |
| ⬜ | <a id="pdf-e7e8ifp3"></a>**EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty** | [ICML'24](https://proceedings.mlr.press/v235/li24bt.html) | 在 feature space 自回归预测，理解高接受率 drafter 的训练方法 | [Paper](https://arxiv.org/abs/2401.15077) / [Zotero](zotero://select/library/items/E7E8IFP3) |
| ⬜ | <a id="pdf-2zy769n5"></a>**Better & Faster Large Language Models via Multi-token Prediction** | [ICML'24](https://proceedings.mlr.press/v235/gloeckle24a.html) | 训练时预测多个未来 token，将训练目标与推理解码并行性连接起来 | [Paper](https://arxiv.org/abs/2404.19737) / [Zotero](zotero://select/library/items/2ZY769N5) |
| ⬜ | <a id="pdf-d6riu87t"></a>**DeepSeek-V3 Technical Report** | [arXiv'24](https://arxiv.org/abs/2412.19437) | 理解实际大模型中的 MTP：顺序连接的预测模块、hidden state 与 token embedding 的组合，以及 embedding／LM Head 共享；优先读 §2.2、Figure 3、§4.5.1 | [Paper](https://arxiv.org/abs/2412.19437) / [Zotero](zotero://select/library/items/D6RIU87T) |
| ⬜ | <a id="pdf-4q25ejip"></a>**EAGLE-2: Faster Inference of Language Models with Dynamic Draft Trees** | [arXiv'24](https://arxiv.org/abs/2406.16858) | 利用上下文相关的草稿置信度构造动态候选树，理解节点预算如何分配并影响接受长度 | [Paper](https://arxiv.org/abs/2406.16858) / [Zotero](zotero://select/library/items/4Q25EJIP) |
| ⬜ | <a id="pdf-l7edim2t"></a>**EAGLE-3: Scaling up Inference Acceleration of Large Language Models via Training-Time Test** | [arXiv'25](https://arxiv.org/abs/2503.01840) | 融合目标模型多层特征并直接预测 token，通过 training-time test 改善草稿训练与推理的匹配 | [Paper](https://arxiv.org/abs/2503.01840) / [Zotero](zotero://select/library/items/L7EDIM2T) |
| ⬜ | <a id="pdf-rvrkyusg"></a>**DFlash: Block Diffusion for Flash Speculative Decoding** | [arXiv'26](https://arxiv.org/abs/2602.06036) | 用目标模型特征作为条件，通过轻量 block diffusion 草稿并行预测多个候选 token，理解如何降低起草延迟 | [Paper](https://arxiv.org/abs/2602.06036) / [Zotero](zotero://select/library/items/RVRKYUSG) |

### LLM Inference / General

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **A Survey of LLM Inference Systems** | [arXiv'25](https://arxiv.org/abs/2506.21901) | 贯通 kernel、批处理、调度与 KV 管理，理解单副本、分离式和分布式推理系统的设计取舍 | [Paper](https://arxiv.org/pdf/2506.21901) / [Note](Papers/02_Inference_and_KV_Cache/Surveys/llm_inference_survey.pdf) |
| ⬜ | **WaferLLM: Large Language Model Inference at Wafer Scale** | [OSDI'25](https://www.usenix.org/system/files/osdi25-he.pdf) | 研究晶圆级互连和存储条件下的 LLM 映射，理解不同硬件形态如何改变推理并行策略 | [Paper](https://www.usenix.org/system/files/osdi25-he.pdf) |
| ⬜ | <a id="pdf-ttfudeki"></a>**HiCache: A Plug-in Scaled-Hermite Upgrade for Taylor-Style Cache-then-Forecast Diffusion Acceleration** | arXiv · 2026 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2508.16984) / [PDF](zotero://open-pdf/library/items/7AF67XK4) / [Zotero](zotero://select/library/items/TTFUDEKI) |

### LLM Inference / Long Context Inference

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Training-Free Long-Context Scaling of Large Language Models** | [ICML'24](https://arxiv.org/pdf/2402.17463) | 用 Dual Chunk Attention 调整位置关系，无继续训练地扩展模型可处理的上下文长度 | [Paper](https://arxiv.org/pdf/2402.17463) / [Note](Papers/02_Inference_and_KV_Cache/Dual-Chunk-Attention/DCA.md) |
| ✅ | <a id="pdf-cuxi564s"></a>**Efficient Streaming Language Models with Attention Sinks** | [ICLR'24](https://arxiv.org/pdf/2309.17453) | 保留 attention sink 与滑动窗口，实现有界 KV 缓存的流式生成并明确历史信息保留边界 | [Paper](https://arxiv.org/pdf/2309.17453) / [讨论笔记](Foundations/01_Attention/Attention-Sinks/attention-sink-and-dsink.md) |
| ✅ 📝 | <a id="pdf-bbqs6dzt"></a>**HiSparse: Scaling Sparse-Attention Decoding with Hierarchical KV Cache Management** | [arXiv'26](https://arxiv.org/abs/2608.07009v1) | 将完整 KV 放在主存、热点放在有界 GPU 缓存，并用跨层预取隐藏稀疏解码缺页开销 | [Paper](https://arxiv.org/abs/2608.07009v1) / [Note](Papers/02_Inference_and_KV_Cache/HiSparse/hisparse.md) |
| ⬜ | **Unifying Sparse Attention with Hierarchical Memory for Scalable Long-Context LLM Serving (SPIN)** | [arXiv'26](https://arxiv.org/abs/2604.26837) | 统一不同稀疏粒度与分层 KV 存储，通过局部性感知缓存和元数据设计降低 GPU–CPU 传输开销 | [Paper](https://arxiv.org/abs/2604.26837) |
| ⬜ | <a id="pdf-p7ztutbr"></a>**ShadowKV: KV Cache in Shadows for High-Throughput Long-Context LLM Inference** | arXiv · 2025 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2410.21465) / [PDF](zotero://open-pdf/library/items/I9NKKG32) / [Zotero](zotero://select/library/items/P7ZTUTBR) |

### LLM Inference / LLM Serving

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Orca: A Distributed Serving System for Transformer-Based Generative Models** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/yu) | 提出迭代级调度和选择性批处理，使不同长度请求能动态进入和离开生成批次 | [Paper](https://www.usenix.org/conference/osdi22/presentation/yu) |
| ⬜ | <a id="pdf-arsj3h89"></a>**Efficient Memory Management for Large Language Model Serving with PagedAttention** | [SOSP'23](https://arxiv.org/abs/2309.06180) | 用分页 KV 管理消除大块连续分配需求，并支持缓存共享，奠定高吞吐 LLM serving 基础 | [Paper](https://arxiv.org/abs/2309.06180) |
| ⬜ | **FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU** | [ICML'23](https://proceedings.mlr.press/v202/sheng23a.html) | 联合规划 GPU、CPU 和磁盘上的权重与 KV 放置，以卸载和大批处理换取单 GPU 高吞吐 | [Paper](https://proceedings.mlr.press/v202/sheng23a.html) |
| ⬜ | **AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/li-zhouhan) | 利用模型并行实现统计复用，理解多个模型共用集群时的资源配置和尾延迟取舍 | [Paper](https://www.usenix.org/conference/osdi23/presentation/li-zhouhan) |
| ⬜ | **FastServe: Fast Distributed Inference Serving for Large Language Models** | [arXiv'23](https://arxiv.org/abs/2305.05920) | 以 token 级抢占和多级反馈队列缓解队首阻塞，并配合 KV 卸载改善请求完成延迟 | [Paper](https://arxiv.org/abs/2305.05920) |
| ⬜ | **InferCept: Efficient Intercept Support for Augmented Large Language Model Inference** | [ICML'24](https://proceedings.mlr.press/v235/abhyankar24a.html) | 为调用外部工具时暂停的生成管理 KV 保留、卸载与重算，减少恢复推理的资源浪费 | [Paper](https://proceedings.mlr.press/v235/abhyankar24a.html) |
| ⬜ | **Punica: Multi-Tenant LoRA Serving** | [MLSys'24](https://arxiv.org/abs/2310.18547) | 用专门的批量 LoRA kernel 共同服务不同适配器，提高多租户微调模型的 GPU 利用率 | [Paper](https://arxiv.org/abs/2310.18547) |
| ⬜ | **S-LoRA: Serving Thousands of Concurrent LoRA Adapters** | [MLSys'24](https://arxiv.org/abs/2311.03285) | 统一管理适配器权重与 KV 的分页内存，并批量执行异构 LoRA 请求以扩大并发规模 | [Paper](https://arxiv.org/abs/2311.03285) |
| ⬜ | **Splitwise: Efficient Generative LLM Inference Using Phase Splitting** | [ISCA'24](https://arxiv.org/abs/2311.18677) | 将 prefill 与 decode 放到独立资源池，匹配两阶段不同的算力、带宽和功耗需求 | [Paper](https://arxiv.org/abs/2311.18677) |
| ⬜ | **Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve** | [OSDI'24](https://arxiv.org/abs/2403.02310) | 用 chunked prefill 和混合批处理控制解码停顿，改善吞吐与逐 token 延迟的取舍 | [Paper](https://arxiv.org/abs/2403.02310) |
| ⬜ | **Llumnix: Dynamic Scheduling for Large Language Model Serving** | [OSDI'24](https://arxiv.org/abs/2406.03243) | 通过运行时请求迁移协调多实例负载，在动态请求与资源变化下控制延迟 | [Paper](https://arxiv.org/abs/2406.03243) |
| ⬜ | **Preble: Efficient Distributed Prompt Scheduling for LLM Serving** | [ICLR'25](https://proceedings.iclr.cc/paper_files/paper/2025/hash/5bc342f48de8264779952fac378f96dc-Abstract-Conference.html) | 联合优化跨 GPU 前缀 KV 复用与负载均衡，避免局部缓存命中率牺牲整体服务延迟 | [Paper](https://arxiv.org/abs/2407.00023) |
| ✅ | <a id="pdf-2stq9v35"></a>**SGLang: Efficient Execution of Structured Language Model Programs** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/724be4472168f31ba1c9ac630f15dec8-Abstract-Conference.html) | 以结构化程序前端、RadixAttention 前缀复用和约束解码优化多调用 LLM 应用 | [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/724be4472168f31ba1c9ac630f15dec8-Abstract-Conference.html) |
| ✅ | <a id="pdf-kcjrn274"></a>**FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving** | [MLSys'25](https://proceedings.mlsys.org/paper_files/paper/2025/hash/dbf02b21d77409a2db30e56866a8ab3a-Abstract-Conference.html) | 统一 KV 格式、可定制 attention kernel 与动态负载调度，连接算子优化和实际 serving | [Paper](https://proceedings.mlsys.org/paper_files/paper/2025/hash/dbf02b21d77409a2db30e56866a8ab3a-Abstract-Conference.html) |
| ⬜ | **DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving** | [OSDI'24](https://www.usenix.org/system/files/osdi24-zhong-yinmin.pdf) | 按 TTFT 与 TPOT 目标独立配置 prefill、decode 资源，优化满足服务目标的有效吞吐 | [Paper](https://www.usenix.org/system/files/osdi24-zhong-yinmin.pdf) |
| ⬜ | **LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism** | [SOSP'24](https://dl.acm.org/doi/pdf/10.1145/3694715.3695948) | 用弹性序列并行动态调整长请求占用的 GPU，协调长上下文 prefill 与 decode | [Paper](https://dl.acm.org/doi/pdf/10.1145/3694715.3695948) |
| ⬜ | <a id="pdf-6skbr85n"></a>**Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot** | [FAST'25](https://www.usenix.org/system/files/fast25-qin.pdf) | 围绕分离式 KV 缓存池组织推理，利用更多存储和跨请求复用减少重复 prefill | [Paper](https://www.usenix.org/system/files/fast25-qin.pdf) |
| ⬜ | **NanoFlow: Towards Optimal Large Language Model Serving Throughput** | [OSDI'25](https://www.usenix.org/system/files/osdi25-zhu-kan.pdf) | 用 nano-batch 流水线重叠计算、访存和通信，突破逐算子执行对服务吞吐的限制 | [Paper](https://www.usenix.org/system/files/osdi25-zhu-kan.pdf) |
| ⬜ | **From Tokens to Layers: Redefining Stall-Free Scheduling for MoE Serving with Layered Prefill** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/c0f460c6d63599ea870ba9db63dc96a9-Abstract-Conference.html) | 沿层组而非 token 切分 prefill，减少 MoE 专家权重重复加载，同时保持解码连续性 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/c0f460c6d63599ea870ba9db63dc96a9-Abstract-Conference.html) |
| ⬜ | **CRAFT: Fine-Grained Cost-Aware Expert Replication for Efficient Mixture-of-Experts Serving** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/3a7f9e485845dac27423375c934cb4db-Abstract-Conference.html) | 按层估计专家复制收益，在显存预算内平衡路由负载，避免过度复制挤占 KV 空间 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/3a7f9e485845dac27423375c934cb4db-Abstract-Conference.html) |
| ⬜ | <a id="pdf-ix73leff"></a>**Strata: Hierarchical Context Caching for Long Context Language Model Serving** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/xie-zhiqiang) | 结合大块 KV I/O 与缓存感知调度，缓解 GPU、主存和 SSD 分层上下文缓存的加载停顿 | [Paper](https://www.usenix.org/conference/osdi26/presentation/xie-zhiqiang) |
| ⬜ | **No Buffer, No Bottleneck: Efficient Zero-Copy KV Cache Offloading for Long-Context LLMs (DirectKV)** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/luo) | 在 NVLink-C2C 平台让 GPU 直接访问主存 KV，消除 staging buffer 与额外拷贝 | [Paper](https://www.usenix.org/conference/osdi26/presentation/luo) |
| ⬜ | <a id="pdf-t2z2ms8t"></a>**ByteTransformer: A High-Performance Transformer Boosted for Variable-Length Inputs** | 2023 IEEE International Parallel and Distributed Processing Symposium (IPDPS) · 2023 | 标签：推理服务与 KV Cache | [Paper](https://ieeexplore.ieee.org/document/10177488/) / [PDF](zotero://open-pdf/library/items/XTL5JC62) / [Zotero](zotero://select/library/items/T2Z2MS8T) |
| ⬜ | <a id="pdf-ff3ujclj"></a>**Jenga: Effective Memory Management for Serving LLM with Heterogeneity** | arXiv · 2025 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2503.18292) / [PDF](zotero://open-pdf/library/items/DGM8PGQI) / [Zotero](zotero://select/library/items/FF3UJCLJ) |
| ⬜ | <a id="pdf-8jjabzda"></a>**SparseEngine: Sparse-First Inference Engine** | arXiv · 2026 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2609.39068) / [PDF](zotero://open-pdf/library/items/I8VMS8D4) / [Zotero](zotero://select/library/items/8JJABZDA) |
| ⬜ | <a id="pdf-en4xe3zy"></a>**TensorCast: The Missing Tensor Management Layer in Large Language Model Infrastructure** | arXiv · 2026 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2608.06007) / [PDF](zotero://open-pdf/library/items/4AYH4XIP) / [Zotero](zotero://select/library/items/EN4XE3ZY) |
| ⬜ 📝 | **Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/han) | REEF；仅有摘要摘记，抢占机制、并发调度和实验尚未整理 | [Paper](https://www.usenix.org/system/files/osdi22-han.pdf) / [Note](Papers/02_Inference_and_KV_Cache/GPU-Preemption/github-reading.md) |

</details>

<details>
<summary>分布式训练与 MoE（53 篇；已读 8，待读 45）</summary>

### LLM Inference / MegaKernel

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **SonicMoE: Accelerating MoE with IO and Tile-aware Optimizations** | [arXiv'25](https://arxiv.org/pdf/2512.14080) | 减少 MoE 前后向激活缓存和 I/O，并用 token rounding 降低 grouped GEMM 的填充浪费 | [Paper](https://arxiv.org/pdf/2512.14080) / [Note](Papers/03_Distributed_Training_and_MoE/SonicMoE/sonicmoe.md) |
| ✅ 📝 | **MegaMoE** (fused MoE megakernel, DeepGEMM) | [DeepGEMM PR'26](https://github.com/deepseek-ai/DeepGEMM/pull/304) | 将专家分发、两次线性层、SwiGLU 和合并融合，展示 NVLink 通信与 Tensor Core 计算重叠 | [Source](https://github.com/deepseek-ai/DeepGEMM/pull/304) / [Note](Papers/03_Distributed_Training_and_MoE/MegaMoE/megamoe.md) |

### LLM Training / Training Numerics & Memory

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour** | [arXiv'17](https://arxiv.org/abs/1706.02677) | global batch、线性学习率缩放与 warmup；理解数据并行扩展为何会改变优化行为 | [Paper](https://arxiv.org/abs/1706.02677) |
| ⬜ | **Mixed Precision Training** | [ICLR'18](https://openreview.net/pdf?id=r1gs9JgRZ) | FP16 计算与 FP32 master weights、loss scaling 配合；连接 Tensor Core 吞吐和收敛稳定性 | [Paper](https://arxiv.org/abs/1710.03740) |
| ⬜ | **Training Deep Nets with Sublinear Memory Cost** | [arXiv'16](https://arxiv.org/abs/1604.06174) | activation checkpointing/rematerialization 的经典计算–显存交换 | [Paper](https://arxiv.org/abs/1604.06174) |
| ⬜ | **Reducing Activation Recomputation in Large Transformer Models** | [MLSys'23](https://proceedings.mlsys.org/paper_files/paper/2023/hash/80083951326cf5b35e5100260d64ed81-Abstract-mlsys2023.html) | sequence parallelism 与 selective recomputation，解释 Megatron 的 activation 内存优化 | [Paper](https://arxiv.org/abs/2205.05198) |
| ⬜ | **GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection** | [ICML'24](https://proceedings.mlr.press/v235/zhao24s.html) | 对梯度做低秩投影以降低 optimizer state 和训练显存 | [Paper](https://arxiv.org/abs/2403.03507) |

### LLM Training / Distributed Training

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **PyTorch Distributed: Experiences on Accelerating Data Parallel Training** | [VLDB'20](https://www.vldb.org/pvldb/vol13/p3005-li.pdf) | 剖析 DDP 梯度分桶、通信计算重叠与同步机制，理解数据并行的实际扩展瓶颈 | [Paper](https://www.vldb.org/pvldb/vol13/p3005-li.pdf) |
| ⬜ | **GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism** | [NeurIPS'19](https://arxiv.org/abs/1811.06965) | 用 microbatch 和重计算搭建同步流水线训练，理解大模型分层切分与 bubble 开销 | [Paper](https://arxiv.org/abs/1811.06965) |
| ⬜ | **PipeDream: Generalized Pipeline Parallelism for DNN Training** | [SOSP'19](https://dl.acm.org/doi/10.1145/3341301.3359646) | 通过流水线调度和权重版本管理提高训练利用率，理解流水线并行中的参数一致性取舍 | [Paper](https://dl.acm.org/doi/10.1145/3341301.3359646) |
| ⬜ | **Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism** | [arXiv'19](https://arxiv.org/abs/1909.08053) | 在 Transformer 内进行张量并行切分，以较少通信支撑多十亿参数语言模型训练 | [Paper](https://arxiv.org/abs/1909.08053) |
| ⬜ | **ZeRO: Memory Optimizations Toward Training Trillion Parameter Models** | [SC'20](https://arxiv.org/abs/1910.02054) | 分片优化器状态、梯度和参数，解释数据并行如何消除显存冗余并扩展模型规模 | [Paper](https://arxiv.org/abs/1910.02054) |
| ⬜ | **ZeRO-Offload: Democratizing Billion-Scale Model Training** | [USENIX ATC'21](https://www.usenix.org/conference/atc21/presentation/ren-jie) | 将优化器计算和状态卸载到 CPU，并与 GPU 训练配合，让有限显存支持更大模型 | [Paper](https://www.usenix.org/conference/atc21/presentation/ren-jie) |
| ⬜ | **Memory-Efficient Pipeline-Parallel DNN Training** | [ICML'21](https://proceedings.mlr.press/v139/narayanan21a.html) | 用 PipeDream-2BW 的双版本权重和流水线调度降低内存需求，兼顾吞吐与训练语义 | [Paper](https://proceedings.mlr.press/v139/narayanan21a.html) |
| ⬜ | **ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning** | [SC'21](https://arxiv.org/abs/2104.07857) | 联合 GPU、CPU 与 NVMe 分层卸载和带宽管理，突破超大模型训练的 GPU 显存容量限制 | [Paper](https://arxiv.org/abs/2104.07857) |
| ⬜ | **Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM** | [SC'21](https://arxiv.org/abs/2104.04473) | 组合张量、流水线与数据并行，并用交错流水线减少大模型训练气泡 | [Paper](https://arxiv.org/abs/2104.04473) |
| ⬜ | **GSPMD: General and Scalable Parallelization for ML Computation Graphs** | [arXiv'21](https://arxiv.org/abs/2105.04663) | 用少量张量分片标注自动传播并行策略，将单设备计算图扩展到多设备 | [Paper](https://arxiv.org/abs/2105.04663) |
| ⬜ | <a id="pdf-5dhgh5an"></a>**Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin) | 分层搜索算子内与算子间并行策略，自动规划分布式训练执行方案 | [Paper](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin) |
| ⬜ | **DeepSpeed Ulysses: System Optimizations for Enabling Training of Extreme Long Sequence Transformer Models** | [arXiv'23](https://arxiv.org/abs/2309.14509) | 通过 all-to-all 转换序列与 attention head 分片，支持极长序列训练 | [Paper](https://arxiv.org/abs/2309.14509) |
| ⬜ | **Ring Attention with Blockwise Transformers for Near-Infinite Context** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/1119587863e78451f080da2a768c4935-Abstract-Conference.html) | 用环形 KV 块传输重叠分块 attention 计算，将长上下文分摊到多设备 | [Paper](https://arxiv.org/abs/2310.01889) |
| ⬜ | **Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates** | [SOSP'23](https://arxiv.org/abs/2309.08125) | 以异构流水线模板和冗余模型状态实现故障后的快速恢复与重配置 | [Paper](https://arxiv.org/abs/2309.08125) |
| ⬜ | <a id="pdf-xn3au5xv"></a>**MegaScale: Scaling Large Language Model Training to More Than 10,000 GPUs** | [NSDI'24](https://www.usenix.org/conference/nsdi24/presentation/jiang-ziheng) | 结合训练算法、通信与故障监控优化，展示万卡规模 LLM 训练的工程瓶颈 | [Paper](https://www.usenix.org/conference/nsdi24/presentation/jiang-ziheng) |
| ⬜ | <a id="pdf-qcnk8s78"></a>**LoongTrain: Efficient Training of Long-Sequence LLMs with Head-Context Parallelism** | [arXiv'24](https://arxiv.org/abs/2406.18485) | 结合 head 与 context 二维并行及双环通信，突破长序列训练的扩展限制 | [Paper](https://arxiv.org/pdf/2406.18485) |
| ✅ 📝 | <a id="pdf-vcw4ly38"></a>**PithTrain: A Compact and Agent-Native MoE Training System** | [arXiv'26](https://arxiv.org/abs/2605.31463) | 以紧凑模块和显式训练结构降低 MoE 系统修改成本，支持编码代理迭代优化 | [Paper](https://arxiv.org/abs/2605.31463) / [Note](Papers/03_Distributed_Training_and_MoE/PithTrain/pithtrain.md) / [Code Guide](Projects/03_Distributed_Training_and_MoE/PithTrain/index.md) |
| ⬜ | <a id="pdf-c5lnh2yd"></a>**Insights into DeepSeek-V3: Scaling Challenges and Reflections on Hardware for AI Architectures** | Proceedings of the 52nd Annual International Symposium on Computer Architecture · 2025 | 标签：分布式训练与 MoE | [Paper](http://arxiv.org/abs/2505.09343) / [PDF](zotero://open-pdf/library/items/XPT4R2PX) / [Zotero](zotero://select/library/items/C5LNH2YD) |

### LLM Training / Mixture-of-Experts Training

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer** | [ICLR'17](https://research.google/pubs/outrageously-large-neural-networks-the-sparsely-gated-mixture-of-experts-layer/) | 现代稀疏 MoE 的起点：top-k gate、稀疏激活与负载均衡 | [Paper](https://arxiv.org/abs/1701.06538) |
| ⬜ | **GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding** | [ICLR'21](https://research.google/pubs/gshard-scaling-giant-models-with-conditional-computation-and-automatic-sharding/) | 将 MoE、SPMD sharding 和大规模 Transformer 训练结合 | [Paper](https://arxiv.org/abs/2006.16668) |
| ⬜ | **BASE Layers: Simplifying Training of Large, Sparse Models** | [ICML'21](https://proceedings.mlr.press/v139/lewis21a.html) | 用 balanced assignment 避免额外负载均衡损失 | [Paper](https://arxiv.org/abs/2103.16716) |
| ⬜ | **GLaM: Efficient Scaling of Language Models with Mixture-of-Experts** | [ICML'22](https://proceedings.mlr.press/v162/du22c.html) | 大规模稀疏语言模型的质量、计算与能耗权衡 | [Paper](https://arxiv.org/abs/2112.06905) |
| ⬜ | **DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training to Power Next-Generation AI Scale** | [ICML'22](https://proceedings.mlr.press/v162/rajbhandari22a.html) | expert parallel、通信与 MoE inference/training 系统化设计 | [Paper](https://arxiv.org/abs/2201.05596) |
| ⬜ | **FasterMoE: Modeling and Optimizing Training of Large-Scale Dynamic Pre-Trained Models** | [PPoPP'22](https://doi.org/10.1145/3503221.3508418) | 动态路由下的 shadowing 与拓扑感知通信优化 | [Paper](https://doi.org/10.1145/3503221.3508418) |
| ⬜ | **Tutel: Adaptive Mixture-of-Experts at Scale** | [MLSys'23](https://proceedings.mlsys.org/paper_files/paper/2023/hash/5616d34cf8ff73942cfd5aa922842556-Abstract-mlsys2023.html) | 自适应并行、all-to-all 与 kernel 优化的完整 MoE 系统 | [Paper](https://arxiv.org/abs/2206.03382) |
| ⬜ | **MegaBlocks: Efficient Sparse Training with Mixture-of-Experts** | [MLSys'23](https://proceedings.mlsys.org/paper_files/paper/2023/hash/5a54f79333768effe7e8927bcccffe40-Abstract-mlsys2023.html) | 将 token dropping 问题转成 block-sparse GEMM，最贴近算子视角 | [Paper](https://arxiv.org/abs/2211.15841) |
| ⬜ | <a id="pdf-xxvli24b"></a>**FOLDMOE: Efficient Long Sequence MoE Training via Attention-MoE Pipelining** | 来源待补全 | 标签：分布式训练与 MoE | [PDF](zotero://open-pdf/library/items/C4UQSUQ3) / [Zotero](zotero://select/library/items/XXVLI24B) |
| ⬜ | <a id="pdf-2ljkaklx"></a>**UniEP: Unified Expert-Parallel MegaKernel MoE for LLM Training** | Proceedings of the 35th International Symposium on High-Performance Parallel and Distributed Computing · 2026 | 标签：分布式训练与 MoE | [Paper](https://dl.acm.org/doi/10.1145/3806645.3807818) / [PDF](zotero://open-pdf/library/items/TWBKWUCN) / [Zotero](zotero://select/library/items/2LJKAKLX) |

### LLM Training / RL Training

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | <a id="pdf-lv4qk9kg"></a>**Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/qin) | 利用同一 prompt 下响应长度和模式的相似性，减少同步 RL rollout 长尾与资源浪费 | [Paper](https://arxiv.org/pdf/2511.14617) / [Note](Papers/03_Distributed_Training_and_MoE/Seer/zhihu-reading.md) |
| ⬜ | <a id="pdf-i3m9y4v9"></a>**DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale** | arXiv · 2026 | 标签：分布式训练与 MoE | [Paper](http://arxiv.org/abs/2609.22978) / [PDF](zotero://open-pdf/library/items/XBZEVX2N) / [Zotero](zotero://select/library/items/I3M9Y4V9) |

### LLM Training / Compute-Communication Overlap

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Flux: Fast Software-based Communication Overlap on GPUs through Kernel Fusion** | [arXiv'24](https://arxiv.org/abs/2406.06858) | 将通信融入 GEMM 内核并按 tile 细粒度重叠，降低张量并行的暴露通信耗时 | [Paper](https://arxiv.org/pdf/2406.06858v1) |
| ✅ | **DeepEP: An Efficient Expert-Parallel Communication Library** | [GitHub'25（开源库）](https://github.com/deepseek-ai/DeepEP) | 提供面向 MoE token dispatch/combine 的高吞吐与低延迟专家并行通信实现 | [Paper](https://github.com/deepseek-ai/DeepEP) |
| ⬜ | **Centauri: Enabling Efficient Scheduling for Communication-Computation Overlap in Large Model Training via Communication Partitioning** | [ASPLOS'24](https://www.asplos-conference.org/asplos2024/main-program/abstracts/) | 通过通信分区和分层调度扩大重叠空间，协调大模型训练中的通信与计算资源 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3620666.3651379) |
| ⬜ | **Comet: Fine-grained Computation-communication Overlapping for Mixture-of-Experts** | [MLSys'25](https://proceedings.mlsys.org/paper_files/paper/2025/hash/e27ea0cd50b798ff8942caf9203f0992-Abstract-Conference.html) | 分析 MoE 数据依赖并重排计算通信任务，实现细粒度重叠以降低专家并行开销 | [Paper](https://arxiv.org/pdf/2502.19811) |
| ⬜ | **TileLink: Generating Efficient Compute-Communication Overlapping Kernels using Tile-Centric Primitives** | [MLSys'25](https://proceedings.mlsys.org/paper_files/paper/2025/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html) | 用 tile 级通信原语和编译调度生成重叠内核，减少分布式算子的手工优化工作 | [Paper](https://arxiv.org/pdf/2503.20313) |
| ⬜ | **Triton-distributed: Programming Overlapping Kernels on Distributed AI Systems with the Triton Compiler** | [arXiv'25](https://arxiv.org/abs/2504.19442) | 将 OpenSHMEM 通信原语引入 Triton，使分布式计算通信重叠可用统一语言表达 | [Paper](https://arxiv.org/pdf/2504.19442) |
| ⬜ | **Efficient and Adaptable Overlapping for Computation and Communication via Signaling and Reordering (FlashOverlap)** | [EuroSys'26](https://arxiv.org/abs/2504.19519) | 通过 tile 就绪信号和数据重排实现细粒度重叠，复用通信库并减少对计算的干扰 | [Paper](https://arxiv.org/pdf/2504.19519) |
| ⬜ | **TokenWeave: Efficient Compute-Communication Overlap for Distributed LLM Inference** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/73ba81c7b25134a559c8a9c39ec1a4c3-Abstract-Conference.html) | 融合 AllReduce 与 RMSNorm，以少量 SM 支持较小 token 批次的推理通信重叠 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/73ba81c7b25134a559c8a9c39ec1a4c3-Abstract-Conference.html) |
| ⬜ | **UEP: Portable Expert-Parallel Communication** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/mao-ziming-uep) | 用 GPU–CPU 控制通道与 CPU 代理发起 RDMA，实现跨 GPU/NIC 的可移植专家通信 | [Paper](https://www.usenix.org/conference/osdi26/presentation/mao-ziming-uep) |

### Deep Learning / Sparse Attention Algorithms & Training / Algorithm and Training Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity** | [JMLR'22](https://www.jmlr.org/papers/volume23/21-0998/21-0998.pdf) | hard Top-1 routing、capacity 与 load-balancing loss；将 Indexer 理解成 memory router | [Paper](https://arxiv.org/abs/2101.03961) |
| ⬜ | **ST-MoE: Designing Stable and Transferable Sparse Expert Models** | [arXiv'22](https://arxiv.org/abs/2202.08906) | Router 稳定性、辅助损失与 router z-loss；理解小型路由器如何影响整个模型训练 | [Paper](https://arxiv.org/abs/2202.08906) |
| ⬜ | **Mixture-of-Experts with Expert Choice Routing** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/hash/2f00ecd787b432c1d36f3de9800728eb-Abstract-Conference.html) | expert 选择 token 而非 token 选择 expert；类比 q2k→k2q reverse index 与 KV-owner 调度 | [Paper](https://arxiv.org/abs/2202.09368) |

### Deep Learning / On-Device / Mobile

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **On-Device Training Under 256KB Memory** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/hash/90c56c77c6df45fc8e556a096b7a2b2e-Abstract-Conference.html) | 通过量化感知梯度缩放、稀疏更新与编译期反向图裁剪，在 256KB 内存下训练模型 | [Paper](https://arxiv.org/pdf/2206.15472.pdf) |
| ✅ 📝 | <a id="pdf-fayd7t8v"></a>**PockEngine: Sparse and Efficient Fine-tuning in a Pocket** | [MICRO'23](https://hanlab.mit.edu/projects/pockengine ; https://hanlab.mit.edu/projects/tinyml) | 把稀疏反向传播与完整训练图编译结合，降低边缘设备微调的内存和运行时开销 | [Paper](https://hanlab.mit.edu/projects/pockengine ; https://hanlab.mit.edu/projects/tinyml) / [Note](Papers/03_Distributed_Training_and_MoE/PockEngine/github-reading.md) |

### 分布式训练与 MoE / 分布式运行时

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-x54t96iz"></a>**ECO: An AI-Driven Code Efficiency Optimizer for Warehouse Scale Computers (Operational Systems)** | 来源待补全 | 标签：分布式训练与 MoE / 分布式运行时 | [PDF](zotero://open-pdf/library/items/ZZ48FKB2) / [Zotero](zotero://select/library/items/X54T96IZ) |
| ⬜ | <a id="pdf-84l6g9l7"></a>**Ray: A Distributed Framework for Emerging AI Applications** | arXiv · 2018 | 标签：分布式训练与 MoE / 分布式运行时 | [Paper](http://arxiv.org/abs/1712.05889) / [PDF](zotero://open-pdf/library/items/JYZPKSY8) / [Zotero](zotero://select/library/items/84L6G9L7) |

</details>

<details>
<summary>GPU 编译与性能（64 篇；已读 29，待读 35）</summary>

### Deep Learning Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-bzhnqksp"></a>**The Deep Learning Compiler: A Comprehensive Survey** | [TPDS'21](https://arxiv.org/abs/2002.03794) | 梳理多层 IR、图优化与后端调度，建立深度学习编译器的整体知识框架 | [Paper](https://arxiv.org/pdf/2002.03794.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md) |
| ✅ | **MLIR: Scaling Compiler Infrastructure for Domain Specific Computation** | [CGO'21](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308) | 通过可扩展 dialect 与逐层 lowering 复用编译基础设施，理解现代 AI 编译器架构 | [Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md) |
| ✅ | <a id="pdf-fspxsd3e"></a>**TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code** | [CGO'19](https://arxiv.org/abs/1804.10694) | 分离算法、循环变换、数据布局和通信，理解多面体调度与跨硬件代码生成 | [Paper](https://arxiv.org/abs/1804.10694) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/TIRAMISU-CGO/tiramisu.md) |
| ✅ 📝 | <a id="pdf-iudcdq55"></a>**Rammer: Enabling Holistic Deep Learning Compiler Optimizations with rTasks** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/ma) | 用 rTask 统一算子内外并行性，在编译期生成静态时空调度以减少运行时开销 | [Paper](https://www.usenix.org/system/files/osdi20-ma.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Rammer/github-reading.md) |
| ✅ 📝 | <a id="pdf-qt9999j2"></a>**ROLLER: Fast and Efficient Tensor Compilation for Deep Learning** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/zhu) | 用硬件感知 rTile 和性能模型构造候选 kernel，缩短传统大规模自动调优时间 | [Paper](https://www.usenix.org/system/files/osdi22-zhu.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/ROLLER/github-reading.md) |
| ✅ 📝 | <a id="pdf-442yd3j8"></a>**BOLT: Bridging The Gap Between Auto-Tuners and Hardware-Native Performance** | [MLSys'22](https://proceedings.mlsys.org/paper_files/paper/2022/hash/1f8053a67ec8e0b57455713cefdd8218-Abstract.html) | 利用 CUTLASS 等硬件原生模板进行搜索，连接自动调优的灵活性与库级性能 | [Paper](http://yibozhu.com/doc/bolt-mlsys22.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/BOLT/github-reading.md) |
| ✅ 📝 | <a id="pdf-lggjf8m7"></a>**AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures** | [ASPLOS'22](https://dl.acm.org/doi/10.1145/3503222.3507723) | 联合探索线程映射、片上复用与算子融合，优化访存密集型训练和推理算子 | [Paper](https://dl.acm.org/doi/10.1145/3503222.3507723) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/AStitch/github-reading.md) |
| ✅ 📝 | <a id="pdf-3mkpy6ya"></a>**AMOS: Enabling Automatic Mapping for Tensor Computations On Spatial Accelerators with Hardware Abstraction** | [ISCA'22](https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf) | 将硬件 intrinsic 抽象成可分析的计算与访存语义，自动生成张量到加速器的映射 | [Paper](https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/AMOS/github-reading.md) |
| ✅ 📝 | <a id="pdf-d8ryqp7s"></a>**Welder: Scheduling Deep Learning Memory Access via Tile-graph** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/shi) | 用 tile-graph 与数据流量模型统一算子内外数据复用，降低端到端访存开销 | [Paper](https://www.usenix.org/system/files/osdi23-shi.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Welder/github-reading.md) |
| ✅ | <a id="pdf-qsbafgrs"></a>**Effectively Scheduling Computational Graphs of Deep Neural Networks toward Their Domain-Specific Accelerators** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/zhao) | 将硬件资源纳入子图划分和跨层指令调度，减少片外数据搬运并提高加速器利用率 | [Paper](https://www.usenix.org/conference/osdi23/presentation/zhao) |
| ✅ 📝 | <a id="pdf-y85sa3rg"></a>**Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/zhang-chen) | 以 uTask 统一控制流和数据流，把动态分支与循环下沉到加速器以减少 CPU 同步 | [Paper](https://www.usenix.org/system/files/osdi23-zhang-chen.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Cocktailer/github-reading.md) |
| ✅ 📝 | <a id="pdf-ku4qf7dt"></a>**Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion** | [HPCA'23](https://light-of-hers.github.io/assets/Chimera.pdf) | 用分析模型选择计算块执行顺序，并结合硬件微内核优化计算密集型算子链融合 | [Paper](https://light-of-hers.github.io/assets/Chimera.pdf) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Chimera/github-reading.md) |
| ✅ 📝 | <a id="pdf-ddhsem5z"></a>**Graphene: An IR for Optimized Tensor Computations on GPUs** | [ASPLOS'23](https://mgarland.org/papers/2023/graphene/) | 将数据和线程都表示为可分块张量，显式表达 GPU tensor 指令要求的复杂映射 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3582016.3582018) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Graphene/github-reading.md) |
| ✅ | **Uncovering Nested Data Parallelism and Data Reuse in DNN Computation with FractalTensor** | [SOSP'24](https://dl.acm.org/doi/10.1145/3694715.3695961) | 通过嵌套张量与数组算子表达跨循环、跨算子的并行性和复用，突破平面计算图限制 | [Paper](https://dl.acm.org/doi/10.1145/3694715.3695961) |
| ✅ | <a id="pdf-zfws5neu"></a>**ThunderKittens: Simple, Fast, and Adorable AI Kernels** | [ICLR'25](https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html) | 以 tile 数据结构、异步流水线模板和网格调度简化高性能 GPU kernel 编写 | [Paper](https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html) |
| ✅ | <a id="pdf-a2sdd4xx"></a>**Mirage: A Multi-Level Superoptimizer for Tensor Programs** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/wu-mengdi) | 用多层 µGraph 搜索代数和调度变换，并验证等价性，探索超越既有算子库的融合 | [Paper](https://www.usenix.org/system/files/osdi25-wu-mengdi.pdf) |
| ✅ | **PipeThreader: Software-Defined Pipelining for Efficient DNN Execution** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/cheng) | 用 sTask-graph 和软件定义流水线协调 GPU 专用单元，自动发现计算与数据搬运的重叠方案 | [Paper](https://www.usenix.org/system/files/osdi25-cheng.pdf) |
| ✅ | <a id="pdf-xud9jbj4"></a>**TileLang: A Composable Tiled Programming Model for AI Systems** | [arXiv'25](https://arxiv.org/abs/2504.17577) | 将 tile 数据流与布局、线程映射和流水线调度解耦，降低高性能 AI kernel 编程负担 | [Paper](https://arxiv.org/pdf/2504.17577) |
| ✅ 📝 | <a id="pdf-hx7i8979"></a>**Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References** | [CGO'26](https://arxiv.org/abs/2510.14719) | 以异步引用表达依赖并自动生成 warp specialization，减少手工管理并发和同步的负担 | [Paper](https://arxiv.org/pdf/2510.14719) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/Tawa/zhihu-reading.md) |
| ✅ | <a id="pdf-k8hmzhbp"></a>**KPerfIR: Towards an Open and Compiler-centric Ecosystem for GPU Kernel Performance Tooling on Modern AI Workloads** | [OSDI'25](https://www.usenix.org/conference/osdi25/presentation/guan) | 将性能测量实现为编译器 pass，观察 GPU kernel 内部的细粒度执行与重叠瓶颈 | [Paper](https://www.usenix.org/system/files/osdi25-guan.pdf) |
| ⬜ | **Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/soi) | 将软件流水线和 warp specialization 联合建模为约束优化，推导模型假设下的最优调度 | [Paper](https://www.usenix.org/conference/osdi26/presentation/soi) |
| ⬜ | **GraCE: Unlocking CUDA Graphs with Compiler Support for ML Workloads** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/ghosh) | 自动变换程序并分析成本收益，扩大 CUDA Graph 覆盖率并减少参数拷贝和启动开销 | [Paper](https://www.usenix.org/conference/osdi26/presentation/ghosh) |
| ⬜ | <a id="pdf-qbqw7v9r"></a>**AffineGraph: A Dataflow Graph Representation for Effective DNN Hardware-Aware Algorithms** | 来源待补全 | 标签：GPU 编译与性能优化 | [PDF](zotero://open-pdf/library/items/L9PBDJL3) / [Zotero](zotero://select/library/items/QBQW7V9R) |
| ⬜ | <a id="pdf-rgznhh6b"></a>**Ansor: Generating High-Performance Tensor Programs for Deep Learning** | 来源待补全 | 标签：GPU 编译与性能优化 / 编译器架构与调度 | [PDF](zotero://open-pdf/library/items/A4GT2NTU) / [Zotero](zotero://select/library/items/RGZNHH6B) |
| ⬜ | <a id="pdf-cuzav7by"></a>**Graphiler: A Compiler for Graph Neural Networks** | 来源待补全 | 标签：GPU 编译与性能优化 / 编译器架构与调度 | [PDF](zotero://open-pdf/library/items/IYTUH2XV) / [Zotero](zotero://select/library/items/CUZAV7BY) |
| ⬜ | <a id="pdf-dustz3lm"></a>**The tensor algebra compiler** | Proceedings of the ACM on Programming Languages · 2017 | 标签：GPU 编译与性能优化 / 编译器架构与调度 | [Paper](https://dl.acm.org/doi/10.1145/3133901) / [PDF](zotero://open-pdf/library/items/ZVZ6LMVF) / [Zotero](zotero://select/library/items/DUSTZ3LM) |

### LLM Inference / MegaKernel

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B** | [Blog'25](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles) | 以 Llama-1B 实例解释 megakernel 如何消除 kernel 边界气泡，并管理细粒度同步和共享内存 | [Paper](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles) / [Note](Papers/04_GPU_Compiler_and_Performance/Megakernels/zhihu-reading.md) |
| ✅ 📝 | <a id="pdf-ys4nklly"></a>**MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs** | [OSDI'26](https://www.usenix.org/conference/osdi26/presentation/cheng) | 将多 GPU 推理编译成 SM 级任务图，在持久化 kernel 内调度计算与通信以降低端到端延迟 | [Paper](https://www.usenix.org/conference/osdi26/presentation/cheng) / [Note](Papers/04_GPU_Compiler_and_Performance/MPK/zhihu-reading.md) |
| ✅ 📝 | <a id="pdf-32ktjcln"></a>**Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel** | [MLSys'26](https://arxiv.org/abs/2604.13327) | 以 Event Tensor 统一 tile 任务依赖、动态形状和数据相关控制流，支持动态 megakernel 编译 | [Paper](https://arxiv.org/abs/2604.13327) / [Note](Papers/04_GPU_Compiler_and_Performance/Event-Tensor/event-tensor.md) |
| ✅ 📝 | **TileRT: Tile-Based Runtime for Ultra-Low-Latency LLM Inference** | [GitHub project'25](https://github.com/tile-ai/TileRT) | 用 tile 级运行时重排并重叠计算、I/O 与跨设备通信，探索大模型低延迟推理的工程路径 | [Paper](https://github.com/tile-ai/TileRT) / [Note](Projects/02_Inference_and_KV_Cache/TileRT/zhihu-reading.md) |
| ✅ | **Compiling LLMs into a MegaKernel: A Path to Low-Latency Inference** | [Blog](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17) | 从编译器和运行时角度解释全模型 megakernel，连接任务依赖、跨算子调度与低延迟推理 | [Paper](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17) |
| ⬜ | **Ada-MK: Adaptive MegaKernel Optimization via Automated DAG-based Search for LLM Inference** | [arXiv'26](https://arxiv.org/abs/2605.11581) | 用离线 DAG 搜索固定 megakernel 执行路径，减少资源受限 GPU 上动态调度和共享内存开销 | [Paper](https://arxiv.org/abs/2605.11581) |
| ⬜ | <a id="pdf-a8tkxuy6"></a>**ClusterFusion: Expanding Operator Fusion Scope for LLM Inference via Cluster-Level Collective Primitive** | arXiv · 2025 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2508.18850) / [PDF](zotero://open-pdf/library/items/B4555BYV) / [Zotero](zotero://select/library/items/A8TKXUY6) |
| ⬜ | <a id="pdf-9mb4wuba"></a>**mKernel: Fast Multi-GPU, Multi-Node Fused Kernels** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2609.13585) / [PDF](zotero://open-pdf/library/items/B7346TDX) / [Zotero](zotero://select/library/items/9MB4WUBA) |

### LLM for Kernel Optimization

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **AVO: Agentic Variation Operators for Autonomous Evolutionary Search** | [arXiv'26](https://arxiv.org/abs/2603.24517) | 用自主编码 agent 替代固定变异与交叉算子，让进化搜索自适应生成和验证程序候选 | [Paper](https://arxiv.org/abs/2603.24517) / [Note](Papers/04_GPU_Compiler_and_Performance/Kernel-Generation/avo.md) |
| ✅ 📝 | <a id="pdf-ggpeq93n"></a>**CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution** | [arXiv'26](https://arxiv.org/abs/2608.12629) | 让 agent 编写显式硬件调度 IR，并结合验证、成本模型与局部诊断迭代优化 GPU kernel | [Paper](https://arxiv.org/abs/2608.12629) / [Note](Papers/04_GPU_Compiler_and_Performance/Kernel-Generation/CAKE.md) |
| ⬜ | **FlashInfer-Bench: Building the Virtuous Cycle for AI-driven LLM Systems** | [MLSys'26](https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html) | 以真实 LLM 工作负载、正确性验证和性能评测连接 AI kernel 生成与系统部署 | [Paper](https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html) |
| ⬜ | **Harness Engineering for LLM-Driven GPU Kernel Generation** | [arXiv'26](https://arxiv.org/abs/2607.17979) | 围绕约束、正确性验证、性能分析和候选筛选设计 harness，提高 LLM 生成 GPU kernel 的可靠性 | [Paper](https://arxiv.org/abs/2607.17979) |
| ⬜ | **Agentic Kernel Optimization: Generating State-of-the-Art GPU Kernels Without Hand-Written CUDA** | [Tech report'26](https://arxiv.org/abs/2608.14560) | 在正确性门控的 FlashInfer-Bench 流程中评估通用代码 agent 自动优化 MoE 与 DSA kernel 的能力 | [Paper](https://arxiv.org/abs/2608.14560) |
| ⬜ | <a id="pdf-8cwabfp9"></a>**Open-CAKE-IR：跨硬件优化机制复用与编译器协同演进** | 技术报告 · 2026 | 标签：GPU 编译与性能优化 | [PDF](zotero://open-pdf/library/items/WWGR9WGJ) / [Zotero](zotero://select/library/items/8CWABFP9) |

### GPU Microarchitecture

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Understanding Latency Hiding on GPUs** | [PhD thesis'16](https://escholarship.org/uc/item/1wb7f3h4) | 用简化微基准与性能模型解释 GPU 延迟隐藏，分析线程数、算术强度和吞吐的关系 | [Paper](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-143.pdf) |

### Math Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Categorical Foundations for CuTe Layouts** | [arXiv'26](https://arxiv.org/abs/2601.05972) | 用范畴与布局代数形式化 CuTe 的组合、乘积和除法，并验证其与实现一致 | [Paper](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/) / [中文全文](Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/Layout.md) / [2025-09 PDF](Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/source.pdf) / [Zotero](zotero://select/library/items/Q3PT5C24) |

### Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-4uvspptv"></a>**HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis** | [ASPLOS'24](https://arxiv.org/abs/2311.03379) | 用分层数据流表示与多级优化自动生成 FPGA 数据流架构，减少手工 HLS 调优 | [Paper](https://arxiv.org/abs/2311.03379) / [Note](Papers/04_GPU_Compiler_and_Performance/Compiler/HIDA/hida.md) |

### GPU 编译与性能优化 / Kernel Fusion

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-fq6vyvp7"></a>**CODA: Rewriting Transformer Blocks as GEMM-Epilogue Programs** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2605.19269) / [PDF](zotero://open-pdf/library/items/ZEPXG6YF) / [Zotero](zotero://select/library/items/FQ6VYVP7) |
| ⬜ | <a id="pdf-l7udh9yc"></a>**Automatic Horizontal Fusion for GPU Kernels** | 2022 IEEE/ACM International Symposium on Code Generation and Optimization (CGO) · 2022 | 标签：GPU 编译与性能优化 / Kernel Fusion | [Paper](https://ieeexplore.ieee.org/document/9741270/) / [PDF](zotero://open-pdf/library/items/DBCSL5U7) / [Zotero](zotero://select/library/items/L7UDH9YC) |

### GPU 编译与性能优化 / GPU 运行时与性能工具

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-vdc3bvfn"></a>**TileSight: A First-Principles Tile-Centric Analytical GPU Performance Model from Cores to Clusters** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2607.22432) / [PDF](zotero://open-pdf/library/items/RZDVW9MX) / [Zotero](zotero://select/library/items/VDC3BVFN) |
| ⬜ | <a id="pdf-rczkv7b3"></a>**X-Stage: Modeling Post-Issue Backpressure in GPU Communication--Computation Fusion** | arXiv · 2026 | 标签：GPU 编译与性能优化 | [Paper](http://arxiv.org/abs/2607.23264) / [PDF](zotero://open-pdf/library/items/H5JS78CN) / [Zotero](zotero://select/library/items/RCZKV7B3) |

### GPU 编译与性能优化 / GPU 算子

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-nbpphe8k"></a>**FlashFFTConv: Efficient Convolutions for Long Sequences with Tensor Cores** | arXiv · 2023 | 标签：GPU 编译与性能优化 / GPU 算子 | [Paper](http://arxiv.org/abs/2311.05908) / [PDF](zotero://open-pdf/library/items/QDPRZPX2) / [Zotero](zotero://select/library/items/NBPPHE8K) |

### GPU 编译与性能优化 / GPU 编程语言与 DSL

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-pcx9kbe8"></a>**Slapo: A Schedule Language for Progressive Optimization of Large Deep Learning Model Training** | arXiv · 2023 | 标签：GPU 编译与性能优化 / GPU 编程语言与 DSL | [Paper](http://arxiv.org/abs/2302.08005) / [PDF](zotero://open-pdf/library/items/3DBN55V2) / [Zotero](zotero://select/library/items/PCX9KBE8) |
| ⬜ | <a id="pdf-daasnkmz"></a>**Task-Based Tensor Computations on Modern GPUs** | arXiv · 2025 | 标签：GPU 编译与性能优化 / GPU 编程语言与 DSL | [Paper](http://arxiv.org/abs/2504.07004) / [PDF](zotero://open-pdf/library/items/RAQT8GSR) / [Zotero](zotero://select/library/items/DAASNKMZ) |
| ⬜ | <a id="pdf-ykm5hmfz"></a>**Tilus: A Virtual Machine for Arbitrary Low-Precision GPGPU Computation in LLM Serving** | arXiv · 2025 | 标签：GPU 编译与性能优化 / GPU 编程语言与 DSL | [Paper](http://arxiv.org/abs/2504.12984) / [PDF](zotero://open-pdf/library/items/ZUCBLEW5) / [Zotero](zotero://select/library/items/YKM5HMFZ) |

### GPU 编译与性能优化 / IR 与张量化

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-bcntjhsm"></a>**Dual-side Sparse Tensor Core** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / IR 与张量化 | [Paper](https://ieeexplore.ieee.org/document/9499745/) / [PDF](zotero://open-pdf/library/items/LYZ6VBHY) / [Zotero](zotero://select/library/items/BCNTJHSM) |
| ⬜ | <a id="pdf-n352gm8m"></a>**LADDER: Enabling Efficient Low-Precision Deep Learning Computing through Hardware-aware Tensor Transformation** | 来源待补全 | 标签：GPU 编译与性能优化 / IR 与张量化 | [PDF](zotero://open-pdf/library/items/4Z3T48EM) / [Zotero](zotero://select/library/items/N352GM8M) |
| ⬜ | <a id="pdf-ant4qwkr"></a>**MLIR-based code generation for GPU tensor cores** | Proceedings of the 31st ACM SIGPLAN International Conference on Compiler Construction · 2022 | 标签：GPU 编译与性能优化 / IR 与张量化 | [Paper](https://dl.acm.org/doi/10.1145/3497776.3517770) / [PDF](zotero://open-pdf/library/items/8L7I4TM7) / [Zotero](zotero://select/library/items/ANT4QWKR) |
| ⬜ | <a id="pdf-5etazt8g"></a>**PIT: Optimization of Dynamic Sparse Deep Learning Models via Permutation Invariant Transformation** | 来源待补全 · 2023 | 标签：GPU 编译与性能优化 / IR 与张量化 | [PDF](zotero://open-pdf/library/items/3PFGF8PF) / [Zotero](zotero://select/library/items/5ETAZT8G) |
| ✅ | <a id="pdf-3rmrwj56"></a>**SparseTIR: Composable Abstractions for Sparse Compilation in Deep Learning** | Proceedings of the 28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 3 · 2023 | 标签：GPU 编译与性能优化 / IR 与张量化 | [Paper](https://dl.acm.org/doi/10.1145/3582016.3582047) / [PDF](zotero://open-pdf/library/items/4F4IIX46) / [PDF2](zotero://open-pdf/library/items/8QAZ5LTU) / [PDF3](zotero://open-pdf/library/items/9GGQREBY) / [Zotero](zotero://select/library/items/3RMRWJ56) |

### GPU 编译与性能优化 / 分布式编译

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-j6td7kjm"></a>**DISTAL: the distributed tensor algebra compiler** | Proceedings of the 43rd ACM SIGPLAN International Conference on Programming Language Design and Implementation · 2022 | 标签：GPU 编译与性能优化 / 分布式编译 | [Paper](https://dl.acm.org/doi/10.1145/3519939.3523437) / [PDF](zotero://open-pdf/library/items/AMVNYVPH) / [Zotero](zotero://select/library/items/J6TD7KJM) |

### GPU 编译与性能优化 / 计算图优化

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-arcxwwsf"></a>**DNNFusion: accelerating deep neural networks execution with advanced operator fusion** | Proceedings of the 42nd ACM SIGPLAN International Conference on Programming Language Design and Implementation · 2021 | 标签：GPU 编译与性能优化 / 计算图优化 | [Paper](https://dl.acm.org/doi/10.1145/3453483.3454083) / [PDF](zotero://open-pdf/library/items/6EEYF2XM) / [Zotero](zotero://select/library/items/ARCXWWSF) |
| ⬜ | <a id="pdf-qk42tmsb"></a>**EINNET: Optimizing Tensor Programs with Derivation-Based Transformations** | 来源待补全 | 标签：GPU 编译与性能优化 / 计算图优化 | [PDF](zotero://open-pdf/library/items/C8455AUK) / [Zotero](zotero://select/library/items/QK42TMSB) |
| ⬜ | <a id="pdf-tekz8y2f"></a>**PET: Optimizing Tensor Programs with Partially Equivalent Transformations and Automated Corrections** | 来源待补全 | 标签：GPU 编译与性能优化 / 计算图优化 | [PDF](zotero://open-pdf/library/items/B8UQIZHU) / [Zotero](zotero://select/library/items/TEKZ8Y2F) |
| ⬜ | <a id="pdf-eclineu8"></a>**TASO: optimizing deep learning computation with automatic generation of graph substitutions** | Proceedings of the 27th ACM Symposium on Operating Systems Principles · 2019 | 标签：GPU 编译与性能优化 / 计算图优化 | [Paper](https://dl.acm.org/doi/10.1145/3341301.3359630) / [PDF](zotero://open-pdf/library/items/S64TB9IQ) / [Zotero](zotero://select/library/items/ECLINEU8) |

### GPU 编译与性能优化 / 软硬件协同设计

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-d7vqpngg"></a>**CoSA: Scheduling by Constrained Optimization for Spatial Accelerators** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / 软硬件协同设计 | [Paper](https://ieeexplore.ieee.org/document/9499855/) / [PDF](zotero://open-pdf/library/items/9B35YJJ3) / [Zotero](zotero://select/library/items/D7VQPNGG) |
| ⬜ | <a id="pdf-byw5msmm"></a>**HASCO: Towards Agile HArdware and Software CO-design for Tensor Computation** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / 软硬件协同设计 | [Paper](https://ieeexplore.ieee.org/document/9499796/) / [PDF](zotero://open-pdf/library/items/CZXLU8MM) / [Zotero](zotero://select/library/items/BYW5MSMM) |
| ⬜ | <a id="pdf-mnhpwtau"></a>**SARA: Scaling a Reconfigurable Dataflow Accelerator** | 2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA) · 2021 | 标签：GPU 编译与性能优化 / 软硬件协同设计 | [Paper](https://ieeexplore.ieee.org/document/9499943/) / [PDF](zotero://open-pdf/library/items/U55E5DCP) / [Zotero](zotero://select/library/items/MNHPWTAU) |

</details>

<details>
<summary>模型架构与推理能力（108 篇；已读 4，待读 104）</summary>

### LLM Training / Fine-Tuning & Alignment

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Fine-Tuning Language Models from Human Preferences** | [arXiv'19](https://arxiv.org/abs/1909.08593) | 将 reward model 与 PPO 用于语言模型偏好优化的早期完整方案 | [Paper](https://arxiv.org/abs/1909.08593) |
| ⬜ | **Learning to Summarize from Human Feedback** | [NeurIPS'20](https://arxiv.org/abs/2009.01325) | 展示偏好数据、reward model 和 RL 在真实生成任务中的规模化 | [Paper](https://arxiv.org/abs/2009.01325) |
| ⬜ | **Prefix-Tuning: Optimizing Continuous Prompts for Generation** | [ACL'21](https://aclanthology.org/2021.acl-long.353/) | 冻结主模型，仅训练可学习 prefix 的参数高效微调 | [Paper](https://arxiv.org/abs/2101.00190) |
| ⬜ | **The Power of Scale for Parameter-Efficient Prompt Tuning** | [EMNLP'21](https://arxiv.org/abs/2104.08691) | soft prompt 与模型规模关系，适合理解 PEFT 的表达能力 | [Paper](https://arxiv.org/abs/2104.08691) |
| ⬜ | **LoRA: Low-Rank Adaptation of Large Language Models** | [ICLR'22](https://www.microsoft.com/en-us/research/publication/lora-low-rank-adaptation-of-large-language-models/) | 冻结权重并注入低秩更新，连接矩阵秩、训练显存和多租户推理 | [Paper](https://arxiv.org/abs/2106.09685) |
| ⬜ | **Proximal Policy Optimization Algorithms** | [arXiv'17](https://arxiv.org/abs/1707.06347) | RLHF 所需的最低限度策略优化基础：ratio、advantage 与 clipping | [Paper](https://arxiv.org/abs/1707.06347) |
| ⬜ | **Finetuned Language Models Are Zero-Shot Learners** | [ICLR'22](https://research.google/pubs/finetuned-language-models-are-zero-shot-learners/) | FLAN 与 instruction tuning，说明任务混合如何产生泛化能力 | [Paper](https://arxiv.org/abs/2109.01652) |
| ⬜ | **Training Language Models to Follow Instructions with Human Feedback** | [NeurIPS'22](https://proceedings.neurips.cc/paper/2022/hash/b1efde53be364a73914f58805a001731-Abstract-Conference.html) | InstructGPT 的 SFT → reward model → PPO 三阶段链路 | [Paper](https://arxiv.org/abs/2203.02155) |
| ⬜ | **Constitutional AI: Harmlessness from AI Feedback** | [arXiv'22](https://arxiv.org/abs/2212.08073) | self-critique、revision 与 RLAIF，把安全原则引入后训练 | [Paper](https://arxiv.org/abs/2212.08073) |
| ⬜ | **Self-Instruct: Aligning Language Models with Self-Generated Instructions** | [ACL'23](https://arxiv.org/abs/2212.10560) | 自生成、过滤和扩增指令数据的经典流程 | [Paper](https://arxiv.org/abs/2212.10560) |
| ⬜ | **The Flan Collection: Designing Data and Methods for Effective Instruction Tuning** | [ICML'23](https://proceedings.mlr.press/v202/longpre23a.html) | 系统研究任务混合、模板、CoT 数据与 instruction tuning 配方 | [Paper](https://arxiv.org/abs/2301.13688) |
| ⬜ | **QLoRA: Efficient Finetuning of Quantized LLMs** | [NeurIPS'23](https://proceedings.neurips.cc/paper_files/paper/2023/hash/1feb87871436031bdc0f2beaa62a049b-Abstract.html) | NF4、double quantization、paged optimizer 与 LoRA 的组合 | [Paper](https://arxiv.org/abs/2305.14314) |
| ⬜ | **LIMA: Less Is More for Alignment** | [NeurIPS'23](https://papers.neurips.cc/paper_files/paper/2023/hash/ac662d74829e4407ce1d126477f4a03a-Abstract-Conference.html) | 少量高质量监督数据与大规模预训练知识之间的分工 | [Paper](https://arxiv.org/abs/2305.11206) |
| ⬜ | **Direct Preference Optimization: Your Language Model is Secretly a Reward Model** | [NeurIPS'23](https://proceedings.neurips.cc/paper_files/paper/2023/hash/a85b405ed65c6477a4fe8302b5e06ce7-Abstract-Conference.html) | 将显式 reward model + PPO 化为稳定的 pairwise classification loss | [Paper](https://arxiv.org/abs/2305.18290) |
| ⬜ | **RRHF: Rank Responses to Align Language Models with Human Feedback** | [NeurIPS'23](https://arxiv.org/abs/2304.05302) | 用候选排序损失统一多种反馈来源 | [Paper](https://arxiv.org/abs/2304.05302) |
| ⬜ | **A General Theoretical Paradigm to Understand Learning from Human Preferences** | [AISTATS'24](https://proceedings.mlr.press/v238/gheshlaghi-azar24a.html) | IPO 与偏好优化的理论视角，理解 DPO 类方法的过拟合和正则化 | [Paper](https://arxiv.org/abs/2310.12036) |
| ⬜ | **KTO: Model Alignment as Prospect Theoretic Optimization** | [ICML'24](https://arxiv.org/abs/2402.01306) | 只需 desirable/undesirable 标签的非成对偏好学习 | [Paper](https://arxiv.org/abs/2402.01306) |
| ⬜ | **ORPO: Monolithic Preference Optimization without Reference Model** | [EMNLP'24](https://aclanthology.org/2024.emnlp-main.626/) | 将 SFT 与偏好约束合并，移除独立 reference model | [Paper](https://arxiv.org/abs/2403.07691) |
| ⬜ | **SimPO: Simple Preference Optimization with a Reference-Free Reward** | [NeurIPS'24](https://arxiv.org/abs/2405.14734) | reference-free、长度归一化 reward 与 margin objective | [Paper](https://arxiv.org/abs/2405.14734) |
| ⬜ | **DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models** | [arXiv'24](https://arxiv.org/abs/2402.03300) | GRPO、数学数据与可验证奖励，是 reasoning RL 的关键前置 | [Paper](https://arxiv.org/abs/2402.03300) |
| ⬜ | <a id="pdf-llgxksrv"></a>**DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning** | [Nature'25](https://www.nature.com/articles/s41586-025-09422-z) | 大规模 reasoning RL、冷启动数据与蒸馏路线 | [Paper](https://arxiv.org/abs/2501.12948) |
| ⬜ | <a id="pdf-lgssufuy"></a>**Forking: Sudden Overfitting Under Replay** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2610.00394) / [PDF](zotero://open-pdf/library/items/UUKKY3ZD) / [Zotero](zotero://select/library/items/LGSSUFUY) |

### Deep Learning / Foundations & Optimization

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Learning Representations by Back-Propagating Errors** | [Nature'86](https://www.nature.com/articles/323533a0) | 从局部算子 backward 上升到计算图链式法则、梯度流和 activation 保存 | [Paper](https://www.nature.com/articles/323533a0) |
| ⬜ | **Understanding the Difficulty of Training Deep Feedforward Neural Networks** | [AISTATS'10](https://proceedings.mlr.press/v9/glorot10a.html) | Xavier initialization 与方差传播，理解初始化为何影响深层网络稳定性 | [Paper](https://proceedings.mlr.press/v9/glorot10a.html) |
| ⬜ | **Dropout: A Simple Way to Prevent Neural Networks from Overfitting** | [JMLR'14](https://jmlr.org/papers/v15/srivastava14a.html) | 经典正则化、train/eval 行为差异与随机 mask | [Paper](https://jmlr.org/papers/v15/srivastava14a.html) |
| ⬜ | **Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift** | [ICML'15](https://proceedings.mlr.press/v37/ioffe15.html) | 对比 batch statistics 与 LayerNorm，理解同步 BN 和训练/推理差异 | [Paper](https://proceedings.mlr.press/v37/ioffe15.html) |
| ⬜ | **Deep Residual Learning for Image Recognition** | [CVPR'16](https://doi.org/10.1109/CVPR.2016.90) | 残差连接与深层梯度传播，是 Transformer residual stream 的结构前置 | [Paper](https://arxiv.org/abs/1512.03385) |
| ⬜ | **Adam: A Method for Stochastic Optimization** | [ICLR'15](https://arxiv.org/abs/1412.6980) | 一阶/二阶矩、bias correction 与 optimizer state 显存 | [Paper](https://arxiv.org/abs/1412.6980) |
| ⬜ | **Decoupled Weight Decay Regularization** | [ICLR'19](https://arxiv.org/abs/1711.05101) | 区分 L2 regularization 与 AdamW 的 decoupled weight decay | [Paper](https://arxiv.org/abs/1711.05101) |
| ⬜ | **Layer Normalization** | [arXiv'16](https://arxiv.org/abs/1607.06450) | 单样本归一化、训练稳定性与 Transformer 中的 reduction/fusion | [Paper](https://arxiv.org/abs/1607.06450) |
| ⬜ | **Root Mean Square Layer Normalization** | [NeurIPS'19](https://proceedings.neurips.cc/paper/2019/hash/1e8a19426224ca89e83cef47f1e7f53b-Abstract.html) | 省去 re-centering 的 RMSNorm，连接现代 LLM 结构与高效 kernel | [Paper](https://arxiv.org/abs/1910.07467) |
| ⬜ | **Adafactor: Adaptive Learning Rates with Sublinear Memory Cost** | [ICML'18](https://proceedings.mlr.press/v80/shazeer18a.html) | 对二阶矩做 factored approximation，理解 optimizer memory 优化 | [Paper](https://proceedings.mlr.press/v80/shazeer18a.html) |
| ⬜ | **Large Batch Optimization for Deep Learning: Training BERT in 76 Minutes** | [ICLR'20](https://iclr.cc/virtual_2020/poster_Syx4wnEtvH.html) | LAMB 的 layer-wise scaling 与超大 batch 训练 | [Paper](https://arxiv.org/abs/1904.00962) |
| ⬜ | **Tensor Programs V: Tuning Large Neural Networks via Zero-Shot Hyperparameter Transfer** | [NeurIPS'21](https://proceedings.neurips.cc/paper_files/paper/2021/hash/8df7c2e3c3c3be098ef7b382bd2c37ba-Abstract.html) | μP 与跨模型规模超参数迁移，连接 scaling experiment 和训练配方 | [Paper](https://arxiv.org/abs/2203.03466) |
| ⬜ | **Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/06960915ba8674c7a898ec0b472b80ff-Abstract-Conference.html) | 低成本二阶曲率估计与 per-coordinate clipping | [Paper](https://arxiv.org/abs/2305.14342) |

### Deep Learning / Language Modeling, Tokenization & Modern LLMs

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **A Neural Probabilistic Language Model** | [JMLR'03](https://www.jmlr.org/papers/v3/bengio03a.html) | embedding、条件概率与 next-token language modeling 的早期完整形式 | [Paper](https://www.jmlr.org/papers/v3/bengio03a.html) |
| ⬜ | **Sequence to Sequence Learning with Neural Networks** | [NeurIPS'14](https://proceedings.neurips.cc/paper_files/paper/2014/hash/5a18e133cbf9f257297f410bb7eca942-Abstract.html) | 自回归分解、teacher forcing、EOS 与 beam search 的基础 | [Paper](https://proceedings.neurips.cc/paper_files/paper/2014/hash/5a18e133cbf9f257297f410bb7eca942-Abstract.html) |
| ⬜ | **Neural Machine Translation by Jointly Learning to Align and Translate** | [ICLR'15](https://arxiv.org/abs/1409.0473) | additive attention 与 encoder–decoder alignment，理解 Transformer 之前的问题 | [Paper](https://arxiv.org/abs/1409.0473) |
| ⬜ | **Neural Machine Translation of Rare Words with Subword Units** | [ACL'16](https://aclanthology.org/P16-1162/) | BPE、词表大小、序列长度和输出 softmax 成本之间的关系 | [Paper](https://aclanthology.org/P16-1162/) |
| ⬜ | **SentencePiece: A Simple and Language Independent Subword Tokenizer and Detokenizer for Neural Text Processing** | [EMNLP'18（System Demonstrations）](https://aclanthology.org/D18-2012/) | 从 raw text 训练 BPE/unigram tokenizer，理解现代 tokenizer pipeline | [Paper](https://aclanthology.org/D18-2012/) |
| ⬜ | **Improving Language Understanding by Generative Pre-Training** | [OpenAI Technical Report'18](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) | GPT-1 与 decoder-only 预训练–微调范式 | [Paper](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) |
| ⬜ | **BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding** | [NAACL'19](https://aclanthology.org/N19-1423/) | encoder-only、masked LM 与 pretrain–finetune 范式 | [Paper](https://aclanthology.org/N19-1423/) |
| ⬜ | **Language Models are Unsupervised Multitask Learners** | [OpenAI Technical Report'19](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) | GPT-2、zero-shot transfer 与 WebText 数据路线 | [Paper](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) |
| ⬜ | **Language Models are Few-Shot Learners** | [NeurIPS'20](https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html) | GPT-3、in-context learning 与 decoder-only scaling | [Paper](https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html) |
| ⬜ | **Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer** | [JMLR'20](https://jmlr.org/papers/v21/20-074.html) | T5、span corruption、C4 与统一 text-to-text interface | [Paper](https://jmlr.org/papers/v21/20-074.html) |
| ⬜ | **GLU Variants Improve Transformer** | [arXiv'20](https://arxiv.org/abs/2002.05202) | SwiGLU/GEGLU 与 gated FFN，解释现代 LLM 中三路投影和逐元素乘 | [Paper](https://arxiv.org/abs/2002.05202) |
| ⬜ | **RoFormer: Enhanced Transformer with Rotary Position Embedding** | [Neurocomputing'24](https://doi.org/10.1016/j.neucom.2023.127063) | RoPE 的旋转与相对位置语义，以及 Q/K 融合实现 | [Paper](https://arxiv.org/abs/2104.09864) |
| ⬜ | **Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation** | [ICLR'22](https://openreview.net/pdf?id=R8sQPpGCv0) | ALiBi 与无需显式位置 embedding 的长度外推 | [Paper](https://arxiv.org/abs/2108.12409) |
| ⬜ | **PaLM: Scaling Language Modeling with Pathways** | [JMLR'23](https://www.jmlr.org/beta/papers/v24/22-1144.html) | 大规模 dense LLM、Pathways 并行与训练行为分析 | [Paper](https://arxiv.org/abs/2204.02311) |
| ⬜ | **LLaMA: Open and Efficient Foundation Language Models** | [arXiv'23](https://arxiv.org/abs/2302.13971) | 将 RMSNorm、SwiGLU、RoPE、tokenizer、数据与训练配方串成现代 LLM | [Paper](https://arxiv.org/abs/2302.13971) |
| ⬜ | **Llama 2: Open Foundation and Fine-Tuned Chat Models** | [arXiv'23](https://arxiv.org/abs/2307.09288) | 预训练、SFT、RLHF、安全评测与 chat model 的完整技术报告 | [Paper](https://arxiv.org/abs/2307.09288) |
| ⬜ | **Mistral 7B** | [arXiv'23](https://arxiv.org/abs/2310.06825) | sliding-window attention、GQA 与 rolling buffer KV cache | [Paper](https://arxiv.org/abs/2310.06825) |
| ⬜ | **DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models** | [ACL'24](https://doi.org/10.18653/v1/2024.acl-long.70) | shared expert、细粒度 expert segmentation 与稀疏计算配比 | [Paper](https://arxiv.org/abs/2401.06066) |
| ⬜ | **Mixtral of Experts** | [arXiv'24](https://arxiv.org/abs/2401.04088) | 实用 sparse MoE LLM 的结构、路由和质量–计算权衡 | [Paper](https://arxiv.org/abs/2401.04088) |
| ⬜ | **OLMo: Accelerating the Science of Language Models** | [ACL'24](https://aclanthology.org/2024.acl-long.841/) | 开放数据、训练代码、checkpoint、日志和评测的端到端案例 | [Paper](https://aclanthology.org/2024.acl-long.841/) |
| ⬜ | <a id="pdf-tnx3548w"></a>**Qwen3 Technical Report** | arXiv · 2025 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2505.09388) / [PDF](zotero://open-pdf/library/items/D664IKR9) / [Zotero](zotero://select/library/items/TNX3548W) |

### Deep Learning / Scaling Laws, Data & Pretraining

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Scaling Laws for Neural Language Models** | [arXiv'20](https://arxiv.org/abs/2001.08361) | 建立 loss 与参数量、数据量、训练算力之间的幂律关系 | [Paper](https://arxiv.org/abs/2001.08361) |
| ⬜ | **Training Compute-Optimal Large Language Models** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/file/c1e2faff6f588870935f114ebe04a3e5-Paper-Conference.pdf) | Chinchilla scaling 与 compute-optimal 参数/token 配比 | [Paper](https://arxiv.org/abs/2203.15556) |
| ⬜ | **Scaling Data-Constrained Language Models** | [NeurIPS'23](https://proceedings.neurips.cc/paper_files/paper/2023/hash/9d89448b63ce1e2e8dc7af72c984c196-Abstract-Conference.html) | 数据受限和重复 epoch 下的 scaling behavior | [Paper](https://arxiv.org/abs/2305.16264) |
| ⬜ | **The Pile: An 800GB Dataset of Diverse Text for Language Modeling** | [arXiv'21](https://arxiv.org/abs/2101.00027) | 多域预训练语料组成、治理与 benchmark contamination | [Paper](https://arxiv.org/abs/2101.00027) |
| ⬜ | **Deduplicating Training Data Makes Language Models Better** | [ACL'22](https://aclanthology.org/2022.acl-long.577/) | 去重对记忆、评测污染、训练效率和质量的影响 | [Paper](https://arxiv.org/abs/2107.06499) |
| ⬜ | **Data Selection for Language Models via Importance Resampling** | [NeurIPS'23](https://proceedings.neurips.cc/paper_files/paper/2023/hash/6b9aa8f418bde2840d5f4ab7a02f663b-Abstract-Conference.html) | DSIR：用目标分布重要性重采样选择预训练数据 | [Paper](https://arxiv.org/abs/2302.03169) |
| ⬜ | **DoReMi: Optimizing Data Mixtures Speeds Up Language Model Pretraining** | [NeurIPS'23](https://papers.neurips.cc/paper_files/paper/2023/hash/dcba6be91359358c2355cd920da3fcbd-Abstract-Conference.html) | 将多域数据配比转化为 group DRO 优化问题 | [Paper](https://arxiv.org/abs/2305.10429) |
| ⬜ | **The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data, and Web Data Only** | [NeurIPS'23 (D&B)](https://proceedings.neurips.cc/paper_files/paper/2023/hash/fa3ed726cc5073b9c31e3e49a807789c-Abstract-Datasets_and_Benchmarks.html) | 大规模网页过滤与去重的生产级案例 | [Paper](https://arxiv.org/abs/2306.01116) |
| ⬜ | **Textbooks Are All You Need** | [arXiv'23](https://arxiv.org/abs/2306.11644) | 合成高质量数据、数据质量与小模型能力的交换关系 | [Paper](https://arxiv.org/abs/2306.11644) |
| ⬜ | **Dolma: An Open Corpus of Three Trillion Tokens for Language Model Pretraining Research** | [ACL'24](https://aclanthology.org/2024.acl-long.840/) | 开放语料的来源、过滤、去重、PII 与治理流程 | [Paper](https://arxiv.org/abs/2402.00159) |
| ⬜ | **DataComp-LM: In Search of the Next Generation of Training Sets for Language Models** | [NeurIPS'24 (D&B)](https://proceedings.neurips.cc/paper_files/paper/2024/file/19e4ea30dded58259665db375885e412-Paper-Datasets_and_Benchmarks_Track.pdf) | 受控比较过滤、去重和数据混合策略 | [Paper](https://arxiv.org/abs/2406.11794) |
| ⬜ | **The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale** | [NeurIPS'24 (D&B)](https://proceedings.neurips.cc/paper_files/paper/2024/file/370df50ccfdf8bde18f8f9c2d9151bda-Paper-Datasets_and_Benchmarks_Track.pdf) | 现代网页清洗、质量过滤与 FineWeb-Edu 配方 | [Paper](https://arxiv.org/abs/2406.17557) |

### Deep Learning / Sparse Attention Algorithms & Training / Algorithm and Training Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **Distilling the Knowledge in a Neural Network** | [NeurIPS DL Workshop'15](https://research.google/pubs/distilling-the-knowledge-in-a-neural-network/) | soft target、temperature 与 KL；理解主 attention 如何作为 Indexer teacher | [Paper](https://arxiv.org/abs/1503.02531) / [Note](Papers/05_Model_Architecture_and_Reasoning/Knowledge-Distillation/distilling-the-knowledge-in-a-neural-network.md) |

### Deep Learning / New Architectures

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Hyena Hierarchy: Towards Larger Convolutional Language Models** | [ICML'23](https://proceedings.mlr.press/v202/poli23a.html) | 交替使用隐式长卷积与输入控制门控，探索低于二次复杂度的语言序列建模 | [Paper](https://arxiv.org/abs/2302.10866) |
| ⬜ | **RWKV: Reinventing RNNs for the Transformer Era** | [EMNLP Findings'23](https://aclanthology.org/2023.findings-emnlp.936/) | 将线性 attention 与循环计算结合，实现并行训练及常量状态的逐 token 推理 | [Paper](https://arxiv.org/abs/2305.13048) |
| ⬜ | **Retentive Network: A Successor to Transformer for Large Language Models** | [arXiv'23](https://arxiv.org/abs/2307.08621) | 用同一 retention 机制统一并行、循环和分块计算，兼顾训练效率与低成本解码 | [Paper](https://arxiv.org/abs/2307.08621) |
| ⬜ | **Mamba: Linear-Time Sequence Modeling with Selective State Spaces** | [COLM'24](https://dao-lab.ai/publications/) | 以输入依赖的选择性状态空间和硬件感知扫描，提高线性时间模型的内容选择能力 | [Paper](https://arxiv.org/abs/2312.00752) |
| ⬜ | **Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality** | [ICML'24](https://proceedings.mlr.press/v235/dao24a.html) | 建立 attention 与结构化状态空间的对偶关系，导出 Mamba-2 及高效分块算法 | [Paper](https://arxiv.org/abs/2405.21060) |
| ⬜ | **xLSTM: Extended Long Short-Term Memory** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/c2ce2f2701c10a2b2f2ea0bfa43cfaa3-Abstract-Conference.html) | 通过指数门控与标量或矩阵记忆扩展 LSTM，探索可扩展的循环语言模型 | [Paper](https://arxiv.org/abs/2405.04517) |
| ✅ | <a id="pdf-ac84rd85"></a>**DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models** | [arXiv'25](https://arxiv.org/pdf/2512.02556) | 以 DSA 降低长上下文 attention 成本，并结合可扩展强化学习提升推理与工具使用能力 | [Paper](https://arxiv.org/pdf/2512.02556) |
| ✅ 📝 | **DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence** | [Tech report'26](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | 组合压缩稀疏与高度压缩 attention，降低百万 token 上下文的计算和 KV 缓存开销 | [Paper](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf) / [Note](Papers/05_Model_Architecture_and_Reasoning/DeepSeek-V4/deepseek-v4.md) |
| ⬜ | <a id="pdf-eumymezx"></a>**DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2609.19969) / [PDF](zotero://open-pdf/library/items/S7D47QU2) / [Zotero](zotero://select/library/items/EUMYMEZX) |
| ⬜ | <a id="pdf-ndm56t2p"></a>**mHC: Manifold-Constrained Hyper-Connections** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2512.24880) / [PDF](zotero://open-pdf/library/items/G5UP6HY5) / [Zotero](zotero://select/library/items/NDM56T2P) |
| ⬜ | <a id="pdf-d672fsr3"></a>**SANA-WM: Efficient Minute-Scale World Modeling with Hybrid Linear Diffusion Transformer** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2605.15178) / [PDF](zotero://open-pdf/library/items/WPBIFRLY) / [Zotero](zotero://select/library/items/D672FSR3) |
| ⬜ | <a id="pdf-stmlx3iu"></a>**Scaling Latent Reasoning via Looped Language Models** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2510.25741) / [PDF](zotero://open-pdf/library/items/JUFCNBBH) / [Zotero](zotero://select/library/items/STMLX3IU) |
| ⬜ | <a id="pdf-cen64b84"></a>**Virtual Width Networks** | arXiv · 2025 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2511.11238) / [PDF](zotero://open-pdf/library/items/V2PVED9S) / [Zotero](zotero://select/library/items/CEN64B84) |

### LLM Evaluation & Safety / Capability & Quality Evaluation

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Measuring Massive Multitask Language Understanding** | [ICLR'21](https://arxiv.org/abs/2009.03300) | MMLU：用多学科考试题衡量知识与问题求解能力 | [Paper](https://arxiv.org/abs/2009.03300) |
| ⬜ | **Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models** | [TMLR'23](https://openreview.net/pdf?id=uyTL5Bvosj) | BIG-bench：异构任务与能力随规模变化 | [Paper](https://arxiv.org/abs/2206.04615) |
| ⬜ | **Holistic Evaluation of Language Models** | [TMLR'23](https://friedeggs.github.io/papers/helm/) | HELM：统一准确率、校准、鲁棒性、公平性、毒性和效率 | [Paper](https://arxiv.org/abs/2211.09110) |
| ⬜ | **TruthfulQA: Measuring How Models Mimic Human Falsehoods** | [ACL'22](https://aclanthology.org/2022.acl-long.229/) | 将事实真实性与普通知识准确率区分开 | [Paper](https://arxiv.org/abs/2109.07958) |
| ⬜ | **Training Verifiers to Solve Math Word Problems** | [arXiv'21](https://arxiv.org/abs/2110.14168) | GSM8K 与 verifier 路线，连接推理生成和可验证结果 | [Paper](https://arxiv.org/abs/2110.14168) |
| ⬜ | **Measuring Mathematical Problem Solving With the MATH Dataset** | [NeurIPS'21 (D&B)](https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html) | 竞赛数学、分步推理与严格答案评测 | [Paper](https://arxiv.org/abs/2103.03874) |
| ⬜ | **Evaluating Large Language Models Trained on Code** | [arXiv'21](https://arxiv.org/abs/2107.03374) | HumanEval 与 pass@k，理解代码生成评测 | [Paper](https://arxiv.org/abs/2107.03374) |
| ⬜ | **GPQA: A Graduate-Level Google-Proof Q&A Benchmark** | [COLM'24](https://jacksonpetty.org/gpqa/) | 专家级科学问答，即使借助网络搜索仍具挑战；用于评估高难度推理能力 | [Paper](https://arxiv.org/abs/2311.12022) |
| ⬜ | **Instruction-Following Evaluation for Large Language Models** | [arXiv'23](https://arxiv.org/abs/2311.07911) | IFEval：用可验证约束衡量 instruction following | [Paper](https://arxiv.org/abs/2311.07911) |
| ⬜ | **Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena** | [NeurIPS'23 (D&B)](https://proceedings.neurips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) | LLM judge、位置偏差、冗长偏差和 pairwise evaluation | [Paper](https://arxiv.org/abs/2306.05685) |
| ⬜ | **Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference** | [ICML'24](https://proceedings.mlr.press/v235/chiang24b.html) | 真实用户盲测、成对偏好与 Elo/Bradley–Terry 排名 | [Paper](https://arxiv.org/abs/2403.04132) |
| ⬜ | **RewardBench: Evaluating Reward Models for Language Modeling** | [NAACL Findings'25](https://aclanthology.org/2025.findings-naacl.96/) | 对话、推理、安全等场景的 reward model 基准 | [Paper](https://arxiv.org/abs/2403.13787) |
| ⬜ | **SWE-bench: Can Language Models Resolve Real-World GitHub Issues?** | [ICLR'24](https://www.swebench.com/citations.html) | 真实仓库、issue、patch 与测试驱动的软件工程评测 | [Paper](https://arxiv.org/abs/2310.06770) |
| ⬜ | **LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code** | [ICLR'25](https://proceedings.iclr.cc/paper_files/paper/2025/hash/94074dd5a072d28ff75a76dabed43767-Abstract-Conference.html) | 持续更新题目与时间切分，降低代码评测污染 | [Paper](https://arxiv.org/abs/2403.07974) |
| ⬜ | **Lessons from the Trenches on Reproducible Evaluation of Language Models** | [arXiv'24](https://arxiv.org/abs/2405.14782) | prompt、tokenizer、版本和实现细节对评测复现的影响 | [Paper](https://arxiv.org/abs/2405.14782) |

### LLM Evaluation & Safety / Safety, Robustness & Red Teaming

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models** | [EMNLP Findings'20](https://aclanthology.org/2020.findings-emnlp.301/) | 开放式生成中的 toxicity 测量与 prompt 条件效应 | [Paper](https://arxiv.org/abs/2009.11462) |
| ⬜ | **Red Teaming Language Models with Language Models** | [EMNLP'22](https://aclanthology.org/2022.emnlp-main.225/) | 用模型自动生成和筛选攻击，建立可扩展 red teaming | [Paper](https://arxiv.org/abs/2202.03286) |
| ⬜ | **Universal and Transferable Adversarial Attacks on Aligned Language Models** | [arXiv'23](https://arxiv.org/abs/2307.15043) | GCG 对抗后缀与可迁移 jailbreak 的基础工作 | [Paper](https://arxiv.org/abs/2307.15043) |
| ⬜ | **XSTest: A Test Suite for Identifying Exaggerated Safety Behaviours in Large Language Models** | [NAACL'24](https://aclanthology.org/2024.naacl-long.301/) | 同时衡量合理拒绝与过度拒绝 | [Paper](https://arxiv.org/abs/2308.01263) |
| ⬜ | **SafetyBench: Evaluating the Safety of Large Language Models** | [ACL'24](https://aclanthology.org/2024.acl-long.830/) | 多类别、多语言的安全知识与行为评测 | [Paper](https://arxiv.org/abs/2309.07045) |
| ⬜ | **Towards Understanding Sycophancy in Language Models** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/0105f7972202c1d4fb817da9f21a9663-Abstract-Conference.html) | 研究模型迎合用户观点的表现及训练信号来源 | [Paper](https://arxiv.org/abs/2310.13548) |
| ⬜ | **Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training** | [arXiv'24](https://arxiv.org/abs/2401.05566) | 研究条件触发的欺骗策略能否熬过安全训练 | [Paper](https://arxiv.org/abs/2401.05566) |
| ⬜ | **HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal** | [ICML'24](https://proceedings.mlr.press/v235/mazeika24a.html) | jailbreak、攻击方法与稳健拒绝的标准化评测 | [Paper](https://arxiv.org/abs/2402.04249) |
| ⬜ | **A StrongREJECT for Empty Jailbreaks** | [NeurIPS'24 (D&B)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/e2e06adf560b0706d3b1ddfca9f29756-Abstract-Datasets_and_Benchmarks_Track.html) | jailbreak 评测必须衡量实际危害、完成度和拒绝质量 | [Paper](https://arxiv.org/abs/2402.10260) |
| ⬜ | **The WMDP Benchmark: Measuring and Reducing Malicious Use With Unlearning** | [ICML'24](https://proceedings.mlr.press/v235/li24bc.html) | 高风险双用途知识评测及其与 unlearning 的关系 | [Paper](https://arxiv.org/abs/2403.03218) |

### Agent Systems

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **SkVM: Revisiting Language VM for Skills across Heterogenous LLMs and Harnesses** | [arXiv'26](https://arxiv.org/abs/2604.03088) | 按模型与 harness 能力编译 skills，并用运行时代码固化和自适应重编译提高可移植性与执行效率 | [Paper](https://arxiv.org/abs/2604.03088) / [Note](Papers/05_Model_Architecture_and_Reasoning/Agents/SkVM/skvm.md) |

</details>

<details>
<summary>计算基础（18 篇；已读 14，待读 4）</summary>

### Compiler

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | <a id="pdf-9q5ea69n"></a>**Honeycomb: Secure and Efficient GPU Executions via Static Validation** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/mai) | 在加载时静态验证 GPU 程序，结合 CPU TEE 将 OS 与驱动移出可信计算基 | [Paper](https://www.usenix.org/conference/osdi23/presentation/mai) / [Note](Papers/06_Computing_Foundations/Virtualization/Honeycomb/honeycomb.md) |
| ⬜ | <a id="pdf-i9gwwhe7"></a>**A Survey on Register Allocation** | 来源待补全 | 标签：计算机系统与并行基础 / 编译原理 | [PDF](zotero://open-pdf/library/items/9WWM8C8A) / [Zotero](zotero://select/library/items/I9GWWHE7) |

### Operating Systems

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **RedLeaf: Isolation and Communication in a Safe Operating System** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/narayanan-vikram) | 利用 Rust 类型与内存安全实现轻量隔离域、跨域零拷贝和驱动故障恢复 | [Paper](https://www.usenix.org/system/files/osdi20-narayanan_vikram.pdf) / [Note](Papers/06_Computing_Foundations/Operating-Systems/RedLeaf.md) |
| ✅ | **Theseus: an Experiment in Operating System Structure and State Management** | [OSDI'20](https://www.usenix.org/conference/osdi20/presentation/boos) | 减少组件间状态耦合并用 Rust 编译器约束系统语义，支持 OS 在线演化与故障恢复 | [Paper](https://www.usenix.org/system/files/osdi20-boos.pdf) |
| ✅ | **Unikraft: Fast, Specialized Unikernels the Easy Way** | [EuroSys'21](https://unikraft.org/blog/2021-04-26-unikraft-at-eurosys) | 以可组合微型库按应用裁剪 OS，降低构建高性能 unikernel 的移植和优化成本 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3447786.3456248) / [Note](Papers/06_Computing_Foundations/Operating-Systems/Unikraft/unikraft.md) |
| ✅ | **The Demikernel Datapath OS Architecture for Microsecond-scale Datacenter Systems** | [SOSP'21](https://doi.org/10.1145/3477132.3483569) | 为 RDMA、DPDK 等异构 kernel-bypass 设备提供统一异步 API，降低微秒级数据中心 I/O 开销 | [Paper](https://irenezhang.net/papers/demikernel-sosp21.pdf) / [Note](Papers/06_Computing_Foundations/Operating-Systems/Demikernel.md) |

### Hypervisor & Virtualization

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **HyperBench: A Benchmark Suite for Virtualization Capabilities** | [SIGMETRICS / POMACS'19](https://www.sigmetrics.org/opentoc/pomacs19_2toc.html) | 用独立于特定 hypervisor 的微基准测量 VM 切换、地址转换等关键虚拟化能力 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3341617.3326138) / [Note](Papers/06_Computing_Foundations/Virtualization/Benchmarks/Hyperbench-A-Benchmark-Suite-for-Virtualization-Capabilities.md) |
| ✅ | **DuVisor: a User-level Hypervisor Through Delegated Virtualization** | [arXiv'22](https://arxiv.org/pdf/2201.09652.pdf) | 通过硬件授权把 VM 退出等运行时操作下放用户态，减少内核攻击面与特权切换成本 | [Paper](https://arxiv.org/pdf/2201.09652.pdf) |
| ✅ | **AvA: Accelerated Virtualization of Accelerators** | [ASPLOS'20](https://oscarlab.github.io/papers/ava-asplos20.pdf) | 以 API 描述生成加速器虚拟化与远程调用支持，兼顾多种加速器的兼容性和性能 | [Paper](https://dl.acm.org/doi/pdf/10.1145/3373376.3378466) |
| ✅ | <a id="pdf-tneellgq"></a>**Security and Performance in the Delegated User-level Virtualization** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/chen) | 分离 hypervisor 控制面与用户态 VM 处理面，用硬件授权同时降低攻击面和运行时开销 | [Paper](https://www.usenix.org/system/files/osdi23-chen.pdf) / [Note](Papers/06_Computing_Foundations/Virtualization/DuVisor/duvisor.md) |
| ✅ | **System Virtualization for Neural Processing Units** | [HotOS'23](https://sigops.org/s/conferences/hotos/2023/papers/xue.pdf) | 提出 vNPU 抽象及分配、映射、调度机制，探索 NPU 多租户利用率与隔离的协同设计 | [Paper](https://sigops.org/s/conferences/hotos/2023/papers/xue.pdf) |
| ✅ | <a id="pdf-k9vm2qmu"></a>**Nephele: Extending Virtualization Environments for Cloning Unikernel-based VMs** | [EuroSys'23](https://cordis.europa.eu/project/id/758815/results) | 扩展虚拟化环境支持低开销克隆 unikernel VM，复用初始化状态并降低实例创建成本 | [Paper](http://nets.cs.pub.ro/~costin/files/nephele.pdf) / [Note](Papers/06_Computing_Foundations/Virtualization/Nephele/nephele.md) |
| ✅ | **Honeycomb: Secure and Efficient GPU Executions via Static Validation** | [OSDI'23](https://www.usenix.org/conference/osdi23/presentation/mai) | 在加载时静态验证 GPU 程序，结合 CPU TEE 将 OS 与驱动移出可信计算基 | [Paper](https://www.usenix.org/conference/osdi23/presentation/mai) / [Note](Papers/06_Computing_Foundations/Virtualization/Honeycomb/honeycomb.md) |

### RISC-V

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **A First Look at RISC-V Virtualization from an Embedded Systems Perspective** | [IEEE TC'22 (online'21)](https://ieeexplore.ieee.org/document/9606600/) | 在 Rocket 上实现并评估 RISC-V H 扩展，分析嵌入式虚拟化中的中断、计时器与隔离开销 | [Paper](https://arxiv.org/pdf/2103.14951.pdf) |
| ✅ | **CVA6 RISC-V Virtualization: Architecture, Microarchitecture, and Design Space Exploration** | [IEEE TVLSI'23](https://cris.unibo.it/handle/11585/952940) | 为 CVA6 实现硬件虚拟化并探索 GTLB、L2 TLB 等设计的性能、功耗和面积权衡 | [Paper](https://arxiv.org/pdf/2302.02969.pdf) |

### 计算机系统与并行基础 / 并行计算与体系结构

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ 📝 | <a id="pdf-vk2mx5h8"></a>**A loop transformation theory and an algorithm to maximize parallelism** | IEEE Transactions on Parallel and Distributed Systems · 1991 | 开篇摘记，未完成；标签：计算机系统与并行基础 / 并行计算与体系结构 | [Paper](http://ieeexplore.ieee.org/document/97902/) / [PDF](zotero://open-pdf/library/items/X5R3KCBT) / [PDF2](zotero://open-pdf/library/items/R3PQDJEZ) / [Zotero](zotero://select/library/items/VK2MX5H8) / [Note](Papers/06_Computing_Foundations/Compiler/Loop-Transformation/github-reading.md) |
| ⬜ | <a id="pdf-g6dnrdam"></a>**Exploiting Memory Access Patterns to Improve Memory Performance in Data-Parallel Architectures** | IEEE Transactions on Parallel and Distributed Systems · 2011 | 标签：计算机系统与并行基础 / 并行计算与体系结构 | [Paper](http://ieeexplore.ieee.org/document/5473222/) / [PDF](zotero://open-pdf/library/items/G7G54FHS) / [Zotero](zotero://select/library/items/G6DNRDAM) |

### 计算机系统与并行基础 / 网络与 SmartNIC

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | <a id="pdf-athndb3u"></a>**Characterizing Off-path SmartNIC for Accelerating Distributed Systems** | 来源待补全 | 标签：计算机系统与并行基础 / 网络与 SmartNIC | [PDF](zotero://open-pdf/library/items/RTBRCBWY) / [Zotero](zotero://select/library/items/ATHNDB3U) |

</details>

<details>
<summary>量化（10 篇；已读 0，待读 10）</summary>

### Quantization & Compression

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/file/c3ba4962c05c49636d4c6206a97e9c8a-Paper-Conference.pdf) | 混合精度分解 activation outlier，是理解 LLM INT8 的起点 | [Paper](https://arxiv.org/abs/2208.07339) |
| ⬜ | **GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers** | [ICLR'23](https://www.research-collection.ethz.ch/items/00736213-37b2-4e99-b015-141349b71413) | 基于近似二阶信息的 one-shot weight-only PTQ | [Paper](https://arxiv.org/abs/2210.17323) |
| ⬜ | **SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models** | [ICML'23](https://proceedings.mlr.press/v202/xiao23c.html) | 用等价缩放把 activation 量化难度迁移到 weight，形成 W8A8 路线 | [Paper](https://arxiv.org/abs/2211.10438) |
| ⬜ | **AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration** | [MLSys'24](https://proceedings.mlsys.org/paper_files/paper/2024/hash/42a452cbafa9dd64e9ba4aa95cc1ef21-Abstract-Conference.html) | 用 activation 识别显著通道并保护关键权重，形成主流 W4A16 路线 | [Paper](https://arxiv.org/abs/2306.00978) |
| ⬜ | **SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/1787533e171dcc8549cc2eb5a4840eec-Abstract-Conference.html) | 将少量 outlier 与低比特权重分离，理解稀疏异常值处理 | [Paper](https://arxiv.org/abs/2306.03078) |
| ⬜ | **OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/c6483c8a68083af3383f91ee0dc6db95-Abstract-Conference.html) | 通过可学习的 clipping 与等价变换改善低比特 PTQ | [Paper](https://arxiv.org/abs/2308.13137) |
| ⬜ | **AQLM: Extreme Compression of Large Language Models via Additive Quantization** | [ICML'24](https://proceedings.mlr.press/v235/egiazarian24a.html) | additive codebook 与极低 bit/weight，连接压缩算法和解码 kernel | [Paper](https://arxiv.org/abs/2401.06118) |
| ⬜ | **KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache** | [ICML'24](https://github.com/jy-yuan/KIVI) | 区分 K/V 的通道与 token 统计特性，理解 KV cache 低比特化 | [Paper](https://arxiv.org/abs/2402.02750) |
| ⬜ | **QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/b5b939436789f76f08b9d0da5e81af7c-Abstract-Conference.html) | 用 Hadamard rotation 消除 outlier，适合从算法追到融合 kernel | [Paper](https://arxiv.org/abs/2404.00456) |
| ⬜ | **The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits** | [arXiv'24](https://arxiv.org/abs/2402.17764) | BitNet b1.58 与三值权重，理解量化感知训练的架构路线 | [Paper](https://arxiv.org/abs/2402.17764) |

</details>

<!-- paper-reading-list:end -->

## 维护约定

- 同一篇正文只保存一份；论文与代码实践分别成文时，用相对链接关联。
- 图片、PDF 和其他附件跟随正文，保留相对链接。
- 新增笔记时更新所属主题的 `index.md` 和相应归档入口；网站侧栏自动收录文件。
- 论文清单与阅读状态在 `Papers/index.md` 及其各主题索引中维护；README 的总清单运行 `pnpm docs:sync-reading-list` 同步，网站构建也会自动同步。不因下载 PDF 或存在标注就判为已读。
- 暂时无法确定主题的内容进入对应材料类型的 `00_Inbox/`，确认后归档。
- 旧网站地址保存在 `.vitepress/redirects.ts`；目录迁移规则在 `scripts/archive-layout.json`。不复制或调整 `PapersPDF` 中的 PDF。

## 本地阅读与维护

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

发布前运行 `pnpm docs:build`、`pnpm docs:check-links`、`pnpm docs:check-anchors`、`pnpm docs:check-math`、`pnpm docs:check-diagrams`、`pnpm docs:check-translations` 和 `pnpm docs:check-translation-rendering`。

Zotero 与 Codex 的侧栏阅读、标注导入及增量笔记工作流见 [Zotero 阅读配置](scripts/ZOTERO.md)。

原 Notes 内容的许可证见 [Notes-LICENSE](licenses/Notes-LICENSE.txt)。
