import {
  getProductImage,
  DEFAULT_PRODUCT_IMAGE,
} from "../../data/productImages.js";

/**
 * Smart Design feature card
 * @param {Object} feature
 * @param {string} feature.id - Feature ID
 * @param {string} feature.name - Feature name
 * @param {string} [feature.description] - Feature description
 * @param {Array} [feature.features] - Feature list
 * @param {Array} [feature.specifications] - Specifications list
 * @returns {string} HTML string
 */
export const SmartDesignCard = (feature) => {
  const imageSrc = getProductImage(feature.id);

  return `
    <div class="bg-white border border-silver rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all group">
      <div class="h-40 bg-clinical-gray overflow-hidden relative">
        <img src="${imageSrc}" alt="${
          feature.name
        }" class="w-full h-full object-contain p-2" onerror="this.onerror=null; this.src='${DEFAULT_PRODUCT_IMAGE}'" />
        <button class="absolute bottom-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-white" onclick="window.openLightbox('${imageSrc}', '${feature.name.replace(
          /'/g,
          "\\'",
        )}')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
        </button>
      </div>
      <div class="p-5">
        <h4 class="font-bold text-secondary mb-2">${feature.name}</h4>
        <p class="text-charcoal text-sm">${
          feature.description
            ? feature.description.substring(0, 120) + "..."
            : ""
        }</p>
        ${
          feature.features
            ? `
          <ul class="mt-3 text-xs text-charcoal space-y-1">
            ${feature.features
              .slice(0, 3)
              .map(
                (f) =>
                  `<li class="flex items-start gap-1"><span class="text-primary">✓</span> ${
                    f.split(" - ")[0]
                  }</li>`,
              )
              .join("")}
          </ul>
        `
            : ""
        }
        ${
          feature.specifications
            ? `
          <ul class="mt-3 text-xs text-charcoal space-y-1">
            ${feature.specifications
              .slice(0, 3)
              .map(
                (s) =>
                  `<li class="flex items-start gap-1"><span class="text-primary">✓</span> ${
                    s.split(" - ")[0]
                  }</li>`,
              )
              .join("")}
          </ul>
        `
            : ""
        }
      </div>
    </div>
  `;
};

/**
 * Smart Design features section
 * @param {Array} features - Array of feature objects
 * @returns {string} HTML string
 */
export const SmartDesignSection = (features) => {
  if (!features || features.length === 0) return "";

  return `
    <div class="mb-16">
      <h3 class="font-heading text-3xl font-bold text-secondary mb-6 pb-4 border-b border-silver">Smart Design Technology</h3>
      <p class="text-charcoal mb-8">Our implants feature 6 innovative Smart Design technologies for optimal clinical outcomes.</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${features.map((feature) => SmartDesignCard(feature)).join("")}
      </div>
    </div>
  `;
};

/**
 * USP (Unique Selling Proposition) grid item
 * @param {Object} options
 * @param {string} options.icon - Emoji icon
 * @param {string} options.title - Item title
 * @param {string} options.description - Item description
 * @param {string} [options.href] - Optional link URL
 * @returns {string} HTML string
 */
export const USPItem = ({ icon, title, description, href }) => {
  const content = `
    <div class="space-y-4 p-6 rounded-2xl hover:bg-clinical-gray transition-colors ${href ? "cursor-pointer" : ""}">
      <div class="w-16 h-16 mx-auto bg-clinical-gray rounded-full flex items-center justify-center text-3xl text-accent">
        ${icon}
      </div>
      <h3 class="font-bold text-xl text-secondary ${href ? "group-hover:text-primary" : ""}">${title}</h3>
      <p class="text-charcoal">${description}</p>
    </div>
  `;

  if (href) {
    return `<a href="${href}" class="block group">${content}</a>`;
  }
  return content;
};

/**
 * Stats counter item
 * @param {Object} options
 * @param {string|number} options.target - Target value
 * @param {string} [options.suffix] - Value suffix
 * @param {boolean} [options.decimal] - Whether value is decimal
 * @param {string} options.label - Stat label
 * @param {number} [options.delay] - Animation delay in ms
 * @returns {string} HTML string
 */
export const StatItem = ({
  target,
  suffix = "",
  decimal = false,
  label,
  delay = 0,
}) => {
  return `
    <div class="space-y-2 stat-item opacity-0 translate-y-4 transition-all duration-700" style="transition-delay: ${delay}ms">
      <div class="text-7xl font-bold text-accent font-heading">
        <span class="counter" data-target="${target}" data-suffix="${suffix}" ${
          decimal ? 'data-decimal="true"' : ""
        }>0</span>
      </div>
      <div class="text-xl text-silver uppercase tracking-widest">${label}</div>
    </div>
  `;
};

/**
 * Core program card
 * @param {Object} options
 * @param {string} options.icon - Emoji icon
 * @param {string} options.title - Program title
 * @param {string} options.description - Program description
 * @returns {string} HTML string
 */
export const CoreProgramCard = ({ icon, image, title, description, link }) => {
  const visual = image
    ? `<div class="h-56 mb-6 overflow-hidden rounded-xl bg-white p-8 flex items-center justify-center border border-silver/20 shadow-sm">
         <img src="${image}" alt="${title}" class="w-full h-full object-contain transition-all duration-500 group-hover:grayscale" />
       </div>`
    : `<div class="w-16 h-16 mb-4 text-primary">${icon}</div>`;

  const content = `
    <div class="bg-clinical-gray border border-silver p-6 rounded-xl hover:border-primary transition-all h-full group hover:shadow-lg">
      ${visual}
      <h4 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">${title}</h4>
      <p class="text-charcoal text-sm">${description}</p>
    </div>
  `;

  if (link) {
    return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer">${content}</a>`;
  }
  return content;
};

/**
 * Technology feature card with icon
 * @param {Object} options
 * @param {string} options.icon - Emoji icon
 * @param {string} options.title - Feature title
 * @param {string} options.description - Feature description
 * @param {Array<string>} options.bullets - Bullet points
 * @param {boolean} [options.highlighted] - Whether card is highlighted
 * @returns {string} HTML string
 */
export const TechFeatureCard = ({
  icon,
  title,
  description,
  bullets,
  highlighted = false,
}) => {
  if (highlighted) {
    return `
      <div class="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6 hover:shadow-lg transition-all">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">${icon}</div>
          <div>
            <h4 class="font-bold text-white text-lg mb-2">${title}</h4>
            <p class="text-white/90 text-sm mb-2">${description}</p>
            <ul class="text-xs text-white/80 space-y-1">
              ${bullets.map((b) => `<li>• ${b}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="bg-white border border-silver rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">${icon}</div>
        <div>
          <h4 class="font-bold text-secondary text-lg mb-2">${title}</h4>
          <p class="text-charcoal text-sm mb-2">${description}</p>
          <ul class="text-xs text-charcoal space-y-1">
            ${bullets.map((b) => `<li>• ${b}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
};
