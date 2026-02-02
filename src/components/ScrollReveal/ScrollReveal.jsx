import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal Component
 * Wraps content and applies blur/darkness reveal animation on scroll
 *
 * @param {ReactNode} children - Content to be revealed
 * @param {string} className - Additional CSS classes
 * @param {number} blurStart - Starting blur amount in px (default: 15)
 * @param {number} blurEnd - Ending blur amount in px (default: 0)
 * @param {number} opacityStart - Starting opacity (default: 0.6)
 * @param {number} opacityEnd - Ending opacity (default: 1)
 * @param {number} brightnessStart - Starting brightness (default: 0.7)
 * @param {number} brightnessEnd - Ending brightness (default: 1)
 * @param {string} start - ScrollTrigger start position (default: "top 85%")
 * @param {string} end - ScrollTrigger end position (default: "top 30%")
 * @param {boolean} scrub - Enable scrub animation (default: true)
 * @param {number} stagger - Stagger delay for children (default: 0)
 */
const ScrollReveal = ({
  children,
  className = "",
  blurStart = 15,
  blurEnd = 0,
  opacityStart = 0.6,
  opacityEnd = 1,
  brightnessStart = 0.7,
  brightnessEnd = 1,
  start = "top 85%",
  end = "top 30%",
  scrub = true,
  stagger = 0,
  ...props
}) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container) return;

    // Store trigger instance for cleanup
    let trigger;

    // Initial state - blurred and darkened
    gsap.set(container, {
      filter: `blur(${blurStart}px)`,
      opacity: opacityStart,
    });

    if (overlay) {
      gsap.set(overlay, {
        opacity: 1,
      });
    }

    // Create scroll-linked animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: start,
        end: end,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : "play none none reverse",
        onRefresh: (self) => {
          trigger = self;
        },
      },
    });

    // Animate blur and opacity
    tl.to(container, {
      filter: `blur(${blurEnd}px)`,
      opacity: opacityEnd,
      duration: 1,
      ease: "none",
    });

    // Animate overlay fade out
    if (overlay) {
      tl.to(
        overlay,
        {
          opacity: 0,
          duration: 1,
          ease: "none",
        },
        0,
      );
    }

    // Stagger children if specified
    if (stagger > 0 && container.children.length > 1) {
      const children = container.querySelectorAll(".reveal-child");
      if (children.length > 0) {
        gsap.set(children, { opacity: 0, y: 30 });

        ScrollTrigger.batch(children, {
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: stagger,
              ease: "power2.out",
            });
          },
          start: "top 85%",
        });
      }
    }

    return () => {
      if (trigger) {
        trigger.kill();
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) {
          st.kill();
        }
      });
    };
  }, [
    blurStart,
    blurEnd,
    opacityStart,
    opacityEnd,
    start,
    end,
    scrub,
    stagger,
  ]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${className}`} {...props}>
      <div
        ref={overlayRef}
        className="scroll-reveal-overlay"
        aria-hidden="true"
      />
      <div className="scroll-reveal-content">{children}</div>
    </div>
  );
};

export default ScrollReveal;
