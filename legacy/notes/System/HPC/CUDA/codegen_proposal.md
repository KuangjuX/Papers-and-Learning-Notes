# 代码生成设计提案

本节以 Nvidia 平台上的 GEMM 代码生成为例，讨论代码生成提案。

## 基于子图的生成

默认的算子级在全局内存进行生成，即给定了 `input` 与 `output` 张量，生成 `__global__` 级别的 kernel 并对整个计算图进行连接。然而，有时候我们需要对与不同算子进行融合以减少同步与内存的开销。因此我们需要引入子图结构，并在子图中规定融合的级别，例如：

```cpp
class SubGraph {
    std::vector<std::variant<SubGraph, Operator>> subgraphs;
    MemoryLevel mem_level;
}
```

其中 `subgraphs` 一个子图递归结构，下一级既可以是一个子图，也可以是一个单独的算子，并在融合的内存级进行逐层下降。

## 原语设计

这个代码生成提案希望设计不同的原语，通过组合以生成不同的融合算子的代码生成。接下来以 Nvidia 在 Tensor Core 以及 Cute，Cutlass 等实现来进行说明。Tensor Core，Cute，Cutlass 的易用性从上到下一次递增，但是灵活度则依次递减。

### Tensor Core

**GEMM**

```cuda
__global__ void matmul(half *A, half *B, half *C, int M, int N, int K,
                       float alpha, float beta) {
    // A is row-major
    // B is col-major
    // 128 threads [x, y, z] = [32, 2, 2]
    // threadblock mma: 128x128x32
    // warp mma: 64x64x16
    extern __shared__ uint8_t shared_storage[];
    half *SA = reinterpret_cast<half *>(shared_storage);
    half *SB =
        reinterpret_cast<half *>(shared_storage + MI * KI * sizeof(half));
    float *SC = reinterpret_cast<float *>(shared_storage);

    // Frag A 被分成 MII / WmmaM 个片段
    nvcuda::wmma::fragment<nvcuda::wmma::matrix_a, wmmaM, wmmaN, wmmaK, half,
                           nvcuda::wmma::row_major>
        FragA[MII / wmmaM];

    // Frag B 被分成 NII / WmmaN 个片段
    nvcuda::wmma::fragment<nvcuda::wmma::matrix_b, wmmaM, wmmaN, wmmaK, half,
                           nvcuda::wmma::col_major>
        FragB[NII / wmmaN];

    // 累加器被分为 MII / WmmaM * NII / WmmaN 个片段
    nvcuda::wmma::fragment<nvcuda::wmma::accumulator, wmmaM, wmmaN, wmmaK,
                           float>
        Accum[MII / wmmaM * NII / wmmaN];

    // 初始化累加器
    for (int mii = 0; mii < MII / wmmaM; mii += 1) {
        for (int nii = 0; nii < NII / wmmaN; nii += 1) {
            nvcuda::wmma::fill_fragment(Accum[mii * (NII / wmmaN) + nii], 0.0);
        }
    }

    // 沿着 K 纬度进行切分
    for (int ko = 0; ko < K / KI; ko += 1) {
        // 加载共享内存
        loadSmemA(SA, A, M, K, ko);
        loadSmemB(SB, B, N, K, ko);
        __syncthreads();
        // 沿着 KTILE 进行迭代
        for (int ki = 0; ki < KI / KII; ki += 1) {
            // 64x64x16 mma for each warp
            // 加载片段
            loadFragA(FragA, SA, ki);
            loadFragB(FragB, SB, ki);
            for (int mii = 0; mii < MII / wmmaM; mii += 1) {
                for (int nii = 0; nii < NII / wmmaN; nii += 1) {
                    // 16x16x16 for each wmma
                    nvcuda::wmma::mma_sync(Accum[mii * (NII / wmmaN) + nii],
                                           FragA[mii], FragB[nii],
                                           Accum[mii * (NII / wmmaN) + nii]);
                }
            }
        }
    }
    storeAccum(SC, Accum);
    __syncthreads();
    storeSmemC(C, SC, M, N);
}
```

上面是一个简单地使用 Tensor Core 的用 Sliced-K 方式实现 GEMM Kernel 的，针对这段代码，涉及到一系列原语：

- `CudaVar`: Cuda 变量，涉及到声明、初始化、填充等操作，需要针对 Cuda 的不同内存级进行定义。
- `iteration`: 迭代操作对象，接受迭代变量、start、end、step 作为对象内变量并可以生成迭代操作以及获取迭代变量。
- `sync`: 同步原语操作，基于不同内存级进行生成，例如 `__syncthreads()` 以及 `cudaDeviceSynchnorize()`。
- `mma`: MMA 是 CUDA Tensor Core 的内置操作，分为两种，一种是由 Nvidia 提供的 WMMA api，直接掉库，使用简单，但性能不如 MMA，一种是手写 CUDA PTX 实现 MMA 操作，实现困难，但性能很高。
- `Load`/`Store`: 内存加载存储操作，也是最为复杂的原语设计，涉及到启动 kernel 的 thread layout 以及 memory layout，例如，为了满足 MMA 的内存 layout 要求，需要将一个 [MTILE， NTILE] 的两维度共享内存铺成 [MTILE/WmmaM, NTILE/WmmaN, WmmaM, WmmN] 的四维度内存。

**GEMM fused**

```cuda
// GEMM + GELU + GEMM
// A: M x K row major
// B: K x N row major
// C: N x L col major
// ThreadBlock0_N = N0
// ThreadBlock1_N = N1
__global__ void gemm_gelu_gemm_fusion(half *A, half *B, half *C, half *D, int M,
                                      int N, int K, int L, float alpha,
                                      float beta) {
    // A is row-major
    // B is col-major
    // C is col-major
    // 128 threads [x, y, z] = [32, 2, 2]
    // threadblock mma: 128x128x32
    // warp mma: 64x64x16

    extern __shared__ uint8_t shared_storage[];
    half *SA = reinterpret_cast<half *>(shared_storage);
    half *SB =
        reinterpret_cast<half *>(shared_storage + MI * KI * sizeof(half));
    half *S1 = reinterpret_cast<half *>(shared_storage);

    nvcuda::wmma::fragment<nvcuda::wmma::matrix_a, wmmaM, wmmaN, wmmaK, half,
                           nvcuda::wmma::row_major>
        FragA[MII / wmmaM];

    nvcuda::wmma::fragment<nvcuda::wmma::matrix_b, wmmaM, wmmaN, wmmaK, half,
                           nvcuda::wmma::col_major>
        FragB[NII / wmmaN];

    nvcuda::wmma::fragment<nvcuda::wmma::accumulator, wmmaM, wmmaN, wmmaK, half>
        Accum[MII / wmmaM * NII / wmmaN];

    // 初始化累加器
    for (int mii = 0; mii < MII / wmmaM; mii += 1) {
        for (int nii = 0; nii < NII / wmmaN; nii += 1) {
            nvcuda::wmma::fill_fragment(Accum[mii * (NII / wmmaN) + nii], 0.0);
        }
    }

    // 沿着 K 纬度进行切分
    for (int ko = 0; ko < K / KI; ko += 1) {
        // 加载共享内存
        loadSmemA(SA, A, M, K, ko);
        loadSmemB(SB, B, N, K, ko);
        __syncthreads();
        // 沿着 KTILE 进行迭代
        for (int ki = 0; ki < KI / KII; ki += 1) {
            // 64x64x16 mma for each warp
            // 加载片段
            loadFragA(FragA, SA, ki);
            loadFragB(FragB, SB, ki);
            for (int mii = 0; mii < MII / wmmaM; mii += 1) {
                for (int nii = 0; nii < NII / wmmaN; nii += 1) {
                    // 16x16x16 for each wmma
                    nvcuda::wmma::mma_sync(Accum[mii * (NII / wmmaN) + nii],
                                           FragA[mii], FragB[nii],
                                           Accum[mii * (NII / wmmaN) + nii]);
                }
            }
        }
    }
    storeAccum(S1, Accum);
    __syncthreads();
    gelu(S1);
    __syncthreads();
    // S1: MI * NI
    // SC: LI * NI
    half *SC =
        reinterpret_cast<half *>(shared_storage + MI * NI * sizeof(half));
    half *S2 = reinterpret_cast<half *>(shared_storage);

    nvcuda::wmma::fragment<nvcuda::wmma::matrix_a, wmmaM, wmmaN, wmmaK, half,
                           nvcuda::wmma::row_major>
        Frag1[MII_2 / wmmaM_2];

    nvcuda::wmma::fragment<nvcuda::wmma::matrix_b, wmmaM, wmmaN, wmmaK, half,
                           nvcuda::wmma::col_major>
        FragC[LII_2 / wmmaL_2];

    nvcuda::wmma::fragment<nvcuda::wmma::accumulator, wmmaM, wmmaN, wmmaK, half>
        Accum2[MII_2 / wmmaM_2 * LII_2 / wmmaL_2];

    for (int no = 0; no < N / NI_2; no += 1) {
        loadSmemC<half>(SC, C, N, L);
        __syncthreads();
        for (int ni = 0; ni < NI_2 / NII_2; ni += 1) {
            // TODO: Load Warp Tile.
            loadFragA(Frag1, S1, ni);
            loadFragB(FragC, SC, ni);
            for (int mii = 0; mii < MII_2 / wmmaM_2; mii += 1) {
                for (int lii = 0; lii < LII_2 / wmmaL_2; lii += 1) {
                    nvcuda::wmma::mma_sync(
                        Accum2[mii * (LII_2 / wmmaL_2) + lii], Frag1[mii],
                        FragC[lii], Accum2[mii * (LII_2 / wmmaL_2) + lii]);
                }
            }
        }
    }

    storeAccum(S2, Accum2);
    __syncthreads();
    storeSmemAccum<half>(D, S2, M, L);
}
```

这是一个手写的 GEMM 在共享内存层级融合 GELU 以及 GEMM 的 Tensor Core 实现。为了生成上述的代码，我们需要指定融合的层级，并规定输出输出的变量层级。

例如，对于一阶段的 GEMM 来说，两个输入变量都是全局内存，输出变量则为共享内存，这意味着对于第一阶段 GEMM 我们不应当进行同步，而应该生成到共享内存就停止生成。

对于第二阶段的共享内存，两个输入变量的 A 为共享内存，B 为全局内存，C 为共享内存，融合级别为共享内存级，这意味着 A 不需要从全局内存进行加载，只需要将 B 加载入共享内存并重新执行一遍 Sliced-K 的 GEMM 即可。当然，这要求第一阶段 GEMM 与第二阶段 GEMM 有相同的 threadBlock 组织，即 ThreadBlock_0 = ThreadBlock_1。

### Cute

TODO

### Cutlass

TODO

### GEMM Optimization

- Sliced-K
- Split-K
- Stream-K
- MultiStage
