import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingHelpButtonProps {
  onClick: () => void;
}

const FloatingHelpButton = ({ onClick }: FloatingHelpButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="ml-2 hidden sm:inline">Need Help?</span>
    </Button>
  );
};

export default FloatingHelpButton;