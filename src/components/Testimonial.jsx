import { testimonials } from "../constants";
import Reveal from "./Reveal";

const Testimonial = () => {
  const testimonial = testimonials[0];

  return (
    <section id="testimonial" className="bg-white border-y border-slate-100">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Recommendation</p>
          <h2 className="section-title">What others say.</h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl p-8 sm:p-10 border border-slate-100 relative">
            <svg
              className="w-10 h-10 text-accent/30 absolute top-6 left-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="mt-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              {testimonial.testimonial}
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-card"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
              <div>
                <p className="text-primary font-semibold">{testimonial.name}</p>
                <p className="text-sm text-slate-500">
                  {testimonial.designation} · {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonial;
