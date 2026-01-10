import { Code, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">Stratify</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando ideas en soluciones digitales desde 2018.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Desarrollo Web</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Apps Móviles</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Sistemas Empresariales</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">E-commerce</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Hosting & Dominios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#nosotros" className="hover:text-cyan-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreras</a></li>
              <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} Stratify. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Hecho con <span className="text-red-500">❤</span> para emprendedores y empresas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
