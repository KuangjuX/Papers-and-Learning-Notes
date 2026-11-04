# AVO: Agentic Variation Operators for Autonomous Evolutionary Search

- 论文：[arXiv:2603.24517v1](https://arxiv.org/html/2603.24517v1)，2026-03-25。
- 作者：Terry Chen、Zhifan Ye、Bing Xu 等，NVIDIA。

## 单轮候选生成为什么不足以优化成熟 kernel

接近硬件上限的 attention kernel，改动常同时涉及同步、流水线和寄存器分配。一次生成代码后只返回分数，难以把失败归因到具体依赖或资源约束。AVO 因此让 coding agent 接管一次完整变异过程：阅读历史版本和硬件资料、编辑、编译、测试、分析 profile，再决定修复或放弃。变化的是搜索控制方式，不是 attention 的数学定义。[§3](https://arxiv.org/html/2603.24517v1#S3)。

## 保存成功谱系，允许中间尝试失败

输入是已保存的实现及分数、CUDA/PTX 等知识库，以及正确性与吞吐评估函数。Agent 在一次变异中可比较多个旧版本、尝试多次修改；正确性失败的候选得零分，通过检查且分数不退步的实现才进入 Git 谱系。监督机制在停滞或反复失败时引导新的探索方向。

持久化使多天搜索可以积累经验，但成功提交不等于完整搜索成本：7 天运行保留 40 个版本，内部探索超过 500 个方向。知识库还包含 FA4 源码，因此结果不能解释成没有专家实现先验的从零发现。论文评估的是单条演化谱系，未在此验证完整多分支种群管理。

## 三处优化如何改变同一条流水线

Attention 的 online softmax 在行最大值改变时，需要重缩放输出 accumulator。MMA、softmax 和 correction 分工后，某一组更快并不保证整体更快；关键是组间交接和关键路径是否改善。

### 重缩放：多做乘一，换掉分支同步

原路径先检查 warp 内是否有人需要重缩放，不需要时跳过计算。AVO 改为总是计算缩放因子，通过谓词选择在无需缩放时使用 1。额外的乘一换来统一控制流，并在适用路径使用更轻的 fence。它作用于完全 unmasked 的循环；causal 的 masked 部分仍保留原分支。

Table 1 的 v19→v20 对照包含无分支与 fence 两项改动，非因果/因果的几何平均吞吐分别提高 8.1%/1.6%，不能将整项收益只归因于去掉 if。[§5.1](https://arxiv.org/html/2603.24517v1#S5.SS1)。

### Correction/MMA：第一块就绪后立即消费

双 Q-stage 的原路径等待两次 PV GEMM 都结束，再开始 correction。修改后，第一块 PV 完成即可开始其归一化，与第二块 PV 重叠。数据依赖仍被保留，缩短的是不必要的等待。

v29→v30 的非因果/因果吞吐提高 1.1%/0.4%。这是局部流水线对照，不是把整个 attention 的两阶段时间简单相加后减半。[§5.2](https://arxiv.org/html/2603.24517v1#S5.SS2)。

### 寄存器重平衡：给进入关键路径的 correction 更多空间

重叠使 correction 与第二次 PV 并行，但有限寄存器导致其 spilling。AVO 从有余量的 softmax 组调整预算给其他组，缓解 correction 的 local-memory 读写；这说明流水线优化会改变后续资源瓶颈，寄存器配置不能脱离各组工作量单独调。

v32→v33 的非因果吞吐提高 2.1%，因果约为 0%。同一优化没有在两种 mask 下获得相同收益，也不能将不同版本的提升直接相加为最终相对 FA4 的加速。[§5.3](https://arxiv.org/html/2603.24517v1#S5.SS3)。

## 最终结果适用于哪些设置

论文测量 B200 上 BF16、head_dim=128 的 **forward prefill**；序列长 4096–32768，总 token 数固定为 32768。MHA 为 16 heads，GQA 为 32 Q heads 搭配 4 或 8 KV heads；基线是 cuDNN 9.19.1 和 FA4 `71bf77c`，环境为 CUDA 13.1、PyTorch 2.10.0。[§4.1，Figure 3–4](https://arxiv.org/html/2603.24517v1#S4.SS1)。

| 路径 | 相对 cuDNN 的最高提升 | 相对 FA4 的最高提升 |
| --- | ---: | ---: |
| Causal MHA | 3.5% | 10.5% |
| Causal GQA | 7.0% | 9.3% |

MHA 峰值为 1668 TFLOPS；GQA 从演化后的 MHA 版本额外适配约 30 分钟。这里的“最高”是特定配置上的数值，不能代表所有 shape；短序列 non-causal MHA 的差异处于测量噪声范围内。30 分钟也没有包含前面的 7 天搜索。

现有证据支持这次搜索能在所测 attention 路径上取得改进。它没有把 agent 能力、专家源码先验、搜索预算与监督机制的贡献逐一分离，也没有给出 decode、backward 或端到端模型服务的同等结论。
