import { useState } from "react";
import { motion } from "framer-motion";

export default function InviteClient() {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-10">
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/image (10).png')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font- text-white mb-4 md:mb-6 drop-shadow-lg tracking-wide">
            Experience Zoskales Diamonds
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base lg:text-lg text-white/95 mb-8 md:mb-10 max-w-4xl mx-auto drop-shadow-md px-4 leading-relaxed">
              We invite you to visit our showroom and discover the perfect piece
              to mark life's most significant moments. Our expert consultants
              are ready to guide you through our collections or help create a
              custom design that tells your unique story.
            </p>

            <motion.button
              className="bg-white rounded-full px-8 md:px-12 py-3 md:py-4 text-primary text-base md:text-lg font-semibold transition-all shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
      </div>
    </div>
  );
}
