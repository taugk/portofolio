import Wave from "./Wave";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaChartLine,
  FaNetworkWired,
  FaCogs,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Fullstack Development",
      icon: <FaLaptopCode />,
      description:
        "Membangun aplikasi web & mobile dari depan hingga belakang.",
      skills: [
        "Next.js & React (TypeScript)",
        "Laravel (PHP Framework)",
        "Flutter (Mobile Apps)",
        "Tailwind CSS & Bootstrap",
        "RESTful API Integration",
      ],
    },
    {
      title: "System Analysis & UI/UX",
      icon: <FaProjectDiagram />,
      description: "Menerjemahkan kebutuhan bisnis menjadi rancangan sistem.",
      skills: [
        "UML (Use Case, Activity, Class)",
        "BPMN (Business Process)",
        "Figma (Wireframe & Prototyping)",
        "ERD (Database Design)",
        "SRS Documentation",
      ],
    },
    {
      title: "Data Analyst & Database",
      icon: <FaChartLine />,
      description: "Mengolah data mentah menjadi wawasan bisnis.",
      skills: [
        "MySQL / PostgreSQL",
        "Python (Pandas, NumPy)",
        "Power BI / Tableau",
        "Google Data Studio",
        "Excel Advanced (Pivot/Macro)",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FaCogs />,
      description: "Tools untuk mempercepat dan mengamankan deployment.",
      skills: [
        "Git & GitHub (Version Control)",
        "Docker (Basic Containerization)",
        "Postman (API Testing)",
        "Agile & Scrum Methodology",
        "Jira / Trello",
      ],
    },
    {
      title: "Network & Infrastructure",
      icon: <FaNetworkWired />,
      description: "Mengelola jaringan dan server.",
      skills: [
        "Mikrotik Configuration",
        "Cisco Packet Tracer",
        "Linux Server (Ubuntu/CentOS)",
        "Basic Cloud (AWS/VPS)",
        "Web Server (Nginx/Apache)",
      ],
    },
    {
      title: "IT Support & Troubleshooting",
      icon: <FaServer />,
      description: "Pemecahan masalah teknis sehari-hari.",
      skills: [
        "Hardware Assembly & Repair",
        "Windows/Linux Troubleshooting",
        "Printer & Network Maintenance",
        "Software Installation",
        "Remote Desktop Support",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-gray-100">
      {/* WAVE TOP: Putih ke Abu-abu */}
      <div className="absolute top-0 left-0 w-full z-20 -mt-1 leading-0">
        <Wave position="top" color="fill-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Kompetensi & Keahlian
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Portofolio keahlian yang mencakup pengembangan perangkat lunak,
            analisis sistem, pengolahan data, hingga manajemen infrastruktur IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {cat.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm mb-4 italic">
                {cat.description}
              </p>

              <div className="space-y-3">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-gray-700 text-sm"
                  >
                    {/* Bullet point custom */}
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 shrink-0"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WAVE BOTTOM: Abu-abu ke Putih */}
      <div className="absolute bottom-0 left-0 w-full z-0 leading-[0]">
        <Wave position="bottom" color="fill-white" />
      </div>
    </section>
  );
}
