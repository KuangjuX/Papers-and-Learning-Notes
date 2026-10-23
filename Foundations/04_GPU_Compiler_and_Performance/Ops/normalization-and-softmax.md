# RMSNorm、Softmax 与在线归约

## RMSNorm 归约什么

对一行长度 H 的输入 x，本文采用 epsilon 在平方根内、只有 scale 的定义：

$$
r=\left(\frac{1}{H}\sum_{j=1}^{H}x_j^2+\epsilon\right)^{-1/2},\qquad
y_j=x_jr\gamma_j.
$$

例：x=(3,4)，H=2，gamma=(1,1)，为便于手算令 epsilon=0。平方和为 25，均方 12.5，r≈0.2828427，输出约为 (0.8485281,1.1313708)，其均方为 1。RMSNorm 不减去行均值；不能把它写成 LayerNorm。实际实现使用正 epsilon，原 Notion 的可选 beta 是额外仿射偏移，是否存在要看模型定义。依据：[RMSNorm 原论文](https://arxiv.org/abs/1910.07467)。

一行一个 block 的基本流程：线程分段累加平方和 → warp 内归约 → shared memory 汇总各 warp → block 得到总和 → 所有线程获得同一个 r → 写回自己负责的元素。H 可以大于线程数，但线程数、尾部 mask、索引范围与输入输出别名仍要满足实现约束。

## 原 RMSNorm 草稿的两个关键错误

原第二级归约只让 `threadIdx.x < num_warps` 的线程进入，却使用全 warp mask；这些线程又都写 `s_sum[0]`。应让完整第一个 warp 参与、无效项填 0，并只让 lane 0 写最终结果。修改 mask 本身不能自动解决读取未参与 lane 的问题。

以下 CUDA 片段用于分析错误，未经 GPU 编译或运行。原广播代码为：

```cpp
float rms;
if (thread_id == 0) rms = rsqrtf(total_sum_sq / hidden_dim + eps);
rms = __shfl_sync(0xFFFFFFFF, rms, 0);
```

shuffle 仅在每个 warp 内取 lane 0；warp 1 的 lane 0 不是 block 的 thread 0，其 `rms` 未初始化。修正可使用 shared 标量配合 block barrier，或在正确广播 `total_sum_sq` 后让每个线程自行计算 r。

下面是**仅供说明的 block 求和片段**，约束一维 block、blockDim.x 为 32 的正整数倍且不超过 1024、所有线程都调用。第二级的 0 是求和单位元：

```cpp
__device__ float block_sum(float v) {
    __shared__ float partial[32];
    int lane = threadIdx.x % 32;
    int warp = threadIdx.x / 32;
    int nw = blockDim.x / 32;
    for (int d = 16; d > 0; d >>= 1)
        v += __shfl_down_sync(0xffffffffu, v, d);
    if (lane == 0) partial[warp] = v;
    __syncthreads();
    if (warp == 0) {
        float w = lane < nw ? partial[lane] : 0.0f;
        for (int d = 16; d > 0; d >>= 1)
            w += __shfl_down_sync(0xffffffffu, w, d);
        if (lane == 0) partial[0] = w;
    }
    __syncthreads();
    float total = partial[0];
    __syncthreads(); // 后续再次调用时，避免 scratch 在其他线程读取前被覆盖。
    return total;
}
```

例：64 个线程每人贡献 1，第一级两个 warp 分别写 32；第二级第一个 warp 的输入为 (32,32,0,…)，总和 64。所有线程在最后的 barrier 后读到相同总和。不是让两个线程在全 mask 下单独执行 shuffle。具体 mask 约束依据：[CUDA Warp Sync Functions](https://docs.nvidia.com/cuda/cuda-programming-guide/05-appendices/cpp-language-extensions.html#warp-sync-functions)。

对于 max 归约，单位元应为负无穷而不是 0。原普通 Softmax 的 shared scratch 广播也要检查重复调用时读写生命周期，不能因为算法看起来相同就省掉同步证明。完整 kernel 尚需检查头文件、launch、shared memory、精度与特殊值。

## 稳定 Softmax：归一化之前先减最大值

对一行有限实数 x，令 m=max(x)，则分子分母同时除以 exp(m)：

$$
y_i=\frac{e^{x_i}}{\sum_j e^{x_j}}
=\frac{e^{x_i-m}}{\ell},\qquad
\ell=\sum_j e^{x_j-m}.
$$

例：x=(1000,1001)。直接求指数容易溢出，减最大值后是 (-1,0)，指数为 (0.3678794,1)，和为 1.3678794，输出为 (0.2689414,0.7310586)。平移消除了公共尺度，没有改变概率。

朴素稳定版本可分成扫描 max、扫描 exp 求和、再次扫描写输出三遍；若整行保留在寄存器或 shared 中，实际 HBM 读取次数会不同。因此不能只数数学循环就宣称某个 kernel 必定节省多少显存访问。输入类型、输出类型与累加类型也要分别说明。

## Online Softmax 为什么要重缩放旧的和

处理前 k−1 个元素后，保存旧最大值 m_old 与相对旧最大值的指数和 ell_old。读到新元素 x_k，先令 m_new=max(m_old,x_k)，再把旧贡献移到新基准：

$$
\sum_{j<k} e^{x_j-m_{\mathrm{new}}}
=e^{m_{\mathrm{old}}-m_{\mathrm{new}}}\ell_{\mathrm{old}},\qquad
\ell_{\mathrm{new}}=e^{m_{\mathrm{old}}-m_{\mathrm{new}}}\ell_{\mathrm{old}}
+e^{x_k-m_{\mathrm{new}}}.
$$

例：先读 1，得到 (m,ell)=(1,1)；再读 3，得到 (3,exp(-2)+1)≈(3,1.1353353)；再读 2，最大值不变，ell 增加 exp(-1)，最终 ell≈1.5032147。输出 (exp(-2),1,exp(-1))/ell≈(0.0900306,0.6652410,0.2447285)。

原文中间等式把左端误写成基于旧 m 的指数和。真正需要转换的左端是基于**新 m**的指数和；末尾递推式方向是正确的。依据：[Online normalizer calculation for softmax](https://arxiv.org/abs/1805.02867)。

初始化可将第一个有效元素设为 (x_1,1)，避免空集合的 `-inf - -inf`。本篇参考算法仅接收非空、有限输入；全 mask、NaN 与无穷输入需要单独定义，不直接套用有限输入公式。

```python
import math

def online_softmax(xs):
    if not xs or not all(math.isfinite(x) for x in xs):
        raise ValueError("expect non-empty finite input")
    m, total = xs[0], 1.0
    for x in xs[1:]:
        new_m = max(m, x)
        total = total * math.exp(m - new_m) + math.exp(x - new_m)
        m = new_m
    return [math.exp(x - m) / total for x in xs]
```

它把 max 与分母统计合到一遍，独立 Softmax 的最终输出仍需遍历输入或保留输入。Online 统计并不意味着所有概率可以在读到各元素时立即最终确定。原 Notion 的 `flash_online_softmax_kernel` 省略了 sum 归约、`combine_stats` 调用和输出写回，属于未完成草稿，不能拿来测性能。

## 从逐元素更新到合并两个 tile

两块 A、B 分别保存 (m_A,ell_A)、(m_B,ell_B)，则可合并为：

$$
m=\max(m_A,m_B),\qquad
\ell=e^{m_A-m}\ell_A+e^{m_B-m}\ell_B.
$$

例：A=(1,3) 得到 (3,1+exp(-2))；B=(2) 得到 (2,1)。合并后的 m=3，ell=1+exp(-2)+exp(-1)，与逐元素结果相同。这让线程、warp、tile 和设备可通过同一种统计量合并；浮点运算顺序不同仍可能产生舍入差异。

若还需要 Attention 的加权输出，可同时维护未归一化向量和。每次 m 变大时，分母和向量和都要按相同比例缩放。最后再相除，详见 [分布式 Attention](../../03_Distributed_Training_and_MoE/Sequence-Parallelism/distributed-attention.md)。这才是将 Online Softmax 与 FlashAttention / Ring Attention 连起来的关键。
