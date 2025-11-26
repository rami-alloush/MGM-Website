// =============================================================================
// MODULAR COMPONENTS - Re-export from new structure
// =============================================================================
// The components have been split into separate files for better maintainability.
// This file re-exports everything for backward compatibility.
//
// New Structure:
//   src/components/
//   ├── index.js           - Main barrel export
//   ├── utils.js           - Helper functions (createElement, animateSection)
//   ├── ui/                - Reusable UI components
//   │   ├── index.js       - UI barrel export
//   │   ├── Breadcrumb.js  - Navigation breadcrumbs
//   │   ├── Card.js        - Product, Category, Feature, Info, News cards
//   │   ├── FeatureGrid.js - Smart Design, USP, Stats, Tech features
//   │   ├── List.js        - Icon, Numbered, Protocol, Check, Bullet lists
//   │   ├── Section.js     - Page sections, headers, containers
//   │   └── ProductDetails.js - Product detail components
//   └── pages/             - Page components
//       ├── index.js       - Pages barrel export
//       ├── HomePage.js
//       ├── AboutPage.js
//       ├── TechnologyPage.js
//       ├── ContactPage.js
//       ├── ProductsLandingPage.js
//       ├── ProductListPage.js
//       ├── ProductDetailPage.js
//       ├── SurgicalKitsPage.js
//       └── EducationPage.js
//
// To use the new modular imports directly:
//   import { HomePage } from "./components/pages/HomePage.js";
//   import { ProductCard, Breadcrumb } from "./components/ui/index.js";
// =============================================================================

export {
  Header,
  HomePage,
  AboutPage,
  TechnologyPage,
  ContactPage,
  ProductsLandingPage,
  ProductListPage,
  ProductDetailPage,
  SurgicalKitsPage,
  EducationPage,
} from "./components/index.js";
