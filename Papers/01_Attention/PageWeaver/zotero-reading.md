# PageWeaver: KV-Guided Query Unions for Sparse Attention：阅读材料

## 我的理解

正式阅读笔记见 [PageWeaver：在线 Query 分组与共享 KV 的稀疏 Attention](pageweaver.md)。下面保留同步的原始标注；论文阅读状态以主题索引为准。

<!-- zotero:metadata:start -->
## 论文来源
- 作者：Zhiyuan Li, Zihan Li, Zefang Yuan, Lei Wang, Hao Wang
- 日期：2026-10-08
- Zotero 条目：`EHQB8NYQ`（本机 ID 387）
- 来源：[论文](http://arxiv.org/abs/2610.11201) · [DOI](https://doi.org/10.48550%2FarXiv.2610.11201) · [Zotero](zotero://select/library/items/EHQB8NYQ)
- 阅读状态：进行中。下面为原始标注材料，正式解读需核对论文后另行整理。
<!-- zotero:metadata:end -->

<!-- zotero:annotation-EU7335CZ:start -->
## 标注 EU7335CZ · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=EU7335CZ&page=1) · PDF `SBISCM3P` · highlight

**原文**

> Dynamic sparse attention limits the KV pages selected by each query, but a small support does not necessarily yield efficient GPU work.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 1/10
动态稀疏注意力限制每个 query 所选择的 KV page 数量，但较小的支持集（support，即该 query 选中的 KV 集合）并不必然带来高效的 GPU 执行。
</pre>
<!-- zotero:annotation-EU7335CZ:end -->

<!-- zotero:annotation-RB5LIETD:start -->
## 标注 RB5LIETD · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=RB5LIETD&page=1) · PDF `SBISCM3P` · highlight

**原文**

> Query unions share page loads and populate Tensor Core tiles; their cost depends on which queries are grouped together.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 2/10
Query union（查询联合执行）通过共享 page 加载、填充 Tensor Core 计算 tile 来提高效率；其执行成本取决于哪些 query 被分到同一组。
</pre>
<!-- zotero:annotation-RB5LIETD:end -->

<!-- zotero:annotation-P6LPUV4U:start -->
## 标注 P6LPUV4U · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=P6LPUV4U&page=1) · PDF `SBISCM3P` · highlight

**原文**

> We present PAGEWEAVER, an execution design that uses selected-page affinity to assemble query groups while preserving each query’s original support and complete output ownership.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 3/10
我们提出 PAGEWEAVER：一种利用所选 page 集合的相似性来组织 query 分组的执行设计，同时保留每个 query 原有的支持集，以及对其完整输出的计算归属。
</pre>
<!-- zotero:annotation-P6LPUV4U:end -->

<!-- zotero:annotation-BQJPKURB:start -->
## 标注 BQJPKURB · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=BQJPKURB&page=1) · PDF `SBISCM3P` · highlight

**原文**

> A bounded GPU search produces query IDs, and an ID-aware two-CTA kernel consumes them without materializing reordered Q tensors or cross-page partial outputs.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 4/10
一次有界的 GPU 搜索生成 query ID，随后由能够按这些 ID 访问 query 的双 CTA（线程块）kernel 执行，无需实际生成重排后的 Q 张量，也无需生成供跨 page 合并的部分输出。
</pre>
<!-- zotero:annotation-BQJPKURB:end -->

<!-- zotero:annotation-HNCBIBUP:start -->
## 标注 HNCBIBUP · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=HNCBIBUP&page=1) · PDF `SBISCM3P` · highlight

**原文**

> A direct KV-page union implementation provides a complementary design study of nonlocal reuse and reduction cost.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 5/10
我们还实现了直接的 KV-page union，作为补充设计方案，用于研究非局部复用与归约成本。
</pre>
<!-- zotero:annotation-HNCBIBUP:end -->

<!-- zotero:annotation-EUHT4XUT:start -->
## 标注 EUHT4XUT · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=EUHT4XUT&page=1) · PDF `SBISCM3P` · highlight

**原文**

> With FP8 KV throughout, the H200 Union8 implementation achieves a 1.70× geometric-mean complete-call speedup over the measured FlashInfer path on six captures.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 6/10
在全程采用 FP8 KV 的条件下，H200 上的 Union8 实现在六份捕获的算子输入上，相比所测的 FlashInfer 执行路径，实现了完整调用加速比 1.70 倍的几何平均值。
</pre>
<!-- zotero:annotation-EUHT4XUT:end -->

<!-- zotero:annotation-WT6VK4JC:start -->
## 标注 WT6VK4JC · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=WT6VK4JC&page=1) · PDF `SBISCM3P` · highlight

**原文**

> Online regrouping further lowers latency by 3.26–7.66% on five selected 64K-context captures.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 7/10
在五份选定的 64K 上下文捕获输入上，在线重新分组进一步将延迟降低了 3.26%–7.66%。
</pre>
<!-- zotero:annotation-WT6VK4JC:end -->

<!-- zotero:annotation-ND43MJAR:start -->
## 标注 ND43MJAR · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=ND43MJAR&page=1) · PDF `SBISCM3P` · highlight

**原文**

> Whole-model prefill throughput is 7.88–14.36% above the tested native path; the incremental regrouping benefit is smaller, with observed median gains of 0.47–0.73% at 32K/64K and regressions at 8K.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 8/10
整模型 prefill 吞吐量比所测原生路径高出 7.88%–14.36%；重新分组本身带来的增量收益较小，在 32K/64K 上下文下观察到的吞吐量中位数增幅为 0.47%–0.73%，而在 8K 上下文下出现性能下降。
</pre>
<!-- zotero:annotation-ND43MJAR:end -->

<!-- zotero:annotation-MS5H6RD7:start -->
## 标注 MS5H6RD7 · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=MS5H6RD7&page=1) · PDF `SBISCM3P` · highlight

**原文**

> A B300 comparison identifies cases where preparation cost and a stronger native kernel remove the advantage.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 9/10
B300 上的对比揭示了这样的情形：准备开销与更强的原生 kernel 会使这一优势消失。
</pre>
<!-- zotero:annotation-MS5H6RD7:end -->

<!-- zotero:annotation-NULBYJ7K:start -->
## 标注 NULBYJ7K · 第 1 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=NULBYJ7K&page=1) · PDF `SBISCM3P` · highlight

**原文**

> These results separate execution-group reuse from the complete cost of exploiting it online.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 翻译｜Abstract 10/10
这些结果区分了执行分组所能提供的复用收益，以及在线利用这种复用所需付出的完整成本。
</pre>
<!-- zotero:annotation-NULBYJ7K:end -->

<!-- zotero:annotation-4AUYH778:start -->
## 标注 4AUYH778 · 第 2 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=4AUYH778&page=2) · PDF `SBISCM3P` · highlight

**原文**

> Consider one request and one KV head; its associated query heads share a selected-page set.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜1. 输入与优化边界
固定一个 request 和一个 KV head。S_i 是 query 位置 i 已经选好的、去重且有效的逻辑 page 集合；同一 KV head 对应的多个 Q heads 共享这个集合。PageWeaver 接收既有 Top-K 结果，不重新训练或替换 selector。数据流为：Top-K pages → regroup 产生 query IDs → 构造 page union 与 membership mask → ID-aware attention → 写回原始输出位置。这里的 g=8 是 8 个 query 位置，不是 8 个 Q heads。
</pre>
<!-- zotero:annotation-4AUYH778:end -->

<!-- zotero:annotation-2BIFS6UT:start -->
## 标注 2BIFS6UT · 第 2 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=2BIFS6UT&page=2) · PDF `SBISCM3P` · highlight

**原文**

> Invalid IDs contribute no edges, duplicate IDs do not duplicate probability mass, and empty support produces zero output.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜2. 式 (1)–(2)：实际计算的 attention
对 query i，允许的 token 集合 A_i 满足三项：floor(t/P) 属于 S_i、0≤t&lt;L_i、t≤c_i。P 为 page 大小，L_i 为有效上下文长度，c_i 为原始因果位置。对每个 Q head，先算 z_it=q_i·k_t/√d，再在 A_i 上做 softmax，输出 o_i=Σ exp(z_it)v_t / Σ exp(z_it)。并集只是共同遍历范围；每行 softmax 的分母仍仅包含该 query 允许的 token。重复 page 必须去重，空支持集输出 0。
</pre>
<!-- zotero:annotation-2BIFS6UT:end -->

<!-- zotero:annotation-SS2BST9I:start -->
## 标注 SS2BST9I · 第 2 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=SS2BST9I&page=2) · PDF `SBISCM3P` · highlight

**原文**

> Masks preserve support; masked Tensor Core slots are not generally free.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜3. Query Union 与浪费的来源
一组 G 的 page 并集 U_G=∪_{i∈G}S_i。为每个执行槽位 r 和并集 page p 保存 membership=1[p∈S_{π(r)}]。同组 query 共用 page 遍历，但不共用 softmax 分布。例如 S0={1,4,7}、S2={1,4,9}，union={1,4,7,9}；q0 在 page9 被 mask，q2 在 page7 被 mask。矩阵 tile 中被 mask 的位置不一定免除 Tensor Core 工作，因此把 page 集合相近的 query 放在一起，可减少 union 扩张与无效 tile 槽位。
</pre>
<!-- zotero:annotation-SS2BST9I:end -->

<!-- zotero:annotation-R8ERT3VG:start -->
## 标注 R8ERT3VG · 第 3 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=R8ERT3VG&page=3) · PDF `SBISCM3P` · highlight

**原文**

> minimizing the full union need not minimize both subgroup rounds or balance the two CTAs.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜14. 优化目标与性能口径
当前 regroup 贪心减少整体 8-query union；它没有直接最小化两个 4-query CTA 的工作和 |U_G0|+|U_G1|，也不保证负载平衡。并集变小还需抵消搜索、metadata、间接寻址及局部性损失。复现建议（AI 推论）：固定同一 attention 后端和精度，比较原始 IDs、预计算 regroup IDs、每次在线 regroup 三条路径；完整调用净收益为 T_original−T_online。不要把更换 kernel 的收益全部记成 regroup 收益。
</pre>
<!-- zotero:annotation-R8ERT3VG:end -->

<!-- zotero:annotation-RV6TS7V4:start -->
## 标注 RV6TS7V4 · 第 3 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=RV6TS7V4&page=3) · PDF `SBISCM3P` · highlight

**原文**

> Within a window of W queries, Algorithm 1 grows each group by minimizing the marginal union increase:

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜4. Regroup 的核心打分：式 (6)
候选 j 的代价 Δ_j=|S_j\U|，即加入当前组后新增多少 page；选择代价最小者，同分按原始 query ID 从小到大。U 是当前整组的并集，选中 j 后必须更新 U←U∪S_j，再重新计算剩余候选的代价。它不是只比较候选与 seed，也不是先构造所有 query 两两相似度矩阵。若所有 S_j 大小相同，最小化新增量等价于最大化与当前 U 的交集；支持集大小不同时应保留新增量定义。
</pre>
<!-- zotero:annotation-RV6TS7V4:end -->

<!-- zotero:annotation-AE4527V9:start -->
## 标注 AE4527V9 · 第 3 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=AE4527V9&page=3) · PDF `SBISCM3P` · highlight

**原文**

> Windows remain within request boundaries and within the current prefill chunk.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜6. 搜索范围与在线含义
W=64/128 是候选搜索窗口大小；g=8 是最终执行组大小，两者不同。窗口不跨 request，也不跨当前 prefill chunk。每次调用根据本次 Top-K 重建 π，不复用上一个请求或旧调用的分组。窗口限制了搜索成本和 query 地址跳跃距离；普通单 token decode 中，单请求没有足够 query 位置直接使用同样的分组方式。
</pre>
<!-- zotero:annotation-AE4527V9:end -->

<!-- zotero:annotation-RYTDDP2Q:start -->
## 标注 RYTDDP2Q · 第 3 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=RYTDDP2Q&page=3) · PDF `SBISCM3P` · highlight

**原文**

> The permutation is bijective within each request.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜10. 为什么 regroup 保持 attention 语义
执行槽位 r 读取 Q[π(r)]，使用该原始 query 的 S_{π(r)}、因果位置 c_{π(r)} 和 request 映射，最终写 O[π(r)]。π 在每个 request 内是双射，所以每个 query 恰好执行一次；支持集与因果掩码不变，各行 softmax 独立。在精确算术下 attention 相同；实际 FP8 量化和累积顺序的误差须另做验证，不能由支持集保持推出任意实现逐位一致。
</pre>
<!-- zotero:annotation-RYTDDP2Q:end -->

<!-- zotero:annotation-X7QCCZLP:start -->
## 标注 X7QCCZLP · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=X7QCCZLP&page=4) · PDF `SBISCM3P` · highlight

**原文**

> Windowed page-affinity grouping

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Regroup 的动态增量目标
候选 j 的代价是 |S_j\U|，其中 U 为当前整组已选成员的 page 并集。每选入一个成员，都更新 U 并重新评估剩余候选。因此一个 query 即使与 seed 没有交集，也可能因与后续选入成员共享 page 而变得更便宜。详细逐步演算见同位置的“AI 解读｜5. Algorithm 1 逐步执行”；示例原顺序两组的逻辑 page 访问数是 5+5=10，重分组后是 4+3=7。
</pre>
<!-- zotero:annotation-X7QCCZLP:end -->

<!-- zotero:annotation-ZT2E25PW:start -->
## 标注 ZT2E25PW · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=ZT2E25PW&page=4) · PDF `SBISCM3P` · highlight

**原文**

> Windowed page-affinity grouping

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜5. Algorithm 1 逐步执行
对同一 request、同一 prefill chunk 中的每个窗口 B：
1. R←窗口内尚未分配的 query IDs。
2. 取 i=min(R) 为新组 seed；G=[i]，U=S_i；从 R 删除 i。
3. 在 R 中选使 (|S_j\U|, j) 字典序最小的 j。
4. G 追加 j，U←U∪S_j，从 R 删除 j。
5. 重复 3–4，直到 |G|=8 或 R 为空。
6. 把 G 追加到输出排列 π；若 R 非空，重置 union 并开始下一组。
教学例（g=3，仅为演示，论文用 g=8）：S0={1,2}, S1={8,9}, S2={2,3}, S3={3,4}, S4={8,10}, S5={9,10}。seed=0，候选代价依次为 2,1,2,2,2，先选 2；U 更新为 {1,2,3} 后，3 的代价从 2 降到 1，因此再选 3。第二组为 [1,4,5]，输出 π=[0,2,3,1,4,5]。组间逻辑 page 访问总数由原顺序的 5+5=10 降为 4+3=7，所有 S_i 保持不变。
这是有顺序依赖的贪心算法，不保证全局最优。
</pre>
<!-- zotero:annotation-ZT2E25PW:end -->

<!-- zotero:annotation-69BMX58K:start -->
## 标注 69BMX58K · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=69BMX58K&page=4) · PDF `SBISCM3P` · highlight

**原文**

> One grouping CTA owns a window. W64 and W128 launch 64 and 128 threads; each query thread represents its Top16 pages with sixteen 32-bit bitmap words.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜7. GPU 上怎样计算 regroup
一个 CTA 负责一个窗口，每个线程负责一个 query。把 Top16 page IDs 编码为 512-bit bitmap（16 个 uint32；不是一个 word 对应一个 Top-K 槽位）。第 p 位表示是否选中逻辑 page p。候选代价为 Σ_word popcount(bitmap_j[word] &amp; ~bitmap_U[word])。各线程并行算代价，warp reduction 加 shared-memory reduction 选出最小 (代价, 原始ID)，更新 union 后进入下一轮。窗口间并行；同一窗口内选取下一组员依赖上一轮更新后的 U。每满 8 个 query 重置 union。输出只有 int32 query-ID 数组，不复制或重排 Q 张量。
</pre>
<!-- zotero:annotation-69BMX58K:end -->

<!-- zotero:annotation-TT5ABQLD:start -->
## 标注 TT5ABQLD · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=TT5ABQLD&page=4) · PDF `SBISCM3P` · highlight

**原文**

> The current capacity is 512 logical pages, or 65,536 tokens at the H200 page size of 128. Larger contexts use an identity permutation.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜8. 复现时要保留的边界条件
当前 bitmap 的 page ID 容量为 512；page size=128 时对应 65,536 tokens。超出容量回退为原始 ID 顺序，不继续做该 bitmap regroup。尾窗口和不足 8 个 query 的尾组仍需覆盖所有 query 一次且仅一次；不允许遗漏、重复或跨 request 混组。这里的 64K 是可表示上下文容量，不是候选窗口 W。
</pre>
<!-- zotero:annotation-TT5ABQLD:end -->

<!-- zotero:annotation-AWLR3K97:start -->
## 标注 AWLR3K97 · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=AWLR3K97&page=4) · PDF `SBISCM3P` · highlight

**原文**

> The union-preparation kernel gathers original Top-K rows through these IDs, deduplicates group pages, and emits membership masks.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜9. Regroup 与 Union preparation 是两个步骤
Regroup 只给出排列 π。随后 union-preparation 按 π 每 8 个位置成组，通过原始 IDs 读取 Top-K 行，生成去重 page 列表 U_G 及各执行槽位的 membership mask。membership bits 对应重排后的执行槽位；Q 读取、因果坐标、request 映射、输出地址使用原始 query ID。论文说明了这种元数据生成的职责，没有在此给出排序/去重的全部底层代码，不应自行认定某一种实现。
</pre>
<!-- zotero:annotation-AWLR3K97:end -->

<!-- zotero:annotation-EHVZSHC9:start -->
## 标注 EHVZSHC9 · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=EHVZSHC9&page=4) · PDF `SBISCM3P` · highlight

**原文**

> Four queries times sixteen local Q heads provide 64 rows per CTA, mapping to an M64 Tensor Core tile.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜11. Union8 怎样映射到两个 CTA
一个 cluster 含两个 128-thread CTA。CTA0 负责组内前 4 个 query 位置，CTA1 负责后 4 个。每个位置的 16 个本地 Q heads 展开成矩阵行：4×16=64 行，匹配 M64 tile。cluster 遍历 8-query page union，两个 CTA 各自应用所属 4 个 query 的 membership/causal mask。每个 query 的完整 softmax 和输出累积都归属于一个 CTA，无需将该 query 的跨 page 部分输出写到全局再 combine。
</pre>
<!-- zotero:annotation-EHVZSHC9:end -->

<!-- zotero:annotation-5ALRMYYY:start -->
## 标注 5ALRMYYY · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=5ALRMYYY&page=4) · PDF `SBISCM3P` · highlight

**原文**

> A CTA with no selected query on a page may skip its arithmetic but must still respect this lifetime protocol.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜12. KV 共享与同步
Figure 3 描述 producer 将 KV page multicast 到两个 CTA 对应的本地 shared-memory slots。两个 slot 轮换，ready 表示可以读，所有计划内消费者完成后才允许覆盖复用。某 CTA 的 4 个 query 都没选中该 page 时可跳过其计算，但必须正确参与缓冲区生命周期协议，否则可能出现过早覆盖或等待不结束。
</pre>
<!-- zotero:annotation-5ALRMYYY:end -->

<!-- zotero:annotation-QQ9IZDRS:start -->
## 标注 QQ9IZDRS · 第 4 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=QQ9IZDRS&page=4) · PDF `SBISCM3P` · highlight

**原文**

> The H200 path accepts BF16 Q and FP8 E4M3 KV.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜13. QK → softmax → PV 的实际精度
H200 路径将 BF16 Q 按 head-row 量化后做 FP8 QK；每行分别维护 FP32 running softmax 统计。逐 page 更新每行的最大值、指数和、加权 V 累积（这是 online softmax，不同于 online regroup）。概率经过缩放并转 E4M3 后用于 FP8 PV，补偿尺度进入归一化，最后输出 BF16。原顺序 Union8 与 regrouped Union8 使用相同精度方案。每个 CTA 完成自己所属 query 后直接写原始输出行。
</pre>
<!-- zotero:annotation-QQ9IZDRS:end -->

<!-- zotero:annotation-SS2UKVF2:start -->
## 标注 SS2UKVF2 · 第 5 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=SS2UKVF2&page=5) · PDF `SBISCM3P` · highlight

**原文**

> Each CTA has four warps, four queries, and two local 32 KiB KV slots.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3①：执行单元与本地双缓冲
一个 cluster 有两个 CTA，各含 4 warps（128 threads）。CTA0 负责 IDs[0:4]，CTA1 负责 IDs[4:8]；ID 是 regroup 后的执行顺序，仍指向原始 query。每 CTA 的 4 个 query × 16 个本地 Q heads = 64 行，匹配 M64。图上 KV slot 0/1 标注 per CTA：每个 CTA 各有两个 32 KiB 本地槽，不是两个 CTA 合起来只有两个槽。CTA0/thread0 发起 multicast，向两边对应本地槽分发 KV。两槽合计每 CTA 64 KiB，仅指 KV staging，不是 kernel 总 shared-memory 用量。
</pre>
<!-- zotero:annotation-SS2UKVF2:end -->

<!-- zotero:annotation-DKK4R8LS:start -->
## 标注 DKK4R8LS · 第 5 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=DKK4R8LS&page=5) · PDF `SBISCM3P` · highlight

**原文**

> Event 1 marks KV readiness; event 2 permits slot 0 to be refilled only after both CTAs release page 0.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3②：ready 与可覆盖是两种同步条件
沿时间轴：Load0 将 page0 放入两边的 slot0；事件①表示数据已准备好，两个 CTA 才能消费。计算 page0 的同时可向 slot1 加载 page1。等两个 CTA 都完成 page0 并释放 slot0，事件②才允许把 page2 写入 slot0；此时可与 page1 的计算重叠。不能只等生产者搬完，也不能只等其中一个 CTA 算完就覆盖槽。这里 page0/1/2 表示示意遍历中的先后页面，不要求实际物理 page ID 连续。
</pre>
<!-- zotero:annotation-DKK4R8LS:end -->

<!-- zotero:annotation-8V64JUVG:start -->
## 标注 8V64JUVG · 第 5 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=8V64JUVG&page=5) · PDF `SBISCM3P` · highlight

**原文**

> The same warps execute QK, softmax, and PV, retaining each query’s state and original output ID.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3③：同一 CTA 持有 Query 的完整状态
每个 CTA 对所属 query 逐 page 执行 QK→带 membership/causal mask 的 online softmax→PV 累积。跨 page 保留 running max、归一化所需的指数和与输出累加状态；图中每个 Softmax 方块不是对该页单独归一化后直接相加。处理新页时需要按更新后的最大值重缩放已有累积。全部 page 结束后归一化并直接写回原始 query ID 对应的 O，无需合并两个 CTA 的 partial outputs。同一批 warps 依次执行 QK、softmax、PV；颜色不同不代表专门分配了不同的计算 warp。
</pre>
<!-- zotero:annotation-8V64JUVG:end -->

<!-- zotero:annotation-FFFNL3J8:start -->
## 标注 FFFNL3J8 · 第 5 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=FFFNL3J8&page=5) · PDF `SBISCM3P` · highlight

**原文**

> Empty subgroups still honor buffer lifetime.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3④：跳过计算不等于退出同步
若某页属于整个 Union8，但 CTA1 的四个 query 都没有选中它，CTA1 可以跳过该页 QK/softmax/PV 算术；仍须按协议处理缓冲区的 ready/release 生命周期，不能破坏 producer 对所有计划消费者的等待。否则可能发生槽过早覆盖或等待不结束。共享的是 page 搬运与遍历，各 query 的实际支持集不变。
</pre>
<!-- zotero:annotation-FFFNL3J8:end -->

<!-- zotero:annotation-XY5G4LM2:start -->
## 标注 XY5G4LM2 · 第 5 页
[回到原文](zotero://open-pdf/library/items/SBISCM3P?annotation=XY5G4LM2&page=5) · PDF `SBISCM3P` · highlight

**原文**

> Widths are schematic, not measured durations.

**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**

<pre v-pre style="white-space: pre-wrap; overflow-wrap: anywhere;">
AI 解读｜Figure 3⑤：图中能读出什么、不能读出什么
横轴从左到右表示依赖顺序；深绿是 KV 搬运、浅绿是 page 驻留并可被消费、黄是 QK/PV、蓝是 softmax。可以读出双缓冲如何让下一页搬运与当前页计算重叠；不能根据蓝块比黄块宽就判断 softmax 是瓶颈，也不能认为两个 CTA 总是严格同时完成。实际 overlap、等待和瓶颈需由 profiler 测量。
</pre>
<!-- zotero:annotation-XY5G4LM2:end -->

<!-- zotero:note-8KIH2AJF:start -->
## Zotero 子笔记 8KIH2AJF

[打开笔记](zotero://select/library/items/8KIH2AJF)

Comment: 11 pages, 9 figures, 2 tables. Zhiyuan Li and Zihan Li contributed equally
<!-- zotero:note-8KIH2AJF:end -->
