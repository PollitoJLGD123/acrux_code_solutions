"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Settings, Search, ArrowRight, Store, Users, Clock, Shield, ShoppingBag } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Páginas Web para Negocios",
      description:
        "Tu negocio abierto 24/7 en internet. Creamos páginas web sencillas pero efectivas que atraen clientes mientras tú te ocupas de lo importante.",
      icon: <Store className="w-10 h-10" />,
      features: [
        "Diseño que se ve bien en celulares y computadoras",
        "Fácil de actualizar por ti mismo",
        "Formularios de contacto que llegan directo a tu WhatsApp",
        "Información clara de tus productos o servicios",
        "Botones para llamadas y ubicación en Google Maps",
      ],
    },
    {
      id: 2,
      title: "Sistemas de Control de Ventas",
      description:
        "Olvídate de las libretas y Excel. Controla tus ventas, inventario y clientes desde cualquier dispositivo, incluso sin internet.",
      icon: <ShoppingCart className="w-10 h-10" />,
      features: [
        "Control de ventas diarias y mensuales",
        "Alertas cuando un producto se está agotando",
        "Registro de clientes frecuentes",
        "Reportes simples que entenderás a primera vista",
        "Funciona incluso cuando se va el internet",
      ],
    },
    {
      id: 3,
      title: "Tiendas en Línea",
      description:
        "Vende tus productos las 24 horas sin necesidad de estar presente. Recibe pagos online o contra entrega, tú decides.",
      icon: <ShoppingBag className="w-10 h-10" />,
      features: [
        "Catálogo de productos fácil de actualizar",
        "Pagos con tarjeta, transferencia o efectivo",
        "Notificaciones de nuevos pedidos",
        "Gestión simple de envíos",
        "Funciona perfectamente en celulares",
      ],
    },
    {
      id: 4,
      title: "Mantenimiento y Soporte",
      description:
        "No te dejamos solo. Estamos ahí cuando nos necesites para resolver dudas o hacer cambios en tu sistema o página web.",
      icon: <Settings className="w-10 h-10" />,
      features: [
        "Respuesta en menos de 24 horas",
        "Actualizaciones de seguridad incluidas",
        "Respaldo de tu información",
        "Cambios y mejoras cuando los necesites",
        "Soporte por WhatsApp, llamada o videollamada",
      ],
    },
    {
      id: 5,
      title: "Posicionamiento en Google",
      description:
        "Haz que tu negocio aparezca cuando tus clientes buscan lo que vendes. Más visibilidad significa más ventas.",
      icon: <Search className="w-10 h-10" />,
      features: [
        "Registro en Google Mi Negocio",
        "Optimización para palabras clave locales",
        "Mejora de la velocidad de tu página",
        "Contenido que atrae a tus clientes ideales",
        "Reportes mensuales que entenderás fácilmente",
      ],
    },
    {
      id: 6,
      title: "Capacitación Digital",
      description:
        "Te enseñamos a usar las herramientas digitales para tu negocio. No necesitas ser un experto, nosotros te guiamos paso a paso.",
      icon: <Users className="w-10 h-10" />,
      features: [
        "Sesiones personalizadas a tu ritmo",
        "Manuales sencillos con capturas de pantalla",
        "Videos tutoriales exclusivos para tu negocio",
        "Acompañamiento durante los primeros meses",
        "Resolución de dudas por WhatsApp",
      ],
    },
  ]

  const [activeService, setActiveService] = useState(services[0])
  const selectedServiceRef = useRef(null)

  const handleServiceClick = (service) => {
    setActiveService(service)
    if (selectedServiceRef.current) {
      const elementTop = selectedServiceRef.current.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementTop - 130,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-4">
            SOLUCIONES PARA TU NEGOCIO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Servicios{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
              a tu medida
            </span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
          <p className="text-slate-300 text-lg">
            Herramientas digitales simples pero poderosas que te ayudan a vender más, trabajar menos y hacer crecer tu
            negocio paso a paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-slate-800/10 backdrop-blur-sm p-6 rounded-xl border ${
                activeService.id === service.id ? "border-rose-500" : "border-slate-700/50"
              } hover:border-rose-500/30 transition-all duration-500 cursor-pointer group`}
              onClick={() => handleServiceClick(service)}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:from-rose-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                <div className="text-rose-400 group-hover:text-rose-300 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={selectedServiceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 mt-8 hover:border-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mb-6">
                <div className="text-rose-400">{activeService.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 relative inline-block">
                {activeService.title}
                <span className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-rose-500 to-pink-500 opacity-70"></span>
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">{activeService.description}</p>

              <h4 className="text-lg font-medium text-white mb-4">Lo que incluye:</h4>
              <ul className="space-y-3 mb-8">
                {activeService.features.map((feature, index) => (
                  <motion.li
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
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/pages/contact"
                className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 font-medium group"
              >
                Quiero saber más
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5">
              <h4 className="text-xl font-semibold text-white mb-6">¿Por qué elegir nuestro servicio?</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Entendemos que cada negocio es único. No ofrecemos soluciones genéricas, sino herramientas adaptadas a
                tus necesidades reales y a tu presupuesto.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Nuestro objetivo es que veas resultados desde el primer día y que puedas manejar tus herramientas
                digitales con confianza.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Entrega Rápida</h5>
                    <p className="text-slate-400 text-sm">Resultados en días, no en meses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Garantía de Satisfacción</h5>
                    <p className="text-slate-400 text-sm">Si no estás contento, lo arreglamos sin costo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Soporte Personalizado</h5>
                    <p className="text-slate-400 text-sm">Siempre hablando con personas reales, no con robots</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
