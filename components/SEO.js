import Head from 'next/head';

export default function SEO({
  title = "Xaonic - Expert Web Development | MVP, SaaS & Shopify Apps",
  description = "🚀 Transform your startup ideas into digital reality with Xaonic. Expert web development, API development, MVP development & team augmentation for US and European clients. 10+ years experience with Laravel, Node.js, React, Vue.js. Serving Netherlands, Germany, Belgium, France, UK & USA.",
  keywords = "web development, API development, build MVP, team augmentation, custom software development, web development company USA, web development Netherlands, web development Europe, Laravel development, Node.js development, React development, Vue.js development, SaaS development, Shopify apps, startup development, software development outsourcing, remote development team, web development services, API integration, REST API development, GraphQL development, database development, full stack development, frontend development, backend development, mobile app development, e-commerce development, digital transformation, software consulting, agile development, DevOps services, cloud development, web application development, progressive web apps, microservices development, scalable web solutions, enterprise web development",
  image = "https://xaonic.com/cover-x.png",
  url = "https://xaonic.com/",
  type = "website"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Xaonic" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#E0C0FC" />
      <meta name="msapplication-TileColor" content="#E0C0FC" />
      <link rel="canonical" href={url} />

      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />

      {/* Geo-targeting */}
      <meta name="geo.region" content="US;NL;DE;BE;FR;GB" />
      <meta name="geo.placename" content="United States, Netherlands, Germany, Belgium, France, United Kingdom" />
      <meta name="geo.position" content="52.3676;4.9041" />
      <meta name="ICBM" content="52.3676, 4.9041" />

      {/* Business/Company specific */}
      <meta name="company" content="Xaonic" />
      <meta name="classification" content="Web Development, API Development, MVP Development, Team Augmentation, Software Development, Technology Services" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="United States, Netherlands, Europe" />
      <meta name="target" content="startups, businesses, entrepreneurs, US companies, European companies, Netherlands businesses" />
      <meta name="audience" content="B2B, startups, scale-ups, enterprises" />
      <meta name="subject" content="Custom web development, API development, MVP development, team augmentation services" />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" sizes="180x180" href="/cover-x.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Xaonic" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Xaonic - Web Development Company specializing in MVP, SaaS and Shopify Apps" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xaonic" />
      <meta name="twitter:creator" content="@xaonic" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Xaonic - Web Development Company specializing in MVP, SaaS and Shopify Apps" />
    </Head>
  );
}
