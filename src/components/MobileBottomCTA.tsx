import { useState } from "react";
import { Phone, MessageCircle, PhoneCall } from "lucide-react";
import CallbackRequestModal from "./CallbackRequestModal";

const PHONE = "+917975877374";
const WHATSAPP_NUMBER = "917975877374";
const WHATSAPP_MSG = "Hi, I want free counselling for IGNOU July 2026 admission.";

/**
 * Mobile-only sticky bottom CTA bar.
 * Replaces the floating action buttons on mobile for better visibility.
 */
const MobileBottomCTA = () => {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      <div
        role="navigation"
        aria-label="Quick contact"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
      >
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <a
            href={`tel:${PHONE}`}
            aria-label="Call now"
            className="flex flex-col items-center justify-center py-2.5 text-blue-600 active:bg-blue-50"
          >
            <Phone className="h-5 w-5 mb-0.5" />
            <span className="text-xs font-semibold">Call Now</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex flex-col items-center justify-center py-2.5 text-green-600 active:bg-green-50"
          >
            <MessageCircle className="h-5 w-5 mb-0.5" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
          <button
            onClick={() => setCallbackOpen(true)}
            aria-label="Request a callback"
            className="flex flex-col items-center justify-center py-2.5 text-orange-600 active:bg-orange-50"
          >
            <PhoneCall className="h-5 w-5 mb-0.5" />
            <span className="text-xs font-semibold">Callback</span>
          </button>
        </div>
      </div>

      {/* Spacer so page content isn't hidden behind the bar on mobile */}
      <div className="sm:hidden h-16" aria-hidden="true" />

      <CallbackRequestModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
};

export default MobileBottomCTA;
