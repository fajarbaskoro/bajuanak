import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FDE68A]/50 text-[#795900] px-3 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-[#FBBF24] text-sm material-symbols-fill">star</span>
            <span>Kata Ayah &amp; Bunda</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231918] tracking-tight">
            Cerita Jujur dari Ribuan Keluarga
          </h2>

          <p className="text-sm sm:text-base text-[#58423c] leading-relaxed">
            Kebahagiaan dan kenyamanan anak adalah prioritas utama setiap pakaian yang kami buat.
          </p>
        </div>

        {/* Testimonial Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#EFE7DA] soft-shadow-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FBBF24]">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined material-symbols-fill text-lg">
                      star
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#231918] leading-relaxed italic">
                  {review.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFE7DA] flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${review.initialsBg} ${review.initialsColor} flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#231918] text-sm">{review.name}</span>
                    <span className="material-symbols-outlined text-[#34D399] text-base">verified</span>
                  </div>
                  <span className="text-xs text-[#58423c] block">
                    {review.role} • {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
