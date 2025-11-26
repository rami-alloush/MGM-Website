import { products } from "../../data/products.js";
import { createElement, animateSection } from "../utils.js";
import { Breadcrumb, ProductCard, SmartDesignSection } from "../ui/index.js";

export const ProductListPage = (categoryKey) => {
  const category = products[categoryKey];
  if (!category) {
    const errorDiv = createElement(
      "div",
      "min-h-screen flex items-center justify-center text-secondary text-2xl"
    );
    errorDiv.textContent = "Category not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md"
  );

  // Build Smart Design section for implants
  const smartDesignHtml =
    categoryKey === "implants" && category.smartDesignFeatures
      ? SmartDesignSection(category.smartDesignFeatures)
      : "";

  // Build content HTML
  let contentHtml = "";

  if (category.subcategories) {
    category.subcategories.forEach((sub) => {
      contentHtml += `
        <div class="mb-12">
          <h3 class="font-heading text-3xl font-bold text-secondary mb-6 pb-4 border-b border-silver">${
            sub.title
          }</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${sub.items.map((item) => ProductCard(item)).join("")}
          </div>
        </div>
      `;
    });
  } else if (category.items) {
    contentHtml = `
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${category.items.map((item) => ProductCard(item)).join("")}
      </div>
    `;
  }

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
        <p class="text-charcoal text-lg">${category.description || ""}</p>
      </div>
      ${smartDesignHtml}
      ${contentHtml}
    </div>
  `;

  animateSection(section);
  return section;
};
