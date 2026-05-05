import { useState, useEffect } from "react";
import { Phone, PhoneCall } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import SocialProofNotifications from "./SocialProofNotifications";
import CallbackRequestModal from "./CallbackRequestModal";

const PHONE = "+917975877374";

const FloatingActions = () => {
  const [callbackOpen, setCallbackOpen] = useState(false);
  // Rotating label hint for mobile users so they understand each icon
  // 0 = none, 1 = WhatsApp, 2 = Call Now, 3 = Callback
  const [activeLabel, setActiveLabel] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    // WhatsApp label after 3s, hide after 8s
    timers.push(setTimeout(() => setActiveLabel(1), 3000));
    timers.push(setTimeout(() => setActiveLabel(0), 8000));
    // Call Now label at 2 min, hide after 5s
    timers.push(setTimeout(() => setActiveLabel(2), 120000));
    timers.push(setTimeout(() => setActiveLabel(0), 125000));
    // Callback label at 4 min, hide after 5s
    timers.push(setTimeout(() => setActiveLabel(3), 240000));
    timers.push(setTimeout(() => setActiveLabel(0), 245000));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* WhatsApp - bottom-left */}
      <WhatsAppButton showLabel={activeLabel === 1} />

      {/* Right column: Call Now + Callback */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call now"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <Phone className="h-5 w-5" />
          <span className={`${activeLabel === 2 ? "inline" : "hidden"} sm:inline font-semibold whitespace-nowrap`}>
            Call Now
          </span>
        </a>
        <button
          onClick={() => setCallbackOpen(true)}
          aria-label="Request a callback"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <PhoneCall className="h-5 w-5" />
          <span className={`${activeLabel === 3 ? "inline" : "hidden"} sm:inline font-semibold whitespace-nowrap`}>
            Request Callback
          </span>
        </button>
      </div>

      {/* Social proof toast */}
      <SocialProofNotifications />

      <CallbackRequestModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
};

export default FloatingActions;
