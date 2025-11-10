import './PreviewSection.css'

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from 'react';
import iconImg from '../assets/images/icon.png'
function PreviewSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 })
    const { scrollY } = useScroll()
    const rotateIn = useTransform(scrollY, [0, 300], [-20, 0])
    const fadeIn = useTransform(scrollY, [0, 300], [0, 1])
    const moveIn = useTransform(scrollY, [0, 200], [-10, 0])
    const moveUp = useTransform(scrollY, [0, 200], [0, -100])
    
    useEffect(() => {
        if (inView) controls.start("visible");
      }, [controls, inView]);
      
      const containerVariants = {
        hidden: {
          opacity: 0,
          rotateX: -10,
          y: 80,
        },
        visible: {
          opacity: 1,
          rotateX: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }
      
      const [activeItemId, setActiveItemId] = useState("preview-carousel-item-1");
      const carouselRef = useRef(null);
      const itemRefs = useRef([]);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const visibleEntry = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visibleEntry) {
              setActiveItemId((prev) =>
                prev === visibleEntry.target.id ? prev : visibleEntry.target.id
              );
            }
          },
          {
            root: carouselRef.current,
            threshold: [0.5, 0.75, 0.95],
          }
        );

        itemRefs.current.forEach((item) => {
          if (item) observer.observe(item);
        });

        return () => observer.disconnect();
      }, []);

      const registerItemRef = (index) => (element) => {
        itemRefs.current[index] = element;
      };

      const scrollToIndex = (index) => {
        const container = carouselRef.current;
        const target = itemRefs.current[index];

        if (!container || !target) return;

        const offsetLeft = target.offsetLeft - container.offsetLeft;

        container.scrollTo({
          left: offsetLeft,
          behavior: 'smooth',
        });
      };

      const handleControlClick = (targetId, index) => {
        scrollToIndex(index);
        // setActiveItemId(targetId);
      };
      const getItemIdByIndex = (index) => `preview-carousel-item-${index + 1}`;

      const nextSlide = () => {
        const totalItems = itemRefs.current.length;
        if (!totalItems) return;

        const segments = activeItemId?.split('-');
        const derivedIndex = segments
          ? Number(segments[segments.length - 1]) - 1
          : 0;

        const currentIndex = Number.isFinite(derivedIndex) && derivedIndex >= 0
          ? Math.min(derivedIndex, totalItems - 1)
          : 0;

        const nextIndex = (currentIndex + 1) % totalItems;
        const nextId = getItemIdByIndex(nextIndex);

        scrollToIndex(nextIndex);
        setActiveItemId(nextId);
      };

      useEffect(() => {
        const timeout = setTimeout(() => {
          nextSlide();
        }, 10000);

        return () => clearTimeout(timeout);
      }, [activeItemId]);
  return (
    <section 
    ref={ref}
    className="preview-section">
      <motion.div
    className="preview-carousel-container"
     style={{ rotateX: rotateIn, opacity: fadeIn, translateY: moveUp}}
      >
        
        <div className="preview-carousel">
            <div className="preview-carousel-content" ref={carouselRef}>
                <div
                  className="preview-carousel-item-container"
                  id="preview-carousel-item-1"
                  ref={registerItemRef(0)}
                >
                    <div
                      className={`preview-carousel-item ${activeItemId === "preview-carousel-item-1" ? "inView" : ""}`}
                    >
                        <h2>App Development</h2>
                        <img src={iconImg} alt="Preview 1" />
                    </div>
                </div>
                <div
                  className="preview-carousel-item-container"
                  id="preview-carousel-item-2"
                  ref={registerItemRef(1)}
                >
                    <div
                      className={`preview-carousel-item ${activeItemId === "preview-carousel-item-2" ? "inView" : ""}`}
                    >
                        <h2>Landing Page</h2>
                        <img src={iconImg} alt="Preview 2" />
                    </div>
                </div>
                <div
                  className="preview-carousel-item-container"
                  id="preview-carousel-item-3"
                  ref={registerItemRef(2)}
                >
                    <div
                      className={`preview-carousel-item ${activeItemId === "preview-carousel-item-3" ? "inView" : ""}`}
                    >
                        <h2>Website Development</h2>
                        <img src={iconImg} alt="Preview 3" />
                    </div>
                </div>
                <div
                  className="preview-carousel-item-container"
                  id="preview-carousel-item-4"
                  ref={registerItemRef(3)}
                >
                    <div
                      className={`preview-carousel-item ${activeItemId === "preview-carousel-item-4" ? "inView" : ""}`}
                    >

                        <img src={iconImg} alt="Preview 4" />
                    </div>
                </div>
                <div
                  className="preview-carousel-item-container"
                  id="preview-carousel-item-5"
                  ref={registerItemRef(4)}
                >
                    <div
                      className={`preview-carousel-item ${activeItemId === "preview-carousel-item-5" ? "inView" : ""}`}
                    >
                        <img src={iconImg} alt="Preview 5" />
                    </div>
                </div>
                <div
                  className="preview-carousel-item-container"
                  id="preview-carousel-item-6"
                  ref={registerItemRef(5)}
                >
                    <div
                      className={`preview-carousel-item ${activeItemId === "preview-carousel-item-6" ? "inView" : ""}`}
                    >
                        <img src={iconImg} alt="Preview 6" />
                    </div>
                </div>
        
            </div>
            <ul className="preview-carousel-control">
            <li><button type="button" className={`preview-carousel-control-button ${activeItemId === "preview-carousel-item-1" ? "selected" : ""}`} onClick={() => handleControlClick("preview-carousel-item-1", 0)}/></li>
            <li><button type="button" className={`preview-carousel-control-button ${activeItemId === "preview-carousel-item-2" ? "selected" : ""}`} onClick={() => handleControlClick("preview-carousel-item-2", 1)}/></li>
            <li><button type="button" className={`preview-carousel-control-button ${activeItemId === "preview-carousel-item-3" ? "selected" : ""}`} onClick={() => handleControlClick("preview-carousel-item-3", 2)}/></li>
            <li><button type="button" className={`preview-carousel-control-button ${activeItemId === "preview-carousel-item-4" ? "selected" : ""}`} onClick={() => handleControlClick("preview-carousel-item-4", 3)}/></li>
            <li><button type="button" className={`preview-carousel-control-button ${activeItemId === "preview-carousel-item-5" ? "selected" : ""}`} onClick={() => handleControlClick("preview-carousel-item-5", 4)}/></li>
            <li><button type="button" className={`preview-carousel-control-button ${activeItemId === "preview-carousel-item-6" ? "selected" : ""}`} onClick={() => handleControlClick("preview-carousel-item-6", 5)}/></li>
            </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default PreviewSection