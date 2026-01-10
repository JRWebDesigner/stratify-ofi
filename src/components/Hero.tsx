import { useEffect } from 'react';
import { animate } from 'animejs';
import { ArrowRight, Globe, Code, Server } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    animate('.hero-title', {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });

    animate('.hero-subtitle', {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 200,
      easing: 'easeOutExpo'
    });

    animate('.hero-button', {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: 'easeOutElastic(1, .8)'
    });

    animate('.floating-icon', {
      translateY: [-10, 10],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: (_, index) => index * 200
    });
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="absolute top-20 left-10 floating-icon">
        <Globe className="w-16 h-16 text-white opacity-20" />
      </div>
      <div className="absolute top-40 right-20 floating-icon">
        <Code className="w-20 h-20 text-white opacity-20" />
      </div>
      <div className="absolute bottom-32 left-32 floating-icon">
        <Server className="w-14 h-14 text-white opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
          Transformamos Ideas en
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Soluciones Digitales
          </span>
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Desarrollo web y sistemas a medida para empresas que buscan crecer en el mundo digital. Hosting, dominio y soporte completo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="hero-button group bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            Iniciar Proyecto
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all"
          >
            Ver Servicios
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="hero-stat">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-blue-200">Años de Experiencia</div>
          </div>
          <div className="hero-stat">
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-blue-200">Proyectos Completados</div>
          </div>
          <div className="hero-stat">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-200">Países Atendidos</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
