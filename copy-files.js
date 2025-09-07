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

// Copy specific files from public to root (if they exist in public)
const publicFilesToRoot = ['favicon.ico', 'manifest.json'];
publicFilesToRoot.forEach(file => {
    const src = path.join('public', file);
    if (fs.existsSync(src)) {
        const dest = path.join('dist', file);
        fs.copySync(src, dest);
        console.log(`Copied from public to root: ${src} -> ${dest}`);
    }
});

// Copy all files with image extensions from root to dist
const imageExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.ico', '.svg', '.webp'];
const rootFiles = fs.readdirSync('.', { withFileTypes: true });

rootFiles.forEach(dirent => {
    if (dirent.isFile()) {
        const file = dirent.name;
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
            const dest = path.join('dist', file);
            fs.copySync(file, dest);
            console.log(`Copied image: ${file} -> ${dest}`);
        }
    }
});

console.log('Build completed successfully!');