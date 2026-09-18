# riscv-gnu-toolchain

## 构建编译器

从 https://github.com/riscv/riscv-gnu-toolchain 下载源代码：

```
git clone https://github.com/riscv/riscv-gnu-toolchain
cd riscv-gnu-toolchain
git submodule update --init --recursive
sudo apt-get install autoconf automake autotools-dev curl libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev
./configure --prefix=/opt/riscv64
make linux
```

将会将交叉编译器安装到 `/opt/riscv64` 目录中

如果需要编译不带浮点支持的，可以在配置的时候加上 `--with-arch=rv64imac --with-abi=lp64`

**Tips:**

- Go to folder /opt/riscv/sysroot/usr/include/gnu/

- cp stubs-lp64d.h stubs-lp64.h
