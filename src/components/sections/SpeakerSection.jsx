import './SpeakerSection.css';

export default function SpeakerSection({ speaker, title, image, children }) {
    return (
    <section className="speaker-section">
        <div className="speaker-section-content-container">
            <div className="speaker-section-content-profile" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="speaker-section-content">
                {children}
            </div>
            <h3>- {speaker} ({title})</h3>
        </div>
    </section>
    )
}