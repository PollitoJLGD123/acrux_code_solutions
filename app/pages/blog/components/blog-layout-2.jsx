"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Calendar,
  User,
  Share2,
  Bookmark,
  Heart,
  Clock,
  Eye,
  TrendingUp,
  Lightbulb,
  Target,
} from "lucide-react"
import { useRef, useState, useEffect } from "react"
import BackButton from "./back-button"
import { blogPosts } from "@/app/data/blog-posts"

export default function BlogLayout1(props) {
  const [activeSection, setActiveSection] = useState("")
  const containerRef = useRef(null)

  const post = props.post

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const tableOfContents = [
    { id: "intro", title: "Introducción", icon: Lightbulb },
    { id: "section1", title: "Tendencias Web", icon: TrendingUp },
    { id: "section2", title: "Diseño Web", icon: Target },
    { id: "section3", title: "Marketing Digital", icon: Target },
    { id: "conclusion", title: "Conclusión", icon: Lightbulb },
  ]


  return (
    
    <>
    <BackButton />
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header mejorado */}
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-12 mt-8">
            

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
            >
              {/* Categoría mejorada */}
              
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Metadatos y acciones en una sola fila */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  {[
                    { icon: User, text: post.author },
                    { icon: Calendar, text: post.date },
                    { icon: Clock, text: `${post.readTime} de lectura` },
                    { icon: Eye, text: `${post.views} vistas` },
                  ].map(({ icon: Icon, text }, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                    >
                      <Icon className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="text-slate-300 text-sm font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Botones de acción mejorados */}
                <div className="flex items-center gap-3">
                  {[
                    { icon: Share2, label: "Compartir", color: "from-blue-600 to-purple-600" },
                    { icon: Bookmark, label: "Guardar", color: "from-purple-600 to-pink-600" },
                    { icon: Heart, label: "Me gusta", color: "from-pink-600 to-red-600" },
                  ].map(({ icon: Icon, label, color }, index) => (
                    <motion.button
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className={`group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:bg-gradient-to-br hover:${color} text-purple-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/25`}
                      title={label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen destacada mejorada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-700/50 group"
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt="Ilustración de conocimientos y tendencias"
              className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Layout principal con sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar mejorado */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              <div className="sticky top-8 space-y-6">
                {/* Tabla de contenidos mejorada */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                    Tabla de Contenidos
                  </h3>
                  <ul className="space-y-3">
                    {tableOfContents.map(({ id, title, icon: Icon }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`flex items-center p-3 rounded-xl transition-all duration-300 group ${
                            activeSection === id
                              ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 border border-purple-500/30"
                              : "text-slate-300 hover:text-purple-300 hover:bg-slate-800/50"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 mr-3 transition-colors duration-300 ${
                              activeSection === id ? "text-purple-400" : "text-slate-500 group-hover:text-purple-400"
                            }`}
                          />
                          <span className="font-medium">{title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mb-6 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-purple-400" />
                    Nuestros Blogs
                  </h3>
                  <ul className="space-y-4">
                    {blogPosts.map((article, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <a
                          href={`/pages/blog/${article.slug}`}
                          className="block p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 group"
                        >
                           <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                              {article.category}
                            </span>
                          <div className="flex items-start justify-between mb-2">
                           
                          </div>
                          <h4 className="text-sm font-medium text-slate-300 group-hover:text-purple-300 transition-colors duration-300 leading-relaxed">
                            {article.title}
                          </h4>
                            <span className="text-xs text-slate-400">{article.readTime}</span>

                        </a>
                        
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contenido principal mejorado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:col-span-9 order-1 lg:order-2"
            >
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                <div className="prose prose-invert prose-purple max-w-none">
                  {/* Introducción destacada */}
                  <div id="intro" className="scroll-mt-24">
                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 mb-12 border border-purple-500/20">
                      <p className="text-slate-200 text-xl leading-relaxed font-medium m-0">
                        En un entorno digital en constante evolución, mantenernos actualizados en desarrollo web, diseño
                        y marketing digital es la clave para destacar y ofrecer experiencias memorables a nuestros
                        usuarios.
                      </p>
                    </div>
                  </div>

                  {/* Sección 1: Tendencias Web */}
                  <motion.div
                    id="section1"
                    className="scroll-mt-24"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mt-0 mb-8 flex items-center">
                      <TrendingUp className="w-8 h-8 mr-3 text-purple-400" />
                      Tendencias en Desarrollo Web
                    </h2>

                    <div className="space-y-6 mb-10">
                      {[
                        {
                          title: "Aplicaciones Web Progresivas (PWA)",
                          description: "Experiencias rápidas, offline y responsivas que se consolidan en 2025.",
                        },
                        {
                          title: "WebAssembly (WASM)",
                          description:
                            "Permite ejecutar código de alto rendimiento en el navegador para aplicaciones complejas.",
                        },
                        {
                          title: "AR/VR en la web",
                          description: "Experiencias inmersivas en e-commerce, educación y turismo.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-slate-800/30 rounded-xl p-6 border-l-4 border-purple-500 hover:border-pink-500 transition-colors duration-300"
                        >
                          <h3 className="text-lg font-semibold text-purple-200 mb-2">
                            {index + 1}. {item.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed m-0">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Imagen de contenido */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="my-10 rounded-2xl overflow-hidden shadow-xl border border-slate-700/50"
                    >
                      <img
                        src="https://www.mytaskpanel.com/wp-content/uploads/2023/10/consulting-blog-32-768x480.webp?height=400&width=800"
                        alt="Ejemplo de PWA y WASM en acción"
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Sección 2: Diseño Web */}
                  <motion.div
                    id="section2"
                    className="scroll-mt-24"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mt-12 mb-8 flex items-center">
                      <Target className="w-8 h-8 mr-3 text-purple-400" />
                      Características Clave en Diseño Web
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                      {[
                        {
                          title: "Personalización Dinámica",
                          description:
                            "IA que adapta contenido, colores y estructuras en tiempo real según el usuario.",
                          gradient: "from-blue-500/20 to-purple-500/20",
                        },
                        {
                          title: "Microinteracciones",
                          description:
                            "Pequeñas animaciones que mejoran la usabilidad y hacen la navegación más intuitiva.",
                          gradient: "from-purple-500/20 to-pink-500/20",
                        },
                        {
                          title: "Diseño Sostenible",
                          description:
                            "Prácticas eficientes para reducir la huella de carbono digital y optimizar rendimiento.",
                          gradient: "from-pink-500/20 to-red-500/20",
                        },
                      ].map((card, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105`}
                        >
                          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                            {card.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed">{card.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Sección 3: Marketing Digital */}
                  <motion.div
                    id="section3"
                    className="scroll-mt-24"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mt-12 mb-8 flex items-center">
                      <Target className="w-8 h-8 mr-3 text-purple-400" />
                      Implementación en Marketing Digital
                    </h2>

                    <div className="space-y-6 mb-10">
                      {[
                        {
                          title: "IA y personalización",
                          description: "Análisis de datos en tiempo real para campañas más efectivas.",
                        },
                        {
                          title: "Marketing de influencers",
                          description: "Enfoque en micro y nano-influencers para mayor confianza.",
                        },
                        {
                          title: "Búsqueda por voz y visual",
                          description: "Adaptar contenido a consultas conversacionales y visuales.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-4 bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-purple-500/30 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                          <div>
                            <h3 className="text-lg font-semibold text-purple-200 mb-2">{item.title}</h3>
                            <p className="text-slate-300 leading-relaxed">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Cita destacada */}
                    <motion.blockquote
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-purple-500 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-r-2xl pl-8 pr-6 py-6 my-10"
                    >
                      <p className="text-2xl italic text-slate-200 font-medium m-0">
                        "Adoptar estas tendencias fortalecerá tu presencia digital y mejorará la experiencia de
                        usuario."
                      </p>
                    </motion.blockquote>
                  </motion.div>

                  {/* Conclusión */}
                  <motion.div
                    id="conclusion"
                    className="scroll-mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mt-12 mb-8 flex items-center">
                      <Lightbulb className="w-8 h-8 mr-3 text-purple-400" />
                      Conclusión
                    </h2>

                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30">
                      <p className="text-slate-200 leading-relaxed text-lg m-0 font-medium">
                        En 2025, estas tendencias en desarrollo web, diseño y marketing digital son determinantes.
                        Mantenerse al día y aplicarlas permitirá a tu marca destacar y ofrecer experiencias únicas.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}
