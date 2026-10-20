import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050914] text-white">

      <section className="relative overflow-hidden border-b border-blue-900/30">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute inset-0 bg-gradient-to-br from-[#071226] via-[#050914] to-[#061522]" />

          <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[160px]" />

          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

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

            <div>

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-400">
                  My Work
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[50px]">
                Projects That  Drive 

                <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                 Impact.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Explore a selection of digital products, business websites,
                SaaS platforms, and web experiences I&apos;ve built for
                businesses and startups.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.25)] transition hover:bg-blue-400"
                >
                  Explore Projects
                  <span>→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-blue-400/30 bg-blue-500/5 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  Let&apos;s Work Together
                  <span>↗</span>
                </Link>

              </div>

              <div className="mt-12 flex flex-wrap gap-0">

                <div className="pr-8">
                  <p className="text-2xl font-bold text-white">
                    20<span className="text-blue-400">+</span>
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Projects
                  </p>
                </div>

                <div className="border-l border-blue-900/50 px-8">
                  <p className="text-2xl font-bold text-white">
                    100<span className="text-blue-400">%</span>
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Client Focus
                  </p>
                </div>

                <div className="border-l border-blue-900/50 px-8">
                  <p className="text-2xl font-bold text-white">
                    Modern
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Tech Stack
                  </p>
                </div>

              </div>

            </div>

            <div className="relative mx-auto h-[430px] w-full max-w-[550px]">

              <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

              <div className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] overflow-hidden rounded-2xl border border-blue-400/25 bg-[#091426] shadow-[0_30px_100px_rgba(0,40,120,0.35)]">

                <div className="flex h-10 items-center gap-2 border-b border-blue-900/40 bg-[#0B1729] px-4">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                  <div className="ml-3 flex-1 rounded-md border border-blue-900/40 bg-[#07101e] px-3 py-1 text-[8px] text-slate-600">
                    portfolio.dev/projects
                  </div>

                </div>

                <div className="grid grid-cols-[1.15fr_0.85fr] gap-4 p-5">

                  <div className="rounded-xl border border-blue-500/20 bg-[#07101e] p-5">

                    <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-blue-400">
                      Web Development
                    </p>

                    <h3 className="mt-4 max-w-[230px] text-2xl font-semibold leading-tight text-white">
                      Building digital
                      <span className="block text-blue-300">
                        experiences.
                      </span>
                    </h3>

                    <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-blue-950">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2">

                      <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                        <p className="text-sm font-bold text-white">
                          72%
                        </p>

                        <p className="mt-1 text-[7px] text-slate-500">
                          Performance
                        </p>
                      </div>

                      <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                        <p className="text-sm font-bold text-white">
                          88%
                        </p>

                        <p className="mt-1 text-[7px] text-slate-500">
                          UX
                        </p>
                      </div>

                      <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                        <p className="text-sm font-bold text-white">
                          64%
                        </p>

                        <p className="mt-1 text-[7px] text-slate-500">
                          Growth
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="space-y-3">

                    <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                      <p className="text-[7px] text-slate-500">
                        01
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        React
                      </p>
                    </div>

                    <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                      <p className="text-[7px] text-slate-500">
                        02
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        Next.js
                      </p>
                    </div>

                    <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                      <p className="text-[7px] text-slate-500">
                        03
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        TypeScript
                      </p>
                    </div>

                    <div className="rounded-lg border border-blue-900/40 bg-blue-500/5 p-3">
                      <p className="text-[7px] text-slate-500">
                        04
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        Tailwind
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              <div className="absolute right-[5%] top-[3%] rounded-xl border border-blue-400/30 bg-[#0A1729]/90 px-4 py-2 shadow-[0_10px_40px_rgba(37,99,235,0.2)] backdrop-blur-xl">

                <p className="text-[8px] font-bold uppercase tracking-wider text-blue-400">
                  Featured
                </p>

                <p className="mt-1 text-xs font-semibold text-white">
                  Digital Products
                </p>

              </div>

              <div className="absolute bottom-[3%] left-[3%] rounded-xl border border-cyan-400/25 bg-[#091729]/90 px-4 py-2 shadow-[0_10px_40px_rgba(34,211,238,0.15)] backdrop-blur-xl">

                <p className="text-[8px] uppercase tracking-wider text-slate-500">
                  Stack
                </p>

                <p className="mt-1 text-xs font-semibold text-cyan-300">
                  Modern & Scalable
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      <section
        id="projects"
        className="w-full px-6 pb-24 pt-20 sm:px-10 lg:px-14"
      >

        <div className="w-full">

          <div className="mb-10 flex items-end justify-between gap-6">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
                Featured Work
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Some Projects that I&apos;ve Built
              </h2>
            </div>

            <p className="hidden text-xs text-slate-600 sm:block">
              {projects.length}+ Projects
            </p>

          </div>

          <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}