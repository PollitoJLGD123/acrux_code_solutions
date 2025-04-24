"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  ChevronUp,
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [emailFocus, setEmailFocus] = useState(false)
  const [email, setEmail] = useState("")

  const socialLinks = [
    { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={16} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contact" },
  ]

  const serviceLinks = [
    { name: "Diseño Web", href: "#" },
    { name: "Aplicaciones Web", href: "#" },
    { name: "Soluciones E-commerce", href: "#" },
    { name: "Mantenimiento Web", href: "#" },
    { name: "Servicios Digitales", href: "#" },
  ]

  const contactInfo = [
    {
      icon: <MapPin size={16} />,
      text: "123 Tech Street, Digital City, 10001",
      href: "https://maps.google.com",
    },
    {
      icon: <Phone size={16} />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <Mail size={16} />,
      text: "info@acruxcode.com",
      href: "mailto:info@acruxcode.com",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Show success message or notification
  }

  return (
    <footer className="bg-slate-950 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-md blur-sm opacity-80"></div>
                <div className="relative bg-slate-900 rounded-md p-1.5">
                  <Logo />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  Acrux
                </span>
                <span className="text-xs font-medium tracking-widest text-slate-400">CODE SOLUTIONS</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Transformamos ideas en experiencias digitales poderosas con soluciones de desarrollo web de vanguardia
              para empresas innovadoras.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-sm font-medium text-white">Suscríbete a nuestro newsletter</p>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full bg-slate-900/50 border border-slate-800/50 rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-rose-500/40 transition-all duration-300"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white transition-all duration-300 hover:opacity-90"
                  aria-label="Suscribirse"
                >
                  <Send size={14} />
                </button>

                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: emailFocus ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </form>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-800/50 hover:border-rose-500/50 flex items-center justify-center text-slate-400 hover:text-rose-400 transition-all duration-300"
                >
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    {social.icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Section - Simplified */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white relative inline-block">
                Enlaces
                <span className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-rose-500 to-pink-500"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-px bg-rose-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white relative inline-block">
                Servicios
                <span className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-rose-500 to-pink-500"></span>
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-px bg-rose-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Redesigned */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white relative inline-block">
              Contacto
              <span className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-rose-500 to-pink-500"></span>
            </h3>

            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-800/50 flex items-center justify-center text-rose-400">
                      {item.icon}
                    </span>
                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/pages/contact"
              className="inline-flex items-center text-sm font-medium text-white mt-2 group bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent"
            >
              <span className="border-b border-rose-500/30 group-hover:border-rose-500 transition-colors duration-300">
                Contactar Ahora
              </span>
              <ArrowUpRight
                size={14}
                className="ml-1 text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Simplified footer bottom section */}
        <div className="mt-16 pt-8 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">© {currentYear} Acrux Code Solutions. Todos los derechos reservados.</p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-rose-400 transition-colors duration-300">
              Privacidad
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-rose-400 transition-colors duration-300">
              Términos
            </Link>
            <Link href="/cookies" className="text-xs text-slate-500 hover:text-rose-400 transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* More elegant back to top button */}
      <Link
        href="#top"
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-900/60 border border-slate-800/50 flex items-center justify-center text-rose-400 hover:border-rose-500/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-rose-500/5"
        aria-label="Volver arriba"
      >
        <ChevronUp size={18} className="group-hover:text-rose-500 transition-colors duration-300" />
      </Link>
    </footer>
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
