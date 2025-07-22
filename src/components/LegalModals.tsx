import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface LegalModalProps {
  title: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const LegalModal = ({ title, children, trigger }: LegalModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const DisclaimerModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <LegalModal title="Disclaimer" trigger={trigger}>
    <div className="space-y-4">
      <p>
        This information is provided by DistanceEducationSchool.com, under the legal entity of SODE Counselling Services LLP, registered with the Ministry of Corporate Affairs, with the main objective of providing information, guidance, and counselling services about UGC-DEB-approved universities. We do not act as a university or an admission authority.
      </p>
      
      <h3 className="font-semibold text-lg text-foreground">Essential Points</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>All university names, logos, and trademarks used are for informational purposes only.</li>
        <li>Our role is to provide updates, information, and guidance on universities regarding their distance or online education programs.</li>
        <li>We do not charge students any fees for counselling or guidance on university applications.</li>
        <li>We do not issue degrees, mark sheets, or certificates in the name of any university.</li>
        <li>Our aim is to offer free and unbiased counselling to help students choose the right path.</li>
        <li>We respect the integrity and reputation of all listed universities and do not engage in any activity that damages their credibility.</li>
        <li>Users are encouraged to verify information from official university portals before making decisions.</li>
        <li>Our services are transparent, legal, and purely for student support.</li>
      </ul>
    </div>
  </LegalModal>
);

export const TermsConditionsModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <LegalModal title="Terms & Conditions" trigger={trigger}>
    <div className="space-y-4">
      <p>
        This page outlines the terms and conditions that apply when you access or use services provided on this platform, operated by SODE Counselling Services LLP under DistanceEducationSchool.com.
      </p>
      <p>
        We help students and working professionals explore distance and online education options offered by UGC-DEB-approved universities. These terms outline how we support the process, particularly when payments and third-party tools are involved.
      </p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">1. Our Role</h3>
          <p>We provide information and counselling services only. We are not a university and do not collect any university fees directly. All academic or admission-related payments must be made to the respective university.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">2. Unauthorised Use or Fraud</h3>
          <p>If you suspect any unauthorised transaction linked to a service on our platform, report it immediately. We will coordinate with the respective payment partner for further action.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">3. Updates to These Terms</h3>
          <p>These terms may be updated as services evolve. Continued use of this platform implies your agreement to the latest version of these terms.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">4. Contact Us</h3>
          <p>For support, email us at: admission@ignou.ac.in</p>
        </div>
      </div>
    </div>
  </LegalModal>
);

export const PrivacyPolicyModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <LegalModal title="Privacy Policy" trigger={trigger}>
    <div className="space-y-4">
      <p>
        All information on this platform is provided by DistanceEducationSchool.com, under the legal name of SODE Counselling Services LLP. We are an educational counselling platform that helps students find trusted distance and online courses from UGC-DEB-approved universities. Our goal is to provide accurate information and personalised support to help you choose the right program.
      </p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">1. No Personal Data Collected by Default</h3>
          <p>You can freely browse our website without sharing any personal information. We do not collect your name, phone number, or email address unless you choose to fill out a form or contact us directly.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">2. How We Use It</h3>
          <p>Your information is used to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Guide you in choosing the right university or course</li>
            <li>Provide counselling support</li>
            <li>Share admission-related updates</li>
          </ul>
          <p className="mt-2">We may send you important updates (like admission deadlines or university alerts) via WhatsApp and email. You can opt out anytime.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">3. Scope</h3>
          <p>This privacy policy applies to visitors who access this specific platform operated under www.ignoudistance.in by SODE Counselling Services LLP. It covers how we collect, use, and protect data when you explore course information, compare universities, or fill out enquiry forms on this platform. This policy applies only to the information collected through this platform and does not cover any data collected on the main website or other external sites.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">4. Data Sharing</h3>
          <p>We Don't share your details with Any university partners, and only for the purpose of counselling or admission. We do not sell or share data with third-party advertisers.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">5. External Links</h3>
          <p>Our website may include links to official university portals. We are not responsible for the content or privacy policies of those external sites. We recommend visiting the official university website for new updates.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-foreground">6. Cookies and Analytics</h3>
          <p>Our website uses cookies to improve the user experience. These help us understand how visitors use our site (e.g., most viewed pages, time spent, etc.). These cookies do not identify you personally.</p>
        </div>
      </div>
    </div>
  </LegalModal>
);