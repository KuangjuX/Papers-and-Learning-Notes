# io_uring 阅读笔记

##  io_uring 简述

对于 io_uring 的异步请求有两个重要的操作：提交请求、完成所提交的请求。

对于 IO 事件的提交，应用程序是生产者而内核是消费者；而对于完成事件来说，内核是生产者而应用程序是消费者。因此我们需要一对环(rings) 提供高性能的 channel 用于在内核和应用程序中的通信，这对环就是新的接口的核心: io_uring，它们被命名为 `submission queue(SQ)`, `completion queue(CQ)`，这两个数据结构构造了新接口的基础。

## io_uring 的数据结构

首先我们看一下 `(completion queue event)CQE` 的数据结构定义：

```c
struct io_uring_cqe {
    __u64 user_data;
    __s32 res;
    __u32 flags;
}
```

首先 `io_uring_cqe` 有一个 `user_data` 的域，这个域是被最初的提交的请求时就被携带的，能够携带任何用来表明这是哪个请求的信息，最基础的使用就是使用原始请求的指针，内核将不会修改这个域，它仅仅直接从提交事件中转移到完成事件中。`res` 指向本次提交事件所返回的结果，就像系统调用返回的结果一样。`flags` 域将携带依赖于该操作的元数据，但是现在这个域还没有被使用。

对于 `submission queue event(SQE)` 来说结构定义则更为复杂：

```c
struct io_uring_sqe {
   __u8 opcode;
   __u8 flags;
   __u16 ioprio;
   __s32 fd;
   __u64 off;
   __u64 addr;
   __u32 len;
   union {
   	__kernel_rwf_t rw_flags;
   	__u32 fsync_flags;
   	__u16 poll_events;
	__u32 sync_range_flags;
	__u32 msg_flags;   
   };
   __u64 user_data;
   union {
   	__u16 buf_index;
   	__u64 __pad2[3];
   }; 
};
```

`opcode` 域用来描述操作码对于提交的请求，例如对于一个读请求来说则是 `IORING_OP_READV`。`flags` 包含在命令类型中通用的修饰符标志。`ioprio` 则用来表示该请求的优先级，对于普通的读写请求来说，将遵循 `ioprio_set` 系统调用的定义。`fd` 是与该请求相关的文件描述符，`off` 表明该操作开始执行的偏移量，`addr` 包含了内核开始IO操作的地址。对于 `non-vectored` IO 传输，`addr` 必须直接包含地址。如果是 `non-vectored` IO 的话直接携带 `len`, 如果是 `vectored` IO 的话则携带 a number of vector（被 `addr` 所描述）。

接下来是一个 union 用来描述特定的 `opcode` 的。举例来说，对于 vectored read (**IORING_OP_READV**)，这些标志位这些标志位应当和 `preadv2(2)` 系统调用的标志位相同。 `user_data` 是由用户传输进来且不会被内核访问与修改。`buf_index` 将在高级使用用例中进行描述，最后的 `pad` 用来做数据结构的填充，是被用于作为64位对齐使用。

（注：`vectored IO` 是一种 IO的形式 通过一个单生产者顺序地从多个 buffer 中读取数据并写入到一个数据流中；或者从一个 buffer 中读取数据并写入到多个数据流中，其用于在一次函数调用中读、写多个非连续缓冲区。）

## io_uring 通信

在明白了 io_uring 的数据结构后，让我们看看 io_uring 工作的细节。

`CQEs` 被一个数组来组织，该数组的内存对于内核和应用程序来说都是可见的并且是可修改的。但是，由于 `CQE` 是由内核生成的，因此实际上只有内核在修改 `CQE`。通信的方法使用一个 ring buffer 来管理。每当内核将新事件发布到 `CQ ring` 时，它都会更新与其关联的 tail。当应用程序使用一个 entry 时，它会更新 head。因此，如果 tail 与 head 不同，则应用程序知道它有一个或多个可供消费的事件。环形计数器本身是自由流动的 32 位整数，当完成的事件数量超过环的容量时，依靠自然包装。这种方法的一个优点是我们可以利用环的全尺寸，而不必在侧面管理“环已满”标志，这会使环的管理变得复杂。随之而来的是，环的大小必须是 2 的幂。

为了找到一个事件的索引，应用程序必须给当前的  tail 索引加上一个掩码，如下所示：

```c
  unsigned head;
  head = cqring→head;
  read_barrier();
  if (head != cqring→tail) {
       struct io_uring_cqe *cqe;
       unsigned index;
      index = head & (cqring→mask);
      cqe = &cqring→cqes[index];
      /* process completed cqe here */
      ...
      /* we've now consumed this entry */
       head++;
  }
  cqring→head = head;
  write_barrier();
```

`ring->cqes[]` 是 `io_uring_cqe` 结构的共享数组。在之后，我们将会介绍共享内存是如何进行启动和管理的。

对于提交事件这一端规则仍然被保留。应用程序更新 tail 同时内核消费 head，一个重要的不同点是 CQ ring 直接索引 `CQEs` 的共享内存，提交端在它们中有一个 indirection 的 array，因此提交端的 `ring buffer` 是通过 index 直接访问 array。

一个例子如下所示：

```c
    struct io_uring_sqe *sqe;
    unsigned tail, index;
    tail = sqring→tail;
    index = tail & (*sqring→ring_mask);
    sqe = &sqring→sqes[index];
    /* this call fills in the sqe entries for this IO */
    init_io(sqe);
    /* fill the sqe index into the SQ ring array */
    sqring→array[index] = index;
    tail++;
    write_barrier();
    sqring→tail = tail;
    write_barrier();
```

完成事件可能以任何顺序达到，请求的顺序和完成的顺序没有任何联系，SQ ring 和 CQ ring 独立地运行。然而，一个完成的事件将总是与一个请求的事件相适配。因此，一个完成的事件将总和一个特定的提交请求相联系。

## io_uring 接口

和 `aio` 一样，`io_uring` 也有许多系统调用，第一个系统调用用来启动 `io_uring` 实例：

`int io_uring_setup(unsigned entries, struct io_uring_params *params);`

应用程序必须提供 `io_uring` 实例所规定的数量的 entries。其中 `entries` 表明 `SQEs` 的数量，必须是2的幂次，在1..4096中，`params` 结构体的定义如下所示：

```c
struct io_uring_params {
    __u32 sq_entries;
    __u32 cq_entries;
    __u32 flags;
    __u32 sq_thread_cpu;
    __u32 sq_thread_idle;
    __u32 resv[5];
    struct io_sqring_offsets sq_off;
    struct io_cqring_offsets cq_off; 
};
```

`sq_entries` 将由内核进行填充，让应用程序知道当前的 ring 支持多少个 `SQE` entries。同样对于 `cqe_entries` 通知应用程序 CQ ring 到底有多大。

当成功调用该接口后，内核将会返回一个文件描述符指向这个 `io_uring` 实例。这就是 `sq_off` 和 `cq_off` 派上用场的地方。由于 SQE 和 CQE 需要被内核和用户同时访问，因此应用程序必须知道如果到达这块内存，这应当使用 `mmap()` 映射到应用程序的内存空间中。应用程序使用 `sq_off` 去指明不同 ring 成员的偏移量，`io_sqring_offsets` 结构如下所示：

```c
struct io_sqring_offsets {
    __u32 head; /* offset of ring head */
    __u32 tail; /* offset of ring tail */
    __u32 ring_mask; /* ring mask value */
    __u32 ring_entries; /* entries in ring */
    __u32 flags; /* ring flags */
    __u32 dropped; /* number of sqes not submitted */
    __u32 array; /* sqe index array /
	__u32 resv1;
	__u64 resv2;
};
```

 为了获取这段内存，应用程序必须使用 `mmap` 通过 `io_uring` 的文件描述符和与 SQ ring 相关联的内存偏移量，`io_uring` 的 API 定义了如下的 `mmap` 偏移量从而能被应用程序所使用：

```c
#define IORING_OFF_SQ_RING 0ULL 
#define IORING_OFF_CQ_RING 0x8000000ULL 
#define IORING_OFF_SQES 0x10000000ULL
```

`IORING_OFF_SQ_RING` 用来映射 SQ ring 进入用户内存空间，`IORING_OFF_CQ_RING` 用于 CQ ring，`IORING_OFF_SQES` 用来映射 sqe 数组，对于 CQEs 的数组来说，其数组是其 ring 的一部分。由于 SQ ring 是 SQE 的数组的索引，因此应用程序必须单独映射 SQE 数组。

应用程序将需要自己定义数据结构获取这些偏移量，一个可能的例子如下所示：

```c
struct app_sq_ring {
	unsigned *head;
    unsigned *tail;
	unsigned *ring_mask;
    unsigned *ring_entries;
	unsigned *flags;
   	unsigned *dropped;
	unsigned *array; 
};
```

一个启动 `io_uring` 的例子如下所示：

```c
struct app_sq_ring app_setup_sq_ring(int ring_fd, struct io_uring_params *p) {
	struct app_sq_ring sqring;
	void *ptr;
    ptr = mmap(NULL, p→sq_off.array + p→sq_entries * sizeof(__u32),
    PROT_READ | PROT_WRITE, MAP_SHARED | MAP_POPULATE,
    ring_fd, IORING_OFF_SQ_RING);
    sring→head = ptr + p→sq_off.head;
    sring→tail = ptr + p→sq_off.tail;
    sring→ring_mask = ptr + p→sq_off.ring_mask;
    sring→ring_entries = ptr + p→sq_off.ring_entries;
    sring→flags = ptr + p→sq_off.flags;
    sring→dropped = ptr + p→sq_off.dropped;
    sring→array = ptr + p→sq_off.array;
    return sring; 
}

```

应用程序也需要一个方式通知内核现在有哪些请求需要被消费，这将会通过如下系统调用来实现：

```c
int io_uring_enter(unsigned int fd, unsigned int to_submit, unsigned int min_complete, unsigned int flags, sigset_t sig);
```

`fd` 指向 `io_uring` 文件描述符，`to_submit` 通知内核有多少 sqes 需要被消费和提交， `min_complete` 通知内核等待完成该数量的请求

## 内存序列

待更新......

## liburing 库

直接使用系统调用对于用户来说不算友好，因此内核开发者为用户提供了一个 `io_uring` 的用户库。

```c
struct io_uring ring;
io_uring_queue_init(ENTRIES, &ring, 0);
```

通过使用 `io_uring_queue_init` 我们可以启动一个 io_uring 实例而无需使用 `io_uring_setup` 之后调用 `mmap()`,  

当完成该实例的使用后我们可以调用下面的系统调用来销毁：

```c
 io_uring_queue_exit(&ring);
```

一个使用 `liburing` 实例如下所示：

```c
	struct io_uring_sqe sqe;
    struct io_uring_cqe cqe;
   /* get an sqe and fill in a READV operation */
 	sqe = io_uring_get_sqe(&ring);
 	io_uring_prep_readv(sqe, fd, &iovec, 1, offset);
   /* tell the kernel we have an sqe ready for consumption */
 	io_uring_submit(&ring);
   /* wait for the sqe to complete */
 	io_uring_wait_cqe(&ring, &cqe);
  /* read and process cqe event */
 	app_handle_cqe(cqe);
 	io_uring_cqe_seen(&ring, cqe);
```

## 高级用法及特性

待更新......

## 更多实例

一个使用 `io_uring` 编写的 chat server 如下所示：

```rust 
use io_uring::{IoUring, SubmissionQueue, opcode, squeue, types};
use slab::Slab;

use std::collections::VecDeque;
use std::net::TcpListener;
use std::os::unix::io::{ AsRawFd, RawFd };
use std::{ io, ptr };

#[derive(Clone, Debug)]
enum Token {
    Accept, 
    Poll {
        fd: RawFd
    },
    Read {
        fd: RawFd,
        buf_index: usize
    },
    Write {
        fd: RawFd, 
        buf_index: usize, 
        offset: usize,
        len: usize
    }
}

pub struct AcceptCount {
    entry: squeue::Entry,
    count: usize
}

impl AcceptCount {
    /// 新建 AcceptCount 结构体,fd 表示监听的文件描述符,token 表示 sqe 携带的用户数据
    /// count 表示该文件描述符所能接收到的最大连接
    fn new(fd: RawFd, token: usize, count: usize) -> Self {
        Self {
            entry: opcode::Accept::new(types::Fd(fd), ptr::null_mut(), ptr::null_mut())
                    .build()
                    .user_data(token as _),
            count
        }
    }

    /// 向提交队列中提交事件
    pub fn push_to(&mut self, sq: &mut SubmissionQueue<'_>) {
        while self.count > 0 {
            unsafe{
                match sq.push(&self.entry) {
                    Ok(_) => self.count -= 1,
                    Err(_) => break,
                }
            }
        }
        sq.sync();
    }
}
fn main() {
    let mut ring = IoUring::new(256).unwrap();
    let listener = TcpListener::bind(("127.0.0.1", 8080)).unwrap();

    // 用于存放提交失败的事件
    let mut backlog = VecDeque::new();
    // 用于存放空闲的缓冲区的 buf_index,一般为关闭连接的socket被回收的
    let mut bufpool = Vec::with_capacity(64);
    // 用来存储内存中的缓冲区的指针，使用 buf_index 进行访问
    let mut buf_alloc = Slab::with_capacity(64);
    // 一段用来存放不同事件token的内存区域，通过token_index获取到事件类型及信息
    let mut token_alloc = Slab::with_capacity(64);

    // 用来存放所有建立连接的 sockets
    let mut sockets = Vec::new();

    println!("Server listen on {}", listener.local_addr().unwrap());

    // 从 io_uring 实例中获取提交者,提交队列，完成队列
    let (submitter, mut sq, mut cq) = ring.split();

    // 建立 AcceptCount，用于计算监听的文件描述符并提交事件
    let mut accept = AcceptCount::new(listener.as_raw_fd(), token_alloc.insert(Token::Accept), 10);
    accept.push_to(&mut sq); 

    loop {
        // 提交SQ里的所有队列，等待至少一个事件成功返回
        match submitter.submit_and_wait(1) {
            Ok(_) => (),
            Err(ref err) => if err.raw_os_error() == Some(libc::EBUSY) { break; },
            Err(err) => panic!(err)
        }
        // 同步完成队列，刷新在内核中的CQEs
        cq.sync();

        loop {
            if sq.is_full() {
                // 提交队列满了的时候提交所有任务到内核
                match submitter.submit() {
                    Ok(_) => (),
                    Err(ref err) => if err.raw_os_error() == Some(libc::EBUSY) {break;},
                    Err(err) => panic!(err)
                }
            }
            // 同步提交队列的内容
            sq.sync();

            match backlog.pop_front() {
                Some(sqe) => unsafe {
                    // 向SQ中提交事件（此时没有被提交到内核中）
                    let _ = sq.push(&sqe);
                },

                None => break,
            }
        }

        accept.push_to(&mut sq);

        for cqe in &mut cq {
            // 遍历完成队列的内容
            // 获取 CQE 的结果
            let ret = cqe.result();
            // 获取 CQE 的用户数据（用于判断是什么事件）
            let token_index = cqe.user_data() as usize;

            if ret < 0  {
                // 表明该事件执行失败了
                eprintln!(
                    "token {:?} error: {:?}",
                    token_alloc.get(token_index),
                    io::Error::from_raw_os_error(-ret)
                );
                continue;
            }

            // 通过传入的用户数据取出对应的 token 用于判断是什么事件
            let token = &mut token_alloc[token_index];
            match token.clone() {
                Token::Accept => {
                    // 当接收到客户端连接时，将 accept 的 count 域进行迭代
                    accept.count += 1;
                    // 此时收到的结果是一个文件描述符，表示的是接收到连接的socket
                    let fd = ret;
                    // 将文件描述符push到sockets中
                    sockets.push(fd);
                    // 此时向分配 token_alloc 中插入Token获取token用于作为 user_data
                    let poll_token = token_alloc.insert(Token::Poll{ fd });
                    // 创建poll实例，不断轮询检测是否从该socket中收到信息
                    let poll_e = opcode::PollAdd::new(types::Fd(fd), libc::POLLIN as _)
                                        .build()
                                        .user_data(poll_token as _);
                    unsafe{
                        if sq.push(&poll_e).is_err() {
                            // 如果没有提交到提交队列中(此时应当是提交队列已满)，则将其放入backlog中，等待下一次提交
                            backlog.push_back(poll_e);
                        }
                    }
                }

                Token::Poll { fd } => {
                    let (buf_index, buf) = match bufpool.pop() {
                        Some(buf_index) => (buf_index, &mut buf_alloc[buf_index]),
                        None => {
                            // 新建一个缓冲区
                            let buf = vec![0u8; 2048].into_boxed_slice();
                            // 返回一个空条目的 handle,允许进一步进行操作
                            let buf_entry = buf_alloc.vacant_entry();
                            // 获取该 handle 的key(index)
                            let buf_index = buf_entry.key();
                            // 返回索引和将缓冲区插入 entry中
                            (buf_index, buf_entry.insert(buf))
                        }
                    };

                    *token = Token::Read { fd, buf_index };

                    // 当 Poll 事件返回后表明有一个可读事件发生，此时应当注册读取事件，并将
                    // 该事件 push 到提交队列中
                    let read_e = opcode::Recv::new(types::Fd(fd), buf.as_mut_ptr(), buf.len() as _)
                                        .build()
                                        .user_data(token_index as _);

                    unsafe {
                        if sq.push(&read_e).is_err() {
                            backlog.push_back(read_e);
                        }
                    }
                }

                Token::Read { fd, buf_index} => {
                    // 读取事件返回，表明从连接的socket中读取到了传输来的信息
                    if ret == 0 {
                        // 结果为0,表明对方关闭了连接
                        // 此时这个缓冲区就没有用了，将其push
                        // 到 bufpool,用于下一次read/write事件
                        // 作为缓冲区
                        bufpool.push(buf_index);
                        // 将token_index从token_alloc移除掉
                        token_alloc.remove(token_index);

                        println!("shutdown");

                        for i in 0..sockets.len() {
                            if sockets[i] == fd {
                                sockets.remove(i);
                            }
                        }

                        unsafe {
                            libc::close(fd);
                        }
                    }else {
                        // 读取成功，此时的结果表明读取的字节数
                        let len = ret as usize;
                        // 获取用来获取 read 的缓冲区
                        let buf = &buf_alloc[buf_index];

                        let socket_len = sockets.len();
                        token_alloc.remove(token_index);
                        for i in 0..socket_len {
                            // 新建write_token并将其传输给所有正在连接的socket
                            let write_token = Token::Write {
                                fd: sockets[i], 
                                buf_index,
                                len,
                                offset: 0
                            };

                            let write_token_index = token_alloc.insert(write_token);

                            // 注册 write 事件，实际上是注册 send syscall 的事件
                            let write_e = opcode::Send::new(types::Fd(sockets[i]), buf.as_ptr(), len as _)
                                                .build()
                                                .user_data(write_token_index as _);
                            unsafe {
                                if sq.push(&write_e).is_err() {
                                    backlog.push_back(write_e);
                                }
                            }
                        }

                    }
                }

                Token::Write {
                    fd,
                    buf_index,
                    offset,
                    len
                } => {
                    // write(send) 事件返回，此时的结果是写字节数
                    let write_len = ret as usize; 

                    // 如果写偏移量的写数据的字节数大于等于要写的长度，
                    // 此时表明已经写完，则开始注册等待事件继续轮询socket是否传输信息
                    let entry = if offset + write_len >= len {
                        bufpool.push(buf_index);

                        *token = Token::Poll { fd };

                        opcode::PollAdd::new(types::Fd(fd), libc::POLLIN as _)
                                .build()
                                .user_data(token_index as _)
                    }else {
                        // 如果没写完的话则更新参数重新写
                        // 将写偏移量加上写字节数
                        let offset = offset + write_len;
                        // 将要写的数据长度减去偏移量
                        let len = len - offset;
                        // 通过偏移量获取缓冲区的指针
                        let buf = &buf_alloc[buf_index][offset..];

                        *token = Token::Write {
                            fd, 
                            buf_index,
                            offset, 
                            len
                        };

                        opcode::Write::new(types::Fd(fd), buf.as_ptr(), len as _)
                                    .build()
                                    .user_data(token_index as _)
                    };

                    unsafe {
                        if sq.push(&entry).is_err() {
                            // 将事件push到提交队列中，失败了则放入到备份中
                            backlog.push_back(entry);
                        }
                    }
                }
            }
        }
    }
}
```



## 引用

- [Efficient IO with io_uring](https://kernel.dk/io_uring.pdf)

- [Vectored I/O](https://en.wikipedia.org/wiki/Vectored_I/O)
- [tokio-rs/io-uring](https://github.com/tokio-rs/io-uring)
- Advanced Programming the UNIX Environment



