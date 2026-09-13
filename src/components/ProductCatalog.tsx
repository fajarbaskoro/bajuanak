import React, { useState } from 'react';
import { PRODUCTS, SIZE_CHART } from '../data/mockData';
import { Product } from '../types';

interface ProductCatalogProps {
  onSelectProduct?: (product: Product, size: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({
    'prod-1': 'M',
    'prod-2': 'S',
    'prod-3': '3-6M',
    'prod-4': 'L',
    'prod-5': 'M',
    'prod-6': 'M'
  });

  const [calcAge, setCalcAge] = useState<string>('3-4');

  const categories = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'bayi', label: 'Baju Bayi (0-1 Thn)' },
    { id: 'laki', label: 'Setelan Anak Laki-Laki' },
    { id: 'perempuan', label: 'Dress Anak Perempuan' },
    { id: 'piyama', label: 'Piyama Lucu' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleSizeSelect = (productId: string, size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size
    }));
  };

  const getWaLink = (product: Product) => {
    const chosenSize = selectedSizes[product.id] || product.sizes[0];
    const text = encodeURIComponent(
      `Halo Admin Ceria Kids, saya mau pesan ${product.name} (Ukuran: ${chosenSize}, Harga: Rp ${product.price.toLocaleString('id-ID')})`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]" id="katalog-produk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFF1EE] text-[#a7391e] px-3 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-sm">styler</span>
            <span>Koleksi Pilihan Bunda</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231918] tracking-tight">
            Katalog Baju Anak Terlaris
          </h2>

          <p className="text-sm sm:text-base text-[#58423c] leading-relaxed">
            Pilihan setelan harian, dress manis, hingga piyama tidur yang adem digunakan si kecil beraktivitas seharian tanpa rewel gerah.
          </p>
        </div>

        {/* Filter Tabs / Interactive Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10" id="filter-container">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#FF7A59] text-white soft-shadow-1'
                    : 'bg-white border border-[#EFE7DA] text-[#58423c] hover:border-[#FF7A59] hover:text-[#FF7A59]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (6 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="product-grid">
          {filteredProducts.map((product) => {
            const currentSelectedSize = selectedSizes[product.id] || product.sizes[0];
            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="bg-white rounded-2xl border border-[#EFE7DA] p-4 soft-shadow-1 hover:soft-shadow-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f7e4e2] mb-4">
                    <img
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.image}
                      alt={product.imageAlt}
                    />
                    <span
                      className={`absolute top-3 left-3 ${product.tagColor} text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs`}
                    >
                      {product.tag}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#231918] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#EFE7DA]">
                      {product.stockStatus}
                    </span>
                  </div>

                  {/* Feature & Age Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 bg-[#ECFDF5] text-[#128C7E] text-[11px] font-bold px-2 py-0.5 rounded-md">
                      <span className="material-symbols-outlined text-xs">{product.materialIcon}</span>{' '}
                      {product.materialFeature}
                    </span>
                    <span className="text-xs text-[#58423c]">{product.ageRange}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#231918] mb-1 group-hover:text-[#a7391e] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#58423c] line-clamp-2 mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Size Selector */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-[#58423c] font-medium">Ukuran:</span>
                    <div className="flex gap-1.5">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={(e) => handleSizeSelect(product.id, s, e)}
                          className={`min-w-6 h-6 px-1.5 rounded text-[11px] flex items-center justify-center font-bold transition-colors cursor-pointer ${
                            currentSelectedSize === s
                              ? 'bg-[#FF7A59] text-white border border-[#FF7A59]'
                              : 'bg-white border border-[#EFE7DA] text-[#231918] hover:border-[#FF7A59]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & WA Action */}
                <div className="pt-3 border-t border-[#EFE7DA] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-[#58423c] block leading-tight">Harga UMKM</span>
                    <span className="text-lg sm:text-xl font-extrabold text-[#FF7A59]">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <a
                    id={`wa-order-btn-${product.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xs transition-all active:scale-95"
                    href={getWaLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Pesan via WA</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Size Chart Guide Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 border border-[#EFE7DA] soft-shadow-1">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-[#FF7A59] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">straighten</span>
                <span>Panduan Ukuran (Size Chart) Ceria Kids</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#231918]">
                Ragu Menentukan Ukuran yang Pas untuk Buah Hati?
              </h3>
              <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
                Tiap anak memiliki postur yang unik. Patokan umur adalah estimasi umum; kami sarankan mengukur lebar dada dan panjang badan pakaian kesayangan anak.
              </p>
            </div>

            {/* Table Pill Snapshot */}
            <div className="overflow-x-auto w-full md:w-auto">
              <table className="text-xs border-collapse bg-[#FDFBF7] rounded-xl overflow-hidden shadow-2xs">
                <thead className="bg-[#FFF1EE] text-[#a7391e] font-bold">
                  <tr>
                    <th className="py-2.5 px-3.5 text-left">Size</th>
                    <th className="py-2.5 px-3.5 text-left">Usia</th>
                    <th className="py-2.5 px-3.5 text-left">Lebar Dada</th>
                    <th className="py-2.5 px-3.5 text-left">Panjang</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DA] text-[#58423c]">
                  {SIZE_CHART.map((item) => (
                    <tr key={item.size} className="hover:bg-white transition-colors">
                      <td className="py-2 px-3.5 font-bold text-[#231918]">{item.size}</td>
                      <td className="py-2 px-3.5">{item.age}</td>
                      <td className="py-2 px-3.5">{item.chest}</td>
                      <td className="py-2 px-3.5">{item.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
