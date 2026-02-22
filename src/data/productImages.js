// Product image mappings - maps product IDs to their catalog images
// Images should be placed in /public/assets/images/products/
// 3D rendered parts are in /public/assets/images/3d-parts/

// Default fallback image - change this to control the default image everywhere
export const DEFAULT_PRODUCT_IMAGE = "/assets/logo.png";

// 3D rendered part images base path
const PARTS_PATH = "/assets/images/3d-parts";

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
  mgm: "/assets/images/mgm-implant/mgm-implant.webp",
  "mgm-plus": "/assets/images/mgm-plus/MGM PLUS.webp",
  "mgm-compressive": "/assets/images/mgm-compressive/comp-1.webp",
  "mgm-s": "/assets/images/mgm-s/mgm-s-1.webp",
  "mgm-core": "/assets/logo.png",

  // Prosthetics category
  prosthetics: "/assets/images/prosthetics-covers/PROSTHETIC PARTS.webp",

  // Stock Abutments
  "straight-abutment":
    "/assets/images/prosthetics-covers/STANDRAD STRAIGHT abutment.webp",
  "angled-abutment": "/assets/images/prosthetics-covers/Angled Abutment.webp",
  "healing-abutment":
    "/assets/images/prosthetics-covers/STANDARD GINGIVAL FORMER.webp",

  // Temporary Abutments
  "temp-abutment": "/assets/images/prosthetics-covers/TEMPORARY ABUTMENTS.webp",

  // Multi-Unit Abutments
  "straight-mua":
    "/assets/images/prosthetics-covers/STANDARD STRAIGHT MUA.webp",
  "angled-mua": "/assets/images/prosthetics-covers/STANDARD ANGLED MUA .webp",
  "mua-cylinders":
    "/assets/images/prosthetics-covers/MULTI UNIT TEMP CYLINDER.webp",

  // Overdenture Systems
  "locator-abutment": "/assets/images/prosthetics-covers/M-L ABUTMENTS.webp",
  "ball-socket-abutment":
    "/assets/images/prosthetics-covers/STANDARD BALL ABUTMENT.webp",

  // Digital Components
  "ti-base": "/assets/images/prosthetics-covers/TI BASE ABUTMENTS.webp",
  "regular-tbase": "/assets/images/prosthetics-covers/T BASE .webp",
  "pri-milled": "/assets/images/prosthetics-covers/PREMILLED ABUTMENT.webp",

  // Lab Workflow category
  lab: "/assets/images/prosthetics-covers/TRADITIONAL WORK FLOW.webp",

  // Traditional Impression
  "transfer-coping":
    "/assets/images/prosthetics-covers/impression copping solutions.webp",
  "lab-analog": "/assets/images/prosthetics-covers/LAB ANALOUGE.webp",
  "mua-transfer-coping": "/assets/images/products/48-Mua transfer.webp",

  // Digital Workflow
  "scan-body": "/assets/images/prosthetics-covers/Scan Body.webp",
  "digital-library": "/assets/images/products/42-Digital lab pars.webp",

  // Surgical Kits
  surgical: "/assets/images/products/22-special solutions.webp",
  "surgical-kit": "/assets/images/products/big surgical kit.webp",
  "guided-kit": "/assets/images/products/guided-kit.webp",
  "sinus-kit": "/assets/images/products/22-special solutions.webp",
  "bone-collector": "/assets/images/products/22-special solutions.webp",
  "screw-remover": "/assets/images/products/47--special lab parts.webp",
  "fixture-remover": "/assets/images/products/47--special lab parts.webp",
  "gbr-master": "/assets/images/products/22-special solutions.webp",
  "ridge-augmenting": "/assets/images/products/22-special solutions.webp",
  "prosthetic-kit": "/assets/images/products/22-special solutions.webp",

  // Advanced Solutions
  advanced: "/assets/images/products/22-special solutions.webp",
  "sinus-master": "/assets/images/products/22-special solutions.webp",
  "bone-splitting": "/assets/images/products/22-special solutions.webp",

  // Biomaterials
  "mgm-barrier": "/assets/images/biomaterials/MGM BARRIER.webp",
  "mgm-granules": "/assets/images/biomaterials/MGM GRANULES.webp",
};

// Secondary images for products with multiple views
export const productSecondaryImages = {
  "mgm-s": "/assets/images/mgm-s/mgm-s-2.png",
  "straight-abutment": [
    "/assets/images/prosthetics-covers/NARROW STRAIGHT ABUTMENT.webp",
    "/assets/images/products/12-Straight Abut2.webp",
    "/assets/images/products/20-Straight Abut.webp",
  ],
  "angled-abutment": [
    "/assets/images/products/13-Angled Abut.webp",
    "/assets/images/products/14-Angled abut2.webp",
  ],
  "healing-abutment": [
    "/assets/images/prosthetics-covers/NARROW GINGIVAL FORMER.webp",
    "/assets/images/products/17-Healing Abut.webp",
    "/assets/images/products/18-Healing Abut 2.webp",
  ],
  "temp-abutment": [
    "/assets/images/products/15-Temp.webp",
    "/assets/images/products/16-Temporary Abut1.webp",
  ],
  "straight-mua": [
    "/assets/images/prosthetics-covers/NARROW STRAIGHT MUA.webp",
    "/assets/images/products/19-mua.webp",
  ],
  "angled-mua": [
    "/assets/images/prosthetics-covers/NARROW ANGLED MUA.webp",
    "/assets/images/products/20-Mua 2-1.webp",
    "/assets/images/products/21-Mua 2-2.webp",
  ],
  "mua-cylinders": ["/assets/images/products/46-MU Cylinders.webp"],
  "mgm-plus": "/assets/images/mgm-plus/MGM PLUS Solid Core.webp",
  "mgm-compressive": ["/assets/images/mgm-compressive/comp-2.webp"],
  "locator-abutment": [
    "/assets/images/prosthetics-covers/M-L ABUTMENTS.webp",
    "/assets/images/products/23-locator.webp",
    "/assets/images/products/24-locator 2.webp",
    "/assets/images/products/25-locator 3.webp",
  ],
  "ball-socket-abutment": [
    "/assets/images/prosthetics-covers/NARROW BALL ABUTMENT.webp",
    "/assets/images/products/26-Ball-socket.webp",
    "/assets/images/products/27-Ball-socket 2.webp",
  ],
  "ti-base": [
    "/assets/images/products/29-Ti base.webp",
    "/assets/images/products/30-Ti-base 2.webp",
  ],
  "regular-tbase": [
    "/assets/images/products/31-Regular tbase.webp",
    "/assets/images/products/32-Regular tbase2.webp",
  ],
  "pri-milled": [
    "/assets/images/products/33-PRI-Milled.webp",
    "/assets/images/products/34-PRI-Milled 2.webp",
  ],
  "lab-analog": [
    "/assets/images/prosthetics-covers/mua lab analouge.webp",
    "/assets/images/products/40-Analog.webp",
    "/assets/images/products/41-analog 2.webp",
    "/assets/images/products/45-analog3.webp",
  ],
  "scan-body": [
    "/assets/images/products/44-Scan body 2.webp",
    "/assets/images/prosthetics-covers/MULTI UNIT SCANBODY ABUTMENT.webp",
  ],
  "transfer-coping": [
    "/assets/images/products/37-Transfer coping.webp",
    "/assets/images/products/38-2Opened tray.webp",
    "/assets/images/products/39-Closed Type.webp",
  ],
  "mgm-barrier": "/assets/images/biomaterials/MGM BARRIER 2.webp",
  "mgm-granules": "/assets/images/biomaterials/MGM GRANULES 2.webp",
  "surgical-kit": "/assets/images/products/small kit.webp",
};

// 3D rendered part images - organized by product
export const product3DImages = {
  "straight-abutment": [
    PARTS_PATH + "/abutment-moshb4518_01_gold.webp",
    PARTS_PATH + "/abutment-moshb4518_01_blue.webp",

    PARTS_PATH + "/ø3-4-gh0-duz-abutment-mavi_gold.webp",
    PARTS_PATH + "/ø3-4-gh0-duz-abutment-mavi_blue.webp",

    PARTS_PATH + "/ø3-4-gh0-duz-abutment-sari_gold.webp",
    PARTS_PATH + "/ø3-4-gh0-duz-abutment-sari_blue.webp",
  ],
  "angled-abutment": [
    PARTS_PATH + "/abutment-misab45115_03_gold.webp",
    PARTS_PATH + "/abutment-misab45115_03_blue.webp",

    PARTS_PATH + "/abutment-misab45125_02_gold.webp",
    PARTS_PATH + "/abutment-misab45125_02_blue.webp",
  ],
  "healing-abutment": [
    PARTS_PATH + "/healing-abutment-mhlb4504_01_gold.webp",
    PARTS_PATH + "/healing-abutment-mhlb4504_01_blue.webp",
  ],
  "ti-base": [
    PARTS_PATH + "/ti-base_gold.webp",
    PARTS_PATH + "/ti-base_blue.webp",

    PARTS_PATH + "/mavi-ti-base-gh00_gold.webp",
    PARTS_PATH + "/mavi-ti-base-gh00_blue.webp",

    PARTS_PATH + "/mavi-ti-base-gh01_gold.webp",
    PARTS_PATH + "/mavi-ti-base-gh01_blue.webp",

    PARTS_PATH + "/mavi-ti-base-gh02_gold.webp",
    PARTS_PATH + "/mavi-ti-base-gh02_blue.webp",

    PARTS_PATH + "/sari-ti-base-gh00_gold.webp",
    PARTS_PATH + "/sari-ti-base-gh00_blue.webp",

    PARTS_PATH + "/sari-ti-base-gh01_gold.webp",
    PARTS_PATH + "/sari-ti-base-gh01_blue.webp",

    PARTS_PATH + "/sari-ti-base-gh02_gold.webp",
    PARTS_PATH + "/sari-ti-base-gh02_blue.webp",
  ],
  "regular-tbase": [
    PARTS_PATH + "/mavi-connection_gold.webp",

    PARTS_PATH + "/mavi-connection_blue.webp",
    PARTS_PATH + "/sari-connection_gold.webp",

    PARTS_PATH + "/sari-connection_blue.webp",
    PARTS_PATH + "/mavi-nolock-connection_gold.webp",

    PARTS_PATH + "/mavi-nolock-connection_blue.webp",
    PARTS_PATH + "/sari-nolock-connection_gold.webp",

    PARTS_PATH + "/sari-nolock-connection_blue.webp",
  ],
  "pri-milled": [
    PARTS_PATH + "/premill-solid-abutment-mavi_gold.webp",

    PARTS_PATH + "/premill-solid-abutment-mavi_blue.webp",
    PARTS_PATH + "/premill-solid-abutment-sari_gold.webp",

    PARTS_PATH + "/premill-solid-abutment-sari_blue.webp",
    PARTS_PATH + "/mavi-premill_gold.webp",

    PARTS_PATH + "/mavi-premill_blue.webp",
    PARTS_PATH + "/sari-premill_gold.webp",

    PARTS_PATH + "/sari-premill_blue.webp",
  ],
  "straight-mua": [
    PARTS_PATH + "/mavi-multi-connection_gold.webp",

    PARTS_PATH + "/mavi-multi-connection_blue.webp",
    PARTS_PATH + "/mavi-multi-octagon-connection_gold.webp",

    PARTS_PATH + "/mavi-multi-octagon-connection_blue.webp",
    PARTS_PATH + "/sari-multi-octagon-connection_gold.webp",

    PARTS_PATH + "/sari-multi-octagon-connection_blue.webp",
  ],
  "angled-mua": [
    PARTS_PATH + "/mavi-multi-analog_gold.webp",

    PARTS_PATH + "/mavi-multi-analog_blue.webp",
    PARTS_PATH + "/sari-multi-analog_gold.webp",

    PARTS_PATH + "/sari-multi-analog_blue.webp",
    PARTS_PATH + "/mavi-multi-octagon-analog_gold.webp",

    PARTS_PATH + "/mavi-multi-octagon-analog_blue.webp",
  ],
  "mua-cylinders": [
    PARTS_PATH + "/mavi-multi-octagon-vida_gold.webp",

    PARTS_PATH + "/mavi-multi-octagon-vida_blue.webp",
    PARTS_PATH + "/mavi-vida_gold.webp",

    PARTS_PATH + "/mavi-vida_blue.webp",
    PARTS_PATH + "/sari-abutment-vida_gold.webp",

    PARTS_PATH + "/sari-abutment-vida_blue.webp",
  ],
  "ball-socket-abutment": [
    PARTS_PATH + "/vario-base-cap_gold.webp",

    PARTS_PATH + "/vario-base-cap_blue.webp",
    PARTS_PATH + "/vario-base-gh1-5-mavi_gold.webp",

    PARTS_PATH + "/vario-base-gh1-5-mavi_blue.webp",
    PARTS_PATH + "/vario-base-gh1-5-sari_gold.webp",

    PARTS_PATH + "/vario-base-gh1-5-sari_blue.webp",
    PARTS_PATH + "/vario-base-gh3-mavi_gold.webp",

    PARTS_PATH + "/vario-base-gh3-mavi_blue.webp",
    PARTS_PATH + "/vario-base-gh3-sari_gold.webp",

    PARTS_PATH + "/vario-base-gh3-sari_blue.webp",
    PARTS_PATH + "/vario-base-gh4-5-mavi_gold.webp",

    PARTS_PATH + "/vario-base-gh4-5-mavi_blue.webp",
    PARTS_PATH + "/vario-base-gh4-5-sari_gold.webp",

    PARTS_PATH + "/vario-base-gh4-5-sari_blue.webp",
  ],
  "locator-abutment": [
    PARTS_PATH + "/all-on-four-analog-vario-base_gold.webp",

    PARTS_PATH + "/all-on-four-analog-vario-base_blue.webp",
    PARTS_PATH + "/all-on-for-bar-tepe-vida_gold.webp",

    PARTS_PATH + "/all-on-for-bar-tepe-vida_blue.webp",
  ],
  "lab-analog": [
    PARTS_PATH + "/lab-analog-mlab4301_00_gold.webp",

    PARTS_PATH + "/lab-analog-mlab4301_00_blue.webp",
    PARTS_PATH + "/analog-mavi_gold.webp",

    PARTS_PATH + "/analog-mavi_blue.webp",
    PARTS_PATH + "/analog-mavi-kabuk_gold.webp",

    PARTS_PATH + "/analog-mavi-kabuk_blue.webp",
    PARTS_PATH + "/analog-sari-kabuk_gold.webp",

    PARTS_PATH + "/analog-sari-kabuk_blue.webp",
    PARTS_PATH + "/sari-analog_gold.webp",

    PARTS_PATH + "/sari-analog_blue.webp",
    PARTS_PATH + "/standart-analog-mavi_gold.webp",

    PARTS_PATH + "/standart-analog-mavi_blue.webp",
    PARTS_PATH + "/standart-analog-sari_gold.webp",

    PARTS_PATH + "/standart-analog-sari_blue.webp",
    PARTS_PATH + "/all-on-four-analog-mavi_gold.webp",

    PARTS_PATH + "/all-on-four-analog-mavi_blue.webp",
    PARTS_PATH + "/all-on-four-analog-sari_gold.webp",

    PARTS_PATH + "/all-on-four-analog-sari_blue.webp",
    PARTS_PATH + "/dim-analog-mavi_gold.webp",

    PARTS_PATH + "/dim-analog-mavi_blue.webp",
    PARTS_PATH + "/dim-analog-sarii_gold.webp",

    PARTS_PATH + "/dim-analog-sarii_blue.webp",
    PARTS_PATH + "/bluetypedimanalog_gold.webp",

    PARTS_PATH + "/bluetypedimanalog_blue.webp",
    PARTS_PATH + "/yellowtypedimanalog_gold.webp",

    PARTS_PATH + "/yellowtypedimanalog_blue.webp",
  ],
  "transfer-coping": [
    PARTS_PATH + "/impression-coping-micbp45_00_gold.webp",
    PARTS_PATH + "/impression-coping-micbp45_00_blue.webp",
  ],
  "scan-body": [
    PARTS_PATH + "/mavi-scanbody_gold.webp",

    PARTS_PATH + "/mavi-scanbody_blue.webp",
    PARTS_PATH + "/sari-scanbody_gold.webp",

    PARTS_PATH + "/sari-scanbody_blue.webp",
    PARTS_PATH + "/scanbody-blue_gold.webp",

    PARTS_PATH + "/scanbody-blue_blue.webp",
    PARTS_PATH + "/scanbody-yellow_gold.webp",

    PARTS_PATH + "/scanbody-yellow_blue.webp",
    PARTS_PATH + "/mavi-multi-scanbody1_gold.webp",

    PARTS_PATH + "/mavi-multi-scanbody1_blue.webp",
    PARTS_PATH + "/sari-multi-scanbody1_gold.webp",

    PARTS_PATH + "/sari-multi-scanbody1_blue.webp",
    PARTS_PATH + "/sari-multi-octagon-scanbody_gold.webp",

    PARTS_PATH + "/sari-multi-octagon-scanbody_blue.webp",
    PARTS_PATH + "/scan-body-all-on-four_gold.webp",

    PARTS_PATH + "/scan-body-all-on-four_blue.webp",
  ],
  "mua-transfer-coping": [
    PARTS_PATH + "/mavi-multi-connection_gold.webp",
    PARTS_PATH + "/mavi-multi-connection_blue.webp",

    PARTS_PATH + "/sari-multi-octagon-connection_gold.webp",
    PARTS_PATH + "/sari-multi-octagon-connection_blue.webp",

    PARTS_PATH + "/tarama-jig_gold.webp",
    PARTS_PATH + "/tarama-jig_blue.webp",

    PARTS_PATH + "/mgm-dijital-montaj-sari_gold.webp",
    PARTS_PATH + "/mgm-dijital-montaj-sari_blue.webp",
  ],
};

// Category cover images
export const categoryImages = {
  implants: "/assets/images/products/36-Implants.webp",
  prosthetics: "/assets/images/products/8-Prosthetics.webp",
  lab: "/assets/images/products/47-Lab-Workflow.webp",
  surgical: "/assets/images/products/15-Kits.webp",
  advanced: "/assets/images/products/22-advanced-solutions.webp",
  devices: "/assets/images/products/42-Devices.webp",
  biomaterials: "/assets/images/products/28-Biomaterials.webp",
};

// Helper function to get product image with fallback
export const getProductImage = (productId) => {
  return productImages[productId] || DEFAULT_PRODUCT_IMAGE;
};

// Helper function to get category image
export const getCategoryImage = (categoryKey) => {
  return categoryImages[categoryKey] || DEFAULT_PRODUCT_IMAGE;
};

// Helper function to get all images for a product (primary + secondary + 3D)
export const getAllProductImages = (productId) => {
  const images = [];
  if (productImages[productId]) {
    images.push(productImages[productId]);
  }
  const secondary = productSecondaryImages[productId];
  if (secondary) {
    if (Array.isArray(secondary)) {
      images.push(...secondary);
    } else {
      images.push(secondary);
    }
  }
  const parts3D = product3DImages[productId];
  if (parts3D) {
    images.push(...parts3D);
  }
  return images;
};

// Helper function to get only 3D images for a product
export const get3DImages = (productId) => {
  return product3DImages[productId] || [];
};
