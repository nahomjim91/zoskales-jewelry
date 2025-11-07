"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.15,
      y: -3,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className="relative py-16 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg/bg-cloth.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-amber-700/40 z-0"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Section - Logo & Description */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="mb-6">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/logo.webp`}
                alt="ZOSKALES Logo"
                className="h-10 md:h-14 w-auto brightness-0 invert"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                ZOSKALES is a distinguished jewelry house dedicated to crafting
                timeless pieces that reflect elegance, sophistication, and
                meaningful expression. With a commitment to exceptional
                craftsmanship, we transform precious diamonds and rare gemstones
                into exquisite designs that celebrate life's most treasured
                moments.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@zoskalesdiamond.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+25111 515 6585</span>
              </div>
              <div className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">
                  Dembel City Center, Addis Ababa, Ethiopia
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* About Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-5 relative inline-block">
                About
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-300 -mb-2"></span>
              </h3>
              <div className="space-y-3">
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Our Brand
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Our Founder
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Terms & Conditions
                </motion.a>
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-5 relative inline-block">
                Help
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-300 -mb-2"></span>
              </h3>
              <div className="space-y-3">
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  FAQ
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Shipping
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Order Status
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Return & Exchange
                </motion.a>
              </div>
            </motion.div>

            {/* Company Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-5 relative inline-block">
                Company
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-300 -mb-2"></span>
              </h3>
              <div className="space-y-3">
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Privacy
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Guides
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Terms of Conditions
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Careers
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Social Media Icons */}
          <div className="flex gap-4 order-2 md:order-1">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition-all duration-300"
              variants={socialVariants}
              whileHover="hover"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition-all duration-300"
              variants={socialVariants}
              whileHover="hover"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition-all duration-300"
              variants={socialVariants}
              whileHover="hover"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </div>

          {/* Copyright Text */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white/70 text-xs md:text-sm order-1 md:order-2">
            <p>© 2025 ZOSKALES, Inc. All Rights Reserved</p>
            <span className="hidden md:inline">•</span>
            <a
              href="https://seilhom.vercel.app"
              target="_blank"
              className="underline"
            >
              Built by Seilhom Kidame
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
