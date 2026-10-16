# 模块化内核

## Unikernel

Unikernel 是专用的，单地址空间的，使用 library OS 构建出来的镜像。没有用户空间和内核空间之分，只有一个连续地址空间，这样允许 unikernel 可以更快地执行，但是缺乏内存保护。unikernel 是为了云环境特殊设计，在这个环境下主机必须可信任。

### 一些宏内核的问题

- 虚拟化环境中内核和应用程序的切换可能是多余的，因为由 hypervisor 来进行隔离，会导致性能下降。

- 在单应用 domain 中多地址空间没有用。

- 对于 RPC 类型的服务器，线程是没有必要的，单进程, run-to-completion event loop 可以得到一个好的性能。

- 对于基于 UDP 的性能应用中，许多 OS 网络栈是不需要的：app 可以仅仅使用驱动 API，就像 DPDK 做的一样。

- 直接访问 NVMe 存储可以不需要文件描述符，VFS 层和文件系统。

- 内存分配器对于应用程序性能有巨大的影响，通用分配器对于很多应用程序不是最佳的选择。如果应用程序可以选择不同的内存分配器将十分完美。

## Unikraft

相对于传统操作系统，使用unikernel有以下优势：

1. 更高的性能：unikernel是专门为应用程序设计的，因此它们可以提供比传统操作系统更高的性能。unikernel只包含应用程序所需的最小代码和资源，这使得它们非常高效。
2. 更快的启动时间：由于unikernel只包含应用程序所需的最小代码和资源，因此它们可以在非常短的时间内启动。这使得它们非常适合需要快速启动时间的场景。
3. 更少的内存消耗：由于unikernel只包含应用程序所需的最小代码和资源，因此它们需要比传统操作系统更少的内存。这使得它们非常适合在资源受限环境中运行。
4. 更好的安全性：由于unikernel只包含应用程序所需的最小代码和资源，因此它们具有比传统操作系统更小的攻击面。这使得它们更难受到攻击。
5. 更容易管理：由于unikernel是专门为应用程序设计的，因此它们通常比传统操作系统更容易管理。这使得它们非常适合在云环境中运行。

### Uniraft 结构

- Library Components

- Configuration

- Build Tools

### Unikraft Libraries

- Core libraries: memory allocators, schedulers, filesystems, network stacks and drivers

- External libraries: libc, openssl

### 设计理念

对于每个单应用创造特定的内核以确保最佳性能：

- 单地址空间：针对单一应用场景，可以通过网络通信使不同的应用程序相互交流。

- 全模块化系统：所有组件，包括操作系统原语，驱动，平台和库应当容易添加和删除。

- 单保护级别：没有 user/kernel 空间隔离，因此避免了处理器上下文切换的开销，但是不排除隔离（例如，微型库的隔离）。

- 静态链接：开启编译器特性。

- POSIX 支持

- 平台抽象：可以生成一系列不同的 hypervisors/VMMs 的镜像

### 结构

使用模块化来构建专用内核，将操作系统功能分为细粒度组件，并仅通过明确定义的 API 进行通信。通过仔细的 API 设计和静态链接，而不是为了性能而缩短 API 边界可以提高性能。以下是两个主要部分：

- Micro-libraries 是实现了核心 Unikraft APIs 的软件组件；我们将它们拆分成库并且它们有最小的依赖且可以任意小。所有 micro-librarys 实现了相同的 API。除此之外，Unikraft 还支持能够从外部项目（OpenSSL,musl,Protobuf 等等），应用(Redis, SQLite 等等)提供的功能，甚至是平台（Solo5,Firecracker,树莓派3）。

- Build-system：用户提供编译哪个组件。

Unikraft 可以通过以下两种方式来提升性能：

- 使用修改过的应用，通过消除 syscall 开销，减少 image 大小和内存消耗，并且通过选择有效率的内存分配器。

- 专用化，通过将应用程序适配到更低级 API，以利用性能优势，尤其是对于寻求高性能磁盘 IO 吞吐量的数据库应用程序而言。

![](moduler-os/unikraft-arch.png)

linux 各模块间依赖关系：

![](moduler-os/linux-dependencies.png)

unikraft Hello World 应用程序中各模块间依赖关系：

![](moduler-os/unikraft-dependencies.png)

## Arceos

### 目标：

- 兼容 rust api 和 rust 应用程序

- 在 unikernel 支持 tokio，提高 IO 性能

![](moduler-os/ArceOS.svg)

### Arceos 模块

- crate: 一些与 OS 设计的公共模块，也可以在构建其他内核/hypervisor 中使用

- modules:
  
  - 一些对于公共模块的封装：axalloc，axdriver
  
  - 一些 OS 设计耦合模块：axtask，axnet

- 必选模块：
  
  - axruntime: 启动，初始化，模块总体管控
  
  - axhal：硬件抽象层
  
  - axlog：打印日志

- 可选模块：
  
  - axalloc：动态内存分配
  
  - axtask：多任务、线程
  
  - axdriver：设备驱动
  
  - axnet：网络

**当执行了 `make A=apps/net/httpserver ARCH=aarch64 LOG=info NET=y SMP=1 run` 发生了什么？**

根据 cargo 不同的 feature 来进行条件编译。

- Makefile：根据不同参数进行选择，`FS/NET/GRAPHIC` 是否为 y，如果为 y 的话放在条件编译里面进行编译，见 `cargo.mk`:

```
features-$(FS) += libax/fs
features-$(NET) += libax/net
features-$(GRAPHIC) += libax/display
```

- `_cargo_build`: 首先根据不同的语言，选择不同的编译方法，例如对于 rust，调用 `call cargo_build,--manifest-path $(APP)/Cargo.toml`，其中 `$(APP)` 表示目前要运行的应用程序。

- 以 `httpserver` 为例，查看 unikernel 如何条件编译，首先在 `httpserver` 中的 `Cargo.toml` 的依赖项为：`libax = { path = "../../../ulib/libax", features = ["paging", "multitask", "net"] }`,这个表明需要编译 `libax` 并且有以上三个 features

- 查看 `libax`，找到以上三个 features，发现：
  
  - `paging = ["axruntime/paging"]`
  
  - `multitask = ["axruntime/multitask", "axtask/multitask", "axsync/multitask"]`
  
  - `net = ["axruntime/net", "dep:axnet"]`
  
  - 这里涉及到 `axruntime` ，`axtask`，`axsync` 等 module，并对这些 module 进行条件编译

- `cargo.mk`：这个文件里描述了如何使用 cargo 进行条件编译的方法，build 参数如下：

```
build_args := \
  -Zbuild-std=core,alloc -Zbuild-std-features=compiler-builtins-mem \
  --config "build.rustflags='-Clink-arg=-T$(LD_SCRIPT)'" \
  --target $(TARGET) \
  --target-dir $(CURDIR)/target \
  --features "$(features-y)" \
```

`cargo_build`:

```
define cargo_build
  cargo build $(build_args) $(1)
endef
```

这也就回到了最上层关于 `_caro_build` 命令的封装，将 `$(APP)/Cargo.toml` 作为顶层模块，引用其他模块，并进行条件编译构建 unikernel。

- 查看 `Makefile` 发现 `make run` 指令需要执行 `build` 和 `justrun`，build 指令在上面梳理完成，`justrun` 需要调用 `run_qemu` 命令，然后跳转到 `qemu.mk` 发现 qemu 构建类似 cargo 构建，不过更加简单一些，如此一来一个单地址空间（不区分内核空间和用户空间）的应用程序就编译完成。

- 运行时首先 Arceos 先进行一些引导启动，例如在 riscv64 的环境中执行：

```rust
#[naked]
#[no_mangle]
#[link_section = ".text.boot"]
unsafe extern "C" fn _start() -> ! {
    extern "Rust" {
        fn rust_main();
    }
    // PC = 0x8020_0000
    // a0 = hartid
    // a1 = dtb
    core::arch::asm!("
        mv      s0, a0                  // save hartid
        mv      s1, a1                  // save DTB pointer
        la      sp, {boot_stack}
        li      t0, {boot_stack_size}
        add     sp, sp, t0              // setup boot stack

        call    {init_boot_page_table}
        call    {init_mmu}              // setup boot page table and enabel MMU

        li      s2, {phys_virt_offset}  // fix up virtual high address
        add     sp, sp, s2

        mv      a0, s0
        mv      a1, s1
        la      a2, {platform_init}
        add     a2, a2, s2
        jalr    a2                      // call platform_init(hartid, dtb)

        mv      a0, s0
        mv      a1, s1
        la      a2, {rust_main}
        add     a2, a2, s2
        jalr    a2                      // call rust_main(hartid, dtb)
        j       .",
        phys_virt_offset = const PHYS_VIRT_OFFSET,
        boot_stack_size = const TASK_STACK_SIZE,
        boot_stack = sym BOOT_STACK,
        init_boot_page_table = sym init_boot_page_table,
        init_mmu = sym init_mmu,
        platform_init = sym super::platform_init,
        rust_main = sym rust_main,
        options(noreturn),
    )
}
```

随后跳转到 `axruntime` 中的 `rust_main` 中运行，`rust_main` 经过一系列条件初始化后，执行 `main()`，由于这个 `main` 实在应用程序定义的，应当进行符号连接并跳转（由于是单地址空间，所以不须上下文切换）。

随后开始执行用户程序，用户程序通过 `libax` 的 API 进行执行，应用程序在内核态执行，无需进行 syscall 与上下文切换，效率更高。

**ArceOS 相比 Unikraft 的优势？**

- 使用 Rust 编写，具有现代化包管理（crate），条件编译和引用更简单。

- 可以更为轻松扩展模块，例如 hypervisor 可以和 ArceOS 使用相同模块。

- 原声支持异步，可以在内核重写 tokio runtime 进行调度。

**问题：ArceOS 中模块之间是否会互相引用状态？如何解决？**

例如：`axsync` 引用了 `axtask`，使用了 `axtask` 中的 WaitQueue（xv6 中 SpinLock 对 Process 的引用）。`axruntime` 中也需要引用 `axtask` 的调度器（需要仔细设计不同模块间的依赖关系）。

**思考：如何将 hypocaust-2 拆分成模块化？**

kernel/hypervisor 模块复用：

- hypervisor 可以复用一些内核模块，例如 `axlog`，`axdriver`，`axtask`

- 对于一些模块需要重写，例如 `axruntime`

- 底层 crate 可以复用

目前 hypocaust-2 有以下功能：

- 基于设备树的配置与解析，初始化 hypervisor 和 guest（可选配置方案）

- 内存分配器

- 页表翻译（hypervisor 为了隔离需要多地址空间）

- SBI 接口

- trap 处理

- 中断子系统

- 设备模拟

![](moduler-os/module-hypocaust-2.png)

可以在基于模块化 hypocaust-2 中运行 Arceos，用于提供安全的执行环境。

## References

- Kuenzer S, Bădoiu V A, Lefeuvre H, et al. Unikraft: fast, specialized unikernels the easy way[C]//Proceedings of the Sixteenth European Conference on Computer Systems. 2021: 376-394.

- arceos: https://github.com/rcore-os/arceos
