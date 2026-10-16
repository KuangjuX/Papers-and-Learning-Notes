# Cute

## Tensor 抽象
- `make_tensor<T>(layout layout)`: 栈上对象，Layout 为静态。
- `make_tensor(Pointer pointer, Layout layout)`: 堆上对象，Layout 可动可静。
- `local_tile`：通过 tile 方法对大 tensor 进行切块。
    ```
    Tensor tensor = make_tensor(ptr, make_shape(M, N, K));
    Tensor tensor1 = local_tile(tensor, make_shape(2, 3，4), make_coord(1, 2，3));
    ```
local_tile可以实现从大的tensor中切取tile块，并且通过coord进行块的选取，以下代码展示了将维度为MNK的张量按照2x3x4的小块进行划分，取出其中的第(1, 2, 3)块。

## MMA 抽象

### MMAOperation
operation通过指令实现D = AB + C计算，该operation需要设定A/B/C/D的操作数的类型。其中fma的参数形式依赖于D/A/B/CRegisters的类型和数据量。即，如果DRegister的类型为float[2], 则fma的接口中最前面的两个参数为float输出。

```cpp
struct SM75_16x8x8_F32F16F16F32_TN {
  using DRegisters = float[4];
  using ARegisters = uint32_t[2];
  using BRegisters = uint32_t[1];
  using CRegisters = float[4];

  // Register asm fma
  CUTE_HOST_DEVICE static void
  fma(float         & d0, float         & d1, float      & d2, float      & d3,
      uint32_t const& a0, uint32_t const& a1,
      uint32_t const& b0,
      float    const& c0, float    const& c1, float const& c2, float const& c3)
  {
    asm volatile("mma.sync.aligned.m16n8k8.row.col.f32.f16.f16.f32" ...);
  }
};
```

### MMA_Traits

针对特定的MMAOperation类型，定义其相关的辅助类型或值给MMA_Atom使用，用以完成块状的矩阵乘法，其需要提供出的类型信息如下:
```cpp
using ElementDVal =  // Logical A-value type
using ElementAVal =  // Logical B-value type
using ElementBVal =  // Logical C-value type
using ElementCVal =  // Logical D-value type

using ElementAFrg =  // A-type consumed by MMA  (if ommitted, same as ElementAVal)
using ElementBFrg =  // B_type consumed by MMA  (if ommitted, same as ElementBVal)
using ElementCFrg =  // C_type consumed by MMA  (if ommitted, same as ElementCVal)

using Shape_MNK =    // Logical MxNxK shape of the MMA

using ThrID     =    // Logical thread id (tid) -> tidx

using ALayout =      // (Logical thread id (tid), Logical value id (vid)) -> Flat MK-coord
using BLayout =      // (Logical thread id (tid), Logical value id (vid)) -> Flat NK-coord
using CLayout =      // (Logical thread id (tid), Logical value id (vid)) -> Flat MN-coord
```


### TiledMMA

TiledMMA整体表达了矩阵在MNK空间维度如何通过Atom组织而来，其结构内部定义了很多函数，这些函数提供了对给定计算块的划分能力，但是这部分逻辑终端用户早期可以不用太多关注(这些)，只需要关注如下两个API即可，第一个是TiledMMA的模版参数，第二时TiledMMA提供的get_thread_slice函数。模版参数表达了TiledMMA在MMA_Atom上的扩展逻辑：AtomLayoutMNK表示M N K方向上分别重复几次Atom，这种重复会要求更多的执行线程，ValueLayoutMNK表述了对该Atom在M N K方向上重复几次，这里的重复是通过重复计算来完成的。get_slice、get_thread_slice函数功过给定线程id则获取线程对应到ThrMMA结构，形式如下

```
template <class MMA_Atom,
          class AtomLayoutMNK   = Layout<Shape<_1,_1,_1>>,
          class ValLayoutMNK    = Layout<Shape<_1,_1,_1>>,
          class PermutationsMNK = Tile<Underscore,Underscore,Underscore>>
struct TiledMMA : MMA_Atom {
  ...;
  ThrMMA get_slice(ThrIdx thr_idx)；
  ThrMMA get_thread_slice(ThrIdx thr_idx);
  ...;
}
```

### ThrMMA

该结构由TiledMMA根据具体的线程id分解而来（ThrMMA即Thread MMA），其描述了线程级实现D = A x B + C任务时的功能抽象，主要是如下partition类函数和partition_fragment类函数。其中partition函数完成对逻辑Tensor针对该线程的划分，即Tensor参数提供大块的逻辑矩阵单元，其返回值返回该线程需要进行的任务的Tensor描述。如Tensor C为BLK_M x BLK_N，则partition_C可以得到线程级别的任务，维度为（MMA, MMA_M, MMA_N）, MMA表达了TileMMA一次能计算的单元，MMA_M, MMA_N表达了M方向和N方向需要分块数量。partition_fragment类函数是按照partition类函数返回的Tensor形状生成的对应的寄存器表示。

```cpp
ThrMMA {
  Tensor partition_C(Tensor C);
  Tensor partition_A(Tensor A);
  Tensor partition_B(Tensor B);
  Tensor partition_fragment_C(Tensor C);
  Tensor partition_fragment_A(Tensor A);
  Tensor partition_fragment_B(Tensor B);
}
```

### cute::gemm
cute::gemm是线程完成MMA计算的函数，其核心接口如下，这里D、A、B、C接收的Tensor即为ThrMMA所划分出来的Tensor:
```
void gemm(TiledMMA &mma, Tensor& D, Tensor const& A, Tensor const& B, Tensor const& C)
```

## Copy 抽象
对于GPU编程而言，输入数据一般来被存储在全局内存之上。这就涉及到如何高效地将全局内存上的数据运到Tensor Core MMA计算所要求的寄存器上的问题。数据搬运的数学描述是 D = S,其中D和S是前文中介绍的Tensor结构，分别表示目标Tensor（Destination）和源Tensor（Source）。 它们一般存储在不同的存储层次上，它们有各自的Layout描述。

和MMA类似，cute对数据搬运提供了对数据搬运的数据结构抽象，主要包括CopyOperation、Copy_Traits、Copy_Atom、TiledCopy、ThrCopy和拷贝函数cute::copy。这些结构和函数共同完成对GPU各个层级存储之上的数据进行搬运的抽象和实现:

- CopyOperation提供了指令级的数据搬运的封装，NVidia在不同的硬件架构、不同的存储层次之间数据搬运提供了不同的指令，如前文提到的ldmatrix和LDS等，还有针对Ampere架构的cp.async等，我们在使用时只需要根据我们的硬件支持的指令情况和需要搬运的内存层次来选择已经提供的Operation即可;
- Copy_Traits和MMA_Traits类似，提供了CopyOperation类型没有提供，但是其使用者Copy_Atom却需要的起到桥梁作用的信息；
- Copy_Atom提供了指令级别不可分割的数据搬运的拷贝能力；
- TiledCopy是对Copy_Atom的能力的封装通过重复拷贝执行单元的个数（增加执行线程）或者做多次的拷贝实现对原子能力的重复；
- TildCopy提供的是逻辑上的拷贝的概念，在具体的kernel执行之时，为了复合CUDA的编程范式，需要写成线程级别的指令，ThrCopy可以实现将大块的数据根据TiledCopy所描述的划分规则，通过提供当前线程的线程号threadIdx.x对大块的Tensor进行划分，得到当前线程为了完成D = S 拷贝所需要该线程做的任务；
- cute::copy在ThrCopy提供了当前线程的任务之后，便可以通过copy函数触发具体的数据搬运指令。

### CopyOperation
Operation封装了特定硬件支持拷贝能力。它一般通过PTX汇编指令（或CUDA实现）来完成，实现指令集的拷贝能力抽象，其定义了源数据类型和目标数据类型以及个数，同时提供copy函数供框架层调用，示例如下，源寄存器为一个uint128_t(128bit数据)，目标寄存器位一个uint32_t的数据：

```
struct SM75_U32x1_LDSM_N {
  using SRegisters = uint128_t[1];
  using DRegisters = uint32_t[1];

  void copy(uint128_t const& smem_src, uint32_t& dst) {
    asm volatile ("ldmatrix.sync. ...\n");
  }
};

```

### Copy_Traits

traits补充了CopyOperation的信息，如其提供了执行operation所需要的线程数，源数据和目标数据的Layout排布情况，其描述了线程和数据的存放关系，即通过线程号和寄存器号可以得到数据的逻辑位置，同时提供RefLayout供线程级的数据拆分时实现retile能力，具体的定义如下:

```
struct Copy_Traits<SM75_U32x1_LDSM_N> {
  // Logical thread id to thread idx (warp)
  using ThrID = Layout<_32>;

  // Map from (src-thr,src-val) to bit
  using SrcLayout = Layout<Shape <Shape <  _8,_4>,_128>,
                           Stride<Stride<_128,_0>,  _1>>;
  // Map from (dst-thr,dst-val) to bit
  using DstLayout = Layout<Shape <_32,_32>,
                           Stride<_32, _1>>;

  // Reference map from (thr,val) to bit
  using RefLayout = DstLayout;
};

```

### Copy_Atom
Atom将Operation和Traits进行封装和抽象，定义了内部数据类型，供形成TiledCopy和后续的ThrCopy分解任务时提取信息，如其继承来自Traits的线程情况和数据Layout情况，提供call方法实现对底层指令的调用入口:

```
struct Copy_Atom<Copy_Traits<Args...>, T>
  : Copy_Traits<Args...>
{
  using Traits = Copy_Traits<Args...>;

  // Bit and Thr layouts from the Copy_Traits
  using ThrID        = typename Traits::ThrID;
  using BitLayoutSrc = typename Traits::SrcLayout;
  using BitLayoutDst = typename Traits::DstLayout;
  using BitLayoutRef = typename Traits::RefLayout;

  using ValType = T;

  void call(Tensor<TS,SLayout> const& src, Tensor<TD,DLayout>& dst);
};
```

### TiledCopy

tiled抽象通过对Atom能力进行重复得到更大的块的拷贝能力，对Atom的重复可以通过提供线程-存储的Layout来提供，也可以直接通过提供Atom能力和MMA中的tiled_mma实现，如make_tiled_copy_A/B/C，因为MMA已经提供了计算D = AxB + C时所需要的数据划分能力，当然这些函数时针对寄存器表达能力的，具体的模版参数和形参如下。除了描述对Atom的重复方式外，TiledCopy提供的核心函数时get_slice和get_thread_slice,其可以实现将逻辑Tensor的拷贝能力根据线程的id得到每一个线程的Layout描述的拷贝任务，所以以上两个函数的返回对象为ThrCopy：

```
template <class Copy_Atom,
          class LayoutCopy_TV,  // (tid,vid) -> coord   [Need not be 2D...]
          class ShapeTile_MN>   // coord space
struct TiledCopy : Copy_Atom {
  ThrCopy get_slice(ThrIdx const& thr_idx)；
  ThrCopy get_thread_slice(ThrIdx const& thr_idx));
};

CUTE_HOST_DEVICE
auto make_tiled_copy_A(Copy_Atom<Args...> const& copy_atom,
                  TiledMMA           const& tiled_mma)

```

### cute::copy
copy函数是拷贝的实际执行函数，调用该函数会触发线程级别的拷贝的发生，完成线程指令的执行，实现src到dst到数据拷贝指令，实现逻辑上的D = S。我们用块状逻辑对数据进行拷贝的时候可能遇到边界处理的情况，这时可以通过copy_if实现对某些数据拷贝的mask，从额避免非法的数据访问，其函数原型如下:

```
void copy(TiledCopy const& copy, Tensor const& src, Tensor& dst);
void copy_if(TiledCopy const& copy, PrdTensor const& pred, Tensor const& src, Tensor& dst);
```

