import { motion } from "framer-motion";

export function CraftingJewelry({ onMoreProductsClick }) {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center gap-4 md:gap-6 px-4 md:px-12 lg:px-20 py-16 overflow-hidden max-w-screen-2xl mx-auto">
      {/* Left Image Masonry Layout */}
      <motion.div
        className="flex gap-3 flex-1 md:pl-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {/* Top-left (fade in from top-left) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: -20 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={"/images/Face with Hands Showing Rings - Brown Skin.png"}
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom-left (fade in from bottom-left) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            initial={{ opacity: 0, x: -20, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={"/images/Hand with Diamond and Ruby Rings - Brown Skin.png"}
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pt-10 gap-3">
          {/* Top-right (fade in from top-right) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            initial={{ opacity: 0, x: 50, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, y: -20 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={
                "/images/Ear with Blue Earrings and Diamond Necklace - Brown Skin.png"
              }
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom-right (fade in from bottom-right) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, y: 50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={"/images/Ear with Diamond Drop Earrings - Brown Skin.png"}
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="flex-1 max-w-full  p-4 md:p-0 text-right flex flex-col items-center md:items-end"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4">
          Crafting Jewelery Since 1929
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full">
          As we all know, smaller gifts tend to be the best and there are few
          things as exciting as a jewellery box-shaped present. The best
          jewellery gifts are those that show you truly know the recipient, so,
          if you really care about them, you're going to want to put some
          thought into it
        </p>
        <motion.button
          className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMoreProductsClick}
        >
          More Product
        </motion.button>
      </motion.div>
    </div>
  );
}
