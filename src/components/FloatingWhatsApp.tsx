import { MessageCircle } from "lucide-react";
import {CONTACT} from "@/config/contact"



const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
