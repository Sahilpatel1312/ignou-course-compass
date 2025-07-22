import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does it cost to study MBA at IGNOU?",
    answer: "Candidates wanting to enrol in MBA at IGNOU have to pay the required first year fee amount. The payable amount is prescribed by the open university. IGNOU MBA tuition fee ranges from INR 6,300 to INR 68,000. This fee amount is as per the official website/sanctioning body. It is still subject to revision and hence, is indicative."
  },
  {
    question: "What is the IGNOU selection procedure for an MBA?",
    answer: "Indira Gandhi National Open University offers entrance-based admission to its MBA programmes. Candidates seeking admission have to appear for the university entrance exam. Before applying, the aspirants should check out the course-specific eligibility requirements. The basic eligibility requirement is: A pass in any bachelor's degree of a minimum of three years duration with a minimum of 50% aggregate (45% in case of reserved category candidates)."
  },
  {
    question: "Does IGNOU provide online classes? What are the admission dates for B.Com?",
    answer: "Yes, IGNOU offers online classes for its B.Com program. The current admission date for the July 2025 session is open."
  },
  {
    question: "May I fill the registration form online in IGNOU?",
    answer: "Yes, you can fill out the registration form for IGNOU (Indira Gandhi National Open University) online. You'll need to visit the official IGNOU admission website, specifically the online admission portal, ignouadmission.samarth.edu.in. There, you'll find the option to register as a new user, create a username and password, and then proceed to fill out the application form. Make sure to have all necessary documents and information ready before starting the online registration process."
  },
  {
    question: "Do I need to appear for an entrance exam for IGNOU admission?",
    answer: "IGNOU offers admission based on merit of the aspirants in the last qualifying exam to most of the programmes. However, candidates need to appear for entrance exam for a few courses. Below are the courses accepting IGNOU entrance exam scores for admission: Bachelor's & master's programmes."
  },
  {
    question: "Is graduation from IGNOU valid?",
    answer: "Yes, IGNOU (Indira Gandhi National Open University) degrees are generally valid and accepted for both government and private sector jobs, as well as for higher studies. IGNOU is a recognized university by the University Grants Commission (UGC) and the Distance Education Bureau (DEB). However, in some companies you may need to check with your HR department."
  },
  {
    question: "Is masters from IGNOU valid?",
    answer: "Yes, a Master's degree from IGNOU (Indira Gandhi National Open University) is generally considered valid. IGNOU is a recognized central university and is accredited by the University Grants Commission (UGC). However, in some companies you may need to check with your HR department."
  },
  {
    question: "What are the admission cycles for IGNOU?",
    answer: "IGNOU conducts admissions twice a year - in January and July sessions. For the January session, registrations typically start in November, and for the July session, registrations begin in May-June."
  },
  {
    question: "How many courses does IGNOU offer?",
    answer: "IGNOU offers over 200+ programmes at certificate, diploma, degree and doctoral levels through its 21 schools of study. The university provides courses in various fields including MBA, MCA, MA, BBA, BCA, BCOM, MCOM, BA, and many more."
  },
  {
    question: "What is the duration of IGNOU programmes?",
    answer: "The duration varies by programme: Certificate courses (6 months to 2 years), Diploma courses (1-2 years), Bachelor's degree programmes (3 years), Master's degree programmes (2 years), and Doctoral programmes (minimum 3 years)."
  },
  {
    question: "Are IGNOU degrees accepted by employers?",
    answer: "Yes, IGNOU degrees are widely accepted by both government and private sector employers. Being a UGC-recognized central university with NAAC A++ accreditation, IGNOU degrees hold the same value as regular university degrees for employment and higher education purposes."
  },
  {
    question: "What study materials are provided by IGNOU?",
    answer: "IGNOU provides comprehensive study materials including printed books, online resources through eGyankosh, audio-video content via Gyandhara and Gyandarshan, virtual classrooms, and access to the e-IGNOU digital library."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about IGNOU admission, courses, fees, and more
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Get personalized guidance from our counselors.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Our Counselors
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;