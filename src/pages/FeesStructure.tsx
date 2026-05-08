import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FeeRow {
  course: string;
  specs?: string;
  fee: string;
  duration: string;
  path?: string;
}

const FEES: FeeRow[] = [
  { course: "Online MBA", specs: "9 Specializations", fee: "₹62,000", duration: "2 Years", path: "/mba" },
  { course: "Online MCA", specs: "13 Specializations", fee: "₹58,500", duration: "3 Years", path: "/mca" },
  { course: "Online MA", specs: "19 Specializations", fee: "₹7,200", duration: "2 Years", path: "/ma" },
  { course: "Online M.Com", specs: "7 Specializations", fee: "₹10,800", duration: "2 Years", path: "/mcom" },
  { course: "Online BCA", specs: "16 Specializations", fee: "₹40,200", duration: "3 Years", path: "/bca" },
  { course: "Online BBA", specs: "29 Specializations", fee: "₹28,800", duration: "3 Years", path: "/bba" },
  { course: "Online BA", specs: "13 Specializations", fee: "₹7,200", duration: "3 Years", path: "/ba" },
  { course: "Online B.Com", specs: "10 Specializations", fee: "₹10,800", duration: "3 Years", path: "/bcom" },
  { course: "Online M.Sc", specs: "5 Specializations", fee: "₹26,400", duration: "2 Years" },
  { course: "Online B.Sc", specs: "3 Specializations", fee: "₹16,500", duration: "3 Years" },
  { course: "Online BLIS", fee: "₹7,900", duration: "1 Year" },
  { course: "Online MLIS", fee: "₹10,800", duration: "1 Year" },
  { course: "Online Certificate Programs", fee: "₹10,000", duration: "16 months – 2 years" },
  { course: "Online Diploma Programs", fee: "₹12,000", duration: "6 months – 1 year" },
  { course: "Doctor of Philosophy (Ph.D)", specs: "5 Specializations", fee: "₹16,800", duration: "3 Years" },
  { course: "M.Com Open Distance Learning", fee: "₹16,200", duration: "2 Years" },
  { course: "MA Open Distance Learning", fee: "₹13,000", duration: "2 Years" },
  { course: "MBA Open Distance Learning", fee: "₹62,000", duration: "2 Years" },
  { course: "MCA Open Distance Learning", fee: "₹50,800", duration: "2 Years" },
  { course: "BCA Open Distance Learning", fee: "₹48,000", duration: "3 Years" },
  { course: "B.Com Open Distance Learning", fee: "₹8,100", duration: "3 Years" },
  { course: "B.Sc Open Distance Learning", fee: "₹16,500", duration: "3 Years" },
  { course: "M.Sc Open Distance Learning", fee: "₹28,000", duration: "2 Years" },
  { course: "BBA Open Distance Learning", fee: "₹30,000", duration: "3 Years" },
  { course: "BA Open Distance Learning", fee: "₹7,200", duration: "3 Years" },
  { course: "Online LLM", specs: "6 Specializations", fee: "₹7,000", duration: "1 - 2 Years" },
  { course: "Online M.Des Program", specs: "1 Specialization", fee: "₹10,000", duration: "2 Years" },
  { course: "M.Tech Online", specs: "7 Specializations", fee: "₹20,000", duration: "2 Years" },
  { course: "Online Executive MBA", specs: "14 Specializations", fee: "₹64,000", duration: "18 Months" },
  { course: "Online PG Diploma & Certificate", specs: "16 Specializations", fee: "₹8,000", duration: "1 Year" },
  { course: "M.Tech Open Distance Learning", fee: "₹28,000", duration: "2 Years" },
  { course: "B.Tech Open Distance Learning", fee: "₹20,000", duration: "4 Years" },
  { course: "Part-Time PhD", fee: "₹53,550", duration: "4 Years" },
  { course: "Doctorate Program", fee: "₹18,000", duration: "3 Years" },
  { course: "PhD Open Distance Learning", fee: "₹6,00,000", duration: "2 Years" },
];

const FeesStructure = () => {
  const navigate = useNavigate();
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);

  const handleCourseClick = (path?: string) => {
    if (path) navigate(path);
    else setIsCounselingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="IGNOU Course Wise Updated Fees 2026 – Full Fee Structure | IGNOU Distance"
        description="Check IGNOU 2026 course-wise fee structure for Online MBA, MCA, BCA, BBA, B.Com, BA, MA, M.Com, Ph.D and 200+ programs. Updated fees for July 2026 session admission."
        keywords="IGNOU fees 2026, IGNOU course fees, IGNOU MBA fees, IGNOU MCA fees, IGNOU online course fee structure, IGNOU distance education fees 2026"
        canonical="/fees"
      />
      <Header onCounselingClick={() => setIsCounselingOpen(true)} />

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Course Wise Updated Fees 2026</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Complete IGNOU fee structure for all Online & Distance programs (July 2026 Session). Click any course to see details, or get free counselling now.</p>
          <Button onClick={() => setIsCounselingOpen(true)} className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-2">
            Enquire Now – Free Counselling
          </Button>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <Card className="shadow-md">
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">Course</th>
                    <th className="text-left px-4 py-3">Full Fees</th>
                    <th className="text-left px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-blue-50/40" : "bg-white"}>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleCourseClick(row.path)}
                          className={`text-left ${row.path ? "text-blue-700 hover:underline font-semibold" : "text-gray-800"}`}
                        >
                          {row.course}
                          {row.specs && <span className="text-gray-500 text-xs"> ({row.specs})</span>}
                        </button>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.fee}</td>
                      <td className="px-4 py-3 text-gray-700">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-3">Need help choosing the right course? Talk to our admission counsellor.</p>
            <Button onClick={() => setIsCounselingOpen(true)} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold">
              Get Free Counselling
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {isCounselingOpen && (
        <CounselingForm isOpen={isCounselingOpen} onClose={() => setIsCounselingOpen(false)} preSelectedCourse="Fee Enquiry" />
      )}
    </div>
  );
};

export default FeesStructure;
