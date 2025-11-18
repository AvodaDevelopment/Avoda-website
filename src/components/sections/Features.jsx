import './Features.css'

import React from 'react';

function Features() {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Software Development Features</h2>
        <p>
          Our software development service provides a robust, end-to-end approach, leveraging the latest technologies, established methodologies, and a strong commitment to your business success. Explore our areas of expertise below:
        </p>
      </div>

      {/* Custom Software Development */}
      <div className="feature-card">
        <h3 style={{ color: "var(--primary-color)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
          Custom Software Development
        </h3>
        <p style={{ marginBottom: 10 }}>
          We specialize in building software tailored to your organization, solving real problems with solutions that fit seamlessly into your workflow.
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li>
            <strong>Requirement Discovery:</strong> We start by understanding your needs, challenges, and long-term goals.
          </li>
          <li>
            <strong>Fully Bespoke Solutions:</strong> No cookie-cutter products. Every project is customized to your unique requirements.
          </li>
          <li>
            <strong>Iterative Prototyping:</strong> Early wireframes and prototypes ensure we’re on the right track from day one.
          </li>
        </ul>
      </div>

      {/* Modern Technologies */}
      <div 
        className="feature-card"
        style={{
          background: "linear-gradient(100deg, var(--primary-color) 0 10%, var(--bg-secondary) 80%)",
          color: "#fff",
          marginTop: 32
        }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Modern Technologies</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontWeight: 600 }}>Latest Frameworks</div>
            <p>React, Node.js, Python, and other leading technologies for scalable, maintainable systems.</p>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Cloud Integration</div>
            <p>Deploy to AWS, Azure, or Google Cloud for reliability and scalability.</p>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Best Practices</div>
            <p>Version control, automated testing, and CI/CD pipelines are standard in all our projects.</p>
          </div>
        </div>
      </div>

      {/* Agile Process & Partnership */}
      <div className="feature-card" style={{ borderLeft: '6px solid var(--primary-color)', marginTop: 32}}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span style={{
            display: "inline-block",
            width: 26,
            height: 26,
            background: "var(--primary-color)",
            borderRadius: "50%",
            marginRight: 12
          }}>
          </span>
          <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Agile Process & Partnership</h3>
        </div>
        <p>
          Transparent and regular collaboration is a core value. We provide:
        </p>
        <ol style={{ marginLeft: 22, marginBottom: 0 }}>
          <li>Frequent milestones and progress reviews</li>
          <li>Quick iterations and fast feedback implementation</li>
          <li>Clear documentation from start to finish</li>
        </ol>
      </div>

      {/* End-to-End Support */}
      <div className="feature-card" style={{
        marginTop: 36,
        background: "var(--bg-secondary)",
        boxShadow: "0 2px 20px rgba(40,200,170,0.07)"
      }}>
        <h3 style={{ color: 'var(--primary-color)', letterSpacing: '0.02em' }}>End-to-End Support</h3>
        <div style={{ marginTop: 10, lineHeight: 1.8 }}>
          <strong>UI/UX Design:</strong>
          <br />
          We work alongside you to design beautiful, intuitive, and accessible user experiences, from sketches through interactive prototypes.
        </div>
        <div style={{ marginTop: 14 }}>
          <strong>Maintenance & Growth:</strong>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li>Ongoing security patches and bug fixes</li>
            <li>Feature enhancements based on your feedback</li>
            <li>Flexible support agreements post-launch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;

