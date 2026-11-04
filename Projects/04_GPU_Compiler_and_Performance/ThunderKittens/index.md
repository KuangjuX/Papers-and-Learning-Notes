# ThunderKittens：Register Tile

矩阵运算需要把逻辑 tile 映射到 warp 内各线程的寄存器。ThunderKittens 用布局类型封装这一映射，让 load、逐元素操作与 MMA 消费相容的数据分布；代价是 tile 变大时，每个线程持有的状态和寄存器压力也增加。

## 从标量元素数算到寄存器占用

下面保留早期 `T2` 向量类型接口的代码，讨论范围是 FP16/BF16/FP32 的 16×16 subtile。较新版本 [`67845f5f`](https://github.com/HazyResearch/ThunderKittens/blob/67845f5fa48d05343dbbc1ba1403f11061f08d2d/include/types/register/rt_base.cuh) 已改为接收标量类型并在内部推导 packed type，还支持其他 tile 类型；旧别名不应直接当作新版 API 使用。

`rt_base` 定义一个 warp 共同持有的 subtile：

```cpp
template<typename T2, ducks::rt_layout::all _layout> struct rt_base {
    using identifier = ducks::rt_base::identifier; ///< Type identifier for the rt_base structure.
    using layout = _layout; ///< Layout of the matrix tile.
    using dtype = T2; ///< Data type of the matrix elements

    static_assert(
        std::is_same_v<dtype, bf16_2> || std::is_same_v<dtype, float2> || std::is_same_v<dtype, half_2>,
        "rt_base was provided an unsupported type."
    );

    static constexpr int tile_size            = 16; ///< Tile size is a constant 16.
    static constexpr int rows                 = tile_size; ///< Number of rows.
    static constexpr int cols                 = tile_size; ///< Number of cols.
    static constexpr int num_elements         = rows*cols; // 256
    static constexpr int elements_per_thread  = num_elements / 32; // 8

    static constexpr int packed_per_thread    = elements_per_thread / base_types::packing<T2>::num(); // 4
    static constexpr int registers_per_thread = packed_per_thread * sizeof(T2) / 4; // 4 or 8, registers are 32-bit words

    static constexpr int col_vec_pack = layout::is_row ? 1 : 2; // for holding row reductions
    static constexpr int row_vec_pack = layout::is_row ? 2 : 1; // for holding column reductions

    T2 data[packed_per_thread]; ///< The actual storage for the base tile
};
```

16×16 tile 有 256 个标量，分给 32 个线程后，每线程持有 **8 个标量**。`T2` 将两个标量打包，所以 `data` 有 4 个 packed 元素：BF16/FP16 的 packed 元素为 4 B，占 4 个 32-bit 寄存器；FP32 的 `float2` 为 8 B，占 8 个。元素数、packed 元素数和寄存器数不能混用。

## 组合更大的 tile，同时增加线程私有状态

RegTile 通过二维 subtile 数组扩展宽高：

```cpp
template<typename T2, int _height, int _width, ducks::rt_layout::all _layout=ducks::rt_layout::row>
struct rt {
    using identifier = ducks::rt::identifier; ///< Type identifier for the rt structure.
    using layout = _layout; ///< Layout of the matrix tile.
    using dtype = T2; ///< Data type of the matrix elements.

    static constexpr int height              = _height; ///< Height in subtiles.
    static constexpr int width               = _width; ///< Width in subtiles.
    static constexpr int rows                = height  * rt_base<dtype, layout>::tile_size; ///< Total number of rows.
    static constexpr int cols                = width * rt_base<dtype, layout>::tile_size; ///< Total number of columns.
    static constexpr int tile_size           = rt_base<dtype, layout>::tile_size; ///< Size of the base tile.
    static constexpr int num_elements        = rt_base<dtype, layout>::num_elements        * width * height; ///< Total number of elements.
    static constexpr int elements_per_thread = rt_base<dtype, layout>::elements_per_thread * width * height; ///< Elements handled per thread.
    static constexpr int packed_per_thread   = rt_base<dtype, layout>::packed_per_thread   * width * height; ///< Packed elements per thread.
    static constexpr int packed_per_tile     = rt_base<dtype, layout>::packed_per_thread; ///< Packed elements per tile.

    rt_base<dtype, layout> tiles[height][width]; ///< The actual storage for the matrix tile, organized in subtiles.

    using col_vec = rv<dtype, height, rt_base<dtype, layout>::col_vec_pack>; ///< A type representing a column vector for this tile.
    using row_vec = rv<dtype, width , rt_base<dtype, layout>::row_vec_pack>; ///< A type representing a column vector for this tile.
};
```

这里的 RegTile 基于 subtile 对宽高进行 compose，组成一个更大的 tile，同时也由一个 warp 处理。这里的最小处理单元都是 warp。这里对于 RegTile 进行了再一次封装：

```cpp
template<int _height, int _width, ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl = rt<float2, _height, _width, layout>;
template<int _height, int _width, ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_bf = rt<bf16_2, _height, _width, layout>;
template<int _height, int _width, ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_hf = rt<half_2, _height, _width, layout>;

// layout, type, and size wrappers
// sizes are chosen with the assumption that you aren't going to want to fit more than
// 8 subtiles on a warp. (Could be wrong!)

///  8 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_1x1 = rt_fl<1, 1, layout>;
/// 16 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_1x2 = rt_fl<1, 2, layout>;
/// 32 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_1x4 = rt_fl<1, 4, layout>;
/// 64 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_1x8 = rt_fl<1, 8, layout>;
/// 16 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_2x1 = rt_fl<2, 1, layout>;
/// 32 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_2x2 = rt_fl<2, 2, layout>;
/// 64 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_2x4 = rt_fl<2, 4, layout>;
/// 32 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_4x1 = rt_fl<4, 1, layout>;
/// 64 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_4x2 = rt_fl<4, 2, layout>;
/// 64 registers used
template<ducks::rt_layout::all layout=ducks::rt_layout::row> using rt_fl_8x1 = rt_fl<8, 1, layout>;
```

例如 `rt_fl_1x8` 表示 16×128 的 FP32 tile，每线程的数据占用为 `8 × 8 = 64` 个 32-bit 寄存器。地址、循环状态和中间结果还会增加寄存器需求，实际分配与 spill 要看编译结果；不能仅由这个类型推断 occupancy 或速度。

## Load 如何把全局坐标映射到线程寄存器

这段 row-major `load` 将全局内存读入 **register tile**，没有共享内存中转：

```cpp
/**
 * @brief Collaboratively loads data from a source array into row-major layout tiles.
 *
 * @tparam RT The row-major layout tile type.
 * @tparam U The data type of the source array.
 * @param dst[out] The destination tile to load data into.
 * @param src[in] The source array to load data from.
 * @param row_stride[in] The stride in elements between rows in the source array.
 */
template<ducks::rt::row_layout RT, typename U>
__device__ inline static void load(RT &dst, const U *src, const int row_stride) {
    using T2 = RT::dtype;
    using U2 = base_types::packing<U>::packed_type;
    int warp_laneid = threadIdx.x % 32;
    const int row_offset = dst.rows*warpid();
    #pragma unroll
    for(int i = 0; i < dst.height; i++) {
        int row = row_offset + i*dst.tile_size + (warp_laneid / 4);
        #pragma unroll
        for(int j = 0; j < dst.width; j++) {
            int col = j*dst.tile_size + 2*(warp_laneid % 4);
            dst.tiles[i][j].data[0] = base_types::convertor<T2, U2>::convert(*(U2*)(&src[(row+0)*row_stride + (col+0)]));
            dst.tiles[i][j].data[2] = base_types::convertor<T2, U2>::convert(*(U2*)(&src[(row+0)*row_stride + (col+8)]));
        }
        #pragma unroll
        for(int j = 0; j < dst.width; j++) {
            int col = j*dst.tile_size + 2*(warp_laneid % 4);
            dst.tiles[i][j].data[1] = base_types::convertor<T2, U2>::convert(*(U2*)(&src[(row+8)*row_stride + (col+0)]));
            dst.tiles[i][j].data[3] = base_types::convertor<T2, U2>::convert(*(U2*)(&src[(row+8)*row_stride + (col+8)]));
        }
    }
}
```

令 lane 为 `l`，在一个 subtile 内的基准行是 `l // 4`，基准列是 `2 * (l % 4)`；warp 编号和 subtile 的 `(i,j)` 再添加大 tile 的行列偏移。四次 packed load 覆盖 `(row,col)`、`(row+8,col)`、`(row,col+8)`、`(row+8,col+8)`，每次读取相邻两个标量。

例如 lane 0 持有第 0、8 行的第 0、1、8、9 列，lane 1 持有同两行的第 2、3、10、11 列。前四个 lane 合起来覆盖这两行，32 个 lane 覆盖完整 16×16 tile。这里的协作来自各线程读取互补位置，并不要求在 load 后额外做一次 shuffle 才算协作。

上述地址计算解释了 tile 布局怎样落到实际访存。它也要求调用方提供正确的行跨度和有效地址范围；代码片段没有边界 mask，不能直接用来处理任意未填充的尾块。布局是否适合具体算子的访存与 MMA，需要连同消费它的算子检查，本文没有对应的 kernel 性能测量。
