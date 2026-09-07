import { Button } from "@/components/ui/button";
import { CalendarDays, IndianRupee, FileCheck, Clock3 } from "lucide-react";

interface Props {
  courseName: string; // e.g. "MBA"
  fee: string; // e.g. "₹62,000"
  duration: string;
  eligibility: string;
  onEnquireClick: () => void;
}

/**
 * "Admission 2026" section — targets high-intent queries like
 * "IGNOU <course> admission last date 2026" and pushes enquiries.
 */
const AdmissionTimeline2026 = ({
  courseName,
  fee,
  duration,
  eligibility,
  onEnquireClick,
}: Props) => {
  const rows = [
    { label: "July 2026 session – registration opens", value: "March 2026 (tentative)" },
    { label: "July 2026 session – last date to apply", value: "31 July 2026 (tentative)" },
    { label: "January 2027 session – registration opens", value: "November 2026 (tentative)" },
    { label: "January 2027 session – last date to apply", value: "31 January 2027 (tentative)" },
  ];

  return (
    <section id="admission-2026" className="py-14 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          IGNOU {courseName} Admission 2026 – Dates, Fees & Eligibility
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          IGNOU runs two admission cycles every year (July and January). Here are the
          key dates, the total fee and who can apply for the online/distance{" "}
          {courseName} programme.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left p-3 font-semibold">Admission Event</th>
                  <th className="text-left p-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 text-gray-700">{r.label}</td>
                    <td className="p-3 font-semibold text-gray-900 whitespace-nowrap">
                      {r.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 p-3 border-t">
              Dates are indicative and may be extended by the university. Confirm the
              current last date with our counsellors before applying.
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <IndianRupee className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Total Programme Fee</p>
                  <p className="font-bold text-gray-900">{fee}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-bold text-gray-900">{duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Eligibility</p>
                  <p className="font-bold text-gray-900">{eligibility}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Current Session</p>
                  <p className="font-bold text-gray-900">July 2026 – Applications Open</p>
                </div>
              </div>
            </div>
            <Button
              onClick={onEnquireClick}
              className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-bold"
            >
              Check My Eligibility – Free
            </Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              t: "Documents required",
              d: "Photo, signature, marksheets of qualifying exam, ID proof and category certificate (if applicable) — all scanned.",
            },
            {
              t: "How to apply",
              d: "Register on the IGNOU admission portal, fill the form, upload documents and pay the first-year fee online.",
            },
            {
              t: "After applying",
              d: "You get an enrolment number, digital study material access and your assigned regional/study centre details.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-white p-4 rounded-lg border">
              <p className="font-semibold text-gray-900 mb-1">{c.t}</p>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionTimeline2026;
