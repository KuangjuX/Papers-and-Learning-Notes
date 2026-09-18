# Lab-1 MapReduce

之前的版本是用 goroutine 写的，写错了，重新梳理一下想法：  


首先，Master 启动并初始化状态，然后等待 Worker 来请求，此时的 Master 并不知道有多少台 Worker 工作，因此他会维护一个 WorkerState 的数组，此时这个数组为空，当 Worker 来连接 Master 的时候，Master 在数组里为其加入状态，并为其添加 ID 号，并将其作为结果返回 Worker，此时 Worker 就知道自己的 ID 号了，在之后的请求中 Worker 将会带着这个 ID 号以便 Master 维护 Worker 的状态。  

当 Worker 每次向 Master 请求并拿到 task 的时候，Worker 将会开启一个定时器来记录工作时间是否超时，倘若超时的话则说明 Worker 已经崩溃了，此时则将当前 Worker 运行的任务标记为 Idle， 当其他 Worker 请求的时候发送给其他 Worker。计时器计划采用 goroutine 来实现，为每一个 Worker 维护一个计时器，使用 channel 来发送消息，表示 Worker 是否超时，倘若超时则采取对应的策略。当所有 Map 任务都完成而此时 Reduce 数据还未处理完的时候则向对应的 Worker 发送 Wait 状态使 Worker 过一段时间再来请求。

Master 需要处理 Map 产生的中间文件并将其分到对应的 Bucket 中，这里打算使用 goroutine 来异步处理，当 Reduce 被分到对应的 Bucket 的时候，goroutine 向 Master 发送消息，此时当有 Worker 来请求任务时则向其派发 Reduce 任务。

当仍然有 Reduce 未完成时，此时当 Worker 来请求不能直接向 Worker 响应 Exit，因为有可能其他 Worker 宕机的情况，此时应当返回 Wait 使 Worker 处于等待状态，那么如果有 Worker 宕机了，Master 则将记录的 Worker 运行的任务发送给来请求的 Worker 重新运行。   

一些数据结构的定义：  
```golang
// 传输 Map 任务的结构体定义，MapID 记录的是第几个 Map 任务，
// 用来构建中间文件名，Filename 则用来传输 Map 的文件名
type MapTask struct {
	MapID    int
	FileName string
}
```

```golang
// 传输 Reduce 的结构体定义，ReduceID 记录第几个 Reduce 任务将要执行，
// Bucket 是 ReduceBucket, 维护了 key -> values 的映射
type ReduceTask struct {
	ReduceID int
	Bucket   ReduceBucket
}
```

```golang
// Master 维护 Worker 状态，每次 Worker 向 Master 发出请求，
// Master 都会更新自己维护的 Worker 的状态
type WorkersState struct {
	WID     int
	WStatus int
	MTask   MapTask
	RTask   ReduceTask
}
```

关于 Master 与 Worker 互相通信的结构体定义如下所示：
```golang
// Worker 向 Master 请求任务，此时需要携带 WID 用来向
// Master 表明自己的身份，第一次请求携带 -1，表明自己是一台
// 没有与主机通信的及其，此时主机将会为其分配 WID 并将其作为响应返回
type TaskRequest struct {
	WID int
}

// Master 对 Worker 请求的响应，包含分配的 WID，任务状态，
// Map 或者 Reduce 任务的定义
type TaskResponse struct {
	WID        int
	TaskStatus int
	MapTask    MapTask
	ReduceTask ReduceTask
}
```

Master 所维护的状态：
```golang
type Coordinator struct {
	// Your definitions here.
	nMap    int
	nReduce int
	// 用来维护每个任务的状态，用来派发任务
	MapStateLock sync.RWMutex
	MapState     []int

	ReduceStateLock sync.RWMutex
	ReduceState     []int
	// 输入的文件名
	Files []string

	// reduce buckets，用来派发 reduce tasks
	Buckets []ReduceBucket

	// 每个 Worker 的状态维护列表
	WStates    []WorkersState
	WorkerLock sync.RWMutex

	// 对于每个 Worker 维护的计时器channel
	TimerChans []chan int

	// Reduce数据是否已经准备好
	IsReduceReady atomic.Value

	// 所有任务是否已经完成
	TaskEnd atomic.Value
}
```

Worker 所维护的状态:
```golang
type WorkerManager struct {
	WID     int
	MapF    func(string, string) []KeyValue
	ReduceF func(string, []string) string
}
```

关于 Worker 中的行为较为简单，只需在每次任务完成后向 Master 发送 RPC 请求即可：
```golang
func Worker(mapf func(string, string) []KeyValue,
	reducef func(string, []string) string) {
	// 初始化管理者
	var manager WorkerManager
	manager.WID = -1
	manager.MapF = mapf
	manager.ReduceF = reducef

	for {
		req := TaskRequest{
			WID: manager.WID,
		}
		rsp := TaskResponse{}
		call("Coordinator.RequestTask", &req, &rsp)

		// 更新管理者ID
		if manager.WID == -1 {
			manager.WID = rsp.WID
		}
		switch rsp.TaskStatus {

		case Wait:
			fmt.Printf("[Wait] Worker %v wait.\n", manager.WID)
			time.Sleep(1 * time.Second)
		case RunMapTask:
			// Run Map Task
			fmt.Printf("[Map Task] Worker %v run map task %v.\n", manager.WID, rsp.MapTask.MapID)
			RunMapJob(rsp.MapTask, manager.MapF)
		case RunReduceTask:
			// Run Reduce Task
			fmt.Printf("[Map Task] Worker %v run reduce task %v.\n", manager.WID, rsp.ReduceTask.ReduceID)
			RunReduceJob(rsp.ReduceTask, manager.ReduceF)
		case Exit:
			// Call Master to finish
			fmt.Printf("[Exit] Worker %v exit.\n", manager.WID)
			RunExitJob()
			return
		}
	}

}
```

关于 Master 的核心处理逻辑则较为复杂，因为它需要调度 Worker 去运行不同的任务，并判断是否有 Worker 宕机了。
 ```golang
 func (c *Coordinator) RequestTask(req *TaskRequest, rsp *TaskResponse) error {
	// 如果此时Worker是第一次请求的话，为其分配id
	// 并在WStates加入对应的结构
	c.UpdateTaskState(req.WID)
	if req.WID == -1 {
		// 为Worker分配索引号
		rsp.WID = len(c.WStates)
		c.WorkerLock.Lock()
		c.WStates = append(c.WStates, WorkersState{})
		c.WorkerLock.Unlock()
		c.TimerChans = append(c.TimerChans, make(chan int, 1))
		// fmt.Printf("分配的 Worker id 为 %v.\n", rsp.WID)
	}

	// 将WID作为局部变量赋值，方便之后的处理
	var WID int
	if req.WID == -1 {
		WID = rsp.WID
	} else {
		WID = req.WID
	}

	// 循环Master的Map任务状态，判断是否所有任务都完成了
	// 否则为Worker分发任务
	// c.MapStateLock.Lock()
	// c.MapStateLock.RLock()
	for i := 0; i < len(c.MapState); i++ {
		// c.MapStateLock.RLock()
		if c.MapState[i] == Idle {
			// c.MapStateLock.RUnlock()
			c.MapStateLock.Lock()
			c.MapState[i] = Progress
			c.MapStateLock.Unlock()

			fmt.Printf("[Map Task] 此时 Worker %v 运行 %v 号任务.\n", WID, i)

			// 更新对于Map任务状态
			rsp.TaskStatus = RunMapTask
			rsp.MapTask = MapTask{
				MapID:    i,
				FileName: c.Files[i],
			}

			// 更新Master的对该Worker的状态维护
			c.WorkerLock.Lock()
			c.WStates[WID].WStatus = RunMapTask
			c.WStates[WID].MTask = rsp.MapTask
			c.WorkerLock.Unlock()
			go c.StartTimer(WID, c.TimerChans[WID])
			return nil
		}
		// c.MapStateLock.Unlock()
	}
	// c.MapStateLock.RUnlock()

	// 如果没有准备好Reduce Bucket，则进入等待状态
	// c.ReadyLock.RLock()
	if c.IsReduceReady.Load() == false {
		rsp.WID = WID
		rsp.TaskStatus = Wait
		// 更新Master对于Worker的状态
		c.WorkerLock.Lock()
		c.WStates[WID].WStatus = Wait
		c.WorkerLock.Unlock()
		return nil
	}
	// c.ReadyLock.RUnlock()

	// c.ReduceStateLock.RLock()
	for i := 0; i < len(c.ReduceState); i++ {
		// c.ReduceStateLock.RLock()
		if c.ReduceState[i] == Idle {
			// c.ReduceStateLock.RUnlock()
			c.ReduceStateLock.Lock()
			c.ReduceState[i] = Progress
			c.ReduceStateLock.Unlock()

			fmt.Printf("[Reduce Task] 此时 Worker %v 运行 %v 号任务.\n", WID, i)

			rsp.TaskStatus = RunReduceTask
			rsp.ReduceTask = ReduceTask{
				ReduceID: i,
				Bucket:   c.Buckets[i],
			}
			// 更新Master对Worker的维护信息
			c.WorkerLock.Lock()
			c.WStates[WID] = WorkersState{
				WID:     WID,
				WStatus: RunReduceTask,
				RTask: ReduceTask{
					ReduceID: i,
					Bucket:   c.Buckets[i],
				},
			}
			c.WorkerLock.Unlock()
			go c.StartTimer(WID, c.TimerChans[WID])
			return nil
		}
	}
	// c.ReduceStateLock.RUnlock()

	// c.TaskLock.RLock()
	if c.TaskEnd.Load() == false {
		rsp.WID = WID
		rsp.TaskStatus = Wait
		// 更新Master状态
		c.WorkerLock.Lock()
		c.WStates[WID] = WorkersState{
			WID:     WID,
			WStatus: Wait,
		}
		c.WorkerLock.Unlock()
		return nil
	}
	// c.TaskLock.RUnlock()

	rsp.TaskStatus = Exit
	c.WorkerLock.Lock()
	c.WStates[WID].WStatus = Exit
	c.WorkerLock.Unlock()

	return nil
}
 ```

**通过的测试用例**：
- [x] wc
- [x] indexer
- [x] jobcount 
- [x] mtiming
- [x] rtiming
- [x] early_exit
- [x] nocrash
- [x] crash
