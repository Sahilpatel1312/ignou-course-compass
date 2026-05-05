import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917975877374";
const DEFAULT_MESSAGE = "Hi, I want free counselling for IGNOU July 2026 admission.";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ message = DEFAULT_MESSAGE, className = "" }: WhatsAppButtonProps) => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
