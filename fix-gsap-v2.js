import fs from 'fs';
import path from 'path';

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find gsap.from(..., { ... })
  // We can use a simple regex if we assume standard formatting.
  // gsap.from(".classname", {
  //   scrollTrigger: { ... },
  //   y: 50,
  //   opacity: 0,
  //   duration: 0.8,
  //   ...
  // });
  
  // Actually, since there are only a few files, I can just use a regex that captures the target and the vars.
  // Then I parse the vars string to extract y, x, opacity.
  
  const regex = /gsap\.from\(\s*([^,]+),\s*\{([\s\S]*?)\}\s*\);/g;
  
  content = content.replace(regex, (match, target, vars) => {
    // Extract y, x, opacity
    const yMatch = vars.match(/y:\s*([^,]+),/);
    const xMatch = vars.match(/x:\s*([^,]+),/);
    const opacityMatch = vars.match(/opacity:\s*([^,]+),/);
    
    const y = yMatch ? yMatch[1].trim() : null;
    const x = xMatch ? xMatch[1].trim() : null;
    const opacity = opacityMatch ? opacityMatch[1].trim() : null;
    
    // Remove them from vars
    let newVars = vars;
    if (y) newVars = newVars.replace(new RegExp(`y:\\s*${y},?\\s*`), '');
    if (x) newVars = newVars.replace(new RegExp(`x:\\s*${x},?\\s*`), '');
    if (opacity) newVars = newVars.replace(new RegExp(`opacity:\\s*${opacity},?\\s*`), '');
    
    // Construct fromVars
    let fromVarsArr = [];
    if (y) fromVarsArr.push(`y: ${y}`);
    if (x) fromVarsArr.push(`x: ${x}`);
    if (opacity) fromVarsArr.push(`opacity: ${opacity}`);
    
    // Construct toVars
    let toVarsArr = [];
    if (y) toVarsArr.push(`y: 0`);
    if (x) toVarsArr.push(`x: 0`);
    if (opacity) toVarsArr.push(`opacity: 1`);
    
    const fromVarsStr = `{ ${fromVarsArr.join(', ')} }`;
    const toVarsStr = `{\n        ${toVarsArr.join(',\n        ')},${newVars}}`;
    
    return `gsap.fromTo(${target}, \n        ${fromVarsStr},\n        ${toVarsStr}\n      );`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
