import { motion } from "framer-motion";

const Certifications = () => {
  const certs = [
    "Full Stack Web Development Certification",
    "React & JavaScript Online Courses",
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-violet-400"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>

      <motion.ul
        className="list-disc list-inside text-gray-400 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {certs.map((cert, i) => (
          <li key={i}>{cert}</li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Certifications;
