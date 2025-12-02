"use client"; // Wajib karena menggunakan hook animasi

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Penundaan animasi (detik)
  direction?: "up" | "down" | "left" | "right"; // Arah datangnya
  fullWidth?: boolean;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
}: FadeInProps) {
  // Konfigurasi arah gerak
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }} // Animasi hanya terjadi sekali saat discroll
      transition={{
        duration: 0.7,
        delay: delay,
        ease: "easeOut",
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
