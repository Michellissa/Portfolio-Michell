import { projects } from "../constants";
import { github } from "../assets";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured projects.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            A selection of projects I've built while learning and growing as a
            developer. Each one taught me something new about building for the web.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 120} direction="up">
              <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center shadow-md hover:bg-accent transition-colors"
                    aria-label={`${project.name} source code`}
                  >
                    <img src={github} alt="GitHub" className="w-5 h-5 invert" />
                  </a>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-primary font-bold text-lg">{project.name}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className={`text-xs font-semibold ${tag.color} bg-slate-50 border border-slate-100 rounded-full px-3 py-1`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                    >
                      View live demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
