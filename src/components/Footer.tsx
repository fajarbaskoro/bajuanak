import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F3EB] border-t border-[#EFE7DA]" id="footer">
      <div className="w-full py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF7A59] text-white flex items-center justify-center font-bold text-base">
                <span className="material-symbols-outlined text-white text-sm">child_care</span>
              </div>
              <span className="text-xl font-bold text-[#a7391e]">Ceria Kids</span>
            </div>
            <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
              UMKM pakaian anak lokal yang memproduksi busana bayi hingga usia 12 tahun dengan bahan katun combed 100% adem, lembut, jahitan rapi berstandar butik, dan harga yang bersahabat untuk keluarga Indonesia.
            </p>
            <div className="flex items-center gap-3 text-[#58423c]">
              <a
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white border border-[#EFE7DA] flex items-center justify-center hover:text-[#FF7A59] hover:border-[#FF7A59] transition-all"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-base">chat</span>
              </a>
              <a
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white border border-[#EFE7DA] flex items-center justify-center hover:text-[#FF7A59] hover:border-[#FF7A59] transition-all"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-base">photo_camera</span>
              </a>
              <a
                aria-label="Shopee"
                className="w-8 h-8 rounded-full bg-white border border-[#EFE7DA] flex items-center justify-center hover:text-[#FF7A59] hover:border-[#FF7A59] transition-all"
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-base">shopping_bag</span>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#a7391e] text-sm font-bold">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a className="text-[#a7391e] font-bold hover:opacity-80 transition-opacity" href="#beranda">
                  Beranda
                </a>
              </li>
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#tentang-kami">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#katalog-produk">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#keunggulan">
                  Keunggulan
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#a7391e] text-sm font-bold">Informasi Belanja</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#katalog-produk">
                  Ukuran &amp; Panduan Size
                </a>
              </li>
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#faq">
                  Kebijakan Pengiriman
                </a>
              </li>
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-[#58423c] hover:text-[#a7391e] transition-colors" href="#kontak">
                  Lokasi Toko Offline
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#a7391e] text-sm font-bold">Kontak Pemesanan</h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#58423c]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF7A59] text-sm">phone_iphone</span>
                <a className="hover:text-[#a7391e] transition-colors font-medium" href="https://wa.me/6281234567890">
                  Kontak WhatsApp (+62 812-3456-7890)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF7A59] text-sm">mail</span>
                <span>halo@ceriakids.id</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#FF7A59] text-sm shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Lembang, Kab. Bandung Barat, Jawa Barat</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#EFE7DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-[#58423c]">
            &copy; 2024 UMKM Ceria Kids - Baju Anak Nyaman &amp; Terjangkau. Hak Cipta Dilindungi.
          </p>
          <p className="text-xs text-[#58423c]/70">
            Bangga Buatan Indonesia &bull; Dukung UMKM Lokal
          </p>
        </div>
      </div>
    </footer>
  );
};
