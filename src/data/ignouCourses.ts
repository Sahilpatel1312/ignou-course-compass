export interface Course {
  id: string;
  name: string;
  duration: string;
  fee: number;
  category: string;
  description: string;
  eligibility: string;
  highlights: string[];
}

export const courseCategories = [
  "Undergraduate Programs",
  "Postgraduate Programs",
];

export const ignouCourses: Course[] = [
  {
    id: "mba",
    name: "Online MBA",
    duration: "2 Years",
    fee: 62000,
    category: "Postgraduate Programs",
    description: "A comprehensive postgraduate management program covering all aspects of business administration, leadership, and strategic management for career advancement.",
    eligibility: "Bachelor's degree with 50% marks from recognized university",
    highlights: ["Management and leadership focus", "Strategic business skills", "Industry exposure", "Career advancement opportunities"]
  },
  {
    id: "mca",
    name: "Online MCA",
    duration: "3 Years",
    fee: 58500,
    category: "Postgraduate Programs",
    description: "Professional master's degree in computer applications covering advanced programming, software engineering, database management, and emerging technologies.",
    eligibility: "Bachelor's degree with Mathematics at 10+2 or graduation level",
    highlights: ["Advanced programming skills", "Software engineering focus", "Industry projects", "Emerging technology coverage"]
  },
  {
    id: "ma",
    name: "Online MA",
    duration: "2 Years",
    fee: 7200,
    category: "Postgraduate Programs",
    description: "Advanced postgraduate program in humanities and social sciences with various specialization options including English, Hindi, Political Science, and more.",
    eligibility: "Bachelor's degree from a recognized university",
    highlights: ["Multiple specialization options", "Research methodology", "Advanced theoretical knowledge", "Dissertation component"]
  },
  {
    id: "mcom",
    name: "Online M.Com",
    duration: "2 Years",
    fee: 10800,
    category: "Postgraduate Programs",
    description: "Advanced commerce and business studies program focusing on advanced accounting, finance, business management, and research methodologies.",
    eligibility: "Bachelor's degree in Commerce or related field",
    highlights: ["Advanced business concepts", "Financial analysis skills", "Research component", "Professional development"]
  },
  {
    id: "bca",
    name: "Online BCA",
    duration: "3 Years",
    fee: 40200,
    category: "Undergraduate Programs",
    description: "A technical undergraduate program covering computer applications, programming languages, software development, and IT fundamentals.",
    eligibility: "10+2 with Mathematics as a subject",
    highlights: ["IT and programming focus", "Hands-on practical training", "Industry-relevant skills", "Software development emphasis"]
  },
  {
    id: "bba",
    name: "Online BBA",
    duration: "3 Years",
    fee: 28800,
    category: "Undergraduate Programs",
    description: "Undergraduate business administration program covering management principles, marketing, finance, human resources, and entrepreneurship fundamentals.",
    eligibility: "10+2 or equivalent from a recognized board",
    highlights: ["Business management focus", "Leadership development", "Industry exposure", "Entrepreneurship skills"]
  },
  {
    id: "ba",
    name: "Online BA",
    duration: "3 Years",
    fee: 7200,
    category: "Undergraduate Programs",
    description: "A comprehensive undergraduate program covering various subjects in humanities and social sciences, designed to provide a broad foundation in liberal arts education.",
    eligibility: "10+2 or equivalent from a recognized board",
    highlights: ["Flexible study schedule", "Wide range of elective subjects", "Industry-relevant curriculum", "Distance learning mode"]
  },
  {
    id: "bcom",
    name: "Online B.Com",
    duration: "3 Years",
    fee: 10800,
    category: "Undergraduate Programs",
    description: "A professional undergraduate degree focusing on commerce, accounting, finance, and business studies to prepare students for careers in business and finance.",
    eligibility: "10+2 with Mathematics or equivalent",
    highlights: ["Commerce and finance focused", "Practical business knowledge", "Career-oriented curriculum", "Industry partnerships"]
  },
];
