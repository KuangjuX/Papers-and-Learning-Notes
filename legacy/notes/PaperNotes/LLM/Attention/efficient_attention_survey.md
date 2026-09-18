# A Survey of Efficient Attention Methods: Hardware-efficient,  Sparse, Compact, and Linear Attention

## Sparse Attention

注意力 $P = Softmax(QK^T/\sqrt d)$ 表现出固有的稀疏性，因为 softmax 运算通常会产生许多接近于零的值。稀疏注意力利用这种稀疏性，通过两个步骤加速注意力。<u>首先</u>，它构建一个 $\textit{sparse mask}$ $M$，该掩码决定是否计算或者跳过注意力 $P$ 中的特定元素；<u>其次</u>，它仅对与 $M$ 对应的部分计算注意力。

$$
\begin{equation}
P = Softmax(M + QK^T/\sqrt d) 
\end{equation} 
$$

$$
\begin{equation}
O = PV
\end{equation}
$$

其中 $M$ 是一个 $N \times N$ 的矩阵，其元素为 $0$ 或 $-\infty$。$M_{i,j} = 0$ 表示注意力分数 $Q_iK_j^T$ 及其对应的输出 $P_{i,j}V_j$ 都应该被计算，而 $M_{i,j} = -\infty$ 表示这些计算应该被跳过。根据稀疏掩码的生成方式，稀疏注意力方法可以分为两类：

1. **基于模式的方法**（$\textit{Pattern-based method}$）依赖于从经验观察中得出的预定义稀疏模式，其中 $M$ 中 $-\infty$ 条目的位置遵循固定的几何形状（例如，滑动窗口形状）。

2. **动态稀疏注意力**（$\textit{Dynamic sparse attention}$）在运行时根据某些输入相关的函数自适应地计算稀疏掩码 $M$（例如，如果 $pool(Q_i)pool(K_j^T) < \tau$，则 $M_{i,j} = -\infty$，其中 $\tau$ 是阈值，$pool(\cdot)$ 可以是对 $\textit{token}$ 的平均池化）。


**Sparse Attention.** 稀疏注意力需要 FlashAttention 来提高效率，其稀疏模式需要与 FlashAttention 的块大小相匹配。实现稀疏 FlashAttention 的思路很直观：我们可以根据稀疏掩码 $M$ 跳过某些块矩阵乘法 $Q_iK_j^T$ 和 $\tilde{P}_{i,j}V_j$，从而加速注意力计算。我们将基于 FlashAttention 的稀疏注意力形式化如下。

**定义 1（稀疏 FlashAttention）**。基于掩码的稀疏 FlashAttention 的计算规则定义如下：

$$
\begin{equation}
M_{i,j} = -\infty \quad \text{if} \quad M[i \times b_q : (i+1) \times b_q][j \times b_{kv} : (j+1) \times b_{kv}] = -\infty
\end{equation}
$$

$$
\begin{equation}
Q_iK_j^T, \tilde{P}_{i,j}V_j \quad \text{are skipped if} \quad M_{i,j} = -\infty
\end{equation}
$$

其中 $b_q$ 和 $b_{kv}$ 分别表示 Query 和 Key/Value 的块大小。如果掩码 $M$ 中对应的块完全被标记为 $-\infty$，则该块的计算将被跳过，从而实现稀疏注意力的加速。

### 稀疏注意力的预备知识

**LLM Prefilling 和 Decoding**。如第 2.4.3 节所述，对于 LLM 的预填充（$\textit{prefilling}$）阶段，注意力计算速度是主要的延迟瓶颈。在这种情况下，稀疏注意力的目标是尽可能多地省略 $QK^T$ 和 $\tilde{P}V$ 之间的块矩阵乘法。对于 LLM 的解码（$\textit{decoding}$）阶段，主要瓶颈是 $\textit{KV Cache}$ 在全局内存和共享内存之间的读写开销。在这里，稀疏注意力主要旨在最小化 $\textit{KV Cache}$ 的大小，即减少 $K$ 和 $V$ 的 I/O。大多数为语言模型设计的稀疏注意力方法可以同时加速预填充和解码，因为增加 $M$ 中 $-\infty$ 条目的数量可以直接提高速度。

**减少 KV 存储**。尽管大多数稀疏注意力方法可以减少解码阶段的 $\textit{KV Cache}$ I/O，但并非所有方法都能减少其内存存储。一般来说，大多数基于模式的方法可以有效地节省 $\textit{KV}$ 存储，因为 $\textit{KV Cache}$ 在解码期间需要对相邻查询进行增量更新。如果稀疏掩码形状在不同查询之间变化很大，则会引入相当大的缓存更新开销，从而使减少 $\textit{KV Cache}$ 变得困难。

**扩散 Transformer（DiT）**。扩散 $\textit{Transformer}$ 模型（$\textit{Diffusion Transformer Models}$），通常用于图像和视频生成，经常采用视觉 $\textit{Transformer}$ 作为骨干网络。如第 2.4.1 节所述，注意力计算速度是主要瓶颈。

**免训练属性**。在表 4 中，免训练（$\textit{training-free}$）属性表示一种方法是否需要模型训练：如果方法涉及训练模型参数或辅助模型，则标记为非免训练；否则，被认为是免训练的。

表 4 根据稀疏掩码 $M$ 的类型（基于模式或动态）、是否需要训练模型以及对语言模型和扩散 $\textit{Transformer}$ 的适用性，总结了稀疏注意力方法。以下小节将详细介绍每种方法。

### 基于模式的稀疏注意力

基于模式的稀疏注意力方法使用预定义的几何模式来确定哪些 token 对之间应该计算注意力。这些方法通常是免训练的，可以直接应用于预训练模型。


**StreamingLLM.** 标准的密集注意力面临二次复杂度问题，并且在超出预训练长度时会失效，而简单的窗口注意力在初始 token 从 KV Cache 中被驱逐后会崩溃。StreamingLLM 识别了一个关键现象，称为**注意力汇聚**（$\textit{attention sink}$），即少数初始 token 始终会接收到大部分注意力分数，无论其语义内容如何。窗口注意力的失败正是由于驱逐了这些关键的注意力汇聚 token。

StreamingLLM 提出了一个简单而高效的框架，在保留注意力汇聚的 KV 状态的同时，维护最近 token 的滚动缓存。这种免训练方法能够在无限长度的序列上实现稳定的性能，同时将每个 token 的计算复杂度降低到 $O(L)$，其中 $L$ 是固定大小的 KV Cache。


**DiTFastAttn.** DiTFastAttn 是一种训练后加速方法，通过三个维度解决 DiT 模型中的计算冗余问题：

1. **空间维度**：采用窗口注意力和残差缓存来减少冗余计算。在特定时间步 $r$，同时计算完整注意力 $O_r = \text{Attention}(Q_r, K_r, V_r)$ 和局部窗口注意力 $W_r = \text{WindowAttention}(Q_r, K_r, V_r)$。计算两者之间的差异作为"残差" $R_r = O_r - W_r$。然后在接下来的几个步骤 $t$ 中，使用窗口注意力 $W_t = \text{WindowAttention}(Q_t, K_t, V_t)$ 和缓存的"残差" $R_r$ 来计算输出 $O_t = W_t + R_r$。

2. **时间维度**：由于相邻时间步的注意力输出高度相似，缓存具有相似注意力输出的步骤序列中第一步的输出，并在后续步骤中重用它。

3. **CFG 维度**：无分类器引导（$\textit{Classifier-Free Guidance}$）在每一步执行两次前向传递：一次有条件，一次无条件，其注意力输出通常高度相似。因此，将有条件传递的注意力输出重用于无条件传递，有效地将这些情况下的注意力计算减半。


**SampleAttn.** SampleAttn 为 LLM 预填充提出了一种免训练的自适应结构化稀疏注意力。SampleAttn 识别了两种稀疏模式：

1. **局部窗口模式**：捕获最近的上下文。
2. **列条纹模式**：表示关键的全局信息。

该方法通过为每个注意力头动态组合这两种结构化模式来近似完整注意力。为了捕获局部窗口模式，SampleAttn 关注固定百分比的相邻 token，允许窗口大小随序列长度缩放。为了在不计算整个注意力分数的情况下识别注意力图的关键列，SampleAttn 采用两阶段过程：首先采样一组查询 token 并计算与键 token 的部分注意力分数矩阵 $S_s$；然后基于 $S_s$ 选择最相关的键和值 token 来执行稀疏注意力。

SampleAttn 将预填充延迟降低了高达 2.42 倍，同时在基准测试中保持超过 99% 的基线准确性。


**MoA.** MoA（$\textit{Mixture-of-Attention}$）利用 LLM 中注意力头和输入长度之间注意力分布的固有异质性和弹性。在 StreamingLLM 的统一滑动窗口注意力方法的基础上，MoA 为每个注意力头和输入长度优化不同的窗口长度。

MoA 将其形式化为对弹性规则的离线搜索，其中每个规则定义窗口长度如何通过关系 $\alpha + \beta N$ 与输入长度 $N$ 线性缩放，其中 $\alpha$ 和 $\beta$ 分别控制基础注意力跨度及其增长率。使用基于梯度的分析方法和在预期输入长度上的平均密度约束下的多目标优化来识别这些超参数的最优值。

通过优化的窗口长度，MoA 相比 StreamingLLM 显著提高了 1.5-7.1 倍的检索准确性，并在保持最小性能下降的同时，相比 FlashAttention2 提高了 6.6-8.2 倍的解码吞吐量。


**DuoAttention.** DuoAttention 识别了 LLM 中的两种注意力头类型：

1. **检索头**（$\textit{Retrieval heads}$）：需要完整注意力来捕获全局相关上下文。
2. **流式头**（$\textit{Streaming heads}$）：主要关注最近和初始 token（注意力汇聚），允许部分注意力和减少的 KV Cache。

为了区分注意力头类型并应用适当的掩码，DuoAttention 为每个头引入了一个可学习的门控 $\alpha \in [0, 1]$，将完整注意力和流式掩码注意力输出组合为：

$$
\text{attn} = \alpha \cdot \text{full\_attn} + (1 - \alpha) \cdot \text{streaming\_attn}
$$

门控值通过最小化完整注意力模型和 DuoAttention 模型的最后隐藏状态之间的均方误差来优化，并对 $\alpha$ 施加额外的加权 L1 惩罚 $\sum |\alpha|$ 以促进稀疏性。在推理时，具有较低 $\alpha$ 值的头被视为流式头，根据指定的稀疏分位数选择。

DuoAttention 在长上下文设置中实现了高达 2.55 倍的预填充和 2.18 倍的解码加速，并将推理内存减少了 2.55 倍。


**Sparse VideoGen.** Sparse VideoGen 为视频扩散 Transformer 提出了一种免训练的稀疏注意力框架，旨在降低长视频序列上完整 3D 注意力的成本。给定输入 $Q, K, V$，Sparse VideoGen 旨在将头分类为**空间头**或**时间头**，分别关注空间局部 token 和时间局部 token。

相应的稀疏注意力掩码定义为 $M_{\text{spatial}}$ 和 $M_{\text{temporal}}$，其中：
- $M_{\text{spatial}}$ 由对角滑动窗口和第一帧汇聚组成
- $M_{\text{temporal}}$ 由多个倾斜条纹组成

分类通过轻量级在线分析算法实现。对于每个注意力头 $h_i$，随机采样一小部分 token（1%）来计算完整注意力输出 $O$ 和两个稀疏近似之间的 MSE。通过比较黄金输出和应用稀疏注意力掩码后的输出之间的 MSE，将最终掩码 $M_h$ 设置为 $M_h^{\text{spatial}}$ 或 $M_h^{\text{temporal}}$。

在掩码分配后，Sparse VideoGen 对时间头应用静态布局转换，在选定的稀疏模式下实现高效计算。Sparse VideoGen 在视频生成任务上实现了高达 2.3 倍的加速。


**Radial Attention.** Radial Attention 引入了一种具有 $O(N \log N)$ 复杂度的静态稀疏注意力掩码，增强了视频扩散 Transformer 的训练和推理速度。该方法受到"时空能量衰减"现象的启发，该现象表明当 token 之间的空间和时间距离增加时，注意力图中的注意力计算密度和注意力分数都会降低。

该方法将注意力图划分为指数扩展的时间带，其中计算密度从对角线每步减半。在每个帧到帧的注意力块内，维护一个指数递减宽度的对角窗口。此外，稀疏注意力图的最小单元设置为 $128 \times 128$ 块，以确保在现代硬件上高效执行。

Radial Attention 还保证了类似 LoRA 的轻量级微调用于视频扩散模型的上下文扩展，因为它有效地保留了重要 token 关系的计算。该方法在不进行调优的情况下，将领先视频扩散 Transformer（例如 Wan 2.1、HunyuanVideo）的默认长度视频生成加速高达 1.9 倍，同时为长达 4 倍的视频生成带来高达 4.4 倍的训练成本降低和 3.7 倍的推理加速。


**STA (Sliding Tile Attention).** Sliding Tile Attention 通过克服传统 2D 和 3D 滑动窗口注意力机制的计算低效问题来加速视频扩散 Transformer。尽管滑动窗口注意力通过局部性强制减少了 FLOPs，但其 GPU 效率受到包含掩码和未掩码条目的混合注意力块的阻碍，这破坏了 FlashAttention 所需的块状计算模式。

Sliding Tile Attention 通过将注意力操作从 token 级别转移到 tile 级别来解决这一限制，将 3D 输入划分为固定大小的时空 tile，并确保每个注意力块要么完全密集，要么完全空。这种设计消除了掩码开销，并实现了高效的 GPU 执行。

基于 FlashAttention3 和 ThunderKittens 实现，Sliding Tile Attention 在注意力内核执行中实现了高达 10.45 倍的加速，在端到端推理中实现了 2.98 倍的加速。Sliding Tile Attention 支持免训练和微调配置：
- **免训练设置**：使用小型提示集自动校准每层、每头的窗口大小，实现 58% 的稀疏性和 1.8 倍的端到端加速。
- **微调设置**：可以优化固定的稀疏掩码以进一步提高吞吐量；例如，91% 的稀疏性产生 3.5 倍的加速，VBench 分数的下降可以忽略不计。


**NeighborAttn (Neighborhood Attention).** Neighborhood Attention 引入了一种像素级滑动窗口注意力，将每个查询的注意力范围局部化到其直接的空间邻居。与 Swin Transformer 采用非重叠窗口注意力并依赖移位窗口来扩大感受野不同，Neighborhood Attention 保留了平移等变性，并在不需要手动移位的情况下自然扩展感受野。

这种设计实现了线性时间和空间复杂度，同时保留了局部性偏差，从而弥合了卷积网络和自注意力架构之间的差距。为了实际部署，Neighborhood Attention 通过其 NATTEN 库使用自定义 CUDA 内核实现，与 Swin 注意力相比实现了高达 40% 的加速和 25% 的内存减少。

基于这种机制，Neighborhood Attention 在分类、检测和分割任务中表现出强大的性能，在可比的参数和计算预算下优于 Swin 和 ConvNeXt。


**PAROAttn (Pattern-Aware Reorder Attention.** PAROAttention 提出了一种简单而有效的模式感知 token 重排序技术，将多样化和分散的注意力值转换为统一的硬件友好的块状模式。它观察到看似多样化的视觉注意力图由多条"对角线"组成，所有这些都表示沿 3D 空间中特定维度的"局部聚合"。

例如，对于形状为 $[N_{\text{frame}}, W, H]$ 的视频张量，沿 $W$ 轴的局部性在注意力图中产生间隔为 $H$ 的 token，在它们之间进行局部聚合会在注意力图中产生多条"对角线"。因此，将 token 顺序从 $[N_{\text{frame}}, W, H]$ 重新排列为 $[N_{\text{frame}}, H, W]$ 将这些多对角线转换为规则的块状结构。这反过来又使得简单的基于阈值的块求和方案能够推导出注意力模式。

受到视觉注意力模式在不同条件下泛化的经验证据的启发，它采用静态稀疏方案，其中注意力模式是离线确定的。PAROAttention 遵循硬件-软件协同优化的概念，将视觉特征提取的局部性（数值局部性）与硬件计算的局部性（内存和计算局部性）对齐。它设计了一套全面的高效 CUDA 实现，以最小化开销并最大化效率。

## Linear Attention

线性注意力通过分解 softmax 函数并利用矩阵乘法的组合性质，将复杂度从 $O(N^2)$ 降低到 $O(N)$。其公式为：

$$
\begin{equation}
O = \phi(Q)(\phi(K)^{\top}V), \quad O, Q, K, V \in \mathbb{R}^{N \times d}
\end{equation}
$$

其中 $\phi$ 是逐行应用于查询和键的核函数。对于非自回归任务，可以直接使用上述公式计算。然而，对于自回归任务，由于 token 之间的因果关系，注意力计算公式为：

$$
\begin{equation}
o_t = \phi(q_t) \sum_{i=1}^{t} (\phi(k_i)^{\top}v_i)
\end{equation}
$$

其中下标 $t$（或 $i$）表示时间步 $t$（或 $i$）。为了避免在推理期间对历史信息 $\sum_{i=1}^{t-1} k_i^{\top}v_i$ 进行昂贵的计算，维护一个隐藏状态 $H_t$ 来存储历史信息并递归更新。隐藏状态和输出计算如下：

$$
\begin{equation}
H_t = H_{t-1} + \phi(k_t)^{\top}v_t
\end{equation}
$$

$$
\begin{equation}
o_t = \phi(q_t)H_t
\end{equation}
$$

然而，将所有历史信息压缩到固定大小的隐藏状态中不可避免地会导致信息丢失。引入遗忘门 $G_f$ 和选择门 $G_s$ 来缓解这个问题，通过遗忘 $H_{t-1}$ 中的历史信息和选择 $k_t^{\top}v_t$ 中的当前信息。带门控的隐藏状态更新可以表示为：

$$
\begin{equation}
H_t = G_f^{(t)} \odot H_{t-1} + G_s^{(t)} \odot k_t^{\top}v_t
\end{equation}
$$

这里为简单起见省略了核函数 $\phi$；$G^{(t)}$ 表示时间 $t$ 的门控。如果 $G_f$ 和 $G_s$ 依赖于注意力计算输入，我们称它们为输入依赖的，否则称为输入独立的。

线性注意力方法可以根据其隐藏状态更新方法进行分类。前三类依赖于 $H_t$ 的直接计算：
1. **朴素线性注意力**：没有门控的线性注意力，即 $G_f^{(t)}$ 和 $G_s^{(t)}$ 都固定为 $1^{\top}1$
2. **带遗忘门的线性注意力**：只有 $G_s^{(t)}$ 固定为 $1^{\top}1$，而遗忘门 $G_f^{(t)}$ 是预定义的或输入依赖的
3. **同时带遗忘门和选择门的线性注意力**：$G_f^{(t)}$ 和 $G_s^{(t)}$ 都是预定义的或输入依赖的，而不是固定为 $1^{\top}1$

在这些模型中，每一步的隐藏状态 $H_t$ 直接从前一状态和当前输入计算得出。相比之下，第四类方法采用基于优化的方法：
4. **测试时训练（TTT）**：TTT 重新概念化隐藏状态 $H_t$，不是作为计算值，而是作为一组可学习参数，称为快速权重。关键区别在于这些快速权重在训练和推理期间都通过梯度下降更新。这种持续学习过程使 TTT 与传统架构区分开来，在传统架构中，模型参数在推理期间是冻结的。




