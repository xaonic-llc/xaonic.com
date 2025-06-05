import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: GpsFixedIcon,
      title: "Customer-Focused Approach",
      description: "We prioritize your business goals and provide 360° development support tailored to your needs."
    },
    {
      icon: RocketLaunchIcon,
      title: "End-to-End Solutions",
      description: "From MVP development to post-release support, we handle every aspect of your product journey."
    },
    {
      icon: GroupsIcon,
      title: "Team Augmentation Expertise",
      description: "We help you build and scale your development team with the right talent and processes."
    },
    {
      icon: BuildIcon,
      title: "Proven Tech Stack",
      description: "10+ years of experience with Laravel, Node.js, React, Vue.js, and modern development practices."
    },
    {
      icon: HandshakeIcon,
      title: "Partner Network",
      description: "Access to 100+ specialized partner companies when your project needs specific expertise."
    },
    {
      icon: TrendingUpIcon,
      title: "Long-term Partnership",
      description: "We're committed to your success beyond launch with ongoing support and growth strategies."
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            Why Choose Xaonic?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--color-black)',
            opacity: '0.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We're not just developers – we're your strategic technology partner 
            committed to turning your vision into reality.
          </p>
        </div>

        <div className="grid grid-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="card text-center">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <IconComponent style={{
                    fontSize: '3rem',
                    color: 'var(--color-purple)'
                  }} />
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: 'var(--color-black)'
                }}>
                  {reason.title}
                </h3>
                <p style={{
                  color: 'var(--color-black)',
                  opacity: '0.7',
                  lineHeight: '1.6'
                }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
