import './PreviewSection.css'

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from 'react';
import consultingImg from '@assets/images/carousel/Software.png'
import softwareDevelopmentImg from '@assets/images/carousel/Software.png'
import UxDesignImg from '@assets/images/carousel/UXDesign.png'
import webBuildingImg from '@assets/images/carousel/Software.png'
import automationImg from '@assets/images/carousel/Software.png'
import appDevelopmentImg from '@assets/images/carousel/appDesign.png'
import { Link } from 'react-router-dom'
function PreviewSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 })
    const { scrollY } = useScroll()
    const rotateIn = useTransform(scrollY, [0, 500], [-20, 0])
    const fadeIn = useTransform(scrollY, [0, 300], [0, 1])
    const moveIn = useTransform(scrollY, [0, 200], [-10, 0])
    const moveUp = useTransform(scrollY, [0, 200], [0, 0])
    
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

  const content = [
    {
      title: 'Software Development',
      description: 'From small scripts to complex applications for desktop and mobile devices, we can help you build the software you need.',
      imgSrc: softwareDevelopmentImg,
      imgStyles: {
        bottom: '-50px',
      }
    },
    {
      title: 'Consulting',
      description: 'We provide techical consulting services to help you feel confident in your technical decisions.',
      imgSrc: null,
    },
    {
      title: 'UI/UX Design',
      description: 'We develop UI/UX designs that are fast, responsive, and easy to use.',
      imgSrc: UxDesignImg,

    },
    {
      title: 'Web Building',
      description: 'From small landing pages to complex websites, we can help you build the website you need.',
      imgSrc: null,
    },
    {
      title: 'Automation',
      description: 'We can help you automate your business processes to save time and improve efficiency.',
      imgSrc: null,
    },
    {
      title: 'App Development',
      description: 'We can help you develop apps for desktop and mobile devices.',
      imgSrc: appDevelopmentImg,
      imgStyles: {
        bottom: '-100px',
        width: '50%',
        maxWidth: '500px',
        right: '60px',
      }
    }
  ]

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
                {content.map((item, index) => (
                  <div key={index} className="preview-carousel-item-container" id={`preview-carousel-item-${index + 1}`} ref={registerItemRef(index)}>
                    <div 
                      className={`preview-carousel-item ${activeItemId === `preview-carousel-item-${index + 1}` ? "inView" : ""}`}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      {item.imgSrc && <img src={item.imgSrc} alt={item.title} style={item.imgStyles? item.imgStyles : {}}/>}
                      <Link to={`#${item.title}`}>Learn more</Link>
                    </div>
                  </div>
                ))}
                
            </div>
            <ul className="preview-carousel-control">
              {content.map((item, index) => (
                <li key={index}><button type="button" className={`preview-carousel-control-button ${activeItemId === `preview-carousel-item-${index + 1}` ? "selected" : ""}`} onClick={() => handleControlClick(`preview-carousel-item-${index + 1}`, index)}/></li>
              ))}
            </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default PreviewSection