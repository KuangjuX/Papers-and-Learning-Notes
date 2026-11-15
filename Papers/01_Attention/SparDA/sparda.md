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

# SparDA: Sparse Decoupled Attention for Efficient Long-Context LLM Inference

## SparDA Design

论文以 InfLLM-V2 为基础。它让每个 query 访问固定的初始 blocks、局部窗口和动态 top-k blocks。为了选出动态部分，先对 Key 做均值池化，得到 compressed keys；一个 GQA group 内共享同一 KV head 的多个 query heads 分别打分、分别 softmax，再把组内分数相加，最后 max-pooling 成 block 分数并选 top-k。因此，正式 attention 虽然只读少量 KV，选择阶段仍要扫描随上下文增长的 compressed keys。[§3.1、§4.2 式 (6)](https://arxiv.org/html/2606.04511v1#S3.SS1)

此外，少访问 KV 并不等于无需保存历史 KV。将 cache offload 到 CPU 可以减轻 GPU 容量压力，但如果必须等当前层 Query 产生、完成选择后才搬运，PCIe 传输就落在 attention 的等待路径上。[§1](https://arxiv.org/html/2606.04511v1#S1)

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

Prefill 时，所需 K、V 已在 GPU 上。Decode offload 时，runtime 在独立 CUDA stream 上用 persistent UVA Triton kernel 从 pinned CPU memory 搬运选中 KV blocks，使传输与当前层执行重叠；预取 kernel 的 CTAs 占用原本可供 attention 和 FFN 使用的 SM 资源。[§4.1、§4.3](https://arxiv.org/html/2606.04511v1#S4.SS3)

作者冻结原模型，只训练新增 Forecast 投影；两个实验模型各增加约 33.5M 参数，占 0.41%。监督目标取自原 selector 的组内聚合分数，位于最终 block max-pooling 之前。KL 损失保留教师 top-k 位置各自的概率，并将其余位置的概率质量合成一个 rest bucket 后归一化，因此也约束未选区域的总概率质量。[§4.2，式 (6)–(7)](https://arxiv.org/html/2606.04511v1#S4.SS2)

教师采用更细的压缩窗口与步长 `(2, 1)`，预测分支及推理使用 `(32, 16)`，教师分数再通过 max-pooling 对齐到预测分支的网格。[§4.2](https://arxiv.org/html/2606.04511v1#S4.SS2) 在固定预测分支窗口的消融中，教师窗口从 `(32, 16)` 改为 `(2, 1)` 后，MiniCPM4.1-8B 的四类基准平均分由 60.4 变为 61.7，NOSA-8B 由 50.1 变为 51.7。[附录 D，表 6](https://arxiv.org/html/2606.04511v1#A4)

实验使用已有稀疏预训练的 MiniCPM4.1-8B 和 NOSA-8B。表 1 中，HELMET、LongBench、RULER 和 Reasoning 四类基准的平均分，MiniCPM4.1-8B 从 Sparse 的 61.4 变为 SparDA 的 61.7，NOSA-8B 从 49.4 变为 51.7；其中 MiniCPM4.1-8B 的 HELMET 平均分从 38.9 变为 38.3。[§5.1–5.2，表 1](https://arxiv.org/html/2606.04511v1#S5.SS2)

## Evaluation

下表为作者在 NVIDIA H100 上报告的结果。测试使用 80 GB HBM3、PCIe Gen5 ×16 CPU–GPU 连接和 2 TB CPU 内存，每项设置预热一次后取两次测量的平均值。[附录 C](https://arxiv.org/html/2606.04511v1#A3) `Sparse` 使用 CPU offload，`Sparse†` 不 offload。[§5.3，表 3–4](https://arxiv.org/html/2606.04511v1#S5.SS3)

| 结果 | 条件与比较口径 |
| --- | --- |
| Prefill 最高约 1.25 倍 | MiniCPM4.1-8B，128K，batch 4，相对 Sparse |
| Decode 最高约 1.7 倍 | 相对同 batch 的 Sparse offload baseline；例如 MiniCPM4.1-8B，128K，batch 8：471.2 对 279.5 tok/s |
| Decode 吞吐最高约 5.3 倍 | MiniCPM4.1-8B，128K：SparDA 在 batch 64 为 1000.1 tok/s，Sparse† 在 batch 4 为 189.5 tok/s，更大测试 batch 的 Sparse† OOM；此项使用不同 batch 比较 |

附录表 10 比较了使用 Forecast、但同步获取 KV 的 `SparDA (no prefetch)` 与完整 SparDA。以下为 H100、128K、MiniCPM4.1-8B 的 decode 吞吐，单位为 tok/s。[附录 D，表 10，PDF 第 16 页](https://arxiv.org/pdf/2606.04511v1#page=16)

| Batch | Sparse | SparDA (no prefetch) | SparDA |
| --- | ---: | ---: | ---: |
| 4 | 167.8 | 247.3 | 240.2 |
| 64 | 788.9 | 696.9 | 1000.1 |

对 DSA/CSA 模型的迁移效果尚无本文实验支持，作者将其列为未来工作。[§6](https://arxiv.org/html/2606.04511v1#S6)
