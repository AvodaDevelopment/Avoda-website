import './ContentSections.css'

function ContentSections() {
  return (
    <>
      <section id="Content-Management-System" className="content-section">
        <div className="container">
          <h2>Content Management System</h2>
          <p>Powerful CMS solutions that give you complete control over your content.</p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Easy to Use</h3>
              <p>Intuitive interface for managing all your content</p>
            </div>
            <div className="service-item">
              <h3>Flexible</h3>
              <p>Customizable to fit your unique workflow</p>
            </div>
            <div className="service-item">
              <h3>Secure</h3>
              <p>Enterprise-grade security for your data</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Design" className="content-section alt">
        <div className="container">
          <h2>Design</h2>
          <p>Beautiful, modern designs that captivate your audience.</p>
          <div className="portfolio-grid">
            <div className="portfolio-item">UI/UX Design</div>
            <div className="portfolio-item">Brand Identity</div>
            <div className="portfolio-item">Graphics</div>
          </div>
        </div>
      </section>

      <section id="3D-implementation" className="content-section">
        <div className="container">
          <h2>3D Implementation</h2>
          <p>Bring your vision to life with cutting-edge 3D technology.</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">🎨</div>
              <h3>3D Modeling</h3>
              <p>High-quality 3D assets</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🎬</div>
              <h3>Animation</h3>
              <p>Smooth, engaging motion</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🌐</div>
              <h3>Web Integration</h3>
              <p>Seamless 3D experiences</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Launch" className="content-section alt">
        <div className="container">
          <h2>Launch</h2>
          <p>Deployment made simple. Get your project live with confidence.</p>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"Smooth deployment process from start to finish."</p>
              <span>- Happy Client</span>
            </div>
            <div className="testimonial">
              <p>"Zero downtime launch. Incredible support!"</p>
              <span>- Satisfied Customer</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="content-section">
        <div className="container">
          <h2>Pricing Plans</h2>
          <p>Choose the perfect plan for your needs.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">$999</p>
              <ul>
                <li>5 Pages</li>
                <li>Responsive Design</li>
                <li>Basic SEO</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Professional</h3>
              <p className="price">$2999</p>
              <ul>
                <li>10 Pages</li>
                <li>Advanced Features</li>
                <li>Full SEO</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">Custom</p>
              <ul>
                <li>Unlimited Pages</li>
                <li>Custom Solutions</li>
                <li>Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="Dynamic" className="content-section alt">
        <div className="container">
          <h2>Dynamic Solutions</h2>
          <p>Fast, responsive, and interactive experiences that engage users.</p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Real-time Updates</h3>
              <p>Live data synchronization</p>
            </div>
            <div className="service-item">
              <h3>Interactive UI</h3>
              <p>Engaging user experiences</p>
            </div>
            <div className="service-item">
              <h3>Performance</h3>
              <p>Lightning-fast load times</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentSections

