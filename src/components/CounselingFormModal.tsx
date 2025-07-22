import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { ignouCourses } from "@/data/ignouCourses";
import { useToast } from "@/hooks/use-toast";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Puducherry"
];

interface CounselingFormModalProps {
  trigger: React.ReactNode;
  preSelectedCourse?: string;
}

export const CounselingFormModal = ({ trigger, preSelectedCourse }: CounselingFormModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interestedCourse: preSelectedCourse || "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
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

        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          interestedCourse: "",
          state: "",
        });

        setOpen(false);
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get 100% Free Counselling
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Full Name */}
          <div>
            <div className="flex items-center mb-2">
              <User className="h-4 w-4 text-primary mr-2" />
              <label className="text-sm font-semibold">Full Name</label>
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
              <Mail className="h-4 w-4 text-primary mr-2" />
              <label className="text-sm font-semibold">Email Address</label>
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
              <Phone className="h-4 w-4 text-primary mr-2" />
              <label className="text-sm font-semibold">Phone Number</label>
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
              <BookOpen className="h-4 w-4 text-primary mr-2" />
              <label className="text-sm font-semibold">Interested Course</label>
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
              <MapPin className="h-4 w-4 text-primary mr-2" />
              <label className="text-sm font-semibold">State</label>
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

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};