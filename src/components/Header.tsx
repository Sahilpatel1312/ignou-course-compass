
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
        {/* Government Header */}
        <div className="bg-blue-900 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <img 
                  src="/lovable-uploads/982f1493-4e50-4a70-9c06-ba13e9576910.png" 
                  alt="IGNOU Logo" 
                  className="h-6 w-8 sm:h-8 sm:w-10"
                />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold">Government of India</div>
                  <div className="text-xs sm:text-sm">Ministry of Education</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>support@ignoudistance.in</span>
              </div>
            </div>
          </div>
        </div>

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

              {/* Right Side Actions */}
              <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                <Button 
                  onClick={() => onCounselingClick?.()}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 sm:px-6 sm:py-2 rounded-md font-semibold text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Admission 2025</span>
                  <span className="sm:hidden">Admission</span>
                </Button>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="bg-blue-800 text-white relative">
          <div className="container mx-auto px-4">
            <div className="flex justify-start flex-wrap gap-2 sm:gap-8 py-2 sm:py-3 w-full">
              
              {/* About IGNOU Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownClick('about');
                  }}
                  className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded flex items-center"
                >
                  About IGNOU
                  {activeDropdown === 'about' ? (
                    <ChevronUp className="ml-1 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-1 h-3 w-3" />
                  )}
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                    <div className="grid gap-2">
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Vision & Mission
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        History
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Organization
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Leadership
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Awards & Recognition
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Annual Report
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Academics Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownClick('academics');
                  }}
                  className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded flex items-center"
                >
                  Academics
                  {activeDropdown === 'academics' ? (
                    <ChevronUp className="ml-1 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-1 h-3 w-3" />
                  )}
                </button>
                {activeDropdown === 'academics' && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                    <div className="grid gap-2">
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Schools & Programmes
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Course Finder
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Academic Calendar
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Examination
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Result
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Convocation
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Academic Quality
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Admission Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownClick('admission');
                  }}
                  className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded flex items-center"
                >
                  Admission
                  {activeDropdown === 'admission' ? (
                    <ChevronUp className="ml-1 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-1 h-3 w-3" />
                  )}
                </button>
                {activeDropdown === 'admission' && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                    <div className="grid gap-2">
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Online Admission
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Admission Guidelines
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Prospectus
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Fee Structure
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Re-admission
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Credit Transfer
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Student Support Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownClick('student-support');
                  }}
                  className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded flex items-center"
                >
                  Student Support
                  {activeDropdown === 'student-support' ? (
                    <ChevronUp className="ml-1 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-1 h-3 w-3" />
                  )}
                </button>
                {activeDropdown === 'student-support' && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                    <div className="grid gap-2">
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Study Centers
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Student Portal
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Help & Support
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Student Grievance
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Learning Management System
                      </button>
                      <button onClick={handleDropdownItemClick} className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 text-left">
                        Digital Library
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="text-white hover:text-orange-300 px-2 sm:px-3 py-2 rounded hover:bg-blue-700 text-xs sm:text-sm whitespace-nowrap">
                Alumni
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
