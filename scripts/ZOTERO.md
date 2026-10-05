# Zotero 与 Codex 阅读

本机使用 Zotero 9.0.6、Codex CLI 0.160.0 和 llm-for-zotero v3.9.10。
插件官方安装包在 `~/Downloads/llm-for-zotero-3.9.10.xpi`，源码在
`~/codes/llm-for-zotero`，固定提交 `9a73e3f21ff0a039cae21ce40b9ab8dbba4a1ad0`。

## 在 Zotero 内阅读

插件已经安装并启用。当前已启用 Codex App Server，CLI 路径为
`/Users/kuangjux/.local/bin/codex`，模型为模型列表实际返回的 `gpt-6.1-sol`。
“设置 → llm-for-zotero → Agent”的模型连接与 Zotero MCP 检查均已通过。
使用现有 Codex 登录，不需要另建 OpenAI API key。
保留了原生 `Ask for approval` 权限模式，文件或文库修改仍可能需要逐次确认。

打开 PDF，点击右侧 LLM Assistant 图标，在对话系统中选择 Codex。
选中文字加入对话后，可以要求“翻译这段，保留英文术语和公式”，或“结合上下文解释这段”。
保存时要求“将这段解释写入原文标注评论，标明 AI 解读，并保留我的评论”。
图表和公式可以通过截图加入上下文。

其他模型在“AI Providers”中配置。插件支持 OpenAI 兼容接口、Anthropic、Gemini 和本地模型。
需要你自己的服务地址、模型名称和凭据，不能用 Codex 登录替代其他厂商的凭据。
可使用同一侧栏切换模型；不同运行时的聊天历史不会自动合并。

笔记目录已设置为 `/Users/kuangjux/Paper-reading`，默认子目录为 `tmp/zotero`，
附件子目录为 `tmp/zotero/assets`，设置页的写入权限检查已通过。
正式笔记由仓库工作流按主题整理。不要用整文件写入工具覆盖已有正式笔记。

## 外部 Codex

本仓库提供无需额外依赖的 stdio MCP 桥接：

```sh
codex mcp add zotero_reading -- /opt/homebrew/bin/node /Users/kuangjux/Paper-reading/scripts/zotero-mcp.mjs
```

本机已注册上述 MCP。CLI 和读取同一 Codex 配置的桌面端在新会话中加载它。使用时保持 Zotero 运行。
桥接从 Zotero 本机 profile 中读取插件生成的 bearer token，token 不写入仓库或 Codex 配置。
首次安装插件后重启一次 Zotero，让 token 保存到 `prefs.js`。
多个 profile 时可以通过 `ZOTERO_PROFILE` 指定目录。

桥接暴露论文搜索、读取、标注、批注更新、笔记写入与恢复工具。
`zotero_reading_export` 使用固定只读代码获取完整标注；不暴露上游的任意脚本、命令执行、文件写入或删除工具。
Zotero 内置的侧栏运行时仍使用上游自己的工具集与权限设置。

## 导入与整理

```sh
node scripts/zotero-sync.mjs --search 'FlashAttention-4'
node scripts/zotero-sync.mjs --item <搜索结果中的父条目ID> --topic llm --slug flashattention-4 --dry-run
node scripts/zotero-sync.mjs --item <搜索结果中的父条目ID> --topic llm --slug flashattention-4
```

也可通过 `--input <导出的JSON文件>` 离线导入。输入格式为 `zotero_reading_export` 的结果，
包含 `schemaVersion: 1`、`paper`、`attachments[].annotations` 和 `notes`。

正文保存到 `notes/<topic>/<slug>/zotero-reading.md`，主题和阅读索引追加入口。
每条标注保留原文、评论、附件 key、标注 key、页码和 `zotero://open-pdf/` 链接。
输入目前支持个人文库；群组文库需要正确的 group ID，不会用本机 library ID 猜测链接。
区域/图片标注保留位置和评论，原图仍从 Zotero 查看；本脚本不生成或导出截图。

再次运行相同命令会追加新增标注，并更新没有人工改过的块。
“我的理解”及块外文字保留。块内人工修改与 Zotero 更新冲突时，原文保留，
待合并内容放到 `.local/zotero-sync/<paper-key>.incoming.md`，退出码为 2。
手工移除的同步块不会自动恢复；源标注已删除时报告 `removed` 并保留历史材料。
不要删除 `.local/zotero-sync` 中的基线，否则脚本会拒绝更新已有正文。

让 Codex“按 zotero-reading-workflow，将这篇论文与标注整理成正式笔记”。
它会读取本仓库的写作规则，核对完整论文，在同目录单独创建或局部更新正式解读，
维护主题索引、论文状态和原文定位。源材料默认是“阅读中”，不会自动判定读完。

## 验证

2026-10-05 的本机联调：论文搜索、PDF 首页读取、精确高亮与中文评论写回、
完整批注回读、Markdown 导入和索引更新均通过。示例使用文库中现有的
FlashAttention-4（父条目 ID 34，PDF ID 33），只新增了一条明确标为 AI 联调示例的首页译注，
没有修改原有论文内容。导入结果见
[FlashAttention-4 阅读材料](../notes/llm/flashattention-4/zotero-reading.md)。
示例不是全文笔记，也没有将论文标记为已读。

真实批注回读发现上游只读接口会将 `getAnnotations()` 返回值脱离 Zotero 对象，
导致不可枚举的 getter 字段丢失；桥接已根据返回的 `_id` 通过只读 `Items.get()` 重新获取对象，
并添加回归测试。导出原文与评论不截断。

自建测试覆盖长标注、定位链接、重复导入、人工编辑、冲突草稿、源删除和路径安全。
上游插件源码依赖安装遇到网络超时，没有在本机重跑上游测试；以上运行时验证使用官方 XPI。
关闭设置后，桌面控制工具持续读取主窗口超时，因此还未完成“鼠标划词 → 侧栏提问”的交互验收；
本地 MCP 在此期间正常工作。其他厂商模型未配置凭据，未做连接验证。

```sh
node --test scripts/zotero-sync.test.mjs
npm run docs:build
npm run docs:check-links
npm run docs:check-anchors
npm run docs:check-math
npm run docs:check-diagrams
```

原始标注评论可能混有 AI 解读与个人观点；生成正式笔记时必须核对来源。
导出的 Markdown 可能进入公开网站，请只导入希望保存在该仓库的阅读材料。
