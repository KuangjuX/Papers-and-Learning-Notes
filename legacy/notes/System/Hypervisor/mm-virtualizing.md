# Virtualizing Memory

## Software-based memory

### 启动 Shadow Page Table

1. VMM 检测到 guest OS 设置虚拟 CR3

2. VMM 遍历 guest 页表，构建一个正确的影子页表

3. 在影子页表中，每一个 GVA 被翻译为 HVA

4. 最终，VMM 设置真实的 CR3 指向影子页表

```
set_cr3 (guest_page_table):
 for VPN in 0 to 220
 if guest_page_table[VPN] & PTE_P /* PTE_P: valid bit */
 PPN = guest_page_table[VPN]
 MPN = pmap[PPN]
 shadow_page_table[VPN] = MPN | PTE_P
 else
 shadow_page_table = 0
 CR3 = PHYSICAL_ADDR(shadow_page_table)
```

### 当 Guest OS 修改页表时

**1. 不应该允许直接发生：**

- 因为 CR3 现在指向影子页表

- 需要将影子页表与 guest 页表进行同步

**2. VMM 需要检测到什么时候 guest OS修改页表并且更新影子页表**

- 把 guest page table 标记为只读（在影子页表中）

- 如果 guest oS 想去修改它的页表的话，将会触发页错误

- VMM 将会通过更新影子页表来处理页错误

### 处理页错误

当页错误发生时，陷入 VMM 中

如果在 guest PTE 中的 present bit 为 0，guest OS 需要处理错误：

- Guest OS 从虚拟磁盘中加载 guest 物理内存并且将 P 位设置为 1

- Guest OS 从页错误中返回，将会再次陷入 VMM

- VMM 见到 P 位设置为 1 在 guest PTE 中然后在影子页表中创建 entry

- VMM 从原始的页错误中返回

如果 guet PTE P 位 为 1：

- VMM 加载正确的物理地址，加载到内存中如果需要的话

- VMM 在影子页表中创建 entry

- VMM 从原始页错误中返回

### 如果 Guest App 访问 Kernel 内存怎么办？

**一个解决方案：把一个影子页表分成两个表：**

- 两个影子页表，一个用户使用，一个内核使用

- 当 guest OS 切换到 guest app 的时候，VMM 将也会切换影子页表

### 影子页表的优势和劣势

**优势：**

- 当建立影子页表时，内存访问非常快

**劣势：**

- 需要在 guest PTs 和 shadow PTs 质检维护一致性，这会触发 VMM traps，可能消耗会很大

- 每次在切换页表时都要进行 TLB flush

- 内存空间需要维护 `pmap`

## Hardware-assisted memory virtualization

## Memory management
