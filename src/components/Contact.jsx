import { useState } from "react";
import emailjs from "@emailjs/browser";
import { socials, contactInfo } from "../constants";
import Reveal from "./Reveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_n3708ws",
        "template_3g8t271",
        {
          from_name: form.name,
          to_name: "Michell",
          from_email: form.email,
          to_email: socials.email,
          message: form.message,
        },
        "hzX7dHRJD9jfmThVw"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            text: "Thanks for reaching out — I'll get back to you as soon as possible.",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatus({
            type: "error",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <section id="contact">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact me.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed dark:text-slate-300">
            Have a project in mind, or just want to say hi? My inbox is always
            open — I'll do my best to get back to you as soon as possible.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-card">
                <h3 className="text-primary dark:text-white font-semibold">Email</h3>
                <a
                  href={`mailto:${socials.email}`}
                  className="mt-2 block text-accent font-medium hover:underline break-all"
                >
                  {socials.email}
                </a>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-card">
                <h3 className="text-primary dark:text-white font-semibold">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-accent font-medium hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-card">
                <h3 className="text-primary dark:text-white font-semibold">GitHub</h3>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-accent font-medium hover:underline break-all"
                >
                  github.com/Michellissa
                </a>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-card">
                <h3 className="text-primary dark:text-white font-semibold">Currently</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Studying automation at Kunskapsgruppen after graduating from NTI
                  Södertörn (Teknik 4).
                </p>
              </div>

              <a
                href={`${import.meta.env.BASE_URL}Michell_CV.pdf`}
                download
                className="btn-outline w-full justify-center"
              >
                Download my CV
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

          <Reveal direction="left" delay={150} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-card space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <span className="text-primary dark:text-white font-medium mb-2">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-primary dark:text-white font-medium mb-2">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-primary dark:text-white font-medium mb-2">Message</span>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="bg-bg-light border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-slate-400 resize-y"
                />
              </label>

              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {status.text}
                </p>
              )}

              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
