# C++ 对象、生命周期与并发

来源：个人 Notion《秋招面试总结》的 8.13 八股与 9.9 锁题，见 [归档入口](../../../07_Books_and_Technical_References/Interview-AI-Infra/index.md)。以下为 AI 整理与订正，代码按 C++17 语义说明。

## 指针、引用与 sizeof：先看表达式类型

指针对象保存地址，可以为空，也可以重新赋值指向别的对象。引用在初始化时绑定对象，之后通过引用赋值是在修改被引用对象。有效程序中的引用不能绑定空对象；引用也可能因对象生命期结束而悬空。“引用是别名”不意味着 ABI 一定不为引用参数或引用成员保存地址。

```cpp
int x = 7;
int* ptr = &x;
int& ref = x;
```

| 表达式 | 查询的类型 | 假设 int 为 4 字节、指针为 8 字节的示例 |
| --- | --- | --- |
| `sizeof(ptr)` | `int*` | 8 |
| `sizeof(*ptr)` | `int` | 4 |
| `sizeof(ref)` | 被引用的 `int` | 4 |
| `sizeof(&ref)` | `int*` | 8 |

原回答把后两种题目换成了指针和引用变量本身的大小。标准 C++ 中 `sizeof` 的表达式操作数不求值；对于完整类型 `int* ptr = nullptr`，`sizeof(*ptr)` 仍是 `sizeof(int)`，没有实际解引用。实际执行 `*ptr` 访问对象则必须满足指针有效性。以上字节数是平台示例，不能当作语言保证。依据：[C++ 草案 expr.sizeof](https://eel.is/c++draft/expr.sizeof)。

## 静态多态与动态多态

重载和模板通常在编译期完成选择。虚函数通过基类指针或引用调用时，根据对象动态类型选择最终覆盖函数。vptr / vtable 是常见 ABI 的实现方式，C++ 标准要求可观察语义，并未规定所有实现都必须采用同一种对象布局。

```cpp
struct Base {
    virtual int value() const { return 1; }
    virtual ~Base() = default;
};
struct Derived : Base {
    int value() const override { return 2; }
};
```

例：`Derived d; Base& b = d;` 后，`b.value()` 返回 2；显式限定 `b.Base::value()` 返回 1。编译器也可能在能证明动态类型时去虚化，动态多态不等于每次调用都必有间接跳转。

构造函数不能声明为虚函数。构造、析构期间调用虚函数，派发范围受当前正在构造或析构的类限制，不能期待在基类构造函数里调用到尚未构造的派生部分。依据：[class.virtual](https://eel.is/c++draft/class.virtual)、[class.cdtor](https://eel.is/c++draft/class.cdtor)。

## 为什么基类析构函数经常需要 virtual

在常规 `new Derived` / `delete Base*` 使用方式中，基类必须有虚析构函数，才能通过基类接口安全销毁整个对象。原文“非虚析构导致内存泄漏”不够准确：对于动态类型与静态类型不同的这种删除，通常属于**未定义行为**。标准对 destroying delete 另有规则，不能用来为普通代码免责。依据：[expr.delete](https://eel.is/c++draft/expr.delete)。

例：`Base* p = new Derived; delete p;`，上面的虚析构定义让销毁依次经过 `Derived` 再到 `Base`。若基类不允许多态删除，可使用受保护的非虚析构限制接口。拥有资源的对象优先用 RAII 和合适的智能指针表达所有权；裸指针和引用本身并不证明谁负责释放。

## 锁解决 host 竞争，不能代替 GPU 完成依赖

`std::lock_guard<std::mutex>` 在构造时加锁、离开作用域时解锁，异常路径也能释放锁。持锁期间递归进入同一个非递归 mutex 的路径不能再次获取它；不能靠“递归很浅”解决。

例：线程 A 的 `alloc(2048)` 持锁发现池为空，加入新 arena 后直接 `return alloc(2048)`。内层先尝试获取同一把锁，外层却要等内层返回才能解锁，形成自我等待。应将搜索和扩容放入同一个持锁循环，或拆出不重复加锁的内部函数。不能只换成递归锁就认为设计已完成。

即使 host 的 `alloc` / `dealloc` 全部互斥，GPU 可能还在异步读取该地址。互斥锁不提供 GPU stream 的完成关系，见 [GPU 内存池设计](../../../04_GPU_Compiler_and_Performance/CUDA/memory-pool.md)。
