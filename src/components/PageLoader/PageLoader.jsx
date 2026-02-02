import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./PageLoader.css";

/**
 * PageLoader Component
 * Displays Japanese characters animation before revealing the website
 */
const PageLoader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const charsRef = useRef([]);

  // Japanese characters to animate
  const japaneseChars = ["ジ", "ョ", "ル", "ジ", "ア"];
  const romaji = "JORJIA"; // Transliteration

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          onComplete?.();
        },
      });

      // Initial setup - hide all chars
      gsap.set(charsRef.current, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        scale: 0.5,
      });

      // Set loader visible
      gsap.set(loaderRef.current, {
        display: "flex",
        opacity: 1,
      });

      // Animate each character in
      tl.to(charsRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.7)",
      });

      // Hold for a moment
      tl.to({}, { duration: 0.8 });

      // Subtle pulse effect
      tl.to(charsRef.current, {
        scale: 1.05,
        duration: 0.3,
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      // Hold again
      tl.to({}, { duration: 0.4 });

      // Exit animation - characters scatter
      tl.to(charsRef.current, {
        opacity: 0,
        y: -30,
        rotateX: 45,
        scale: 1.2,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.in",
      });

      // Fade out loader
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });

      // Slide up loader
      tl.fromTo(
        loaderRef.current,
        { y: 0 },
        {
          y: "-100%",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.4",
      );
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div ref={loaderRef} className="page-loader">
      <div className="page-loader-content">
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
            <span
              key={index}
              className="romaji-char"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
