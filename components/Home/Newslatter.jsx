import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cornerVariants = {
    topLeft: {
      hidden: { opacity: 0, x: -20, y: -20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut"
        }
      }
    },
    bottomRight: {
      hidden: { opacity: 0, x: 20, y: 20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut"
        }
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8 lg:p-10">
      <motion.div
        className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/model_poster/image.png')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
          <motion.div
            className="text-center max-w-5xl mx-auto"
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
              Sign Up To Our Newsletter
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={paragraphVariants}
              className="text-sm md:text-base lg:text-lg text-white/95 mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md px-4 leading-relaxed"
            >
              Get The Latest Beauty Secrets And Trends. Sign Up For Our
              Newsletter And Stay Informed About All Things Beauty
            </motion.p>

            {/* Email Input Section */}
            {!isSubmitted ? (
              <motion.div
                variants={formVariants}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto"
              >
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Your email"
                  className="flex-1 px-5 md:px-7 py-3 md:py-4 rounded-full bg-gradient-to-l from-primary/40 to-secondary/40 backdrop-blur-sm border-0 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-sm md:text-base shadow-lg"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary rounded-full px-8 md:px-12 py-3 md:py-4 text-white text-base md:text-lg font-semibold transition-all shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                >
                  Submit
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 max-w-xl mx-auto shadow-lg"
              >
                <p className="text-green-700 font-medium text-sm md:text-base">
                  ✓ Thank you for subscribing!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <motion.div
          variants={cornerVariants.topLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"
        ></motion.div>
        <motion.div
          variants={cornerVariants.bottomRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 border-b-2 border-r-2 border-white/30 rounded-br-2xl"
        ></motion.div>
      </motion.div>
    </div>
  );
}