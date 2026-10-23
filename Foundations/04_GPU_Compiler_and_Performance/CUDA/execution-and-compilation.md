# GPU 执行、编译与排错

## 从 Host launch 到指令执行

1. 编译器生成设备代码与 launch 所需元数据；CUDA C++、Triton 的前端和编译时机不同。
2. Host 通过 Runtime / Driver 提交 kernel、grid、block、参数和 shared memory 需求。通常是异步提交到某个 stream，CPU 返回不表示 GPU 完成。
3. GPU 为可执行的 block 分配 SM 资源。驻留数受线程数、寄存器、shared memory、架构资源上限等共同限制；block 顺序不能依赖源码中的索引顺序。
4. block 内线程组成 warp。调度器从就绪的驻留 warp 中选择可发射指令；内存依赖、barrier 或执行管线资源会影响选择。
5. 最终完成 kernel，并满足 stream 中后续依赖；Host 读取结果或回收相关资源前还要建立所需同步。

例：grid=100、block=256，共有 25,600 个线程、每个 block 8 个 warp。100 个 block 是逻辑任务数，不代表 GPU 同时运行 100 个 block，也不保证 `blockIdx.x=0` 首先完成。具体驻留上限应查询目标架构和编译资源信息。依据：[CUDA Programming Guide 13.3：Programming Model](https://docs.nvidia.com/cuda/cuda-programming-guide/01-introduction/programming-model.html)。

## Active 不等于当前正在发射

原文将 Active、Eligible、Stalled、Done 列为四个状态。NCU 调度分析中的 Active 指分配给调度器的活动 warp，Eligible 是其中准备好发射下一条指令的子集，Issued 是本轮被选择的 warp。没有被选中不等于依赖阻塞；“Done”也不应与前三者并列为通用性能指标状态机。

例：假设某周期有 8 个 active warp，3 个 eligible，选中其中 1 个发射；另 2 个 eligible 只是没有被选中，其余 5 个可能因不同依赖未就绪。Occupancy 高也不保证 eligible 足够多。观察 stall 时应同时看 issue 是否存在空洞，避免把所有等待都当成性能损失。依据：[Nsight Compute 2026.2.1：Scheduler Statistics 与 Warp State Statistics](https://docs.nvidia.com/nsight-compute/ProfilingGuide/index.html#sections-and-rules)。

## Hopper TMA 的关键是异步搬运和完成协议

TMA 为 tensor tile 的异步数据搬运提供硬件路径。这里讨论 Global→Shared tensor load：tensor map 描述全局 tensor 的形状、步长、格式及布局信息，指令还要指定目标 shared 地址和 tile 坐标，不能将全部参数都笼统说成“一个描述符”。

可按下面的依赖理解，而不是背一条没有条件的指令序列：

1. 准备符合约束的 tensor map 与 shared buffer；descriptor prefetch 是可能的性能优化，不是所有正确程序必需的一步。
2. 初始化并正确发布 mbarrier，设置本 phase 的参与/预期传输信息。涉及 async proxy 的发布与可见性须按接口要求处理，不能只用普通线程 barrier 替代。
3. 发起 TMA load；producer 可继续做与本 tile 无关的工作。
4. Consumer 等待对应 phase 的完成，随后使用 shared 数据；复用 buffer 前保证前一轮 consumer 已不再读取。

例：一个 64×64 的 FP16 tile 为 8192 字节。相关事务计数应与实际异步搬运字节匹配；计数错误可能导致等待无法完成或过早结束。双缓冲还要区分“tile 已填好”和“buffer 已可覆盖”这两个方向的依赖。

TMA 适合可用 tensor map 描述的块状访问、可摊销设置成本且能与计算重叠的场景。很小的 tile、低复用、描述符/同步开销、受限布局或没有可重叠工作时，未必优于其他搬运路径。对齐、swizzle、box 维度等按具体指令和架构核对；Shared→Global store 的完成协议也不能直接套用上述 load 流程。依据：[CUDA Asynchronous Data Copies 的 TMA 章节](https://docs.nvidia.com/cuda/cuda-programming-guide/04-special-topics/async-copies.html)。

## Triton 的表示逐步引入硬件约束

原文 `Python → TTIR → TTGIR → LLVM IR → Binary` 是高层概览。NVIDIA backend 的普通 Triton 路径可细化为：

```text
@triton.jit 的 Python 函数与特化参数
  → AST / 前端生成 TTIR
  → TTGIR（GPU layout、线程组织等）
  → LLVM IR（llir）
  → PTX（虚拟 ISA）
  → ptxas 生成 cubin（目标 GPU 机器码）
  → Runtime 加载并启动
```

TTIR 仍是程序 IR，不应简单当成无控制流的静态图；TTGIR 的 layout 描述逻辑 tensor 元素如何分布到线程、warp 等资源。Tiling、layout conversion、流水线、shared memory 分配等 pass 的精确顺序随 backend 与版本变化。Gluon 的入口表示也不同。[官方 `CUDABackend.add_stages`（2026-10-23）](https://github.com/triton-lang/triton/blob/main/third_party/nvidia/backend/compiler.py)。

例：同一个 1024 元素逻辑 tile 可用不同 warp 数与元素布局实现。数学表达式没有改变，但每线程元素数、寄存器需求、归约与数据交换方式可能变化。这说明语义 IR 和执行布局的区别；并不证明增加 warp 数一定更快。

Triton 教程版本为 `b575c0c38d428a609e25487db64051a5fa7bfab8`；上述 backend 阶段对应另行引用的官方移动分支，不代表该教程版本的固定调用链。不同 IR 抽象可对照 [FractalTensor](../../../Projects/04_GPU_Compiler_and_Performance/FractalTensor/note.md)。

## Segmentation fault 与 Illegal Memory Access 分开定位

Host segmentation fault 先看 CPU 堆栈、对象生命期、指针与并发；device illegal access 则检查索引、stride、分配大小、设备归属、对齐和异步释放。异步错误可能在后续同步点才被报告，报错 API 不一定是最初出错的位置。

CUDA 排查可先缩小输入与 launch，分别检查 launch 错误和执行错误，再运行合适的工具。下面是命令模板，不代表本次运行结果：

```bash
compute-sanitizer --tool memcheck ./repro
compute-sanitizer --tool racecheck ./repro
compute-sanitizer --tool synccheck ./repro
```

`memcheck` 查访问错误，`racecheck` 主要查 shared memory hazard，`synccheck` 查同步使用；这些工具不共同构成任意跨 stream/global-memory 协议的完整正确性证明。定位后还要在正常异步执行方式下复验。依据：[Compute Sanitizer](https://docs.nvidia.com/compute-sanitizer/ComputeSanitizer/index.html)。
