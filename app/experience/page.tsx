"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import Layout from "@/components/layout"

export default function ExperiencePage() {
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

  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Blackbaud",
      period: "2021 - Present",
      location: "Austin, TX",
      description: [
        "Lead a cross-functional project from prototype to launch",
        "Optimized application performance reducing latency from 100ms to 40ms",
        "Mentor junior Python developers",
      ],
    },
    {
      title: "Software Engineer",
      company: "Hubspot",
      period: "2016 - 2021",
      location: "Austin, TX",
      description: [
        "Collaborated with teams to build a scalable microservices architecture",
        "Developed JavaScript features that improved user engagement by 40%",
        "Wrote unit and integration tests ensuring robust API coverage",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Evernote",
      period: "2012 - 2016",
      location: "Austin, TX",
      description: [
        "Assisted in developing a collaborative platform to assist developers",
        "Implemented RESTful web services for summary efficiency",
        "Fixed bugs to improve application stability",
      ],
    },
  ]

  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "Goldsboro University",
    period: "2008 - 2012",
    location: "Goldsboro, NC",
  }

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">Professional Experience</h1>
            <p className="text-blue-200 max-w-2xl mx-auto">
              My career journey and professional growth in software engineering over the past decade.
            </p>
          </motion.div>

          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {/* Timeline */}
            <motion.div variants={itemVariants} className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 transform md:translate-x-px"></div>

              {/* Experience items */}
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div
                    className={`flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-blue-950 transform -translate-x-2 md:-translate-x-2.5 z-10"></div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`bg-blue-950/40 backdrop-blur-sm rounded-xl border border-blue-800/50 p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-900/20`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="text-blue-400 w-5 h-5" />
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>

                        <div className="flex flex-col gap-1 mb-4">
                          <div className="text-blue-300 font-medium">{exp.company}</div>
                          <div className="flex items-center gap-4 text-blue-200/70 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2 text-blue-100/80">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-950/40 backdrop-blur-sm rounded-xl border border-blue-800/50 p-8 hover:border-blue-500/30 transition-all duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Education</h2>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                  <div className="text-blue-300 font-medium">{education.institution}</div>
                  <div className="flex items-center gap-4 text-blue-200/70 text-sm mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Achievements */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-950/40 backdrop-blur-sm rounded-xl border border-blue-800/50 p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "React", "Node.js", "SQL", "Flask", "Django", "Git", "Agile"].map(
                    (skill, index) => (
                      <span key={index} className="bg-blue-900/40 text-blue-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-blue-950/40 backdrop-blur-sm rounded-xl border border-blue-800/50 p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
                <ul className="space-y-2 text-blue-100/80">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Spearheaded a $12M software project to completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Increased server efficiency by 20% through algorithm optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Reduced page load times by implementing image compression</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}