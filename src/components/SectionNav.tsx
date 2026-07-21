import { useEffect, useRef, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

interface Props {
  sections: NavSection[];
  onEnquireClick?: () => void;
}

const SectionNav = ({ sections, onEnquireClick }: Props) => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
      const scrollPos = window.scrollY + 140;
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

  // Auto-scroll active pill into view horizontally
  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    if (!list || !item) return;
    const target = item.offsetLeft - list.clientWidth / 2 + item.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
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
      <div className="bg-blue-600/90 backdrop-blur-md border-b border-blue-400/40 shadow-sm">
        <div className="container mx-auto px-2 flex items-center gap-2">
          <ul
            ref={listRef}
            className="flex-1 flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2 scroll-smooth"
          >
            {sections.map((s) => (
              <li
                key={s.id}
                ref={(el) => (itemRefs.current[s.id] = el)}
                className="flex-shrink-0"
              >
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  className={`block whitespace-nowrap text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
                    active === s.id
                      ? "bg-white text-blue-700 shadow"
                      : "text-white/90 hover:bg-white/20"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          {onEnquireClick && (
            <button
              onClick={onEnquireClick}
              className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap"
            >
              Enquire Now
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
