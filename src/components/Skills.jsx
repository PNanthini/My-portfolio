import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-violet-400"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map(skill => (
            <motion.div
              key={skill}
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:border-violet-400 hover:shadow-[0_0_20px_rgba(148,0,211,0.6)] backdrop-blur-md transition"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
