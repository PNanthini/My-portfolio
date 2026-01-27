import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-violet-400"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="border-l-4 border-violet-400 pl-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-semibold text-white">
          Full Stack Developer – Intern 6 months
        </h3>
        <p className="mt-2 text-gray-400">
          Completed my internship at Kubenetikos Infosec LLP
        </p>
      </motion.div>
    </section>
  );
};

export default Experience;
