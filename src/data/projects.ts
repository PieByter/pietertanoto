export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: Array<{ icon: string; text: string }>;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Powered POS System",
    description:
      "A full-featured Point of Sale system with real-time inventory management, sales analytics, and AI-driven product recommendations built with Next.js and Supabase.",
    image: "/images/project-pos.jpg",
    tags: [
      { icon: "SiNextdotjs", text: "Next.js" },
      { icon: "SiSupabase", text: "Supabase" },
      { icon: "SiTypescript", text: "TypeScript" },
      { icon: "SiTailwindcss", text: "Tailwind CSS" },
    ],
    // liveUrl: "https://pietertanoto.vercel.app",
    githubUrl: "https://github.com/PieByter/pos-prima-motor",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This very website — a modern, performant portfolio built with Next.js, Tailwind CSS, and Framer Motion with dark/light mode and smooth animations.",
    image: "/images/project-portfolio.jpg",
    tags: [
      { icon: "SiNextdotjs", text: "Next.js" },
      { icon: "SiTypescript", text: "TypeScript" },
      { icon: "SiFramer", text: "Framer Motion" },
      { icon: "SiTailwindcss", text: "Tailwind CSS" },
    ],
    liveUrl: "https://pietertanoto.vercel.app",
    githubUrl: "https://github.com/pietertanoto",
    featured: true,
  },
  {
    id: 3,
    title: "FocusPodo — Productivity App",
    description:
      "A Flutter productivity app integrating a Todo list, Habit Tracker, and Pomodoro timer with smooth animations and state management.",
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
    id: 4,
    title: "LaporBang App",
    description:
      "A mobile pothole reporting app for Medan City that uses YOLOv11 and UNet for road-damage detection, with an Express.js backend and seamless Android integration.",
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
