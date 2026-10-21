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
        padding: "140px 5%",
        overflow: "hidden",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(47,128,255,0.10),transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1120px,100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "90px",
          alignItems: "center",
        }}
      >
        <div
          className="story-visual"
          style={{
            position: "relative",
            minHeight: "470px",
            border: "1px solid rgba(120,160,210,0.18)",
            borderRadius: "15px",
            overflow: "hidden",
            background: "linear-gradient(145deg,#0D203A,#071326)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "40px",
              width: "180px",
              height: "180px",
              border: "1px solid rgba(68,158,255,0.25)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "65px",
              left: "65px",
              width: "130px",
              height: "130px",
              border: "1px solid rgba(68,158,255,0.4)",
              borderRadius: "50%",
              boxShadow: "0 0 50px rgba(47,128,255,0.12)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: "145px",
              height: "145px",
              display: "grid",
              placeItems: "center",
              border: "1px solid rgba(79,169,255,0.65)",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(47,128,255,0.16),#08172C 70%)",
              color: "#57B2FF",
              fontSize: "42px",
              boxShadow: "0 0 55px rgba(47,128,255,0.22)",
            }}
          >
            {"</>"}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "38px",
              left: "38px",
              right: "38px",
              padding: "20px",
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
                fontSize: "24px",
                fontWeight: 400,
              }}
            >
              App Developer
            </h3>

            <p
              style={{
                margin: 0,
                color: "#8197B0",
                fontSize: "10px",
                fontFamily: "Arial,sans-serif",
              }}
            >
              Mobile · Web · Backend · Cloud
            </p>
          </div>
        </div>

        <div className="story-content">
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
              }}
            />
            MY STORY
          </span>

          <h2
            style={{
              margin: "18px 0 25px",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,5vw,43px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            Building with 
            <span
              style={{
                color: "#4DA3FF",
              }}
            > 
               purpose.
            </span>
          </h2>

          <p
            style={{
              margin: "0 0 18px",
              color: "#8FA2BC",
              fontSize: "13px",
              lineHeight: 1.9,
              fontFamily: "Arial,sans-serif",
            }}
          >
            I&apos;m an App Developer focused on creating modern digital
            products that are useful, scalable and easy to use.
          </p>

          <p
            style={{
              margin: "0 0 18px",
              color: "#8FA2BC",
              fontSize: "13px",
              lineHeight: 1.9,
              fontFamily: "Arial,sans-serif",
            }}
          >
            My work combines mobile development, web technologies, backend
            architecture and cloud services to turn ideas into reliable
            products.
          </p>

          <p
            style={{
              margin: "0 0 30px",
              color: "#8FA2BC",
              fontSize: "13px",
              lineHeight: 1.9,
              fontFamily: "Arial,sans-serif",
            }}
          >
            I care about clean architecture, thoughtful user experiences and
            building software that continues to perform as a product grows.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {["Flutter", "Dart", "Firebase", "Next.js", "Node.js", "APIs"].map(
              (skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid rgba(68,153,235,0.22)",
                    borderRadius: "5px",
                    color: "#7195BA",
                    background: "rgba(35,110,190,0.06)",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}