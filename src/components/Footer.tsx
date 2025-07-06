
import { GraduationCap, Phone, Mail, MapPin, Globe, Facebook, Twitter, Youtube } from "lucide-react";

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
                <h3 className="text-xl font-bold text-white">IGNOU Course Compass</h3>
                <p className="text-sm text-gray-400">Your Educational Journey Starts Here</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Comprehensive guide to IGNOU courses with expert counseling services to help you choose the right educational path for your career goals.
            </p>
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
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">7349007840</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">admission@ignou.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">Maidan Garhi, New Delhi - 110068</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">www.ignou.ac.in</span>
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 IGNOU Course Compass. All rights reserved. 
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Affiliated with Indira Gandhi National Open University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
