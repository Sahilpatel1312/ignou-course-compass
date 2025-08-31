import { GraduationCap, Mail, MapPin, Search, Menu, User, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = ({ onCounselingClick }: { onCounselingClick?: () => void }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownItemClick = () => {
    // Scroll to courses section
    const coursesSection = document.querySelector('[data-section="courses"]');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveDropdown(null);
  };

  // Auto-close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-white shadow-md">
        {/* Main Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-2 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo and University Name */}
              <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <img
                    src="/lovable-uploads/982f1493-4e50-4a70-9c06-ba13e9576910.png"
                    alt="IGNOU Logo"
                    className="h-10 w-13 sm:h-16 sm:w-21"
                  />
                  <div className="min-w-0">
                    <h1 className="text-sm sm:text-2xl font-bold text-blue-900 leading-tight">
                      Indira Gandhi National Open University
                    </h1>
                    <p className="text-orange-600 font-semibold text-xs sm:text-sm hidden sm:block">
                      (A Central University established by an Act of Parliament in 1985)
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">New Delhi - 110068</p>
                  </div>
                </div>
              </div>

              {/* Admission 2025 button moved to the left side */}
              <div className="flex-shrink-0">
                <Button
                  onClick={() => onCounselingClick?.()}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 sm:px-6 sm:py-2 rounded-md font-semibold text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Admission 2025</span>
                  <span className="sm:hidden">Admission</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu with new dropdowns */}
        <div className="bg-blue-800 text-white relative">
          <div className="container mx-auto px-4">
            <div className="flex justify-start flex-wrap gap-2 sm:gap-8 py-2 sm:py-3 w-full">

              {/* Explore Programs Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownClick('explore-programs');
                  }}
                  className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded flex items-center"
                >
                  Explore Programs
                  {activeDropdown === 'explore-programs' ? (
                    <ChevronUp className="ml-1 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-1 h-3 w-3" />
                  )}
                </button>
                {activeDropdown === 'explore-programs' && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                    <div className="grid gap-2">
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online MBA
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online MCA
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online MA
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online MCOM
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online BBA
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online BCA
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online BCOM
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online BA
                      </button>
                      <Button onClick={handleDropdownItemClick} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm w-full">
                        View all courses
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Fees Structure Button */}
              <button
                onClick={handleDropdownItemClick}
                className="text-white hover:text-orange-300 px-2 sm:px-3 py-2 rounded hover:bg-blue-700 text-xs sm:text-sm whitespace-nowrap"
              >
                Fees Structure
              </button>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
