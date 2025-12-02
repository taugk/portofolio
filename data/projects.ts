// data/projects.ts
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "sistem-inventory-tsango-rice-togo",
    title: "Sistem Informasi Inventaris",
    role: "Fullstack Developer",
    desc: "Aplikasi manajemen stok gudang dengan metode FIFO untuk mengurangi selisih stok.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    image: "/images/tsangoo.png", // Ini aman (link luar)
    details:
      "Masalah utama klien adalah pencatatan manual yang sering hilang. Saya membangun sistem ini untuk otomatisasi input dan output barang...",
    links: "https://github.com/taugk/Inventory-Tsangoo",
  },

  {
    id: 2,
    slug: "resaji-food-waste-marketplace",
    title: "reSaji – Food Waste Marketplace",
    role: "Backend Developer",
    desc: "E-commerce untuk jual beli makanan berlebih dengan integrasi Machine Learning.",
    tech: ["Node.js", "Express", "Python", "Machine Learning", "PostgreSQL"],
    // PERBAIKAN: Typo 'hhttp' dihapus, atau ganti pakai gambar lokal jika ada
    image: "/images/resaji.webp",
    details:
      "reSaji adalah platform marketplace makanan berlebih. Saya membangun backend menggunakan Node.js serta API Machine Learning berbasis Flask.",
    links: "https://github.com/taugk/resaji-backend",
  },

  {
    id: 3,
    slug: "klasifikasi-pernikahan-dini-svm",
    title: "Sistem Klasifikasi Pernikahan Dini",
    role: "Fullstack & ML Engineer",
    desc: "Sistem klasifikasi pernikahan dini menggunakan metode SVM RBF One-vs-Rest.",
    tech: ["Laravel", "Python", "Flask", "SVM", "MySQL"],
    // PERBAIKAN: Hapus '../public'
    image: "/images/sikadin.png",
    details:
      "Aplikasi web untuk memprediksi kategori risiko pernikahan dini berdasarkan data KUA. Backend Laravel terhubung dengan API Flask.",
    links: "https://github.com/taugk/SISTEM-KLASIFIKASI-PERNIKAHAN-DINI",
  },

  {
    id: 4,
    slug: "ogaway-store-ecommerce",
    title: "Ogaway Store",
    role: "Fullstack Developer",
    desc: "E-commerce sederhana untuk penjualan handphone dengan fitur cart.",
    tech: ["Laravel", "MySQL", "BootsrapCSS"],
    // PERBAIKAN: Rename file asli Anda jadi 'ogaway.png' biar tidak ada spasi
    image: "/images/ogaway-store.png",
    details:
      "Ogaway Store adalah platform e-commerce dengan fitur manajemen produk dan keranjang belanja.",
    links: "https://github.com/taugk/ogaway-store",
  },

  {
    id: 5,
    slug: "website-kua-cibingbin",
    title: "Website KUA Cibingbin",
    role: "Web Developer",
    desc: "Website profil instansi KUA Cibingbin berbasis WordPress.",
    tech: ["WordPress", "Elementor", "PHP"],
    // PERBAIKAN: Rename file asli Anda jadi 'kua-cibingbin.png'
    image: "/images/kua.png",
    details:
      "Website ini menampilkan informasi layanan pernikahan dan dokumentasi kegiatan KUA.",
    links: "https://kuacibingbin.com",
  },

  {
    id: 6,
    slug: "sistem-klastering-ptsl",
    title: "Sistem Klastering PTSL",
    role: "Data Analyst & Developer",
    desc: "Sistem klastering wilayah PTSL berdasarkan variabel ekonomi dan sosial.",
    tech: ["Laravel", "Python", "K-Means", "MySQL"],
    image: "/images/PTSL.png",
    details:
      "Aplikasi untuk mengelompokkan desa/kelurahan berdasarkan karakteristik PTSL menggunakan metode K-Means.",
    links: "https://github.com/taugk/klastering-ptsl",
  },
];
