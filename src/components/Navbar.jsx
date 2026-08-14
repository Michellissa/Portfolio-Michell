import { useState } from "react";
import { navLinks } from "../constants";
import useTheme from "../hooks/useTheme";

const NAV_OFFSET = 80;

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -NAV_OFFSET, duration: 1.4 });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setToggle(false);
    scrollToId(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <span className="w-9 h-9 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-lg">
            M
          </span>
          <span className="text-primary dark:text-white font-bold text-lg">
            Michell<span className="text-accent">.dev</span>
          </span>
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-slate-500 dark:text-slate-400 hover:text-accent font-medium transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.4 6.4l-.7-.7M6.3 6.3l-.7-.7m12.8 0l-.7.7M6.3 17.7l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.4 14.5A8.5 8.5 0 019.5 3.6a7 7 0 1010.9 10.9z" />
                </svg>
              )}
            </button>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="btn-primary !py-2 !px-5">
              Hire me
            </a>
          </li>
        </ul>

        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle menu"
        >
          <span
            className={`bg-primary dark:bg-white h-0.5 w-6 rounded transition-transform ${
              toggle ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`bg-primary dark:bg-white h-0.5 w-6 rounded transition-opacity ${
              toggle ? "opacity-0" : ""
            }`}
          />
          <span
            className={`bg-primary dark:bg-white h-0.5 w-6 rounded transition-transform ${
              toggle ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {toggle && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-accent font-medium block"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
