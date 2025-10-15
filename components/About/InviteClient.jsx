import { motion } from "framer-motion";

export default function InviteClient() {
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

  const headingVariants = {
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

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cornerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-10">
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_URL}/image (10).webp')`,
            backgroundAttachment: "fixed",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Heading */}
            <motion.h1
              variants={headingVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font- text-white mb-4 md:mb-6 drop-shadow-lg tracking-wide"
            >
              Experience Zoskales Diamonds
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={subheadingVariants}
              className="text-sm md:text-base lg:text-lg text-white/95 mb-8 md:mb-10 max-w-4xl mx-auto drop-shadow-md px-4 leading-relaxed"
            >
              We invite you to visit our showroom and discover the perfect piece
              to mark life's most significant moments. Our expert consultants
              are ready to guide you through our collections or help create a
              custom design that tells your unique story.
            </motion.p>

            <motion.a
              variants={buttonVariants}
              href="/contact"
              className="inline-block bg-white rounded-full px-8 md:px-12 py-3 md:py-4 text-primary text-base md:text-lg font-semibold transition-all shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <motion.div
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"
        ></motion.div>
        <motion.div
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 border-b-2 border-r-2 border-white/30 rounded-br-2xl"
        ></motion.div>
      </div>
    </div>
  );
}
