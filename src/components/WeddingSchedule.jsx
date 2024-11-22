import { motion } from "framer-motion";
import { useState } from "react";

const WeddingSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("saturday");

  const saturdaySchedule = [
    {
      time: "20:00",
      description:
        "Concentración de los Integrantes de la Banda Internacional America en el local 'Teatro Municipal de Pazña' ubicado en la plaza principal.",
    },
    {
      time: "22:00",
      description:
        "Visperas y Luminarias 'Teatro Municipal de Pazña' ubicado en la plaza principal.",
    },
  ];

  const sundaySchedule = [
    {
      time: "08:00",
      description:
        "Tradicional Kalapari ofrecido por los pasantes 2024 en el local 'Teatro Municipal de Pazña' ubicado en la plaza principal.",
    },
    {
      time: "11:00",
      description:
        "Solemne misa de honor a la Mamita Santa Cecilia en la iglesia Señor del gran Poder.",
    },
    {
      time: "12:00",
      description:
        "Gran recorrido con la demostracion coreografica de todos los bloques que nos acompañan rumbo al local 'Teatro Municipal de Pazña' ubicado en la plaza principal.",
    },
    {
      time: "12:45",
      description:
        "Brindis en Honor a la Mamita Santa Cecilia con todos los integrantes de la Banda Internacional America en el local 'Teatro Municipal de Pazña' ubicado en la plaza principal.",
    },
    {
      time: "13:00",
      description:
        "Almuerzo ofrecido por los pasantes 2024 a todos los invitados en general.",
    },
    {
      time: "14:30",
      description:
        "Agradecimientos a los Bloques que nos acompañan de parte de los Pasantes 2024.",
    },
    {
      time: "16:00",
      description: "Gran fiesta amenizada por los mejores grupos del momento.",
    },
    {
      time: "20:00",
      description: "Dejame a los nuevos Pasantes 2025.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Programa General
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full ${
              selectedDay === "saturday"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedDay("saturday")}
          >
            Sábado 23 de Noviembre
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full ${
              selectedDay === "sunday"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedDay("sunday")}
          >
            Domingo 24 de Noviembre
          </motion.button>
        </div>

        <div className="space-y-6">
          {selectedDay === "saturday" ? (
            <div className="space-y-4">
              {saturdaySchedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-yellow-700 to-yellow-500 p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-start">
                    <span className="text-xl font-semibold text-white min-w-[30px]">
                      {item.time}
                    </span>
                    <div className="ml-8 min-h-[3rem] flex-1 bg-gray-500/20 rounded-md flex items-center px-4 py-2">
                      <span className="text-black break-words">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sundaySchedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-yellow-700 to-yellow-500 p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-start">
                    <span className="text-xl font-semibold text-white min-w-[30px]">
                      {item.time}
                    </span>
                    <div className="ml-8 min-h-[3rem] flex-1 bg-gray-500/20 rounded-md flex items-center px-4 py-2">
                      <span className="text-black break-words">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingSchedule;
