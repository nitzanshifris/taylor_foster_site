"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Terminal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path: string) => {
    if (path === "/projects" && pathname.startsWith("/projects")) {
      return true
    }
    return pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 group ${
          scrolled ? "bg-blue-950/80 backdrop-blur-md py-3 shadow-lg shadow-blue-900/20" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            {/* Primary gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

            {/* Subtle bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

            {/* Animated glow effect */}
            <div className="absolute -left-[100%] top-[50%] h-[1px] w-[200%] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[nav-shimmer_3s_ease-in-out_infinite] transition-opacity duration-300"></div>

            {/* Radial highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <motion.div
            variants={linkVariants}
            className="text-white text-xl font-light relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="font-montserrat font-bold tracking-wider flex items-center gap-2 group">
              <div className="relative">
                <Terminal
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  size={24}
                />
                <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="relative">
                Taylor Foster
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            variants={linkVariants}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-white/80">
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link
                  href={link.href}
                  className={`relative font-light hover:text-white transition-colors ${
                    isActive(link.href) ? "text-white" : ""
                  } group`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full ${
                      isActive(link.href) ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-blue-950/95 backdrop-blur-md z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6">
                <Link
                  href="/"
                  className="text-white text-xl font-bold flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Terminal className="text-blue-400" size={24} />
                  <span>Taylor Foster</span>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-white/80">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-2xl font-light hover:text-white transition-colors ${
                      isActive(link.href) ? "text-white" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes nav-shimmer {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  )
}