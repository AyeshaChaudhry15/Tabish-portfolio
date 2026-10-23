"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        ".hero-eyebrow",
        ".hero-title",
        ".hero-description",
        ".hero-buttons",
        ".hero-status",
        ".hero-visual",
      ];

      gsap.set(elements, {
        opacity: 1,
        clearProps: "transform",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".hero-status",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.94,
            x: 30,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      gsap.to(".hero-orbit-one", {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-orbit-two", {
        rotate: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-glow", {
        scale: 1.15,
        opacity: 0.75,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "100px 5% 80px",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      {/* Background Glow */}
      <div
        className="hero-glow"
        style={{
          position: "absolute",
          top: "-150px",
          right: "8%",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(47,128,255,.14),transparent 68%)",
          filter: "blur(25px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        className="hero-container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1180px,100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="hero-content">
          {/* Eyebrow */}
          <span
            className="hero-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#4DA3FF",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.25em",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "1px",
                background: "#3E95FF",
              }}
            />

            FULL STACK APP DEVELOPER
          </span>

          {/* Heading */}
          <h1
            className="hero-title"
            style={{
              margin: "22px 0 25px",
              maxWidth: "700px",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,6.3vw,55px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-0.06em",
            }}
          >
            Turning Ideas{" "}
            <span
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Into Digital
            </span>
            <br />
            Experiences.
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              maxWidth: "610px",
              margin: "0 0 30px",
              color: "#8FA2BC",
              fontFamily: "Arial,sans-serif",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            I&apos;m an App Developer crafting beautiful, scalable and
            user-friendly digital applications with modern technologies, clean
            architecture and thoughtful user experiences.
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "15px 22px",
                borderRadius: "6px",
                background: "#2F80FF",
                color: "#FFFFFF",
                textDecoration: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(47,128,255,.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View My Work
              <span style={{ fontSize: "17px" }}>→</span>
            </Link>

            <Link
              href="#journey"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "14px 22px",
                border: "1px solid rgba(108,160,215,.25)",
                borderRadius: "6px",
                background: "rgba(14,32,55,.45)",
                color: "#DCE7F5",
                textDecoration: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(77,163,255,.65)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(47,128,255,.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(108,160,215,.25)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View My Journey
              <span style={{ fontSize: "17px" }}>→</span>
            </Link>
          </div>

          <div
            className="hero-status"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "28px",
              color: "#8297B1",
              fontFamily: "Arial,sans-serif",
              fontSize: "11px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                flexShrink: 0,
                borderRadius: "50%",
                background: "#27D98B",
                boxShadow: "0 0 12px rgba(39,217,139,.55)",
              }}
            />

            Building modern digital products
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="hero-visual"
          style={{
            position: "relative",
            minHeight: "500px",
            display: "grid",
            placeItems: "center",
          }}
        >
          {/* Orbit One */}
          <div
            className="hero-orbit-one"
            style={{
              position: "absolute",
              width: "390px",
              height: "390px",
              border: "1px solid rgba(49,143,255,.3)",
              borderRadius: "50%",
              boxShadow: "0 0 50px rgba(47,128,255,.06)",
            }}
          />

          {/* Orbit Two */}
          <div
            className="hero-orbit-two"
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              border: "1px solid rgba(76,166,255,.2)",
              borderRadius: "50%",
            }}
          />

          {/* Main Developer Card */}
          <div
            className="hero-developer-card"
            style={{
              position: "relative",
              zIndex: 3,
              width: "270px",
              height: "330px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(79,160,239,.28)",
              borderRadius: "18px",
              background:
                "linear-gradient(145deg,rgba(19,43,72,.92),rgba(6,20,37,.96))",
              boxShadow:
                "0 30px 80px rgba(0,0,0,.3),0 0 45px rgba(47,128,255,.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                display: "grid",
                placeItems: "center",
                marginBottom: "25px",
                border: "1px solid rgba(74,164,255,.55)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(47,128,255,.2),rgba(6,20,38,.95) 70%)",
                color: "#59B5FF",
                fontFamily: "monospace",
                fontSize: "30px",
                boxShadow:
                  "0 0 45px rgba(47,128,255,.2),inset 0 0 25px rgba(47,128,255,.08)",
              }}
            >
              {"</>"}
            </div>

            <span
              style={{
                color: "#4DA3FF",
                fontSize: "9px",
                letterSpacing: ".2em",
                fontFamily: "monospace",
              }}
            >
              DEVELOPER
            </span>

            <h3
              style={{
                margin: "10px 0 6px",
                color: "#F4F7FC",
                fontFamily: "Georgia,serif",
                fontSize: "23px",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              App Developer
            </h3>

            <p
              style={{
                margin: 0,
                color: "#8197B0",
                fontFamily: "Arial,sans-serif",
                fontSize: "13px",
                textAlign: "center",
              }}
            >
              Flutter · Next.js · Node.js
            </p>
          </div>

          {/* Mobile Badge */}
          <div
            className="hero-badge-mobile"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              padding: "13px 16px",
              border: "1px solid rgba(75,160,255,.25)",
              borderRadius: "8px",
              background: "rgba(8,24,43,.85)",
              color: "#65B6FF",
              fontFamily: "monospace",
              fontSize: "12px",
              boxShadow: "0 0 25px rgba(47,128,255,.08)",
              whiteSpace: "nowrap",
            }}
          >
            {"<Mobile />"}
          </div>

          {/* API Badge */}
          <div
            className="hero-badge-api"
            style={{
              position: "absolute",
              bottom: "35px",
              left: "5px",
              padding: "13px 16px",
              border: "1px solid rgba(75,160,255,.25)",
              borderRadius: "8px",
              background: "rgba(8,24,43,.85)",
              color: "#65B6FF",
              fontFamily: "monospace",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            {"API + Cloud"}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Large Desktop */
        @media (min-width: 1440px) {
          .hero-container {
            gap: 80px !important;
          }
        }

        /* Laptop / Small Desktop */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr 0.9fr !important;
            gap: 35px !important;
          }

          .hero-title {
            font-size: clamp(40px, 5vw, 50px) !important;
          }

          .hero-visual {
            min-height: 450px !important;
          }

          .hero-orbit-one {
            width: 340px !important;
            height: 340px !important;
          }

          .hero-orbit-two {
            width: 280px !important;
            height: 280px !important;
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .hero-section {
            min-height: auto !important;
          }

          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 65px !important;
            max-width: 760px !important;
          }

          .hero-content {
            text-align: center;
            margin: 0 auto;
            width: 100%;
          }

          .hero-eyebrow {
            justify-content: center;
          }

          .hero-title {
            margin-left: auto !important;
            margin-right: auto !important;
            font-size: clamp(42px, 7vw, 58px) !important;
          }

          .hero-description {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-buttons {
            justify-content: center !important;
          }

          .hero-status {
            justify-content: center !important;
          }

          .hero-visual {
            width: 100%;
            min-height: 480px !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .hero-section {
            min-height: auto !important;
          }

          .hero-container {
            gap: 45px !important;
          }

          .hero-eyebrow {
            gap: 7px !important;
            font-size: 9px !important;
            letter-spacing: 0.18em !important;
          }

          .hero-eyebrow span {
            width: 20px !important;
          }

          .hero-title {
            margin-top: 18px !important;
            margin-bottom: 20px !important;
            font-size: clamp(34px, 10vw, 45px) !important;
            line-height: 1.02 !important;
            letter-spacing: -0.045em !important;
          }

          .hero-description {
            margin-bottom: 25px !important;
            font-size: 13px !important;
            line-height: 1.8 !important;
          }

          .hero-buttons {
            flex-direction: column !important;
            width: 100%;
            gap: 10px !important;
          }

          .hero-buttons a {
            width: 100%;
            padding: 14px 18px !important;
          }

          .hero-status {
            margin-top: 22px !important;
            font-size: 10px !important;
          }

          .hero-visual {
            min-height: 390px !important;
          }

          .hero-orbit-one {
            width: 280px !important;
            height: 280px !important;
          }

          .hero-orbit-two {
            width: 225px !important;
            height: 225px !important;
          }

          .hero-developer-card {
            width: 210px !important;
            height: 275px !important;
            border-radius: 15px !important;
          }

          .hero-developer-card > div {
            width: 90px !important;
            height: 90px !important;
            margin-bottom: 18px !important;
            font-size: 24px !important;
          }

          .hero-developer-card h3 {
            font-size: 20px !important;
          }

          .hero-developer-card p {
            font-size: 11px !important;
          }

          .hero-badge-mobile {
            top: 0 !important;
            right: 0 !important;
            padding: 9px 11px !important;
            font-size: 9px !important;
          }

          .hero-badge-api {
            bottom: 5px !important;
            left: 0 !important;
            padding: 9px 11px !important;
            font-size: 9px !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 420px) {
          .hero-container {
            gap: 35px !important;
          }

          .hero-title {
            font-size: 32px !important;
          }

          .hero-description {
            font-size: 12px !important;
            line-height: 1.75 !important;
          }

          .hero-visual {
            min-height: 340px !important;
          }

          .hero-orbit-one {
            width: 235px !important;
            height: 235px !important;
          }

          .hero-orbit-two {
            width: 190px !important;
            height: 190px !important;
          }

          .hero-developer-card {
            width: 180px !important;
            height: 240px !important;
          }

          .hero-developer-card > div {
            width: 75px !important;
            height: 75px !important;
            margin-bottom: 14px !important;
            font-size: 20px !important;
          }

          .hero-developer-card h3 {
            font-size: 17px !important;
          }

          .hero-developer-card p {
            font-size: 9px !important;
          }

          .hero-badge-mobile,
          .hero-badge-api {
            padding: 7px 9px !important;
            font-size: 8px !important;
          }
        }

        /* Very Small Phones */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 29px !important;
          }

          .hero-description {
            font-size: 11px !important;
          }

          .hero-visual {
            min-height: 300px !important;
          }

          .hero-orbit-one {
            width: 205px !important;
            height: 205px !important;
          }

          .hero-orbit-two {
            width: 165px !important;
            height: 165px !important;
          }

          .hero-developer-card {
            width: 165px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}