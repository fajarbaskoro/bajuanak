import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-20" id="beranda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FFF1EE] text-[#a7391e] px-3.5 py-1.5 rounded-full border border-[#dfc0b8]/30 text-xs font-bold">
              <span className="material-symbols-outlined text-[#FF7A59] text-sm">auto_awesome</span>
              <span>Koleksi Harian Nyaman &amp; Lucu Untuk Si Kecil</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231918] tracking-tight leading-[1.15]">
              Pakaian Anak Lucu,{' '}
              <span className="text-[#FF7A59] underline decoration-[#FBBF24]/70 decoration-wavy decoration-4">
                Nyaman
              </span>
              , &amp; Ramah di Kantong
            </h1>

            <p className="text-base sm:text-lg text-[#58423c] max-w-2xl leading-relaxed">
              Ceria Kids menghadirkan aneka pakaian harian bayi hingga usia 12 tahun berbahan katun 100% combed yang adem, lembut di kulit sensitif, dan desain menggemaskan.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                id="hero-catalog-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#FF7A59] hover:bg-[#F06440] text-white px-7 py-3.5 rounded-full text-sm font-bold soft-shadow-2 transition-all duration-200 active:scale-95"
                href="#katalog-produk"
              >
                <span>Lihat Katalog Lengkap</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
              <a
                id="hero-wa-cta"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3.5 rounded-full text-sm font-bold soft-shadow-1 transition-all duration-200 active:scale-95"
                href="https://wa.me/6281234567890?text=Halo%20Ceria%20Kids,%20mau%20konsultasi%20size%20dan%20katalog%20terbaru"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Konsultasi / Order via WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights List */}
            <div className="pt-6 border-t border-[#EFE7DA] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#34D399] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </div>
                <span className="text-xs font-semibold text-[#231918]">Bahan 100% Katun Adem</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#34D399] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </div>
                <span className="text-xs font-semibold text-[#231918]">Jahitan Standar Butik</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#34D399] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </div>
                <span className="text-xs font-semibold text-[#231918]">Ribuan Testimoni Ibu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#34D399] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </div>
                <span className="text-xs font-semibold text-[#231918]">Kirim Seluruh RI</span>
              </div>
            </div>
          </div>

          {/* Right Hero Bento Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative pastel aura circles */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#FDE68A]/40 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#FFF1EE] rounded-full blur-2xl -z-10"></div>

              {/* Main Visual Card */}
              <div className="bg-white rounded-3xl p-4 border border-[#EFE7DA] soft-shadow-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/4.5] bg-[#f7e4e2]">
                  <img
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    alt="A joyful Indonesian toddler boy and girl laughing happily while wearing cheerful pastel cotton matching clothing"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjk7NbYI68TsUkukXLPAZduON5vwObFV-pGWdO0ep91M19faLHQiP4x34SI16dw7WBgMKLfzuwOyB-Q0wNaAXt3Mj_w3aj3BkHGjHJQ05p9IkdH-G9g_CohziVIVTsq6KCrTmI9sXp4Yg76QzEnq38p4OucvwJbQIOtuCM-Grzednoo0dyD7HycPq4wv3gSJK9Tr_ljUNMPUSCatsgiCTXqdLnBU_ho5Xuyp9r38z7Y3WwsQ7putGjug"
                  />

                  {/* Floating Stock Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#a7391e] flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></span>
                    <span>Koleksi Terlaris 2024</span>
                  </div>

                  {/* Floating Price Tag Highlight */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-[#EFE7DA] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF1EE] flex items-center justify-center text-[#FF7A59]">
                      <span className="material-symbols-outlined text-2xl">local_mall</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[#58423c] block font-medium">Mulai Dari</span>
                      <span className="text-xl text-[#FF7A59] font-bold">Rp 35.000</span>
                    </div>
                  </div>
                </div>

                {/* Mini micro-banner inside card */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-[#58423c]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#FBBF24] text-base material-symbols-fill">star</span>
                    <strong className="text-[#231918]">4.9 / 5.0</strong> dari 2.400+ ulasan
                  </span>
                  <span className="text-xs bg-[#ECFDF5] text-[#128C7E] px-2.5 py-1 rounded-full font-semibold">
                    100% Combed 30s
                  </span>
                </div>
              </div>

              {/* Floating mini badge left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white p-3 rounded-2xl border border-[#EFE7DA] soft-shadow-2 items-center gap-2.5 max-w-[220px]">
                <div className="w-9 h-9 rounded-full bg-[#FDE68A]/60 flex items-center justify-center text-[#795900]">
                  <span className="material-symbols-outlined text-xl">sentiment_very_satisfied</span>
                </div>
                <div className="text-xs leading-tight">
                  <p className="font-bold text-[#231918]">Bunda Bahagia</p>
                  <p className="text-[#58423c]">Si kecil bebas bergerak aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
