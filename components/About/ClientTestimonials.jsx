import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Get The Latest Beauty Secrets And Trends. Sign Up For Our Newsletter And Stay Informed About All Things Beauty.",
      author: "Selihom Kidane",
      image: "/products/DiamondRing.webp"
    },
    {
      quote: "The craftsmanship and attention to detail in every piece is absolutely stunning. My engagement ring exceeded all expectations.",
      author: "Sarah Mitchell",
      image: "/model_poster/StatementDiamondRing.webp"
    },
    {
      quote: "Working with their team was a dream. They helped me design a custom necklace that perfectly captured my vision.",
      author: "James Chen",
      image: "/products/image11.webp"
    },
    {
      quote: "The quality and artistry of their jewelry is unmatched. Every piece tells a story and becomes a cherished heirloom.",
      author: "Isabella Romano",
      image: "/products/DiamondPendantNecklaceinBurgundyBox.webp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // change this to 5 seconds later
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation variants for the text content
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const authorVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-sceen flex items-center justify-center p-4 md:p-10 lg:p-14 ">
      <div className="relative h-[500px] md:h-[600px] w-full max-w-8xl rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image with transition */}
        <div className="absolute inset-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0  transition-opacity duration-1000 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL+testimonial.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-between py-8 md:py-12 px-4 md:px-8">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-lg tracking-wide"
          >
            What Our Clients Say
          </motion.h1>

          {/* Testimonial Section */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-10 max-w-3xl mx-auto shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.p 
                    variants={quoteVariants}
                    className="text-base md:text-lg lg:text-xl font-light text-white/95 leading-relaxed text-center mb-6"
                  >
                    {testimonials[activeIndex].quote}
                  </motion.p>
                  
                  <motion.p 
                    variants={authorVariants}
                    className="text-sm md:text-base lg:text-lg font-light text-white/80 text-center italic"
                  >
                    — {testimonials[activeIndex].author}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-3 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white w-8 md:w-10' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 border-t-2 border-l-2 border-white/20 rounded-tl-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 md:w-28 md:h-28 border-b-2 border-r-2 border-white/20 rounded-br-2xl pointer-events-none"></div>
      </div>
    </div>
  );
}