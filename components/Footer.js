export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-black)',
      color: 'white',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img
                src="/logo-x-white.png"
                alt="Xaonic"
                style={{ height: '32px', marginRight: '10px' }}
              />
              <h3 style={{ color: 'white', margin: 0 }}>Xaonic</h3>
            </div>
            <p style={{
              opacity: '0.8',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Transforming startup ideas into digital reality with 10+ years of development expertise.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="mailto:info@xaonic.com"
                style={{
                  color: 'var(--color-purple)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                info@xaonic.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'white'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <a href="#services" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#services" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="#services" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  Shopify Apps
                </a>
              </li>
              <li>
                <a href="#services" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  Team Augmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'white'
            }}>
              Technologies
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li style={{ color: 'white', opacity: '0.8' }}>Laravel</li>
              <li style={{ color: 'white', opacity: '0.8' }}>Node.js</li>
              <li style={{ color: 'white', opacity: '0.8' }}>React</li>
              <li style={{ color: 'white', opacity: '0.8' }}>Vue.js</li>
              <li style={{ color: 'white', opacity: '0.8' }}>REST API & GraphQL</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'white'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <a href="#about" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#tech" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#partners" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  Partners
                </a>
              </li>
              <li>
                <a href="#contact" style={{
                  color: 'white',
                  opacity: '0.8',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            margin: 0,
            opacity: '0.6',
            fontSize: '0.9rem'
          }}>
            © 2025 Xaonic. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a
              href="/privacy"
              style={{
                color: 'white',
                opacity: '0.6',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{
                color: 'white',
                opacity: '0.6',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer a:hover {
          opacity: 1 !important;
        }
        
        @media (max-width: 768px) {
          footer div:last-child {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
