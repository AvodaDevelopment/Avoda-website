import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Hero.css'

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 })
  
  // Track scroll position
  const { scrollY } = useScroll()
  
  // Transform scroll position to overlay opacity
  // When scrollY is 0, opacity is 0
  // When scrollY is 500, opacity is 0.7
  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 1])

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section 
      className="hero" 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        
      }}
    >
      {/* Dark overlay that fades in on scroll */}
      <motion.div 
        className="hero-overlay"
        style={{ opacity: overlayOpacity }}
      />
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Avoda</span>
          </h1>
          <p className="hero-subtitle">
            Build amazing experiences with modern web technologies. 
            Fast, beautiful, and scalable solutions for your business.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero

