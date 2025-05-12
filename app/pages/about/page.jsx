"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Facebook, Heart, Shield, Coffee, Lightbulb, Github } from "lucide-react"

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
                            NUESTROS COLABORADORES
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Colaboradores</h2>
                        <div className="h-px w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 opacity-50"></div>
                        <p className="text-slate-300">
                            Nuestro equipo dedicado a brindar soluciones innovadoras y eficientes para tus necesidades tecnológicas.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="w-full lg:w-1/3 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden flex flex-col items-center pt-8"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-pink-500"></div>
                            <div className="relative mb-4">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-700 p-1 bg-slate-800">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src="/about/colabs/user.png"
                                            alt="Colaborador 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center w-full">
                                <h3 className="text-xl font-bold text-white mb-1">Fabian Ruiz</h3>
                                <p className="text-rose-300 text-sm mb-3">Desarrollador Backend</p>
                                <div className="h-px w-12 bg-gradient-to-r from-rose-500/30 to-pink-500/30 mx-auto mb-3"></div>
                                <p className="text-slate-300 text-sm mb-4">
                                    Desarrollador backend con sólida experiencia en Laravel y Next.js. Apasionado por la tecnología y por crear soluciones eficientes en el entorno web.
                                </p>

                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-rose-500/30 bg-white/10 p-0.5">
                                            <img
                                                src="/about/uni/unt.png"
                                                alt="Logo Universidad"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-rose-200 text-xs font-medium">Universidad Nacional de Trujillo</p>
                                            <p className="text-slate-400 text-xs text-left">Ingeniería de Sistemas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-slate-700/50">
                                    <p className="text-rose-200 text-xs font-medium mb-3">Lenguajes & Tecnologías</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <span className="px-3 py-1 bg-red-500/80 rounded-full text-xs text-rose-200 border border-rose-500/30">Laravel</span>
                                        <span className="px-3 py-1 bg-sky-500/90 rounded-full text-xs text-rose-200 border border-rose-500/30">SQL</span>
                                        <span className="px-3 py-1 bg-emerald-600 rounded-full text-xs text-rose-200 border border-rose-500/30">Vue.js</span>
                                        <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-rose-200 border border-rose-500/30">Next.js</span>
                                        <span className="px-3 py-1 bg-red-400/70 rounded-full text-xs text-rose-200 border border-blue-500/30">Java</span>
                                    </div>
                                </div>


                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-300 mr-2">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                            <path d="M9 22v-4h6v4"></path>
                                            <path d="M8 6h.01"></path>
                                            <path d="M16 6h.01"></path>
                                            <path d="M12 6h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M16 10h.01"></path>
                                            <path d="M16 14h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M8 14h.01"></path>
                                        </svg>
                                        <p className="text-rose-200 text-xs font-medium">Trabajando actualmente en</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-3 border border-rose-500/20">
                                        <p className="text-white text-sm font-medium">Neon House Led (NHL)</p>
                                        <p className="text-slate-300 text-xs">Desarrollador Backend</p>
                                        <div className="mt-2 flex items-center justify-center">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                                Disponible para proyectos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-3 mb-5">
                                <a href="https://www.linkedin.com/in/fabian-ruiz-santos-bb8762328/" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/FabianRS123" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100004147097373" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/fabianruizsantos/" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="w-full lg:w-1/3 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden flex flex-col items-center pt-8 transform lg:scale-110 relative z-10 shadow-xl shadow-rose-500/10"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-pink-500"></div>
                            <div className="relative mb-4">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-rose-500/50 p-1 bg-slate-800">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src="/about/colabs/photo_jose.jpg"
                                            alt="Colaborador Principal"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center w-full">
                                <h3 className="text-2xl font-bold text-white mb-1">Jose L. Gutierrez</h3>
                                <p className="text-rose-300 text-sm mb-3">Desarrollador Web</p>
                                <div className="h-px w-16 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-4"></div>
                                <p className="text-slate-300 text-sm mb-4">
                                    Desarrollador full stack con dominio de tecnologías como .NET, Node.js y Vue.js. Muy interesado en modelos de inteligencia artificial y en el desarrollo de aplicaciones web modernas.
                                </p>

                                <div className="mt-5 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-rose-500/30 bg-white/10 p-0.5">
                                            <img
                                                src="/about/uni/unt.png"
                                                alt="Logo Universidad"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-rose-200 text-xs font-medium">Universidad Nacional de Trujillo</p>
                                            <p className="text-slate-400 text-xs text-left">Ingeniería de Sistemas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-slate-700/50">
                                    <p className="text-rose-200 text-xs font-medium mb-3">Lenguajes & Tecnologías</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <span className="px-3 py-1 bg-sky-400/50 rounded-full text-xs text-rose-200 border border-blue-500/30">.NET</span>
                                        <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-rose-200 border border-rose-500/30">Next.js</span>
                                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-rose-200 border border-rose-500/30">TypeScript</span>
                                        <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-xs text-rose-200 border border-rose-500/30">Python</span>
                                        <span className="px-3 py-1 bg-green-500/90 rounded-full text-xs text-rose-200 border border-rose-500/30">Node.js</span>
                                    </div>
                                </div>
                                <div className="mt-5 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-300 mr-2">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                            <path d="M9 22v-4h6v4"></path>
                                            <path d="M8 6h.01"></path>
                                            <path d="M16 6h.01"></path>
                                            <path d="M12 6h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M16 10h.01"></path>
                                            <path d="M16 14h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M8 14h.01"></path>
                                        </svg>
                                        <p className="text-rose-200 text-xs font-medium">Trabajando actualmente en</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-3 border border-rose-500/20">
                                        <p className="text-white text-sm font-medium">T-Money ABDAK</p>
                                        <p className="text-slate-300 text-xs">Desarrollador Full Stack & Team Lead</p>
                                        <div className="mt-2 flex items-center justify-center">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                                Disponible para proyectos
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-3 mt-5">
                                    <a href="https://www.linkedin.com/in/jose-luis-gutierrez-diaz-b06677312/" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                    <a href="https://github.com/PollitoJLGD123" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </a>
                                    <a href="https://www.facebook.com/joseluis.gutierrezdiaz.79" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a href="https://www.instagram.com/jose_luis_jlgd/" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="w-full lg:w-1/3 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden flex flex-col items-center pt-8"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-pink-500"></div>
                            <div className="relative mb-4">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-700 p-1 bg-slate-800">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src="/about/colabs/user.png"
                                            alt="Colaborador 3"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center w-full">
                                <h3 className="text-xl font-bold text-white mb-1">Kevin E. Parimango</h3>
                                <p className="text-rose-300 text-sm mb-3">Desarrollador Backend</p>
                                <div className="h-px w-12 bg-gradient-to-r from-rose-500/30 to-pink-500/30 mx-auto mb-3"></div>
                                <p className="text-slate-300 text-sm mb-4">
                                    Desarrollador backend con experiencia en Spring y Next.js, enfocado en el diseño de arquitecturas escalables y el uso de microservicio.
                                </p>
                                <div className="mt-5 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-rose-500/30 bg-white/10 p-0.5">
                                            <img
                                                src="/about/uni/unt.png"
                                                alt="Logo Universidad"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-rose-200 text-xs font-medium">Universidad Nacional de Trujillo</p>
                                            <p className="text-slate-400 text-xs text-left">Ingeniería de Sistemas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-slate-700/50">
                                    <p className="text-rose-200 text-xs font-medium mb-3">Lenguajes & Tecnologías</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <span className="px-3 py-1 bg-red-400/70 rounded-full text-xs text-rose-200 border border-blue-500/30">Java</span>
                                        <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-rose-200 border border-rose-500/30">Next.js</span>
                                        <span className="px-3 py-1 bg-red-500/80 rounded-full text-xs text-rose-200 border border-rose-500/30">Laravel</span>
                                        <span className="px-3 py-1 bg-green-500/90 rounded-full text-xs text-rose-200 border border-rose-500/30">Spring</span>
                                        <span className="px-3 py-1 bg-sky-500/90 rounded-full text-xs text-rose-200 border border-rose-500/30">SQL</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-300 mr-2">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                            <path d="M9 22v-4h6v4"></path>
                                            <path d="M8 6h.01"></path>
                                            <path d="M16 6h.01"></path>
                                            <path d="M12 6h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M16 10h.01"></path>
                                            <path d="M16 14h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M8 14h.01"></path>
                                        </svg>
                                        <p className="text-rose-200 text-xs font-medium">Trabajando actualmente en</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-3 border border-rose-500/20">
                                        <p className="text-white text-sm font-medium">Neon House Led (NHL)</p>
                                        <p className="text-slate-300 text-xs">Desarrollador Backend</p>
                                        <div className="mt-2 flex items-center justify-center">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                                Disponible para proyectos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-3 mb-5">
                                <a href="https://www.linkedin.com/in/kevin-e-parimango-g%C3%B3mez-832315174/" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/AleFine" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-slate-700/70 flex items-center justify-center text-rose-300 hover:bg-rose-500/40 transition-colors" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
                                </a>
                            </div>
                        </motion.div>
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
