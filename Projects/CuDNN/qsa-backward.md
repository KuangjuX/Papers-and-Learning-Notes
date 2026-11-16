---
tags:
  - projects/CuDNN
  - topics/sparse-attention
  - topics/GPU-performance
aliases:
  - CuDNN QSA backward
  - QSA Two-Pass Backward
---

# cuDNN QSA Backward：两遍计算与 Tensor Core 映射

QSA backward 中，dQ 按 query 归约，而 dK/dV 要汇总所有选中同一 key 的 query 的贡献。cuDNN 的 `cudnn.QSA.two_pass` 将 sparse backward 分成 query-major 和 key-major：前者计算 dQ 并保存 P/dS，后者沿 block-to-query 倒排索引收集记录、Q 和 dO，局部累计 dK/dV。这以中间记录的显存读写换取概率复用和较少的零散梯度累加。[实现说明][design]

下文对应 `NVIDIA/cudnn-frontend` [PR #1781][pr] 的提交 [`f6319949ed491237ae983006711883a7f7339795`][revision]。该版本是 SM100/SM103 上的私有 backend，不能等同于所有公开 `cudnn.ops.qsa_*` 路径；#1781 在已有两遍实现上增加了 12Q/1KV、packed sequences、有界记录窗口与原生 FP32 saved state。[接口约定][api]

## 输入与反向计算

该实现固定 head dimension 为 256，每个 KV head 对应 12 个 query heads，支持 12Q/1KV 和 24Q/2KV。Q、K、V、dO 为 BF16，softmax scale 为 $\alpha=1/16$。Forward 保存的输出 O 与自然对数 LSE 有两种配对：FP32 O 对应 `[Hq, T]` LSE，BF16 O 对应 `[T, Hq]` LSE；kernel 直接按相应布局读取。[`api.py` L14–55][api]

`topk_idxs` 是已经选好的 token 索引，backward 不计算 Top-K。序列内位置为 $p$ 的 query 包含 $\min(\lfloor(p+1)/4\rfloor,512)$ 个不同的完整四-token block，再接 $(p+1)\bmod4$ 个 causal tail tokens，最后以 `-1` 补齐。载体宽度可为 2051 或 2052；后者多一个始终无效的尾槽。这不是任意 tokenwise sparse mask 的接口。[输入格式][design]

固定一个 KV group，令 $h\in\{0,\ldots,11\}$ 表示其中的 query head，$\mathcal N(i)$ 为 query token $i$ 选中的 keys，$L_{ih}$ 为对应 LSE。将源码中的反向运算写成数学形式：

$$
\begin{aligned}
P_{ihj} &= \exp\!\left(\alpha Q_{ih}K_j^{\mathsf T}-L_{ih}\right),\\
dP_{ihj} &= dO_{ih}V_j^{\mathsf T},\\
\Delta_{ih} &= \sum_d O_{ihd}\,dO_{ihd},\\
G_{ihj} &= \alpha P_{ihj}(dP_{ihj}-\Delta_{ih}),\\
dQ_{ih} &= \sum_{j\in\mathcal N(i)}G_{ihj}K_j,\\
dK_j &= \sum_{i:\,j\in\mathcal N(i)}\sum_h G_{ihj}Q_{ih},\\
dV_j &= \sum_{i:\,j\in\mathcal N(i)}\sum_h P_{ihj}dO_{ih}.
\end{aligned}
$$

这里 $G$ 对应代码里的 `dS`，**已经包含 attention scale**，是对未缩放点积的梯度。预处理计算 $\Delta$，query kernel 用 LSE 重建 P，再计算 G；因此后续梯度 GEMM 不应再乘一次 $\alpha$。[预处理 L1488–1520][prep]、[P/dS 计算 L680–695][probability]

由这些式子可见，单个 query 的 dQ 能沿自己的选择列表完成；同一 key 的 dK/dV 则必须跨 queries 和共享该 KV head 的 query heads 归约。两遍实现改变的是贡献的组织方式，而非 attention 的选择集合。

## Two-Pass 数据流

入口 `_QsaTwoPassBackward` 通过 `check_support()` 建立 `LaunchPlan`，`compile()` 准备 kernel，`execute()` 切分调用者 workspace 并进入 `qsa_bwd_sm100.launch()`。高层 `_backward()` wrapper 可分配缺省输出和 workspace；不能将 plan 的执行约束推广为 wrapper 总是零分配。[`api.py` L151–266][api-execute]

`launch()` 的主要数据依赖如下。[调度源码 L3099–3254][launch]

1. **准备序列与梯度状态。** Packed 输入先执行 `seq_scan`、`seq_fill`，生成每个 token 的序列边界、序列 ID 和压紧后的 sparse query 列表；`prep` 计算 $\Delta$ 并清零累加器。需要稀疏选择时，`bitmap` 为 dense 执行分支准备 selection bitmap。
2. **为当前 query 窗口构建倒排索引。** `window` 设置有效 query 数；`part` 将每个 query 的 block 列表按 KV pass 分区并统计 key 的贡献数；`scan` 生成连续 slot 的起点；`fill` 写入 `slot_queries`，并建立每个 `(query, block)` 到记录 slot 的映射。
3. **Query-major 计算 dQ 与记录。** `qsa_bwd_sparse_query_kernel` gather K/V，计算 S、dP、P、dS 和 dQ。`pair_records` 按每个 `(query, block)` 保存 BF16 P 与 dS，各为 `[4 tokens, 12 × Hkv heads]`；记录直接写入第二遍将读取的 key-major slot。
4. **Key-major 归约 dK/dV。** `qsa_bwd_sparse_key_kernel` 读取 `key_slot_offsets`、`key_pair_counts`、`slot_queries` 和记录，gather 对应 Q/dO 并累计。当前窗口消费完记录后，才允许下一窗口复用同一块存储。
5. **合并 dense 与 sparse 结果。** 全部窗口后只发射一次 `dense_pdl`，可利用最后一轮 key-major 的尾部空闲资源；`fin_sparse` 合并两条路径的梯度并转换为 BF16。没有 sparse remainder 时直接走 `dense` 和 `fin`。

例如 q0 选择 A、C，q1 选择 A、B，倒排后 A 对应 q0、q1 的记录，B 只对应 q1，C 只对应 q0。这不要求 q0、q1 的完整选择集合相似。实际 key-major work item 还包含 query range：每个 range 最多 2048 个 compacted queries，同一 block 可在不同 range 中分别累计，最后合入全局梯度。[索引布局 L1838–1853][index-layout]

Query-major 还按 32768-token KV pass 遍历所选 blocks，以改善 K/V 的 L2 局部性；dQ 在首个非空 pass 写入，后续 pass 再加上贡献。**KV pass、query range 和记录窗口是三种不同划分**：分别组织 K/V 访问、key-major 的 Q/dO 工作集和中间记录的生命周期。[KV pass 配置][crossover]、[dQ 写回 L732–747][query-drain]

## Sparse Kernel Design 与 SwapAB

单个 query token 的 12 个 heads 已能组成矩阵 $Q_{12\times256}$；选择 $b$ 个 keys 时，score 为 $S_{12\times b}=QK_{\mathrm{sel}}^{\mathsf T}$。这里的小维度是 head 数，而非矩阵没有行。FlashNext-RL 的 Query Union 将多个 query 的 heads 拼到行维，遍历其选择并集并施加逐 query mask；cuDNN 此路径则交换矩阵乘方向。[FlashNext-RL §3.2.7，p. 9][flashnext]

**[用户提出的 SwapAB 理解](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/109#issuecomment-6893693174)**可以用 $C=AB\Longleftrightarrow C^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ 表达。这是 AI 依据源码作出的数学归类，未指向名为 `SwapAB` 的配置开关。以下省略 gather、分块和累计符号，$S$ 表示未缩放的 score，$G$ 为前述已含 scale 的 `dS`：

| 计算 | Kernel 使用的乘法方向 | M 维的来源 | N 维的来源 |
|---|---|---|---|
| S、dP | $S^{\mathsf T}=KQ^{\mathsf T}$；$dP^{\mathsf T}=VdO^{\mathsf T}$ | selected keys | query heads |
| dQ | $dQ^{\mathsf T}=K^{\mathsf T}G^{\mathsf T}$ | head dimension | query heads |
| dK、dV | $dK^{\mathsf T}=Q^{\mathsf T}G$；$dV^{\mathsf T}=dO^{\mathsf T}P$ | head dimension | 当前 block 的 tokens |

源码将 Q/dO 设为 S/dP 的 B operand，K/V 设为 A operand；score descriptor 的关键参数为 `m_dim=128, n_dim=24`。dQ 同样使用 M=128、N=24，256 维输出分两半累计。**SwapAB 决定一次 GEMM 的轴映射；query-major/key-major 决定哪些贡献一起计算、由谁归约。**[S/dP L409–479][score]、[dQ L490–553][dq]、[dK/dV L962–988][key-layout]

12Q/1KV 的 query-major 每个 item 配对 sparse 列表中的两个 query，各自保留选择列表；packed 情况下二者不必是原序列中相邻的 tokens。每个 chunk 有 12 个 slots，每个 slot 由两个 query 各自的四-token block 构成，共 8 行，对应两次 2 KiB TMA 搬运。完整 chunk 因而提供 96 行给 M=128 的 score MMA。计算后只取属于相应 query 的结果，dS 按块对角方式写入，其余交互补零；**配对既未构造去重后的 Query Union，也未消除无效 MMA 槽位**。[分块常量 L32–50][kernel]、[加载与配对][query-load]、[mask 与 dS 布局][probability]

这项布局调整与四-token block 的粒度有关：作者在 `4e829f1` 提交说明中指出，一头的 block 只有四行，而此处 SW128 operand atom 需要八行。配对使两个 2 KiB box 填入 slot；更细的每 slab 512 B box 被放弃，作者报告其 L2-resident gather 带宽低于较大 box。该观察支持搬运粒度的取舍，不能单独量化整体加速。[提交说明][pair-design]

两个 sparse kernel 的 warp 分工如下；CTA 分别为 512 和 256 threads。

| 路径 | Warp 分工 | 流水线与中间状态 |
|---|---|---|
| Query-major | w0：Q/dO/K TMA；w1：V TMA；w2：S/dP MMA；w3：dQ MMA；w4–7：P/dS、记录与 dQ 导出；w8–15：K/V 搬到 TMEM | K 为三级 SMEM ring，V 单 buffer；S/dP 双缓冲，dS 用单个 SMEM buffer 交给 dQ |
| Key-major | w0：gather Q/dO/records；w1：MMA；w2–3：将记录展开为 B tiles；w4–7：导出 dK/dV | 四个 stage 承接加载、展开、MMA 和补入；FP32 dK/dV 在 TMEM 双缓冲 |

Query-major 将 S/dP 与 dQ 交给不同的 MMA warp，避免后继 S/dP 发射排在 dQ 之后；w4–7 读走 score 后即可释放该 score buffer，但 dS buffer 要等上一轮 dQ 读取完成才能覆写。K/V 经 SMEM 搬到 TMEM 后，作为 S/dP 的 A operand；源码注释将这一选择归因于 small-N MMA 的 SMEM operand fetch 瓶颈。它是实现者的性能解释，不是此笔记的独立 profiling 结论。[发射与依赖 L409–559][score]、[dS 发布 L707–731][query-drain]

Key-major 固定一个四-token block B，把选择它的 $r$ 个 queries 的 `(query, head)` 展平为归约维。12Q/1KV 下，逻辑乘法为：

$$
\begin{aligned}
dV_B^{\mathsf T} &\mathrel{+}= dO_{\mathrm{gather}}^{\mathsf T}P_{\mathrm{gather},B},\\
dK_B^{\mathsf T} &\mathrel{+}= Q_{\mathrm{gather}}^{\mathsf T}G_{\mathrm{gather},B},\\
(256\times12r)(12r\times4)&\longrightarrow256\times4.
\end{aligned}
$$

每个完整 stage gather 四个 queries，逻辑上有 48 个有效归约行；实际每 query 按 16 行组织，12 个 heads 加 4 个无效行，P/dS 对应位置置零。N=16 也只有四个 token 列有效，256 维输出分成两个 M=128 的部分。24Q/2KV 则每 stage 放两个 queries，共 48 个归约行，N 的前八列对应两个 KV heads 的四个 tokens，并用零值隔离不同 group。[布局与 MMA L962–988、L1185–1241][key-layout]

MMA 必须同时等到 `b_full`（gather 完成）和 `b_exp`（记录展开完成）；发射后的 `tcgen05_commit(b_emp)` 在读取完成后允许复用 stage。一个 work item 的局部结果最后通过 **TMA ADD reduction** 写入 FP32 累加器，汇总不同 query ranges/windows 的贡献。因此这里减少了逐 query 的全局散射，却仍有全局归约。[MMA 同步 L1174–1212][key-mma]、[TMA reduction L1350–1402][key-drain]

**用户关于“不做 Query Union 如何打满 Tensor Core”的疑问，源码只能回答前半部分。** Transposed GEMM 让 selected-key 维或 256 维特征承担 M，key-major 又把多个 queries 放进归约维，所以不依赖 Query Union 也能发射 Tensor Core GEMM。但 padding、跨 query 无效交互、gather 与 records 流量仍在；缺少有效 FLOPs、实际 MMA 工作量和 Tensor Core 活跃度的对应测量，不能断言该 kernel 接近硬件峰值。

## Dense 分支、记录窗口与 Packed 输入

早期 queries 的选择密度较高，`qsa_bwd_dense_pair_kernel` 按 key tile 执行，使 dK/dV 在片上跨 query groups 累计，避开 P/dS records 的往返。该路径采用两个 CTA 的 cluster，key tile 为 128 tokens，每个 query group 包含四个 query 的 12 heads。源码的调优 crossover 为 20480 queries，剩余 sparse queries 少于 2048 时还会折入 dense 路径；这不是“只处理前 2048 tokens”。超过完整 causal prefix 的 query 仍读取 selection bitmap，因此 dense 指执行组织，未改变稀疏选择语义。[dense 布局][dense]、[selection mask L2523–2578][dense-mask]、[crossover 配置][crossover]

Sparse P/dS 记录随 query 数增长。实现将压紧后的 sparse query 列表按最多 4096 个 query ID 分窗，每窗重建索引、写出并消费 records，再复用存储；dK/dV 保留在跨窗累加器中。文档给出以下 plan 分配量，128K 总 scratch 不含调用者输入和最终 BF16 输出。[workspace 说明][design]

| 配置 | P/dS records 上限 | 128K 总 scratch |
|---|---:|---:|
| 12Q/1KV | 约 0.376 GiB | 约 2.49 GiB |
| 24Q/2KV | 约 0.752 GiB | 约 4.87 GiB |

记录区有界不代表总 workspace 为常量：梯度累加器和序列元数据仍随总 token 数增长。每次执行和 graph replay 都在 device 上重建有效序列计数和窗口信息，避免把上一次输入的边界固化。[窗口实现][index-layout]、[调度][launch]

Packed 输入用 `cu_seqlens` 表达序列边界。位置、四-token block 对齐和 causal tail 均相对各自 sequence，token ID 则寻址整个 packed buffer。例如序列从全局 token 7 开始，其首个完整 block 是 7–10，而非全局四对齐的 block。kernel 从序列内位置推导 tail；接口检查 shape、dtype 和 layout，但不会验证设备上的每行索引是否满足完整 block、无重复和 causal 关系。[`api.py` L36–46][api]

该版本要求 CuTe DSL ≥4.7.0；12Q/1KV **sparse** 路径还要求 CUDA 13 flavor 的 DSL 编译器，以避开已知 CUDA 12 编译崩溃。判断依据是 DSL 的编译器版本，不是 PyTorch 报告的 CUDA 版本。[`check_support()` L154–162][api-execute]

## 相关 Backward 实现

| 参考 | 梯度组织方式 | 与此 cuDNN 路径的区别 |
|---|---|---|
| TileLang Sparse MLA：`examples/deepseek_v32/sparse_mla_bwd.py` 的 `bwd()` | 单 query 的多个 heads 构成 GEMM，gather selected KV，局部累计 dQ，用 `T.atomic_addx4` 写回 dKV | dKV 是 MLA 共享表示的梯度；不构建此处的 P/dS records 与倒排消费流程。[源码][tilelang] |
| FLA Native Sparse Attention：`parallel_nsa_bwd_kernel_dq()` / `parallel_nsa_bwd_kernel_dkv()` | dQ 与 dK/dV 分开；后者固定 KV block，遍历 queries 并检查 block mask，重算 P/dS 后累计 | 使用 mask 判断关联，没有直接复用第一遍 P/dS。对应提交 `bd67af5` 的 `native_sparse_attention/ops/parallel.py`。[源码 L572–743][nsa] |
| FSA | KV block 在外层、非连续 query-token batch 在内层；backward 复用 forward 的索引映射，保存中间梯度后独立 reduction | 用 query-token batching 应对小 GQA group 的 padding；中间梯度 buffer 与 cuDNN 的 P/dS records 职责不同。[§3.1–3.2、Figure 1][fsa] |

TileLang 对照采用提交 [`caf694446d3ef0c7f3dd88c3070f502552f643d3`][tilelang] 的 `bwd()` 实现；这里只比较算法与写回方式，不据此给出版本间性能排序。FSA 的较大 selection block 也不能直接代表 QSA 四-token block 下的收益。

[FlashNext-RL 主笔记](../../Papers/03_Distributed_Training_and_MoE/FlashNext-RL/flashnext-rl.md)中的最终 CuTe dK/dV 路径是另一种实现：64-key CSR tile，每步五个 queries × 12 heads，以 `cp.async` 两级 ring gather，并在该路径重算 P/dS。它与 cuDNN 都按反向关联组织 dK/dV，但 tile、搬运方式和中间状态策略不同，论文的“4 gather＋4 compute＋1 MMA warp”不能套用到这里。[FlashNext-RL §3.2.7，p. 9][flashnext]

## 公开性能数据

PR 作者报告以下 **128K 完整 backward bundle** 的暖态 GPU 延迟。硬件为 B300 SXM6 AC，BF16 Q/K/V/dO、D256、block size 4、top-512 完整 blocks 加 causal tail；基线是 Relax QSA Triton 提交 `77f717d757e5407f5960c7eec0b183d81d82cf56`，两侧使用相同合成输入和 saved state。[PR 的 Workspace and performance][pr]

| 128K workload | cuDNN two-pass | Relax Triton | 作者报告加速 |
|---|---:|---:|---:|
| 12Q/1KV，单序列 | 87.01 ms | 143.95 ms | 1.65× |
| 12Q/1KV，三个 packed sequences | 71.29 ms | 131.23 ms | 1.84× |
| 24Q/2KV，单序列 | 139.06 ms | 294.31 ms | 2.12× |

计时包含元数据、梯度准备、分配 wrapper 和最终 casts/copies，Relax adapter 还包括所需 LSE 布局转换；不包含 selection、forward、编译、TP 通信和训练端到端过程。环境为 PyTorch 2.13.0+cu132、Triton 3.7.1、CuTe DSL 4.7.0、CUDA 13.4，10 次 warmup、50 个 samples，未锁频、两侧分开运行。作者使用 standalone bundle，并以同公式替换 package 的 workspace-alignment helper。上述是作者数据，未在此独立复测；该比较不能将全部加速归因于窗口化或 SwapAB，也不提供 Tensor Core 峰值利用率或模型 MFU。[测试口径][pr]

[pr]: https://github.com/NVIDIA/cudnn-frontend/pull/1781
[revision]: https://github.com/NVIDIA/cudnn-frontend/tree/f6319949ed491237ae983006711883a7f7339795
[api]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/api.py#L14-L55
[api-execute]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/api.py#L151-L266
[design]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/docs/fe-oss-apis/qsa_two_pass.md
[kernel]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L25-L60
[prep]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L1488-L1520
[launch]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L3099-L3254
[index-layout]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L1838-L1853
[query-load]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L287-L408
[score]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L409-L559
[dq]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L490-L553
[probability]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L563-L705
[query-drain]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L707-L790
[pair-design]: https://github.com/NVIDIA/cudnn-frontend/commit/4e829f1
[key-layout]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L962-L1241
[key-mma]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L1174-L1212
[key-drain]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L1350-L1402
[dense]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L2174-L2250
[dense-mask]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L2523-L2578
[crossover]: https://github.com/NVIDIA/cudnn-frontend/blob/f6319949ed491237ae983006711883a7f7339795/python/cudnn/QSA/two_pass/qsa_bwd_sm100.py#L2850-L2869
[tilelang]: https://github.com/tile-ai/tilelang/blob/caf694446d3ef0c7f3dd88c3070f502552f643d3/examples/deepseek_v32/sparse_mla_bwd.py
[nsa]: https://github.com/fla-org/native-sparse-attention/blob/bd67af59b90afa34b25f61d2922e612d10dba3bd/native_sparse_attention/ops/parallel.py#L572-L743
[fsa]: https://arxiv.org/html/2508.18224v2#S3.SS2
[flashnext]: https://arxiv.org/pdf/2610.28998v1#page=9
