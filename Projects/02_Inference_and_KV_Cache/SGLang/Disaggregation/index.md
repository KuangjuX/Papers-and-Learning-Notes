# PD 分离与缓存传输

Prefill / Decode 分离涉及跨实例缓存传输、状态通知与资源生命周期。这里记录通用机制，与具体 attention 算法的笔记交叉引用。

- [Mooncake：GPU-source 传输取消与资源回收](mooncake-gpu-source-lifetime.md)：PR !497 中的失败等待、publication_lock 和非阻塞通知。
