# Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences：摘要摘记，未完成

[所属主题](../index.md)

- 论文：[原文](https://www.usenix.org/system/files/osdi22-han.pdf)

自动驾驶、虚拟现实等应用需要 Real-time Task 和 Best-effort Task，但是论文讨论的 GPU 执行方式缺少足够细粒度的抢占，目前要不然就是独占 GPU，要不然就是 Real-time Task 等待 Best-effort Task 完成再运行，这将会造成低的利用率和高延迟，或者二者都有。本篇文章提出了一个 GPU-accelerated DNN 接口可以进行微秒级内核调度抢占。
