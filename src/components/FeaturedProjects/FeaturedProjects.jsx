import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    title: "SPACE TOURISM",
    category: "MULTI-PAGE WEBSITE",
    description:
      "An immersive multi-page website exploring space travel destinations, crew members, and technology. Built with modern frontend practices and responsive design.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=1000&fit=crop",
    link: "https://spacetourism-gules.vercel.app/",
    color: "#1a1a2e",
  },
  {
    id: 2,
    title: "E-COMMERCE PLATFORM",
    category: "RESPONSIVE WEB APP",
    description:
      "A modern e-commerce platform featuring intuitive navigation, product filtering, and seamless checkout experience. Focused on usability and clean UI.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop",
    link: "#",
    color: "#2d2d2d",
  },
];

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="work" className="featured-projects section-light">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <h2 className="header-text">FEATURED</h2>
            <div className="header-chinese">
              <span className="chinese-bracket-top">「</span>
              <span className="chinese-text-projects">作品集</span>
              <span className="chinese-bracket-bottom">」</span>
            </div>
            <h2 className="header-text">PROJECTS</h2>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-image-wrapper">
                  <motion.div
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="project-overlay">
                    <motion.div
                      className="project-view-btn"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <span>VIEW PROJECT</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="projects-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Immersive experiences uniquely created based on user-insights and
          design thinking methodologies. Always setting you apart from the
          industry.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/aptsiaurigiorgi-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <span>VIEW ALL WORK</span>
            <span className="btn-chinese">看作品集</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
