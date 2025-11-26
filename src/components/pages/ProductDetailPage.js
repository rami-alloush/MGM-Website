import { products } from "../../data/products.js";
import { createElement, animateSection } from "../utils.js";
import { renderList } from "../utils.js";
import {
  Breadcrumb,
  VariantsSection,
  TypesSection,
  MaterialsSection,
  PeripheralsSection,
  ContentsSection,
  Parts3DGallery,
  ClinicalInfoSection,
  ProductImage,
  ProductActions,
  NumberedList,
  ProtocolSteps,
} from "../ui/index.js";

/**
 * Find a product by ID across all categories
 * @param {string} productId - Product ID to find
 * @returns {{product: Object|null, categoryTitle: string, categoryKey: string}}
 */
const findProduct = (productId) => {
  let product = null;
  let categoryTitle = "";
  let categoryKey = "";

  for (const [catKey, catVal] of Object.entries(products)) {
    if (catVal.items) {
      const found = catVal.items.find((p) => p.id === productId);
      if (found) {
        product = found;
        categoryTitle = catVal.title;
        categoryKey = catKey;
        break;
      }
    }
    if (catVal.subcategories) {
      for (const sub of catVal.subcategories) {
        const found = sub.items.find((p) => p.id === productId);
        if (found) {
          product = found;
          categoryTitle = catVal.title;
          categoryKey = catKey;
          break;
        }
      }
    }
    if (product) break;
  }

  return { product, categoryTitle, categoryKey };
};

export const ProductDetailPage = (productId) => {
  const { product, categoryTitle, categoryKey } = findProduct(productId);

  if (!product) {
    const errorDiv = createElement(
      "div",
      "min-h-screen flex items-center justify-center text-secondary text-2xl"
    );
    errorDiv.textContent = "Product not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-8 bg-white/90 backdrop-blur-md"
  );

  // Build how to use section
  const howToUseHtml =
    product.howToUse && product.howToUse.length > 0
      ? `
      <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
        <h3 class="font-heading text-2xl font-bold text-secondary mb-6">How to Use</h3>
        ${NumberedList(product.howToUse)}
      </div>
    `
      : "";

  // Build surgical protocol section
  const surgicalProtocolHtml =
    product.surgicalProtocol && product.surgicalProtocol.length > 0
      ? `
      <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
        <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Surgical Protocol</h3>
        ${ProtocolSteps(product.surgicalProtocol)}
      </div>
    `
      : "";

  const breadcrumbItems = [
    { label: "Products", href: "#/products" },
    { label: categoryTitle, href: `#/products/${categoryKey}` },
    { label: product.name },
  ];

  section.innerHTML = `
    <div class="max-w-7xl mx-auto space-y-12">
      ${Breadcrumb(breadcrumbItems)}
      
      <div class="grid lg:grid-cols-2 gap-12">
        ${ProductImage(product.id, product.name)}
        
        <div class="space-y-8">
          <div>
            <h2 class="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">${
              product.name
            }</h2>
            <p class="text-xl text-charcoal leading-relaxed">
              ${
                product.description ||
                "High-quality precision component designed for optimal performance and long-term success."
              }
            </p>
          </div>
          
          ${
            product.features && product.features.length > 0
              ? `
          <div class="bg-white border border-silver rounded-xl p-6 shadow-sm">
            <h3 class="font-heading text-2xl font-bold text-secondary mb-4">Features</h3>
            <ul class="space-y-3">${renderList(product.features)}</ul>
          </div>
          `
              : ""
          }

          ${MaterialsSection(product.materials)}
          
          ${ProductActions(product.name, product.id)}
        </div>
      </div>

      ${VariantsSection(product.variants)}

      ${Parts3DGallery(product.id, product.name)}

      ${ContentsSection(product.contents)}

      ${surgicalProtocolHtml}

      ${TypesSection(product.types)}

      ${ClinicalInfoSection(product)}

      ${howToUseHtml}

      ${PeripheralsSection(product.peripherals, product.accessories)}
    </div>
  `;

  animateSection(section);
  return section;
};
