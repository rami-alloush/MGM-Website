import { createElement, animateSection } from "../utils.js";
import {
  USPItem,
  StatItem,
  FeatureCard,
  ImageSlider,
  Icons,
} from "../ui/index.js";

export const HomePage = () => {
  const container = createElement("div", "w-full overflow-x-hidden");

  // 1. HERO SECTION
  const heroSection = createElement(
    "section",
    "relative h-[85vh] flex items-center px-6 md:px-12 lg:px-40 py-24",
  );
  heroSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto w-full relative z-10">
      <div class="max-w-3xl space-y-6">
        <h1 class="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight tracking-tight">
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
    "py-20 bg-white border-b border-silver",
  );

  const uspItems = [
    {
      icon: Icons.ShieldCheck,
      title: "Uncompromised Quality",
      description:
        "Made in Germany with premium-grade titanium and rigorous 100% quality control.",
      href: "#/about",
    },
    {
      icon: Icons.Microscope,
      title: "Advanced Technology",
      description:
        "Featuring our proprietary M-Pure Surface for superior osseointegration and healing.",
      href: "#/technology",
    },
    {
      icon: Icons.Handshake,
      title: "Lifetime Guarantee",
      description:
        "We stand by our products with a 100% lifetime guarantee for your peace of mind.",
      href: "#/about",
    },
  ];

  trustSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-6 md:px-20">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-heading font-bold text-secondary mb-4">Redefining Implantology</h2>
        <p class="text-charcoal text-lg">
            MGM Implant combines German engineering precision with biological excellence to create solutions that last a lifetime.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-12 text-center">
        ${uspItems.map((item) => USPItem(item)).join("")}
      </div>
    </div>
  `;

  // 2.5 IMAGE SLIDER SECTION
  const sliderSection = createElement(
    "section",
    "py-16 bg-clinical-gray overflow-hidden",
  );
  sliderSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-8 md:px-16">
      <div id="homepage-slider"></div>
    </div>
  `;

  // 3. Z-PATTERN: ABOUT (Image Left, Text Right)
  const aboutSection = createElement("section", "py-32 bg-white");
  aboutSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-6 md:px-20">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="relative">
            <div class="absolute -inset-4 bg-clinical-gray rounded-3xl transform -rotate-2"></div>
            <img src="/assets/images/fabrica.webp" alt="MGM Manufacturing" class="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]">
        </div>
        <div class="space-y-8">
            <h2 class="font-heading text-3xl md:text-5xl font-bold text-secondary">Engineering Excellence Since 2008</h2>
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
    "py-24 bg-secondary text-white relative overflow-hidden",
  );

  const stats = [
    {
      target: "98.8",
      suffix: "%",
      decimal: true,
      label: "Success Rate",
      delay: 0,
    },
    { target: "15", suffix: "+", label: "Years of Innovation", delay: 150 },
    { target: "40", suffix: "+", label: "Countries", delay: 300 },
  ];

  statsSection.innerHTML = `
    <div class="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
    <div class="max-w-screen-2xl mx-auto px-20 relative z-10">
        <div class="grid md:grid-cols-3 gap-12 text-center" id="stats-container">
            ${stats.map((stat) => StatItem(stat)).join("")}
        </div>
    </div>
  `;

  // 5. Z-PATTERN: TECHNOLOGY (Text Left, Image Right)
  const techSection = createElement("section", "py-32 bg-clinical-gray");
  techSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-6 md:px-20">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="space-y-8 order-2 lg:order-1">
            <h2 class="font-heading text-3xl md:text-5xl font-bold text-secondary">M-Pure Surface Technology</h2>
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
        <div class="relative order-1 lg:order-2 flex justify-center">
            <div class="relative max-w-md">
                <div class="absolute -inset-4 bg-clinical-gray rounded-3xl transform rotate-2"></div>
                <img src="/assets/images/surface-treatment.webp" alt="M-Pure Surface" class="relative rounded-2xl shadow-2xl w-full h-auto max-h-[600px] object-cover">
            </div>
        </div>
      </div>
    </div>
  `;

  // 6. PRODUCT CATEGORY GRID
  const productSection = createElement("section", "py-32 bg-white");

  const productCategories = [
    {
      href: "#/products/implants",
      icon: Icons.Tooth,
      title: "Implants",
      description:
        "Bone-level and tissue-level implants designed for primary stability and aesthetic results.",
    },
    {
      href: "#/products/prosthetics",
      icon: Icons.Cog,
      title: "Prosthetics",
      description:
        "A wide range of abutments and prosthetic components for cement and screw-retained restorations.",
    },
    {
      href: "#/products/surgical",
      icon: Icons.Wrench,
      title: "Surgical Kits",
      description:
        "Ergonomic and intuitive surgical kits designed to simplify your workflow and enhance precision.",
    },
  ];

  productSection.innerHTML = `
    <div class="max-w-screen-2xl mx-auto px-6 md:px-20">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="font-heading text-3xl md:text-5xl font-bold text-secondary mb-6">Comprehensive Solutions</h2>
            <p class="text-xl text-charcoal">
                From standard cases to complex rehabilitations, our product portfolio covers every clinical indication.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            ${productCategories.map((cat) => FeatureCard(cat)).join("")}
        </div>
    </div>
  `;

  // Append all sections
  container.appendChild(heroSection);
  container.appendChild(trustSection);
  container.appendChild(sliderSection);
  container.appendChild(aboutSection);
  container.appendChild(statsSection);
  container.appendChild(techSection);
  container.appendChild(productSection);

  // Initialize the slider after DOM is ready
  setTimeout(() => {
    const sliderContainer = container.querySelector("#homepage-slider");
    if (sliderContainer) {
      const slider = ImageSlider();
      sliderContainer.appendChild(slider);
    }
  }, 0);

  animateSection(container);
  return container;
};
