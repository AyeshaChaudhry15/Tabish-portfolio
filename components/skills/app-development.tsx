import {
  FaAndroid,
  FaApple,
  FaCloud,
  FaCode,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

const technologies = [
  {
    title: "Flutter",
    description: "Cross-platform application development",
    icon: FaMobileAlt,
  },
  {
    title: "Dart",
    description: "Modern application programming",
    icon: FaCode,
  },
  {
    title: "Firebase",
    description: "Authentication, database and cloud services",
    icon: FaCloud,
  },
  {
    title: "REST APIs",
    description: "Backend communication and integrations",
    icon: FaCode,
  },
  {
    title: "Firestore",
    description: "Cloud database and real-time data",
    icon: FaDatabase,
  },
  {
    title: "Android & iOS",
    description: "Cross-platform mobile deployment",
    icon: FaAndroid,
  },
];

export default function AppDevelopment() {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-24 sm:px-10 lg:px-14 bg-[#0B1323]">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full blur-[150px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full  blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[130px]" />
      </div>

      <div className="relative w-full overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#06152B] via-[#08203D] to-[#061A32] shadow-[0_30px_100px_rgba(0,40,120,0.18)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative p-8 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute left-10 top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
                App Development
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Building With
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Mobile Technology.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
                I specialize in developing reliable mobile applications with
                clean architecture, scalable code, smooth interfaces, and
                real-world integrations.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-400 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                  <FaMobileAlt className="text-2xl" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Flutter Specialist
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Cross-platform mobile applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-500/20 bg-[#071A31]/50 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.title}
                    className="rounded-xl border border-blue-500/15 bg-blue-500/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.07]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400">
                        <Icon className="text-sm" />
                      </div>

                      <h3 className="text-sm font-semibold text-slate-200">
                        {technology.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {technology.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}