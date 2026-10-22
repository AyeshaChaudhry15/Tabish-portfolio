"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const ringOneRef = useRef<HTMLDivElement>(null);
  const ringTwoRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ringOneRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ringTwoRef.current, {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(heroVisualRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      iconRefs.current.forEach((icon, index) => {
        gsap.to(icon, {
          y: index % 2 === 0 ? -8 : 8,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addIconRef = (element: HTMLDivElement | null) => {
    if (element && !iconRefs.current.includes(element)) {
      iconRefs.current.push(element);
    }
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden border-blue-900/30 bg-[#071426] text-white">
      <section className="relative overflow-hidden border-b border-blue-900/30">
        <div className="pointer-events-none absolute left-[-10%] top-[-25%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="pointer-events-none absolute left-[40%] top-[30%] h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[620px] w-full max-w-[1500px] items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-28">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
                Contact Me
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s Build
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Something Together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Have a project in mind, need a mobile application, or want to
              discuss a digital product? I&apos;d love to hear about it.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Send a Message
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-xl font-bold text-white">24h</p>
                <p className="mt-1 text-xs text-slate-500">Response Time</p>
              </div>

              <div className="h-10 w-px bg-blue-900/50" />

              <div>
                <p className="text-xl font-bold text-white">Remote</p>
                <p className="mt-1 text-xs text-slate-500">
                  Available Worldwide
                </p>
              </div>

              <div className="h-10 w-px bg-blue-900/50" />

              <div>
                <p className="text-xl font-bold text-white">Open</p>
                <p className="mt-1 text-xs text-slate-500">For New Projects</p>
              </div>
            </div>
          </div>

          <div
            ref={heroVisualRef}
            className="relative mx-auto flex h-[470px] w-full max-w-[560px] items-center justify-center"
          >
            <div
              ref={ringOneRef}
              className="absolute h-[390px] w-[390px] rounded-full border border-blue-400/20"
            >
              <span className="absolute left-[8%] top-[15%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />

              <span className="absolute bottom-[12%] right-[12%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            </div>

            <div
              ref={ringTwoRef}
              className="absolute h-[285px] w-[285px] rounded-full border border-cyan-400/20"
            >
              <span className="absolute right-[-5px] top-[30%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

              <span className="absolute bottom-[8%] left-[18%] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
            </div>

            <div className="absolute h-[220px] w-[220px] rounded-full bg-blue-600/10 blur-[70px]" />

            <div className="relative z-10 flex h-[190px] w-[190px] items-center justify-center rounded-full border border-blue-400/40 bg-[#091426]/90 shadow-[0_0_80px_rgba(37,99,235,0.18)] backdrop-blur-xl">
              <div className="flex h-[115px] w-[115px] items-center justify-center rounded-3xl border border-blue-400/40 bg-blue-500/10 text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <FaEnvelope className="text-5xl" />
              </div>
            </div>

            <div
              ref={addIconRef}
              className="absolute left-[6%] top-[28%] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/40 bg-[#091426] text-blue-300 shadow-lg"
            >
              <FaPhoneAlt />
            </div>

            <div
              ref={addIconRef}
              className="absolute right-[7%] top-[30%] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-[#091426] text-cyan-300 shadow-lg"
            >
              <FaMapMarkerAlt />
            </div>

            <div
              ref={addIconRef}
              className="absolute bottom-[16%] left-[15%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/40 bg-[#091426] text-blue-300"
            >
              <FaLinkedinIn />
            </div>

            <div
              ref={addIconRef}
              className="absolute bottom-[12%] right-[17%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/40 bg-[#091426] text-purple-300"
            >
              <FaGithub />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="relative w-full px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-3xl border border-blue-500/20 bg-[#07101D] p-8 shadow-[0_25px_80px_rgba(0,40,120,0.1)] sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Contact Information
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-white">
              Let&apos;s Connect
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Tell me about your project, idea, or requirement. I&apos;ll get
              back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">Email</p>

                  <a className="mt-1 block text-sm text-slate-400 transition hover:text-blue-300">
                    Kiran_Fatima@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">Phone</p>

                  <a
                    href="tel:+923267100227"
                    className="mt-1 block text-sm text-slate-400 transition hover:text-blue-300"
                  >
                    +92 326 7100227
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">Location</p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Bahawalpur, Punjab
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-blue-900/30" />

            <p className="text-sm font-semibold text-white">
              Let&apos;s Connect
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://www.facebook.com/profile.php?id=61594014940399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20 hover:scale-105 duration-300"
              >
                <FaFacebookF className="text-sm" />
              </Link>

              <Link
                href="https://www.instagram.com/kiranfatima.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20  hover:scale-105 duration-300"
              >
                <FaInstagram className="text-sm" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/kiran-fatima-evermont/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20  hover:scale-105 duration-300"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-[#07101D] p-8 shadow-[0_25px_80px_rgba(0,40,120,0.1)] sm:p-10">
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                Send Me A Message
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Have a Project in Mind?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Fill out the form below and share a few details about what
                you&apos;re looking to build.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl border bg-[#050B15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-blue-900/50 focus:border-blue-400"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-[#050B15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-blue-900/50 focus:border-blue-400"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={`w-full rounded-xl border bg-[#050B15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 ${
                    errors.subject
                      ? "border-red-500/60 focus:border-red-400"
                      : "border-blue-900/50 focus:border-blue-400"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={7}
                  className={`w-full resize-none rounded-xl border bg-[#050B15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 ${
                    errors.message
                      ? "border-red-500/60 focus:border-red-400"
                      : "border-blue-900/50 focus:border-blue-400"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Send Message
                <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {submitted && (
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-400">
                  <FaCheck />
                  Message validated successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
