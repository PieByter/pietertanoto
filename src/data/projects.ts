export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: Array<{ icon: string; text: string }>;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Prima Motor — Workshop POS",
    description:
      "A full-featured point-of-sale and inventory system for a motorcycle workshop — sales, purchases, stock mutations, mechanics, customers, suppliers, returns, discounts, and financial reports with role-based access and real-time alerts.",
    features: [
      "Sales, purchases, returns & discounts",
      "Real-time inventory and stock mutations",
      "Customer, supplier & mechanic management",
      "Profit/loss and mechanic performance reports",
      "Role-based access with admin & mechanic roles",
      "Installable PWA with dark mode and i18n",
    ],
    image: "/images/project-pos.jpg",
    tags: [
      { icon: "SiNextdotjs", text: "Next.js" },
      { icon: "SiSupabase", text: "Supabase" },
      { icon: "SiDrizzle", text: "Drizzle ORM" },
      { icon: "SiTypescript", text: "TypeScript" },
      { icon: "SiTailwindcss", text: "Tailwind CSS" },
      { icon: "SiPwa", text: "PWA" },
    ],
    liveUrl: "https://pos-prima-motor.vercel.app",
    githubUrl: "https://github.com/PieByter/pos-prima-motor",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This very website — a modern, performant portfolio built with Next.js, Tailwind CSS, and Framer Motion with dark/light mode and smooth animations.",
    features: [
      "Dark / light mode",
      "Interactive terminal & chat widget",
      "Smooth Framer Motion animations",
      "SEO-optimized with Open Graph",
    ],
    image: "/images/project-portfolio.jpg",
    tags: [
      { icon: "SiNextdotjs", text: "Next.js" },
      { icon: "SiTypescript", text: "TypeScript" },
      { icon: "SiFramer", text: "Framer Motion" },
      { icon: "SiTailwindcss", text: "Tailwind CSS" },
    ],
    liveUrl: "https://pietertanoto.vercel.app",
    githubUrl: "https://github.com/PieByter/pietertanoto",
    featured: true,
  },
  {
    id: 3,
    title: "FocusPodo — Productivity App",
    description:
      "A Flutter productivity app integrating a Todo list, Habit Tracker, and Pomodoro timer with smooth animations and state management.",
    features: [
      "Todo list management",
      "Habit tracker",
      "Pomodoro timer",
      "Smooth animations & state management",
    ],
    image: "/images/project-focus.jpg",
    tags: [
      { icon: "SiFlutter", text: "Flutter" },
      { icon: "SiDart", text: "Dart" },
      { icon: "SiFirebase", text: "Firebase" },
      { icon: "SiRiverpod", text: "Riverpod" },
    ],
    liveUrl: "https://pietertanoto.vercel.app",
    githubUrl: "https://github.com/PieByter/focus-podo",
    featured: true,
  },
  {
    id: 10,
    title: "VaultKey — Password Manager",
    description:
      "A secure password manager built with Flutter. Credentials are encrypted on-device and protected with biometric unlock, with a local SQLite vault and optional cloud sync through Firebase.",
    features: [
      "Encrypted local vault with SQLite & Drift",
      "Biometric unlock with flutter_secure_storage",
      "Firebase Authentication & cloud sync",
      "QR scanning, password generator & secure export",
      "Responsive Flutter UI for mobile and web",
    ],
    image: "/images/project-focus.jpg",
    tags: [
      { icon: "SiFlutter", text: "Flutter" },
      { icon: "SiDart", text: "Dart" },
      { icon: "SiFirebase", text: "Firebase" },
      { icon: "SiRiverpod", text: "Riverpod" },
      { icon: "SiSqlite", text: "SQLite" },
      { icon: "🔐", text: "Encryption" },
    ],
    liveUrl: "https://vault-key-olive.vercel.app",
    githubUrl: "https://github.com/PieByter/vault-key",
    featured: true,
  },
  {
    id: 11,
    title: "Money Management — Finance PWA",
    description:
      "A mobile-first personal finance tracker for wallets, two-leg transfers, monthly budgets, shopping item details, and financial reports. Built with Next.js, Supabase, and Drizzle ORM.",
    features: [
      "Multi-wallet balances derived from a ledger",
      "Expense, income & two-leg transfer entries",
      "Monthly budgets with per-category progress",
      "Shopping item catalog with price history",
      "History filters, reports & CSV export",
      "Installable PWA with offline shell",
    ],
    image: "/images/project-api.jpg",
    tags: [
      { icon: "SiNextdotjs", text: "Next.js" },
      { icon: "SiSupabase", text: "Supabase" },
      { icon: "SiDrizzle", text: "Drizzle ORM" },
      { icon: "SiTypescript", text: "TypeScript" },
      { icon: "SiPwa", text: "PWA" },
    ],
    liveUrl: "https://money-management-taupe.vercel.app",
    githubUrl: "https://github.com/PieByter/money-management",
    featured: true,
  },
  {
    id: 12,
    title: "PocketLedger — TCG Pocket Tracker",
    description:
      "A multi-account Pokémon TCG Pocket ledger and transfer planner with an inventory matrix, deficit/surplus matching, daily trade scheduling, stamina tracking, and CSV/JSON backups.",
    features: [
      "Multi-account card inventory matrix",
      "Deficit/surplus transfer matcher",
      "Greedy multi-day transfer planner",
      "Stamina & Shinedust tracking",
      "Planned → sent → confirmed transfer ledger",
      "PWA with CSV import, export & JSON backup",
    ],
    image: "/images/project-etl.jpg",
    tags: [
      { icon: "SiNextdotjs", text: "Next.js" },
      { icon: "SiSupabase", text: "Supabase" },
      { icon: "SiDrizzle", text: "Drizzle ORM" },
      { icon: "SiTypescript", text: "TypeScript" },
      { icon: "SiPwa", text: "PWA" },
    ],
    liveUrl: "https://tcg-pocket-tracking.vercel.app",
    githubUrl: "https://github.com/PieByter/tcg-pocket-tracking",
    featured: true,
  },
  {
    id: 4,
    title: "LaporBang App",
    description:
      "A mobile pothole reporting app for Medan City that uses YOLOv11 and UNet for road-damage detection, with an Express.js backend and seamless Android integration.",
    features: [
      "Pothole detection with YOLOv11 & UNet",
      "Android app integration",
      "Express.js backend",
      "Road-damage image classification",
    ],
    image: "/images/project-etl.jpg",
    tags: [
      { icon: "SiAndroid", text: "Android" },
      { icon: "🤖", text: "YOLOv11" },
      { icon: "🧠", text: "UNet" },
      { icon: "SiTensorflow", text: "TensorFlow Lite" },
      { icon: "SiExpress", text: "Express.js" },
      { icon: "SiMongodb", text: "MongoDB" },
      { icon: "SiPostman", text: "Postman" },
      { icon: "SiKaggle", text: "Kaggle" },
    ],
    githubUrl: "https://github.com/PieByter/laporbang",
  },
  {
    id: 5,
    title: "Auxilium Recommendation App",
    description:
      "A recommendation mobile app developed in Bangkit Academy, combining an ML model for personalized suggestions with a seamless cloud backend and smooth Android integration.",
    features: [
      "ML-based personalized recommendations",
      "Cloud backend integration",
      "Android app",
      "Built during Bangkit Academy",
    ],
    image: "/images/project-etl.jpg",
    tags: [
      { icon: "SiAndroid", text: "Android" },
      { icon: "SiTensorflow", text: "ML Model" },
      { icon: "SiGooglecloud", text: "Cloud Backend" },
      { icon: "SiFirebase", text: "Firebase" }
    ],
    githubUrl: "https://github.com/PieByter/auxilium",
  },
  {
    id: 6,
    title: "Techy Trashker — Waste Management App",
    description:
      "A waste management app designed to help users locate the nearest waste bank for proper waste disposal and environmental awareness. Built with Figma prototyping.",
    features: [
      "Find nearest waste bank",
      "Figma interactive prototype",
      "Sustainability-focused UX",
      "Location services",
    ],
    image: "/images/project-n8n.jpg",
    tags: [
      { icon: "SiFigma", text: "Figma" },
      { icon: "SiUikit", text: "UI/UX Design" },
      { icon: "🌍", text: "Sustainability" },
      { icon: "📍", text: "Location Services" },
    ],
    liveUrl: "https://www.figma.com/proto/vor2SRshrmWkFdKPTelwut/Techy-Trashker--FORDIGI-?node-id=49-37&p=f&t=TglEPc4oybImeFeW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A52",
  },
  {
    id: 7,
    title: "RESTful API Server",
    description:
      "A refactored Express.js REST API with modular architecture — separate models, routes, middlewares, and config — deployed seamlessly on Vercel.",
    features: [
      "Modular architecture (models, routes, middlewares)",
      "MongoDB integration",
      "Deployed on Vercel",
      "Clean, maintainable structure",
    ],
    image: "/images/project-api.jpg",
    tags: [
      { icon: "SiNodedotjs", text: "Node.js" },
      { icon: "SiExpress", text: "Express.js" },
      { icon: "SiMongodb", text: "MongoDB" },
      { icon: "SiVercel", text: "Vercel" },
    ],
    githubUrl: "https://github.com/pietertanoto",
  },
  {
    id: 8,
    title: "n8n Workflow Automation",
    description:
      "Custom automation workflows built with n8n to streamline data processing, notifications, and integrations across multiple platforms.",
    features: [
      "Custom automation workflows",
      "Data processing & notifications",
      "Multi-platform integrations",
      "Docker-based",
    ],
    image: "/images/project-n8n.jpg",
    tags: [
      { icon: "Sinn8n", text: "n8n" },
      { icon: "SiDocker", text: "Docker" },
      { icon: "SiPostman", text: "REST APIs" },
      { icon: "SiAutomation", text: "Automation" },
    ],
    githubUrl: "https://github.com/pietertanoto",
  },
  {
    id: 9,
    title: "Fashion ETL Pipeline",
    description:
      "A modular ETL pipeline to scrape, transform, and load fashion product data from e-commerce sites into CSV and Google Sheets repositories with robust error handling.",
    features: [
      "Web scraping fashion data",
      "Pandas transformation",
      "Export to CSV & Google Sheets",
      "Robust error handling",
    ],
    image: "/images/project-etl.jpg",
    tags: [
      { icon: "🐍", text: "Python" },
      { icon: "📊", text: "Pandas" },
      { icon: "📝", text: "Google Sheets API" },
      { icon: "🌐", text: "Web Scraping" }
    ],
    githubUrl: "https://github.com/Piebyter",
  },
  // {
  //   id: 10,
  //   title: "AI Powered POS System",
  //   description:
  //     "A full-featured Point of Sale system with real-time inventory management, sales analytics, and AI-driven product recommendations built with Next.js and Supabase.",
  //   image: "/images/project-pos.jpg",
  //   tags: [
  //     { icon: "SiNextdotjs", text: "Next.js" },
  //     { icon: "SiSupabase", text: "Supabase" },
  //     { icon: "SiTypescript", text: "TypeScript" },
  //     { icon: "SiTailwindcss", text: "Tailwind CSS" },
  //   ],
  //   liveUrl: "https://pietertanoto.vercel.app",
  //   githubUrl: "https://github.com/Piebyter",
  // },
];
