import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string; // absolute path, e.g. "/mba"
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]; // exclude Home — added automatically
}

const SITE = "https://www.ignoudistance.in";

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const full: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE}${item.url}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-muted/40 border-b border-border"
    >
      <div className="container mx-auto px-4 py-2.5">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {full.map((item, idx) => {
            const isLast = idx === full.length - 1;
            return (
              <li key={item.url} className="inline-flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    {idx === 0 && <Home className="h-3.5 w-3.5" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
};

export default Breadcrumbs;
