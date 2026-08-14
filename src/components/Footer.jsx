import { github } from "../assets";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-primary dark:text-white font-semibold text-lg">
            Michell<span className="text-accent">.dev</span>
          </p>
          <p className="mt-1 text-sm">Full-Stack Developer</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-slate-100 dark:bg-white/10 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" className="w-5 h-5 invert dark:invert-0" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-slate-100 dark:bg-white/10 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="w-10 h-10 bg-slate-100 dark:bg-white/10 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent hover:text-white transition-colors"
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

        <p className="text-sm">
          © {new Date().getFullYear()} Michell. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
