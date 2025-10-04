import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import { ProductCard } from "../cards/ProductCard";

// Example usage component
export default function CategorySection() {
  const categories = [
    {
      id: 1,
      type: "rings",
      name: "Rings",
      image: "/images/products/ring-6.png",
    },
    {
      id: 2,
      type: "couple-rings",
      name: "Couple Rings",
      image: "/images/products/couple-ring.png",
    },
    {
      id: 3,
      type: "earrings",
      name: "Earrings",
      image: "/images/products/red-rubi-earring.png",
    },
  ];

  const handleCardClick = (category) => {
    console.log("Category clicked:", category);
    // Add your navigation or modal logic here
  };

  return (
    <div className="relative py-6 px-6 md:px-12 lg:px-16">
      <div className="absolute inset-0 top-[20%] lg:top-[50%] bg-white z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
