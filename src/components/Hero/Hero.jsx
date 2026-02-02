import React from "react";
import { motion } from "framer-motion";
import HeroVideo from "../HeroVideo/HeroVideo";
import "./Hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 150, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const heroLetters = ["G", "I", "O"];

  return (
    <section id="home" className="hero">
      {/* Video Background */}
      <HeroVideo />

      <div className="hero-container">
        {/* Large Typography - Full Width Like Reference */}
        <motion.div
          className="hero-typography"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroLetters.map((letter, index) => (
            <div key={index} className="hero-letter-wrapper">
              <motion.span className="hero-letter" variants={letterVariants}>
                {letter}
              </motion.span>
              {/* Georgian decorative text between letters */}
              {index === 1 && (
                <motion.div
                  className="hero-georgian-vertical"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  <span className="georgian-bracket"></span>
                  <span className="georgian-text-vertical">ジョルジ</span>
                  <span className="georgian-bracket"></span>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="hero-content">
          <motion.div
            className="hero-headline"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <span className="headline-brand">AKROBAT</span>
            <span className="headline-home"></span>
            <span className="headline-text"></span>
          </motion.div>

          <motion.div
            className="hero-name"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7 }}
          >
            <span className="name-first">GIORGI</span>
            <span className="name-bracket"></span>
            <span className="name-middle"></span>
            <span className="name-bracket"></span>
            <span className="name-last">AFCIAURI</span>
            <motion.span
              className="name-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              ↓
            </motion.span>
          </motion.div>

          <motion.div
            className="hero-tagline"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <span className="tagline-main">FRONTEND DEVELOPER</span>
            <span className="tagline-and">and</span>
            <span className="tagline-accent">REACT ENTHUSIAST</span>
          </motion.div>
        </div>

        {/* Hero Info Section */}
        <motion.div
          className="hero-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="hero-role">
            <span className="role-highlight">FRONTEND DEVELOPER</span>
            <span className="role-divider">@</span>
            <span className="role-location">FREELANCE</span>
          </div>
          <div className="role-secondary">
            <span>BASED IN TBILISI, GEORGIA</span>
          </div>

          <p className="hero-description">
            19-year-old frontend enthusiast from Tbilisi building clean, fast,
            and interactive web experiences. Obsessed with React, smooth
            animations, pixel-perfect UIs, and dark themes. Currently learning
            more advanced patterns and open to cool projects, collabs, or remote
            opportunities.
          </p>
        </motion.div>

        {/* Hero Footer Bar */}
        <motion.div
          className="hero-footer-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <span className="footer-bar-item1">火</span>
          <span className="footer-bar-item">
            [SCROLL
            <motion.span
              className="scroll-arrow"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              ↓
            </motion.span>
            DOWN]
          </span>
          <span className="footer-bar-item georgian"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
