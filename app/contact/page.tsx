"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
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
    <main className="min-h-screen overflow-hidden bg-[#071630] text-white">
      <section className="relative overflow-hidden bg-[#071630]">
        <div className="pointer-events-none absolute left-[-10%] top-[-25%] h-[500px] w-[500px] rounded-full bg-[#3182FF]/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[450px] w-[450px] rounded-full bg-[#60A5FA]/10 blur-[150px]" />

        <div className="pointer-events-none absolute left-[40%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#3182FF]/5 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[620px] w-full max-w-[1500px] items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3182FF]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
                Contact Me
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Build
              <span className="block bg-gradient-to-r from-[#60A5FA] via-[#3182FF] to-white bg-clip-text text-transparent">
                Something Together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Have a project in mind, need a mobile application, or want to
              discuss a digital product? I&apos;d love to hear about it.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#3182FF] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#60A5FA]"
              >
                Send a Message
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-xl font-bold text-white">24h</p>
                <p className="mt-1 text-xs text-slate-300">Response Time</p>
              </div>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <p className="text-xl font-bold text-white">Remote</p>
                <p className="mt-1 text-xs text-slate-300">
                  Available Worldwide
                </p>
              </div>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <p className="text-xl font-bold text-white">Open</p>
                <p className="mt-1 text-xs text-slate-300">For New Projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div
              ref={heroVisualRef}
              className="relative mx-auto flex h-[470px] w-full max-w-[560px] items-center justify-center"
            >
              <div
                ref={ringOneRef}
                className="absolute h-[390px] w-[390px] rounded-full border border-[#3182FF]/30"
              >
                <span className="absolute left-[8%] top-[15%] h-3 w-3 rounded-full bg-[#3182FF] shadow-[0_0_20px_rgba(49,130,255,0.9)]" />

                <span className="absolute bottom-[12%] right-[12%] h-2.5 w-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
              </div>

              <div
                ref={ringTwoRef}
                className="absolute h-[285px] w-[285px] rounded-full border border-[#60A5FA]/25"
              >
                <span className="absolute right-[-5px] top-[30%] h-2.5 w-2.5 rounded-full bg-[#3182FF] shadow-[0_0_18px_rgba(49,130,255,0.9)]" />

                <span className="absolute bottom-[8%] left-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.5)]" />
              </div>

              <div className="absolute h-[220px] w-[220px] rounded-full bg-[#3182FF]/10 blur-[70px]" />

              <div className="relative z-10 flex h-[190px] w-[190px] items-center justify-center rounded-full bg-white shadow-[0_0_80px_rgba(49,130,255,0.18)]">
                <div className="flex h-[115px] w-[115px] items-center justify-center rounded-3xl bg-[#3182FF]/10 text-[#3182FF]">
                  <FaEnvelope className="text-5xl" />
                </div>
              </div>

              <div
                ref={addIconRef}
                className="absolute left-[6%] top-[28%] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#3182FF] shadow-lg"
              >
                <FaPhoneAlt />
              </div>

              <div
                ref={addIconRef}
                className="absolute right-[7%] top-[30%] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#3182FF] shadow-lg"
              >
                <FaMapMarkerAlt />
              </div>

              <div
                ref={addIconRef}
                className="absolute bottom-[16%] left-[15%] z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3182FF]"
              >
                <FaLinkedinIn />
              </div>

              <div
                ref={addIconRef}
                className="absolute bottom-[12%] right-[17%] z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#071630]"
              >
                <FaGithub />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="contact-form"
        className="relative w-full bg-[#071630] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#3182FF]/5 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            className="rounded-3xl bg-white p-8 shadow-[0_25px_80px_rgba(0,40,120,0.1)] sm:p-10"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3182FF]">
              Contact Information
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-[#071630]">
              Let&apos;s Connect
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Tell me about your project, idea, or requirement. I&apos;ll get
              back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3182FF]/10 text-[#3182FF]">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#071630]">Email</p>

                  <a className="mt-1 block text-sm text-slate-600 transition hover:text-[#3182FF]">
                    info.tabishtech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3182FF]/10 text-[#3182FF]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#071630]">Phone</p>

                  <a
                    href="tel:+923267100227"
                    className="mt-1 block text-sm text-slate-600 transition hover:text-[#3182FF]"
                  >
                    +92 3436943543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3182FF]/10 text-[#3182FF]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#071630]">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Bahawalpur, Punjab
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-[#071630]/10" />

            <p className="text-sm font-semibold text-[#071630]">
              Let&apos;s Connect
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://www.facebook.com/share/1DjZiuCkU8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3182FF]/10 text-[#3182FF] transition duration-300 hover:scale-105 hover:bg-[#3182FF] hover:text-white"
              >
                <FaFacebookF className="text-sm" />
              </Link>

              <Link
                href="https://www.instagram.com/evermontdeveloper?exln=bjl0NmtiZjl3eDh4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3182FF]/10 text-[#3182FF] transition duration-300 hover:scale-105 hover:bg-[#3182FF] hover:text-white"
              >
                <FaInstagram className="text-sm" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/muhammad-tabish-nadeem-529007322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3182FF]/10 text-[#3182FF] transition duration-300 hover:scale-105 hover:bg-[#3182FF] hover:text-white"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white p-8 shadow-[0_25px_80px_rgba(0,40,120,0.1)] sm:p-10"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3182FF]">
                Send Me A Message
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#071630]">
                Have a Project in Mind?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fill out the form below and share a few details about what
                you&apos;re looking to build.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-[#071630]"
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
                    className={`w-full rounded-xl border bg-[#F5F8FF] px-4 py-3.5 text-sm text-[#071630] outline-none transition placeholder:text-slate-400 ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-[#071630]/10 focus:border-[#3182FF]"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[#071630]"
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
                    className={`w-full rounded-xl border bg-[#F5F8FF] px-4 py-3.5 text-sm text-[#071630] outline-none transition placeholder:text-slate-400 ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-[#071630]/10 focus:border-[#3182FF]"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold text-[#071630]"
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
                  className={`w-full rounded-xl border bg-[#F5F8FF] px-4 py-3.5 text-sm text-[#071630] outline-none transition placeholder:text-slate-400 ${
                    errors.subject
                      ? "border-red-500/60 focus:border-red-400"
                      : "border-[#071630]/10 focus:border-[#3182FF]"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-[#071630]"
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
                  className={`w-full resize-none rounded-xl border bg-[#F5F8FF] px-4 py-3.5 text-sm text-[#071630] outline-none transition placeholder:text-slate-400 ${
                    errors.message
                      ? "border-red-500/60 focus:border-red-400"
                      : "border-[#071630]/10 focus:border-[#3182FF]"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#3182FF] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#246BE0]"
              >
                Send Message
                <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {submitted && (
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  <FaCheck />
                  Message validated successfully.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
