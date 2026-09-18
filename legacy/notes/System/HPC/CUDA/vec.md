# 向量化内存访问

许多 CUDA kernels 是 bandwidth bound，提升带宽中的 flops 的比例至关重要。

最简单的使用向量加载的方法是使用定义在 CUDA C/C++ 中的向量数据类型。例如 `int2`, `int4`, `float2`。

```cpp
__global__ void device_copy_vector2_kernel(int* d_in, int* d_out, int N) {
  int idx = blockIdx.x * blockDim.x + threadIdx.x;
  for (int i = idx; i < N/2; i += blockDim.x * gridDim.x) {
    reinterpret_cast<int2*>(d_out)[i] = reinterpret_cast<int2*>(d_in)[i];
  }

  // in only one thread, process final element (if there is one)
  if (idx==N/2 && N%2==1)
    d_out[N-1] = d_in[N-1];
}
```

```cpp
__global__ void device_copy_vector4_kernel(int* d_in, int* d_out, int N) {
  int idx = blockIdx.x * blockDim.x + threadIdx.x;
  for(int i = idx; i < N/4; i += blockDim.x * gridDim.x) {
    reinterpret_cast<int4*>(d_out)[i] = reinterpret_cast<int4*>(d_in)[i];
  }

  // in only one thread, process final elements (if there are any)
  int remainder = N%4;
  if (idx==N/4 && remainder!=0) {
    while(remainder) {
      int idx = N - remainder--;
      d_out[idx] = d_in[idx];
    }
  }
}
```

可以生成 `LD.E.128` 和 `ST.E.128` 的指令，可以进行 128 bits 的 vector load。

大部分情况下 vectorized loads 都比 scalar loads 快。然而使用 vectorized loads 会提升寄存器压并且减少并行度。所以如果 kernel 有寄存器限制或者有很低的并行度，使用 scalar loads 更合适。

## References
- [CUDA Pro Tip: Increase Performance with Vectorized Memory Access](https://developer.nvidia.com/blog/cuda-pro-tip-increase-performance-with-vectorized-memory-access/)