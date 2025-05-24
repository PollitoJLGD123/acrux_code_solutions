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
  Check,
  AlertCircle,
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [emailFocus, setEmailFocus] = useState(false)
  const [email, setEmail] = useState("")
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" }) // Para manejar estado de envío
  const [isSubmitting, setIsSubmitting] = useState(false) // Para manejar estado de carga

  const socialLinks = [
    { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={16} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "Nosotros", href: "/pages/about" },
    { name: "Servicios", href: "/pages/services" },
    { name: "Portafolio", href: "/pages/portfolio" },
    { name: "Blog", href: "/pages/blog" },
    { name: "Contacto", href: "/pages/contact" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        switch (data.status) {
          case 200:
            setSubmitStatus({ 
              type: "success", 
              message: "Email registrado exitosamente!!" 
            });
            break;
          case 400:
            setSubmitStatus({ 
              type: "error", 
              message: "Email inválido. Por favor, verifica tu dirección de correo." 
            });
            break;
          case 409:
            setSubmitStatus({ 
              type: "error", 
              message: "Este email ya está registrado." 
            });
            break;
        }
        setEmail("");
      } else {
        setSubmitStatus({ 
          type: "error", 
          message: data.message || "Ha ocurrido un error al procesar tu solicitud." 
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus({ 
        type: "error", 
        message: "Error de conexión. Por favor, inténtalo de nuevo más tarde." 
      });
    } finally {
      setIsSubmitting(false);
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    }
  };

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
                  disabled={isSubmitting}
                  className={`w-full bg-slate-900/50 border ${
                    submitStatus.type === "error"
                      ? "border-red-500/50"
                      : submitStatus.type === "success"
                      ? "border-green-500/50"
                      : "border-slate-800/50"
                  } rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-rose-500/40 transition-all duration-300`}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md ${
                    isSubmitting
                      ? "bg-slate-700"
                      : submitStatus.type === "success"
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-rose-500 to-pink-500"
                  } flex items-center justify-center text-white transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                  aria-label="Suscribirse"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </motion.div>
                  ) : submitStatus.type === "success" ? (
                    <Check size={14} />
                  ) : (
                    <Send size={14} />
                  )}
                </button>

                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 ${
                    submitStatus.type === "error"
                      ? "bg-red-500"
                      : submitStatus.type === "success"
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-rose-500 to-pink-500"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: emailFocus ? "100%" : submitStatus.type ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Mensaje de estado */}
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs ${
                    submitStatus.type === "success" ? "text-green-400" : "text-red-400"
                  } flex items-center space-x-1`}
                >
                  {submitStatus.type === "error" ? (
                    <AlertCircle size={12} />
                  ) : (
                    <Check size={12} />
                  )}
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}
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

          {/* El resto del código del Footer se mantiene igual... */}
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