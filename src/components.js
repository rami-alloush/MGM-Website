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
    "relative h-[85vh] flex items-center px-20 md:px-12 lg:px-40 py-24"
  );
  // Transparent background for 3D model visibility
  heroSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto w-full relative z-10">
      <div class="max-w-3xl space-y-6">
        <h1 class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight tracking-tight">
          Precision. <br>
          Reliability. <br>
          <span class="text-primary">Made in Germany.</span>
        </h1>
        <p class="text-xl text-charcoal max-w-xl leading-relaxed font-light">
          Redefining dental implantology with the M-Pure Surface technology. 
          Experience the perfect fusion of biological excellence and engineering precision.
        </p>
        
        <div class="flex flex-wrap gap-4 mt-10">
          <a href="#/products" class="px-8 py-4 bg-primary text-white text-lg font-heading font-semibold rounded-full hover:bg-primary-hover shadow-xl shadow-primary/20 transform hover:-translate-y-1 transition-all">
            Explore Solutions
          </a>
          <a href="#/about" class="px-8 py-4 bg-white/80 backdrop-blur-md text-charcoal text-lg font-heading font-semibold rounded-full border border-silver hover:border-primary hover:text-primary shadow-lg shadow-silver/50 transition-all">
            Our Philosophy
          </a>
        </div>
      </div>
    </div>
  `;

  // 2. INTRO & USPs
  const trustSection = createElement(
    "section",
    "py-20 bg-white border-b border-silver"
  );
  trustSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-20">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-heading font-bold text-secondary mb-4">Redefining Implantology</h2>
        <p class="text-charcoal text-lg">
            MGM Implant combines German engineering precision with biological excellence to create solutions that last a lifetime.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-12 text-center">
        <div class="space-y-4 p-6 rounded-2xl hover:bg-clinical-gray transition-colors">
            <div class="w-16 h-16 mx-auto bg-clinical-gray rounded-full flex items-center justify-center text-3xl text-accent">
                🛡️
            </div>
            <h3 class="font-bold text-xl text-secondary">Uncompromised Quality</h3>
            <p class="text-charcoal">
                Made in Germany with premium-grade titanium and rigorous 100% quality control.
            </p>
        </div>
        <div class="space-y-4 p-6 rounded-2xl hover:bg-clinical-gray transition-colors">
            <div class="w-16 h-16 mx-auto bg-clinical-gray rounded-full flex items-center justify-center text-3xl text-accent">
                🔬
            </div>
            <h3 class="font-bold text-xl text-secondary">Advanced Technology</h3>
            <p class="text-charcoal">
                Featuring our proprietary M-Pure Surface for superior osseointegration and healing.
            </p>
        </div>
        <div class="space-y-4 p-6 rounded-2xl hover:bg-clinical-gray transition-colors">
            <div class="w-16 h-16 mx-auto bg-clinical-gray rounded-full flex items-center justify-center text-3xl text-accent">
                🤝
            </div>
            <h3 class="font-bold text-xl text-secondary">Lifetime Guarantee</h3>
            <p class="text-charcoal">
                We stand by our products with a 100% lifetime guarantee for your peace of mind.
            </p>
        </div>
      </div>
    </div>
  `;

  // 3. Z-PATTERN: ABOUT (Image Left, Text Right)
  const aboutSection = createElement("section", "py-32 bg-white");
  aboutSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-20">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="relative">
            <div class="absolute -inset-4 bg-clinical-gray rounded-3xl transform -rotate-2"></div>
            <img src="https://placehold.co/800x600/f3f4f6/cbd5e1?text=Precision+Manufacturing" alt="MGM Manufacturing" class="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]">
        </div>
        <div class="space-y-8">
            <h2 class="font-heading text-5xl font-bold text-secondary">Engineering Excellence Since 2008</h2>
            <p class="text-xl text-charcoal leading-relaxed">
                At MGM Implant, we don't just manufacture implants; we craft solutions for life. 
                Our state-of-the-art facility in Germany utilizes the most advanced CNC technology 
                to ensure every component meets the strictest quality standards.
            </p>
            <ul class="space-y-4 text-lg text-charcoal">
                <li class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-full bg-clinical-gray text-primary flex items-center justify-center font-bold">✓</span>
                    Strict Quality Control
                </li>
                <li class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-full bg-clinical-gray text-primary flex items-center justify-center font-bold">✓</span>
                    Innovative R&D Department
                </li>
                <li class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-full bg-clinical-gray text-primary flex items-center justify-center font-bold">✓</span>
                    Global Distribution Network
                </li>
            </ul>
            <a href="#/about" class="inline-block mt-4 text-primary font-semibold text-lg hover:text-primary-hover transition-colors border-b-2 border-primary pb-1">
                Read Our Story
            </a>
        </div>
      </div>
    </div>
  `;

  // 4. STATS BLOCK
  const statsSection = createElement(
    "section",
    "py-24 bg-secondary text-white relative overflow-hidden"
  );
  statsSection.innerHTML = `
    <div class="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10"></div>
    <div class="max-w-screen-2xl mx-auto px-20 relative z-10">
        <div class="grid md:grid-cols-3 gap-12 text-center">
            <div class="space-y-2">
                <div class="text-7xl font-bold text-accent font-heading">98.8%</div>
                <div class="text-xl text-silver uppercase tracking-widest">Success Rate</div>
            </div>
            <div class="space-y-2">
                <div class="text-7xl font-bold text-accent font-heading">15+</div>
                <div class="text-xl text-silver uppercase tracking-widest">Years of Innovation</div>
            </div>
            <div class="space-y-2">
                <div class="text-7xl font-bold text-accent font-heading">40+</div>
                <div class="text-xl text-silver uppercase tracking-widest">Countries</div>
            </div>
        </div>
    </div>
  `;

  // 5. Z-PATTERN: TECHNOLOGY (Text Left, Image Right)
  const techSection = createElement("section", "py-32 bg-clinical-gray");
  techSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-20">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="space-y-8 order-2 lg:order-1">
            <h2 class="font-heading text-5xl font-bold text-secondary">M-Pure Surface Technology</h2>
            <p class="text-xl text-charcoal leading-relaxed">
                Faster healing. Stronger integration. Our proprietary M-Pure surface treatment 
                creates an optimal micro-structure for osseointegration, significantly reducing 
                healing time and ensuring long-term stability.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-silver">
                    <h4 class="font-bold text-secondary text-lg mb-2">Hydrophilic</h4>
                    <p class="text-charcoal">Enhanced blood contact for rapid initial healing.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-silver">
                    <h4 class="font-bold text-secondary text-lg mb-2">Ultra-Clean</h4>
                    <p class="text-charcoal">Free from manufacturing residues and contaminants.</p>
                </div>
            </div>
            <a href="#/technology" class="inline-block mt-4 text-primary font-semibold text-lg hover:text-primary-hover transition-colors border-b-2 border-primary pb-1">
                Discover the Science
            </a>
        </div>
        <div class="relative order-1 lg:order-2">
            <div class="absolute -inset-4 bg-white/50 rounded-3xl transform rotate-2"></div>
            <img src="https://placehold.co/800x600/e2e8f0/64748b?text=Surface+Microscopy" alt="M-Pure Surface" class="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]">
        </div>
      </div>
    </div>
  `;

  // 6. PRODUCT CATEGORY GRID
  const productSection = createElement("section", "py-32 bg-white");
  productSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-20">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="font-heading text-5xl font-bold text-secondary mb-6">Comprehensive Solutions</h2>
            <p class="text-xl text-charcoal">
                From standard cases to complex rehabilitations, our product portfolio covers every clinical indication.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <a href="#/products/implants" class="group relative overflow-hidden rounded-2xl bg-clinical-gray hover:bg-white border border-silver hover:border-primary hover:shadow-2xl transition-all duration-300 p-10">
                <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="text-9xl">🦷</span>
                </div>
                <div class="relative z-10 space-y-6">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-primary border border-silver">
                        🦷
                    </div>
                    <h3 class="text-3xl font-bold text-secondary group-hover:text-primary transition-colors">Implants</h3>
                    <p class="text-charcoal text-lg">
                        Bone-level and tissue-level implants designed for primary stability and aesthetic results.
                    </p>
                    <div class="flex items-center text-primary font-semibold mt-4">
                        <span>View Catalog</span>
                        <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
            </a>

            <!-- Card 2 -->
            <a href="#/products/prosthetics" class="group relative overflow-hidden rounded-2xl bg-clinical-gray hover:bg-white border border-silver hover:border-primary hover:shadow-2xl transition-all duration-300 p-10">
                <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="text-9xl">⚙️</span>
                </div>
                <div class="relative z-10 space-y-6">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-primary border border-silver">
                        ⚙️
                    </div>
                    <h3 class="text-3xl font-bold text-secondary group-hover:text-primary transition-colors">Prosthetics</h3>
                    <p class="text-charcoal text-lg">
                        A wide range of abutments and prosthetic components for cement and screw-retained restorations.
                    </p>
                    <div class="flex items-center text-primary font-semibold mt-4">
                        <span>View Catalog</span>
                        <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
            </a>

            <!-- Card 3 -->
            <a href="#/products/surgical" class="group relative overflow-hidden rounded-2xl bg-clinical-gray hover:bg-white border border-silver hover:border-primary hover:shadow-2xl transition-all duration-300 p-10">
                <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="text-9xl">🔧</span>
                </div>
                <div class="relative z-10 space-y-6">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-primary border border-silver">
                        🔧
                    </div>
                    <h3 class="text-3xl font-bold text-secondary group-hover:text-primary transition-colors">Surgical Kits</h3>
                    <p class="text-charcoal text-lg">
                        Ergonomic and intuitive surgical kits designed to simplify your workflow and enhance precision.
                    </p>
                    <div class="flex items-center text-primary font-semibold mt-4">
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
  const section = createElement("section", "min-h-screen py-24 px-20");
  section.style.backgroundImage = "url('/assets/images/about-bg.jpg')";
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundBlendMode = "overlay";
  section.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Light overlay for clean look

  section.innerHTML = `
      <div class="max-w-6xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-secondary">About MGM Implant</h2>
          <p class="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            MGM IMPLANT has specialized in implantology since 2008, adopting the highest quality standards under the ISO 13485 quality management system. Based in Hilden and Aachen, we maintain a strong sales and service network worldwide.
          </p>
        </div>

        <!-- Vision & Mission -->
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white backdrop-blur-md border border-silver rounded-2xl p-8 space-y-6 shadow-lg">
            <div class="text-primary text-5xl mb-4">🎯</div>
            <h3 class="font-heading text-3xl font-bold text-secondary">Vision & Mission</h3>
            <ul class="space-y-4 text-charcoal">
                <li class="flex gap-3">
                    <span class="text-primary font-bold">•</span>
                    <span><strong>Goal:</strong> Building smart, easy, and safe implants to facilitate the lives of patients and doctors.</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-primary font-bold">•</span>
                    <span><strong>History:</strong> Started in 2008 producing "smartest and easiest and best bone friendly implants".</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-primary font-bold">•</span>
                    <span><strong>Future:</strong> Changing industry standards by using matchless German manufacturers and creating a revolution in implant dentistry that is easier, safer, faster, and more economical.</span>
                </li>
            </ul>
          </div>

          <div class="bg-white backdrop-blur-md border border-silver rounded-2xl p-8 space-y-6 shadow-lg">
            <div class="text-primary text-5xl mb-4">💼</div>
            <h3 class="font-heading text-3xl font-bold text-secondary">Our Portfolio</h3>
            <p class="text-charcoal leading-relaxed">
                The portfolio offers solutions from single tooth to fully edentulous indications, including:
            </p>
            <ul class="space-y-2 text-charcoal">
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span>
                <span>Dental implant systems (MGM, MGM PLUS, MGM ONE)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span>
                <span>High-precision individualized prosthetics</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span>
                <span>Activator systems (MGM ACTIVE)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span>
                <span>Digital solutions for treatment planning (MGM GUIDED)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span>
                <span>Biomaterials</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Core Programs -->
        <div class="space-y-12">
            <h3 class="font-heading text-4xl font-bold text-secondary text-center">The 4 Core Programs</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-clinical-gray border border-silver p-6 rounded-xl hover:border-primary transition-all">
                    <div class="text-4xl mb-4">💡</div>
                    <h4 class="text-xl font-bold text-secondary mb-2">Innovate</h4>
                    <p class="text-charcoal text-sm">Providing customers with the latest technologies via the R&D department and scientific team.</p>
                </div>
                <div class="bg-clinical-gray border border-silver p-6 rounded-xl hover:border-primary transition-all">
                    <div class="text-4xl mb-4">📚</div>
                    <h4 class="text-xl font-bold text-secondary mb-2">Learn</h4>
                    <p class="text-charcoal text-sm">Providing latest techniques and training support for better product usage.</p>
                </div>
                <div class="bg-clinical-gray border border-silver p-6 rounded-xl hover:border-primary transition-all">
                    <div class="text-4xl mb-4">🌐</div>
                    <h4 class="text-xl font-bold text-secondary mb-2">Explore</h4>
                    <p class="text-charcoal text-sm">Connecting with customers through exhibitions, scientific events, and congresses to understand their needs.</p>
                </div>
                <div class="bg-clinical-gray border border-silver p-6 rounded-xl hover:border-primary transition-all">
                    <div class="text-4xl mb-4">🤝</div>
                    <h4 class="text-xl font-bold text-secondary mb-2">Practice</h4>
                    <p class="text-charcoal text-sm">Allowing customers to share case challenges and clinical studies.</p>
                </div>
            </div>
        </div>

        <!-- Why Choose MGM Summary -->
        <div class="bg-secondary text-white rounded-2xl p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10"></div>
          <div class="relative z-10">
            <h3 class="font-heading text-3xl font-bold text-white mb-8 text-center">Why Choose MGM?</h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center space-y-3">
                <div class="text-4xl mb-3">🔬</div>
                <h4 class="font-heading text-xl font-bold text-accent">Advanced Technology</h4>
                <p class="text-silver">Precision manufacturing using advanced machines like TORNOS.</p>
              </div>
              <div class="text-center space-y-3">
                <div class="text-4xl mb-3">🌍</div>
                <h4 class="font-heading text-xl font-bold text-accent">Global Reach</h4>
                <p class="text-silver">Trusted in multiple countries with a strong sales network.</p>
              </div>
              <div class="text-center space-y-3">
                <div class="text-4xl mb-3">🛡️</div>
                <h4 class="font-heading text-xl font-bold text-accent">Lifetime Guarantee</h4>
                <p class="text-silver">100% Lifetime Guarantee on our implants.</p>
              </div>
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
    "min-h-screen py-24 px-20 bg-white/90 backdrop-blur-md"
  );

  section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-secondary">Manufacturing & Quality</h2>
          <p class="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            "Great manufacturing starts with great quality." Using advanced machines like TORNOS ensures unmatched precision, consistency, and reliability.
          </p>
        </div>

        <!-- Raw Materials -->
        <div class="bg-white border border-silver rounded-2xl p-10 shadow-lg">
            <h3 class="font-heading text-3xl font-bold text-secondary mb-6">Raw Materials</h3>
            <p class="text-charcoal text-lg leading-relaxed">
                MGM uses premium-grade titanium to ensure biocompatibility, corrosion resistance, and seamless bone integration. Only materials meeting international standards move to production.
            </p>
        </div>

        <!-- Testing Table -->
        <div class="space-y-6">
            <h3 class="font-heading text-3xl font-bold text-secondary text-center">Rigorous Testing Standards</h3>
            <div class="overflow-x-auto bg-white rounded-xl border border-silver shadow-sm">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-silver text-primary text-lg bg-clinical-gray">
                            <th class="p-4">Test Type</th>
                            <th class="p-4">Purpose</th>
                        </tr>
                    </thead>
                    <tbody class="text-charcoal">
                        <tr class="border-b border-silver hover:bg-clinical-gray transition-colors">
                            <td class="p-4 font-semibold text-secondary">Material Composition</td>
                            <td class="p-4">Ensure correct alloy/material</td>
                        </tr>
                        <tr class="border-b border-silver hover:bg-clinical-gray transition-colors">
                            <td class="p-4 font-semibold text-secondary">Mechanical Testing</td>
                            <td class="p-4">Assess strength and fatigue</td>
                        </tr>
                        <tr class="border-b border-silver hover:bg-clinical-gray transition-colors">
                            <td class="p-4 font-semibold text-secondary">Dimensional Accuracy</td>
                            <td class="p-4">Precision fit and tolerance</td>
                        </tr>
                        <tr class="border-b border-silver hover:bg-clinical-gray transition-colors">
                            <td class="p-4 font-semibold text-secondary">Surface Characterization</td>
                            <td class="p-4">Promote osseointegration</td>
                        </tr>
                        <tr class="border-b border-silver hover:bg-clinical-gray transition-colors">
                            <td class="p-4 font-semibold text-secondary">Cleanliness & Sterility</td>
                            <td class="p-4">Infection control and biological safety</td>
                        </tr>
                        <tr class="border-b border-silver hover:bg-clinical-gray transition-colors">
                            <td class="p-4 font-semibold text-secondary">Packaging Integrity</td>
                            <td class="p-4">Maintain sterility during transport</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Quality Control -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <h3 class="font-heading text-3xl font-bold text-secondary">100% Quality Control</h3>
                <p class="text-charcoal text-lg">
                    Every product is checked by digital software, laser, and optical inspection systems, not just a percentage of the lot.
                </p>
                <ul class="space-y-3 text-charcoal">
                    <li class="flex items-start gap-3">
                        <span class="text-primary mt-1">✓</span>
                        <div><strong>Fracture Test:</strong> Evaluates stress, load, and tensile distributions.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-primary mt-1">✓</span>
                        <div><strong>Tolerance Test:</strong> Determines angulation and resistance limits.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-primary mt-1">✓</span>
                        <div><strong>Surface Test:</strong> Residue analysis and micro-roughness control.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-primary mt-1">✓</span>
                        <div><strong>Cleanliness/Sterility:</strong> Ensures implants are free from biological/chemical contaminants.</div>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-primary mt-1">✓</span>
                        <div><strong>Sealing Test:</strong> Automated shelf-life testing to ensure no bacterial growth.</div>
                    </li>
                </ul>
            </div>
            <div class="bg-white border border-silver rounded-2xl p-8 flex items-center justify-center aspect-square shadow-lg">
                <div class="text-9xl text-primary">🛡️</div>
            </div>
        </div>

        <!-- Why Choose MGM -->
        <div class="space-y-12">
            <h3 class="font-heading text-4xl font-bold text-secondary text-center">Why Choose MGM?</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Uncompromised Quality</h4>
                    <p class="text-charcoal text-sm">Top-grade raw materials tested for purity.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Advanced Technology</h4>
                    <p class="text-charcoal text-sm">Precision manufacturing.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Rigorous Testing</h4>
                    <p class="text-charcoal text-sm">Every batch tested for zero defects.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">International Standards</h4>
                    <p class="text-charcoal text-sm">Certified ISO, CE, FDA.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Lifetime Guarantee</h4>
                    <p class="text-charcoal text-sm">100% Lifetime Guarantee.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Biocompatibility First</h4>
                    <p class="text-charcoal text-sm">100% safe for the human body.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Innovation Driven</h4>
                    <p class="text-charcoal text-sm">Continuous R&D.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Global Reach</h4>
                    <p class="text-charcoal text-sm">Trusted in multiple countries.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-silver hover:border-primary transition-all hover:shadow-lg">
                    <h4 class="font-bold text-secondary mb-2">Competitive Advantage</h4>
                    <p class="text-charcoal text-sm">World-class quality at competitive prices.</p>
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
    "min-h-screen py-24 px-20 bg-white/90 backdrop-blur-md"
  );
  section.innerHTML = `
      <div class="max-w-6xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-4">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-secondary">Get in Touch</h2>
          <p class="text-xl text-charcoal">Ready to elevate your practice? Contact us today.</p>
        </div>

        <!-- Contact Grid -->
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
              <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              <div class="space-y-6 text-charcoal">
                <div class="flex items-start gap-4">
                  <span class="text-primary text-2xl">📍</span>
                  <div>
                    <p class="font-semibold text-secondary">Headquarters</p>
                    <p>Hilden & Aachen, Germany</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-primary text-2xl">📧</span>
                  <div>
                    <p class="font-semibold text-secondary">Email</p>
                    <p>info@mgmimplant.com</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-primary text-2xl">📱</span>
                  <div>
                    <p class="font-semibold text-secondary">WhatsApp</p>
                    <p>Direct support available</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-primary text-2xl">🌍</span>
                  <div>
                    <p class="font-semibold text-secondary">Global Reach</p>
                    <p>International agents worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-secondary text-white border border-silver rounded-2xl p-8 relative overflow-hidden">
              <div class="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10"></div>
              <div class="relative z-10">
                <h3 class="font-heading text-2xl font-bold text-white mb-4">Become a Partner</h3>
                <p class="text-gray-300 mb-6">Interested in distributing MGM Implant products? Join our global network.</p>
                <a href="#/distributor" class="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>

          <form class="bg-white border border-silver rounded-2xl p-8 space-y-6 shadow-lg">
            <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
            <div class="space-y-2">
              <label class="text-secondary font-semibold">Name</label>
              <input type="text" required class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-secondary font-semibold">Email</label>
              <input type="email" required class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-secondary font-semibold">Message</label>
              <textarea rows="4" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all"></textarea>
            </div>
            <button type="submit" class="w-full px-6 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
              Send Message
            </button>
          </form>
        </div>

        <!-- News & Media Section -->
        <div class="space-y-8">
            <div class="text-center">
                <h3 class="font-heading text-4xl font-bold text-secondary mb-4">News & Media</h3>
                <p class="text-charcoal">Latest updates, clinical cases, and events.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl overflow-hidden border border-silver hover:border-primary transition-all group shadow-sm hover:shadow-lg">
                    <div class="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Clinical+Case" alt="Clinical Case" class="w-full h-full object-cover">
                        <div class="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">Clinical Case Study</div>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Immediate Loading with MGM Plus</h4>
                        <p class="text-charcoal text-sm mb-4">A comprehensive look at a full-arch rehabilitation using the MGM Plus system.</p>
                        <a href="#" class="text-primary text-sm font-semibold hover:text-primary-hover">Read More →</a>
                    </div>
                </div>
                <div class="bg-white rounded-xl overflow-hidden border border-silver hover:border-primary transition-all group shadow-sm hover:shadow-lg">
                    <div class="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Event" alt="Event" class="w-full h-full object-cover">
                        <div class="absolute bottom-4 left-4 bg-accent text-secondary text-xs font-bold px-2 py-1 rounded">Event</div>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">IDS Cologne 2025</h4>
                        <p class="text-charcoal text-sm mb-4">Join us at the world's leading dental trade fair. Hall 10.2, Booth A-050.</p>
                        <a href="#" class="text-primary text-sm font-semibold hover:text-primary-hover">Read More →</a>
                    </div>
                </div>
                <div class="bg-white rounded-xl overflow-hidden border border-silver hover:border-primary transition-all group shadow-sm hover:shadow-lg">
                    <div class="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Blog" alt="Blog" class="w-full h-full object-cover">
                        <div class="absolute bottom-4 left-4 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">Blog</div>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">The Science of M-Pure Surface</h4>
                        <p class="text-charcoal text-sm mb-4">Understanding the biological benefits of our acid-free surface treatment.</p>
                        <a href="#" class="text-primary text-sm font-semibold hover:text-primary-hover">Read More →</a>
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
    "min-h-screen py-24 px-20 bg-white/90 backdrop-blur-md"
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
            <a href="#/products/${key}" class="group bg-white border border-silver rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform text-secondary group-hover:text-primary">${icon}</div>
                <h3 class="font-heading text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">${category.title}</h3>
                <p class="text-charcoal mb-4">Explore our range of ${category.title}</p>
                <div class="flex items-center text-primary font-semibold">
                  <span>View Products</span>
                  <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
            </a>
        `;
  });

  section.innerHTML = `
        <div class="max-w-7xl mx-auto space-y-16">
            <div class="text-center space-y-4">
              <h2 class="font-heading text-5xl md:text-6xl font-bold text-secondary">Our Products</h2>
              <p class="text-xl text-charcoal max-w-3xl mx-auto">Comprehensive solutions for every clinical scenario. From implants to advanced surgical kits, we have everything you need.</p>
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
      "min-h-screen flex items-center justify-center text-secondary text-2xl"
    );
    errorDiv.textContent = "Category not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-24 px-20 bg-white/90 backdrop-blur-md"
  );
  let contentHtml = "";

  if (category.subcategories) {
    category.subcategories.forEach((sub) => {
      contentHtml += `
                <div class="mb-12">
                    <h3 class="font-heading text-3xl font-bold text-secondary mb-6 pb-4 border-b border-silver">${
                      sub.title
                    }</h3>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${sub.items
                          .map(
                            (item) => `
                            <a href="#/product/${item.id}" class="group bg-white border border-silver rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <div class="aspect-square bg-clinical-gray rounded-lg mb-4 flex items-center justify-center text-4xl text-primary">
                                  🦷
                                </div>
                                <h4 class="font-heading text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">${item.name}</h4>
                                <div class="flex items-center text-primary text-sm font-semibold mt-4">
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
                    }" class="group bg-white border border-silver rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all transform hover:-translate-y-1">
                        <div class="aspect-square bg-clinical-gray rounded-lg mb-4 flex items-center justify-center text-4xl text-primary">
                          🦷
                        </div>
                        <h4 class="font-heading text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">${
                          item.name
                        }</h4>
                        <p class="text-charcoal text-sm mb-4">${
                          item.description || ""
                        }</p>
                        <div class="flex items-center text-primary text-sm font-semibold">
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
              <div class="text-sm text-charcoal mb-4">
                  <a href="#/products" class="hover:text-primary transition-colors">Products</a> 
                  <span class="mx-2">></span> 
                  <span class="text-secondary font-semibold">${category.title}</span>
              </div>
              <h2 class="font-heading text-5xl font-bold text-secondary mb-4">${category.title}</h2>
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
      "min-h-screen flex items-center justify-center text-secondary text-2xl"
    );
    errorDiv.textContent = "Product not found";
    return errorDiv;
  }

  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-white/90 backdrop-blur-md"
  );
  section.innerHTML = `
        <div class="max-w-7xl mx-auto space-y-12">
            <div class="text-sm text-charcoal mb-4">
                <a href="#/products" class="hover:text-primary transition-colors">Products</a> 
                <span class="mx-2">></span> 
                <span class="hover:text-primary transition-colors">${categoryTitle}</span>
                <span class="mx-2">></span> 
                <span class="text-secondary font-semibold">${
                  product.name
                }</span>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="bg-white border border-silver rounded-2xl p-8 flex items-center justify-center aspect-square shadow-lg">
                    <div class="text-9xl text-primary">🦷</div>
                </div>
                
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
                    
                    <div class="bg-white border border-silver rounded-xl p-6 shadow-sm">
                        <h3 class="font-heading text-2xl font-bold text-secondary mb-4">Specifications & Features</h3>
                        <ul class="space-y-3">
                            ${
                              product.features
                                ? product.features
                                    .map(
                                      (feature) => `
                                <li class="flex items-start gap-3 text-charcoal">
                                  <span class="text-primary">✓</span>
                                  <div>${feature}</div>
                                </li>
                                `
                                    )
                                    .join("")
                                : `
                            <li class="flex items-start gap-3 text-charcoal">
                              <span class="text-primary">✓</span>
                              <div>
                                <span class="font-semibold text-secondary">Material:</span> Titanium Grade 5
                              </div>
                            </li>
                            <li class="flex items-start gap-3 text-charcoal">
                              <span class="text-primary">✓</span>
                              <div>
                                <span class="font-semibold text-secondary">Surface:</span> M-Pure Technology
                              </div>
                            </li>
                            <li class="flex items-start gap-3 text-charcoal">
                              <span class="text-primary">✓</span>
                              <div>
                                <span class="font-semibold text-secondary">Connection:</span> Internal Hexagonal/Morse Taper
                              </div>
                            </li>
                            <li class="flex items-start gap-3 text-charcoal">
                              <span class="text-primary">✓</span>
                              <div>
                                <span class="font-semibold text-secondary">Biocompatibility:</span> 100% Safe
                              </div>
                            </li>
                            `
                            }
                        </ul>
                    </div>
                    
                    <div class="flex gap-4">
                      <button class="flex-1 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
                          Request Quote
                      </button>
                      <button class="px-8 py-4 bg-white border border-silver text-secondary font-heading font-semibold rounded-lg hover:bg-clinical-gray transition-all">
                          Download PDF
                      </button>
                    </div>
                </div>
            </div>

            <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
                <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Clinical Applications</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-3">
                    <h4 class="font-heading text-lg font-semibold text-primary">Ideal For:</h4>
                    <ul class="space-y-2 text-charcoal">
                      <li class="flex items-start gap-2">
                        <span class="text-primary">→</span>
                        <span>Immediate implant placement</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-primary">→</span>
                        <span>Soft bone (Type III/IV)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-primary">→</span>
                        <span>Narrow or underprepared osteotomies</span>
                      </li>
                    </ul>
                  </div>
                  <div class="space-y-3">
                    <h4 class="font-heading text-lg font-semibold text-primary">Benefits:</h4>
                    <ul class="space-y-2 text-charcoal">
                      <li class="flex items-start gap-2">
                        <span class="text-primary">→</span>
                        <span>Reduced surgical trauma</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-primary">→</span>
                        <span>Enhanced primary stability</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-primary">→</span>
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

export const SurgicalKitsPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-white/90 backdrop-blur-md"
  );

  const kits = [
    {
      name: "Surgical Kit",
      icon: "🧰",
      description:
        "Complete set of instruments for standard implant placement.",
    },
    {
      name: "Guided Kit",
      icon: "🎯",
      description: "Precision instruments for computer-guided surgery.",
    },
    {
      name: "All Sinus Lifting Kit",
      icon: "👃",
      description: "Specialized tools for sinus augmentation procedures.",
    },
    {
      name: "Screw Remover Helping Kit",
      icon: "🔧",
      description: "Essential tools for retrieving broken or stripped screws.",
    },
    {
      name: "Fixture Remover Helping Kit",
      icon: "🔩",
      description: "Safe and efficient removal of failed implants.",
    },
    {
      name: "GBR Master Kit",
      icon: "🦴",
      description: "Comprehensive kit for Guided Bone Regeneration.",
    },
    {
      name: "Ridge Augmenting Kit",
      icon: "📈",
      description: "Tools for horizontal and vertical ridge augmentation.",
    },
    {
      name: "Prosthetic Kit",
      icon: "⚙️",
      description: "Drivers and keys for all prosthetic components.",
    },
  ];

  section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-12">
        <div class="text-center space-y-4">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-secondary">Surgical Kits & Tools</h2>
          <p class="text-xl text-charcoal max-w-3xl mx-auto">
            Precision-engineered instruments designed for safety, efficiency, and clinical success.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${kits
            .map(
              (kit) => `
            <div class="bg-white border border-silver rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all group">
              <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">${kit.icon}</div>
              <h3 class="font-heading text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">${kit.name}</h3>
              <p class="text-charcoal text-sm">${kit.description}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
  `;

  animateSection(section);
  return section;
};

export const EducationPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-8 bg-white/90 backdrop-blur-md"
  );

  section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-5xl md:text-6xl font-bold text-secondary">Clinical Support & Education</h2>
          <p class="text-xl text-charcoal max-w-3xl mx-auto">
            Empowering clinicians with knowledge, training, and resources for excellence in implant dentistry.
          </p>
        </div>

        <!-- Resources & Training Grid -->
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Resources -->
          <div class="space-y-8">
            <h3 class="font-heading text-3xl font-bold text-secondary border-b border-silver pb-4">Resources</h3>
            <div class="grid gap-6">
              <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div class="text-3xl">📄</div>
                <div>
                  <h4 class="font-bold text-secondary text-lg">Surgical & Prosthetic Protocols</h4>
                  <p class="text-charcoal text-sm mb-2">Detailed step-by-step guides and video tutorials.</p>
                  <a href="#" class="text-primary text-sm font-semibold hover:underline">Download PDF →</a>
                </div>
              </div>
              <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div class="text-3xl">💻</div>
                <div>
                  <h4 class="font-bold text-secondary text-lg">Digital Workflow Guides</h4>
                  <p class="text-charcoal text-sm mb-2">Integration with exocad, 3Shape, and other CAD software.</p>
                  <a href="#" class="text-primary text-sm font-semibold hover:underline">View Guides →</a>
                </div>
              </div>
              <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div class="text-3xl">🔬</div>
                <div>
                  <h4 class="font-bold text-secondary text-lg">Scientific Documentation</h4>
                  <p class="text-charcoal text-sm mb-2">Clinical studies, white papers, and research articles.</p>
                  <a href="#" class="text-primary text-sm font-semibold hover:underline">Read Research →</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Training -->
          <div class="space-y-8">
            <h3 class="font-heading text-3xl font-bold text-secondary border-b border-silver pb-4">Training & Events</h3>
            <div class="grid gap-6">
              <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div class="text-3xl">🎓</div>
                <div>
                  <h4 class="font-bold text-secondary text-lg">Webinars & Online Courses</h4>
                  <p class="text-charcoal text-sm">Live and on-demand sessions with global experts.</p>
                </div>
              </div>
              <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div class="text-3xl">🏙️</div>
                <div>
                  <h4 class="font-bold text-secondary text-lg">On-site Courses</h4>
                  <p class="text-charcoal text-sm">Hands-on workshops in Hilden, Aachen, and partner clinics.</p>
                </div>
              </div>
              <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div class="text-3xl">🤝</div>
                <div>
                  <h4 class="font-bold text-secondary text-lg">Study Clubs</h4>
                  <p class="text-charcoal text-sm">Local peer-to-peer learning and case discussions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Distributor Zone -->
        <div class="bg-secondary text-white rounded-2xl p-12 relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10"></div>
          <div class="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 class="font-heading text-3xl font-bold text-white">Distributor Zone</h3>
            <p class="text-silver">
              Exclusive access for our authorized partners. Download marketing materials, price lists, and place orders.
            </p>
            <button class="px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
              Partner Login
            </button>
          </div>
        </div>
      </div>
  `;

  animateSection(section);
  return section;
};
