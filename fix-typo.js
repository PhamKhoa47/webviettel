import fs from 'fs';
import path from 'path';

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/opacitduration/g, 'duration');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});
