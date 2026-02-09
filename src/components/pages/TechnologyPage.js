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
           <div class="hidden lg:block lg:w-1/3 sticky top-32 h-[calc(80vh)] flex items-center justify-center">
               <div id="implant-viewer-container" class="relative w-[80%] h-full rounded-2xl overflow-hidden shadow-2xl border border-silver bg-white/50 backdrop-blur-sm">
                  <!-- 3D Viewer will be injected here -->
               </div>
           </div>

           <!-- Scrollable Content -->
           <div class="w-full lg:w-2/3 space-y-24 py-10" id="features-container">
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

        <!-- Manufacturing Process -->
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-silver/30 mt-20">
          <h3 class="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Our Manufacturing Process</h3>
          
          <!-- 1. Material Selection -->
          <div class="mb-16">
            <div class="flex items-start gap-6 mb-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span class="text-primary font-heading text-2xl font-bold">1</span>
              </div>
              <div class="flex-1">
                <h4 class="font-heading text-2xl font-bold text-secondary mb-4">Material Selection</h4>
                <p class="text-lg text-charcoal/80 mb-4 font-medium">Premium American Titanium – Tested for Excellence</p>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 mb-6">
              <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/Material_Selection_titanium.webp', 'Premium American Titanium Material')">
                <img 
                  src="/assets/images/Material_Selection_titanium.webp" 
                  alt="Premium American Titanium Material" 
                  class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/Material_Selection_inspection_certificate.webp', 'Material Inspection Certificate and Testing')">
                <img 
                  src="/assets/images/Material_Selection_inspection_certificate.webp" 
                  alt="Material Inspection Certificate and Testing" 
                  class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <p class="text-charcoal leading-relaxed mb-4">
              MGM Implants uses only high-grade American titanium for all its dental implants.
              Every single batch undergoes individual, rigorous testing to ensure it meets all required standards for:
            </p>
            <ul class="grid md:grid-cols-2 gap-3 mb-4">
              <li class="flex items-center gap-2">
                <span class="text-primary">✔️</span>
                <span class="text-charcoal font-medium">Biocompatibility</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✔️</span>
                <span class="text-charcoal font-medium">Mechanical strength</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✔️</span>
                <span class="text-charcoal font-medium">Corrosion resistance</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✔️</span>
                <span class="text-charcoal font-medium">Long-term stability</span>
              </li>
            </ul>
            <p class="text-charcoal leading-relaxed">
              No batch is released until it has successfully passed every single test, guaranteeing consistent quality and predictable clinical performance for every implant.
            </p>
          </div>

          <!-- 2. CNC Machining -->
          <div class="mb-16">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-start gap-6 mb-4">
                  <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span class="text-primary font-heading text-2xl font-bold">2</span>
                  </div>
                  <h4 class="font-heading text-2xl font-bold text-secondary">CNC Machining</h4>
                </div>
                <p class="text-lg text-charcoal/80 mb-4 font-medium">Swiss Precision, German Excellence</p>
                <p class="text-charcoal leading-relaxed mb-4">
                  MGM Implants are manufactured using Swiss TORNOS machining technology, renowned worldwide for its unmatched precision.
                </p>
                <p class="text-charcoal leading-relaxed mb-4">
                  This extreme level of accuracy is essential to meet the exceptionally high standards of German manufacturing, where every detail must be executed to the highest global level.
                </p>
                <p class="text-charcoal leading-relaxed font-medium">
                  By combining Swiss micron-level precision with German engineering excellence, MGM Implants achieve a manufacturing quality that represents the very top tier of dental implant production worldwide.
                </p>
              </div>
              <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/CNC_Machining.webp', 'TORNOS Swiss CNC Precision Machining')">
                <img 
                  src="/assets/images/CNC_Machining.webp" 
                  alt="TORNOS Swiss CNC Precision Machining" 
                  class="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <!-- 3. Surface Treatment -->
          <div class="mb-16">
            <div class="flex items-start gap-6 mb-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span class="text-primary font-heading text-2xl font-bold">3</span>
              </div>
              <div class="flex-1">
                <h4 class="font-heading text-2xl font-bold text-secondary mb-6">Surface Treatment</h4>
                
                <!-- M-Pure Surface Treatment -->
                <div class="mb-8">
                  <p class="text-lg text-charcoal/80 mb-4 font-medium">M-Pure Surface Treatment</p>
                  
                  <div class="grid md:grid-cols-2 gap-8 mb-6">
                    <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/M-Pure_surface.webp', 'M-Pure Surface Treatment Technology')">
                      <img 
                        src="/assets/images/M-Pure_surface.webp" 
                        alt="M-Pure Surface Treatment Technology" 
                        class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/surface-treatment-hydro.webp', 'Hydrophilic Surface Treatment Process')">
                      <img 
                        src="/assets/images/surface-treatment-hydro.webp" 
                        alt="Hydrophilic Surface Treatment Process" 
                        class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <p class="text-charcoal leading-relaxed mb-3">
                    At MGM Implants, surface purity is not an option — it is a core philosophy.
                  </p>
                  <p class="text-charcoal leading-relaxed mb-4">
                    Our German-engineered M-Pure Surface Treatment ensures an ultra-clean implant surface, completely free from contaminants, residues, and acid remnants. Every implant undergoes meticulous surface processing and validation to achieve maximum biocompatibility, optimal bone response, and long-term clinical stability.
                  </p>
                  <p class="text-charcoal leading-relaxed font-medium italic mb-4">
                    Because true osseointegration begins with absolute purity.
                  </p>
                  <ul class="grid md:grid-cols-2 gap-3 mb-6">
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Promotes faster osseointegration</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Improves primary and secondary stability</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Clean surface treatment without aggressive acid residues</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Designed for predictable healing and long-term success</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Clinically validated performance</span>
                    </li>
                  </ul>
                </div>

                <!-- Surface Roughness -->
                <div class="border-t border-silver/30 pt-8">
                  <p class="text-lg text-charcoal/80 mb-4 font-medium">Precision-Engineered Surface Roughness</p>
                  
                  <div class="grid md:grid-cols-2 gap-8 items-center mb-6">
                    <div>
                      <p class="text-charcoal leading-relaxed mb-4">
                        At MGM Implants, surface roughness is not adjusted — it is engineered to perfection.
                      </p>
                      <p class="text-charcoal leading-relaxed mb-4">
                        Our implant surface features precisely optimized micro-roughness, scientifically designed to maximize bone–implant contact and create the ideal biological environment for osseointegration.
                      </p>
                    </div>
                    <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/surface_roughness.png', 'Precision-Engineered Surface Roughness Microscopy')">
                      <img 
                        src="/assets/images/surface_roughness.png" 
                        alt="Precision-Engineered Surface Roughness Microscopy" 
                        class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <p class="text-charcoal leading-relaxed mb-4">
                    Thanks to its exceptional hydrophilicity, the MGM surface actively attracts blood proteins and osteogenic cells from the first moments after placement. This immediate biological response accelerates clot formation, initiates rapid healing, and supports early and stable bone integration — starting from day one inside the bone.
                  </p>
                  <div class="bg-linear-to-r from-primary/5 to-secondary/5 p-6 rounded-xl mb-4">
                    <p class="text-charcoal font-medium italic text-center">
                      This is not just a surface.<br/>
                      It is a healing-activated interface — engineered in Germany for long-term success.
                    </p>
                  </div>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Enhances bone-to-implant contact (BIC)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✓</span>
                      <span class="text-charcoal">Micro- and nano-structured implant bone surface</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. Quality Assurance -->
          <div class="border-t-2 border-silver/30 pt-12">
            <div class="flex items-start gap-6 mb-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span class="text-primary font-heading text-2xl font-bold">4</span>
              </div>
              <div class="flex-1">
                <h4 class="font-heading text-2xl font-bold text-secondary mb-4">Quality Assurance</h4>
                <p class="text-lg text-charcoal/80 mb-4 font-medium">Engineered for Complete Clinical Confidence</p>
                <p class="text-charcoal leading-relaxed mb-6">
                  At MGM Implants, every design and testing step is driven by four essential pillars of implant success. 100% inspection and sterile packaging under ISO 13485 standards ensure every implant meets our exacting requirements.
                </p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/Quality_Control_Testing.webp', 'Quality Control Testing Process')">
                <img 
                  src="/assets/images/Quality_Control_Testing.webp" 
                  alt="Quality Control Testing Process" 
                  class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onclick="window.openLightbox('/assets/images/Quality_Control_Test_Fatigue.webp', 'Fatigue Testing and Quality Control')">
                <img 
                  src="/assets/images/Quality_Control_Test_Fatigue.webp" 
                  alt="Fatigue Testing and Quality Control" 
                  class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="bg-linear-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
                <h5 class="font-heading text-xl font-bold text-secondary mb-3">Biocompatibility</h5>
                <p class="text-charcoal leading-relaxed">
                  Ensures seamless integration with human tissue, allowing the implant to interact naturally with bone and soft tissue without adverse reactions.
                </p>
              </div>
              
              <div class="bg-linear-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
                <h5 class="font-heading text-xl font-bold text-secondary mb-3">Mechanical Strength</h5>
                <p class="text-charcoal leading-relaxed">
                  Guarantees the implant's ability to withstand functional loads and masticatory forces over time without deformation or failure.
                </p>
              </div>
              
              <div class="bg-linear-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
                <h5 class="font-heading text-xl font-bold text-secondary mb-3">Corrosion Resistance</h5>
                <p class="text-charcoal leading-relaxed">
                  Protects the implant surface from the aggressive oral environment, preserving material integrity and preventing ion release.
                </p>
              </div>
              
              <div class="bg-linear-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
                <h5 class="font-heading text-xl font-bold text-secondary mb-3">Long-term Stability</h5>
                <p class="text-charcoal leading-relaxed">
                  The result of combining all these factors—delivering predictable performance, sustained osseointegration, and lasting clinical success.
                </p>
              </div>
            </div>

            <div class="text-center">
              <p class="text-charcoal font-medium text-lg">
                Together, these principles define the quality standard of MGM Implants — <span class="text-primary font-bold">engineered in Germany for reliability that lasts.</span>
              </p>
            </div>
          </div>
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
    // Initialize 3D Viewer
    const viewerContainer = section.querySelector("#implant-viewer-container");
    let viewer;
    if (viewerContainer) {
      import("../ui/ThreeImplantViewer.js").then(({ ImplantViewer }) => {
        viewer = new ImplantViewer(viewerContainer);
      });
    }

    const featureSections = section.querySelectorAll(".feature-section");
    // const featureImagesEls = section.querySelectorAll("[id^='tech-img-']"); // No longer needed

    if (featureSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));

            if (viewer) {
              viewer.setSection(index);
            }

            // featureImagesEls.forEach(...) // Removed image toggling logic
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
