"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X, ChevronRight, Code, Store, Smartphone, ArrowRight, Bot } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce de Moda",
      category: "e-commerce",
      image: "/portafolio/e-commerce1.jpg",
      description: "Tienda online completa con catálogo de productos, carrito de compras y pasarela de pagos.",
      link: "#",
      features: [
        "Catálogo de productos con filtros",
        "Carrito de compras y pasarela de pagos",
        "Gestión de inventario",
        "Diseño responsive para móviles",
      ],
      icon: <Store className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Portal Corporativo",
      category: "web",
      image: "/portafolio/proyect_web2.jpeg",
      description: "Sitio web corporativo con múltiples secciones, blog integrado y panel de administración.",
      link: "#",
      features: [
        "Diseño personalizado y responsive",
        "Blog con categorías y buscador",
        "Panel de administración intuitivo",
        "Optimización para buscadores",
      ],
      icon: <Code className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Aplicación de Gestión",
      category: "app",
      image: "/portafolio/app3.jpg",
      description: "Sistema de gestión interna para empresa de logística con múltiples módulos.",
      link: "#",
      features: [
        "Control de inventario y envíos",
        "Seguimiento de pedidos en tiempo real",
        "Reportes y estadísticas",
        "Acceso desde cualquier dispositivo",
      ],
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Plataforma Educativa",
      category: "app",
      image: "/portafolio/app4.jpg",
      description: "Plataforma de cursos online con sistema de suscripciones y contenido multimedia.",
      link: "#",
      features: [
        "Reproductor de video personalizado",
        "Sistema de suscripciones y pagos",
        "Seguimiento de progreso del estudiante",
        "Certificados automáticos",
      ],
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: 5,
      title: "Tienda de Electrónicos",
      category: "e-commerce",
      image: "/portafolio/e-commerce5.jpg",
      description: "E-commerce especializado en productos electrónicos con comparador de características.",
      link: "#",
      features: [
        "Comparador de productos",
        "Reseñas y valoraciones",
        "Filtros avanzados de búsqueda",
        "Integración con múltiples pasarelas de pago",
      ],
      icon: <Store className="h-6 w-6" />,
    },
    {
      id: 6,
      title: "Blog de Viajes",
      category: "web",
      image: "/portafolio/proyect_web6.jpeg",
      description: "Blog de viajes con mapa interactivo, galería de imágenes y sistema de comentarios.",
      link: "#",
      features: [
        "Mapa interactivo de destinos",
        "Galería de imágenes con zoom",
        "Sistema de comentarios y valoraciones",
        "Optimización para redes sociales",
      ],
      icon: <Code className="h-6 w-6" />,
    },
    {
      id: 7,
      title: "Reconocimiento de Lenguaje de Señas",
      category: "inteligencia-artificial",
      image: "/portafolio/mascota.jpeg",
      description:
        "Un modelo de inteligencia artificial que reconoce lenguaje de señas, construido con Python y Random Forest.",
      link: "#",
      features: [
        "Inteligencia Artificial",
        "Reconocimiento de lenguaje de señas",
        "Transcripción a texto y audio",
        "Modelo de IA totalmente entrenado",
      ],
      icon: <Bot className="h-6 w-6" />,
    },
  ]

  const categories = ["todos", "web", "app", "e-commerce", "inteligencia-artificial"]
  const [filter, setFilter] = useState("todos")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  const filteredProjects = filter === "todos" ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen])

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "web":
        return "from-rose-500 to-pink-500"
      case "app":
        return "from-violet-500 to-purple-500"
      case "e-commerce":
        return "from-emerald-500 to-teal-500"
      case "inteligencia-artificial":
        return "from-amber-500 to-orange-500"
      default:
        return "from-rose-500 to-pink-500"
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-6">
            NUESTROS PROYECTOS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Portafolio de{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
              Soluciones Digitales
            </span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Explora algunos de nuestros proyectos más destacados, utilizamos tecnologías modernas y actualizadas para
            ayudar a negocios como el tuyo a crecer en el mundo digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-slate-800/20 backdrop-blur-sm rounded-full border border-slate-700/50">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/30"
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={itemVariants}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                className="group bg-slate-800/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-rose-500/30 transition-all duration-500"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(
                        project.category,
                      )} text-white shadow-lg shadow-rose-500/20`}
                    >
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-70"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mb-5">
                    <div className="text-rose-400">{project.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300 line-clamp-2">
                    {project.description}
                  </p>
                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center text-rose-400 hover:text-rose-300 transition-colors duration-300 text-sm font-medium group/btn"
                  >
                    Ver Detalles
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            >
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
                className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-xl shadow-rose-500/10"
              >
                <div className="relative">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={1200}
                    height={800}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-70"></div>
                  <button
                    className="absolute top-4 right-4 bg-slate-800/80 text-white p-2 rounded-full hover:bg-slate-700 transition-colors duration-300 hover:scale-110 transform"
                    onClick={closeModal}
                  >
                    <X size={20} />
                  </button>
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(
                      selectedProject.category,
                    )} text-white shadow-lg shadow-rose-500/20`}
                  >
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mr-5">
                      <div className="text-rose-400">{selectedProject.icon}</div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-10 leading-relaxed text-lg">{selectedProject.description}</p>

                  <div className="mb-10">
                    <h4 className="text-xl font-semibold text-white mb-6 relative inline-block">
                      Características del Proyecto
                      <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-gradient-to-r from-rose-500 to-pink-500 opacity-50"></span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {selectedProject.features.map((feature, index) => (
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
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <span className="text-slate-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-0.5 font-medium"
                    >
                      Visitar Proyecto
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <button
                      onClick={closeModal}
                      className="inline-flex items-center justify-center border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-slate-800 font-medium"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link
            href="/pages/contact"
            className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 font-medium group"
          >
            ¿Quieres un proyecto como estos?
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
