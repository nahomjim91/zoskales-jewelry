import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function ImageCollage({ onFollowClick }) {
  const images = [
    "/images/model_poster/Chandelier Diamond Earrings.png",
    "/images/model_poster/Diamond Bracelet.png",
    "/images/model_poster/Diamond Hoop Earrings.png",
    "/images/model_poster/Diamond Pendant Necklace.png",
    "/images/model_poster/Diamond Tennis Necklace.png",
    "/images/model_poster/DiamondV-Necklace-NoText.png",
    "/images/model_poster/EarwithDiamondDropEarrings-BrownSkin.png",
    "/images/model_poster/Gold Filigree Ruby Ring - No Text.png",
    "/images/model_poster/image (11).png",
    "/images/model_poster/image-4u.png",
    "/images/model_poster/imagek-6.png",
    "/images/model_poster/Multi-Layer Diamond Necklace.png",
    "/images/model_poster/Pearl and Diamond Earrings.png",
    "/images/model_poster/Ruby Diamond Nature-Inspired Ring.png",
    "/images/model_poster/Ruby Earrings and Diamond Necklace Set - No Text.png",
    "/images/model_poster/Statement Diamond Ring.png",
    "/images/model_poster/ThisringisntjustapieceofjewelrytsapromiseaforeverasparklecraftedbyZo.jpg",
    "/images/model_poster/Three-Stone Ruby Ring - No Text.png",
    "/images/model_poster/💃New earrings from Zoskales = instant confidence upgrade. Love is rare, real, and radiant—just .jpg",
    "/images/model_poster/1234.jpg",
    "/images/model_poster/💎Inspired by nature,perfectedbyZoskalesDiamonds.Carryapieceofnaturesbeauty,framedi(1).jpg",
  ];

  const [displayImages, setDisplayImages] = useState({
    mobile: images.slice(0, 12),
    tablet: images.slice(0, 18),
    desktop: images,
  });

  useEffect(() => {
    // Shuffle helper
    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    // Only shuffle on client side
    setDisplayImages({
      mobile: shuffleArray(images).slice(0, 12),
      tablet: shuffleArray(images).slice(0, 18),
      desktop: shuffleArray(images),
    });
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Image Grid - Mobile (12 images) */}
      <motion.div
        className="grid grid-cols-3 md:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayImages.mobile.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden relative aspect-square"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: Math.random() * 0.5
            }}
          >
            <img
              src={src}
              alt={`Collage item ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Image Grid - Tablet (18 images) */}
      <motion.div
        className="hidden md:grid lg:hidden grid-cols-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayImages.tablet.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden relative aspect-square"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: Math.random() * 0.5
            }}
          >
            <img
              src={src}
              alt={`Collage item ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Image Grid - Desktop (21 images) */}
      <motion.div
        className="hidden lg:grid grid-cols-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayImages.desktop.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden relative aspect-square"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: Math.random() * 0.5
            }}
          >
            <img
              src={src}
              alt={`Collage item ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Centered Overlay with Follow Buttons */}
      <div className="absolute bg-secondary/30 inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white rounded-full shadow-2xl px-8 py-4 pointer-events-auto">
          <div className="flex items-center gap-6">
            {/* Instagram Follow Button */}
            <a
              href="https://instagram.com/zoskalesdiamonds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              onClick={onFollowClick}
            >
              <Instagram className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            <span className="text-4xl md:text-5xl font-medium font-playfair">Follow</span>
            {/* Pinterest Follow Button */}
            <a
              href="https://pinterest.com/zoskalesdiamonds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              onClick={onFollowClick}
            >
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}