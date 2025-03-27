import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tendencias de Diseño Web para 2023",
      excerpt: "Descubre las tendencias de diseño web que dominarán este año y cómo implementarlas en tu sitio.",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 Mar 2023",
      author: "Ana García",
      category: "Diseño Web",
    },
    {
      id: 2,
      title: "Cómo Mejorar la Velocidad de Carga de tu Sitio Web",
      excerpt:
        "Aprende técnicas efectivas para optimizar el rendimiento de tu sitio web y mejorar la experiencia de usuario.",
      image: "/placeholder.svg?height=400&width=600",
      date: "28 Feb 2023",
      author: "Miguel Torres",
      category: "Rendimiento",
    },
    {
      id: 3,
      title: "Guía Completa de SEO para E-commerce",
      excerpt:
        "Todo lo que necesitas saber para optimizar tu tienda online y mejorar su visibilidad en los motores de búsqueda.",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 Feb 2023",
      author: "Laura Martínez",
      category: "SEO",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Blog</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compartimos conocimientos, tendencias y consejos sobre desarrollo web, diseño y marketing digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  <span className="mr-2">Leer más</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">Ver Todos los Artículos</Button>
        </div>
      </div>
    </section>
  )
}

