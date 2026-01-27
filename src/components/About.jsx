import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-300">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-violet-400"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        I am a passionate Full Stack Developer with an MCA degree and hands-on experience building real-time applications. I enjoy creating clean UI and efficient backend logic.
      </motion.p>

      <motion.p
        className="mt-4 text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I primarily work with the MERN stack and continuously improve my skills by building real-world projects.
      </motion.p>
    </section>
  );
};

export default About;
