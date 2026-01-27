import { createElement, animateSection } from "../utils.js";
import { CoreProgramCard, DarkSection, Icons } from "../ui/index.js";

export const AboutPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-24 px-6 md:px-20 about-page-bg",
  );

  const corePrograms = [
    {
      icon: Icons.LightBulb,
      image: "/assets/images/iINNOVATIVE.webp",
      title: "iInnovate",
      description:
        "Providing customers with the latest technologies via the R&D department and scientific team.",
    },
    {
      icon: Icons.BookOpen,
      image: "/assets/images/iLEARN.webp",
      title: "iLearn",
      description:
        "Providing latest techniques and training support for better product usage.",
    },
    {
      icon: Icons.Globe,
      image: "/assets/images/iEXPLORE.webp",
      title: "iExplore",
      description:
        "Connecting with customers through exhibitions, scientific events, and congresses to understand their needs.",
    },
    {
      icon: Icons.Handshake,
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
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- Manufacturing Excellence Section -->
        <div class="space-y-8">
          <div class="space-y-16 mb-16">
            <!-- AAD Dental Intro -->
            <div class="text-center max-w-4xl mx-auto space-y-6">
              <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase">
                The Manufacturer
              </span>
              <h3 class="font-heading text-3xl md:text-5xl font-bold text-secondary">
                Proudly Manufactured by AAD Dental GmbH
              </h3>
              <p class="text-xl text-charcoal/80 leading-relaxed">
                MGM Implants is proudly manufactured by AAD Dental GmbH, a German company with more than 15 years of OEM manufacturing experience in the dental implant industry.
              </p>
              <div class="space-y-4 text-lg text-charcoal/70 leading-relaxed text-justify md:text-center">
                <p>
                  For over a decade and a half, AAD Dental GmbH has been the trusted manufacturing partner behind numerous well-known dental implant brands worldwide, producing high-quality systems according to the strictest German and European standards.
                </p>
                <p>
                  As the parent company and owner of MGM Implants, AAD Dental GmbH operates one of the most advanced and respected dental implant manufacturing facilities in Germany, and one of the strongest in Europe. The factory combines state-of-the-art CNC machining, medical-grade materials, and a fully certified quality management system to deliver consistent, reliable, and high-performance implant solutions.
                </p>
              </div>
            </div>

            <!-- MEET Academy & Research Section -->
            <div class="relative overflow-hidden rounded-3xl shadow-2xl group my-20">
               <div class="absolute inset-0 bg-secondary"></div>
               <div class="relative grid lg:grid-cols-2 min-h-[500px]">
                  <!-- Image Side -->
                  <div class="relative h-64 lg:h-full overflow-hidden order-1 lg:order-2">
                     <img 
                        src="/assets/images/Research.webp" 
                        alt="MEET Academy Research and Development" 
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-secondary/90 via-secondary/40 to-transparent"></div>
                  </div>
                  
                  <!-- Content Side -->
                  <div class="relative p-8 md:p-12 lg:p-14 flex flex-col justify-center text-white space-y-8 order-2 lg:order-1">
                     <div class="flex items-center gap-5">
                        <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-accent border border-white/10 shadow-inner">
                          ${Icons.Microscope}
                        </div>
                        <div>
                            <h4 class="font-heading text-3xl md:text-4xl font-bold text-white mb-1">MEET Academy</h4>
                            <p class="text-accent font-medium tracking-wide uppercase text-sm">Center for Innovation & Education</p>
                        </div>
                     </div>
                     
                     <div class="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                           Beyond manufacturing, <strong class="text-white font-semibold">AAD Dental GmbH</strong> is deeply committed to innovation. The company operates its own continuing education center, <strong>MEET Academy</strong>, which plays a vital role in ongoing research and development (R&D).
                        </p>
                        <p>
                           Through real clinical feedback, hands-on training, and continuous collaboration with dental professionals, MEET Academy directly contributes to product optimization and technological advancement within the factory.
                        </p>
                     </div>
                     
                     <div class="flex items-center gap-2 text-accent font-medium uppercase tracking-widest text-sm pt-4">
                        <span>Excellence in Research</span>
                        <div class="h-px w-12 bg-accent"></div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Global Presence & Conclusion Grid -->
            <div class="grid md:grid-cols-2 gap-6 md:gap-8">
                <div class="bg-secondary text-white p-8 md:p-10 rounded-2xl relative overflow-hidden group">
                   <div class="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                       <div class="w-48 h-48">${Icons.Globe}</div>
                   </div>
                   <h4 class="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                      Global Presence
                   </h4>
                   <p class="text-silver leading-relaxed relative z-10">
                      MGM Implants and AAD Dental GmbH maintain a strong and continuous presence at the world’s most influential dental congresses, exhibitions, and scientific events, reinforcing their position as active contributors to the global implantology community.
                   </p>
                </div>

                <div class="bg-white border border-silver/30 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                   <h4 class="font-heading text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                      <span class="text-primary">✦</span> Experience & Trust
                   </h4>
                   <p class="text-charcoal/80 leading-relaxed">
                      This unique combination of OEM expertise, German manufacturing excellence, continuous education, and real-world clinical feedback positions MGM Implants as a brand built on experience, trust, and long-term success.
                   </p>
                </div>
            </div>
            
            <!-- Transition to Images (Existing Header) -->
             <div class="text-center mt-16">
                 <h3 class="font-heading text-2xl md:text-3xl font-bold text-secondary">State-of-the-Art Facilities</h3>
                 <div class="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
             </div>
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

        <!-- Vision & Mission -->
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white backdrop-blur-md border border-silver rounded-2xl p-8 space-y-6 shadow-lg">
            <div class="w-16 h-16 text-primary mb-4">${Icons.Target}</div>
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
            <div class="w-16 h-16 text-primary mb-4">${Icons.Briefcase}</div>
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
                  <div class="w-10 h-10 text-secondary mb-2">${
                    Icons.BadgeCheck
                  }</div>
                  <h4 class="font-heading font-bold text-secondary">ISO 13485</h4>
                  <p class="text-sm text-charcoal/70">Medical Device QMS</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="w-10 h-10 text-secondary mb-2">${Icons.Flag}</div>
                  <h4 class="font-heading font-bold text-secondary">CE Marked</h4>
                  <p class="text-sm text-charcoal/70">European Conformity</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="w-10 h-10 text-secondary mb-2">${
                    Icons.Globe
                  }</div>
                  <h4 class="font-heading font-bold text-secondary">FDA Registered</h4>
                  <p class="text-sm text-charcoal/70">US Market Approved</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="w-10 h-10 text-secondary mb-2">${Icons.Flag}</div>
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
                <div class="w-16 h-16 mx-auto text-accent mb-3">${
                  Icons.Microscope
                }</div>
                <h4 class="font-heading text-xl font-bold text-accent">Advanced Technology</h4>
                <p class="text-silver">Precision manufacturing using advanced machines like TORNOS.</p>
              </div>
              <div class="text-center space-y-3">
                <div class="w-16 h-16 mx-auto text-accent mb-3">${
                  Icons.Globe
                }</div>
                <h4 class="font-heading text-xl font-bold text-accent">Global Reach</h4>
                <p class="text-silver">Trusted in multiple countries with a strong sales network.</p>
              </div>
              <div class="text-center space-y-3">
                <div class="w-16 h-16 mx-auto text-accent mb-3">${
                  Icons.ShieldCheck
                }</div>
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
