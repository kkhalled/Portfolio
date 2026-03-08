import type { Experience, Project } from "../types";

export const aboutParagraphs = [
  "I’m a frontend developer who enjoys turning complex ideas into clear, usable interfaces. What interests me most about frontend development is the balance between engineering and design — building systems that are technically solid while still feeling simple and intuitive to use.",

  "When working on projects, I focus on structure first: building reusable components, organizing UI logic clearly, and making sure the interface scales as features grow. I pay close attention to details like responsiveness, accessibility, and performance because they shape how people actually experience a product.",

  "Most of my learning happens through building real applications and studying well-designed products. I enjoy breaking down how modern interfaces work, experimenting with different approaches, and continuously refining how I design and implement frontend systems.",
];

export const coreTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "HTML & CSS",
  "Git & GitHub",
  "REST APIs",
  "Node.js",
] as const;
export const experiences: Experience[] = [
  {
    period: "2024 — Present",
    title: "Frontend Development Projects",
    company: "Independent Work",
    url: "",
    description:
      "Designing and building modern web applications with React and Next.js. Developed a full-featured e-commerce platform including product catalog browsing, category filtering, cart management, and authentication flows using API-driven data. Focused on scalable component architecture, responsive UI systems with Tailwind CSS, and improving performance through lazy loading, optimized rendering, and code splitting.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Context API",
      "Git",
    ],
  },

  {
    period: "2023 — 2024",
    title: "Frontend Learning & Application Building",
    company: "Self-Directed Study",
    url: "",
    description:
      "Completed intensive frontend development learning through project-based courses and hands-on applications. Built multiple responsive web interfaces while practicing JavaScript fundamentals, React component architecture, state management patterns, and API integration. Focused on translating UI designs into functional interfaces and strengthening debugging and problem-solving skills.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git"],
  },

  {
    period: "2022 — 2026",
    title: "B.Sc. Computer Science",
    company: "Faculty of Computers & Information",
    url: "",
    description:
      "Studying core computer science foundations including algorithms, data structures, and object-oriented programming while building practical software projects. Developed strong analytical thinking and experience with version control, debugging, and structured problem solving applied to real web development projects.",
    tech: ["JavaScript", "OOP", "Data Structures", "Algorithms", "Git"],
  },
];
/**
 * Featured projects — big cards with image, full description, live + github links.
 * These represent your strongest, most complete work.
 */
export const featuredProjects: Project[] = [
  {
    title: "FreshCart",
    description:
      "A full-featured e-commerce platform built with Next.js and TypeScript. Ships product browsing, category filtering, cart management, user authentication, and API-driven data. Focused on scalable component design, responsive UI, and mobile performance through code splitting.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Context API"],
    image: "/freshcart.png",
    url: "https://fresh-cart-mauve-tau.vercel.app/",
    github: "https://github.com/kkhalled/FreshCart",
  },
  {
    title: "Rescufy — Smart Emergency Platform",
    description:
      "Concept and prototype for a smart emergency response platform that connects users with nearby emergency services. Focused on fast incident reporting, intelligent routing to appropriate responders, and improving emergency response efficiency with modern web technologies.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "REST API"],
    image: "/rescufy.png",
    url: "",
    github: "",
  },
  {
    title: "Social Hub",
    description:
      "A social media web application with feed-style layouts, profile sections, and reusable UI components. Built with component-driven development principles, responsive layouts, and dynamic interface rendering to closely mirror real-world social platforms.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "/social-hub.png",
    url: "https://social-hub-v1.vercel.app/",
    github: "https://github.com/kkhalled/Social-Hub",
  },
];

/**
 * Other projects — compact cards. Learning exercises and smaller builds.
 */
export const otherProjects: Project[] = [
  {
    title: "Movie App",
    description:
      "Browser for trending films, search, and movie details using an external movie API. Focused on API integration and dynamic rendering.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "/movie-app.png",
    url: "",
    github: "https://github.com/kkhalled/Movie-App",
  },
  {
    title: "Weather App",
    description:
      "Responsive weather dashboard fetching real-time forecasts for searched locations via external weather API.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/weather-app.png",
    url: "",
    github: "https://github.com/kkhalled/Weather",
  },
  {
    title: "Game Reviews Website",
    description:
      "Static site showcasing video game reviews and ratings using card-based layouts. Built to practice layout systems and UI composition.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/game-reviews.png",
    url: "",
    github: "https://github.com/kkhalled/Game-Reviews",
  },
];
