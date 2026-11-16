# xv6-rust：环境配置与 GDB 调试

## QEMU 构建环境

```shell
wget https://download.qemu.org/qemu-5.0.0.tar.xz
tar xvJf qemu-5.0.0.tar.xz
cd qemu-5.0.0
./configure --target-list=riscv32-softmmu,riscv64-softmmu
make -j$(nproc)
sudo make install
```

该项目的历史环境使用 [QEMU 5.0.0](https://download.qemu.org/)。这是一组当时的构建配置，未验证当前工具链或其他 QEMU 版本的兼容性。

当安装QEMU的时候你可能会遇到一些问题，我们这里给出了一些可能的问题列表以及解决方案：

`ERROR: pkg-config binary 'pkg-config' not found`：`sudo apt-get install pkg-config`

`ERROR: glib-2.48 gthread-2.0 is required to compile QEMU`：`sudo apt-get install libglib2.0-dev`

`ERROR: pixman >= 0.21.8 not present`：`sudo apt-get install libpixman-1-dev`

以上为可能遇到的问题，如果你遇到其他问题，只需要根据提示安装对应的依赖即可。

## Rust 裸机工具链

我们推荐使用官方的脚本去构建环境：

```shell
curl https://sh.rustup.rs -sSf | sh
```

当时使用过的中科大镜像配置如下；镜像地址及可用性未重新验证：

```shell
export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
curl https://sh.rustup.rs -sSf | sh
```

在这之后，你可以通过一些命令来测试是否完成了rust环境的配置：

```shell
source $HOME/.cargo/env
rustc --version
```

历史环境还在 `.cargo/config` 中使用了以下 crates.io 镜像配置；它属于旧环境记录：

```shell
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'
[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

除此之外，你还需要去安装一些Rust的工具用来构建我们的程序：

```shell
rustup target add riscv64gc-unknown-none-elf
cargo install cargo-binutils
rustup component add llvm-tools-preview
```

项目启动入口：

```shell
git clone https://github.com/Ko-ok-OS/xv6-rust.git
cd xv6-rust/kernel
make run
```



## GDB 调试 {#gdb}

我们需要使用`riscv64-unknown-elf-gdb`来对我们的程序进行调试

1. 前往[清华镜像站](https://mirrors.tuna.tsinghua.edu.cn/gnu/gdb/?C=M&O=D)选择与该 RISC-V 调试目标兼容的 GDB 源码（原笔记未固定版本）
2. 解压源代码，并定位到目录
3. 执行以下命令：

```shell
mkdir build
cd build
../configure --prefix=/usr/local  --target=riscv64-unknown-elf
```

4. 编译安装

```shell
make -j$(nproc)
sudo make install
```

5. 使用`make debug`指令对程序进行gdb调试
