import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, GraduationCap, Clock, IndianRupee, Users, Award, BookOpen, TrendingUp, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CounselingForm from "@/components/CounselingForm";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import { useSmartPopup } from "@/hooks/useSmartPopup";
import SEO from "@/components/SEO";

const MaLanding = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState("Online Master of Arts (MA)");
  const { showPopup, openPopup, closePopup, markFormSubmitted } = useSmartPopup();

  const handleApplyNow = () => {
    setPreSelectedCourse("Online Master of Arts (MA)");
    setIsCounselingOpen(true);
  };

  const handleCounselingClick = () => {
    setPreSelectedCourse("Online Master of Arts (MA)");
    setIsCounselingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="IGNOU MA Online Programs 2025 - Master of Arts Distance Education"
        description="Get Counselling for IGNOU MA Online Programs 2025. IGNOU MA in Political Science Online, IGNOU MA in English Online Course. UGC-approved distance learning programs. Low fees."
        keywords="IGNOU MA Online Programs, IGNOU MA in Political Science Online, IGNOU MA in English Online Course, UGC-approved IGNOU Online Degrees, IGNOU Distance Learning Programs"
        canonical="/ma"
        course={{
          name: "Master of Arts (MA)",
          description: "Comprehensive postgraduate arts program for academic and professional growth",
          duration: "2 Years",
          fee: "₹7,200",
          eligibility: "Bachelor's degree from recognized university"
        }}
      />
      <Header onCounselingClick={handleCounselingClick} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-yellow-500 text-blue-900 mb-4">IGNOU Online MA Program</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IGNOU MA Online Programs 2025 - UGC Approved Degrees
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Apply for IGNOU MA Online Programs 2025. Choose from IGNOU MA in Political Science Online, English and more - UGC-approved IGNOU Distance Learning Programs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>2 Years Duration</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>₹7,200 Total Fee</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>Distance Learning</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>UGC Recognized</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleApplyNow}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-lg"
                >
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Right Side - Embedded Counseling Form */}
            <div className="w-full">
              <CounselingForm 
                isOpen={true} 
                onClose={() => {}} 
                preSelectedCourse="Online Master of Arts (MA)"
                embedded={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sample Degree Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sample IGNOU Degree Certificate</h2>
            <p className="text-xl text-gray-600">Your IGNOU MA degree will look like this</p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <img 
                src="/lovable-uploads/f9d48fc2-828e-4cd5-a4d3-e9f977a87470.png" 
                alt="IGNOU Sample Degree Certificate" 
                className="w-full h-auto rounded-lg shadow-2xl border-4 border-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Highlights</h2>
            <p className="text-xl text-gray-600">Why choose IGNOU MA?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">Deep dive into humanities and social sciences</p>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with distance learning mode</p>
            </Card>
            
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Research Focus</h3>
              <p className="text-gray-600">Develop strong research and analytical skills</p>
            </Card>
            
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Recognized degree for higher studies and career</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Bachelor's degree from a recognized university</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>No minimum percentage requirement</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Open to all streams - no entrance exam required</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Total Program Fee</span>
                    <span className="font-bold text-xl">₹7,200</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Year</span>
                    <span className="font-semibold">₹3,600</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Semester</span>
                    <span className="font-semibold">₹1,800</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    *Fee can be paid semester-wise. Additional charges may apply for practical/project work.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">MA Specializations Available</h2>
            <p className="text-xl text-gray-600">Choose your area of expertise from our comprehensive specialization options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "English Literature", description: "Study classical and contemporary literature, literary criticism, and writing" },
              { name: "Hindi Literature", description: "Comprehensive study of Hindi literature, poetry, and language" },
              { name: "Political Science", description: "Explore political theory, international relations, and governance" },
              { name: "History", description: "Study ancient, medieval, and modern history with research methodology" },
              { name: "Sociology", description: "Understanding society, social behavior, and cultural patterns" },
              { name: "Psychology", description: "Human behavior, mental processes, and psychological research" },
              { name: "Economics", description: "Economic theory, policy analysis, and development economics" },
              { name: "Philosophy", description: "Study of fundamental questions about existence, ethics, and knowledge" },
              { name: "Public Administration", description: "Government administration, policy implementation, and public service" }
            ].map((specialization, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 hover:border-l-yellow-500">
                <div className="flex items-start mb-3">
                  <Star className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{specialization.name}</h3>
                    <p className="text-gray-600 text-sm">{specialization.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why IGNOU MA Stands Out</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">NAAC A+ Accredited</h3>
              <p className="text-gray-600">Highest quality education standards maintained</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">40+ Lakh Alumni</h3>
              <p className="text-gray-600">Largest network of graduates across various fields</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Research Opportunities</h3>
              <p className="text-gray-600">Strong foundation for research and higher studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Academic Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful graduates who have advanced their careers with IGNOU MA
          </p>
          <Button 
            onClick={handleApplyNow}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply for MA Now
          </Button>
        </div>
      </section>

      <Footer />
      
      {/* Smart Popup */}
      <CounselingForm 
        isOpen={showPopup} 
        onClose={closePopup}
        preSelectedCourse="Online Master of Arts (MA)"
        onFormSubmitted={markFormSubmitted}
      />
      
      {/* Manual Counseling Form */}
      <CounselingForm 
        isOpen={isCounselingOpen} 
        onClose={() => setIsCounselingOpen(false)}
        preSelectedCourse={preSelectedCourse}
        onFormSubmitted={markFormSubmitted}
      />
      
      {/* Floating Help Button */}
      <FloatingHelpButton onClick={openPopup} />
    </div>
  );
};

export default MaLanding;
