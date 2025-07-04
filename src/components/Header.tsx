
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img 
                src="/lovable-uploads/982f1493-4e50-4a70-9c06-ba13e9576910.png" 
                alt="IGNOU Logo" 
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
              <div className="text-xs sm:text-sm">
                <div className="font-semibold">Government of India</div>
                <div className="hidden sm:block">Ministry of Education</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Student Helpline: 7349007840</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">admission@ignou.ac.in</span>
                <span className="sm:hidden">admission@ignou.ac.in</span>
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
                  className="h-10 w-10 sm:h-16 sm:w-16"
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
          <div className="overflow-x-auto">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex justify-start space-x-2 sm:space-x-8 py-2 sm:py-3 min-w-max">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3">
                    About IGNOU
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] p-4">
                    <div className="grid gap-2">
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Vision & Mission
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        History
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Organization
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3">
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] p-4">
                    <div className="grid gap-2">
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Schools & Programmes
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Course Finder
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Academic Calendar
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3">
                    Admission
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] p-4">
                    <div className="grid gap-2">
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Online Admission
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Admission Guidelines
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Prospectus
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3">
                    Student Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] p-4">
                    <div className="grid gap-2">
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Study Centers
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Student Portal
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded">
                        Help & Support
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-white hover:text-orange-300 px-2 sm:px-3 py-2 rounded hover:bg-blue-700 text-xs sm:text-sm whitespace-nowrap">
                    Research
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-white hover:text-orange-300 px-2 sm:px-3 py-2 rounded hover:bg-blue-700 text-xs sm:text-sm whitespace-nowrap">
                    International
                  </NavigationMenuLink>
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
      </div>
    </header>
  );
};

export default Header;
