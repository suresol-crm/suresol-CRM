"use client";

import { motion } from "framer-motion";

export default function Integrations() {
  const logos = [
    { name: "MercadoLibre", url: "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png" },
    { name: "Shopify", url: "https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg" },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h3 className="text-sm font-bold text-slate-400 tracking-widest mb-12 uppercase">
          Trabajamos con
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={logo.url} alt={`Integración con ${logo.name}`} className="h-10 md:h-14 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
