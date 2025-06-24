
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ onCounselingClick }: { onCounselingClick: () => void }) => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Top Info Bar */}
      <div className="bg-blue-950 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-29572514</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>admission@ignou.ac.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <GraduationCap className="h-12 w-12 text-yellow-400" />
            <div>
              <h1 className="text-3xl font-bold">IGNOU Course Compass</h1>
              <p className="text-blue-100">Indira Gandhi National Open University</p>
            </div>
          </div>
          <Button 
            onClick={onCounselingClick}
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Free Counseling
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
