"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import {
  ArrowRight,
  Code,
  Sparkles,
  Zap,
  ChevronRight,
  Users,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
  Smartphone,
  Clock,
  Coffee,
  Store,
  Shield,
} from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  const benefitsRef = useRef(null)
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const benefitsControls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000 // 2 seconds
      const interval = 20 // Update every 20ms
      const steps = duration / interval

      const increment1 = Math.ceil(45 / steps)
      const increment2 = Math.ceil(30 / steps)
      const increment3 = Math.ceil(95 / steps)

      const timer = setInterval(() => {
        setCount1((prev) => {
          const next = prev + increment1
          return next >= 45 ? 45 : next
        })
        setCount2((prev) => {
          const next = prev + increment2
          return next >= 30 ? 30 : next
        })
        setCount3((prev) => {
          const next = prev + increment3
          return next >= 95 ? 95 : next
        })
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isStatsInView])

  useEffect(() => {
    if (isBenefitsInView) {
      benefitsControls.start("visible")
    }
  }, [isBenefitsInView, benefitsControls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const benefits = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Control de Ventas e Inventario",
      description:
        "¿Cansado de llevar cuentas en libretas o Excel? Controla tus ventas, productos y stock de forma sencilla desde cualquier dispositivo.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gestión de Clientes",
      description:
        "Guarda toda la información de tus clientes en un solo lugar. Recuerda sus preferencias y haz que vuelvan una y otra vez.",
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Tu Negocio en Internet",
      description:
        "Llega a más clientes con tu propia página web. Es como tener tu tienda abierta 24/7, incluso mientras duermes.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Aplicaciones a tu Medida",
      description:
        "Aplicaciones sencillas que te ayudan a resolver problemas específicos de tu negocio, sin complicaciones técnicas.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden px-5">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-4">
                <Coffee size={14} className="mr-1" />
                Tecnología Simple para tu Negocio
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Haz crecer tu negocio{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
                  sin complicaciones
                </span>
              </h1>

              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                ¿Tienes un negocio que crece día a día, pero sientes que podrías lograr más con las herramientas
                adecuadas? ¡No estás solo! En <span className="font-bold text-white">ACRUX CODE SOLUTIONS</span>,
                hacemos que la tecnología sea tu aliada, no un dolor de cabeza más.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button>
                  Empezar{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline">Ver Opciones</Button>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: <Code size={20} />, text: "Páginas Web" },
                  { icon: <Zap size={20} />, text: "Sistemas de Gestión" },
                  { icon: <Sparkles size={20} />, text: "Capacitación" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-rose-400 mb-2">
                      {item.icon}
                    </div>
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-slate-900 rounded-2xl p-1 border border-slate-800">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-slate-800/50 rounded-t-2xl flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="pt-12">
                    <Image
                      src="/home/fondo_home.jpeg"
                      width={600}
                      height={450}
                      alt="Desarrollo web profesional"
                      className="w-full h-auto rounded-b-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-400">
          <span className="text-xs mb-2">Descubre más</span>
          <ChevronRight size={20} className="animate-bounce rotate-90" />
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 relative overflow-hidden px-5" ref={benefitsRef}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-4">
              <TrendingUp size={14} className="mr-1" />
              SOLUCIONES PRÁCTICAS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Herramientas que{" "}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
                realmente necesitas
              </span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
            <p className="text-slate-300 text-lg">
              Nada de tecnología complicada. Solo soluciones sencillas que te ayudan a vender más, trabajar menos y
              hacer crecer tu negocio paso a paso.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsControls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/10 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-rose-500/30 transition-all duration-500 group"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:from-rose-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                  <div className="text-rose-400 group-hover:text-rose-300 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-4">
                BENEFICIOS REALES
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">¿Qué gana tu negocio con nosotros?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Entendemos que cada moneda cuenta en un negocio. Por eso nuestras soluciones están diseñadas para darte
                resultados, sin grandes inversiones ni complicaciones técnicas.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Ahorra tiempo en tareas repetitivas que un sistema puede hacer por ti",
                  "Conoce exactamente qué productos se venden más y cuáles menos",
                  "Mantén contacto con tus clientes y hazlos volver",
                  "Toma mejores decisiones basadas en información real, no en corazonadas",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-rose-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/pages/contact"
                className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 font-medium group"
              >
                Quiero saber más (es gratis)
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
              ref={statsRef}
            >
              <div className="bg-slate-800/10 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center pt-6 mb-4">
                      <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
                        100%
                      </div>
                    </div>
                    <h4 className="text-white font-medium mb-1">Compromiso</h4>
                    <p className="text-slate-400 text-sm">Con tu satisfacción</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center pt-6 mb-4">
                      <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
                        24/7
                      </div>
                    </div>
                    <h4 className="text-white font-medium mb-1">Disponibilidad</h4>
                    <p className="text-slate-400 text-sm">Para resolver tus dudas</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700/50">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-white font-medium">Garantía de Satisfacción</p>
                      </div>
                    </div>
                    <Link
                      href="/pages/contact"
                      className="text-rose-400 hover:text-rose-300 transition-colors duration-300 flex items-center text-sm font-medium group"
                    >
                      Hablar con un Asesor
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-rose-500 to-pink-500 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl shadow-rose-500/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para dar el primer paso?</h2>
                <p className="text-slate-300 mb-6">
                  No necesitas ser un experto en tecnología. Nosotros nos encargamos de la parte técnica mientras tú te
                  concentras en lo que mejor sabes hacer: atender a tus clientes y hacer crecer tu negocio.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/pages/contact"
                    className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 font-medium group"
                  >
                    Hablar con un Asesor
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/pages/services"
                    className="inline-flex items-center border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-slate-800 font-medium"
                  >
                    Ver Opciones
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/20 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 flex items-center hover:border-rose-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Primera Reunión</h4>
                    <p className="text-slate-400 text-sm">En menos de 24 horas</p>
                  </div>
                </div>
                <div className="bg-slate-800/20 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 flex items-center hover:border-rose-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                    <Smartphone className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Funciona en Todo</h4>
                    <p className="text-slate-400 text-sm">Celular, tablet, computadora</p>
                  </div>
                </div>
                <div className="bg-slate-800/20 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 flex items-center hover:border-rose-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                    <Code className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Capacitación</h4>
                    <p className="text-slate-400 text-sm">Te enseñamos a usarlo</p>
                  </div>
                </div>
                <div className="bg-slate-800/20 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 flex items-center hover:border-rose-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Soporte Amigable</h4>
                    <p className="text-slate-400 text-sm">Siempre disponibles</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function Button({ children, variant = "solid", size = "md", className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl group"

  const variants = {
    solid:
      "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1",
    outline: "border border-slate-700/50 text-white hover:bg-slate-800/50 hover:border-slate-600",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
