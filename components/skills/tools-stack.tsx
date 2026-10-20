const tools = [
  "Flutter",
  "Dart",
  "Firebase",
  "Android Studio",
  "VS Code",
  "Git",
  "GitHub",
  "REST APIs",
  "Postman",
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Firestore",
  "Cloud Services",
];

export default function ToolsStack() {
  return (
    <section className="mx-auto max-w-full px-6 pb-24 sm:px-10 lg:px-14 bg-[#0B1323]">
      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
          Development Toolkit
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Tools & Technologies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
          Technologies and development tools I use to design, develop, test,
          integrate, and deploy applications.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-blue-900/50 bg-[#09111D] px-5 py-2.5 text-xs font-medium text-slate-400 transition hover:border-blue-400/50 hover:bg-blue-500/5 hover:text-blue-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}