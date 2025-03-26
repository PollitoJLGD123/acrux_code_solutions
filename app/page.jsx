'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformamos Ideas en <span className="text-blue-300">Experiencias Digitales</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
            Somos expertos en desarrollo web, creando soluciones digitales a medida que impulsan el crecimiento de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">View Our Work</Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg blur opacity-75"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <Image
                  src="/../public/home/fondo_home.jpeg"
                  width={500}
                  height={400}
                  alt="Web development illustration"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Button({ children, variant = 'solid', ...props }) {
  const baseStyles = 'px-6 py-3 text-lg font-medium rounded-lg transition-all';
  const variants = {
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-white text-white hover:bg-white/10',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
