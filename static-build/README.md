# Yasirsha's Personal Portfolio

This is a static export guide for Yasirsha's personal portfolio website built with React, Vite, and Tailwind CSS.

## How to Create a Pure Static Version

### 1. Set Up a New Project

Create a new Vite project on your local machine:

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
```

### 2. Install Required Dependencies

```bash
npm install tailwindcss postcss autoprefixer
npm install tailwindcss-animate
npm install remixicon
```

### 3. Set Up Tailwind CSS

Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

Update the `tailwind.config.js` file with the following content:

```javascript
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
}
```

### 4. Copy Source Files

Copy all files from the Replit project's `client/src` directory to your new project's `src` directory.

This includes:
- Components folder
- Hooks folder
- App.tsx
- index.css
- main.tsx
- All other files and folders in src

### 5. Update HTML Template

Update the `index.html` file in the root of your new project:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Yasirsha - Portfolio</title>
    <meta name="description" content="Personal portfolio of Yasirsha, a BCA student at East Point College, Bangalore, with skills in full-stack development, cloud computing, and AI tools." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <!-- Open Graph tags for better social media sharing -->
    <meta property="og:title" content="Yasirsha - Portfolio" />
    <meta property="og:description" content="Personal portfolio of Yasirsha, a BCA student at East Point College, Bangalore, with skills in full-stack development, cloud computing, and AI tools." />
    <meta property="og:type" content="website" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 6. Build and Deploy

Build your project:

```bash
npm run build
```

This creates a `dist` folder containing your static website.

You can deploy this to any static hosting service such as:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## Features

- Responsive design for all screen sizes
- Light and dark theme
- Smooth scrolling between sections
- Interactive UI with animations
- Sections for About, Skills, Projects, Education, and Contact
- No server dependencies

## Design Decisions

- Used Tailwind CSS for styling
- Implemented theme toggling functionality
- Created scroll animations using IntersectionObserver
- Used Remix Icons for visual elements
- Added interactive hover effects on cards and buttons