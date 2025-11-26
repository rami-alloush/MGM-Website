import { products } from "../../data/products.js";
import { createElement, animateSection } from "../utils.js";
import { Breadcrumb, ProductCard } from "../ui/index.js";

export const SurgicalKitsPage = () => {
  const category = products.surgical;
  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-8 bg-white/90 backdrop-blur-md"
  );

  const itemsHtml = category.items.map((item) => ProductCard(item)).join("");

  const breadcrumbItems = [
    { label: "Products", href: "#/products" },
    { label: category.title },
  ];

  section.innerHTML = `
    <div class="max-w-7xl mx-auto space-y-12">
      <div>
        ${Breadcrumb(breadcrumbItems)}
        <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4">${
          category.title
        }</h2>
        <p class="text-xl text-charcoal max-w-3xl">
          ${category.description}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${itemsHtml}
      </div>
    </div>
  `;

  animateSection(section);
  return section;
};
