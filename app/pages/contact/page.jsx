"use client"

import React, { useState } from "react"
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"

export default function Contact() {
  const [state, handleSubmitFormspree] = useForm("mwplqggg")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleSubmitFormspree(e)

    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }
  }

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
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
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
            CONTÁCTANOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
              comenzar
            </span>?
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
          <p className="text-slate-300 text-lg">
            ¿Tienes un proyecto en mente o quieres saber más sobre nuestros servicios? Nos encantaría escucharte.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-slate-800/10 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 hover:border-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5">
              <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
                Información de Contacto
                <span className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-rose-500 to-pink-500 opacity-70"></span>
              </h3>

              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Nuestra Ubicación</h4>
                    <p className="text-slate-400">Trujillo, La Libertad, Perú</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Teléfono</h4>
                    <p className="text-slate-400">+51 927249150</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Correo Electrónico</h4>
                    <p className="text-slate-400">acrux.code.solutions@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700/30">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-3">Horario de Trabajo</h4>
                    <div className="space-y-2 text-slate-400">
                      <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                      <p>Sábado: 10:00 AM - 4:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-slate-800/10 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 hover:border-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5">
              <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
                Envíanos un Mensaje
                <span className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-rose-500 to-pink-500 opacity-70"></span>
              </h3>

              {state.succeeded && (
                <div className="bg-green-900/20 border border-green-500/30 text-green-400 rounded-lg p-4 mb-6">
                  ¡Gracias por tu mensaje! Te responderemos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      Tu Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tus nombres y apellidos"
                      required
                      className="bg-slate-800/30 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-rose-500/50 focus:ring-rose-500/20"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-rose-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                      className="bg-slate-800/30 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-rose-500/50 focus:ring-rose-500/20"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-rose-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="936345123"
                      className="bg-slate-800/30 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-rose-500/50 focus:ring-rose-500/20"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-rose-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Consulta de Proyecto"
                      required
                      className="bg-slate-800/30 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-rose-500/50 focus:ring-rose-500/20"
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="text-rose-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Tu Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tus dudas o proyectos..."
                    rows={5}
                    required
                    className="bg-slate-800/30 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-rose-500/50 focus:ring-rose-500/20"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-rose-400 text-sm mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 group"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

