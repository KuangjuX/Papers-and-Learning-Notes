# KuangjuX’s Notes

技术学习与实践的长期笔记库。

[在线阅读](https://notes.kuangjux.top/) · [全部笔记目录](CATALOG.md) · [LLM 学习路线](Foundations/05_Model_Architecture_and_Reasoning/Learning-Paths/llm.md)

## 归档入口

先区分材料类型，再在每一类下面按主题归档。

| 目录 | 保存内容 |
| --- | --- |
| [Papers/ · 论文](Papers/index.md) | 论文清单、阅读状态、原始标注与正式论文笔记。 |
| [Projects/ · 项目](Projects/index.md) | 具体代码仓库的设计、源码阅读、实验与调试记录。 |
| [Foundations/ · 基础](Foundations/index.md) | 原理、算法、数学推导、教程、课程、教材与工具参考。 |

正文目录使用首字母大写的单词，并保留 SGLang、WeLM、CUDA、CUTLASS 等专名的大小写；文件名保留原写法。

三类目录采用与 `~/Desktop/PapersPDF` 一致的主题名称：

```text
Papers/ | Projects/ | Foundations/
├── 00_Inbox
├── 01_Attention
├── 02_Inference_and_KV_Cache
├── 03_Distributed_Training_and_MoE
├── 04_GPU_Compiler_and_Performance
├── 05_Model_Architecture_and_Reasoning
├── 06_Computing_Foundations
└── 07_Books_and_Technical_References
```

例如，FlashAttention-4 的论文标注放在 `Papers/01_Attention/`，SGLang 的源码分析放在 `Projects/02_Inference_and_KV_Cache/`，Attention 教程放在 `Foundations/01_Attention/`。课程在 `Foundations/07_Books_and_Technical_References/Courses/` 中保留章节与实验顺序。

## 维护约定

- 同一篇正文只保存一份；论文与代码实践分别成文时，用相对链接关联。
- 图片、PDF 和其他附件跟随正文，保留相对链接。
- 新增笔记时更新所属主题的 `index.md` 和相应归档入口；网站侧栏自动收录文件。
- 论文清单与阅读状态在 `Papers/index.md` 及其各主题索引中维护，不因存在标注就判为已读。
- 暂时无法确定主题的内容进入对应材料类型的 `00_Inbox/`，确认后归档。
- 旧网站地址保存在 `.vitepress/redirects.ts`；目录迁移规则在 `scripts/archive-layout.json`。不复制或调整 `PapersPDF` 中的 PDF。

## 本地阅读与维护

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

发布前运行 `pnpm docs:build`、`pnpm docs:check-links`、`pnpm docs:check-anchors`、`pnpm docs:check-math`、`pnpm docs:check-diagrams`、`pnpm docs:check-translations` 和 `pnpm docs:check-translation-rendering`。

Zotero 与 Codex 的侧栏阅读、标注导入及增量笔记工作流见 [Zotero 阅读配置](scripts/ZOTERO.md)。

原 Notes 内容的许可证见 [Notes-LICENSE](licenses/Notes-LICENSE.txt)。
