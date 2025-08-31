import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SEOHelmet = ({
  title = "IGNOU Distance - Online Courses, Admission, Fee Structure",
  description = "Complete guide to IGNOU distance education courses. Get information about MBA, MCA, MA, M.Com, BBA, BCA, BA, B.Com programs with free counseling services.",
  keywords = "IGNOU, distance education, online courses, MBA, MCA, MA, M.Com, BBA, BCA, BA, B.Com, admission, fee structure",
  canonical,
  image = "/lovable-uploads/og-image.png",
  type = "website",
  structuredData,
}: SEOHelmetProps) => {
  const location = useLocation();
  const currentUrl = `https://www.ignoudistance.in${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Set title
    document.title = title;

    // Helper function to create or update meta tag
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Set meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('author', 'IGNOU Distance');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `https://www.ignoudistance.in${image}`, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'IGNOU Distance', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://www.ignoudistance.in${image}`);
    updateMetaTag('twitter:site', '@ignoudistance');
    updateMetaTag('twitter:creator', '@ignoudistance');

    // Additional SEO tags
    updateMetaTag('theme-color', '#1e40af');
    updateMetaTag('msapplication-TileColor', '#1e40af');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Preconnect to external domains
    const preconnects = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];

    preconnects.forEach(url => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (url.includes('gstatic')) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonicalUrl, image, type, structuredData]);

  return null;
};

export default SEOHelmet;