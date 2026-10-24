import { config } from "./config.js";

export const projects = [
  {
    slug: "vocatube",
    number: "01",
    name: "VocaTube",
    title: "VocaTube – Voice-Controlled YouTube Platform",
    category: "React JS · YouTube API",
    description:
      "A React JS application that lets users search YouTube videos using voice-based interaction, with results fetched through the YouTube API.",
    details: [
      "Developed a React JS application that lets users search YouTube videos using voice-based interaction.",
      "Fetched video results through the YouTube API.",
      "Implemented History, Favorites, Notes and Focus Mode.",
      "Used browser Local Storage to preserve history, favorites and notes between sessions.",
      "Worked with API requests and JSON responses."
    ],
    tags: ["React JS", "JavaScript", "YouTube API", "HTML", "CSS"],
    live: "https://vocatube.netlify.app",
    code: "", // add the project repository URL here when available
    visual: "voc"
  },
  {
    slug: "movie-api-app",
    number: "02",
    name: "Movie API App",
    title: "Movie API Web Application",
    category: "HTML · CSS · JavaScript · REST API",
    description:
      "A web application that fetches movie information from a REST API and displays it dynamically on the page.",
    details: [
      "Built a web application that fetches movie information from a REST API.",
      "Used Fetch API and JavaScript to process JSON data and update page content dynamically.",
      "Designed the interface with HTML and CSS."
    ],
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    live: "", // add the live demo URL here when available
    code: "", // add the project repository URL here when available
    visual: "movie"
  }
];

export const skillGroups = [
  { title: "Frontend", icon: "⌘", items: ["HTML5", "CSS3", "JavaScript", "React JS", "Responsive Design"] },
  { title: "APIs & Data", icon: "↗", items: ["REST API", "Fetch API", "YouTube API", "JSON", "Web Speech API"] },
  { title: "Tools", icon: "⚙", items: ["Git", "GitHub", "VS Code"] },
  { title: "Web Concepts", icon: "{}", items: ["DOM Manipulation", "JSON Handling", "Local Storage"] }
];

export const experience = [
  {
    role: "Jr Trainee",
    org: "Aarodhan, Koyyuru (Paderu ITDA)",
    meta: "Duration: 6 months"
  },
  {
    role: "Jr Trainee",
    org: "Datapro Aarohan",
    meta: "Program: Python Full Stack and AI"
  }
];

export const education = [
  { year: "2022", title: "B.A. – History, Economics & Political Science", place: "Mrs. AVN College, Visakhapatnam", score: "6.9 CGPA" },
  { year: "2018", title: "Diploma in Elementary Education", place: "Institution not specified in resume", score: "77%" },
  { year: "2016", title: "Intermediate", place: "APTWER Junior College, Kakarapadu, Koyyuru", score: "732 marks" },
  { year: "2014", title: "10th", place: "APTWER (EM) School, Marikavalasa", score: "7.2 CGPA" }
];

export const strengths = ["Quick Learner", "Problem Solving", "Teamwork", "Self-Motivated", "Adaptability"];

export const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" }
];

export const profile = config;
