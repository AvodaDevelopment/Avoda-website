import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContentSections from './components/ContentSections'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import PreviewSection from './components/previewSection'
import MissionStatement from './components/MissionStatement'
function HomePage() {
  return (
    <>
    <div className="page-bg">
    </div>
      <Hero />
      <MissionStatement />
      <PreviewSection />

      <ContentSections />
      
    </>
  )
}

function App() {
  return (
    <Router>
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

