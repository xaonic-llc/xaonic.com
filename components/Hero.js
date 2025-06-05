export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(135deg, var(--color-purple) 0%, var(--color-blue) 100%)`,
      paddingTop: '80px'
    }}>
      <div className="container text-center">
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          marginBottom: '1.5rem',
          color: 'var(--color-black)',
          fontWeight: '700'
        }}>
          Transforming Ideas into Digital Reality
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          marginBottom: '2rem',
          color: 'var(--color-black)',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          opacity: '0.8'
        }}>
          We help startups shape their MVP and build scalable products. 
          Your customer-focused development partner for the long run.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>

        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '4rem auto 0'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-black)' }}>10+</h3>
            <p style={{ color: 'var(--color-black)', opacity: '0.7' }}>Years Experience</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-black)' }}>50+</h3>
            <p style={{ color: 'var(--color-black)', opacity: '0.7' }}>Projects Delivered</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-black)' }}>100%</h3>
            <p style={{ color: 'var(--color-black)', opacity: '0.7' }}>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
