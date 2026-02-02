import React, { useEffect, useRef, forwardRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ============================================
 * SCROLL REVEAL SYSTEM - Fog/Darkness Emergence
 * ============================================
 *
 * Creates a "fog emerging" effect where content is initially
 * blurred and darkened, then smoothly reveals as user scrolls.
 *
 * Variants:
 * 1. SectionReveal - Wraps entire sections
 * 2. ContentReveal - Wraps content within sections
 * 3. ImageReveal - Specialized for images with vignette
 * 4. TextReveal - Staggered text reveal
 */

// ============================================
// UTILITY HOOK: useBlurReveal
// ============================================
export const useBlurReveal = (options = {}) => {
  const ref = useRef(null);
  const triggerRef = useRef(null);

  const {
    blurStart = 20,
    blurEnd = 0,
    opacityStart = 0.5,
    opacityEnd = 1,
    brightnessStart = 0.6,
    brightnessEnd = 1,
    start = "top 85%",
    end = "top 35%",
    scrub = true,
    markers = false,
    onEnter,
    onLeave,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, {
        filter: "blur(0px)",
        opacity: 1,
      });
      return;
    }

    // Initial state - hidden in fog/darkness
    gsap.set(element, {
      filter: `blur(${blurStart}px) brightness(${brightnessStart})`,
      opacity: opacityStart,
      willChange: "filter, opacity",
    });

    // Create scroll-linked animation
    const animation = gsap.to(element, {
      filter: `blur(${blurEnd}px) brightness(${brightnessEnd})`,
      opacity: opacityEnd,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: scrub ? 1.5 : false,
        markers: markers,
        onEnter: onEnter,
        onLeave: onLeave,
        onRefresh: (self) => {
          triggerRef.current = self;
        },
      },
    });

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      animation.kill();
    };
  }, [
    blurStart,
    blurEnd,
    opacityStart,
    opacityEnd,
    brightnessStart,
    brightnessEnd,
    start,
    end,
    scrub,
    markers,
    onEnter,
    onLeave,
  ]);

  return ref;
};

// ============================================
// COMPONENT: SectionReveal
// Whole section reveal from fog/darkness
// ============================================
export const SectionReveal = forwardRef(
  (
    {
      children,
      className = "",
      blurStart = 25,
      blurEnd = 0,
      opacityStart = 0.4,
      opacityEnd = 1,
      brightnessStart = 0.5,
      brightnessEnd = 1,
      start = "top 90%",
      end = "top 40%",
      scrub = true,
      overlay = true,
      overlayColor = "rgba(0, 0, 0, 0.5)",
      fogGradient = true,
      ...props
    },
    forwardedRef,
  ) => {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      const overlayEl = overlayRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(container, { filter: "blur(0px)", opacity: 1 });
        if (overlayEl) gsap.set(overlayEl, { opacity: 0 });
        return;
      }

      // Initial fog/darkness state
      gsap.set(container, {
        filter: `blur(${blurStart}px) brightness(${brightnessStart})`,
        opacity: opacityStart,
        willChange: "filter, opacity",
        transform: "translateZ(0)",
      });

      if (overlayEl) {
        gsap.set(overlayEl, { opacity: 1 });
      }

      // Main reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: start,
          end: end,
          scrub: scrub ? 1.5 : false,
          onRefresh: (self) => {
            triggerRef.current = self;
          },
        },
      });

      // Blur and brightness reveal
      tl.to(
        container,
        {
          filter: `blur(${blurEnd}px) brightness(${brightnessEnd})`,
          opacity: opacityEnd,
          duration: 1,
          ease: "none",
        },
        0,
      );

      // Overlay fade out
      if (overlayEl) {
        tl.to(
          overlayEl,
          {
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          0,
        );
      }

      return () => {
        if (triggerRef.current) {
          triggerRef.current.kill();
        }
        tl.kill();
      };
    }, [
      blurStart,
      blurEnd,
      opacityStart,
      opacityEnd,
      brightnessStart,
      brightnessEnd,
      start,
      end,
      scrub,
      overlay,
    ]);

    // Combine refs
    const setRefs = useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    return (
      <div
        ref={setRefs}
        className={`scroll-reveal-section ${className}`}
        {...props}
      >
        {overlay && (
          <div
            ref={overlayRef}
            className={`scroll-reveal-overlay ${
              fogGradient ? "scroll-reveal-fog" : ""
            }`}
            style={{
              background: fogGradient
                ? undefined
                : `linear-gradient(to top, ${overlayColor} 0%, transparent 100%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div className="scroll-reveal-content">{children}</div>
      </div>
    );
  },
);

SectionReveal.displayName = "SectionReveal";

// ============================================
// COMPONENT: ContentReveal
// Internal content reveal with stagger
// ============================================
export const ContentReveal = forwardRef(
  (
    {
      children,
      className = "",
      blurStart = 15,
      blurEnd = 0,
      opacityStart = 0.6,
      opacityEnd = 1,
      yStart = 40,
      yEnd = 0,
      start = "top 80%",
      end = "top 50%",
      scrub = true,
      stagger = 0.1,
      childClassName = "reveal-child",
      ...props
    },
    forwardedRef,
  ) => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const children = container.querySelectorAll(`.${childClassName}`);

      if (prefersReducedMotion) {
        gsap.set(container, { filter: "blur(0px)", opacity: 1 });
        gsap.set(children, { opacity: 1, y: 0 });
        return;
      }

      // Container blur animation
      gsap.set(container, {
        filter: `blur(${blurStart}px)`,
        opacity: opacityStart,
        willChange: "filter, opacity",
      });

      // Children initial state
      gsap.set(children, {
        opacity: 0,
        y: yStart,
        willChange: "transform, opacity",
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: start,
          end: end,
          scrub: scrub ? 1 : false,
          onRefresh: (self) => {
            triggerRef.current = self;
          },
        },
      });

      // Container reveal
      tl.to(
        container,
        {
          filter: `blur(${blurEnd}px)`,
          opacity: opacityEnd,
          duration: 1,
          ease: "none",
        },
        0,
      );

      // Staggered children reveal
      tl.to(
        children,
        {
          opacity: 1,
          y: yEnd,
          duration: 0.5,
          stagger: stagger,
          ease: "none",
        },
        0.2,
      );

      return () => {
        if (triggerRef.current) {
          triggerRef.current.kill();
        }
        tl.kill();
      };
    }, [
      blurStart,
      blurEnd,
      opacityStart,
      opacityEnd,
      yStart,
      yEnd,
      start,
      end,
      scrub,
      stagger,
      childClassName,
    ]);

    const setRefs = useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    return (
      <div
        ref={setRefs}
        className={`scroll-reveal-content-wrapper ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ContentReveal.displayName = "ContentReveal";

// ============================================
// COMPONENT: ImageReveal
// Specialized for images with vignette effect
// ============================================
export const ImageReveal = forwardRef(
  (
    {
      src,
      alt,
      className = "",
      blurStart = 30,
      blurEnd = 0,
      scaleStart = 1.1,
      scaleEnd = 1,
      start = "top 85%",
      end = "top 40%",
      scrub = true,
      vignette = true,
      overlay = true,
      ...props
    },
    forwardedRef,
  ) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      const image = imageRef.current;
      const overlayEl = overlayRef.current;
      if (!container || !image) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(image, { filter: "blur(0px)", scale: 1 });
        if (overlayEl) gsap.set(overlayEl, { opacity: 0 });
        return;
      }

      // Initial fog state
      gsap.set(image, {
        filter: `blur(${blurStart}px)`,
        scale: scaleStart,
        willChange: "filter, transform",
      });

      if (overlayEl) {
        gsap.set(overlayEl, { opacity: 1 });
      }

      // Reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: start,
          end: end,
          scrub: scrub ? 1.5 : false,
          onRefresh: (self) => {
            triggerRef.current = self;
          },
        },
      });

      tl.to(
        image,
        {
          filter: `blur(${blurEnd}px)`,
          scale: scaleEnd,
          duration: 1,
          ease: "none",
        },
        0,
      );

      if (overlayEl) {
        tl.to(
          overlayEl,
          {
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          0,
        );
      }

      return () => {
        if (triggerRef.current) {
          triggerRef.current.kill();
        }
        tl.kill();
      };
    }, [blurStart, blurEnd, scaleStart, scaleEnd, start, end, scrub, vignette]);

    const setRefs = useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    return (
      <div
        ref={setRefs}
        className={`scroll-reveal-image ${vignette ? "scroll-reveal-vignette" : ""} ${className}`}
        {...props}
      >
        {overlay && (
          <div
            ref={overlayRef}
            className="scroll-reveal-image-overlay"
            aria-hidden="true"
          />
        )}
        <img ref={imageRef} src={src} alt={alt} loading="lazy" />
      </div>
    );
  },
);

ImageReveal.displayName = "ImageReveal";

// ============================================
// COMPONENT: TextReveal
// Staggered text character/word reveal
// ============================================
export const TextReveal = forwardRef(
  (
    {
      children,
      className = "",
      blurStart = 10,
      blurEnd = 0,
      opacityStart = 0,
      opacityEnd = 1,
      yStart = 30,
      yEnd = 0,
      start = "top 85%",
      end = "top 60%",
      scrub = true,
      splitBy = "words", // 'chars' | 'words' | 'lines'
      stagger = 0.05,
      ...props
    },
    forwardedRef,
  ) => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);
    const triggerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const elements = elementsRef.current.filter(Boolean);

      if (prefersReducedMotion) {
        gsap.set(elements, { opacity: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      // Initial fog state
      gsap.set(elements, {
        opacity: opacityStart,
        y: yStart,
        filter: `blur(${blurStart}px)`,
        willChange: "transform, opacity, filter",
      });

      // Reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: start,
          end: end,
          scrub: scrub ? 1 : false,
          onRefresh: (self) => {
            triggerRef.current = self;
          },
        },
      });

      tl.to(elements, {
        opacity: opacityEnd,
        y: yEnd,
        filter: `blur(${blurEnd}px)`,
        duration: 1,
        stagger: stagger,
        ease: "none",
      });

      return () => {
        if (triggerRef.current) {
          triggerRef.current.kill();
        }
        tl.kill();
      };
    }, [
      blurStart,
      blurEnd,
      opacityStart,
      opacityEnd,
      yStart,
      yEnd,
      start,
      end,
      scrub,
      stagger,
    ]);

    // Split text into elements
    const renderContent = () => {
      if (typeof children !== "string") return children;

      if (splitBy === "chars") {
        return children.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (elementsRef.current[i] = el)}
            className="text-reveal-char"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ));
      }

      if (splitBy === "words") {
        return children.split(" ").map((word, i) => (
          <span
            key={i}
            ref={(el) => (elementsRef.current[i] = el)}
            className="text-reveal-word"
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </span>
        ));
      }

      return children;
    };

    const setRefs = useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    return (
      <span
        ref={setRefs}
        className={`scroll-reveal-text ${className}`}
        {...props}
      >
        {renderContent()}
      </span>
    );
  },
);

TextReveal.displayName = "TextReveal";

// ============================================
// LEGACY: Default ScrollReveal (backward compatible)
// ============================================
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
  const triggerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(container, { filter: "blur(0px)", opacity: 1 });
      if (overlay) gsap.set(overlay, { opacity: 0 });
      return;
    }

    // Initial state - blurred and darkened
    gsap.set(container, {
      filter: `blur(${blurStart}px) brightness(${brightnessStart})`,
      opacity: opacityStart,
      willChange: "filter, opacity",
      transform: "translateZ(0)",
    });

    if (overlay) {
      gsap.set(overlay, { opacity: 1 });
    }

    // Create scroll-linked animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: start,
        end: end,
        scrub: scrub ? 1.5 : false,
        onRefresh: (self) => {
          triggerRef.current = self;
        },
      },
    });

    // Animate blur, brightness and opacity
    tl.to(container, {
      filter: `blur(${blurEnd}px) brightness(${brightnessEnd})`,
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
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      tl.kill();
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
    brightnessStart,
    brightnessEnd,
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

// Export all components
export default ScrollReveal;
export { ScrollTrigger };
