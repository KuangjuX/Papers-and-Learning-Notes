---
tags:
  - papers/LLM
  - topics/sparse-attention
  - topics/indexer
  - topics/kv-cache
aliases:
  - "SparDA"
  - "Sparse Decoupled Attention for Efficient Long-Context LLM Inference"
---

# SparDA：用 Forecast 降低选择开销并提前预取 KV

SparDA 在已有 block-sparse attention 上增加轻量的 Forecast 投影，将“选择哪些 KV blocks”与“用 Query 计算 attention”解耦：每个 GQA group 使用一个 Forecast head，并提前一层预测访问需求。前者减少 selector 计算，后者让 decode 的 CPU→GPU KV 传输与当前层计算重叠。[论文 v1，§4](https://arxiv.org/html/2606.04511v1#S4)

KuangjuX 的[原始判断](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/91)抓住了“减少打分 head 数，从而降低 prefill/decode 的 indexer 开销”。其中“一个 Forecast head”应理解为**每个 GQA group 各一个**；Forecast 投影在推理时也执行，而 decode 的收益还取决于提前选择所支持的异步预取。

## 稀疏 attention 为什么还需要更便宜的 selector？

论文以 InfLLM-V2 为基础。它让每个 query 访问固定的初始 blocks、局部窗口和动态 top-k blocks。为了选出动态部分，先对 Key 做均值池化，得到 compressed keys；一个 GQA group 内共享同一 KV head 的多个 query heads 分别打分、分别 softmax，再把组内分数相加，最后 max-pooling 成 block 分数并选 top-k。因此，正式 attention 虽然只读少量 KV，选择阶段仍要扫描随上下文增长的 compressed keys。[§3.1、§4.2 式 (6)](https://arxiv.org/html/2606.04511v1#S3.SS1)

此外，少访问 KV 并不等于无需保存历史 KV。将 cache offload 到 CPU 可以减轻 GPU 容量压力，但如果必须等当前层 Query 产生、完成选择后才搬运，PCIe 传输就落在 attention 的等待路径上。[§1](https://arxiv.org/html/2606.04511v1#S1)

## Forecast 改变谁来选，以及何时选

第 $l$ 层从输入 hidden states $X_l$ 产生 Q、K、V 和新增的 Forecast $F_l$。Forecast 与**下一层的 compressed keys** 打分，生成下一层的访问集合；下一层主 attention 仍用自己的 Query 和所选位置的完整 K、V。省略 token 与 GQA group 下标，数据流为：

$$
\begin{aligned}
(Q_l,K_l,V_l,F_l) &= \varphi_l(X_l),\\
\mathcal B_{l+1} &= \mathcal B_{\mathrm{init}}\cup\mathcal B_{\mathrm{local}}
\cup f_{\mathrm{top}}\!\left(F_l\widetilde K_{l+1}^{\top},k\right),\\
O_{l+1} &= \operatorname{Attn}\!\left(Q_{l+1},K_{l+1}[\mathcal B_{l+1}],V_{l+1}[\mathcal B_{l+1}]\right).
\end{aligned}
$$

$\widetilde K$ 表示 compressed keys；$f_{\mathrm{top}}$ 将压缩位置的分数 max-pooling 到 block 粒度，再选 top-k。这里预测的是**同一个 token 的下一层访问需求**。[§4.1，式 (3)–(5)、图 2](https://arxiv.org/html/2606.04511v1#S4.SS1)

解耦后，selector 不必沿用主 attention 的全部 query heads。每个 GQA group 的一个 Forecast head 直接提供选择分数，省去组内多头打分和聚合；推理时只需排名，也可跳过 selector softmax。**主 attention 的 softmax 仍然保留**，训练时预测分支也仍通过 softmax 形成监督所需的分布。[§4.1–4.2](https://arxiv.org/html/2606.04511v1#S4.SS2)

Decode 能提前选择，是因为下一层的历史 compressed-key cache 常驻 GPU，并随生成增量更新；动态 top-k 排除初始和局部区域，新追加的 Key 属于局部区域，不必等待它产生才能选远端 blocks。首层没有前一层 Forecast，使用额外的同层 Forecast 投影，其 KV cache 留在 GPU；从后续层开始预取。[§4.1；附录 A，算法 2](https://arxiv.org/html/2606.04511v1#A1)

Prefill 时，所需 K、V 已在 GPU 上，主要收益来自更便宜的 selector。Decode offload 时，runtime 在独立 CUDA stream 上用 persistent UVA Triton kernel 搬运选中 KV blocks，使传输与当前层执行重叠。这需要占用部分 GPU 计算资源，收益取决于传输量和可供重叠的计算时间。[§4.3](https://arxiv.org/html/2606.04511v1#S4.SS3)

## 用原 selector 监督更小、提前一层的预测器

作者冻结原模型，只训练新增 Forecast 投影；两个实验模型各增加约 33.5M 参数，占 0.41%。监督目标取自原 selector 的组内聚合分数，位于最终 block max-pooling 之前。KL 损失保留教师 top-k 位置各自的概率，并将其余位置的概率质量合成一个 rest bucket 后归一化，因此也约束未选区域的总概率质量。[§4.2，式 (6)–(7)](https://arxiv.org/html/2606.04511v1#S4.SS2)

教师采用更细的压缩窗口与步长 `(2, 1)`，预测分支及推理使用 `(32, 16)`，教师分数再池化到预测分支的网格。作者认为较细的教师提供了更有区分度的监督，附录表 6 显示两个模型的总体平均分均受益。[§4.2；附录 D，表 6](https://arxiv.org/html/2606.04511v1#A4)

**AI 解读：**这是学习近似原 selector 的重要性分布，不能据此保证逐次 top-k 完全相同。作者在 MiniCPM4.1-8B 和 NOSA-8B 上报告总体平均精度持平或改善，但并非所有指标都提升：MiniCPM4.1-8B 的 HELMET 平均分下降 0.6。验证对象是已有稀疏预训练的 8B backbone，并非任意 dense 模型的无损替换。[§5.1–5.2，表 1](https://arxiv.org/html/2606.04511v1#S5.SS2)

## 性能证据：选择成本与预取重叠分别贡献什么？

下表为作者在 NVIDIA H100 上报告的结果。`Sparse` 使用 CPU offload，`Sparse†` 不 offload；它们与 SparDA 的比较口径不能混用。[§5.3，表 3–4](https://arxiv.org/html/2606.04511v1#S5.SS3)

| 结果 | 条件与比较口径 |
| --- | --- |
| Prefill 最高约 1.25 倍 | MiniCPM4.1-8B，128K，batch 4，相对 Sparse；主要减少选择开销 |
| Decode 最高约 1.7 倍 | 相对同 batch 的 Sparse offload baseline；例如 MiniCPM4.1-8B，128K，batch 8：471.2 对 279.5 tok/s |
| Decode 吞吐最高约 5.3 倍 | MiniCPM4.1-8B，128K：SparDA 在 batch 64 为 1000.1 tok/s，Sparse† 在 batch 4 为 189.5 tok/s，更大测试 batch 的 Sparse† OOM；包含可运行 batch 扩大的收益 |

附录消融更直接说明预取的作用：H100、128K、MiniCPM4.1-8B、batch 64 下，Sparse、仅使用 Forecast 而同步取 KV、完整 SparDA 分别为 **788.9、696.9、1000.1 tok/s**。仅减少 selector head 数在此配置下反而较慢，异步预取才带来最终优势；作者解释为大 batch 下选择延迟节省减小，而 Forecast 投影成本仍在。相反，batch 4 时，无预取的版本为 247.3 tok/s，略高于完整版本的 240.2 tok/s，说明预取本身也有开销。[附录 D，表 10，PDF 第 16 页](https://arxiv.org/pdf/2606.04511v1#page=16)

**AI 推论：**在固定压缩步长下，减少 head 数降低的是 selector 的常数开销；prefill 仍需让各 query 对随上下文增长的 compressed keys 打分，不能由此推断选择复杂度已经变为线性。[§3.1、§4.1](https://arxiv.org/html/2606.04511v1#S4.SS1) 对 DSA 等 token-level selector 的效果尚无本文实验支持，作者明确将迁移到 DSA/CSA 模型列为未来工作。[§6](https://arxiv.org/html/2606.04511v1#S6)
