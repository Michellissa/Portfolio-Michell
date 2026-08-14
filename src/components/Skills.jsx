import { technologies } from "../constants";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Skills &amp; technologies.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={(i % 7) * 80} direction="up">
              <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-accent/40 hover:shadow-card transition-all duration-300">
                {tech.icon ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300 ${tech.color}`}
                  >
                    {tech.initials}
                  </span>
                )}
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
