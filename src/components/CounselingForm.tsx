
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, UserCheck, Phone, MapPin, GraduationCap, Mail } from "lucide-react";
import { ignouCourses } from "@/data/ignouCourses";
import { useToast } from "@/hooks/use-toast";

interface CounselingFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
}

const CounselingForm = ({ isOpen, onClose, preSelectedCourse }: CounselingFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    interestedCourse: preSelectedCourse || "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.location) {
      toast({
        title: "Please fill all required fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    // Phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian phone number.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Counseling Request Submitted!",
      description: "Our counselor will contact you within 24 hours.",
    });

    console.log("Counseling Form Data:", formData);
    
    // Reset form and close
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      location: "",
      interestedCourse: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl font-bold">Free Career Counseling</CardTitle>
          <p className="text-blue-100">Get personalized guidance for your IGNOU journey</p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center">
                  <UserCheck className="h-4 w-4 mr-2 text-blue-600" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="border-gray-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  className="border-gray-300 focus:border-blue-500"
                  maxLength={10}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="border-gray-300 focus:border-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                Location (City/State) *
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter your city and state"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="border-gray-300 focus:border-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="flex items-center">
                <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                Interested Course
              </Label>
              <Select value={formData.interestedCourse} onValueChange={(value) => setFormData({...formData, interestedCourse: value})}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Select a course you're interested in" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {ignouCourses.map((course) => (
                    <SelectItem key={course.id} value={course.name}>
                      {course.name} - ₹{course.fee.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Submit Counseling Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounselingForm;
