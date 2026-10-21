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
      const heading = sectionRef.current?.querySelector(
        ".approach-heading"
      );

      const cards = gsap.utils.toArray<HTMLElement>(".approach-card");

      gsap.set([heading, ...cards], {
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
          }
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
            }
          );
        },
      });

      gsap.to(".approach-core", {
        scale: 1.08,
        boxShadow:
          "0 0 35px rgba(47,128,255,.55),0 0 75px rgba(47,128,255,.16),inset 0 0 30px rgba(78,170,255,.12)",
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
        padding: "140px 5%",
        overflow: "hidden",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      <div
        style={{
          width: "min(1180px,100%)",
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
            MY APPROACH
          </span>

          <h2
            style={{
              margin: "18px 0 0",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,6vw,45px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-.055em",
            }}
          >
            From Idea
            To{" "}
            <em
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Impact.
            </em>
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            minHeight: "610px",
            overflow: "hidden",
            border: "1px solid rgba(120,160,210,.18)",
            borderRadius: "15px",
            background:
              "radial-gradient(circle at center,rgba(47,128,255,.07),transparent 34%),linear-gradient(145deg,rgba(13,31,54,.92),rgba(6,18,34,.98))",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.13,
              backgroundImage:
                "linear-gradient(rgba(77,145,220,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(77,145,220,.08) 1px,transparent 1px)",
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
              border: "1px solid rgba(76,170,255,.8)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(47,128,255,.22),rgba(5,20,38,.98) 68%)",
              color: "#5BB5FF",
              fontSize: "23px",
              boxShadow:
                "0 0 30px rgba(47,128,255,.4),inset 0 0 25px rgba(47,128,255,.12)",
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
              border: "1px solid rgba(63,158,255,.25)",
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
                "linear-gradient(90deg,transparent,rgba(65,160,255,.55))",
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
                "linear-gradient(90deg,rgba(65,160,255,.55),transparent)",
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
                "linear-gradient(180deg,transparent,rgba(65,160,255,.55))",
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
                "linear-gradient(180deg,rgba(65,160,255,.55),transparent)",
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
              background: "#4DA3FF",
              boxShadow: "0 0 12px #4DA3FF",
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
              background: "#4DA3FF",
              boxShadow: "0 0 12px #4DA3FF",
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
              background: "#4DA3FF",
              boxShadow: "0 0 12px #4DA3FF",
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
              background: "#4DA3FF",
              boxShadow: "0 0 12px #4DA3FF",
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
                  border: "1px solid rgba(120,160,210,.18)",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(145deg,rgba(14,34,58,.96),rgba(7,19,35,.98))",
                  transition:
                    "transform .35s ease,border-color .35s ease,box-shadow .35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-7px) scale(1.02)";
                  e.currentTarget.style.borderColor =
                    "rgba(72,164,255,.7)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 55px rgba(0,0,0,.28),0 0 40px rgba(47,128,255,.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor =
                    "rgba(120,160,210,.18)";
                  e.currentTarget.style.boxShadow = "none";
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
                      border: "1px solid rgba(65,157,255,.3)",
                      borderRadius: "7px",
                      background: "rgba(47,128,255,.05)",
                      color: "#4DA3FF",
                      fontFamily: "monospace",
                      fontSize: "15px",
                    }}
                  >
                    {step.icon}
                  </div>

                  <span
                    style={{
                      color: "#46627F",
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
                    color: "#F2F6FC",
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
                    color: "#8196B0",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "15px",
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
    </section>
  );
}