import { products } from "../../data/products.js";
import { createElement, animateSection } from "../utils.js";
import { Breadcrumb, ProductCard } from "../ui/index.js";

export const ProductListPage = (categoryKey) => {
  const category = products[categoryKey];
  if (!category) {
    const errorDiv = createElement(
      "div",
      "min-h-screen flex items-center justify-center text-secondary text-2xl",
    );
    errorDiv.textContent = "Category not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md",
  );

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
    <div class="max-w-7xl mx-auto space-y-20">
      <div class="space-y-8">
        ${Breadcrumb(breadcrumbItems)}
        <h2 class="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary tracking-tight">${
          category.title
        }</h2>
        <div class="text-charcoal text-lg md:text-xl leading-relaxed max-w-4xl space-y-6 border-l-4 border-primary/20 pl-6 md:pl-8">
           ${
             category.description
               ? category.description
                   .split("\n\n")
                   .map((p) => `<p>${p}</p>`)
                   .join("")
               : ""
           }
        </div>
      </div>



      <div class="space-y-12 border-t border-silver/50 pt-16">
         <div class="text-center max-w-3xl mx-auto space-y-4">
            <h3 class="font-heading text-3xl font-bold text-secondary">Product Systems</h3>
            <p class="text-gray-600">Choose the right solution for your clinical needs</p>
         </div>
         ${contentHtml}
      </div>
    </div>
  `;

  animateSection(section);
  return section;
};
