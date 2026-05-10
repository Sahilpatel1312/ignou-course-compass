import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onEnquire: (course: string) => void;
}

interface Row {
  id: string;
  name: string;
  short: string;
  duration: string;
  fee: string;
  eligibility: string;
  bestFor: string;
  jobScope: string;
  avgSalary: string;
  difficulty: "Easy" | "Moderate" | "Tough";
  maths: boolean;
  route: string;
  fullCourseName: string;
}

const bachelors: Row[] = [
  {
    id: "bba",
    name: "BBA",
    short: "Bachelor of Business Administration",
    duration: "3 Years",
    fee: "₹28,800",
    eligibility: "12th Pass (Any Stream)",
    bestFor: "Future Managers, Entrepreneurs",
    jobScope: "Management, Sales, HR, Marketing",
    avgSalary: "₹3 – 6 LPA",
    difficulty: "Easy",
    maths: false,
    route: "/bba",
    fullCourseName: "Online Bachelor of Business Administration (BBA)",
  },
  {
    id: "bca",
    name: "BCA",
    short: "Bachelor of Computer Applications",
    duration: "3 Years",
    fee: "₹40,200",
    eligibility: "12th with Mathematics",
    bestFor: "IT & Software Aspirants",
    jobScope: "Developer, IT Support, Web/App Dev",
    avgSalary: "₹4 – 8 LPA",
    difficulty: "Moderate",
    maths: true,
    route: "/bca",
    fullCourseName: "Online Bachelor of Computer Applications (BCA)",
  },
  {
    id: "bcom",
    name: "B.Com",
    short: "Bachelor of Commerce",
    duration: "3 Years",
    fee: "₹10,800",
    eligibility: "12th Pass (Commerce Preferred)",
    bestFor: "Accounting, Finance, Banking",
    jobScope: "Accountant, Banker, Tax Consultant",
    avgSalary: "₹3 – 5 LPA",
    difficulty: "Easy",
    maths: false,
    route: "/bcom",
    fullCourseName: "Online Bachelor of Commerce (B.Com)",
  },
  {
    id: "ba",
    name: "BA",
    short: "Bachelor of Arts",
    duration: "3 Years",
    fee: "₹7,200",
    eligibility: "12th Pass (Any Stream)",
    bestFor: "Govt Jobs, UPSC, Teaching",
    jobScope: "Teacher, Govt Officer, Journalist",
    avgSalary: "₹2.5 – 5 LPA",
    difficulty: "Easy",
    maths: false,
    route: "/ba",
    fullCourseName: "Online Bachelor of Arts (BA)",
  },
];

const masters: Row[] = [
  {
    id: "mba",
    name: "MBA",
    short: "Master of Business Administration",
    duration: "2 Years",
    fee: "₹62,000",
    eligibility: "Graduation with 50%",
    bestFor: "Leadership & Management Roles",
    jobScope: "Manager, Consultant, Business Head",
    avgSalary: "₹6 – 15 LPA",
    difficulty: "Moderate",
    maths: false,
    route: "/mba",
    fullCourseName: "Online Master of Business Administration (MBA)",
  },
  {
    id: "mca",
    name: "MCA",
    short: "Master of Computer Applications",
    duration: "3 Years",
    fee: "₹58,500",
    eligibility: "Graduation with Maths",
    bestFor: "Senior IT/Software Roles",
    jobScope: "Software Engineer, Data Analyst",
    avgSalary: "₹6 – 14 LPA",
    difficulty: "Tough",
    maths: true,
    route: "/mca",
    fullCourseName: "Online Master of Computer Applications (MCA)",
  },
  {
    id: "mcom",
    name: "M.Com",
    short: "Master of Commerce",
    duration: "2 Years",
    fee: "₹10,800",
    eligibility: "B.Com or related",
    bestFor: "Finance, CA, Audit, Teaching",
    jobScope: "CA Asst., Auditor, Lecturer",
    avgSalary: "₹4 – 8 LPA",
    difficulty: "Moderate",
    maths: false,
    route: "/mcom",
    fullCourseName: "Online Master of Commerce (M.Com)",
  },
  {
    id: "ma",
    name: "MA",
    short: "Master of Arts",
    duration: "2 Years",
    fee: "₹7,200",
    eligibility: "Graduation (Any Stream)",
    bestFor: "Teaching, NET, PhD, Civil Services",
    jobScope: "Professor, Researcher, Govt Officer",
    avgSalary: "₹3 – 7 LPA",
    difficulty: "Easy",
    maths: false,
    route: "/ma",
    fullCourseName: "Online Master of Arts (MA)",
  },
];

const ComparisonTable = ({ rows, onEnquire }: { rows: Row[]; onEnquire: (c: string) => void }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(rows.slice(0, 3).map((r) => r.id));

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length >= 3
        ? [...prev.slice(1), id]
        : [...prev, id]
    );
  };

  const active = rows.filter((r) => selected.includes(r.id));

  const fields: { key: keyof Row; label: string }[] = [
    { key: "duration", label: "Duration" },
    { key: "fee", label: "Total Fee" },
    { key: "eligibility", label: "Eligibility" },
    { key: "bestFor", label: "Best For" },
    { key: "jobScope", label: "Job Scope" },
    { key: "avgSalary", label: "Avg. Salary" },
    { key: "difficulty", label: "Difficulty" },
  ];

  return (
    <div>
      {/* Course chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {rows.map((r) => {
          const on = selected.includes(r.id);
          return (
            <button
              key={r.id}
              onClick={() => toggle(r.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                on
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              {r.name}
            </button>
          );
        })}
      </div>
      <p className="text-center text-xs text-gray-500 mb-4">
        Pick 2-3 courses to compare side-by-side
      </p>

      {/* Comparison table */}
      <div className="overflow-x-auto border rounded-xl bg-white shadow-sm">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <th className="text-left p-3 font-semibold w-32">Parameter</th>
              {active.map((c) => (
                <th key={c.id} className="p-3 text-left font-bold">
                  <div className="text-base">{c.name}</div>
                  <div className="text-[11px] font-normal text-blue-100">{c.short}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((f, i) => (
              <tr key={f.key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-3 font-semibold text-gray-700">{f.label}</td>
                {active.map((c) => (
                  <td key={c.id} className="p-3 text-gray-800">
                    {c[f.key] as string}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td className="p-3 font-semibold text-gray-700">Maths Required</td>
              {active.map((c) => (
                <td key={c.id} className="p-3">
                  {c.maths ? (
                    <span className="inline-flex items-center gap-1 text-red-600 font-medium">
                      <Check className="h-4 w-4" /> Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <X className="h-4 w-4" /> Not Required
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-700">Action</td>
              {active.map((c) => (
                <td key={c.id} className="p-3">
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      onClick={() => onEnquire(c.fullCourseName)}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs"
                    >
                      Enquire Now
                    </Button>
                    <button
                      onClick={() => navigate(c.route)}
                      className="text-xs text-blue-600 hover:underline inline-flex items-center justify-center gap-1"
                    >
                      View Details <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CourseComparison = ({ onEnquire }: Props) => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50/40 to-white" data-section="compare">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            COMPARE & DECIDE
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Compare IGNOU Courses Side-by-Side
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Confused between BBA vs BCA vs B.Com? Or MBA vs MCA? Compare fees, eligibility,
            duration & career scope to pick the right IGNOU course for you.
          </p>
        </div>

        <Tabs defaultValue="bachelors" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
            <TabsTrigger value="bachelors" className="font-semibold">
              Bachelor's (After 12th)
            </TabsTrigger>
            <TabsTrigger value="masters" className="font-semibold">
              Master's (After Graduation)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bachelors">
            <ComparisonTable rows={bachelors} onEnquire={onEnquire} />
          </TabsContent>
          <TabsContent value="masters">
            <ComparisonTable rows={masters} onEnquire={onEnquire} />
          </TabsContent>
        </Tabs>

        <p className="text-center text-xs text-gray-500 mt-5">
          Still unsure? Talk to our counsellor for a free personalised recommendation.
        </p>
      </div>
    </section>
  );
};

export default CourseComparison;
