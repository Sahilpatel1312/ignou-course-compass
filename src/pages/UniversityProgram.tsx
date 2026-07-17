import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Check, Star, IndianRupee, Clock, GraduationCap, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { universities, universityLogos, PROGRAM_LIST } from "@/data/universities";

// Rough program-fee heuristic per university tier (based on mbaFee & feeRange).
const feeForProgram = (uniFee: string, programSlug: string) => {
  const isPG = ["mba", "mca", "ma", "mcom"].includes(programSlug);
  const m = uniFee.match(/₹\s*([\d,]+)/);
  if (!m) return uniFee;
  const val = parseInt(m[1].replace(/,/g, ""), 10);
  const est = isPG ? val : Math.round(val * 0.7);
  return `₹${est.toLocaleString("en-IN")}`;
};

const durationFor = (slug: string) =>
  ["mba", "mca", "ma", "mcom"].includes(slug) ? "2 Years" : "3 Years";

const eligibilityFor = (slug: string) =>
  slug === "mba"
    ? "Graduation (any stream) with 50%+"
    : slug === "mca"
    ? "Graduation with Maths / Computer Science"
    : ["ma", "mcom"].includes(slug)
    ? "Bachelor's degree in relevant stream"
    : "10+2 (any stream) with 45%+";

const UniversityProgram = () => {
  const { slug, program } = useParams<{ slug: string; program: string }>();
  const [open, setOpen] = useState(false);
  const uni = universities.find((u) => u.id === slug);
  const prog = PROGRAM_LIST.find((p) => p.slug === program);

  if (!uni || !prog) return <Navigate to="/compare-universities" replace />;

  const canonical = `/university/${uni.id}/${prog.slug}`;
  const title = `${uni.name} ${prog.full} 2026 — Fees, Admission, Eligibility`;
  const description = `${uni.name} ${prog.full} 2026: fees ${feeForProgram(uni.mbaFee, prog.slug)}, duration ${durationFor(prog.slug)}, ${uni.approvals}. Compare with IGNOU. Free counselling.`;
  const logo = universityLogos[uni.id];
  const fee = feeForProgram(uni.mbaFee, prog.slug);
  const duration = durationFor(prog.slug);
  const eligibility = eligibilityFor(prog.slug);
  const preselected = `${prog.full} — ${uni.name}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${uni.name} ${prog.full}`,
    description,
    provider: {
      "@type": "EducationalOrganization",
      name: uni.name,
      sameAs: uni.website,
    },
    offers: {
      "@type": "Offer",
      price: fee.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      category: "Tuition",
    },
    timeRequired: durationFor(prog.slug).includes("2") ? "P2Y" : "P3Y",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={title}
        description={description}
        keywords={`${uni.name} ${prog.short}, ${uni.name} ${prog.short} fees, ${uni.name} ${prog.short} 2026, online ${prog.short.toLowerCase()}, ${prog.full}`}
        canonical={canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Header onCounselingClick={() => setOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: "Compare Universities", url: "/compare-universities" },
                { name: uni.name, url: `/university/${uni.id}` },
                { name: prog.full, url: canonical },
              ]}
            />
            <div className="mt-3 flex flex-col md:flex-row md:items-center gap-4">
              {logo && (
                <div className="bg-white rounded-lg p-3 h-16 w-32 flex items-center justify-center shrink-0">
                  <img src={logo} alt={`${uni.name} logo`} className="max-h-12 max-w-full object-contain" />
                </div>
              )}
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  {uni.name} {prog.full}
                </h1>
                <p className="text-blue-100 text-sm md:text-base mt-2 max-w-3xl">
                  {uni.approvals}. {uni.modeOfLearning}. Admission open for July 2026 session.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                onClick={() => setOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                Get Free Counselling →
              </Button>
              <Link
                to={`/university/${uni.id}`}
                className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-semibold"
              >
                Full University Info
              </Link>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <IndianRupee className="h-5 w-5 text-emerald-600 mb-1" />
              <div className="text-xs text-gray-500">Total Fee</div>
              <div className="font-bold text-gray-900 text-lg">{fee}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <Clock className="h-5 w-5 text-blue-600 mb-1" />
              <div className="text-xs text-gray-500">Duration</div>
              <div className="font-bold text-gray-900 text-lg">{duration}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <GraduationCap className="h-5 w-5 text-purple-600 mb-1" />
              <div className="text-xs text-gray-500">Eligibility</div>
              <div className="font-semibold text-gray-900 text-xs md:text-sm">{eligibility}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <Award className="h-5 w-5 text-orange-500 mb-1" />
              <div className="text-xs text-gray-500">NAAC Grade</div>
              <div className="font-bold text-gray-900 text-lg">{uni.naacGrade}</div>
            </div>
          </div>
        </section>

        {/* Program details */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Why {prog.full} from {uni.name}?
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: Award, text: uni.highlights },
                { icon: TrendingUp, text: `Placement: ${uni.placementSupport}` },
                { icon: Check, text: `Live Classes: ${uni.liveClasses}` },
                { icon: Check, text: `Study Material: ${uni.studyMaterial}` },
                { icon: Check, text: `Exam Mode: ${uni.examMode}` },
                { icon: Star, text: `Best for: ${uni.bestFor}` },
              ].map((it, i) => (
                <div key={i} className="p-3 bg-white border rounded-lg flex items-start gap-2">
                  <it.icon className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{it.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-orange-50 border border-orange-200 flex flex-col md:flex-row items-center gap-3 justify-between">
              <p className="text-sm text-gray-800">
                <strong>Compare {uni.name} {prog.short} with IGNOU & 9 more universities</strong> before deciding — free.
              </p>
              <div className="flex gap-2">
                <Link
                  to="/compare-universities"
                  className="text-xs font-semibold px-3 py-2 rounded-md border border-indigo-200 text-indigo-700 bg-white hover:bg-indigo-50"
                >
                  Compare
                </Link>
                <Button
                  onClick={() => setOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
                >
                  Enquire Now
                </Button>
              </div>
            </div>

            {/* Sibling programs */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-700 mb-2">
                Other programs at {uni.name}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {PROGRAM_LIST.filter((p) => p.slug !== prog.slug).map((p) => (
                  <Link
                    key={p.slug}
                    to={`/university/${uni.id}/${p.slug}`}
                    className="text-xs bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-3 py-1.5 rounded-full font-medium"
                  >
                    {p.full}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedLinks currentUniversityId={uni.id} currentProgram={prog.slug} />
      </main>

      <Footer />
      <CounselingForm
        isOpen={open}
        onClose={() => setOpen(false)}
        preSelectedCourse={preselected}
      />
    </div>
  );
};

export default UniversityProgram;
