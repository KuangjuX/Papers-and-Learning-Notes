# 个人外部文章与分篇笔记

[论文总览](index.md) · [全部笔记目录](../CATALOG.md)

2026-10-22 将个人已发表的知乎文章导入本地，并按论文、项目、基础三类归档。原作者均为 KuangjuX；去除平台导航、推荐和评论，恢复 TeX 公式并保存 **32 张正文配图和 1 段 NIAH 演示视频**。图片保存自页面实际加载的显示版本，保留原图片来源链接。

## 全文归档

| 原文章 | 本地正文 | 内容类型 |
| --- | --- | --- |
| [2025 LLM 科技总结](https://zhuanlan.zhihu.com/p/1994788371738949558) | [2025 年度 LLM 研究总结：知乎原文归档](../Foundations/05_Model_Architecture_and_Reasoning/Research-Reviews/llm-2025.md) | 研究总结 |
| [MoE 笔记：从数学推导到 SonicMoE 的极致优化](https://zhuanlan.zhihu.com/p/1987208541124202922) | [MoE 数学与 SonicMoE：知乎原文归档](../Foundations/03_Distributed_Training_and_MoE/MoE/zhihu-reading.md) | 基础与论文原始阅读材料 |
| [Unikernel 学习笔记](https://zhuanlan.zhihu.com/p/622751025) | [Unikernel、Unikraft 与 ArceOS：知乎原文归档](../Foundations/06_Computing_Foundations/Systems/Virtualization/Unikernel/zhihu-reading.md) | 原理与项目原始阅读材料 |
| [Light-DuoAttention：用 CuTeDSL 实现高效长上下文推理](https://zhuanlan.zhihu.com/p/1984978732436431358) | [Light-DuoAttention：CuTeDSL 与 SGLang 实践](../Projects/02_Inference_and_KV_Cache/Light-DuoAttention/zhihu-reading.md) | 项目实践 |
| [NVSHMEM-Tutorial：Build a DeepEP-like GPU Buffer（一）](https://zhuanlan.zhihu.com/p/1943366512783098660) | [NVSHMEM 与 DeepEP-like Buffer：初始化与内存模型](../Projects/03_Distributed_Training_and_MoE/DeepEP/zhihu-reading.md) | 项目实践 |

## 单独整理的笔记

原文完整保存，分篇材料按既有主题增加独立入口。带“摘记”的页面保留原讨论范围；本次没有把概述扩写成已完成的全文精读。MoE 基础与 SonicMoE 另有统一符号、数值例子和原论文核对。

- [Kimi Linear：状态更新与混合注意力](01_Attention/Kimi-Linear/zhihu-reading.md)
- [DeepSeek-V3.2 与 DSA：年度总结摘记](01_Attention/DeepSeek-DSA/zhihu-reading.md)
- [Mirage Persistent Kernel：任务图与持久化运行时](04_GPU_Compiler_and_Performance/MPK/zhihu-reading.md)
- [Tawa：用异步引用自动生成 warp specialization](04_GPU_Compiler_and_Performance/Compiler/Tawa/zhihu-reading.md)
- [Seer：同步 RL 的 rollout 切分、调度与分组投机](03_Distributed_Training_and_MoE/Seer/zhihu-reading.md)
- [TileRT：面向低延迟推理的 tile 运行时](../Projects/02_Inference_and_KV_Cache/TileRT/zhihu-reading.md)
- [Look Ma, No Bubbles!：Llama-1B Megakernel 阅读摘记](04_GPU_Compiler_and_Performance/Megakernels/zhihu-reading.md)
- [DeepEP：年度总结中的计算通信重叠摘记](../Projects/03_Distributed_Training_and_MoE/DeepEP/overview.md)
- [Unikraft：模块化 library OS 与专用内核](06_Computing_Foundations/Operating-Systems/Unikraft/unikraft.md)
- [ArceOS：从 feature 配置到 unikernel 启动](../Projects/06_Computing_Foundations/ArceOS/unikernel-build.md)
- [MoE：路由、Grouped GEMM、梯度与计算成本](../Foundations/03_Distributed_Training_and_MoE/MoE/moe-math-and-cost.md)
- [SonicMoE：梯度重排、异步 IO 与 tile 感知路由](03_Distributed_Training_and_MoE/SonicMoE/sonicmoe.md)

## 来源与增量整理

- 2026-10-23 新增 [AI Infra 面试基础归档](../Foundations/07_Books_and_Technical_References/Interview-AI-Infra/index.md)，来源为个人 Notion [《秋招面试总结》](https://app.notion.com/p/24e9da1e836d80ac828bc1fed39b3a26)。按基础主题拆为 8 篇笔记，核对并修正旧回答；LeetCode 类题目按用户要求不纳入，CUDA 算子与 Tensor 内存管理保留。

- 个人文章的历史理解、当时性能数字和未记录 commit 的代码仍保留在全文归档中；独立笔记明确版本与证据范围。
- SonicMoE 核对了原文正文和梯度、算法、评测配置附录；Kimi Linear、MPK、Tawa、Seer 通过 Zotero PDF 核对与拆分相关段落。SonicMoE 在当前 Zotero 检索中没有找到，使用公开原文补足。
- 未将论文概述、平台评论或其他人的文章冒充个人精读记录；原有已读／待读状态沿用。
- 先前 Unikraft 外链的 403 已通过浏览器正常阅读解决，现有全文与分篇笔记。
