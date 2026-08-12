import { services, languages } from "../constants";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="bg-white border-y border-slate-100">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Introduction</p>
          <h2 className="section-title">About me.</h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            I'm a passionate developer with strong skills in Python, JavaScript and
            frameworks like React. I enjoy creating interactive, user-friendly
            experiences and solving real-world problems with code. Whether it's
            frontend design or dynamic interfaces, I aim to build modern and
            efficient solutions. Let's bring your ideas to life together!
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-sm font-semibold text-primary">Languages:</span>
            {languages.map((lang) => (
              <span key={lang.name} className="text-sm text-slate-600">
                <span className="font-medium text-slate-800">{lang.name}</span>
                <span className="text-slate-400"> · </span>
                {lang.level}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 120} direction="up">
              <div className="group bg-bg-light border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center hover:border-accent/40 hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="mt-5 text-primary font-semibold">{service.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
