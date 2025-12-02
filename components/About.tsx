export default function About() {
  return (
    // 2. Tambahkan class 'relative' agar Wave bisa diposisikan absolute
    <section id="about" className="relative py-20 bg-white">
      {/* Container konten diberi z-10 agar tetap di atas wave */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Tentang Saya
          </h2>
          <p className="text-gray-600 leading-loose mb-6 text-lg">
            Saya adalah lulusan program studi Sistem Informasi yang memiliki
            ketertarikan mendalam pada bagaimana teknologi dapat memecahkan
            masalah nyata. Saya tidak hanya menulis kode, tetapi juga
            menganalisis kebutuhan pengguna, merancang alur database (ERD), dan
            memastikan sistem yang dibangun sesuai dengan tujuan bisnis.
          </p>
        </div>
      </div>
    </section>
  );
}
