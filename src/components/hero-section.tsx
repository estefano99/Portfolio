"use client"
import { motion } from "framer-motion"
import { TypewriterEffect } from "./ui/typewriter-effect"
import { BackgroundBeams } from "./ui/background-beams"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const words = [
    {
      text: "Creo.",
      className: "text-white",
    },
    {
      text: "Diseño.",
      className: "text-white",
    },
    {
      text: "Constr.",
      className: "text-white",
    },
    {
      text: "Desarr.",
      className: "text-primary",
    },
  ]

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" id="hero">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-8 max-w-8xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col gap-4 "
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hola, Soy <span className="text-primary">Estéfano Bugari</span>
          </h1>
          <div className="h-auto">
            <TypewriterEffect words={words} />
          </div>
          <p className="text-lg text-gray-400 mt-4">
            Full Stack Developer y Analista en Sistemas, creo soluciones eficientes y escalables para aplicaciones web modernas.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-all cursor-pointer">
              Descargar CV
            </button>
            <div className="flex gap-4">
              <Link href="https://github.com/estefano99" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                <Github className="w-8 h-8" />
              </Link>
              <Link href="https://www.linkedin.com/in/estefano-bugari-a03868237" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                <Linkedin className="w-8 h-8" />
              </Link>
              <Link
                href="mailto:estefanobugari@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all"
              >
                <Mail className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50">
            <div className="w-full h-full">
              <Image
                src="/fotoPerfil2.jpg"
                alt="Foto de perfil Estefano Bugari"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

