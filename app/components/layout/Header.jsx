"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        Acrux Code <span className="text-2xl font-bold text-gray-600">Solutions</span>
                    </span>
                    
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {["Inicio", "Nosotros", "Servicios", "Portafolio", "Blog", "Contacto"].map((item, index) => (
                        <Link key={index} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                            {item}
                        </Link>
                    ))}
                </nav>

                <a href="#contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
                    Iniciar
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
                    <div className="items-center container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {["Inicio", "Nosotros", "Servicios", "Portafolio", "Blog", "Contacto"].map((item, index) => (
                            <Link
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <a href="#contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-2 rounded-md block transition">
                            Iniciar
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}