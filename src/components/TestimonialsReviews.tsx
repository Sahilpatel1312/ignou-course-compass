import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Review {
  name: string;
  city?: string;
  course?: string;
  rating: number;
  text: string;
  date: string;
}

const SEED: Review[] = [
  { name: "Rahul Sharma", city: "Delhi", course: "Online MBA", rating: 5, text: "Great experience with IGNOU Distance counselling team. They guided me through every step of admission. Affordable fees and recognized degree.", date: "2026-03-12" },
  { name: "Priya Verma", city: "Lucknow", course: "Online MCA", rating: 5, text: "I am a working professional and IGNOU's flexibility was perfect. Counsellor explained specializations clearly and helped me pick the right one.", date: "2026-02-22" },
  { name: "Arjun Patel", city: "Ahmedabad", course: "Online BCA", rating: 4, text: "Smooth admission process. Study material is detailed and the LMS is easy to use. Highly recommend for 12th passouts.", date: "2026-04-04" },
  { name: "Sneha Iyer", city: "Bengaluru", course: "Online BBA", rating: 5, text: "UGC approved degree at a budget price. The counselling call answered every doubt about exams and placements.", date: "2026-01-18" },
  { name: "Mohit Singh", city: "Patna", course: "Online B.Com", rating: 5, text: "Best decision for distance learning. Got my ID card within days of enrolment. Thanks to the IGNOU Distance team!", date: "2026-03-29" },
  { name: "Ananya Das", city: "Kolkata", course: "Online MA", rating: 4, text: "Very supportive counsellors. Clarified all my doubts on eligibility and assignments. Worth the call.", date: "2026-02-09" },
];

interface Props {
  course?: string;
}

const TestimonialsReviews = ({ course }: Props) => {
  const [reviews, setReviews] = useState<Review[]>(SEED);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ignou_reviews") || "[]") as Review[];
      if (Array.isArray(saved) && saved.length) setReviews([...saved, ...SEED]);
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || text.trim().length < 10) {
      toast({ title: "Please add your name and a review (10+ chars)", variant: "destructive" });
      return;
    }
    const newReview: Review = {
      name: name.trim(),
      city: city.trim() || undefined,
      course,
      rating,
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      const saved = JSON.parse(localStorage.getItem("ignou_reviews") || "[]");
      localStorage.setItem("ignou_reviews", JSON.stringify([newReview, ...saved].slice(0, 50)));
    } catch {}
    setName(""); setCity(""); setText(""); setRating(5);
    toast({ title: "✅ Thank you!", description: "Your review has been posted." });
  };

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Student Testimonials & Reviews</h2>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="font-semibold">{avg}/5</span>
            <span className="text-sm text-gray-500">({reviews.length}+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {reviews.slice(0, 6).map((r, i) => (
            <Card key={i} className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <Quote className="h-6 w-6 text-blue-300 mb-2" />
                <div className="flex mb-2">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">"{r.text}"</p>
                <div className="border-t pt-2 flex items-center justify-between text-xs text-gray-600">
                  <div>
                    <p className="font-semibold text-gray-800">{r.name}</p>
                    <p>{[r.city, r.course].filter(Boolean).join(" • ")}</p>
                  </div>
                  <span>{r.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto border-blue-200 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Write a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
                <Input placeholder="City (optional)" value={city} onChange={e => setCity(e.target.value)} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating:</span>
                {[1,2,3,4,5].map(i => (
                  <button type="button" key={i} onClick={() => setRating(i)} aria-label={`${i} star`}>
                    <Star className={`h-6 w-6 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  </button>
                ))}
              </div>
              <Textarea placeholder="Share your experience with IGNOU Distance counselling..." rows={4} value={text} onChange={e => setText(e.target.value)} required />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Post Review</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsReviews;
