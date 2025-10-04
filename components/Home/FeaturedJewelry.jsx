import { motion } from "framer-motion";

export function FeaturedJewelry({ onMoreProductsClick }) {
  return (
    <div className=" bg-white flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-12 ">
      {/* Left Content Section */}
      <motion.div
        className="flex-1 max-w-full p-4 md:p-0 "
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {" "}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4">
          {" "}
          Get the best diamonds for your business{" "}
        </h2>{" "}
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full md:w-4/5">
          {" "}
          Experience the beauty of diamond jewellery and find your perfect piece
          for a special occasion. Find the perfect diamond for any special
          occasion, from engagement rings and wedding bands to anniversary and
          Christmas gifts{" "}
        </p>{" "}
        <motion.button
          className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMoreProductsClick}
        >
          {" "}
          More Product{" "}
        </motion.button>{" "}
      </motion.div>

      {/* Right Products Section */}
    <div className="flex-1 flex gap-6">
  {/* First Image - fade in from top-left */}
  <motion.div
    className="flex-1 rounded-2xl overflow-hidden shadow-md"
    initial={{ opacity: 0, x: -50, y: -50 }}   // top-left
    whileInView={{ opacity: 1, x: 0, y: 0 }}   // center
    exit={{ opacity: 0, x: -50, y: -50 }}      // fade out same direction
    viewport={{ once: false, amount: 0.2 }}    // animate each time it scrolls in
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      src="/images/imagek-6.png"
      alt="Woman wearing pearl necklace and earrings"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Second Image - fade in from bottom-right */}
  <motion.div
    className="flex-1 rounded-2xl overflow-hidden shadow-md"
    initial={{ opacity: 0, x: 50, y: 50 }}     // bottom-right
    whileInView={{ opacity: 1, x: 0, y: 0 }}   // center
    exit={{ opacity: 0, x: 50, y: 50 }}        // fade out same direction
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    <img
      src="/images/image-4.png"
      alt="Hand with diamond ring and turquoise necklace"
      className="w-full h-full object-cover"
    />
  </motion.div>
</div>
    </div>
  );
}
