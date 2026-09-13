import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        id="floating-wa-btn"
        aria-label="Chat WhatsApp Langsung"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white pl-4 pr-5 py-3 rounded-full soft-shadow-3 hover:scale-105 active:scale-95 transition-all duration-200"
        href="https://wa.me/6281234567890?text=Halo%20Admin%20Ceria%20Kids,%20mau%20order%20baju%20anak"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="text-xs sm:text-sm font-bold hidden sm:inline">Tanya Baju via WA</span>
      </a>
    </div>
  );
};
