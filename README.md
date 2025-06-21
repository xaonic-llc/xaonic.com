# Xaonic - Web Development Company Website

A modern, minimal single-page website for Xaonic web development company built with Next.js and optimized for static hosting on Digital Ocean App Platform.

## Features

- **Single Page Application** - All content on one page with smooth scrolling navigation
- **Static Export Ready** - Configured for static hosting on Digital Ocean App Platform
- **Responsive Design** - Mobile-first approach with responsive layouts
- **Modern Tech Stack** - Built with Next.js, React, Material-UI icons, and CSS-in-JS
- **Professional Icons** - Material-UI icons throughout for a polished look
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Performance Focused** - Optimized for fast loading and smooth interactions

## Design

- **Color Palette**: 
  - Black (#000000)
  - Purple (#E0C0FC) 
  - Blue (#BCCFD8)
- **Typography**:
  - Headings: Libre Baskerville (serif)
  - Body text: Inter (sans-serif)
- **Style**: Minimal, clean, professional

## Sections

1. **Header** - Fixed navigation with smooth scroll links
2. **Hero/Banner** - Company vision and call-to-action
3. **Why Choose Us** - Key differentiators and value propositions
4. **Services** - Overview of development services offered
5. **Call to Action** - Meeting booking and contact encouragement
6. **Tech Stack** - Technologies and expertise showcase
7. **Partner Network** - How we connect clients with specialists
8. **Contact Form** - Lead capture with project details
9. **Footer** - Company information and links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

1. Build the static site:
```bash
npm run build
```

2. Export static files:
```bash
npm run export
```

The static files will be generated in the `out/` directory, ready for deployment.

## Deployment to Digital Ocean App Platform

1. Connect your repository to Digital Ocean App Platform
2. Set the build command to: `npm run deploy`
3. Set the output directory to: `out`
4. Deploy as a static site

## Customization

### Content Updates
- Edit component files in `/components/` to update content
- Modify `/pages/index.js` for page structure changes
- Update `/styles/globals.css` for styling changes

### Contact Form
The contact form currently shows a success message on submission. To connect it to a real backend:

1. Replace the form submission logic in `/components/ContactForm.js`
2. Add your preferred form handling service (Formspree, Netlify Forms, etc.)
3. Update the form action and method as needed

### Logo and Branding
- Replace `/public/logo.svg` and `/public/logo-white.svg` with your actual logos
- Update favicon in `/public/favicon.ico`
- Modify color variables in `/styles/globals.css`

## Performance Optimizations

- Images are optimized for web delivery
- CSS is minimized and inlined where appropriate
- JavaScript is code-split and lazy-loaded
- Fonts are preloaded for better performance

## SEO Features

- Meta tags for social media sharing
- Structured data for search engines
- Semantic HTML structure
- Optimized page titles and descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and confidential.

## Support

For questions or support, contact: info@xaonic.com
