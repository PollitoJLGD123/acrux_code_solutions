"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Calendar,
  User,
  ArrowLeft,
  Tag,
  Search,
  TrendingUp,
  Target,
  Zap,
  LinkIcon,
  FileText,
  Settings,
  Award,
  Clock,
  Eye,
  ChevronRight,
} from "lucide-react"
import { useRef } from "react"
import { blogPosts } from "@/app/data/blog-posts"

export default function BlogLayoutSEO(props) {
  const containerRef = useRef(null)

  const post = props.post

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const seoSections = [
    {
      id: "fundamentos",
      title: "Fundamentos de SEO",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "keywords",
      title: "Investigación de Palabras Clave",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "onpage",
      title: "SEO On-Page",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "tecnico",
      title: "SEO Técnico",
      icon: Settings,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "linkbuilding",
      title: "Link Building",
      icon: LinkIcon,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "contenido",
      title: "Contenido de Calidad",
      icon: Award,
      color: "from-pink-500 to-rose-500",
    },
  ]

  const tags = ["SEO", "E-commerce", "Marketing", "Ventas", "Optimización", "Conversiones"]


  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header mejorado */}
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-12 text-center mt-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link
                href="/pages/blog"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 mb-8 group bg-slate-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-semibold">Volver a Blogs</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
            >
              {/* Categoría con icono */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-blue-400/40 text-blue-200 text-sm font-semibold mb-6 shadow-lg"
              >
                <Search className="w-4 h-4 mr-2" />
                {post.category}
              </motion.div>

              {/* Título principal */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Extracto */}
              <p className="text-slate-300 text-xl md:text-2xl mb-8 leading-relaxed font-medium">{post.excerpt}</p>

              {/* Metadatos mejorados */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {[
                  { icon: User, text: post.author },
                  { icon: Calendar, text: post.date },
                  { icon: Clock, text: `${post.readTime} de lectura` },
                  { icon: Eye, text: `${post.views} vistas` },
                ].map(({ icon: Icon, text }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                  >
                    <Icon className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-slate-300 text-sm font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen destacada mejorada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl overflow-hidden mb-16 shadow-2xl border border-slate-700/50 group relative"
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt="SEO E-commerce Hero"
              className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Overlay con información */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-2">Optimización SEO Completa</h3>
                <p className="text-slate-300 text-sm">Estrategias probadas para mejorar el ranking de tu e-commerce</p>
              </div>
            </div>
          </motion.div>

          {/* Layout principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contenido principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                <div className="prose prose-invert prose-blue max-w-none">
                  {/* Introducción destacada */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 mb-12 border border-blue-500/20">
                    <p className="text-slate-200 text-xl leading-relaxed font-medium m-0">
                      En esta guía completa aprenderás desde los fundamentos del SEO hasta técnicas avanzadas para
                      optimizar tu tienda online, aumentar tu tráfico orgánico y mejorar conversiones.
                    </p>
                  </div>

                  {/* Índice visual de secciones */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {seoSections.map(({ id, title, icon: Icon, color }, index) => (
                      <motion.a
                        key={id}
                        href={`#${id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`group flex items-center p-4 rounded-xl bg-gradient-to-r ${color}/10 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold group-hover:text-blue-200 transition-colors duration-300">
                            {title}
                          </h3>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Sección 1: Fundamentos */}
                  <motion.div
                    id="fundamentos"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-8 flex items-center">
                      <Search className="w-8 h-8 mr-3 text-blue-400" />
                      Fundamentos de SEO
                    </h2>

                    <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 mb-8">
                      <ul className="space-y-4 text-slate-300">
                        {[
                          "Entender cómo funcionan los motores de búsqueda y su algoritmo",
                          "Importancia de la indexación y rastreo de tu sitio",
                          "Elementos clave: título, meta descripciones y encabezados",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Sección 2: Keywords */}
                  <motion.div
                    id="keywords"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mb-8 flex items-center">
                      <Target className="w-8 h-8 mr-3 text-purple-400" />
                      Investigación de Palabras Clave
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20">
                        <p className="text-slate-200 leading-relaxed m-0">
                          Utiliza herramientas como Google Keyword Planner, Ahrefs o SEMrush para identificar términos
                          con alto volumen y baja competencia relevantes para tus productos.
                        </p>
                      </div>

                      <div className="bg-slate-800/30 rounded-xl p-6 border-l-4 border-purple-500">
                        <p className="text-slate-300 leading-relaxed m-0">
                          Segmenta palabras clave en categorías de intención: informativa, transaccional y navegación.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Sección 3: SEO On-Page */}
                  <motion.div
                    id="onpage"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-200 mb-8 flex items-center">
                      <FileText className="w-8 h-8 mr-3 text-green-400" />
                      SEO On-Page
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500/20">
                        <p className="text-slate-200 leading-relaxed mb-4">
                          Optimiza títulos, meta descripciones y URLs amigables. Asegúrate de usar la palabra clave
                          principal en el H1 y varios subtítulos (H2, H3).
                        </p>
                        <p className="text-slate-200 leading-relaxed m-0">
                          Mejora la experiencia de usuario con tiempos de carga rápidos y diseño responsive.
                        </p>
                      </div>
                    </div>

                    {/* Imagen de ejemplo */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="my-10 rounded-2xl overflow-hidden shadow-xl border border-slate-700/50"
                    >
                      <img
                        src="https://www.marketinet.com/wp-content/uploads/2024/01/Group-1-1.png"
                        alt="Ejemplo de SEO On-Page en e-commerce"
                        className="w-[800px] h-[400px] object-cover"
                      />
                      <div className="bg-slate-800/80 backdrop-blur-sm p-4 border-t border-slate-700/50">
                        <p className="text-sm text-slate-300 italic m-0">
                          Proceso SEO
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Sección 4: SEO Técnico */}
                  <motion.div
                    id="tecnico"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-red-200 mb-8 flex items-center">
                      <Settings className="w-8 h-8 mr-3 text-orange-400" />
                      SEO Técnico
                    </h2>

                    <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 mb-8">
                      <ul className="space-y-4 text-slate-300">
                        {[
                          "Implementación de un sitemap.xml y archivo robots.txt",
                          "Optimización de la velocidad de la página (carga diferida, compresión de imágenes)",
                          "Uso de datos estructurados (schema.org) para rich snippets",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Punto clave destacado */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-l-4 border-orange-500 p-8 rounded-r-2xl"
                    >
                      <div className="flex items-start">
                        <Zap className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">Punto Clave</h3>
                          <p className="text-slate-300 m-0">
                            Asegúrate de que todas las páginas de producto sean accesibles al rastreador y tengan una
                            velocidad de carga inferior a 2 segundos.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Secciones restantes con diseño similar */}
                  <motion.div
                    id="linkbuilding"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200 mb-8 flex items-center">
                      <LinkIcon className="w-8 h-8 mr-3 text-indigo-400" />
                      Link Building
                    </h2>

                    <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                      <p className="text-slate-200 leading-relaxed m-0">
                        Genera enlaces de calidad mediante colaboraciones con blogs, reseñas de productos y menciones en
                        medios relevantes de tu nicho.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    id="contenido"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-200 mb-8 flex items-center">
                      <Award className="w-8 h-8 mr-3 text-pink-400" />
                      Contenido de Calidad
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
                        <ul className="space-y-4 text-slate-300">
                          {[
                            "Publica guías de compra y reseñas detalladas de productos",
                            "Usa multimedia: imágenes optimizadas, videos y tablas comparativas",
                            "Actualiza contenido antiguo para mantenerlo relevante",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 rounded-2xl p-6 border border-pink-500/20">
                        <h3 className="text-xl font-bold text-white mb-4">Herramientas y Recursos</h3>
                        <p className="text-slate-200 leading-relaxed m-0">
                          Herramientas recomendadas: Google Search Console, GTmetrix, Screaming Frog y plugins SEO para
                          tu CMS.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Conclusión */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-8">
                      Conclusión
                    </h2>

                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                      <p className="text-slate-200 leading-relaxed text-lg m-0 font-medium">
                        Implementar esta guía paso a paso te ayudará a posicionar tu e-commerce en los primeros
                        resultados, atraer más tráfico y aumentar tus ventas orgánicas.
                      </p>
                    </div>
                  </motion.div>

                  {/* Biografía del autor mejorada */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        AT
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{post.author}</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Especialistas en SEO técnico con experiencia optimizando tiendas en línea.
                          Ayudamos a empresas a aumentar su visibilidad orgánica y mejorar su posicinamiento.
                        </p>
                   
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar mejorado */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-8 space-y-6">
             

                {/* Etiquetas mejoradas */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-6 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-blue-400" />
                    Etiquetas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-600 hover:to-purple-600 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 cursor-pointer border border-slate-600 hover:border-transparent"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                    Nuestros Blogs
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.map((article, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <Link href={`/pages/blog/${article.slug}`} className="block">
                          <div className="relative rounded-xl overflow-hidden mb-3 border border-slate-700/50 group-hover:border-blue-500/50 transition-colors duration-300">
                            <img
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2">
                              <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                                {article.category}
                              </span>
                            </div>
                            <div className="absolute bottom-2 right-2">
                              <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-xs rounded-full">
                                {article.readTime}
                              </span>
                            </div>
                          </div>
                          <h4 className="text-slate-300 group-hover:text-blue-300 transition-colors duration-300 text-sm font-semibold leading-relaxed">
                            {article.title}
                          </h4>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
