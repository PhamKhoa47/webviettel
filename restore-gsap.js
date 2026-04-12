import fs from 'fs';
import path from 'path';

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Pattern:
  // gsap.fromTo(TARGET, 
  //   { y: Y_VAL, opacity: OP_VAL },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     ...OTHER_VARS
  //   }
  // );
  
  const regex = /gsap\.fromTo\(\s*([^,]+),\s*\{\s*y:\s*([^,]+),\s*opacity:\s*([^}]+)\s*\},\s*\{([\s\S]*?)\}\s*\);/g;
  
  content = content.replace(regex, (match, target, yVal, opVal, toVars) => {
    // Remove y: 0, opacity: 1, from toVars
    let originalVars = toVars.replace(/\s*y:\s*0,/, '').replace(/\s*opacity:\s*1,/, '');
    
    // If yVal was not 50, it means it was originally something else?
    // Actually, my previous script did:
    // const y = yMatch ? yMatch[1] : '50';
    // const opacity = opacityMatch ? opacityMatch[1] : '0';
    // let newVars = vars.replace(/y:\s*[^,]+,\s*/, '').replace(/opacity:\s*[^,]+,\s*/, '');
    
    // So we just need to add y: yVal, opacity: opVal back to originalVars
    // BUT only if they were originally there.
    // If yVal is 50, and it wasn't there originally, adding it back is fine (it's a good default for from).
    // Let's just add them back.
    
    let restoredVars = `\n        y: ${yVal},\n        opacity: ${opVal},${originalVars}`;
    
    return `gsap.from(${target}, {${restoredVars}});`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Restored ${file}`);
});
