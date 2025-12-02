"use client";

import FadeIn from "./FadeIn";
import Wave from "./Wave";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Kontak() {
  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="absolute top-0 left-0 w-full z-0 -mt-1 leading-0">
        <Wave position="top" color="fill-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 pt-8">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hubungi Saya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tertarik untuk berkolaborasi atau memiliki tawaran proyek? Jangan
              ragu untuk menghubungi saya melalui formulir di bawah ini.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* KOLOM KIRI: Info Kontak */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              {/* Card Email */}
              <div className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-xl mr-5">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <a
                    href="mailto:taufiknurulhidayat68@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    taufiknurulhidayat68@gmail.com
                  </a>
                </div>
              </div>

              {/* Card WhatsApp */}
              <div className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-4 rounded-full text-green-600 text-xl mr-5">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">WhatsApp</h4>
                  <a
                    href="https://wa.me/6289525308596"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-600 hover:text-green-600 transition"
                  >
                    +6289525308596
                  </a>
                </div>
              </div>

              {/* Card Lokasi */}
              <div className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="bg-red-100 p-4 rounded-full text-red-600 text-xl mr-5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Lokasi</h4>
                  <p className="text-gray-600">Ciamis, Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* KOLOM KANAN: Form */}
          <FadeIn direction="left" delay={0.4}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h3>

              <form
                action="https://formspree.io/f/mdkqzzep"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    // TAMBAHAN PENTING: name="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 focus:bg-white"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    // TAMBAHAN PENTING: name="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 focus:bg-white"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    // TAMBAHAN PENTING: name="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tulis pesan Anda..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-blue-500/30"
                >
                  <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />{" "}
                  Kirim Pesan
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0 leading-0">
        <Wave position="bottom" color="fill-gray-900" />
      </div>
    </section>
  );
}
