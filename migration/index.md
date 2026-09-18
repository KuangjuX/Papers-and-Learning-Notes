# Notes 合并记录

迁移日期：2026-09-18。

## 来源与历史

- 来源仓库：[KuangjuX/Notes](https://github.com/KuangjuX/Notes)。
- 来源提交：`ea16210bd60e6ece85bf51a48e1ffd25e1b4dbe3`，包含 123 个历史提交。
- 原样导入提交：`9d1f1e387f7550845c1242ea6926f68030f19845`，导入前缀为 `legacy/notes/`，未压缩历史。
- 原仓库 262 个文件中，240 个内容文件归入新目录；20 个 `.DS_Store` 和 2 个 Windows 下载标记只保留在原样导入提交中。
- 95 份 Markdown（含原 README）、2 份 PDF，以及图片、Excalidraw 源文件与许可证均已保留。
- [逐文件路径对照](path-map.csv)记录导入文件及当前仓库原有文件的移动位置。
- [旧 Notes 索引](notes-original-index.md)保留原有文字，并修复指向已迁入文件的链接。
- [原 MIT 许可证](../licenses/Notes-LICENSE.txt)保留原版权声明；它对应旧 Notes 导入内容。

可以通过 `git show 9d1f1e3:legacy/notes/原路径` 读取迁移前的原始文件。迁移后的正文仅做链接和渲染兼容性修复，不据此更新技术结论。

## 内容组织

正文以知识主题为主；课程、项目分别保留学习顺序和工程上下文。论文清单迁入 [reading/index.md](../reading/index.md)，LLM 学习路线迁入 [reading/learning-paths/llm.md](../reading/learning-paths/llm.md)。

旧 Notes 的 `Math/Layout` 实际是 CuTe Layout 背景，因此放在 GPU 主题下。原有 LLM × Kernel、Agent 和虚拟化笔记分别进入 GPU、Agents 和 Systems。

## 网站与外部入口

网站名称调整为 KuangjuX’s Notes，保留仓库名称和 `/Paper-reading/` 发布路径。导航覆盖所有主题、课程、项目和阅读索引。

个人主页通知仍使用 `paper-reading-updated` 事件，触发文件改为 `reading/index.md`。已检查外部 `KuangjuX.github.io` 仓库的 `scripts/sync_papers.py`，它仍读取旧 README 并按旧表格列数提取链接。[配套补丁](homepage-sync.patch.txt)将读取路径改为 `reading/index.md`，按新位置解析相对链接，并从最后一列提取原文与笔记链接。

补丁已用当前 275 条论文记录验证，并检查生成的 JavaScript 语法。在个人主页仓库根目录运行 `git apply /本笔记库路径/migration/homepage-sync.patch.txt` 即可应用。此补丁尚未提交到个人主页远端，应与本仓库迁移同步发布。

## GitHub Issues 盘点

公开 API 限流后，通过 GitHub 网页完成了开放与关闭 Issues 盘点：共 5 个，正文均为空、评论均为 0，没有遗漏的 Issues 笔记。任务标题、状态与原链接保存在 [Issues 记录](notes-issues.md)。Git 历史保留代码与文件提交，GitHub 的 Issues 编号和服务元数据仍保留在旧仓库。

## 验证与兼容性修复

迁移时修复旧索引路径、反写的链接、HTML 图片的相对路径、Rust 泛型标题与公式分隔符空格，并统一代码块语言别名。现有 MSA 实现对照笔记的源码链接改为实际源码仓库的固定提交链接。

原 Paper-reading 中移动过的页面在站点构建后生成旧地址跳转页；移动过的图片保留旧发布地址副本，正文只维护新位置。
