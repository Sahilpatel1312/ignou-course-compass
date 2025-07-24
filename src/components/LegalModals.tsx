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
        This website is operated by SODE Counselling Services LLP under the brand name “Course Compass”. We are an independent education guidance platform and are not affiliated with Indira Gandhi National Open University (IGNOU) or any other university. Our objective is to provide information and support related to distance and online education offered by UGC-DEB-approved institutions.
      </p>

      <h3 className="font-semibold text-lg text-foreground">Important Notices</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>All university names, logos, and trademarks are used only for reference and informational purposes.</li>
        <li>We do not act as an admission cell or issue degrees, certificates, or mark sheets.</li>
        <li>We offer free counselling to help students make informed educational decisions.</li>
        <li>No fees are charged by us for providing university-related information or guidance.</li>
        <li>Students are advised to verify all details directly from the respective official university portals.</li>
        <li>We fully respect the autonomy and credibility of all educational institutions mentioned on this platform.</li>
      </ul>
    </div>
  </LegalModal>
);

export const TermsConditionsModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <LegalModal title="Terms & Conditions" trigger={trigger}>
    <div className="space-y-4">
      <p>
        These Terms & Conditions govern your use of the website www.ignoudistance.in, owned and operated by SODE Counselling Services LLP under the brand name Course Compass. By using this platform, you agree to abide by the terms mentioned herein.
      </p>
      <p>
        We provide counselling and information services to help users explore online and distance education programs offered by UGC-DEB-approved universities. We are not an admission center and do not claim to represent or be affiliated with any university, including IGNOU.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">1. Role of Our Platform</h3>
          <p>We act solely as a guidance and counselling provider. All decisions related to admission, course selection, or university interactions are made by users independently.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">2. No Affiliation Guarantee</h3>
          <p>We are not affiliated with IGNOU or any other university. All information is provided for awareness and reference only.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">3. Changes to These Terms</h3>
          <p>We reserve the right to update or modify these terms at any time. Continued use of the platform signifies your agreement to the latest version.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">4. Contact</h3>
          <p>For any concerns, reach out to: support@ignoudistance.in</p>
        </div>
      </div>
    </div>
  </LegalModal>
);

export const PrivacyPolicyModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <LegalModal title="Privacy Policy" trigger={trigger}>
    <div className="space-y-4">
      <p>
        This Privacy Policy explains how SODE Counselling Services LLP (operating under the brand “Course Compass”) collects and uses information through www.ignoudistance.in. We are committed to protecting your personal data and using it transparently.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">1. No Personal Data Collected by Default</h3>
          <p>You can freely browse our platform without providing any personal details. We only collect information when you choose to submit forms or contact us directly.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">2. Use of Submitted Information</h3>
          <p>We use the information you voluntarily provide to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Assist you with educational counselling</li>
            <li>Help you explore relevant universities or courses</li>
            <li>Send you admission updates via WhatsApp or email</li>
          </ul>
          <p className="mt-2">You can opt out of communication anytime by contacting us.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">3. Scope of Policy</h3>
          <p>This policy applies to users accessing www.ignoudistance.in. It does not cover other domains or third-party sites we may link to.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">4. Data Sharing</h3>
          <p>We do not sell your data. Your details are used solely for educational counselling and are not shared with any third-party advertisers.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">5. External Links</h3>
          <p>Our platform may link to official university portals for your convenience. We are not responsible for the content or privacy policies of those external websites.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-foreground">6. Cookies and Analytics</h3>
          <p>We use cookies to analyze website performance and enhance user experience. These do not collect personally identifiable information.</p>
        </div>
      </div>
    </div>
  </LegalModal>
);
