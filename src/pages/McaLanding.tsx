import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, GraduationCap, Clock, IndianRupee, Users, Award, BookOpen, TrendingUp, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CounselingForm from "@/components/CounselingForm";

const McaLanding = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState("Online Master of Computer Applications (MCA)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCounselingOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleApplyNow = () => {
    setPreSelectedCourse("Online Master of Computer Applications (MCA)");
    setIsCounselingOpen(true);
  };

  const handleCounselingClick = () => {
    setPreSelectedCourse("Online Master of Computer Applications (MCA)");
    setIsCounselingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCounselingClick={handleCounselingClick} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-yellow-500 text-blue-900 mb-4">IGNOU Online MCA Program</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Online Master of Computer Applications (MCA)
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Master advanced programming and software engineering with IGNOU's comprehensive Online MCA program - designed for aspiring IT professionals.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>3 Years Duration</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>₹58,500 Total Fee</span>
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
                preSelectedCourse="Online Master of Computer Applications (MCA)"
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
            <p className="text-xl text-gray-600">Your IGNOU MCA degree will look like this</p>
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
            <p className="text-xl text-gray-600">Why choose IGNOU MCA?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Advanced Programming</h3>
              <p className="text-gray-600">Master multiple programming languages and frameworks</p>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with distance learning mode</p>
            </Card>
            
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Industry Projects</h3>
              <p className="text-gray-600">Hands-on experience through practical assignments</p>
            </Card>
            
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Technology Focus</h3>
              <p className="text-gray-600">Emerging technologies and software development</p>
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
                    <span>Bachelor's degree with Mathematics at 10+2 or graduation level</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Basic computer knowledge preferred</span>
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
                    <span className="font-bold text-xl">₹58,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Year</span>
                    <span className="font-semibold">₹19,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Semester</span>
                    <span className="font-semibold">₹9,750</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">MCA Specializations Available</h2>
            <p className="text-xl text-gray-600">Choose your area of expertise from our comprehensive specialization options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Software Engineering", description: "Master software development lifecycle, testing, and project management" },
              { name: "Database Management", description: "Learn advanced database design, administration, and data analytics" },
              { name: "Web Development", description: "Full-stack web development with modern frameworks and technologies" },
              { name: "Mobile Application Development", description: "Native and cross-platform mobile app development" },
              { name: "Artificial Intelligence", description: "Machine learning, deep learning, and AI application development" },
              { name: "Cybersecurity", description: "Information security, ethical hacking, and cybersecurity management" },
              { name: "Cloud Computing", description: "Cloud architecture, deployment, and management strategies" },
              { name: "Data Science", description: "Big data analytics, data mining, and statistical computing" },
              { name: "Network Administration", description: "Network design, administration, and security protocols" }
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why IGNOU MCA Stands Out</h2>
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
              <p className="text-gray-600">Largest network of IT professionals across industries</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Practical Learning</h3>
              <p className="text-gray-600">Hands-on projects and industry-relevant curriculum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your IT Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful IT professionals who have advanced their careers with IGNOU MCA
          </p>
          <Button 
            onClick={handleApplyNow}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply for MCA Now
          </Button>
        </div>
      </section>

      <Footer />
      
      <CounselingForm 
        isOpen={isCounselingOpen} 
        onClose={() => setIsCounselingOpen(false)}
        preSelectedCourse={preSelectedCourse}
      />
    </div>
  );
};

export default McaLanding;
