import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F3EB] border-y border-[#EFE7DA]" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#FF7A59] text-xs sm:text-sm font-bold tracking-wider uppercase">
              <span className="material-symbols-outlined text-base">storefront</span>
              <span>Cerita UMKM Kami</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231918] tracking-tight">
              Bermula dari Keinginan Memberikan Pakaian Terbaik untuk Anak Tercinta
            </h2>

            <p className="text-sm sm:text-base text-[#58423c] leading-relaxed">
              <strong className="text-[#231918]">Ceria Kids</strong> didirikan oleh pasangan suami-istri pengrajin garmen lokal yang prihatin melihat pakaian anak di pasaran: seringkali berbahan panas, jahitan mudah sobek, atau harganya terlalu mahal untuk pakaian harian si kecil yang tumbuh dengan pesat.
            </p>

            <p className="text-sm sm:text-base text-[#58423c] leading-relaxed">
              Dari workshop rumahan dengan 4 penjahit terampil, kini kami memberdayakan puluhan ibu rumah tangga lokal untuk memproduksi ribuan pakaian anak berstandar butik dengan bahan katun combed 30s asli Bandung yang dingin, menyerap keringat, dan tanpa residu kimia yang berbahaya bagi kulit sensitif.
            </p>

            {/* Visi & Misi Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#EFE7DA] soft-shadow-1">
                <div className="flex items-center gap-2.5 text-[#a7391e] mb-2">
                  <span className="material-symbols-outlined">favorite</span>
                  <h3 className="text-sm font-bold">Visi Kami</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
                  Menjadi UMKM pakaian anak terpercaya yang menemani keceriaan masa kecil Indonesia dengan kenyamanan maksimal.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#EFE7DA] soft-shadow-1">
                <div className="flex items-center gap-2.5 text-[#a7391e] mb-2">
                  <span className="material-symbols-outlined">verified</span>
                  <h3 className="text-sm font-bold">Komitmen Kualitas</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
                  QC ganda di setiap jahitan, pewarna kain bersertifikasi ramah bayi (Oeko-Tex Standard), dan harga jujur langsung produsen.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics & Workshop Picture Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-4 border border-[#EFE7DA] soft-shadow-1">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#f7e4e2] mb-4">
                <img
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  alt="Workshop penjahit pakaian anak Ceria Kids di Bandung Barat"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1FRot1De7nsi1vbq_api6rDIADNIhh8cesOJoU4fvJ2GfFLbKQRl_eFq070d9pLZv51Ej7Qx6CbvEEpuBJKdKfh9gsUYEnbJLzpp2GO4k9-w9jtGXuRiZh7ezlXRcdtLhJ6R9I1BaPSSncb-VBfRZtRzSndPxu93ouaJFqhw9ue52GV1O00M4BXTPba1lf6UJlOM0Q9aRz2Dofoj9xSxtUwbL24F0uabf010U8oG1uqMKzsKauim09Q"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-xs flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs">location_on</span>
                  <span>Workshop &amp; Butik: Bandung Barat, Jawa Barat</span>
                </div>
              </div>

              {/* 3 Stat Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-2.5 rounded-xl bg-[#FFF1EE]/70">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#a7391e]">5.000+</div>
                  <div className="text-[11px] font-semibold text-[#58423c] mt-0.5">Pcs Terjual</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#ECFDF5]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#128C7E]">99%</div>
                  <div className="text-[11px] font-semibold text-[#58423c] mt-0.5">Pelanggan Puas</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FDE68A]/40">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#795900]">120+</div>
                  <div className="text-[11px] font-semibold text-[#58423c] mt-0.5">Model Desain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
