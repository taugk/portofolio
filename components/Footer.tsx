import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center md:flex md:justify-between md:items-center">
        {/* Bagian Copyright & Built with Love */}
        <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center justify-center md:justify-start gap-1">
          © {new Date().getFullYear()} Taufik Nurul Hidayat. Built with
          <FaHeart className="text-red-500 animate-pulse" />
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/taugk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/taufik-nurul-hidayat-a6531928a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
