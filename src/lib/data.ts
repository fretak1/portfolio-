import type { Developer } from "@/types";

export const developer: Developer = {
  name: "Frezer Takele",
  title: "Fullstack Developer",
  tagline: "Building scalable web and mobile applications with Next.js, React Native, Node.js, and Spring Boot",
  profileImage: "/profile.jpg",
  bio: "I am a passionate Full-Stack Developer with a strong foundation in building modern, responsive, and user-centric web and mobile applications. I enjoy turning complex problems into clean, efficient, and scalable solutions. My expertise spans both frontend and backend development, allowing me to focus on the user experience while also architecting robust server-side logic and APIs. I’m experienced in working with modern frameworks, databases, and deployment workflows, and I’m always eager to learn new technologies and improve my craft. I value clean code, performance, and security.",
  skills: {
    frontend: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Spring Boot", "Python", "FastAPI"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    devops: ["Git", "Render", "Vercel"],
  },
  projects: [
    {
      title: "Enterprise E-commerce Site",
      description: " high-performance e-commerce site with complex faceted search, attribute filtering, secure Stripe checkout flow, and custom inventory caching. Redesigned backend routes to achieve sub-200ms API responses.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Express", "Stripe"],
      demoLink: "https://mern-with-next-js-stack-ecommerce-s.vercel.app",
      githubLink: "https://github.com/fretak1/Mern-with-Next-Js-Ecommerce-site.git",
      image: "/projects/ecommerce.png",
    },
    {
      title: "KTS Support Portal & Operations Platform",
      description: "Designed a centralized support ticketing and inventory management system for KTS BDU, handling operations for many students.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Express", "REST APIs"],
      demoLink: "https://knowledge-and-tech-store-kts.vercel.app/",
      githubLink: "https://github.com/fretak1/Knowledge-and-Tech-Store-KTS.git",
      image: "/projects/kts.png",
    },
    {
      title: "Home and Car Rental and Purchasing System",
      description: "HomeCar is a digital marketplace that connects buyers, sellers, agents, and property owners in a single platform for home and car listings. The system leverages AI-powered price suggestion services to help users  make informed decisions.",
      tech: ["Next.js", "Node.js", "Socket.io", "Express.js", "FastAPI", "PostgreSQL", "TypeScript"],
      demoLink: "https://home-car-1uua.vercel.app/",
      githubLink: "https://github.com/fretak1/HomeCar.git",
      image: "/projects/homecar.png",
    },
    
  ],
  experience: [
    {
      company: "Self Employed",
      role: "Fullstack Engineer",
      period: "2023 - Present",
      description: "Architected and delivered custom full-stack solutions.",
    },
    {
      company: "CodeAlpha",
      role: "Full Stack Development Intern",
      period: "2024",
      description: "Spearheaded backend API integrations, designed dynamic React frontends, and built low-latency real-time video streaming hubs. Solved challenging software engineering algorithms.",
    },
    {
      company: "Moti Engineering PLC",
      role: "Hardware & Systems Intern",
      period: "2025 (April - June)",
      description: "Configured enterprise router subnets, performed networking systems diagnostics, and managed hardware infrastructures. Gained deep understanding of packet transmissions, enhancing overall capability to build highly-optimized backend APIs.",
    },
  ],
  contact: {
    email: "frezertakele1@gmail.com",
    linkedin: "https://www.linkedin.com/in/frezer-takele-65b9b5382",
    github: "https://github.com/fretak1",
    twitter: "https://twitter.com/frezertakele",
    telegram: "https://t.me/fretak",
    instagram: "https://www.instagram.com/f.r.e.t.a.k/?hl=en",
  },
  education: [
    {
      institution: "Bahir Dar University",
      degree: "Bachelor of Science in Computer Engineering",
      period: "2022 - 2026",
      description: "Focused on software engineering,Hardware engineering,networking, algorithms, and web technologies.",
    },
  ],
  certificates: [
    {
      title: "Full Stack Development Internship Certificate",
      issuer: "CodeAlpha",
      year: "2024",
      downloadLink: "/certificates/codealpha_certificate.pdf"
    },
    {
      title: "Letter of Recommendation",
      issuer: "CodeAlpha",
      year: "2024",
      downloadLink: "/certificates/codealpha_lor.pdf"
    },
    {
      title: "Backend Development and APIs",
      issuer: "FreeCodeCamp",
      year: "2025",
      downloadLink: "/certificates/backend and api.pdf"
    },
    {
      title: "Data Science with Python",
      issuer: "Udacity",
      year: "2025",
      downloadLink: "/certificates/data science.pdf"
    },
    {
      title: "Programming Fundamentals",
      issuer: "Udacity",
      year: "2024",
      downloadLink: "/certificates/programming fundamental.pdf"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2024",
      downloadLink: "/certificates/responsive web design.pdf"
    }
  ],
};
