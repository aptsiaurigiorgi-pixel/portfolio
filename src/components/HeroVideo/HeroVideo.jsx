import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroVideo.css";

const HeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Handle video load
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // If user prefers reduced motion, show static fallback
  if (prefersReducedMotion) {
    return (
      <div className="hero-video-container reduced-motion">
        <div
          className="hero-video-fallback"
          style={{
            backgroundImage: `url('/assets/about-feature.jpg')`,
          }}
        />
        <div className="hero-video-overlay" />
      </div>
    );
  }

  return (
    <div className={`hero-video-container ${isLoaded ? "loaded" : ""}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleLoadedData}
        poster="/assets/about-feature.jpg"
      >
        <source src="/assets/Horseyyy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="hero-video-overlay" />

      {/* Loading State */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="hero-video-loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loading-spinner" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play/Pause Control */}
      <motion.button
        className="hero-video-control"
        onClick={togglePlay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="4" width="4" height="16" fill="currentColor" />
            <rect x="14" y="4" width="4" height="16" fill="currentColor" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default HeroVideo;
