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
    <>
      <section
        id="solutions"
        ref={sectionRef}
        className="solutions-section"
      >
        <div className="solutions-glow" />

        <div className="solutions-container">
          <div className="solutions-header">
            <span className="solutions-eyebrow">
              <span className="solutions-line" />
              WHAT I DO
            </span>

            <h2 className="solutions-title">
              Solutions{" "}
              <em>
                I Deliver
              </em>
            </h2>

            <p className="solutions-description">
              From mobile applications to scalable backend systems, I build
              digital products around real business requirements and long-term
              performance.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="solution-card"
              >
                <span className="solution-card-glow" />

                <div className="solution-top">
                  <span className="solution-number">
                    / {solution.number}
                  </span>

                  <span className="solution-arrow">
                    ↗
                  </span>
                </div>

                <div className="solution-icon">
                  {solution.icon}
                </div>

                <h3 className="solution-card-title">
                  {solution.title}
                </h3>

                <p className="solution-card-description">
                  {solution.description}
                </p>

                <div className="solution-tags">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="solution-tag"
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

      <style jsx>{`
        .solutions-section {
          position: relative;
          width: 100%;
          padding: 140px 5%;
          overflow: hidden;
          background: #071630;
          color: #ffffff;
        }

        .solutions-glow {
          position: absolute;
          top: 10%;
          left: 35%;
          width: 600px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(49, 130, 255, 0.12),
            transparent 68%
          );
          filter: blur(25px);
          pointer-events: none;
        }

        .solutions-container {
          position: relative;
          z-index: 2;
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .solutions-header {
          max-width: 700px;
          margin-bottom: 60px;
        }

        .solutions-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #3182ff;
          font-family: Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.25em;
        }

        .solutions-line {
          width: 27px;
          height: 1px;
          flex-shrink: 0;
          background: #3182ff;
        }

        .solutions-title {
          margin: 18px 0 20px;
          color: #ffffff;
          font-family: Georgia, serif;
          font-size: clamp(40px, 6vw, 50px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .solutions-title em {
          color: #3182ff;
          font-style: italic;
        }

        .solutions-description {
          max-width: 620px;
          margin: 0;
          color: #b4c5de;
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 1.8;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .solution-card {
          position: relative;
          min-height: 285px;
          padding: 28px;
          overflow: hidden;
          border: 1px solid #d1e2ff;
          border-radius: 14px;
          background: linear-gradient(145deg, #ffffff, #edf4ff);
          color: #0b1d3a;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .solution-card:hover {
          transform: translateY(-8px);
          border-color: #3182ff;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.16),
            0 0 35px rgba(49, 130, 255, 0.12);
        }

        .solution-card-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(49, 130, 255, 0.12),
            transparent 70%
          );
          pointer-events: none;
        }

        .solution-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .solution-number {
          color: #7187a5;
          font-family: monospace;
          font-size: 8px;
        }

        .solution-arrow {
          color: #3182ff;
          font-size: 12px;
        }

        .solution-icon {
          position: relative;
          z-index: 1;
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          margin-bottom: 25px;
          border: 1px solid #c7dcff;
          border-radius: 9px;
          background: #e6f0ff;
          color: #1769d2;
          font-family: monospace;
          font-size: 12px;
        }

        .solution-card-title {
          position: relative;
          z-index: 1;
          margin: 0 0 12px;
          color: #0b1d3a;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.3;
        }

        .solution-card-description {
          position: relative;
          z-index: 1;
          margin: 0 0 18px;
          color: #506580;
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.8;
        }

        .solution-tags {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .solution-tag {
          padding: 5px 8px;
          border: 1px solid #d1e2ff;
          border-radius: 4px;
          color: #285b9b;
          background: #eaf2ff;
          font-family: monospace;
          font-size: 10px;
        }

        @media (max-width: 1024px) {
          .solutions-section {
            padding: 110px 5%;
          }

          .solutions-header {
            margin-bottom: 45px;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .solution-card {
            min-height: 280px;
          }
        }

        @media (max-width: 768px) {
          .solutions-section {
            padding: 90px 24px;
          }

          .solutions-glow {
            left: 10%;
            width: 450px;
            height: 400px;
          }

          .solutions-container {
            width: 100%;
          }

          .solutions-header {
            max-width: 100%;
            margin-bottom: 40px;
          }

          .solutions-title {
            font-size: clamp(36px, 8vw, 46px);
          }

          .solutions-description {
            max-width: 100%;
            font-size: 14px;
            line-height: 1.75;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .solution-card {
            padding: 24px;
            min-height: 275px;
          }

          .solution-card-title {
            font-size: 18px;
          }

          .solution-card-description {
            font-size: 14px;
          }
        }

        @media (max-width: 640px) {
          .solutions-section {
            padding: 75px 16px;
          }

          .solutions-glow {
            top: 5%;
            left: -100px;
            width: 350px;
            height: 350px;
            filter: blur(30px);
          }

          .solutions-header {
            margin-bottom: 35px;
          }

          .solutions-eyebrow {
            gap: 7px;
            font-size: 8px;
            letter-spacing: 0.2em;
          }

          .solutions-line {
            width: 22px;
          }

          .solutions-title {
            margin: 16px 0 18px;
            font-size: 38px;
            line-height: 1.05;
            letter-spacing: -0.045em;
          }

          .solutions-description {
            font-size: 13px;
            line-height: 1.75;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .solution-card {
            min-height: auto;
            padding: 23px;
            border-radius: 12px;
          }

          .solution-card:hover {
            transform: translateY(-4px);
          }

          .solution-top {
            margin-bottom: 23px;
          }

          .solution-icon {
            width: 43px;
            height: 43px;
            margin-bottom: 20px;
          }

          .solution-card-title {
            margin-bottom: 10px;
            font-size: 19px;
          }

          .solution-card-description {
            margin-bottom: 16px;
            font-size: 13px;
            line-height: 1.7;
          }

          .solution-tags {
            gap: 5px;
          }

          .solution-tag {
            padding: 5px 7px;
            font-size: 9px;
          }
        }

        @media (max-width: 380px) {
          .solutions-section {
            padding: 65px 14px;
          }

          .solutions-title {
            font-size: 34px;
          }

          .solutions-description {
            font-size: 12px;
          }

          .solution-card {
            padding: 20px;
          }

          .solution-card-title {
            font-size: 18px;
          }

          .solution-card-description {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}