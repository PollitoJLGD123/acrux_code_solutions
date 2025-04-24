"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Code, Monitor, Smartphone, User, Heart, Shield, Coffee, Lightbulb } from "lucide-react"

export default function About() {
    const values = [
        {
            title: "Pasión",
            description: "Amamos lo que hacemos y ponemos el corazón en cada proyecto, por pequeño que sea",
            icon: <Heart className="h-5 w-5" />,
        },
        {
            title: "Transparencia",
            description: "Te explicamos todo en lenguaje sencillo, sin tecnicismos confusos ni letras pequeñas",
            icon: <Lightbulb className="h-5 w-5" />,
        },
        {
            title: "Confiabilidad",
            description: "Cumplimos lo que prometemos. Si decimos que estará listo el martes, estará listo el martes",
            icon: <Shield className="h-5 w-5" />,
        },
        {
            title: "Cercanía",
            description: "Trabajamos codo a codo contigo, entendiendo tu negocio como si fuera el nuestro",
            icon: <Coffee className="h-5 w-5" />,
        },
    ]

    const services = [
        {
            title: "Páginas Web",
            description:
                "Creamos sitios web efectivos que funcionan en celulares, tablets y computadoras. Perfectos para dar a conocer tu negocio.",
            icon: <Code className="h-6 w-6" />,
        },
        {
            title: "Sistemas de Gestión",
            description:
                "Aplicaciones que te ayudan a controlar ventas, inventario, clientes y más. Olvídate de las hojas de cálculo y libretas.",
            icon: <Monitor className="h-6 w-6" />,
        },
        {
            title: "Apps Móviles",
            description:
                "Aplicaciones para celular que conectan con tus clientes o facilitan el trabajo de tu equipo, incluso sin conexión a internet.",
            icon: <Smartphone className="h-6 w-6" />,
        },
        {
            title: "Capacitación",
            description:
                "Te enseñamos a usar las herramientas digitales. No te dejamos solo con un manual, sino que te acompañamos hasta que domines el sistema.",
            icon: <User className="h-6 w-6" />,
        },
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

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
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"></div>
                <div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-5 animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>

            <div className="container mx-auto px-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-4">
                        QUIÉNES SOMOS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Conoce a{" "}
                        <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
                            Acrux Code Solutions
                        </span>
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Somos un equipo jóvenes profesionales apasionados por la tecnología, con una misión clara: hacer que la
                        tecnología sea accesible y útil para negocios como el tuyo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
                            Nuestra Historia
                            <span className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-rose-500 to-pink-500 opacity-70"></span>
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            💡 En Acrux Code Solutions creemos que la tecnología debe ser simple, accesible y estar al alcance de
                            todos. Nacimos de una idea compartida entre amigos apasionados por la innovación: poner al servicio de los
                            negocios todo lo que aprendimos del sector. Hoy, combinamos experiencia y cercanía para ofrecer soluciones
                            digitales que impulsan el crecimiento sin complicaciones ni altos costos.
                        </p>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            🌱 Pequeños pasos, grandes metas: Aunque somos nuevos como empresa, cada uno de nosotros ha dedicado años
                            a estudiar y explorar diferentes tecnologías. Hemos trabajado en proyectos emocionantes y hemos aprendido
                            de grandes desafíos. Ahora, queremos usar nuestro conocimiento y energía para apoyar a empresas y
                            emprendedores como tú.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8 justify-center items-center mx-auto">
                            <motion.div
                                className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center hover:border-rose-500/30 transition-all duration-500 shadow-lg shadow-rose-500/5"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                            >
                                <div className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text mb-1">
                                    100%
                                </div>
                                <div className="text-slate-300 text-sm">Compromiso con tu Éxito</div>
                            </motion.div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["Sitios Web", "Sistemas de Gestión", "Apps Móviles", "Capacitación", "Soporte Técnico"].map(
                                (tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-slate-800/30 text-slate-300 rounded-full border border-slate-700/50 hover:border-rose-500/30 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ),
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-slate-800/10 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-rose-500/30 transition-all duration-500 group"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:from-rose-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                                    <div className="text-rose-400 group-hover:text-rose-300 transition-colors duration-300">
                                        {value.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-rose-300 transition-colors duration-300">
                                    {value.title}
                                </h4>
                                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24"
                >
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-rose-300 text-xs font-medium mb-4">
                            NUESTROS SERVICIOS
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Soluciones a tu Medida</h2>
                        <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
                        <p className="text-slate-300">
                            Ofrecemos servicios adaptados a las necesidades reales de pequeños y medianos negocios, con precios
                            accesibles y resultados concretos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/10 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-rose-500/30 transition-all duration-500 group"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px -15px rgba(236, 72, 153, 0.15)",
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:from-rose-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                                    <div className="text-rose-400 group-hover:text-rose-300 transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300">
                                    {service.title}
                                </h4>
                                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 bg-slate-800/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 hover:border-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
                                Por Qué Confiar en Nosotros
                                <span className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-rose-500 to-pink-500 opacity-70"></span>
                            </h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Sabemos que confiar en una empresa nueva puede generar dudas. Por eso, nos comprometemos a ser
                                completamente transparentes en todo el proceso y a demostrarte con hechos que puedes contar con
                                nosotros.
                            </p>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                No te pedimos que confíes en nosotros solo por lo que decimos. Te invitamos a conocernos, a ver nuestro
                                trabajo y a hablar con nosotros. Estamos tan seguros de la calidad de nuestro trabajo que ofrecemos
                                garantía de satisfacción en todos nuestros proyectos.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Sin contratos largos ni letras pequeñas",
                                    "Presupuestos claros sin costos ocultos",
                                    "Plazos de entrega realistas que cumplimos",
                                    "Garantía de satisfacción en cada proyecto",
                                    "Soporte continuo después de la entrega",
                                ].map((item, index) => (
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
                                        <span className="text-slate-300">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-slate-900 rounded-2xl p-1 border border-slate-800/50">
                                <Image
                                    src="/about/image_about.jpeg"
                                    width={600}
                                    height={400}
                                    alt="Equipo de Acrux Code Solutions trabajando"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
