import React from 'react';

export const CtaAndContact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F3EB]" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Big CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF7A59] to-[#a7391e] p-8 md:p-12 text-white soft-shadow-3 mb-12">
          {/* Floating decorative circles */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute left-10 top-0 w-32 h-32 bg-[#FDE68A]/20 rounded-full blur-xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
              <span className="material-symbols-outlined text-sm">celebration</span>
              <span>Promo Beli 3 Lebih Hemat!</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Siap Bikin Buah Hati Tampil Ceria dan Nyaman Setiap Hari?
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
              Konsultasikan pilihan motif dan ukuran dengan ramah lewat Customer Service WhatsApp kami. Dapatkan garansi tukar size jika pakaian kurang pas!
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                id="cta-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
                href="https://wa.me/6281234567890?text=Halo%20Admin%20Ceria%20Kids,%20saya%20tertarik%20dengan%20promo%20baju%20anak"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                <span>Hubungi Admin WhatsApp Sekarang</span>
              </a>

              <a
                id="cta-browse-btn"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-6 py-4 rounded-full text-sm font-semibold transition-all"
                href="#katalog-produk"
              >
                <span>Jelajahi Model Lainnya</span>
              </a>
            </div>
          </div>
        </div>

        {/* Info Lokasi, Jam Buka, & Marketplace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Alamat Toko */}
          <div className="bg-white rounded-2xl p-6 border border-[#EFE7DA] soft-shadow-1 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1EE] text-[#FF7A59] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">store</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#231918]">Toko Fisik &amp; Workshop</h3>
            <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
              Jl. Anggrek Ceria No. 42, RT 03/RW 07, Lembang, Kab. Bandung Barat, Jawa Barat 40391.
            </p>
            <div className="pt-2 text-xs text-[#FF7A59] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">directions</span> Tersedia Tempat Parkir &amp; Fitting Anak
            </div>
          </div>

          {/* Card 2: Jam Operasional */}
          <div className="bg-white rounded-2xl p-6 border border-[#EFE7DA] soft-shadow-1 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FDE68A]/40 text-[#795900] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#231918]">Jam Operasional</h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-[#58423c]">
              <div className="flex justify-between">
                <span>Senin - Sabtu:</span>
                <strong className="text-[#231918]">08.00 - 20.00 WIB</strong>
              </div>
              <div className="flex justify-between">
                <span>Minggu / Tgl Merah:</span>
                <strong className="text-[#231918]">09.00 - 17.00 WIB</strong>
              </div>
            </div>
            <p className="pt-2 text-xs text-[#34D399] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">bolt</span> Admin WA Respons Cepat
            </p>
          </div>

          {/* Card 3: Marketplace Resmi */}
          <div className="bg-white rounded-2xl p-6 border border-[#EFE7DA] soft-shadow-1 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#128C7E] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#231918]">Marketplace Resmi</h3>
            <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
              Lebih suka belanja lewat e-commerce dengan voucher gratis ongkir? Kunjungi toko official kami:
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EE4D2D]/10 text-[#EE4D2D] hover:bg-[#EE4D2D]/20 text-xs font-bold transition-all"
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">storefront</span> Shopee Official
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#03AC0E]/10 text-[#03AC0E] hover:bg-[#03AC0E]/20 text-xs font-bold transition-all"
                href="https://tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">shopping_basket</span> Tokopedia Official
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
