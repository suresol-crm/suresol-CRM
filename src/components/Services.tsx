"use client";

import { motion } from "framer-motion";
import { FaClock, FaCalendarCheck, FaTruckLoading, FaMapMarkedAlt, FaSearchLocation, FaStore } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Entregas en 48hs",
      description: "Servicio ágil garantizando la llegada rápida a tus clientes.",
      icon: <FaClock />,
      className: "lg:col-span-2 lg:row-span-2 bg-slate-900 text-white",
      iconClass: "bg-slate-800 text-primary",
      titleClass: "text-white text-3xl",
      descClass: "text-slate-400 text-lg",
    },
    {
      title: "Colecta Programada",
      description: "Retiramos tus productos desde tu depósito.",
      icon: <FaCalendarCheck />,
      className: "bg-primary text-slate-900",
      iconClass: "bg-slate-900/10 text-slate-900",
      titleClass: "text-slate-900 text-xl",
      descClass: "text-slate-800",
    },
    {
      title: "Logística Ecommerce",
      description: "Gestión completa de distribución.",
      icon: <FaTruckLoading />,
      className: "bg-white border border-slate-200",
      iconClass: "bg-slate-100 text-primary",
      titleClass: "text-slate-900 text-xl",
      descClass: "text-slate-600",
    },
    {
      title: "Última Milla en Córdoba",
      description: "Especialistas en el radio de la capital.",
      icon: <FaMapMarkedAlt />,
      className: "bg-white border border-slate-200",
      iconClass: "bg-slate-100 text-primary",
      titleClass: "text-slate-900 text-xl",
      descClass: "text-slate-600",
    },
    {
      title: "Seguimiento",
      description: "Tracking en tiempo real del paquete.",
      icon: <FaSearchLocation />,
      className: "bg-white border border-slate-200",
      iconClass: "bg-slate-100 text-primary",
      titleClass: "text-slate-900 text-xl",
      descClass: "text-slate-600",
    },
    {
      title: "Integración",
      description: "Nos integramos a tu operativa fácilmente.",
      icon: <FaStore />,
      className: "bg-slate-100 border border-slate-200",
      iconClass: "bg-white text-primary",
      titleClass: "text-slate-900 text-2xl",
      descClass: "text-slate-600",
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <motion.h4 
            className="text-primary font-bold mb-4 tracking-widest uppercase text-sm flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <span className="w-8 h-[2px] bg-primary"></span>
            Soluciones
          </motion.h4>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Todo lo que tu <br className="hidden md:block"/> ecommerce necesita.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${service.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 ${service.iconClass}`}>
                {service.icon}
              </div>
              <div>
                <h3 className={`font-bold mb-3 tracking-tight ${service.titleClass}`}>{service.title}</h3>
                <p className={`font-medium leading-relaxed ${service.descClass}`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
