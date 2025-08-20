
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, CheckCircle, ExternalLink, Download } from "lucide-react";
import { Course } from "@/data/ignouCourses";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  onApplyNow: (courseName: string) => void;
  onDownloadBrochure: (courseName: string) => void;
}

const CourseCard = ({ course, onApplyNow, onDownloadBrochure }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleCheckDetails = () => {
    const routeMap: { [key: string]: string } = {
      "Online Master of Business Administration (MBA)": "/mba",
      "Online Master of Computer Applications (MCA)": "/mca", 
      "Online Master of Arts (MA)": "/ma",
      "Online Master of Commerce (M.Com)": "/mcom",
      "Online Bachelor of Computer Applications (BCA)": "/bca",
      "Online Bachelor of Business Administration (BBA)": "/bba",
      "Online Bachelor of Arts (BA)": "/ba",
      "Online Bachelor of Commerce (B.Com)": "/bcom"
    };

    const route = routeMap[course.name];
    if (route) {
      // Navigate to the route and scroll to top
      navigate(route);
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group hover:border-l-yellow-500">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            {course.category}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {course.name}
        </CardTitle>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="h-4 w-4 mr-2" />
          Duration: {course.duration}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          {course.description}
        </p>
        
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
            Eligibility
          </h4>
          <p className="text-gray-600 text-sm">{course.eligibility}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Course Highlights</h4>
          <div className="space-y-1">
            {course.highlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {/* Two buttons in a row - mobile responsive */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              onClick={() => onDownloadBrochure(course.name)}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Download Brochure</span>
              <span className="sm:hidden">Brochure</span>
            </Button>
            
            <Button 
              onClick={handleCheckDetails}
              variant="outline" 
              className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-50 text-sm py-2"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Check Details</span>
              <span className="sm:hidden">Details</span>
            </Button>
          </div>
          
          <Button 
            onClick={() => onApplyNow(course.name)}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-sm py-2"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
