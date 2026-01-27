import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-center text-gray-300" id="contact">
      <motion.h2
        className="text-3xl font-bold mb-6 text-violet-400"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Feel free to reach out for collaboration or opportunities.
      </motion.p>

      <motion.p
        className="text-violet-400 font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        nanthininandy2002@gmail.com
      </motion.p>
    </section>
  );
};

export default Contact;
