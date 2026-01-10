import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Code, Smartphone, Server, Globe, Database, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas.'
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas y multiplataforma que conectan tu negocio con tus clientes en cualquier dispositivo.'
  },
  {
    icon: Database,
    title: 'Sistemas Empresariales',
    description: 'Soluciones ERP, CRM y sistemas a medida que automatizan y optimizan tus procesos de negocio.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online completas con pasarelas de pago, gestión de inventario y análisis de ventas.'
  },
  {
    icon: Server,
    title: 'Hosting & Servidores',
    description: 'Hosting confiable, rápido y seguro. Gestión completa de servidores y mantenimiento 24/7.'
  },
  {
    icon: Globe,
    title: 'Dominios',
    description: 'Registro y gestión de dominios. Te ayudamos a encontrar el nombre perfecto para tu marca.'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate('.service-card', {
              translateY: [50, 0],
              opacity: [0, 1],
              delay: (_, index) => index * 150,
              duration: 800,
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
    animate(e.currentTarget, {
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1,
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer opacity-0"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
