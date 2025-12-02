import React from "react";

interface WaveProps {
  color?: string; // Warna fill (contoh: fill-white)
  position: "top" | "bottom";
}

export default function Wave({ color = "fill-white", position }: WaveProps) {
  // Jika posisi top, kita putar 180 derajat
  const transformClass = position === "top" ? "rotate-180" : "";

  return (
    <div className={`w-full overflow-hidden leading-0 ${transformClass}`}>
      <svg
        // Ubah viewbox agar proporsi lebih lebar
        viewBox="0 0 1440 320"
        className={`relative block w-full h-[60px] md:h-[100px] ${color}`} // Tinggi dikurangi biar tidak terlalu curam
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
