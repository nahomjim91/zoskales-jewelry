import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

// Example usage component
export default function CategorySection() {
 const categories = [
    {
      id: 1,
      type: 'rings',
      name: 'Rings',
      image: '/images/products/ring-6.png',
    },
    {
      id: 2,
      type: 'couple-rings',
      name: 'Couple Rings',
      image: '/images/products/couple-ring.png',
    },
    {
      id: 3,
      type: 'earrings',
      name: 'Earrings',
      image: '/images/products/red-rubi-earring.png',
    },
  ];

  const handleCardClick = (category) => {
    console.log('Category clicked:', category);
    // Add your navigation or modal logic here
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
      

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                id={category.id}
                type={category.type}
                name={category.name}
                image={category.image}
                onClick={() => handleCardClick(category)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}