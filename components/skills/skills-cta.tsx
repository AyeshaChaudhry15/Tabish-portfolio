import { FaArrowRight } from "react-icons/fa";

export default function SkillsCta() {
  return (
    <section className="mx-auto max-w-full px-6 pb-24 sm:px-10 lg:px-14] bg-[#0B1323]">
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-cyan-500/10 p-8 sm:p-12">
        <div className="absolute right-[-5%] top-[-60%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Let&apos;s Build Something
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Have a mobile app idea?
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-7 text-slate-400">
              Let&apos;s turn your idea into a reliable, scalable, and
              user-friendly mobile application.
            </p>
          </div>

          <a
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Start a Conversation
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}