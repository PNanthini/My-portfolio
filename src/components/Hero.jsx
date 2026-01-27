const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, I’m <span className="text-cyan-400">NanthiniP</span>
      </h1>

      <p className="mt-4 text-xl text-gray-300">
        Full Stack Developer
      </p>

      <p className="mt-6 max-w-xl text-gray-400">
        Building scalable and user-friendly web applications using
        React, Node.js, and MongoDB.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-cyan-400 rounded-lg">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
