"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { ExternalLink, X } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce de Moda",
      category: "e-commerce",
      image: "/placeholder.svg?height=600&width=800",
      description: "Tienda online completa con catálogo de productos, carrito de compras y pasarela de pagos.",
      link: "#",
    },
    {
      id: 2,
      title: "Portal Corporativo",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Sitio web corporativo con múltiples secciones, blog integrado y panel de administración.",
      link: "#",
    },
    {
      id: 3,
      title: "Aplicación de Gestión",
      category: "app",
      image: "/placeholder.svg?height=600&width=800",
      description: "Sistema de gestión interna para empresa de logística con múltiples módulos.",
      link: "#",
    },
    {
      id: 4,
      title: "Plataforma Educativa",
      category: "app",
      image: "/placeholder.svg?height=600&width=800",
      description: "Plataforma de cursos online con sistema de suscripciones y contenido multimedia.",
      link: "#",
    },
    {
      id: 5,
      title: "Tienda de Electrónicos",
      category: "e-commerce",
      image: "/placeholder.svg?height=600&width=800",
      description: "E-commerce especializado en productos electrónicos con comparador de características.",
      link: "#",
    },
    {
      id: 6,
      title: "Blog de Viajes",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Blog de viajes con mapa interactivo, galería de imágenes y sistema de comentarios.",
      link: "#",
    },
  ]

  const categories = ["todos", "web", "app", "e-commerce"]
  const [filter, setFilter] = useState("todos")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === "todos" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Portafolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explora algunos de nuestros proyectos más destacados y descubre cómo hemos ayudado a nuestros clientes a
            alcanzar sus objetivos.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  Ver Detalles
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={1200}
                  height={800}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProject.title}</h3>
                <p className="text-sm text-blue-600 mb-4">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </p>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Características del Proyecto</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Diseño personalizado y responsive</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Optimización para motores de búsqueda</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Integración con sistemas de terceros</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Panel de administración personalizado</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <span className="mr-2">Visitar Proyecto</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">Ver Más Proyectos</Button>
        </div>
      </div>
    </section>
  )
}

