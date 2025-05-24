"use client"
import { CheckCircle2, XCircle, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Componente de notificación personalizado
const Notification = ({ type, title, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000); // La notificación desaparecerá después de 5 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  const getColors = () => {
    if (type === "success") {
      return {
        bg: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
        border: "border-green-500/30",
        icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
        iconBg: "bg-green-500/20",
      };
    } else {
      return {
        bg: "bg-gradient-to-r from-rose-500/10 to-red-500/10",
        border: "border-rose-500/30",
        icon: <XCircle className="h-6 w-6 text-rose-500" />,
        iconBg: "bg-rose-500/20",
      };
    }
  };

  const { bg, border, icon, iconBg } = getColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-5 right-5 z-50 flex items-start p-4 rounded-lg backdrop-blur-lg ${bg} border ${border} shadow-lg max-w-md`}
    >
      <div className={`${iconBg} rounded-full p-2 mr-3 flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-200 text-sm">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="ml-4 h-6 w-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/80 hover:text-white flex-shrink-0"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};


export default Notification;