export const products = {
  implants: {
    title: "Implants",
    description:
      "Our implant systems feature the M-Pure Surface treatment, Smart Connection (11° Morse Taper), and a unique hybrid body design for optimal stability and osseointegration.",
    items: [
      {
        id: "mgm",
        name: "MGM ™",
        description: "Standard implant solution with Smart Hybrid Body Design.",
        features: [
          "11° Morse Taper Connection for superior mechanical stability and bacterial seal.",
          "M-Pure Surface: Sandblasted, acid-free surface with Ra 1.42-1.74 µm.",
          "Smart Hybrid Body: Combines tapered core for stability and cylindrical form for surface area.",
          "Smart Cervix: Thread-free cervical area for soft tissue integration.",
          "Smart Paper Thread: Cuts bone without distraction, improving density.",
          "Smart Apex: Pointed apex with rounded boundaries for safety.",
        ],
        image: "placeholder",
      },
      {
        id: "mgm-plus",
        name: "MGM- plus ™",
        description: "Enhanced stability for immediate loading protocols.",
        features: [
          "Aggressive thread design for high primary stability.",
          "Ideal for soft bone and immediate placement.",
          "All benefits of the standard MGM system.",
        ],
        image: "placeholder",
      },
      {
        id: "mgm-compressive",
        name: "MGM - compressive ™",
        description: "Compressive design for bone condensation and expansion.",
        features: [
          "Designed for soft bone types.",
          "Maximizes bone-to-implant contact.",
          "Self-tapping and bone-condensing properties.",
        ],
        image: "placeholder",
      },
      {
        id: "mgm-s",
        name: "MGM- S ™",
        description: "Short implant for limited vertical bone height.",
        features: [
          "Avoids complex bone augmentation procedures.",
          "Optimized thread profile for maximum stability in short lengths.",
        ],
        image: "placeholder",
      },
    ],
  },
  prosthetics: {
    title: "Prosthetics",
    description:
      "Comprehensive prosthetic solutions including Stock, Multi-Unit, and Digital components.",
    subcategories: [
      {
        title: "Stock Abutments",
        items: [
          {
            id: "straight-abutment",
            name: "Straight Abutment",
            description:
              "Used when the implant is aligned ideally. No angulation.",
          },
          {
            id: "angled-abutment",
            name: "Angled Abutment",
            description:
              "Corrects misalignment (15°, 25°, 30°) for optimal prosthetic path.",
          },
        ],
      },
      {
        title: "Temporary & Healing",
        items: [
          {
            id: "healing-cap",
            name: "Healing Abutment (Cap)",
            description:
              "Shapes gum tissue and protects the connection during healing.",
          },
          {
            id: "temp-abutments",
            name: "Temporary Abutment",
            description:
              "Supports provisional restorations. Available in Titanium or PEEK.",
          },
        ],
      },
      {
        title: "Multi-Unit Abutments (MUA)",
        items: [
          {
            id: "straight-mua",
            name: "Straight MUA",
            description: "For screw-retained bridges and bars.",
          },
          {
            id: "angled-mua",
            name: "Angled MUA",
            description:
              "Corrects angulation (17°, 30°) for tilted implants (All-on-X).",
          },
          { id: "mua-healing-cap", name: "MUA Healing Cap" },
          { id: "mua-tbase", name: "MUA Ti-Base" },
          { id: "mua-clynders", name: "MUA Cylinders" },
        ],
      },
      {
        title: "Overdenture Systems",
        items: [
          {
            id: "ball-socket",
            name: "Ball & Socket",
            description:
              "Simple, cost-effective snap attachment for removable dentures.",
          },
          {
            id: "locators",
            name: "Locator Abutments",
            description:
              "Low-profile, self-aligning system with excellent retention.",
          },
        ],
      },
      {
        title: "Digital Components",
        items: [
          {
            id: "premilled",
            name: "Pre-milled Abutments",
            description: "Metal blanks for custom milling.",
          },
          {
            id: "t-base",
            name: "Ti-Base",
            description:
              "Hybrid component for ceramic/zirconia superstructures.",
          },
          { id: "v-base", name: "V-Base Abutment" },
          { id: "non-hexed-t-base", name: "Non-Hexed Ti-Base" },
        ],
      },
    ],
  },
  lab: {
    title: "Lab Workflow",
    description:
      "Precision components for both traditional and digital lab workflows.",
    subcategories: [
      {
        title: "Traditional Impression",
        items: [
          {
            id: "trad-copping",
            name: "Transfer Copings",
            description: "Open-Tray (Pick-up) and Closed-Tray options.",
          },
          {
            id: "analogs",
            name: "Lab Analogs",
            description: "Replicas of implant/abutment for stone models.",
          },
          { id: "mua-copping", name: "MUA Transfer Coping" },
        ],
      },
      {
        title: "Digital Workflow",
        items: [
          {
            id: "scan-body",
            name: "Scan Body",
            description:
              "PEEK or Titanium digital transfer for intraoral scanners.",
          },
          { id: "mua-scan-body", name: "MUA Scan Body" },
          { id: "implants-library", name: "Digital Library" },
        ],
      },
    ],
  },
  surgical: {
    title: "Surgical Kits",
    description: "Ergonomic kits designed for precision and ease of use.",
    items: [
      { id: "surgical-kit", name: "Standard Surgical Kit" },
      { id: "guided-kit", name: "Guided Surgery Kit" },
      { id: "sinus-kit", name: "All Sinus Lifting Kit" },
      { id: "screw-remover", name: "Screw Remover Helping Kit" },
      { id: "fixture-remover", name: "Fixture Remover Helping Kit" },
      { id: "gbr-master", name: "GBR Master Kit" },
      { id: "ridge-augmenting", name: "Ridge Augmenting Kit" },
      { id: "prosthetic-kit", name: "Prosthetic Kit (Drivers, Keys)" },
    ],
  },
  advanced: {
    title: "Advanced Solutions",
    items: [
      { id: "gbr-master", name: "GBR Master Kit" },
      { id: "sinus-master", name: "Sinus Master Kit" },
      { id: "bone-splitting", name: "Bone Splitting Kit" },
    ],
  },
  devices: {
    title: "Devices",
    items: [
      { id: "motor", name: "MGM Surgical Motor" },
      { id: "checker", name: "ISQ Checker Device" },
      { id: "plasma", name: "Plasma Activator" },
      { id: "uv-ozone", name: "UV & Ozone Activator" },
    ],
  },
  biomaterials: {
    title: "Biomaterials",
    items: [
      { id: "bone-graft", name: "Bone Graft Materials" },
      { id: "membrane", name: "Barrier Membranes" },
    ],
  },
};
