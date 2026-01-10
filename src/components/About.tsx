import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description: 'Cada proyecto está diseñado para alcanzar tus objetivos de negocio y maximizar tu ROI.'
  },
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Desarrolladores, diseñadores y consultores con años de experiencia en tecnología.'
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    description: 'Seguimos las mejores prácticas de desarrollo y estándares internacionales.'
  },
  {
    icon: TrendingUp,
    title: 'Soporte Continuo',
    description: 'Acompañamiento post-lanzamiento y actualizaciones para mantener tu proyecto creciendo.'
  }
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate('.about-content', {
              translateX: [-50, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            animate('.about-feature', {
              translateX: [50, 0],
              opacity: [0, 1],
              delay: (_, index) => index * 150,
              duration: 800,
              easing: 'easeOutExpo'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-content opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir Stratify?
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos una empresa especializada en desarrollo web y sistemas empresariales con presencia nacional e internacional. Trabajamos con pequeñas, medianas empresas y emprendimientos que buscan llevar su negocio al mundo digital.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestra misión es democratizar la tecnología, ofreciendo soluciones de calidad mundial a precios accesibles. No importa el tamaño de tu empresa, mereces las mejores herramientas digitales.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-6 py-3 rounded-full">
                <span className="text-blue-700 font-semibold">Desarrollo Ágil</span>
              </div>
              <div className="bg-cyan-50 px-6 py-3 rounded-full">
                <span className="text-cyan-700 font-semibold">Soporte 24/7</span>
              </div>
              <div className="bg-blue-50 px-6 py-3 rounded-full">
                <span className="text-blue-700 font-semibold">Precios Competitivos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="about-feature bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl opacity-0"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
