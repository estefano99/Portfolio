"use client"
import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import { ExternalLink, Github } from "lucide-react"
import { projects, IProject } from "@/lib/Constants"

export default function ProjectsSection() {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "E-commerce Platform",
  //     description: "A full-featured online store with payment integration and admin dashboard.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     tags: ["React", "Node.js", "MongoDB"],
  //   },
  //   {
  //     id: 2,
  //     title: "Portfolio Website",
  //     description: "A modern portfolio website with animations and responsive design.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  //   },
  //   {
  //     id: 3,
  //     title: "Task Management App",
  //     description: "A collaborative task management application with real-time updates.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     tags: ["React", "Firebase", "Material UI"],
  //   },
  // ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Here are some of my recent projects. Each one was built with care and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6">
                  <CardItem translateZ="50" className="w-full h-60 rounded-lg overflow-hidden">
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      height={400}
                      width={600}
                      className="w-full h-full object-cover"
                      alt={project.title}
                    />
                  </CardItem>
                  <CardItem translateZ="60" className="mt-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </CardItem>
                  <CardItem translateZ="40" className="text-gray-400 text-sm mt-2">
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="40" className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </CardItem>
                  <div className="flex justify-between items-center mt-4 gap-2">
                    <CardItem translateZ="40" className="mt-6 w-full">
                      <button className="flex items-center justify-evenly px-4 py-2 rounded-md bg-indigo-500 text-white text-sm font-medium w-full hover:bg-indigo-600 transition-all">
                      <Github className=" h-4 w-4 text-white" /> Front-end
                      </button>
                    </CardItem>
                    <CardItem translateZ="40" className="mt-6 w-full">
                      <button className="flex items-center justify-evenly px-4 py-2 rounded-md bg-indigo-400 text-white text-sm font-medium w-full hover:bg-indigo-500 transition-all">
                      <Github className=" h-4 w-4 text-white" /> Back-end
                      </button>
                    </CardItem>
                    <CardItem translateZ="40" className="mt-6 w-full">
                      <button className="flex items-center justify-evenly px-4 py-2 rounded-md bg-indigo-300 text-white text-sm font-medium w-full hover:bg-indigo-400 transition-all">
                      <ExternalLink className="h-4 w-4 text-white" /> Visitar
                      </button>
                    </CardItem>
                  </div>

                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

