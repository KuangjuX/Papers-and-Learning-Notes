import { readFileSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createInterface } from 'node:readline';

export const ALLOWED_TOOLS = new Set([
  'library_search', 'library_read', 'library_retrieve', 'paper_read',
  'annotate_pdf', 'library_update', 'note_write', 'undo',
]);

const exportTool = {
  name: 'zotero_reading_export',
  description: 'Read a paper and its complete annotations, keys, page positions and notes for Markdown export. Unlike library_read this does not truncate annotation text/comments. Does not modify Zotero.',
  inputSchema: { type: 'object', required: ['itemId'], additionalProperties: false,
    properties: { itemId: { type: 'integer', minimum: 1 } } },
  annotations: { readOnlyHint: true, openWorldHint: false },
};

export function readingExportScript(itemId) {
  if (!Number.isSafeInteger(itemId) || itemId < 1) throw new Error('itemId must be a positive integer');
  return `const item = Zotero.Items.get(${itemId});
if (!item || !item.isRegularItem()) throw new Error('Expected a parent paper item');
const data = item.toJSON();
const attachments = item.getAttachments().map(id => {
  const pdf = Zotero.Items.get(id);
  if (!pdf || !pdf.isPDFAttachment()) return null;
  return {itemId: pdf.id, key: pdf.key, libraryID: pdf.libraryID,
    title: pdf.getField('title'), annotations: pdf.getAnnotations().map(snapshot => {
      // The upstream read-only facade detaches method results. Zotero item
      // getters are not enumerable, so getAnnotations() exposes _id, not id.
      // Rehydrate through the read-only Items API before accessing getters.
      const id = snapshot.id ?? snapshot._id;
      if (!Number.isSafeInteger(id) || id < 1) throw new Error('Invalid annotation identity');
      const a = Zotero.Items.get(id);
      if (!a || !a.isAnnotation()) throw new Error('Annotation unavailable');
      return {itemId: a.id, key: a.key, type: a.annotationType,
        text: a.annotationText || '', comment: a.annotationComment || '',
        color: a.annotationColor, pageLabel: a.annotationPageLabel,
        position: JSON.parse(a.annotationPosition || '{}')};
    })};
}).filter(Boolean);
return {schemaVersion: 1, paper: {itemId: item.id, key: item.key,
  libraryID: item.libraryID, title: data.title || item.getField('title'),
  url: data.url || '', doi: data.DOI || '', date: data.date || '',
  creators: data.creators || []}, attachments,
  notes: item.getNotes().map(id => { const note = Zotero.Items.get(id);
    return {itemId: id, key: note.key, html: note.getNote()}; })};`;
}

export function readConnection() {
  const profiles = join(homedir(), 'Library/Application Support/Zotero/Profiles');
  const candidates = process.env.ZOTERO_PROFILE
    ? [resolve(process.env.ZOTERO_PROFILE)]
    : readdirSync(profiles, { withFileTypes: true }).filter(e => e.isDirectory())
      .map(e => join(profiles, e.name));
  const connections = [];
  for (const profile of candidates) {
    let source;
    try { source = readFileSync(join(profile, 'prefs.js'), 'utf8'); } catch { continue; }
    const prefs = new Map();
    for (const line of source.split('\n')) {
      const match = line.match(/^user_pref\(("(?:[^"\\]|\\.)*"), (.+)\);$/);
      if (match) { try { prefs.set(JSON.parse(match[1]), JSON.parse(match[2])); } catch {} }
    }
    const token = prefs.get('extensions.zotero.llmforzotero.codexZoteroMcpBearerToken');
    if (typeof token !== 'string' || token.length < 32) continue;
    const port = prefs.get('extensions.zotero.httpServer.port') ?? 23119;
    if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid Zotero HTTP port');
    connections.push({ token, url: `http://127.0.0.1:${port}/llm-for-zotero/mcp` });
  }
  if (connections.length !== 1) throw new Error(connections.length
    ? 'Multiple Zotero profiles: set ZOTERO_PROFILE to the intended profile directory'
    : 'Zotero MCP token unavailable. Start Zotero with llm-for-zotero, then restart Zotero once to save its preferences.');
  return connections[0];
}

export async function rpc(request, connection = readConnection()) {
  let response;
  try {
    response = await fetch(connection.url, {
      method: 'POST', redirect: 'error', signal: AbortSignal.timeout(120000),
      headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream',
        Authorization: `Bearer ${connection.token}` }, body: JSON.stringify(request),
    });
  } catch { throw new Error('Cannot reach Zotero MCP. Keep Zotero running with llm-for-zotero enabled.'); }
  if (!response.ok) throw new Error(`Zotero MCP HTTP ${response.status}; check the plugin and saved token`);
  if (response.status === 204) return null;
  return response.json();
}

export async function proxyRequest(request, transport = rpc) {
  if (!request || request.jsonrpc !== '2.0' || typeof request.method !== 'string') {
    return { jsonrpc: '2.0', id: request?.id ?? null, error: { code: -32600, message: 'Invalid JSON-RPC request' } };
  }
  const hasId = Object.hasOwn(request, 'id');
  if (!hasId) return null;
  try {
    let upstream = request;
    if (request.method === 'tools/call') {
      const name = request.params?.name;
      if (name === exportTool.name) {
        const args = request.params.arguments;
        if (!args || Object.keys(args).some(k => k !== 'itemId')) throw new Error('Expected only itemId');
        upstream = { ...request, params: { name: 'zotero_script', arguments: {
          access: 'library', effect: 'read', script: readingExportScript(args.itemId),
          description: 'Read complete paper annotation data for the notes repository',
        } } };
      } else if (!ALLOWED_TOOLS.has(name)) throw new Error(`Tool unavailable: ${String(name)}`);
    } else if (!['initialize', 'ping', 'tools/list'].includes(request.method)) {
      return { jsonrpc: '2.0', id: request.id, error: { code: -32601, message: 'Method unavailable' } };
    }
    const response = await transport(upstream);
    if (request.method === 'tools/list' && response?.result?.tools) {
      const tools = response.result.tools;
      response.result.tools = tools.filter(t => ALLOWED_TOOLS.has(t.name));
      if (tools.some(t => t.name === 'zotero_script')) response.result.tools.push(exportTool);
    }
    if (request.method === 'initialize' && response?.result) {
      response.result.serverInfo = { name: 'zotero-reading', version: '1.0.0' };
      response.result.capabilities = { tools: {} };
    }
    return response;
  } catch (error) {
    return { jsonrpc: '2.0', id: request.id, error: { code: -32000, message: error.message } };
  }
}

export async function callTool(name, args) {
  const response = await proxyRequest({ jsonrpc: '2.0', id: 1, method: 'tools/call',
    params: { name, arguments: args } });
  if (response.error) throw new Error(response.error.message);
  return decodeToolResult(response.result);
}

export function decodeToolResult(result) {
  if (result?.isError) throw new Error(JSON.stringify(result.content));
  let data = result?.structuredContent;
  if (!data) {
    const text = result?.content?.filter(c => c.type === 'text').map(c => c.text).join('\n');
    try { data = JSON.parse(text); } catch { throw new Error('Expected structured Zotero result'); }
  }
  if (data?.ok === false) throw new Error(data.error || 'Zotero tool failed');
  return data?.ok === true && Object.hasOwn(data, 'result') ? data.result : data;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const lines = createInterface({ input: process.stdin, crlfDelay: Infinity });
  let pending = Promise.resolve();
  lines.on('line', line => {
    pending = pending.then(async () => {
      let request;
      try { request = JSON.parse(line); }
      catch { process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: null,
        error: { code: -32700, message: 'Invalid JSON' } }) + '\n'); return; }
      const response = await proxyRequest(request);
      if (response) process.stdout.write(JSON.stringify(response) + '\n');
    }).catch(() => { process.stderr.write('Zotero bridge failed\n'); });
  });
}
