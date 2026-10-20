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
      className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-14 bg-[#0B1323]"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full " />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-900/30 blur-[160px]" />

      <div className="relative z-10 w-full">
        <div className="mb-12 w-full">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-100">
            Technical Expertise
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50/80">
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
                className="group w-full rounded-2xl border border-white/15 bg-[#071426]/90 p-6 shadow-[0_20px_60px_rgba(0,20,80,0.2)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#091a31]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300 transition duration-300 group-hover:border-blue-300/60 group-hover:bg-blue-500/20">
                  <Icon />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-blue-400/20 bg-blue-500/10 px-2.5 py-1.5 text-[10px] font-medium text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/20 hover:text-white"
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