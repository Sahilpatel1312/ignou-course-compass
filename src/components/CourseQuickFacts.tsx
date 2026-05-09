import { Clock, IndianRupee, GraduationCap, CalendarCheck } from "lucide-react";

interface Props {
  fee: string;
  duration: string;
  eligibility: string;
  intake?: string;
}

/**
 * TL;DR card — 4 quick facts users can scan in 5 seconds.
 * Place near the top of every course landing page.
 */
const CourseQuickFacts = ({ fee, duration, eligibility, intake = "July 2026" }: Props) => {
  const items = [
    { icon: IndianRupee, label: "Total Fee", value: fee, color: "text-emerald-600 bg-emerald-50" },
    { icon: Clock, label: "Duration", value: duration, color: "text-blue-600 bg-blue-50" },
    { icon: GraduationCap, label: "Eligibility", value: eligibility, color: "text-purple-600 bg-purple-50" },
    { icon: CalendarCheck, label: "Next Intake", value: intake, color: "text-orange-600 bg-orange-50" },
  ];

  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/50"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-gray-500 font-medium">
                  {label}
                </div>
                <div className="text-sm font-bold text-gray-800 truncate">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseQuickFacts;
