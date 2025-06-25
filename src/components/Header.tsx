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
      {/* Top Bar with Quick Links */}
      <div className="bg-orange-600 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Hindi</span>
              <span>|</span>
              <span>English</span>
              <span className="ml-4">Text Size: A A+ A++</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Screen Reader</span>
              <span>|</span>
              <span>Skip to Main Content</span>
              <Globe className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Government Header */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/67630ad5-a2ff-4de0-b82f-500ead64640c.png" 
                alt="IGNOU Logo" 
                className="h-8 w-8"
              />
              <div className="text-sm">
                <div className="font-semibold">Government of India</div>
                <div>Ministry of Education</div>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Student Helpline: +91-11-29572514</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>admission@ignou.ac.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and University Name */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/67630ad5-a2ff-4de0-b82f-500ead64640c.png" 
                  alt="IGNOU Logo" 
                  className="h-16 w-16"
                />
                <div>
                  <h1 className="text-2xl font-bold text-blue-900">
                    Indira Gandhi National Open University
                  </h1>
                  <p className="text-orange-600 font-semibold text-sm">
                    (A Central University established by an Act of Parliament in 1985)
                  </p>
                  <p className="text-gray-600 text-sm">New Delhi - 110068</p>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onCounselingClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold"
              >
                Admission 2025
              </Button>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-600" />
                <User className="h-5 w-5 text-gray-600" />
                <Menu className="h-5 w-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex justify-start space-x-8 py-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700">
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
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700">
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
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700">
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
                <NavigationMenuTrigger className="text-white hover:text-orange-300 bg-transparent hover:bg-blue-700">
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
                <NavigationMenuLink className="text-white hover:text-orange-300 px-3 py-2 rounded hover:bg-blue-700">
                  Research
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-orange-300 px-3 py-2 rounded hover:bg-blue-700">
                  International
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-orange-300 px-3 py-2 rounded hover:bg-blue-700">
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
