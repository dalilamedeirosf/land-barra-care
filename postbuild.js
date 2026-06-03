import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const clientPath = path.join(distPath, 'client');
const serverPath = path.join(distPath, 'server');
const assetsPath = path.join(distPath, 'assets');

try {
  // 1. Delete server folder and duplicate assets if they exist
  if (fs.existsSync(serverPath)) {
    fs.rmSync(serverPath, { recursive: true, force: true });
  }
  if (fs.existsSync(assetsPath)) {
    fs.rmSync(assetsPath, { recursive: true, force: true });
  }

  // 2. Check if client folder exists
  if (fs.existsSync(clientPath)) {
    // 3. Move all contents of client/ to dist/
    const files = fs.readdirSync(clientPath);
    for (const file of files) {
      const src = path.join(clientPath, file);
      const dest = path.join(distPath, file);
      fs.renameSync(src, dest);
    }
    // 4. Delete the empty client folder
    fs.rmdirSync(clientPath);
  }

  // 5. Copy _shell.html to index.html if it exists
  const shellFile = path.join(distPath, '_shell.html');
  const indexFile = path.join(distPath, 'index.html');
  if (fs.existsSync(shellFile)) {
    fs.copyFileSync(shellFile, indexFile);
    console.log('Successfully created dist/index.html from _shell.html');
  }

  console.log('Post-build cleanup completed successfully!');
} catch (error) {
  console.error('Error during post-build cleanup:', error);
}
