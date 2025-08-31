
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, User, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { ignouCourses } from "@/data/ignouCourses";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface CounselingFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
  embedded?: boolean;
  onFormSubmitted?: () => void;
}

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Puducherry"
];

const CounselingForm = ({ isOpen, onClose, preSelectedCourse, embedded = false, onFormSubmitted }: CounselingFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interestedCourse: preSelectedCourse || "",
    state: "",
  });
  
  const [consentGiven, setConsentGiven] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.state) {
      toast({
        title: "Please fill all required fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    if (!consentGiven) {
      toast({
        title: "Consent Required",
        description: "Please agree to the terms and provide consent to be contacted.",
        variant: "destructive",
      });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian phone number.",
        variant: "destructive",
      });
      return;
    }

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
      const response = await fetch("https://ignou-server.onrender.com/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          course: formData.interestedCourse,
          state: formData.state,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "✅ Counseling Request Submitted!",
          description: "Our counselor will contact you within 24 hours.",
        });

        // 🔥 Trigger Google Ads conversion tracking
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17409910638/bI1GCMSi6_oaEO7O2O1A",
            value: 1.0,
            currency: "INR",
          });
        }

        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          interestedCourse: "",
          state: "",
        });
        setConsentGiven(true);

        // Notify parent component that form was submitted
        onFormSubmitted?.();

        if (!embedded) {
          onClose();
        }
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("❌ Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
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
        {/* Full Name */}
        <div>
          <div className="flex items-center mb-2">
            <User className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
          </div>
          <Input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center mb-2">
            <Mail className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
          </div>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center mb-2">
            <Phone className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
          </div>
          <Input
            type="tel"
            placeholder="Enter your 10-digit phone number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            maxLength={10}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Interested Course */}
        <div>
          <div className="flex items-center mb-2">
            <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">Interested Course</label>
          </div>
          <Select
            value={formData.interestedCourse}
            onValueChange={(value) => setFormData({ ...formData, interestedCourse: value })}
            disabled={isSubmitting}
          >
            <SelectTrigger>
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

        {/* State */}
        <div>
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-blue-600 mr-2" />
            <label className="text-sm font-semibold text-gray-700">State</label>
          </div>
          <Select
            value={formData.state}
            onValueChange={(value) => setFormData({ ...formData, state: value })}
            disabled={isSubmitting}
          >
            <SelectTrigger>
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

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            checked={consentGiven}
            onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
            disabled={isSubmitting}
            className="mt-1"
          />
          <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
            I Agree to ignoudistance{" "}
            <Link to="/disclaimer" className="text-blue-600 hover:underline" target="_blank">
              Disclaimer
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline" target="_blank">
              Privacy Policy
            </Link>{" "}
            and provide consent to be contacted via WhatsApp, SMS, Mail etc.
          </label>
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
        <CardContent className="p-6">{formContent}</CardContent>
      </Card>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
          <CardContent className="p-8">{formContent}</CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CounselingForm;
