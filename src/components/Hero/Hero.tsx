import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-content">
        <span className="hero-badge">Cloud Dashboard</span>

        <h1>
          Cloud Infrastructure
          <span> Optimization</span>
        </h1>

        <p>
          Visualizing cloud resources across AWS, Azure and Google Cloud through
          a clean, responsive and interactive dashboard experience.
        </p>

        <a href="#providers" className="hero-button">
          Explore Team
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
