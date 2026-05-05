import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Phone, User, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CallbackRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
}

const CallbackRequestModal = ({ isOpen, onClose, preSelectedCourse = "" }: CallbackRequestModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^[6-9]\d{9}$/.test(phone)) {
      toast({
        title: "Please enter valid details",
        description: "Name and a valid 10-digit Indian phone number are required.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const payload = JSON.stringify({
      fullName: name,
      phone,
      email: "",
      course: preSelectedCourse || "Callback Request",
      state: "Callback Request - Within 30 mins",
    });

    const send = async (retry = 0) => {
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 15000);
        const res = await fetch("https://ignou-server.onrender.com/api/submit-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          signal: ctrl.signal,
        });
        clearTimeout(t);
        if (!res.ok && retry < 2) setTimeout(() => send(retry + 1), 2000);
      } catch (err) {
        if (retry < 2) setTimeout(() => send(retry + 1), 2000);
      }
    };
    send();

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17409910638/bI1GCMSi6_oaEO7O2O1A",
        value: 1.0,
        currency: "INR",
      });
    }

    toast({
      title: "✅ Callback Requested!",
      description: "Our counsellor will call you within 30 minutes.",
    });

    setName("");
    setPhone("");
    setSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="h-5 w-5" />
          </Button>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-3">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Request a Callback in 30 Minutes</h2>
              <p className="text-sm text-gray-600 mt-1 flex items-center justify-center gap-1">
                <Clock className="h-4 w-4" /> Our expert will call you back shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-blue-600 mr-2" />
                  <label className="text-sm font-semibold text-gray-700">Your Name</label>
                </div>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={submitting}
                />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <Phone className="h-4 w-4 text-blue-600 mr-2" />
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                </div>
                <Input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  required
                  disabled={submitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl text-base"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Request Callback Now"}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted via phone, WhatsApp & SMS.
              </p>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CallbackRequestModal;
