import { motion } from "framer-motion";
import React from "react";

const MainImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <img
        src="/1.jpg"
        alt="Main Image"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

export default MainImage;
