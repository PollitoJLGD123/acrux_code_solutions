"use client"

import { useState, useRef } from "react"
import { Globe, Smartphone, ShoppingCart, Settings, Search, BarChart, Server } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Diseño y Desarrollo Web",
      description:
        "Creamos sitios web personalizados y corporativos que destacan tu marca y conectan con tu audiencia.",
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      features: [
        "Diseño UI/UX personalizado",
        "Desarrollo frontend y backend",
        "Sitios web responsivos",
        "Optimización de velocidad",
        "Integración de CMS",
      ],
    },
    {
      id: 2,
      title: "Aplicaciones Web",
      description:
        "Desarrollamos aplicaciones web dinámicas y escalables que automatizan procesos y mejoran la eficiencia.",
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      features: [
        "Aplicaciones SPA y PWA",
        "Interfaces intuitivas",
        "Integración con APIs",
        "Sistemas de autenticación",
        "Soluciones en la nube",
      ],
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Implementamos tiendas online completas que impulsan tus ventas y mejoran la experiencia de compra.",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      features: [
        "Tiendas personalizadas",
        "Gestión de inventario",
        "Pasarelas de pago seguras",
        "Optimización de conversión",
        "Integración con ERP/CRM",
      ],
    },
    {
      id: 4,
      title: "Mantenimiento Web",
      description:
        "Ofrecemos servicios de mantenimiento continuo para garantizar el óptimo funcionamiento de tu sitio.",
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      features: [
        "Actualizaciones de seguridad",
        "Copias de seguridad",
        "Monitoreo de rendimiento",
        "Resolución de problemas",
        "Mejoras continuas",
      ],
    },
    {
      id: 5,
      title: "SEO",
      description: "Optimizamos tu presencia online para mejorar tu visibilidad en los motores de búsqueda.",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      features: [
        "Auditoría SEO completa",
        "Optimización on-page",
        "Estrategia de contenidos",
        "Análisis de competencia",
        "Seguimiento de resultados",
      ],
    },
    {
      id: 6,
      title: "Analítica Web",
      description: "Implementamos herramientas de análisis para medir y optimizar el rendimiento de tu sitio web.",
      icon: <BarChart className="w-12 h-12 text-blue-600" />,
      features: [
        "Configuración de Google Analytics",
        "Informes personalizados",
        "Análisis de comportamiento",
        "Seguimiento de conversiones",
        "Recomendaciones de mejora",
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
        behavior: 'smooth' 
      })
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones digitales completas para potenciar tu presencia online y hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                activeService.id === service.id ? "border-2 border-blue-600" : ""
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div ref={selectedServiceRef} className="mt-16 bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
          <div  className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{activeService.title}</h3>
              <p className="text-gray-600 mb-6">{activeService.description}</p>
              <ul className="space-y-3">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Solicitar Información</Button>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por qué elegir nuestro servicio de {activeService.title}?
              </h4>
              <p className="text-gray-600 mb-4">
                Nuestro enfoque personalizado y orientado a resultados nos permite ofrecer soluciones que realmente se
                adaptan a tus necesidades específicas.
              </p>
              <p className="text-gray-600">
                Trabajamos con las tecnologías más avanzadas y seguimos las mejores prácticas de la industria para
                garantizar productos de la más alta calidad.
              </p>
              <div className="mt-6 flex items-center">
                <Server className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">Tecnología de vanguardia</span>
              </div>
              <div className="mt-3 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-gray-700 font-medium">Entrega puntual</span>
              </div>
              <div className="mt-3 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <span className="text-gray-700 font-medium">Garantía de satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

