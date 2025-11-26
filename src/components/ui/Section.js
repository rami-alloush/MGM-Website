/**
 * Page section wrapper
 * @param {Object} options
 * @param {string} [options.className=""] - Additional classes
 * @param {string} options.content - Section content HTML
 * @returns {string} HTML string
 */
export const Section = ({ className = "", content }) => {
  return `
    <section class="${className}">
      ${content}
    </section>
  `;
};

/**
 * Page header with title and description
 * @param {Object} options
 * @param {string} options.title - Page title
 * @param {string} [options.description] - Page description
 * @param {string} [options.className=""] - Additional classes
 * @returns {string} HTML string
 */
export const PageHeader = ({ title, description, className = "" }) => {
  return `
    <div class="text-center space-y-6 ${className}">
      <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">${title}</h2>
      ${
        description
          ? `<p class="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">${description}</p>`
          : ""
      }
    </div>
  `;
};

/**
 * Section header with optional border
 * @param {Object} options
 * @param {string} options.title - Section title
 * @param {boolean} [options.border=false] - Show bottom border
 * @param {string} [options.className=""] - Additional classes
 * @returns {string} HTML string
 */
export const SectionHeader = ({ title, border = false, className = "" }) => {
  const borderClass = border ? "pb-4 border-b border-silver" : "";
  return `
    <h3 class="font-heading text-3xl font-bold text-secondary mb-6 ${borderClass} ${className}">${title}</h3>
  `;
};

/**
 * Dark section with pattern background
 * @param {Object} options
 * @param {string} options.content - Section content HTML
 * @param {string} [options.className=""] - Additional classes
 * @returns {string} HTML string
 */
export const DarkSection = ({ content, className = "" }) => {
  return `
    <div class="bg-secondary text-white rounded-2xl p-12 relative overflow-hidden ${className}">
      <div class="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
      <div class="relative z-10">
        ${content}
      </div>
    </div>
  `;
};

/**
 * Card container/wrapper
 * @param {Object} options
 * @param {string} options.content - Card content HTML
 * @param {string} [options.className=""] - Additional classes
 * @returns {string} HTML string
 */
export const CardContainer = ({ content, className = "" }) => {
  return `
    <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg ${className}">
      ${content}
    </div>
  `;
};

/**
 * Clinical gray background container
 * @param {Object} options
 * @param {string} options.content - Container content HTML
 * @param {string} [options.className=""] - Additional classes
 * @returns {string} HTML string
 */
export const GrayContainer = ({ content, className = "" }) => {
  return `
    <div class="bg-clinical-gray rounded-2xl p-10 ${className}">
      ${content}
    </div>
  `;
};
