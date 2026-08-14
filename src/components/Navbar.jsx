import { useState } from "react";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setToggle(false);
    scrollToId(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <img
            src={logo}
            alt="Michell logo"
            className="h-9 w-auto"
          />
          <span className="text-primary font-bold text-lg">
            Michell<span className="text-accent">.dev</span>
          </span>
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-slate-500 hover:text-accent font-medium transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
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
            className={`bg-primary h-0.5 w-6 rounded transition-transform ${
              toggle ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`bg-primary h-0.5 w-6 rounded transition-opacity ${
              toggle ? "opacity-0" : ""
            }`}
          />
          <span
            className={`bg-primary h-0.5 w-6 rounded transition-transform ${
              toggle ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {toggle && (
        <div className="sm:hidden bg-white border-t border-slate-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-slate-600 hover:text-accent font-medium block"
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
