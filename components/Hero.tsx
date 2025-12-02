import Link from "next/link";
import Wave from "./Wave";
import FadeIn from "./FadeIn";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white pt-24 pb-0">
      <section
        id="home"
        className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center min-h-[80vh] pb-32"
      >
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 z-10">
          {/* ... (Bagian Teks & Tombol tetap sama) ... */}
          <FadeIn direction="up" delay={0.2}>
            <p className="text-blue-100 font-semibold mb-2 tracking-widest uppercase">
              Hi, Saya Taufik Nurul Hidayat
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              System Analyst & <br />
              <span className="text-blue-200">Web Developer</span>
            </h1>
            <p className="text-blue-50 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Membangun sistem informasi yang efisien, aman, dan mudah digunakan
              untuk kebutuhan bisnis Anda.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Lihat Proyek
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                className="border border-blue-300 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600/50 transition flex items-center gap-2"
              >
                <FaFileDownload /> Unduh CV
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="flex gap-6 mt-8 justify-center md:justify-start text-white">
              <a
                href="https://github.com/taugk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-200 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/taufik-nurul-hidayat-a6531928a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-200 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* --- PERBAIKAN DI SINI --- */}
        <div className="md:w-1/2 flex justify-center z-10">
          <FadeIn direction="left" delay={0.4}>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 backdrop-blur-sm rounded-full border-4 border-white/20 p-2 shadow-2xl">
              <img
                src="/images/foto.png" // <--- PASTIKAN FOTO ADA DI FOLDER public/images/
                alt="Profile Taufik"
                className="w-full h-full object-cover rounded-full bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/400";
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full z-0 leading-[0]">
        <Wave position="bottom" color="fill-white" />
      </div>
    </div>
  );
}
