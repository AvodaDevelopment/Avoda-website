import './About.css'
import MissionStatement from '../components/sections/MissionStatement'
function About() {
  return (
    <div className="about-page">
      <MissionStatement />
      <div className="container">
        <div className="about-header">
          <h1>About Avoda</h1>
          <p className="about-lead">
            We're on a mission to create exceptional digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform the digital landscape, Avoda brings together
              creativity, technology, and innovation. We believe in building solutions that not
              only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p>
              Our team of passionate developers, designers, and strategists work together to
              deliver exceptional results for our clients.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Constantly pushing boundaries and exploring new possibilities</p>
              </div>
              <div className="value-item">
                <h3>Quality</h3>
                <p>Delivering excellence in every project we undertake</p>
              </div>
              <div className="value-item">
                <h3>Collaboration</h3>
                <p>Working together to achieve extraordinary results</p>
              </div>
              <div className="value-item">
                <h3>Impact</h3>
                <p>Creating meaningful solutions that make a difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

