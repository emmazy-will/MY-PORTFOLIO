import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "emmanuelazubuogu24@gmail.com",
      link: "mailto:emmanuelazubuogu24@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location", 
      details: "Nigeria - Abia",
      link: "#"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+2349134857341",
      link: "tel:+2349134857341" // Updated with your actual number
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/azubuogu-emmanuel-639491357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      bgColor: "bg-blue-600 hover:bg-blue-700" 
    },
    { 
      icon: Github, 
      name: "GitHub", 
      url: "https://github.com/yourusername", 
      bgColor: "bg-gray-800 hover:bg-gray-900" 
    },
    { 
      icon: Twitter, 
      name: "Twitter", 
      url: "https://x.com/Emmanuelwizspa?t=EV7-7mtxg9-oKI6QlYNFyg&s=09", 
      bgColor: "bg-blue-400 hover:bg-blue-500" 
    },
    { 
      icon: Facebook, 
      name: "Facebook", 
      url: "https://www.facebook.com/profile.php?id=61574836145600", // Add your Facebook URL
      bgColor: "bg-blue-700 hover:bg-blue-800" 
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-purple-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            Contact <span className="text-yellow-400">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-purple-700/30 border-purple-600 hover:bg-purple-600/30 transition-all duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col items-center">
                  <div className="mb-4 p-3 bg-yellow-400 rounded-full w-fit">
                    <info.icon className="h-6 w-6 text-purple-900" />
                  </div>
                  <h3 className="text-white font-medium mb-2">{info.title}</h3>
                  <a 
                    href={info.link}
                    className="text-white hover:text-yellow-400 transition-colors text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.details}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-white text-xl mb-6">Connect with me</h3>
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} p-4 rounded-full text-white hover:scale-110 transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            <div className="text-white/80 text-sm">
              <p className="mb-2">
                Feel free to reach out for collaborations or just say hi!
              </p>
              <p>
                © {new Date().getFullYear()} Azubuogu Emmanuel. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;