"use client";

import { motion } from "framer-motion";
import { FaMobileAlt, FaRobot, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Technology() {
  const features = [
    { title: "Multi-dispositivo", description: "Web y App para control total en tiempo real.", icon: <FaMobileAlt /> },
    { title: "Inteligencia Artificial", description: "Rutas optimizadas dinámicamente con ML.", icon: <FaRobot /> },
    { title: "Trazabilidad Total", description: "Tracking GPS de todos nuestros vehículos.", icon: <FaMapMarkerAlt /> },
    { title: "Notificaciones Automáticas", description: "Alertas vía WhatsApp al cliente final.", icon: <FaWhatsapp /> },
  ];

  return (
    <section id="tecnologia" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-bold mb-4 tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              Tecnología
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-slate-900 leading-[1.1]">
              Logística <br/> impulsada por <span className="text-primary">datos</span>.
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Toda nuestra operativa está respaldada por un ecosistema tecnológico diseñado para darte visibilidad y control absoluto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl text-primary border border-slate-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-[600px] w-full bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ambient glows inside the dark box */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10 w-[80%] h-[80%]">
              <img 
                src="/app-screenshot.png" 
                alt="Plataforma Suresol" 
                className="w-full h-full object-cover object-top rounded-2xl opacity-90 border border-slate-700/50"
              />
              
              {/* Glassmorphism overlays */}
              <motion.div 
                className="absolute top-[20%] -left-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-white font-bold text-sm">Ruta Optimizada</span>
                </div>
                <div className="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-primary rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-[20%] -right-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaWhatsapp className="text-[#25D366] text-3xl" />
                <div>
                  <p className="text-white font-bold text-sm">Aviso Automático</p>
                  <p className="text-slate-300 text-xs">Mensaje enviado</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
