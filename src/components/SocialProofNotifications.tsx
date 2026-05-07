import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const NAMES = ["Rahul", "Priya", "Amit", "Sneha", "Rohan", "Anjali", "Vikram", "Pooja", "Arjun", "Neha", "Karan", "Divya", "Manish", "Kavya", "Suresh", "Ritu"];
const CITIES = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Lucknow", "Patna", "Jaipur", "Kolkata", "Ahmedabad", "Chandigarh", "Bhopal", "Indore", "Nagpur", "Kanpur", "Surat"];
const COURSES = ["MBA", "MCA", "MA", "M.Com", "BCA", "BBA", "BA", "B.Com"];
const ACTIONS = ["enrolled for", "got counselling for", "applied for", "downloaded brochure for"];
const TIMES = ["2 mins ago", "just now", "5 mins ago", "8 mins ago", "12 mins ago", "15 mins ago"];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const SocialProofNotifications = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", action: "", course: "", time: "" });

  useEffect(() => {
    let timeoutId: number;
    let intervalId: number;

    const show = () => {
      setData({
        name: pick(NAMES),
        city: pick(CITIES),
        action: pick(ACTIONS),
        course: pick(COURSES),
        time: pick(TIMES),
      });
      setVisible(true);
      timeoutId = window.setTimeout(() => setVisible(false), 5500);
    };

    // First notification after 12s
    const firstTimer = window.setTimeout(() => {
      show();
      // Repeat every 22s
      intervalId = window.setInterval(show, 22000);
    }, 12000);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-30 max-w-xs animate-in slide-in-from-left-5 fade-in duration-500">
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-3 flex items-start gap-3">
        <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-800 leading-snug">
            <span className="font-semibold">{data.name} from {data.city}</span> {data.action} <span className="font-semibold">{data.course}</span>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{data.time} · IGNOU July 2026</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofNotifications;
