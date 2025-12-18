import './About.css'
import MissionStatement from '../components/sections/MissionStatement'
import SpeakerSection from '../components/sections/SpeakerSection'
import TeamSection from '../components/sections/TeamSection'
import JoshuaImage from '@assets/images/people/josh.jpg'

function About() {
  return (
    <>

      <div className="about-page">
        <MissionStatement />
        <SpeakerSection speaker={"Joshua Karr"} title={"CTO"} image={JoshuaImage}>
          <h2> Our Story</h2>
          <p>
          For as long as I can remember, I have wanted to start a business and create real things. I have always been interested in the impact and useful applications of software development. When two of my buddies, my twin brother Caleb and my lifelong friend Jack, decided to join me and create Avoda. Caleb came up with the idea to name our business Avoda, as a way to reflect our servant hearts and Christian values. Avoda is here not only as a vessel for my tech ideas, but also as a platform for your ideas. In our entrepreneurship class, we observed how challenging it is for young, passionate entrepreneurs to develop digital platforms, whether it's a complex app at the core of their company or a simple landing page for their services. Most of these entrepreneurs get stuck at the implementation phase. That is where we come in. We offer affordable software development services and consulting to not only bring your idea to life but to ensure that we make the right decisions along the way. We can’t wait to help you bring your idea to life.
          </p>
        </SpeakerSection>
        <TeamSection />
      </div>
    </>
  )
}

export default About

