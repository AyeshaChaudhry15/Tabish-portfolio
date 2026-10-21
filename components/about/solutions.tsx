"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    number: "01",
    icon: "</>",
    title: "Full Stack Development",
    description:
      "End-to-end web applications using modern frontend, backend and database technologies.",
    tags: ["Next.js", "Node.js", "APIs"],
  },
  {
    number: "02",
    icon: "▣",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications focused on performance, usability and scalability.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    number: "03",
    icon: "▱",
    title: "SaaS Development",
    description:
      "Scalable SaaS products with secure architecture, dashboards and modern user experiences.",
    tags: ["SaaS", "Cloud", "APIs"],
  },
  {
    number: "04",
    icon: "◈",
    title: "Backend Architecture",
    description:
      "Robust APIs, databases and backend systems designed for performance and reliability.",
    tags: ["Node.js", "Database", "REST"],
  },
  {
    number: "05",
    icon: "✦",
    title: "AI & Intelligent Solutions",
    description:
      "AI-powered features, intelligent workflows and automation integrated into modern applications.",
    tags: ["AI", "Automation", "Integration"],
  },
  {
    number: "06",
    icon: "☁",
    title: "Cloud & Deployment",
    description:
      "CI/CD pipelines, cloud infrastructure and production deployment for reliable applications.",
    tags: ["Cloud", "CI/CD", "DevOps"],
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector(".solutions-header");
      const cards = gsap.utils.toArray<HTMLElement>(".solution-card");

      if (!header || cards.length === 0) return;

      gsap.set([header, ...cards], {
        opacity: 1,
      });

      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
            }
          );
        },
      });

      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        padding: "140px 5%",
        overflow: "hidden",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "35%",
          width: "600px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(47,128,255,.09),transparent 68%)",
          filter: "blur(25px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1180px,100%)",
          margin: "0 auto",
        }}
      >
        <div
          className="solutions-header"
          style={{
            maxWidth: "700px",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              color: "#4DA3FF",
              fontFamily: "Arial,sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: ".25em",
            }}
          >
            <span
              style={{
                width: "27px",
                height: "1px",
                background: "#4DA3FF",
              }}
            />
            WHAT I DO
          </span>

          <h2
            style={{
              margin: "18px 0 20px",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,6vw,50px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-.055em",
            }}
          >
            Solutions I{" "}
            <em
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Deliver
            </em>
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: 0,
              color: "#8298B2",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            From mobile applications to scalable backend systems, I build
            digital products around real business requirements and long-term
            performance.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: "15px",
          }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="solution-card"
              style={{
                position: "relative",
                minHeight: "285px",
                padding: "28px",
                overflow: "hidden",
                border: "1px solid rgba(120,160,210,.18)",
                borderRadius: "11px",
                background:
                  "linear-gradient(145deg,rgba(13,31,54,.95),rgba(7,19,35,.98))",
                transition:
                  "transform .35s ease,border-color .35s ease,box-shadow .35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor =
                  "rgba(72,163,255,.65)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,.25),0 0 40px rgba(47,128,255,.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor =
                  "rgba(120,160,210,.18)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-100px",
                  right: "-100px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(47,128,255,.09),transparent 70%)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "28px",
                }}
              >
                <span
                  style={{
                    color: "#45617F",
                    fontFamily: "monospace",
                    fontSize: "8px",
                  }}
                >
                  / {solution.number}
                </span>

                <span
                  style={{
                    color: "#496783",
                    fontSize: "12px",
                  }}
                >
                  ↗
                </span>
              </div>

              <div
                style={{
                  width: "45px",
                  height: "45px",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: "25px",
                  border: "1px solid rgba(64,157,255,.34)",
                  borderRadius: "8px",
                  background: "rgba(47,128,255,.06)",
                  color: "#4DA3FF",
                  fontFamily: "monospace",
                  fontSize: "12px",
                }}
              >
                {solution.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 12px",
                  color: "#F1F6FC",
                  fontFamily: "Georgia,serif",
                  fontSize: "19px",
                  fontWeight: 400,
                }}
              >
                {solution.title}
              </h3>

              <p
                style={{
                  margin: "0 0 18px",
                  color: "#8095AF",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                }}
              >
                {solution.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 8px",
                      border: "1px solid rgba(70,151,230,.18)",
                      borderRadius: "4px",
                      color: "#6383A5",
                      background: "rgba(47,128,255,.04)",
                      fontFamily: "monospace",
                      fontSize: "10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}