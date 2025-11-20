import { useState } from 'react'
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

  return (
    <div className="contact-page">
      <div className="contact-page-bg page-bg"></div>
      <div className="contact-page-container">
        <div className="contact-page-header contact-header">
          <h1>Get in Touch</h1>
          <p className="contact-page-lead contact-lead">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-page-content contact-content">
          <div className="contact-page-info contact-info">
            <div className="contact-page-info-item info-item">
              <h3>Email</h3>
              <p>joshuatkarr@gmail.com</p>
            </div>
            <div className="contact-page-info-item info-item">
              <h3>Phone</h3>
              <p>+1 (971) 979-2852</p>
            </div>
          </div>

          <form className="contact-page-form contact-form" onSubmit={handleSubmit}>
            <div className="contact-page-form-group form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-page-form-group form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-page-form-group form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-page-btn btn btn-primary">Send Message</button>
            {isSubmitted && <p className="contact-page-submitted">Submitted!</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

