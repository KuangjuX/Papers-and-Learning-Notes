import { spawn, execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createWriteStream } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createInterface } from 'node:readline';

const execute = promisify(execFile);

export function childEnvironment(env = process.env) {
  const allowed = ['HOME', 'USER', 'LOGNAME', 'PATH', 'SHELL', 'TMPDIR', 'LANG', 'LC_ALL',
    'CODEX_HOME', 'OPENAI_API_KEY', 'OPENAI_BASE_URL', 'HTTP_PROXY', 'HTTPS_PROXY', 'ALL_PROXY', 'NO_PROXY',
    'http_proxy', 'https_proxy', 'all_proxy', 'no_proxy', 'SSL_CERT_FILE', 'NODE_EXTRA_CA_CERTS'];
  return Object.fromEntries(allowed.filter(key => env[key] !== undefined).map(key => [key, env[key]]));
}

export function codexArgs(config, threadId, output, mcpNames = [], mode = 'ask') {
  if (mode === 'note' && threadId) throw new Error('Note editing requires a fresh isolated session');
  const args = ['exec', '--sandbox', mode === 'note' ? 'workspace-write' : 'read-only', '-c', 'approval_policy="never"'];
  // Keep the reading MCP; desktop automation and unrelated connectors are not needed by this bot.
  for (const name of mcpNames) {
    if (!/^[a-zA-Z0-9_-]+$/.test(name)) throw new Error('Unsupported MCP name; configure a bot-specific Codex profile');
    // Plugin-provided servers need a complete transport even when disabled at bootstrap.
    if (name !== 'zotero_reading') args.push('-c', `mcp_servers.${name}={command="/usr/bin/false",enabled=false}`);
  }
  if (config.model) args.push('--model', config.model);
  if (threadId) args.push('resume', threadId);
  args.push('--json', '--output-last-message', output, '-');
  return args;
}

export async function runCodex({ config, prompt, threadId, directory, signal, mode = 'ask' }) {
  await mkdir(directory, { recursive: true, mode: 0o700 });
  await writeFile(join(directory, 'prompt.txt'), prompt, { mode: 0o600 });
  const env = childEnvironment();
  const { stdout } = await execute(config.codexPath, ['mcp', 'list', '--json'], {
    cwd: config.workspace, env, timeout: 30000, maxBuffer: 1024 * 1024,
  });
  const names = JSON.parse(stdout).map(server => server.name);
  const output = join(directory, 'answer.md');
  const child = spawn(config.codexPath, codexArgs(config, threadId, output, names, mode), {
    cwd: config.workspace, env, detached: true, stdio: ['pipe', 'pipe', 'pipe'],
  });
  const events = createWriteStream(join(directory, 'events.jsonl'), { mode: 0o600 });
  const errors = createWriteStream(join(directory, 'stderr.log'), { mode: 0o600 });
  child.stdout.pipe(events);
  child.stderr.pipe(errors);
  let currentThread = threadId;
  let turnFailed = false;
  let stopped = false;
  let killTimer;
  const lines = createInterface({ input: child.stdout });
  lines.on('line', line => {
    try {
      const event = JSON.parse(line);
      if (event.type === 'thread.started') currentThread = event.thread_id;
      if (event.type === 'turn.failed') turnFailed = true;
    } catch { /* Non-JSON diagnostics remain in the local event log. */ }
  });
  const stop = () => {
    stopped = true;
    if (!child.pid) return;
    try { process.kill(-child.pid, 'SIGTERM'); } catch { /* already exited */ }
    killTimer = setTimeout(() => { try { process.kill(-child.pid, 'SIGKILL'); } catch { /* exited */ } }, 5000);
    killTimer.unref();
  };
  const timeout = setTimeout(stop, config.taskTimeoutSeconds * 1000);
  signal?.addEventListener('abort', stop, { once: true });
  if (signal?.aborted) stop();
  // Avoid an unhandled EPIPE when the executable exits before consuming stdin.
  child.stdin.on('error', () => {});
  child.stdin.end(prompt);
  try {
    const code = await new Promise((resolve, reject) => {
      child.once('error', reject);
      child.once('close', resolve);
    });
    if (stopped) throw new Error('Codex task interrupted or timed out');
    if (code !== 0 || turnFailed) throw new Error(`Codex task failed (exit ${code}); see private local logs`);
    const text = (await readFile(output, 'utf8')).trim();
    if (!text) throw new Error('Codex returned an empty answer');
    return { text, threadId: currentThread };
  } finally {
    clearTimeout(timeout);
    clearTimeout(killTimer);
    signal?.removeEventListener('abort', stop);
    lines.close();
    events.end(); errors.end();
  }
}
