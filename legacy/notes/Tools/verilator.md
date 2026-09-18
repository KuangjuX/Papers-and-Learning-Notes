# Verilator 学习笔记

## Introduction

Verilator 是一个 verilog/systemverilog 的仿真器，但是它不能直接代替 vivado xsim 这些事件驱动的仿真器。Verilator 是一个基于周期的仿真器，这意味着它不会评估单个周期内的时间，也不会模拟精确的电路时序。相反，通常每个时钟周期评估一次电路状态，因此无法观察到任何时钟周期内毛刺，并且不支持定时信号延迟。

由于 Verilator 是基于周期的，它不能用于时序仿真、反向注释网表、异步（无时钟）逻辑，或者一般来说任何涉及时间概念的信号变化 - 每当评估电路时，所有输出都会立即切换。

然而，由于时钟边沿之间的一切都被忽略了，Verilator 的模拟运行速度非常快，非常适合模拟具有一个或多个时钟的同步数字逻辑电路的功能，或者用于从 Verilog/SystemVerilog 代码创建软件模型以用于软件开发。

由于 Verilator 是基于周期的仿真器，因此对于 systemVerilog 并非完全支持（我们一般也用不到），同时对于 verilog/systemverilog 的检查很严格，同时 Verilator 不支持一些不可综合的代码(例如 `$display()`, `$finish()`, `$fatal()`, 一些版本的 `$assert()` 或者其他)。

使用 Verilator 来仿真时需要 HDL 作为源代码和 C++ 作为测试代码来共同完成，使用 Verilator 来仿真是非常快速的。

在这里我们写了一个简单的 alu 程序来说明 Verilator 的使用:

```systemverilog
/****** alu.sv ******/
typedef enum logic [1:0] {
     add     = 2'h1,
     sub     = 2'h2,
     nop     = 2'h0
} operation_t /*verilator public*/;

module alu #(
        parameter WIDTH = 6
) (
        input clk,
        input rst,

        input  operation_t  op_in,
        input  [WIDTH-1:0]  a_in,
        input  [WIDTH-1:0]  b_in,
        input               in_valid,

        output logic [WIDTH-1:0]  out,
        output logic              out_valid
);

        operation_t  op_in_r;
        logic  [WIDTH-1:0]  a_in_r;
        logic  [WIDTH-1:0]  b_in_r;
        logic               in_valid_r;
        logic  [WIDTH-1:0]  result;

        // Register all inputs
        always_ff @ (posedge clk, posedge rst) begin
                if (rst) begin
                        op_in_r     <= '0;
                        a_in_r      <= '0;
                        b_in_r      <= '0;
                        in_valid_r  <= '0;
                end else begin
                        op_in_r    <= op_in;
                        a_in_r     <= a_in;
                        b_in_r     <= b_in;
                        in_valid_r <= in_valid;
                end
        end

        // Compute the result
        always_comb begin
                result = '0;
                if (in_valid_r) begin
                        case (op_in_r)
                                add: result = a_in_r + b_in_r;
                                sub: result = a_in_r + (~b_in_r+1'b1);
                                default: result = '0;
                        endcase
                end
        end

        // Register outputs
        always_ff @ (posedge clk, posedge rst) begin
                if (rst) begin
                        out       <= '0;
                        out_valid <= '0;
                end else begin
                        out       <= result;
                        out_valid <= in_valid_r;
                end
        end

endmodule;
```

在使用 C++ 编写测试用例之前，我们需要首先将 sv 代码编译成 C++ 代码：

```shell
verilator --cc alu.sv
```

`cc` 参数告诉 Verilator 将源代码转化成 C++ 代码，在编译之后生成了一个 `obj_dir` 文件夹，其中 `mk` 文件用于使用 `Make` 构建仿真的可执行程序，`.h` 和 `.cpp` 文件包含我们源代码实现的信息。

接下来我们使用 C++ 写一个测试文件用于测试我们的 ALU：

```c++
#include <stdlib.h>
#include <iostream>
#include <verilated.h>
#include <verilated_vcd_c.h>
#include "Valu.h"
#include "Valu___024unit.h"

// 终止时间
#define MAX_SIM_TIME 20
vluint64_t sim_time = 0;

int main(int argc, char** argv, char** env) {
    // 新建需要仿真的对象
    Valu *dut = new Valu;

    // 生成仿真波形, "vcd" 文件
    Verilated::traceEverOn(true);
    VerilatedVcdC *m_trace = new VerilatedVcdC;
    dut->trace(m_trace, 5);
    m_trace->open("waveform.vcd");

    while (sim_time < MAX_SIM_TIME) {
        // 翻转时钟
        dut->clk ^= 1;
        // 仿真 ALU 模型中的所有信号
        dut->eval();
        // 将所有被追踪的信号写入波形中
        m_trace->dump(sim_time);
        // 增加时间
        sim_time++;
    }

    m_trace->close();
    delete dut;
    exit(EXIT_SUCCESS);
}
```

关于测试文件的作用已经作为注释写在了代码中，接下来我们将编译我们的测试文件并进行仿真，此时需要运行 Verilator 并重新生成包含测试用例的 `.mk` 文件：

```shell
$ verilator -Wall --trace -cc alu.sv --exe tb_alu.cpp
```

- `-Wall` 表示开启 C++ 所有警告
- `--trace` 表示开启波形跟踪

随后我们进行编译:

```shell
$ make -C obj_dir -f Valu.mk Valu
```

在编译之后，我们执行 `obj_dir/Valu` 进行仿真，此时会生成波形图 `waveform.vcd`，我们只需要执行 `gtkwave waveform.vcd` 即可查看波形图。

## Basics of Systemverilog verification using C++

### Randomized initial values

Verilator 是一个两阶段的仿真器，这意味着它仅仅支持逻辑信号 0 和 1，不支持逻辑信号 `X`，对 `Z` 信号也仅仅是有限的支持。因此 Verilator 初始化所有的信号为 0。幸运的是，我们可以改变这种行为通过命令行参数，我们可以要求 Verilator 初始化所有的值为 1 或者其他随机数，这将帮助我们检查我们重置信号是否工作了。

为了帮助我们的测试用例初始化为随机数，我们需要调用 `Verilated::commandArgs(argc, argv);` 在创建 `DUT` 对象前。

```c++
int main(int argc, char** argv, char** env) {
    Verilated::commandArgs(argc, argv);
    Valu *dut = new Valu;
<...>
```

之后我们还需要添加我们的编译选项 `--x-assign unique` 和 `--x-initial unique`，结果如下：

```c++
verilator -Wall --trace --x-assign unique --x-initial unique -cc $(MODULE).sv --exe tb_$(MODULE).cpp
```

最终，我们需要通过添加 `+verilator+rand+reset+2` 在执行我们的仿真可执行文件时：

```shell
@./obj_dir/V$(MODULE) +verilator+rand+reset+2
```

### DUT Reset

在我们的测试用例中，我们可以添加：

```c++
    dut->rst = 0;
    if(sim_time > 1 && sim_time < 5){
        dut->rst = 1;
        dut->a_in = 0;
        dut->b_in = 0;
        dut->op_in = 0;
        dut->in_valid = 0;
    }
```

来进行信号的重新设置。

### Basic Verification

在我们的测试程序中，我们可以使用 `Verilated::gotFinished()` 来停止仿真（相当于 `$finish()`）。

## Verilator Examples

我们首先看一个测试用例的例子：

```c++
#include <stdlib.h>
#include "Vmodule.h"
#include "verilated.h"

int main(int argc, char **argv) {
    // Initialize Verilators variables
    Verilated::commandArgs(argc, argv);

    // Create an instance of our module under test
    Vmodule *tb = new Vmodule;

    // Tick the clock until we are done
    while(!Verilated::gotFinish()) {
        tb->i_clk = 1;
        tb->eval();
        tb->i_clk = 0;
        tb->eval();
    } exit(EXIT_SUCCESS);
}
```

在这个测试中，当我们将 `i_clk` 从 0 变为 1 的时候将会造成所有 `@(posedge i_clk)` 的逻辑块运行。因此我们测试的作用就是在一个循环中不断修改时钟并进行执行。仿真结束当 `verilog` 执行了 `$finished()` 或者使用 `Ctrl-C` 来终止进程。

现在我们尝试根据这个功能使用一个 `TESRBENCH` 类来包裹所需的功能:

```c++
template<class MODULE>    class TESTBENCH {
    unsigned long    m_tickcount;
    MODULE    *m_core;

    TESTBENCH(void) {
        m_core = new MODULE;
        m_tickcount = 0l;
    }

    virtual ~TESTBENCH(void) {
        delete m_core;
        m_core = NULL;
    }

    virtual void    reset(void) {
        m_core->i_reset = 1;
        // Make sure any inheritance gets applied
        this->tick();
        m_core->i_reset = 0;
    }

    virtual void    tick(void) {
        // Increment our own internal time reference
        m_tickcount++;

        // Make sure any combinatorial logic depending upon
        // inputs that may have changed before we called tick()
        // has settled before the rising edge of the clock.
        m_core->i_clk = 0;
        m_core->eval();

        // Toggle the clock

        // Rising edge
        m_core->i_clk = 1;
        m_core->eval();

        // Falling edge
        m_core->i_clk = 0;
        m_core->eval();
    }

    virtual bool    done(void) { return (Verilated::gotFinish()); }
}
```

我们的 `TESTBENCH` 类提供两个方法: `tick()` 和 `reset()` ，并且我们希望在任何时刻检查是否 Verilator 的状态为 `$finished`。

主程序的修改如下：

```c++
#include "testbench.h"

int main(int argc, char **argv) {
    Verilated::commandArgs(argc, argv);
    TESTBENCH<Vmodule> *tb = new TESTBENCH<Vmodule>();

    while(!tb->done()) {
        tb->tick();
    } exit(EXIT_SUCCESS);
}
```

在测试的时候我们也可以 `printf()` 一些关键的信号帮助我们调试：

```c++
class    MODULE_TB : public TESTBENCH<Vmodule> {

    virtual void    tick(void) {
        // Request that the testbench toggle the clock within
        // Verilator
        TESTBENCH<Vmodule>::tick();

        // Now we'll debug by printf's and examine the
        // internals of m_core
        printf("%8ld: %s %s ...\n", m_tickcount,
            (m_core->v__DOT__wb_cyc)?"CYC":"   ",
            (m_core->v__DOT__wb_stb)?"STB":"   ",
            ... );
    }
}
```

除此之外我们也可以添加一些信号的判断来帮助我们决定是否进行输出一些信息：

```c++
class    MODULE_TB : public TESTBENCH<Vmodule> {

    virtual void    tick(void) {
        // Request that the testbench toggle the clock within
        // Verilator
        TESTBENCH<Vmodule>::tick();

        bool    writeout = false;
        // Check for debugging conditions
        //
        // For example:
        //
        //   1. We might be interested any time a wishbone master
        //    command is accepted
        //
        if ((m_core->v__DOT__wb_stb)&&(!m_core->v__DOT__wb_stall))
            writeout = true;
        //
        //   2. as well as when the slave finally responds
        //
        if (m_core->v__DOT__wb_ack)
            writeout = true;

        if (writeout) {
            // Now we'll debug by printf's and examine the
            // internals of m_core
            printf("%8ld: %s %s ...\n", m_tickcount,
                (m_core->v__DOT__wb_cyc)?"CYC":"   ",
                (m_core->v__DOT__wb_stb)?"STB":"   ",
                ... );
        }
    }
}
```

如果我们想去使用 `gtkwave` 来生成波形的话，我们需要在 `TESTBENCH` 在执行时不断生成波形:

```c++
#include <verilated_vcd_c.h>

template<class MODULE> class TESTBENCH {
    // Need to add a new class variable
    VerilatedVcdC    *m_trace;
    ...

    TESTBENCH(void) {
        // According to the Verilator spec, you *must* call
        // traceEverOn before calling any of the tracing functions
        // within Verilator.
        Verilated::traceEverOn(true);
        ... // Everything else can stay like it was before
    }

    // Open/create a trace file
    virtual    void    opentrace(const char *vcdname) {
        if (!m_trace) {
            m_trace = new VerilatedVcdC;
            m_core->trace(m_trace, 99);
            m_trace->open(vcdname);
        }
    }

    // Close a trace file
    virtual void    close(void) {
        if (m_trace) {
            m_trace->close();
            m_trace = NULL;
        }
    }

    virtual void    tick(void) {
        // Make sure the tickcount is greater than zero before
        // we do this
        m_tickcount++;

        // Allow any combinatorial logic to settle before we tick
        // the clock.  This becomes necessary in the case where
        // we may have modified or adjusted the inputs prior to
        // coming into here, since we need all combinatorial logic
        // to be settled before we call for a clock tick.
        //
        m_core->i_clk = 0;
        m_core->eval();

        //
        // Here's the new item:
        //
        //    Dump values to our trace file
        //
        if(trace) m_trace->dump(10*m_tickcount-2);

        // Repeat for the positive edge of the clock
        m_core->i_clk = 1;
        m_core->eval();
        if(trace) m_trace->dump(10*m_tickcount);

        // Now the negative edge
        m_core->i_clk = 0;
        m_core->eval();
        if (m_trace) {
            // This portion, though, is a touch different.
            // After dumping our values as they exist on the
            // negative clock edge ...
            m_trace->dump(10*m_tickcount+5);
            //
            // We'll also need to make sure we flush any I/O to
            // the trace file, so that we can use the assert()
            // function between now and the next tick if we want to.
            m_trace->flush();
        }
    }
}
```

## References

- [Taking a New Look at Verilator](https://zipcpu.com/blog/2017/06/21/looking-at-verilator.html)
- [Verilator example sources for Verilog/SystemVerilog verification with C++](https://github.com/n-kremeris/verilator_basics)
