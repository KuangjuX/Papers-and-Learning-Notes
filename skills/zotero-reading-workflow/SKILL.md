---
name: zotero-reading-workflow
description: 在整理 Zotero 论文、完整标注或阅读讨论到 KuangjuX 的 Papers-and-Learning-Notes 仓库时使用；维护来源、主题索引与增量更新，不用于一般文库管理。
---

# Zotero 阅读工作流

本机仓库：`/Users/kuangjux/Paper-reading`。Zotero 管理 PDF、位置和原始标注；正式笔记进入仓库。

阅读时通过 `library_search` 找论文，通过 `paper_read` 读取原文，按选区翻译或解释，保留术语、公式定义和页码。图片、公式布局不清楚时查看原图，不凭文本提取猜测。
保存 AI 批注时在评论中写明“AI 翻译”或“AI 解读”，个人评论独立保留；通过 `annotate_pdf` 精确匹配原文。已有批注先读取，不覆盖个人评论。

整理笔记前读取仓库的 `skills/write-learning-notes/SKILL.md`，以及目标主题的 `index.md` 和相邻笔记。正文按现有主题放入 `notes/<topic>/<paper>/`；不因为有标注就将论文标记为已读。

外部 Codex 使用 `zotero_reading_export` 获取完整文本、条目 key、附件 key、标注 key 和页码。上游 `library_read` 会截断长标注，不能将它当完整导出。侧栏内优先通过 shell 运行仓库导入脚本。若使用只读 `zotero_script`，`pdf.getAnnotations()` 返回的是脱离原对象的快照；需以 `snapshot.id ?? snapshot._id` 调用只读 `Zotero.Items.get()` 再访问标注字段，不能直接假定快照包含 getter。

```sh
node /Users/kuangjux/Paper-reading/scripts/zotero-sync.mjs --search '论文标题'
node /Users/kuangjux/Paper-reading/scripts/zotero-sync.mjs --item 123 --topic llm --slug paper-name --dry-run
node /Users/kuangjux/Paper-reading/scripts/zotero-sync.mjs --item 123 --topic llm --slug paper-name
```

导入脚本生成 `zotero-reading.md`，包含原文与评论、公开来源和 Zotero 定位链接，并更新主题与阅读索引。再次导入复用同一 topic/slug；新增标注追加，未手改的块更新。人工编辑过的块发生冲突时保留原文，新版本写入 `.local/zotero-sync/<key>.incoming.md`；退出码 2 表示需要局部合并。Zotero 已删除的标注不会自动删去历史材料，脚本会报告 removed。

正式笔记写在同目录的其他 Markdown 文件。先核对完整论文、已有笔记和阅读材料，再提炼 Background、Insights、Design、Evaluation；区分作者事实、AI 解读、个人推论和待验证问题。重要图片用原图并注明图号；附件与正文使用相对链接。

保留已有人工内容，局部编辑并检查 diff。导入的评论可能包含 AI 输出，不能默认当作作者结论。补充正式笔记链接并按实际阅读程度更新 `reading/index.md`。
运行仓库的 `docs:build`、`docs:check-links`、`docs:check-anchors`、`docs:check-math`、`docs:check-diagrams`；不自动提交或推送。
