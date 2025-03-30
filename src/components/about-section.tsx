"use client"
import { motion } from "framer-motion"
import { SparklesCore } from "./ui/sparkles"

export default function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              👨‍💻 Soy un <span className="font-semibold text-white">desarrollador web Full Stack junior</span> con una base técnica sólida, enfocado en la experiencia de usuario y el desarrollo de sistemas escalables.
              Desarrollo como <span className="font-semibold text-white">freelancer</span> y actualmente curso el 5º año de <span className="font-semibold text-white">Ingeniería en Sistemas</span>.
              Obtuve el título de <span className="font-semibold text-white">Técnico en Desarrollo de Software</span>, lo que me permitió <span className="font-semibold text-white">homologar materias</span> y avanzar en mi formación académica.
              Además, cuento con el título de <span className="font-semibold text-white">Analista en Sistemas</span>.
            </p>
            <p className="text-lg text-gray-300">
              En mis <span className="font-semibold text-white">proyectos freelance</span>, suelo encargarme de <span className="font-semibold text-white">todo el proceso:</span> desde las <span className="font-semibold text-white">entrevistas iniciales </span>
              con el cliente, el <span className="font-semibold text-white">análisis funcional</span> hasta el <span className="font-semibold text-white">desarrollo e implementación</span> de la solución.
              Esta experiencia me ha permitido desarrollar una <span className="font-semibold text-white">visión integral</span> de los proyectos y una sólida capacidad de autogestión.
            </p>
            <p className="text-lg text-gray-300">
              Mi enfoque se centra en <span className="font-semibold text-white">ofrecer soluciones completas,</span> garantizando que cada etapa del desarrollo esté alineada con los objetivos del cliente.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-2">Ingeniería en Sistemas (Actualmente)</h3>
              <p className="text-gray-400">Universidad UAI • 2022 - Presente</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-2">Analista en Sistemas</h3>
              <p className="text-gray-400">Universidad UAI • Título intermedio de Ingeniería</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-2">Técnico Superior en Desarrollo de Software</h3>
              <p className="text-gray-400">Instituto Belgrano • 2019 - 2021</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-2">Cursos y Certificaciones</h3>
              <p className="text-gray-400">
                - React y TypeScript - La Guía Completa Creando +10 Proyectos - Udemy (2024) <br />
                - JavaScript Moderno Guía Definitiva Construye +20 Proyectos - Udemy (2022) <br />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

