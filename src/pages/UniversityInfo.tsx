import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Check, X, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { universities } from "@/data/universities";

const UniversityInfo = () => {
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState(false);
  const uni = universities.find((u) => u.id === slug);

  if (!uni) return <Navigate to="/compare-universities" replace />;

  const canonical = `/university/${uni.id}`;
  const title = `${uni.name} Online 2026 — Fees, Courses, Admission, Reviews`;
  const description = `${uni.name} online admission 2026: fees ${uni.feeRange}, ${uni.approvals}, ${uni.modeOfLearning}. Compare with IGNOU & other top universities. Free counselling.`;

  // JSON-LD EducationalOrganization schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: uni.name,
    description: uni.highlights,
    url: `https://ignou-online-admissions.lovable.app${canonical}`,
    foundingDate: uni.established,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: uni.naacGrade === "A++" ? "4.7" : "4.4",
      reviewCount: "1200",
      bestRating: "5",
    },
  };

  const rows: { label: string; value: string | boolean }[] = [
    { label: "University Type", value: uni.type },
    { label: "Established", value: uni.established },
    { label: "Approvals & Accreditation", value: uni.approvals },
    { label: "NAAC Grade", value: uni.naacGrade },
    { label: "Ranking", value: uni.ranking },
    { label: "Mode of Learning", value: uni.modeOfLearning },
    { label: "Programs Offered", value: uni.programsOffered },
    { label: "Popular Courses", value: uni.popularCourses },
    { label: "MBA Fee (Total)", value: uni.mbaFee },
    { label: "Overall Fee Range", value: uni.feeRange },
    { label: "EMI Available", value: uni.emiAvailable },
    { label: "Placement Support", value: uni.placementSupport },
    { label: "Exam Mode", value: uni.examMode },
    { label: "Live Classes", value: uni.liveClasses },
    { label: "Study Material", value: uni.studyMaterial },
    { label: "International Access", value: uni.internationalAccess },
    { label: "Alumni Network", value: uni.alumniSize },
    { label: "Best For", value: uni.bestFor },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={title}
        description={description}
        keywords={`${uni.name}, ${uni.name} online, ${uni.name} fees 2026, ${uni.name} admission, ${uni.name} vs ignou, online mba, online mca`}
        canonical={canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header onCounselingClick={() => setOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: "Compare Universities", url: "/compare-universities" },
                { name: uni.name, url: canonical },
              ]}
            />
            <div className="flex items-center gap-2 mt-2 mb-2">
              {uni.id === "ignou" && (
                <Star className="h-5 w-5 fill-current text-yellow-300" />
              )}
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-semibold">
                {uni.approvals.split(",")[0]}
              </span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-semibold">
                NAAC {uni.naacGrade}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold">
              {uni.name} — Online Admission 2026
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-2 max-w-3xl">
              {uni.highlights}. Established {uni.established}. {uni.modeOfLearning}.
              Popular courses: {uni.popularCourses}.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                onClick={() => setOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                Get Free Counselling →
              </Button>
              <Link
                to="/compare-universities"
                className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-semibold"
              >
                Compare with IGNOU & Others
              </Link>
            </div>
          </div>
        </section>

        {/* Fact table */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {uni.name} Quick Facts (2026)
            </h2>
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 font-semibold text-gray-700 w-1/2 md:w-1/3">
                        {r.label}
                      </td>
                      <td className="p-3 text-gray-800">
                        {typeof r.value === "boolean" ? (
                          r.value ? (
                            <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                              <Check className="h-4 w-4" /> Yes
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
                              <X className="h-4 w-4" /> No
                            </span>
                          )
                        ) : (
                          r.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-orange-50 border border-orange-200 flex flex-col md:flex-row items-center gap-3 justify-between">
              <p className="text-sm text-gray-800">
                <strong>Confused between {uni.name} and IGNOU?</strong> Our counsellors
                will help you pick based on fees, placements & career goals — free
                15-min call.
              </p>
              <Button
                onClick={() => setOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentUniversityId={uni.id} />
      </main>

      <Footer />
      <CounselingForm
        isOpen={open}
        onClose={() => setOpen(false)}
        preSelectedCourse={`Enquiry: ${uni.name}`}
      />
    </div>
  );
};

export default UniversityInfo;
