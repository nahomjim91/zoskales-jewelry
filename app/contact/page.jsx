"use client";

import BoutiqueFAQ from "@/components/Contact/BoutiqueFAQ";
import BoutiqueInfo from "@/components/Contact/BoutiqueInfo";
import ConsultationBooking from "@/components/Contact/ConsultationBooking";
import ContactForm from "@/components/Contact/ContactForm";
import FindBoutique from "@/components/Contact/FindBoutique";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div
        className="relative min-h-screen overflow-x-hidden w-full flex items-center justify-center"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_URL}/OurStore.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 text-center max-w-6xl">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 text-white leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact Us
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base lg:text-lg font-light text-white/90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We looks forward to assisting you with your fine jewelry needs.
          </motion.p>
        </div>
      </div>
      <BoutiqueInfo/>
      <ContactForm/>
      <ConsultationBooking/>
      <FindBoutique/>
      <BoutiqueFAQ/>
    </>
  );
}
