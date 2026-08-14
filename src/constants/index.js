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
  mongodb,
  git,
  figma,
  nti,
  praktik,
  kod,
  NET,
  logo,
  car,
  nice,
  lager,
  eeg,
  liquid,
  flowtime,
  infosite,
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
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: ".NET / C#", icon: NET },
  { name: "REST APIs", initials: "R", color: "bg-blue-100 text-blue-700" },
  { name: "Bash", initials: "B", color: "bg-slate-200 text-slate-800" },
  { name: "Linux", initials: "L", color: "bg-amber-100 text-amber-700" },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "WordPress", initials: "W", color: "bg-sky-100 text-sky-700" },
  { name: "Magento", initials: "M", color: "bg-orange-100 text-orange-700" },
  { name: "OpenCart", initials: "O", color: "bg-lime-100 text-lime-700" },
];

export const experiences = [
  {
    title: "Systems Developer",
    company_name: "Queen Nut & Sweet",
    icon: kod,
    date: "Jan 2022 - Dec 2022",
    points: [
      "Created a digital inventory system for a retail environment.",
      "Automated the inventory flow and streamlined logistics handling.",
      "Handled payments and financial transactions.",
      "Managed product data with JSON-based storage and interactive chart views.",
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
    title: "Developer Intern",
    company_name: "Ekofusion",
    icon: logo,
    date: "Jan 2026 - May 2026",
    points: [
      "Worked with WordPress, Magento and OpenCart for e-commerce and web solutions.",
      "Automated processes with robot-based automation.",
      "Built a real-time info site (bus/train arrivals, school lunch, sick teachers) using React and REST APIs.",
      "Developed the Mind Monitor EEG project in Python.",
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
  linkedin: "https://www.linkedin.com/in/michell-issa-9884322ba/",
};

export const testimonials = [
  {
    testimonial:
      "During his internship with us, Michell showed great commitment and technical skill in web development. He updated and improved our website with modern techniques such as HTML, CSS and JavaScript. Michell also showed a strong ability to analyze user flows and suggest improvements that increased user-friendliness. He was punctual, responsible and worked independently to deliver results according to our needs and timeframes. We are very pleased with his contribution.",
    name: "Lemar Hanna",
    designation: "Supervisor",
    company: "Frisörgrossen",
  },
];

export const projects = [
  {
    name: "Flowtime",
    description:
      "Full-stack task and schedule management app. TypeScript frontend with user authentication (JWT), task tracking and scheduling, backed by an Express + MongoDB (Mongoose) REST API.",
    tags: [
      { name: "TypeScript", color: "text-blue-500" },
      { name: "React", color: "text-cyan-500" },
      { name: "Node.js", color: "text-emerald-500" },
      { name: "Express", color: "text-amber-500" },
      { name: "MongoDB", color: "text-green-600" },
      { name: "REST API", color: "text-purple-500" },
    ],
    image: flowtime,
    source_code_link: "https://github.com/Michellissa/Flowtime",
    live_link: "https://Michellissa.github.io/Flowtime/",
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
    image: nti,
    source_code_link: "https://github.com/Michellissa/NTI-Cafeteria",
    live_link: "https://Michellissa.github.io/NTI-Cafeteria/",
  },
  {
    name: "School Info Board",
    description:
      "An internal real-time info site built during my Ekofusion internship: live bus and train arrivals, today's school lunch and sick-teacher notifications for the whole school — powered by React and REST APIs.",
    tags: [
      { name: "React", color: "text-cyan-500" },
      { name: "REST API", color: "text-purple-500" },
      { name: "JavaScript", color: "text-pink-500" },
      { name: "Internship", color: "text-slate-500" },
    ],
    image: infosite,
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
  {
    name: "Car Rent",
    description:
      "One of my earlier projects — a responsive car rental landing page with a contact form, built with vanilla HTML, CSS and JavaScript. It shows the foundations I built on: clean layout, smooth animations and mobile-friendly design.",
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
      "An early project focused on interactivity — an image gallery with scroll effects, animated text and a scroll-to-top button, built with HTML, CSS and JavaScript. A stepping stone toward the interactive interfaces I build today.",
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
      "An early take on data-driven interfaces — a product management app with searchable tables, JSON data loading and interactive Chart.js diagrams for stock and sales, built with vanilla JavaScript.",
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-emerald-500" },
      { name: "JavaScript", color: "text-pink-500" },
      { name: "Chart.js", color: "text-purple-500" },
    ],
    image: lager,
    source_code_link: "https://github.com/Michellissa/Michells-lager",
  },
];

export const socials = {
  github: "https://github.com/Michellissa",
  linkedin: "https://www.linkedin.com/in/michell-issa-9884322ba/",
  email: "michellissa5@gmail.com",
};
