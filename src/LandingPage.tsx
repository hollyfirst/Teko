
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  Code2,
  Terminal,
  Database,
  Cpu,
} from "lucide-react";

const technologies = [
  { name: "ANGULAR", icon: Code2 },
  { name: "REACT", icon: Terminal },
  { name: "NODE.JS", icon: Database },
  { name: "AI", icon: Cpu },
];

function LandingPage() {
  return (
    <main className="landing">

      {/* BACKGROUND */}
      <div className="hero-background">
        <div className="grid-overlay" />
        <div className="glow glow-one" />
        <div className="glow glow-two" />
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-symbol">H.</span>
          <span>HOLLY<span className="brand-dot">.</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's talk <ArrowRight size={15} />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="status-dot" />
            SOFTWARE ENGINEER · DIGITAL INNOVATOR
          </motion.div>

          <motion.p
            className="hero-overline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            ENGINEERING MEETS CREATIVITY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            Building
            <br />
            <span className="gradient-text">Digital</span>{" "}
            Experiences.
            <br />
            Engineering
            <br />
            <span className="outline-text">What&apos;s Next.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Senior Software Engineer & Analyst specializing in
            frontend engineering, full-stack development and
            data-driven digital solutions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#projects" className="primary-button">
              Explore my work <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's connect
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/hollyfirst"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href="#contact"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

            <span className="social-divider" />
            <span>BASED ON ENGINEERING. DRIVEN BY CURIOSITY.</span>
          </motion.div>

        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="core">
            <Sparkles size={48} strokeWidth={1} />
          </div>

          <div className="floating-label label-one">
            <span>01</span>
            FRONTEND
          </div>

          <div className="floating-label label-two">
            <span>02</span>
            FULL-STACK
          </div>

          <div className="floating-label label-three">
            <span>03</span>
            DATA & AI
          </div>

          <div className="visual-caption">
            <span className="caption-line" />
            <span>THINK · DESIGN · ENGINEER</span>
          </div>
        </motion.div>

        {/* TECHNOLOGY STRIP */}
        <motion.div
          className="technology-strip"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="strip-label">WORKING ACROSS TECHNOLOGIES</span>

          <div className="technology-list">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div className="technology-item" key={tech.name}>
                  <Icon size={17} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <a href="#expertise" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>

      </section>
    </main>
  );
}

export default LandingPage;
