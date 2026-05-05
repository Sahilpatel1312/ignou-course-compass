import { useState } from "react";
import { Phone, PhoneCall } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import SocialProofNotifications from "./SocialProofNotifications";
import CallbackRequestModal from "./CallbackRequestModal";

const PHONE = "+917975877374";

const FloatingActions = () => {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      {/* WhatsApp - bottom-left */}
      <WhatsAppButton />

      {/* Right column: Call Now + Callback */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call now"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <Phone className="h-5 w-5" />
          <span className="hidden sm:inline font-semibold">Call Now</span>
        </a>
        <button
          onClick={() => setCallbackOpen(true)}
          aria-label="Request a callback"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <PhoneCall className="h-5 w-5" />
          <span className="hidden sm:inline font-semibold">Request Callback</span>
        </button>
      </div>

      {/* Social proof toast */}
      <SocialProofNotifications />

      <CallbackRequestModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
};

export default FloatingActions;
