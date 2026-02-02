import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Animated Landing Page",
    description:
      "Smooth scroll animations and interactive hero section for a creative agency",
    image: "/assets/project-1.jpg",
    tags: ["React", "Framer Motion", "GSAP"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "React + TypeScript todo app with drag & drop and dark mode",
    image: "/assets/project-2.jpg",
    tags: ["React", "TypeScript", "DnD"],
    link: "#",
  },
  {
    id: 3,
    title: "3D Product Showcase",
    description: "Interactive 3D model viewer using React Three Fiber basics",
    image: "/assets/project-3.jpg",
    tags: ["React Three Fiber", "Three.js", "3D"],
    link: "#",
  },
  {
    id: 4,
    title: "Personal Blog Starter",
    description: "Angular.js MDX blog with syntax highlighting and SEO",
    image: "/assets/project-4.jpg",
    tags: ["Angular.js", "MDX", "SEO"],
    link: "#",
  },
  {
    id: 5,
    title: "E-commerce UI Clone",
    description:
      "Responsive product grid + cart with Tailwind & Framer Motion hovers",
    image: "/assets/about-feature.jpg",
    tags: ["Tailwind", "Framer Motion", "Cart"],
    link: "#",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="work" className="projects section-light">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          className="projects-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="header-content">
            <h2 className="header-text">FEATURED</h2>
            <div className="header-georgian">
              <span className="georgian-bracket"></span>
              <span className="georgian-text-vertical">プロジェクト</span>
              <span className="georgian-bracket"></span>
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
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${index === 0 ? "project-card-large" : ""}`}
              variants={itemVariants}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link cursor-hover"
                data-cursor-text="VIEW"
              >
                <div className="project-image-wrapper">
                  <motion.div
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                  <div className="project-overlay">
                    <motion.span
                      className="project-view-btn"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      VIEW PROJECT
                    </motion.span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="projects-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="note-text">[MORE PROJECTS COMING SOON]</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
