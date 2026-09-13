import { Product, Testimonial, FAQItem, GalleryItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Setelan Dino Playful',
    category: 'laki',
    categoryLabel: 'Setelan Anak Laki-Laki',
    tag: 'Best Seller',
    tagColor: 'bg-coral-warm text-white',
    stockStatus: 'Ready Stock',
    materialFeature: '100% Combed 30s Adem',
    materialIcon: 'air',
    ageRange: 'Usia 1 - 5 Thn',
    description: 'Baju oblong & celana pendek katun combed super adem, sablon plastisol tidak lengket saat disetrika.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 45000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmL-eKMVjR0lKaJ-ihQkxu5WDItuuQC8LlBdcTtHhFQDvoaqrB94-1etX8629S1T8uO5wbFaZRUxWZKa4d37rJ0A6as0RGHu5XuotUmZ-YtNr6-JVx2dKP05lv43YLVfoG_1n047eslOUzrom0tAWyqZkZYCMNKHC2O0Mrl5H-UY8_ZBRGW7amHeMfQlLiPlE6jiBiUOReck5DLP2ljveuI9y406JeNHYRgI8hnntIEA7-2ZDApSSr-Q',
    imageAlt: 'Setelan Dino Playful katun combed'
  },
  {
    id: 'prod-2',
    name: 'Dress Bunga Pastel Cantik',
    category: 'perempuan',
    categoryLabel: 'Dress Anak Perempuan',
    tag: 'Favorit Bunda',
    tagColor: 'bg-amber-400 text-amber-950',
    stockStatus: 'Ready Stock',
    materialFeature: 'Katun Rayon Dingin',
    materialIcon: 'air',
    ageRange: 'Usia 2 - 7 Thn',
    description: 'Dress anggun yang flowy, ringan, dan sejuk di kulit saat dipakai jalan-jalan di hari cerah.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 55000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4T6XFXt4v8wp8conq5LjzD9zXBXb4GHriXDml7tpA4tJ2C19ef_9MuW8ZbASn338atnDxwZveHosCkHYKaAPGmOaQJrMCBhFXGqVL7Mj0XvlyA2NA0WkFrCUZLY5555mI998Ao0jE1bhcz9qaOR0ayV_XhL4WkqxCGwuOF8o36n0HqmIa1LCjbfR7eQ4J31sDEp7Q1vcOuEFOfjymhBCyE8qlAz2s8Wb60UURfqerbk2u7znVOxChA',
    imageAlt: 'Dress Bunga Pastel Cantik'
  },
  {
    id: 'prod-3',
    name: 'Jumpsuit Baby Ceria',
    category: 'bayi',
    categoryLabel: 'Baju Bayi (0-1 Thn)',
    tag: 'Bahan Halus',
    tagColor: 'bg-emerald-400 text-white',
    stockStatus: 'Ready Stock',
    materialFeature: 'Hipoalergenik',
    materialIcon: 'spa',
    ageRange: 'Usia 0 - 12 Bulan',
    description: 'Dilengkapi kancing snap lembut anti karat untuk kemudahan mengganti popok tanpa ribet.',
    sizes: ['0-3M', '3-6M', '6-12M'],
    price: 38000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbwA81KxBK9SD92E_GnrP9Vsb_2CHCO33KL6j9gpsVMdxJtkCys4pHv5nZ8feYV-EVXMiADbwymcyMT26waOlxz5ouDrGn5CkgfxMCJeK9zvadMjzH-nQhOA1GXEa_b6Cne5OmYszxnsPOXH3ydONHTrpiCK2PKm7KjkZK1KYmIPdUGOP07XEhSa40sLFHnfizezXo-MQ8-dF0iR1LVJqa4hIN40QP-ckvU-gJDDxF8VAJPkxQEfXxcg',
    imageAlt: 'Jumpsuit Baby Ceria'
  },
  {
    id: 'prod-4',
    name: 'Setelan Safari Petualang',
    category: 'laki',
    categoryLabel: 'Setelan Anak Laki-Laki',
    tag: 'Koleksi Cowok',
    tagColor: 'bg-sky-500 text-white',
    stockStatus: 'Ready Stock',
    materialFeature: '100% Combed 30s',
    materialIcon: 'air',
    ageRange: 'Usia 2 - 6 Thn',
    description: 'Model stylish kasual untuk anak aktif bermain luar ruangan dengan saku fungsional yang lucu.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 48000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS5BP8qa-S9673Rqtca5dtNnGQp4dlOGOjji9pMnNdJws26S9tjfBPJd81pzC9WjoLvFhXzZOV5q6JiOjiDy8_y40frG4MdahFTt6WfSj13q1-9TXeh5sXU_KGQ7MZui65tO3x6_ZhyXaceEqp-yq2XATvGwNaEkjS2HXdvblVQQ_8pS52htYgEOShiMCggyPdYKxYJavPBlicb5zZRXHUg_j61lquEnSt12vDL3Uk3RaLOczfvgXr2w',
    imageAlt: 'Setelan Safari Petualang'
  },
  {
    id: 'prod-5',
    name: 'Piyama Tidur Beruang Manis',
    category: 'piyama',
    categoryLabel: 'Piyama Lucu',
    tag: 'Adem Banget',
    tagColor: 'bg-amber-400 text-amber-950',
    stockStatus: 'Ready Stock',
    materialFeature: 'Katun Lembut Tidur',
    materialIcon: 'bedtime',
    ageRange: 'Usia 1 - 8 Thn',
    description: 'Celana karet elastis empuk tidak meninggalkan bekas merah pada perut anak saat tidur lelap.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 42000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDSk_mERRejgmWGzCEBxvW2X6KA3hT9iosS1_nCOJ8As1PTrZUlTCVxfxPqcHrKiDoNnuk80FOCZraicUsnvCFzol9jaF8p9tMtJe42oPR5_9hXza9aZNrpGhXj4nXE5wttG9maEGAMI0p6n-N-icyFpREuLWZv0Dyo-rxA-qlB_30exVnWp3cE3LwAS6jR7W6guoOaELqXWILhSObkKMGszVW251bobV5WvG-xsHz1R1o1SJnhD0vpw',
    imageAlt: 'Piyama Tidur Beruang Manis'
  },
  {
    id: 'prod-6',
    name: 'Kaos Karakter Ceria Kids',
    category: 'laki',
    categoryLabel: 'Daily Essentials',
    tag: 'Daily Essentials',
    tagColor: 'bg-sky-400 text-white',
    stockStatus: 'Ready Stock',
    materialFeature: 'Anti Luntur',
    materialIcon: 'palette',
    ageRange: 'Usia 1 - 10 Thn',
    description: 'Kaos harian basic super awet, kerah leher rib elastis nyaman tidak mudah melar.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 35000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOp3lH8UyROrP23s_3abZnSIAw6hEP7dGp12XaSVRlybaJJJkLWs6KEK8h6HbngzwJopyWH2-AjsDgpmMhcc2eoGcW3Mgo3ZxvTeMg7PpOKhu2W41DeoCUOltXEFzlp9YUCDjwxBwmXMn2iOZ6uCP2i6vvae3oqZpTbD-gIqUBGEqXRqkeqmQQq8dvCp6T4KdbBloGLW-kl9En85K0FN180I0WDuaPlnArrU85Mjs7EPWnKJ8WP7OqfQ',
    imageAlt: 'Kaos Karakter Ceria Kids'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Bunda Rina',
    role: 'Mama dari Kenzo (2 thn)',
    location: 'Jakarta Selatan',
    initials: 'BR',
    initialsBg: 'bg-[#FFF1EE]',
    initialsColor: 'text-[#FF7A59]',
    rating: 5,
    comment: '"Bahannya adem banget buat si kecil yang gampang keringatan dan biang keringat. Nggak nyusut sama sekali walau sudah dicuci berkali-kali di mesin. Langsung borong 6 setelan lagi!"'
  },
  {
    id: 'test-2',
    name: 'Ayah Dimas',
    role: 'Papa dari Arka (4 thn)',
    location: 'Surabaya',
    initials: 'AD',
    initialsBg: 'bg-[#F0F9FF]',
    initialsColor: 'text-[#00668a]',
    rating: 5,
    comment: '"Ukuran pas sesuai panduan tabel, jahitan rapi tanpa benang sisa. Respon admin WA ramah sekali membantu rekomendasi motif cowok. Pengiriman ke Surabaya cuma 2 hari sampai!"'
  },
  {
    id: 'test-3',
    name: 'Bunda Sarah',
    role: 'Reseller Mitra Resmi',
    location: 'Bandung',
    initials: 'BS',
    initialsBg: 'bg-[#ECFDF5]',
    initialsColor: 'text-[#128C7E]',
    rating: 5,
    comment: '"Awalnya coba beli ecer, ternyata tetangga pada naksir. Sekarang rutin ambil paket reseller grosir, laris manis banget buat jualan di arisan dan status WA. Kualitasnya juara!"'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah bahan baju Ceria Kids nyaman dan tidak bikin anak gerah?',
    answer: 'Sangat adem! Kami hanya menggunakan 100% Cotton Combed 30s premium dan katun rayon premium. Karakteristik bahannya memiliki sirkulasi udara yang baik, menyerap keringat dengan cepat, dan bebas dari serat sintetis kasar yang biasanya memicu biang keringat pada anak-anak.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana cara menentukan ukuran yang tepat untuk anak?',
    answer: 'Kami menyarankan mengukur lebar dada pakaian favorit si kecil di rumah menggunakan meteran baju, lalu cocokkan dengan tabel Size Chart kami di atas. Jika postur anak lebih berisi atau mendekati batas atas usia, sebaiknya naikkan 1 ukuran (upsize) agar lebih leluasa dan dapat dipakai lebih lama.'
  },
  {
    id: 'faq-3',
    question: 'Apakah melayani pembelian grosir atau pendaftaran reseller?',
    answer: 'Tentu saja! Sebagai produsen UMKM langsung, kami membuka peluang kemitraan bagi ibu rumah tangga atau toko baju anak. Tersedia paket hemat mulai 1 lusin hingga partai besar dengan potongan harga khusus reseller dan bahan materi promosi berupa foto katalog siap pakai.'
  },
  {
    id: 'faq-4',
    question: 'Berapa lama estimasi pengiriman dan ekspedisi apa saja yang digunakan?',
    answer: 'Pesanan sebelum pukul 15.00 WIB dikirim di hari yang sama. Kami bekerja sama dengan ekspedisi terpercaya seperti J&T, SiCepat, JNE, dan Anteraja. Estimasi pulau Jawa 1-3 hari kerja, luar pulau Jawa 3-5 hari kerja. Resi otomatis dibagikan melalui WhatsApp.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'Toko Offline Kami',
    title: 'Etalase Butik Ceria Kids Bandung',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi-0sOLatHg_y4v0dytECPDQmRJC0IEKwiHe6gF4tmkaAIRL9vzQBGDfrEtFcysAG0D7eDy2i7J4ZFXhHIc8Iae4pS8ESCPVDnEFXw6C1vRiDyej97-xiWm_35EvtJOc4MVKo8swNe7GGHu1p3X0luw38l-zN2RGx4X93f3jwH-6nYSsyIxIEBahG3m7pBzTu1sRCyRPE9iujmHrWeHeYn4aN9FbE_rY9YuGI_HesuT_bCFFZFoJLJdg',
    alt: 'Etalase Butik Ceria Kids Bandung'
  },
  {
    id: 'gal-2',
    category: 'Standar Kualitas',
    title: 'Pengecekan Jahitan & QC Ganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTPvFuIVlL4m4tFmWDIGSBR2ubgzx0nhRK7IMehWxDFLZiaqPkJ6AluXrnt4mwvmzl4t7Ex8jUZa__zWuOasO8v7W-HoDRxuZfNqXjy7KX6CZvH7T-zPpD2Z1jLhyyhfcm1wdMxxZ9bjCfsNS1c-AJPfKVF8_FQMsk4ZQLHRAqajSPuFGmuemDHZdGLjfnhNwBzVLgo0URxBzhg9RoxDRtbSwhjYSaKIYTvvtcaop_q_6eQrB9j1C7-Q',
    alt: 'Pengecekan Jahitan dan QC Ganda'
  },
  {
    id: 'gal-3',
    category: 'Keceriaan Anak',
    title: 'Nyaman Bergerak & Bahagia Seharian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTCm1cXMeaTNZ5oyZpMfA--xY54FFwz_xccySXo9H61imyXPj8tr7DqtaL_sdffP4VymwIr55FroBI_hyYtbMnJcWx8Xe-S1iQ1xKO2M8LddFr_p1uDVy88Nqu6Zyml91bphrisW3nGSkt-l2259otbSQ3vq2h_MjbBUaISv22lZ_WzYhdJaDTGqrNUcIbGzp35k75F3Dm8EzIwK6bPd31iFlnSFblygPxIKXIuuw4QQOT4GWwmepZyw',
    alt: 'Anak nyaman bergerak dan bahagia seharian'
  }
];

export const SIZE_CHART = [
  { size: 'S', age: '1 - 2 Thn', chest: '28 cm', length: '38 cm' },
  { size: 'M', age: '3 - 4 Thn', chest: '31 cm', length: '42 cm' },
  { size: 'L', age: '5 - 6 Thn', chest: '34 cm', length: '46 cm' },
  { size: 'XL', age: '7 - 9 Thn', chest: '37 cm', length: '51 cm' }
];
