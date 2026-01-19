import { createElement, animateSection } from "../utils.js";
import { NewsCard, Icons } from "../ui/index.js";

export const ContactPage = () => {
  const section = createElement(
    "section",
    "min-h-screen py-16 px-6 md:px-20 bg-white/90 backdrop-blur-md"
  );

  section.innerHTML = `
      <div class="max-w-6xl mx-auto space-y-20">
        <!-- Intro -->
        <div class="text-center space-y-4">
          <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">Get in Touch</h2>
          <p class="text-xl text-charcoal">Ready to elevate your practice? Contact us today.</p>
        </div>

        <!-- Contact Grid -->
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="bg-white border border-silver rounded-2xl p-8 shadow-lg">
              <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              <div class="space-y-6 text-charcoal">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 text-primary shrink-0">${Icons.MapPin}</div>
                  <div>
                    <p class="font-semibold text-secondary">Address</p>
                    <p>Werner-Heisenberg-Straße 14</p>
                    <p>52499 Baesweiler, Germany</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 text-primary shrink-0">${Icons.Envelope}</div>
                  <div>
                    <p class="font-semibold text-secondary">Email</p>
                    <p>info@mgmimplant.com</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 text-primary shrink-0">${Icons.Phone}</div>
                  <div>
                    <p class="font-semibold text-secondary">Phone</p>
                    <p>+49 2103 9049978</p>
                    <p class="text-sm">+49 174 86 16844 (Mobile)</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 text-primary shrink-0">${Icons.Building}</div>
                  <div>
                    <p class="font-semibold text-secondary">Company</p>
                    <p>AAD Dental GmbH</p>
                    <p class="text-sm">HRB 87697 · Amtsgericht Düsseldorf</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-secondary text-white border border-silver rounded-2xl p-8 relative overflow-hidden">
              <div class="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
              <div class="relative z-10">
                <h3 class="font-heading text-2xl font-bold text-white mb-4">Become a Partner</h3>
                <p class="text-gray-300 mb-6">Interested in distributing MGM Implant products? Join our global network.</p>
                <a href="https://portal.mgmimplant.com/" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
                  Partners Portal
                </a>
              </div>
            </div>
          </div>

          <form id="contact-form" class="bg-white border border-silver rounded-2xl p-8 space-y-6 shadow-lg">
            <h3 class="font-heading text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
            <div class="space-y-2">
              <label class="text-secondary font-semibold">Name *</label>
              <input type="text" name="name" required placeholder="Your full name" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-secondary font-semibold">Email *</label>
              <input type="email" name="email" required placeholder="your@email.com" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-secondary font-semibold">Message *</label>
              <textarea name="message" rows="4" required placeholder="How can we help you?" class="w-full px-4 py-3 bg-clinical-gray border border-silver rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-all"></textarea>
            </div>
            <button type="submit" class="w-full px-6 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    `;

  animateSection(section);

  // Add form submission handler
  setTimeout(() => {
    const form = section.querySelector("#contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Build mailto link
        const subject = encodeURIComponent("Website Contact: General Inquiry");
        const body = encodeURIComponent(
          `Contact Form Submission\n\n` +
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n\n` +
            `Message:\n${data.message}`
        );

        window.location.href = `mailto:info@mgmimplant.com?subject=${subject}&body=${body}`;

        // Show success feedback
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = "Email Client Opened!";
        button.classList.add("bg-green-600");
        button.classList.remove("bg-primary");

        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove("bg-green-600");
          button.classList.add("bg-primary");
          form.reset();
        }, 3000);
      });
    }
  }, 0);

  return section;
};
