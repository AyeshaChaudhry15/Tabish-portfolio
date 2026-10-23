"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MyStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-content", {
        opacity: 0,
        x: -45,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".story-visual", {
        opacity: 0,
        x: 45,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        padding: "clamp(80px,10vw,140px) clamp(18px,5%,70px)",
        overflow: "hidden",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-150px",
          width: "clamp(280px,40vw,500px)",
          height: "clamp(280px,40vw,500px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(47,128,255,0.10),transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1120px,100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1.05fr)",
          gap: "clamp(40px,7vw,90px)",
          alignItems: "center",
        }}
      >
        {/* Visual */}
        <div
          className="story-visual"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "clamp(360px,42vw,470px)",
            border: "1px solid rgba(120,160,210,0.18)",
            borderRadius: "15px",
            overflow: "hidden",
            background: "linear-gradient(145deg,#0D203A,#071326)",
          }}
        >
          {/* Outer Orbit */}
          <div
            style={{
              position: "absolute",
              top: "clamp(25px,4vw,40px)",
              left: "clamp(25px,4vw,40px)",
              width: "clamp(130px,16vw,180px)",
              height: "clamp(130px,16vw,180px)",
              border: "1px solid rgba(68,158,255,0.25)",
              borderRadius: "50%",
            }}
          />

          {/* Inner Orbit */}
          <div
            style={{
              position: "absolute",
              top: "clamp(45px,5vw,65px)",
              left: "clamp(45px,5vw,65px)",
              width: "clamp(95px,12vw,130px)",
              height: "clamp(95px,12vw,130px)",
              border: "1px solid rgba(68,158,255,0.4)",
              borderRadius: "50%",
              boxShadow: "0 0 50px rgba(47,128,255,0.12)",
            }}
          />

          {/* Center Developer Icon */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "45%",
              transform: "translate(-50%,-50%)",
              width: "clamp(105px,13vw,145px)",
              height: "clamp(105px,13vw,145px)",
              display: "grid",
              placeItems: "center",
              border: "1px solid rgba(79,169,255,0.65)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(47,128,255,0.16),#08172C 70%)",
              color: "#57B2FF",
              fontSize: "clamp(30px,4vw,42px)",
              boxShadow: "0 0 55px rgba(47,128,255,0.22)",
            }}
          >
            {"</>"}
          </div>

          {/* Developer Card */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(20px,4vw,38px)",
              left: "clamp(20px,4vw,38px)",
              right: "clamp(20px,4vw,38px)",
              padding: "clamp(15px,2.5vw,20px)",
              border: "1px solid rgba(120,160,210,0.16)",
              borderRadius: "10px",
              background: "rgba(5,16,30,0.75)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                color: "#4DA3FF",
                fontSize: "9px",
                letterSpacing: "0.18em",
                fontFamily: "monospace",
              }}
            >
              DEVELOPER
            </span>

            <h3
              style={{
                margin: "8px 0 5px",
                color: "#F4F7FC",
                fontFamily: "Georgia,serif",
                fontSize: "clamp(20px,2.5vw,24px)",
                fontWeight: 400,
              }}
            >
              App Developer
            </h3>

            <p
              style={{
                margin: 0,
                color: "#8197B0",
                fontSize: "clamp(9px,1.2vw,10px)",
                fontFamily: "Arial,sans-serif",
              }}
            >
              Mobile · Web · Backend · Cloud
            </p>
          </div>
        </div>

        {/* Story Content */}
        <div
          className="story-content"
          style={{
            width: "100%",
            minWidth: 0,
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#4DA3FF",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              fontFamily: "Arial,sans-serif",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#3D91FF",
                flexShrink: 0,
              }}
            />

            MY STORY
          </span>

          {/* Heading */}
          <h2
            style={{
              margin: "18px 0 25px",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(36px,5vw,52px)",
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
            }}
          >
            Building with{" "}
            <span
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              purpose.
            </span>
          </h2>

          {/* Paragraph 1 */}
          <p
            style={{
              margin: "0 0 18px",
              color: "#8FA2BC",
              fontSize: "clamp(12px,1.3vw,13px)",
              lineHeight: 1.9,
              fontFamily: "Arial,sans-serif",
            }}
          >
            I&apos;m an App Developer focused on creating modern digital
            products that are useful, scalable and easy to use.
          </p>

          {/* Paragraph 2 */}
          <p
            style={{
              margin: "0 0 18px",
              color: "#8FA2BC",
              fontSize: "clamp(12px,1.3vw,13px)",
              lineHeight: 1.9,
              fontFamily: "Arial,sans-serif",
            }}
          >
            My work combines mobile development, web technologies, backend
            architecture and cloud services to turn ideas into reliable
            products.
          </p>

          {/* Paragraph 3 */}
          <p
            style={{
              margin: "0 0 30px",
              color: "#8FA2BC",
              fontSize: "clamp(12px,1.3vw,13px)",
              lineHeight: 1.9,
              fontFamily: "Arial,sans-serif",
            }}
          >
            I care about clean architecture, thoughtful user experiences and
            building software that continues to perform as a product grows.
          </p>

          {/* Skills */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {[
              "Flutter",
              "Dart",
              "Firebase",
              "Next.js",
              "Node.js",
              "APIs",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "8px 12px",
                  border: "1px solid rgba(68,153,235,0.22)",
                  borderRadius: "5px",
                  color: "#7195BA",
                  background: "rgba(35,110,190,0.06)",
                  fontFamily: "monospace",
                  fontSize: "clamp(10px,1.2vw,12px)",
                  transition: "all .3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(68,153,235,0.5)";
                  e.currentTarget.style.color = "#63B3FF";
                  e.currentTarget.style.background =
                    "rgba(35,110,190,0.10)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(47,128,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(68,153,235,0.22)";
                  e.currentTarget.style.color = "#7195BA";
                  e.currentTarget.style.background =
                    "rgba(35,110,190,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          #story > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 55px !important;
          }

          .story-visual {
            max-width: 650px;
            margin: 0 auto;
          }

          .story-content {
            max-width: 700px;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          #story {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }

          #story > div:nth-child(2) {
            gap: 45px !important;
          }

          .story-visual {
            min-height: 390px !important;
            border-radius: 12px !important;
          }

          .story-content h2 {
            margin-top: 15px !important;
            margin-bottom: 20px !important;
          }
        }

        @media (max-width: 400px) {
          .story-visual {
            min-height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
}