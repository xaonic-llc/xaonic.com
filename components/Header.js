import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px'
      }}>
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--color-black)',
            margin: 0
          }}>
            xaonic
          </h1>
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '30px' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-black)',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-purple)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-black)'}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isMenuOpen ? (
              <CloseIcon style={{ fontSize: '24px', color: 'var(--color-black)' }} />
            ) : (
              <MenuIcon style={{ fontSize: '24px', color: 'var(--color-black)' }} />
            )}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: '20px',
          borderTop: '1px solid #f0f0f0'
        }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: 'var(--color-black)',
                padding: '10px 0',
                borderBottom: '1px solid #f0f0f0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
