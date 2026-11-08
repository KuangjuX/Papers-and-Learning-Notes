---
tags:
  - papers/llm-training
  - papers/agent-systems
aliases:
  - "PithTrain"
  - "ATE-Bench"
  - "PithTrain 代码解读"
date: 2026-08-18
arxiv: "2605.31463"
---

# PithTrain: A Compact and Agent-Native MoE Training System

把训练框架交给 coding agent 修改时，训练 tokens/s 只衡量了程序运行后的效率。定位实现、理解配置、修复错误和重新验证也消耗时间与 GPU。PithTrain 将这些开发成本定义为 Agent-Task Efficiency（ATE），尝试用紧凑、显式的 MoE 训练系统同时维持训练吞吐和修改效率。

[Ruihang Lai 等，PithTrain，arXiv:2605.31463](https://arxiv.org/abs/2605.31463)；[代码](https://github.com/mlc-ai/pith-train)；[固定版本的训练执行路径](#pithtrain-code)。

## 训练吞吐以外，修改框架还有哪些成本

生产级 MoE 训练框架（Megatron-LM、DeepSpeed）为人类工程师的设计选择——插件系统、registry 间接、重型编译扩展——也会影响编码智能体的工作成本：

- **定位成本**：16 万+行的代码库让 agent 定位相关代码、追踪跨文件依赖、验证改动完整性的代价急剧膨胀。
- **语言边界成本**：C++/CUDA 扩展（如 TransformerEngine 的 grouped-GEMM）抛出不可读的 segfault，迫使 agent 猜测性开关配置；改动还触发重编译循环。
- **间接层成本**：Megatron 的隐藏参数 registry 使 agent 手动添加的 CLI flag 与自动派生的 flag 冲突；runtime spec 让 call site 的实际执行路径无法通过局部阅读确定。

## 把开发成本对应到四项结构选择

论文 §3.1 的四项原则分别针对上面的成本。它们是对框架结构的选择，并不要求改变 agent 本身。

| 遇到的成本 | 设计选择 | 在 PithTrain 中如何落实 | 取舍 |
| --- | --- | --- | --- |
| 为一个修改搜索大量代码 | 紧凑代码库 | 约 11K 行核心实现，集中覆盖 MoE 训练 | 减少广谱模型和硬件兼容范围 |
| 跨语言错误难定位，修改后重建链长 | Python-native | Python 组织模型、引擎和算子接口 | 底层仍使用高性能算子与编译工具 |
| 调用点无法直接确定执行对象 | 无隐式间接 | 每个模型文件直接组合模块，避免 registry/runtime spec 层层查找 | 跨模型共用修改可能需要更多维护 |
| 反复探索操作和验证流程 | 任务专属 skills | 明确前置条件、操作范围与验证脚本 | 需要持续维护与代码匹配的流程 |

例如增加一个 MoE 变体时，直接实例化模型模块使修改位置更容易定位；但如果同一修改需要传播到许多模型，公共抽象可能反而更省工作。ATE-Bench 的任务范围决定了这两种成本中哪一种更突出。

## 紧凑框架如何保留高性能训练路径

### 从应用入口到引擎与算子

| 层 | 组件 | LoC |
|---|---|---|
| Application | Training Loop：Pretrain/SFT、torch.compile、优化器、数据集、DCP checkpoint、NVTX profiling | ~1K |
| Engine | Model Pipeline Engine：DualPipeV 调度器、5-stage 执行、P2P 通信、EP/DP/CP；模型协议接口（Qwen/DeepSeek/GPT-OSS） | 2.6K + 4.1K |
| Operator | FP8 Linear/量化、Ring Attention、Expert Dispatch & Dedup、Deferred Wgrad、Weight Cache、负载均衡 Loss（DeepGEMM/FlashAttn/Triton Python DSL） | 2.3K + 0.2K |

### Agent Skills

技能 = 一个自包含目录（SKILL.md playbook + 可选 helper scripts），覆盖 add-new-model / add-memory-prints / capture-nsys-profile / validate-correctness 等常规任务。agent 在需要时自行加载，如 Report Heavy Kernels 任务自动触发 capture-nsys-profile。


减少间接层并不会自行提高 GPU 吞吐。下面沿实际调用链检查框架如何保留流水线、通信重叠和算子优化；吞吐是否维持同级由后面的训练实验验证。

### Skills 消融（Table 8）

固定 wgrad delay commit、agent 和 harness，每项任务各做三次有/无技能实验，十二次均成功。Table 8 的开关对比为：validate-correctness 的 Agent Turns 114 → 34（-70%），capture-nsys-profile 75 → 36（-52%）；四个 agent 侧指标全部大幅下降，而 Active GPU Time 基本持平（GPU 工作由任务本身决定，agent 侧的开销才是技能优化的对象）。


## 源码实现：从训练入口到五阶段流水线 {#pithtrain-code}

> [KuangjuX/pith-train，`889a408`](https://github.com/KuangjuX/pith-train/tree/889a408)（fork 自 mlc-ai/pith-train，2026-07）。

PithTrain 把一个训练 step 展开成可直接追踪的调用链：入口建立并行环境与模型，数据按 mesh 切分，模型交给 DualPipeV 执行，最后统一归一化梯度并更新参数。关键是把 MoE 层在通信边界分成五段，使调度器能安排不同 micro-batch 的计算与通信。

### 从 launch 建立一次训练的运行环境

`tasks/pretrain_lm.py` 的 `launch` 依次调用 `setup_logging`、`setup_distributed`、`setup_training`，再加载 checkpoint、检查数据集并进入训练循环。初始化阶段建立的对象保存在 `contexts` 中，训练循环读取同一份状态。

```text
launch
  → setup_distributed：rank、进程组、device mesh
  → setup_training：模型 chunk、FSDP、优化器、调度器
  → load_checkpoint
  → train_step
      → get_global_batch
      → model.step：流水线前向与反向
      → 梯度归一化、裁剪
      → optimizer.step / zero_grad / scheduler.step
```

`distributed`、`training`、`logging` 三个模块就是三个命名空间对象，`setup_*` 函数往里填字段，全库直接 `from pithtrain.contexts import distributed` 读 `distributed.pp_rank` / `training.model`。这样调用者能直接定位状态定义；代价是初始化顺序与全局状态约定成为模块间的隐式依赖。

[源码：`pithtrain/tasks/pretrain_lm.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/tasks/pretrain_lm.py)。

### 用四维 mesh 确定参数与数据归属

`setup_device_mesh` 建一个 `(PP, DP, CP, EP)` 四维 mesh，**DP 不需要配置，由 world_size 除出来**。轴序外→内为 PP→DP→CP→EP，注释写明动机：CP（ring K/V 交换）和 EP（MoE all-to-all）通信最频繁，放最内层让流量尽量留在 NVLink 域内。

```
world_size = pp_size × dp_size × cp_size × ep_size   (dp_size = world_size / 其余)
```

初始化还包含两个工程细节：fail-fast excepthook（未捕获异常直接 `os._exit(1)`，绕过 NCCL drain 防止整机挂死）；`recompile_limit=64`（配合 5-stage 的多入口编译）。

- **FSDP2 组装**（`apply_fsdp`）：MoE 专家沿 `dp×cp` mesh 分片（同一专家在 DP、CP 维度复制，EP rank 之间持有不同专家），非 MoE 参数沿 `dp×cp×ep` 分片；逐层 `fully_shard(reshard_after_forward=False)`（层内多次用，摊薄 all-gather）；支持 `fsdp`/`hsdp` 两种策略。
- **优化器**：`make_muon_optimizer` 把参数按 `is_muon_param` 分流——2D hidden 权重走 Muon，embedding/lm_head/router/bias 走 AdamW（Moonlight 论文的可扩展 Muon 配方）；也提供纯 AdamW。
- **调度器**：WSD（warmup-stable-decay，cosine/linear 两种衰减）+ constant。
- **初始化**：输入层 `N(0, 0.02)`，o_proj/down_proj 按 `1/sqrt(2L)` 缩放（GPT-2 传下来的残差流方差控制）。

[源码：`pithtrain/modules/training.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/modules/training.py)。

### 将 global batch 切成流水线的输入

`train_step` 先根据 global batch 与 micro-batch 配置计算累积次数：

```python
accumulate_steps = global_batch_size // (micro_batch_size * dp_size * ep_size)
```

例如 global batch 为 64，micro-batch 为 2，DP=2、EP=4，则每个 step 累积 4 个 micro-batch；CP 将同一序列分开处理，不再作为独立样本维度乘入分母。

`get_global_batch` 由 PP rank 0 取数，按 DP×EP 划分样本，再按 zigzag CP 分配序列的前块与镜像后块。CP 的数据切分必须与模型里的 `position_ids` 和 ring attention 采用同一个顺序，否则张量形状即使正确，位置与因果语义也会错位。

拿到本地数据后，`model.step` 接管 micro-batch 的前向与反向。这里的 `step` 是流水线模型的执行入口；真正的参数更新在其返回后由训练入口完成。

[源码：`pithtrain/tasks/pretrain_lm.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/tasks/pretrain_lm.py)。

### 把模型层拆到通信边界

模型层遵循一个明确的协议。每个 decoder 层实现：

```python
class LayerProtocol(Protocol):
    def forward_stage1(hidden_states, rotary_posemb, cu_seqlens)  # LN+Attn+LN+topk路由 → RoutingInfo
    def forward_stage3(gathered_tokens, expert_idxs, expand_idx)  # 专家计算
    def forward_stage5(moe_outs, moe_local_idxs, topk_weight, residual)  # 加权聚合+残差
    def reference_forward(hidden_states, ...)                     # 不切分的朴素参考实现
```

**Stage 2（dispatch all-to-all）和 Stage 4（combine all-to-all）是框架持有的**——模型只返回路由元数据 `RoutingInfo`，调度器驱动通信。这就是论文说的"每层按 EP 通信边界分成五段"。`reference_forward` 是自校验基准：分布式实现必须逐数值对齐它（tests/ 就是这么测的），这给融合路径提供了独立的数值参照。

[源码：`pithtrain/models/interface.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/models/interface.py)。

### 以 Qwen3 MoE 跟踪一次层计算

- **V 形双 chunk**：`Qwen3MoeModel(config, phase=0/1)`，rank r 持有 chunk `r` 和 chunk `2·pp_size-1-r`（`layer_partition` 切层，边缘 chunk 更轻因为要背 embedding/lm_head）。这就是 DualPipeV 的 "V"。
- **Gate**（`Qwen3MoeGate`）：softmax→topk→归一化权重；负载均衡 loss 通过 `MoELoadBalanceLossInjector.apply(topk_weight, lb_loss * n_tokens)` 以自定义 autograd 函数**注入到 topk_weight 的梯度通路**，绕过 loss 直接把 lb 梯度混进反向——这样 train_step 统一除以 token 数后 lb 梯度仍然正确归一化。这一缩放与 step 末的 token 归一化相配合。
- **Experts**（`Qwen3MoeExperts`）：三个 `GroupedLinear`（gate/up/down），`silu_mul` 融合激活，按 `grouped_mm_offs` 分组 GEMM。每个 rank 只持有 `num_experts // ep_size` 个专家。
- **Stage 切分点**：stage1 结束于 `prepare_dispatch`（本地先做 token 去重），stage3 是 scatter→grouped GEMM→gather，stage5 是 topk 加权 scatter_add + 残差。stage1/5 包了 `@torch.compile(fullgraph=True)`，stage3 故意不包（数据依赖 shape）。 `fullgraph=True` 要求被编译区域形成完整图，遇到 graph break 会报错；这一限制把部分兼容问题提前暴露，而不是默默退回分段执行。
- **zigzag CP**：`forward_posemb` 里 position_ids 按"前块+镜像后块"拼接，与 `pretrain_lm.get_global_batch` 的数据切分、`ring_attention.py` 的注意力实现三方严格对齐；

[源码：`pithtrain/models/qwen3_moe.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/models/qwen3_moe.py)。

### 让不同 micro-batch 的计算与通信重叠

一个 micro-batch 的依赖仍是 stage1 → dispatch → stage3 → combine → stage5。重叠来自不同 micro-batch 之间可并行的工作，不能把同一 token 尚未完成的通信跳过去。

- `dualpipev.py`：V 形调度本体，8 步调度算法改编自 DeepSeek DualPipe（MIT），原创新增：5-stage 重叠循环、FSDP2 集成、FP8 weight cache、`ChunkRecord` 零分配复用。
- `overlap.py`（331 行）：`overlapped_forward_backward` —— 真正把"一个 micro-batch 的计算"与"另一个 micro-batch的 stage2/4 通信"重叠起来的主循环。
- `execution.py`（829 行）：chunk 生命周期管理、`model_forward`/`model_backward`、显式 `post_backward` 调用（FSDP hook 在流水线循环里被抑制，循环结束后手动触发规约分片）。
- `utils.py`：`WeightGradStore`（wgrad delay：缓存计算权重梯度的 callable，由 `flush` 分组入队、`pop` 在调度点执行；延迟的是权重梯度计算，不是已生成梯度的通信）；`FP8WeightCacheControl`（跨 micro-batch 缓存 FP8 量化权重，避免重量化）；`gather/scatter`（all-gather 参数进 forward）。
- `comm.py`：P2P 批量收发（预分配 buffer + bf16 固定 shape，`set_p2p_tensor_shapes/dtype` 在建模型时设定）。

`overlapped_forward_backward` 将分段计算和 EP 通信安排到相应 stream，并用事件表达依赖。`execution.py` 负责 chunk 的生命周期与 FSDP 收尾，因此五阶段切分、DualPipeV 调度、FSDP 梯度规约是互相配合的三个层次。

[源码：`pithtrain/dualpipe/overlap.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/dualpipe/overlap.py)。 [源码：`pithtrain/dualpipe/utils.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/dualpipe/utils.py)。

### 归一化梯度，再执行参数更新

`criterion` 返回 loss 的 **sum**，各 micro-batch 反向累积求和损失的梯度；随后以全局非忽略 token 数归一化，再裁剪梯度和更新参数。token 计数从 PP rank 0 广播到其他 stage。

例如两个 micro-batch 分别有 3、1 个有效 token，loss 之和分别是 6、4，则全局均值是 $(6+4)/(3+1)=2.5$。若先对两个 micro-batch 分别求均值再平均，会得到 $(2+4)/2=3$，改变训练目标的权重。统一求和再除 token 数避免了这个问题。

`clip_grad_norm_` 通过本地 L2 平方和与跨 rank 归约取得全局范数，并处理 DTensor 的本地分片。随后执行 `optimizer.step()`、`zero_grad()` 和 `scheduler.step()`。MoE gate 中注入的负载均衡损失先乘 `n_tokens`，正是为了与这里的归一化兼容。

[源码：`pithtrain/tasks/pretrain_lm.py`](https://github.com/KuangjuX/pith-train/blob/889a408/pithtrain/tasks/pretrain_lm.py)。

### 算子实现如何支撑这条路径

| 文件 | 干什么 | 亮点 |
|---|---|---|
| `ep_dispatch.py` 676 | EP dispatch/combine | 3 个 Triton kernel 替换 ~22 个小 PyTorch 算子；**token 去重**（一个 token选的多个专家在同卡只发一次）；counting sort O(n) 替 argsort |
| `token_scatter.py` 384 | 分组 GEMM 前后 scatter/gather | padded_index_gather、预分配 pinned buffer |
| `grouped_linear.py` 284 | BF16 grouped GEMM / FP8(DeepGEMM) | 同一接口两条后端 |
| `deepgemm_quantize.py` 899 | FP8 128 元素块量化 | Hopper/Blackwell 两条路径，power-of-2 scales |
| `ring_attention.py` 990 | CP 的 K/V 环交换注意力 | zigzag 布局负载均衡 |
| `linear.py` 208 | FP8/BF16 Linear | weight cache 控制 |
| `silu_mul.py`/`clamped_swiglu.py` | 融合激活 | SwiGLU 前后向融合 |
| `cross_entropy.py` 156 | 融合 CE | vocab 级 logits 的省显存实现 |

`modules/load_balance.py`（274 行）：三种 MoE 均衡 loss——micro-batch（Switch 式）、global-batch（DeepSeek 式，DP×EP 频率同步）、sequence 三选一。

### Checkpoint、正确性与性能观测

DCP checkpoint 通过 `to_canonical_model` 把参数名转换为与 PP 划分无关的全局层号，并展开堆叠的专家参数，支持跨并行度重新分片。HF 导入的 checkpoint 如果只有模型参数，使用 `model_only` 跳过 optimizer 状态。

每个 step 记录 loss、负载均衡 loss、梯度范数、tokens/s 和峰值显存；`nsys_start/stop` 与 `memory_profile_start/stop` 控制性能采样的步数范围。数值一致性、loss 曲线与性能 profile 回答的是不同问题：流水线能执行，并不自动说明结果正确或重叠有效。

- `tasks/tokenize_corpus.py`：HF tokenizer → memmap packed 序列（`workspace/datasets/...`）。
- `tasks/convert_checkpoint/`：DCP ↔ HF 双向转换，每模型一个映射文件。
- `.agents/skills/`：9 个技能——`add-new-model`（含模型骨架模板）、`validate-correctness`（对比分支 loss 曲线）、`capture-nsys-profile`/`analyze-nsys-profile`、`add-memory-prints`、`estimate-memory`、`setup-benchmark-inputs`、`launch-with-slurm`、`wandb-tracking`。
- `tools/memory_estimator/`：不启 GPU 就能估算各并行度下的显存（含流水线模拟器）。

### 运行入口与环境

```bash
# 数据
bash examples/tokenize_corpus/launch.sh dclm-qwen3
# 训练（单机；多节点走 SLURM: srun -W 0 examples/pretrain_lm/launch.sh <model>）
bash examples/pretrain_lm/launch.sh qwen3-30b-a3b
# checkpoint 导出 HF / 从 HF 导入续训
bash examples/convert_checkpoint/launch.sh qwen3-30b-a3b
# 显存估算（改并行度前）
python -m tools.memory_estimator   # 具体参数见 tools/memory_estimator/__main__.py
```

训练配置全在 `examples/pretrain_lm/<model>/script.py`，改完即跑，无 YAML 无 CLI flag（无隐式间接原则的贯彻）。

这些命令是所读版本的入口示例；实际资源需求由模型和并行配置决定。环境要求为 Hopper/Blackwell GPU、CUDA ≥ 13.0、Python ≥ 3.12。这里没有新增 GPU 实测结果。

### 源码导航

全库约 **11.1K 行 Python**（不含测试），三层架构：

```
pithtrain/
├── tasks/       # Application: 可启动的入口（pretrain_lm.py 510 行）
├── contexts/    # 全局运行时状态（模块级单例，总共不到 100 行）
├── dualpipe/    # 引擎核心: DualPipeV 流水线调度器 (~2050 行)
├── models/      # 每个模型家族一个自包含文件 (~1720 行)
├── modules/     # 分布式 + 训练基础设施 (~1700 行)
└── operators/   # Triton/库 backed 算子 (~4000 行)
examples/        # 每个模型: script.py(配置) + config.json；launch.sh(torchrun/SLURM)
benchmarks/      # 算子 micro-bench + 论文用预训练配置
.agents/skills/  # 9 个 agent 技能
tools/           # memory_estimator 显存估算器
docs/            # user-guide.md / architecture.md（架构说明）
```

## 用固定 agent 的任务实验衡量框架成本

ATE-Bench 固定 agent 与任务，改变训练框架，观察完成同类工作需要多少资源。它衡量的对象是 agent 使用框架的成本；训练性能需单独比较。论文 §4 设置三类任务：理解代码的 Q&A、操作与剖析、功能扩展。

固定 agent（Claude Code, Opus 4.7 @ xhigh），每任务跑 3 次取中位数，报告五个独立指标（无单一标量）：Session Duration、Active GPU Time、Agent Turns、Per-Turn Context、Output Tokens。正确性用双人独立评分 + 第三人仲裁（Q&A）、harness 程序化检查（Operate & Profile）、规则化三属性 + Opus 评审 + 人工复核（New Feature）三套机制保证——全部 180 次 attempt 均通过。

## 实验：训练速度与开发效率分别验证

### 训练效率（Table 4）

| 模型 / 硬件 / 配置 | Megatron-LM | TorchTitan | PithTrain |
|---|---|---|---|
| GPT-OSS-20B, 1×8-B200, FP8.../BF16 | 129.5K | — | **140.9K** |
| Qwen3-30B-A3B, 1×8-B200, FP8 | 106.2K | OOM | **134.5K** |
| Qwen3-30B-A3B, 2×8-H100, BF16 | **126.7K** | 90.5K | 124.9K (-1.4%) |
| Qwen3-30B-A3B, 4×8-H100, BF16 | 264.1K | OOM | **280.0K** |
| DeepSeek-V2-Lite, 1×8-H100, BF16 | 107.3K | 74.1K | **114.6K** |

（单位 tokens/s；DeepSpeed 不支持 PP+EP 组合被排除）正确性上，Qwen3-30B-A3B 4096 步预训练的 loss 曲线与 Megatron 对齐，6 个下游基准（OpenBookQA/WinoGrande/ARC-C/ARC-E/HellaSwag/PIQA）在各 checkpoint 上统计噪声内一致。

### 智能体任务效率（Table 5–7）

- **Q&A**：PithTrain 的 Agent Turns 比 Megatron-LM 最多少 67%（如 Q1: 15 vs 33；Q5: 21 vs 48），Per-Turn Context 普遍低 20–30%（~30K vs ~45K）。
- **Operate & Profile**：Agent Turns 最多比 Megatron 低 70%、比 TorchTitan 低 57%；Output Tokens 最多低 78%/65%。Getting Started 任务会话时长 6.6 min vs Megatron 40.5 min。
- **New Feature**：Active GPU Time 最多比 Megatron 低 44%、比 TorchTitan 低 64%——主要因为 PithTrain 上 agent 更少次重跑训练就收敛。MoBA 任务：38.7 min vs 61.6 / 105.1 min。

### MoBA 案例研究（Fig. 6）

按动作类别分解输出 token：Editing 在三个框架都占大头（Pith 4.7K / Megatron 13.1K / Titan 22.2K）；Megatron 的 Exploring 开销 10.2K vs Pith 2.2K（大代码库定位成本）。失败模式对比：PithTrain 三次运行两次零失败，一次失败在同文件内修复（tensor-stride mismatch，traceback 可读）；Megatron 三次运行遭遇 CLI flag 注册冲突（修复跨多文件）与 BF16 overflow；TorchTitan 的重跑由 OOM 内存压力调试主导——说明**内存余量等运行时属性是独立于代码库结构的另一因素**。

## 结论的适用范围与混杂因素

论文自己承认（§4）：ATE-Bench 不覆盖"共享改动跨模型传播"类任务——那正是生产框架 implicit indirection 的设计初衷（一份 layer skeleton 派生多模型），在这类任务上间接层可能反而降低 agent 工作量。因此，实验支持的是这些原则在所测任务分布中的收益，不能证明它们在所有任务上最优。

约 11K 行实现只覆盖 MoE 核心路径和 Hopper/Blackwell，不能与生产框架的全部模型、功能和硬件支持等量比较。紧凑性也会随新增功能面临维护压力。

ATE-Bench 共 20 个任务（12+4+4），固定 Claude Code Opus 4.7 @ xhigh；Operate/New Feature 使用 DeepSeek-V2-Lite、8×H100、PP4/EP2，每任务仅三次采样。未验证跨 agent、推理强度或任务分布的稳健性。TorchTitan 的 OOM 还表明，内存余量会独立影响 agent 的重跑成本，现有比较未把它与代码结构的贡献分离。

吞吐实验加载公开 checkpoint 以固定 router 负载，运行 25 步并取后 10 步中位数；这支持所给配置下的可比吞吐，不表示各基线已达到所有可能调优的上限。

## 个人理解与相关系统的联系

- **与 SkillRT（SkVM）的联系**：两者都在做"为 agent 优化软件层"——SkillRT 优化技能的执行（编译类比），PithTrain 优化框架本身的结构（让 agent 静态阅读即可导航）。合起来指向一个趋势：系统的第一类用户正在变成 agent，软件设计需要为此重新定价。
- **ATE 五指标可直接借用**：Session Duration / Active GPU Time / Agent Turns / Per-Turn Context / Output Tokens——评估任何"agent 操作基础设施"项目（编译器、集群工具、CI 系统）时可以作为候选指标，尤其"固定 agent 变系统"的反转实验设计。
- **Skill 三属性（specific scope / explicit prerequisites / verifiable success）是可立刻落地的实践**，本质是把"可验证性"从研究领域搬到工程领域：让技能以脚本 PASS/FAIL 收尾而不是 agent 自评，让验证结果有明确的外部依据。
- **相关工作对比**：可与 TorchTitan（同为 Python-native 但未以 agent-native 为第一目标）、DeepEP/DualPipe（其复用的通信原语）、以及 Anthropic Agent Skills 官方博客（skills 概念来源）对照阅读。

## 参考文献

- Lai, R., Kang, H., et al. PithTrain: A Compact and Agent-Native MoE Training System. arXiv:2605.31463, 2026.
- Anthropic. Equipping agents for the real world with Agent Skills. 2025.
- DeepSeek-AI. DeepSeek-V3 Technical Report. 2025. (DualPipe)
- Liang, W., et al. TorchTitan: One-stop PyTorch native solution for production ready LLM pretraining. ICLR 2025.
