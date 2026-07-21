import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import UniversityComparison from "@/components/UniversityComparison";

const UniversityCompare = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string>("");

  const handleEnquire = (universityName: string) => {
    // Tag the lead with the university so it routes correctly in the Google Sheet
    setPreselectedCourse(`Enquiry: ${universityName}`);
    setIsCounselingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Compare Top Online Universities 2026 – IGNOU vs Amity vs Manipal vs LPU"
        description="Compare India's top online universities side-by-side. IGNOU, Amity, Manipal, LPU, Chandigarh University, DY Patil, Parul, Sikkim Manipal, Shoolini, VGU & Uttaranchal. Check fees, approvals, NAAC grade, placements & rankings for 2026."
        keywords="compare online universities, ignou vs amity, ignou vs manipal, ignou vs lpu, best online university india 2026, online mba comparison"
        canonical="https://ignoudistance.in/compare-universities"
      />
      <Header onCounselingClick={() => setIsCounselingOpen(true)} />

      <main className="flex-1">
        <div className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Compare Top Online Universities in India
            </h1>
            <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
              Pick any 3 from 11 top universities — IGNOU, Amity, Manipal, LPU, Chandigarh
              University, DY Patil, Parul, Sikkim Manipal, Shoolini, VGU, Uttaranchal — and
              compare fees, approvals, placements & rankings for July 2026.
            </p>
          </div>
        </div>

        <UniversityComparison onEnquire={handleEnquire} />

        {/* Popular head-to-head comparisons — internal linking + SEO */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
              Popular Head-to-Head Comparisons
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["ignou", "amity"], ["ignou", "manipal"], ["ignou", "lpu"], ["ignou", "cu"],
                ["amity", "manipal"], ["amity", "lpu"], ["manipal", "lpu"], ["ignou", "dypatil"],
              ].map(([a, b]) => (
                <Link
                  key={`${a}-${b}`}
                  to={`/vs/${a}-vs-${b}`}
                  className="bg-white rounded-lg border border-indigo-100 hover:border-indigo-400 hover:shadow-md transition p-3 text-center text-sm font-semibold text-indigo-700"
                >
                  {a.toUpperCase()} vs {b.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CounselingForm
        isOpen={isCounselingOpen}
        onClose={() => setIsCounselingOpen(false)}
        preSelectedCourse={preselectedCourse}
      />
    </div>
  );
};

export default UniversityCompare;
