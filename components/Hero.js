export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(135deg, var(--color-purple) 0%, var(--color-blue) 100%)`,
      paddingTop: '80px',
      paddingBottom: '40px',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div className="container text-center">
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
          color: 'var(--color-black)',
          fontWeight: '700',
          lineHeight: '1.1'
        }}>
          Transforming Ideas into Digital Reality
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
          color: 'var(--color-black)',
          maxWidth: '600px',
          margin: '0 auto',
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
          opacity: '0.8',
          lineHeight: '1.6',
          padding: '0 10px'
        }}>
          We help startups shape their MVP and build scalable products.
          Your customer-focused development partner for the long run.
        </p>

        <div className="flex-mobile-column" style={{
          display: 'flex',
          gap: 'clamp(15px, 3vw, 20px)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'clamp(2rem, 5vw, 4rem)',
          width: '100%',
          maxWidth: '100%',
          padding: '0 15px',
          boxSizing: 'border-box'
        }}>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: 'clamp(0.8rem, 3vw, 2rem)',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 15px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '0.5rem',
              color: 'var(--color-black)'
            }}>10+</h3>
            <p style={{
              color: 'var(--color-black)',
              opacity: '0.7',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>Years Experience</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '0.5rem',
              color: 'var(--color-black)'
            }}>50+</h3>
            <p style={{
              color: 'var(--color-black)',
              opacity: '0.7',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>Projects Delivered</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '0.5rem',
              color: 'var(--color-black)'
            }}>100%</h3>
            <p style={{
              color: 'var(--color-black)',
              opacity: '0.7',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
