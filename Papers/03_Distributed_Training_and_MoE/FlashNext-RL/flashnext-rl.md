# FlashNext-RL：QSA kernel 的 GQA 分组、反向 gather 与跨 query 复用

QSA 的难点不只是减少 attention 的计算量，还要把每个 query 动态选择的 key 映射成能有效使用 Tensor Core 的矩阵块。FlashNext-RL 的优化路径是：先用 GQA 原生分组填充 MMA 行并共享 KV 加载，再针对反向的 Q、dO 重读瓶颈，协同设计 gather、布局与流水线。[FlashNext-RL v1，§3.2.7，pp. 8–9](https://arxiv.org/pdf/2610.28998v1#page=8)

## 为什么通用 dense 或 MLA kernel 不合适

QSA 的主 attention 有 24 个 query heads、2 个 KV heads，每个 KV group 对应 12 个 query heads；这里的 12:1 不能与 indexer 的 4 个 query heads 混淆。Context parallelism 还会切分 query heads、复制 KV heads，因此模型头数也不能直接当作每个 rank 的局部形状。[§3.2.3，p. 7](https://arxiv.org/pdf/2610.28998v1#page=7)

算法上，indexer 为每个 query 最多选择 512 个、每个含 4 个 key 的 micro-block。作者指出，序列超过 2,048 tokens、开始执行块选择后，直接运行 dense attention 会计算不同的函数。仅套一个较粗的 block-sparse mask 也不够：真实数据中，128 个连续 query 的访问并集已覆盖 90–94% 的因果 key tiles，能够跳过的 tile 很少。[§1，p. 1；§3.2.7，p. 8](https://arxiv.org/pdf/2610.28998v1#page=8)

作者评测的 cuDNN DSA kernel 面向 DeepSeek 的 MLA 布局。适配时拼接 `[K|V]` 与 `[Q|0]`，并对每个 KV group 的 12 个 query heads 补零；结果前向的 64 个 head 槽中有 52 个空槽，反向仅约 95 TFLOP/s。这是本文所测实现与形状的结果，不能推广成所有 cuDNN sparse attention 的限制。[§3.2.7，pp. 8–9](https://arxiv.org/pdf/2610.28998v1#page=8)

## 五个 query 一组：填满 MMA 行，同时复用 KV

GQA-native Triton 将五个连续 query 各自的 12 个 heads 展平成 60 行，放进 64-row MMA tile。它遍历五个 query 所选块的并集，共享 KV gather，再用逐 query 的 membership mask 保留各自选择的块。因此，共享加载不等于让所有 query 使用同一个 attention 集合。[§3.2.7，p. 9](https://arxiv.org/pdf/2610.28998v1#page=9)

作者观察到，五个 query 的块并集约为单个 query 选择量的两倍，gather 流量约降至逐 query 读取的 0.41 倍。**AI 数学解释：**设所选块集合为 $B_i$，忽略缓存、元数据与传输粒度，理想 KV 加载比例为：

$$
R_{\mathrm{load}}
\approx \frac{\left|\bigcup_{i=1}^{5}B_i\right|}
{\sum_{i=1}^{5}|B_i|}.
$$

若每个集合大小为 $b$，并集约为 $2b$，该比例就是约 0.4。五个等大集合完全相同时为 0.2，完全不重叠时为 1；0.41 既不是两两重叠率，也不能推出全组交集大小，更不表示 kernel 时间同比下降。

**AI 解读：**60/64 的行填充率为 93.75%，但并集中的块未必被每一行选中，membership mask 仍会屏蔽部分计算。扩大分组可能增加加载复用，也可能增加无效计算；五个 query 是本文结合 12-head GQA 与 64-row MMA 的选择，原文没有证明其普遍最优。

**用户保留的疑问：**这种高重叠只存在于作者的训练数据，还是具有更广泛的规律？[原始问题](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/97#issuecomment-6890513141)尚不能由 FlashNext-RL 本身回答：§3.2.7 没有给出跨数据集、跨层的系统性重叠统计。后文的 QUILT、ADIndex 提供相关经验依据，但不保证 QSA 始终获得 0.41。

## 反向按 key 归约，为什么又变成 gather 瓶颈

论文明确按 key 遍历的是 dK/dV backward：以 key tile 为索引构建 CSR，并按固定顺序归约。可将 CSR 理解成反向邻接表，列出每个 key tile 被哪些 query 选择；不能由此推断整个反向都按 key 遍历。[§3.2.7，p. 9](https://arxiv.org/pdf/2610.28998v1#page=9)

**AI 数学解释：**固定稀疏选择，将同一 KV group 的 query-position/head 展平成行。令 $\alpha$ 为 attention scale，$S$ 为缩放后的 logits，$P$ 为只在选中且因果可见位置归一化的 softmax 概率，其他位置概率为零。标准 attention 梯度为：

$$
\begin{aligned}
S &= \alpha QK^{\mathsf T},\\
dP &= dO V^{\mathsf T},\\
D_r &= \sum_j P_{rj}dP_{rj},\\
dS_{rj} &= P_{rj}(dP_{rj}-D_r),\\
dV &= P^{\mathsf T}dO,\\
dK &= \alpha dS^{\mathsf T}Q.
\end{aligned}
$$

最后两式沿 query/head 方向求和，说明一个 key 的梯度需要汇总所有选择它的行。让输出 key tile 持续累加符合这个归约方向，但同一份 Q、dO 会被不同 key tile 反复读取。作者报告在 64K 序列上，约 130 ms 的反向中，dK/dV 占 97 ms，并受这种重读带来的带宽限制。这些公式用于解释数据依赖，不是作者源码的逐行复原。[§3.2.7，p. 9](https://arxiv.org/pdf/2610.28998v1#page=9)

## CuTe-DSL：一次 gather 支撑两轮 MMA

作者先将 Triton gather 改为 TMA 并使用三级流水线，再为 sm100 编写 CuTe-DSL kernel。最终版采用以下组织：[§3.2.7，p. 9](https://arxiv.org/pdf/2610.28998v1#page=9)

- **加载与分块：**CSR 每 tile 覆盖 64 个 key，每步处理五个 query 的 12 个 heads，即 60 行；`cp.async` 经两级环形缓冲直接 gather 到 swizzled MMA tile。64-key 是 kernel 处理粒度，算法选择粒度仍是 4-key micro-block。
- **Warp 分工：**4 个 gather warps 搬运数据并暂存逐行元数据，4 个 compute warps 计算概率 P 和梯度 dS，另有 1 个 MMA warp 发射矩阵乘。
- **累加器：**全部放在 TMEM 中，包括双缓冲的 S、dP，以及分别存放梯度矩阵转置 $dV^{\mathsf T}$、$dK^{\mathsf T}$ 的两半，共占 512 列。
- **布局复用：**MN-major 操作数直接作为已 gather 的 K-major tile 的视图，每行只 gather 一次。这里的 K-major 指 GEMM 归约维布局，不是 attention 的 key 张量名称。

从梯度公式看，同一批 Q、dO 先用于计算 S、dP，经 compute warps 得到 P、dS 后，又用于更新 dV、dK。两轮乘法改变了它们在矩阵中的维度角色，布局视图让第二轮继续使用同一份加载结果。

MMA warp 优先发射第 $i-1$ 步的 dV/dK 更新，再发射第 $i$ 步的 S/dP 计算。**AI 解读：**旧步的更新是对旧 gather 槽的最后一轮使用，提前安排它可以缩短槽位的存活时间，让 producer 提早获得空槽。不过，发射异步 MMA 不等于数据已读完，覆写前仍须确认相关读取完成。论文没有提供这里的 barrier、phase、wait 代码，具体同步协议尚未核查。

中间版的 TMA＋三级流水线与最终版的 `cp.async`＋两级环形缓冲是两种实现。最终收益同时涉及布局、warp 分工和调度，不能用整体加速单独证明 `cp.async` 优于 TMA。

## 性能证据：kernel、每层 attention 与整模型分开看

下表来自表 7：**单张 B200、单条序列、真实 layer-7 selections**。前两列计每层 attention 前向＋反向，最后一列只计 dK/dV kernel。[§3.2.7、表 7，p. 9](https://arxiv.org/pdf/2610.28998v1#page=9)

| 实现 | 16K 前向＋反向 | 64K 前向＋反向 | 64K dK/dV |
| --- | ---: | ---: | ---: |
| cuDNN DSA，MLA kernel＋head 补零 | 53.7 ms | 219.8 ms | — |
| GQA-native Triton | 33.9 ms | 164.5 ms | 97 ms |
| dK/dV 改为 TMA gather | 29.0 ms | 138.5 ms | 76.2 ms |
| dK/dV 改为 CuTe-DSL | 20.7 ms | 106.4 ms | 46.7 ms |

CuTe 相对 Triton TMA 的 dK/dV 加速约 1.63 倍；按表中数值计算，每层前向＋反向加速约 1.30 倍。作者将 gather 与 MMA 分别单独运行时测得约 41 ms、40 ms，46.7 ms 接近这两个经验参照，但它们不是 B200 的理论硬件下限。

整模型吞吐另以非 padding token/s/GPU 报告：3,412 → 3,490 → 3,642，作者标为 TMA 提升 2.4%、CuTe 再提升 4.4%。**数值核对：**前一步按展示值计算约 2.29%，后一步约 4.36%；此外，TMA 的 dK/dV 正文写 76.5 ms、表 7 写 76.2 ms。原文未解释这两处差异，不能自行指定其中一个值为笔误。[§3.2.7，p. 9](https://arxiv.org/pdf/2610.28998v1#page=9)

## Top-K 重叠的相关证据：QUILT 与 ADIndex

两篇都利用同一层内相邻 query 的重叠，但优化位置不同：QUILT 优化选完 Top-K 后的 sparse attention 执行；ADIndex 减少 indexer 对完整历史的重复扫描。层间统计差异不等于跨层复用相同索引。

### QUILT：交集决定哪些 KV 可以共同执行

[QUILT: Rethinking Sparse-Attention Prefill through Shared Query Execution](https://arxiv.org/html/2610.11134v1#S1) 的 §1、图 1 在 GLM-5.3 的 Qasper、GovReport 输入上比较层与分组大小。作者观察到较浅层、较小分组通常共享更强，组变大时全组共同部分减少；其图中全组共享比例可用以下统一记号表达。设同层每个 query 的 Top-K 集合为 $T_i$，大小为 $k$，组大小为 $G$：

$$
r_{\mathrm{common}}
= \frac{\left|\bigcap_{i=1}^{G}T_i\right|}{k}.
$$

这个指标衡量全组共同部分，不是以并集为分母的 Jaccard，也不是前文的加载比例。QUILT 因而采用级联共享：先全组交集，再子组交集，最后独有部分；共享 KV 加载、反量化一次，各 query 仍计算自己的 attention。SCSD 用排序、移位和比较拆分集合，并与 attention 流水重叠，避免集合处理抵消复用收益。[§3.1–3.3](https://arxiv.org/html/2610.11134v1#S3)

尾 tile 不满时可将条目下推到更细一级；最终独有部分还会裁掉低重要性尾部，因此完整方案含近似步骤。评测硬件为 Ascend 910C，不能作为 B200 的性能证据。[§3.4、§4.1](https://arxiv.org/html/2610.11134v1#S3.SS4)

### ADIndex：并集估计候选容量，coverage 检查是否选对

[ADIndex: Layer-Adaptive Sparse Attention Indexing via Group-Level Distillation](https://arxiv.org/html/2611.12956v1#S1) 图 1(b) 固定每 query 选择 2,048 项，在 100 条约 128K-token 序列的完整 query 组上统计每层的**最大并集大小**，组大小为 4、8、16。组大小 16 时，不同层为 4,486–22,688，低于无重叠上界 32,768，但差异很大。这不是平均重叠率。

沿用上面的记号，§4.1 式 (4) 可写为：

$$
U_{\ell,G}^{\max}
= \max_{g\in\mathcal G_{\mathrm{cal},G}}
\left|\bigcup_{i\in g}T_{\ell,i}\right|.
$$

其中 $\mathcal G_{\mathrm{cal},G}$ 是校准集中的有效 query 组，$\ell$ 是层号。它估计容纳原选择需要多少容量，不能保证未见数据也满足。ADIndex 据此逐层选择组大小与 bank 容量，再蒸馏 group indexer：每组扫描一次公共历史生成共享候选 bank，原 indexer 在 bank 加上当前 query 新可见 tokens 后逐 query 重打分，选最终 Top-K。[§4.1–4.3](https://arxiv.org/html/2611.12956v1#S4.SS1)

**AI 形式化解释：**若最终候选集合为 $C_i$，原 indexer 的选择覆盖率为：

$$
\mathrm{coverage}_i=\frac{|T_i\cap C_i|}{k}.
$$

容量够大仍可能装入错误候选，所以并集统计不能代替 coverage 验证。图 1(c) 比较的是蒸馏后的共享 bank 相对冻结 mean-pooling 基线的 coverage 增益；上式使用增补后的候选集合，需区分统计对象。只有候选包含全部原 Top-K，且打分、并列分数处理一致，局部重选才能恢复原结果。[图 1(c)、§4.3](https://arxiv.org/html/2611.12956v1#S4.SS3)

### 三个指标回答不同的问题

**AI 算例：**三个 query 分别选择集合 $\{a,b\}$、$\{b,c\}$、$\{a,c\}$，共同交集为空，但并集仅有三个元素，逐 query 读取则需六次。全组交集为零仍有子组复用，理想加载比例为 1/2；实际能否兑现还取决于 tile 与调度。

因此，ADIndex 的并集统计更接近“QSA 的 0.41 是否稳定”，QUILT 的执行机制更接近“kernel 怎样利用重叠”。这是结合三篇论文的 **AI 判断**。两篇相关工作都不能代替 QSA 在真实 selections 上按层、query 位置、分组大小与数据集的测量；用户关于重叠普适性的疑问仍保留这一证据边界。
