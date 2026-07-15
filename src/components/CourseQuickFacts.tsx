import { Clock, IndianRupee, GraduationCap, CalendarCheck, Scale, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  fee: string;
  duration: string;
  eligibility: string;
  intake?: string;
  /** Course slug (mba, mca, bba…) — enables "Best Online X" cross-link. */
  courseSlug?: string;
}

/**
 * TL;DR card — 4 quick facts users can scan in 5 seconds.
 * Place near the top of every course landing page.
 */
const CourseQuickFacts = ({ fee, duration, eligibility, intake = "July 2026", courseSlug }: Props) => {
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

        {/* Compare Universities CTA — visible on every course page */}
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2 p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Scale className="h-4 w-4 text-indigo-600 flex-shrink-0" />
            <span>
              <strong>Comparing options?</strong> Check this course at IGNOU vs Amity, Manipal, LPU & more.
            </span>
          </div>
          <Link
            to="/compare-universities"
            className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-md whitespace-nowrap shadow-sm"
          >
            🎓 Compare Universities →
          </Link>
        </div>

        {courseSlug && (
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Trophy className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <span>
                See the <strong>Top 10 Online {courseSlug.toUpperCase()} universities in India 2026</strong>.
              </span>
            </div>
            <Link
              to={`/best-online-${courseSlug}`}
              className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-4 py-2 rounded-md whitespace-nowrap shadow-sm"
            >
              🏆 View Best {courseSlug.toUpperCase()} Rankings →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseQuickFacts;
