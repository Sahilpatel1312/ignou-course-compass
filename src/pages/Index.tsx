
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Users, Award, TrendingUp, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import CounselingForm from "@/components/CounselingForm";
import Footer from "@/components/Footer";
import Slideshow from "@/components/Slideshow";
import { ignouCourses, courseCategories } from "@/data/ignouCourses";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCounselingClick={handleCounselingClick} />
      
      {/* Slideshow Section */}
      <Slideshow />
      
      {/* Hero Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose IGNOU?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's largest open university offering world-class distance education with flexibility and affordability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-600">40+ Lakh</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600">200+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-yellow-600">UGC</h3>
              <p className="text-gray-600">Approved & Recognized</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600">25+ Years</h3>
              <p className="text-gray-600">Educational Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* MBA Highlight Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Online Master of Business Administration (MBA)</h2>
            <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Advance your career with IGNOU's prestigious Online MBA program - comprehensive postgraduate management degree
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
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12" data-section="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore IGNOU Courses</h2>
            <p className="text-xl text-gray-600">
              Find the perfect course to advance your career and achieve your educational goals
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

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors. Free consultation to help you choose the right course for your career goals.
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
      />

      {/* Popup Counseling Form */}
      {showPopup && (
        <CounselingForm 
          isOpen={showPopup} 
          onClose={handlePopupClose}
          preSelectedCourse=""
        />
      )}
    </div>
  );
};

export default Index;
