// Helper to create elements
export const createElement = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

// Helper for fade-in animation
export const animateSection = (section) => {
  const content = section.firstElementChild;
  if (content) {
    content.classList.add(
      "opacity-0",
      "transform",
      "translate-y-4",
      "transition-all",
      "duration-1000"
    );
    setTimeout(() => {
      content.classList.remove("opacity-0", "translate-y-4");
    }, 100);
  }
};

// Helper to render list items
export const renderList = (items, icon = "✓") =>
  items
    ? items
        .map(
          (item) => `
    <li class="flex items-start gap-3 text-charcoal">
      <span class="text-primary">${icon}</span>
      <div>${item}</div>
    </li>
  `
        )
        .join("")
    : "";
