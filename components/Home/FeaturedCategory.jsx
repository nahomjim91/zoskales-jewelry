import { motion } from "framer-motion";
import { useState } from "react";
import { ProductCardWithPrice } from "../cards/ProductCard";
import useCart from "@/hooks/useCart";

export function FeaturedCategory() {
  const products = [
    {
      id: 1,
      name: "Ring",
      price: 999,
      oldPrice: 1299,
      image: "images/products/ring-1.png",
      type: "ring",
    },
    {
      id: 2,
      name: "Couple Rings",
      price: 1099,
      oldPrice: 1399,
      image: "images/products/couple-ring.png",
      type: "ring",
    },
    {
      id: 3,
      name: "Earrings",
      price: 899,
      oldPrice: 1199,
      image: "images/products/red-ruby-earring.png",
      type: "earring",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { addItem } = useCart();

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
  
  const handleAddToCart = (product) => {
    addItem(product);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const navButtonsVariants = {
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
    <div className="relative pb-12 md:py-24 md:pl-12 overflow-x-hidden bg-white">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Content Section */}
        <motion.div
          className="flex-1 max-w-full p-4 md:p-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4"
          >
            Diamonds & Engagement Ring
          </motion.h2>

          <motion.p
            variants={paragraphVariants}
            className="text-base md:text-lg leading-relaxed mb-6 w-full md:w-4/5"
          >
            Experience the beauty of diamond jewellery and find your perfect
            piece for a special occasion. Find the perfect diamond for any
            special occasion, from engagement rings and wedding bands to
            anniversary and Christmas gifts
          </motion.p>

          <motion.a
            variants={buttonVariants}
            href="/collections"
            className="inline-block bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-3 text-white text-base md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Product
          </motion.a>
        </motion.div>

        {/* Desktop Products Section */}
        <div className="hidden md:block relative">
          {/* Navigation Buttons */}
          <motion.div
            variants={navButtonsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="md:absolute -top-16 right-3 flex gap-2 z-10"
          >
            <motion.button
              className="bg-gradient-to-r from-primary/30 to-secondary/60 hover:from-primary hover:to-secondary text-white rounded-lg px-3 shadow-lg"
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
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg px-3 shadow-lg"
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
          </motion.div>

          {/* Products Grid */}
          <div className="relative">
            <div className="flex gap-4 lg:gap-6">
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentIndex}-${index}`}
                  className="w-[280px] lg:w-[320px] flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProductCardWithPrice
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Products Section */}
        <div className="md:hidden w-full px-4">
          {/* Products Carousel */}
          <div className="overflow-x-auto scrollbar-  -mx-4 px-4 ">
            <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentIndex}-${index}`}
                  className="w-[280px] min-w-[280px] flex-shrink-0 snap-center mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProductCardWithPrice
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}