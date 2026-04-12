import fs from 'fs';
import path from 'path';

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find gsap.from(..., { ... })
  // We need to extract the target and the vars object.
  // This is tricky with regex because of nested braces.
  // Let's just do it manually for the known patterns.
  
  // Pattern:
  // gsap.from(".classname", {
  //   scrollTrigger: { ... },
  //   y: 50,
  //   opacity: 0,
  //   duration: 0.8,
  //   stagger: 0.2,
  // });
  
  // Replace with:
  // gsap.fromTo(".classname", 
  //   { y: 50, opacity: 0 },
  //   {
  //     scrollTrigger: { ... },
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.8,
  //     stagger: 0.2,
  //   }
  // );

  // Since the files are simple, we can use a regex that matches the gsap.from block
  const regex = /gsap\.from\(\s*([^,]+),\s*\{([\s\S]*?)\}\s*\);/g;
  
  content = content.replace(regex, (match, target, vars) => {
    // If it's already fromTo, skip
    if (match.includes('gsap.fromTo')) return match;
    
    // Extract y and opacity if they exist
    const yMatch = vars.match(/y:\s*([^,]+),/);
    const opacityMatch = vars.match(/opacity:\s*([^,]+),/);
    
    const y = yMatch ? yMatch[1] : '50';
    const opacity = opacityMatch ? opacityMatch[1] : '0';
    
    // Remove y and opacity from vars
    let newVars = vars.replace(/y:\s*[^,]+,\s*/, '').replace(/opacity:\s*[^,]+,\s*/, '');
    
    // Add y: 0, opacity: 1 to newVars
    newVars = `\n        y: 0,\n        opacity: 1,${newVars}`;
    
    return `gsap.fromTo(${target}, \n        { y: ${y}, opacity: ${opacity} },\n        {${newVars}}\n      );`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
