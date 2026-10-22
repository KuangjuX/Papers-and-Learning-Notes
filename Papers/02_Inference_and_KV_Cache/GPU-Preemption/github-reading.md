# Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences：摘要摘记，未完成

[所属主题](../index.md) · [GitHub 历史笔记目录](../../github-issues.md)

- 论文：[原文](https://www.usenix.org/system/files/osdi22-han.pdf)
- 原记录：[Issue #17](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/17) · 作者：KuangjuX
- 来源更新时间（UTC）：2023-08-15T15:16:56Z · 归档：2026-10-22
- 材料范围：摘要摘记，未完成；沿用现有论文清单的阅读状态，不由 issue 的 open/closed 判断是否读完。

## 阅读线索与覆盖范围

原评论仅记录实时任务与尽力而为任务共用 GPU 的动机，以及微秒级抢占的目标；抢占机制、并发调度和实验尚未展开。

下方是个人历史阅读记录，保留原有技术细节、未完成的小标题和截图；其表述属于当时的阅读理解。本次 AI 整理了来源、章节层级、公式格式与本地图片，校注单独列出。

## 历史阅读笔记（原 issue 评论）

来源：[评论](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/17#issuecomment-1679112834)；KuangjuX；最后编辑（UTC）：2023-08-15T15:16:56Z。

### Abstract

许多只能应用像自动驾驶和虚拟现实需要 Real-time Task 和 Best-effort Task，但是目前加速器没有抢占制度，目前要不然就是独占 GPU，要不然就是 Real-time Task 等待 Best-effort Task 完成再运行，这将会造成低的利用率和高延迟，或者二者都有。本篇文章提出了一个 GPU-accelerated DNN 接口可以进行微秒级内核调度抢占。
