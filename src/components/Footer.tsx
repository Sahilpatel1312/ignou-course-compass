
import { GraduationCap, Mail, MapPin, Globe, Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Ignou online courses</h3>
                <p className="text-sm text-gray-400">Your Educational Journey Starts Here</p>
              </div>
            </div>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <p className="mb-3">
                This website is owned and operated by Avedu Pvt Ltd and is intended solely for informational and educational purposes. We are not an official partner, representative, or affiliate of Indira Gandhi National Open University (IGNOU).
              </p>
              <p className="mb-3">
                All information presented here (including courses, fees, eligibility, and admission details) is collected from publicly available sources or official university websites for guidance purposes only. For official and updated information, visitors should always refer directly to the official IGNOU website: <a href="https://www.ignou.ac.in" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">www.ignou.ac.in</a>.
              </p>
              <p className="mb-3">
                IGNOU university holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities. We do not act as a university or an admission authority.
              </p>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">support@ignoudistance.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-sm"></span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">www.ignoudistance.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-yellow-400" />
                <a href="https://www.ignou.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-yellow-400 transition-colors">
                  Ignou official website - www.ignou.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Admission Process</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Fee Structure</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Student Support</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Examination</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Results</a></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Master of Business Administration (MBA)</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Master of Computer Applications (MCA)</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Master of Arts (MA)</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Master of Commerce (M.Com)</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Bachelor of Computer Applications (BCA)</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-400 transition-colors">Bachelor of Business Administration (BBA)</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="bg-blue-600 text-white py-3 px-4 rounded-lg text-center text-sm">
            This site does not handle course enrollments, admissions, or fee collections. If you find any inaccuracies, please email support@ignoudistance.in for corrections. For accurate information, visit the official IGNOU website. Information provided here is solely for informational purposes. We do not act as a university or an admission authority.
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="mt-6 pt-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
              <Link to="/disclaimer" className="text-yellow-400 hover:underline transition-colors">
                Disclaimer
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms-conditions" className="text-yellow-400 hover:underline transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy-policy" className="text-yellow-400 hover:underline transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400">
              © 2025 Ignou Distance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
