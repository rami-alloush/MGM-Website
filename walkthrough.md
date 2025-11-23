# MGM Implant Website Redesign - Walkthrough

## Overview

This project is a modern, single-page application (SPA) for MGM Implant, featuring a persistent 3D background, responsive Tailwind CSS design, and a comprehensive product catalog.

## Key Features

- **SPA Architecture**: Custom router for seamless navigation without page reloads.
- **3D Background**: Interactive 3D implant model (with fallback) using Three.js.
- **Tailwind CSS**: Modern, utility-first styling with a custom theme (Cyan/Blue).
- **Product Catalog**: Dynamic product pages driven by structured data.
- **Responsive Design**: Mobile-first layout with glass-morphism effects.

## Recent Updates

- **Tailwind Migration**: Switched to Tailwind CSS v4 for better performance and modern styling.
- **Content Integration**: Populated pages with content from the provided PDF (Mission, Values, Technology, Products).
- **3D Fixes**: Implemented a robust fallback for the 3D model to handle loading errors (Draco compression issues).
- **UI Polish**: Added smooth fade-in animations to all page transitions.

## Project Structure

- `index.html`: Main entry point with Header, Footer, and Canvas container.
- `src/main.js`: App entry point, initializes Router and Scene.
- `src/router.js`: Handles client-side routing.
- `src/components.js`: Contains all page components (Home, About, Products, etc.).
- `src/implantScene.js`: Manages the Three.js 3D scene.
- `src/style.css`: Global styles and Tailwind configuration.
- `src/data/products.js`: Product catalog data.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Verification Steps

1.  **Navigation**: Click through Home, About, Technology, and Products. Ensure the 3D background stays persistent.
2.  **Animations**: Verify that page content fades in smoothly upon navigation.
3.  **3D Scene**: Check that the 3D implant (or stylized wireframe cylinder) is visible and rotates with mouse movement.
4.  **Responsiveness**: Resize the browser to check mobile and desktop layouts.
5.  **Products**: Navigate to a product category (e.g., Implants) and then to a specific product detail page.
