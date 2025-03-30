"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  particleOpacity,
}: {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  particleOpacity?: number
}) => {
  const [particles, setParticles] = useState<Array<any>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const particlesCount = particleDensity || 50
    const minParticleSize = minSize || 1
    const maxParticleSize = maxSize || 3

    const createParticles = () => {
      const particles = []
      for (let i = 0; i < particlesCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxParticleSize - minParticleSize) + minParticleSize,
          duration: Math.random() * 2 + 1,
        })
      }
      return particles
    }

    setParticles(createParticles())
    const interval = setInterval(() => {
      setParticles(createParticles())
    }, 3000)

    return () => clearInterval(interval)
  }, [mounted, particleDensity, minSize, maxSize])

  if (!mounted) return null

  return (
    <div
      id={id}
      className={cn("w-full h-full", className)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: background || "transparent",
        pointerEvents: "none",
      }}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: particleOpacity || 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: particle.duration }}
            style={{
              position: "absolute",
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: "50%",
              backgroundColor: particleColor || "#FFFFFF",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

