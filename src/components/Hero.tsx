"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium mb-8 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Logística Premium en Córdoba
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Velocidad y <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                precisión
              </span> en cada entrega.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Suresol es una empresa de logística de última milla especializada en entregas en 48hs para ecommerce y tiendas online en Córdoba Capital. Optimizamos tus envíos con colecta y distribución eficiente.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link 
                href="#contacto" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_-15px_rgba(14,165,233,0.6)] hover:-translate-y-1"
              >
                Cotizar ahora
                <FaArrowRight size={16} />
              </Link>
              
              <a 
                href="https://wa.me/5493515052253" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
              >
                <FaWhatsapp size={20} className="text-primary" />
                Hablar por WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right Floating Composition */}
          <div className="hidden lg:block relative h-[600px] w-full">
            <motion.div 
              className="absolute top-[10%] right-[10%] w-[60%] h-[50%] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 z-20 bg-slate-900"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
              <img src="/app-screenshot-desktop.png" className="w-full h-full object-cover object-left-top opacity-90" alt="Plataforma Escritorio" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[15%] left-[15%] w-[35%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 z-10 bg-slate-900"
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
            >
              <img src="/app-screenshot-mobile.png" className="w-full h-full object-cover object-top opacity-100" alt="Plataforma Móvil" />
            </motion.div>

            {/* Floating UI Element */}
            <motion.div 
              className="absolute top-[40%] -left-[10%] bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-30 flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">Entregado con éxito</p>
                <p className="text-white font-bold text-lg">Hace 2 min</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
