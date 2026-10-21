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
        padding: "80px 5% 120px",
        overflow: "hidden",
        background: "#071225",
      }}
    >
      <div
        className="cta-box"
        style={{
          position: "relative",
          width: "min(1120px,100%)",
          minHeight: "220px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          padding: "45px 50px",
          overflow: "hidden",
          border: "1px solid rgba(94,157,220,.2)",
          borderRadius: "15px",
          background:
            "linear-gradient(110deg,rgba(12,29,51,.96),rgba(7,19,36,.98))",
        }}
      >
        <div
          className="cta-glow"
          style={{
            position: "absolute",
            left: "25%",
            top: "-180px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(47,128,255,.12),transparent 68%)",
            filter: "blur(15px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "700px",
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
            }}
          >
            <span
              style={{
                width: "22px",
                height: "1px",
                background: "#4DA3FF",
              }}
            />
            LET&apos;S WORK TOGETHER
          </span>

          <h2
            style={{
              margin: "15px 0 0",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(20px,3.5vw,40px)",
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
              gap: "18px",
              padding: "15px 21px",
              borderRadius: "5px",
              background: "#2F80FF",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 700,
              fontFamily: "Arial,sans-serif",
              transition: "all .3s ease",
            }}
          >
            Start a Conversation
            <span style={{ fontSize: "15px" }}>→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
