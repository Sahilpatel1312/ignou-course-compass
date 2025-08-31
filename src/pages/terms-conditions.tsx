import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Terms &amp; Conditions</h1>

        <p className="mb-4">
          These Terms &amp; Conditions govern your use of the website <strong>www.ignoudistance.in</strong>, independently owned and operated By Avedu Pvt Ltd. By using this platform, you agree to abide by the terms mentioned herein.
        </p>

        <p className="mb-4">
          We provide counselling and information services to help users explore online and distance education programs offered by UGC-DEB-approved universities. We are not an admission center and do not claim to represent or be affiliated with any university, including IGNOU.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Role of Our Platform</h2>
        <p className="mb-4">
          We act solely as a guidance and counselling provider. All decisions related to admission, course selection, or university interactions are made by users independently.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. No Affiliation Guarantee</h2>
        <p className="mb-4">
          We are not affiliated with IGNOU or any other university. All information is provided for awareness and reference only.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Changes to These Terms</h2>
        <p className="mb-4">
          We reserve the right to update or modify these terms at any time. Continued use of the platform signifies your agreement to the latest version.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
        <p>
          For any concerns, reach out to: <a className="text-blue-600 underline" href="mailto:support@ignoudistance.in">support@ignoudistance.in</a>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
