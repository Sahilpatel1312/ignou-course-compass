import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Disclaimer</h1>

        <p className="mb-4">
          This website is operated under the brand name <strong>ignoudistance.in</strong>. We are an
          independent education guidance platform and are not affiliated with Indira Gandhi National Open
          University (IGNOU) or any other university. ignou university holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities.  We do not act as a university or an admission authority.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Important Notices:</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>All university names, logos, and trademarks are used only for reference and informational purposes.</li>
          <li>We do not act as an admission cell or issue degrees, certificates, or mark sheets.</li>
          <li>We offer free counselling to help students make informed educational decisions.</li>
          <li>No fees are charged by us for providing university-related information or guidance.</li>
          <li>Students are advised to verify all details directly from the respective official university portals.</li>
        </ul>

        <p className="mt-6">
          We fully respect the autonomy and credibility of all educational institutions mentioned on this platform.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default DisclaimerPage;
