import {
  getProductImage,
  DEFAULT_PRODUCT_IMAGE,
  get3DImages,
} from "../../data/productImages.js";
import { IconList } from "./List.js";

/**
 * Product variants section
 * @param {Array} variants - Product variants
 * @returns {string} HTML string
 */
export const VariantsSection = (variants) => {
  if (!variants || variants.length === 0) return "";

  return `
    <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
      <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Available Variants & Part Numbers</h3>
      <div class="grid md:grid-cols-2 gap-4">
        ${variants
          .map(
            (v) => `
          <div class="bg-clinical-gray rounded-xl p-4">
            <h4 class="font-bold text-secondary mb-2">${v.name}</h4>
            ${
              v.partNumbers
                ? `<p class="text-sm text-charcoal mb-1"><strong>Part #:</strong> ${
                    Array.isArray(v.partNumbers)
                      ? v.partNumbers.join(", ")
                      : v.partNumbers
                  }</p>`
                : ""
            }
            ${
              v.partNumber
                ? `<p class="text-sm text-charcoal mb-1"><strong>Part #:</strong> ${v.partNumber}</p>`
                : ""
            }
            ${
              v.cuffHeights
                ? `<p class="text-sm text-charcoal mb-1"><strong>Cuff Heights:</strong> ${v.cuffHeights.join(
                    ", "
                  )}mm</p>`
                : ""
            }
            ${
              v.compatibleWith
                ? `<p class="text-sm text-charcoal"><strong>Compatible:</strong> ${v.compatibleWith.join(
                    ", "
                  )}</p>`
                : ""
            }
            ${
              v.specifications
                ? `<p class="text-sm text-charcoal"><strong>Specs:</strong> ${v.specifications.join(
                    ", "
                  )}</p>`
                : ""
            }
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
};

/**
 * Product types section
 * @param {Array} types - Product types
 * @returns {string} HTML string
 */
export const TypesSection = (types) => {
  if (!types || types.length === 0) return "";

  return `
    <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
      <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Available Types</h3>
      <div class="grid md:grid-cols-2 gap-4">
        ${types
          .map(
            (t) => `
          <div class="bg-clinical-gray rounded-xl p-4">
            <h4 class="font-bold text-secondary mb-2">${t.name}</h4>
            ${
              t.description
                ? `<p class="text-sm text-charcoal mb-1">${t.description}</p>`
                : ""
            }
            ${
              t.useCase
                ? `<p class="text-sm text-charcoal"><strong>Use Case:</strong> ${t.useCase}</p>`
                : ""
            }
            ${
              t.features
                ? `<ul class="text-sm text-charcoal mt-2 space-y-1">${t.features
                    .map((f) => `<li>• ${f}</li>`)
                    .join("")}</ul>`
                : ""
            }
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
};

/**
 * Materials display
 * @param {Array<string>} materials - Materials list
 * @returns {string} HTML string
 */
export const MaterialsSection = (materials) => {
  if (!materials || materials.length === 0) return "";

  return `
    <div class="bg-clinical-gray rounded-xl p-4">
      <h4 class="font-bold text-secondary mb-2">Materials</h4>
      <p class="text-charcoal">${materials.join(", ")}</p>
    </div>
  `;
};

/**
 * Peripherals/Accessories section
 * @param {Array} peripherals - Peripherals list
 * @param {Array} accessories - Accessories list
 * @returns {string} HTML string
 */
export const PeripheralsSection = (peripherals, accessories) => {
  let html = "";

  if (peripherals && peripherals.length > 0) {
    html += `
      <div class="bg-clinical-gray rounded-xl p-6">
        <h4 class="font-bold text-secondary mb-4">Peripherals & Accessories</h4>
        <div class="grid md:grid-cols-2 gap-3">
          ${peripherals
            .map(
              (p) => `
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-secondary">${p.name}</p>
              <p class="text-sm text-charcoal">Part #: ${
                p.partNumber ||
                (p.partNumbers ? p.partNumbers.join(", ") : "N/A")
              }</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (accessories && accessories.length > 0) {
    html += `
      <div class="bg-clinical-gray rounded-xl p-6 mt-4">
        <h4 class="font-bold text-secondary mb-4">Accessories</h4>
        <div class="grid md:grid-cols-2 gap-3">
          ${accessories
            .map(
              (a) => `
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-secondary">${a.name}</p>
              <p class="text-sm text-charcoal">Part #: ${
                a.partNumber ||
                (a.partNumbers ? a.partNumbers.join(", ") : "N/A")
              }</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  return html;
};

/**
 * Kit contents section
 * @param {Array} contents - Kit contents
 * @returns {string} HTML string
 */
export const ContentsSection = (contents) => {
  if (!contents || contents.length === 0) return "";

  return `
    <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
      <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Kit Contents</h3>
      <div class="grid md:grid-cols-2 gap-4">
        ${contents
          .map(
            (item) => `
          <div class="bg-clinical-gray rounded-xl p-4">
            <h4 class="font-bold text-secondary mb-1">${item.name}</h4>
            ${
              item.specs
                ? `<p class="text-sm text-primary mb-1">${item.specs}</p>`
                : ""
            }
            ${
              item.description
                ? `<p class="text-sm text-charcoal">${item.description}</p>`
                : ""
            }
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
};

/**
 * 3D parts gallery section
 * @param {string} productId - Product ID
 * @param {string} productName - Product name
 * @returns {string} HTML string
 */
export const Parts3DGallery = (productId, productName) => {
  const parts3D = get3DImages(productId);
  if (!parts3D || parts3D.length === 0) return "";

  return `
    <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
      <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Component Variants</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        ${parts3D
          .map(
            (imgPath, i) => `
          <div class="bg-clinical-gray rounded-xl p-3 aspect-square flex items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all group" onclick="window.openLightbox('${imgPath}', '${productName} - Variant ${
              i + 1
            }')">
            <img src="${imgPath}" alt="${productName} variant ${
              i + 1
            }" class="w-full h-full object-contain" loading="lazy" />
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
};

/**
 * Clinical information section
 * @param {Object} product - Product object
 * @returns {string} HTML string
 */
export const ClinicalInfoSection = (product) => {
  const sections = [];

  if (product.clinicalUses && product.clinicalUses.length > 0) {
    sections.push(`
      <div class="space-y-3">
        <h4 class="font-heading text-lg font-semibold text-primary">Clinical Uses</h4>
        ${IconList(product.clinicalUses, "→")}
      </div>
    `);
  }

  if (product.whenToUse && product.whenToUse.length > 0) {
    sections.push(`
      <div class="space-y-3">
        <h4 class="font-heading text-lg font-semibold text-primary">When to Use</h4>
        ${IconList(product.whenToUse, "→")}
      </div>
    `);
  }

  if (product.uses && product.uses.length > 0) {
    sections.push(`
      <div class="space-y-3">
        <h4 class="font-heading text-lg font-semibold text-primary">Uses</h4>
        ${IconList(product.uses, "→")}
      </div>
    `);
  }

  if (product.advantages && product.advantages.length > 0) {
    sections.push(`
      <div class="space-y-3">
        <h4 class="font-heading text-lg font-semibold text-primary">Advantages</h4>
        ${IconList(product.advantages, "✓")}
      </div>
    `);
  }

  if (product.limitations && product.limitations.length > 0) {
    sections.push(`
      <div class="space-y-3">
        <h4 class="font-heading text-lg font-semibold text-red-500">Considerations</h4>
        ${IconList(product.limitations, "⚠")}
      </div>
    `);
  }

  if (sections.length === 0) {
    // Default clinical info
    return `
      <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
        <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Clinical Applications</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <h4 class="font-heading text-lg font-semibold text-primary">Ideal For:</h4>
            <ul class="space-y-2 text-charcoal">
              <li class="flex items-start gap-2"><span class="text-primary">→</span><span>Immediate implant placement</span></li>
              <li class="flex items-start gap-2"><span class="text-primary">→</span><span>Soft bone (Type III/IV)</span></li>
              <li class="flex items-start gap-2"><span class="text-primary">→</span><span>Narrow or underprepared osteotomies</span></li>
            </ul>
          </div>
          <div class="space-y-3">
            <h4 class="font-heading text-lg font-semibold text-primary">Benefits:</h4>
            <ul class="space-y-2 text-charcoal">
              <li class="flex items-start gap-2"><span class="text-primary">→</span><span>Reduced surgical trauma</span></li>
              <li class="flex items-start gap-2"><span class="text-primary">→</span><span>Enhanced primary stability</span></li>
              <li class="flex items-start gap-2"><span class="text-primary">→</span><span>Faster healing time</span></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
      <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Clinical Information</h3>
      <div class="grid md:grid-cols-2 gap-6">
        ${sections.join("")}
      </div>
    </div>
  `;
};

/**
 * Product image with lightbox
 * @param {string} productId - Product ID
 * @param {string} productName - Product name
 * @returns {string} HTML string
 */
export const ProductImage = (productId, productName) => {
  const imageSrc = getProductImage(productId);
  const escapedName = productName.replace(/'/g, "\\'");

  return `
    <div class="bg-white border border-silver rounded-2xl p-4 flex items-center justify-center aspect-square shadow-lg overflow-hidden relative group cursor-pointer" onclick="window.openLightbox('${imageSrc}', '${escapedName}')">
      <img src="${imageSrc}" alt="${productName}" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${DEFAULT_PRODUCT_IMAGE}'" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
        <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
        </div>
      </div>
    </div>
  `;
};

/**
 * Product action buttons
 * @param {string} productName - Product name
 * @param {string} productId - Product ID
 * @returns {string} HTML string
 */
export const ProductActions = (productName, productId) => {
  const escapedName = productName.replace(/'/g, "\\'");

  return `
    <div class="flex gap-4">
      <button onclick="window.openQuoteModal('${escapedName}', '${productId}')" class="flex-1 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all cursor-pointer">
        Request Quote
      </button>
      <button disabled class="px-8 py-4 bg-gray-300 border border-gray-400 text-gray-500 font-heading font-semibold rounded-lg cursor-not-allowed opacity-60">
        Download PDF
      </button>
    </div>
  `;
};
