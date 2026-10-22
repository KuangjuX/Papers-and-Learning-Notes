# 模型架构与推理能力 · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/05_Model_Architecture_and_Reasoning/index.md)

神经网络基础、模型架构、优化与对齐、Agent、能力与安全评测。

共 108 个清单条目；已读 4，待读 104。保留原有跨分类重复条目与阅读状态。

- [已下载 PDF 与标签目录](../downloaded-papers.md#topic-05)

## 本地笔记

- [Agent 系统](Agents/index.md)
- [SkVM: Revisiting Language VM for Skills across Heterogenous LLMs and Harnesses](Agents/SkVM/skvm.md)
- [DeepSeek-V4: 迈向高效百万级上下文智能](DeepSeek-V4/deepseek-v4.md)
- [Distilling the Knowledge in a Neural Network](Knowledge-Distillation/distilling-the-knowledge-in-a-neural-network.md)

## LLM Training / Fine-Tuning & Alignment

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
| ⬜ | <a id="pdf-llgxksrv"></a>**DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning** | [Nature'25](https://www.nature.com/articles/s41586-025-09422-z) | 大规模 reasoning RL、冷启动数据与蒸馏路线 | [Paper](https://arxiv.org/abs/2501.12948) / [归档标签](../downloaded-papers.md#pdf-llgxksrv) |
| ⬜ | <a id="pdf-lgssufuy"></a>**Forking: Sudden Overfitting Under Replay** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2610.00394) / [PDF](zotero://open-pdf/library/items/UUKKY3ZD) / [Zotero](zotero://select/library/items/LGSSUFUY) / [归档标签](../downloaded-papers.md#pdf-lgssufuy) |

## Deep Learning / Foundations & Optimization

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

## Deep Learning / Language Modeling, Tokenization & Modern LLMs

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
| ⬜ | <a id="pdf-tnx3548w"></a>**Qwen3 Technical Report** | arXiv · 2025 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2505.09388) / [PDF](zotero://open-pdf/library/items/D664IKR9) / [Zotero](zotero://select/library/items/TNX3548W) / [归档标签](../downloaded-papers.md#pdf-tnx3548w) |

## Deep Learning / Scaling Laws, Data & Pretraining

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

## Deep Learning / Sparse Attention Algorithms & Training / Algorithm and Training Foundations

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **Distilling the Knowledge in a Neural Network** | [NeurIPS DL Workshop'15](https://research.google/pubs/distilling-the-knowledge-in-a-neural-network/) | soft target、temperature 与 KL；理解主 attention 如何作为 Indexer teacher | [Paper](https://arxiv.org/abs/1503.02531) / [Note](Knowledge-Distillation/distilling-the-knowledge-in-a-neural-network.md) |

## Deep Learning / New Architectures

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **Hyena Hierarchy: Towards Larger Convolutional Language Models** | [ICML'23](https://proceedings.mlr.press/v202/poli23a.html) | 交替使用隐式长卷积与输入控制门控，探索低于二次复杂度的语言序列建模 | [Paper](https://arxiv.org/abs/2302.10866) |
| ⬜ | **RWKV: Reinventing RNNs for the Transformer Era** | [EMNLP Findings'23](https://aclanthology.org/2023.findings-emnlp.936/) | 将线性 attention 与循环计算结合，实现并行训练及常量状态的逐 token 推理 | [Paper](https://arxiv.org/abs/2305.13048) |
| ⬜ | **Retentive Network: A Successor to Transformer for Large Language Models** | [arXiv'23](https://arxiv.org/abs/2307.08621) | 用同一 retention 机制统一并行、循环和分块计算，兼顾训练效率与低成本解码 | [Paper](https://arxiv.org/abs/2307.08621) |
| ⬜ | **Mamba: Linear-Time Sequence Modeling with Selective State Spaces** | [COLM'24](https://dao-lab.ai/publications/) | 以输入依赖的选择性状态空间和硬件感知扫描，提高线性时间模型的内容选择能力 | [Paper](https://arxiv.org/abs/2312.00752) |
| ⬜ | **Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality** | [ICML'24](https://proceedings.mlr.press/v235/dao24a.html) | 建立 attention 与结构化状态空间的对偶关系，导出 Mamba-2 及高效分块算法 | [Paper](https://arxiv.org/abs/2405.21060) |
| ⬜ | **xLSTM: Extended Long Short-Term Memory** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/c2ce2f2701c10a2b2f2ea0bfa43cfaa3-Abstract-Conference.html) | 通过指数门控与标量或矩阵记忆扩展 LSTM，探索可扩展的循环语言模型 | [Paper](https://arxiv.org/abs/2405.04517) |
| ✅ | <a id="pdf-ac84rd85"></a>**DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models** | [arXiv'25](https://arxiv.org/pdf/2512.02556) | 以 DSA 降低长上下文 attention 成本，并结合可扩展强化学习提升推理与工具使用能力 | [Paper](https://arxiv.org/pdf/2512.02556) / [归档标签](../downloaded-papers.md#pdf-ac84rd85) |
| ✅ 📝 | **DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence** | [Tech report'26](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | 组合压缩稀疏与高度压缩 attention，降低百万 token 上下文的计算和 KV 缓存开销 | [Paper](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf) / [Note](DeepSeek-V4/deepseek-v4.md) |
| ⬜ | <a id="pdf-eumymezx"></a>**DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2609.19969) / [PDF](zotero://open-pdf/library/items/S7D47QU2) / [Zotero](zotero://select/library/items/EUMYMEZX) / [归档标签](../downloaded-papers.md#pdf-eumymezx) |
| ⬜ | <a id="pdf-ndm56t2p"></a>**mHC: Manifold-Constrained Hyper-Connections** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2512.24880) / [PDF](zotero://open-pdf/library/items/G5UP6HY5) / [Zotero](zotero://select/library/items/NDM56T2P) / [归档标签](../downloaded-papers.md#pdf-ndm56t2p) |
| ⬜ | <a id="pdf-d672fsr3"></a>**SANA-WM: Efficient Minute-Scale World Modeling with Hybrid Linear Diffusion Transformer** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2605.15178) / [PDF](zotero://open-pdf/library/items/WPBIFRLY) / [Zotero](zotero://select/library/items/D672FSR3) / [归档标签](../downloaded-papers.md#pdf-d672fsr3) |
| ⬜ | <a id="pdf-stmlx3iu"></a>**Scaling Latent Reasoning via Looped Language Models** | arXiv · 2026 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2510.25741) / [PDF](zotero://open-pdf/library/items/JUFCNBBH) / [Zotero](zotero://select/library/items/STMLX3IU) / [归档标签](../downloaded-papers.md#pdf-stmlx3iu) |
| ⬜ | <a id="pdf-cen64b84"></a>**Virtual Width Networks** | arXiv · 2025 | 标签：模型架构与推理能力 | [Paper](http://arxiv.org/abs/2511.11238) / [PDF](zotero://open-pdf/library/items/V2PVED9S) / [Zotero](zotero://select/library/items/CEN64B84) / [归档标签](../downloaded-papers.md#pdf-cen64b84) |

## LLM Evaluation & Safety / Capability & Quality Evaluation

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

## LLM Evaluation & Safety / Safety, Robustness & Red Teaming

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

## Agent Systems

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ 📝 | **SkVM: Revisiting Language VM for Skills across Heterogenous LLMs and Harnesses** | [arXiv'26](https://arxiv.org/abs/2604.03088) | 按模型与 harness 能力编译 skills，并用运行时代码固化和自适应重编译提高可移植性与执行效率 | [Paper](https://arxiv.org/abs/2604.03088) / [Note](Agents/SkVM/skvm.md) |
