import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import meal from "/src/images/foodie.png";
import company from "/src/images/qnb.png";
import wiz from "/src/images/wizzy.png";
import chat from "/src/images/wether app.png";
import chatt from "/src/images/chat-bot.png";
import Schoolweb from "/src/images/school.png";
import view from "/src/images/music wave.png";
import manage from "/src/images/task.png";
import book from "/src/images/books.png";

const Projects = () => {
  const projects = [
    {
      title: "Music Wave",
      description: "A modern music streaming platform with personalized playlists and high-quality audio streaming.",
      image: view,
      url: "https://music-wave.onrender.com",
      github: "#",
      tech: ["React", "TypeScript", "Audio API", "Tailwind CSS", "Redux"]
    },
    {
      title: "Task Manager",
      description: "A productivity app to organize, track, and prioritize tasks with search and categorization.",
      image: manage,
      url: "https://task-app-oinc.onrender.com",
      github: "#",
      tech: ["React", "Firebase", "Tailwind", "Bootstrap"]
    },
    {
      title: "Book Store",
      description: "Online bookstore with curated collections and intuitive browsing experience.",
      image: book,
      url: "https://books-store-lemon.vercel.app",
      github: "#",
      tech: ["React", "Vite", "CSS", "Bootstrap"]
    },
    {
      title: "Big Foodie",
      description: "Restaurant website showcasing bold flavors and comfort food offerings.",
      image: meal,
      url: "https://bigfoodie.onrender.com",
      github: "#",
      tech: ["React", "Vite", "CSS", "Bootstrap"]
    },
    {
      title: "Q.N.B Shipping",
      description: "Shipping company website with logistics information and services.",
      image: company,
      url: "https://qnb-6udy.onrender.com",
      github: "#",
      tech: ["React", "Vite", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Wiz Explorer",
      description: "Movie discovery app with trailers, ratings, and detailed information.",
      image: wiz,
      url: "https://wiz-explore.onrender.com",
      github: "#",
      tech: ["React", "Vite", "JavaScript", "Tailwind", "Firebase", "TMDB API"]
    },
    {
      title: "WeatherPro",
      description: "Real-time weather application with accurate forecasts and alerts.",
      image: chat,
      url: "https://my-wether-app-qvjd.onrender.com",
      github: "#",
      tech: ["React", "CSS", "OpenWeather API", "JavaScript"]
    },
    {
      title: "LexiAI",
      description: "Intelligent chatbot with human-like responses and voice control.",
      image: chatt,
      url: "https://lexiai-voice-controlled-app.onrender.com",
      github: "#",
      tech: ["React", "Vite", "CSS", "JavaScript", "TypeScript", "Bootstrap"]
    },
    {
      title: "Dehills Academy",
      description: "School website featuring academic programs and campus information.",
      image: Schoolweb,
      url: "https://school-3ki2.onrender.com",
      github: "#",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-gradient-to-br from-purple-900 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            My <span className="text-yellow-400">Portfolio</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-800/100 to-purple-900/50 border border-purple-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm mb-3">{project.description}</p>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-purple-700 hover:bg-purple-600 text-white p-2 rounded-full transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1  bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-3 py-2 rounded-full transition-colors text-xs font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>View Project</span>
                        </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-bold bg-purple-900/60 text-purple-100 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;