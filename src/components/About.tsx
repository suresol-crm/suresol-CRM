"use client";

import { motion } from "framer-motion";

export default function About() {
  const metrics = [
    { label: "Tiempo de Entrega", value: "48hs" },
    { label: "Entregas Exitosas", value: "+99%" },
    { label: "Paquetes Mensuales", value: "+10k" },
  ];

  return (
    <section id="nosotros" className="py-0 relative z-10 -mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left side text */}
            <div className="p-12 md:p-20 bg-slate-800/50">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-primary font-bold mb-4 tracking-widest uppercase text-sm flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Nosotros
                </h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.2]">
                  No somos solo transporte, somos tu socio logístico.
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  En Suresol optimizamos la última milla. Nos conectamos directamente con la operativa de tu ecommerce para que la experiencia de tu cliente final sea impecable y predecible.
                </p>
              </motion.div>
            </div>

            {/* Right side metrics */}
            <div className="p-12 md:p-20 flex items-center justify-center bg-slate-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px]" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 relative z-10 w-full">
                {metrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className={index === 2 ? "sm:col-span-2" : ""}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-2 font-mono">
                      {metric.value}
                    </div>
                    <div className="text-slate-400 font-medium text-lg">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
