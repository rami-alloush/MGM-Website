// Product image mappings - maps product IDs to their catalog images
// Images should be placed in /public/assets/images/products/

export const productImages = {
  // Smart Design Features (Implants)
  "smart-hyperid": "/assets/images/products/1-Hyperid Design.webp",
  "smart-cervix": "/assets/images/products/2-smart cervix.webp",
  "smart-paper-thread": "/assets/images/products/3-paper thread.webp",
  "smart-apex": "/assets/images/products/4-smart apex.webp",
  "smart-connection": "/assets/images/products/5-smart connection.webp",
  "m-pure-surface": "/assets/images/products/7-smart surfave.webp",

  // Implants category
  implants: "/assets/images/products/1-Hyperid Design.webp",
  mgm: "/assets/images/products/1-Hyperid Design.webp",
  "mgm-plus": "/assets/images/products/1-Hyperid Design.webp",
  "mgm-compressive": "/assets/images/products/1-Hyperid Design.webp",
  "mgm-s": "/assets/images/products/1-Hyperid Design.webp",

  // Prosthetics category
  prosthetics: "/assets/images/products/8-Prosthetics.webp",

  // Stock Abutments
  "straight-abutment": "/assets/images/products/12-Straight Abut2.webp",
  "angled-abutment": "/assets/images/products/13-Angled Abut.webp",
  "healing-abutment": "/assets/images/products/17-Healing Abut.webp",

  // Temporary Abutments
  "temp-abutment": "/assets/images/products/15-Temp.webp",

  // Multi-Unit Abutments
  "straight-mua": "/assets/images/products/19-mua.webp",
  "angled-mua": "/assets/images/products/20-Mua 2-1.webp",
  "mua-cylinders": "/assets/images/products/46-MU Cylinders.webp",

  // Overdenture Systems
  "locator-abutment": "/assets/images/products/23-locator.webp",
  "ball-socket-abutment": "/assets/images/products/26-Ball-socket.webp",

  // Digital Components
  "ti-base": "/assets/images/products/29-Ti base.webp",
  "regular-tbase": "/assets/images/products/31-Regular tbase.webp",
  "pri-milled": "/assets/images/products/33-PRI-Milled.webp",

  // Lab Workflow category
  lab: "/assets/images/products/35-lab workflow.webp",

  // Traditional Impression
  "transfer-coping": "/assets/images/products/37-Transfer coping.webp",
  "lab-analog": "/assets/images/products/40-Analog.webp",
  "mua-transfer-coping": "/assets/images/products/48-Mua transfer.webp",

  // Digital Workflow
  "scan-body": "/assets/images/products/43-Scan Body.webp",
  "digital-library": "/assets/images/products/42-Digital lab pars.webp",

  // Surgical Kits
  surgical: "/assets/images/products/22-special solutions.webp",
  "surgical-kit": "/assets/images/products/22-special solutions.webp",
  "guided-kit": "/assets/images/products/22-special solutions.webp",
  "sinus-kit": "/assets/images/products/22-special solutions.webp",
  "screw-remover": "/assets/images/products/47--special lab parts.webp",
  "fixture-remover": "/assets/images/products/47--special lab parts.webp",
  "gbr-master": "/assets/images/products/22-special solutions.webp",
  "ridge-augmenting": "/assets/images/products/22-special solutions.webp",
  "prosthetic-kit": "/assets/images/products/22-special solutions.webp",

  // Advanced Solutions
  advanced: "/assets/images/products/22-special solutions.webp",
  "sinus-master": "/assets/images/products/22-special solutions.webp",
  "bone-splitting": "/assets/images/products/22-special solutions.webp",
};

// Secondary images for products with multiple views
export const productSecondaryImages = {
  "angled-abutment": "/assets/images/products/14-Angled abut2.webp",
  "temp-abutment": "/assets/images/products/16-Temporary Abut1.webp",
  "healing-abutment": "/assets/images/products/18-Healing Abut 2.webp",
  "angled-mua": "/assets/images/products/21-Mua 2-2.webp",
  "locator-abutment": [
    "/assets/images/products/24-locator 2.webp",
    "/assets/images/products/25-locator 3.webp",
  ],
  "ball-socket-abutment": "/assets/images/products/27-Ball-socket 2.webp",
  "ti-base": "/assets/images/products/30-Ti-base 2.webp",
  "regular-tbase": "/assets/images/products/32-Regular tbase2.webp",
  "pri-milled": "/assets/images/products/34-PRI-Milled 2.webp",
  "lab-analog": [
    "/assets/images/products/41-analog 2.webp",
    "/assets/images/products/45-analog3.webp",
  ],
  "scan-body": "/assets/images/products/44-Scan body 2.webp",
  "transfer-coping": [
    "/assets/images/products/38-2Opened tray.webp",
    "/assets/images/products/39-Closed Type.webp",
  ],
};

// Category cover images
export const categoryImages = {
  implants: "/assets/images/products/1-Hyperid Design.webp",
  prosthetics: "/assets/images/products/8-Prosthetics.webp",
  lab: "/assets/images/products/35-lab workflow.webp",
  surgical: "/assets/images/products/22-special solutions.webp",
  advanced: "/assets/images/products/22-special solutions.webp",
  devices: "/assets/images/products/28-Digital workflow.webp",
  biomaterials: "/assets/images/products/22-special solutions.webp",
};

// Helper function to get product image with fallback
export const getProductImage = (productId) => {
  return (
    productImages[productId] || "/assets/images/products/1-Hyperid Design.webp"
  );
};

// Helper function to get category image
export const getCategoryImage = (categoryKey) => {
  return (
    categoryImages[categoryKey] ||
    "/assets/images/products/1-Hyperid Design.webp"
  );
};
