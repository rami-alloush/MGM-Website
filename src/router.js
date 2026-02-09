export class Router {
  constructor(routes, renderNode) {
    this.routes = routes;
    this.renderNode = renderNode;
    this.baseUrl = "https://mgmimplant.com";
    this.init();
  }

  init() {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }

  // SEO: Page meta data for different routes
  getPageMeta(path, arg) {
    const pages = {
      "/": {
        title:
          "MGM Implant - Premium German Dental Implants | M-Pure Surface Technology",
        description:
          "MGM Implant offers state-of-the-art dental implants made in Germany with M-Pure Surface technology for faster healing and superior osseointegration.",
      },
      "/about": {
        title: "About Us - MGM Implant | German Dental Implant Manufacturer",
        description:
          "Learn about MGM Implant's history, vision, and commitment to quality. ISO 13485 certified dental implant manufacturer based in Germany since 2008.",
      },
      "/technology": {
        title:
          "Smart Design Technology - MGM Implant | M-Pure Surface Treatment",
        description:
          "Discover MGM's innovative Smart Design features: Hyperid body, Smart Cervix, Paper Thread, and M-Pure Surface technology for optimal osseointegration.",
      },
      "/contact": {
        title: "Contact Us - MGM Implant | Get in Touch",
        description:
          "Contact MGM Implant for dental implant inquiries, partnerships, and support. Located in Baesweiler, Germany. Email: info@mgmimplant.com",
      },
      "/products": {
        title: "Dental Implant Products - MGM Implant | Full Product Catalog",
        description:
          "Browse MGM Implant's complete product catalog: dental implants, prosthetic abutments, lab workflow components, and surgical instruments.",
      },
      "/products/implants": {
        title: "Dental Implants - MGM Implant | Smart Design Implant Systems",
        description:
          "Premium titanium dental implants with M-Pure Surface, Smart Hyperid body design, and 11° Morse Taper connection. Made in Germany.",
      },
      "/products/prosthetics": {
        title: "Prosthetic Abutments - MGM Implant | Straight, Angled & MUA",
        description:
          "High-precision prosthetic abutments: straight, angled, temporary, healing abutments, and multi-unit abutments for all clinical situations.",
      },
      "/products/lab": {
        title:
          "Lab Workflow Components - MGM Implant | Digital & Analog Solutions",
        description:
          "Complete lab workflow solutions: transfer copings, analogs, scan bodies, and digital CAD/CAM compatible components.",
      },
      "/products/surgical": {
        title: "Surgical Instruments - MGM Implant | Professional Kits",
        description:
          "Professional surgical instruments and kits for dental implant procedures. Precision tools made in Germany.",
      },
      "/products/advanced": {
        title: "Advanced Surgical Kits - MGM Implant | Specialized Instruments",
        description:
          "Advanced surgical kits for specialized procedures: sinus lifting, GBR, ridge augmentation, and fixture removal.",
      },
      "/products/devices": {
        title: "Dental Devices - MGM Implant | Treatment Units & Equipment",
        description:
          "Professional dental devices and equipment for implant surgery and treatment planning.",
      },
      "/products/biomaterials": {
        title: "Biomaterials - MGM Implant | Bone Grafts & Membranes",
        description:
          "High-quality biomaterials for bone regeneration: bone grafts, collagen membranes, and PRF systems.",
      },
      "/education": {
        title: "Education & Training - MGM Implant | Clinical Support",
        description:
          "Access MGM Implant educational resources: surgical protocols, digital workflow guides, webinars, and hands-on training courses.",
      },
      "/surgical-kits": {
        title: "Surgical Kits - MGM Implant | Complete Instrumentation",
        description:
          "Professional surgical kits for dental implant procedures: guided surgery, sinus lifting, GBR, and prosthetic instrument sets.",
      },
      "/guarantee-policy": {
        title:
          "Guarantee & Policy - MGM Implant | Dental Implant Failure Policy",
        description:
          "MGM Implant Dental Implant Failure Policy. Transparent coverage for manufacturing defects. Lifetime guarantee on implant quality.",
      },
    };

    // Dynamic product page meta
    if (path.startsWith("/product/") && arg) {
      return {
        title: `${this.formatProductName(
          arg,
        )} - MGM Implant | Dental Implant Components`,
        description: `Detailed information about ${this.formatProductName(
          arg,
        )} from MGM Implant. Premium German quality dental implant components.`,
      };
    }

    return pages[path] || pages["/"];
  }

  formatProductName(id) {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  updateMeta(path, arg) {
    const meta = this.getPageMeta(path, arg);

    // Update title
    document.title = meta.title;

    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", meta.description);

    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
    if (ogUrl) ogUrl.setAttribute("content", `${this.baseUrl}/#${path}`);

    // Update Twitter
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    const twDesc = document.querySelector(
      'meta[property="twitter:description"]',
    );
    const twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twTitle) twTitle.setAttribute("content", meta.title);
    if (twDesc) twDesc.setAttribute("content", meta.description);
    if (twUrl) twUrl.setAttribute("content", `${this.baseUrl}/#${path}`);

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${this.baseUrl}/#${path}`);
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || "/";
    let [path, ...params] = hash.split("?"); // Simple param handling if needed later

    // Check for anchor scroll in path (e.g. /technology#surface)
    // Note: In typical hash routers, the anchor comes AFTER the route path if using href="#/path#anchor"
    // The browser sees '#/path#anchor' as the hash fragment.
    let anchor = null;
    const anchorIndex = path.indexOf("#");
    if (anchorIndex !== -1) {
      anchor = path.slice(anchorIndex + 1);
      path = path.slice(0, anchorIndex);
    }

    // Find matching route
    let route = this.routes[path];
    let arg = null;

    // Handle dynamic routes (very simple implementation for now)
    if (!route) {
      // Check for /product/:category
      if (path.startsWith("/products/")) {
        const category = path.split("/")[2];
        if (category) {
          route = this.routes["/products/:category"];
          arg = category;
        }
      }
      // Check for /product-detail/:id
      else if (path.startsWith("/product/")) {
        const id = path.split("/")[2];
        if (id) {
          route = this.routes["/product/:id"];
          arg = id;
        }
      }
    }

    if (route) {
      this.render(route, arg, anchor);
    } else {
      // 404 or default to home
      this.render(this.routes["/"], null, anchor);
    }
  }

  render(componentFn, arg, anchor) {
    const path = window.location.hash.slice(1) || "/";

    this.renderNode.innerHTML = "";
    const element = componentFn(arg);
    if (element) {
      this.renderNode.appendChild(element);
    }

    // Update SEO meta tags
    this.updateMeta(path, arg);

    // Update active state in nav
    this.updateActiveNav();

    // Show footer after content renders
    const footer = document.getElementById("main-footer");
    if (footer) {
      footer.classList.add("visible");
    }

    // Scroll handling
    if (anchor) {
      // Wait for DOM updates and potential async loading (images, etc)
      // A small timeout allows the browser to render the new content before scrolling
      setTimeout(() => {
        const targetElement = document.getElementById(anchor);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Fallback if element not found immediately (e.g., inside a component that renders later)
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      // Default scroll to top for new pages
      window.scrollTo(0, 0);
    }
  }

  updateActiveNav() {
    const hash = window.location.hash || "#/";
    const path = hash.slice(1) || "/"; // Remove the # to get the path

    // Update desktop nav
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      const linkPath = href ? href.slice(1) : ""; // Remove # from href

      // Exact match
      if (href === hash) {
        link.classList.add("active");
      }
      // Handle Products dropdown - parent should be active when viewing any product page
      if (
        path.startsWith("/products") ||
        path.startsWith("/product/") ||
        path === "/surgical-kits"
      ) {
        if (linkPath === "/products") {
          link.classList.add("active");
        }
      }
      // Handle Education section
      if (path.startsWith("/education") && linkPath === "/education") {
        link.classList.add("active");
      }
    });

    // Update mobile nav
    document.querySelectorAll(".mobile-link").forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");

      if (href === hash) {
        link.classList.add("active");
      }
      // Products parent active state for mobile
      if (
        (path.startsWith("/products") || path.startsWith("/product/")) &&
        href === "#/products"
      ) {
        link.classList.add("active");
      }
    });
  }
}
