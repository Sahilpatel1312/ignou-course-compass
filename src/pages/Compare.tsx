import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import CourseComparison from "@/components/CourseComparison";

const Compare = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string>("");

  const handleEnquire = (course: string) => {
    setPreselectedCourse(course);
    setIsCounselingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Compare IGNOU Courses 2026 – BBA vs BCA vs B.Com, MBA vs MCA"
        description="Compare IGNOU online courses side-by-side. Check fees, duration, eligibility, job scope & salary for BBA, BCA, B.Com, BA, MBA, MCA, M.Com & MA. July 2026 admissions open."
        canonical="https://ignoudistance.in/compare"
      />
      <Header onCounselingClick={() => setIsCounselingOpen(true)} />

      <main className="flex-1">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Compare IGNOU Courses Side-by-Side
            </h1>
            <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
              Confused which course to choose? Compare fees, eligibility, duration & career
              scope for IGNOU Bachelor's & Master's programs — July 2026 session.
            </p>
          </div>
        </div>

        <CourseComparison onEnquire={handleEnquire} />
      </main>

      <Footer />

      <CounselingForm
        isOpen={isCounselingOpen}
        onClose={() => setIsCounselingOpen(false)}
        preselectedCourse={preselectedCourse}
      />
    </div>
  );
};

export default Compare;
