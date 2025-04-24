"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/pages/about" },
    { name: "Servicios", href: "/pages/services" },
    { name: "Portafolio", href: "/pages/portfolio" },
    { name: "Blog", href: "/pages/blog" },
    { name: "Contacto", href: "/pages/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-10 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md py-3 shadow-lg shadow-rose-500/5" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative mr-2">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-slate-900 rounded-lg p-1.5">
              <Logo />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-rose-300 group-hover:to-pink-400">
              Acrux
            </span>
            <span className="text-xs font-medium text-slate-400 tracking-wider">CODE SOLUTIONS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              active={activeLink === link.name.toLowerCase()}
              onClick={() => setActiveLink(link.name.toLowerCase())}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          href="/pages/contact"
          className="hidden md:flex items-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-5 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-0.5 font-medium text-sm group"
        >
          Iniciar Proyecto
          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors duration-300 border border-slate-700/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg shadow-rose-500/5 border-t border-slate-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.name}
                  href={link.href}
                  active={activeLink === link.name.toLowerCase()}
                  onClick={() => {
                    setActiveLink(link.name.toLowerCase())
                    setIsMenuOpen(false)
                  }}
                >
                  {link.name}
                </MobileNavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-800/50">
                <Link
                  href="/pages/contact"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white text-center px-6 py-3 rounded-xl block transition-all duration-300 font-medium group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar Proyecto
                  <ChevronRight className="ml-1 h-4 w-4 inline-block transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, active, children, onClick }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group"
      onClick={onClick}
    >
      <span className={`relative z-10 ${active ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
        {children}
      </span>
      {active && (
        <motion.span
          className="absolute inset-0 bg-slate-800/80 rounded-lg -z-0"
          layoutId="activeDesktopNav"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  )
}

function MobileNavLink({ href, active, children, onClick }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg flex items-center"
      onClick={onClick}
    >
      <motion.span
        className={`w-1 h-1 rounded-full mr-2 ${
          active ? "bg-gradient-to-r from-rose-400 to-pink-500" : "bg-slate-700"
        }`}
        animate={{ scale: active ? [1, 1.5, 1] : 1 }}
        transition={{ repeat: active ? Number.POSITIVE_INFINITY : 0, duration: 2 }}
      />
      <span className={active ? "text-white" : "text-slate-400"}>{children}</span>
      {active && (
        <motion.span
          className="absolute inset-0 bg-slate-800/80 rounded-lg -z-10"
          layoutId="activeMobileNav"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  )
}

function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="url(#paint0_linear)" />
      <path d="M2 9V23L16 30V16L2 9Z" fill="url(#paint1_linear)" fillOpacity="0.8" />
      <path d="M30 9V23L16 30V16L30 9Z" fill="url(#paint2_linear)" fillOpacity="0.6" />
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="9" x2="30" y2="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F43F5E" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="2" y1="16" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F43F5E" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="30" y1="16" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F43F5E" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
