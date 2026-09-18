# RISC -V H 扩展

## Introduction

H 扩展被支持可以查看 `misa` 第七位是否被设置。H 有 HS mode 和 VS mode，运行在 S mode 的操作系统可以跑在 HS mode 或者 跑在 VS mode 当 guest kernel  

## Privilege Modes

V mode ，开的有 VU-mode 和 VS-mode，这时候开启两阶段翻译； V mode 有 M-mode，HS-mode 和 U-mode，这时候不开启两阶段翻译。

HS-mode 比 VS-mode 特权级更高，VS-mode 的特权级比 VU-mode 更高

## Hypervisor and Virtual Supervisor CSRs

在 HS-mode 添加了一些额外的寄存器用来做两阶段地址翻译和控制 VS-mode guest 的额外的行为：hstatus, hedeleg, hideleg, hvip, hip, hie, hgeip, hgeie, henvcfg, henvcfgh, hcounteren, htimedelta, htimedeltah, htval, htinst, and hgatp。

除此之外，VS CSRs 是正常 S CSRs 的复制品，例如 **vsstatus** 和 **sstatus** 的作用相同。V = 1 的时候 VS CSRs 用来替代 S CSRs，除非另有规定，所有访问或修改 S CSRs 都应该变为访问 VS CSRs。VS CSRs 只能被 M-mode 或者 HS-mode 访问，否则会造成指令异常。

一些 S 模式的 CSRs（例如 senvdfg,scounteren 和 scontext）没有匹配 VS CSR。这些会保留原有的功能。

## Hypervisor Register

### hstatus

提供类似 `mstatus` 的功能，为 VS-mode 追踪和控制异常

### hedeleg and hideleg

提供类似 `medeleg` 和 `mideleg` 的功能，可以把中断和异常代理到




