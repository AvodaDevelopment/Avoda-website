import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/sections/Hero'
// import ContentSections from './components/ContentSections'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import PreviewSection from './components/sections/PreviewSection'
import WhyUs from './components/sections/WhyUs'
import OurProccess from './components/sections/OurProccess'
function HomePage() {
  return (
    <>
    <div className="page-bg">
    </div>
      <Hero />
      
      <div className="intro-spacer"></div>
      <PreviewSection />
      <WhyUs />
      <OurProccess />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

