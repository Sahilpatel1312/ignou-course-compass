import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Check, X, Trophy, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { universities } from "@/data/universities";

const parseFee = (fee: string) => {
  const n = fee.replace(/[^0-9]/g, "");
  return n ? parseInt(n, 10) : 999999;
};

const UniversityVs = () => {
  const { matchup } = useParams<{ matchup: string }>();
  const [open, setOpen] = useState(false);
  const [preselect, setPreselect] = useState("");

  const parts = matchup?.split("-vs-") ?? [];
  const uniA = universities.find((u) => u.id === parts[0]);
  const uniB = universities.find((u) => u.id === parts[1]);

  if (!uniA || !uniB || uniA.id === uniB.id)
    return <Navigate to="/compare-universities" replace />;

  const canonical = `/vs/${uniA.id}-vs-${uniB.id}`;
  const title = `${uniA.name} vs ${uniB.name} 2026 — Fees, Approvals, Placements Compared`;
  const description = `${uniA.name} vs ${uniB.name} 2026 comparison: fees, UGC/NAAC approvals, placements, mode of learning & ROI. Which online university is better for you? Free expert counselling.`;

  const rows: { label: string; a: string | boolean; b: string | boolean; key?: "fee" | "naac" }[] = [
    { label: "Established", a: uniA.established, b: uniB.established },
    { label: "University Type", a: uniA.type, b: uniB.type },
    { label: "Approvals", a: uniA.approvals, b: uniB.approvals },
    { label: "NAAC Grade", a: uniA.naacGrade, b: uniB.naacGrade, key: "naac" },
    { label: "Ranking", a: uniA.ranking, b: uniB.ranking },
    { label: "Mode of Learning", a: uniA.modeOfLearning, b: uniB.modeOfLearning },
    { label: "Programs Offered", a: uniA.programsOffered, b: uniB.programsOffered },
    { label: "Popular Courses", a: uniA.popularCourses, b: uniB.popularCourses },
    { label: "MBA Fee (Total)", a: uniA.mbaFee, b: uniB.mbaFee, key: "fee" },
    { label: "Fee Range", a: uniA.feeRange, b: uniB.feeRange },
    { label: "EMI Available", a: uniA.emiAvailable, b: uniB.emiAvailable },
    { label: "Placement Support", a: uniA.placementSupport, b: uniB.placementSupport },
    { label: "Exam Mode", a: uniA.examMode, b: uniB.examMode },
    { label: "Live Classes", a: uniA.liveClasses, b: uniB.liveClasses },
    { label: "Study Material", a: uniA.studyMaterial, b: uniB.studyMaterial },
    { label: "International Access", a: uniA.internationalAccess, b: uniB.internationalAccess },
    { label: "Alumni Network", a: uniA.alumniSize, b: uniB.alumniSize },
    { label: "Best For", a: uniA.bestFor, b: uniB.bestFor },
  ];

  const feeAWins = parseFee(uniA.mbaFee) < parseFee(uniB.mbaFee);
  const naacRank = (g: string) => (g === "A++" ? 3 : g === "A+" ? 2 : g === "A" ? 1 : 0);
  const naacAWins = naacRank(uniA.naacGrade) > naacRank(uniB.naacGrade);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Which is better, ${uniA.name} or ${uniB.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${feeAWins ? uniA.name : uniB.name} is more affordable, while ${naacAWins ? uniA.name : uniB.name} has a stronger NAAC grade. Choose based on your budget, career goals, and preferred mode of learning. Book free counselling for a personalised recommendation.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${uniA.name} online degree valid?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes. ${uniA.name} is approved by ${uniA.approvals} and its online/distance degrees are UGC-recognised and equivalent to regular degrees.` },
      },
      {
        "@type": "Question",
        name: `What is the fee difference between ${uniA.name} and ${uniB.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `${uniA.name} MBA fee is ${uniA.mbaFee} and ${uniB.name} MBA fee is ${uniB.mbaFee}.` },
      },
    ],
  };

  const openEnquiry = (uni: string) => {
    setPreselect(`Enquiry: ${uni}`);
    setOpen(true);
  };

  const Cell = ({ v, winner }: { v: string | boolean; winner?: boolean }) =>
    typeof v === "boolean" ? (
      v ? (
        <div className="flex justify-center"><Check className="h-5 w-5 text-green-600" /></div>
      ) : (
        <div className="flex justify-center"><X className="h-5 w-5 text-red-500" /></div>
      )
    ) : (
      <span className={`inline-flex items-center gap-1 ${winner ? "font-bold text-green-700" : "text-gray-700"}`}>
        {winner && <Trophy className="h-3.5 w-3.5" />}
        {v}
      </span>
    );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title={title} description={description} canonical={`https://ignoudistance.in${canonical}`} keywords={`${uniA.name} vs ${uniB.name}, ${uniA.name} or ${uniB.name}, compare ${uniA.name} ${uniB.name}, online mba comparison 2026`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header onCounselingClick={() => setOpen(true)} />
      <Breadcrumbs items={[{ name: "Compare", url: "/compare-universities" }, { name: `${uniA.name} vs ${uniB.name}`, url: canonical }]} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">{uniA.name} vs {uniB.name} — 2026</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
              Side-by-side comparison of fees, approvals, placements, mode of learning & career outcomes. Pick the right online university in under 2 minutes.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button onClick={() => openEnquiry(uniA.name)} className="bg-orange-500 hover:bg-orange-600">Enquire — {uniA.name}</Button>
              <Button onClick={() => openEnquiry(uniB.name)} variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20">Enquire — {uniB.name}</Button>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-8">
          <div className="container mx-auto px-2 md:px-4">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-24 z-10">
                <div className="px-2 md:px-4 py-3 text-xs md:text-sm font-semibold">Parameter</div>
                <div className="px-2 md:px-4 py-3 text-center">
                  <div className="font-bold text-sm md:text-base">{uniA.name}</div>
                  <div className="text-[10px] md:text-xs opacity-90">{uniA.mbaFee}</div>
                </div>
                <div className="px-2 md:px-4 py-3 text-center border-l border-white/20">
                  <div className="font-bold text-sm md:text-base">{uniB.name}</div>
                  <div className="text-[10px] md:text-xs opacity-90">{uniB.mbaFee}</div>
                </div>
              </div>
              {rows.map((r, i) => {
                const aWins = (r.key === "fee" && feeAWins) || (r.key === "naac" && naacAWins);
                const bWins = (r.key === "fee" && !feeAWins) || (r.key === "naac" && !naacAWins);
                return (
                  <div key={i} className={`grid grid-cols-[1.1fr_1fr_1fr] ${i % 2 ? "bg-gray-50" : "bg-white"} border-t border-gray-100`}>
                    <div className="px-2 md:px-4 py-3 text-xs md:text-sm font-medium text-gray-800">{r.label}</div>
                    <div className="px-2 md:px-4 py-3 text-xs md:text-sm text-center"><Cell v={r.a} winner={aWins} /></div>
                    <div className="px-2 md:px-4 py-3 text-xs md:text-sm text-center border-l border-gray-100"><Cell v={r.b} winner={bWins} /></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Verdict — Which One Should You Pick?</h2>
            <div className="space-y-3 text-gray-700 text-sm md:text-base">
              <p>
                <strong>Choose {uniA.name}</strong> if you value: {uniA.bestFor.toLowerCase()}. Highlights — {uniA.highlights}.
              </p>
              <p>
                <strong>Choose {uniB.name}</strong> if you value: {uniB.bestFor.toLowerCase()}. Highlights — {uniB.highlights}.
              </p>
              <p className="pt-2">
                💡 <strong>On fees:</strong> {feeAWins ? uniA.name : uniB.name} is more budget-friendly. <strong>On accreditation:</strong> {naacAWins ? uniA.name : uniB.name} holds the stronger NAAC grade.
              </p>
            </div>
            <div className="mt-6 bg-white rounded-xl p-5 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-gray-800 font-semibold">Still confused? Talk to a free expert counsellor.</p>
              <Button onClick={() => setOpen(true)} className="bg-orange-500 hover:bg-orange-600">Book Free Counselling <ArrowRight className="h-4 w-4 ml-1" /></Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentUniversityId={uniA.id} />
      </main>

      <Footer />
      <CounselingForm isOpen={open} onClose={() => setOpen(false)} preSelectedCourse={preselect} />
    </div>
  );
};

export default UniversityVs;
