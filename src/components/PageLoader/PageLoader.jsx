import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./PageLoader.css";

/**
 * PageLoader Component
 * Elegant Japanese-inspired loading animation
 * Characters emerge from fog/darkness like the scroll reveal effect
 */
const PageLoader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const charsRef = useRef([]);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  // Japanese characters: ジョルジア (Jorjia/Georgia)
  const japaneseChars = ["ジ", "ョ", "ル", "ジ", "ア"];
  const romaji = "GEORGIA";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          onComplete?.();
        },
      });

      // Initial setup - characters hidden in fog (blur + darkness)
      gsap.set(charsRef.current, {
        opacity: 0,
        y: 80,
        filter: "blur(20px)",
        scale: 0.8,
      });

      gsap.set(".romaji-char", {
        opacity: 0,
        y: 20,
      });

      // Set loader visible with fog overlay
      gsap.set(loaderRef.current, {
        display: "flex",
        opacity: 1,
      });

      gsap.set(overlayRef.current, {
        opacity: 1,
      });

      // PHASE 1: Characters emerge from fog (blur clears)
      tl.to(charsRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      });

      // PHASE 2: Romaji text reveals
      tl.to(
        ".romaji-char",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // PHASE 3: Hold with subtle breathing effect
      tl.to(
        charsRef.current,
        {
          scale: 1.02,
          duration: 1.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        "+=0.3",
      );

      // PHASE 4: Exit - fade to fog/darkness
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          filter: "blur(15px)",
          scale: 0.95,
          duration: 0.8,
          ease: "power2.in",
        },
        "+=0.5",
      );

      // PHASE 5: Loader slides up revealing content
      tl.to(
        loaderRef.current,
        {
          y: "-100%",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.3",
      );

      // Ensure loader is hidden
      tl.set(loaderRef.current, {
        display: "none",
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div ref={loaderRef} className="page-loader">
      {/* Background effects */}
      <div className="page-loader-bg" />
      <div ref={overlayRef} className="page-loader-fog" />

      {/* Main content */}
      <div ref={contentRef} className="page-loader-content">
        <div className="japanese-chars">
          {japaneseChars.map((char, index) => (
            <span
              key={index}
              ref={(el) => {
                charsRef.current[index] = el;
              }}
              className="japanese-char"
            >
              {char}
            </span>
          ))}
        </div>

        <div className="romaji-text">
          {romaji.split("").map((char, index) => (
            <span key={index} className="romaji-char">
              {char}
            </span>
          ))}
        </div>

        <div className="loader-progress">
          <div className="loader-bar" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="loader-decoration loader-decoration--1" />
      <div className="loader-decoration loader-decoration--2" />
      <div className="loader-decoration loader-decoration--3" />
    </div>
  );
};

export default PageLoader;
