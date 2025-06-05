import PaletteIcon from '@mui/icons-material/Palette';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LinkIcon from '@mui/icons-material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Partners() {
  const partnerTypes = [
    {
      title: "Design Agencies",
      description: "UI/UX design specialists for creating stunning user experiences",
      specialties: ["UI/UX Design", "Brand Identity", "User Research", "Prototyping"],
      icon: PaletteIcon
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile app development experts",
      specialties: ["iOS Development", "Android Development", "React Native", "Flutter"],
      icon: PhoneAndroidIcon
    },
    {
      title: "DevOps & Infrastructure",
      description: "Cloud infrastructure and deployment automation specialists",
      specialties: ["AWS/Azure/GCP", "Docker/Kubernetes", "CI/CD", "Monitoring"],
      icon: SettingsIcon
    },
    {
      title: "AI & Machine Learning",
      description: "Artificial intelligence and data science solution providers",
      specialties: ["Machine Learning", "Data Analytics", "AI Integration", "Automation"],
      icon: SmartToyIcon
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized application and blockchain technology experts",
      specialties: ["Smart Contracts", "DeFi", "NFT Platforms", "Web3 Integration"],
      icon: LinkIcon
    },
    {
      title: "E-commerce Specialists",
      description: "Dedicated e-commerce platform and marketplace developers",
      specialties: ["Shopify Plus", "WooCommerce", "Magento", "Custom Platforms"],
      icon: ShoppingCartIcon
    }
  ];

  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            Our Partner Network
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--color-black)',
            opacity: '0.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            When your project requires specialized expertise beyond our core stack, 
            we connect you with our trusted network of 100+ partner companies.
          </p>
        </div>

        <div className="grid grid-3">
          {partnerTypes.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div key={index} className="card">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <IconComponent style={{
                    fontSize: '3rem',
                    color: 'var(--color-blue)'
                  }} />
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: 'var(--color-black)',
                  textAlign: 'center'
                }}>
                  {partner.title}
                </h3>

                <p style={{
                  color: 'var(--color-black)',
                  opacity: '0.7',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}>
                  {partner.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  {partner.specialties.map((specialty, specialtyIndex) => (
                    <span key={specialtyIndex} style={{
                      padding: '5px 12px',
                      backgroundColor: 'var(--color-purple)',
                      color: 'var(--color-black)',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          backgroundColor: 'var(--color-blue)',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            How Our Partner Network Works
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-black)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-black)' }}>
                Assess Your Needs
              </h4>
              <p style={{ color: 'var(--color-black)', opacity: '0.7' }}>
                We analyze your project requirements and identify the best-fit specialists.
              </p>
            </div>

            <div>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-black)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-black)' }}>
                Connect & Coordinate
              </h4>
              <p style={{ color: 'var(--color-black)', opacity: '0.7' }}>
                We introduce you to pre-vetted partners and coordinate the collaboration.
              </p>
            </div>

            <div>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-black)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-black)' }}>
                Ensure Success
              </h4>
              <p style={{ color: 'var(--color-black)', opacity: '0.7' }}>
                We oversee the project to ensure quality and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
