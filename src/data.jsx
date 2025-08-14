import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaAws,
} from "react-icons/fa";
import {
  SiSpring,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import Lloyds from "./assets/images/Lloyds.png";
import eCommerce from "./assets/images/ecommerce.jpg";
import allNeeds from "./assets/images/allneeds.jpg";
import medicare from "./assets/images/medicare.png";
import portfolio from "./assets/images/portfolio.jpg";
import profilePhoto from "./assets/images/profile.jpeg";

const profile = {
  name: "Sarthak Chaudhary",
  tagline: "Full Stack Developer | React + Java + Spring Boot",
  photo: profilePhoto,
};

const about = {
  heading: "About Me",
  summary: `I’m a passionate Full Stack Developer with solid experience in building 
modern, scalable applications using React.js, Java, and Spring Boot. I enjoy 
turning complex problems into elegant, maintainable solutions that make a 
difference for end users.

Over the years, I’ve contributed to enterprise-scale projects, led 
frontend feature development, and collaborated across teams to deliver 
products that are both functional and delightful to use. Whether it’s 
optimizing performance, architecting clean APIs, or designing intuitive 
UIs, I’m always eager to push projects forward and learn something new 
along the way.`,
};

const skills = [
  { name: "React.js", icon: <FaReact color="#61dafb" />, level: 95 },
  { name: "Java", icon: <FaJava color="#007396" />, level: 92 },
  { name: "Spring Boot", icon: <SiSpring color="#6db33f" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript color="#F0DB4F" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs color="#8cc84b" />, level: 85 },
  { name: "NestJS", icon: <SiNestjs color="#e0234e" />, level: 80 },
  { name: "Express.js", icon: <SiExpress color="#444" />, level: 80 },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" />, level: 80 },
  { name: "HTML5", icon: <FaHtml5 color="#e44d26" />, level: 97 },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" />, level: 96 },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" />, level: 87 },
  { name: "MySQL", icon: <FaDatabase color="#00618a" />, level: 70 },
  { name: "Git", icon: <FaGitAlt color="#f34f29" />, level: 90 },
  { name: "Docker", icon: <FaDocker color="#2496ed" />, level: 70 },
  { name: "Redux", icon: <SiRedux color="#764abc" />, level: 82 },
  { name: "REST API", icon: <FaCode color="#34ace0" />, level: 90 },
  { name: "AWS", icon: <FaAws />, level: 75 },
];

const experience = [
  {
    company: "Wipro",
    role: "Full Stack Developer",
    duration: "Sep 2022 – Present",
    responsibilities: [
      "Develop responsive, dynamic web modules using React.js, Redux, and TypeScript.",
      "Design and maintain scalable REST APIs with Java, Spring Boot, and Node.js.",
      "Integrate third-party APIs, mentor junior developers, and lead code reviews.",
      "Follow Agile methodologies to ensure timely and high-quality deliveries.",
    ],
  },
  {
    company: "Freelance Web Developer",
    role: "Frontend Specialist",
    duration: "2024 – Present",
    responsibilities: [
      "Delivered AllNeeds24 — a multi-service marketplace (React, Redux, Material UI) from concept to launch.",
      "Managed complete lifecycles for e-commerce and service-based startups.",
      "Built SEO-friendly, high-performance UIs to help clients grow and retain customers.",
    ],
  },
];

const projects = [
  {
    title: "Lloyds Banking Group",
    type: "Company Project (Wipro)",
    stack: ["MERN"],
    description:
      "An insurance policy portal that streamlines renewals, cancellations, and policy amendments.",
    contributions: [
      "Led frontend feature delivery with React, ensuring smooth integration with backend services.",
      "Improved user flows to boost retention and enhance usability.",
    ],
    image: Lloyds,
    demo: "#",
    code: "#",
  },
  {
    title: "Medicare",
    type: "Company Project (Wipro)",
    stack: ["React", "Java", "Spring"],
    description:
      "A healthcare e-commerce app offering EMI purchases, prescription uploads, and secure payments.",
    contributions: [
      "Built multi-step UI flows with React and state management tools.",
      "Integrated secure APIs for document handling and payment processing.",
    ],
    image: medicare,
    demo: "#",
    code: "#",
  },
  {
    title: "AllNeeds24",
    type: "Freelance Project",
    stack: ["React", "Redux", "Material UI"],
    description:
      "A unified multi-service platform for e-commerce, cab bookings, food delivery, and more.",
    contributions: [
      "Developed a responsive, mobile-first frontend with custom UI components.",
      "Optimized for fast loading times and strong user engagement.",
    ],
    image: allNeeds,
    demo: "#",
    code: "#",
  },
  {
    title: "Modern E-Commerce Store",
    type: "Personal Project",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
    description:
      "A complete e-commerce platform with search, cart, payment, and an admin dashboard.",
    contributions: [
      "Integrated Stripe for secure payments and implemented real-time order tracking.",
      "Created REST APIs and a user-friendly admin panel for managing orders and products.",
    ],
    image: eCommerce,
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    type: "Personal Project",
    stack: ["React", "Vite", "CSS Modules"],
    description:
      "This portfolio website, built to showcase my skills and projects with a clean, modern design.",
    contributions: [
      "Designed and developed with accessibility, performance, and mobile-first design in mind.",
      "Applied glassmorphism and gradient effects for a modern look and feel.",
    ],
    image: portfolio,
    demo: "#",
    code: "#",
  },
];

const contact = {
  email: "sarthakchaudhary26oct@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarthak-chaudhary-09b73b1b3/",
  github: "https://github.com/Sarthak26oct",
};

export { profile, about, skills, experience, projects, contact };
