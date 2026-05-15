"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Mensaje enviado con éxito! Nos contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section id="contacto" className="py-32 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Info Visual */}
            <div>
              <h4 className="text-primary font-bold mb-4 tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary"></span>
                Contacto
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
                Empecemos a trabajar juntos.
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Dejanos tus datos y un asesor logístico se comunicará con vos para armar una propuesta a medida para tu negocio.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Email Directo</h3>
                  <p className="text-2xl font-bold text-white">suresolcba@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">WhatsApp</h3>
                  <p className="text-2xl font-bold text-white">+54 9 351 505-2253</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Ubicación</h3>
                  <p className="text-2xl font-bold text-white">Córdoba Capital, Argentina</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-slate-800 p-10 md:p-12 rounded-[2rem] border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600"
                      placeholder="+54 9 351..."
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Empresa / Tienda</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600"
                      placeholder="Mi Tienda Online"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mensaje o Consulta</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Contanos sobre tu volumen de envíos..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-slate-900 font-bold py-5 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(250,204,21,0.4)] mt-4 text-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
