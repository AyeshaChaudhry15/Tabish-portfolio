"use client";

import { motion } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaCloudArrowUp,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: (
      <>
        Analyze requirements
        <br />
        and understand the
        <br />
        problem deeply.
      </>
    ),
    icon: FaMagnifyingGlass,
    accent: "blue",
  },
  {
    number: "02",
    title: "Plan & Architect",
    description: (
      <>
        Design efficient
        <br />
        architecture and plan
        <br />
        the right approach.
      </>
    ),
    icon: FaLightbulb,
    accent: "cyan",
  },
  {
    number: "03",
    title: "Develop",
    description: (
      <>
        Build clean, tested and
        <br />
        scalable solutions with
        <br />
        best practices.
      </>
    ),
    icon: FaCode,
    accent: "blue",
  },
  {
    number: "04",
    title: "Optimize",
    description: (
      <>
        Improve performance,
        <br />
        security and overall
        <br />
        user experience.
      </>
    ),
    icon: FaRocket,
    accent: "cyan",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description: (
      <>
        Deploy, monitor and
        <br />
        continuously enhance
        <br />
        the product.
      </>
    ),
    icon: FaCloudArrowUp,
    accent: "blue",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#071630] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[-180px] h-[350px] w-[350px] rounded-full bg-blue-500/[0.09] blur-[130px]" />

        <div className="absolute right-[8%] bottom-[-180px] h-[350px] w-[350px] rounded-full bg-blue-400/[0.07] blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          className="mb-14 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hidden h-px w-14 bg-gradient-to-r from-transparent to-blue-500/70 sm:block" />

          <h2 className="text-center text-[20px] font-bold uppercase tracking-[0.24em] text-[#3182FF] sm:text-[24px]">
            My Development Approach
          </h2>

          <div className="hidden h-px w-14 bg-gradient-to-l from-transparent to-blue-500/70 sm:block" />
        </motion.div>

        <div className="relative hidden lg:block">
          <div className="absolute left-[10%] right-[10%] top-[118px] h-px bg-gradient-to-r from-blue-500/80 via-blue-400/70 to-blue-500/80" />

          <div className="absolute left-[18%] top-[114px] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(49,130,255,0.9)]" />

          <div className="absolute left-[38%] top-[114px] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(49,130,255,0.9)]" />

          <div className="absolute left-[58%] top-[114px] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(49,130,255,0.9)]" />

          <div className="absolute left-[78%] top-[114px] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(49,130,255,0.9)]" />

          <motion.div
            className="grid grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              const isCyan = step.accent === "cyan";

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className={`relative z-20 flex h-12 w-12 items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-[#8BB9FF] text-[#1769D2]"
                        : "border-[#3182FF] text-[#1769D2]"
                    } bg-[#F4F8FF] text-sm font-semibold transition-all duration-300 group-hover:scale-105 ${
                      isCyan
                        ? "group-hover:shadow-[0_0_20px_rgba(49,130,255,0.2)]"
                        : "group-hover:shadow-[0_0_20px_rgba(49,130,255,0.2)]"
                    }`}
                  >
                    {step.number}
                  </motion.div>

                  <div
                    className={`relative z-10 mt-1 flex h-[105px] w-[105px] items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-[#A8C9FF] group-hover:border-[#3182FF]"
                        : "border-[#A8C9FF] group-hover:border-[#3182FF]"
                    } bg-[#F4F8FF] transition-all duration-300 ${
                      isCyan
                        ? "group-hover:shadow-[0_0_30px_rgba(49,130,255,0.15)]"
                        : "group-hover:shadow-[0_0_30px_rgba(49,130,255,0.15)]"
                    }`}
                  >
                    <div
                      className={`absolute h-14 w-14 rounded-full blur-[26px] ${
                        isCyan ? "bg-blue-500/15" : "bg-blue-500/15"
                      }`}
                    />

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon
                        className={`relative text-[34px] transition-transform duration-300 group-hover:scale-110 ${
                          isCyan ? "text-[#3182FF]" : "text-[#1769D2]"
                        }`}
                      />
                    </motion.div>
                  </div>

                  <h3 className="mt-7 text-[18px] font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#B4C5DE]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            const isCyan = step.accent === "cyan";

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`group rounded-2xl border ${
                  isCyan
                    ? "border-[#D1E2FF] hover:border-[#3182FF]"
                    : "border-[#D1E2FF] hover:border-[#3182FF]"
                } bg-gradient-to-br from-[#FFFFFF] to-[#EDF4FF] p-6 text-[#0B1D3A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(49,130,255,0.12)]`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-[#A8C9FF] text-[#1769D2]"
                        : "border-[#A8C9FF] text-[#1769D2]"
                    } bg-[#E6F0FF] text-xs font-semibold`}
                  >
                    {step.number}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-[#C7DCFF] text-[#3182FF]"
                        : "border-[#C7DCFF] text-[#1769D2]"
                    } bg-[#E6F0FF]`}
                  >
                    <Icon className="text-xl" />
                  </motion.div>

                  <h3 className="text-base font-bold text-[#0B1D3A]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-5 pl-[70px] text-sm leading-6 text-[#506580]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}