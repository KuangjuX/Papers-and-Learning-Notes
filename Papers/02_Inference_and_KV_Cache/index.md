# 推理与 KV Cache · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/02_Inference_and_KV_Cache/index.md)

推理服务、缓存管理、投机解码与 SGLang 源码实践。

共 47 个清单条目；已读 6，待读 41。

## 本地笔记

- [Dual Chunk Attention](Dual-Chunk-Attention/DCA.md)
- [HiSparse：稀疏注意力的分层 KV Cache 管理](HiSparse/hisparse.md)
- [A Survey of LLM Inference Systems](Surveys/llm_inference_survey.md)
- [Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences：未完成摘记](GPU-Preemption/github-reading.md)

## LLM Inference / Decoding Algorithms

核心阅读顺序（8 篇）：[经典 Speculative Decoding](https://arxiv.org/abs/2211.17192) → [Medusa](https://arxiv.org/abs/2401.10774) → [2024 MTP](https://arxiv.org/abs/2404.19737) → [DeepSeek-V3（MTP 部分）](https://arxiv.org/abs/2412.19437) → [EAGLE](https://arxiv.org/abs/2401.15077) → [EAGLE-2](https://arxiv.org/abs/2406.16858) → [EAGLE-3](https://arxiv.org/abs/2503.01840) → [DFlash](https://arxiv.org/abs/2602.06036)。

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

## LLM Inference / General

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **A Survey of LLM Inference Systems** | [arXiv'25](https://arxiv.org/abs/2506.21901) | 贯通 kernel、批处理、调度与 KV 管理，理解单副本、分离式和分布式推理系统的设计取舍 | [Paper](https://arxiv.org/pdf/2506.21901) / [Note](Surveys/llm_inference_survey.pdf) |
| ⬜ | **WaferLLM: Large Language Model Inference at Wafer Scale** | [OSDI'25](https://www.usenix.org/system/files/osdi25-he.pdf) | 研究晶圆级互连和存储条件下的 LLM 映射，理解不同硬件形态如何改变推理并行策略 | [Paper](https://www.usenix.org/system/files/osdi25-he.pdf) |
| ⬜ | <a id="pdf-ttfudeki"></a>**HiCache: A Plug-in Scaled-Hermite Upgrade for Taylor-Style Cache-then-Forecast Diffusion Acceleration** | arXiv · 2026 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2508.16984) / [PDF](zotero://open-pdf/library/items/7AF67XK4) / [Zotero](zotero://select/library/items/TTFUDEKI) |

## LLM Inference / Long Context Inference

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ✅ | **Training-Free Long-Context Scaling of Large Language Models** | [ICML'24](https://arxiv.org/pdf/2402.17463) | 用 Dual Chunk Attention 调整位置关系，无继续训练地扩展模型可处理的上下文长度 | [Paper](https://arxiv.org/pdf/2402.17463) / [Note](Dual-Chunk-Attention/DCA.md) |
| ✅ | <a id="pdf-cuxi564s"></a>**Efficient Streaming Language Models with Attention Sinks** | [ICLR'24](https://arxiv.org/pdf/2309.17453) | 保留 attention sink 与滑动窗口，实现有界 KV 缓存的流式生成并明确历史信息保留边界 | [Paper](https://arxiv.org/pdf/2309.17453) / [讨论笔记](../../Foundations/01_Attention/Attention-Sinks/attention-sink-and-dsink.md) |
| ✅ 📝 | <a id="pdf-bbqs6dzt"></a>**HiSparse: Scaling Sparse-Attention Decoding with Hierarchical KV Cache Management** | [arXiv'26](https://arxiv.org/abs/2608.07009v1) | 将完整 KV 放在主存、热点放在有界 GPU 缓存，并用跨层预取隐藏稀疏解码缺页开销 | [Paper](https://arxiv.org/abs/2608.07009v1) / [Note](HiSparse/hisparse.md) |
| ⬜ | **Unifying Sparse Attention with Hierarchical Memory for Scalable Long-Context LLM Serving (SPIN)** | [arXiv'26](https://arxiv.org/abs/2604.26837) | 统一不同稀疏粒度与分层 KV 存储，通过局部性感知缓存和元数据设计降低 GPU–CPU 传输开销 | [Paper](https://arxiv.org/abs/2604.26837) |
| ⬜ | <a id="pdf-p7ztutbr"></a>**ShadowKV: KV Cache in Shadows for High-Throughput Long-Context LLM Inference** | arXiv · 2025 | 标签：推理服务与 KV Cache | [Paper](http://arxiv.org/abs/2410.21465) / [PDF](zotero://open-pdf/library/items/I9NKKG32) / [Zotero](zotero://select/library/items/P7ZTUTBR) |

## LLM Inference / LLM Serving

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
| ⬜ 📝 | **Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences** | [OSDI'22](https://www.usenix.org/conference/osdi22/presentation/han) | REEF；仅有摘要摘记，抢占机制、并发调度和实验尚未整理 | [Paper](https://www.usenix.org/system/files/osdi22-han.pdf) / [Note](GPU-Preemption/github-reading.md) |

<a id="llm-inference-quantization-compression"></a>

量化与压缩论文见[量化专题](../08_Quantization/index.md)。
