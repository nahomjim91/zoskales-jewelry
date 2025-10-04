"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCardWithPrice } from "../cards/ProductCard";

export default function CategoryShowcase({
  title = "Find The Perfect Diamond For",
}) {
     const products = [
    { id: 1, name: "Rings", newPrice: 999, oldPrice: 1299, image: "/images/products/ring-5.png", type: "ring" },
    { id: 2, name: "Necklace", newPrice: 849, oldPrice: 1149, image: "/images/products/necklace-1.png", type: "necklace" },
    { id: 3, name: "Earrings", newPrice: 999, oldPrice: 1299, image: "/images/products/earring-4.png", type: "earrings" },
    { id: 4, name: "Couple Rings", newPrice: 999, oldPrice: 1299, image: "/images/products/couple-ring.png", type: "ring" },
    { id: 5, name: "Rings", newPrice: 999, oldPrice: 1299, image: "/images/products/ring-5.png", type: "ring" },
    { id: 6, name: "Necklace", newPrice: 849, oldPrice: 1149, image: "/images/products/necklace-1.png", type: "necklace" },
    { id: 7, name: "Earrings", newPrice: 999, oldPrice: 1299, image: "/images/products/earring-4.png", type: "earrings" },
  ];

  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth < 640 ? 1.5 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + visible < products.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // width calculation (no clones now)
const containerWidth = Math.min(300, (products.length * 100) / visible);
const cardWidth = Math.min(100, 100 / products.length);

  return (
    <div
      className="relative py-16 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg/bg-cloth.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
          {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-amber-700/40 z-0"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
            {title}
          </h2>

          <div className="hidden sm:flex gap-4">
            <motion.button
              className="bg-white/30 text-white rounded-lg px-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 md:size-14"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />{" "}
              </svg>{" "}
            </motion.button>

            <motion.button
              className="bg-white text-white rounded-lg px-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 md:size-14 text-primary"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />{" "}
              </svg>{" "}
            </motion.button>
          </div>
        </div>

        {/* Outer wrapper MUST hide overflow on desktop so slides are clipped */}
        <div className="overflow-hidden">
          {/* Mobile scrollable */}
          <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {products.map((product, idx) => (
              <div key={idx} className="flex-shrink-0 snap-center w-[80%]">
                <ProductCardWithPrice {...product} />
              </div>
            ))}
          </div>

          {/* Desktop sliding carousel */}
                   <motion.div
            className="hidden sm:flex gap-4 md:gap-8 items-stretch"
            style={{ width: `${containerWidth}%` }}
            animate={{ x: `-${(currentIndex * 100) / products.length}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <AnimatePresence initial={false}>
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  style={{ width: `${cardWidth}%` }}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <ProductCardWithPrice {...product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
