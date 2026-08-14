import { github } from "../assets";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-slate-400">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold text-lg">
            Michell<span className="text-accent-light">.dev</span>
          </p>
          <p className="mt-1 text-sm">Web Developer &amp; Full-Stack Enthusiast</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
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
