import React from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "../ScrollReveal/ScrollReveal";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/giorgi-afciauri-a2623b398/",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/afciaurigio_/",
    },
    {
      name: "GITHUB",
      url: "https://github.com/aptsiaurigiorgi-pixel",
    },
  ];

  return (
    <SectionReveal
      id="contact"
      className="footer"
      as="footer"
      blurStart={25}
      blurEnd={0}
      opacityStart={0.4}
      opacityEnd={1}
      brightnessStart={0.5}
      brightnessEnd={1}
      start="top 90%"
      end="top 50%"
      fogGradient={true}
    >
      {/* Background Image */}
      <div
        className="footer-background"
        style={{
          backgroundImage: `url('/assets/footer-bg.jpg')`,
        }}
        loading="lazy"
      />
      <div className="footer-overlay" />

      <div className="footer-container">
        {/* Top Bar */}
        <div className="footer-top">
          <span className="footer-name">[GIORGI]</span>
          <span className="footer-copyright">[COPYRIGHT 2026]</span>
        </div>

        {/* Main Content */}
        <div className="footer-content">
          {/* Header - Come Say Hello */}
          <motion.div
            className="footer-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-header-main">
              <span className="header-come">COME</span>
              <span className="header-say">say</span>
              <span className="header-hello">HELLO</span>
            </div>
            <div className="footer-header-georgian">
              <span className="georgian-bracket"></span>
              <span className="georgian-text-hello"></span>
              <span className="georgian-bracket"></span>
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            className="footer-email"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:giorgi.afciauri@gmail.com"
              className="email-link cursor-hover"
              data-cursor-text="EMAIL"
            >
              <span className="email-text">afciaurigiorgi046@gmail.com</span>
            </a>
          </motion.div>

          {/* Location & Availability */}
          <motion.div
            className="footer-meta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="meta-item">
              <span className="meta-label">[LOCATION]</span>
              <span className="meta-value">Tbilisi, Georgia</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">[AVAILABILITY]</span>
              <span className="meta-value available">Open for work</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-socials">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link cursor-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <span className="tsiko">Video Credit:[TsikoVis]</span>
          <motion.button
            className="footer-back-to-top cursor-hover"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <br />
            <span className="back-to-top-text">[BACK TO TOP]</span>

            <motion.span
              className="back-to-top-arrow"
              animate={{ y: [0, -4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              ↑
            </motion.span>
          </motion.button>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Footer;
