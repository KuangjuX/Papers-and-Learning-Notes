# Virtualizing Memory

<a id="software-based-memory"></a>

## Shadow Page Tables

以下用不支持二阶段地址转换的简化 x86 VMM 说明影子页表；按需填表、缓存与权限细节取决于实现。

<a id="启动-shadow-page-table"></a>

1. VMM 检测到 guest OS 设置虚拟 CR3

2. VMM 遍历 guest 页表，构建一个正确的影子页表

3. 影子页表把 GVA 映射到宿主物理地址 HPA，合并 guest 的 GVA → GPA 与 VMM 的 GPA → HPA 两级映射；HVA 是 VMM 访问 guest 内存时使用的宿主虚拟地址，不能作为硬件最终的物理地址。[KVM MMU：Translation](https://docs.kernel.org/virt/kvm/x86/mmu.html#translation)

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

<a id="当-guest-os-修改页表时"></a>

guest OS 修改自己的页表后，影子页表必须反映新的映射和权限。一种同步办法是写保护 guest 页表：

- 把 guest page table 标记为只读（在影子页表中）

- 如果 guest OS 想去修改它的页表的话，将会触发页错误

- VMM 将会通过更新影子页表来处理页错误

<a id="处理页错误"></a>

当页错误发生时，陷入 VMM 中

如果在 guest PTE 中的 present bit 为 0，guest OS 需要处理错误：

- Guest OS 从虚拟磁盘中加载 guest 物理内存并且将 P 位设置为 1

- Guest OS 从页错误中返回，将会再次陷入 VMM

- VMM 见到 P 位设置为 1 在 guest PTE 中然后在影子页表中创建 entry

- VMM 从原始的页错误中返回

如果 guest PTE 的 P 位为 1：

- VMM 加载正确的物理地址，加载到内存中如果需要的话

- VMM 在影子页表中创建 entry

- VMM 从原始页错误中返回

<a id="如果-guest-app-访问-kernel-内存怎么办"></a>

在 guest 内核与应用无法直接复用宿主特权级隔离的方案中，可以分别维护两套影子页表：

- 两个影子页表，一个用户使用，一个内核使用

- 当 guest OS 切换到 guest app 的时候，VMM 将也会切换影子页表

<a id="影子页表的优势和劣势"></a>

**优势：**

- 当建立影子页表时，内存访问非常快

**劣势：**

- 需要在 guest PTs 和 shadow PTs 之间维护一致性，这会触发 VMM traps，可能消耗会很大

- 页表切换与映射失效需要正确维护 TLB；刷新范围与能否复用条目取决于硬件标记和实现

- 内存空间需要维护 `pmap`

<a id="hardware-assisted-memory-virtualization"></a>

## Hardware-assisted Virtualization

EPT/NPT 等硬件二阶段转换先用 guest 页表完成 GVA → GPA，再用 VMM 管理的页表完成 GPA → HPA。例如 guest 将虚拟页映射到 GPA 页 3，第二阶段将 GPA 页 3 映射到 HPA 页 9，最终访问宿主页 9；VMM 不必为每个 guest 进程合成一套 GVA → HPA 页表。[KVM MMU：Virtual and real hardware supported、Translation](https://docs.kernel.org/virt/kvm/x86/mmu.html#virtual-and-real-hardware-supported)

<a id="memory-management"></a>
