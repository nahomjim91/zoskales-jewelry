import { motion } from "framer-motion";

export function OurStore() {
  return (
    <div className="relative bg-white flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-12 ">
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
          Our Store
        </h2>{" "}
        <motion.div
          className="md:hidden flex-1 rounded-2xl overflow-hidden shadow-md mb-6"
          initial={{ opacity: 0, x: 50, y: -50 }} // top-right
          whileInView={{ opacity: 1, x: 0, y: 0 }} // center
          exit={{ opacity: 0, x: 50, y: -50 }} // fade out same direction
          viewport={{ once: false, amount: 0.2 }} // animate each time it scrolls in
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/OurStore.png"
            alt="Woman wearing pearl necklace and earrings"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full md:">
          {" "}
          Step into our elegant showroom, where luxury meets comfort in an
          atmosphere designed to enhance your jewelry selection experience. Our
          private consultation areas offer a discreet environment to explore our
          collections or discuss custom creations.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full ">
          Located in the historic district, our flagship store combines classic
          architecture with modern amenities. The intimate lighting and
          thoughtful design showcase our pieces in their best light while
          creating a welcoming space for clients to explore at their leisure.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full ">
          {" "}
          We invite you to experience the Zoskales difference, where
          personalized service and exceptional craftsmanship come together in a
          setting as refined as our jewelry.
        </p>
        <motion.a
            href="/contact"
          className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          // onClick={onMoreProductsClick}
        >
          Contact Us
        </motion.a>
      </motion.div>


      {/* Right Products Section */}
      <div className="hidden md:flex flex-1 gap-6">
        {/* First Image - fade in from top-right */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 50, y: -50 }} // top-right
          whileInView={{ opacity: 1, x: 0, y: 0 }} // center
          exit={{ opacity: 0, x: 50, y: -50 }} // fade out same direction
          viewport={{ once: false, amount: 0.2 }} // animate each time it scrolls in
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/OurStore.png"
            alt="Woman wearing pearl necklace and earrings"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
