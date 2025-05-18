"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, Terminal } from "lucide-react"
import Layout from "@/components/layout"
import Image from "next/image"
import TaylorFosterFlyingLetters from "@/components/pixel-code-animation"
import { useState, useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Explore Portfolio"

  // Typing effect
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout
    let cursorInterval: NodeJS.Timeout

    // Cursor blink effect
    cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    const handleButtonHover = () => {
      setIsTyping(true)
      setTypedText("")

      let i = 0
      const typeNextChar = () => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1))
          i++
          typingTimeout = setTimeout(typeNextChar, 50 + Math.random() * 50) // Random typing speed
        }
      }

      typeNextChar()
    }

    // Add event listener to the button
    const button = document.getElementById("explore-button")
    if (button) {
      button.addEventListener("mouseenter", handleButtonHover)
    }

    return () => {
      clearTimeout(typingTimeout)
      clearInterval(cursorInterval)
      if (button) {
        button.removeEventListener("mouseenter", handleButtonHover)
      }
    }
  }, [fullText])

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    }),
  }

  const title = "SOFTWARE ENGINEER"

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="mb-4">
            <TaylorFosterFlyingLetters />
          </div>

          <div className="overflow-hidden mb-12">
            <div className="flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/10 to-blue-600/20 blur-xl rounded-full"></div>
              {title.split("").map((letter, i) => (
                <motion.span
                  key={`title-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="text-lg md:text-xl font-light tracking-widest relative mx-[3px] group"
                  style={{
                    textShadow: "0 0 10px rgba(138, 239, 255, 0.5)",
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-300 group-hover:from-blue-200 group-hover:to-blue-400 transition-colors duration-300">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  />
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mb-12 relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl shadow-blue-900/50 mx-auto">
              <Image
                src="/images/taylor-profile.png"
                alt="Taylor Foster"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <motion.button
              id="explore-button"
              onClick={() => router.push("/about")}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-3.5 overflow-hidden rounded-lg text-white font-medium shadow-lg w-[220px] h-[50px]"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)]"></div>
              </div>

              {/* Code block border */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                {/* Code editor background with grid pattern */}
                <div className="absolute inset-0 bg-gray-900/90 border border-blue-800/30"></div>

                {/* Code editor header */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800/80 border-b border-blue-800/30 flex items-center px-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>

                {/* Code-like border with brackets and symbols */}
                <div className="absolute inset-0 z-10 rounded-lg overflow-hidden">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-lg border border-blue-400/10 bg-gradient-to-br from-blue-500/5 to-blue-400/10"></div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.15)] blur-[1px]"></div>
                  </div>

                  {/* Refined corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400/30 rounded-tl-sm"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400/30 rounded-tr-sm"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400/30 rounded-bl-sm"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400/30 rounded-br-sm"></div>
                </div>

                {/* Animated code line effects */}
                <div className="absolute -left-[100%] top-[10%] h-[1px] w-[200%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
                <div className="absolute -right-[100%] bottom-[10%] h-[1px] w-[200%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent group-hover:animate-[shimmer-reverse_2s_infinite]"></div>

                {/* Code dots in corners */}
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-blue-400/40"></div>
                <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-blue-400/40"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-blue-400/40"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-blue-400/40"></div>
              </div>

              {/* Content with typing effect */}
              <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                <Terminal size={14} className="opacity-70 flex-shrink-0" />
                <span className="font-mono whitespace-nowrap overflow-hidden">
                  {isTyping ? typedText : fullText}
                  {isTyping && showCursor && (
                    <span className="inline-block w-[2px] h-[14px] bg-white ml-[1px] align-middle animate-pulse">
                      |
                    </span>
                  )}
                </span>
                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                />
              </div>
            </motion.button>

            <motion.a
              href="https://github.com/taylor-foster" // Replace with the actual GitHub username
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-3.5 overflow-hidden rounded-lg text-blue-100 font-medium"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm border border-blue-400/30 rounded-lg transition-all duration-300 group-hover:bg-blue-900/20 group-hover:border-blue-400/50"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent_70%)]"></div>
              </div>

              {/* Animated glow */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute -top-[100%] left-0 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-blue-400/50 to-transparent group-hover:animate-[shimmer-vertical_2s_infinite]"></div>
                <div className="absolute -bottom-[100%] right-0 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-blue-400/50 to-transparent group-hover:animate-[shimmer-vertical-reverse_2s_infinite]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span>GitHub</span>
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
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(200%); }
        }
        @keyframes shimmer-reverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200%); }
        }
        @keyframes shimmer-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(200%); }
        }
        @keyframes shimmer-vertical-reverse {
          0% { transform: translateY(0); }
          100% { transform: translateY(-200%); }
        }
      `}</style>
    </Layout>
  )
}