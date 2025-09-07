const fs = require('fs-extra');
const path = require('path');

// Create dist directory
fs.ensureDirSync('dist');

// Copy HTML files from pages to dist root
const pagesDir = 'pages';
if (fs.existsSync(pagesDir)) {
    const pagesFiles = fs.readdirSync(pagesDir);
    pagesFiles.forEach(file => {
        if (file.endsWith('.html')) {
            const src = path.join(pagesDir, file);
            const dest = path.join('dist', file);
            fs.copySync(src, dest);
            console.log(`Copied: ${src} -> ${dest}`);
        }
    });
}

// Copy other necessary files and directories
const copyItems = [
    'index.html',
    'public',
    'css',
];

copyItems.forEach(item => {
    if (fs.existsSync(item)) {
        const dest = path.join('dist', item);
        fs.copySync(item, dest);
        console.log(`Copied: ${item} -> ${dest}`);
    } else {
        console.warn(`Warning: ${item} does not exist and won't be copied`);
    }
});

console.log('Build completed successfully!');