"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function BackgroundBeams({
  className,
}: {
  className?: string
}) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize
    setCanvasDimensions()

    // Handle window resize
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation function
    let animationFrameId: number
    const render = () => {
      if (!context || !canvas) return

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradientOpacity = 0.5

      // Draw beams from corners to mouse position
      const corners = [
        { x: 0, y: 0 }, // Top-left
        { x: canvas.width, y: 0 }, // Top-right
        { x: 0, y: canvas.height }, // Bottom-left
        { x: canvas.width, y: canvas.height }, // Bottom-right
      ]

      corners.forEach((corner) => {
        const gradient = context.createLinearGradient(corner.x, corner.y, mousePosition.x, mousePosition.y)

        gradient.addColorStop(0, `rgba(255, 255, 255, ${gradientOpacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        context.beginPath()
        context.moveTo(corner.x, corner.y)
        context.lineTo(mousePosition.x, mousePosition.y)
        context.strokeStyle = gradient
        context.lineWidth = 2
        context.stroke()
        context.closePath()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0", className)} />
}

