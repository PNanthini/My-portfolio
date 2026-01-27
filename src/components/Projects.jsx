const Projects = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-xl border border-zinc-700 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold">Retail Management System</h3>
            <p className="mt-3 text-gray-400">
              Product, user, and order management with authentication.
            </p>
            <p className="mt-3 text-cyan-400 text-sm">
              React • Node.js • MongoDB
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-zinc-700 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold">Hotspotting Website</h3>
            <p className="mt-3 text-gray-400">
           completed this real project during my internship at Kubenetikos Infosec LLP.
            </p>
            <p className="mt-3 text-cyan-400 text-sm">
              Nextjs • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
