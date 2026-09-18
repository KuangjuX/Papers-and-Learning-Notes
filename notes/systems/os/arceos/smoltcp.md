# smoltcp

## smoltcp 介绍

## smoltcp 在 arceos 上的实现分析

- `SOCKET_SET.poll_interfaces()` 调用 `ETH0.poll()`。

- `ETH0.poll()` 调用 `dev.poll()` 并且对 buf 进行 `snoop_tcp_packet` 处理。

- `dev.poll()` 不断从真实网卡里接收 packet 并将其 push_back 到 `rx_buf_queue` 中。

- dev 有个 `receive` 方法不断从 `rx_buf_queue` 队列中 pop 出 packet。

- dev 实现了 `smoltcp::phy::Device` trait 中的 `receive` 方法通过调用 dev 的 `receive` 方法从队列中拿出 packet 用来消耗。

- 在 `SOCKET_SET` 调用 `poll_interfaces()` 后应当在队列中有 packets。

- 随后在 `TcpSocket::recv()` 中继续调用 `SOCKET_SET.with_socket_mut::<tcp::Socket, _, _>(handle, f|socket|{...})`。

- 在 `InterfaceWrapper::poll()` 中也调用了 `iface.poll()`。iface 是 smoltcp 的 Interface 类型，`poll()` 方法的作用是传输在给定 sockets 中缓存的 packets，接收在设备缓存在设备中的 packets。

- 在 `Interface::poll()` 方法中调用了 `self.socket_ingress()` 和 `self.socket_egress()` 方法。`socket_ingress()` 从 device 中 `receive()` 一个 `rx_token` 然后对于这个 `rx_token` 进行 consume，若为 `Ethernet` 的话则进行 `process_ethernet` 以及 `dispatch` 的处理。`process_ethernet()` 进行预处理将其变成 `Packet` 结构，在 `process_ethernet()` 中调用 `process_ipv4()` ，随后 `process_ipv4()` 调用 `process_tcp()` 并将其放入 `Socket.rx_buffer` 中 。


