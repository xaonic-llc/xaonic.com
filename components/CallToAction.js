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

        <div className="flex-mobile-column" style={{
          display: 'flex',
          gap: 'clamp(15px, 3vw, 20px)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'clamp(2rem, 4vw, 3rem)'
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 10px'
        }}>
          <div style={{
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              marginBottom: '1rem',
              color: 'var(--color-purple)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)'
            }}>Free Consultation</h3>
            <p style={{
              opacity: '0.9',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.6'
            }}>
              30-minute strategy session to understand your needs and provide initial recommendations.
            </p>
          </div>

          <div style={{
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              marginBottom: '1rem',
              color: 'var(--color-blue)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)'
            }}>Quick Response</h3>
            <p style={{
              opacity: '0.9',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.6'
            }}>
              We respond to all inquiries as soon as possible with a detailed project proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
