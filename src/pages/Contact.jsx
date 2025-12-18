import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setIsSubmitted(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    fetch("https://script.google.com/macros/s/AKfycbzTbmoef26ZpjTk7G5Zn7nN_c06tcS1io2f-Y_phaggayZTJLi9tr1nxEcPY4pLad4/exec", {
      method: "POST",
      body: JSON.stringify(formData)
    }).then(res => {

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(err => console.error('Error:', err));
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="contact-page">

      <motion.div 
        className="contact-page-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="contact-page-header contact-header" 
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeInUp}>Get in Touch</motion.h1>
          <motion.p className="contact-page-lead contact-lead" variants={fadeInUp}>
            Have a question or want to work together? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-page-content contact-content" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="contact-page-info contact-info" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="contact-page-info-item info-item" variants={fadeInUp}>
              <h3>Email</h3>
              <p>joshuatkarr@gmail.com</p>
            </motion.div>
            <motion.div className="contact-page-info-item info-item" variants={fadeInUp}>
              <h3>Phone</h3>
              <p>+1 (971) 979-2852</p>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-page-form contact-form" 
            onSubmit={handleSubmit} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="contact-page-form-group form-group" variants={fadeInUp}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className="contact-page-form-group form-group" variants={fadeInUp}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className="contact-page-form-group form-group" variants={fadeInUp}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            <motion.button 
              type="submit" 
              className="contact-page-btn btn btn-primary"
              variants={fadeInUp}
            >
              Send Message
            </motion.button>
            {isSubmitted && (
              <motion.p 
                className="contact-page-submitted"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Submitted!
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact

