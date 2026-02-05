import { createElement, animateSection } from "../utils.js";

export const GuaranteePolicyPage = () => {
  const container = createElement("div", "w-full pt-20");

  // Hero Section
  const heroSection = createElement(
    "section",
    "bg-secondary text-white py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden",
  );
  heroSection.innerHTML = `
    <div class="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
    <div class="max-w-screen-2xl mx-auto relative z-10 text-center">
      <h1 class="font-heading text-4xl md:text-6xl font-bold mb-6">Guarantee & Policy</h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Confidence backed by quality, precision, and responsibility.
      </p>
    </div>
  `;

  // Content Section
  const contentSection = createElement("section", "py-20 bg-white");
  contentSection.innerHTML = `
    <div class="max-w-4xl mx-auto px-6 md:px-12">
      <div class="space-y-12">
        
        <!-- Intro -->
        <div>
          <h2 class="font-heading text-3xl font-bold text-secondary mb-6">Dental Implant Failure Policy</h2>
          <p class="text-lg text-charcoal leading-relaxed mb-6">
            At MGM Implants, product quality and clinical success are our top priorities.
            We stand behind our implants with a clear and transparent Dental Implant Failure Policy designed to support clinicians and distributors.
          </p>
          <div class="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
            <p class="text-charcoal font-medium italic">
              "In the event of a documented implant failure under proper surgical and prosthetic protocols, MGM Implants will provide a free replacement implant of the same type and size, subject to policy conditions."
            </p>
          </div>
        </div>

        <!-- Scope -->
        <div>
          <h3 class="font-heading text-2xl font-bold text-secondary mb-4">Coverage & Exclusions</h3>
          <p class="text-charcoal leading-relaxed mb-4">
            This policy applies to failures caused by <strong>manufacturing or material defects</strong>.
          </p>
          <p class="text-charcoal leading-relaxed">
            Failures resulting from the following are <strong>not covered</strong>:
          </p>
          <ul class="list-disc list-inside mt-2 space-y-2 text-charcoal pl-4">
            <li>Incorrect surgical technique</li>
            <li>Improper case selection</li>
            <li>Patient-related factors</li>
            <li>Infection</li>
            <li>Trauma</li>
            <li>Misuse</li>
          </ul>
        </div>

        <!-- Reporting Requirements -->
        <div>
          <h3 class="font-heading text-2xl font-bold text-secondary mb-4">Reporting Requirements</h3>
          <p class="text-charcoal leading-relaxed mb-4">
            All failure cases must be reported with the following documentation:
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
              <span class="text-charcoal">Implant reference and batch number</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
              <span class="text-charcoal">Radiographic documentation</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
              <span class="text-charcoal">Brief clinical report describing the failure</span>
            </li>
          </ul>
        </div>

        <!-- Review Process -->
        <div class="bg-clinical-gray p-8 rounded-2xl">
          <p class="text-charcoal font-medium text-center">
            Each case will be professionally reviewed by MGM Implants before approval.
          </p>
        </div>

        <div class="text-center pt-8 border-t border-silver">
          <p class="font-heading text-xl font-bold text-secondary">
            MGM Implants – Confidence backed by quality, precision, and responsibility.
          </p>
        </div>

      </div>
    </div>
  `;

  container.appendChild(heroSection);
  container.appendChild(contentSection);

  animateSection(container);
  return container;
};
