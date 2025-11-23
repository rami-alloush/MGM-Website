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
};

// Initialize Router
const appContainer = document.querySelector("#app");
const router = new Router(routes, appContainer);

// Simple intersection observer for fade-in animations (Global)
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe new sections when they are added
const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          (node.classList.contains("content-section") ||
            node.classList.contains("hero-section"))
        ) {
          // Reset animation state
          node.style.opacity = "0";
          node.style.transform = "translateY(20px)";
          node.style.transition =
            "opacity 0.8s ease-out, transform 0.8s ease-out";
          observer.observe(node);

          // Also observe children if needed
          node
            .querySelectorAll(".tech-card, .product-card")
            .forEach((child) => {
              child.style.opacity = "0";
              child.style.transform = "translateY(20px)";
              child.style.transition =
                "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";
              observer.observe(child);
            });
        }
      });
    }
  });
});

mutationObserver.observe(appContainer, { childList: true });

// Add class for visible state
const style = document.createElement("style");
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
