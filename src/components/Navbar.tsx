import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { animate } from 'animejs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    animate('.nav-item', {
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: (_, index) => index * 100,
      duration: 800,
      easing: 'easeOutExpo'
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="nav-item flex items-center">
            <span className={`text-2xl font-bold ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>
              Stratify
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Nosotros', 'Portfolio', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-item font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {['Inicio', 'Servicios', 'Nosotros', 'Portfolio', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
