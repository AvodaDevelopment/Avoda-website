import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './MissionStatement.css'
// import devices from '../assets/images/devices.pn

import missionStatementImage from '@assets/images/mission-statement.jpg'
import DevicesDisplay from '../DevicesDisplay'

function MissionStatement() {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
    const sectionRef = useRef(null)
    const controls = useAnimation()
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.9,
        triggerOnce: false,
    })
    
    const setRefs = useCallback((node) => {
        sectionRef.current = node
        inViewRef(node)
    }, [inViewRef])

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [inView, controls])

    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: 'easeOut'
            }
              },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeOut'
            }
        }
    }
    const handleMouseMove = useCallback((e) => {
        if (!sectionRef.current) return

        const rect = sectionRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        setMousePosition({ x, y })
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        section.addEventListener('mousemove', handleMouseMove)
        return () => {
            section.removeEventListener('mousemove', handleMouseMove)
        }
    }, [handleMouseMove])

    return (
        <motion.section
            className="mission-statement"
            ref={setRefs}
            style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`
            }}
        >
      
            <div className="mission-statement-text">
                <div className="name-definition">
                    <h2>Avoda</h2>
                    <p><span className='hebrew'>(עֲבוֹדָה)</span> <span className='italic'>Avodah</span></p>
                    <p>Avoda means work as worship.
                        Our mission is to build with excellence, integrity, and purpose — creating work that serves others and honors the One who gave us the ability to create.</p>
                </div>
                
                   
               
            </div>
            <img className='mission-statement-image' src={missionStatementImage} alt="Mission Statement" />
            

        </motion.section>
    )
}

export default MissionStatement