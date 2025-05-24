"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react"
import { blogPosts } from "@/app/data/blog-posts"

export default function BlogListing() {
  
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

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
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
            NUESTRO BLOG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conocimientos y{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">Tendencias</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
          <p className="text-slate-300 text-sm">
            Compartimos conocimientos, tendencias y consejos sobre desarrollo web, diseño y marketing digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-slate-800/10 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-rose-500/30 transition-all duration-500 group"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="relative">
                <div className="w-full h-52 bg-slate-800 flex items-center justify-center">
                  {/* Placeholder for image */}
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Imagen de portada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg shadow-rose-500/20">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1 text-rose-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1 text-rose-400" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {post.excerpt}
                </p>
                <Link
                  href={`/pages/blog/${post.slug}`}
                  className="inline-flex items-center text-rose-400 hover:text-rose-300 transition-colors duration-300 text-sm font-medium group/btn"
                >
                  <span>Leer más</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/pages/blog"
            className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 font-medium group"
          >
            Ver Todos los Artículos
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
