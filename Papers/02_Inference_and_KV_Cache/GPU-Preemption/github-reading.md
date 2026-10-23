# Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences：摘要摘记，未完成

[所属主题](../index.md) · [GitHub 历史笔记目录](../../github-issues.md)

- 论文：[原文](https://www.usenix.org/system/files/osdi22-han.pdf)
- 原记录：[Issue #17](https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/17)

## 历史阅读笔记（原 issue 评论）

### Abstract

许多只能应用像自动驾驶和虚拟现实需要 Real-time Task 和 Best-effort Task，但是目前加速器没有抢占制度，目前要不然就是独占 GPU，要不然就是 Real-time Task 等待 Best-effort Task 完成再运行，这将会造成低的利用率和高延迟，或者二者都有。本篇文章提出了一个 GPU-accelerated DNN 接口可以进行微秒级内核调度抢占。
