import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourcePath = join(__dirname, '..', 'manifest.opera.json');
const destPath = join(__dirname, '..', 'dist', 'manifest.json');

try {
  // Read the Opera manifest file
  const manifestContent = readFileSync(sourcePath, 'utf8');
  
  // Write to the dist directory
  writeFileSync(destPath, manifestContent);
  
  console.log('Successfully copied Opera manifest file');
} catch (error) {
  console.error('Error copying Opera manifest file:', error);
  process.exit(1);
}
