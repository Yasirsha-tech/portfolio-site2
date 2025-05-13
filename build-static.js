import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a static-build directory
const staticBuildDir = path.join(__dirname, 'static-build');
if (!fs.existsSync(staticBuildDir)) {
  fs.mkdirSync(staticBuildDir, { recursive: true });
}

try {
  // Build the Vite app
  console.log('Building the static site...');
  execSync('vite build --outDir ../static-build', { 
    cwd: path.join(__dirname, 'client'),
    stdio: 'inherit' 
  });

  // Copy the index.html file to the root of static-build
  console.log('Build completed! Your static site is ready in the static-build directory');
  console.log('You can download this folder and deploy it to any static hosting service');
} catch (error) {
  console.error('Build failed:', error);
}