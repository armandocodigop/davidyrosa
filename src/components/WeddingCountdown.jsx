import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Fecha del matrimonio (23 de noviembre de 2024 a las 14:00)
    const weddingDate = new Date("2024-11-23T14:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      // Cálculo de tiempo restante
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      if (difference < 0) {
        // Si ya pasó la fecha
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-6 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8">
        Cuenta regresiva para nuestro matrimonio
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Días */}
        <motion.div
          className="w-36 h-36 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
          variants={itemVariants}
        >
          <span className="text-4xl font-bold text-indigo-600">
            {timeLeft.days}
          </span>
          <span className="text-gray-600">Días</span>
        </motion.div>

        {/* Horas */}
        <motion.div
          className="w-36 h-36 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
          variants={itemVariants}
        >
          <span className="text-4xl font-bold text-indigo-600">
            {timeLeft.hours}
          </span>
          <span className="text-gray-600">Horas</span>
        </motion.div>

        {/* Minutos */}
        <motion.div
          className="w-36 h-36 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
          variants={itemVariants}
        >
          <span className="text-4xl font-bold text-indigo-600">
            {timeLeft.minutes}
          </span>
          <span className="text-gray-600">Minutos</span>
        </motion.div>
      </div>

      <motion.p className="mt-8 text-gray-300 text-lg" variants={itemVariants}>
        ¡Nos vemos el sabado 23 de Noviembre de 2024, no faltes!!
      </motion.p>
    </motion.div>
  );
};

export default WeddingCountdown;
