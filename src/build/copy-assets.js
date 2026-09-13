const { promises: fs } = require("fs")
const path = require("path")

async function copyDir(src, dest) {
    await fs.rm(dest,  { recursive: true, force: true } );
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            await copyDir(srcPath, destPath) :
            await fs.copyFile(srcPath, destPath);
    }
}

// Copy all images
// copyDir('./src/images/', './build/images/');
// Copy all static files
copyDir('./src/static-text/', './build/static-text/');
