"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaShieldHalved,
  FaGaugeHigh,
  FaPlug,
} from "react-icons/fa6";

const expertise = [
  {
    title: (
      <>
        Full Stack
        <br />
        Development
      </>
    ),
    description: (
      <>
        End-to-end web
        <br />
        applications
      </>
    ),
    icon: FaCode,
    accent: "blue",
  },
  {
    title: (
      <>
        API Design &
        <br />
        Integration
      </>
    ),
    description: (
      <>
        Robust APIs and
        <br />
        seamless integrations
      </>
    ),
    icon: FaPlug,
    accent: "cyan",
  },
  {
    title: <>Cloud & DevOps</>,
    description: (
      <>
        Reliable deployments
        <br />
        and infrastructure
      </>
    ),
    icon: FaCloud,
    accent: "blue",
  },
  {
    title: (
      <>
        Database Design
        <br />
        & Optimization
      </>
    ),
    description: (
      <>
        Structured, scalable
        <br />
        and optimized data
      </>
    ),
    icon: FaDatabase,
    accent: "cyan",
  },
  {
    title: (
      <>
        Security & Best
        <br />
        Practices
      </>
    ),
    description: (
      <>
        Secure, reliable
        <br />
        and compliant apps
      </>
    ),
    icon: FaShieldHalved,
    accent: "blue",
  },
  {
    title: (
      <>
        Performance
        <br />
        Optimization
      </>
    ),
    description: (
      <>
        Fast, efficient and
        <br />
        high-performing apps
      </>
    ),
    icon: FaGaugeHigh,
    accent: "cyan",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function AreasOfExpertise() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#071630] px-5 py-7 text-white sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-150px] h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[5%] h-[300px] w-[300px] rounded-full bg-blue-400/[0.06] blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[220px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] rounded-[20px] border border-blue-400/20 bg-[#0A1B3A]/80 px-5 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] sm:px-7 lg:px-8">
        <motion.div
          className="mb-7 flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="hidden h-px w-12 bg-gradient-to-r from-transparent to-blue-400/70 sm:block" />

          <h2 className="text-center text-[19px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-[22px]">
            Areas of Expertise
          </h2>

          <div className="hidden h-px w-12 bg-gradient-to-l from-transparent to-blue-400/70 sm:block" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            const isCyan = item.accent === "cyan";

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`group relative h-[220px] overflow-hidden rounded-2xl border ${
                  isCyan
                    ? "border-blue-200 hover:border-blue-300"
                    : "border-slate-200 hover:border-blue-400"
                } bg-white px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(49,130,255,0.10)]`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full blur-[55px] ${
                    isCyan ? "bg-blue-400/10" : "bg-blue-500/10"
                  }`}
                />

                <div className="relative flex h-[55px] items-center justify-center">
                  <div
                    className={`absolute h-16 w-16 rounded-full blur-[30px] ${
                      isCyan ? "bg-blue-400/[0.08]" : "bg-blue-500/[0.08]"
                    }`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon
                      className={`relative text-[38px] transition-transform duration-300 group-hover:scale-110 ${
                        isCyan ? "text-blue-500" : "text-[#3182FF]"
                      }`}
                    />
                  </motion.div>
                </div>

                <h3 className="relative mt-4 min-h-[46px] text-center text-[15px] font-bold leading-6 text-[#1E2340]">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-center text-[12px] leading-6 text-slate-600">
                  {item.description}
                </p>

                <motion.div
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 ${
                    isCyan ? "bg-blue-500" : "bg-[#3182FF]"
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: 56 }}
                  transition={{ duration: 0.3 }}
                />

                <div
                  className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-14 ${
                    isCyan ? "bg-blue-500" : "bg-[#3182FF]"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}