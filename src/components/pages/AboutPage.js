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
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDgxMjY2ODQzNDYzNzUx",
    },
    {
      icon: Icons.BookOpen,
      image: "/assets/images/iLEARN.webp",
      title: "iLearn",
      description:
        "Providing latest techniques and training support for better product usage.",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODYzNzAyOTcxNTgzNDQ3",
    },
    {
      icon: Icons.Globe,
      image: "/assets/images/iEXPLORE.webp",
      title: "iExplore",
      description:
        "Connecting with customers through exhibitions, scientific events, and congresses to understand their needs.",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTAzMTE3ODk0ODQ1NDM3",
    },
    {
      icon: Icons.Handshake,
      image: "/assets/images/iPRACTICE.webp",
      title: "iPractice",
      description:
        "Allowing customers to share case challenges and clinical studies.",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDIzNjkxNzk3NjIyNTQ5",
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
                        src="/assets/images/MEET Academy.webp" 
                        alt="MEET Academy Research and Development" 
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-secondary/90 via-secondary/40 to-transparent"></div>
                  </div>
                  
                  <!-- Content Side -->
                  <div class="relative p-8 md:p-12 lg:p-14 flex flex-col justify-center text-white space-y-8 order-2 lg:order-1">
                     <div class="flex items-center gap-5">
                        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center justify-center border border-white/10 shadow-inner">
                          <img src="/assets/images/MEET-Academcy-logo.png" alt="MEET Academy Logo" class="h-16 w-auto object-contain filter invert brightness-0 saturate-100 invert-100" />
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
                     
                     <a href="https://education.mgmimplant.com/" rel="noopener noreferrer" class="flex items-center gap-2 text-accent font-medium uppercase tracking-widest text-sm pt-4 hover:text-white transition-colors group/link">
                        <div class="w-5 h-5">${Icons.BookOpen}</div>
                        <span>News and Education</span>
                        <div class="h-px w-12 bg-accent group-hover/link:bg-white transition-colors"></div>
                     </a>
                  </div>
               </div>
            </div>

            <!-- Global Presence & Conclusion Grid -->
            <div class="grid md:grid-cols-2 gap-6 md:gap-8">
                <a href="https://portal.mgmimplant.com/" target="_blank" rel="noopener noreferrer">
                  <div class="bg-secondary text-white p-8 md:p-10 rounded-2xl relative overflow-hidden group">
                    <div class="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                        <div class="w-48 h-48">${Icons.Globe}</div>
                    </div>
                    <h4 class="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                        <div class="w-8 h-8 text-accent">${Icons.Globe}</div>
                        Global Presence
                    </h4>
                    <p class="text-silver leading-relaxed relative z-10">
                        MGM Implants and AAD Dental GmbH maintain a strong and continuous presence at the world’s most influential dental congresses, exhibitions, and scientific events, reinforcing their position as active contributors to the global implantology community.
                    </p>
                  </div>
                </a>

                <div class="bg-white border border-silver/30 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                   <h4 class="font-heading text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                      <div class="w-8 h-8 text-primary">${Icons.Star}</div>
                      Experience & Trust
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
                src="/assets/images/implant-washing.webp" 
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
                  <div class="w-24 h-10 text-secondary mb-2">${Icons.ISO}</div>
                  <h4 class="font-heading font-bold text-secondary">ISO 13485</h4>
                  <p class="text-sm text-charcoal/70">Medical Device QMS</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="w-16 h-10 text-secondary mb-2">${Icons.CE}</div>
                  <h4 class="font-heading font-bold text-secondary">CE Marked</h4>
                  <p class="text-sm text-charcoal/70">European Conformity</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="w-20 h-10 text-secondary mb-2">${Icons.FDA}</div>
                  <h4 class="font-heading font-bold text-secondary">FDA Registered</h4>
                  <p class="text-sm text-charcoal/70">US Market Approved</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-silver/20">
                  <div class="w-16 h-10 mb-2">${Icons.GermanyFlag}</div>
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
