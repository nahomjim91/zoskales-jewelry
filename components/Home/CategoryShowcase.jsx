"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { jewelryData } from "@/app/collections/products";
import useCart from "@/hooks/useCart";
import { ProductCardWithPrice } from "../cards/ProductCard";

export default function CategoryShowcase({
  title = "Find The Perfect Diamond For",
  stoneType = "Diamond",
}) {
  const products = jewelryData
    .filter((item) => {
      return item.stoneType === stoneType;
    })
    .slice(0, 10);


  const { addItem } = useCart();

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
  
  const handleAddToCart = (product) => {
    addItem(product);
  };

  const containerWidth = Math.min(300, (products.length * 100) / visible);
  const cardWidth = Math.min(100, 100 / products.length);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

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
          <motion.h2
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-white font-serif"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="hidden sm:flex gap-4"
          >
            <motion.button
              className="bg-white/30 text-white rounded-lg px-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 md:size-14"
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            <motion.button
              className="bg-white text-white rounded-lg px-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              disabled={currentIndex + visible >= products.length}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 md:size-14 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          {/* Mobile scrollable */}
          <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 snap-center w-[80%]"
              >
                <ProductCardWithPrice
                  product={product}
                  onAddToCart={handleAddToCart}
                />
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
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  style={{ width: `${cardWidth}%` }}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <ProductCardWithPrice
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}