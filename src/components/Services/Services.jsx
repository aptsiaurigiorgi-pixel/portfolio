import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  "FRONTEND DEVELOPMENT",
  "RESPONSIVE WEB DESIGN",
  "UI IMPLEMENTATION",
  "ANGULARJS DEVELOPMENT",
  "WORDPRESS CUSTOMIZATION",
  "GIT & VERSION CONTROL",
];

const Services = () => {
  // Duplicate services for seamless loop
  const tickerServices = [...services, ...services];

  return (
    <section id="side" className="services section-dark">
      <div className="services-container">
        {/* Section Header with Chinese */}
        <motion.div
          className="services-header-chinese"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-line left" />
          <div className="chinese-wrapper">
            <span className="chinese-bracket-top">「</span>
            <span className="chinese-text-tech">技術</span>
            <span className="chinese-bracket-bottom">」</span>
          </div>
          <div className="header-line right" />
        </motion.div>

        <div className="services-content">
          {/* Left Side - Image and Text */}
          <motion.div
            className="services-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="services-image-wrapper">
              <div
                className="services-image"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop')`,
                }}
              />
            </div>
            <div className="services-text-content">
              <h3 className="services-title">
                <span className="title-quietly">Quietly</span>{" "}
                <span className="title-powerful">powerful</span>
              </h3>
              <h4 className="services-subtitle">Digital Experiences</h4>
              <p className="services-description">
                Design to me is a bridge between emotion and function.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Services List */}
          <motion.div
            className="services-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="services-label">[EXPERTISE AND SERVICES]</span>
            <div className="services-list">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="service-name">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="services-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>[FUELED BY CURIOSITY, SHAPED BY INSIGHT]</span>
        </motion.div>

        {/* Ticker */}
        <div className="services-ticker">
          <div className="ticker-wrapper">
            <motion.div
              className="ticker-content"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {tickerServices.map((service, index) => (
                <span key={index} className="ticker-item">
                  {service}
                  <span className="ticker-dot">•</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
