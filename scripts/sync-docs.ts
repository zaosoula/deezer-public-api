import fs from 'fs';
import path from 'path';

const TYPES_FILE = path.resolve('src/types/index.ts');
const DOCS_DIR = path.resolve('docs/content');

function getInterface(name: string): string {
  const content = fs.readFileSync(TYPES_FILE, 'utf-8');
  // Match export interface Name or Name<T> followed by { ... ^}
  const regex = new RegExp(`(export interface ${name}(?:<[\\s\\S]*?>)? {[\\s\\S]*?^})`, 'm');
  const match = content.match(regex);
  if (!match) return `// Interface ${name} not found`;
  return match[1].trim();
}

function getExample(name: string): string {
  const examplePath = path.resolve(`test/fixtures/${name.toLowerCase()}.json`);
  if (!fs.existsSync(examplePath)) return `// Example for ${name} not found`;
  const content = fs.readFileSync(examplePath, 'utf-8');
  return JSON.stringify(JSON.parse(content), null, 2);
}

function syncFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Let's use explicit markers instead for reliability, capturing existing indentation
  content = content.replace(/([ \t]*)<!-- sync-interface:([\w-]+) -->[\s\S]*?<!-- \/sync-interface -->/g, (_, spaces, name) => {
    modified = true;
    const interfaceContent = `\`\`\`ts\n${getInterface(name)}\n\`\`\``;
    const indentedContent = interfaceContent.split('\n').map(line => `${spaces}${line}`).join('\n');
    return `${spaces}<!-- sync-interface:${name} -->\n\n${indentedContent}\n\n${spaces}<!-- /sync-interface -->`;
  });

  content = content.replace(/([ \t]*)<!-- sync-example:([\w-]+) -->[\s\S]*?<!-- \/sync-example -->/g, (_, spaces, name) => {
    modified = true;
    const exampleContent = `\`\`\`json\n${getExample(name)}\n\`\`\``;
    const indentedContent = exampleContent.split('\n').map(line => `${spaces}${line}`).join('\n');
    return `${spaces}<!-- sync-example:${name} -->\n\n${indentedContent}\n\n${spaces}<!-- /sync-example -->`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Synced ${filePath}`);
  }
}

function walk(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.md')) {
      syncFile(fullPath);
    }
  }
}

console.log('Syncing documentation...');
walk(DOCS_DIR);
console.log('Done!');
