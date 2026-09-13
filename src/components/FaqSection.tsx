import React, { useState } from 'react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF1EE] text-[#a7391e] px-3 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-sm">help</span>
            <span>Bantuan &amp; Pertanyaan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231918] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="text-sm sm:text-base text-[#58423c] leading-relaxed">
            Punya pertanyaan sebelum memesan? Temukan jawaban cepat di bawah ini atau chat admin kami langsung.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EFE7DA] overflow-hidden soft-shadow-1 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[#231918] hover:text-[#FF7A59] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-[#FF7A59] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#58423c] leading-relaxed border-t border-[#EFE7DA]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
