import { experiences } from "../constants";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <section id="experience" className="bg-white border-y border-slate-100">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Career</p>
          <h2 className="section-title">My experience.</h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-4 xs:left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.title} delay={i * 100} direction="left">
                <div className="relative pl-14 xs:pl-20">
                  <div className="absolute left-0 top-0 w-8 h-8 xs:w-12 xs:h-12 rounded-xl bg-white border border-slate-200 shadow-card flex items-center justify-center p-2">
                    <img src={exp.icon} alt={exp.company_name} className="w-full h-full object-contain" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-primary font-semibold text-lg">{exp.title}</h3>
                      <span className="text-sm text-accent font-medium">{exp.company_name}</span>
                    </div>
                    <span className="inline-block mt-1 text-sm text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                      {exp.date}
                    </span>
                    <ul className="mt-3 space-y-2 text-slate-600 leading-relaxed">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-accent mt-1.5 text-xs">&#9679;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
