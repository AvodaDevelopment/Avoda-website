import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import iconImg from '@assets/images/icon.png'
import { IoArrowDown } from "react-icons/io5";
import './Hero.css'

function Hero() {
  
  
  const textArray = ['Solutions', 'Websites', 'Apps', 'Landing Pages', 'Design'];
  const [displayedText, setDisplayedText] = useState(textArray[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  
  // Track scroll position
  const { scrollY } = useScroll()

  // Update viewport height on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Transform scroll position to hero opacity (fade out as you scroll)
  // When scrollY is 0, opacity is 1 (fully visible)
  // When scrollY is viewport height, opacity is 0 (fully faded)
  const heroOpacity = useTransform(scrollY, [0, viewportHeight], [1, 0])
  const heroScale = useTransform(scrollY, [0, viewportHeight], [1, 0.8])
  
  // Transform scroll position to scroll hint opacity
  const scrollHintOpacity = useTransform(scrollY, [0, 1], [1, 0])
  useEffect(() => {
    const currentWord = textArray[currentIndex];
    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 4000);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next word
      timeout = setTimeout(() => {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, Math.random() * 400 + 100);
    } else if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
      }, 100); // Speed of deleting
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const currentWord = textArray[currentIndex];
          return currentWord.substring(0, prev.length + 1);
        });
      }, 100); // Speed of typing
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, textArray]);

  return (
    <motion.section
      className="hero"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      {/* Dark overlay that fades in on scroll */}
      {/* <motion.div
        className="hero-overlay"
        style={{ opacity: overlayOpacity }}
      /> */}

      <div className="container">
        <div className="hero-content">
        <div className="center-logo">
              <img src={iconImg} alt="Avoda Logo" />
            </div>
          <h1 className="hero-title">
            Better <span className="gradient-text">{displayedText}</span>
            <span className="typing-cursor"></span>
          </h1>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
          <motion.div className={"hero-scroll-down"} 
          style={{opacity:scrollHintOpacity}}
          >scroll down <IoArrowDown /></motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero

