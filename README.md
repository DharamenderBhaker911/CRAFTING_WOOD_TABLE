# 🪵 Crafty Timber Creations - Antigravity Wood Shop Website

A stunning, modern website for **Crafty Timber Creations** featuring an "antigravity" design theme where furniture appears to float and defy gravity.

## ✨ Features

- **Floating Animations**: Products and UI elements use smooth CSS animations and Framer Motion to create a weightless, hovering effect
- **Premium Design**: Modern color palette with wood tones, deep shadows, and glassmorphism effects
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **SEO Optimized**: Complete meta tags, Open Graph tags, and semantic HTML
- **Interactive Components**: Hover effects, micro-animations, and smooth transitions throughout

## 🎨 Design System

### Color Palette
- **Charcoal** (#2D2D2D): Primary text and accents
- **Cream** (#F9F7F2): Background for clean, airy feel
- **Sage Green** (#8B9D83): Natural accent color
- **Gold** (#C9A961): Premium highlights and CTAs
- **Wood** (#8B6F47): Warm wood tone accents

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-800 for varied hierarchy

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and interactions

## 📦 Project Structure

```
src/
├── assets/          # Product images and logo
├── components/      
│   ├── Navbar.jsx   # Transparent navbar with scroll effect
│   ├── Hero.jsx     # Hero section with gradient text
│   ├── Products.jsx # Product grid section
│   ├── ProductCard.jsx # Individual floating product cards
│   └── Footer.jsx   # Footer with links
├── App.jsx          # Main app component
├── index.css        # Global styles and animations
└── main.jsx         # App entry point
```

## 🏃‍♂️ Running the Project

The development server should already be running at:
👉 **http://localhost:5173/**

If not, run:
```bash
npm run dev
```

## 🛠️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎯 Key Components

### ProductCard
Each product card features:
- Continuous floating animation
- Enhanced hover effect with lift and glow
- Deep shadows for depth
- Smooth image zoom on hover

### Hero Section
- Large, bold gradient headline
- Animated floating background elements
- Dual CTA buttons with hover effects
- Scroll indicator animation

### Navbar
- Transparent initially, becomes solid on scroll
- Logo integration
- Smooth hover animations on nav links
- Gradient CTA button

## 🌟 Customization

To add more products, edit `src/components/Products.jsx`:
1. Add product images to `src/assets/`
2. Update the `products` array with new items
3. Images will automatically get floating animations

## 📸 Product Images

All product images feature:
- Clean white backgrounds
- Soft, dramatic shadows
- Professional lighting
- Floating/hovering appearance

## 🎭 Animation Details

- **Float Animation**: 6-8 second loop with up/down movement
- **Hover Lift**: -15px translateY on product cards
- **Fade In**: Smooth entrance animations using IntersectionObserver
- **Stagger**: Sequential delays for grid items (0.1s per item)

---

Built with ❤️ for Crafty Timber Creations
**ESTD 2030 | New York**
