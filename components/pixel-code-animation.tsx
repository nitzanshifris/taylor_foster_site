"use client"

import { useEffect, useRef } from "react"

export default function TaylorFosterFlyingLetters() {
  // Use refs for all values that change during animation
  const containerRef = useRef(null)
  const isHoveredRef = useRef(false)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const lettersRef = useRef([])
  const animationRef = useRef(null)
  const isInitializedRef = useRef(false)

  // Set up the animation only once when the component mounts
  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) return

    const container = containerRef.current
    const { width, height } = container.getBoundingClientRect()

    // Create letter elements
    const nameText = "TAYLOR FOSTER"
    const letters = []

    // Load font
    const importFonts = document.createElement("link")
    importFonts.href =
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Rajdhani:wght@700&display=swap"
    importFonts.rel = "stylesheet"
    document.head.appendChild(importFonts)

    // Calculate total width needed with proper spacing
    const letterWidth = 60 // Reduced from 100 to 60 for better proportions
    const totalWidth = nameText.length * letterWidth

    // Create letters
    for (let i = 0; i < nameText.length; i++) {
      const letterDiv = document.createElement("div")
      letterDiv.textContent = nameText[i]
      letterDiv.style.position = "absolute"
      letterDiv.style.top = "50%"
      letterDiv.style.fontFamily = '"Orbitron", "Rajdhani", sans-serif'
      letterDiv.style.fontWeight = "bold"
      letterDiv.style.fontSize = "54px" // Reduced from 90px to 54px
      letterDiv.style.color = "#ffffff"
      letterDiv.style.textShadow = `
    -1px -1px 0 #0066ff, 
    1px -1px 0 #0066ff, 
    -1px 1px 0 #0066ff, 
    1px 1px 0 #0066ff,
    0 0 12px rgba(138, 239, 255, 0.9)
  ` // Reduced glow size from 20px to 12px
      letterDiv.style.userSelect = "none"
      letterDiv.style.pointerEvents = "none"
      letterDiv.style.zIndex = "10"

      // Position letters horizontally with proper spacing
      // Ensure the entire name is visible by centering it properly
      const startX = (width - totalWidth) / 2
      const xPos = startX + i * letterWidth

      letterDiv.style.left = `${xPos}px`
      letterDiv.style.transform = "translateY(-50%)"

      container.appendChild(letterDiv)

      // Store letter data
      letters.push({
        element: letterDiv,
        originalX: xPos,
        originalY: height / 2,
        x: xPos,
        y: height / 2,
        vx: 0,
        vy: 0,
        angle: 0,
        scale: 1,
      })
    }

    lettersRef.current = letters
    isInitializedRef.current = true

    // Animation function
    function animate() {
      const friction = 0.95
      const repelForce = isHoveredRef.current ? 20 : 0 // Reduced from 30 to 20
      const returnForce = 0.05

      // Update each letter
      lettersRef.current.forEach((letter) => {
        if (isHoveredRef.current) {
          // Calculate distance to mouse
          const dx = mousePositionRef.current.x - letter.x
          const dy = mousePositionRef.current.y - letter.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            // Reduced from 250 to 200
            // Push letter away from mouse
            const angle = Math.atan2(dy, dx)
            const force = repelForce * (1 - Math.min(1, distance / 200))

            letter.vx -= Math.cos(angle) * force
            letter.vy -= Math.sin(angle) * force
            letter.angle += (Math.random() - 0.5) * 0.2 * force

            // Random scale change
            if (Math.random() < 0.1) {
              letter.scale = 0.8 + Math.random() * 0.5
            }

            // Random glitch effect
            if (Math.random() < 0.05) {
              letter.element.style.color = Math.random() < 0.5 ? "#ff9e9e" : "#ffffff"
              letter.element.style.textShadow = `
    -1px -1px 0 #ff00ff, 
    1px -1px 0 #ff00ff, 
    -1px 1px 0 #ff00ff, 
    1px 1px 0 #ff00ff,
    -2px 0 3px rgba(255, 0, 0, 0.7),
    2px 0 3px rgba(0, 255, 255, 0.7),
    0 0 12px rgba(138, 239, 255, 0.9)
  `

              setTimeout(() => {
                letter.element.style.color = "#ffffff"
                letter.element.style.textShadow = `
      -1px -1px 0 #0066ff, 
      1px -1px 0 #0066ff, 
      -1px 1px 0 #0066ff, 
      1px 1px 0 #0066ff,
      0 0 12px rgba(138, 239, 255, 0.9)
    `
              }, 100)
            }
          }
        }

        // Return to original position
        const dx = letter.originalX - letter.x
        const dy = letter.originalY - letter.y

        letter.vx += dx * returnForce
        letter.vy += dy * returnForce
        letter.vx *= friction
        letter.vy *= friction
        letter.angle *= 0.9
        letter.scale += (1 - letter.scale) * 0.1

        // Update position
        letter.x += letter.vx
        letter.y += letter.vy

        // Update DOM element
        const speed = Math.sqrt(letter.vx * letter.vx + letter.vy * letter.vy)
        const distFromOrigin = Math.sqrt(dx * dx + dy * dy)

        letter.element.style.transform = `
          translate(${letter.x - letter.originalX}px, ${letter.y - letter.originalY}px) 
          rotate(${letter.angle}rad)
          scale(${letter.scale})
        `
        letter.element.style.filter = `blur(${Math.min(5, speed * 0.2)}px)`
        letter.element.style.opacity = Math.max(0.6, 1 - distFromOrigin / 400)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Event handlers
    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect()
      // Calculate mouse position relative to container
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }

      // Make sure all letters can be affected even if mouse is outside container
      if (isHoveredRef.current) {
        lettersRef.current.forEach((letter) => {
          const dx = mousePositionRef.current.x - letter.x
          const dy = mousePositionRef.current.y - letter.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // If mouse is close to any letter, keep hover state active
          if (distance < 250) {
            isHoveredRef.current = true
          }
        })
      }
    }

    function handleMouseEnter() {
      isHoveredRef.current = true
    }

    function handleMouseLeave() {
      isHoveredRef.current = false
    }

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    // Handle window resize
    function handleResize() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()

        // Reposition letters with proper spacing on resize
        const letterWidth = 60 // Keep consistent with initial setup
        const totalWidth = nameText.length * letterWidth
        const startX = (width - totalWidth) / 2

        lettersRef.current.forEach((letter, i) => {
          const xPos = startX + i * letterWidth
          letter.originalX = xPos
          letter.originalY = height / 2
        })
      }
    }

    window.addEventListener("resize", handleResize)

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      if (document.head.contains(importFonts)) {
        document.head.removeChild(importFonts)
      }

      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", handleResize)

      // Remove letter elements
      lettersRef.current.forEach((letter) => {
        if (letter.element.parentNode === container) {
          container.removeChild(letter.element)
        }
      })
    }
  }, []) // Empty dependency array - run only once on mount

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "180px", // Reduced from 220px to 180px
        position: "relative",
        overflow: "visible",
        padding: "0 30px", // Reduced from 50px to 30px
      }}
    />
  )
}