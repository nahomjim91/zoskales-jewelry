import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";

export function ProductCardWithPrice({ product, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      className="relative bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 w-full h-full"
      whileHover={{ scale: 1.02 }}
      onClick={() => onAddToCart(product)}
    >
      {/* Favorite Button */}
      <motion.button
        className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-md transition-all duration-300"
        onClick={handleFavoriteClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart
          className={`w-4 h-4 transition-colors duration-300 ${
            isFavorite ? "fill-primary stroke-primary" : "stroke-gray-600"
          }`}
        />
      </motion.button>

      {/* Image */}
      <div className="flex justify-center items-center h-[180px] sm:h-[220px] mb-4">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-auto h-full object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Text Content */}
      <div className="space-y-2 text-center">
        {/* Category */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            {product.category}
          </span>
          <span className="text-xs text-gray-500">{product.subcategory}</span>
        </div>

        {/* Name */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold font-playfair text-gray-900 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Stone + Size */}
        <p className="text-xs sm:text-sm text-gray-600">
          Stone: <span className="font-medium">{product.stoneType}</span> | Size:{" "}
          <span className="font-medium">{product.size}</span>
        </p>
      </div>

      {/* Price + Button */}
      <div className="flex flex-col items-center gap-3 mt-4">
        {/* Prices */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price}</span>
          {product.oldPrice && (
            <span className="text-base sm:text-lg text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <ShoppingCart className="w-4 h-4" />
          Add To Cart
        </motion.button>
      </div>
    </motion.div>
  );
}

export function ProductCard({ id, type, name, image, onClick, link }) {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group h-[350px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-light-pink "></div>

      {/* Image - Absolute Positioned */}
      <motion.img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl p-8 md:p-12"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col justify-between h-full">
        {/* Category Label */}
        <div>
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Categories
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-playfair">
            {name}
          </h3>
        </div>

        {/* Spacer for center spacing */}
        <div className="flex-1"></div>

        {/* Button */}
        <motion.a
          href={link}
          className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full px-6 py-3 flex items-center gap-2 text-primary font-medium shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Check More Products
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </div>
    </motion.div>
  );
}
