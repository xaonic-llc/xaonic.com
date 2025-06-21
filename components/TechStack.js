export default function TechStack() {
  const technologies = [
    // Backend Technologies
    {
      name: "Laravel",
      icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Symfony",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
    },
    {
      name: "Nest.js",
      icon: "https://nestjs.com/img/logo-small.svg"
    },
    {
      name: "REST API",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    },
    // Frontend Technologies
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    },
    // Database Technologies
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
    },
    // Cloud Technologies
    {
      name: "AWS",
      icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
      name: "GCP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
    }
  ];

  return (
    <section id="tech" className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            Our Tech Specialization
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--color-black)',
            opacity: '0.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We specialize in modern, proven technologies with over 10 years of combined experience 
            in building scalable, maintainable applications.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'clamp(0.8rem, 3vw, 2rem)',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 15px clamp(1.5rem, 4vw, 3rem) 15px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {technologies.map((tech, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              minHeight: '120px',
              width: 'clamp(120px, 15vw, 160px)',
              flex: '0 0 auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                style={{
                  width: 'clamp(36px, 8vw, 48px)',
                  height: 'clamp(36px, 8vw, 48px)',
                  marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                  objectFit: 'contain'
                }}
              />
              <span style={{
                fontWeight: '600',
                color: 'var(--color-black)',
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          margin: 'clamp(2rem, 5vw, 4rem) 10px clamp(2rem, 5vw, 3rem) 10px'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            Need a Different Tech Stack?
          </h3>
          <p style={{
            color: 'var(--color-black)',
            opacity: '0.7',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem auto',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            lineHeight: '1.6',
            padding: '0 10px'
          }}>
            We provide consultancy for other technologies and can connect you with our
            specialized partner companies for technologies outside our core expertise.
          </p>
          <a href="#partners" className="btn btn-secondary">
            Learn About Our Partners
          </a>
        </div>
      </div>
    </section>
  );
}
