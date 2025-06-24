
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, IndianRupee, BookOpen, CheckCircle } from "lucide-react";
import { Course } from "@/data/ignouCourses";

interface CourseCardProps {
  course: Course;
  onApplyNow: (courseName: string) => void;
}

const CourseCard = ({ course, onApplyNow }: CourseCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group hover:border-l-yellow-500">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            {course.category}
          </Badge>
          <div className="flex items-center text-green-600 font-bold text-lg">
            <IndianRupee className="h-5 w-5" />
            {course.fee.toLocaleString()}
          </div>
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

        <Button 
          onClick={() => onApplyNow(course.name)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
