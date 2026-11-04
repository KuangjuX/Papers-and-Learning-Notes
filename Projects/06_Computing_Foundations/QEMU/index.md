# QEMU：RISC-V 构建配置

构建 QEMU 时，`--target-list` 决定生成哪些目标模拟器。针对本仓库 xv6-rust 的历史 RISC-V 环境，配置包括 32 位与 64 位 system emulation：

```sh
./configure --target-list=riscv32-softmmu,riscv64-softmmu
make -j$(nproc)
```

这些命令在已解压的 QEMU 源码目录执行。xv6-rust 当时使用 QEMU 5.0.0；对应下载、构建依赖、Rust 工具链与 GDB 配置见 [xv6-rust 环境与调试](../Xv6-Rust/env.md)。其他 QEMU 版本是否兼容该项目，需要与对应项目版本一起验证。
