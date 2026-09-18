# 寄存器分配

## 不分配寄存器

把所有变量放在内存里

## 分配，但没完全分配

另一种简单的寄存器分配策略是：遇到一个需要被分配的变量，就从寄存器列表中找出一个没被占用的寄存器，把它分配给这个变量。如果所有能用的寄存器都已经被占用，再退化到不分配寄存器的策略。

## 把寄存器当缓存用

基于前一种策略, 我们还能扩展出很多其他的寄存器分配方法, 比如其中一种——把寄存器当缓存用:

1. 首先, 在栈帧上为所有变量都分配空间.
2. 当需要用到某个变量的时候, 把这个变量读出来, 放在一个临时分配的寄存器里.
3. 下次需要读写变量时, 直接操作寄存器的值, 省去内存访问的开销.
4. 如果遇到某些情况, 比如出现了函数调用, 或者发生了控制流转移, 就把寄存器里保存的所有变量写回栈帧, 下次用的时候再重新读取.

这种方法把寄存器的生命周期局限在了基本块内, 是一种局部 (local) 的寄存器分配策略. 在编译技术的语境下, 我们通常把那些基本块级别的算法称为 “局部” 的算法, 把函数级别的算法称为 “全局” (global) 的算法, 而把程序级别的算法称为 “过程间” (interprocedural) 的算法. 这和大家所理解的, 编程语言角度上的 “全局” 和 “局部”, 还是有很大区别的.

```
// int e = a * b + c * d;
_t0 = a * b
_t1 = c * d
e = _t0 + _t1
// return e + d;
_t0 = e + d
return _t0
```

```
p -> -56 [ tmp 1: _t1     ] ^ (lower address)
       -48 [ tmp 0: _t0     ] |
       -40 [ loc 0: e       ] |
       -32 [ spill arg 3: d ] |
       -24 [ spill arg 2: c ] | stack growth
       -16 [ spill arg 1: b ] |
       -8  [ spill arg 0: a ] |
 fp -> +0  [ old fp         ] |  
       +8  [ return address ] | (higher address)


```

```
// register usage:
  // rbp: frame pointer
  // rsp: stack pointer
  // arguments: rdi, rsi, rdx, rcx
  // temporary register: rax
  // return: rax

  // function prologue: frame setup
  push rbp          // save old fp
  rbp = rsp         // set up new fp
  rsp -= 56         // allocate new stack frame: 7 slots * 8 bytes per slot
  // spill incoming arguments from registers to stack
  [rbp - 8]  = rdi  // spill a
  [rbp - 16] = rsi  // spill b
  [rbp - 24] = rdx  // spill c
  [rbp - 32] = rcx  // spill d

  // expression tree for:
  //  int e = a * b + c * d;

  // _t0 = a * b
  eax = [rbp - 8]   // load a into temp register
  eax *= [rbp - 16] // load b and multiply to temp register
  [rbp - 48] = eax  // store temp to stack _t0

  // _t1 = c * d
  eax = [rbp - 24]  // load c into temp register
  eax *= [rbp - 32] // load d and multiply to temp register
  [rbp - 56] = eax  // store temp to stack: _t1

  // e = _t0 + _t1
  eax = [rbp - 48]  // load _t0 into temp register
  eax += [rbp - 56] // load _t1 and add to temp register
  [rbp - 40] = eax  // store temp to stack: e

  // expression tree for:
  //   return e + d;

  // _t0 = e + d
  eax = [rbp - 40]  // load e into temp register
  eax += [rbp - 32] // load d and add to temp register
  [rbp - 48] = eax  // store temp to stack: _t0

  // return _t0
  eax = [rbp - 48]  // load _t0 into return register

  // function epilogue: tear down frame
  rsp = rbp         // deallocate stack frame
  pop rbp           // restore old frame pointer
  return
```



上面例子所使用的思路可以概括为“基于虚拟寄存器”：每个变量（包括参数、局部变量和临时值）都看作一个 "虚拟寄存器"。

虚拟寄存器映射到实际寄存器最简单的办法就是“不映射”——而是把每个虚拟寄存器都分配到栈帧上的一个slot里。外加把一个或多个实际寄存器固定分配为“临时寄存器”，在做实际运算时把虚拟寄存器的内容从栈帧的stack slot里读到临时寄存器，在临时寄存器上完成运算，然后再把结果保存回到栈帧上的虚拟寄存器里，代码生成完成了。

自然的，既然我们都用上“虚拟寄存器”这个词了，为何不把它们（至少其中一些）映射到实际寄存器上呢？

这就衍生出一种非常简单的寄存器分配策略：把临时变量分配到实际寄存器上。这里的假设是：表达式求值是频繁的操作，其中间结果应该尽量停留在实际寄存器里，这样就已经能提升代码性能了。

## 线性扫描寄存器分配

基于活跃变量分析的结果, 我们就可以实现更多更有效的寄存器分配算法了, 线性扫描寄存器分配 ([linear scan register allocation](https://en.wikipedia.org/wiki/Register_allocation#Linear_scan), LSRA) 就是其中之一.

线性扫描, 顾名思义, 是一个线性的寄存器分配算法. 它需要按顺序扫描变量的活跃区间, 然后基于一些贪婪的策略, 把变量放在寄存器上或者栈上. 因为这种算法只需要进行一次扫描, 就可以得到很不错的寄存器分配结果, 所以它经常被用在某些很看重编译效率的场合中, 比如即时编译 ([just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation), JIT).

关于线性扫描的详细介绍和实现, 你可以参考论文: [*Poletto & Sarkar 1999, “Linear scan register allocation”*](https://doi.org/10.1145%2F330249.330250).

## 图着色寄存器分配算法

另一种广为使用的寄存器分配算法是图着色分配 ([graph-coloring allocation](https://en.wikipedia.org/wiki/Register_allocation#Graph-coloring_allocation)) 算法. 这种算法相比 LSRA 要更为重量级, 运行起来更为耗时, 实现起来也更加复杂, 但通常情况下可以达到更好的寄存器分配结果.

图着色寄存器分配的思路很简单, 就是把寄存器问题映射到[图着色问题](https://en.wikipedia.org/wiki/Graph_coloring)上: 如果两个变量的生命周期相互重叠, 那么它们就不能被放在相同的寄存器上. 于是我们可以给所有变量建个图 (学名叫 interference graph), 图的顶点代表变量. 如果两个变量的生命周期重叠, 这两个变量代表的顶点之间就连一条边.

寄存器分配的过程, 本质上就是把 N 个寄存器当作 N 种颜色, 然后给这个图着色, 确保两个相邻顶点的颜色不同. 如果算法运行时发现这件事情做不到, 它就会从中删掉一些顶点, 代表把这些顶点对应的变量 spill 到栈上, 然后重新着色, 直到着色完成为止.

关于图着色的详细介绍和实现, 你可以参考论文: [*Chaitin 1982, “Register allocation & spilling via graph coloring”*](https://doi.org/10.1145%2F800230.806984).

## 引用

- [https://pku-minic.github.io/online-doc/#/](北大编译实践在线文档)

- [https://www.zhihu.com/question/29355187/answer/51935409](R 大关于寄存器分配问题的回答)
