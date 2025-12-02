import type { NextPage, GetStaticProps } from "next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Kontak from "../components/Kontak";
import FadeIn from "../components/FadeIn";
import { projects } from "../data/projects";
import { Project } from "../types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface HomeProps {
  projectsData: Project[];
}

const ITEMS_PER_PAGE = 6;

const Home: NextPage<HomeProps> = ({ projectsData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />

      <section id="projects" className="py-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">Proyek</h2>
            <p className="text-gray-500 text-center mb-12">
              Menampilkan halaman {currentPage} dari {totalPages}
            </p>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={project.id}
                  className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition bg-white flex flex-col h-full"
                >
                  {/* --- PERBAIKAN GAMBAR --- */}
                  {/* h-48 menetapkan tinggi tetap agar rapi. relative untuk posisi badge. */}
                  <div className="h-48 bg-gray-200 overflow-hidden relative">
                    {/* Link membungkus gambar. block h-full w-full agar area klik memenuhi kotak */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block h-full w-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        // object-cover memastikan gambar tidak gepeng, tapi mengisi penuh kotak
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                      />
                    </Link>

                    {/* Badge Role - pointer-events-none agar kalau diklik tembus ke gambar */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-blue-600 text-xs font-bold px-2 py-1 rounded shadow-sm pointer-events-none">
                      {project.role}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    {/* --- PERBAIKAN JUDUL --- */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto border-t border-gray-50">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:underline mt-4"
                    >
                      Lihat Detail &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-16 gap-2">
              <button
                aria-label="Halaman Sebelumnya"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-full border ${
                  currentPage === 1
                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                    : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                } transition`}
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`w-10 h-10 rounded-full font-bold transition ${
                      currentPage === number
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                aria-label="Halaman Selanjutnya"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full border ${
                  currentPage === totalPages
                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                    : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                } transition`}
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>

      <Kontak />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectsData: projects,
    },
  };
};

export default Home;
