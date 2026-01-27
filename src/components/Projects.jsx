import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Retail Management System",
      description: "Product, user, and order management with authentication.",
      tech: "React • Node.js • MongoDB",
    },
    {
      title: "Hotspotting Website",
      description: "Completed this real project during my internship at Kubenetikos Infosec LLP.",
      tech: "Nextjs • Tailwind CSS",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-10 text-violet-400"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(148,0,211,0.6)] backdrop-blur-md transition"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-gray-300">{project.description}</p>
              <p className="mt-3 text-violet-400 text-sm">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
