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
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-8 right-8 z-[60] flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip / Label */}
      <span className="
        absolute right-16 opacity-0 translate-x-4
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300
        bg-white text-gray-800 text-sm font-semibold
        px-4 py-2 rounded-full shadow-xl
        whitespace-nowrap pointer-events-none
      ">
        Chat with us
      </span>

      {/* Button Container */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
        <MessageCircle className="h-7 w-7 text-white" />
        
        {/* Ping Animation Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
