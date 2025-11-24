# MGM Implant Website

A modern, responsive website for MGM Implant - a German dental implant company. Built with Vite, Three.js, and Tailwind CSS.

**Live Site:** https://mgm-implant.web.app

## Tech Stack

| Technology           | Purpose                  |
| -------------------- | ------------------------ |
| **Vite 5**           | Build tool & dev server  |
| **Tailwind CSS 4**   | Utility-first styling    |
| **Three.js**         | 3D implant visualization |
| **Firebase Hosting** | Production deployment    |
| **Vanilla JS**       | SPA routing & components |

## Project Structure

```
MGM-Website/
├── public/                  # Static assets (copied to build as-is)
│   ├── assets/
│   │   ├── images/          # Product images, backgrounds
│   │   └── models/          # 3D GLB models
│   └── vite.svg
├── src/
│   ├── data/
│   │   ├── products.js      # Product catalog data
│   │   └── productImages.js # Image path mappings
│   ├── components.js        # Page components (Home, About, Products, etc.)
│   ├── router.js            # Hash-based SPA router
│   ├── implantScene.js      # Three.js 3D scene setup
│   ├── main.js              # App entry point
│   └── style.css            # Global styles & Tailwind imports
├── firebase.json            # Firebase Hosting configuration
├── vite.config.js           # Vite build configuration
├── postcss.config.js        # PostCSS/Tailwind configuration
├── package.json             # Dependencies & scripts
└── index.html               # Main HTML template
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase CLI (for deployment)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd MGM-Website

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production (outputs to webapp/)
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Firebase Hosting

```bash
# Login to Firebase (first time only)
firebase login

# Deploy to production (optional)
# Pushing to GitHub auto builds and deploys
firebase deploy
```

The site deploys to: https://mgm-implant.web.app

### Build Configuration

- **Vite** outputs to `webapp/` directory
- **Firebase** serves from `webapp/` directory
- SPA rewrites configured for client-side routing

## Features

### Pages

- **Home** - Hero section with 3D implant visualization
- **About Us** - Company information & history
- **Technology** - M-Pure Surface technology details
- **Products** - Categorized product catalog
  - Implants
  - Prosthetics
  - Lab Workflow
  - Surgical Kits
  - Advanced Kits
  - Devices
  - Biomaterials
- **Product Detail** - Individual product pages with specifications
- **Contact** - Contact form & company info
- **Education** - Training & educational resources

### Interactive Features

- **3D Implant Viewer** - Three.js powered 3D model on homepage
- **Image Lightbox** - Click-to-zoom product images
- **Quote Request Modal** - Email-based quote system
- **Responsive Navigation** - Mobile-friendly dropdown menus

## Routing

Uses hash-based routing (`#/path`) for SPA navigation:

| Route                  | Component           |
| ---------------------- | ------------------- |
| `#/`                   | HomePage            |
| `#/about`              | AboutPage           |
| `#/technology`         | TechnologyPage      |
| `#/contact`            | ContactPage         |
| `#/products`           | ProductsLandingPage |
| `#/products/:category` | ProductListPage     |
| `#/product/:id`        | ProductDetailPage   |
| `#/surgical-kits`      | SurgicalKitsPage    |
| `#/education`          | EducationPage       |

## Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start development server   |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |
| `firebase deploy` | Deploy to Firebase Hosting |

## Environment

No environment variables required. The site is fully static.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - MGM Implant © 2025
