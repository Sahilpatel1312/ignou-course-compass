import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Privacy Policy</h1>

        <p className="mb-4">
          <strong>ignoudistance.in</strong> is a dedicated educational platform offering counselling services to help students explore online and distance education options. We are not affiliated with IGNOU or any university and solely provide guidance to assist your academic journey, We do not act as a university or an admission authority.
        </p>

        <p className="mb-4">
          By using our website, including our mobile applications, you legally accept all our Terms and Conditions listed under all headers on this platform.
        </p>

        <p className="mb-4">
          We recognize the importance of maintaining your privacy and the confidentiality of the information you share with us. We do not sell or rent any personal data. "Personal Information" includes details that identify an individual such as name, address, telephone number, or email address.
        </p>

        <p className="mb-4">
          This Privacy Policy explains how <strong>ignoudistance.in</strong> collects and uses information through www.ignoudistance.in. We are committed to protecting your personal data and using it transparently.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. No Personal Data Collected by Default</h2>
        <p className="mb-4">
          You can freely browse our platform without providing any personal details. We only collect information when you choose to submit forms or contact us directly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Submitted Information</h2>
        <p className="mb-4">
          We use the information you voluntarily provide to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Assist you with educational counselling</li>
          <li>Help you explore relevant universities or courses</li>
          <li>Send you admission updates via WhatsApp or email</li>
        </ul>
        <p className="mb-4">
          You may opt out of our communication anytime by contacting us at <a className="text-blue-600 underline" href="mailto:support@ignoudistance.in">support@ignoudistance.in</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Scope of Policy</h2>
        <p className="mb-4">
          This policy applies only to users accessing www.ignoudistance.in. It does not cover other domains or third-party sites we may link to.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
        <p className="mb-4">
          We do not sell or share your personal data with advertisers. Your information is strictly used to deliver counselling and educational services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. External Links</h2>
        <p className="mb-4">
          Our platform may link to official university portals for your convenience. We are not responsible for the content or privacy practices of those websites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies and Analytics</h2>
        <p className="mb-4">
          We use cookies to analyze website performance and enhance your experience. These do not collect personally identifiable information.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
