import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoHome, IoInformationCircle, IoMail } from 'react-icons/io5'
import logoImg from '../assets/images/logo.png'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close menu when clicking outside or on route change
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="navbar-container">  
    <nav className={`navbar ${isScrolled ? 'floating-navbar' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img className="logo" src={logoImg} alt="Avoda"/>
          </Link>
          
          <button 
            className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {isMenuOpen && (
            <div 
              className="navbar-overlay" 
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon"><IoHome /></span>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon"><IoInformationCircle /></span>
                <span className="nav-text">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon"><IoMail /></span>
                <span className="nav-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar

