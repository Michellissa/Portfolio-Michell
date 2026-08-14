import { github, profile } from "../assets";
import { socials } from "../constants";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-32 w-full">
        <Reveal direction="up">
          <div className="lg:hidden flex justify-center mb-8">
            <img
              src={profile}
              alt="Michell Issa"
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </Reveal>

        <Reveal direction="up">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 text-sm text-slate-600 dark:text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for internships &amp; freelance work
          </div>
        </Reveal>

        <Reveal direction="left" delay={150}>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-primary dark:text-white leading-tight">
            Hi, I'm <span className="text-accent">Michell</span>
          </h1>
        </Reveal>

        <Reveal direction="left" delay={250}>
          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200">
            Full-Stack Developer
          </h2>
        </Reveal>

        <Reveal delay={350}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I build modern web applications with React, TypeScript and Node.js,
            and I've shipped e-commerce solutions on WordPress, Magento and
            OpenCart — plus real-time data apps powered by REST APIs. NTI
            Södertörn (Teknik 4) graduate, now studying automation.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Michell_CV.pdf`}
              download
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a2 2 0 011.4.6l2.4 2.4a2 2 0 01.6 1.4V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={550}>
          <div className="mt-10 flex items-center gap-4">
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Find me on</span>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors shadow-sm"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" className="w-5 h-5 invert" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors shadow-sm"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          </div>
        </Reveal>
        <Reveal
          delay={200}
          direction="left"
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-110" />
            <img
              src={profile}
              alt="Michell Issa"
              className="relative w-72 xl:w-80 h-72 xl:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("about");
          if (!el) return;
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
          } else {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-accent transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
