import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudIcon from '@mui/icons-material/Cloud';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import BugReportIcon from '@mui/icons-material/BugReport';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Services() {
  const services = [
    {
      title: "MVP Development",
      description: "Transform your startup idea into a functional MVP with our rapid development approach.",
      features: ["Rapid prototyping", "Market validation", "Scalable architecture", "User feedback integration"],
      icon: RocketLaunchIcon
    },
    {
      title: "SaaS Development",
      description: "Build robust, scalable SaaS platforms that grow with your business needs.",
      features: ["Multi-tenant architecture", "Payment integration", "Analytics dashboard", "API development"],
      icon: CloudIcon
    },
    {
      title: "Shopify Apps",
      description: "Create powerful Shopify applications to enhance e-commerce functionality.",
      features: ["Custom app development", "Store integration", "Payment processing", "Performance optimization"],
      icon: ShoppingCartIcon
    },
    {
      title: "Team Augmentation",
      description: "Scale your development team with the right talent and processes.",
      features: ["Developer recruitment", "Team structure", "Process optimization", "Skill assessment"],
      icon: GroupsIcon
    },
    {
      title: "QA & Testing",
      description: "Comprehensive quality assurance to ensure your product meets the highest standards.",
      features: ["Automated testing", "Manual QA", "Performance testing", "Security audits"],
      icon: BugReportIcon
    },
    {
      title: "Post-Release Support",
      description: "Ongoing maintenance and support to keep your product running smoothly.",
      features: ["Bug fixes", "Feature updates", "Performance monitoring", "24/7 support"],
      icon: SupportAgentIcon
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--color-black)',
            opacity: '0.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Comprehensive development services to take your product from concept to market success.
          </p>
        </div>

        <div className="grid grid-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <IconComponent style={{
                    fontSize: '2rem',
                    color: 'var(--color-purple)',
                    marginRight: '12px'
                  }} />
                  <h3 style={{
                    fontSize: '1.4rem',
                    margin: 0,
                    color: 'var(--color-black)'
                  }}>
                    {service.title}
                  </h3>
                </div>
                <p style={{
                  color: 'var(--color-black)',
                  opacity: '0.7',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #f0f0f0',
                      color: 'var(--color-black)',
                      opacity: '0.8',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <CheckCircleIcon style={{
                        fontSize: '1rem',
                        color: 'var(--color-blue)',
                        marginRight: '8px'
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
