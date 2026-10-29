import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

const categories = [
  {
    title: "Mobile App Development",
    description:
      "Building production-ready cross-platform applications with Flutter, Dart, Firebase, APIs, and modern mobile architecture.",
    icon: FaMobileAlt,
    technologies: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive interfaces with modern frontend technologies and component-based architecture.",
    icon: FaCode,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML"],
  },
  {
    title: "Database Management",
    description:
      "Working with structured and cloud databases for reliable data storage, synchronization, and application performance.",
    icon: FaDatabase,
    technologies: ["Firebase", "Firestore", "SQL", "Cloud Database"],
  },
  {
    title: "APIs & Integration",
    description:
      "Connecting applications with REST APIs, third-party services, authentication systems, and cloud platforms.",
    icon: FaCloud,
    technologies: ["REST APIs", "JSON", "Firebase", "Authentication"],
  },
];

export default function SkillCategories() {
  return (
    <section
      id="technical-skills"
      className="relative w-full overflow-hidden bg-[#071630] px-6 py-24 sm:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#3182FF]/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#60A5FA]/10 blur-[160px]" />

      <div className="relative z-10 w-full">
        <div className="mb-12 w-full">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
            Technical Expertise
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            My technical skill set covers mobile development, frontend
            engineering, backend services, databases, and application
            integrations.
          </p>
        </div>

        <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group w-full rounded-2xl border border-white/20 bg-white p-6 shadow-[0_20px_60px_rgba(0,20,80,0.15)] transition duration-300 hover:-translate-y-1 hover:border-[#3182FF] hover:shadow-[0_20px_60px_rgba(49,130,255,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3182FF]/20 bg-[#3182FF]/10 text-[#3182FF] transition duration-300 group-hover:border-[#3182FF]/50 group-hover:bg-[#3182FF]/15">
                  <Icon />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#071630]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[#3182FF]/20 bg-[#3182FF]/5 px-2.5 py-1.5 text-[10px] font-medium text-[#102951] transition hover:border-[#3182FF]/50 hover:bg-[#3182FF]/10 hover:text-[#071630]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}