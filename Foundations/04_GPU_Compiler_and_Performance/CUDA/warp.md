# Warp-Level Primitives

在 SIMT 架构中，NVIDIA GPU 在 warps 中执行 32 个并行线程，每个线程能够访问自己的寄存器，从不同的寄存器中进行加载和存储，执行不同的控制流路径。CUDA 编译器和 GPU 协同工作确保一个 warp 中的线程执行相同的指令并尽可能最大化性能。

并行程序京城使用协同通信操作，例如并行 reducions 和 scans。CUDA C++ 支持协同操作通过提供 warp-level primitives 和 Cooperative Groups collectives。The Cooperative Groups collectives 是现在 warp 原语的顶部。

## Synchronized Data Exchange

每个同步数据交换原语在一个 warp 中的一组线程中集体执行。

```cpp
int __shfl_sync(unsigned mask, int val, int src_line, int width=warpSize);
int __shfl_down_sync(unsigned mask, int var, unsigned detla, 
                     int width=warpSize);
int __ballot_sync(unsigned mask, int predicate);
```

`__shfl_sync()` 和 `__shfl_down_sync()` 从相同的 warp 中的一个 thread 接收数据，每个调用 `__ballot_sync()` 的线程都会收到一个 bit mask，bit mask 代表 warp 中所有为 predicate argument 传递的真值。

## Warp Synchronization

当在一个 warp 中的线程去执行更复杂的通信或者数据交换原语提供的协作操作，可以使用 `__syncwarp()` 原语去同步在一个 warp 中的线程。它和 `__syncthreads()` 原语相似。

```cpp
void __syncwarp(unsigned mask=FULL_MASK);
```

## References

- [Using CUDA Warp-Level Primitives](https://developer.nvidia.com/blog/using-cuda-warp-level-primitives/)
- [Cooperative Groups: Flexible CUDA Thread Programming](https://developer.nvidia.com/blog/cooperative-groups/)
