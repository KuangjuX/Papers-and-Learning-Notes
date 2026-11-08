import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readFile, writeFile, chmod } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';
import { api, appJwt, GitHub } from './github.mjs';
import { readJson, saveJson } from './core.mjs';

const execute = promisify(execFile);
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const page = body => `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>论文阅读 bot</title><style>body{max-width:720px;margin:70px auto;padding:24px;font:18px/1.7 system-ui;color:#1e293b;background:#f8fafc}button,a.button{display:inline-block;padding:12px 20px;background:#2457c5;color:white;border:0;border-radius:8px;font:inherit;text-decoration:none}code{background:#e2e8f0;padding:3px 6px}small{color:#475569}</style>${body}</html>`;

export function manifest(base, state, repo) {
  return {
    name: `${repo.split('/')[0]} Paper Reader`,
    url: `https://github.com/${repo}`,
    description: '由本机 Codex 驱动的个人论文阅读 Issue 助手',
    public: false,
    hook_attributes: { url: `https://github.com/${repo}`, active: false },
    redirect_url: `${base}/callback`,
    setup_url: `${base}/installed?session=${state}`,
    default_permissions: { issues: 'write', contents: 'read' },
    default_events: [],
  };
}

export async function setup({ configPath, workspace, codexPath, port = 8765 }) {
  const existing = await readJson(configPath, null);
  if (existing) throw new Error(`Configuration already exists: ${configPath}. Use doctor or start.`);
  const [{ stdout: userJson }, { stdout: repoJson }] = await Promise.all([
    execute('gh', ['api', 'user'], { cwd: workspace }),
    execute('gh', ['repo', 'view', '--json', 'nameWithOwner'], { cwd: workspace }),
  ]);
  const user = JSON.parse(userJson);
  const repo = JSON.parse(repoJson).nameWithOwner;
  const { stdout: detailJson } = await execute('gh', ['api', `repos/${repo}`], { cwd: workspace });
  const repository = JSON.parse(detailJson);
  await mkdir(dirname(configPath), { recursive: true, mode: 0o700 });
  const pendingPath = `${configPath}.pending`;
  let pending = await readJson(pendingPath, null);
  if (pending && (pending.repo !== repo || pending.allowedUserId !== user.id)) throw new Error('Pending registration belongs to a different repository or account');
  const state = randomBytes(32).toString('hex');
  const base = `http://127.0.0.1:${port}`;
  let converting = false;
  let complete = false;
  const installationPage = () => page(`<h1>App 已创建</h1><p>接下来将 <b>${escapeHtml(pending.slug)}</b> 安装到 <b>${escapeHtml(repo)}</b>。</p><p>在 GitHub 页面选择 <b>Only select repositories</b>，只勾选这个仓库。</p><a class="button" href="https://github.com/apps/${encodeURIComponent(pending.slug)}/installations/new">安装到阅读仓库</a><p>安装完成后如果没有自动返回，可点击下方链接核验。</p><a href="${base}/installed?session=${state}">检查安装状态</a>`);
  const server = createServer(async (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('Referrer-Policy', 'no-referrer');
    response.setHeader('X-Frame-Options', 'DENY');
    response.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; form-action https://github.com; frame-ancestors 'none'");
    if (request.headers.host !== `127.0.0.1:${port}` || request.method !== 'GET') {
      response.writeHead(403); response.end('Forbidden'); return;
    }
    const url = new URL(request.url, base);
    const validSession = url.searchParams.get('session') === state;
    try {
      if (url.pathname === '/' && validSession) {
        if (pending) { response.end(installationPage()); return; }
        const payload = escapeHtml(JSON.stringify(manifest(base, state, repo)));
        response.end(page(`<h1>创建你的论文阅读 bot</h1><p>账号：<b>${escapeHtml(user.login)}</b><br>仓库：<b>${escapeHtml(repo)}</b></p><p>将在你的账号下创建一个私有 GitHub App。你可以在下一页修改名称。</p><p>权限：读取仓库内容、读取及回复 Issue。提问只接受你本人；Codex 在这台电脑上执行只读阅读任务。</p><form action="https://github.com/settings/apps/new?state=${state}" method="post"><input type="hidden" name="manifest" value="${payload}"><button>前往 GitHub 创建 bot</button></form><p><small>私钥直接保存到本机权限为 0600 的文件，不会显示在页面或聊天中。无需开放公网端口。</small></p>`));
      } else if (url.pathname === '/callback' && url.searchParams.get('state') === state) {
        if (pending) { response.end(installationPage()); return; }
        const code = url.searchParams.get('code');
        if (!code || !/^[a-zA-Z0-9_-]+$/.test(code) || converting) throw new Error('Invalid or busy registration callback');
        converting = true;
        try {
          const app = await api(`/app-manifests/${code}/conversions`, { method: 'POST' });
          if (!app.pem || !Number.isSafeInteger(app.id) || !/^[a-z0-9-]+$/.test(app.slug) || app.owner?.id !== user.id) {
            throw new Error('App registration identity did not match the current GitHub owner');
          }
          const privateKeyPath = join(dirname(configPath), `app-${app.id}.pem`);
          await writeFile(privateKeyPath, app.pem, { mode: 0o600, flag: 'wx' });
          await chmod(privateKeyPath, 0o600);
          pending = { appId: app.id, slug: app.slug, privateKeyPath, repo, allowedUserId: user.id };
          await saveJson(pendingPath, pending);
          console.log(`App @${app.slug} registered. Private key saved locally; waiting for repository installation.`);
          response.end(installationPage());
        } finally { converting = false; }
      } else if (url.pathname === '/installed' && validSession && pending) {
        const jwt = appJwt(pending.appId, await readFile(pending.privateKeyPath, 'utf8'));
        const installation = await api(`/repos/${repo}/installation`, { token: jwt });
        if (installation.app_id !== pending.appId || installation.account?.id !== repository.owner.id) throw new Error('Installation identity mismatch');
        if (installation.repository_selection !== 'selected') throw new Error('Please restrict the App installation to selected repositories, then retry');
        const config = {
          ...pending, version: 1, installationId: installation.id,
          repositoryId: repository.id, workspace, codexPath,
          stateDirectory: join(homedir(), '.local', 'state', 'codex-reading-bot', repo.replace('/', '--')),
          pollSeconds: 30, taskTimeoutSeconds: 1200,
        };
        await new GitHub(config).verify();
        await saveJson(configPath, config);
        complete = true;
        response.end(page(`<h1>安装已验证</h1><p>你的 bot：<b>@${escapeHtml(config.slug)}</b></p><p>下一步在终端启动后台服务，再在阅读 Issue 新发一条评论：</p><pre><code>@${escapeHtml(config.slug)} 请解释这篇论文要解决的问题</code></pre><p>配置和私钥已保存在本机。可以关闭此页面。</p>`));
        console.log(`Setup complete: @${config.slug}. Run doctor, then install-service.`);
        server.close();
      } else { response.writeHead(404); response.end('Not found'); }
    } catch (error) {
      // Never echo callback codes or GitHub response payloads.
      response.writeHead(400);
      response.end(page(`<h1>暂未完成</h1><p>${error.status ? `GitHub 返回 HTTP ${error.status}。请确认已创建 App 并安装到指定仓库。` : '注册或安装验证未通过。请确认 GitHub 账号、选定仓库范围后重试。'}</p><a href="${base}/?session=${state}">返回向导</a>`));
      console.error(error.status ? `Setup request failed: HTTP ${error.status}` : 'Setup validation failed. No credentials were printed.');
    }
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, '127.0.0.1', resolve); });
  console.log(`Open the local setup wizard: ${base}/?session=${state}`);
  console.log('Keep this process running while creating and installing the GitHub App.');
  const timeout = setTimeout(() => { if (!complete) { console.log('Setup wizard expired; run setup again to continue.'); server.close(); } }, 55 * 60 * 1000);
  server.on('close', () => clearTimeout(timeout));
  return server;
}
