import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({
  children,
  title = "Portofolio Sistem Informasi",
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hapus pt-20 di sini agar Hero section bisa full ke atas */}
      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
