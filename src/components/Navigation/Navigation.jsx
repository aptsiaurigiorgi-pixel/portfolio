import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navigation.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "work", "info", "skills"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "work", label: "WORK" },
    { id: "info", label: "INFO" },
    { id: "skills", label: "SKILLS" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`navigation ${isScrolled ? "scrolled" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.a
            href="#home"
            className="nav-logo cursor-hover"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GIO
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link cursor-hover ${activeSection === link.id ? "active" : ""}`}
                onClick={() => scrollToSection(link.id)}
              >
                {activeSection === link.id && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="nav-link-text">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Year Badge */}
          <div className="nav-year">
            <span className="year-bracket">[</span>
            <span className="year-text">2026</span>
            <span className="year-bracket">]</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn cursor-hover"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="menu-line"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="menu-line"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="menu-line"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="mobile-nav-number">0{index + 1}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              className="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span className="mobile-footer-text">[GIO PORTFOLIO 2026]</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
