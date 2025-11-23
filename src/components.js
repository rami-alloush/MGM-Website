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
  const container = createElement("div", "w-full overflow-x-hidden");

  // 1. HERO SECTION
  const heroSection = createElement(
    "section",
    "relative min-h-screen flex items-center px-8 py-32 bg-gray-50"
  );
  // Use a high-quality medical/clean background image
  heroSection.style.backgroundImage = "url('/assets/images/hero-bg.jpg')";
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";
  // Light overlay for text readability
  heroSection.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-0"></div>
    <div class="max-w-screen-2xl mx-auto w-full relative z-10">
      <div class="max-w-3xl space-y-8">
        <h1 class="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
          Precision. <br>
          Reliability. <br>
          <span class="text-cyan-600">Made in Germany.</span>
        </h1>
        <p class="text-2xl text-gray-600 max-w-xl leading-relaxed font-light">
          Redefining dental implantology with the M-Pure Surface technology. 
          Experience the perfect fusion of biological excellence and engineering precision.
        </p>
        
        <div class="flex flex-wrap gap-6 mt-12">
          <a href="#/products" class="px-10 py-5 bg-cyan-600 text-white text-lg font-heading font-semibold rounded-full hover:bg-cyan-700 shadow-xl shadow-cyan-600/20 transform hover:-translate-y-1 transition-all">
            Explore Solutions
          </a>
          <a href="#/about" class="px-10 py-5 bg-white text-gray-800 text-lg font-heading font-semibold rounded-full border border-gray-200 hover:border-cyan-600 hover:text-cyan-600 shadow-lg shadow-gray-200/50 transition-all">
            Our Philosophy
          </a>
        </div>
      </div>
    </div>
  `;

  // 2. INTRO & USPs
  const trustSection = createElement(
    "section",
    "py-20 bg-white border-b border-gray-100"
  );
  trustSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-heading font-bold text-gray-900 mb-4">Redefining Implantology</h2>
        <p class="text-gray-600 text-lg">
            MGM Implant combines German engineering precision with biological excellence to create solutions that last a lifetime.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-12 text-center">
        <div class="space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div class="w-16 h-16 mx-auto bg-cyan-100 rounded-full flex items-center justify-center text-3xl text-cyan-600">
                🛡️
            </div>
            <h3 class="font-bold text-xl text-gray-900">Uncompromised Quality</h3>
            <p class="text-gray-600">
                Made in Germany with premium-grade titanium and rigorous 100% quality control.
            </p>
        </div>
        <div class="space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div class="w-16 h-16 mx-auto bg-cyan-100 rounded-full flex items-center justify-center text-3xl text-cyan-600">
                🔬
            </div>
            <h3 class="font-bold text-xl text-gray-900">Advanced Technology</h3>
            <p class="text-gray-600">
                Featuring our proprietary M-Pure Surface for superior osseointegration and healing.
            </p>
        </div>
        <div class="space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div class="w-16 h-16 mx-auto bg-cyan-100 rounded-full flex items-center justify-center text-3xl text-cyan-600">
                🤝
            </div>
            <h3 class="font-bold text-xl text-gray-900">Lifetime Guarantee</h3>
            <p class="text-gray-600">
                We stand by our products with a 100% lifetime guarantee for your peace of mind.
            </p>
        </div>
      </div>
    </div>
  `;

  // 3. Z-PATTERN: ABOUT (Image Left, Text Right)
  const aboutSection = createElement("section", "py-32 bg-white");
  aboutSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-8">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="relative">
            <div class="absolute -inset-4 bg-cyan-100/50 rounded-3xl transform -rotate-2"></div>
            <img src="https://placehold.co/800x600/f3f4f6/cbd5e1?text=Precision+Manufacturing" alt="MGM Manufacturing" class="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]">
        </div>
        <div class="space-y-8">
            <h2 class="font-heading text-5xl font-bold text-gray-900">Engineering Excellence Since 2008</h2>
            <p class="text-xl text-gray-600 leading-relaxed">
                At MGM Implant, we don't just manufacture implants; we craft solutions for life. 
                Our state-of-the-art facility in Germany utilizes the most advanced CNC technology 
                to ensure every component meets the strictest quality standards.
            </p>
            <ul class="space-y-4 text-lg text-gray-700">
                <li class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">✓</span>
                    Strict Quality Control
                </li>
                <li class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">✓</span>
                    Innovative R&D Department
                </li>
                <li class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">✓</span>
                    Global Distribution Network
                </li>
            </ul>
            <a href="#/about" class="inline-block mt-4 text-cyan-600 font-semibold text-lg hover:text-cyan-700 transition-colors border-b-2 border-cyan-600 pb-1">
                Read Our Story
            </a>
        </div>
      </div>
    </div>
  `;

  // 4. STATS BLOCK
  const statsSection = createElement(
    "section",
    "py-24 bg-gray-900 text-white relative overflow-hidden"
  );
  statsSection.innerHTML = `
    <div class="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10"></div>
    <div class="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div class="grid md:grid-cols-3 gap-12 text-center">
            <div class="space-y-2">
                <div class="text-7xl font-bold text-cyan-400 font-heading">98.8%</div>
                <div class="text-xl text-gray-300 uppercase tracking-widest">Success Rate</div>
            </div>
            <div class="space-y-2">
                <div class="text-7xl font-bold text-cyan-400 font-heading">15+</div>
                <div class="text-xl text-gray-300 uppercase tracking-widest">Years of Innovation</div>
            </div>
            <div class="space-y-2">
                <div class="text-7xl font-bold text-cyan-400 font-heading">40+</div>
                <div class="text-xl text-gray-300 uppercase tracking-widest">Countries</div>
            </div>
        </div>
    </div>
  `;

  // 5. Z-PATTERN: TECHNOLOGY (Text Left, Image Right)
  const techSection = createElement("section", "py-32 bg-gray-50");
  techSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-8">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="space-y-8 order-2 lg:order-1">
            <h2 class="font-heading text-5xl font-bold text-gray-900">M-Pure Surface Technology</h2>
            <p class="text-xl text-gray-600 leading-relaxed">
                Faster healing. Stronger integration. Our proprietary M-Pure surface treatment 
                creates an optimal micro-structure for osseointegration, significantly reducing 
                healing time and ensuring long-term stability.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 class="font-bold text-gray-900 text-lg mb-2">Hydrophilic</h4>
                    <p class="text-gray-500">Enhanced blood contact for rapid initial healing.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 class="font-bold text-gray-900 text-lg mb-2">Ultra-Clean</h4>
                    <p class="text-gray-500">Free from manufacturing residues and contaminants.</p>
                </div>
            </div>
            <a href="#/technology" class="inline-block mt-4 text-cyan-600 font-semibold text-lg hover:text-cyan-700 transition-colors border-b-2 border-cyan-600 pb-1">
                Discover the Science
            </a>
        </div>
        <div class="relative order-1 lg:order-2">
            <div class="absolute -inset-4 bg-gray-200/50 rounded-3xl transform rotate-2"></div>
            <img src="https://placehold.co/800x600/e2e8f0/64748b?text=Surface+Microscopy" alt="M-Pure Surface" class="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]">
        </div>
      </div>
    </div>
  `;

  // 6. PRODUCT CATEGORY GRID
  const productSection = createElement("section", "py-32 bg-white");
  productSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="font-heading text-5xl font-bold text-gray-900 mb-6">Comprehensive Solutions</h2>
            <p class="text-xl text-gray-600">
                From standard cases to complex rehabilitations, our product portfolio covers every clinical indication.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <a href="#/products/implants" class="group relative overflow-hidden rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-cyan-100 hover:shadow-2xl transition-all duration-300 p-10">
                <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="text-9xl">🦷</span>
                </div>
                <div class="relative z-10 space-y-6">
                    <div class="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl text-cyan-600">
                        🦷
                    </div>
                    <h3 class="text-3xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Implants</h3>
                    <p class="text-gray-600 text-lg">
                        Bone-level and tissue-level implants designed for primary stability and aesthetic results.
                    </p>
                    <div class="flex items-center text-cyan-600 font-semibold mt-4">
                        <span>View Catalog</span>
                        <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
            </a>

            <!-- Card 2 -->
            <a href="#/products/prosthetics" class="group relative overflow-hidden rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-cyan-100 hover:shadow-2xl transition-all duration-300 p-10">
                <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="text-9xl">⚙️</span>
                </div>
                <div class="relative z-10 space-y-6">
                    <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl text-purple-600">
                        ⚙️
                    </div>
                    <h3 class="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Prosthetics</h3>
                    <p class="text-gray-600 text-lg">
                        A wide range of abutments and prosthetic components for cement and screw-retained restorations.
                    </p>
                    <div class="flex items-center text-purple-600 font-semibold mt-4">
                        <span>View Catalog</span>
                        <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
            </a>

            <!-- Card 3 -->
            <a href="#/products/surgical" class="group relative overflow-hidden rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-cyan-100 hover:shadow-2xl transition-all duration-300 p-10">
                <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="text-9xl">🔧</span>
                </div>
                <div class="relative z-10 space-y-6">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl text-blue-600">
                        🔧
                    </div>
                    <h3 class="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Surgical Kits</h3>
                    <p class="text-gray-600 text-lg">
                        Ergonomic and intuitive surgical kits designed to simplify your workflow and enhance precision.
                    </p>
                    <div class="flex items-center text-blue-600 font-semibold mt-4">
                        <span>View Catalog</span>
                        <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
  `;

  // Append all sections
  container.appendChild(heroSection);
  container.appendChild(trustSection);
  container.appendChild(aboutSection);
  container.appendChild(statsSection);
  container.appendChild(techSection);
  container.appendChild(productSection);

  animateSection(container);
  return container;
};

export const AboutPage = () => {
  const section = createElement("section", "min-h-screen py-24 px-8");
  section.style.backgroundImage = "url('/assets/images/about-bg.jpg')";
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundBlendMode = "overlay";
  section.style.backgroundColor = "rgba(10, 14, 23, 0.9)";

  section.innerHTML = `
      <div class="max-w-6xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">About MGM Implant</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            MGM IMPLANT has specialized in implantology since 2008, adopting the highest quality standards under the ISO 13485 quality management system. Based in Hilden and Aachen, we maintain a strong sales and service network worldwide.
          </p>
        </div>

        <!-- Vision & Mission -->
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
            <div class="text-cyan-400 text-5xl mb-4">🎯</div>
            <h3 class="font-heading text-3xl font-bold text-white">Vision & Mission</h3>
            <ul class="space-y-4 text-gray-300">
                <li class="flex gap-3">
                    <span class="text-cyan-400 font-bold">•</span>
                    <span><strong>Goal:</strong> Building smart, easy, and safe implants to facilitate the lives of patients and doctors.</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-cyan-400 font-bold">•</span>
                    <span><strong>History:</strong> Started in 2008 producing "smartest and easiest and best bone friendly implants".</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-cyan-400 font-bold">•</span>
                    <span><strong>Future:</strong> Changing industry standards by using matchless German manufacturers and creating a revolution in implant dentistry that is easier, safer, faster, and more economical.</span>
                </li>
            </ul>
          </div>

          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
            <div class="text-cyan-400 text-5xl mb-4">💼</div>
            <h3 class="font-heading text-3xl font-bold text-white">Our Portfolio</h3>
            <p class="text-gray-300 leading-relaxed">
                The portfolio offers solutions from single tooth to fully edentulous indications, including:
            </p>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Dental implant systems (MGM, MGM PLUS, MGM ONE)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                <span>High-precision individualized prosthetics</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Activator systems (MGM ACTIVE)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Digital solutions for treatment planning (MGM GUIDED)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Biomaterials</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Core Programs -->
        <div class="space-y-12">
            <h3 class="font-heading text-4xl font-bold text-white text-center">The 4 Core Programs</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/50 transition-all">
                    <div class="text-4xl mb-4">💡</div>
                    <h4 class="text-xl font-bold text-white mb-2">Innovate</h4>
                    <p class="text-gray-400 text-sm">Providing customers with the latest technologies via the R&D department and scientific team.</p>
                </div>
                <div class="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/50 transition-all">
                    <div class="text-4xl mb-4">📚</div>
                    <h4 class="text-xl font-bold text-white mb-2">Learn</h4>
                    <p class="text-gray-400 text-sm">Providing latest techniques and training support for better product usage.</p>
                </div>
                <div class="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/50 transition-all">
                    <div class="text-4xl mb-4">🌐</div>
                    <h4 class="text-xl font-bold text-white mb-2">Explore</h4>
                    <p class="text-gray-400 text-sm">Connecting with customers through exhibitions, scientific events, and congresses to understand their needs.</p>
                </div>
                <div class="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/50 transition-all">
                    <div class="text-4xl mb-4">🤝</div>
                    <h4 class="text-xl font-bold text-white mb-2">Practice</h4>
                    <p class="text-gray-400 text-sm">Allowing customers to share case challenges and clinical studies.</p>
                </div>
            </div>
        </div>

        <!-- Why Choose MGM Summary -->
        <div class="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-12">
          <h3 class="font-heading text-3xl font-bold text-white mb-8 text-center">Why Choose MGM?</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center space-y-3">
              <div class="text-4xl mb-3">🔬</div>
              <h4 class="font-heading text-xl font-bold text-white">Advanced Technology</h4>
              <p class="text-gray-300">Precision manufacturing using advanced machines like TORNOS.</p>
            </div>
            <div class="text-center space-y-3">
              <div class="text-4xl mb-3">🌍</div>
              <h4 class="font-heading text-xl font-bold text-white">Global Reach</h4>
              <p class="text-gray-300">Trusted in multiple countries with a strong sales network.</p>
            </div>
            <div class="text-center space-y-3">
              <div class="text-4xl mb-3">🛡️</div>
              <h4 class="font-heading text-xl font-bold text-white">Lifetime Guarantee</h4>
              <p class="text-gray-300">100% Lifetime Guarantee on our implants.</p>
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
      <div class="max-w-7xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">Manufacturing & Quality</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Great manufacturing starts with great quality." Using advanced machines like TORNOS ensures unmatched precision, consistency, and reliability.
          </p>
        </div>

        <!-- Raw Materials -->
        <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h3 class="font-heading text-3xl font-bold text-white mb-6">Raw Materials</h3>
            <p class="text-gray-300 text-lg leading-relaxed">
                MGM uses premium-grade titanium to ensure biocompatibility, corrosion resistance, and seamless bone integration. Only materials meeting international standards move to production.
            </p>
        </div>

        <!-- Testing Table -->
        <div class="space-y-6">
            <h3 class="font-heading text-3xl font-bold text-white text-center">Rigorous Testing Standards</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-white/20 text-cyan-400 text-lg">
                            <th class="p-4">Test Type</th>
                            <th class="p-4">Purpose</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-300">
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-4 font-semibold text-white">Material Composition</td>
                            <td class="p-4">Ensure correct alloy/material</td>
                        </tr>
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-4 font-semibold text-white">Mechanical Testing</td>
                            <td class="p-4">Assess strength and fatigue</td>
                        </tr>
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-4 font-semibold text-white">Dimensional Accuracy</td>
                            <td class="p-4">Precision fit and tolerance</td>
                        </tr>
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-4 font-semibold text-white">Surface Characterization</td>
                            <td class="p-4">Promote osseointegration</td>
                        </tr>
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-4 font-semibold text-white">Cleanliness & Sterility</td>
                            <td class="p-4">Infection control and biological safety</td>
                        </tr>
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-4 font-semibold text-white">Packaging Integrity</td>
                            <td class="p-4">Maintain sterility during transport</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Quality Control -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <h3 class="font-heading text-3xl font-bold text-white">100% Quality Control</h3>
                <p class="text-gray-300 text-lg">
                    Every product is checked by digital software, laser, and optical inspection systems, not just a percentage of the lot.
                </p>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-start gap-3">
                        <span class="text-cyan-400 mt-1">✓</span>
                        <div><strong>Fracture Test:</strong> Evaluates stress, load, and tensile distributions.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-cyan-400 mt-1">✓</span>
                        <div><strong>Tolerance Test:</strong> Determines angulation and resistance limits.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-cyan-400 mt-1">✓</span>
                        <div><strong>Surface Test:</strong> Residue analysis and micro-roughness control.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-cyan-400 mt-1">✓</span>
                        <div><strong>Cleanliness/Sterility:</strong> Ensures implants are free from biological/chemical contaminants.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-cyan-400 mt-1">✓</span>
                        <div><strong>Sealing Test:</strong> Automated shelf-life testing to ensure no bacterial growth.</div>
                    </li>
                </ul>
            </div>
            <div class="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 flex items-center justify-center aspect-square">
                <div class="text-9xl">🛡️</div>
            </div>
        </div>

        <!-- Why Choose MGM -->
        <div class="space-y-12">
            <h3 class="font-heading text-4xl font-bold text-white text-center">Why Choose MGM?</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Uncompromised Quality</h4>
                    <p class="text-gray-400 text-sm">Top-grade raw materials tested for purity.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Advanced Technology</h4>
                    <p class="text-gray-400 text-sm">Precision manufacturing.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Rigorous Testing</h4>
                    <p class="text-gray-400 text-sm">Every batch tested for zero defects.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">International Standards</h4>
                    <p class="text-gray-400 text-sm">Certified ISO, CE, FDA.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Lifetime Guarantee</h4>
                    <p class="text-gray-400 text-sm">100% Lifetime Guarantee.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Biocompatibility First</h4>
                    <p class="text-gray-400 text-sm">100% safe for the human body.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Innovation Driven</h4>
                    <p class="text-gray-400 text-sm">Continuous R&D.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Global Reach</h4>
                    <p class="text-gray-400 text-sm">Trusted in multiple countries.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <h4 class="font-bold text-white mb-2">Competitive Advantage</h4>
                    <p class="text-gray-400 text-sm">World-class quality at competitive prices.</p>
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
      <div class="max-w-6xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-4">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-white">Get in Touch</h2>
          <p class="text-xl text-gray-300">Ready to elevate your practice? Contact us today.</p>
        </div>

        <!-- Contact Grid -->
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 class="font-heading text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div class="space-y-6 text-gray-300">
                <div class="flex items-start gap-4">
                  <span class="text-cyan-400 text-2xl">📍</span>
                  <div>
                    <p class="font-semibold text-white">Headquarters</p>
                    <p>Hilden & Aachen, Germany</p>
                  </div>
                </div>
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

            <div class="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8">
              <h3 class="font-heading text-2xl font-bold text-white mb-4">Become a Partner</h3>
              <p class="text-gray-300 mb-6">Interested in distributing MGM Implant products? Join our global network.</p>
              <a href="#/distributor" class="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Partner With Us
              </a>
            </div>
          </div>

          <form class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
            <h3 class="font-heading text-2xl font-bold text-white mb-6">Send us a Message</h3>
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

        <!-- News & Media Section -->
        <div class="space-y-8">
            <div class="text-center">
                <h3 class="font-heading text-4xl font-bold text-white mb-4">News & Media</h3>
                <p class="text-gray-400">Latest updates, clinical cases, and events.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all group">
                    <div class="h-48 bg-gray-800 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white font-bold">Clinical Case Study</div>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Immediate Loading with MGM Plus</h4>
                        <p class="text-gray-400 text-sm mb-4">A comprehensive look at a full-arch rehabilitation using the MGM Plus system.</p>
                        <a href="#" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300">Read More →</a>
                    </div>
                </div>
                <div class="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all group">
                    <div class="h-48 bg-gray-800 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white font-bold">Event</div>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">IDS Cologne 2025</h4>
                        <p class="text-gray-400 text-sm mb-4">Join us at the world's leading dental trade fair. Hall 10.2, Booth A-050.</p>
                        <a href="#" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300">Read More →</a>
                    </div>
                </div>
                <div class="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all group">
                    <div class="h-48 bg-gray-800 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white font-bold">Blog</div>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">The Science of M-Pure Surface</h4>
                        <p class="text-gray-400 text-sm mb-4">Understanding the biological benefits of our acid-free surface treatment.</p>
                        <a href="#" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300">Read More →</a>
                    </div>
                </div>
            </div>
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
                        <h3 class="font-heading text-2xl font-bold text-white mb-4">Specifications & Features</h3>
                        <ul class="space-y-3">
                            ${
                              product.features
                                ? product.features
                                    .map(
                                      (feature) => `
                                <li class="flex items-start gap-3 text-gray-300">
                                  <span class="text-cyan-400">✓</span>
                                  <div>${feature}</div>
                                </li>
                                `
                                    )
                                    .join("")
                                : `
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
                            `
                            }
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
