"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Layout from "@/components/layout"
import { Code, Server, Database, GitBranch, Terminal } from "lucide-react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

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
    hidden: { y: 20, opacity: 0 },
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
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">About Me</h1>

              <div className="space-y-4 text-blue-100/90">
                <p className="leading-relaxed">
                  Passionate Software Engineer with 10+ years of experience in developing web applications, creating and
                  scaling software solutions. I strive for proficiency in leading teams to create efficient and
                  maintainable code in office environments.
                </p>

                <p className="leading-relaxed">
                  My expertise spans across full-stack development, with a focus on Python, JavaScript, and modern web
                  frameworks. I've led cross-functional projects from prototype to launch and optimized application
                  performance significantly.
                </p>

                <p className="leading-relaxed">
                  I'm dedicated to mentoring junior developers and collaborating with teams to build scalable
                  microservices architectures. My approach combines technical excellence with practical business
                  solutions.
                </p>
              </div>

              <motion.div variants={itemVariants} className="mt-8 flex gap-4">
                <a
                  href="/projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 inline-block"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-blue-400 text-blue-100 hover:bg-blue-900/30 rounded-md transition-colors duration-300 inline-block"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl shadow-blue-900/50">
                <Image
                  src="/images/about-profile-photo.png"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Technical Expertise Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-24"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8 text-center font-montserrat"
            >
              Technical Expertise
            </motion.h2>

            <div className="relative">
              {/* Tech-themed background with animated elements */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-blue-400/30"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Animated gradient lines */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                    style={{ animation: "pulse-vertical 15s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
                    style={{ animation: "pulse-vertical 12s ease-in-out infinite", animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent"
                    style={{ animation: "pulse-vertical 18s ease-in-out infinite", animationDelay: "1s" }}
                  ></div>

                  <div
                    className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                    style={{ animation: "pulse-horizontal 20s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="absolute bottom-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                    style={{ animation: "pulse-horizontal 15s ease-in-out infinite", animationDelay: "3s" }}
                  ></div>
                </div>

                {/* Digital circuit pattern */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M20 20 H80 V80 H20 Z" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                      <circle cx="20" cy="20" r="2" fill="rgba(59, 130, 246, 0.8)" />
                      <circle cx="80" cy="20" r="2" fill="rgba(59, 130, 246, 0.8)" />
                      <circle cx="20" cy="80" r="2" fill="rgba(59, 130, 246, 0.8)" />
                      <circle cx="80" cy="80" r="2" fill="rgba(59, 130, 246, 0.8)" />
                      <path d="M20 50 H40 V20" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                      <path d="M50 80 V60 H80" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
                  </svg>
                </div>
              </div>

              <div className="relative bg-blue-950/70 backdrop-blur-md rounded-xl border border-blue-800/30 p-8 shadow-xl overflow-hidden group hover:border-blue-500/40 transition-all duration-700 hover:shadow-blue-900/30">
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute -inset-[100px] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                  <motion.div variants={itemVariants} className="flex flex-col space-y-6">
                    <motion.div
                      className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 rounded-xl border border-blue-800/30 p-5 hover:border-blue-500/50 transition-all duration-500 group"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0 w-14 h-14">
                          <div className="absolute inset-0 bg-blue-900/50 rounded-lg rotate-45 animate-pulse"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Code className="text-blue-400 w-8 h-8" />
                          </div>
                        </div>
                        <div>
                          <motion.h3
                            className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300"
                            whileHover={{ scale: 1.01 }}
                          >
                            Frontend Development
                          </motion.h3>
                          <p className="text-blue-100/70 leading-relaxed">
                            Expert in React, JavaScript, HTML/CSS with a focus on creating responsive, performant user
                            interfaces that drive engagement and conversion.
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mt-4 group-hover:w-full transition-all duration-700"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 rounded-xl border border-blue-800/30 p-5 hover:border-blue-500/50 transition-all duration-500 group"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0 w-14 h-14">
                          <div className="absolute inset-0 bg-blue-900/50 rounded-lg rotate-45 animate-pulse"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Server className="text-blue-400 w-8 h-8" />
                          </div>
                        </div>
                        <div>
                          <motion.h3
                            className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300"
                            whileHover={{ scale: 1.01 }}
                          >
                            Backend Development
                          </motion.h3>
                          <p className="text-blue-100/70 leading-relaxed">
                            Proficient in Python, Flask, Django, and Node.js for building robust, scalable backend
                            systems with RESTful APIs and efficient database integration.
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mt-4 group-hover:w-full transition-all duration-700"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col space-y-6">
                    <motion.div
                      className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 rounded-xl border border-blue-800/30 p-5 hover:border-blue-500/50 transition-all duration-500 group"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0 w-14 h-14">
                          <div className="absolute inset-0 bg-blue-900/50 rounded-lg rotate-45 animate-pulse"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Database className="text-blue-400 w-8 h-8" />
                          </div>
                        </div>
                        <div>
                          <motion.h3
                            className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300"
                            whileHover={{ scale: 1.01 }}
                          >
                            Database & Architecture
                          </motion.h3>
                          <p className="text-blue-100/70 leading-relaxed">
                            Experienced in designing and implementing scalable microservices architectures with SQL
                            databases, optimizing for performance and maintainability.
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mt-4 group-hover:w-full transition-all duration-700"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 rounded-xl border border-blue-800/30 p-5 hover:border-blue-500/50 transition-all duration-500 group"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0 w-14 h-14">
                          <div className="absolute inset-0 bg-blue-900/50 rounded-lg rotate-45 animate-pulse"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <GitBranch className="text-blue-400 w-8 h-8" />
                          </div>
                        </div>
                        <div>
                          <motion.h3
                            className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300"
                            whileHover={{ scale: 1.01 }}
                          >
                            DevOps & Testing
                          </motion.h3>
                          <p className="text-blue-100/70 leading-relaxed">
                            Skilled in Git, CI/CD pipelines, and comprehensive testing methodologies including unit and
                            integration tests to ensure robust API coverage and application stability.
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mt-4 group-hover:w-full transition-all duration-700"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-blue-800/30 relative">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent top-0"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.02 }}>
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-blue-900/30 rounded-full"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Terminal className="text-blue-400 w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-300">Performance Optimization</h3>
                        <p className="text-blue-100/70">
                          Reduced application latency from 100ms to 40ms through strategic code improvements
                        </p>
                      </div>
                    </motion.div>

                    <motion.a
                      href="/skills"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-900/30 relative overflow-hidden group"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">View All Skills</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="relative z-10"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Repository Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center font-montserrat">
            Project Repository
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-blue-950/70 backdrop-blur-md rounded-xl border border-blue-800/30 shadow-xl overflow-hidden group hover:border-blue-500/40 transition-all duration-700"
          >
            {/* GitHub-style header */}
            <div className="bg-blue-900/50 p-4 border-b border-blue-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-200"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    taylor-foster / <span className="text-blue-200">portfolio-project</span>
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-blue-300/70">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                      </svg>
                      <span>128 stars</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                      <span>42 forks</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button className="bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  <span>Clone</span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  <span>Star</span>
                </button>
              </div>
            </div>

            {/* Repository content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* File explorer */}
              <div className="md:col-span-1 border-r border-blue-800/30 bg-blue-950/80">
                <div className="p-4 border-b border-blue-800/30 flex items-center justify-between">
                  <div className="text-blue-200 font-medium">Files</div>
                  <div className="text-blue-300/70 text-sm">main</div>
                </div>
                <div className="p-2">
                  <div className="space-y-1">
                    {[
                      { name: "src", type: "folder", isOpen: true },
                      { name: "components", type: "folder", isOpen: true, indent: 1 },
                      { name: "Header.tsx", type: "file", indent: 2, icon: "react" },
                      { name: "Footer.tsx", type: "file", indent: 2, icon: "react" },
                      { name: "ProjectCard.tsx", type: "file", indent: 2, icon: "react", isActive: true },
                      { name: "pages", type: "folder", isOpen: true, indent: 1 },
                      { name: "index.tsx", type: "file", indent: 2, icon: "react" },
                      { name: "about.tsx", type: "file", indent: 2, icon: "react" },
                      { name: "projects.tsx", type: "file", indent: 2, icon: "react" },
                      { name: "utils", type: "folder", isOpen: false, indent: 1 },
                      { name: "public", type: "folder", isOpen: false },
                      { name: "package.json", type: "file", icon: "json" },
                      { name: "tsconfig.json", type: "file", icon: "json" },
                      { name: "README.md", type: "file", icon: "md" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${item.isActive ? "bg-blue-600/30 text-blue-100" : "hover:bg-blue-900/30 text-blue-200/80 hover:text-blue-100"} transition-colors duration-200 cursor-pointer`}
                        style={{ paddingLeft: `${(item.indent || 0) * 16 + 8}px` }}
                      >
                        {item.type === "folder" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-300"
                          >
                            {item.isOpen ? (
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            ) : (
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            )}
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`
                            ${item.icon === "react" ? "text-blue-400" : ""}
                            ${item.icon === "json" ? "text-yellow-400" : ""}
                            ${item.icon === "md" ? "text-green-400" : ""}
                          `}
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                        )}
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code preview */}
              <div className="md:col-span-2 bg-blue-950/90">
                <div className="p-4 border-b border-blue-800/30 flex items-center justify-between">
                  <div className="text-blue-200 font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span>ProjectCard.tsx</span>
                  </div>
                  <div className="text-blue-300/70 text-sm">124 lines</div>
                </div>
                <div className="p-4 font-mono text-sm overflow-x-auto" style={{ maxHeight: "400px" }}>
                  <pre className="text-blue-100/90">
                    <code>
                      <span className="text-blue-400">import</span> <span className="text-blue-100">React</span>{" "}
                      <span className="text-blue-400">from</span> <span className="text-yellow-300">'react'</span>;
                      {"\n"}
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-blue-100">{"{ motion }"}</span> <span className="text-blue-400">from</span>{" "}
                      <span className="text-yellow-300">'framer-motion'</span>;{"\n"}
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-blue-100">{"{ ExternalLink, GitHub }"}</span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-yellow-300">'lucide-react'</span>;{"\n\n"}
                      <span className="text-green-400">// Define the project interface</span>
                      {"\n"}
                      <span className="text-blue-400">interface</span>{" "}
                      <span className="text-yellow-300">ProjectProps</span> <span className="text-blue-100">{"{"}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">id: string;</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">title: string;</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">description: string;</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">image?: string;</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">technologies: string[];</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">demoUrl?: string;</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">githubUrl?: string;</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">featured?: boolean;</span>
                      {"\n"}
                      <span className="text-blue-100">{"}"}</span>
                      {"\n\n"}
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-yellow-300">ProjectCard: React.FC</span>
                      <span className="text-blue-100">{"<ProjectProps>"}</span> <span className="text-blue-400">=</span>{" "}
                      <span className="text-blue-100">{"({"}</span>
                      {"\n"}
                      {"  "}id,{"\n"}
                      {"  "}title,{"\n"}
                      {"  "}description,{"\n"}
                      {"  "}image,{"\n"}
                      {"  "}technologies,{"\n"}
                      {"  "}demoUrl,{"\n"}
                      {"  "}githubUrl,{"\n"}
                      {"  "}featured = false{"\n"}
                      <span className="text-blue-100">{"})"}</span> <span className="text-blue-400">{"=>"}</span> {"{"}
                      return ({"    "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">motion.div</span>
                      {"\n"}
                      {"      "}
                      <span className="text-blue-100">whileHover</span>
                      <span className="text-blue-400">={"{"}</span>{" "}
                      <span className="text-blue-100">y: -5, boxShadow: </span>
                      <span className="text-yellow-300">"0 10px 25px -5px rgba(59, 130, 246, 0.3)"</span>{" "}
                      <span className="text-blue-400">{"}"}</span>
                      {"\n"}
                      {"      "}
                      <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">
                        {
                          "`bg-blue-950/40 backdrop-blur-md rounded-xl border ${featured ? 'border-blue-500/50' : 'border-blue-800/30'} p-6 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col`"
                        }
                      </span>
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"      "}
                      {"{"}image <span className="text-blue-400">&&</span> <span className="text-blue-100">{"("}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">div</span> <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"mb-4 rounded-lg overflow-hidden"</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">img</span> <span className="text-blue-100">src</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>image<span className="text-blue-100">{"}"}</span>{" "}
                      <span className="text-blue-100">alt</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>title<span className="text-blue-100">{"}"}</span>{" "}
                      <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"w-full h-48 object-cover"</span>{" "}
                      <span className="text-blue-400">/{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">div</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"      "}
                      {")"}
                      {"\n\n"}
                      {"      "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">h3</span> <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"text-xl font-semibold text-white mb-2"</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-100">{"{"}</span>title<span className="text-blue-100">{"}"}</span>
                      {"\n"}
                      {"      "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">h3</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n\n"}
                      {"      "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">p</span> <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"text-blue-100/70 mb-4 flex-grow"</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-100">{"{"}</span>description
                      <span className="text-blue-100">{"}"}</span>
                      {"\n"}
                      {"      "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">p</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n\n"}
                      {"      "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">div</span> <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"flex flex-wrap gap-2 mb-4"</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-100">{"{"}</span>technologies.map
                      <span className="text-blue-100">{"("}</span>(tech, index
                      <span className="text-blue-100">{")"}</span> <span className="text-blue-400">{"=>"}</span>{" "}
                      <span className="text-blue-100">{"("}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">span</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">key</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>index<span className="text-blue-100">{"}"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">
                        "bg-blue-900/40 text-blue-200 px-2 py-1 rounded-full text-xs"
                      </span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">{"{"}</span>tech<span className="text-blue-100">{"}"}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">span</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-100">{"))"}</span>
                      {"\n"}
                      {"      "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">div</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n\n"}
                      {"      "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">div</span> <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"flex gap-4 mt-auto"</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      {"{"}demoUrl <span className="text-blue-400">&&</span>{" "}
                      <span className="text-blue-100">{"("}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">a</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">href</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>demoUrl<span className="text-blue-100">{"}"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">target</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"_blank"</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">rel</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"noopener noreferrer"</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">
                        "text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center gap-1"
                      </span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">ExternalLink</span> <span className="text-blue-100">size</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>16<span className="text-blue-100">{"}"}</span>{" "}
                      <span className="text-blue-400">/{">"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">span</span>
                      <span className="text-blue-400">{">"}</span>View Demo<span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">span</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">a</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-100">{")}"}</span>
                      {"\n\n"}
                      {"        "}
                      {"{"}githubUrl <span className="text-blue-400">&&</span>{" "}
                      <span className="text-blue-100">{"("}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">a</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">href</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>githubUrl<span className="text-blue-100">{"}"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">target</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"_blank"</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">rel</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">"noopener noreferrer"</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-100">className</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-yellow-300">
                        "text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center gap-1"
                      </span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">GitHub</span> <span className="text-blue-100">size</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-blue-100">{"{"}</span>16<span className="text-blue-100">{"}"}</span>{" "}
                      <span className="text-blue-400">/{">"}</span>
                      {"\n"}
                      {"            "}
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-300">span</span>
                      <span className="text-blue-400">{">"}</span>Source Code
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">span</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"          "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">a</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"        "}
                      <span className="text-blue-100">{")}"}</span>
                      {"\n"}
                      {"      "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">div</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-yellow-300">motion.div</span>
                      <span className="text-blue-400">{">"}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-blue-100">{")}"}</span>;{"\n"}
                      <span className="text-blue-100">{"}"};</span>
                      {"\n\n"}
                      <span className="text-blue-400">export</span> <span className="text-blue-400">default</span>{" "}
                      <span className="text-blue-100">ProjectCard;</span>
                      {"\n"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Repository stats */}
            <div className="bg-blue-900/30 p-4 border-t border-blue-800/50 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-blue-200/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Last updated 3 days ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>12 contributors</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-blue-200/70">TypeScript 68.5%</span>
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-blue-200/70">CSS 22.3%</span>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-blue-200/70">JavaScript 9.2%</span>
              </div>
            </div>

            {/* Interactive elements */}
            <div className="p-4 flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>View Repository</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900/50 hover:bg-blue-800/50 text-blue-100 px-4 py-2 rounded-md flex items-center gap-2 border border-blue-700/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Code</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <style jsx global>{`
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          @keyframes float-particle {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10%, 90% {
              opacity: 1;
            }
            50% {
              transform: translateY(-100px) translateX(20px);
            }
          }
          
          @keyframes pulse-vertical {
            0%, 100% {
              opacity: 0;
              transform: scaleY(0.5);
            }
            50% {
              opacity: 1;
              transform: scaleY(1);
            }
          }
          
          @keyframes pulse-horizontal {
            0%, 100% {
              opacity: 0;
              transform: scaleX(0.5);
            }
            50% {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }

          @keyframes code-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(calc(-100% + 400px)); }
          }
        `}</style>
      </div>
    </Layout>
  )
}