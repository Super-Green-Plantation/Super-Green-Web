"use client";

import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  phone: string; // 94771234567
  message?: string;
};

const FloatingWhatsApp = ({
  phone,
  message = "Hello! I need help.",
}: FloatingWhatsAppProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
      animate-pulse
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        rounded-full bg-green-500
        px-4 py-3
        text-white shadow-lg
        transition-all duration-300
        hover:bg-green-600 hover:scale-105
        active:scale-95
      "
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
    </div>
  );
};

export default FloatingWhatsApp;
