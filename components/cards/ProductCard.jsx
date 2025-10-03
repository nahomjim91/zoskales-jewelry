import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight ,Heart, ShoppingCart } from 'lucide-react';

export function ProductCardWithPrice({ id, type, name, newPrice, oldPrice, image, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div 
      className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group h-[250px] md:h-[350px]"
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-light-pink/80"></div>
      
      {/* Favorite Button */}
      <motion.button
        className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
        onClick={handleFavoriteClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart 
          className={`w-5 h-5 transition-colors duration-300 ${
            isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-gray-700'
          }`}
        />
      </motion.button>
      
      {/* Image - Absolute Positioned */}
      <motion.img 
        src={image} 
        alt={name}
        className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl p-8 md:p-12"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col justify-between h-full">
        {/* Category Label */}
        <div>
          <p className="text-sm md:text-base text-gray-700 font-medium">Categories</p>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-playfair">
            {name}
          </h3>
        </div>

        {/* Spacer for center spacing */}
        <div className="flex-1"></div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between gap-4">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              ${newPrice}
            </span>
            {oldPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${oldPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <motion.button 
            className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full px-4 md:px-6 py-3 flex items-center gap-2 text-gray-900 font-medium shadow-lg group-hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="hidden sm:inline">Add To Cart</span>
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductCard({ id, type, name, image, onClick }) {
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
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col justify-between h-full">
        {/* Category Label */}
        <div>
          <p className="text-sm md:text-base text-gray-700 font-medium">Categories</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-playfair">
            {name}
          </h3>
        </div>

        {/* Spacer for center spacing */}
        <div className="flex-1"></div>

        {/* Button */}
        <motion.button 
          className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full px-6 py-3 flex items-center gap-2 text-primary font-medium shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Check More Products
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
}
