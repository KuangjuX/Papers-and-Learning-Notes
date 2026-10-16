---
tags:
  - topics/sparse-attention
  - topics/source-reading
date: 2026-10-16
---

# WeLM Sparse Attention 推理学习

这个目录持续记录 WeLM Sparse Attention 在 SGLang 中的算法实现、缓存组织和推理适配。第一组笔记来自 [PR !497](https://git.woa.com/wxg-odyssey/sglang/-/merge_requests/497) 的源码导读。

## 前置概念

- [DSA 前向路径：Indexer、块选择与分页 Attention](dsa-gqa-forward.md)：已有的概念笔记；其通用公式与伪代码不能直接等同于这个版本的全部实现。
- [GQA 稀疏 Attention：共享 Selection 与计算形状](dsa-gqa-head-shapes.md)。

## 源码与缓存适配

- [HiCache：Indexer-K、Host 内存与页面恢复](hicache-indexer-k.md)：从 Indexer 缓存的含义开始，沿初始化、Host 分配、页面搬运和逐层恢复展开。
- [Mooncake：GPU-source 传输取消与资源回收](../Disaggregation/mooncake-gpu-source-lifetime.md)：同一 PR 中的另一组修改，属于通用 PD 分离机制，不是 sparse attention 算法的子步骤。

## PR 的两条工作线

| 工作线 | 解决的问题 | 与 WeLM sparse 的关系 |
| --- | --- | --- |
| 单体 HiCache L2 恢复 | GPU 上的前缀被驱逐后，从 Host 恢复 Attention KV、Indexer-K 和必要的 draft 状态，再继续推理 | WeLM sparse 的缓存适配，属于推理系统实现 |
| Mooncake GPU-source 生命周期修复 | 失败和取消时避免提前回收源页、避免取消与成功通知交错 | PD 分离的通用并发正确性问题 |

两个功能出现在同一个 PR，不代表它们组成一条已支持的运行路径。该版本仍拒绝 PD + HiCache 的组合；L3、Deferred 等也不在本次 WeLM sparse L2 集成范围内。

## 版本与证据

源码固定为 `f96e0205bb312894edef6ec308fd04290931dfff`，比较基点为 `daa5fb89b3441b39ed61fa1fbcede40ac9ac5551`。链接使用固定提交，避免分支变化后行号和实现漂移。

笔记基于源码阅读与讨论整理。源码事实、解释性示例和文档报告的运行结果分别标明；本次整理没有运行模型或 GPU 测试，也不将“尚未发现明确 Bug”当作完整正确性认证。

后续按问题追加独立笔记，并在这里增加入口；通用 HiCache、PD 或 kernel 机制可以放在 SGLang 对应主题目录，再从这里引用。
