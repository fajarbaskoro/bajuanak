import React from 'react';
import { GALLERY_ITEMS } from '../data/mockData';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F3EB] border-y border-[#EFE7DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#FF7A59] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-base">photo_camera</span>
              <span>Aktivitas UMKM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231918] tracking-tight">
              Dari Workshop Kami Menuju Senyum Si Kecil
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58423c] max-w-md leading-relaxed">
            Dokumentasi proses Quality Control, kerapian pengepakan, suasana toko fisik kami, dan keceriaan anak-anak memakainya.
          </p>
        </div>

        {/* Bento Visual Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f7e4e2] border border-[#EFE7DA] soft-shadow-1"
            >
              <img
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.image}
                alt={item.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[#FDE68A] text-[11px] font-bold uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white text-base sm:text-lg font-bold leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
