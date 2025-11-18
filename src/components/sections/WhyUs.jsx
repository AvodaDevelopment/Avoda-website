import React from 'react';

const WhyUs = () => {
  return (
    <section className="why-us-section" style={{ padding: '60px 0', background: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Why Choose Us?</h2>
        <div className="why-us-features" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div className="feature-card" style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', flex: '1 1 250px', minWidth: 250 }}>
            <h3 style={{ marginBottom: 14 }}>Expert Team</h3>
            <p>Our team consists of experienced professionals dedicated to delivering the best results for our clients.</p>
          </div>
          <div className="feature-card" style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', flex: '1 1 250px', minWidth: 250 }}>
            <h3 style={{ marginBottom: 14 }}>Customer Focus</h3>
            <p>We prioritize our clients’ needs and offer personalized solutions tailored to each project.</p>
          </div>
          <div className="feature-card" style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', flex: '1 1 250px', minWidth: 250 }}>
            <h3 style={{ marginBottom: 14 }}>Quality Assurance</h3>
            <p>We ensure that every product and service meets the highest standards of quality and reliability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
