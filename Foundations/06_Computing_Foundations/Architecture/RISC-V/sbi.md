# SBI

## System Reset Extension

System Reset Extension 提供函数允许 supervisor software 请求系统级 reboot 或者 shutdown. 

### System reset

```c
struct sbiret sbi_system_reset(uint32_t reset_type, uint32_t reset_reasion)
```

重置系统基于 `reset_type`  和 `reset_reason`。这是一个异步的调用，如果成功的话将不会返回。

`reset_type` 参数是 32 位宽：

| Value                   | Description                            |
| ----------------------- | -------------------------------------- |
| 0x00000000              | Shutdown                               |
| 0x00000001              | Cold reboot                            |
| 0x00000002              | Warm reboot                            |
| 0x00000003 - 0xEFFFFFFF | Reserved for future use                |
| 0xF0000000 - 0xFFFFFFFF | Vendor or platform specific reset type |
| > 0xFFFFFFFF            | Reserved                               |

`reset_reason` 是一个可选的参数表示系统重置的原因。参数 32 bit 宽：

| Vaue                    | Description                              |
| ----------------------- | ---------------------------------------- |
| 0x00000000              | No reason                                |
| 0x00000001              | System failure                           |
| 0x00000002 - 0xDFFFFFFF | Reserved for future use                  |
| 0xE0000000 - 0xEFFFFFFF | SBI implementation specific reset reason |
| 0xF0000000 - 0xFFFFFFFF | Vendor or platform specifiv reset reason |
| > 0xFFFFFFFF            | Reserved                                 |
