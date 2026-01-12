import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { ExternalLink } from 'lucide-react';

const projects = [
  /*{
    title: 'Restaurante Digital',
    category: 'Sitio Web',
    description: 'Sitio web con menú digital, reservas online y sistema de pedidos.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-500 to-orange-500',
    url:'https://importlilimlab.com'
  },
  {
    title: 'Restaurante Digital',
    category: 'Sitio Web',
    description: 'Sitio web con menú digital, reservas online y sistema de pedidos.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-blue-500',
    url:'https://importlilimlab.com'
  },
  {
    title: 'Restaurante Digital',
    category: 'Sitio Web',
    description: 'Sitio web con menú digital, reservas online y sistema de pedidos.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-violet-500 to-pink-500',
    url:'https://importlilimlab.com'
  },
  {
    title: 'Restaurante Digital',
    category: 'Sitio Web',
    description: 'Sitio web con menú digital, reservas online y sistema de pedidos.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-orange-500',
    url:'https://importlilimlab.com'
  }*/
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate('.portfolio-card', {
              scale: [0.8, 1],
              opacity: [0, 1],
              delay: (_, index) => index * 100,
              duration: 600,
              easing: 'easeOutExpo'
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
    const overlay = e.currentTarget.querySelector('.overlay') as Element | null;

    if (img) {
      animate(img as HTMLImageElement, {
        scale: 1.1,
        duration: 400,
        easing: 'easeOutQuad'
      });
    }

    if (overlay) {
      animate(overlay as Element, {
        opacity: [0.5, 0.8],
        duration: 400,
        easing: 'easeOutQuad'
      });
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
    const overlay = e.currentTarget.querySelector('.overlay') as Element | null;

    if (img) {
      animate(img as HTMLImageElement, {
        scale: 1,
        duration: 400,
        easing: 'easeOutQuad'
      });
    }

    if (overlay) {
      animate(overlay as Element, {
        opacity: 0.5,
        duration: 400,
        easing: 'easeOutQuad'
      });
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href='#'
              target="_blank"
              key={index}
              className="portfolio-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer opacity-0"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`overlay absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`}></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-4">
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
