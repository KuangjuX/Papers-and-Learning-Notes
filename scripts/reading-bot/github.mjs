import { createSign } from 'node:crypto';
import { readFile } from 'node:fs/promises';

export function appJwt(appId, pem, now = Date.now()) {
  const encode = value => Buffer.from(JSON.stringify(value)).toString('base64url');
  const timestamp = Math.floor(now / 1000);
  const body = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({ iat: timestamp - 60, exp: timestamp + 540, iss: String(appId) })}`;
  const signature = createSign('RSA-SHA256').update(body).sign(pem, 'base64url');
  return `${body}.${signature}`;
}

export async function api(path, { token, method = 'GET', body } = {}) {
  if (!path.startsWith('/') || path.startsWith('//')) throw new Error('Invalid GitHub API path');
  const response = await fetch(`https://api.github.com${path}`, {
    method, signal: AbortSignal.timeout(30000),
    headers: {
      Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'local-codex-reading-bot',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!response.ok) {
    // Do not include request headers, response bodies or manifest codes in logs.
    const error = new Error(`GitHub API ${method} failed: HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.status === 204 ? null : response.json();
}

export class GitHub {
  constructor(config) { this.config = config; this.cached = null; }
  async jwt() { return appJwt(this.config.appId, await readFile(this.config.privateKeyPath, 'utf8')); }
  async token() {
    if (!this.cached || Date.parse(this.cached.expires_at) < Date.now() + 120000) {
      this.cached = await api(`/app/installations/${this.config.installationId}/access_tokens`, {
        token: await this.jwt(), method: 'POST',
        body: { repositories: [this.config.repo.split('/')[1]], permissions: { issues: 'write', contents: 'read' } },
      });
    }
    return this.cached.token;
  }
  async request(path, options = {}) {
    try { return await api(path, { ...options, token: await this.token() }); }
    catch (error) {
      if (error.status !== 401) throw error;
      this.cached = null;
      return api(path, { ...options, token: await this.token() });
    }
  }
  async pages(path) {
    const result = [];
    for (let page = 1; ; page++) {
      const batch = await this.request(`${path}${path.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
      result.push(...batch);
      if (batch.length < 100) return result;
    }
  }
  base() { return `/repos/${this.config.repo}`; }
  async verify() {
    const app = await api('/app', { token: await this.jwt() });
    if (app.slug !== this.config.slug) throw new Error('Configured App slug does not match the private key');
    const repo = await this.request(this.base());
    if (repo.id !== this.config.repositoryId) throw new Error('Repository identity changed; reconfigure the bot');
    return repo;
  }
  comments(since) { return this.pages(`${this.base()}/issues/comments?sort=updated&direction=asc&since=${encodeURIComponent(since)}`); }
  issue(number) { return this.request(`${this.base()}/issues/${number}`); }
  issueComments(number) { return this.pages(`${this.base()}/issues/${number}/comments`); }
  comment(id) { return this.request(`${this.base()}/issues/comments/${id}`); }
  createReply(number, body) { return this.request(`${this.base()}/issues/${number}/comments`, { method: 'POST', body: { body } }); }
  updateReply(id, body) { return this.request(`${this.base()}/issues/comments/${id}`, { method: 'PATCH', body: { body } }); }
}
