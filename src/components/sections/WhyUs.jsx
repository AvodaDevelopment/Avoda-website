import React from 'react';  
import './WhyUs.css'
const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="left-content">
        <h2>Why Choose Us?</h2>
        <dl className="feature-list">
            
            <dt className="feature-title">
              <button>Customer Focus</button>
            </dt>
            <dd className="description">We prioritize our clients’ needs and offer personalized solutions tailored to each project.</dd>
            
            <dt className="feature-title">
              <button>Quality Assurance</button>
            </dt>
            <dd className="description">We ensure that every product and service meets the highest standards of quality and reliability.</dd>
            
            <dt className="feature-title">
              <button>Expert Team</button>
            </dt>
            <dd className="description">Our team consists of experienced professionals dedicated to delivering the best results for our clients.</dd>
           
          </dl>
        </div>
        <div className="right-content">
          <div className="image-container">
            {/* <img src={whyUsImage} alt="Why Us" /> */}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyUs;
