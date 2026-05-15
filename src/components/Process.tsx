"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { id: "01", title: "Colecta", description: "Retiramos los productos directamente desde tu local o depósito de manera programada." },
    { id: "02", title: "Recepción", description: "Llegan al depósito de distribución, donde se verifica cantidad y calidad." },
    { id: "03", title: "Picking", description: "Se seleccionan y preparan los productos que corresponden a cada pedido." },
    { id: "04", title: "Distribución", description: "Asignados a rutas optimizadas y cargados en los vehículos de nuestra flota." },
    { id: "05", title: "Entrega", description: "El paquete llega a la dirección del cliente, realizando la entrega de manera segura." },
  ];

  return (
    <section id="proceso" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <h4 className="text-primary font-bold mb-4 tracking-widest uppercase text-sm flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            Operativa
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
            Precisión milimétrica <br/> en cada etapa.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[80%] w-full h-[2px] bg-slate-800">
                  <div className="h-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              )}
              
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl font-black text-slate-500 mb-8 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300 transform group-hover:-translate-y-2 shadow-2xl">
                {step.id}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
