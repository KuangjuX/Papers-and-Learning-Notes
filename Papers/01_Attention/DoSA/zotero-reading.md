# DoSA: Dots Sparse Attention：阅读材料

## 我的理解

在此记录个人理解、待验证问题和补充推导。此区域由你维护。

<!-- zotero:metadata:start -->
## 论文来源
- 作者：Fanxu Meng, Taosong Fang
- 日期：2026-09-26
- Zotero 条目：`L447A648`（本机 ID 385）
- 来源：[论文](http://arxiv.org/abs/2610.13990) · [DOI](https://doi.org/10.48550%2FarXiv.2610.13990) · [Zotero](zotero://select/library/items/L447A648)
- 阅读状态：进行中。下面为原始标注材料，正式解读需核对论文后另行整理。
<!-- zotero:metadata:end -->

<!-- zotero:annotation-YGR4YI2S:start -->
## 标注 YGR4YI2S · 第 1 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=YGR4YI2S&page=1) · PDF `Y75KTIVE` · highlight

**原文**

> Sparse attention visits few keys, yet finding them can still require scoring every key with every indexer head.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜论文要解决的问题：DSA 的主 attention 已经只访问少量 token，但找到这些 token 的 indexer 仍可能对所有候选计算全部 head 的分数。上下文变长后，选择位置本身成为瓶颈。DoSA 的目标是降低这部分计算与数据搬运成本。
<!-- zotero:annotation-YGR4YI2S:end -->

<!-- zotero:annotation-GAL4HV37:start -->
## 标注 GAL4HV37 · 第 1 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=GAL4HV37&page=1) · PDF `Y75KTIVE` · highlight

**原文**

> We take a step toward scalable attention by making token selection conditional while preserving the original routing rule.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜整体目标：让 token 选择过程按需要计算，在满足证书与数值条件时保留原 scorer 的精确 Top-K 选择语义。DoSA 优化的是已有 DSA 的 indexer 执行；“无损”指相对于原 indexer 的选择保证，不等于相对于 dense attention 无损，也不自动保证并列分数时生成文本逐字一致。
<!-- zotero:annotation-GAL4HV37:end -->

<!-- zotero:annotation-UWCW4EBU:start -->
## 标注 UWCW4EBU · 第 1 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=UWCW4EBU&page=1) · PDF `Y75KTIVE` · highlight

**原文**

> At approximately one million tokens, the indexer accounts for 73.0% of prefill GPU time in GLM-5.2 and 90.8% in DeepSeek-V3.2,

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜瓶颈的量级：论文在约百万 token 的配置下，测得 indexer 占 GLM-5.2 和 DeepSeek-V3.2 的 prefill GPU 时间分别为 73.0% 和 90.8%。这说明只加速主 attention 已不足以解决长上下文 prefill 的主要开销；这些比例属于论文的具体测试配置。
<!-- zotero:annotation-UWCW4EBU:end -->

<!-- zotero:annotation-LBKERZAW:start -->
## 标注 LBKERZAW · 第 2 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=LBKERZAW&page=2) · PDF `Y75KTIVE` · highlight

**原文**

> Survivors receive full original scores, and only scores meeting the seed-derived threshold are written for final selection.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜DoSA prefill 的完整筛选流程（结合本次阅读讨论整理；对应论文 §2.2–2.4）。

1. 用 seed 建立门槛。
选至少 K 个不同、可见的 key，按原始全部 head 完整打分，取第 K 高分作为门槛 τ，并保留 seed 的 Top-K 结果。seed 的选择会影响门槛和筛选效率，但只要满足上述条件，门槛就不会高于全体可见 key 的真实第 K 高分。

2. 对其余 key 计算安全上界，排除不可能入选者。
先计算部分保留 head 的点积，再为省略的 head 构造界：
• 正权重 head：估计“加分量的上界”。复用已算 head 的结果，再加上残差贡献的上界。残差向量及相关界在 query 准备阶段计算并复用，无需逐 key 计算残差点积。
• 负权重 head：估计“扣分量的下界”。将选中的省略负权重 head 的 query 按权重绝对值预先合并，再对每个 key 计算合并 query 的点积并过 ReLU。因为“先求和再 ReLU”不大于“逐项 ReLU 后求和”，该结果是这些 head 扣分量的下界，也不会超过全部省略负权重 head 的真实扣分量。这样减少了逐 head 点积；相比完全忽略负权重贡献，上界不会变松，扣分下界为正时会更紧。

总分安全上界 = 已算 head 的真实贡献 + 省略正权重部分的加分上界 − 省略负权重部分的扣分下界。
直觉：加分往多了算，扣分往少了算，最终不会低估真实总分。“负权重部分取下界”指扣分量的下界；带上负号后，它仍是该部分对总分贡献的上界。
总分上界严格小于门槛（U &lt; τ）就排除；大于等于门槛（U ≥ τ）就保留。实现中还需保证数值界保守、证书有效，无法可靠排除时保留。

3. 对幸存候选完整打分，再选最终 Top-K。
用全部原始 head 计算真实分数，低于门槛的继续排除；其余记录与 seed 中保留的 Top-K 合并，按完整分数选出最终 K 个。筛选上界只决定是否需要完整打分，不参与最终分数排名。

整体仍扫描剩余每个 key，节省的是逐 key 的完整多头打分、分数写回和最终选择的工作量。
<!-- zotero:annotation-LBKERZAW:end -->

<!-- zotero:annotation-LJZ23SXM:start -->
## 标注 LJZ23SXM · 第 4 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=LJZ23SXM&page=4) · PDF `Y75KTIVE` · highlight

**原文**

> Stage ❸ gathers their keys and evaluates all H original heads.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

④ 对留下的候选完整打分。筛选通过只表示仍可能进入 Top-K。exact\_paged\_solo\_live\_nk / exact\_paged\_common\_live\_nk 根据候选 ID 读取 key，并用原始全部 32 或 64 个 head 重新计算完整 indexer 分数。精确分数仍低于 seed 门槛的候选，在写回前再次淘汰。例如门槛 7、上界 12 的候选可能实际只得 5，需在这一步排除；上界本身不用于最终排名。对应 backend.py:540–546；refine.cu:420–435。
<!-- zotero:annotation-LJZ23SXM:end -->

<!-- zotero:annotation-ADQKPC5Q:start -->
## 标注 ADQKPC5Q · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=ADQKPC5Q&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Retained query rows, folded weights, and two FP8 auxiliary rows are prepared once and reused across key tiles.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

① 一次性准备筛选方案。seed\_tau 确定后，backend.py:515–523 从重排后的 seed 区域抽取 128 个位置（32+64\*i），用各 query 的全部 head 计算激活掩码，帮助 planner 选择直接计算的 head 和聚合辅助向量。门槛仍来自完整的 12,288 个 seed，这 128 个样本用于准备筛选方案。当前代码 H32 使用 14/16/20 个保留 head 的档位，H64 使用 14/16/28；另有两行 FP8 辅助向量，辅助行不是两个新模型 head。方案按 query 准备，扫描各 key tile 时复用。对应 backend.py:497–524、planner.cu:134–178、280–287。
<!-- zotero:annotation-ADQKPC5Q:end -->

<!-- zotero:annotation-ARKJQ7MT:start -->
## 标注 ARKJQ7MT · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=ARKJQ7MT&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> warp ballots pack the survivor decisions into compact masks for refinement.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

② 扫描剩余 key，生成保留位图。内部 key 已把 seed 重排到前 12,288 项；\_emit() 从其后的 key 开始按 tile 扫描，仍读取 key 向量，但只计算保留 head 和辅助向量的点积。再结合预先准备的残差/数值保护信息形成每个 query-key 的安全上界，与本 query 的固定 safe\_tau 比较。只有上界严格低于门槛且证书有效时才排除；相等或无法可靠排除时保留。warp ballot 把决定压成位图，不在这一阶段写出全部候选的完整分数。对应 backend.py:462–490、527–531；low.cu:185–202。
<!-- zotero:annotation-ARKJQ7MT:end -->

<!-- zotero:annotation-WFZZA9CL:start -->
## 标注 WFZZA9CL · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=WFZZA9CL&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Within a group of four queries, a key that survives at least two bounds and lies in the group’s common visible range enters the shared stream; other candidates use per-query streams.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

③ 把位图整理成精算任务。compact\_candidates\_live\_nk 将保留位图转换为连续的候选 ID 列表，分为共享流和各 query 独立流。四个 query 一组：一个 key 被至少两个 query 留下，且对四个 query 都可见，就进入共享流，加载一次 key 后供该组精确打分；其余走单独流。共享路径可能多算部分 query-key 对，用来减少重复 key 读取，各 query 最后仍按自己的精确分数和门槛过滤。对应 backend.py:532–535；compact.cu:79–106。
<!-- zotero:annotation-WFZZA9CL:end -->

<!-- zotero:annotation-TMIF4XYF:start -->
## 标注 TMIF4XYF · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=TMIF4XYF&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> After refinement, Top-K selection retains records strictly above the boundary code and resolves candidates at the boundary using their original scores.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

⑤ 稀疏写回与最终精确 Top-K。精算阶段只为达到固定门槛的候选写记录；记录采用紧凑单调分数编码和准确 key ID，以减少显存流量。它们与 seed 中已保留的 Top-2048 记录一起参与最终选择。紧凑编码的边界候选再由原始分数消歧，避免把编码近似当作最终排序依据。对应 backend.py:547–555 的 select\_dense5 和 complete\_h32\_fused\_large。若发生证书、缓冲区或选择错误，另有精确 recovery 路径。整体节省完整多头打分、分数写回和最终选择的工作量；不会省掉初次对剩余 key 的扫描。
<!-- zotero:annotation-TMIF4XYF:end -->

<!-- zotero:annotation-7F87M7D5:start -->
## 标注 7F87M7D5 · 第 7 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=7F87M7D5&page=7) · PDF `Y75KTIVE` · highlight

**原文**

> Speedups over SGLang range from 1.12 to 2.74×, exceeding 2× in every configuration at 512K tokens and above.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜局部性能收益（§4.2 / Figure 4）：GLM-5.2 的完整 indexer 微基准覆盖英文、中文、代码，5 种上下文长度和 4 种 prefill chunk，共 60 个配置。相对 SGLang 加速 1.12–2.74×，相对 LiteTopK 加速 1.17–1.69×；512K 及以上的所有测试配置对 SGLang 均超过 2×。测量包括 query/key 准备，不能把这里的加速比当成整模型加速。
<!-- zotero:annotation-7F87M7D5:end -->

<!-- zotero:annotation-A6WSCHRE:start -->
## 标注 A6WSCHRE · 第 8 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=A6WSCHRE&page=8) · PDF `Y75KTIVE` · highlight

**原文**

> It achieves 1.86× and 1.94× speedups over SGLang on GLM-5.2 and DeepSeek-V3.2, respectively, and 1.26× and 1.50× over LiteTopK.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜用户可感知的效果（§4.3 / Figure 8）：约 1M token 输入、TP8 的端到端测试中，GLM-5.2 的 TTFT 相对 SGLang / LiteTopK 分别加速 1.86× / 1.26×；DeepSeek-V3.2 分别加速 1.94× / 1.50×。相对 SGLang，等待首 token 的时间分别减少约 46% / 48%。这里测的是长输入的首 token 延迟，不是后续逐 token 生成速度。
<!-- zotero:annotation-A6WSCHRE:end -->

<!-- zotero:annotation-UK3KWVHF:start -->
## 标注 UK3KWVHF · 第 9 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=UK3KWVHF&page=9) · PDF `Y75KTIVE` · highlight

**原文**

> DOSA still scans every key, and short contexts or loose bounds can leave insufficient savings to offset screening.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

AI 解读｜收益边界（§6）：DoSA 仍需扫描每个 key；它主要减少每个候选的完整多头打分。短上下文或上界较松时，筛选开销可能抵消收益。论文证明和测量的是选择正确性条件下的计算收益，不能据此推断模型理解能力、任务准确率或训练上下文范围得到提升。
<!-- zotero:annotation-UK3KWVHF:end -->
