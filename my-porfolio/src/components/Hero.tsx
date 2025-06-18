import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import img from "../images/me.jpg";

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load saved image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setProfileImage(imageData);
        localStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-purple-900/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 text-white font-bold text-xl md:text-2xl pr-5">
               <span className="text-yellow-400">EMMANUEL</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-900/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:bg-purple-800 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[70vh] md:min-h-[80vh] max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-white text-xl md:text-2xl mb-4">
            Hello, My name is
          </h1>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Azubuogu <span className="text-yellow-400">EMMANUEL</span>,
          </h2>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            I'm a Frontend developer with a passionate skill.
          </h3>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8 justify-center lg:justify-start">
            <a href="/My CV.pdf" download>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>

            <a 
              href="https://wa.me/2349134857341" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-white hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Let's talk on WhatsApp
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-1 flex justify-center">
          {img ? (
            <div className="relative">
              <img 
                src={img} 
                alt="Azubuogu Emmanuel" 
                className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
              />
            </div>
          ) : (
            <div className="w-60 h-60 md:w-80 md:h-80 bg-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-yellow-400/50 shadow-lg">
              <label 
                htmlFor="profile-upload" 
                className="cursor-pointer text-white/70 hover:text-white transition-colors text-center"
              >
                <div className="text-4xl md:text-6xl mb-2 md:mb-4">👨‍💻</div>
                <div className="text-sm md:text-lg">Add Your Photo</div>
              </label>
            </div>
          )}
          <input 
            id="profile-upload"
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors duration-300 z-10"
      >
        <ArrowDown size={24} className="md:w-8 md:h-8" />
      </button>
    </section>
  );
};

export default Hero;