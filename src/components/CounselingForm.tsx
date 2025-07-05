import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, User, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { ignouCourses } from "@/data/ignouCourses";
import { useToast } from "@/hooks/use-toast";

interface CounselingFormProps {
  onClose: () => void;
  embedded?: boolean;
}

const CounselingForm = ({ onClose, embedded }: CounselingFormProps) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    interestedCourse: "",
    state: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
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

    const payload = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      location: formData.state,
      interestedCourse: formData.interestedCourse,
      timestamp: new Date().toISOString(),
    };

    const webhookUrl = "https://script.google.com/macros/s/AKfycbzyE7DQNoU1QbOw9hKEfPcy9T-B3ab8WxcvhUJixQhR705bpcKcj8KS1REyZU8NqclIRg/exec"; // <-- Replace with your actual URL

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.result === "success") {
        toast({
          title: "Counseling Request Submitted!",
          description: "Our counselor will contact you within 24 hours.",
        });

        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          interestedCourse: "",
          state: "",
        });

        if (!embedded) {
          onClose();
        }
      } else {
        toast({
          title: "Submission failed!",
          description: "Something went wrong while sending data.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      toast({
        title: "Network Error",
        description: "Unable to send data. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto relative">
      {!embedded && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <CardContent className="space-y-4 p-6">
        <h2 className="text-2xl font-semibold text-center">Free Counseling</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="State / Location"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-muted-foreground" />
            <Select
              onValueChange={(value) =>
                handleSelectChange("interestedCourse", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    formData.interestedCourse || "Select a course"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {ignouCourses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CounselingForm;
