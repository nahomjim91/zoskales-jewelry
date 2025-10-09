import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function ConsultationBooking() {
  const handleScheduleCall = () => {
    window.location.href = "tel:+251115156585";
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg/bg-cloth.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-red-900/50 to-red-800/60 z-0"></div>

        {/* Content Section */}
        <motion.div
          className="relative z-10 max-w-7xl text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light font-playfair mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BOOK A PRIVATE CONSULTATION
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the exceptional service of Zoskales Diamonds with a
            personalized private consultation. Our jewelry experts will guide
            you through our exclusive collections and help you find the perfect
            piece for your special occasion.
          </motion.p>
          
          <motion.button
            onClick={handleScheduleCall}
            className="bg-white text-red-900 rounded-full px-8 py-3 text-base md:text-lg font-semibold transition-all shadow-xl inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            SCHEDULE NOW
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}