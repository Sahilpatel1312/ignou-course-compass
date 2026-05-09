import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ignouCourses } from "@/data/ignouCourses";

/**
 * Compact horizontal inline enquiry form for the hero area.
 * Captures Phone + Course (minimum) and posts to the SAME lead endpoint
 * (Google Sheet) used by the main counselling form. Missing fields are
 * filled with safe placeholders so the row still lands in the sheet.
 *
 * The popup CounselingForm is intentionally NOT modified.
 */
const InlineEnquiryStrip = () => {
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast({
        title: "Enter a valid phone",
        description: "Please enter a valid 10-digit Indian mobile number.",
        variant: "destructive",
      });
      return;
    }
    if (!course) {
      toast({
        title: "Select a course",
        description: "Please choose the course you're interested in.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const payload = JSON.stringify({
      fullName: "Quick Enquiry",
      email: `quick+${phone}@ignoudistance.in`,
      phone,
      course,
      state: "Quick Enquiry (Hero Inline Form)",
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
      } catch {
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
      title: "✅ Enquiry Received!",
      description: "Our counsellor will call you shortly.",
    });

    setPhone("");
    setCourse("");
    setSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50 border-y border-blue-100">
      <div className="container mx-auto px-4 py-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3"
        >
          <div className="hidden sm:flex items-center font-semibold text-blue-700 whitespace-nowrap text-sm">
            ⚡ Get Fees in 30 sec:
          </div>
          <Input
            type="tel"
            inputMode="numeric"
            placeholder="10-digit mobile number"
            value={phone}
            maxLength={10}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            disabled={submitting}
            className="flex-1 bg-white"
            required
          />
          <Select value={course} onValueChange={setCourse} disabled={submitting}>
            <SelectTrigger className="flex-1 bg-white">
              <SelectValue placeholder="Select course..." />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {ignouCourses.map((c, i) => {
                const display =
                  i < 10
                    ? `Online ${c.name.match(/\(([^)]+)\)$/)?.[1] || c.name.split(" ").pop()}`
                    : c.name;
                return (
                  <SelectItem key={c.id} value={c.name}>
                    {display}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <Button
            type="submit"
            disabled={submitting}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold whitespace-nowrap"
          >
            {submitting ? "Sending..." : "Get Fees & Details"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InlineEnquiryStrip;
