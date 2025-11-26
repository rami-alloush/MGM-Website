import { products } from "../../data/products.js";
import { getCategoryImage } from "../../data/productImages.js";
import { createElement, animateSection } from "../utils.js";
import { CategoryCard } from "../ui/index.js";

const categoryIcons = {
  implants: "🦷",
  prosthetics: "⚙️",
  lab: "🔬",
  surgical: "🔧",
  advanced: "🎯",
  devices: "💡",
  biomaterials: "🧬",
};

export const ProductsLandingPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md"
  );

  const categoriesHtml = Object.entries(products)
    .map(([key, category]) => {
      const icon = categoryIcons[key] || "📦";
      const categoryImg = getCategoryImage(key);
      return CategoryCard({
        key,
        title: category.title,
        description: category.description,
        icon,
        imageSrc: categoryImg,
      });
    })
    .join("");

  section.innerHTML = `
        <div class="max-w-7xl mx-auto space-y-16">
            <div class="text-center space-y-4">
              <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">Our Products</h2>
              <p class="text-xl text-charcoal max-w-3xl mx-auto">Comprehensive solutions for every clinical scenario. From implants to advanced surgical kits, we have everything you need.</p>
            </div>
            <div class="grid lg:grid-cols-2 gap-6">
                ${categoriesHtml}
            </div>
        </div>
    `;

  animateSection(section);
  return section;
};
