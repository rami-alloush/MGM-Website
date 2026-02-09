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
  Implant3DViewer,
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
  const category = products[categoryKey];

  let coreTechnologiesHtml = "";
  if (
    product &&
    product.id === "mgm" &&
    categoryKey === "implants" &&
    category &&
    category.smartDesignFeatures
  ) {
    const featuresWithImages = category.smartDesignFeatures.filter(
      (f) => f.image,
    );
    if (featuresWithImages.length > 0) {
      coreTechnologiesHtml = `
              <div class="space-y-24 border-t border-silver/50 pt-16">
                 <div class="text-center space-y-4">
                    <h3 class="font-heading text-3xl md:text-5xl font-bold text-secondary">Core Technologies</h3>
                    <p class="text-gray-600 text-lg max-w-2xl mx-auto">The innovation behind MGM's superior performance</p>
                 </div>
                 <div class="space-y-32">
                   ${featuresWithImages
                     .map(
                       (feature, index) => `
                     <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                       index % 2 === 1 ? "lg:flex-row-reverse" : ""
                     }">
                       <div class="flex-1 w-full groupPerspective">
                         <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4 border border-silver/30 transform transition-all duration-700 hover:rotate-1 hover:shadow-primary/20">
                            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img 
                              src="${feature.image}" 
                              alt="${feature.name}" 
                              class="w-full h-auto object-contain rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700 cursor-zoom-in"
                              onclick="window.openLightbox('${feature.image}', '${
                                feature.name
                              }')"
                            />
                         </div>
                       </div>
                       <div class="flex-1 space-y-8">
                         <div class="space-y-4">
                           <div class="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                           <h4 class="font-heading text-3xl md:text-4xl font-bold text-secondary leading-tight">${
                             feature.name
                           }</h4>
                         </div>
                         <p class="text-lg text-charcoal leading-relaxed opacity-90">${
                           feature.description
                         }</p>
                         ${
                           (
                             feature.features ||
                             feature.benefitsForDoctors ||
                             []
                           ).length > 0
                             ? `
                            <div class="bg-clinical-gray/50 rounded-2xl p-6 border border-silver/50">
                              <h5 class="text-sm font-bold text-secondary uppercase tracking-wider mb-4 opacity-70">Key Benefits</h5>
                              <ul class="space-y-3">
                                ${(
                                  feature.features ||
                                  feature.benefitsForDoctors ||
                                  []
                                )
                                  .slice(0, 4)
                                  .map(
                                    (f) => `
                                  <li class="flex items-start gap-3">
                                    <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                      </svg>
                                    </div>
                                    <span class="text-gray-700 font-medium">${
                                      typeof f === "string" ? f : f.title || f
                                    }</span>
                                  </li>
                                `,
                                  )
                                  .join("")}
                              </ul>
                            </div>
                           `
                             : ""
                         }
                         <a href="#/technology" class="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group/link">
                           <span>Explore Technical Details</span> 
                           <span class="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">→</span>
                         </a>
                       </div>
                     </div>
                   `,
                     )
                     .join("")}
                 </div>
              </div>
           `;
    }
  }

  if (!product) {
    const errorDiv = createElement(
      "div",
      "min-h-screen flex items-center justify-center text-secondary text-2xl",
    );
    errorDiv.textContent = "Product not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-8 bg-white/90 backdrop-blur-md",
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

  // MGM 3D Viewer Placeholder
  const mgmViewerHtml =
    product.id === "mgm"
      ? `
    <div class="mt-16 mb-16 space-y-8">
        <div class="text-center space-y-4">
            <h3 class="font-heading text-3xl md:text-4xl font-bold text-secondary">Interactive 3D Model</h3>
            <p class="text-charcoal text-lg">Explore the MGM Implant in 360° detail</p>
        </div>
        <div id="mgm-3d-viewer-container" class="max-w-5xl mx-auto h-[600px] shadow-2xl rounded-3xl overflow-hidden border border-silver/50 bg-gradient-to-b from-clinical-gray/20 to-white relative">
            <div class="absolute inset-0 flex items-center justify-center text-charcoal/40 font-heading pointer-events-none">
                Loading 3D Model...
            </div>
        </div>
    </div>
  `
      : "";

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
          
          ${ProductActions(
            product.name,
            product.id,
            product.pdfUrl,
            categoryKey !== "prosthetics",
          )}
        </div>
      </div>


      ${VariantsSection(product.variants)}

      ${mgmViewerHtml}

      ${coreTechnologiesHtml}

      ${Parts3DGallery(product.id, product.name)}

      ${ContentsSection(product.contents)}

      ${surgicalProtocolHtml}

      ${TypesSection(product.types)}

      ${ClinicalInfoSection(product)}

      ${howToUseHtml}

      ${PeripheralsSection(product.peripherals, product.accessories)}
    </div>
  `;

  // Initialize 3D Viewer for MGM
  if (product.id === "mgm") {
    setTimeout(() => {
      const container = section.querySelector("#mgm-3d-viewer-container");
      if (container) {
        container.innerHTML = ""; // Clear loading text
        const viewer = Implant3DViewer("mgm-implant-canvas");
        // Set 100% width/height on the viewer container
        viewer.style.width = "100%";
        viewer.style.height = "100%";
        container.appendChild(viewer);
      }
    }, 100);
  }

  animateSection(section);
  return section;
};
