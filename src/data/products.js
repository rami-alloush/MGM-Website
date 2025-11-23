export const products = {
  implants: {
    title: "Implants",
    items: [
      {
        id: "mgm",
        name: "MGM ™",
        description: "Standard implant solution",
        image: "placeholder",
      },
      {
        id: "mgm-plus",
        name: "MGM- plus ™",
        description: "Enhanced stability",
        image: "placeholder",
      },
      {
        id: "mgm-compressive",
        name: "MGM - compressive ™",
        description: "Compressive design",
        image: "placeholder",
      },
      {
        id: "mgm-s",
        name: "MGM- S ™",
        description: "Short implant",
        image: "placeholder",
      },
    ],
  },
  prosthetics: {
    title: "Prosthetics",
    subcategories: [
      {
        title: "Stock Prosthetics",
        items: [
          { id: "straight-abutment", name: "Straight abutment" },
          { id: "angled-abutment", name: "Angled abutment" },
        ],
      },
      {
        title: "Temporary Prosthetics",
        items: [
          { id: "healing-cap", name: "Healing Cap" },
          { id: "temp-abutments", name: "Temporary abutments" },
        ],
      },
      {
        title: "MUA Prosthetics",
        items: [
          { id: "straight-mua", name: "Straight MUA" },
          { id: "angled-mua", name: "Angled MUA" },
          { id: "mua-healing-cap", name: "MUA healing Cap" },
          { id: "mua-tbase", name: "MUA TBase" },
          { id: "mua-clynders", name: "MUA Clynders" },
        ],
      },
      {
        title: "Special Prosthetics",
        items: [
          { id: "ball-socket", name: "Ball and socket abutments" },
          { id: "locators", name: "Locators abutments" },
        ],
      },
      {
        title: "Digital Prosthetics",
        items: [
          { id: "premilled", name: "Premilled abutments" },
          { id: "t-base", name: "T-Base abutments" },
          { id: "v-base", name: "V base abutments" },
          { id: "non-hexed-t-base", name: "Non hexed T-Base abutments" },
        ],
      },
    ],
  },
  lab: {
    title: "Lab Work Flow",
    subcategories: [
      {
        title: "Traditional",
        items: [
          {
            id: "trad-copping",
            name: "Traditional Copping, Traditional analogue",
          },
          { id: "mua-copping", name: "MUA (Copping - analogue)" },
        ],
      },
      {
        title: "Digital Lab Work",
        items: [
          { id: "scan-body", name: "Scan body, Digital analogue" },
          { id: "mua-scan-body", name: "MUA scan body, MUA digital analogue" },
          { id: "implants-library", name: "Implants library" },
        ],
      },
    ],
  },
  surgical: {
    title: "Surgical Kit",
    items: [
      { id: "drills", name: "Drills, Pins" },
      { id: "implant-drivers", name: "Implants drivers" },
      { id: "screw-drivers", name: "Screw drivers" },
      { id: "torque-wrench", name: "Torque wrench" },
      { id: "extension-drill", name: "Extension drill" },
      { id: "mua-adaptor", name: "MUA adaptor" },
      { id: "drilling-protocol", name: "Drilling protocol" },
    ],
  },
  advanced: {
    title: "Advanced Kits",
    items: [
      { id: "gbr-master", name: "GBR Master kit" },
      { id: "sinus-master", name: "Sinus master kit" },
      { id: "screw-remover", name: "Screw and implants remover kit" },
      { id: "guided-kit", name: "Guided kit" },
      { id: "locators-guide", name: "Implants locators guide kits" },
      { id: "bone-splitting", name: "Bone splitting kit" },
    ],
  },
  devices: {
    title: "Devices",
    items: [
      { id: "motor", name: "MGM Implants motor and Surgical device" },
      { id: "checker", name: "MGM checker device" },
      { id: "plasma", name: "MGM plasma activator device" },
      { id: "uv-ozone", name: "MGM UV and Ozone activator device" },
    ],
  },
  biomaterials: {
    title: "Biomaterials",
    items: [
      { id: "bone-graft", name: "Bone Graft" },
      { id: "membrane", name: "Membrane" },
    ],
  },
};
