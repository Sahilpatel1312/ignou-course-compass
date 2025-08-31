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

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="IGNOU Online Courses 2025 (July Session) – Get Counselling Today"
        description="IGNOU Online courses 2025 Last Date July 31st. Get Counselling for UGC-approved IGNOU Distance Education, Online MBA, MCA, BCA, MA, BCom programs. 200+ courses available with flexible schedules & affordable fees."
        keywords="IGNOU Online courses 2025, IGNOU Distance Education, IGNOU Online Courses, Get Counselling for IGNOU Online Course 2025 Online, UGC-approved IGNOU Online Degrees, Best Online Courses by IGNOU, IGNOU July 2025 Session"
        canonical="/"
      />
      <Header onCounselingClick={handleCounselingClick} />
      
      {/* Slideshow Section */}
      {/* <Slideshow /> */}
      
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose IGNOU Distance Education 2025?</h2>
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
            <h2 className="text-3xl font-bold mb-4">Explore IGNOU Online MBA Program 2025- Online MBA from IGNOU</h2>
            <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Know more about IGNOU MBA Online Course 2025 - Get your Online MBA from IGNOU, a prestigious UGC-approved comprehensive postgraduate management degree
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

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Help with IGNOU Distance & Online Education 2025</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get personalized guidance for IGNOU Online Course 2025. Free consultation to help you choose the right IGNOU online degree program for your career goals.
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
