
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-purple-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-16 text-center">
            About <span className="text-yellow-400">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-4 md:space-y-6 order-2 lg:order-1">
              <p className="text-base md:text-lg leading-relaxed">
                Hi, I'm <span className="text-yellow-400 font-semibold">Emmanuel Azubuogu</span>, a passionate Frontend Developer and i based in abia, Nigeria. With a strong foundation in modern web technologies, I specialize in creating engaging, user-centered digital experiences that combine beautiful design with seamless functionality.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My journey in web development began with a fascination for how technology can solve real-world problems and enhance user experiences. I have expertise in HTML5, CSS3, JavaScript, React, and various design tools including Adobe Creative Suite and microsoft excel. I'm constantly learning and adapting to new technologies to stay at the forefront of web development trends.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new design patterns, contributing to open-source projects, and sharing my knowledge with the developer community. I believe in clean, maintainable code and the power of collaboration to create exceptional digital products.
              </p>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute top-4 left-4 md:top-8 md:left-8 w-52 h-52 md:w-64 md:h-64 bg-white rounded-full opacity-90"></div>
                <div className="absolute top-8 left-8 md:top-16 md:left-16 w-44 h-44 md:w-48 md:h-48 bg-purple-600 rounded-full"></div>
                <div className="absolute top-12 left-12 md:top-24 md:left-24 w-36 h-36 md:w-32 md:h-32 bg-yellow-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
