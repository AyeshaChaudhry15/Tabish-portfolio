
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function SkillsCta() {
  return (
    <section className="mx-auto max-w-full bg-[#071630] px-6 pb-24 sm:px-10 lg:px-14">
      <div className="relative overflow-hidden rounded-3xl border border-[#3182FF]/30 bg-[#0A1B3A] p-8 shadow-[0_20px_60px_rgba(0,40,120,0.15)] sm:p-12">
        <div className="absolute right-[-5%] top-[-60%] h-[300px] w-[300px] rounded-full bg-[#3182FF]/10 blur-[100px]" />

        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              Let&apos;s Build Something
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Have a mobile app idea?
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-7 text-slate-300">
              Let&apos;s turn your idea into a reliable, scalable, and
              user-friendly mobile application.
            </p>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#3182FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(49,130,255,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#2563EB] hover:shadow-[0_10px_30px_rgba(49,130,255,0.3)]"
          >
            Start a Conversation
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
