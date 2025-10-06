import { motion } from "framer-motion";

export function OurStory() {
  return (
    <div className="relative bg-white flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-12 ">
      {/* Left Content Section */}
      <motion.div
        className="flex-1 max-w-full p-4 md:p-0"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {" "}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4">
          {" "}
          Our Story
        </h2>{" "}
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full md:">
          {" "}
          Founded in 1929 by master jeweler Elias Zoskales, our family-owned
          business has maintained a tradition of excellence for over nine
          decades. What began as a small atelier in the heart of the city has
          evolved into a renowned name in luxury jewelry, while staying true to
          our founding principles of quality, craftsmanship, and personalized
          service.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full ">
          Through generations, the Zoskales family has passed down not only
          techniques and skills but also an unwavering commitment to ethical
          sourcing and exceptional design. Each piece that bears our name
          represents our heritage and our promise of uncompromising quality.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full ">
          {" "}
          Today, we continue to blend time-honored traditions with contemporary
          innovation, creating timeless pieces that celebrate life's most
          precious moments.
        </p>
      </motion.div>

      {/* Right Products Section */}
      <div className="flex-1 flex gap-6">
        {/* First Image - fade in from top-left */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: -50, y: -50 }} // top-left
          whileInView={{ opacity: 1, x: 0, y: 0 }} // center
          exit={{ opacity: 0, x: -50, y: -50 }} // fade out same direction
          viewport={{ once: false, amount: 0.2 }} // animate each time it scrolls in
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/products/image (1).png"
            alt="Woman wearing pearl necklace and earrings"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
