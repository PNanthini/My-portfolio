import { motion } from "framer-motion";
import { useMemo } from "react";

// Violet floating glow particle
const GlowParticle = ({ top, left, size, delay }) => (
  <motion.div
    className="absolute rounded-full bg-violet-500/20 blur-xl"
    style={{
      top,
      left,
      width: size,
      height: size,
    }}
    animate={{
      y: [0, -60, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 120 + 80,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gray-900">

      {/* Dark animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, #1e1b4b, #020617)",
        }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Violet glow particles */}
      {particles.map((p) => (
        <GlowParticle key={p.id} {...p} />
      ))}

      {/* Glass Card */}
      <motion.div
        className="relative z-10 max-w-3xl w-full text-center p-10 md:p-14 rounded-2xl
                   bg-white/5 backdrop-blur-xl border border-white/10
                   shadow-[0_0_80px_rgba(139,92,246,0.25)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Violet animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 20px rgba(139,92,246,0.3)",
              "0 0 60px rgba(139,92,246,0.6)",
              "0 0 20px rgba(139,92,246,0.3)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I’m <span className="text-violet-400">NanthiniP</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl mx-auto text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Building scalable and user-friendly web applications using React,
          Node.js, and MongoDB.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-violet-500 text-white font-semibold
                       hover:bg-violet-400 transition-all
                       shadow-[0_0_30px_rgba(139,92,246,0.6)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-violet-400 text-violet-400
                       hover:bg-violet-400 hover:text-white transition-all
                       shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
