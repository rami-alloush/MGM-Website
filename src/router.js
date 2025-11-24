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
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      }
      // Handle dropdown parent active state
      if (
        hash.includes("products") &&
        link.getAttribute("href") === "#/products"
      ) {
        link.classList.add("active");
      }
    });
  }
}
