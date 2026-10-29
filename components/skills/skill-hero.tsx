
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaArrowDown,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

export default function SkillsHero() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const middleRingRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(outerRingRef.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(middleRingRef.current, {
        rotation: -360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to(centerRef.current, {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      nodesRef.current.forEach((node, index) => {
        gsap.to(node, {
          y: index % 2 === 0 ? -8 : 8,
          duration: 2 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      gsap.to(orbitRef.current, {
        scale: 1.025,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const addNode = (element: HTMLDivElement | null) => {
    if (element && !nodesRef.current.includes(element)) {
      nodesRef.current.push(element);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative overflow-hidden border-b border-[#3182FF]/20 bg-[#071630]">
      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#3182FF]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-[#60A5FA]/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-[35%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#3182FF]/5 blur-[140px]" />

      <div className="relative w-full px-6 pb-24 pt-10 sm:px-10 sm:pt-14 lg:px-14 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.15,
                },
              },
            }}
            className="relative z-10 max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-gradient-to-r from-[#3182FF] to-[#60A5FA]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#60A5FA]">
                Mobile Application Development
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[60px]"
            >
              Flutter App
              <span className="block bg-gradient-to-r from-[#60A5FA] via-[#3182FF] to-white bg-clip-text text-transparent">
                Developer.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              I build modern, scalable, and high-performance mobile applications
              using Flutter, Dart, Firebase, REST APIs, and clean development
              practices.
            </motion.p>

            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3"
            >
              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-xl border border-[#3182FF]/30 bg-[#102951] p-4 transition-colors duration-300 hover:border-[#3182FF] hover:bg-[#143461]"
              >
                <FaMobileAlt className="text-lg text-[#60A5FA]" />

                <p className="mt-3 text-sm font-semibold text-white">
                  Flutter
                </p>

                <p className="mt-1 text-[11px] text-blue-100/70">
                  Cross Platform
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-xl border border-[#3182FF]/30 bg-[#102951] p-4 transition-colors duration-300 hover:border-[#3182FF] hover:bg-[#143461]"
              >
                <FaDatabase className="text-lg text-[#60A5FA]" />

                <p className="mt-3 text-sm font-semibold text-white">
                  Firebase
                </p>

                <p className="mt-1 text-[11px] text-blue-100/70">
                  Cloud Services
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-xl border border-[#3182FF]/30 bg-[#102951] p-4 transition-colors duration-300 hover:border-[#3182FF] hover:bg-[#143461]"
              >
                <FaServer className="text-lg text-[#60A5FA]" />

                <p className="mt-3 text-sm font-semibold text-white">
                  REST APIs
                </p>

                <p className="mt-1 text-[11px] text-blue-100/70">
                  Integrations
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Link
                  href="#technical-skills"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#3182FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(49,130,255,0.18)] transition-colors duration-300 hover:bg-[#60A5FA]"
                >
                  Explore My Skills
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowDown className="text-xs" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-3 rounded-xl border border-[#3182FF]/40 bg-[#0A1B3A] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#60A5FA] hover:bg-[#102951]"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3182FF]" />
                Android & iOS
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                Firebase Integration
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                API Integration
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            ref={orbitRef}
            className="relative mx-auto flex h-[500px] w-full max-w-[600px] items-center justify-center"
          >
            <div
              className="absolute inset-8 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(96,165,250,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                maskImage:
                  "radial-gradient(circle, black 20%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 20%, transparent 72%)",
              }}
            />

            <div
              ref={outerRingRef}
              className="absolute h-[430px] w-[430px] rounded-full border border-[#3182FF]/30"
            >
              <div className="absolute left-[48%] top-[-5px] h-3 w-3 rounded-full bg-[#3182FF] shadow-[0_0_18px_rgba(49,130,255,0.9)]" />

              <div className="absolute bottom-[18%] right-[1%] h-2.5 w-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

              <div className="absolute bottom-[10%] left-[20%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.5)]" />
            </div>

            <div
              ref={middleRingRef}
              className="absolute h-[315px] w-[315px] rounded-full border border-[#60A5FA]/25"
            >
              <div className="absolute left-[-6px] top-[42%] h-2.5 w-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_16px_rgba(96,165,250,0.9)]" />

              <div className="absolute right-[12%] top-[-5px] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.6)]" />
            </div>

            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#3182FF]/10 blur-[80px]" />

            <div
              ref={centerRef}
              className="relative z-20 flex h-[220px] w-[220px] rotate-45 items-center justify-center border border-[#3182FF]/50 bg-[#0A1B3A]/95 shadow-[0_0_80px_rgba(49,130,255,0.22)]"
            >
              <div className="-rotate-45 text-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(49,130,255,0.1)",
                      "0 0 30px rgba(49,130,255,0.3)",
                      "0 0 15px rgba(49,130,255,0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#3182FF]"
                >
                  <FaMobileAlt className="text-2xl" />
                </motion.div>

                <h3 className="mt-4 text-xl font-bold text-white">Flutter</h3>

                <p className="mt-1 text-sm font-medium text-[#60A5FA]">
                  App Developer
                </p>

                <p className="mt-1 text-xs text-slate-300">
                  Mobile Applications
                </p>
              </div>
            </div>

            <motion.div
              ref={addNode}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-[1%] top-[35%] z-30 flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white text-[#3182FF] shadow-[0_0_30px_rgba(49,130,255,0.12)]">
                <FaCode className="text-xl" />
              </div>

              <p className="mt-3 text-sm font-medium text-white">Dart</p>

              <p className="text-xs text-slate-300">Programming</p>
            </motion.div>

            <motion.div
              ref={addNode}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.08 }}
              className="absolute right-[0%] top-[35%] z-30 flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white text-[#3182FF] shadow-[0_0_30px_rgba(49,130,255,0.12)]">
                <FaDatabase className="text-xl" />
              </div>

              <p className="mt-3 text-sm font-medium text-white">Firebase</p>

              <p className="text-xs text-slate-300">Backend Services</p>
            </motion.div>

            <motion.div
              ref={addNode}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-[0%] left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white text-[#3182FF] shadow-[0_0_30px_rgba(49,130,255,0.12)]">
                <FaServer className="text-xl" />
              </div>

              <p className="mt-3 text-sm font-medium text-white">REST APIs</p>

              <p className="text-xs text-slate-300">Integrations</p>
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[22%] top-[8%] h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.6)]"
            />

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 2.5,
                delay: 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[20%] bottom-[17%] h-3 w-3 rounded-full bg-[#3182FF] shadow-[0_0_18px_rgba(49,130,255,0.9)]"
            />

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 2.5,
                delay: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[30%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_18px_rgba(96,165,250,0.9)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
