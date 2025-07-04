
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
  "Diploma Programs",
  "Certificate Programs",
  "PG Diploma Programs",
  "Doctoral Programs"
];

export const ignouCourses: Course[] = [
  // MBA - 1st position
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    fee: 62000,
    category: "Postgraduate Programs",
    description: "A comprehensive postgraduate management program covering all aspects of business administration, leadership, and strategic management for career advancement.",
    eligibility: "Bachelor's degree with 50% marks from recognized university",
    highlights: ["Management and leadership focus", "Strategic business skills", "Industry exposure", "Career advancement opportunities"]
  },
  
  // MCA - 2nd position
  {
    id: "mca",
    name: "Master of Computer Applications (MCA)",
    duration: "3 Years",
    fee: 58500,
    category: "Postgraduate Programs",
    description: "Professional master's degree in computer applications covering advanced programming, software engineering, database management, and emerging technologies.",
    eligibility: "Bachelor's degree with Mathematics at 10+2 or graduation level",
    highlights: ["Advanced programming skills", "Software engineering focus", "Industry projects", "Emerging technology coverage"]
  },

  // MA - 3rd position
  {
    id: "ma",
    name: "Master of Arts (MA)",
    duration: "2 Years",
    fee: 7200,
    category: "Postgraduate Programs",
    description: "Advanced postgraduate program in humanities and social sciences with various specialization options including English, Hindi, Political Science, and more.",
    eligibility: "Bachelor's degree from a recognized university",
    highlights: ["Multiple specialization options", "Research methodology", "Advanced theoretical knowledge", "Dissertation component"]
  },

  // M.Com - 4th position
  {
    id: "mcom",
    name: "Master of Commerce (M.Com)",
    duration: "2 Years",
    fee: 10800,
    category: "Postgraduate Programs",
    description: "Advanced commerce and business studies program focusing on advanced accounting, finance, business management, and research methodologies.",
    eligibility: "Bachelor's degree in Commerce or related field",
    highlights: ["Advanced business concepts", "Financial analysis skills", "Research component", "Professional development"]
  },

  // BCA - 5th position
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    fee: 40200,
    category: "Undergraduate Programs", 
    description: "A technical undergraduate program covering computer applications, programming languages, software development, and IT fundamentals.",
    eligibility: "10+2 with Mathematics as a subject",
    highlights: ["IT and programming focus", "Hands-on practical training", "Industry-relevant skills", "Software development emphasis"]
  },

  // BBA - 6th position
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    fee: 28800,
    category: "Undergraduate Programs",
    description: "Undergraduate business administration program covering management principles, marketing, finance, human resources, and entrepreneurship fundamentals.",
    eligibility: "10+2 or equivalent from a recognized board",
    highlights: ["Business management focus", "Leadership development", "Industry exposure", "Entrepreneurship skills"]
  },

  // BA - 7th position
  {
    id: "ba",
    name: "Bachelor of Arts (BA)",
    duration: "3 Years",
    fee: 7200,
    category: "Undergraduate Programs",
    description: "A comprehensive undergraduate program covering various subjects in humanities and social sciences, designed to provide a broad foundation in liberal arts education.",
    eligibility: "10+2 or equivalent from a recognized board",
    highlights: ["Flexible study schedule", "Wide range of elective subjects", "Industry-relevant curriculum", "Distance learning mode"]
  },

  // B.Sc - 8th position
  {
    id: "bsc",
    name: "Bachelor of Science (B.Sc)",
    duration: "3 Years",
    fee: 16200,
    category: "Undergraduate Programs",
    description: "Science undergraduate program offering specializations in various scientific disciplines including Mathematics, Physics, Chemistry, and Life Sciences.",
    eligibility: "10+2 with Science subjects",
    highlights: ["Multiple specializations available", "Research-oriented approach", "Laboratory-based learning", "Scientific methodology focus"]
  },

  // B.Com - 9th position (rest of the order remains same)
  {
    id: "bcom",
    name: "Bachelor of Commerce (B.Com)",
    duration: "3 Years", 
    fee: 10800,
    category: "Undergraduate Programs",
    description: "A professional undergraduate degree focusing on commerce, accounting, finance, and business studies to prepare students for careers in business and finance.",
    eligibility: "10+2 with Mathematics or equivalent",
    highlights: ["Commerce and finance focused", "Practical business knowledge", "Career-oriented curriculum", "Industry partnerships"]
  },

  // M.Sc - 10th position
  {
    id: "msc",
    name: "Master of Science (M.Sc)",
    duration: "2 Years", 
    fee: 18000,
    category: "Postgraduate Programs",
    description: "Advanced science program with specializations in Mathematics, Physics, Chemistry, Environmental Science, and other scientific disciplines.",
    eligibility: "Bachelor's degree in Science or related field",
    highlights: ["Research-intensive program", "Laboratory work", "Scientific methodology", "Multiple specializations"]
  },

  // Diploma Programs
  {
    id: "dmlt",
    name: "Diploma in Medical Laboratory Technology (DMLT)",
    duration: "2 Years",
    fee: 18600,
    category: "Diploma Programs",
    description: "Professional diploma program preparing students for careers in medical laboratory technology and pathology services.",
    eligibility: "10+2 with Science subjects (PCB)",
    highlights: ["Healthcare sector focus", "Practical laboratory training", "Medical technology skills", "Job-oriented program"]
  },
  {
    id: "dafe",
    name: "Diploma in Agriculture and Food Engineering (DAFE)",
    duration: "2 Years",
    fee: 15600,
    category: "Diploma Programs", 
    description: "Specialized diploma focusing on agricultural engineering, food processing technology, and sustainable farming practices.",
    eligibility: "10+2 with Science subjects",
    highlights: ["Agriculture technology focus", "Food processing techniques", "Sustainable farming", "Rural development oriented"]
  },

  // Certificate Programs
  {
    id: "cig",
    name: "Certificate in Information and Communication Technology (CIC)",
    duration: "6 Months",
    fee: 3600,
    category: "Certificate Programs",
    description: "Short-term certificate program covering basic computer skills, internet usage, and digital literacy essentials.",
    eligibility: "10th pass or equivalent",
    highlights: ["Basic computer skills", "Digital literacy", "Short duration", "Industry-relevant skills"]
  },
  {
    id: "cul",
    name: "Certificate in Urdu Language (CUL)", 
    duration: "6 Months",
    fee: 1800,
    category: "Certificate Programs",
    description: "Language certificate program for learning Urdu language, literature, and cultural aspects.",
    eligibility: "10th pass or equivalent", 
    highlights: ["Language proficiency", "Cultural understanding", "Literature component", "Communication skills"]
  },

  // PG Diploma Programs
  {
    id: "pgdca",
    name: "Post Graduate Diploma in Computer Applications (PGDCA)",
    duration: "1 Year",
    fee: 19500,
    category: "PG Diploma Programs",
    description: "Intensive postgraduate diploma covering advanced computer applications, programming, and software development for working professionals.",
    eligibility: "Bachelor's degree from recognized university",
    highlights: ["Industry-focused curriculum", "Practical training", "Career advancement", "Professional development"]
  },
  {
    id: "pgdhrm",
    name: "Post Graduate Diploma in Human Resource Management (PGDHRM)",
    duration: "1 Year", 
    fee: 15600,
    category: "PG Diploma Programs",
    description: "Specialized diploma in human resource management covering recruitment, training, compensation, and organizational behavior.",
    eligibility: "Bachelor's degree with 50% marks",
    highlights: ["HR specialization", "Management skills", "Industry exposure", "Professional certification"]
  },

  // Doctoral Programs  
  {
    id: "phd",
    name: "Doctor of Philosophy (Ph.D)",
    duration: "3-6 Years",
    fee: 21600,
    category: "Doctoral Programs",
    description: "Research-intensive doctoral program for advanced study and original research in various academic disciplines.",
    eligibility: "Master's degree with 55% marks (50% for SC/ST)",
    highlights: ["Original research", "Academic excellence", "Publication opportunities", "Research methodology training"]
  }
];
