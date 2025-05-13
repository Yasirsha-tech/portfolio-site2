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

// Create a tailwind.config.js for static build
const tailwindConfigPath = path.join(__dirname, 'static-build', 'tailwind.config.js');
fs.writeFileSync(tailwindConfigPath, `
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`);

// Create HTML file with instructions
const indexPath = path.join(__dirname, 'static-build', 'index.html');
fs.writeFileSync(indexPath, `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Static Export Instructions</title>
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.5; max-width: 800px; margin: 0 auto; padding: 2rem; }
    pre { background: #f1f1f1; padding: 1rem; border-radius: 4px; overflow-x: auto; }
    .container { border: 1px solid #ddd; padding: 2rem; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Static Portfolio Export Instructions</h1>
    <p>Follow these steps to create a truly static version of your portfolio:</p>
    
    <h2>1. Create a new folder on your computer</h2>
    <p>This will be where you set up your static portfolio.</p>
    
    <h2>2. Create a new Vite project</h2>
    <pre>npm create vite@latest my-portfolio -- --template react-ts</pre>
    
    <h2>3. Install dependencies</h2>
    <pre>cd my-portfolio
npm install
npm install tailwindcss postcss autoprefixer tailwindcss-animate</pre>
    
    <h2>4. Copy your components</h2>
    <p>Copy all the files from your Replit portfolio's <code>client/src</code> folder to your new project's <code>src</code> folder.</p>
    
    <h2>5. Copy your assets</h2>
    <p>If you have any assets, copy them to the <code>public</code> folder of your new project.</p>
    
    <h2>6. Build and deploy</h2>
    <pre>npm run build</pre>
    <p>This will create a <code>dist</code> folder with your static site, which you can deploy to services like:</p>
    <ul>
      <li>GitHub Pages</li>
      <li>Netlify</li>
      <li>Vercel</li>
      <li>Cloudflare Pages</li>
    </ul>
    
    <p>Your portfolio is now completely static and free from any server dependencies!</p>
  </div>
</body>
</html>
`);

console.log('Static export instructions created!');
console.log('Check the static-build folder for detailed instructions on how to create a pure static version of your portfolio.');
console.log('You can preview these instructions by opening the index.html file in a browser.');