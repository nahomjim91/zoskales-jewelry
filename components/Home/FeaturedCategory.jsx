import { motion } from "framer-motion";
import { useState } from "react";
import { ProductCardWithPrice } from "../cards/ProductCard";

export function FeaturedCategory({ onMoreProductsClick }) {
  const products = [
    {
      id: 1,
      name: "Rings",
      newPrice: 999,
      oldPrice: 1299,
      image: "/images/products//ring-1.png",
      type: "ring",
    },
    {
      id: 1,
      name: "Couple Rings",
      newPrice: 999,
      oldPrice: 1299,
      image: "/images/products/couple-ring.png",
      type: "ring",
    },
    {
      id: 1,
      name: "Earings",
      newPrice: 999,
      oldPrice: 1299,
      image: "/images/products/red-rubi-earring.png",
      type: "ring",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Get visible products based on screen size
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  return (
    <div className="relative   md:py-12 md:pl-12 overflow-x-hidden bg-white">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
        {/* Left Content Section */}
        <motion.div
          className="flex-1 max-w-full p-4 md:p-0 "
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium  font-playfair mb-4">
            Diamonds & Engagement Ring
          </h2>

          <p className="text-base md:text-lg  leading-relaxed mb-6 w-full md:w-4/5">
            Experience the beauty of diamond jewellery and find your perfect
            piece for a special occasion. Find the perfect diamond for any
            special occasion, from engagement rings and wedding bands to
            anniversary and Christmas gifts{" "}
          </p>

          <motion.button
            className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl  hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMoreProductsClick}
          >
            More Product
          </motion.button>
        </motion.div>

        {/* Right Products Section */}
        <div className=" hidden md:block relative ">
          {/* Navigation Buttons */}
          <div className="md:absolute -top-16 right-3 flex gap-2 z-10">
            <motion.button
              className="bg-gradient-to-r from-primary/30 to-secondary/60 hover:from-primary hover:to-secondary  text-white rounded-lg px-3  shadow-lg "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
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
              className="bg-gradient-to-r from-primary to-secondary  text-white rounded-lg px-3  shadow-lg "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 md:size-14"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>

          {/* Products Grid */}
          <div className="relative ">
            <div className="flex gap-4 lg:gap-6">
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProductCardWithPrice
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    image={product.image}
                    onClick={() => product.onClick?.(product)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* mobile */}
<div className="md:hidden flex flex-col items-center gap-3 w-full px-3 overflow-hidden">
             <div className="w-full ">
            <div className="flex gap-4">
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProductCardWithPrice
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    image={product.image}
                    onClick={() => product.onClick?.(product)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
            <div className=" flex gap-2 z-10">
            <motion.button
              className="bg-gradient-to-r from-primary/30 to-secondary/60 hover:from-primary hover:to-secondary  text-white rounded-lg px-3  shadow-lg "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
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
              className="bg-gradient-to-r from-primary to-secondary  text-white rounded-lg px-3  shadow-lg "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 md:size-14"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>

        </div>
      </div>
    </div>
  );
}
