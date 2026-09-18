# KuangjuX’s Notes

技术学习与实践的长期笔记库：记录原理、论文、源码、课程和实验，让相关知识在同一个主题下逐步积累。

[在线阅读](https://kuangjux.github.io/Paper-reading/) · [论文索引](reading/index.md) · [LLM 学习路线](reading/learning-paths/llm.md)

## 按主题阅读

| 主题 | 内容 |
| --- | --- |
| [大模型与深度学习](notes/llm/index.md) | 从神经网络、Transformer 与注意力机制开始，连接训练、推理和具体实现。 |
| [GPU 与高性能计算](notes/gpu/index.md) | 从线程、内存和数据布局理解 GPU，再进入算子实现、流水线与性能优化。 |
| [编译器](notes/compiler/index.md) | 结合编译原理、AI 编译器论文与项目实践，理解程序表示和优化。 |
| [系统](notes/systems/index.md) | 操作系统、网络与虚拟化的机制、实现和设计取舍。 |
| [计算机体系结构](notes/architecture/index.md) | 从指令级并行、缓存与地址转换，到 RISC-V 指令集及系统接口。 |
| [编程语言](notes/programming/index.md) | 语言机制、类型系统与日常程序设计笔记。 |
| [数学基础](notes/math/index.md) | 汇集理解算法与系统实现时需要的数学背景。 |
| [Agent 系统](notes/agents/index.md) | 记录 Agent 的技能表示、运行时和系统实现。 |
| [工具与环境](notes/tools/index.md) | 开发工具、工具链和环境配置的使用记录。 |
| [课程笔记](courses/index.md) | 按课程保留章节、实验和作业的学习顺序。 |
| [项目实践](projects/index.md) | 围绕具体项目保留设计、源码阅读与调试上下文。 |

## 如何组织笔记

- `notes/` 按知识主题组织。同一主题下可以同时包含原理、论文、源码和实验笔记。
- `courses/` 保留课程章节与实验上下文，`projects/` 保留项目设计与实践上下文。
- `reading/` 维护论文清单、阅读状态和学习路线；正文只保存一份，通过链接出现在多个入口。
- 图片、PDF 和其他附件跟随相关笔记，优先使用相对链接。
- 新增笔记时更新所属主题的 `index.md`；网站侧栏会自动收录文件。

## 本地阅读与维护

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

发布前运行 `pnpm docs:build`、`pnpm docs:check-links`、`pnpm docs:check-anchors`、`pnpm docs:check-math` 和 `pnpm docs:check-diagrams`。

仓库由 Paper-reading 与 Notes 合并而来，保留两边的 Git 历史。详见[迁移记录](migration/index.md)与[文件路径对照](migration/path-map.csv)。导入内容的原许可证保存在 [Notes-LICENSE](licenses/Notes-LICENSE.txt)。
