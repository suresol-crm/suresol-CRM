import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-black mb-6 tracking-tighter text-white">Suresol</h2>
            <p className="text-slate-500 mb-8 max-w-sm text-lg leading-relaxed">
              Logística B2B especializada en media y última milla. Entregas en 48hs para ecommerce en Córdoba Capital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 hover:border-primary transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 hover:border-primary transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Navegación</h3>
            <ul className="space-y-4">
              <li><Link href="#nosotros" className="text-slate-500 hover:text-primary transition-colors font-medium">Nosotros</Link></li>
              <li><Link href="#servicios" className="text-slate-500 hover:text-primary transition-colors font-medium">Servicios</Link></li>
              <li><Link href="#proceso" className="text-slate-500 hover:text-primary transition-colors font-medium">Operativa</Link></li>
              <li><Link href="#tecnologia" className="text-slate-500 hover:text-primary transition-colors font-medium">Tecnología</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-4">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Legal</h3>
             <ul className="space-y-4">
               <li><a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium">Términos y Condiciones</a></li>
               <li><a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium">Políticas de Privacidad</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 font-medium">
            © {new Date().getFullYear()} Suresol. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-slate-600 font-medium">
              Sistemas operativos en línea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
