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

// Lightbox functionality
window.openLightbox = (imageSrc, imageAlt) => {
  // Create lightbox overlay
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.className =
    "fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300";
  lightbox.innerHTML = `
    <button class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onclick="window.closeLightbox()">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <img src="${imageSrc}" alt="${imageAlt}" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg">${imageAlt}</p>
  `;

  document.body.appendChild(lightbox);
  document.body.style.overflow = "hidden";

  // Fade in
  requestAnimationFrame(() => {
    lightbox.classList.remove("opacity-0");
    lightbox.classList.add("opacity-100");
  });

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      window.closeLightbox();
    }
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      window.closeLightbox();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);
};

window.closeLightbox = () => {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("opacity-100");
    lightbox.classList.add("opacity-0");
    setTimeout(() => {
      lightbox.remove();
      document.body.style.overflow = "";
    }, 300);
  }
};
