# Michell Issa — Portfolio

A clean, modern and lightweight personal portfolio built with **React**, **Vite** and **Tailwind CSS**.

![Portfolio](src/assets/projects/flowtime.svg)

## Features

- ⚡ **Fast & lightweight** — no 3D assets, tiny JS bundle (~65 KB gzipped)
- 🎨 **Clean, professional design** — light theme with indigo accents
- 🖱️ **Buttery smooth scrolling** — powered by [Lenis](https://github.com/darkroomengineering/lenis)
- ✨ **Slide-in reveal animations** on scroll
- 📱 **Fully responsive** — mobile menu, adaptive grids
- 📄 **CV download** — PDF available in the hero and contact sections
- 📬 **Working contact form** — powered by EmailJS
- 🌍 **English content**

## Sections

| Section      | Description                                  |
| ------------ | -------------------------------------------- |
| Hero         | Intro, CTAs and social links                 |
| About        | Bio + languages                              |
| Skills       | Tech stack grid                              |
| Experience   | Work history and education timeline          |
| Projects     | Featured projects with source links          |
| Testimonial  | Recommendation from a supervisor             |
| Contact      | EmailJS form + direct contact info           |

## Tech Stack

- **React 18** — UI
- **Vite 5** — build tooling
- **Tailwind CSS 3** — styling
- **Lenis** — smooth scrolling
- **EmailJS** — contact form
- **gh-pages** — deployment

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Create a production build
npm run build

# Preview the production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
├── public/
│   ├── Michell_CV.pdf      # Downloadable CV
│   └── logo.svg
└── src/
    ├── assets/             # Icons, screenshots, project images
    ├── components/         # Navbar, Hero, About, Skills, Experience, Projects, Contact...
    ├── constants/index.js  # All content (projects, experience, skills, socials)
    ├── hooks/              # useInView, useLenis
    └── index.css           # Tailwind + custom styles
```

## Customizing Content

All site content lives in [`src/constants/index.js`](src/constants/index.js) — edit that single file to update projects, experience, skills, contact info and more.

## Deployment

The site is deployed to GitHub Pages:

```bash
npm run deploy
```

The `vite.config.js` sets `base: "/Portfolio-Michell/"`, so it works on `https://michellissa.github.io/Portfolio-Michell/`.
