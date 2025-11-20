import './TeamSection.css';

import JoshuaImage from '@assets/images/people/josh.jpg'
import CalebImage from '@assets/images/people/caleb.jpg'
import JackImage from '@assets/images/people/jack.jpg'

const team = [
    {
        name: 'Joshua Karr',
        title: 'Founder & CEO',
        description: 'Joshua is an ambitous inovator and thinker who loves creative ideas. His love for software engineering and entrepreneurship is what drives him to help build new and innovative solutions.',
        image: JoshuaImage
    },
    {
        name: 'Caleb Karr',
        title: 'Co-Founder & CTO',
        description: 'Caleb is a software engineer and entrepreneur. His creative eye and probelm solving skills makes him a valuable asset to the team. He is always looking for a better way to do things.',
        image: CalebImage
    },
    {
        name: 'Jack Wallander',
        title: 'Co-Founder & COO',
        description: 'Jack is a software engineer and entrepreneur. His love for real world problems has placed him in the perfect position to help solve them.',
        image: JackImage
    }
];

export default function TeamSection() {
    return (
        <section className="team-section">
            <h2>Our Team</h2>
            <div className="team-section-content">
                {team.map((member, index) => (
                    <div className="team-section-content-member" key={index}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <h4>{member.title}</h4>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}