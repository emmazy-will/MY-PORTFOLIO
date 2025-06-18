import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, MonitorSmartphone, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Modern Web Development",
      items: [
        "Building responsive UIs with HTML, CSS & JavaScript",
        "Developing with React, Vite & modern frameworks",
        "Using reusable components and hooks",
        "Optimizing for performance and accessibility"
      ]
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive & Mobile Design",
      items: [
        "Creating layouts that adapt across screen sizes",
        "Mobile-first development strategies",
        "Using Tailwind CSS, Bootstrap, or styled-components",
        "Cross-browser and cross-device compatibility"
      ]
    },
    {
      icon: Zap,
      title: "Interactive UI Features",
      items: [
        "Smooth animations and transitions",
        "Interactive components (modals, sliders, tabs)",
        "Integrating APIs and dynamic content",
        "State management with React or context"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-purple-900 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            What I <span className="text-yellow-400">Do</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-purple-700/50 border-purple-600 hover:bg-purple-600/50 transition-all duration-300">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="mx-auto mb-3 md:mb-4 p-3 md:p-4 bg-yellow-400 rounded-lg w-fit">
                    <service.icon className="h-6 w-6 md:h-8 md:w-8 text-purple-900" />
                  </div>
                  <CardTitle className="text-white text-base md:text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2 text-white/80">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs md:text-sm flex items-start">
                        <span className="text-yellow-400 mr-2 text-xs">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
