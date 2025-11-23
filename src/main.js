import "./style.css";
import { initScene } from "./implantScene.js";
import { Router } from "./router.js";
import {
  HomePage,
  AboutPage,
  TechnologyPage,
  ContactPage,
  ProductsLandingPage,
  ProductListPage,
  ProductDetailPage,
  SurgicalKitsPage,
  EducationPage,
} from "./components.js";

// Initialize the 3D Scene
initScene();

// Define Routes
const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/technology": TechnologyPage,
  "/contact": ContactPage,
  "/products": ProductsLandingPage,
  "/products/:category": ProductListPage,
  "/product/:id": ProductDetailPage,
  "/surgical-kits": SurgicalKitsPage,
  "/education": EducationPage,
};

// Initialize Router
const appContainer = document.querySelector("#app");
const router = new Router(routes, appContainer);
