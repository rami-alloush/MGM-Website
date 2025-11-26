/**
 * Render a list with icons
 * @param {Array<string>} items - List items
 * @param {string} [icon="✓"] - Icon to display
 * @returns {string} HTML string
 */
export const IconList = (items, icon = "✓") => {
  if (!items || items.length === 0) return "";

  return `
    <ul class="space-y-2">
      ${items
        .map(
          (item) => `
        <li class="flex items-start gap-3 text-charcoal">
          <span class="text-primary">${icon}</span>
          <div>${item}</div>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
};

/**
 * Numbered/ordered list
 * @param {Array<string>} items - List items
 * @returns {string} HTML string
 */
export const NumberedList = (items) => {
  if (!items || items.length === 0) return "";

  return `
    <ol class="space-y-3">
      ${items
        .map(
          (step, i) => `
        <li class="flex items-start gap-3 text-charcoal">
          <span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">${
            i + 1
          }</span>
          <div>${step.replace(/^\d+\.\s*/, "")}</div>
        </li>
      `
        )
        .join("")}
    </ol>
  `;
};

/**
 * Surgical protocol steps list
 * @param {Array<{step: string, description: string}>} steps - Protocol steps
 * @returns {string} HTML string
 */
export const ProtocolSteps = (steps) => {
  if (!steps || steps.length === 0) return "";

  return `
    <ol class="space-y-4">
      ${steps
        .map(
          (step, i) => `
        <li class="flex items-start gap-4 text-charcoal">
          <span class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">${
            i + 1
          }</span>
          <div>
            <h4 class="font-bold text-secondary">${step.step}</h4>
            <p class="text-sm text-charcoal">${step.description}</p>
          </div>
        </li>
      `
        )
        .join("")}
    </ol>
  `;
};

/**
 * Checkmark list for features
 * @param {Array<string>} items - List items
 * @returns {string} HTML string
 */
export const CheckList = (items) => {
  if (!items || items.length === 0) return "";

  return `
    <ul class="space-y-4 text-lg text-charcoal">
      ${items
        .map(
          (item) => `
        <li class="flex items-center gap-4">
          <span class="w-8 h-8 rounded-full bg-clinical-gray text-primary flex items-center justify-center font-bold">✓</span>
          ${item}
        </li>
      `
        )
        .join("")}
    </ul>
  `;
};

/**
 * Simple bullet list
 * @param {Array<string>} items - List items
 * @param {string} [className=""] - Additional classes
 * @returns {string} HTML string
 */
export const BulletList = (items, className = "") => {
  if (!items || items.length === 0) return "";

  return `
    <ul class="space-y-2 text-charcoal ${className}">
      ${items
        .map(
          (item) => `
        <li class="flex items-center gap-2">
          <span class="text-primary">✓</span>
          <span>${item}</span>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
};
