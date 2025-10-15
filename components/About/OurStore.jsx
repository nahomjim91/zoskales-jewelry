import { motion } from "framer-motion";

export function OurStore() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-white flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-12 ">
      {/* Left Content Section */}
      <motion.div
        className="flex-1 max-w-full p-4 md:p-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.h2
          variants={headingVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4"
        >
          Our Store
        </motion.h2>

        {/* Mobile Image */}
        <motion.div
          className="md:hidden flex-1 rounded-2xl overflow-hidden shadow-md mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/OurStore.webp`}
            alt="Woman wearing pearl necklace and earrings"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Paragraph 1 */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed mb-6 w-full"
        >
          Step into our elegant showroom, where luxury meets comfort in an
          atmosphere designed to enhance your jewelry selection experience. Our
          private consultation areas offer a discreet environment to explore our
          collections or discuss custom creations.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed mb-6 w-full"
        >
          Located in the historic district, our flagship store combines classic
          architecture with modern amenities. The intimate lighting and
          thoughtful design showcase our pieces in their best light while
          creating a welcoming space for clients to explore at their leisure.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed mb-6 w-full"
        >
          We invite you to experience the Zoskales difference, where
          personalized service and exceptional craftsmanship come together in a
          setting as refined as our jewelry.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={itemVariants}
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.div>

      {/* Right Products Section */}
      <div className="hidden md:flex flex-1 gap-6">
        {/* Desktop Image */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/OurStore.webp`}
            alt="Woman wearing pearl necklace and earrings"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
