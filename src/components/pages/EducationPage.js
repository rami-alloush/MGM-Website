import { createElement, animateSection } from "../utils.js";

export const ResourcesPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-8 bg-white/90 backdrop-blur-md"
  );

  const resources = [
    {
      icon: "📄",
      title: "Surgical & Prosthetic Protocols",
      description: "Detailed step-by-step guides and video tutorials.",
      linkText: "Download PDF →",
    },
    {
      icon: "💻",
      title: "Digital Workflow Guides",
      description: "Integration with exocad, 3Shape, and other CAD software.",
      linkText: "View Guides →",
    },
    {
      icon: "🔬",
      title: "Scientific Documentation",
      description: "Clinical studies, white papers, and research articles.",
      linkText: "Read Research →",
    },
  ];

  section.innerHTML = `
    <div class="max-w-7xl mx-auto space-y-20">
      <!-- Intro -->
      <div class="text-center space-y-6">
        <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">Clinical Support & Resources</h2>
        <p class="text-xl text-charcoal max-w-3xl mx-auto">
          Empowering clinicians with knowledge and resources for excellence in implant dentistry.
        </p>
      </div>

      <!-- Resources -->
      <div class="max-w-3xl mx-auto space-y-8">
        <h3 class="font-heading text-3xl font-bold text-secondary border-b border-silver pb-4">Resources</h3>
        <div class="grid gap-6">
          ${resources
            .map(
              (item) => `
            <div class="bg-white border border-silver rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
              <div class="text-3xl">${item.icon}</div>
              <div>
                <h4 class="font-bold text-secondary text-lg">${item.title}</h4>
                <p class="text-charcoal text-sm mb-2">${item.description}</p>
                <a href="#" class="text-primary text-sm font-semibold hover:underline pointer-events-none opacity-50 cursor-not-allowed">${item.linkText}</a>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <!-- Distributor Zone -->
      <div class="bg-secondary text-white rounded-2xl p-12 relative overflow-hidden text-center">
        <div class="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <h3 class="font-heading text-3xl font-bold text-white">Distributor Zone</h3>
          <p class="text-silver">
            Exclusive access for our authorized partners. Download marketing materials, price lists, and place orders.
          </p>
          <a href="https://portal.mgmimplant.com/" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
            Partner Login
          </a>
        </div>
      </div>
    </div>
  `;

  animateSection(section);
  return section;
};
