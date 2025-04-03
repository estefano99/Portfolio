"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (!animate) {
      setOpacity(1);
      setSize(500);
      return;
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setPosition({ x, y });
      setOpacity(1);
      setSize(Math.max(width, height) * 1.5);
    };
    
    const handleMouseLeave = () => {
      setOpacity(0);
      setSize(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div
        className={cn(
          "relative z-10",
          className
        )}
      >
        {children}
      </div>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle ${size}px at ${position.x}px ${position.y}px, rgba(120, 50, 255, ${opacity * 0.15}), transparent)`,
          transition: "all 0.15s ease",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle ${size * 0.7}px at ${position.x}px ${position.y}px, rgba(120, 50, 255, ${opacity * 0.1}), transparent)`,
          transition: "all 0.15s ease",
        }}
      />
    </div>
  );
};