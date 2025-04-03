"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skills } from "@/lib/Constants";
import Image from "next/image";

export default function SkillsSection() {

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis habilidades</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Las tecnologías y herramientas con las que trabajo.
          </p>
        </motion.div>

        <Marquee className="w-full md:max-w-[70%] mx-auto" gradient={true} gradientColor="black" speed={60}>
          {
            Object.entries(skills).map(([key, value]) => (
              <div key={key} className="flex items-center justify-center px-4 py-2 mx-2 bg-gray-800 rounded-full">
                <Image width={48} height={48} src={value} alt={key} />
              </div>
            ))
          }
        </Marquee>
      </div>
    </section>
  );
}