import { motion } from "framer-motion";

export function OurExpert() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-primary mb-12"
        >
          Meet Our Experts
        </motion.h2>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="w-full md:w-[70%] mx-auto rounded-2xl overflow-hidden shadow-lg"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/OurExpert.webp`}
              alt="Jewelry experts consulting with clients in elegant showroom"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-6 md:text-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed"
            >
              Our team of passionate professionals brings together diverse
              expertise in gemology, design, and customer service. Led by the
              third generation of the Zoskales family, our staff includes
              certified gemologists, master jewelers with decades of experience,
              and design consultants who guide you through creating your perfect
              piece.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed"
            >
              We believe that exceptional jewelry begins with exceptional
              people, which is why our team undergoes continuous education to
              remain at the forefront of industry innovations while honoring
              traditional craftsmanship.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default OurExpert;
