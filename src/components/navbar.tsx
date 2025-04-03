"use client";
import {
  Home,
  User,
  FolderKanban,
  Brain,
  Mail,
} from "lucide-react";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  {
    name: "Inicio",
    link: "#hero",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Sobre mí",
    link: "#about-me",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Proyectos",
    link: "#projects",
    icon: <FolderKanban className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Habilidades",
    link: "#skills",
    icon: <Brain className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contacto",
    link: "#contact",
    icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const FloatingNavDemo = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  )
}

export default FloatingNavDemo
