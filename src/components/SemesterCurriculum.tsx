import { useState } from "react";
import { Card } from "@/components/ui/card";

export interface Semester {
  title: string;
  subjects: string[];
}

interface Props {
  semesters: Semester[];
}

const SemesterCurriculum = ({ semesters }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Mobile: tabs + single panel */}
      <div className="md:hidden">
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
          {semesters.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active === i
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
        <Card className="p-5">
          <h3 className="text-lg font-semibold text-blue-600 mb-3">
            {semesters[active].title}
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            {semesters[active].subjects.map((sub, j) => (
              <li key={j}>• {sub}</li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Desktop / tablet: grid */}
      <div className="hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        {semesters.map((s, i) => (
          <Card key={i} className="p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{s.title}</h3>
            <ul className="space-y-2 text-gray-600">
              {s.subjects.map((sub, j) => (
                <li key={j}>• {sub}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SemesterCurriculum;
