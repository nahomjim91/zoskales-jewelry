import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BoutiqueInfo() {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Visit Our Boutique */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-primary"
              variants={iconVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <MapPin className="w-8 h-8 text-amber-100" strokeWidth={2} />
            </motion.div>
            <motion.h3 
              className="text-xl font-bold mb-4 uppercase tracking-wide text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Visit Our Boutique
            </motion.h3>
            <motion.p 
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Dembel City Center,<br />
              Addis Ababa, Ethiopia
            </motion.p>
          </motion.div>

          {/* Opening Hours */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-primary"
              variants={iconVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Clock className="w-8 h-8 text-amber-100" strokeWidth={2} />
            </motion.div>
            <motion.h3 
              className="text-xl font-bold mb-4 uppercase tracking-wide text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Opening Hours
            </motion.h3>
            <motion.div 
              className="text-gray-700 leading-relaxed space-y-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>Monday–Friday: 10:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: By Appointment Only</p>
            </motion.div>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-primary"
              variants={iconVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Phone className="w-8 h-8 text-amber-100" strokeWidth={2} />
            </motion.div>
            <motion.h3 
              className="text-xl font-bold mb-4 uppercase tracking-wide text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Details
            </motion.h3>
            <motion.div 
              className="text-gray-700 leading-relaxed space-y-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>+25111 515 6585</p>
              <p>info@zoskalesdiamond.com</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}