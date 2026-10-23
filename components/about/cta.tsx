"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-box", {
        opacity: 0,
        y: 45,
        scale: 0.97,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".cta-glow", {
        opacity: 0.8,
        scale: 1.15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        padding: "clamp(60px, 8vw, 80px) clamp(16px, 5vw, 5%) clamp(80px, 10vw, 120px)",
        overflow: "hidden",
        background: "#071225",
      }}
    >
      <div
        className="cta-box"
        style={{
          position: "relative",
          width: "min(1120px, 100%)",
          minHeight: "220px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(25px, 4vw, 40px)",
          padding: "clamp(28px, 4vw, 45px) clamp(22px, 4.5vw, 50px)",
          overflow: "hidden",
          border: "1px solid rgba(94,157,220,.2)",
          borderRadius: "15px",
          background:
            "linear-gradient(110deg,rgba(12,29,51,.96),rgba(7,19,36,.98))",
          boxSizing: "border-box",
        }}
      >
        <div
          className="cta-glow"
          style={{
            position: "absolute",
            left: "25%",
            top: "-180px",
            width: "min(450px, 70vw)",
            height: "min(450px, 70vw)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(47,128,255,.12),transparent 68%)",
            filter: "blur(15px)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "700px",
            width: "100%",
            minWidth: 0,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              color: "#4DA3FF",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              fontFamily: "Arial,sans-serif",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "1px",
                background: "#4DA3FF",
                flexShrink: 0,
              }}
            />

            LET&apos;S WORK TOGETHER
          </span>

          <h2
            style={{
              margin: "15px 0 0",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
            }}
          >
            Have an idea in mind?
            <br />

            <em
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Let&apos;s build it.
            </em>
          </h2>
        </div>

        {/* Button */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <Link
            href="/contact"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 10px 35px rgba(47,128,255,.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "18px",
              padding: "15px 21px",
              minHeight: "48px",
              borderRadius: "5px",
              background: "#2F80FF",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 700,
              fontFamily: "Arial,sans-serif",
              transition: "all .3s ease",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
          >
            Start a Conversation

            <span style={{ fontSize: "15px" }}>→</span>
          </Link>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          .cta-box {
            flex-direction: column;
            align-items: flex-start !important;
            justify-content: center !important;
          }

          .cta-box > div:last-child {
            width: 100%;
          }

          .cta-box > div:last-child a {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .cta-box {
            min-height: auto !important;
            gap: 28px !important;
            border-radius: 12px !important;
          }

          .cta-box h2 {
            font-size: clamp(25px, 8vw, 32px) !important;
            line-height: 1.12 !important;
          }

          .cta-box > div:last-child a {
            padding: 14px 18px !important;
            font-size: 10px !important;
          }

          .cta-glow {
            left: 5% !important;
            top: -100px !important;
          }
        }

        @media (max-width: 400px) {
          .cta-box {
            padding: 25px 18px !important;
          }

          .cta-box h2 {
            font-size: 25px !important;
          }

          .cta-box > div:last-child a {
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}