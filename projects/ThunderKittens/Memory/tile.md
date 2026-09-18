# TK Tile

## Register

TK 将 Tile 切分的寄存器分两个结构，一个是最小单元的 subtile，由 subtile compose 成的 RegTile 是一个 warp 处理的 tile 单元，subtile 结构定义如下：

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

这里的数据类型是一个向量化记载的元素，可能是为了优化定义的。`tile_size` 恒定为 16，也就是一个 subtile 的大小，同时也是一个 warp 处理的最小大小。这里的 `rows` 和 `cols` 大小和 `tile_size` 相同，每个 warp 最少处理 256 个元素，每线程处理的寄存器为 256 / 32 = 8 个。

RegTile 是基于 subtile compose 出来的数据结构：

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

接下来查看协作式地从全局内存加载到共享内存：

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

首先获取到当前 warp 的 `lane_id`，然后计算 `row_offset`，这里 `row_offset` 基于 `warp_id` 进行计算。随后对于 compose 出来的 RegTile 的高和宽进行遍历，需要注意的是这里遍历出来的是 16*16 的 subtile。在一个 warp 中每 4 个线程分为一组，处理一行。处理列的时候在四个线程一组内切分，一组处理两个元素，因此每个线程可以处理 `2 * 4 * sizeof(T2) = 16` 个寄存器，也就是一个 subtile 一行的大小。之后基于行列数从全局内存中加载到寄存器中，不过目前依然是寄存器私有的值，没有经过 warp shuffle 进行协同。