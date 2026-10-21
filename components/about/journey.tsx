"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    year: "2022",
    company: "CAS",
    role: "Freelance App Developer",
    description:
      "Started learning and working on real-world applications, building a strong foundation in mobile development, programming and problem solving.",
    side: "left",
  },
  {
    year: "2023 — 2025",
    company: "Code's Thinker",
    role: "App Developer",
    description:
      "Worked for 2 years as an App Developer, building production applications, integrating APIs and databases, fixing complex problems and working with modern development workflows.",
    side: "right",
  },
  {
    year: "2025 — Present",
    company: "Evermont Global Technologies",
    role: "CEO & App Developer",
    description:
      "Now leading Everont while continuing to work hands-on with technology, product development and digital solutions for businesses and users.",
    side: "left",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-heading", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".journey-item", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".journey-list",
          start: "top 78%",
        },
      });

      gsap.to(".journey-core", {
        boxShadow:
          "0 0 25px rgba(47,128,255,.6),0 0 55px rgba(47,128,255,.18)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
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
          width: "min(1000px,100%)",
          margin: "0 auto",
        }}
      >
        <div
          className="journey-heading"
          style={{
            marginBottom: "75px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#4DA3FF",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              fontFamily: "Arial,sans-serif",
            }}
          >
            MY JOURNEY
          </span>

          <h2
            style={{
              margin: "17px 0 0",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,6vw,45px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.055em",
            }}
          >
            A Journey of{" "}
            <em
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Growth.
            </em>
          </h2>

          <p
            style={{
              maxWidth: "580px",
              margin: "22px auto 0",
              color: "#849AB4",
              fontSize: "14px",
              lineHeight: 1.8,
              fontFamily: "Arial,sans-serif",
            }}
          >
            Every experience has shaped the way I approach technology,
            problem-solving and building digital products.
          </p>
        </div>

        <div
          className="journey-list"
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "50%",
              width: "1px",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(180deg,transparent,rgba(55,145,255,.45),rgba(55,145,255,.45),transparent)",
            }}
          />

          {journey.map((item, index) => {
            const isLeft = item.side === "left";

            return (
              <div
                key={item.year}
                className="journey-item"
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: index === journey.length - 1 ? "0" : "80px",
                }}
              >
                <div
                  className="journey-core"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "42px",
                    zIndex: 5,
                    width: "11px",
                    height: "11px",
                    transform: "translateX(-50%)",
                    border: "2px solid #071225",
                    borderRadius: "50%",
                    background: "#4DA3FF",
                    boxShadow: "0 0 16px rgba(47,128,255,.55)",
                  }}
                />

                <div
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-7px)";
                    e.currentTarget.style.borderColor =
                      "rgba(70,164,255,.65)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 55px rgba(0,0,0,.25),0 0 35px rgba(47,128,255,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor =
                      "rgba(120,160,210,.18)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  style={{
                    width: "43%",
                    padding: "24px",
                    border: "1px solid rgba(120,160,210,.18)",
                    borderRadius: "11px",
                    background:
                      "linear-gradient(145deg,rgba(14,32,55,.94),rgba(7,19,35,.96))",
                    transition: "all .35s ease",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      marginBottom: "15px",
                      padding: "5px 9px",
                      border: "1px solid rgba(67,157,255,.25)",
                      borderRadius: "4px",
                      color: "#4DA3FF",
                      background: "rgba(47,128,255,.06)",
                      fontSize: "10px",
                      fontFamily: "monospace",
                    }}
                  >
                    {item.year}
                  </span>

                  <h3
                    style={{
                      margin: "0 0 5px",
                      color: "#F2F6FC",
                      fontFamily: "Georgia,serif",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {item.company}
                  </h3>

                  <h4
                    style={{
                      margin: "0 0 14px",
                      color: "#4DA3FF",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    {item.role}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#8196B0",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      fontFamily: "Arial,sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}