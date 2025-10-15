import { motion } from "framer-motion";

export default function FindBoutique() {
  const openDirections = () => {
    // Opens Google Maps with the store location
    const address = "Dembel City Center, Addis Ababa, Ethiopia";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapsUrl, "_blank");
  };

  const mapVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <motion.div
            className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={mapVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1234567890!2d38.8100855!3d8.9831138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d8a25ad4b9%3A0xb35e919b58b2159d!2sZoskales%20Diamond%20Store!5e0!3m2!1sen!2set!4v999999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZOSKALES Diamond Store Location"
            ></iframe>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
          >
            <motion.h2
              className="text-4xl font-playfair mb-6 text-primary"
              variants={itemVariants}
            >
              Find Our Boutique
            </motion.h2>

            {/* Store Image */}
            <motion.div
              className="w-full h-[200px] rounded-lg overflow-hidden shadow-md mb-6"
              variants={imageVariants}
            >
              <motion.img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/OurStore.webp`}
                alt="ZOSKALES Diamond Store Interior"
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-2 text-black leading-relaxed"
              variants={itemVariants}
            >
              <p>
                Located in the vibrant heart of Addis Ababa's premier shopping
                destination, Dembel City Center, ZOSKALES Diamond Store offers
                an elegant and intimate setting to discover our extraordinary
                diamond collections.
              </p>
              <p>
                Convenient customer parking and attentive service ensure a
                seamless and luxurious shopping experience.
              </p>
            </motion.div>

            {/* Get Directions Button */}
            <motion.button
              onClick={openDirections}
              className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              GET DIRECTIONS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
