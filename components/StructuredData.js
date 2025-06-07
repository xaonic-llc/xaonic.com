import Head from 'next/head';

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xaonic",
    "alternateName": "Xaonic Web Development",
    "url": "https://xaonic.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://xaonic.com/logo.svg",
      "width": "200",
      "height": "50"
    },
    "image": "https://xaonic.com/cover-x.png",
    "description": "Expert web development company specializing in web development, API development, MVP development, and team augmentation. 10+ years of experience helping US and European startups transform ideas into digital reality.",
    "foundingDate": "2014",
    "slogan": "Transforming Ideas into Digital Reality",
    "knowsAbout": [
      "Web Development",
      "API Development",
      "MVP Development",
      "Team Augmentation",
      "SaaS Development",
      "Shopify App Development",
      "Laravel Development",
      "Node.js Development",
      "React Development",
      "Vue.js Development",
      "REST API Development",
      "GraphQL Development",
      "Database Development",
      "Full Stack Development",
      "Digital Transformation"
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "United States"
      },
      {
        "@type": "Place",
        "name": "Netherlands"
      },
      {
        "@type": "Place",
        "name": "Germany"
      },
      {
        "@type": "Place",
        "name": "Belgium"
      },
      {
        "@type": "Place",
        "name": "France"
      },
      {
        "@type": "Place",
        "name": "United Kingdom"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@xaonic.com",
      "availableLanguage": ["English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [
      "https://linkedin.com/company/xaonic",
      "https://twitter.com/xaonic"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web application development using modern technologies like Laravel, Node.js, React, and Vue.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development",
            "description": "REST API and GraphQL development for seamless system integration and data exchange"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Rapid prototyping and MVP development for startups to validate ideas and enter market quickly"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Team Augmentation",
            "description": "Expert developers to scale your existing team with specialized skills and experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Development",
            "description": "Scalable SaaS platform development and architecture for growing businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify App Development",
            "description": "Custom Shopify app development and e-commerce integration solutions"
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xaonic",
    "url": "https://xaonic.com",
    "description": "Expert web development company specializing in web development, API development, MVP development, and team augmentation for US and European clients",
    "publisher": {
      "@type": "Organization",
      "name": "Xaonic"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://xaonic.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Head>
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />

      {/* Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </Head>
  );
}
