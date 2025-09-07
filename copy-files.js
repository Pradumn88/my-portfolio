const fs = require('fs-extra');
const path = require('path');

// Create dist directory
fs.ensureDirSync('dist');

// Files and directories to copy
const copyItems = [
  'index.html',
  'pages',
  'public',
  'css',
  'JS'
];

// Copy each item
copyItems.forEach(item => {
  if (fs.existsSync(item)) {
    const dest = path.join('dist', item);
    if (fs.lstatSync(item).isDirectory()) {
      fs.copySync(item, dest);
    } else {
      fs.copySync(item, dest);
    }
    console.log(`Copied: ${item} -> ${dest}`);
  } else {
    console.warn(`Warning: ${item} does not exist and won't be copied`);
  }
});

console.log('Build completed successfully!');