/**
 * Production Build & Optimization Engine
 * Dr. Deshmukh Skin Hair Laser Clinic & Advance Aesthetic Center
 *
 * Tasks:
 *  1. HTML Minification (whitespace, comments stripped, structure preserved)
 *  2. CSS Minification (clean-css level-2 optimization, comments stripped)
 *  3. JavaScript Obfuscation & Minification (string array base64 encryption, identifier mangling, console.log stripping)
 *  4. Asset Synchronization (images, CNAME)
 *  5. Source Maps Disabled (guarantees zero .map files)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

console.log('🚀 Starting Production Build...\n');

// 1. Prepare dist directory
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'images'), { recursive: true });

// 2. Asset Synchronization
console.log('📦 Step 1: Copying static assets...');
const imagesDir = path.join(rootDir, 'images');
if (fs.existsSync(imagesDir)) {
    const images = fs.readdirSync(imagesDir);
    images.forEach(img => {
        fs.copyFileSync(path.join(imagesDir, img), path.join(distDir, 'images', img));
    });
    console.log(`   ✔ Copied ${images.length} images to dist/images`);
}

const cnamePath = path.join(rootDir, 'CNAME');
if (fs.existsSync(cnamePath)) {
    fs.copyFileSync(cnamePath, path.join(distDir, 'CNAME'));
    console.log('   ✔ Copied CNAME file');
}

// 3. CSS Minification
console.log('\n🎨 Step 2: Minifying CSS...');
const srcCss = path.join(rootDir, 'css', 'style.css');
const distCss = path.join(distDir, 'css', 'style.css');

execSync(`npx -p clean-css-cli cleancss -O2 -o "${distCss}" "${srcCss}"`, { stdio: 'inherit' });
const srcCssSize = fs.statSync(srcCss).size;
const distCssSize = fs.statSync(distCss).size;
console.log(`   ✔ CSS: ${(srcCssSize / 1024).toFixed(2)} KB → ${(distCssSize / 1024).toFixed(2)} KB (${((1 - distCssSize / srcCssSize) * 100).toFixed(1)}% reduction)`);

// 4. JavaScript Obfuscation & Minification
console.log('\n🔒 Step 3: Obfuscating & Minifying JavaScript...');
const srcJs = path.join(rootDir, 'js', 'script.js');
const tempObfJs = path.join(distDir, 'js', 'script.temp.js');
const distJs = path.join(distDir, 'js', 'script.js');

// Create temporary inline obfuscation config
const tempConfigPath = path.join(distDir, 'js', 'obf-temp.json');
const obfConfig = {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: false,
    simplify: true,
    sourceMap: false,
    splitStrings: true,
    splitStringsChunkLength: 10,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 2,
    stringArrayWrappersType: 'variable',
    stringArrayThreshold: 0.85,
    transformObjectKeys: false,
    unicodeEscapeSequence: false
};
fs.writeFileSync(tempConfigPath, JSON.stringify(obfConfig), 'utf8');

execSync(`npx javascript-obfuscator "${srcJs}" --output "${tempObfJs}" --config "${tempConfigPath}"`, { stdio: 'inherit' });
execSync(`npx terser "${tempObfJs}" -o "${distJs}" --compress drop_console=true --mangle --comments false`, { stdio: 'inherit' });

// Clean up temporary build artifacts
if (fs.existsSync(tempObfJs)) fs.unlinkSync(tempObfJs);
if (fs.existsSync(tempConfigPath)) fs.unlinkSync(tempConfigPath);

const srcJsSize = fs.statSync(srcJs).size;
const distJsSize = fs.statSync(distJs).size;
console.log(`   ✔ JS: ${(srcJsSize / 1024).toFixed(2)} KB → ${(distJsSize / 1024).toFixed(2)} KB (Encrypted String Array + Mangled)`);

// 5. HTML Minification
console.log('\n📄 Step 4: Minifying HTML files...');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
    const srcHtml = path.join(rootDir, file);
    const distHtml = path.join(distDir, file);

    execSync(`npx html-minifier-terser --collapse-whitespace --remove-comments --remove-redundant-attributes --remove-script-type-attributes --remove-style-link-type-attributes --use-short-doctype -o "${distHtml}" "${srcHtml}"`, { stdio: 'inherit' });

    const srcHtmlSize = fs.statSync(srcHtml).size;
    const distHtmlSize = fs.statSync(distHtml).size;
    console.log(`   ✔ HTML (${file}): ${(srcHtmlSize / 1024).toFixed(2)} KB → ${(distHtmlSize / 1024).toFixed(2)} KB (${((1 - distHtmlSize / srcHtmlSize) * 100).toFixed(1)}% reduction)`);
});

// 6. Security & Source Map Audit
console.log('\n🛡️ Step 5: Security & Source Map Audit...');
function findMapFiles(dir) {
    let maps = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            maps = maps.concat(findMapFiles(fullPath));
        } else if (entry.name.endsWith('.map') || entry.name.endsWith('.js.map') || entry.name.endsWith('.css.map')) {
            maps.push(fullPath);
        }
    }
    return maps;
}
const maps = findMapFiles(distDir);
if (maps.length > 0) {
    throw new Error('❌ Detected .map files in dist!');
}
console.log('   ✔ Confirmed 0 source map files generated');

console.log('\n✨ Production build ready in: ' + distDir);

