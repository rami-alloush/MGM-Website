import { createElement, animateSection } from "../utils.js";
import { CoreProgramCard, DarkSection } from "../ui/index.js";

export const AboutPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-6 md:px-20 about-page-bg"
  );

  const corePrograms = [
    {
      icon: "💡",
      image: "/assets/images/iINNOVATIVE.webp",
      title: "iInnovate",
      description:
        "Providing customers with the latest technologies via the R&D department and scientific team.",
    },
    {
      icon: "📚",
      image: "/assets/images/iLEARN.webp",
      title: "iLearn",
      description:
        "Providing latest techniques and training support for better product usage.",
    },
    {
      icon: "🌐",
      image: "/assets/images/iEXPLORE.webp",
      title: "iExplore",
      description:
        "Connecting with customers through exhibitions, scientific events, and congresses to understand their needs.",
    },
    {
      icon: "🤝",
      image: "/assets/images/iPRACTICE.webp",
      title: "iPractice",
      description:
        "Allowing customers to share case challenges and clinical studies.",
    },
  ];

  const manufacturingStats = [
    { value: "17+", label: "Years of Excellence" },
    { value: "ISO 13485", label: "Certified Quality" },
    { value: "100%", label: "Made in Germany" },
    { value: "50+", label: "Countries Served" },
  ];

  section.innerHTML = `
      <div class="max-w-6xl mx-auto space-y-20">
        <!-- Hero Intro with Image -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">About MGM Implant</h2>
            <p class="text-xl text-charcoal leading-relaxed">
              MGM IMPLANT has specialized in implantology since 2008, adopting the highest quality standards under the ISO 13485 quality management system. Based in Baesweiler, Germany, we maintain a strong sales and service network worldwide.
            </p>
            <p class="text-lg text-charcoal/80 leading-relaxed">
              Our commitment to German engineering excellence and precision manufacturing has made us a trusted partner for dental professionals across the globe.
            </p>
          </div>
          <div class="relative">
            <img 
              src="/assets/images/fabrica.webp" 
              alt="MGM Implant Manufacturing Facility in Germany" 
              class="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div class="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-3 rounded-xl shadow-lg">
              <span class="font-heading font-bold">Since 2008</span>
            </div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl p-8 shadow-xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            ${manufacturingStats
              .map(
                (stat) => `
              <div class="text-center">
                <div class="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">${stat.value}</div>
                <div class="text-silver text-sm md:text-base">${stat.label}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Manufacturing Excellence Section -->
        <div class="space-y-8">
          <div class="text-center space-y-4">
            <h3 class="font-heading text-3xl md:text-4xl font-bold text-secondary">German Manufacturing Excellence</h3>
            <p class="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Every MGM implant is crafted with precision in our state-of-the-art facility in Germany, using the finest Grade 4 titanium and cutting-edge CNC technology.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/assets/images/manufacturing.webp" 
                alt="Precision CNC Manufacturing of Dental Implants" 
                class="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 class="font-heading text-xl font-bold mb-2">Precision CNC Machining</h4>
                <p class="text-silver text-sm">Advanced TORNOS Swiss-type CNC machines ensure micron-level accuracy in every implant we produce.</p>
              </div>
            </div>
            
            <div class="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/assets/images/fabrica.webp" 
                alt="MGM Implant Production Facility" 
                class="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 class="font-heading text-xl font-bold mb-2">Quality Control</h4>
                <p class="text-silver text-sm">Rigorous inspection at every stage ensures each implant meets our exacting standards before leaving our facility.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Manufacturing Process -->
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-silver/30">
          <h3 class="font-heading text-3xl font-bold text-secondary text-center mb-10">Our Manufacturing Process</h3>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center space-y-4">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span class="text-primary font-heading text-2xl font-bold">1</span>
              </div>
              <h4 class="font-heading text-lg font-bold text-secondary">Material Selection</h4>
              <p class="text-charcoal/70 text-sm">Premium Grade 4 titanium sourced from certified suppliers for optimal biocompatibility.</p>
            </div>
            <div class="text-center space-y-4">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span class="text-primary font-heading text-2xl font-bold">2</span>
              </div>
              <h4 class="font-heading text-lg font-bold text-secondary">CNC Machining</h4>
              <p class="text-charcoal/70 text-sm">Swiss-precision TORNOS machines craft each implant with micron-level accuracy.</p>
            </div>
            <div class="text-center space-y-4">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span class="text-primary font-heading text-2xl font-bold">3</span>
              </div>
              <h4 class="font-heading text-lg font-bold text-secondary">Surface Treatment</h4>
              <p class="text-charcoal/70 text-sm">Proprietary M-Pure surface technology for enhanced osseointegration.</p>
            </div>
            <div class="text-center space-y-4">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span class="text-primary font-heading text-2xl font-bold">4</span>
              </div>
              <h4 class="font-heading text-lg font-bold text-secondary">Quality Assurance</h4>
              <p class="text-charcoal/70 text-sm">100% inspection and sterile packaging under ISO 13485 standards.</p>
            </div>
          </div>
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
                ${corePrograms
                  .map((program) => CoreProgramCard(program))
                  .join("")}
            </div>
        </div>

        <!-- Certifications & Quality -->
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-silver/30">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h3 class="font-heading text-3xl font-bold text-secondary">Certified Quality You Can Trust</h3>
              <p class="text-charcoal leading-relaxed">
                Our commitment to quality is backed by internationally recognized certifications and rigorous testing protocols. Every implant undergoes comprehensive quality checks before reaching your practice.
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="text-2xl mb-2">🏅</div>
                  <h4 class="font-heading font-bold text-secondary">ISO 13485</h4>
                  <p class="text-sm text-charcoal/70">Medical Device QMS</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="text-2xl mb-2">🇪🇺</div>
                  <h4 class="font-heading font-bold text-secondary">CE Marked</h4>
                  <p class="text-sm text-charcoal/70">European Conformity</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="text-2xl mb-2">🇺🇸</div>
                  <h4 class="font-heading font-bold text-secondary">FDA Registered</h4>
                  <p class="text-sm text-charcoal/70">US Market Approved</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="text-2xl mb-2">🇩🇪</div>
                  <h4 class="font-heading font-bold text-secondary">Made in Germany</h4>
                  <p class="text-sm text-charcoal/70">German Engineering</p>
                </div>
              </div>
            </div>
            <div class="relative">
              <img 
                src="/assets/images/surface-treatment.webp" 
                alt="Quality Control and Surface Treatment Process" 
                class="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Why Choose MGM Summary -->
        <div class="bg-secondary text-white rounded-2xl p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
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
