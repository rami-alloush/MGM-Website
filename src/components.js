import { products } from "./data/products.js";

// Helper to create elements
const createElement = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

export const Header = () => {
  // Logic to update header active states or structure if needed dynamically
  // For now, the header is static in index.html, but we might want to render it here later
  // to support dynamic submenus better.
  return null;
};

export const HomePage = () => {
  const section = createElement("section", "hero-section");
  section.style.backgroundImage = "url('/assets/images/hero-bg.jpg')";
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundBlendMode = "overlay";
  section.style.backgroundColor = "rgba(10, 14, 23, 0.7)"; // Darken the image

  section.innerHTML = `
    <div class="hero-content">
      <h1>
        The Future of
        <br>
        <span class="highlight">Dental Implantology</span>
      </h1>
      <p>Precision engineering meets biological excellence. Experience the M-Pure Surface difference.</p>
      <div class="hero-buttons">
        <a href="#/products" class="primary-btn">Explore Implants</a>
        <a href="#/about" class="secondary-btn">Learn More</a>
      </div>
    </div>
  `;

  // Trigger animations if needed
  setTimeout(() => {
    section
      .querySelectorAll(".hero-content")
      .forEach((el) => el.classList.add("visible"));
  }, 100);

  return section;
};

export const AboutPage = () => {
  const section = createElement("section", "content-section");
  section.style.backgroundImage = "url('/assets/images/about-bg.jpg')";
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundBlendMode = "overlay";
  section.style.backgroundColor = "rgba(10, 14, 23, 0.85)";

  section.innerHTML = `
      <div class="container">
        <h2>About MGM Implant</h2>
        <p>
          Since 2008, we have been dedicated to redefining dental implantology. Our commitment to quality and innovation ensures the highest success rates for patients worldwide.
        </p>
      </div>
    `;
  return section;
};

export const TechnologyPage = () => {
  const section = createElement("section", "content-section");
  section.innerHTML = `
        <div class="container">
          <h2>M-Pure Surface Technology</h2>
          <p>
            Our advanced surface treatment promotes faster bone healing and superior osseointegration. The micro-structured surface is designed for long-term stability.
          </p>
          <div class="tech-grid">
            <div class="tech-card">
              <h3>SLA Surface</h3>
              <p>Sandblasted, Large-grit, Acid-etched for optimal roughness.</p>
            </div>
            <div class="tech-card">
              <h3>Nano-Porous</h3>
              <p>Enhanced cellular attachment at the microscopic level.</p>
            </div>
            <div class="tech-card">
              <h3>Cleanliness</h3>
              <p>Rigorous cleaning processes ensure a contaminant-free surface.</p>
            </div>
          </div>
        </div>
    `;
  return section;
};

export const ContactPage = () => {
  const section = createElement("section", "content-section");
  section.innerHTML = `
        <div class="container">
          <h2>Get in Touch</h2>
          <p>Ready to elevate your practice? Contact us today.</p>
          <form class="contact-form">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit" class="primary-btn">Send Message</button>
          </form>
        </div>
    `;
  return section;
};

export const ProductsLandingPage = () => {
  const section = createElement("section", "content-section");
  let categoriesHtml = "";

  Object.entries(products).forEach(([key, category]) => {
    categoriesHtml += `
            <a href="#/products/${key}" class="product-category-card">
                <h3>${category.title}</h3>
                <p>Explore our range of ${category.title}</p>
            </a>
        `;
  });

  section.innerHTML = `
        <div class="container">
            <h2>Our Products</h2>
            <p>Comprehensive solutions for every clinical scenario.</p>
            <div class="product-grid">
                ${categoriesHtml}
            </div>
        </div>
    `;
  return section;
};

export const ProductListPage = (categoryKey) => {
  const category = products[categoryKey];
  if (!category) return createElement("div", "error", "Category not found");

  const section = createElement("section", "content-section");
  let contentHtml = "";

  if (category.subcategories) {
    // Handle nested categories (Prosthetics, Lab)
    category.subcategories.forEach((sub) => {
      contentHtml += `
                <div class="subcategory-block">
                    <h3>${sub.title}</h3>
                    <div class="product-list-grid">
                        ${sub.items
                          .map(
                            (item) => `
                            <div class="product-card">
                                <div class="product-image-placeholder"></div>
                                <h4>${item.name}</h4>
                                <a href="#/product/${item.id}" class="view-details-btn">View Details</a>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;
    });
  } else {
    // Flat list (Implants, Surgical, etc.)
    contentHtml += `
            <div class="product-list-grid">
                ${category.items
                  .map(
                    (item) => `
                    <div class="product-card">
                        <div class="product-image-placeholder"></div>
                        <h4>${item.name}</h4>
                        <p>${item.description || ""}</p>
                        <a href="#/product/${
                          item.id
                        }" class="view-details-btn">View Details</a>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
  }

  section.innerHTML = `
        <div class="container">
            <div class="breadcrumb">
                <a href="#/products">Products</a> > <span>${category.title}</span>
            </div>
            <h2>${category.title}</h2>
            ${contentHtml}
        </div>
    `;
  return section;
};

export const ProductDetailPage = (productId) => {
  // Find product in flat search
  let product = null;
  let categoryTitle = "";

  for (const [catKey, catVal] of Object.entries(products)) {
    if (catVal.items) {
      const found = catVal.items.find((p) => p.id === productId);
      if (found) {
        product = found;
        categoryTitle = catVal.title;
        break;
      }
    }
    if (catVal.subcategories) {
      for (const sub of catVal.subcategories) {
        const found = sub.items.find((p) => p.id === productId);
        if (found) {
          product = found;
          categoryTitle = catVal.title; // Or sub.title
          break;
        }
      }
    }
    if (product) break;
  }

  if (!product) return createElement("div", "error", "Product not found");

  const section = createElement(
    "section",
    "content-section product-detail-section"
  );
  section.innerHTML = `
        <div class="container">
             <div class="breadcrumb">
                <a href="#/products">Products</a> > <span>${categoryTitle}</span> > <span>${
    product.name
  }</span>
            </div>
            <div class="product-detail-layout">
                <div class="product-detail-image">
                    <div class="large-placeholder"></div>
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <p class="description">${
                      product.description ||
                      "High-quality precision component designed for optimal performance."
                    }</p>
                    
                    <div class="specs">
                        <h3>Specifications</h3>
                        <ul>
                            <li>Material: Titanium Grade 5</li>
                            <li>Surface: M-Pure</li>
                            <li>Connection: Hexagonal</li>
                        </ul>
                    </div>
                    
                    <button class="primary-btn">Request Quote</button>
                </div>
            </div>
        </div>
    `;
  return section;
};
