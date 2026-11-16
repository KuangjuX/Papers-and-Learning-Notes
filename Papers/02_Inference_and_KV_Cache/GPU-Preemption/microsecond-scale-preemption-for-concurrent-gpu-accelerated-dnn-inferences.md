<a id="microsecond-scale-preemption-for-concurrent-gpu-accelerated-dnn-inferences-摘要摘记-未完成"></a>

# Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences

[所属主题](../index.md)

- 论文：[原文](https://www.usenix.org/system/files/osdi22-han.pdf)

自动驾驶、虚拟现实等应用需要同时运行延迟敏感的实时任务（Real-time，RT）与没有硬实时要求的后台任务（Best-effort，BE）。将 GPU 专用于 RT 会留下空闲资源；串行执行两类任务时，新到的 RT 需要等待已启动的 BE 完成；直接用多个 GPU streams 并发，又会因资源竞争拉长 RT 延迟。REEF 是一个 DNN 推理服务系统，以微秒级抢占缩短 RT 的等待，再以受控并发提高总吞吐。[§1–2，pp.539–542](https://www.usenix.org/system/files/osdi22-han.pdf#page=2)

这里的困难是论文所讨论的平台缺少适合该场景、可由软件控制的高效抢占接口。作者在 §2.2 脚注 2 明确提到 NVIDIA 从 Pascal 开始提供硬件抢占支持，因此不能概括为所有 GPU 都没有抢占机制。已有 wait-based 方法需要等待正在运行的 blocks 完成，其等待成本相对于毫秒级 DNN 推理已经不可忽略。[§2.2，p.542](https://www.usenix.org/system/files/osdi22-han.pdf#page=5)

## REEF Architecture

REEF 利用两项工作负载特征：许多推理 kernels 是幂等的，同一输入在中断后重试仍产生相同输出；固定形状、无数据相关循环的 kernels 单独执行时，耗时可通过离线 profiling 预测，而不同 kernels 的计算单元（Compute Unit，CU）需求差异很大。这分别支撑了 reset-based preemption 和 dynamic kernel padding。[§2.1，p.541](https://www.usenix.org/system/files/osdi22-han.pdf#page=4)

离线阶段通过扩展 TVM 校验幂等性、变换代码，并记录 kernel 耗时和资源需求。在线阶段维护一个 RT 队列与多个 BE 队列：没有 RT 请求时，BE 通过多个 streams 并发；RT 到达后，终止正在运行的 BE 计算，切入实时模式；每次发射 RT kernel 前挑选合适的 BE 计算一起执行；RT 队列清空后恢复普通并发模式。论文实现一次只服务一个 RT 请求。[§3、Figure 5–6，pp.542–543](https://www.usenix.org/system/files/osdi22-han.pdf#page=6)

## Reset-based Preemption

保存大量寄存器上下文会增加抢占成本。REEF 利用幂等性直接终止 BE kernels，保留显存中的输入、权重和中间数据，恢复时重新执行部分 kernels。难点不仅是停止 CU 上的计算：为隐藏启动延迟，推理通常提前提交数百个 kernels，它们还可能排在主机队列（Host Queue，HQ）与设备队列（Device Queue，DQ）中。三个位置都必须处理，才能让 RT 尽快获得 GPU。[§4、Figure 7，pp.543–545](https://www.usenix.org/system/files/osdi22-han.pdf#page=7)

1. **清空 HQ，异步回收内存。** Runtime 将链表头置空，把逐项释放工作交给后台 GC 线程，避免队列长度决定抢占关键路径的开销。
2. **对 DQ 使用 lazy eviction。** GPU command processor 会直接取用 DQ，主机无法安全地任意删除其中的任务。REEF 在 kernel 入口插入抢占标志检查；标志置位后，排队的 kernels 仍被正常取出和派发，但在入口立即退出。由于取出和派发仍有成本，作者将测试平台上的 DQ 容量限制为 4。更小的队列能减少清空时间，却会增加 CPU 补充队列的频率，过小时还会使 GPU 等待新任务。
3. **终止 CU 上正在执行的 kernels。** REEF 修改 AMD 驱动的终止路径，使 command processor 停止运行中的 kernels，同时保留进程的 GPU 内存，避免重新加载模型参数。[§4.1–4.2，pp.544–545](https://www.usenix.org/system/files/osdi22-han.pdf#page=7)

恢复也不需要从整个模型的起点重算。开始重置队列时，REEF 记录最后送入 DQ 的 kernel $k_l$，并从它之前 $c$ 个 kernels 的位置重新执行，其中 $c$ 是 DQ 容量。依据作者观察到的 command processor 顺序取用与执行行为，这个位置不会晚于被中断的 kernel，最多冗余执行 $c+1$ 个 kernels；默认 $c=4$ 时最多为 5 个。其代价是后台任务重算，而非寄存器现场的保存与恢复。[§4.3，p.545](https://www.usenix.org/system/files/osdi22-han.pdf#page=8)

## Dynamic Kernel Padding

快速抢占解决了 RT 到达时的等待，但如果 RT 请求频繁，单靠抢占仍可能让 BE 长期得不到服务。REEF 因此在 RT kernel 未用满 GPU 时，用 BE blocks 填充剩余 CU。直接使用不同 streams 会引入派发不同步与资源竞争；静态融合所有可能的 kernel 组合又会造成代码体积膨胀。DKP 在编译期准备统一模板，运行时通过函数指针选择候选计算，以单个 kernel、单个 stream 发射，先为 RT 分配足够的 CU，再把剩余 CU 分给 BE。[§5、Figure 8–9，pp.545–546](https://www.usenix.org/system/files/osdi22-han.pdf#page=8)

选择策略依据离线 profiling，贪心地填充空余 CU，并要求 BE 候选满足两个条件：执行时间短于 RT kernel，防止整个组合被更慢的 BE 拖住；CU occupancy 高于 RT kernel，防止组合 kernel 的资源配置降低 RT 的 occupancy。这里 occupancy 指每个 CU 可同时驻留的 blocks 数量。选择在没有空余 CU 或合适候选时结束，因此即使 RT 未占满 GPU，也不一定存在可用的 padding。[§5.2，p.547](https://www.usenix.org/system/files/osdi22-han.pdf#page=10)

函数指针本身也有成本：普通 device function 间接调用受寄存器分配限制，并引入上下文保存。REEF 将候选声明为 kernel 入口，在汇编层用跳转并准备入口状态，避免不必要的保存；又预生成不同寄存器配置的 proxy kernels，运行时选择能容纳候选需求的版本，防止过量分配降低 occupancy。在 MI50 上按 occupancy 档位归并为 10 个 proxies；shared memory 则改为启动时按候选最大需求动态分配。[§5.1，pp.546–547](https://www.usenix.org/system/files/osdi22-han.pdf#page=9)

## Evaluation

作者主要在 AMD MI50（60 CUs、16 GB 显存）上测试，使用 ROCm 4.3.0、TVM 0.8.0 和 Ubuntu 18.04。DISB 包含低负载、高 RT 负载、高 BE 负载、多 RT 与随机到达五类场景，模型为 ResNet-152、DenseNet-201、VGG-19、Inception v3 和 DistilBERT。比较对象包括串行调度 SEQ、多 stream 并发 GPUStreams，以及只运行 RT 的 RT-Only。[§7.1、Table 2，p.548](https://www.usenix.org/system/files/osdi22-han.pdf#page=11)

| 实验问题 | 作者报告的结果 | 条件与依据 |
|---|---|---|
| 保持 RT 延迟时能增加多少工作量？ | Apollo trace 下，相对 RT-Only，总吞吐达到 7.7 倍，RT 端到端延迟开销低于 2% | RT 到达率约 43 req/s，另有 5 个持续发送请求的 BE clients；[§7.2、Figure 11，p.549](https://www.usenix.org/system/files/osdi22-han.pdf#page=12) |
| 抢占是否仍需等待长 kernel？ | 单 BE client、五种模型的 reset-based 抢占为 35–38 μs，wait-based 为 268–790 μs | 在随机时刻发起 RT 请求；wait-based 基线也扩展了并发与 lazy eviction；[§7.3、Figure 12，pp.549–550](https://www.usenix.org/system/files/osdi22-han.pdf#page=12) |
| 队列优化是否必要？ | 单 BE client 下，HQ 重置由 17 μs 降至 3 μs，DQ 重置由 424 μs 降至 31 μs；CU 重置不足 3 μs | 分别对应异步内存回收与限制 DQ 容量；[§7.3、Figure 14，p.550](https://www.usenix.org/system/files/osdi22-han.pdf#page=13) |
| 后台恢复需要付出什么代价？ | 五种模型的恢复时间为 70–245 μs；执行时间开销大多约 2%，VGG 为 5.1% | 每个 BE 任务随机抢占并恢复一次；[§7.3、Figure 15(b)，pp.550–551](https://www.usenix.org/system/files/osdi22-han.pdf#page=13) |
| Padding 是否完全无干扰？ | 五种模型两两配对的高竞争实验中，RT 延迟平均增加约 1%，最高约 3% | 一个 RT client 与一个 BE client 持续发送请求；[§7.4、Figure 16，p.551](https://www.usenix.org/system/files/osdi22-han.pdf#page=14) |

Apollo 实验使用的是 Apollo 配合 SVL 模拟器运行时采集的 perception 日志到达模式，再以执行时间最接近的上述模型替代推理请求，并非直接执行完整 Apollo 模型栈。7.7 倍统计 RT 与新增 BE 工作的总吞吐，不能解释为单个模型加速。恢复时间也不能与抢占时间混用：§4.3 的设计描述提到约 30 μs，而 §7.3 的分模型恢复实测为表中的 70–245 μs；这两处数值差异的具体原因未在对应章节说明。[§7.1，p.548](https://www.usenix.org/system/files/osdi22-han.pdf#page=11)、[§4.3，p.545](https://www.usenix.org/system/files/osdi22-han.pdf#page=8)、[§7.3，p.550](https://www.usenix.org/system/files/osdi22-han.pdf#page=13)

## Applicability and Limitations

**幂等性是恢复正确性的前提。** 作者验证了 TVM 测试集 11 个模型中的 320 个 kernels，但这不等于任意 GPU 程序都可以直接中断后重放。论文提出可用事务化方式转换非幂等 kernel，但尚未将该方案纳入实现。[§2.1，p.541](https://www.usenix.org/system/files/osdi22-han.pdf#page=4)、[§8，p.552](https://www.usenix.org/system/files/osdi22-han.pdf#page=15)

**Padding 的收益取决于剩余 CU 与候选匹配。** RT 本身占用大部分 CU，或 BE kernel 普遍比 RT 更长时，收益会受限。CU 分配和 occupancy 约束也没有消除共享显存与 L2 cache 的竞争；作者在 §7.4 将部分延迟增加归因于这类竞争，§8 明确指出当前选择策略未建模显存竞争。因此，实测的小幅开销不是普遍的零干扰保证。[§5.2，p.547](https://www.usenix.org/system/files/osdi22-han.pdf#page=10)、[§7.4–8，pp.551–552](https://www.usenix.org/system/files/osdi22-han.pdf#page=14)

**NVIDIA 实验验证的是受限抢占版本 REEF-N。** 论文中的 REEF-N 无法修改闭源 runtime 的内部队列，也无法主动终止 CU 上正在运行的 kernels。它在 streams 外增加虚拟 HQ，以 lazy eviction 和限制 outstanding kernels 减少排队成本，最终仍须等待运行中的 kernels 完成。在 V100、CUDA 10.2 的 DISB 实验中，抢占延迟为 71–288 μs；不能将 AMD 完整实现的 35–38 μs 直接套用到这个版本。[§4.4，p.545](https://www.usenix.org/system/files/osdi22-han.pdf#page=8)、[§7.1，p.548](https://www.usenix.org/system/files/osdi22-han.pdf#page=11)、[§7.5，p.552](https://www.usenix.org/system/files/osdi22-han.pdf#page=15)
