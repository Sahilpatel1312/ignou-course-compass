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

const MbaLanding = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState("Online Master of Business Administration (MBA)");
  const { showPopup, openPopup, closePopup, markFormSubmitted } = useSmartPopup();

  const handleApplyNow = () => {
    setPreSelectedCourse("Online Master of Business Administration (MBA)");
    setIsCounselingOpen(true);
  };

  const handleCounselingClick = () => {
    setPreSelectedCourse("Online Master of Business Administration (MBA)");
    setIsCounselingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="IGNOU MBA Admission 2025 - Online MBA from IGNOU | UGC Approved Degree"
        description="Apply for IGNOU MBA Admission 2025. Get Online MBA from IGNOU with 9 specializations. UGC-approved IGNOU Online MBA Fee Structure ₹62,000. Distance education MBA program."
        keywords="IGNOU MBA Admission 2025, Online MBA from IGNOU, IGNOU Online MBA Fee Structure, UGC-approved IGNOU Online Degrees, IGNOU Distance Learning Programs, Best Online Courses by IGNOU"
        canonical="/mba"
        course={{
          name: "Master of Business Administration (MBA)",
          description: "Comprehensive postgraduate management degree for aspiring business leaders",
          duration: "2 Years",
          fee: "₹62,000",
          eligibility: "Bachelor's degree with 50% marks from recognized university"
        }}
      />
      <Header onCounselingClick={handleCounselingClick} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-yellow-500 text-blue-900 mb-4">IGNOU Online MBA Program</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IGNOU MBA Admission 2025 - Online MBA from IGNOU
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Apply for IGNOU MBA Admission 2025. Get your Online MBA from IGNOU - a UGC-approved comprehensive postgraduate management degree with best IGNOU Online MBA Fee Structure.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>2 Years Duration</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>₹62,000 Total Fee</span>
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
                preSelectedCourse="Online Master of Business Administration (MBA)"
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
            <p className="text-xl text-gray-600">Your IGNOU MBA degree will look like this</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">IGNOU Online MBA Program Highlights</h2>
            <p className="text-xl text-gray-600">Why choose Online MBA from IGNOU Distance Education?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">Cover all aspects of business management and leadership</p>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with distance learning mode</p>
            </Card>
            
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Career Growth</h3>
              <p className="text-gray-600">Boost your career prospects and earning potential</p>
            </Card>
            
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Degree recognized by UGC and accepted by employers</p>
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
                    <span>Bachelor's degree with 50% marks from recognized university</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Working professionals with relevant experience preferred</span>
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
                    <span className="font-bold text-xl">₹62,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Year</span>
                    <span className="font-semibold">₹31,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Semester</span>
                    <span className="font-semibold">₹15,500</span>
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

      {/* Curriculum Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              MBA Curriculum Structure
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive 2-year program divided into 4 semesters with core subjects and specialization tracks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester I</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Management Functions & Organizational Processes</li>
                <li>• Human Resource Management</li>
                <li>• Business Environment</li>
                <li>• Accounting for Managers</li>
                <li>• Quantitative Analysis for Managerial Applications</li>
                <li>• Marketing Management</li>
                <li>• Business Communication</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester II</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Information Systems for Managers</li>
                <li>• Management of Machines & Materials</li>
                <li>• Managerial Economics</li>
                <li>• Social Processes & Behavioral Issues</li>
                <li>• Strategic Management</li>
                <li>• Business Laws</li>
                <li>• Financial Management</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester III</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Research Methodology for Management Decisions</li>
                <li>• International Business Management</li>
                <li>• Project Work</li>
                <li>• Specialization Subject 1</li>
                <li>• Specialization Subject 2</li>
                <li>• Specialization Subject 3</li>
                <li>• Specialization Subject 4</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester IV</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Strategic Management</li>
                <li>• Entrepreneurship</li>
                <li>• Total Quality Management</li>
                <li>• Business Ethics & CSR</li>
                <li>• Specialization Subject 5</li>
                <li>• Specialization Subject 6</li>
                <li>• Specialization Subject 7</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">MBA Specializations Available</h2>
            <p className="text-xl text-gray-600">Choose your area of expertise from our comprehensive specialization options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Human Resource Management", description: "Focus on talent acquisition, employee development, and organizational behavior" },
              { name: "Marketing Management", description: "Learn digital marketing, brand management, and consumer behavior strategies" },
              { name: "Financial Management", description: "Master financial planning, investment analysis, and corporate finance" },
              { name: "Operations Management", description: "Optimize business processes, supply chain, and quality management" },
              { name: "Information Technology Management", description: "Bridge technology and business with IT strategy and systems management" },
              { name: "International Business", description: "Understand global markets, trade policies, and cross-cultural management" },
              { name: "Rural & Agribusiness Management", description: "Specialize in agricultural economics and rural development strategies" },
              { name: "Banking & Financial Services", description: "Focus on banking operations, financial markets, and regulatory compliance" },
              { name: "Public Policy & Governance", description: "Learn public administration, policy analysis, and governance frameworks" }
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

      {/* Curriculum Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              MBA Curriculum Structure
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive 2-year program divided into 4 semesters with core subjects and specialization tracks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester I</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Management Functions & Organizational Processes</li>
                <li>• Human Resource Management</li>
                <li>• Business Environment</li>
                <li>• Accounting for Managers</li>
                <li>• Quantitative Analysis for Managerial Applications</li>
                <li>• Marketing Management</li>
                <li>• Business Communication</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester II</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Information Systems for Managers</li>
                <li>• Management of Machines & Materials</li>
                <li>• Managerial Economics</li>
                <li>• Social Processes & Behavioral Issues</li>
                <li>• Strategic Management</li>
                <li>• Business Laws</li>
                <li>• Financial Management</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester III</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Research Methodology for Management Decisions</li>
                <li>• International Business Management</li>
                <li>• Project Work</li>
                <li>• Specialization Subject 1</li>
                <li>• Specialization Subject 2</li>
                <li>• Specialization Subject 3</li>
                <li>• Specialization Subject 4</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Semester IV</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Strategic Management</li>
                <li>• Entrepreneurship</li>
                <li>• Total Quality Management</li>
                <li>• Business Ethics & CSR</li>
                <li>• Specialization Subject 5</li>
                <li>• Specialization Subject 6</li>
                <li>• Specialization Subject 7</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why IGNOU MBA Stands Out</h2>
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
              <p className="text-gray-600">Largest network of professionals across industries</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Self-Paced Learning</h3>
              <p className="text-gray-600">Study materials designed for working professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful professionals who have advanced their careers with IGNOU MBA
          </p>
          <Button 
            onClick={handleApplyNow}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply for MBA Now
          </Button>
        </div>
      </section>

      <Footer />
      
      {/* Smart Popup */}
      <CounselingForm 
        isOpen={showPopup} 
        onClose={closePopup}
        preSelectedCourse="Online Master of Business Administration (MBA)"
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

export default MbaLanding;
