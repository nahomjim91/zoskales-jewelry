import { motion } from "framer-motion";

export function CraftingJewelry() {
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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const paragraphVariants = {
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

  const imageVariants = {
    topLeft: {
      hidden: { opacity: 0, x: -20, y: -20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
    bottomLeft: {
      hidden: { opacity: 0, x: -20, y: 50 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
    topRight: {
      hidden: { opacity: 0, x: 50, y: -20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
    bottomRight: {
      hidden: { opacity: 0, x: 50, y: 50 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <div className="relative bg-white w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 px-4 md:px-12 lg:px-20 py-16 overflow-hidden mx-auto z-20">
      {/* Left Image Masonry Layout */}
      <motion.div
        className="flex gap-3 flex-1 md:pl-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {/* Top-left (fade in from top-left) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            variants={imageVariants.topLeft}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Face with Hands Showing Rings - Brown Skin.webp`}
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom-left (fade in from bottom-left) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            variants={imageVariants.bottomLeft}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Hand with Diamond and Ruby Rings - Brown Skin.webp`}
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
            variants={imageVariants.topRight}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Ear with Blue Earrings and Diamond Necklace - Brown Skin.webp`}
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom-right (fade in from bottom-right) */}
          <motion.div
            className="overflow-hidden shadow-md h-[200px] w-[150px] md:h-[250px] md:w-[200px]"
            variants={imageVariants.bottomRight}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Ear with Diamond Drop Earrings - Brown Skin.webp`}
              alt="Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="flex-1 max-w-full p-4 md:p-0 text-right flex flex-col items-center md:items-end"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={headingVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4"
        >
          Crafting Jewelery Since 1929
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          className="text-base md:text-lg leading-relaxed mb-6 w-full"
        >
          As we all know, smaller gifts tend to be the best and there are few
          things as exciting as a jewellery box-shaped present. The best
          jewellery gifts are those that show you truly know the recipient, so,
          if you really care about them, you're going to want to put some
          thought into it
        </motion.p>

        <motion.a
          variants={buttonVariants}
          href="/collections"
          className="inline-block bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-3 text-white text-base md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More Product
        </motion.a>
      </motion.div>
    </div>
  );
}
