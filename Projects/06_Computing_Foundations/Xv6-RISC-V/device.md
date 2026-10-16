# xv6-riscv 设备

## Console Input

`console` 是驱动结构的一个简单说明。控制台驱动通过连接到RISC-V上的UART串行端口硬件，接受输入的字符。控制台驱动程序每次累计一行输入，处理特殊的输入字符，如退格键和 `control-u`。用户进程，如shell，使用 `read` 系统调用从控制台获取输入行。当你在`QEMU` 中向 `xv6` 输入时，你的按键会通过 `QEMU` 的模拟 `UART` 硬件传递给 `xv6`。

与驱动交互的UART硬件是由`QEMU` 仿真的 16550 芯片。在真实的计算机上，16550将管理一个连接到终端或其他计算机的 `RS232` 串行链接。当运行 `QEMU` 时，它连接到你的键盘和显示器上。

UART硬件在软件看来是一组内存映射的控制寄存器。也就是说，有一些 `RISC-V` 硬件的物理内存地址会连接到 `UART` 设备，因此加载和存储与设备硬件而不是 `RAM` 交互。`UART` 的内存映射地址从 0x10000000 开始，即` UART0`（kernel/memlayout.h:21）。这里有一些UART控制寄存器，每个寄存器的宽度是一个字节。它们与 `UART0` 的偏移量定义在(kernel/uart.c:22)。例如，`LSR` 寄存器中一些位表示是否有输入字符在等待软件读取。这些字符（如果有的话）可以从 `RHR` 寄存器中读取。每次读取一个字符，`UART` 硬件就会将其从内部等待字符的FIFO中删除，并在FIFO为空时清除 `LSR` 中的就绪位。UART传输硬件在很大程度上是独立于接收硬件的，如果软件向 `THR`写入一个字节，UART就会发送该字节。

xv6 的 `main` 调用 `consoleinit`（kernel/console.c:184）来初始化 `UART` 硬件。这段代码配置了 `UART`，当 `UART` 接收到一个字节的输入时，就产生一个接收中断，当UART每次完成发送一个字节的输出时，产生一个传输完成中断(kernel/uart.c:53)。

xv6 shell通过 `init` (user/init.c:19)打开的文件描述符从控制台读取。`consoleread` 等待输入的到来(通过中断)，输入会被缓冲在 `cons.buf`，然后将输入复制到用户空间，再然后(在一整行到达后)返回到用户进程。如果用户还没有输入完整的行，任何 `read` 进程将在 `sleep` 调用中等待(kernel/console.c:98)(第7章解释了sleep的细节)。

当用户键入一个字符时，UART硬件向RISC-V抛出一个中断，从而激活 xv6 的 `trap` 处理程序。`trap` 处理程序调用`devintr` (kernel/trap.c:177)，它查看RISC-V的 `scause` 寄存器，发现中断来自一个外部设备。然后它向一个叫做 `PLIC` 的硬件单元询问哪个设备中断了(kernel/trap.c:186)。如果是UART，`devintr` 调用 `uartintr`。

`uartintr`(kernel/uart.c:180) 从 `UART` 硬件中读取在等待的输入字符，并将它们交给 `consoleintr`  (kernel/console.c:138)；它不会等待输入字符，因为以后的输入会引发一个新的中断。 `consoleintr` 的工作是将中输入字符积累 `cons.buf` 中，直到有一行字符。 `consoleintr` 会特别处理退格键和其他一些字符。当一个新行到达时，`consoleintr` 会唤醒一个等待的 `consoleread`（如果有的话）。

一旦被唤醒，`consoleread` 将会注意到 `cons.buf` 中的完整行，并将其将其复制到用户空间，并返回（通过系统调用）到用户空间。
