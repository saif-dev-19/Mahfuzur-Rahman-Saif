# Backend-Focused Fullstack Developer Portfolio

A modern, animated portfolio website built with React, TailwindCSS, and Framer Motion.

## Features

- 🎨 Dark theme with custom color palette
- ✨ Smooth animations and micro-interactions
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎯 Modern UI/UX
- 🚀 Deploy-ready

## Tech Stack

- React 18
- TailwindCSS
- Framer Motion
- Vite
- Lucide Icons

## Color Palette

- Background: #0F0F10
- Secondary: #1B1C1F
- Accent: #4F8CFF
- Text: #E9EAEC

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Sections

1. **Hero** - Introduction with photo placeholder and social links
2. **Skills** - Technical skills organized by category
3. **Projects** - Featured projects with descriptions and tech stack
4. **Experience** - Work history with timeline
5. **Architecture** - Case studies and system design examples
6. **Contact** - Contact form and information
7. **Footer** - Social links and copyright

## Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.jsx` - Name, title, bio
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

### Add Your Photo

Replace the placeholder in `src/components/Hero.jsx` with your image:

```jsx
<img src="/path-to-your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```

### Modify Projects

Edit `src/components/Projects.jsx` to add/remove projects.

### Update Experience

Edit `src/components/Experience.jsx` to reflect your work history.

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

Add to `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

Then:

```bash
npm run build
# Deploy the 'dist' folder
```

## License

MIT License - feel free to use this template for your own portfolio!
