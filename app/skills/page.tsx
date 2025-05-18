"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Layout from "@/components/layout"
import Image from "next/image"
import { Code, Server, Database, GitBranch, Layers, Cpu, Globe, Braces } from "lucide-react"

export default function SkillsPage() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  }

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "HTML & CSS", level: 90 },
      ],
      color: "from-blue-600 to-blue-800",
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6" />,
      items: [
        { name: "React", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Django", level: 80 },
        { name: "Node.js", level: 75 },
      ],
      color: "from-indigo-600 to-indigo-800",
    },
    {
      category: "DevOps & Tools",
      icon: <GitBranch className="w-6 h-6" />,
      items: [
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 80 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
      ],
      color: "from-purple-600 to-purple-800",
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
      ],
      color: "from-green-600 to-green-800",
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">Skills & Expertise</h1>
            <p className="text-blue-200 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies developed over 10+ years in software
              engineering.
            </p>
          </motion.div>

          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Skills Grid */}
            <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-blue-950/40 backdrop-blur-md rounded-xl border border-blue-900/30 p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center shadow-lg`}
                    >
                      {skillGroup.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white font-montserrat">{skillGroup.category}</h2>
                  </div>

                  <div className="space-y-5">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-100 font-medium">{skill.name}</span>
                          <span className="text-blue-300 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-blue-900/30 rounded-full h-2.5">
                          <motion.div
                            className={`h-2.5 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>

            {/* Technical Expertise */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat text-center">Technical Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Code />,
                    title: "Frontend Development",
                    description:
                      "Building responsive and interactive user interfaces with modern JavaScript frameworks.",
                  },
                  {
                    icon: <Server />,
                    title: "Backend Systems",
                    description: "Developing robust server-side applications with Python and Node.js.",
                  },
                  {
                    icon: <Cpu />,
                    title: "Performance Optimization",
                    description: "Improving application speed and efficiency through code and algorithm optimization.",
                  },
                  {
                    icon: <Globe />,
                    title: "API Development",
                    description: "Creating and maintaining RESTful APIs with comprehensive test coverage.",
                  },
                  {
                    icon: <Database />,
                    title: "Database Design",
                    description: "Designing efficient database schemas and optimizing queries for performance.",
                  },
                  {
                    icon: <Layers />,
                    title: "Microservices",
                    description: "Building scalable microservices architectures for complex applications.",
                  },
                  {
                    icon: <GitBranch />,
                    title: "Version Control",
                    description: "Managing code with Git and implementing effective branching strategies.",
                  },
                  {
                    icon: <Braces />,
                    title: "Testing & QA",
                    description: "Writing comprehensive unit and integration tests to ensure code quality.",
                  },
                ].map((expertise, index) => (
                  <motion.div
                    key={index}
                    className="bg-blue-950/30 border border-blue-900/20 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center mb-4">
                        <div className="text-blue-400">{expertise.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {expertise.title}
                      </h3>
                      <p className="text-blue-200/70 text-sm mt-2">{expertise.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
              variants={itemVariants}
              className="bg-blue-950/40 backdrop-blur-md rounded-xl border border-blue-900/30 p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat text-center">Key Achievements</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "$12M Project Success",
                    description:
                      "Spearheaded a $12M software project to successful completion, delivering on time and within budget.",
                  },
                  {
                    title: "20% Server Efficiency",
                    description:
                      "Increased server efficiency by 20% through strategic algorithm optimization and code refactoring.",
                  },
                  {
                    title: "Faster Page Loads",
                    description:
                      "Reduced page load times by implementing advanced image compression and caching strategies.",
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-blue-900/20 rounded-lg border border-blue-800/30 p-5"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">{achievement.title}</h3>
                    <p className="text-blue-100/80">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Isometric Design Showcase */}
            <motion.section variants={itemVariants} className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat text-center">
                Modular Development Approach
              </h2>

              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/isometric-design.png"
                    alt="Modular Development Approach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-white text-lg font-medium">Building scalable systems with modular architecture</p>
                  <p className="text-blue-200/80 mt-2">
                    Creating independent, reusable components that work together seamlessly
                  </p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}