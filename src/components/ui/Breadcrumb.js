/**
 * Breadcrumb navigation component
 * @param {Array<{label: string, href?: string}>} items - Breadcrumb items
 * @returns {string} HTML string
 */
export const Breadcrumb = (items) => {
  return `
    <div class="text-sm text-charcoal mb-4">
      ${items
        .map((item, index) => {
          const isLast = index === items.length - 1;
          if (isLast) {
            return `<span class="text-secondary font-semibold">${item.label}</span>`;
          }
          return `<a href="${item.href}" class="hover:text-primary transition-colors">${item.label}</a>`;
        })
        .join('<span class="mx-2">›</span>')}
    </div>
  `;
};
