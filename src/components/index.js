// Main components barrel export
// Re-exports all page components and utilities

// Utilities
export { createElement, animateSection, renderList } from "./utils.js";

// UI Components
export * from "./ui/index.js";

// Page Components
export {
  HomePage,
  AboutPage,
  TechnologyPage,
  ContactPage,
  ProductsLandingPage,
  ProductListPage,
  ProductDetailPage,
  SurgicalKitsPage,
  ResourcesPage,
} from "./pages/index.js";

// Header stub (for compatibility)
export const Header = () => null;
