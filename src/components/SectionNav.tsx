import { useEffect, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

interface Props {
  sections: NavSection[];
}

const SectionNav = ({ sections }: Props) => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      // Show nav after the user scrolls past the first viewport
      setVisible(window.scrollY > window.innerHeight * 0.6);

      // Determine active section
      const scrollPos = window.scrollY + 120;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollPos) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Page sections"
      className={`fixed top-16 left-0 right-0 z-30 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-blue-600/80 backdrop-blur-md border-b border-blue-400/40 shadow-sm">
        <div className="container mx-auto px-2">
          <ul className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
            {sections.map((s) => (
              <li key={s.id} className="flex-shrink-0">
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  className={`block whitespace-nowrap text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
                    active === s.id
                      ? "bg-white text-blue-700"
                      : "text-white/90 hover:bg-white/20"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
