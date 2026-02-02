import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "Angular.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Framer Motion", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "Responsive Design", level: "Advanced" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Animations", level: "Intermediate" },
  { name: "CMS (WordPress)", level: "Intermediate" },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="skills section-dark">
      <div className="skills-container">
        {/* Section Header with Lines */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-line left" />
          <div className="header-georgian-wrapper">
            <span className="georgian-bracket">「</span>
            <span className="georgian-text">EXPERIENCE</span>
            <span className="georgian-bracket">」 </span>
          </div>
          <div className="header-line right" />
        </motion.div>

        <div className="skills-content">
          {/* Left Side - Image and Text */}
          <motion.div
            className="skills-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="skills-image-wrapper">
              <div
                className="skills-image"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop')`,
                }}
              />
              <div className="skills-image-overlay" />
            </div>
            <div className="skills-text-content">
              <h3 className="skills-title">
                <span className="title-clean">Clean</span>{" "}
                <span className="title-code">Code</span>
              </h3>
              <h4 className="skills-subtitle">Modern Development</h4>
              <p className="skills-description">
                Building with the latest technologies and best practices for
                optimal performance and user experience.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Skills List */}
          <motion.div
            className="skills-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="skills-label">[TECHNICAL EXPERTISE]</span>
            <motion.div
              className="skills-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item cursor-hover"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-divider" />
                  <div className="skill-content">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
              <div className="skill-divider final" />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="skills-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="note-text">[ALWAYS LEARNING NEW TECHNOLOGIES]</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
