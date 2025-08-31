// Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IGNOU Distance",
  "description": "Comprehensive guide to IGNOU distance education courses with expert counseling services.",
  "url": "https://www.ignoudistance.in",
  "logo": "https://www.ignoudistance.in/lovable-uploads/logo.png",
  "sameAs": [
    "https://www.facebook.com/ignoudistance",
    "https://www.twitter.com/ignoudistance",
    "https://www.youtube.com/ignoudistance"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@ignoudistance.in",
    "contactType": "Customer Service"
  }
};

// Course structured data generator
export const generateCourseSchema = (course: {
  name: string;
  description: string;
  duration: string;
  fee: string;
  mode: string;
  eligibility: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.name,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": "Indira Gandhi National Open University (IGNOU)",
    "sameAs": "https://www.ignou.ac.in"
  },
  "educationalCredentialAwarded": course.name,
  "timeRequired": course.duration,
  "courseMode": course.mode,
  "offers": {
    "@type": "Offer",
    "price": course.fee,
    "priceCurrency": "INR"
  },
  "coursePrerequisites": course.eligibility,
  "inLanguage": "en-IN"
});

// FAQ structured data generator
export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Breadcrumb structured data generator
export const generateBreadcrumbSchema = (items: Array<{name: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Educational Organization schema
export const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "IGNOU Distance Learning Services",
  "description": "Providing comprehensive information and counseling for IGNOU distance education programs",
  "url": "https://www.ignoudistance.in",
  "telephone": "+91-9999999999",
  "email": "support@ignoudistance.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Maidan Garhi",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110068",
    "addressCountry": "IN"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Distance Learning Counseling Services"
  }
};