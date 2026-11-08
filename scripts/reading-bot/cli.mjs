#!/usr/bin/env node
import { parseArgs, promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { homedir } from 'node:os';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, mkdir, rm, writeFile } from 'node:fs/promises';
import { readJson } from './core.mjs';
import { GitHub } from './github.mjs';
import { runWorker } from './worker.mjs';
import { runCodex } from './codex.mjs';
import { setup } from './setup.mjs';

const execute = promisify(execFile);
const script = fileURLToPath(import.meta.url);
const workspace = resolve(dirname(script), '../..');
const defaultConfig = join(homedir(), '.config', 'codex-reading-bot', 'config.json');
const label = 'com.kuangjux.codex-reading-bot';
const plistPath = join(homedir(), 'Library', 'LaunchAgents', `${label}.plist`);
const xml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

export function validateConfig(config) {
  if (config.version !== 1 || !/^[\w.-]+\/[\w.-]+$/.test(config.repo) || !/^[a-z0-9-]+$/.test(config.slug)) throw new Error('Invalid bot configuration');
  for (const key of ['allowedUserId', 'appId', 'installationId', 'repositoryId']) {
    if (!Number.isSafeInteger(config[key]) || config[key] < 1) throw new Error(`Invalid config field: ${key}`);
  }
  for (const key of ['workspace', 'codexPath', 'privateKeyPath', 'stateDirectory']) {
    if (typeof config[key] !== 'string' || !isAbsolute(config[key])) throw new Error(`Config ${key} must be an absolute path`);
  }
  if (!Number.isFinite(config.pollSeconds) || config.pollSeconds < 10 || config.pollSeconds > 3600) throw new Error('pollSeconds must be between 10 and 3600');
  if (!Number.isFinite(config.taskTimeoutSeconds) || config.taskTimeoutSeconds < 10 || config.taskTimeoutSeconds > 7200) throw new Error('taskTimeoutSeconds must be between 10 and 7200');
  return config;
}

export function servicePlist(config, configPath, executable = process.execPath) {
  const strings = values => values.map(value => `<string>${xml(value)}</string>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
<key>Label</key><string>${label}</string>
<key>ProgramArguments</key><array>${strings([executable, script, 'start', '--config', configPath])}</array>
<key>WorkingDirectory</key><string>${xml(config.workspace)}</string>
<key>EnvironmentVariables</key><dict><key>PATH</key><string>${xml(process.env.PATH ?? '/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin')}</string><key>HOME</key><string>${xml(homedir())}</string></dict>
<key>RunAtLoad</key><true/><key>KeepAlive</key><true/>
<key>ThrottleInterval</key><integer>60</integer>
<key>StandardOutPath</key><string>${xml(join(config.stateDirectory, 'service.log'))}</string>
<key>StandardErrorPath</key><string>${xml(join(config.stateDirectory, 'service-error.log'))}</string>
</dict></plist>\n`;
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { config: { type: 'string', default: defaultConfig }, port: { type: 'string', default: '8765' }, once: { type: 'boolean' } },
  });
  const [command] = positionals;
  const configPath = resolve(values.config);
  if (!command || command === 'help') {
    console.log('Usage: node scripts/reading-bot/cli.mjs <setup|doctor|smoke|start|status|install-service|uninstall-service> [--config PATH] [--once]');
    return;
  }
  if (command === 'setup') {
    const port = Number(values.port);
    if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('Invalid setup port');
    // Resolve the executable without a shell. The default install location is tried first.
    const candidates = [process.env.CODEX_CLI_PATH, join(homedir(), '.local/bin/codex'), '/opt/homebrew/bin/codex', '/usr/local/bin/codex'].filter(Boolean);
    let codexPath;
    for (const candidate of candidates) { try { await access(candidate); codexPath = candidate; break; } catch {} }
    if (!codexPath) throw new Error('Codex CLI not found; set CODEX_CLI_PATH to its absolute path');
    await setup({ configPath, workspace, codexPath, port }); return;
  }
  if (command === 'uninstall-service') {
    if (process.platform !== 'darwin') throw new Error('Service helper currently supports macOS only');
    await execute('launchctl', ['bootout', `gui/${process.getuid()}/${label}`]).catch(() => {});
    await rm(plistPath, { force: true });
    console.log('Background service removed. App, configuration and history were preserved.'); return;
  }
  const config = validateConfig(await readJson(configPath));
  if (command === 'doctor') {
    await Promise.all([access(config.workspace), access(config.privateKeyPath), access(config.codexPath)]);
    await execute(config.codexPath, ['login', 'status'], { cwd: config.workspace, timeout: 30000 });
    const { stdout } = await execute(config.codexPath, ['mcp', 'list', '--json'], { cwd: config.workspace, timeout: 30000 });
    const zotero = JSON.parse(stdout).find(server => server.name === 'zotero_reading');
    await new GitHub(config).verify();
    console.log(`GitHub App and repository verified: @${config.slug} → ${config.repo}`);
    console.log(`Codex login available; zotero_reading configured: ${Boolean(zotero?.enabled)} (actual tool connectivity is checked during a task).`);
    console.log('Run smoke to verify a real Codex turn, then install-service.');
  } else if (command === 'smoke') {
    const directory = join(config.stateDirectory, 'smoke', String(Date.now()));
    const first = await runCodex({ config, directory: join(directory, 'initial'), prompt: '这是阅读 bot 连通性测试。请记住标记 READING_BOT_OK，不要调用工具，仅回复该标记。' });
    if (!first.threadId || !first.text.includes('READING_BOT_OK')) throw new Error('Initial Codex smoke check failed');
    const second = await runCodex({ config, directory: join(directory, 'resume'), threadId: first.threadId, prompt: '请回复上一轮让你记住的标记，不要调用工具。' });
    if (!second.text.includes('READING_BOT_OK')) throw new Error('Codex session resume smoke check failed');
    console.log('Codex initial turn and session resume passed. No GitHub comments were posted.');
  } else if (command === 'start') {
    const controller = new AbortController();
    for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => controller.abort());
    await runWorker(config, { once: values.once, signal: controller.signal });
  } else if (command === 'status') {
    const state = await readJson(join(config.stateDirectory, 'state.json'), null);
    console.log(`Bot: @${config.slug}; repository: ${config.repo}`);
    if (!state) { console.log('Worker has not started yet.'); return; }
    const counts = {};
    for (const job of Object.values(state.jobs)) counts[job.status] = (counts[job.status] ?? 0) + 1;
    console.log(JSON.stringify({ activatedAt: state.activatedAt, since: state.since, jobs: counts, issueSessions: Object.keys(state.threads).length }, null, 2));
    console.log(`Private logs: ${config.stateDirectory}`);
  } else if (command === 'install-service') {
    if (process.platform !== 'darwin') throw new Error('Service helper currently supports macOS only');
    try { await access(plistPath); throw new Error('Service already exists; uninstall-service before replacing it'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await new GitHub(config).verify();
    await mkdir(config.stateDirectory, { recursive: true, mode: 0o700 });
    await mkdir(dirname(plistPath), { recursive: true });
    await writeFile(plistPath, servicePlist(config, configPath), { mode: 0o600, flag: 'wx' });
    await execute('plutil', ['-lint', plistPath]);
    await execute('launchctl', ['bootstrap', `gui/${process.getuid()}`, plistPath]);
    console.log(`Background service installed. After login it runs while this Mac is awake. Logs: ${config.stateDirectory}`);
  } else { throw new Error(`Unknown command: ${command}`); }
}

if (process.argv[1] && resolve(process.argv[1]) === script) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
