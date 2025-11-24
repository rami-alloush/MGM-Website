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

// Quote Modal functionality
window.openQuoteModal = (productName, productId) => {
  const modal = document.createElement("div");
  modal.id = "quote-modal";
  modal.className =
    "fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300";
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6 border-b border-silver flex items-center justify-between">
        <h3 class="font-heading text-2xl font-bold text-secondary">Request Quote</h3>
        <button onclick="window.closeQuoteModal()" class="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form id="quote-form" class="p-6 space-y-4">
        <div class="bg-clinical-gray border border-silver rounded-lg p-4">
          <p class="text-sm text-charcoal">Requesting quote for:</p>
          <p class="font-heading font-bold text-secondary">${productName}</p>
          <input type="hidden" name="product" value="${productName}" />
          <input type="hidden" name="productId" value="${productId}" />
        </div>
        <div class="space-y-2">
          <label class="text-secondary font-semibold text-sm">Full Name *</label>
          <input type="text" name="name" required class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all" placeholder="Dr. John Smith">
        </div>
        <div class="space-y-2">
          <label class="text-secondary font-semibold text-sm">Email *</label>
          <input type="email" name="email" required class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all" placeholder="john@clinic.com">
        </div>
        <div class="space-y-2">
          <label class="text-secondary font-semibold text-sm">Phone</label>
          <input type="tel" name="phone" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all" placeholder="+1 234 567 8900">
        </div>
        <div class="space-y-2">
          <label class="text-secondary font-semibold text-sm">Company / Clinic</label>
          <input type="text" name="company" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all" placeholder="Dental Clinic Name">
        </div>
        <div class="space-y-2">
          <label class="text-secondary font-semibold text-sm">Quantity</label>
          <input type="number" name="quantity" min="1" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all" placeholder="1">
        </div>
        <div class="space-y-2">
          <label class="text-secondary font-semibold text-sm">Additional Notes</label>
          <textarea name="notes" rows="3" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all" placeholder="Any specific requirements..."></textarea>
        </div>
        <button type="submit" class="w-full px-6 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
          Submit Quote Request
        </button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  // Fade in
  requestAnimationFrame(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
  });

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      window.closeQuoteModal();
    }
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      window.closeQuoteModal();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);

  // Handle form submission
  const form = document.getElementById("quote-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Build mailto link with form data
    const subject = encodeURIComponent(`Quote Request: ${data.product}`);
    const body = encodeURIComponent(
      `Quote Request Details:\n\n` +
        `Product: ${data.product}\n` +
        `Product ID: ${data.productId}\n\n` +
        `Contact Information:\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone || "Not provided"}\n` +
        `Company/Clinic: ${data.company || "Not provided"}\n\n` +
        `Quantity: ${data.quantity || "Not specified"}\n\n` +
        `Additional Notes:\n${data.notes || "None"}`
    );

    // Open mailto link
    window.location.href = `mailto:info@mgmimplant.com?subject=${subject}&body=${body}`;

    // Show success message and close modal
    const modalContent = modal.querySelector(".bg-white");
    modalContent.innerHTML = `
      <div class="p-8 text-center space-y-4">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="font-heading text-2xl font-bold text-secondary">Email Client Opened!</h3>
        <p class="text-charcoal">Your quote request has been prepared. Please send the email from your mail application.</p>
        <button onclick="window.closeQuoteModal()" class="px-8 py-3 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover transition-all">
          Close
        </button>
      </div>
    `;
  });
};

window.closeQuoteModal = () => {
  const modal = document.getElementById("quote-modal");
  if (modal) {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = "";
    }, 300);
  }
};

// Mobile Menu Logic
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const productsToggle = document.getElementById("mobile-products-toggle");
  const productsMenu = document.getElementById("mobile-products-menu");
  const productsArrow = document.getElementById("mobile-products-arrow");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.add("translate-x-full");
        document.body.style.overflow = "";
      }
    });
  });

  if (productsToggle && productsMenu && productsArrow) {
    productsToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      productsMenu.classList.toggle("hidden");
      productsMenu.classList.toggle("flex");
      productsArrow.classList.toggle("rotate-180");
    });
  }
});
