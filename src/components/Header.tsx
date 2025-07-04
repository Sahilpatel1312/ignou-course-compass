
import { GraduationCap, Phone, Mail, MapPin, Search, Menu, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = ({ onCounselingClick }: { onCounselingClick: () => void }) => {
  return (
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
            <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Student Helpline: 7349007840</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>admission@ignou.ac.in</span>
              </div>
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
                onClick={onCounselingClick}
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
      <div className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex justify-start flex-wrap gap-2 sm:gap-8 py-2 sm:py-3 w-full">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 data-[state=open]:bg-blue-700 data-[state=open]:text-orange-300">
                  About IGNOU
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                  <div className="grid gap-2">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Vision & Mission
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      History
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Organization
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Leadership
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Awards & Recognition
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Annual Report
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 data-[state=open]:bg-blue-700 data-[state=open]:text-orange-300">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                  <div className="grid gap-2">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Schools & Programmes
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Course Finder
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Academic Calendar
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Examination
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Result
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Convocation
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Academic Quality
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 data-[state=open]:bg-blue-700 data-[state=open]:text-orange-300">
                  Admission
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                  <div className="grid gap-2">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Online Admission
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Admission Guidelines
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Prospectus
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Fee Structure
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Re-admission
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Credit Transfer
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 data-[state=open]:bg-blue-700 data-[state=open]:text-orange-300">
                  Student Support
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-4 bg-white shadow-lg rounded-md border z-50">
                  <div className="grid gap-2">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Study Centers
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Student Portal
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Help & Support
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Student Grievance
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Learning Management System
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900">
                      Digital Library
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-orange-300 px-2 sm:px-3 py-2 rounded hover:bg-blue-700 text-xs sm:text-sm whitespace-nowrap">
                  Alumni
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
