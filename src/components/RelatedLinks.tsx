import { Link } from "react-router-dom";
import { universities } from "@/data/universities";

interface Props {
  currentUniversityId?: string;
  currentProgram?: string;
  currentCourse?: string;
}

const PROGRAMS = [
  { slug: "mba", label: "MBA" },
  { slug: "mca", label: "MCA" },
  { slug: "ma", label: "MA" },
  { slug: "mcom", label: "M.Com" },
  { slug: "bca", label: "BCA" },
  { slug: "bba", label: "BBA" },
  { slug: "ba", label: "BA" },
  { slug: "bcom", label: "B.Com" },
];

/**
 * Contextual internal linking hub — surfaces related universities,
 * programs, and comparison pages on every relevant page.
 * SEO win: dense internal link graph + keeps users on-site.
 */
const RelatedLinks = ({
  currentUniversityId,
  currentProgram,
  currentCourse,
}: Props) => {
  const otherUnis = universities
    .filter((u) => u.id !== currentUniversityId)
    .slice(0, 8);

  const otherPrograms = PROGRAMS.filter((p) => p.slug !== currentProgram);

  return (
    <section className="py-10 bg-gray-50 border-t">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
          Explore More
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl border">
            <h3 className="font-semibold text-sm text-gray-700 mb-2">
              Compare Other Universities
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherUnis.map((u) => (
                <Link
                  key={u.id}
                  to={`/university/${u.id}`}
                  className="text-xs bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-3 py-1.5 rounded-full font-medium"
                >
                  {u.name}
                </Link>
              ))}
              <Link
                to="/compare-universities"
                className="text-xs bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-1.5 rounded-full font-semibold"
              >
                Compare All →
              </Link>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border">
            <h3 className="font-semibold text-sm text-gray-700 mb-2">
              Popular Online Programs
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherPrograms.map((p) => (
                <Link
                  key={p.slug}
                  to={`/best-online-${p.slug}`}
                  className="text-xs bg-purple-50 text-purple-700 hover:bg-purple-100 px-3 py-1.5 rounded-full font-medium"
                >
                  Best Online {p.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border md:col-span-2">
            <h3 className="font-semibold text-sm text-gray-700 mb-2">
              IGNOU Courses (July 2026 Admission Open)
            </h3>
            <div className="flex flex-wrap gap-2">
              {PROGRAMS.map((p) => (
                <Link
                  key={p.slug}
                  to={`/${p.slug}`}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                    currentCourse === p.slug
                      ? "bg-orange-500 text-white"
                      : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                  }`}
                >
                  IGNOU {p.label}
                </Link>
              ))}
              <Link
                to="/fees"
                className="text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3 py-1.5 rounded-full font-medium"
              >
                Fee Structure
              </Link>
              <Link
                to="/blog"
                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-full font-medium"
              >
                Latest Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
