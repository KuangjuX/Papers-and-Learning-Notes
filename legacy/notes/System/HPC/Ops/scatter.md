# Scatter 算子
## ScatterND

ScatterND 有三个输入， `data` rank r >= 1，`indices` rank q >= 1，`updates` rank q + r - indices.shape[-1] - 1。算子的输出是根据输入 `data` 的一个拷贝，然后基于 `indices` 和 `updates` 更新在 `data` 中的位置。

`indices` 是一个整数 tensor，其中 k = indices.shape[-1]（就是最后一个纬度的大小）。`indices` 可以被视为一个 k-tuple q-1 维的 tensor，其中每个 k-tuple 是对数据的部分索引。因此 k 的值最多等于 data 的 rank（也就是 data 的维数）。当 k 等于 data 的 rank 的时候，每个 `update` 条目对张量的指定单个元素进行更新。当 k 的值小于 data 的 rank 时，每个 `update` 条目指定对张量的一个切片进行更新。其中索引值允许为负数，按照从末尾开始倒数。

`updates` 被看成是一个 q-1 dim 的 replace-slice-values tensor。因此，updates.shape 的前 q-1 dim 必须和 indices 的前 q-1 dim 相匹配。`updates` 的剩余维度对应于替换切片值的维度。每个替换切片值都是一个 (r-k) 维，因此 `updates` 的形状必须等于 indices.shape[0:q-1] + data.shape[k:r-1]（+ 表示维度的连接）。

输出通过如下方式计算：

```python
output = np.copy(data)
update_indices = indices.shape[:-1]
for idx in np.ndindex(update_indices):
    output[indices[idx]] = updates[idx]
```

上述循环的迭代顺序未指定，这要求当 idx1 != idx2 的时候，indices[idx1] != indices[idx2]，也就是不能有重复的。

下面是一些例子：

```
data    = [1, 2, 3, 4, 5, 6, 7, 8]
indices = [[4], [3], [1], [7]]
updates = [9, 10, 11, 12]
output  = [1, 11, 3, 10, 9, 6, 7, 12]
```

```
data    = [[[1, 2, 3, 4], [5, 6, 7, 8], [8, 7, 6, 5], [4, 3, 2, 1]],
            [[1, 2, 3, 4], [5, 6, 7, 8], [8, 7, 6, 5], [4, 3, 2, 1]],
            [[8, 7, 6, 5], [4, 3, 2, 1], [1, 2, 3, 4], [5, 6, 7, 8]],
            [[8, 7, 6, 5], [4, 3, 2, 1], [1, 2, 3, 4], [5, 6, 7, 8]]] // r = 3
indices = [[0], [2]] // q = 2, k = 1
updates = [[[5, 5, 5, 5], [6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8]],
            [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]]] // 3 + 2 - 1 - 1 = 3
output  = [[[5, 5, 5, 5], [6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8]],
            [[1, 2, 3, 4], [5, 6, 7, 8], [8, 7, 6, 5], [4, 3, 2, 1]],
            [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]],
            [[8, 7, 6, 5], [4, 3, 2, 1], [1, 2, 3, 4], [5, 6, 7, 8]]]
```