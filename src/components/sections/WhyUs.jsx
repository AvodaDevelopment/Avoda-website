import React from 'react';
import { useState } from 'react';
import DevicesDisplay from '../DevicesDisplay';
import './WhyUs.css';
import AppImage from '@assets/images/carousel/UXDesign.png'
import WebsiteImage from '@assets/images/carousel/Software.png'
import LandingPageImage from '@assets/images/carousel/appDesign.png'

const WhyUs = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: 'Built for You',
      body: 'We build your product with you in mind. We listen to your needs and deliver a product that goes beyond your expectations.',
      icon: '⚡',
      display: AppImage
    },
    {
      title: 'Affordable Pricing',
      body: 'No surprises, no hidden fees. We believe in honest pricing that respects your startup budget. We are open to negotiating custom pricing for your project.',
      icon: '💰',
      display: WebsiteImage
    },
    {
      title: 'Founder-to-Founder',
      body: 'We speak entrepreneur. We understand the unique challenges you face and deliver solutions that truly support your vision.',
      icon: '🤝',
      display: LandingPageImage
    },
    {
      title: 'Built Better',
      body: 'With deep expertise in enterprise-grade web technologies like Amazon Web Services and Microsoft Azure, we build scalable solutions designed to grow alongside your business.',
      icon: '🤝',
      display: LandingPageImage
    },
  ]

  return (
    <section className="why-us-section">
      <div className="acc-container">
        <div className="acc-content">
          <h2>Why Choose Us?</h2>          
          <div className="items">
            {items.map((item, index) => (
              <div className={`item ${openIndex === index ? 'open' : ''}`} key={index} onClick={() => setOpenIndex(index)}>
                <div className="acc-header">
                  <span className="icon-emoji" style={{ fontSize: '24px' }}>
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <div className="body">
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="display">
          {items.map((item, index) => (
            <img className={`display-image ${openIndex === index ? 'open' : ''}`} src={item.display} alt={item.title} width={"100%"} height={"100%"} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
