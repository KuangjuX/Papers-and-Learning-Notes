# 论文阅读与笔记

此仓库的正式学习笔记遵循 `skills/write-learning-notes/SKILL.md`。
整理 Zotero 论文、标注或阅读讨论时，先读
`skills/zotero-reading-workflow/SKILL.md`，使用 `zotero_reading` MCP。

先按材料类型归档：`Papers/` 保存论文与标注，`Projects/` 保存源码实践，
`Foundations/` 保存原理、课程、教材与参考。各类型下再按
`scripts/archive-layout.json` 中的编号主题归档，与 PapersPDF 的主题名称对应。
`Papers/index.md` 及其主题索引管理论文入口与阅读状态。
正文目录使用首字母大写的单词或专名的正式大小写；连字符连接多个单词。
新增笔记更新所属主题的 `index.md`。图片跟随笔记并使用相对路径。
原文、AI 解读和个人推论应标明来源；保留用户手工编辑和不相关内容。

由 `scripts/zotero-sync.mjs` 管理的 `zotero-reading.md` 是原始阅读材料。
正式解读写在同目录单独的 Markdown 文件中，读取现有内容后局部修改。
不要将“.local”里的同步基线、冲突草稿或认证信息提交到仓库。
