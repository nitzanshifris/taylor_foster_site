"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Layout from "@/components/layout"

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    year: "2023",
    description:
      "Led the development of a comprehensive CRM system for Blackbaud, resulting in improved customer engagement and streamlined sales processes.",
    image: "/modern-crm-dashboard.png",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Microservices Architecture",
    year: "2022",
    description:
      "Designed and implemented a scalable microservices architecture for Hubspot, improving system reliability and enabling faster feature deployment.",
    image: "/microservices-architecture.png",
    tags: ["Python", "Flask", "Docker", "Kubernetes"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Performance Optimization",
    year: "2021",
    description:
      "Optimized application performance by reducing latency from 100ms to 40ms through strategic code improvements and caching mechanisms.",
    image: "/placeholder.svg?key=w89z7",
    tags: ["JavaScript", "React", "Redis", "Monitoring"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Collaborative Platform",
    year: "2020",
    description:
      "Assisted in developing a collaborative platform at Evernote to enhance team productivity and streamline project management workflows.",
    image: "/placeholder.svg?key=82f54",
    tags: ["Python", "Django", "RESTful API", "PostgreSQL"],
    link: "#",
    github: "#",
  },
]

export default function ProjectsPage() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  }

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">My Projects</h1>
            <p className="text-blue-200 max-w-2xl mx-auto">
              A showcase of my professional achievements and key projects in software development.
            </p>
          </motion.div>

          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 bg-blue-950/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-800/50 hover:border-blue-500/30 transition-all duration-500 group`}
              >
                <div className="md:w-1/2 relative overflow-hidden">
                  <div className="aspect-[16/9] relative group">
                    <Image
                      src={
                        project.image ||
                        `/placeholder.svg?height=600&width=800&query=modern+${project.title.toLowerCase().replace(/\s+/g, "+")}+interface+design+high+quality`
                      }
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.9] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-70"></div>
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-blue-900/20">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <ExternalLink
                      size={18}
                      className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </h2>

                  <p className="text-blue-100/80 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue-900/40 text-blue-200 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        <span>View Project</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center gap-1"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}