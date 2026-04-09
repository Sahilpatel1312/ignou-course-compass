import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Users, Award, TrendingUp, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import CounselingForm from "@/components/CounselingForm";
import Footer from "@/components/Footer";
//import Slideshow from "@/components/Slideshow";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import { ignouCourses, courseCategories } from "@/data/ignouCourses";
import { useSmartPopup } from "@/hooks/useSmartPopup";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState("");
  const navigate = useNavigate();
  const { showPopup, openPopup, closePopup, markFormSubmitted } = useSmartPopup();

  const filteredCourses = ignouCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleApplyNow = (courseName: string) => {
    setPreSelectedCourse(courseName);
    setIsCounselingOpen(true);
  };

  const handleDownloadBrochure = (courseName: string) => {
    setPreSelectedCourse(courseName);
    setIsCounselingOpen(true);
  };

  const handleCounselingClick = () => {
    setPreSelectedCourse("");
    setIsCounselingOpen(true);
  };

  const handleMbaDetailsClick = () => {
    navigate('/mba');
  };

  const handlePopupClose = () => {
    closePopup();
  };

  // WebSite + Organization + AggregateRating structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "IGNOU Distance",
        "url": "https://www.ignoudistance.in",
        "description": "IGNOU Online Courses 2026 – Admission Open for July Session. Free counselling for 200+ UGC-approved programs.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.ignoudistance.in/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "IGNOU Distance",
        "url": "https://www.ignoudistance.in",
        "logo": "https://www.ignoudistance.in/lovable-uploads/logo.png",
        "description": "Free counselling & guidance for IGNOU distance & online education programs. UGC approved, NAAC A++ accredited.",
        "sameAs": ["https://www.facebook.com/ignoudistance", "https://www.youtube.com/ignoudistance"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "bestRating": "5",
          "ratingCount": "12840",
          "reviewCount": "8650"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Admissions",
          "telephone": "+91-11-29571000",
          "availableLanguage": ["English", "Hindi"]
        }
      }
    ]
  };

  // FAQ structured data for rich snippets in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does IGNOU MBA cost in 2026?",
        "acceptedAnswer": { "@type": "Answer", "text": "IGNOU MBA tuition fee ranges from INR 6,300 to INR 68,000 depending on the specialization. The July 2026 session admission is now open." }
      },
      {
        "@type": "Question",
        "name": "Is IGNOU degree valid for government jobs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, IGNOU degrees are UGC-approved and NAAC A++ accredited. They are valid for all government and private sector jobs as well as higher education." }
      },
      {
        "@type": "Question",
        "name": "What is the last date for IGNOU July 2026 admission?",
        "acceptedAnswer": { "@type": "Answer", "text": "IGNOU July 2026 session registrations are open now. Last dates are typically in August-September 2026. Apply early to secure your seat." }
      },
      {
        "@type": "Question",
        "name": "Can I study IGNOU courses online?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, IGNOU offers fully online courses for MBA, MCA, BCA, BBA, B.Com, M.Com, BA, MA and 200+ more programs with flexible learning." }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="IGNOU Online Courses 2026 (July Session) – Admission Open | Free Counselling"
        description="IGNOU Online Courses July 2026 Session – Admission Open Now! Get free counselling for UGC-approved Online MBA, MCA, BCA, MA, B.Com, BA & 200+ programs. Affordable fees, flexible learning & NAAC A++ accredited degrees."
        keywords="IGNOU Online Courses 2026, IGNOU July 2026 Session, IGNOU Admission 2026, IGNOU Distance Education 2026, Online MBA IGNOU 2026, IGNOU Online Degree, UGC Approved Online Courses, IGNOU Free Counselling, IGNOU MCA Online, IGNOU BCA Online, Best Online University India, IGNOU July Session Last Date"
        canonical="/"
      />
      {/* Structured data for rich snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header onCounselingClick={handleCounselingClick} />
      
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-sm md:text-base font-semibold animate-pulse">🔥 IGNOU July 2026 Admission Open – Limited Seats!</span>
          <button
            onClick={handleCounselingClick}
            className="bg-white text-red-600 font-bold text-xs md:text-sm px-4 py-1 rounded-full hover:bg-yellow-100 transition-colors"
          >
            Enquire Now →
          </button>
        </div>
      </div>
      
      {/* Hero Stats Section with Embedded Counseling Form */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:space-x-8">
            {/* Left side content (Embedded Counseling Form) */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <div className="h-full flex items-center justify-center py-2 md:py-0">
                <CounselingForm 
                  isOpen={true} 
                  onClose={() => {}} 
                  preSelectedCourse="Online Master of Business Administration (MBA)"
                  embedded={true}
                />
              </div>
            </div>

            {/* Right side content (Headings and Stats) */}
            <div className="lg:w-2/3">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose IGNOU Distance Education 2026?</h2>
                <p className="text-xl text-gray-600 max-w-3xl lg:mx-0 mx-auto">
                  India's largest open university offering UGC-approved IGNOU online degrees with world-class distance learning programs, flexibility and affordability
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <Users className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-blue-600">40+ Lakh</h3>
                  <p className="text-sm text-gray-600">Students Enrolled</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <BookOpen className="h-10 w-10 text-green-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-green-600">200+</h3>
                  <p className="text-sm text-gray-600">Courses Available</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                  <Award className="h-10 w-10 text-yellow-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-yellow-600">UGC</h3>
                  <p className="text-sm text-gray-600">Approved & Recognized</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <TrendingUp className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-purple-600">25+ Years</h3>
                  <p className="text-sm text-gray-600">Educational Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MBA Highlight Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Explore IGNOU Online MBA Program 2026 – July Session</h2>
            <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              IGNOU MBA Online Admission 2026 Open Now – Get your UGC-approved Online MBA degree from India's #1 Open University. Limited seats for July 2026 session!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleMbaDetailsClick}
                variant="outline" 
                className="border-white text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 px-6 py-2"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Check Details
              </Button>
              <Button 
                onClick={() => handleApplyNow("Online Master of Business Administration (MBA)")}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-2"
              >
                Get Counselling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12" data-section="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Online Courses by IGNOU</h2>
            <p className="text-xl text-gray-600">
              Explore IGNOU Online Degree Programs and find the perfect UGC-approved course to advance your career with IGNOU Distance Learning Programs
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg border-gray-300 focus:border-blue-500"
              />
            </div>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-1 h-auto p-1 bg-gray-100">
                <TabsTrigger value="All Categories" className="text-xs py-2">All Courses</TabsTrigger>
                {courseCategories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs py-2 text-center">
                    {category.replace(' Programs', '')}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id}>
                <CourseCard 
                  course={course} 
                  onApplyNow={handleApplyNow}
                  onDownloadBrochure={handleDownloadBrochure}
                />
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* About IGNOU Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About IGNOU - India's Premier Distance Learning University</h2>
            <div className="text-lg text-gray-600 space-y-4 text-left">
              <p>
                <strong>Indira Gandhi National Open University (IGNOU)</strong>, established in 1985, is India's largest open university and a pioneer in distance education. With over 4 million students enrolled across India and abroad, IGNOU has revolutionized higher education accessibility through its innovative teaching methodologies and comprehensive support system.
              </p>
              <p>
                IGNOU is recognized by the University Grants Commission (UGC), accredited by NAAC with Grade A++, and ranked No. 1 in the NIRF 2024 Open University category. The university offers 200+ programs through 21 schools of study, 67+ regional centers, and an extensive network of study centers.
              </p>
              <p>
                What sets IGNOU apart is its commitment to quality education at affordable fees, flexible learning schedules, and comprehensive student support services including eGyankosh (digital repository), Gyandhara (audio counseling), GyanVani (educational FM radio), and Gyandarshan (education TV channel).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why IGNOU is the Best Choice for Distance Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">UGC Approved & NAAC A++ Accredited</h3>
              <p className="text-gray-600">All IGNOU degrees are UGC-approved and widely accepted by employers and institutions for jobs and higher education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Affordable Fee Structure</h3>
              <p className="text-gray-600">Quality education at pocket-friendly fees, making higher education accessible to students from all economic backgrounds.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Flexible Learning Options</h3>
              <p className="text-gray-600">Study at your own pace with online and distance learning modes, perfect for working professionals and homemakers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Comprehensive Study Materials</h3>
              <p className="text-gray-600">High-quality printed books, online resources, video lectures, and digital library access for complete learning support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Strong Alumni Network</h3>
              <p className="text-gray-600">Join millions of successful IGNOU graduates working in top companies and government positions worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Multiple Online Course Cycles</h3>
              <p className="text-gray-600">Two Online Course cycles per year (January & July) provide flexibility to start your educational journey when convenient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Latest from Our Blog</h2>
            <p className="text-gray-600">Stay updated with IGNOU news, admission guides, and career tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Does IGNOU Degree Have Any Value in 2026?", slug: "does-ignou-degree-have-value-in-2026", category: "Career Guidance" },
              { title: "Best IGNOU Distance Courses After 12th", slug: "best-ignou-distance-courses-after-12th", category: "Course Guide" },
              { title: "IGNOU Degree & New UGC Guidelines 2026", slug: "ignou-degree-validity-new-ugc-guidelines-2026", category: "News & Updates" },
              { title: "IGNOU Admission 2026 – Complete Guide", slug: "ignou-admission-2026-complete-guide-courses-fees", category: "Admission Guide" },
            ].map((post) => (
              <button key={post.slug} onClick={() => navigate(`/blog/${post.slug}`)} className="text-left p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow transition-all border border-gray-100">
                <span className="text-xs text-blue-600 font-semibold">{post.category}</span>
                <h3 className="text-sm font-bold text-gray-800 mt-1 hover:text-blue-600">{post.title}</h3>
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button onClick={() => navigate('/blog')} variant="outline" className="text-blue-600 border-blue-600">
              View All Blog Posts →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">IGNOU July 2026 Session – Admission Open Now!</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get free personalized counselling for IGNOU Online Courses 2026. Expert guidance to choose the right UGC-approved degree program for your career goals.
          </p>
          <button
            onClick={handleCounselingClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Free Career Counseling
          </button>
        </div>
      </section>

      <Footer />
      
      {/* Regular Counseling Form */}
      <CounselingForm
        isOpen={isCounselingOpen}
        onClose={() => setIsCounselingOpen(false)}
        preSelectedCourse={preSelectedCourse}
        onFormSubmitted={markFormSubmitted}
      />

      {/* Smart Popup Counseling Form */}
      <CounselingForm
        isOpen={showPopup}
        onClose={handlePopupClose}
        preSelectedCourse=""
        onFormSubmitted={markFormSubmitted}
      />

      {/* Floating Help Button */}
      <FloatingHelpButton onClick={openPopup} />
    </div>
  );
};

export default Index;
