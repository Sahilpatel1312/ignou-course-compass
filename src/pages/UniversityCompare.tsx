import { useState } from "react";
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
