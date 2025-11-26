import {
  getProductImage,
  DEFAULT_PRODUCT_IMAGE,
} from "../../data/productImages.js";

/**
 * Product card component for grid displays
 * @param {Object} item - Product item
 * @param {string} item.id - Product ID
 * @param {string} item.name - Product name
 * @param {string} [item.description] - Product description
 * @param {Array} [item.variants] - Product variants
 * @param {Array} [item.materials] - Product materials
 * @param {Array} [item.features] - Product features
 * @param {Array} [item.clinicalUses] - Clinical uses
 * @returns {string} HTML string
 */
export const ProductCard = (item) => {
  const imageSrc = getProductImage(item.id);

  return `
    <a href="#/product/${
      item.id
    }" class="group bg-white border border-silver rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all transform hover:-translate-y-1">
      <div class="h-40 bg-clinical-gray rounded-lg mb-4 overflow-hidden relative">
        <img src="${imageSrc}" alt="${
    item.name
  }" class="w-full h-full object-contain p-2" onerror="this.onerror=null; this.src='${DEFAULT_PRODUCT_IMAGE}'" />
        <button class="absolute bottom-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-white" onclick="event.preventDefault(); event.stopPropagation(); window.openLightbox('${imageSrc}', '${item.name.replace(
    /'/g,
    "\\'"
  )}')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
        </button>
      </div>
      <h4 class="font-heading text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">${
        item.name
      }</h4>
      <p class="text-charcoal text-sm mb-3 line-clamp-2">${
        item.description ? item.description.substring(0, 100) + "..." : ""
      }</p>
      ${
        item.variants
          ? `<p class="text-xs text-charcoal mb-2"><strong>${item.variants.length}</strong> variants available</p>`
          : ""
      }
      ${
        item.materials
          ? `<p class="text-xs text-charcoal mb-2">Materials: ${item.materials
              .slice(0, 2)
              .join(", ")}</p>`
          : ""
      }
      ${
        item.clinicalUses
          ? `<p class="text-xs text-charcoal mb-2">Clinical uses: ${item.clinicalUses.length} indications</p>`
          : ""
      }
      ${
        item.features
          ? `
        <ul class="text-xs text-charcoal space-y-1 mb-3">
          ${item.features
            .slice(0, 2)
            .map(
              (f) =>
                `<li class="flex items-start gap-1"><span class="text-primary text-xs">✓</span> ${
                  f.split(":")[0]
                }</li>`
            )
            .join("")}
        </ul>
      `
          : ""
      }
      <div class="flex items-center text-primary text-sm font-semibold mt-4">
        <span>View Details</span>
        <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </a>
  `;
};

/**
 * Category card component for products landing page
 * @param {Object} options
 * @param {string} options.key - Category key
 * @param {string} options.title - Category title
 * @param {string} [options.description] - Category description
 * @param {string} options.icon - Emoji icon
 * @param {string} options.imageSrc - Image source
 * @returns {string} HTML string
 */
export const CategoryCard = ({ key, title, description, icon, imageSrc }) => {
  return `
    <a href="#/products/${key}" class="group bg-white border border-silver rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all flex flex-col md:flex-row">
      <div class="w-full md:w-64 h-64 md:h-auto bg-clinical-gray overflow-hidden flex-shrink-0 relative">
        <img src="${imageSrc}" alt="${title}" class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" onerror="this.parentElement.innerHTML='<div class=\\'flex items-center justify-center h-full text-6xl text-primary\\'>${icon}</div>'" />
        <button class="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white" onclick="event.preventDefault(); event.stopPropagation(); window.openLightbox('${imageSrc}', '${title}')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
        </button>
      </div>
      <div class="p-6 flex flex-col justify-center flex-grow">
        <h3 class="font-heading text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">${title}</h3>
        <p class="text-charcoal mb-4">${
          description || "Explore our range of " + title
        }</p>
        <div class="flex items-center text-primary font-semibold">
          <span>View Products</span>
          <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </a>
  `;
};

/**
 * Feature card for homepage product categories
 * @param {Object} options
 * @param {string} options.href - Link href
 * @param {string} options.icon - Emoji icon
 * @param {string} options.title - Card title
 * @param {string} options.description - Card description
 * @returns {string} HTML string
 */
export const FeatureCard = ({ href, icon, title, description }) => {
  return `
    <a href="${href}" class="group relative overflow-hidden rounded-2xl bg-clinical-gray hover:bg-white border border-silver hover:border-primary hover:shadow-2xl transition-all duration-300 p-10">
      <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <span class="text-9xl">${icon}</span>
      </div>
      <div class="relative z-10 space-y-6">
        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-primary border border-silver">
          ${icon}
        </div>
        <h3 class="text-3xl font-bold text-secondary group-hover:text-primary transition-colors">${title}</h3>
        <p class="text-charcoal text-lg">${description}</p>
        <div class="flex items-center text-primary font-semibold mt-4">
          <span>View Catalog</span>
          <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </a>
  `;
};

/**
 * Info card with icon
 * @param {Object} options
 * @param {string} options.icon - Emoji icon
 * @param {string} options.title - Card title
 * @param {string} options.description - Card description
 * @param {string} [options.className] - Additional classes
 * @returns {string} HTML string
 */
export const InfoCard = ({ icon, title, description, className = "" }) => {
  return `
    <div class="bg-white border border-silver rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg ${className}">
      <h4 class="font-bold text-secondary mb-2">${title}</h4>
      <p class="text-charcoal text-sm">${description}</p>
    </div>
  `;
};

/**
 * News/Media card
 * @param {Object} options
 * @param {string} options.imageSrc - Image source
 * @param {string} options.imageAlt - Image alt text
 * @param {string} options.badge - Badge text
 * @param {string} options.badgeColor - Badge color class
 * @param {string} options.title - Card title
 * @param {string} options.description - Card description
 * @param {string} [options.href] - Link href
 * @param {boolean} [options.disabled] - Whether link is disabled
 * @returns {string} HTML string
 */
export const NewsCard = ({
  imageSrc,
  imageAlt,
  badge,
  badgeColor,
  title,
  description,
  href = "#",
  disabled = true,
}) => {
  const linkClass = disabled
    ? "pointer-events-none opacity-50 cursor-not-allowed"
    : "hover:text-primary-hover";

  return `
    <div class="bg-white rounded-xl overflow-hidden border border-silver hover:border-primary transition-all group shadow-sm hover:shadow-lg">
      <div class="h-48 bg-gray-200 relative overflow-hidden">
        <img src="${imageSrc}" alt="${imageAlt}" class="w-full h-full object-cover">
        <div class="absolute bottom-4 left-4 ${badgeColor} text-xs font-bold px-2 py-1 rounded">${badge}</div>
      </div>
      <div class="p-6">
        <h4 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">${title}</h4>
        <p class="text-charcoal text-sm mb-4">${description}</p>
        <a href="${href}" class="text-primary text-sm font-semibold ${linkClass}">Read More →</a>
      </div>
    </div>
  `;
};
