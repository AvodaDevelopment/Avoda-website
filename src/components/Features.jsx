import './Features.css'

function Features() {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Lightning-fast load times and optimal performance for the best user experience.',
      icon: '⚡',
    },
    {
      title: 'Modern Design',
      description: 'Beautiful, responsive designs that work seamlessly across all devices.',
      icon: '🎨',
    },
    {
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise.',
      icon: '📈',
    },
    {
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices to keep your data safe.',
      icon: '🔒',
    },
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Why Choose Us</h2>
          <p>Discover what makes our solutions stand out</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

