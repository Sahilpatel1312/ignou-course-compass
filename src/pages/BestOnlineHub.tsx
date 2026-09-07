import { useState } from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CounselingForm from "@/components/CounselingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { universities } from "@/data/universities";

const PROGRAMS: Record<
  string,
  { title: string; short: string; ignouPath: string; feeKey: "mbaFee" | "feeRange" }
> = {
  mba: { title: "Online MBA", short: "MBA", ignouPath: "/mba", feeKey: "mbaFee" },
  mca: { title: "Online MCA", short: "MCA", ignouPath: "/mca", feeKey: "feeRange" },
  ma: { title: "Online MA", short: "MA", ignouPath: "/ma", feeKey: "feeRange" },
  mcom: { title: "Online M.Com", short: "M.Com", ignouPath: "/mcom", feeKey: "feeRange" },
  bca: { title: "Online BCA", short: "BCA", ignouPath: "/bca", feeKey: "feeRange" },
  bba: { title: "Online BBA", short: "BBA", ignouPath: "/bba", feeKey: "feeRange" },
  ba: { title: "Online BA", short: "BA", ignouPath: "/ba", feeKey: "feeRange" },
  bcom: { title: "Online B.Com", short: "B.Com", ignouPath: "/bcom", feeKey: "feeRange" },
};

const BestOnlineHub = () => {
  const program = useLocation().pathname.replace("/best-online-", "").replace(/\/$/, "");
  const [open, setOpen] = useState(false);
  const [preselected, setPreselected] = useState("");

  const cfg = program ? PROGRAMS[program] : undefined;
  if (!cfg) return <Navigate to="/" replace />;

  const canonical = `/best-online-${program}`;
  const title = `Best Online ${cfg.short} in India 2026 — Top 10 Universities Compared`;
  const description = `Top online ${cfg.short} universities in India 2026: IGNOU, Amity, Manipal, LPU & more. Compare fees, approvals, placements & NAAC ratings. Free counselling.`;

  // Rank universities by NAAC + affordability for this program
  const ranked = [...universities].sort((a, b) => {
    const grade = (u: typeof universities[0]) =>
      u.naacGrade === "A++" ? 3 : u.naacGrade === "A+" ? 2 : 1;
    return grade(b) - grade(a);
  });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Online ${cfg.short} Universities India 2026`,
    itemListElement: ranked.slice(0, 10).map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${u.name} Online ${cfg.short}`,
      url: `https://ignou-online-admissions.lovable.app/university/${u.id}`,
    })),
  };


  const faqs = [
    {
      q: `Which is the best university for an online ${cfg.short} in India in 2026?`,
      a: `IGNOU is rated the best value online ${cfg.short} — a Central Government university with NAAC A++ and the lowest fee. Amity, Manipal and LPU are strong private alternatives if you want structured placement support.`,
    },
    {
      q: `Is an online ${cfg.short} degree valid for jobs and government exams?`,
      a: `Yes. An online ${cfg.short} from a UGC-DEB entitled university has the same legal status as a regular campus degree and is accepted for government jobs, PSU exams and higher studies.`,
    },
    {
      q: `What is the fee for an online ${cfg.short} in 2026?`,
      a: `Fees range widely — IGNOU's ${cfg.short} starts from the lowest bracket while private universities charge more. Compare the total programme fee in the ranking table above.`,
    },
    {
      q: `Can I do an online ${cfg.short} while working full time?`,
      a: `Yes. Classes are recorded or held on weekends, study material is digital and exams are scheduled twice a year, so working professionals can complete the ${cfg.short} without a career break.`,
    },
    {
      q: `When does admission for the 2026 session close?`,
      a: `Most universities run July 2026 and January 2027 cycles. The July 2026 window typically closes by the end of July — apply early to avoid a late fee.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const enquire = (uniName: string) => {
    setPreselected(`Online ${cfg.short} — ${uniName}`);
    setOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={title}
        description={description}
        keywords={`best online ${cfg.short.toLowerCase()}, top online ${cfg.short.toLowerCase()} india, online ${cfg.short.toLowerCase()} 2026, best university for ${cfg.short.toLowerCase()}, ${cfg.short.toLowerCase()} online admission`}
        canonical={canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header onCounselingClick={() => setOpen(true)} />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ name: `Best Online ${cfg.short}`, url: canonical }]} />
            <h1 className="text-2xl md:text-4xl font-bold mt-2">
              Best Online {cfg.short} in India 2026
            </h1>
            <p className="text-purple-100 text-sm md:text-base mt-2 max-w-3xl">
              Compare India's top online {cfg.title} programs — fees, approvals,
              placements & NAAC ratings. Get expert counselling to pick the right
              university for your career.
            </p>
            <div className="mt-4">
              <Button
                onClick={() => setOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                Get Free Counselling →
              </Button>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Top 10 Universities for Online {cfg.short} — 2026 Ranking
            </h2>

            <div className="space-y-3">
              {ranked.slice(0, 10).map((u, i) => (
                <div
                  key={u.id}
                  className="border rounded-xl p-4 md:p-5 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                        #{i + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-gray-900 text-base md:text-lg">
                            {u.name}
                          </h3>
                          {u.id === "ignou" && (
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                          )}
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                            NAAC {u.naacGrade}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">
                          {u.highlights}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-700">
                          <span>
                            <strong>Fee:</strong> {u[cfg.feeKey]}
                          </span>
                          <span>
                            <strong>Mode:</strong> {u.modeOfLearning}
                          </span>
                          <span>
                            <strong>Placement:</strong>{" "}
                            {u.placementSupport.split("–")[0].trim()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                      <Link
                        to={
                          u.id === "ignou"
                            ? cfg.ignouPath
                            : `/university/${u.id}`
                        }
                        className="text-xs font-semibold text-indigo-700 border border-indigo-200 hover:bg-indigo-50 px-3 py-2 rounded-md whitespace-nowrap text-center"
                      >
                        View Details →
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => enquire(u.name)}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-xs whitespace-nowrap"
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200 text-sm text-gray-800">
              <strong>Why IGNOU still ranks #1 for {cfg.short}:</strong> Central
              Government university, NAAC A++, most affordable, accepted for
              UPSC/PSU/all Govt. jobs & abroad higher studies.{" "}
              <Link to={cfg.ignouPath} className="text-blue-700 font-semibold underline">
                View IGNOU {cfg.short} details →
              </Link>
            </div>
          </div>
        </section>


        <section className="py-10 bg-gray-50 border-t">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              How to choose the best online {cfg.short} university in 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { t: "UGC-DEB approval", d: `Only a UGC-DEB entitled online/distance ${cfg.short} is valid for government jobs, higher studies and most private employers.` },
                { t: "Total fee, not per-semester", d: `Compare the full programme cost. IGNOU's ${cfg.short} is usually the most affordable, private universities charge more for placement support.` },
                { t: "NAAC grade & rankings", d: "NAAC A++ / A+ universities have stronger faculty, learning platforms and employer recall." },
                { t: "Placement & career support", d: "Check whether the university offers live placement drives, resume help and an alumni network — this varies a lot." },
                { t: "Learning mode & flexibility", d: "Recorded lectures, weekend live classes and exam centre options matter most for working professionals." },
                { t: "Specialisations offered", d: `Pick a university whose ${cfg.short} specialisation matches the job role you are targeting.` },
              ].map((c) => (
                <div key={c.t} className="bg-white p-4 rounded-xl border">
                  <p className="font-semibold text-gray-900 mb-1">{c.t}</p>
                  <p className="text-sm text-gray-600">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Online {cfg.short} 2026 — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white border rounded-xl p-4">
                  <summary className="font-semibold text-gray-900 cursor-pointer text-sm md:text-base">
                    {f.q}
                  </summary>
                  <p className="text-sm text-gray-600 mt-2">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={() => setOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6"
              >
                Talk to a Counsellor — Free
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentProgram={program} />
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

export default BestOnlineHub;
