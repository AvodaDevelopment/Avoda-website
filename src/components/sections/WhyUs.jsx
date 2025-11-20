import React from 'react';
import { useState } from 'react';
import { IoFlash, IoCash, IoHandRight, IoRocket } from 'react-icons/io5';
import DevicesDisplay from '../DevicesDisplay';
import './WhyUs.css';
import AppImage from '@assets/images/carousel/UXDesign.png'
import WebsiteImage from '@assets/images/carousel/Software.png'
import LandingPageImage from '@assets/images/carousel/appDesign.png'

const WhyUs = () => {

  const [openIndex, setOpenIndex] = useState(0);

  // const item = (title, body) => {

  // }

  const items = [
    {
      title: 'Built for Speed',
      body: 'Launch your product in weeks, not months. We use agile development practices to deliver MVPs fast, so you can start validating your ideas with real users.',
      icon: <IoFlash />,
      display: AppImage
    },
    {
      title: 'Transparent Pricing',
      body: 'No surprises, no hidden fees. Get a clear fixed quote within 48 hours. We believe in honest pricing that respects your startup budget.',
      icon: <IoCash />,
      display: WebsiteImage
    },
    {
      title: 'Founder-to-Founder',
      body: 'We speak entrepreneur. Having built our own products, we understand the unique challenges you face and deliver solutions that truly support your vision.',
      icon: <IoHandRight />,
      display: LandingPageImage
    },
    {
      title: 'Something Else',
      body: 'It is crazy when you get a lot of text to talk about something cool. But this is even crazier when you get a lot of text to talk about something cool.',
      icon: <IoRocket />,
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
                  <span className="icon-emoji">
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
