"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, User, ArrowLeft, Share2, Bookmark, Heart, Clock, Eye } from "lucide-react"
import { useRef } from "react"

export default function BlogLayout1(props) {
  const post = props.post || {
    title: "10 Tendencias de Diseño Web que Dominarán en 2025",
    category: "Diseño Web",
    date: "15 de Enero, 2025",
    author: "María González",
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "8 min",
    views: "2.4k",
  }

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Hero Section con Parallax */}
      <motion.div style={{ y, opacity }} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Imagen de portada con overlay mejorado */}
        <div className="absolute inset-0">
          <img
            src={post.image || "/placeholder.svg"}
            alt="Imagen de portada"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-purple-950/40"></div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg"></div>

        {/* Contenido del hero */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Categoría con diseño mejorado */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-md border border-purple-400/40 text-purple-200 text-sm font-semibold mb-6 shadow-lg"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                {post.category}
              </motion.div>

              {/* Título con gradiente */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-8 max-w-5xl leading-tight">
                {post.title}
              </h1>

              {/* Metadatos mejorados */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                >
                  <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-slate-300 text-sm font-medium">{post.date}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                >
                  <User className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-slate-300 text-sm font-medium">{post.author}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                >
                  <Clock className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-slate-300 text-sm font-medium">{post.readTime}. de lectura</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                >
                  <Eye className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-slate-300 text-sm font-medium">{post.views} vistas</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative -mt-5 z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Barra de navegación y acciones mejorada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-between items-center mb-12 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl"
            >
              <Link
                href="/pages/blog"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-semibold">Volver a Blogs</span>
              </Link>

              <div className="flex items-center gap-3">
                {[
                  { icon: Share2, label: "Compartir" },
                  { icon: Bookmark, label: "Guardar" },
                  { icon: Heart, label: "Me gusta" },
                ].map(({ icon: Icon, label }, index) => (
                  <motion.button
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-purple-600 hover:to-pink-600 text-purple-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/25"
                    title={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contenido del artículo con diseño mejorado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
            >
              <div className="prose prose-invert prose-purple max-w-none">
                {/* Introducción destacada */}
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 mb-10 border border-purple-500/20">
                  <p className="text-slate-200 text-xl leading-relaxed font-medium m-0">
                    El diseño web evoluciona constantemente, adaptándose a las nuevas tecnologías y expectativas de los
                    usuarios. A continuación, exploramos las 10 tendencias más destacadas que marcarán el rumbo del
                    diseño web en 2025.
                  </p>
                </div>

                {/* Secciones del contenido */}
                {[
                  {
                    title: "1. Diseño Sostenible",
                    content:
                      "La conciencia ambiental influye en el diseño web, promoviendo prácticas que reducen la huella de carbono digital. Esto incluye optimizar el rendimiento del sitio para disminuir el consumo de energía y utilizar colores y temas que reflejen la sostenibilidad.",
                  },
                  {
                    title: "2. Microinteracciones",
                    content:
                      "Pequeños detalles interactivos, como botones que se expanden o elementos visuales que se desvanecen suavemente, añaden personalidad e interactividad al sitio web, mejorando la experiencia del usuario.",
                  },
                  {
                    title: "3. Tipografía Audaz",
                    content:
                      "El uso de tipografías grandes y llamativas capta la atención del usuario y transmite la identidad de la marca de manera efectiva.",
                  },
                  {
                    title: "4. Navegación Experimental",
                    content:
                      "Diseños que rompen con la navegación tradicional, utilizando menús ocultos o interacciones innovadoras, ofrecen experiencias únicas y memorables.",
                  },
                  {
                    title: "5. Integración de IA",
                    content:
                      "La inteligencia artificial permite personalizar la experiencia del usuario, adaptando el contenido y la navegación según sus preferencias y comportamientos.",
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-10 group"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mt-0 mb-6 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                      {section.title}
                    </h2>
                    <div className="bg-slate-800/30 rounded-xl p-6 border-l-4 border-purple-500 hover:border-pink-500 transition-colors duration-300">
                      <p className="text-slate-300 leading-relaxed text-lg m-0">{section.content}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Imagen de contenido mejorada */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="my-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50"
                >
                  <img
                    src="https://designs.raleighswebsitedesign.com/wp-content/uploads/2023/02/25100515/JBR_Hero-1024x576.jpg"
                    alt="Ejemplo de diseño web moderno"
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Más secciones */}
                {[
                  {
                    title: "6. Ilustraciones Personalizadas",
                    content:
                      "Las ilustraciones únicas y hechas a medida ayudan a diferenciar una marca y a transmitir su mensaje de manera más efectiva.",
                  },
                  {
                    title: "7. Diseño Modular",
                    content:
                      "La estructura por bloques facilita la organización del contenido y permite una mayor flexibilidad en el diseño y la actualización del sitio.",
                  },
                  {
                    title: "8. Scrollytelling",
                    content:
                      "Combinar la narración con el desplazamiento crea una experiencia inmersiva que guía al usuario a través del contenido de manera fluida y atractiva.",
                  },
                  {
                    title: "9. Elementos 3D",
                    content:
                      "La incorporación de gráficos en 3D añade profundidad y realismo al diseño, captando la atención del usuario y mejorando la interacción.",
                  },
                  {
                    title: "10. Modo Oscuro",
                    content:
                      "El modo oscuro reduce la fatiga visual y ofrece una estética moderna y elegante, siendo cada vez más demandado por los usuarios.",
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index + 5}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-10 group"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mt-0 mb-6 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                      {section.title}
                    </h2>
                    <div className="bg-slate-800/30 rounded-xl p-6 border-l-4 border-purple-500 hover:border-pink-500 transition-colors duration-300">
                      <p className="text-slate-300 leading-relaxed text-lg m-0">{section.content}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Conclusión destacada */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8 mt-12 border border-purple-500/30"
                >
                  <p className="text-slate-200 leading-relaxed text-lg m-0 font-medium">
                    Adaptarse a estas tendencias permitirá a los diseñadores y desarrolladores crear sitios web más
                    atractivos, funcionales y alineados con las expectativas actuales de los usuarios.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
