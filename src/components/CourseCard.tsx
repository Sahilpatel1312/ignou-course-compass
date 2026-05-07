
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, CheckCircle, ExternalLink, Download, GraduationCap } from "lucide-react";
import { Course } from "@/data/ignouCourses";
import { useNavigate } from "react-router-dom";

import gradMba from "@/assets/grad-mba.jpg";
import gradMca from "@/assets/grad-mca.jpg";
import gradMa from "@/assets/grad-ma.jpg";
import gradMcom from "@/assets/grad-mcom.jpg";
import gradBca from "@/assets/grad-bca.jpg";
import gradBba from "@/assets/grad-bba.jpg";
import gradBa from "@/assets/grad-ba.jpg";
import gradBcom from "@/assets/grad-bcom.jpg";

const courseImageMap: Record<string, string> = {
  "Online Master of Business Administration (MBA)": gradMba,
  "Online Master of Computer Applications (MCA)": gradMca,
  "Online Master of Arts (MA)": gradMa,
  "Online Master of Commerce (M.Com)": gradMcom,
  "Online Bachelor of Computer Applications (BCA)": gradBca,
  "Online Bachelor of Business Administration (BBA)": gradBba,
  "Online Bachelor of Arts (BA)": gradBa,
  "Online Bachelor of Commerce (B.Com)": gradBcom,
};

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
      navigate(route);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const courseImage = courseImageMap[course.name];

  return (
    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg bg-white">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={handleCheckDetails}>
        {courseImage ? (
          <img
            src={courseImage}
            alt={`${course.name} student`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            width={640}
            height={512}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <GraduationCap className="h-16 w-16 text-white/80" />
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Badge on image */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-blue-700 border-0 font-semibold text-xs backdrop-blur-sm">
            {course.category}
          </Badge>
        </div>
        {/* Duration on image */}
        <div className="absolute bottom-3 left-3 flex items-center text-white text-sm font-medium">
          <Clock className="h-4 w-4 mr-1.5" />
          {course.duration}
        </div>
      </div>

      <CardContent className="p-5 space-y-3">
        {/* Title */}
        <h3
          className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 leading-tight"
          onClick={handleCheckDetails}
        >
          {course.name}
        </h3>

        {/* Eligibility */}
        <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-2.5">
          <BookOpen className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-700"><span className="font-semibold text-blue-700">Eligibility:</span> {course.eligibility}</p>
        </div>

        {/* Fee Structure */}
        <div className="flex items-start gap-2 bg-amber-50 rounded-lg p-2.5">
          <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-700">
            <span className="font-semibold text-amber-700">Fee Structure:</span> ₹{course.fee.toLocaleString('en-IN')} <span className="text-gray-500">(total / {course.duration})</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-2 space-y-2">
          <div className="flex gap-2">
            <Button
              onClick={() => onDownloadBrochure(course.name)}
              size="sm"
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Brochure
            </Button>
            <Button
              onClick={handleCheckDetails}
              variant="outline"
              size="sm"
              className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50 text-xs"
            >
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Details
            </Button>
          </div>
          <Button
            onClick={() => onApplyNow(course.name)}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] text-sm font-semibold"
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            Get Counselling
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
