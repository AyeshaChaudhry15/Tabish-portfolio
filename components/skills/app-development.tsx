"use client";

import { motion } from "framer-motion";
import {
  FaAndroid,
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

export default function AppDevelopment() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071630] px-6 pb-24 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#3182FF]/10 blur-[150px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-[#60A5FA]/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3182FF]/5 blur-[130px]" />
      </div>

      <div className="relative w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="relative p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute left-10 top-16 h-48 w-48 rounded-full bg-[#3182FF]/10 blur-[80px]" />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
                App Development
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Building With
                <span className="block bg-gradient-to-r from-[#60A5FA] via-[#3182FF] to-white bg-clip-text text-transparent">
                  Mobile Technology.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300">
                I specialize in developing reliable mobile applications with
                clean architecture, scalable code, smooth interfaces, and
                real-world integrations.
              </p>

              <motion.div
                className="mt-10 flex items-center gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3182FF]/15 text-[#60A5FA] shadow-[0_0_40px_rgba(49,130,255,0.2)]"
                >
                  <FaMobileAlt className="text-2xl" />
                </motion.div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Flutter Specialist
                  </p>

                  <p className="mt-1 text-xs text-slate-300">
                    Cross-platform mobile applications
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="p-0 sm:p-2 lg:p-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <motion.div
                    key={technology.title}
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-xl bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(49,130,255,0.15)]"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 4 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3182FF]/10 text-[#3182FF]"
                      >
                        <Icon className="text-lg" />
                      </motion.div>

                      <h3 className="text-base font-semibold text-[#071630]">
                        {technology.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {technology.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}