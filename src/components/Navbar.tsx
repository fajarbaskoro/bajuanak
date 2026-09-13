import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda', active: true },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Katalog Produk', href: '#katalog-produk' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' }
  ];

  return (
    <header className="bg-white border-b border-[#EFE7DA] sticky top-0 z-50 transition-all duration-200 shadow-xs">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 max-w-7xl mx-auto h-20">
        {/* Brand Logo & UMKM Pill */}
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2 group" href="#beranda" id="nav-brand-link">
            <div className="w-10 h-10 rounded-full bg-[#FF7A59] text-white flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-white text-2xl">child_care</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#a7391e] tracking-tight block leading-tight">
                Ceria Kids
              </span>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#FF7A59] bg-[#FFF1EE] px-2 py-0.5 rounded-full inline-block">
                UMKM Baju Anak
              </span>
            </div>
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                link.active
                  ? 'text-[#a7391e] border-b-2 border-[#a7391e] pb-1'
                  : 'text-[#58423c] hover:text-[#a7391e]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            id="nav-catalog-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#EFE7DA] text-[#231918] hover:bg-[#FFF1EE] hover:border-[#FF7A59] hover:text-[#FF7A59] transition-all text-xs font-semibold"
            href="#katalog-produk"
          >
            <span className="material-symbols-outlined text-[#FF7A59] text-base">shopping_bag</span>
            <span>Lihat Katalog</span>
          </a>

          <a
            id="nav-wa-btn"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Ceria%20Kids,%20saya%20ingin%20tanya%20produk%20baju%20anak"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-white text-lg">chat</span>
            <span>Pesan via WA</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Buka Menu"
            className="lg:hidden p-2 rounded-lg text-[#58423c] hover:bg-[#FFF1EE] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EFE7DA] bg-white px-6 py-4 space-y-3" id="mobile-menu-drawer">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#58423c] hover:text-[#a7391e] py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#EFE7DA] flex flex-col gap-2">
            <a
              className="w-full text-center py-2.5 rounded-full border border-[#EFE7DA] text-[#231918] text-xs font-semibold"
              href="#katalog-produk"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lihat Katalog
            </a>
            <a
              className="w-full text-center py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2"
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Ceria%20Kids,%20saya%20ingin%20tanya%20produk%20baju%20anak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-sm">chat</span> Hubungi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
