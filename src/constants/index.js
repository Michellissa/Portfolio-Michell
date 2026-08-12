import {
  mobile,
  backend,
  web,
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  redux,
  mongodb,
  docker,
  figma,
  nti,
  praktik,
  kod,
  NET,
  car,
  nice,
  lager,
  cafeteria,
  eeg,
  liquid,
  flowtime,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: python,
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: ".NET / C#", icon: NET },
  { name: "REST APIs", initials: "R", color: "bg-blue-100 text-blue-700" },
  { name: "Bash", initials: "B", color: "bg-slate-200 text-slate-800" },
  { name: "Linux", initials: "L", color: "bg-amber-100 text-amber-700" },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
  { name: "WordPress", initials: "W", color: "bg-sky-100 text-sky-700" },
  { name: "Magento", initials: "M", color: "bg-orange-100 text-orange-700" },
  { name: "OpenCart", initials: "O", color: "bg-lime-100 text-lime-700" },
];

export const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Frisörgrossen",
    icon: praktik,
    date: "Jan 2024 - Jan 2025",
    points: [
      "Developed internal web applications using React, TypeScript and Python.",
      "Designed REST APIs for database handling and automation.",
      "Improved the user experience and performance of the company's internal systems.",
    ],
  },
  {
    title: "Systems Developer",
    company_name: "Queen Nut & Sweet",
    icon: kod,
    date: "Jan 2022 - Dec 2022",
    points: [
      "Created a digital inventory system for a retail environment.",
      "Automated the inventory flow and streamlined logistics handling.",
      "Handled payments and financial transactions.",
      "Efficiently executed assigned development tasks.",
    ],
  },
  {
    title: "High School - Data & Communication",
    company_name: "NTI Södertörn",
    icon: nti,
    date: "Aug 2022 - Jun 2025",
    points: [
      "Electrical & Energy programme with a focus on Data and Communications.",
      "Gained foundational knowledge in networking, systems and computer hardware.",
      "Learned the basics of programming and technical problem solving.",
    ],
  },
  {
    title: "Upper Secondary Engineer (Teknik 4)",
    company_name: "NTI Södertörn",
    icon: nti,
    date: "Aug 2025 - Jun 2026",
    points: [
      "Completed a one-year specialization in software development (Gymnasieingenjör).",
      "Focus on advanced programming, systems development and project management.",
    ],
  },
  {
    title: "Automation Studies",
    company_name: "Kunskapsgruppen",
    icon: kod,
    date: "2026 - Present",
    points: [
      "Currently studying automation to deepen my technical skills.",
      "Building on my software development background with industrial automation.",
    ],
  },
];

export const languages = [
  { name: "Swedish", level: "Native" },
  { name: "English", level: "Advanced (C1)" },
  { name: "Arabic", level: "Intermediate" },
];

export const contactInfo = {
  email: "michellissa5@gmail.com",
  phone: "+46 73 425 76 43",
  github: "https://github.com/Michellissa",
};

export const testimonials = [
  {
    testimonial:
      "During his internship with us, Michell showed great commitment and technical skill in web development. He updated and improved our website with modern techniques such as HTML, CSS and JavaScript. Michell also showed a strong ability to analyze user flows and suggest improvements that increased user-friendliness. He was punctual, responsible and worked independently to deliver results according to our needs and timeframes. We are very pleased with his contribution.",
    name: "Lemar Hanna",
    designation: "Supervisor",
    company: "Frisörgrossen",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQH5DkIG5J9Fiw/profile-framedphoto-shrink_800_800/B4DZfwfzmVGsAo-/0/1752086559505?e=1754773200&v=beta&t=H9G7MIETFo3464hxYz-1XpHTw6BIlGSgzR_-yNURoMw",
  },
];

export const projects = [
  {
    name: "Car Rent",
    description:
      "An interactive website with a landing page and contact form for car rental inquiries. Responsive design, clean layout and smooth animations - showcasing modern web development skills.",
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-emerald-500" },
      { name: "JavaScript", color: "text-pink-500" },
    ],
    image: car,
    source_code_link: "https://github.com/Michellissa/bil-hemsida",
  },
  {
    name: "Image Gallery",
    description:
      "An image gallery website built with HTML, CSS and JavaScript. Clean design, animated text and interactive features like scroll effects and a scroll-to-top button. Fully responsive and user-friendly.",
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-emerald-500" },
      { name: "JavaScript", color: "text-pink-500" },
    ],
    image: nice,
    source_code_link: "https://github.com/Michellissa/portfolio-prototyp",
  },
  {
    name: "Inventory System",
    description:
      "An inventory management system built with HTML, CSS and JavaScript. Users can search, add and view products, with data loaded from a JSON file and displayed in a table. Includes two interactive Chart.js diagrams for stock and sales.",
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-emerald-500" },
      { name: "JavaScript", color: "text-pink-500" },
      { name: "Chart.js", color: "text-purple-500" },
    ],
    image: lager,
    source_code_link: "https://github.com/Michellissa/Michells-lager",
  },
  {
    name: "Flowtime",
    description:
      "A full-stack task and schedule management app built with TypeScript. Features user authentication, task tracking and scheduling with a REST API backend and a React frontend.",
    tags: [
      { name: "TypeScript", color: "text-blue-500" },
      { name: "React", color: "text-cyan-500" },
      { name: "Node.js", color: "text-emerald-500" },
      { name: "REST API", color: "text-purple-500" },
    ],
    image: flowtime,
    source_code_link: "https://github.com/Michellissa/Flowtime",
  },
  {
    name: "NTI Cafeteria",
    description:
      "A cafeteria web app built with React and Vite, featuring a menu display and an admin dashboard for managing products and orders.",
    tags: [
      { name: "React", color: "text-cyan-500" },
      { name: "Vite", color: "text-violet-500" },
      { name: "JavaScript", color: "text-pink-500" },
    ],
    image: cafeteria,
    source_code_link: "https://github.com/Michellissa/NTI-Cafeteria",
  },
  {
    name: "Mind Monitor EEG",
    description:
      "A Python application that streams live EEG data from a Muse headband via the OSC protocol and visualizes brainwaves in real time.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "OSC", color: "text-emerald-500" },
      { name: "Data Viz", color: "text-pink-500" },
    ],
    image: eeg,
    source_code_link: "https://github.com/Michellissa/pythonmindmonitor",
  },
  {
    name: "Liquid Project",
    description:
      "A Next.js website for a headlight renovation business, showcasing before-and-after photos of headlight restoration and polishing services.",
    tags: [
      { name: "Next.js", color: "text-slate-700" },
      { name: "React", color: "text-cyan-500" },
      { name: "Tailwind", color: "text-teal-500" },
    ],
    image: liquid,
    source_code_link: "https://github.com/Michellissa/Liquidproject",
  },
];

export const socials = {
  github: "https://github.com/Michellissa",
  email: "michellissa5@gmail.com",
};
