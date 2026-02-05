import { createElement, animateSection } from "../utils.js";
import { InfoCard, Icons } from "../ui/index.js";

export const TechnologyPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md",
  );

  // Feature Images
  const featureImages = [
    "/assets/images/tech-features/implant-body-1.webp",
    "/assets/images/tech-features/implant-body-2.webp",
    "/assets/images/tech-features/implant-body-3.webp",
    "/assets/images/tech-features/implant-body-4.webp",
    "/assets/images/tech-features/implant-body-5.webp",
    "/assets/images/tech-features/implant-body-6.webp",
  ];

  // Data for Features
  const smartHyperidDetails = {
    tapered: {
      title: "Tapered Form Benefits",
      features: [
        "Better Primary Stability - Especially useful in soft bone or immediate placement",
        "Ideal for Narrow Ridges - Requires less bone width, reducing the need for grafting",
        "Less Pressure on Cortical Bone - Minimizes bone resorption",
        "Easier Insertion Path - Guides itself during placement in angled or tight spaces",
        "Faster Osseointegration - Improved stability and bone contact",
      ],
      clinicalUses: [
        "Immediate loading cases",
        "Soft bone density (Type III/IV)",
        "Post-extraction sockets",
        "Aesthetic cases (anterior)",
      ],
    },
    cylindrical: {
      title: "Cylindrical Form Benefits",
      features: [
        "Even Stress Distribution - Ideal for dense (Type I/II) bone",
        "More Bone-to-Implant Contact Surface Area - Promotes long-term stability",
        "Simpler Surgical Protocol - Predictable drilling and placement steps",
        "Better for Bone Grafting Cases - Offers stable fit in augmented areas",
        "Useful for Splinted Prosthesis - Parallel design helps in multi-unit cases",
      ],
      clinicalUses: [
        "Dense bone areas (posterior mandible)",
        "Full arch or splinted cases",
        "Cases with high precision surgical guides",
        "Reconstructive surgeries with bone grafts",
      ],
    },
  };

  const smartCervixDetails = [
    "Improved Soft Tissue Adaptation - A smooth surface promotes better attachment of soft tissue (gingiva). Creates a tight seal around the implant, acting as a barrier to bacteria",
    "Reduced Bacterial Accumulation - No threads = fewer micro-irregularities for plaque to attach. Easier to clean and maintain over time. Reduces peri-implantitis risk",
    "Minimizes Crestal Bone Loss - Threads near the crest may cause micro-movement or stress concentration on the marginal bone. A minimally machined neck reduces mechanical irritation",
    "Better Aesthetic Outcome - In esthetic areas, a smooth collar better supports soft tissue contour and volume. Helps avoid gray shadows or recession",
    "Ideal for Subcrestal or Equicrestal Placement - Smoothly treated cervical portion can be safely placed at or slightly below bone level",
  ];

  const smartThreadDetails = {
    bonebenefits: [
      "Improvement of Bone Density and Quality through compression and osseodensification",
      "Even Stress Distribution - Minimizes bone loss due to damage and resorption",
      "Crestal Bone Preservation - Shallower threads near the top reduce pressure on cortical bone",
      "Self-Condensation in Soft Bone - Threads compress bone rather than cutting it, increasing density and stability",
      "Improves Osseointegration - Maximizes bone-to-implant contact due to thread geometry",
    ],
    doctorbenefits: [
      "Easy and Straightforward Insertion - Self-guiding shape allows precise and safe placement",
      "Ideal for Immediate Placement & Loading - Excellent stability reduces micromovement risks",
      "Versatile in All Bone Types - Performs well in both hard and soft bone",
      "Minimally Invasive Drilling Protocol - Smaller osteotomies required—preserves native bone",
      "Reduces Surgical Time & Complexity - Simplifies clinical workflow",
    ],
  };

  const smartApexDetails = {
    bonebenefits: [
      "Atraumatic to Vital Structures - Reduces risk of damaging sinus membrane, inferior alveolar nerve, or lingual plate",
      "Less Bone Damage at Insertion - Gentle on trabecular bone, minimizing microfractures and heat buildup",
      "Enhanced Safety in Immediate Placement - Minimizes risk of perforation in post-extraction sockets or thin bone walls",
      "Directs Bone Healing - Creates favorable environment for early bone regeneration and vascularization",
    ],
    doctorbenefits: [
      "Surgical Safety and Confidence - Place implants closer to critical anatomical landmarks with confidence",
      "Easier Directional Control - Reduces risk of off-axis placement or penetrating too deeply",
      "Improved Handling in Soft Bone - Facilitates smoother, more controlled insertion",
      "Less risk of sinus floor perforation in transcrestal sinus elevation procedure",
    ],
    clinicalSituations: [
      "Immediate implant placement",
      "Proximity to nerve canals or sinus cavities",
      "Soft bone (Type III/IV)",
      "Narrow or underprepared osteotomies",
    ],
  };

  const smartConnectionDetails = [
    "Cold Welding/Micromechanical Stability - The 11° angle provides a strong mechanical lock due to friction fit, minimizing micromovement and preventing screw loosening",
    "Improved Sealing (Bacterial Seal) - Tight seal and mechanical stability lead to reduced inflammatory response and crestal bone loss. Better seal means less bacterial infiltration",
    "Balanced Bone Preservation - Conical design distributes occlusal forces more evenly along the implant body, reducing stress concentration at crestal bone level",
    "Better Force Distribution - The 11° angle allows stress to be distributed axially and laterally in a balanced way, decreasing peak stress at the implant-bone interface",
    "Esthetic and Prosthetic Advantages - Platform shifting effect naturally integrates into Morse taper systems, aiding in soft tissue preservation",
    "Proven Long-Term Success - Clinical studies show excellent survival and low complication rates over the long term",
  ];

  const whyChooseItems = [
    {
      title: "Uncompromised Quality",
      description: "Top-grade raw materials tested for purity.",
      icon: Icons.ShieldCheck,
    },
    {
      title: "Advanced Technology",
      description: "Precision manufacturing.",
      icon: Icons.Microscope,
    },
    {
      title: "Rigorous Testing",
      description: "Every batch tested for zero defects.",
      icon: Icons.BadgeCheck,
    },
    {
      title: "International Standards",
      description: "Certified ISO, CE, FDA.",
      icon: Icons.Globe,
    },
    {
      title: "Lifetime Guarantee",
      description: "100% Lifetime Guarantee.",
      icon: Icons.Handshake,
    },
    {
      title: "Biocompatibility First",
      description: "100% safe for the human body.",
      icon: Icons.Beaker,
    },
    {
      title: "Innovation Driven",
      description: "Continuous R&D.",
      icon: Icons.LightBulb,
    },
    {
      title: "Global Reach",
      description: "Trusted in multiple countries.",
      icon: Icons.Globe,
    },
    {
      title: "Competitive Advantage",
      description: "World-class quality at competitive prices.",
      icon: Icons.Target,
    },
  ];

  // Helper to get content for each feature
  const getFeatureContent = (index) => {
    switch (index) {
      case 0: // Smart Hyperid Body Design
        return `
          <div class="bg-gradient-to-br from-clinical-gray to-white rounded-2xl p-8 border border-silver">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">${Icons.Cube}</div>
                <h3 class="font-heading text-2xl font-bold text-secondary">Smart Hyperid Body Design</h3>
             </div>
             <p class="text-charcoal text-lg leading-relaxed mb-8">
               MGM's unique smart design gives dentists the benefits of both tapered and cylindrical implant designs in one system. This hybrid approach ensures optimal performance across all clinical situations.
             </p>
             <div class="space-y-8">
               <div class="bg-white rounded-xl p-6 border border-silver">
                 <h4 class="font-bold text-secondary text-lg mb-4">${smartHyperidDetails.tapered.title}</h4>
                 <ul class="space-y-2 text-charcoal text-sm mb-4">
                   ${smartHyperidDetails.tapered.features.map((f) => `<li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span> ${f}</li>`).join("")}
                 </ul>
                 <div class="mt-4 pt-4 border-t border-silver">
                   <p class="text-xs font-semibold text-secondary mb-2">Clinical Uses:</p>
                   <div class="flex flex-wrap gap-2">
                     ${smartHyperidDetails.tapered.clinicalUses.map((u) => `<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">${u}</span>`).join("")}
                   </div>
                 </div>
               </div>
               <div class="bg-white rounded-xl p-6 border border-silver">
                 <h4 class="font-bold text-secondary text-lg mb-4">${smartHyperidDetails.cylindrical.title}</h4>
                 <ul class="space-y-2 text-charcoal text-sm mb-4">
                   ${smartHyperidDetails.cylindrical.features.map((f) => `<li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span> ${f}</li>`).join("")}
                 </ul>
                 <div class="mt-4 pt-4 border-t border-silver">
                   <p class="text-xs font-semibold text-secondary mb-2">Clinical Uses:</p>
                   <div class="flex flex-wrap gap-2">
                     ${smartHyperidDetails.cylindrical.clinicalUses.map((u) => `<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">${u}</span>`).join("")}
                   </div>
                 </div>
               </div>
             </div>
          </div>
        `;
      case 1: // Smart Cervix
        return `
          <div class="bg-white rounded-2xl p-8 border border-silver shadow-sm">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">${Icons.Circle}</div>
                <h3 class="font-heading text-2xl font-bold text-secondary">Smart Cervix</h3>
             </div>
             <p class="text-charcoal text-lg leading-relaxed mb-6">
               The Smart Cervix plays a critical role in soft tissue integration, hygiene, and crestal bone preservation. A thread-free cervical area provides multiple clinical advantages.
             </p>
             <div class="space-y-4">
               ${smartCervixDetails
                 .map((detail) => {
                   const [title, ...desc] = detail.split(" - ");
                   return `<div class="bg-clinical-gray p-4 rounded-xl"><strong class="text-secondary block mb-1">${title}</strong><span class="text-charcoal text-sm">${desc.join(" - ")}</span></div>`;
                 })
                 .join("")}
             </div>
          </div>
        `;
      case 2: // Smart Paper Thread
        return `
          <div class="bg-gradient-to-br from-clinical-gray to-white rounded-2xl p-8 border border-silver">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">${Icons.Bolt}</div>
                <h3 class="font-heading text-2xl font-bold text-secondary">Smart Paper Thread Design</h3>
             </div>
             <p class="text-charcoal text-lg leading-relaxed mb-8">
               MGM implants have a unique paper thread design machined in a smart manner. This bone-friendly thread cuts inside the bone without distraction, promoting faster healing processes.
             </p>
             <div class="space-y-6">
               <div class="bg-white rounded-xl p-6 border border-silver">
                 <h4 class="font-bold text-secondary text-xl mb-4 flex items-center gap-2">🦴 Benefits for Bone</h4>
                 <ul class="space-y-2 text-charcoal text-sm">
                   ${smartThreadDetails.bonebenefits.map((f) => `<li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span> ${f}</li>`).join("")}
                 </ul>
               </div>
               <div class="bg-white rounded-xl p-6 border border-silver">
                 <h4 class="font-bold text-secondary text-xl mb-4 flex items-center gap-2">👨‍⚕️ Benefits for Doctors</h4>
                 <ul class="space-y-2 text-charcoal text-sm">
                   ${smartThreadDetails.doctorbenefits.map((f) => `<li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span> ${f}</li>`).join("")}
                 </ul>
               </div>
             </div>
          </div>
        `;
      case 3: // Smart Apex
        return `
          <div class="bg-white rounded-2xl p-8 border border-silver shadow-sm">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">${Icons.ChevronDown}</div>
                <h3 class="font-heading text-2xl font-bold text-secondary">Smart Apex Design</h3>
             </div>
             <p class="text-charcoal text-lg leading-relaxed mb-8">
               MGM implants feature a smart apical design with pointed apex and rounded boundaries that provides significant benefits for both bone preservation and surgical safety.
             </p>
             <div class="space-y-6 mb-8">
               <div class="bg-clinical-gray rounded-xl p-6">
                 <h4 class="font-bold text-secondary text-xl mb-4 flex items-center gap-2">🦴 Benefits for Bone</h4>
                 <ul class="space-y-2 text-charcoal text-sm">
                   ${smartApexDetails.bonebenefits.map((f) => `<li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span> ${f}</li>`).join("")}
                 </ul>
               </div>
               <div class="bg-clinical-gray rounded-xl p-6">
                 <h4 class="font-bold text-secondary text-xl mb-4 flex items-center gap-2">👨‍⚕️ Benefits for Doctors</h4>
                 <ul class="space-y-2 text-charcoal text-sm">
                   ${smartApexDetails.doctorbenefits.map((f) => `<li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span> ${f}</li>`).join("")}
                 </ul>
               </div>
             </div>
             <div class="bg-primary/5 rounded-xl p-6">
               <p class="text-sm font-semibold text-secondary mb-3">Ideal Clinical Situations:</p>
               <div class="flex flex-wrap gap-2">
                 ${smartApexDetails.clinicalSituations.map((s) => `<span class="bg-white text-primary px-3 py-1 rounded-full text-sm border border-primary/20">${s}</span>`).join("")}
               </div>
             </div>
          </div>
        `;
      case 4: // Smart Connection
        return `
          <div class="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-silver">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">${Icons.Link}</div>
                <h3 class="font-heading text-2xl font-bold text-secondary">Smart Connection - 11° Morse Taper</h3>
             </div>
             <p class="text-charcoal text-lg leading-relaxed mb-8">
               The Morse taper connection with 11° angle is a highly precise internal conical connection providing clinical advantages in both mechanical stability and biological outcomes.
             </p>
             <div class="space-y-4">
               ${smartConnectionDetails
                 .map((detail) => {
                   const [title, ...desc] = detail.split(" - ");
                   return `<div class="bg-white p-4 rounded-xl border border-silver hover:border-primary transition-colors"><strong class="text-secondary block mb-1">${title}</strong><span class="text-charcoal text-sm">${desc.join(" - ")}</span></div>`;
                 })
                 .join("")}
             </div>
          </div>
        `;
      case 5: // M-Pure Surface
        return `
          <div class="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl">${Icons.Sparkles}</div>
                <h3 class="font-heading text-2xl font-bold">M-Pure Surface Technology</h3>
             </div>
             <p class="text-white/90 text-lg leading-relaxed mb-8">
               The MGM M-Pure surface treatment is a proprietary surface modification involved sandblasting with biocompatible materials, with no acid-etching. This creates a clean, biologically safe surface with moderate roughness.
             </p>
             <div class="grid gap-4 mb-8">
               <div class="bg-white/10 backdrop-blur p-4 rounded-xl"><strong class="text-white block mb-1">Moderate Roughness</strong><span class="text-white/80 text-sm">Strong primary stability and bone-implant contact (Ra 1.42-1.74 µm)</span></div>
               <div class="bg-white/10 backdrop-blur p-4 rounded-xl"><strong class="text-white block mb-1">High Purity</strong><span class="text-white/80 text-sm">Surface free of embedded particles, improves biocompatibility</span></div>
               <div class="bg-white/10 backdrop-blur p-4 rounded-xl"><strong class="text-white block mb-1">Biocompatible</strong><span class="text-white/80 text-sm">Only titanium or titanium oxide used</span></div>
             </div>
             <div class="bg-white/10 backdrop-blur rounded-xl p-6">
               <h4 class="font-bold text-white mb-4">Surface Treatment Process</h4>
               <ul class="grid gap-3 text-white/90 text-sm">
                 <li class="flex items-start gap-2"><span class="text-accent">•</span> Sandblasting with biocompatible materials</li>
                 <li class="flex items-start gap-2"><span class="text-accent">•</span> No acid-etching or chemical modification</li>
                 <li class="flex items-start gap-2"><span class="text-accent">•</span> Final surfaces free from contaminants</li>
                 <li class="flex items-start gap-2"><span class="text-accent">•</span> Faster healing than machined implants</li>
               </ul>
             </div>
          </div>
        `;
      default:
        return "";
    }
  };

  section.innerHTML = `
      <div class="max-w-7xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-6">
          <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">Smart Design Technology</h2>
          <p class="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            MGM Implants feature a revolutionary Smart Design combining six innovative technologies for optimal clinical outcomes. Each feature is engineered to provide benefits for both bone health and clinical workflow.
          </p>
        </div>

        <!-- Sticky Sidebar & Features Section -->
        <div class="relative flex flex-col lg:flex-row gap-8 items-start">
           <!-- Sticky Image Sidebar -->
           <div class="hidden lg:block lg:w-1/2 sticky top-32 h-[calc(80vh)]">
               <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-silver bg-white">
                   ${featureImages
                     .map(
                       (src, idx) => `
                     <img 
                       src="${src}" 
                       id="tech-img-${idx}"
                       class="absolute inset-0 w-full h-full object-contain p-8 bg-white transition-opacity duration-700 ease-in-out ${idx === 0 ? "opacity-100" : "opacity-0"}" 
                       alt="Feature ${idx + 1}"
                     />
                   `,
                     )
                     .join("")}
               </div>
           </div>

           <!-- Scrollable Content -->
           <div class="w-full lg:w-1/2 space-y-24 py-10" id="features-container">
               ${featureImages
                 .map(
                   (_, idx) => `
                  <div class="feature-section scroll-mt-32" data-index="${idx}">
                    ${
                      // Also render image for mobile view
                      `<div class="lg:hidden mb-6 rounded-xl overflow-hidden shadow-lg border border-silver bg-white aspect-[4/3]">
                         <img src="${featureImages[idx]}" class="w-full h-full object-contain p-4" alt="Feature ${idx + 1}" />
                       </div>`
                    }
                    ${getFeatureContent(idx)}
                  </div>
               `,
                 )
                 .join("")}
           </div>
        </div>

        <!-- Manufacturing Section -->
        <div class="bg-white border border-silver rounded-2xl p-10 shadow-lg mt-20">
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
                <div class="w-48 h-48 text-primary">${Icons.ShieldCheck}</div>
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

  // Scroll Interaction Logic
  requestAnimationFrame(() => {
    const featureSections = section.querySelectorAll(".feature-section");
    const featureImagesEls = section.querySelectorAll("[id^='tech-img-']");

    if (featureSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));

            featureImagesEls.forEach((img, imgIdx) => {
              if (imgIdx === index) {
                img.classList.remove("opacity-0");
                img.classList.add("opacity-100");
                img.style.zIndex = "10";
              } else {
                img.classList.remove("opacity-100");
                img.classList.add("opacity-0");
                img.style.zIndex = "0";
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // Trigger when element is in middle 60% of viewport
        threshold: 0.4,
      },
    );

    featureSections.forEach((section) => observer.observe(section));
  });

  animateSection(section);
  return section;
};
