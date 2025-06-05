export default function CallToAction() {
  return (
    <section className="section" style={{
      background: `linear-gradient(135deg, var(--color-black) 0%, #333 100%)`,
      color: 'white'
    }}>
      <div className="container text-center">
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '1rem',
          color: 'white'
        }}>
          Ready to Build Something Amazing?
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: '0.9',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Let's discuss your project and explore how we can help you achieve your goals. 
          Book a free consultation call with our experts.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <a 
            href="https://calendly.com/xaonic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: 'var(--color-purple)',
              color: 'var(--color-black)',
              fontSize: '1.1rem',
              padding: '15px 35px'
            }}
          >
            Book a Meeting
          </a>
          <a 
            href="#contact" 
            className="btn"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              fontSize: '1.1rem',
              padding: '13px 35px'
            }}
          >
            Get in Touch
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-purple)' }}>Free Consultation</h3>
            <p style={{ opacity: '0.9' }}>
              30-minute strategy session to understand your needs and provide initial recommendations.
            </p>
          </div>
          
          <div style={{
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-blue)' }}>Quick Response</h3>
            <p style={{ opacity: '0.9' }}>
              We respond to all inquiries as soon as possible with a detailed project proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
