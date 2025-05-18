"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Contato", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-xl font-bold">
          Meu<span className="text-emerald-600">Hub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-600 transition-colors dark:text-gray-300 dark:hover:text-emerald-400"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/curriculo-amom-augusto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-gray-900"
          >
            <Download size={18} />
            Baixar CV
          </Link>
        </nav>

        <ThemeToggle />

        <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors dark:text-gray-300 dark:hover:text-emerald-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/curriculo-amom-augusto.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-gray-900"
            >
              <Download size={18} />
              Baixar CV
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
