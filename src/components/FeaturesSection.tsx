import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 'feat-1',
      title: 'Bahan Lembut & Hipoalergenik',
      description:
        '100% serat katun combed alami. Lembut di kulit, menyerap keringat dengan baik, dan aman untuk buah hati yang rentan alergi atau biang keringat.',
      icon: 'eco',
      iconBg: 'bg-[#FFF1EE]',
      iconColor: 'text-[#FF7A59]'
    },
    {
      id: 'feat-2',
      title: 'Jahitan Rapi & Awet',
      description:
        'Menggunakan jahitan benang ganda rantai standar butik. Pakaian tetap kokoh dan elastis meski dicuci berulang kali menggunakan mesin cuci.',
      icon: 'verified_user',
      iconBg: 'bg-[#ECFDF5]',
      iconColor: 'text-[#128C7E]'
    },
    {
      id: 'feat-3',
      title: 'Desain Trendy & Ceria',
      description:
        'Kombinasi warna pastel modern dan ilustrasi lucu orisinal yang membangkitkan rasa percaya diri serta keceriaan anak dalam bereksplorasi.',
      icon: 'palette',
      iconBg: 'bg-[#FDE68A]/50',
      iconColor: 'text-[#795900]'
    },
    {
      id: 'feat-4',
      title: 'Harga UMKM & Peluang Reseller',
      description:
        'Harga terjangkau tangan pertama. Melayani pembelian eceran, paket hemat keluarga, hingga paket grosir untuk ibu rumah tangga yang ingin berbisnis reseller.',
      icon: 'savings',
      iconBg: 'bg-[#F0F9FF]',
      iconColor: 'text-[#00668a]'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F3EB] border-y border-[#EFE7DA]" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] text-[#128C7E] px-3 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-sm">thumb_up</span>
            <span>Kenapa Harus Ceria Kids?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231918] tracking-tight">
            4 Alasan Bunda Percaya pada Busana Kami
          </h2>

          <p className="text-sm sm:text-base text-[#58423c] leading-relaxed">
            Dibuat dengan rasa cinta orang tua, kami mengutamakan kenyamanan kulit dan daya tahan pakaian tanpa kompromi.
          </p>
        </div>

        {/* 4 Bento Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-6 border border-[#EFE7DA] soft-shadow-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${feat.iconBg} ${feat.iconColor} flex items-center justify-center mb-5`}>
                  <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#231918] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#58423c] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
