import { products } from "./data/products.js";

// Helper to create elements
const createElement = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

// Helper for fade-in animation
const animateSection = (section) => {
  // Add initial state classes if not present
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

export const Header = () => {
  return null;
};

export const HomePage = () => {
  const section = createElement(
    "section",
    "relative min-h-screen flex items-center justify-center px-8 py-24"
  );
  section.style.backgroundImage = "url('/assets/images/hero-bg.jpg')";
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundBlendMode = "overlay";
  section.style.backgroundColor = "rgba(10, 14, 23, 0.7)";

  section.innerHTML = `
    <div class="max-w-4xl mx-auto text-center space-y-8" id="hero-content">
      <h1 class="font-heading text-6xl md:text-7xl font-bold text-white leading-tight">
        The Future of
        <br>
        <span class="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Dental Implantology</span>
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Precision engineering meets biological excellence. Experience the M-Pure Surface difference with MGM Implant - your trusted partner since 2008.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
          <div class="text-cyan-400 text-4xl mb-3">✓</div>
          <h3 class="font-heading text-white font-bold mb-2">100% Biocompatible</h3>
          <p class="text-gray-400 text-sm">Safe for the human body with natural integration</p>
        </div>
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
          <div class="text-cyan-400 text-4xl mb-3">⚡</div>
          <h3 class="font-heading text-white font-bold mb-2">M-Pure Surface</h3>
          <p class="text-gray-400 text-sm">Advanced surface for faster bone healing</p>
        </div>
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
          <div class="text-cyan-400 text-4xl mb-3">🏆</div>
          <h3 class="font-heading text-white font-bold mb-2">Premium Quality</h3>
          <p class="text-gray-400 text-sm">World-class quality at competitive prices</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center mt-12">
        <a href="#/products" class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all">
          Explore Products
        </a>
        <a href="#/about" class="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-heading font-semibold rounded-full hover:bg-white/20 transition-all">
          Learn More
        </a>
      </div>
    </div>
  `;

  animateSection(section);
  return section;
};

export const AboutPage = () => {
  const section = createElement("section", "min-h-screen py-24 px-8");
  section.style.backgroundImage = "url('/assets/images/about-bg.jpg')";
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundBlendMode = "overlay";
  section.style.backgroundColor = "rgba(10, 14, 23, 0.9)";

  section.innerHTML = `
      <div class="max-w-6xl mx-auto space-y-16">
        <div class="text-center space-y-4">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">About MGM Implant</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Since 2008, we have been dedicated to redefining dental implantology through innovation, quality, and continuous improvement.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-4">
            <div class="text-cyan-400 text-5xl mb-4">🎯</div>
            <h3 class="font-heading text-2xl font-bold text-white">Our Mission</h3>
            <p class="text-gray-300 leading-relaxed">
              To provide world-class dental implant solutions that combine cutting-edge technology with biological excellence, ensuring the highest success rates for patients worldwide.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-4">
            <div class="text-cyan-400 text-5xl mb-4">💎</div>
            <h3 class="font-heading text-2xl font-bold text-white">Our Values</h3>
            <ul class="text-gray-300 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-cyan-400">•</span>
                <span>Quality First - 100% biocompatible materials</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cyan-400">•</span>
                <span>Innovation - Constantly upgrading technology</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cyan-400">•</span>
                <span>Sustainability - Eco-friendly practices</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-12">
          <h3 class="font-heading text-3xl font-bold text-white mb-8 text-center">Why Choose MGM?</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center space-y-3">
              <div class="text-4xl mb-3">🔬</div>
              <h4 class="font-heading text-xl font-bold text-white">Advanced Technology</h4>
              <p class="text-gray-300">M-Pure Surface Technology for superior osseointegration</p>
            </div>
            <div class="text-center space-y-3">
              <div class="text-4xl mb-3">🌍</div>
              <h4 class="font-heading text-xl font-bold text-white">Global Reach</h4>
              <p class="text-gray-300">Trusted by dental professionals worldwide</p>
            </div>
            <div class="text-center space-y-3">
              <div class="text-4xl mb-3">💰</div>
              <h4 class="font-heading text-xl font-bold text-white">Best Value</h4>
              <p class="text-gray-300">Premium quality at competitive pricing</p>
            </div>
          </div>
        </div>
      </div>
    `;

  animateSection(section);
  return section;
};

export const TechnologyPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-gradient-to-b from-gray-900 to-black"
  );

  section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center space-y-4">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">M-Pure Surface Technology</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced surface treatment promotes faster bone healing and superior osseointegration. The micro-structured surface is designed for long-term stability and success.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all transform hover:-translate-y-2">
            <div class="text-cyan-400 text-5xl mb-6">🔬</div>
            <h3 class="font-heading text-2xl font-bold text-cyan-400 mb-4">SLA Surface</h3>
            <p class="text-gray-300 mb-4">Sandblasted, Large-grit, Acid-etched for optimal roughness</p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Enhanced mechanical interlocking</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Increased surface area</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Faster bone integration</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
            <div class="text-purple-400 text-5xl mb-6">⚡</div>
            <h3 class="font-heading text-2xl font-bold text-purple-400 mb-4">Nano-Porous</h3>
            <p class="text-gray-300 mb-4">Enhanced cellular attachment at the microscopic level</p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">✓</span>
                <span>Optimal protein absorption</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">✓</span>
                <span>Rapid bone formation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">✓</span>
                <span>Enhanced stability</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-md border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all transform hover:-translate-y-2">
            <div class="text-green-400 text-5xl mb-6">✨</div>
            <h3 class="font-heading text-2xl font-bold text-green-400 mb-4">Cleanliness</h3>
            <p class="text-gray-300 mb-4">Rigorous cleaning processes ensure contaminant-free surface</p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Zero biological residues</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Controlled micro-roughness</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Maximum biocompatibility</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12">
          <h3 class="font-heading text-3xl font-bold text-white mb-8 text-center">Clinical Benefits</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h4 class="font-heading text-xl font-bold text-cyan-400">For Immediate Loading</h4>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start gap-3">
                  <span class="text-cyan-400 mt-1">→</span>
                  <span>Reduced risk of micro-movement</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-cyan-400 mt-1">→</span>
                  <span>Enhanced primary stability</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-cyan-400 mt-1">→</span>
                  <span>Faster osseointegration</span>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="font-heading text-xl font-bold text-cyan-400">For Challenging Cases</h4>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start gap-3">
                  <span class="text-cyan-400 mt-1">→</span>
                  <span>Ideal for soft bone (Type III/IV)</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-cyan-400 mt-1">→</span>
                  <span>Safe for proximity to nerve canals</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-cyan-400 mt-1">→</span>
                  <span>Suitable for immediate placement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

  animateSection(section);
  return section;
};

export const ContactPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-gradient-to-b from-gray-900 to-black"
  );
  section.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-12">
        <div class="text-center space-y-4">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">Get in Touch</h2>
          <p class="text-xl text-gray-300">Ready to elevate your practice? Contact us today.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 class="font-heading text-xl font-bold text-white mb-4">Contact Information</h3>
              <div class="space-y-4 text-gray-300">
                <div class="flex items-start gap-4">
                  <span class="text-cyan-400 text-2xl">📧</span>
                  <div>
                    <p class="font-semibold text-white">Email</p>
                    <p>info@mgmimplant.com</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-cyan-400 text-2xl">📱</span>
                  <div>
                    <p class="font-semibold text-white">WhatsApp</p>
                    <p>Direct support available</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-cyan-400 text-2xl">🌍</span>
                  <div>
                    <p class="font-semibold text-white">Global Reach</p>
                    <p>International agents worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6">
              <h3 class="font-heading text-xl font-bold text-white mb-4">Become a Partner</h3>
              <p class="text-gray-300 mb-4">Interested in distributing MGM Implant products?</p>
              <a href="#/distributor" class="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Partner With Us
              </a>
            </div>
          </div>

          <form class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
            <div class="space-y-2">
              <label class="text-white font-semibold">Name</label>
              <input type="text" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-white font-semibold">Email</label>
              <input type="email" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-white font-semibold">Message</label>
              <textarea rows="4" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"></textarea>
            </div>
            <button type="submit" class="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    `;

  animateSection(section);
  return section;
};

export const ProductsLandingPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-gradient-to-b from-gray-900 to-black"
  );
  let categoriesHtml = "";

  const categoryIcons = {
    implants: "🦷",
    prosthetics: "⚙️",
    lab: "🔬",
    surgical: "🔧",
    advanced: "🎯",
    devices: "💡",
    biomaterials: "🧬",
  };

  Object.entries(products).forEach(([key, category]) => {
    const icon = categoryIcons[key] || "📦";
    categoriesHtml += `
            <a href="#/products/${key}" class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
                <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform">${icon}</div>
                <h3 class="font-heading text-2xl font-bold text-white mb-3">${category.title}</h3>
                <p class="text-gray-400 mb-4">Explore our range of ${category.title}</p>
                <div class="flex items-center text-cyan-400 font-semibold">
                  <span>View Products</span>
                  <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
            </a>
        `;
  });

  section.innerHTML = `
        <div class="max-w-7xl mx-auto space-y-16">
            <div class="text-center space-y-4">
              <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">Our Products</h2>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive solutions for every clinical scenario. From implants to advanced surgical kits, we have everything you need.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${categoriesHtml}
            </div>
        </div>
    `;

  animateSection(section);
  return section;
};

export const ProductListPage = (categoryKey) => {
  const category = products[categoryKey];
  if (!category) {
    const errorDiv = createElement(
      "div",
      "min-h-screen flex items-center justify-center text-white text-2xl"
    );
    errorDiv.textContent = "Category not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-gradient-to-b from-gray-900 to-black"
  );
  let contentHtml = "";

  if (category.subcategories) {
    category.subcategories.forEach((sub) => {
      contentHtml += `
                <div class="mb-12">
                    <h3 class="font-heading text-3xl font-bold text-white mb-6 pb-4 border-b border-white/20">${
                      sub.title
                    }</h3>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${sub.items
                          .map(
                            (item) => `
                            <a href="#/product/${item.id}" class="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
                                <div class="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center text-4xl">
                                  🦷
                                </div>
                                <h4 class="font-heading text-lg font-bold text-white mb-2">${item.name}</h4>
                                <div class="flex items-center text-cyan-400 text-sm font-semibold mt-4">
                                  <span>View Details</span>
                                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </a>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;
    });
  } else {
    contentHtml += `
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${category.items
                  .map(
                    (item) => `
                    <a href="#/product/${
                      item.id
                    }" class="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
                        <div class="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center text-4xl">
                          🦷
                        </div>
                        <h4 class="font-heading text-lg font-bold text-white mb-2">${
                          item.name
                        }</h4>
                        <p class="text-gray-400 text-sm mb-4">${
                          item.description || ""
                        }</p>
                        <div class="flex items-center text-cyan-400 text-sm font-semibold">
                          <span>View Details</span>
                          <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </a>
                `
                  )
                  .join("")}
            </div>
        `;
  }

  section.innerHTML = `
        <div class="max-w-7xl mx-auto space-y-12">
            <div>
              <div class="text-sm text-gray-400 mb-4">
                  <a href="#/products" class="hover:text-cyan-400 transition-colors">Products</a> 
                  <span class="mx-2">></span> 
                  <span class="text-white">${category.title}</span>
              </div>
              <h2 class="font-heading text-5xl font-bold text-white mb-4">${category.title}</h2>
            </div>
            ${contentHtml}
        </div>
    `;

  animateSection(section);
  return section;
};

export const ProductDetailPage = (productId) => {
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
          categoryTitle = catVal.title;
          break;
        }
      }
    }
    if (product) break;
  }

  if (!product) {
    const errorDiv = createElement(
      "div",
      "min-h-screen flex items-center justify-center text-white text-2xl"
    );
    errorDiv.textContent = "Product not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-gradient-to-b from-gray-900 to-black"
  );
  section.innerHTML = `
        <div class="max-w-7xl mx-auto space-y-12">
            <div class="text-sm text-gray-400 mb-4">
                <a href="#/products" class="hover:text-cyan-400 transition-colors">Products</a> 
                <span class="mx-2">></span> 
                <span class="hover:text-cyan-400 transition-colors">${categoryTitle}</span>
                <span class="mx-2">></span> 
                <span class="text-white">${product.name}</span>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-square">
                    <div class="text-9xl">🦷</div>
                </div>
                
                <div class="space-y-8">
                    <div>
                      <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-4">${
                        product.name
                      }</h2>
                      <p class="text-xl text-gray-300 leading-relaxed">
                          ${
                            product.description ||
                            "High-quality precision component designed for optimal performance and long-term success."
                          }
                      </p>
                    </div>
                    
                    <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                        <h3 class="font-heading text-2xl font-bold text-white mb-4">Specifications</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3 text-gray-300">
                              <span class="text-cyan-400">✓</span>
                              <div>
                                <span class="font-semibold text-white">Material:</span> Titanium Grade 5
                              </div>
                            </li>
                            <li class="flex items-start gap-3 text-gray-300">
                              <span class="text-cyan-400">✓</span>
                              <div>
                                <span class="font-semibold text-white">Surface:</span> M-Pure Technology
                              </div>
                            </li>
                            <li class="flex items-start gap-3 text-gray-300">
                              <span class="text-cyan-400">✓</span>
                              <div>
                                <span class="font-semibold text-white">Connection:</span> Internal Hexagonal/Morse Taper
                              </div>
                            </li>
                            <li class="flex items-start gap-3 text-gray-300">
                              <span class="text-cyan-400">✓</span>
                              <div>
                                <span class="font-semibold text-white">Biocompatibility:</span> 100% Safe
                              </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="flex gap-4">
                      <button class="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                          Request Quote
                      </button>
                      <button class="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-heading font-semibold rounded-lg hover:bg-white/20 transition-all">
                          Download PDF
                      </button>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8">
                <h3 class="font-heading text-2xl font-bold text-white mb-6">Clinical Applications</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-3">
                    <h4 class="font-heading text-lg font-semibold text-cyan-400">Ideal For:</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400">→</span>
                        <span>Immediate implant placement</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400">→</span>
                        <span>Soft bone (Type III/IV)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400">→</span>
                        <span>Narrow or underprepared osteotomies</span>
                      </li>
                    </ul>
                  </div>
                  <div class="space-y-3">
                    <h4 class="font-heading text-lg font-semibold text-cyan-400">Benefits:</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400">→</span>
                        <span>Reduced surgical trauma</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400">→</span>
                        <span>Enhanced primary stability</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400">→</span>
                        <span>Faster healing time</span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    `;

  animateSection(section);
  return section;
};
