const Skills = () => {
  const skills = [
    { name: "HTML5", img: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", img: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
    { name: "React", img: "https://skillicons.dev/icons?i=react" },
    { name: "Vite", img: "https://skillicons.dev/icons?i=vite" },
    { name: "Tailwind CSS", img: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Bootstrap", img: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "Git", img: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", img: "https://skillicons.dev/icons?i=github" },
   { name: "Vercel", img: "https://skillicons.dev/icons?i=vercel" },
    { name: "Photoshop", img: "https://skillicons.dev/icons?i=photoshop" },
    { name: "VS Code", img: "https://skillicons.dev/icons?i=vscode" },
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-purple-800 to-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          My <span className="text-yellow-400">Tools</span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition duration-300"
                title={skill.name}
              />
              <span className="mt-2 text-white text-xs md:text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;