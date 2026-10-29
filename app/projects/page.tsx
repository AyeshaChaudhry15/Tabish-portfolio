
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071630] text-white">
      <section className="relative overflow-hidden border-b border-[#24416B]/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3A] via-[#071630] to-[#0A1B3A]" />

          <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#3182FF]/15 blur-[160px]" />

          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#60A5FA]/10 blur-[160px]" />

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3182FF]/5 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1350px] px-6 pb-24 pt-28 sm:px-10 lg:px-14 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#3182FF]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#60A5FA]">
                  My Work
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[50px]"
              >
                Projects That Drive
                <span className="block bg-gradient-to-r from-[#3182FF] via-[#60A5FA] to-white bg-clip-text text-transparent">
                  Impact.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-7 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg"
              >
                Explore a selection of digital products, business websites, SaaS
                platforms, and web experiences I&apos;ve built for businesses
                and startups.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                >
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#3182FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(49,130,255,0.25)] transition hover:bg-[#2563EB]"
                  >
                    Explore Projects
                    <span>→</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-xl border border-[#3182FF]/40 bg-[#0A1B3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#60A5FA] hover:bg-[#102951] hover:shadow-[0_10px_30px_rgba(49,130,255,0.12)]"
                  >
                    Let&apos;s Work Together
                    <span>↗</span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.45,
                    },
                  },
                }}
                className="mt-12 flex flex-wrap gap-0"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="pr-8"
                >
                  <p className="text-2xl font-bold text-white">
                    20<span className="text-[#60A5FA]">+</span>
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-blue-100/55">
                    Projects
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-l border-[#24416B] px-8"
                >
                  <p className="text-2xl font-bold text-white">
                    100<span className="text-[#60A5FA]">%</span>
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-blue-100/55">
                    Client Focus
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-l border-[#24416B] px-8"
                >
                  <p className="text-2xl font-bold text-white">Modern</p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-blue-100/55">
                    Tech Stack
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto h-[430px] w-full max-w-[550px]"
            >
              <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3182FF]/15 blur-[100px]" />

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] overflow-hidden rounded-2xl border border-[#D8E5F7] bg-white shadow-[0_30px_100px_rgba(0,40,120,0.25)]"
              >
                <div className="flex h-10 items-center gap-2 border-b border-[#E2EAF7] bg-[#F5F8FF] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                  <div className="ml-3 flex-1 rounded-md border border-[#D8E5F7] bg-white px-3 py-1 text-[8px] text-slate-500">
                    portfolio.dev/projects
                  </div>
                </div>

                <div className="grid grid-cols-[1.15fr_0.85fr] gap-4 p-5">
                  <div className="rounded-xl border border-[#D8E5F7] bg-[#F5F8FF] p-5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#3182FF]">
                      Web Development
                    </p>

                    <h3 className="mt-4 max-w-[230px] text-2xl font-semibold leading-tight text-[#102951]">
                      Building digital
                      <span className="block text-[#3182FF]">experiences.</span>
                    </h3>

                    <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-blue-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#3182FF] to-[#60A5FA]"
                      />
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="rounded-lg border border-[#D8E5F7] bg-white p-3">
                        <p className="text-sm font-bold text-[#102951]">72%</p>

                        <p className="mt-1 text-[7px] text-slate-500">
                          Performance
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#D8E5F7] bg-white p-3">
                        <p className="text-sm font-bold text-[#102951]">88%</p>

                        <p className="mt-1 text-[7px] text-slate-500">UX</p>
                      </div>

                      <div className="rounded-lg border border-[#D8E5F7] bg-white p-3">
                        <p className="text-sm font-bold text-[#102951]">64%</p>

                        <p className="mt-1 text-[7px] text-slate-500">Growth</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind",
                    ].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.65 + index * 0.12,
                        }}
                        className="rounded-lg border border-[#D8E5F7] bg-white p-3"
                      >
                        <p className="text-[7px] text-slate-500">
                          0{index + 1}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-[#102951]">
                          {tech}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[5%] top-[3%] rounded-xl border border-[#D8E5F7] bg-white px-4 py-2 shadow-[0_10px_40px_rgba(49,130,255,0.15)]"
              >
                <p className="text-[8px] font-bold uppercase tracking-wider text-[#3182FF]">
                  Featured
                </p>

                <p className="mt-1 text-xs font-semibold text-[#102951]">
                  Digital Products
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3%] left-[3%] rounded-xl border border-[#D8E5F7] bg-white px-4 py-2 shadow-[0_10px_40px_rgba(49,130,255,0.12)]"
              >
                <p className="text-[8px] uppercase tracking-wider text-slate-500">
                  Stack
                </p>

                <p className="mt-1 text-xs font-semibold text-[#3182FF]">
                  Modern & Scalable
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="w-full bg-[#071630] px-6 pb-24 pt-20 sm:px-10 lg:px-14"
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-end justify-between gap-6"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
                Featured Work
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white">
                Some Projects that I&apos;ve Built
              </h2>
            </div>

            <p className="hidden text-xs text-blue-100/55 sm:block">
              {projects.length}+ Projects
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
