import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoHome, IoInformationCircle, IoMail } from 'react-icons/io5'
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

  return (
    <div className="navbar-container">  
    <nav className={`navbar ${isScrolled ? 'floating-navbar' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img className="logo" src="/src/assets/images/logo.png" alt="Avoda"/>
          </Link>
          
          <button className="navbar-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

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

