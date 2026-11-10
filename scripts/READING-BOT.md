# 本机 Codex 论文阅读 bot

在阅读 Issue 的新评论中另起一行写 `@你的-app-slug 问题`，也可以先引用上一条回复再提问。本机服务读取 Issue 正文、讨论和已有笔记，调用 Codex，再以自建 GitHub App 的身份回复。一个 Issue 对应一个独立 Codex 会话，后续提问继续该会话。

默认支持论文问答、机制推导、引文核查和源码只读调查，使用本机工作区当前版本。启用笔记整理模式后，明确发送 `/note` 可将当前 Issue 的讨论整合到唯一主笔记，检查后以 bot 身份创建 PR。PR 留待审阅，不自动合并或关闭阅读 Issue。

## 创建与启动

需要 Node.js 22 或更新版本、已登录的 GitHub CLI、已登录的 Codex CLI，以及本机可用的阅读仓库。Bot 使用本机 Codex 的模型与登录配置；`zotero_reading` 需要在该环境可用，桌面临时连接不会自动变成后台连接。

在仓库根目录运行：

```sh
node scripts/reading-bot/cli.mjs setup
```

打开终端给出的本地链接。向导使用 GitHub 官方 App manifest 注册流程：

1. 在你的个人 GitHub 账号下创建私有 App，名称可在 GitHub 页面修改。
2. 点击安装，选择 **Only select repositories**，只勾选阅读仓库。
3. 返回本地页面，看到“安装已验证”。没有自动返回时，点击向导的“检查安装状态”。

App 权限是 `Issues: write` 和 `Contents: read`；关闭 webhook，由本机轮询评论，不需要公网地址。私钥直接写入本机，不需要粘贴到聊天或配置仓库 secret。向导默认使用 `127.0.0.1:8765`，可通过 `--port 8766` 改端口；未完成注册时 55 分钟后退出。中途停止后可以再次运行 `setup`，已保存的 App 注册会复用。

完成安装后检查并启动：

```sh
node scripts/reading-bot/cli.mjs doctor
node scripts/reading-bot/cli.mjs smoke
node scripts/reading-bot/cli.mjs install-service
```

`doctor` 验证 GitHub App、仓库身份和 Codex 登录，报告 Zotero MCP 是否已配置。`smoke` 实际调用两轮 Codex，检查创建与续接会话，会使用当前 Codex 额度，但不发 GitHub 评论。`install-service` 安装 macOS 用户级 LaunchAgent，登录后自动运行。

需要前台查看时使用 `start`，不要同时运行后台与前台两个实例。`start --once` 执行一次轮询并最多处理一个任务。

## 启用主笔记整理与 PR

默认 App 只有问答所需权限。要让它创建工作分支和 PR：

1. 在 GitHub App 的 **Permissions & events** 中，将 **Contents** 改为 **Read and write**，并将 **Pull requests** 设为 **Read and write**；保留 Issues 写权限。
2. 在该 App 的安装设置中接受新的权限，安装范围仍只选择阅读仓库。
3. 在终端执行以下命令，验证已实际授予的权限并重新加载后台服务：

```sh
node scripts/reading-bot/cli.mjs enable-notes
node scripts/reading-bot/cli.mjs uninstall-service
node scripts/reading-bot/cli.mjs install-service
```

重启前先用 `status` 确认没有正在执行的任务。`enable-notes` 不会替你扩大 GitHub 权限，权限尚未生效时会给出设置链接。需要恢复只读模式时运行 `disable-notes` 并重启服务；GitHub 权限可在安装设置中另行撤回。

整理模式从最新默认分支创建 `codex/reading-issue-<issue>-<comment>` 分支和独立工作区。它保存触发评论之前的完整讨论快照，读取仓库两份笔记技能，核对原文，查找已有主笔记，再按机制局部整合；不会使用只读问答会话继续编辑，也不会把阅读状态自动改为已读。

发布程序检查变更范围，运行仓库的链接、导航、翻译渲染、构建、阅读清单、锚点、导入完整性、数学和 Mermaid 检查，全部通过后才提交并创建 PR。发布范围是 `Papers/`、`Projects/`、`Foundations/` 下的 Markdown、常用图片，以及必要的根索引；脚本、配置、工作流、技能、`AGENTS.md`、符号链接和可执行文件不发布。单次最多 60 个文件，单文件 5 MiB，总计 20 MiB。

依赖通过 `pnpm install --offline --frozen-lockfile --ignore-scripts` 从本机缓存安装。缓存缺失时，在主工作区正常安装仓库依赖后再重试。检查失败会保留独立工作区及日志，并在 Issue 说明失败环节；不会把未检查的改动发布成 PR。临时网络错误从持久阶段继续，已生成的提交与 PR 不重复创建。

同一 Issue 已有 bot 创建且未关闭的整理 PR 时，新 `/note` 返回该 PR 的入口，本次不叠加修改。审阅合并或关闭后，再发 `/note` 从最新默认分支开始。已关闭的 Issue 不进行新一轮整理，应按仓库约定另建对应主题 Issue。PR 使用 `Refs #编号` 关联，提交及 PR 元数据由程序生成，不采用模型输出中的自动关闭指令。

每小时检查一次已交付 PR：确认合并、远端分支未被追加提交且本地工作区没有新改动后，才清理对应远端与本地分支及工作区。手工追加的内容和关闭但未合并的 PR 工作区会保留，供人工处理。

## 在 Issue 中使用

以下 `your-paper-reader` 替换为向导最后显示的 App slug：

```text
@your-paper-reader 请结合第 3 节解释这个设计为什么需要两阶段调度，并指出对应原文。
```

```text
@your-paper-reader /ask 我理解这里是在用显存换吞吐，这个判断是否准确？
```

```text
@your-paper-reader /note 请把上面关于调度机制的讨论整合到已有主笔记，保留尚未解决的问题，补齐引用后创建 PR。
```

```text
@your-paper-reader /reset
```

`/ask` 可省略；写入必须显式使用 `/note`，普通问答中的“整理笔记”不会自动提升权限。`/reset` 仅清除当前 Issue 的只读 Codex 会话映射，不影响已创建的整理 PR；下一次会重新读取 Issue 讨论，不会删除 GitHub 评论。也接受 `@your-paper-reader[bot]`。服务通过评论文本识别提及，不依赖 GitHub 的通知或自动补全。

- 只有配置中 GitHub 数字用户 ID 对应的本人可以触发，其他用户与 bot 的评论不会执行。
- 只处理**首次启动服务之后新创建**的评论，提及需位于非引用、非代码行的开头；支持先引用上一条回复，再另起一行 @ 提问。引用、围栏代码块、缩进代码和同一行正文中间的 @ 不触发；每条评论只执行第一个有效提及。
- 不处理 PR 评论，不回溯执行历史问题。已处理评论的编辑不会重跑；若排队后修改了原评论，该任务会跳过，请重新发一条评论。
- Bot 先发“已收到”，完成后更新同一条回复；执行失败会给出检查本机日志的提示。
- Issue 提供论文链接、Zotero key 或主笔记路径，会让材料定位更可靠。GitHub 附图不会自动作为图片输入；助手需另行读取并在无法读取时说明。
- 问答的长讨论会截取最近约 14 万字符，并明确告知较早内容省略；整理模式另存完整讨论供 Codex 读取。GitHub 回复过长时截断，完整结果仍保存在本机。

### 回复中的数学公式

问答和整理模式的最终回复都要求使用 GitHub 的数学格式：行内用美元符号包裹反引号，独立公式用 `math` 围栏，前后留空行。多行等式在围栏内使用 `aligned`，中文解释放在公式外。不要从渲染页面复制整段公式来引用；链接原评论可避免上下标变成散落的 Unicode 文本。

````markdown
状态 $`S_t`$ 按下式更新：

```math
\begin{aligned}
S_t &= \alpha_t S_{t-1} + v_t k_t^{\top}, \\
o_t &= S_t q_t.
\end{aligned}
```
````

发布前程序还会将正文中成对的 `\(...\)`、`\[...\]`、`$...$` 和 `$$...$$` 转成上述格式；原始答复保留在任务日志中。代码围栏、行内代码、引用行与缩进代码不转换，已有正确格式重复处理不变。缺少闭合符号或从页面复制后丢失结构的公式不会猜测修复。超长回复按完整段落和围栏边界截断，避免截断公式；这些规则只用于 GitHub 评论，不改变正式笔记的数学语法。

发布 API 成功只代表文本已保存，不代表公式显示正确。修改公式发布逻辑后，除了回归测试，还要打开真实 GitHub 评论检查行内公式、多行等式和分数的渲染。规则依据：[GitHub 数学表达式文档](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)。

## 本机服务与恢复

```sh
node scripts/reading-bot/cli.mjs status
node scripts/reading-bot/cli.mjs uninstall-service
```

服务每 30 秒轮询一次，串行运行 Codex，单次任务默认最多 20 分钟。Mac 休眠、关机或退出登录时不能工作；恢复后从持久游标继续获取评论。任务执行中断后会重新排队；回答已生成但尚未发布时，只重试发布。通过评论 ID 和回复标记恢复丢失的网络响应，避免重复生成回复。

默认本机文件位置：

| 内容 | 路径 |
| --- | --- |
| 配置 | `~/.config/codex-reading-bot/config.json` |
| App 私钥 | `~/.config/codex-reading-bot/app-<id>.pem` |
| 队列、Issue 会话映射 | `~/.local/state/codex-reading-bot/<owner>--<repo>/state.json` |
| 每次执行的输入、事件、错误与完整答复 | 同一状态目录下的 `jobs/<comment-id>/<attempt>/` |
| 整理任务的完整讨论、候选文件与检查日志 | 同一状态目录下的 `notes/<comment-id>/` |
| 整理工作区 | 同一状态目录下的 `worktrees/<comment-id>/` |
| 后台日志 | 同一状态目录下的 `service.log` 和 `service-error.log` |
| macOS 服务 | `~/Library/LaunchAgents/com.kuangjux.codex-reading-bot.plist` |

这些文件可能包含私有阅读材料，保持本地保存，不提交仓库。卸载服务保留 App、配置和历史。更换工作区路径或 CLI 路径后，需要修改配置并卸载、重新安装服务。其他配置文件可用所有命令的 `--config /absolute/path/config.json` 指定。

Codex 通过参数和标准输入启动，评论不会拼接为 shell 命令。子进程不继承 GitHub token 或 App 私钥环境变量；问答使用只读沙箱，整理任务使用独立工作区的 workspace-write 沙箱，均只保留 `zotero_reading` MCP，禁用其他已发现的 MCP 服务。GitHub 令牌只供外部程序使用：问答的令牌不请求仓库写权限，整理发布另用限定仓库的 Contents / Pull requests 写令牌。沙箱不等于独立操作系统账号；运行时仍使用你的本机 Codex 登录和阅读环境。因此 bot 的触发权限限定为本人，不能直接开放给陌生用户。

`status` 显示持久队列状态，不能替代进程健康检查。异常退出后的锁文件通常自动恢复；如果提示锁文件不完整，先确认没有运行中的服务或前台进程，再删除状态目录内的 `worker.lock`。执行失败后先查看对应任务的 `stderr.log`；修复登录或 MCP 后新发 @ 评论重试，需要时先 `/reset`。GitHub 权限被撤销时，服务会退避重试，需重新安装或修复权限。

## 开发验证

```sh
node --test scripts/reading-bot/*.test.mjs
```

测试覆盖提及解析、身份校验、评论分页、JWT、会话续接、回复恢复，以及在隔离 Git 仓库中的工作区编辑、检查失败、文件范围、提交与远端文件树一致性、网络丢包后的分支/PR 恢复、合并后清理。GitHub App 注册、安装及真实评论闭环仍需使用实际账号联调；单元测试或 Codex smoke 通过不代表 bot 已上线。

接口依据：[GitHub App manifest 注册](https://docs.github.com/en/apps/sharing-github-apps/registering-a-github-app-from-a-manifest)、[Issue 评论 API](https://docs.github.com/en/rest/issues/comments)、[Codex 非交互执行与会话续接](https://learn.chatgpt.com/docs/non-interactive-mode)。
