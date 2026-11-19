import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

function Contacts() {
  return (
    <div style={{display: "flex", 
                  width: "100%", 
                  justifyContent:"space-between",
                  marginBottom:"10rem",
                  flexWrap:"wrap",
                  boxSizing:"border-box"
                  }}
                  className="pg"
      >
      <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            <a href="#projects" className="primary-button">
            Explore my work <ArrowRight size={18} />
            </a>

            <a
            href="https://github.com/hollyfirst"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="secondary-button"
            >
            {/* <Github size={19} /> */} github link
            </a>

        </motion.div>

        <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
        >
            <a href="#contact" className="primary-button">
            Let's connect  <ArrowRight size={18} />
            </a>

            <a
            href="http://linkedin.com/in/tekal"
            aria-label="LinkedIn"
            className="secondary-button"
            >
            {/* <Linkedin size={19} /> */} linkedn link
            </a>

            <span className="social-divider" />
            <span>BASED ON ENGINEERING. DRIVEN BY CURIOSITY.</span>
        </motion.div>
    </div>
  )
}

export default Contacts
