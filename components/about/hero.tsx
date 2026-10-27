"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 25,
        duration: 0.7,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-card",
          {
            opacity: 0,
            x: 45,
            duration: 0.9,
          },
          "-=0.7"
        );
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
        padding: "55px 5% 80px",
        background: "#06142D",
        color: "#FFFFFF",
      }}
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Main blue glow */}
      <div
        style={{
          position: "absolute",
          top: "-220px",
          left: "-160px",
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,112,255,.22), rgba(37,112,255,.08) 35%, transparent 70%)",
          filter: "blur(15px)",
          pointerEvents: "none",
        }}
      />

      {/* Right blue glow */}
      <div
        style={{
          position: "absolute",
          right: "-220px",
          bottom: "-240px",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,112,255,.18), rgba(37,112,255,.05) 40%, transparent 72%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "25%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(48,128,255,.10), transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(120,170,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,170,255,.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.9), transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.9), transparent 90%)",
        }}
      />

      {/* Decorative blue arc */}
      <div
        style={{
          position: "absolute",
          top: "-180px",
          left: "-100px",
          width: "430px",
          height: "430px",
          border: "1px solid rgba(57,139,255,.18)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-130px",
          left: "-50px",
          width: "330px",
          height: "330px",
          border: "1px solid rgba(57,139,255,.12)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Decorative dots */}
      <div
        style={{
          position: "absolute",
          right: "4%",
          top: "22%",
          width: "70px",
          height: "100px",
          opacity: 0.45,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(99,168,255,.65) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "3%",
          bottom: "10%",
          width: "70px",
          height: "80px",
          opacity: 0.35,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(99,168,255,.65) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="hero-container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1180px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: "72px",
          alignItems: "center",
          transform: "translateY(0)",
        }}
      >
        {/* ================= LEFT CONTENT ================= */}

        <div>
          {/* Badge */}
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "25px",
              color: "#3F9BFF",
              fontFamily: "Arial,sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: ".25em",
            }}
          >
            <span
              style={{
                width: "38px",
                height: "2px",
                background: "#328BFF",
                display: "inline-block",
              }}
            />

            FULL STACK APP DEVELOPER
          </div>

          {/* Heading */}
          <h1
            className="hero-title"
            style={{
              margin: 0,
              maxWidth: "760px",
              color: "#FFFFFF",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(46px,6.3vw,72px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-.055em",
            }}
          >
            Turning Ideas Into Digital{" "}
            <em
              style={{
                color: "#328BFF",
                fontStyle: "italic",
              }}
            >
              Experiences.
            </em>
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              maxWidth: "680px",
              margin: "30px 0 0",
              color: "#B8C9DE",
              fontFamily: "Arial,sans-serif",
              fontSize: "15px",
              lineHeight: 1.85,
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
              alignItems: "center",
              gap: "14px",
              marginTop: "34px",
            }}
          >
            {/* Primary */}
            <Link
              href="/projects"
              className="hero-btn hero-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "18px",
                padding: "15px 24px",
                minWidth: "175px",
                borderRadius: "7px",
                background: "#2F82FF",
                color: "#FFFFFF",
                border: "1px solid #2F82FF",
                textDecoration: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                transition: "all .3s ease",
                boxShadow: "0 12px 35px rgba(47,130,255,.18)",
              }}
            >
              View My Work
              <span
                style={{
                  fontSize: "18px",
                  lineHeight: 1,
                }}
              >
                →
              </span>
            </Link>

            {/* Secondary */}
            <Link
              href="#journey"
              className="hero-btn hero-btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "15px 24px",
                minWidth: "175px",
                border: "1px solid rgba(255,255,255,.45)",
                borderRadius: "7px",
                background: "rgba(255,255,255,.025)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                transition: "all .3s ease",
              }}
            >
              View My Journey
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: 1,
                }}
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}

        <div
          className="hero-card"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {/* Card Glow */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(47,130,255,.22),transparent 70%)",
              filter: "blur(25px)",
              pointerEvents: "none",
            }}
          />

          {/* WHITE OUTER CARD */}
          <div
            style={{
              position: "relative",
              padding: "32px",
              border: "1px solid rgba(197,218,246,.8)",
              borderRadius: "18px",
              background: "#FFFFFF",
              boxShadow:
                "0 35px 100px rgba(0,15,45,.30), 0 0 50px rgba(47,130,255,.08)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
            >
              <div>
                <span
                  style={{
                    color: "#1A3558",
                    fontFamily: "monospace",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: ".03em",
                  }}
                >
                  BUILDING MODERN DIGITAL PRODUCTS
                </span>

                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    marginTop: "9px",
                    background: "#2F82FF",
                  }}
                />
              </div>

              <span
                style={{
                  color: "#0A2342",
                  fontSize: "17px",
                  fontWeight: 500,
                }}
              >
                ↗
              </span>
            </div>

            {/* Inner Cards */}
            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              {/* CARD 1 */}
              <div
                className="inner-developer-card"
                style={{
                  position: "relative",
                  padding: "25px",
                  border: "1px solid #CFE0F7",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(145deg,#F8FBFF 0%,#EEF5FD 100%)",
                  transition: "all .3s ease",
                  overflow: "hidden",
                }}
              >
                {/* Small blue glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-50px",
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle,rgba(47,130,255,.13),transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "28px",
                  }}
                >
                  {/* Icon Box */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      background: "#E1EDFC",
                      color: "#09264A",
                      fontFamily: "monospace",
                      fontSize: "19px",
                      fontWeight: 700,
                      border: "1px solid #C9DDF7",
                    }}
                  >
                    {"</>"}
                  </div>

                  {/* Label */}
                  <span
                    style={{
                      padding: "6px 10px",
                      borderRadius: "20px",
                      background: "#DCEBFC",
                      color: "#2878E8",
                      fontFamily: "monospace",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: ".05em",
                    }}
                  >
                    DEVELOPER
                  </span>
                </div>

                <h3
                  style={{
                    position: "relative",
                    zIndex: 1,
                    margin: "0 0 8px",
                    color: "#09264A",
                    fontFamily: "Georgia,serif",
                    fontSize: "22px",
                    fontWeight: 400,
                  }}
                >
                  App Developer
                </h3>

                <p
                  style={{
                    position: "relative",
                    zIndex: 1,
                    margin: 0,
                    color: "#55708F",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "11px",
                  }}
                >
                  Flutter · Next.js · Node.js
                </p>

                {/* Arrow */}
                <div
                  style={{
                    position: "absolute",
                    right: "22px",
                    bottom: "22px",
                    width: "34px",
                    height: "34px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "1px solid #D1E2F8",
                    color: "#2F82FF",
                    fontSize: "16px",
                  }}
                >
                  →
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className="inner-developer-card"
                style={{
                  position: "relative",
                  padding: "25px",
                  border: "1px solid #CFE0F7",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(145deg,#F8FBFF 0%,#EEF5FD 100%)",
                  transition: "all .3s ease",
                  overflow: "hidden",
                }}
              >
                {/* Small blue glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-70px",
                    right: "-40px",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle,rgba(47,130,255,.11),transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "28px",
                  }}
                >
                  {/* Icon Box */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      background: "#E1EDFC",
                      color: "#09264A",
                      fontFamily: "monospace",
                      fontSize: "19px",
                      fontWeight: 700,
                      border: "1px solid #C9DDF7",
                    }}
                  >
                    {"</>"}
                  </div>

                  {/* Label */}
                  <span
                    style={{
                      padding: "6px 10px",
                      borderRadius: "20px",
                      background: "#DCEBFC",
                      color: "#2878E8",
                      fontFamily: "monospace",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: ".05em",
                    }}
                  >
                    DEVELOPER
                  </span>
                </div>

                <h3
                  style={{
                    position: "relative",
                    zIndex: 1,
                    margin: "0 0 8px",
                    color: "#09264A",
                    fontFamily: "Georgia,serif",
                    fontSize: "22px",
                    fontWeight: 400,
                  }}
                >
                  App Developer
                </h3>

                <p
                  style={{
                    position: "relative",
                    zIndex: 1,
                    margin: 0,
                    color: "#55708F",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "11px",
                  }}
                >
                  Mobile · Web · Backend · Cloud
                </p>

                {/* Arrow */}
                <div
                  style={{
                    position: "absolute",
                    right: "22px",
                    bottom: "22px",
                    width: "34px",
                    height: "34px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "1px solid #D1E2F8",
                    color: "#2F82FF",
                    fontSize: "16px",
                  }}
                >
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RESPONSIVE ================= */}

      <style jsx>{`
        .hero-btn {
          cursor: pointer;
        }

        .hero-btn-primary:hover {
          background: #ffffff !important;
          color: #0a2342 !important;
          border-color: #ffffff !important;
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(47, 130, 255, 0.28);
        }

        .hero-btn-secondary:hover {
          background: #2f82ff !important;
          color: #ffffff !important;
          border-color: #2f82ff !important;
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(47, 130, 255, 0.25);
        }

        .inner-developer-card:hover {
          border-color: #79b3ff !important;
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(21, 76, 135, 0.1);
        }

        @media (max-width: 1100px) {
          .hero-container {
            gap: 50px !important;
          }

          .hero-title {
            font-size: clamp(44px, 6vw, 64px) !important;
          }
        }

        @media (max-width: 900px) {
          section {
            min-height: auto !important;
            padding: 100px 6% 80px !important;
          }

          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 65px !important;
            transform: translateY(0) !important;
          }

          .hero-card {
            max-width: 650px !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 90px 5% 70px !important;
          }

          .hero-container {
            gap: 50px !important;
          }

          .hero-title {
            font-size: clamp(42px, 13vw, 60px) !important;
          }

          .hero-description {
            font-size: 14px !important;
            line-height: 1.75 !important;
          }

          .hero-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .hero-buttons a {
            width: 100% !important;
            justify-content: space-between !important;
          }

          .hero-card > div {
            padding: 22px !important;
          }

          .inner-developer-card {
            padding: 20px !important;
          }
        }

        @media (max-width: 400px) {
          .hero-title {
            font-size: 40px !important;
          }

          .hero-card > div {
            padding: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}