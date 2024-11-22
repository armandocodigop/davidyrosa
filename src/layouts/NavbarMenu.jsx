import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-gray-300 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-0 w-full bg-blue-300 shadow-lg rounded-b-lg"
          >
            <div className="px-4 py-2 space-y-2">
              <a
                href="/"
                className="block text-black text-xl hover:text-indigo-600"
              >
                Inicio
              </a>
              <a
                href="/matrimonio"
                className="block text-black text-xl hover:text-indigo-600"
              >
                Matrimonio
              </a>
              <a
                href="/programa"
                className="block text-black text-xl hover:text-indigo-600"
              >
                Programa
              </a>
              <a
                href="/bloques"
                className="block text-black text-xl hover:text-indigo-600"
              >
                Bloques
              </a>
              <a
                href="/grupos"
                className="block text-black text-xl hover:text-indigo-600"
              >
                Grupos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMenu;
