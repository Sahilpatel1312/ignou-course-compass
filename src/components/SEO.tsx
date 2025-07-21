import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  course?: {
    name: string;
    description: string;
    duration: string;
    fee: string;
    eligibility: string;
  };
}

const SEO = ({ title, description, keywords, canonical, course }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'IGNOU Distance Education');

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', `https://www.ignoudistance.in${canonical}`, true);
    updateMetaTag('og:image', 'https://www.ignoudistance.in/lovable-uploads/2d9af0d1-1564-4d48-b319-4501b5fde37e.png', true);

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', 'https://www.ignoudistance.in/lovable-uploads/2d9af0d1-1564-4d48-b319-4501b5fde37e.png');

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://www.ignoudistance.in${canonical}`);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', `https://www.ignoudistance.in${canonical}`);
      document.head.appendChild(canonicalLink);
    }

    // Add course structured data if provided
    if (course) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.name,
        "description": course.description,
        "provider": {
          "@type": "Organization",
          "name": "IGNOU Distance Education",
          "url": "https://www.ignoudistance.in"
        },
        "duration": course.duration,
        "courseCode": course.name.split('(')[1]?.replace(')', '') || course.name,
        "educationalLevel": "Higher Education",
        "teaches": course.description,
        "coursePrerequisites": course.eligibility,
        "offers": {
          "@type": "Offer",
          "price": course.fee,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": `https://www.ignoudistance.in${canonical}`
        }
      };

      let script = document.querySelector('script[type="application/ld+json"][data-course]') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-course', 'true');
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, canonical, course]);

  return null;
};

export default SEO;