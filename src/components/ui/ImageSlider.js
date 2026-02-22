import { createElement } from "../utils.js";

export const ImageSlider = (slides = []) => {
  const container = createElement("div", "relative w-full");

  // Default demo slides if none provided
  const defaultSlides = [
    {
      image: "/assets/images/MGM-FACTORY.webp",
      title: "German Engineering Excellence",
      subtitle:
        "Discover our state-of-the-art manufacturing facility and precision engineering.",
      link: "#/about",
    },
    {
      image: "/assets/images/surface-treatment.webp",
      title: "M-Pure Surface Technology",
      subtitle:
        "Advanced proprietary surface treatment for faster healing and superior osseointegration.",
      link: "#/technology",
    },
    {
      image: "/assets/images/manufacturing.webp",
      title: "Premium Implant Solutions",
      subtitle:
        "Explore our comprehensive product portfolio designed for all clinical indications.",
      link: "#/products",
    },
    {
      image: "/assets/images/Quality_Control_Testing.webp",
      title: "100% Lifetime Guarantee",
      subtitle:
        "Rigorous quality control processes and our commitment to uncompromising reliability.",
      link: "#/guarantee-policy",
    },
    {
      image: "/assets/images/Research.webp",
      title: "Education & Academy",
      subtitle:
        "Empowering professionals with advanced training, research, and technical resources.",
      link: "#/education",
    },
    {
      image: "/assets/images/about-bg.jpg",
      title: "Global Presence & Support",
      subtitle:
        "Connecting with dental professionals worldwide to deliver exceptional assistance.",
      link: "#/contact",
    },
  ];

  const slideData = slides.length > 0 ? slides : defaultSlides;

  container.innerHTML = `
    <div class="slider-wrapper relative overflow-hidden rounded-2xl">
      <!-- Slides Container - Stacked for fade effect -->
      <div class="slider-container relative h-[400px] md:h-[500px]">
        ${slideData
          .map(
            (slide, idx) => `
          <a href="${slide.link}" 
             class="slider-slide absolute inset-0 group cursor-pointer transition-all duration-700 ease-in-out ${
               idx === 0
                 ? "opacity-100 z-10 scale-100"
                 : "opacity-0 z-0 scale-105"
             }" 
             data-slide="${idx}">
            <!-- Image with Ken Burns effect -->
            <div class="absolute inset-0 overflow-hidden">
              <img 
                src="${slide.image}" 
                alt="${slide.title}" 
                class="slider-image w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                  idx === 0 ? "scale-110" : "scale-100"
                }"
                loading="${idx === 0 ? "eager" : "lazy"}"
              />
            </div>
            <!-- Gradient Overlay with animation -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-500"></div>
            <!-- Animated shine effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            <!-- Content with staggered animation -->
            <div class="slide-content absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div class="overflow-hidden">
                <h3 class="slide-title font-heading text-2xl md:text-4xl font-bold text-white mb-3 transform transition-all duration-700 delay-100">${
                  slide.title
                }</h3>
              </div>
              <div class="overflow-hidden">
                <p class="slide-subtitle text-gray-200 text-base md:text-lg mb-5 transform transition-all duration-700 delay-200">${
                  slide.subtitle
                }</p>
              </div>
              <div class="overflow-hidden">
                <span class="slide-cta inline-flex items-center gap-2 text-primary font-semibold text-lg group-hover:gap-4 transition-all duration-300 transform delay-300">
                  Learn More
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        `,
          )
          .join("")}
      </div>

      <!-- Navigation Arrows -->
      <button class="slider-prev absolute left-0 md:-left-3 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary-hover rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 border-2 border-white/20 group">
        <svg class="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button class="slider-next absolute right-0 md:-right-3 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary-hover rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 border-2 border-white/20 group">
        <svg class="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- Progress Bar -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div class="slider-progress h-full bg-primary transition-all duration-100 ease-linear" style="width: 0%"></div>
      </div>
    </div>

    <!-- Dots Indicator -->
    <div class="slider-dots flex justify-center gap-3 mt-6">
      ${slideData
        .map(
          (_, idx) => `
        <button class="slider-dot relative w-3 h-3 rounded-full transition-all duration-500 ${
          idx === 0 ? "bg-primary w-10" : "bg-gray-400/50 hover:bg-gray-400"
        }" data-index="${idx}">
          <span class="absolute inset-0 rounded-full bg-primary scale-0 transition-transform duration-300"></span>
        </button>
      `,
        )
        .join("")}
    </div>
  `;

  // Initialize slider functionality after DOM is ready
  setTimeout(() => initSlider(container, slideData.length), 0);

  return container;
};

function initSlider(container, totalSlides) {
  const slides = container.querySelectorAll(".slider-slide");
  const prevBtn = container.querySelector(".slider-prev");
  const nextBtn = container.querySelector(".slider-next");
  const dots = container.querySelectorAll(".slider-dot");
  const progressBar = container.querySelector(".slider-progress");

  let currentSlide = 0;
  let autoplayInterval;
  let progressInterval;
  const autoplayDuration = 5000;
  const progressStep = 50;

  const goToSlide = (index, direction = "next") => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    const prevSlide = currentSlide;
    currentSlide = index;

    // Animate slides with fade and scale
    slides.forEach((slide, i) => {
      const img = slide.querySelector(".slider-image");

      if (i === currentSlide) {
        // Incoming slide
        slide.classList.remove("opacity-0", "z-0", "scale-105");
        slide.classList.add("opacity-100", "z-10", "scale-100");

        // Ken Burns effect - start zoomed and slowly zoom out, or vice versa
        img.classList.remove("scale-100");
        img.classList.add("scale-110");

        // Animate content in
        animateContentIn(slide);
      } else if (i === prevSlide) {
        // Outgoing slide
        slide.classList.remove("opacity-100", "z-10", "scale-100");
        slide.classList.add("opacity-0", "z-0", "scale-105");

        // Reset Ken Burns
        img.classList.remove("scale-110");
        img.classList.add("scale-100");

        // Reset content
        animateContentOut(slide);
      } else {
        // Other slides
        slide.classList.remove("opacity-100", "z-10", "scale-100");
        slide.classList.add("opacity-0", "z-0", "scale-105");
        img.classList.remove("scale-110");
        img.classList.add("scale-100");
      }
    });

    // Update dots with animation
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add("bg-primary", "w-10");
        dot.classList.remove("bg-gray-400/50");
      } else {
        dot.classList.remove("bg-primary", "w-10");
        dot.classList.add("bg-gray-400/50");
      }
    });

    // Reset progress bar
    resetProgress();
  };

  const animateContentIn = (slide) => {
    const title = slide.querySelector(".slide-title");
    const subtitle = slide.querySelector(".slide-subtitle");
    const cta = slide.querySelector(".slide-cta");

    [title, subtitle, cta].forEach((el) => {
      if (el) {
        el.classList.remove("translate-y-8", "opacity-0");
        el.classList.add("translate-y-0", "opacity-100");
      }
    });
  };

  const animateContentOut = (slide) => {
    const title = slide.querySelector(".slide-title");
    const subtitle = slide.querySelector(".slide-subtitle");
    const cta = slide.querySelector(".slide-cta");

    [title, subtitle, cta].forEach((el) => {
      if (el) {
        el.classList.add("translate-y-8", "opacity-0");
        el.classList.remove("translate-y-0", "opacity-100");
      }
    });
  };

  const nextSlide = () => goToSlide(currentSlide + 1, "next");
  const prevSlide = () => goToSlide(currentSlide - 1, "prev");

  // Progress bar animation
  const startProgress = () => {
    let progress = 0;
    progressInterval = setInterval(() => {
      progress += (progressStep / autoplayDuration) * 100;
      if (progressBar) {
        progressBar.style.width = `${Math.min(progress, 100)}%`;
      }
    }, progressStep);
  };

  const resetProgress = () => {
    clearInterval(progressInterval);
    if (progressBar) {
      progressBar.style.width = "0%";
    }
    startProgress();
  };

  // Event listeners
  prevBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    prevSlide();
    resetAutoplay();
  });

  nextBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    nextSlide();
    resetAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      const index = parseInt(dot.dataset.index);
      if (index !== currentSlide) {
        goToSlide(index);
        resetAutoplay();
      }
    });
  });

  // Autoplay
  const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, autoplayDuration);
    startProgress();
  };

  const resetAutoplay = () => {
    clearInterval(autoplayInterval);
    clearInterval(progressInterval);
    startAutoplay();
  };

  const pauseAutoplay = () => {
    clearInterval(autoplayInterval);
    clearInterval(progressInterval);
  };

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  container.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetAutoplay();
    }
  };

  // Keyboard navigation
  container.setAttribute("tabindex", "0");
  container.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      resetAutoplay();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      resetAutoplay();
    }
  });

  // Start autoplay
  startAutoplay();

  // Pause on hover
  container.addEventListener("mouseenter", pauseAutoplay);
  container.addEventListener("mouseleave", () => {
    resetAutoplay();
  });

  // Initialize first slide content animation
  animateContentIn(slides[0]);
}
