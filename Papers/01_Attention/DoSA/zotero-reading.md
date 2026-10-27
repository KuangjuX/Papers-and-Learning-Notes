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

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜论文要解决的问题：DSA 的主 attention 已经只访问少量 token，但找到这些 token 的 indexer 仍可能对所有候选计算全部 head 的分数。上下文变长后，选择位置本身成为瓶颈。DoSA 的目标是降低这部分计算与数据搬运成本。
</pre>
<!-- zotero:annotation-YGR4YI2S:end -->

<!-- zotero:annotation-GAL4HV37:start -->
## 标注 GAL4HV37 · 第 1 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=GAL4HV37&page=1) · PDF `Y75KTIVE` · highlight

**原文**

> We take a step toward scalable attention by making token selection conditional while preserving the original routing rule.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜整体目标：让 token 选择过程按需要计算，在满足证书与数值条件时保留原 scorer 的精确 Top-K 选择语义。DoSA 优化的是已有 DSA 的 indexer 执行；“无损”指相对于原 indexer 的选择保证，不等于相对于 dense attention 无损，也不自动保证并列分数时生成文本逐字一致。
</pre>
<!-- zotero:annotation-GAL4HV37:end -->

<!-- zotero:annotation-UWCW4EBU:start -->
## 标注 UWCW4EBU · 第 1 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=UWCW4EBU&page=1) · PDF `Y75KTIVE` · highlight

**原文**

> At approximately one million tokens, the indexer accounts for 73.0% of prefill GPU time in GLM-5.2 and 90.8% in DeepSeek-V3.2,

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜瓶颈的量级：论文在约百万 token 的配置下，测得 indexer 占 GLM-5.2 和 DeepSeek-V3.2 的 prefill GPU 时间分别为 73.0% 和 90.8%。这说明只加速主 attention 已不足以解决长上下文 prefill 的主要开销；这些比例属于论文的具体测试配置。
</pre>
<!-- zotero:annotation-UWCW4EBU:end -->

<!-- zotero:annotation-LBKERZAW:start -->
## 标注 LBKERZAW · 第 2 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=LBKERZAW&page=2) · PDF `Y75KTIVE` · highlight

**原文**

> Survivors receive full original scores, and only scores meeting the seed-derived threshold are written for final selection.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
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
</pre>
<!-- zotero:annotation-LBKERZAW:end -->

<!-- zotero:annotation-LJZ23SXM:start -->
## 标注 LJZ23SXM · 第 4 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=LJZ23SXM&page=4) · PDF `Y75KTIVE` · highlight

**原文**

> Stage ❸ gathers their keys and evaluates all H original heads.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

④ 对留下的候选完整打分。筛选通过只表示仍可能进入 Top-K。exact_paged_solo_live_nk / exact_paged_common_live_nk 根据候选 ID 读取 key，并用原始全部 32 或 64 个 head 重新计算完整 indexer 分数。精确分数仍低于 seed 门槛的候选，在写回前再次淘汰。例如门槛 7、上界 12 的候选可能实际只得 5，需在这一步排除；上界本身不用于最终排名。对应 backend.py:540–546；refine.cu:420–435。
</pre>
<!-- zotero:annotation-LJZ23SXM:end -->

<!-- zotero:annotation-ADQKPC5Q:start -->
## 标注 ADQKPC5Q · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=ADQKPC5Q&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Retained query rows, folded weights, and two FP8 auxiliary rows are prepared once and reused across key tiles.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

① 一次性准备筛选方案。seed_tau 确定后，backend.py:515–523 从重排后的 seed 区域抽取 128 个位置（32+64*i），用各 query 的全部 head 计算激活掩码，帮助 planner 选择直接计算的 head 和聚合辅助向量。门槛仍来自完整的 12,288 个 seed，这 128 个样本用于准备筛选方案。当前代码 H32 使用 14/16/20 个保留 head 的档位，H64 使用 14/16/28；另有两行 FP8 辅助向量，辅助行不是两个新模型 head。方案按 query 准备，扫描各 key tile 时复用。对应 backend.py:497–524、planner.cu:134–178、280–287。
</pre>
<!-- zotero:annotation-ADQKPC5Q:end -->

<!-- zotero:annotation-ARKJQ7MT:start -->
## 标注 ARKJQ7MT · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=ARKJQ7MT&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> warp ballots pack the survivor decisions into compact masks for refinement.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

② 扫描剩余 key，生成保留位图。内部 key 已把 seed 重排到前 12,288 项；_emit() 从其后的 key 开始按 tile 扫描，仍读取 key 向量，但只计算保留 head 和辅助向量的点积。再结合预先准备的残差/数值保护信息形成每个 query-key 的安全上界，与本 query 的固定 safe_tau 比较。只有上界严格低于门槛且证书有效时才排除；相等或无法可靠排除时保留。warp ballot 把决定压成位图，不在这一阶段写出全部候选的完整分数。对应 backend.py:462–490、527–531；low.cu:185–202。
</pre>
<!-- zotero:annotation-ARKJQ7MT:end -->

<!-- zotero:annotation-WFZZA9CL:start -->
## 标注 WFZZA9CL · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=WFZZA9CL&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Within a group of four queries, a key that survives at least two bounds and lies in the group’s common visible range enters the shared stream; other candidates use per-query streams.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

③ 把位图整理成精算任务。compact_candidates_live_nk 将保留位图转换为连续的候选 ID 列表，分为共享流和各 query 独立流。四个 query 一组：一个 key 被至少两个 query 留下，且对四个 query 都可见，就进入共享流，加载一次 key 后供该组精确打分；其余走单独流。共享路径可能多算部分 query-key 对，用来减少重复 key 读取，各 query 最后仍按自己的精确分数和门槛过滤。对应 backend.py:532–535；compact.cu:79–106。
</pre>
<!-- zotero:annotation-WFZZA9CL:end -->

<!-- zotero:annotation-TMIF4XYF:start -->
## 标注 TMIF4XYF · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=TMIF4XYF&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> After refinement, Top-K selection retains records strictly above the boundary code and resolves candidates at the boundary using their original scores.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜代码对照基于本地 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02；下述具体数量与函数名来自移植代码，不将其当作论文正文明确给出的参数。

⑤ 稀疏写回与最终精确 Top-K。精算阶段只为达到固定门槛的候选写记录；记录采用紧凑单调分数编码和准确 key ID，以减少显存流量。它们与 seed 中已保留的 Top-2048 记录一起参与最终选择。紧凑编码的边界候选再由原始分数消歧，避免把编码近似当作最终排序依据。对应 backend.py:547–555 的 select_dense5 和 complete_h32_fused_large。若发生证书、缓冲区或选择错误，另有精确 recovery 路径。整体节省完整多头打分、分数写回和最终选择的工作量；不会省掉初次对剩余 key 的扫描。
</pre>
<!-- zotero:annotation-TMIF4XYF:end -->

<!-- zotero:annotation-7F87M7D5:start -->
## 标注 7F87M7D5 · 第 7 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=7F87M7D5&page=7) · PDF `Y75KTIVE` · highlight

**原文**

> Speedups over SGLang range from 1.12 to 2.74×, exceeding 2× in every configuration at 512K tokens and above.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜局部性能收益（§4.2 / Figure 4）：GLM-5.2 的完整 indexer 微基准覆盖英文、中文、代码，5 种上下文长度和 4 种 prefill chunk，共 60 个配置。相对 SGLang 加速 1.12–2.74×，相对 LiteTopK 加速 1.17–1.69×；512K 及以上的所有测试配置对 SGLang 均超过 2×。测量包括 query/key 准备，不能把这里的加速比当成整模型加速。
</pre>
<!-- zotero:annotation-7F87M7D5:end -->

<!-- zotero:annotation-A6WSCHRE:start -->
## 标注 A6WSCHRE · 第 8 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=A6WSCHRE&page=8) · PDF `Y75KTIVE` · highlight

**原文**

> It achieves 1.86× and 1.94× speedups over SGLang on GLM-5.2 and DeepSeek-V3.2, respectively, and 1.26× and 1.50× over LiteTopK.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜用户可感知的效果（§4.3 / Figure 8）：约 1M token 输入、TP8 的端到端测试中，GLM-5.2 的 TTFT 相对 SGLang / LiteTopK 分别加速 1.86× / 1.26×；DeepSeek-V3.2 分别加速 1.94× / 1.50×。相对 SGLang，等待首 token 的时间分别减少约 46% / 48%。这里测的是长输入的首 token 延迟，不是后续逐 token 生成速度。
</pre>
<!-- zotero:annotation-A6WSCHRE:end -->

<!-- zotero:annotation-UK3KWVHF:start -->
## 标注 UK3KWVHF · 第 9 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=UK3KWVHF&page=9) · PDF `Y75KTIVE` · highlight

**原文**

> DOSA still scans every key, and short contexts or loose bounds can leave insufficient savings to offset screening.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜收益边界（§6）：DoSA 仍需扫描每个 key；它主要减少每个候选的完整多头打分。短上下文或上界较松时，筛选开销可能抵消收益。论文证明和测量的是选择正确性条件下的计算收益，不能据此推断模型理解能力、任务准确率或训练上下文范围得到提升。
</pre>
<!-- zotero:annotation-UK3KWVHF:end -->

<!-- zotero:annotation-H3NH9BUD:start -->
## 标注 H3NH9BUD · 第 3 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=H3NH9BUD&page=3) · PDF `Y75KTIVE` · highlight

**原文**

> Tensor Cores execute stages ❶ and ❸;

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 2 的计算分工与矩阵形状。筛选和精算的共同核心都是很多向量点积，整理成矩阵乘法后交给Tensor Cores；上界组合、ReLU、head加权求和、门槛比较和候选整理由SIMT线程处理。逻辑形状示例（非实际kernel tile配置）：同一预算组有G个query，每query有r个保留head、a行辅助向量、维度D，对B个key做筛选，可理解为[G(r+a),D]×[D,B]，输出再按[G,r+a,B]解释，由SIMT为每个query-key形成一个U。各query可以保留不同原始head，只要把各自选中的向量与对应权重按计划整理好；不要求全组选择相同head ID。H是原始模型head数，r+a是筛选行数，两者不要混淆。
</pre>
<!-- zotero:annotation-H3NH9BUD:end -->

<!-- zotero:annotation-JENV8V8H:start -->
## 标注 JENV8V8H · 第 3 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=JENV8V8H&page=3) · PDF `Y75KTIVE` · highlight

**原文**

> seed initialization and final Top-K selection are omitted.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 2 如何接回完整算法。图只画中间执行主体，进入图前已用至少K个不同可见seed完整打分，得到各query的固定门槛τ并保留seed Top-K；离开图后将幸存者真实分数与seed记录合并做最终Top-K。图中❶用保留head和辅助向量做筛选点积；❷用SIMT形成安全上界、排除U&lt;τ并压缩候选ID；❸只为候选计算全部原始head；❹做原始ReLU、加权归约，并只写出s≥τ的记录。两次过滤分别省完整打分与低分记录写回；相等均保留。灰色表示避免的计算、紫色表示避免的写回。中间GPU资源示意用于说明Tensor Core、SIMT及存储层次的分工，不能把四个算法阶段直接当作四个kernel。
</pre>
<!-- zotero:annotation-JENV8V8H:end -->

<!-- zotero:annotation-X26A83RX:start -->
## 标注 X26A83RX · 第 3 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=X26A83RX&page=3) · PDF `Y75KTIVE` · highlight

**原文**

> Bounding every head can leave all candidates above the threshold. We therefore directly evaluate selected heads whose contributions are difficult to bound tightly.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜保留哪些 head（论文 §2.2）。保留表示在筛选阶段对每个 key 直接计算该 head 的点积，不是删除其他模型 head；幸存候选最终仍使用全部原始 head 打分。给定预算 r 后分两种情况：① 正权重 head 数量不超过 r：保留全部正 head，剩余名额分给优先级最高的负 head；负 head 优先级为 |w_h|·||q_h||₂·min(p_h,1−p_h)。② 正 head 数量超过 r：按 w_h·||q_h||₂ 从大到小保留 r 个正 head，其他正 head 用安全上界，负 head 用扣分下界处理。这里的强度不是该 head 在某个 key 上的真实得分，不需要先完整扫描所有 key 才能选 head。教学例子：H=8、r=4，若有3个正 head，则保留这3个，再选1个负 head；若有5个正 head，强度依次为9、7、5、3、1，则保留前4个正 head。选择按当前 query 准备并在扫描 key 时复用，影响筛选效率与界紧度；有效界条件下不改变最终精确选择保证。
</pre>
<!-- zotero:annotation-X26A83RX:end -->

<!-- zotero:annotation-ZBI26MRW:start -->
## 标注 ZBI26MRW · 第 3 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=ZBI26MRW&page=3) · PDF `Y75KTIVE` · highlight

**原文**

> This favors strong heads whose activation is difficult to predict.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜为什么直接算某些负 head（论文 §2.2、附录 B.2）。p_h 是该 head 在 seed 样本上 dot(q_h,k)&gt;0 的比例，即 ReLU 激活频率；不是 softmax 概率，也不是 head 权重。强度 a_h=|w_h|·||q_h||₂；优先级 a_h·min(p_h,1−p_h)。p 接近0时可倾向不放入负聚合，接近1时可倾向放入负聚合；p 接近0.5时，用固定的聚合支持集合较难匹配各 key 的激活情况。因此优先把强、且经常改变激活状态的负 head 直接算出来。教学例子：三个负 head 强度都为10，激活频率分别0.95、0.50、0.05，优先级分别0.5、5、0.5；仅剩1个名额时选择中间那个。激活频率并不能决定某个新 key 的真实贡献，选择仅优化论文定义的样本归一化松弛上界的替代目标，不保证幸存者最少或实际延迟最低。
</pre>
<!-- zotero:annotation-ZBI26MRW:end -->

<!-- zotero:annotation-3RUNHVYY:start -->
## 标注 3RUNHVYY · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=3RUNHVYY&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Data flow through screening, refinement, and sparse writeback.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3 读图顺序。纵向是执行/存储位置，横向是示意推进顺序。先跟踪蓝色tile：显存Q/K经G2S进入Shared Memory，MMA做矩阵乘加，累加结果C位于TMEM，经T2R取到线程寄存器中的fragment，再由SIMT求安全上界U。筛选后压缩的candidate IDs驱动精算阶段按ID读取key，使用全部原始head；精算结果再次经TMEM→寄存器→SIMT，做ReLU/加权归约与门槛过滤，最后打包记录rec写回。橙色是后续tile，图中展示搬运与计算重叠。灰色full-head MMA表示剪枝后避免的工作。图是数据流/流水线示意，不是实测时间线；方框宽度不代表耗时，也不证明筛选、压缩与精算都在单个kernel内。
</pre>
<!-- zotero:annotation-3RUNHVYY:end -->

<!-- zotero:annotation-GQ3BLLS9:start -->
## 标注 GQ3BLLS9 · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=GQ3BLLS9&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Certified pruning reduces arithmetic, but irregular survivor sets can limit GPU utilization and introduce scattered key accesses.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜为什么分成规则扫描和稀疏精算（§3）。上界筛选仍按tile遍历所有非seed key，用统一预算的query组执行规则矩阵运算；其输出先是保留/排除的紧凑位图，再整理为候选ID。精算只根据候选ID访问key，因此不规则性主要由候选流组织来处理。教学例子：保留位为[0,1,0,1,1]，可整理出ID[1,3,4]，精算只处理这些候选。这样把大规模规则扫描与较小的稀疏工作分开。少算并不自动快：压缩成本、零散gather、矩阵tile未填满以及重复key加载都可能抵消收益。这里的compact是候选记录整理，不是把整个KV cache压缩或删除。
</pre>
<!-- zotero:annotation-GQ3BLLS9:end -->

<!-- zotero:annotation-8Y92CC65:start -->
## 标注 8Y92CC65 · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=8Y92CC65&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> We group queries with similar retained-head budgets into fixed-width tiles, enabling a small set of screening kernels to use dense Tensor Core MMA.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜实现怎样确定数量（论文 §3 + 本地代码对照）。论文说明按相近预算分组；以下具体档位和决策规则来自 dots-sparse-attention 提交 8c578e0e94e392dece8394489ff957b7e27b7a02 的 backend.py:183、504–523，不当作论文推导出的最优预算。H32 支持 r=14/16/20，H64 支持 r=14/16/28，另有两行 FP8 辅助向量。代码先按正 head 数量所在区间稳定排序 query，再每8个 query 成组，以该组最大的正 head 数量 n+ 选预算：n+≤14用14；14&lt;n+≤16用16；n+&gt;16用高档20或28，即使正 head 超过高档也不会再增加预算。然后每个 query 在这个预算内按 §2.2 规则选具体 head。若一个H32组最多有12个正 head，预算14；其中只有10个正 head的query会保留10正+4负。若组最多有18个正 head，预算20；若超过20则仍用20，部分正 head 交给上界。该路径不是对多个预算在线测速或保证最优r，而是用有限档位组织计算。seed 区域的128个样本用于估计负 head 激活频率，不用于决定每组预算档位。
</pre>
<!-- zotero:annotation-8Y92CC65:end -->

<!-- zotero:annotation-P79VICEZ:start -->
## 标注 P79VICEZ · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=P79VICEZ&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> Dedicated warps issue asynchronous key loads and MMA operations, while consumer warps evaluate bounds from TMEM accumulators.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3 的流水线与warp分工。论文把异步key加载/MMA发起与SIMT上界处理分给不同warp角色；缓冲key tiles允许后续tile的加载与当前tile的计算重叠。可按三类工作理解：搬数据、做矩阵乘加、消费结果求U并比较τ。串行时这些开销相加，流水线在有足够工作且资源允许时重叠其中一部分；仍需正确等待数据与累加结果就绪，不能认为异步就无需同步。G2S=global-to-shared，MMA=矩阵乘加，TMEM存放图中的MMA累加结果，T2R=TMEM-to-register。具体warp数、缓冲级数、barrier协议及指令顺序，不能仅凭这张示意图确定，需要继续核对对应kernel源码。
</pre>
<!-- zotero:annotation-P79VICEZ:end -->

<!-- zotero:annotation-HP8KDVXX:start -->
## 标注 HP8KDVXX · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=HP8KDVXX&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> This organization trades some extra query–key evaluations for fewer key transfers.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜共享精算为何可能多算却更快（§3）。论文每4个query成组；key在至少2个query的上界筛选中幸存，且位于全组共同可见范围，就进入共享流，其余候选进入各query独立流。教学例子：q0保留A/B，q1保留B/C，q2保留B，q3保留D，且B对4个query都可见。B可进入共享流，一次key加载服务该组完整打分；即使q3先前没有保留B，也可能为规则成组计算多算q3-B，随后仍按q3自己的真实分数和门槛过滤。A/C/D各自走独立流。复用的是key加载，不是把一个query的分数复用给另一个query。这个取舍说明GPU性能应综合计算、访存和矩阵利用率；最少点积不一定等于最低延迟。
</pre>
<!-- zotero:annotation-HP8KDVXX:end -->

<!-- zotero:annotation-B9KWDTYE:start -->
## 标注 B9KWDTYE · 第 5 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=B9KWDTYE&page=5) · PDF `Y75KTIVE` · highlight

**原文**

> These records store compact monotone score codes with exact key IDs, reducing HBM traffic and selection input.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜为什么精算后还要过滤、紧凑编码与边界复核（§3）。上界通过只代表可能入选，不代表真实分数达到seed门槛。教学例子：τ=6，某候选U=9而真实s=4，它必须精算才能排除，但精算结果可直接丢弃，不必写入最终选择缓冲；s=7则写出记录。写回保存紧凑、单调的分数编码和精确key ID，减少数据量；单调编码可能把不同原始分数压成同码，因此最终选择在边界编码处重新使用原始分数处理候选，而不是拿粗编码直接替代精确排名。这些记录与seed记录共同参与最终Top-K。若完整score矩阵被外部接口要求返回，则不能不加修改地省略那些分数输出。
</pre>
<!-- zotero:annotation-B9KWDTYE:end -->

<!-- zotero:annotation-AIJ7D9MW:start -->
## 标注 AIJ7D9MW · 第 6 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=AIJ7D9MW&page=6) · PDF `Y75KTIVE` · highlight

**原文**

> The microbenchmarks use prefixes of 1M-token inputs; certificate analyses cover samples throughout this length range.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜实际验证的 workload（§4.1）。Prefill 使用英文、中文书籍和代码，来源为 InfiniteBench，并用 Project Gutenberg 和 SQLite 补充长上下文；长度128K至约1M。微基准针对GLM-5.2，32个indexer heads；端到端还包含DeepSeek-V3.2，64个heads；两者token Top-K均为2048。微基准覆盖5种上下文长度×4种query chunk（4K/8K/16K/32K）×3种输入域，共60个配置。这里使用benchmark输入主要用于系统性能评测，不等于报告了对应任务的准确率。论文没有直接验证WeLM的H8/H16或block-max-pooling后选block Top-K；这些属于后续适配场景。
</pre>
<!-- zotero:annotation-AIJ7D9MW:end -->

<!-- zotero:annotation-6SMYPYKF:start -->
## 标注 6SMYPYKF · 第 7 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=6SMYPYKF&page=7) · PDF `Y75KTIVE` · highlight

**原文**

> End-to-end performance is measured by time to first token (TTFT) for individual requests, clearing the prefix cache between requests.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜evaluation口径与外推边界（§4.1–4.3）。完整indexer延迟在warmup后用CUDA events测量，使用真实模型运行产生的激活；prefill微基准回放最后一个query chunk，覆盖21个产生indexer的层，包含query/key准备。端到端测量TP8下单请求TTFT，并在请求之间清空prefix cache；GLM-5.2/DeepSeek-V3.2的prefill chunk分别32K/16K。因此最直接支持长输入首次处理的首token延迟收益，不能直接代表高并发吞吐、prefix-cache高命中场景或逐token生成延迟。应区分complete-indexer、TTFT与附录D.4排除query/key准备的retrieval计时。
</pre>
<!-- zotero:annotation-6SMYPYKF:end -->

<!-- zotero:annotation-B9UWPIJV:start -->
## 标注 B9UWPIJV · 第 7 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=B9UWPIJV&page=7) · PDF `Y75KTIVE` · highlight

**原文**

> Context length drives the gain more strongly than query chunk size.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜更适合长key维度（§4.2）。英文输入、query chunk固定16K时，上下文128K→1M，相对SGLang的完整indexer加速1.19×→2.58×；上下文固定1M、query chunk从4K→32K时，加速2.47×→2.69×。每个query的证书准备可跨所有key复用，key越多，可避免的完整打分越多；增加query chunk则同时扩大所有方法的query工作量。因此论文观察到上下文长度的影响强于chunk大小。这个结论来自已测范围，不能解释成越长必然无限加速，也不能把长上下文加速等同于上下文理解能力提升。
</pre>
<!-- zotero:annotation-B9UWPIJV:end -->

<!-- zotero:annotation-ZFS3MTFR:start -->
## 标注 ZFS3MTFR · 第 7 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=ZFS3MTFR&page=7) · PDF `Y75KTIVE` · highlight

**原文**

> Here the gain comes from reducing selection work:

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜decode收益与prefill不同（§4.2，结合§3）。Decode workload包括HELMET、InfiniteBench、LongBench v2的文档分析请求及SQLite代码审查请求；每种workload以等长请求填满约1M-token的总KV cache。在单请求长度256K/512K/约1M时，decoding indexer相对SGLang加速1.06×/1.11×/1.26×。该路径保留完整FP8打分，用近期选中的key重新打分建立门槛，减少写回与选择工作；不能用prefill省略head的剪枝机制解释这些结果。这里测的是decode indexer，不是端到端TPOT或吞吐的相同倍数提升。
</pre>
<!-- zotero:annotation-ZFS3MTFR:end -->

<!-- zotero:annotation-CJ3GAZQM:start -->
## 标注 CJ3GAZQM · 第 8 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=CJ3GAZQM&page=8) · PDF `Y75KTIVE` · highlight

**原文**

> The shared pattern points to layer-dependent score geometry as a stronger influence than the input domain.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜不是某种语言或代码天然更适合（§4.2、Figure 6）。英文、中文、代码的平均剪枝率相近，为97.2%–97.5%；每个域21层中20层剪枝率超过95%，最低均在layer 1，约89%–93%。作者据此认为层相关的score几何关系比分域更能解释差异。这是所测模型和样本的观察，不是任意数据分布下的保证。实践中应按layer记录幸存率与延迟，不能只用“代码/中文”标签预判性能；剪枝率也不能直接当作总计算或总延迟的下降比例。
</pre>
<!-- zotero:annotation-CJ3GAZQM:end -->

<!-- zotero:annotation-2NJP39AM:start -->
## 标注 2NJP39AM · 第 9 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=2NJP39AM&page=9) · PDF `Y75KTIVE` · highlight

**原文**

> The measurements establish computational benefits, not improved task accuracy beyond a model’s trained context.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜适用边界与WeLM评测建议（§6、附录D.1）。作者明确指出收益是计算效率，不是超出训练上下文后的任务准确率提升；DeepSeek超出声明上下文长度的测量只支撑计算扩展性观察。DoSA仍扫描每个key，短上下文或松界可能不足以抵消筛选成本；数值界需相对原scorer保守，并列Top-K集合有效也不自动保证生成文本逐字一致。以下为本次讨论的适配推论，非论文已验证结论：WeLM H8/H16、blockwise Top-K应使用真实模型激活，固定原始打分与选择语义，对比不同上下文和query chunk下的完整indexer延迟，同时记录筛选开销、token幸存率、block幸存率、精算数量及候选整理成本。若要求输出所有block精确score，需单独评估该接口要求是否抵消跳过精算的收益。
</pre>
<!-- zotero:annotation-2NJP39AM:end -->

<!-- zotero:annotation-FWIZV4FG:start -->
## 标注 FWIZV4FG · 第 16 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=FWIZV4FG&page=16) · PDF `Y75KTIVE` · highlight

**原文**

> A stronger seed reduces b; a tighter certificate reduces

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜什么分数分布容易剪枝（附录B.3）。真实全域Top-K门槛记为τ*，seed门槛τ；候选真实分数s，上界U。定义候选距边界的差距Δ=τ*−s，seed门槛缺口b=τ*−τ，上界松弛δ=U−s。可排除的条件是Δ&gt;δ+b。因此高质量seed减少b、紧界减少δ，而大多数候选明显低于Top-K边界时容易筛掉。教学例子：τ*=10、τ=8、s=3、U=6，则Δ=7、b=2、δ=3，7&gt;3+2，可以排除。若候选挤在边界附近或存在很多并列分数，幸存者仍可能很多。这是算法适用性的机制解释，不是某个输入域的先验承诺。
</pre>
<!-- zotero:annotation-FWIZV4FG:end -->

<!-- zotero:annotation-H8D6ESCF:start -->
## 标注 H8D6ESCF · 第 16 页
[回到原文](zotero://open-pdf/library/items/Y75KTIVE?annotation=H8D6ESCF&page=16) · PDF `Y75KTIVE` · highlight

**原文**

> An additional head pays off only if it avoids enough full rescoring.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜保留数量 r 的成本取舍（附录 B.3，式18–21）。每增加1个保留 head，要为所有被筛选 key 多算1个点积，但可能减少随后需要全部 H 个 head 精算的候选。固定初始化和辅助行数，逻辑点积成本下降的条件是：淘汰率增加量 &gt; Δr/H。教学例子：H=32，r 从14增至16，每100个筛选 key 多算200次点积；至少额外淘汰7个候选，才能省下7×32=224次精算点积，抵过新增工作。等价地，淘汰率须提高超过6.25个百分点。H=8时同样增加2个 head，需要提高超过25个百分点，因此小 head 数下更难摊薄筛选成本。此模型不包含准备、访存、Tensor Core 填充、候选压缩、选择和 recovery；不是实际延迟预测，也不保证更换 head/锚点/聚合集合后淘汰率单调提高。
</pre>
<!-- zotero:annotation-H8D6ESCF:end -->
