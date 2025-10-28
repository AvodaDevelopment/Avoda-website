import { useState, useEffect } from 'react'
import { IoPeople, IoColorPalette, IoCodeSlash, IoRocketSharp } from 'react-icons/io5'
import { FaMobileAlt } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import iconImg from '../assets/images/icon.png'
import './CircularNav.css'

function CircularNav() {
  const [isFixed, setIsFixed] = useState(false)

  const navItems = [
    { id: 'Consulting', label: 'Consulting', icon: <IoPeople /> },
    { id: 'Design', label: 'Design', icon: <IoColorPalette /> },
    { id: 'Software Dev', label: 'Software', icon: <IoCodeSlash /> },
    { id: 'Web Builing', label: 'Web', icon: <IoRocketSharp /> },
     { id: 'App Development', label: 'App', icon: <FaMobileAlt /> },
    { id: 'Rebranding', label: 'ReDesign', icon: <IoMdRefresh /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const circularSection = document.getElementById('circular-nav-section')
      if (!circularSection) return

      const rect = circularSection.getBoundingClientRect()

      // Only show fixed icons when completely scrolled past the section
      if (rect.bottom <= 0) {
        setIsFixed(true)
        document.body.classList.add('circular-nav-fixed')
      } else {
        setIsFixed(false)
        document.body.classList.remove('circular-nav-fixed')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('circular-nav-fixed')
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section id="circular-nav-section" className="circular-nav-section">
        <div className="circular-nav-container">
          <h2 className="section-title">Why Choose Us</h2>
          
          <div className="circular-nav-wrapper">
            <div className="center-logo">
              <img src={iconImg} alt="Avoda Logo" />
            </div>

            <div className={`nav-buttons-circle ${isFixed ? 'fixed-top' : ''}`}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className="circular-nav-button"
                  style={{ '--index': index }}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                >
                  <span className="button-icon">{item.icon}</span>
                  <span className="button-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CircularNav

