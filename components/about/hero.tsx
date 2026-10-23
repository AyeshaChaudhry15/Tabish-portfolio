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
        padding: "20px 5% 80px",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-180px",
          left: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(47,128,255,.12), transparent 68%)",
          filter: "blur(25px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-150px",
          bottom: "-180px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(47,128,255,.08), transparent 68%)",
          filter: "blur(25px)",
          pointerEvents: "none",
        }}
      />

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

          /* Hero normal position */
          transform: "translateY(0)",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "22px",
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

            FULL STACK APP DEVELOPER
          </div>

          <h1
            className="hero-title"
            style={{
              margin: 0,
              maxWidth: "700px",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(45px,7vw,55px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-.06em",
            }}
          >
            Turning Ideas Into Digital{" "}
            <em
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Experiences.
            </em>
          </h1>

          <p
            className="hero-description"
            style={{
              maxWidth: "620px",
              margin: "28px 0 0",
              color: "#8298B2",
              fontFamily: "Arial,sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            I&apos;m an App Developer crafting beautiful, scalable and
            user-friendly digital applications with modern technologies, clean
            architecture and thoughtful user experiences.
          </p>

          <div
            className="hero-buttons"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 20px",
                borderRadius: "5px",
                background: "#2F80FF",
                color: "#FFFFFF",
                textDecoration: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                transition: "all .3s ease",
              }}
            >
              View My Work
              <span style={{ fontSize: "15px" }}>→</span>
            </Link>

            <Link
              href="/experience"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 20px",
                border: "1px solid rgba(77,163,255,.3)",
                borderRadius: "5px",
                background: "rgba(47,128,255,.04)",
                color: "#8EABC8",
                textDecoration: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                transition: "all .3s ease",
              }}
            >
              View My Journey
              <span style={{ fontSize: "14px" }}>↗</span>
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="hero-card"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "460px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-70px",
              right: "-70px",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(47,128,255,.13),transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              padding: "30px",
              border: "1px solid rgba(120,160,210,.18)",
              borderRadius: "14px",
              background:
                "linear-gradient(145deg,rgba(13,31,54,.95),rgba(7,19,35,.98))",
              boxShadow: "0 25px 80px rgba(0,0,0,.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "45px",
              }}
            >
              <span
                style={{
                  color: "#45617F",
                  fontFamily: "monospace",
                  fontSize: "9px",
                }}
              >
                BUILDING MODERN DIGITAL PRODUCTS
              </span>

              <span
                style={{
                  color: "#4DA3FF",
                  fontSize: "13px",
                }}
              >
                ↗
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid rgba(77,163,255,.16)",
                  borderRadius: "9px",
                  background: "rgba(47,128,255,.035)",
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
                  <span
                    style={{
                      color: "#4DA3FF",
                      fontFamily: "monospace",
                      fontSize: "20px",
                    }}
                  >
                    {"</>"}
                  </span>

                  <span
                    style={{
                      color: "#45617F",
                      fontFamily: "monospace",
                      fontSize: "8px",
                    }}
                  >
                    DEVELOPER
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 7px",
                    color: "#F1F6FC",
                    fontFamily: "Georgia,serif",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  App Developer
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#7189A5",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "11px",
                  }}
                >
                  Flutter · Next.js · Node.js
                </p>
              </div>

              <div
                style={{
                  padding: "20px",
                  border: "1px solid rgba(77,163,255,.16)",
                  borderRadius: "9px",
                  background: "rgba(47,128,255,.025)",
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
                  <span
                    style={{
                      color: "#4DA3FF",
                      fontFamily: "monospace",
                      fontSize: "20px",
                    }}
                  >
                    {"</>"}
                  </span>

                  <span
                    style={{
                      color: "#45617F",
                      fontFamily: "monospace",
                      fontSize: "8px",
                    }}
                  >
                    DEVELOPER
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 7px",
                    color: "#F1F6FC",
                    fontFamily: "Georgia,serif",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  App Developer
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#7189A5",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "11px",
                  }}
                >
                  Mobile · Web · Backend · Cloud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            min-height: auto !important;
            padding: 100px 6% 80px !important;
          }

          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
            transform: translateY(0) !important;
          }

          .hero-card {
            max-width: 600px !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 90px 5% 70px !important;
          }

          .hero-container {
            gap: 40px !important;
            transform: translateY(0) !important;
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
            justify-content: space-between !important;
          }

          .hero-card > div {
            padding: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}