import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";

import { universities, University } from "@/data/universities";

interface Props {
  /** Called when user wants to enquire about a specific university. */
  onEnquire: (universityName: string) => void;
  /** Pre-selected university IDs (max 3). Defaults to IGNOU + Amity + LPU. */
  defaultSelected?: string[];
}

const FIELDS: { key: keyof University; label: string }[] = [
  { key: "type", label: "University Type" },
  { key: "established", label: "Established" },
  { key: "approvals", label: "Approvals" },
  { key: "naacGrade", label: "NAAC Grade" },
  { key: "ranking", label: "Ranking" },
  { key: "modeOfLearning", label: "Mode of Learning" },
  { key: "programsOffered", label: "Programs Offered" },
  { key: "popularCourses", label: "Popular Courses" },
  { key: "mbaFee", label: "MBA Fee (Total)" },
  { key: "feeRange", label: "Fee Range" },
  { key: "examMode", label: "Exam Mode" },
  { key: "liveClasses", label: "Live Classes" },
  { key: "studyMaterial", label: "Study Material" },
  { key: "placementSupport", label: "Placement Support" },
  { key: "alumniSize", label: "Alumni Network" },
  { key: "bestFor", label: "Best For" },
];

const BOOL_FIELDS: { key: keyof University; label: string }[] = [
  { key: "emiAvailable", label: "EMI Available" },
  { key: "internationalAccess", label: "International Access" },
];

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

  const active = universities.filter((u) => selected.includes(u.id));

  return (
    <section className="py-12 bg-gradient-to-b from-indigo-50/40 to-white" data-section="compare-universities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            COMPARE UNIVERSITIES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Compare Top Online Universities in India
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Confused between IGNOU, Amity, Manipal, LPU & more? Pick up to 3 universities and
            compare fees, approvals, NAAC grade, placements & rankings side-by-side.
          </p>
        </div>

        {/* University chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {universities.map((u) => {
            const on = selected.includes(u.id);
            const isIgnou = u.id === "ignou";
            return (
              <button
                key={u.id}
                onClick={() => toggle(u.id)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-semibold border transition flex items-center gap-1.5 ${
                  on
                    ? "bg-indigo-600 text-white border-indigo-600 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400"
                }`}
              >
                {isIgnou && <Star className="h-3 w-3 fill-current text-yellow-400" />}
                {u.name}
              </button>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-500 mb-5">
          Pick up to <strong>3 universities</strong> to compare side-by-side · {selected.length}/3 selected
        </p>

        {/* Comparison table — desktop / tablet */}
        <div className="hidden md:block overflow-x-auto border rounded-xl bg-white shadow-sm">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
                <th className="text-left p-3 font-semibold w-40 sticky left-0 bg-indigo-700 z-10">
                  Parameter
                </th>
                {active.map((u) => (
                  <th key={u.id} className="p-3 text-left font-bold">
                    <div className="text-sm md:text-base">{u.name}</div>
                    <div className="text-[11px] font-normal text-indigo-100">{u.short}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FIELDS.map((f, i) => (
                <tr key={f.key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-inherit">
                    {f.label}
                  </td>
                  {active.map((u) => (
                    <td key={u.id} className="p-3 text-gray-800 align-top">
                      {u[f.key] as string}
                    </td>
                  ))}
                </tr>
              ))}
              {BOOL_FIELDS.map((f, i) => (
                <tr key={f.key} className={(i + FIELDS.length) % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-inherit">
                    {f.label}
                  </td>
                  {active.map((u) => (
                    <td key={u.id} className="p-3">
                      {u[f.key] ? (
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                          <Check className="h-4 w-4" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
                          <X className="h-4 w-4" /> No
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-yellow-50">
                <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-yellow-50">
                  Highlights
                </td>
                {active.map((u) => (
                  <td key={u.id} className="p-3 text-gray-800 text-xs">
                    {u.highlights}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-gray-700 sticky left-0 bg-white">Action</td>
                {active.map((u) => (
                  <td key={u.id} className="p-3">
                    <Button
                      size="sm"
                      onClick={() => onEnquire(u.name)}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs w-full"
                    >
                      Get Free Counselling
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile — 3-column comparison grid (collegevidya-style) */}
        <div className="md:hidden border rounded-xl bg-white shadow-sm overflow-hidden">
          {/* Sticky header: 3 university cards side-by-side */}
          <div className="sticky top-0 z-20 bg-white border-b shadow-sm">
            <div className="text-center py-2 text-sm font-bold text-gray-800 bg-blue-100">
              Universities to compare
            </div>
            <div className="grid grid-cols-3 divide-x">
              {active.map((u) => (
                <div key={u.id} className="p-2 bg-white flex flex-col items-center text-center">
                  {u.id === "ignou" ? (
                    <Star className="h-3 w-3 fill-current text-yellow-400 mb-1" />
                  ) : (
                    <div className="h-3 mb-1" />
                  )}
                  <div className="text-[11px] font-bold text-gray-800 leading-tight line-clamp-2 min-h-[28px]">
                    {u.name}
                  </div>
                  <div className="mt-1 w-full rounded-md bg-blue-600 text-white text-[10px] font-semibold py-1 px-1 truncate">
                    {u.mbaFee}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parameter rows */}
          {[...FIELDS, ...BOOL_FIELDS].map((f) => (
            <div key={f.key} className="border-b">
              <div className="text-center py-2 text-sm font-bold text-gray-800 bg-blue-50">
                {f.label}
              </div>
              <div className="grid grid-cols-3 divide-x">
                {active.map((u) => (
                  <div key={u.id} className="p-2 text-center text-[11px] text-gray-800 break-words">
                    {typeof u[f.key] === "boolean" ? (
                      u[f.key] ? (
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                          <Check className="h-3.5 w-3.5" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
                          <X className="h-3.5 w-3.5" /> No
                        </span>
                      )
                    ) : (
                      <span>{u[f.key] as string}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Highlights */}
          <div className="border-b">
            <div className="text-center py-2 text-sm font-bold text-gray-800 bg-blue-50">
              Highlights
            </div>
            <div className="grid grid-cols-3 divide-x">
              {active.map((u) => (
                <div key={u.id} className="p-2 text-center text-[11px] text-gray-700 break-words">
                  {u.highlights}
                </div>
              ))}
            </div>
          </div>

          {/* Action row */}
          <div className="grid grid-cols-3 divide-x bg-gray-50">
            {active.map((u) => (
              <div key={u.id} className="p-2">
                <Button
                  size="sm"
                  onClick={() => onEnquire(u.name)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-[10px] px-1 h-8"
                >
                  Enquire
                </Button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-5">
          Confused which one to pick? Get a <strong>free 15-min counselling call</strong> — our
          experts will recommend the right university for your goals & budget.
        </p>
      </div>
    </section>
  );
};

export default UniversityComparison;

