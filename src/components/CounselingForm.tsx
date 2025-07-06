import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, User, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { ignouCourses } from "@/data/ignouCourses";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface CounselingFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
  embedded?: boolean;
}

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Puducherry"
];

const CounselingForm = ({ isOpen, onClose, preSelectedCourse, embedded = false }: CounselingFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interestedCourse: preSelectedCourse || "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.state) {
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

    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const sheetData = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        location: formData.state,
        interestedCourse: formData.interestedCourse,
        timestamp: new Date().toISOString(),
      };

      console.log("Sending data to Google Sheets:", sheetData);

      // Call the Edge Function to store data in Google Sheets
      const { data, error } = await supabase.functions.invoke('counselling-form', {
        body: sheetData
      });

      if (error) {
        console.error("Edge Function error:", error);
        throw new Error(error.message || "Failed to submit form");
      }

      console.log("Google Sheets response:", data);

      // Success message
      toast({
        title: "Counseling Request Submitted!",
        description: "Our counselor will contact you within 24 hours.",
      });
      
      // Reset form and close
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        interestedCourse: "",
        state: "",
      });
      
      if (!embedded) {
        onClose();
      }

    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!embedded && !isOpen) return null;

  const formContent = (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get 100% Free Counselling</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <User className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
          </div>
          <Input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Mail className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
          </div>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Phone className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
          </div>
          <Input
            type="tel"
            placeholder="Enter your 10-digit phone number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={10}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <div className="flex items-center mb-2">
            <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Interested Course</label>
          </div>
          <Select 
            value={formData.interestedCourse} 
            onValueChange={(value) => setFormData({...formData, interestedCourse: value})}
            disabled={isSubmitting}
          >
            <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <SelectValue placeholder="Select Course..." />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {ignouCourses.map((course) => (
                <SelectItem key={course.id} value={course.name}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Location (State)</label>
          </div>
          <Select 
            value={formData.state} 
            onValueChange={(value) => setFormData({...formData, state: value})}
            disabled={isSubmitting}
          >
            <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <SelectValue placeholder="Select State..." />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg mt-6 transition-colors duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </>
  );

  if (embedded) {
    return (
      <Card className="w-full bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          {formContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            disabled={isSubmitting}
          >
            <X className="h-5 w-5" />
          </Button>
          
          <CardContent className="p-8">
            {formContent}
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CounselingForm;
