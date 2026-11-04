---
name: zotero-reading-workflow
description: 在整理 Zotero 论文、完整标注或阅读讨论到 KuangjuX 的 Papers-and-Learning-Notes 仓库时使用；维护来源、主题索引与增量更新，不用于一般文库管理。
---

# Zotero 阅读工作流

本机仓库：`/Users/kuangjux/Paper-reading`。Zotero 管理 PDF、高亮、逐句翻译与随手批注；仓库保存按问题和机制组织的正式笔记，不默认展示完整标注导出。

阅读时通过 `library_search` 找论文，通过 `paper_read` 读取原文，按选区翻译或解释，保留术语、公式定义和页码。图片、公式布局不清楚时查看原图，不凭文本提取猜测。
保存 AI 批注时在评论中写明“AI 翻译”或“AI 解读”，个人评论独立保留；通过 `annotate_pdf` 精确匹配原文。已有批注先读取，不覆盖个人评论。

整理笔记前读取仓库的 `skills/write-learning-notes/SKILL.md`，以及目标主题的 `index.md` 和相邻笔记。正文按现有编号主题放入 `Papers/<topic>/<paper>/`；不因为有标注就将论文标记为已读。

正式笔记的新增与更新先执行根目录 `AGENTS.md` 的 Issue 与 PR 工作流：创建或复用同一论文的 Issue，再在工作分支编辑并提交关联 PR。只读论文、讨论或更新私有缓存不等于修改正式笔记，不单独触发发布流程。

同一篇论文只有一篇正式主文章。每次保存先按标题、别名、arXiv/DOI 与 Zotero key 查找已有入口，复用其目录和 Markdown 文件；不同 talk、会话、附件版本或讨论主题不新建另一篇。将新的解释、推导、源码对应和实验分析合入主文章的相关章节，保留独有人工内容、证据与代码版本，去除重复。已有多份笔记时合并内容，并更新主题索引、交叉链接及内部重定向；仅用户明确要求独立文档时另存。

需要完整标注时，外部 Codex 使用 `zotero_reading_export` 获取完整文本、条目 key、附件 key、标注 key 和页码。上游 `library_read` 会截断长标注，不能将它当完整导出。只有需要本地材料或增量比较时才运行缓存脚本，不把导出当成每次阅读的必需步骤。若使用只读 `zotero_script`，`pdf.getAnnotations()` 返回的是脱离原对象的快照；需以 `snapshot.id ?? snapshot._id` 调用只读 `Zotero.Items.get()` 再访问标注字段，不能直接假定快照包含 getter。

```sh
node /Users/kuangjux/Paper-reading/scripts/zotero-sync.mjs --search '论文标题'
node /Users/kuangjux/Paper-reading/scripts/zotero-sync.mjs --item 123 --topic 01_Attention --slug paper-name --dry-run
node /Users/kuangjux/Paper-reading/scripts/zotero-sync.mjs --item 123 --topic 01_Attention --slug paper-name
```

脚本只写入 `.local/zotero-sync/`：`<key>.md` 保存可增量合并的原文与评论，`<key>.export.json` 保存本次完整导出，`<key>.json` 保存同步基线和正式笔记目录定位。缓存不提交、不进入网站、侧栏或索引。脚本不创建公开论文笔记，不修改阅读状态。永远不要在总览或正式笔记中追加“Zotero 阅读进度”、导入/迁移清单、下载统计、来源台账或旧分类对照，也不要另建这类汇总页。

再次缓存复用同一 topic/slug；新增标注追加，未手改的块更新。人工编辑过的块发生冲突时保留原文，新版本写入 `.local/zotero-sync/<key>.incoming.md`；退出码 2 表示需要局部合并。Zotero 已删除的标注不会自动删去历史材料，脚本会报告 removed。已有公开导出会先复制到缓存并保留手改内容与基线；核对其中独有内容后，再移除旧公开文件、修正入口和旧链接重定向。

正式笔记写在 `Papers/<topic>/<paper>/` 的 Markdown 文件中。先核对论文、已有笔记和相关阅读材料，再解释问题、核心洞察、设计和实验依据；区分作者事实、AI 解读、个人推论和证据不足的部分。不要求读完整篇才写笔记，可以先写清已理解的问题，随阅读局部补充；不要为未读部分制造结论或空模板。每次讨论更新对应段落，不按标注顺序追加聊天记录或逐句翻译。重要图片用原图并注明图号；附件与正文使用相对链接。来源在相关段落附章节、页码或 Zotero 定位链接，不链接本地缓存。

保留已有人工内容，局部编辑并检查 diff。导入的评论可能包含 AI 输出，不能默认当作作者结论。补充正式笔记链接，并在所属主题的论文条目中按实际阅读程度更新状态。
运行仓库的 `docs:build`、`docs:check-links`、`docs:check-anchors`、`docs:check-math`、`docs:check-diagrams`；按 `AGENTS.md` 通过分支与 PR 交付，不直接推送默认分支。未读完或阅读状态不确定的论文用 `Refs` 关联 Issue，PR 和提交信息不得使用自动关闭语句；合并后删除工作分支，Issue 保持打开。只有阅读完成且相应内容已合并时才关闭论文 Issue。

目录归档后，已有的 `--topic llm --slug flashattention-4` 命令仍能定位新地址；私有同步基线中的旧路径会在下一次成功同步时更新。原始标注与基线哈希保留，不会重新判定已读。新论文请使用 `Papers/` 下的编号主题名。
