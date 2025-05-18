import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={`${inter.variable} ${montserrat.variable} font-sans bg-gradient-to-br from-blue-950 to-blue-800 min-h-screen`}
    >
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">{children}</main>
    </div>
  )
}