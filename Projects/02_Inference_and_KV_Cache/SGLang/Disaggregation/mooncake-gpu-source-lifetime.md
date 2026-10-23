---
tags:
  - topics/source-reading
  - topics/disaggregation
  - topics/concurrency
date: 2026-10-16
---

# Mooncake：GPU-source 传输取消与资源回收

[PR !497](https://git.woa.com/wxg-odyssey/sglang/-/merge_requests/497)，源码固定为 `f96e0205bb312894edef6ec308fd04290931dfff`。它与 WeLM sparse HiCache 修改同属一个 PR，但解决的是通用 PD 分离并发问题，不是 sparse attention 算法的一部分。

## 1. 先区分数据搬运和状态通知

PD 分离中，Prefill 实例计算前缀并产生 KV，Decode 实例接收后继续生成 token。

```text
Prefill GPU 的 KV ── Mooncake 数据搬运 ──→ Decode GPU 的 KV
Prefill 状态     ── ZMQ 成功/失败通知 ──→ Decode 控制流程
```

数据搬运正在读取源 GPU 页时，源页不能被回收并分给其他请求。请求取消只表示业务不再需要结果，不等于已经运行的搬运立即停止。

本 PR 在 GPU-source 路径上修复两类时序：失败后过早结束传输函数，以及取消与成功通知交错。非阻塞状态发送则避免新增的锁因 socket 背压长期阻塞。

## 2. send_kvcache_slice：为什么失败后还要 wait

入口：[conn.py：send_kvcache_slice](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/disaggregation/mooncake/conn.py#L928)。这个函数支持 Prefill 和 Decode 使用不同 TP 数量时的 KV head 切片传输；TP 表示同一层的计算/数据分布到多个设备。前半段计算每层、每个 token 槽的源目标地址，末尾在线程池分别提交各层 K、V 的任务。

```python
futures.append(executor.submit(process_layer_tp_aware, src_k_ptrs[i], dst_k_ptrs[i]))
futures.append(executor.submit(process_layer_tp_aware, src_v_ptrs[i], dst_v_ptrs[i]))
```

每个线程任务调用 `engine.batch_transfer_sync()`。sync 表示当前线程等待该调用返回；外层有多个线程，因此任务之间仍然并发。

旧逻辑发现一个任务返回非零状态后，对其他 Future 调用 `cancel()`，然后返回错误。问题是 `Future.cancel()` 只能取消尚未执行的任务，不能强制停止已经运行的线程。

```text
A 失败，B 仍在读取源页
  → 尝试 cancel(B)，但 B 已运行
  → 如果函数直接返回，上层可能过早推进传输完成与资源回收
```

PR 增加：

```python
futures = []
try:
    # 提交任务，检查结果；失败时尝试取消尚未开始的任务
    ...
finally:
    concurrent.futures.wait(futures)
```

`wait()` 默认等待全部已提交 Future 结束。Python 在 `try` 内遇到 `return` 后，仍然先执行 `finally` 才真正返回；提交途中抛异常或 `future.result()` 抛异常也会经过这里。异常没有被吞掉，只是先等待已提交工作结束。

这项改动保证函数不会仅因为某个任务先失败，就在其他任务仍访问源页时提前退出。它本身没有提供底层传输超时；若底层任务永不返回，等待也不会凭空终止，这是另一层活性问题。

## 3. lease 如何保护资源

源码：[GPUTransferLease / GPUTransferManager](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/disaggregation/mooncake/gpu_source.py#L6)。

`GPUTransferLease` 可理解为一批传输对源缓存资源的占用凭证：

| 成员 | 含义 |
| --- | --- |
| completed | 这批工作已完成，可以进入资源退休判断；不等于业务结果成功 |
| cancelled | 业务取消标记；不等于 DMA 已停止 |
| error | 完成情况不确定时记录错误，阻止直接释放 |
| publication_lock | 将取消标记与最终状态发布串行化 |

manager 的主要流程是：

1. `register(room)` 为传输创建 lease 并加入 pending。
2. `defer_release()` 在仍有 pending 时取消该 room，并保存释放回调。
3. worker 在安全结束路径设置 `completed`；出现不确定异常时保留 error，不能概括为“无论成功失败都立即完成”。
4. `progress()` 移除已完成 lease。
5. room 不再有 pending lease 时，执行延迟释放回调。

例如同一个请求有两批传输 A、B，A 完成只能移除 A 的占用；只要 B 仍 pending，就不能运行依赖全部传输结束的释放回调。

`threading.Event` 是这里的 CPU 线程协调对象，不是 CUDA stream event；两者都叫 event，但语义和等待对象不同。

## 4. publication_lock 保护的是一组操作

只在通知前检查一次 `cancelled` 仍然存在窗口：

```text
传输线程                         调度器线程
读取 cancelled=False
                                 设置 cancelled=True
发送 Success
```

问题不在单独的 flag 读写，而在“检查后发布”之间允许取消插入。

[取消端](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/disaggregation/mooncake/gpu_source.py#L31) 在同一把锁下设置取消：

```python
with lease.publication_lock:
    lease.cancelled.set()
```

[传输线程的最终发布](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/python/sglang/srt/disaggregation/mooncake/conn.py#L1717) 则把最终检查、决定状态、通知所有目标端和本地状态更新放在这个 lease 的锁内。以下是 GPU-source 成功路径的简化示意，省略了异常和失败分支：

```python
with gpu_source.publication_lock:
    cancelled = source_lease.cancelled.is_set()
    status = Success if all(polls) and not cancelled else Failed
    if status == Failed:
        update_status(room, Failed)
        break
    for endpoint in dst_ranks_infos:
        sync_status_to_decode_endpoint(..., nonblocking=True)
    update_status(room, Success)
```

| 谁先拿锁 | 结果 |
| --- | --- |
| 取消线程 | 设置标记后释放锁，传输线程随后检查到取消，不发布成功 |
| 传输线程 | 完成检查并尝试发布通知后释放锁，取消线程才能设置标记 |

锁保证顺序明确，不保证取消永远优先，也不会撤回已经发出的成功通知。它只覆盖最后的状态发布，不覆盖整段 DMA，因此取消不需要为了这把锁等待整个 KV 搬运。

这里的锁是单个 lease 的互斥锁，不是跨进程、跨 rank 或跨多个通知 socket 的分布式事务。多个 endpoint 的通知也不能被理解成网络层原子广播。

## 5. 为什么锁内发送必须非阻塞

如果线程持有 publication_lock 后阻塞在 socket 发送，取消线程就无法获取锁。PR 给 GPU-source 状态发送增加 `nonblocking=True`，最终传入 `zmq.DONTWAIT`。

socket 背压导致不能立即发送时，`zmq.Again` 分支记录失败、更新本地失败状态并退出。成功状态在成功完成发送调用之后才写入本地；这表示发送调用已接受消息，不等于对端已收到并处理。

失败通知也有资源顺序约束：worker 不能因为某一批失败，就立即让对端认为全部写入已结束。负责收尾的一侧要先确认相关 TP 发送者的写入已经退休，再发布 Failed。最后的失败通知若也遇到背压，代码记录告警，并允许 Decode 使用已有等待超时路径。

因此“业务取消”“本地传输结束”“成功/失败通知”“源页释放”是不同事件，不能用一个 boolean 概括整个生命周期。

## 6. 已有验证与阅读边界

[test_mooncake_gpu_source_lifetime.py](https://git.woa.com/wxg-odyssey/sglang/blob/f96e0205bb312894edef6ec308fd04290931dfff/test/registered/unit/disaggregation/test_mooncake_gpu_source_lifetime.py) 中已经覆盖以下情况：

- 某个任务失败或抛异常时，仍等待其他正在运行的任务。
- 提交任务途中抛异常时，等待已提交任务。
- 取消先于发布，以及成功发布先于取消。
- dummy 路径、状态 socket 背压、其他 lease 尚未完成时不提前释放。

这些是测试代码提供的覆盖范围描述。本次笔记整理未运行它们，也没有进行真实跨机 DMA 故障注入。

与缓存恢复链路的关联是“异步 IO 必须尊重数据和资源的生命周期”，而不是二者使用完全相同的控制器或同步原语。WeLM sparse 的 Host L2 集成见 [HiCache 笔记](../WeLM-Sparse-Attention/hicache-indexer-k.md)。
