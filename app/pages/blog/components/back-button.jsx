"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function BackButton() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const button = (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-20 right-12 z-[9999] bg-slate-900/90 backdrop-blur-md rounded-full px-4 py-2 border border-slate-700/50 shadow-2xl pointer-events-auto"
    >
      <Link href="/pages/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300">
        <ArrowRight className="mr-2 h-5 w-5 transform rotate-180" />
        <span className="font-semibold">Volver a Blogs</span>
      </Link>
    </motion.div>
  )

  return createPortal(button, document.body)
}
