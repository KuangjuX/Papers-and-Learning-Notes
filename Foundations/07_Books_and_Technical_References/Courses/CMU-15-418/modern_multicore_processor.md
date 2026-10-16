# 现代多核处理器

## 为什么需要并行计算？

2004 年，芯片达到了 power wall 不能无限提高功率，需要使用多核处理器。

## 并行计算遇到的问题

负载均衡、通信问题

## Example program

使用泰勒展开计算正弦表达式。当前的处理器都是超标量处理器，应用了 ILP 技术，在进行多个乘法时没有办法进行指令并行。ILP 本身就拥有并行性，一些顺序指令也可以拥有强大的性能。

- Expressing parellelism using pthread: 使用 pthread 进行并行，一个进程处理前半部分，主线程处理后半部分

- Data-parallel expression

## Vector program(using AVX intrinsics)

SIMD：AVX 高级矢量，可以一次对多个值进行操作

`_mm256_xxx_ps` 256 指对字长为 32 字节进行操作，ps 表示 packed single，编译后会生成 SIMD 指令，会在 xmm 寄存器中进行操作。非矢量化也会使用 XMM 寄存器，但只会使用低位。

**对于完全相同的代码执行可以轻松通过矢量化来解决，那么对于条件执行应该如何进行矢量化？**

一次只做一次操作，设置一个 mask，只对掩码结果为 true 的操作执行或者写入寄存器，false 的不执行或者不写入寄存器。

## SIMD execution on modern CPUs

- SSE instructions: 128-bit operations: 4x32 bits or 2x64 bits(4-wide float vectors)

- AVX instructions: 256-bit operations: 8x32 bits or 4x64 bits(8-wide float vectors)

- AVX512 instructions: 512-bit operations: 16x32 bits or 8x64 bits(16-wide float vectors)

- 指令被编译器生成
  
  - Parallelisim explicity requested by programmer using intrinsics
  
  - Parallelism conveyed using parellel language semantics(e.g. `forall` example)
  
  - Parallelism inferred bt dependency analysis of loops(hard problem, even best compilers are not great on arbitrary C/C++ code)

- Terminology: "explicit SIMD": SIMD parallelization is performed at compiler time
  
  - Can inspect program binary and see instructions(`vstoreps`, `vmulps`, etc.)

- "Implicit SIMD"
  
  - Compiler generates a scalar binary(scalar instructions)
  
  - But N instances of the program are always run together on the processor, `execute(my_function, N)` // execute my_function N times
  
  - In other words, the interface to the hardware itself is data-parallel
  
  - Hardware(not compiler) is responsible for simultaneously executing the same instruction from multiple instances on different data on SIMD ALUs

- SIMD width of most modern GPUs ranges from 8 to 32
  
  - Divergence csn be a big issue(poorly written code might execute at 1/32 the peak capability of the machine!)

## Computation Summary

现代处理器中的并行执行格式：

- 多核：
  
  - 线程级并行：在每个核上同步执行不同的指令流
  
  - 软件决定什么时候创建线程（pthread API)

- SIMD：使用一个指令流来控制多个 ALU（使用一个核心）
  
  - 对于数据并行很有效率
  
  - 向量化过程可以被编译器做
  
  - [缺乏]依赖关系在执行之前是已知的（通常由程序员声明，但可以通过高级编译器的循环分析来推断

- 超标量：使用 ILP 在一单指令流中。在单核中并行执行不同的指令
  
  - 自动并行化并且在执行过程中被硬件进行探索

## Accessing memory

### Stalls

- 处理器暂停当依赖于上条指令

- 内存经常是处理器暂停的原因

### Prefetching reduces stalls

- 所有现代 CPU 有将数据预取到 cache 的逻辑

- 可以减少 stall 如果 cache 拿到了需要访问的数据

### Multi-threading reduces stalls

- 交错执行多线程指令在一个核中去隐藏 stalls

- 和预取一样，多线程是一个延迟隐藏，而不是一个延迟减少的技术

## GPUs: extreme throughput-oriented processors

- Instructions operate on 32 pieces of data at time(called "warps").

- warp = thread issuing 32-wide vector instructions

- Up to 48 warps are simultaneously interleaved

- 48x32 = 1536 elements can be processed concurrently by a core

## CPU vs. GPU memory hierarchies

- CPU: Big caches, few threads, modest memory BW Rely mainly on caches and prefetching.

- GPU: Small caches, many threads, huge memory BW Rely mainly multi-threading
