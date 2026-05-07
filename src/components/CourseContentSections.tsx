import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Briefcase, FileText, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoUgc from "@/assets/logo-ugc.png";
import logoNaac from "@/assets/logo-naac.png";
import logoNirf from "@/assets/logo-nirf.png";

export interface CourseContentData {
  courseName: string;
  about: string;
  benefits: string[];
  admissionSteps: string[];
  careerOpportunities: { role: string; salary: string }[];
  faqs: { question: string; answer: string }[];
}

interface CourseContentSectionsProps {
  data: CourseContentData;
  onEnquireClick: () => void;
}

const CourseContentSections = ({ data, onEnquireClick }: CourseContentSectionsProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About IGNOU {data.courseName}</h2>
          <div className="max-w-4xl">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{data.about}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <img src={logoUgc} alt="UGC Logo" className="h-12 w-12 object-contain flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">UGC-DEB Approved</p>
                  <p className="text-xs text-gray-600">Government recognized</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <img src={logoNaac} alt="NAAC A++ Logo" className="h-12 w-12 object-contain flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">NAAC A++ Accredited</p>
                  <p className="text-xs text-gray-600">Highest quality grade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                <img src={logoNirf} alt="NIRF Logo" className="h-12 w-12 object-contain flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">NIRF Rank #1</p>
                  <p className="text-xs text-gray-600">Open university category</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Benefits of IGNOU {data.courseName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Admission Process for IGNOU {data.courseName}</h2>
          <div className="max-w-3xl">
            {data.admissionSteps.map((step, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <p className="text-gray-700">{step}</p>
                </div>
              </div>
            ))}
            <Button
              onClick={onEnquireClick}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3"
            >
              Need Help with Admission? Enquire Now
            </Button>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="career-opportunities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Career Opportunities After IGNOU {data.courseName}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Graduates from IGNOU's {data.courseName} program find opportunities across diverse sectors. Here are some popular job roles and their expected salary ranges:</p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {data.careerOpportunities.map((career, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{career.role}</p>
                    <p className="text-xs text-green-600 font-medium">{career.salary}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions – IGNOU {data.courseName}</h2>
          <div className="max-w-3xl space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseContentSections;
