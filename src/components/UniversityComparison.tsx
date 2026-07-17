import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Trophy, IndianRupee, Award, TrendingUp } from "lucide-react";

import { universities, universityLogos, University } from "@/data/universities";

interface Props {
  onEnquire: (universityName: string) => void;
  defaultSelected?: string[];
}

const FIELDS: { key: keyof University; label: string; icon?: any }[] = [
  { key: "type", label: "University Type" },
  { key: "established", label: "Established" },
  { key: "approvals", label: "Approvals" },
  { key: "naacGrade", label: "NAAC Grade", icon: Award },
  { key: "ranking", label: "Ranking" },
  { key: "modeOfLearning", label: "Mode of Learning" },
  { key: "programsOffered", label: "Programs Offered" },
  { key: "popularCourses", label: "Popular Courses" },
  { key: "mbaFee", label: "MBA Fee (Total)", icon: IndianRupee },
  { key: "feeRange", label: "Fee Range" },
  { key: "examMode", label: "Exam Mode" },
  { key: "liveClasses", label: "Live Classes" },
  { key: "studyMaterial", label: "Study Material" },
  { key: "placementSupport", label: "Placement Support", icon: TrendingUp },
  { key: "alumniSize", label: "Alumni Network" },
  { key: "bestFor", label: "Best For" },
];

const BOOL_FIELDS: { key: keyof University; label: string }[] = [
  { key: "emiAvailable", label: "EMI Available" },
  { key: "internationalAccess", label: "International Access" },
];

// Parse "₹1,20,000" → 120000 for fee-winner highlighting
const parseFee = (v: string) => {
  const m = v.match(/₹\s*([\d,]+)/);
  return m ? parseInt(m[1].replace(/,/g, ""), 10) : Number.POSITIVE_INFINITY;
};

const naacRank = (g: string) => (g === "A++" ? 3 : g === "A+" ? 2 : g === "A" ? 1 : 0);

const LogoBadge = ({ id, name }: { id: string; name: string }) => {
  const logo = universityLogos[id];
  return logo ? (
    <div className="h-10 w-full flex items-center justify-center bg-white rounded-md p-1">
      <img src={logo} alt={`${name} logo`} loading="lazy" className="max-h-9 max-w-full object-contain" />
    </div>
  ) : (
    <div className="h-10 w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-700 rounded-md">
      <span className="text-white text-[11px] font-extrabold">{name.split(" ")[0]}</span>
    </div>
  );
};

const renderCellValue = (u: University, key: keyof University, isWinner: boolean) => {
  const raw = u[key];
  if (typeof raw === "boolean") {
    return raw ? (
      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
        <Check className="h-4 w-4" /> Yes
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
        <X className="h-4 w-4" /> No
      </span>
    );
  }
  const val = raw as string;

  if (key === "naacGrade") {
    const color =
      val === "A++"
        ? "bg-emerald-100 text-emerald-800 border-emerald-300"
        : val === "A+"
        ? "bg-blue-100 text-blue-800 border-blue-300"
        : "bg-gray-100 text-gray-700 border-gray-300";
    return (
      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border ${color}`}>
        NAAC {val}
      </span>
    );
  }
  if (key === "mbaFee" || key === "feeRange") {
    return (
      <span className={`inline-flex items-center gap-1 font-bold ${isWinner ? "text-emerald-700" : "text-gray-800"}`}>
        {val}
        {isWinner && (
          <span className="inline-flex items-center gap-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-black px-1.5 py-0.5 rounded-full">
            <Trophy className="h-2.5 w-2.5" />BEST
          </span>
        )}
      </span>
    );
  }
  return <span className="text-gray-800">{val}</span>;
};

const UniversityComparison = ({
  onEnquire,
  defaultSelected = ["ignou", "amity", "lpu"],
}: Props) => {
  const [selected, setSelected] = useState<string[]>(defaultSelected.slice(0, 3));

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length >= 3
        ? [...prev.slice(1), id]
        : [...prev, id]
    );
  };

  const active = useMemo(
    () => universities.filter((u) => selected.includes(u.id)),
    [selected]
  );

  // Per-row winner detection (lowest fee, highest NAAC)
  const winners = useMemo(() => {
    const w: Record<string, string> = {};
    if (active.length > 1) {
      const feeWinner = [...active].sort((a, b) => parseFee(a.mbaFee) - parseFee(b.mbaFee))[0];
      w.mbaFee = feeWinner.id;
      const rangeWinner = [...active].sort((a, b) => parseFee(a.feeRange) - parseFee(b.feeRange))[0];
      w.feeRange = rangeWinner.id;
      const naacWinner = [...active].sort((a, b) => naacRank(b.naacGrade) - naacRank(a.naacGrade))[0];
      w.naacGrade = naacWinner.id;
    }
    return w;
  }, [active]);

  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-indigo-50/40 to-white" data-section="compare-universities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            COMPARE UNIVERSITIES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Compare Top Online Universities in India
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Pick up to 3 universities. Green <Trophy className="inline h-3.5 w-3.5 text-emerald-600" /> icons show the best value in each row.
          </p>
        </div>

        {/* University logo chips */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-3 max-w-4xl mx-auto">
          {universities.map((u) => {
            const on = selected.includes(u.id);
            const logo = universityLogos[u.id];
            const isIgnou = u.id === "ignou";
            return (
              <button
                key={u.id}
                onClick={() => toggle(u.id)}
                className={`relative p-2 rounded-lg border-2 transition flex flex-col items-center gap-1 ${
                  on
                    ? "bg-white border-indigo-600 shadow-md ring-2 ring-indigo-200"
                    : "bg-white/70 border-gray-200 hover:border-indigo-300"
                }`}
              >
                {on && (
                  <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white rounded-full h-5 w-5 text-[10px] font-bold flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </span>
                )}
                <div className="h-8 w-full flex items-center justify-center">
                  {logo ? (
                    <img src={logo} alt={u.name} className="max-h-8 max-w-full object-contain" />
                  ) : (
                    <span className="text-xs font-extrabold text-indigo-700 flex items-center gap-1">
                      {isIgnou && <Star className="h-3 w-3 fill-current text-yellow-500" />}
                      {u.name.split(" ")[0]}
                    </span>
                  )}
                </div>
                <div className="text-[10px] font-semibold text-gray-700 line-clamp-1">{u.name}</div>
              </button>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-500 mb-5">
          {selected.length}/3 selected · Click to add/remove
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto border-2 border-indigo-100 rounded-xl bg-white shadow-lg">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
                <th className="text-left p-3 font-semibold w-44 sticky left-0 bg-indigo-700 z-10">
                  Parameter
                </th>
                {active.map((u) => (
                  <th key={u.id} className="p-3 text-center font-bold border-l border-indigo-500">
                    <div className="mb-2"><LogoBadge id={u.id} name={u.name} /></div>
                    <div className="text-sm">{u.name}</div>
                    <div className="text-[11px] font-normal text-indigo-100 mt-0.5">{u.approvals.split(",")[0]}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...FIELDS, ...BOOL_FIELDS].map((f, i) => {
                const Icon = (f as any).icon;
                const winnerId = winners[f.key as string];
                return (
                  <tr key={f.key} className={i % 2 === 0 ? "bg-indigo-50/30" : "bg-white"}>
                    <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-inherit align-top">
                      <span className="inline-flex items-center gap-1.5">
                        {Icon && <Icon className="h-4 w-4 text-indigo-600" />}
                        {f.label}
                      </span>
                    </td>
                    {active.map((u) => {
                      const isWin = winnerId === u.id;
                      return (
                        <td
                          key={u.id}
                          className={`p-3 align-top text-center border-l ${
                            isWin ? "bg-emerald-50/50" : ""
                          }`}
                        >
                          {renderCellValue(u, f.key, isWin)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              <tr className="bg-yellow-50">
                <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-yellow-50">
                  Highlights
                </td>
                {active.map((u) => (
                  <td key={u.id} className="p-3 text-gray-800 text-xs border-l">
                    {u.highlights}
                  </td>
                ))}
              </tr>
              <tr className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-orange-50">Action</td>
                {active.map((u) => (
                  <td key={u.id} className="p-3 border-l">
                    <Button
                      size="sm"
                      onClick={() => onEnquire(u.name)}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs w-full font-bold"
                    >
                      Get Free Counselling →
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden border-2 border-indigo-100 rounded-xl bg-white shadow-lg overflow-hidden">
          <div className="sticky top-0 z-20 bg-white border-b shadow-sm">
            <div className="text-center py-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-700">
              Comparing {active.length} Universities
            </div>
            <div className="grid grid-cols-3 divide-x">
              {active.map((u) => (
                <div key={u.id} className="p-2 bg-white flex flex-col items-center text-center">
                  <div className="h-8 w-full flex items-center justify-center mb-1">
                    <LogoBadge id={u.id} name={u.name} />
                  </div>
                  <div className="text-[10px] font-bold text-gray-800 leading-tight line-clamp-2 min-h-[24px]">
                    {u.name}
                  </div>
                  <div className="mt-1 w-full rounded-md bg-blue-600 text-white text-[10px] font-semibold py-1 px-1 truncate">
                    {u.mbaFee}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {[...FIELDS, ...BOOL_FIELDS].map((f) => {
            const Icon = (f as any).icon;
            const winnerId = winners[f.key as string];
            return (
              <div key={f.key} className="border-b">
                <div className="text-center py-1.5 text-xs font-bold text-indigo-800 bg-indigo-50 flex items-center justify-center gap-1">
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {f.label}
                </div>
                <div className="grid grid-cols-3 divide-x">
                  {active.map((u) => {
                    const isWin = winnerId === u.id;
                    return (
                      <div
                        key={u.id}
                        className={`p-2 text-center text-[11px] break-words ${
                          isWin ? "bg-emerald-50" : ""
                        }`}
                      >
                        {renderCellValue(u, f.key, isWin)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="border-b">
            <div className="text-center py-1.5 text-xs font-bold text-yellow-800 bg-yellow-50">
              Highlights
            </div>
            <div className="grid grid-cols-3 divide-x">
              {active.map((u) => (
                <div key={u.id} className="p-2 text-center text-[10px] text-gray-700 break-words">
                  {u.highlights}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x bg-gradient-to-r from-orange-50 to-yellow-50">
            {active.map((u) => (
              <div key={u.id} className="p-2">
                <Button
                  size="sm"
                  onClick={() => onEnquire(u.name)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-[10px] px-1 h-8 font-bold"
                >
                  Enquire
                </Button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-5">
          Confused which one to pick? Get a <strong>free 15-min counselling call</strong> — our
          experts recommend the right university for your goals & budget.
        </p>
      </div>
    </section>
  );
};

export default UniversityComparison;
