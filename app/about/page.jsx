"use client";

import { Craftsmanship } from "@/components/About/Craftsmanship";
import { OurStory } from "@/components/About/OurStory";
import {OurStore } from "@/components/About/OurStore";
import { OurExpert } from "@/components/About/OurExpert";
import { motion } from "framer-motion";
import ClientTestimonials from "@/components/About/ClientTestimonials";
import InviteClient from "@/components/About/InviteClient";

export default function About() {
return (
    <>
    <div
      className="relative min-h-screen overflow-x-hidden w-full flex items-center justify-center"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_URL}/bg/diamond_wedding_rings.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
       {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 text-center max-w-6xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 text-white leading-tight tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR LEGACY OF EXCELLENCE SINCE 2002
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base lg:text-lg font-light text-white/90 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Crafting exquisite diamond jewelry with passion, precision, and unparalleled expertise for generations.
        </motion.p>
      </div>
    </div>
      <OurStory/>
      <Craftsmanship/>
      <OurExpert/>
      <ClientTestimonials/>
      <OurStore/>
      <InviteClient/>
      </>
  );
}
