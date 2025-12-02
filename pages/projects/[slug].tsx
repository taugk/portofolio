import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import Layout from "../../components/Layout";
import { projects } from "../../data/projects";
import { Project } from "../../types";
// 1. IMPORT ICON BARU
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  project: Project;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ProjectDetail: NextPage<Props> = ({ project }) => {
  return (
    <Layout title={`${project.title} - Portofolio`}>
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <Link
          href="/#projects"
          className="text-gray-500 hover:text-blue-600 mb-6 inline-block"
        >
          &larr; Kembali ke Daftar Proyek
        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-2xl shadow-lg mb-8"
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 prose prose-lg text-gray-700">
            <h3 className="text-xl font-bold text-gray-900">Tentang Proyek</h3>
            <p className="whitespace-pre-line">{project.details}</p>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
              <h4 className="font-bold text-gray-900 mb-4">Informasi Proyek</h4>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Peran Saya</p>
                <p className="font-semibold text-gray-800">{project.role}</p>
              </div>

              {/* 2. LOGIKA MENAMPILKAN LINK */}
              {project.links && (
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">Tautan</p>
                  <a
                    href={project.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                  >
                    {/* Cek apakah linknya github atau bukan untuk icon yang sesuai */}
                    {project.links.includes("github.com") ? (
                      <>
                        <FaGithub className="text-xl" /> Lihat Repository
                      </>
                    ) : (
                      <>
                        <FaExternalLinkAlt /> Kunjungi Website
                      </>
                    )}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const slug = params?.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};

export default ProjectDetail;
