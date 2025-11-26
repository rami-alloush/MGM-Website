import { createElement, animateSection } from "../utils.js";
import { TechFeatureCard, InfoCard } from "../ui/index.js";

export const TechnologyPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md"
  );

  const smartDesignFeatures = [
    {
      icon: "🔷",
      title: "Smart Hyperid Body Design",
      description:
        "Combines tapered core for primary stability with cylindrical form for bone contact.",
      bullets: [
        "Better Primary Stability in soft bone",
        "Even Stress Distribution",
        "Ideal for all clinical situations",
      ],
    },
    {
      icon: "⭕",
      title: "Smart Cervix",
      description:
        "Thread-free cervical area for soft tissue integration and hygiene.",
      bullets: [
        "Improved Soft Tissue Adaptation",
        "Reduced Bacterial Accumulation",
        "Minimizes Crestal Bone Loss",
      ],
    },
    {
      icon: "🔩",
      title: "Smart Paper Thread",
      description: "Bone-friendly thread design for faster healing processes.",
      bullets: [
        "Improves Bone Density through compression",
        "Even Stress Distribution",
        "Self-Condensation in Soft Bone",
      ],
    },
    {
      icon: "🔺",
      title: "Smart Apex",
      description: "Pointed apex with rounded boundaries for surgical safety.",
      bullets: [
        "Atraumatic to Vital Structures",
        "Enhanced Safety in Immediate Placement",
        "Less risk of sinus perforation",
      ],
    },
    {
      icon: "🔗",
      title: "Smart Connection - 11° Morse Taper",
      description:
        "Precise internal conical connection for mechanical stability.",
      bullets: [
        "Cold Welding Effect - prevents screw loosening",
        "Superior Bacterial Seal",
        "Balanced Force Distribution",
      ],
    },
    {
      icon: "✨",
      title: "M-Pure Surface Treatment",
      description: "Moderately rough surface for enhanced osseointegration.",
      bullets: [
        "High Purity / Clean Surface",
        "Reduced Inflammatory Response",
        "Faster Healing Than Machined",
      ],
      highlighted: true,
    },
  ];

  const whyChooseItems = [
    {
      title: "Uncompromised Quality",
      description: "Top-grade raw materials tested for purity.",
    },
    { title: "Advanced Technology", description: "Precision manufacturing." },
    {
      title: "Rigorous Testing",
      description: "Every batch tested for zero defects.",
    },
    {
      title: "International Standards",
      description: "Certified ISO, CE, FDA.",
    },
    { title: "Lifetime Guarantee", description: "100% Lifetime Guarantee." },
    {
      title: "Biocompatibility First",
      description: "100% safe for the human body.",
    },
    { title: "Innovation Driven", description: "Continuous R&D." },
    { title: "Global Reach", description: "Trusted in multiple countries." },
    {
      title: "Competitive Advantage",
      description: "World-class quality at competitive prices.",
    },
  ];

  section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">Smart Design Technology</h2>
          <p class="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            MGM Implants feature a revolutionary Smart Design combining six innovative technologies for optimal clinical outcomes.
          </p>
        </div>

        <!-- Smart Design Features -->
        <div class="space-y-8">
          <h3 class="font-heading text-3xl font-bold text-secondary text-center">The 6 Smart Design Features</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            ${smartDesignFeatures
              .map((feature) => TechFeatureCard(feature))
              .join("")}
          </div>
        </div>

        <!-- M-Pure Surface Detail -->
        <div class="bg-clinical-gray rounded-2xl p-10">
          <h3 class="font-heading text-3xl font-bold text-secondary mb-6">M-Pure Surface Technology</h3>
          <p class="text-charcoal text-lg leading-relaxed mb-6">
            The MGM M-Pure surface treatment is a proprietary surface modification that involves sandblasting with biocompatible materials (titanium or oxide), with no acid-etching or chemical modification. This creates a clean, biologically safe surface with moderate roughness for optimal bone contact.
          </p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-xl"><strong class="text-secondary">Moderate Roughness:</strong> <span class="text-charcoal text-sm">Strong primary stability and bone-implant contact</span></div>
            <div class="bg-white p-4 rounded-xl"><strong class="text-secondary">High Purity:</strong> <span class="text-charcoal text-sm">Surface free of embedded particles</span></div>
            <div class="bg-white p-4 rounded-xl"><strong class="text-secondary">Biocompatible:</strong> <span class="text-charcoal text-sm">Only titanium or titanium oxide used</span></div>
          </div>
        </div>

        <!-- Manufacturing Section -->
        <div class="bg-white border border-silver rounded-2xl p-10 shadow-lg">
            <h3 class="font-heading text-3xl font-bold text-secondary mb-6">Manufacturing & Raw Materials</h3>
            <p class="text-charcoal text-lg leading-relaxed">
                "Great manufacturing starts with great quality." Using advanced machines like TORNOS ensures unmatched precision, consistency, and reliability. MGM uses premium-grade titanium to ensure biocompatibility, corrosion resistance, and seamless bone integration. Only materials meeting international standards move to production.
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
                ${whyChooseItems.map((item) => InfoCard(item)).join("")}
            </div>
        </div>
      </div>
    `;

  animateSection(section);
  return section;
};
