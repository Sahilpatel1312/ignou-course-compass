import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, IndianRupee, Scale, BookOpen, Home } from "lucide-react";

const courses = [
  { name: "Online MBA", path: "/mba" },
  { name: "Online MCA", path: "/mca" },
  { name: "Online MA", path: "/ma" },
  { name: "Online M.Com", path: "/mcom" },
  { name: "Online BBA", path: "/bba" },
  { name: "Online BCA", path: "/bca" },
  { name: "Online BA", path: "/ba" },
  { name: "Online B.Com", path: "/bcom" },
];

const quickLinks = [
  { name: "Fee Structure 2026", path: "/fees", icon: IndianRupee },
  { name: "Compare Universities", path: "/compare-universities", icon: Scale },
  { name: "Blog & Guides", path: "/blog", icon: BookOpen },
  { name: "Home", path: "/", icon: Home },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    document.title = "Page Not Found | IGNOU Distance";
    updateMetaTag("robots", "noindex, follow");
    updateMetaTag(
      "description",
      "The page you were looking for has moved. Explore IGNOU online courses, fees, and university comparisons.",
    );

    document
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((el) => el.parentElement?.removeChild(el));
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-5">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm font-semibold tracking-wide text-primary mb-2">
            ERROR 404
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            This page has moved or no longer exists
          </h1>
          <p className="text-muted-foreground mb-8">
            Don&apos;t worry — everything you need for IGNOU &amp; online
            university admission 2026 is just one click away.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {quickLinks.map((l) => (
              <Button
                key={l.path}
                asChild
                variant="outline"
                className="h-auto py-4 flex-col gap-2"
              >
                <Link to={l.path}>
                  <l.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">{l.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">Popular Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {courses.map((c) => (
              <Link
                key={c.path}
                to={c.path}
                className="rounded-lg border border-border bg-card px-3 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/">Get Free Admission Counselling</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
