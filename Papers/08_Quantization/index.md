# 量化 · 论文

[论文总览](../index.md) · [基础笔记](../../Foundations/08_Quantization/index.md)

共 10 个清单条目；已读 0，待读 10。

## Quantization & Compression

| Status | Paper | Venue | Why It Matters | Links |
|:------:|-------|-------|----------------|-------|
| ⬜ | **LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale** | [NeurIPS'22](https://proceedings.neurips.cc/paper_files/paper/2022/file/c3ba4962c05c49636d4c6206a97e9c8a-Paper-Conference.pdf) | 混合精度分解 activation outlier，是理解 LLM INT8 的起点 | [Paper](https://arxiv.org/abs/2208.07339) |
| ⬜ | **GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers** | [ICLR'23](https://www.research-collection.ethz.ch/items/00736213-37b2-4e99-b015-141349b71413) | 基于近似二阶信息的 one-shot weight-only PTQ | [Paper](https://arxiv.org/abs/2210.17323) |
| ⬜ | **SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models** | [ICML'23](https://proceedings.mlr.press/v202/xiao23c.html) | 用等价缩放把 activation 量化难度迁移到 weight，形成 W8A8 路线 | [Paper](https://arxiv.org/abs/2211.10438) |
| ⬜ | **AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration** | [MLSys'24](https://proceedings.mlsys.org/paper_files/paper/2024/hash/42a452cbafa9dd64e9ba4aa95cc1ef21-Abstract-Conference.html) | 用 activation 识别显著通道并保护关键权重，形成主流 W4A16 路线 | [Paper](https://arxiv.org/abs/2306.00978) |
| ⬜ | **SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/1787533e171dcc8549cc2eb5a4840eec-Abstract-Conference.html) | 将少量 outlier 与低比特权重分离，理解稀疏异常值处理 | [Paper](https://arxiv.org/abs/2306.03078) |
| ⬜ | **OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models** | [ICLR'24](https://proceedings.iclr.cc/paper_files/paper/2024/hash/c6483c8a68083af3383f91ee0dc6db95-Abstract-Conference.html) | 通过可学习的 clipping 与等价变换改善低比特 PTQ | [Paper](https://arxiv.org/abs/2308.13137) |
| ⬜ | **AQLM: Extreme Compression of Large Language Models via Additive Quantization** | [ICML'24](https://proceedings.mlr.press/v235/egiazarian24a.html) | additive codebook 与极低 bit/weight，连接压缩算法和解码 kernel | [Paper](https://arxiv.org/abs/2401.06118) |
| ⬜ | **KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache** | [ICML'24](https://github.com/jy-yuan/KIVI) | 区分 K/V 的通道与 token 统计特性，理解 KV cache 低比特化 | [Paper](https://arxiv.org/abs/2402.02750) |
| ⬜ | **QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs** | [NeurIPS'24](https://proceedings.neurips.cc/paper_files/paper/2024/hash/b5b939436789f76f08b9d0da5e81af7c-Abstract-Conference.html) | 用 Hadamard rotation 消除 outlier，适合从算法追到融合 kernel | [Paper](https://arxiv.org/abs/2404.00456) |
| ⬜ | **The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits** | [arXiv'24](https://arxiv.org/abs/2402.17764) | BitNet b1.58 与三值权重，理解量化感知训练的架构路线 | [Paper](https://arxiv.org/abs/2402.17764) |
