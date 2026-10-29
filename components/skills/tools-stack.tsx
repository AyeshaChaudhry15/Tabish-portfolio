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
    <section className="mx-auto max-w-full bg-[#071630] px-6 pb-24 sm:px-10 lg:px-14">
      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
          Development Toolkit
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Tools & Technologies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Technologies and development tools I use to design, develop, test,
          integrate, and deploy applications.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-[#3182FF]/20 bg-white px-5 py-2.5 text-xs font-medium text-[#071630] transition duration-300 hover:-translate-y-0.5 hover:border-[#3182FF] hover:bg-[#3182FF] hover:text-white"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}