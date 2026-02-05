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

  // Check for Coming Soon Content (Biomaterials)
  if (category.comingSoonContent) {
    const section = createElement(
      "section",
      "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md",
    );
    const content = category.comingSoonContent;
    const breadcrumbItems = [
      { label: "Products", href: "#/products" },
      { label: category.title },
    ];

    section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-20">
        <div class="space-y-8">
           ${Breadcrumb(breadcrumbItems)}
           
           <!-- Hero -->
           <div class="space-y-6 max-w-4xl pt-8">
              <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">
                 ${content.heroTitle}
              </h1>
              <h2 class="text-2xl md:text-3xl font-medium text-primary">
                 ${content.heroSubtitle}
              </h2>
              <div class="text-charcoal text-lg md:text-xl leading-relaxed space-y-4 pt-4 border-l-4 border-primary/20 pl-6 md:pl-8">
                 ${content.heroDescription
                   .split("\n\n")
                   .map((p) => `<p>${p}</p>`)
                   .join("")}
              </div>
           </div>
        </div>

        <!-- What to Expect -->
        <div class="space-y-12 border-t border-silver/50 pt-16">
           <div class="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <div class="col-span-full mb-2">
                 <h3 class="font-heading text-3xl font-bold text-secondary">What to Expect</h3>
              </div>
              ${content.whatToExpect
                .map(
                  (item) => `
                 <div class="group hover:bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-silver/50">
                    <h4 class="font-bold text-secondary text-xl flex items-center mb-3">
                       <span class="w-2 h-2 rounded-full bg-primary mr-3 group-hover:scale-125 transition-transform"></span>
                       ${item.title}
                    </h4>
                    <p class="text-gray-600 leading-relaxed">${item.description}</p>
                 </div>
              `,
                )
                .join("")}
           </div>
        </div>

        <!-- Modern Practice -->
        <div class="bg-clinical-gray/30 rounded-3xl p-8 md:p-12 border border-silver/50">
           <div class="max-w-4xl">
              <h3 class="font-heading text-2xl md:text-3xl font-bold text-secondary mb-6">${
                content.modernPractice.title
              }</h3>
              <p class="text-lg md:text-xl text-charcoal leading-relaxed">
                 ${content.modernPractice.description}
              </p>
           </div>
        </div>

        <!-- Launching Soon -->
        <div class="text-center space-y-10 py-12">
            <div class="space-y-6">
               <h3 class="font-heading text-3xl font-bold text-secondary">${
                 content.launchingSoon.title
               }</h3>
               <div class="text-gray-600 text-lg max-w-2xl mx-auto space-y-2">
                   ${content.launchingSoon.description
                     .split("\n")
                     .map((l) => `<p>${l}</p>`)
                     .join("")}
               </div>
            </div>

            <div class="inline-flex flex-col items-center space-y-6 p-8 md:p-10 bg-primary/5 rounded-2xl border border-primary/10 max-w-xl mx-auto w-full">
               <div class="space-y-2">
                 <p class="font-bold text-secondary text-xl">${
                   content.launchingSoon.cta.highlight
                 }</p>
                 <p class="text-gray-600">${content.launchingSoon.cta.text}</p>
               </div>
               <a href="#/contact" class="px-10 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1">
                  Sign Up for Updates
               </a>
            </div>
        </div>
      </div>
    `;

    animateSection(section);
    return section;
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
