# Memory Coalescing

合并内存事务指的是在一个 half-warp 中的所有线程在同一时刻访问全局内存。这很简单，但正确的方法是让连续的线程访问连续的内存地址。

因此如果线程 0,1,2,3 分别读内存 0x0,0x4,0x8 和 0xc 是合并读。

在一个 3x4 矩阵中：

```
0 1 2 3
4 5 6 7
8 9 a b
```

行主序变成：

```
0 1 2 3 4 5 6 7 8 9 a b
```

假设需要访问所有元素一次，并且有四个线程，以下哪种会更好：

```
thread 0:  0, 1, 2
thread 1:  3, 4, 5
thread 2:  6, 7, 8
thread 3:  9, a, b
```

以及 

```
thread 0:  0, 4, 8
thread 1:  1, 5, 9
thread 2:  2, 6, a
thread 3:  3, 7, b
```

在第二个方法中线程的访问是连续的。

## References

- [In CUDA, what is memory coalescing, and how is it achieved?](https://stackoverflow.com/questions/5041328/in-cuda-what-is-memory-coalescing-and-how-is-it-achieved)