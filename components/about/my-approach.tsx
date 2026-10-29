
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: "◉",
    title: "Understand",
    description:
      "I deeply understand the problem, users, business goals and technical requirements first.",
    position: "top-left",
  },
  {
    number: "02",
    icon: "◇",
    title: "Design",
    description:
      "I plan the product flow, architecture and technical direction around the actual requirements.",
    position: "bottom-left",
  },
  {
    number: "03",
    icon: "</>",
    title: "Build",
    description:
      "I write clean, efficient and scalable code using modern development practices.",
    position: "top-right",
  },
  {
    number: "04",
    icon: "↗",
    title: "Deliver",
    description:
      "I test, optimize and deliver production-ready solutions that create real impact.",
    position: "bottom-right",
  },
];

export default function MyApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heading =
        sectionRef.current?.querySelector(".approach-heading");

      const cards = gsap.utils.toArray<HTMLElement>(".approach-card");

      gsap.set([...(heading ? [heading] : []), ...cards], {
        opacity: 1,
      });

      if (heading) {
        gsap.fromTo(
          heading,
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
          },
        );
      }

      ScrollTrigger.batch(cards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
            },
          );
        },
      });

      gsap.to(".approach-core", {
        scale: 1.08,
        boxShadow:
          "0 0 35px rgba(49,130,255,.4), 0 0 75px rgba(49,130,255,.12), inset 0 0 30px rgba(49,130,255,.12)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".approach-dot", {
        opacity: 0.3,
        scale: 0.6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        padding: "clamp(75px, 10vw, 140px) 5%",
        overflow: "hidden",
        background: "#071630",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          width: "min(1180px, 100%)",
          margin: "0 auto",
        }}
      >
        <div
          className="approach-heading"
          style={{
            marginBottom: "55px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              color: "#3182FF",
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
                background: "#3182FF",
              }}
            />
            MY APPROACH
          </span>

          <h2
            style={{
              margin: "18px 0 0",
              color: "#FFFFFF",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(28px, 4vw, 45px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-.055em",
              whiteSpace: "nowrap",
            }}
          >
            From Idea To{" "}
            <em
              style={{
                color: "#3182FF",
                fontStyle: "italic",
              }}
            >
              Impact.
            </em>
          </h2>
        </div>

        <div
          className="approach-panel"
          style={{
            position: "relative",
            minHeight: "610px",
            overflow: "hidden",
            border: "1px solid rgba(49,130,255,.4)",
            borderRadius: "18px",
            background:
              "linear-gradient(145deg, #F8FBFF 0%, #EEF4FF 55%, #E5EEFF 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.5,
              backgroundImage:
                "linear-gradient(rgba(49,130,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(49,130,255,.055) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          <div
            className="approach-core"
            style={{
              position: "absolute",
              zIndex: 10,
              left: "50%",
              top: "50%",
              width: "78px",
              height: "78px",
              transform: "translate(-50%,-50%)",
              display: "grid",
              placeItems: "center",
              border: "1px solid rgba(49,130,255,.65)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #FFFFFF 0%, #DCEAFF 72%, #C8DDFF 100%)",
              color: "#1769D2",
              fontSize: "23px",
              boxShadow:
                "0 0 30px rgba(49,130,255,.2), inset 0 0 25px rgba(49,130,255,.1)",
            }}
          >
            ✦
          </div>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "130px",
              height: "130px",
              transform: "translate(-50%,-50%)",
              border: "1px solid rgba(49,130,255,.25)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "24%",
              right: "50%",
              top: "50%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(49,130,255,.5))",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              right: "24%",
              top: "50%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(49,130,255,.5), transparent)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "24%",
              bottom: "50%",
              width: "1px",
              background:
                "linear-gradient(180deg, transparent, rgba(49,130,255,.5))",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              bottom: "24%",
              width: "1px",
              background:
                "linear-gradient(180deg, rgba(49,130,255,.5), transparent)",
            }}
          />

          <span
            className="approach-dot"
            style={{
              position: "absolute",
              left: "30%",
              top: "50%",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#3182FF",
              boxShadow: "0 0 12px #3182FF",
            }}
          />

          <span
            className="approach-dot"
            style={{
              position: "absolute",
              right: "30%",
              top: "50%",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#3182FF",
              boxShadow: "0 0 12px #3182FF",
            }}
          />

          <span
            className="approach-dot"
            style={{
              position: "absolute",
              left: "50%",
              top: "30%",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#3182FF",
              boxShadow: "0 0 12px #3182FF",
            }}
          />

          <span
            className="approach-dot"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "30%",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#3182FF",
              boxShadow: "0 0 12px #3182FF",
            }}
          />

          {steps.map((step) => {
            const left = step.position.includes("left");
            const top = step.position.includes("top");

            return (
              <div
                key={step.number}
                className="approach-card"
                style={{
                  position: "absolute",
                  zIndex: 15,
                  width: "300px",
                  top: top ? "40px" : "auto",
                  bottom: !top ? "40px" : "auto",
                  left: left ? "40px" : "auto",
                  right: !left ? "40px" : "auto",
                  padding: "22px",
                  border: "1px solid #3182FF",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(145deg, #FFFFFF 0%, #F0F6FF 100%)",
                  boxShadow: "0 8px 30px rgba(17,55,110,.07)",
                  transition:
                    "transform .35s ease, border-color .35s ease, box-shadow .35s ease",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-7px) scale(1.02)";
                  e.currentTarget.style.borderColor = "#3182FF";
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(17,55,110,.12), 0 0 30px rgba(49,130,255,.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = "#3182FF";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(17,55,110,.07)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid #C7DCFF",
                      borderRadius: "9px",
                      background: "#E6F0FF",
                      color: "#1769D2",
                      fontFamily: "monospace",
                      fontSize: "15px",
                    }}
                  >
                    {step.icon}
                  </div>

                  <span
                    style={{
                      color: "#7C94B5",
                      fontFamily: "monospace",
                      fontSize: "15px",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#0B1D3A",
                    fontFamily: "Georgia,serif",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#506580",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.8,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .approach-panel {
            min-height: auto !important;
            padding: 30px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .approach-core,
          .approach-panel > div:nth-child(3),
          .approach-panel > div:nth-child(4),
          .approach-panel > div:nth-child(5),
          .approach-panel > div:nth-child(6),
          .approach-dot {
            display: none;
          }

          .approach-card {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            min-width: 0;
          }
        }

        @media (max-width: 600px) {
          #approach {
            padding: 75px 16px !important;
          }

          .approach-heading {
            margin-bottom: 35px !important;
          }

          .approach-heading h2 {
            font-size: clamp(25px, 6vw, 34px) !important;
            white-space: normal !important;
          }

          .approach-panel {
            padding: 18px;
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
            border-radius: 14px !important;
          }

          .approach-card {
            padding: 19px !important;
            border-radius: 12px !important;
          }

          .approach-card h3 {
            font-size: 19px !important;
          }

          .approach-card p {
            font-size: 13px !important;
            line-height: 1.8 !important;
          }
        }

        @media (max-width: 380px) {
          #approach {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }

          .approach-panel {
            padding: 12px;
          }

          .approach-card {
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
