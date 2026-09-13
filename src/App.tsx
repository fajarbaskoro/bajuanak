/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCatalog } from './components/ProductCatalog';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { CtaAndContact } from './components/CtaAndContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#231918] antialiased selection:bg-[#FFF1EE] selection:text-[#a7391e]">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Tentang Kami (About UMKM) */}
        <AboutSection />

        {/* Katalog Produk Unggulan & Size Guide */}
        <ProductCatalog />

        {/* Keunggulan Kami (Why Choose Us) */}
        <FeaturesSection />

        {/* Testimoni Pelanggan (Social Proof) */}
        <TestimonialsSection />

        {/* Galeri Aktivitas & Produksi UMKM */}
        <GallerySection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Promo CTA & Store Location Info */}
        <CtaAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick WhatsApp Ordering */}
      <FloatingWhatsApp />
    </div>
  );
}
