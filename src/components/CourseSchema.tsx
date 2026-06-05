/**
 * Per-page Course JSON-LD schema (Schema.org).
 * Optimized for Google Rich Results: Course, Course Carousel & Offer snippets.
 * One schema object per course page — do NOT mix courses.
 */

type CourseId = "mba" | "mca" | "ma" | "mcom" | "bca" | "bba" | "ba" | "bcom";

interface CourseSchemaData {
  name: string;
  alternateName: string;
  slug: string;
  description: string;
  credential: string; // educationalCredentialAwarded
  durationISO: string; // ISO 8601 duration (e.g. P2Y)
  durationText: string;
  fee: string; // numeric INR string
  eligibility: string;
}

const COURSES: Record<CourseId, CourseSchemaData> = {
  mba: {
    name: "IGNOU Online MBA",
    alternateName: "Master of Business Administration",
    slug: "/mba",
    description:
      "IGNOU Online MBA 2026 is a UGC-DEB approved 2-year postgraduate management programme offered in distance/online mode with 9 specializations including Marketing, Finance, HR, Operations, IT, Banking & International Business.",
    credential: "Master of Business Administration (MBA)",
    durationISO: "P2Y",
    durationText: "2 Years",
    fee: "62000",
    eligibility: "Bachelor's degree (any discipline) with 50% marks (45% for reserved categories) from a recognized university.",
  },
  mca: {
    name: "IGNOU Online MCA",
    alternateName: "Master of Computer Applications",
    slug: "/mca",
    description:
      "IGNOU Online MCA 2026 is a UGC-DEB approved postgraduate programme in computer applications covering advanced programming, software engineering, AI, data science & cloud computing in flexible distance mode.",
    credential: "Master of Computer Applications (MCA)",
    durationISO: "P3Y",
    durationText: "3 Years",
    fee: "58500",
    eligibility: "Bachelor's degree with Mathematics at 10+2 or graduation level from a recognized university.",
  },
  ma: {
    name: "IGNOU Online MA",
    alternateName: "Master of Arts",
    slug: "/ma",
    description:
      "IGNOU Online MA 2026 is a 2-year UGC-DEB approved postgraduate Arts programme with specializations in English, Hindi, Political Science, Sociology, Psychology, History, Economics, Public Administration and more.",
    credential: "Master of Arts (MA)",
    durationISO: "P2Y",
    durationText: "2 Years",
    fee: "7200",
    eligibility: "Bachelor's degree in any discipline from a recognized university.",
  },
  mcom: {
    name: "IGNOU Online M.Com",
    alternateName: "Master of Commerce",
    slug: "/mcom",
    description:
      "IGNOU Online M.Com 2026 is a 2-year UGC-DEB approved postgraduate commerce programme covering advanced accounting, finance, taxation, business policy & corporate governance in distance learning mode.",
    credential: "Master of Commerce (M.Com)",
    durationISO: "P2Y",
    durationText: "2 Years",
    fee: "10800",
    eligibility: "Bachelor's degree in Commerce or related discipline from a recognized university.",
  },
  bca: {
    name: "IGNOU Online BCA",
    alternateName: "Bachelor of Computer Applications",
    slug: "/bca",
    description:
      "IGNOU Online BCA 2026 is a UGC-DEB approved 3-year undergraduate computer applications programme covering programming, web development, DBMS, networking & software engineering in flexible distance mode.",
    credential: "Bachelor of Computer Applications (BCA)",
    durationISO: "P3Y",
    durationText: "3 Years",
    fee: "40200",
    eligibility: "10+2 (any stream) from a recognized board with Mathematics as a subject.",
  },
  bba: {
    name: "IGNOU Online BBA",
    alternateName: "Bachelor of Business Administration",
    slug: "/bba",
    description:
      "IGNOU Online BBA 2026 is a 3-year UGC-DEB approved undergraduate business administration programme covering management, marketing, finance, HR & entrepreneurship in distance learning mode.",
    credential: "Bachelor of Business Administration (BBA)",
    durationISO: "P3Y",
    durationText: "3 Years",
    fee: "28800",
    eligibility: "10+2 or equivalent from a recognized board in any stream.",
  },
  ba: {
    name: "IGNOU Online BA",
    alternateName: "Bachelor of Arts",
    slug: "/ba",
    description:
      "IGNOU Online BA 2026 is a 3-year UGC-DEB approved undergraduate Arts programme with flexible elective subjects in English, Hindi, History, Political Science, Sociology, Economics & Psychology.",
    credential: "Bachelor of Arts (BA)",
    durationISO: "P3Y",
    durationText: "3 Years",
    fee: "7200",
    eligibility: "10+2 or equivalent from a recognized board in any stream.",
  },
  bcom: {
    name: "IGNOU Online B.Com",
    alternateName: "Bachelor of Commerce",
    slug: "/bcom",
    description:
      "IGNOU Online B.Com 2026 is a 3-year UGC-DEB approved undergraduate commerce programme covering accounting, finance, taxation, business law & corporate accounting in flexible distance mode.",
    credential: "Bachelor of Commerce (B.Com)",
    durationISO: "P3Y",
    durationText: "3 Years",
    fee: "10800",
    eligibility: "10+2 or equivalent from a recognized board (Commerce stream preferred).",
  },
};

const SITE = "https://www.ignoudistance.in";

interface Props {
  courseId: CourseId;
}

const CourseSchema = ({ courseId }: Props) => {
  const c = COURSES[courseId];
  if (!c) return null;

  const url = `${SITE}${c.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}#course`,
    name: c.name,
    alternateName: c.alternateName,
    description: c.description,
    url,
    inLanguage: "en-IN",
    educationalCredentialAwarded: c.credential,
    coursePrerequisites: c.eligibility,
    educationalLevel: courseId.startsWith("b") ? "Undergraduate" : "Postgraduate",
    provider: {
      "@type": "EducationalOrganization",
      name: "Indira Gandhi National Open University (IGNOU)",
      url: "https://www.ignou.ac.in",
      sameAs: "https://en.wikipedia.org/wiki/Indira_Gandhi_National_Open_University",
      logo: "https://www.ignou.ac.in/userfiles/IGNOU%20LOGO%20Final.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Maidan Garhi",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110068",
        addressCountry: "IN",
      },
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: `${c.name} – July 2026 Session`,
        courseMode: ["Online", "https://schema.org/OnlineEventAttendanceMode"],
        courseWorkload: c.durationISO,
        inLanguage: "en-IN",
        location: {
          "@type": "VirtualLocation",
          url,
        },
        instructor: {
          "@type": "EducationalOrganization",
          name: "Indira Gandhi National Open University (IGNOU)",
          url: "https://www.ignou.ac.in",
        },
        offers: {
          "@type": "Offer",
          price: c.fee,
          priceCurrency: "INR",
          category: "Tuition",
          availability: "https://schema.org/InStock",
          url,
          validFrom: "2026-01-01",
        },
      },
    ],
    offers: {
      "@type": "Offer",
      price: c.fee,
      priceCurrency: "INR",
      category: "Tuition",
      availability: "https://schema.org/InStock",
      url,
    },
    timeRequired: c.durationISO,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default CourseSchema;
