"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  console.log(formState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();
      console.log(result)

      if (!response.ok) {
        console.error('Error al enviar el correo:', result.error);
        setIsSubmitting(false);
        return alert('Ocurrió un error al enviar el correo.');
      }
      console.log('Correo enviado con éxito');
      alert('Gracias por tu mensaje!');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error inesperado:', error);
      if (error instanceof Error) {
        return alert(error.message);
      }
      setIsSubmitting(false);
      return alert('Ocurrió un error inesperado.');
    }

  };

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctame</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Si creés que puedo aportar a tu equipo, ¡Contáctame y hablemos!
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient className="rounded-[22px] p-6 bg-black">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">estefanobugari@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Ubicación</p>
                      <p className="text-white">Rosario, Santa Fe, Argentina.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
                  <div className="flex gap-4">
                    <Link href="https://github.com/estefano99" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/estefano-bugari-a03868237" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient className="rounded-[22px] p-6 bg-black">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Mi nombre"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Tu Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@example.com"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Tu Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Hola, me gustaría ponerme en contacto contigo..."
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/80 transition-all cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  );
}