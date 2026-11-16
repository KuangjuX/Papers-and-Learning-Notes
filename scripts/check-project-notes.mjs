import { fileURLToPath } from 'node:url';
import { checkProjectStructure } from './reading-bot/project-structure.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const { paths, problems } = await checkProjectStructure(root, { requireRedirects: true });
if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else console.log(`Project archive passed: ${paths.length} Markdown files grouped by project.`);
