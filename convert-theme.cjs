const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  { from: /bg-tech-dark/g, to: 'bg-slate-50' },
  { from: /text-white/g, to: 'text-slate-900' },
  { from: /text-slate-400/g, to: 'text-slate-600' },
  { from: /text-slate-300/g, to: 'text-slate-700' },
  { from: /bg-white\/5/g, to: 'bg-white' },
  { from: /bg-white\/10/g, to: 'bg-slate-100' },
  { from: /border-white\/10/g, to: 'border-slate-200' },
  { from: /border-white\/5/g, to: 'border-slate-100' },
  { from: /border-white\/20/g, to: 'border-slate-300' },
  { from: /from-tech-dark/g, to: 'from-slate-50' },
  { from: /to-tech-dark/g, to: 'to-slate-50' },
  { from: /via-tech-dark/g, to: 'via-slate-50' },
  { from: /from-white\/0/g, to: 'from-slate-900/0' },
  { from: /to-white\/10/g, to: 'to-slate-900/5' },
  { from: /hover:bg-white\/5/g, to: 'hover:bg-slate-50' },
  { from: /hover:bg-white\/10/g, to: 'hover:bg-slate-100' },
  { from: /hover:text-white/g, to: 'hover:text-viettel-red' },
  { from: /text-white\/80/g, to: 'text-slate-700' },
  { from: /text-white\/60/g, to: 'text-slate-500' },
  { from: /bg-white\/20/g, to: 'bg-slate-200' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // Fix specific cases where text-slate-900 should be text-white (e.g., inside buttons with bg-viettel-red)
  // Actually, btn-primary doesn't need text-white class if it's in @apply, but let's be safe.
  content = content.replace(/btn-primary([^>]*?)text-slate-900/g, 'btn-primary$1text-white');
  content = content.replace(/bg-viettel-red([^>]*?)text-slate-900/g, 'bg-viettel-red$1text-white');
  
  // Fix footer and dark sections if needed, but let's make everything light.
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

walkDir(directoryPath);
console.log('Theme conversion complete.');
