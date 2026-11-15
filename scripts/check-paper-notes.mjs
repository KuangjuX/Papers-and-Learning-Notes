import { fileURLToPath } from 'node:url';
import { checkPaperStructure } from './reading-bot/paper-structure.mjs';
const root = fileURLToPath(new URL('..', import.meta.url));
const { notes, problems } = await checkPaperStructure(root);
if (problems.length) { console.error(problems.join('\n')); process.exitCode = 1; }
else console.log(`Paper structure passed: ${notes.length} papers, one named file per paper; redirects valid.`);
