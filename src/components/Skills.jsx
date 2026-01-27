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
    <section className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-black border border-zinc-700 rounded-xl p-4 text-center hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
