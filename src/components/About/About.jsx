import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 1, 1, 0.3],
  );

  return (
    <section id="info" className="about section-dark" ref={containerRef}>
      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-header-content">
            <h2 className="about-header-text">IN</h2>
            <div className="about-header-georgian">
              <span className="georgian-bracket"></span>
              <span className="georgian-text-info"></span>
              <span className="georgian-bracket"></span>
            </div>
            <h2 className="about-header-text">FO</h2>
          </div>
        </motion.div>

        {/* Feature Image with Parallax and Overlay Content */}
        <motion.div
          className="about-feature"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="feature-image-container">
            <motion.div className="feature-image-wrapper" style={{ y }}>
              <div
                className="feature-image"
                style={{
                  backgroundImage: `url('/assets/about-feature.jpg')`,
                }}
                loading="lazy"
              />
            </motion.div>
            <div className="feature-overlay" />

            {/* Overlay Content */}
            <motion.div className="feature-content" style={{ opacity }}>
              <motion.div
                className="feature-headline"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="headline-part">A [</span>
                <span className="headline-accent">passionate</span>
                <span className="headline-part">] APPROACH TO</span>
              </motion.div>

              <motion.div
                className="feature-subheadline"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="subheadline-accent">Frontend</span>
                <span className="subheadline-part"> DEVELOPMENT AND</span>
              </motion.div>

              <motion.div
                className="feature-subheadline-secondary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="subheadline-part">CREATING </span>
                <span className="subheadline-accent-secondary">Meaningful</span>
                <span className="subheadline-part"> DIGITAL EXPERIENCES</span>
              </motion.div>

              <motion.div
                className="feature-description"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p>
                  A development approach led by curiosity, precision, and
                  empathy.
                </p>
                <p>
                  All digital experiences created are crafted to be intuitive,
                  meaningful, and quietly delightful.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-text-wrapper">
            <p className="about-text">
              I'm Giorgi Afciauri, a 19-year-old frontend developer from
              Tbilisi, Georgia. My journey into web development started with a
              fascination for how websites work and a desire to create
              beautiful, functional digital experiences.
            </p>
            <p className="about-text">
              I specialize in React and modern JavaScript, with a strong focus
              on creating smooth animations, pixel-perfect UIs, and performant
              web applications. I'm obsessed with the details – from
              micro-interactions to accessibility – because I believe great user
              experiences are built on thoughtful craftsmanship.
            </p>
            <p className="about-text">
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or learning about advanced
              frontend patterns. I'm always excited to collaborate on
              interesting projects and bring ideas to life.
            </p>
          </div>

          <motion.a
            href="#contact"
            className="about-cta cursor-hover"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="cta-text">Let's Work Together</span>
            <span className="cta-arrow">→</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-item">
            <span className="stat-number">19</span>
            <span className="stat-label">Years Old</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Coding</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
