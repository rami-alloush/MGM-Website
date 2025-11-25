export class Router {
  constructor(routes, renderNode) {
    this.routes = routes;
    this.renderNode = renderNode;
    this.init();
  }

  init() {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || "/";
    const [path, ...params] = hash.split("?"); // Simple param handling if needed later

    // Find matching route
    let route = this.routes[path];

    // Handle dynamic routes (very simple implementation for now)
    if (!route) {
      // Check for /product/:category
      if (path.startsWith("/products/")) {
        const category = path.split("/")[2];
        if (category) {
          route = this.routes["/products/:category"];
          // We'll pass the category as an argument to the component
          this.render(route, category);
          return;
        }
      }
      // Check for /product-detail/:id
      if (path.startsWith("/product/")) {
        const id = path.split("/")[2];
        if (id) {
          route = this.routes["/product/:id"];
          this.render(route, id);
          return;
        }
      }
    }

    if (route) {
      this.render(route);
    } else {
      // 404 or default to home
      this.render(this.routes["/"]);
    }
  }

  render(componentFn, arg) {
    this.renderNode.innerHTML = "";
    const element = componentFn(arg);
    if (element) {
      this.renderNode.appendChild(element);
    }

    // Update active state in nav
    this.updateActiveNav();

    // Show footer after content renders
    const footer = document.getElementById("main-footer");
    if (footer) {
      footer.classList.add("visible");
    }

    // Scroll to top
    window.scrollTo(0, 0);
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
