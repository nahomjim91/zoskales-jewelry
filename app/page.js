"use client";
import CategorySection from "@/components/Home/CategorySection";
import CategoryShowcase from "@/components/Home/CategoryShowcase";
import { CraftingJewelry } from "@/components/Home/CraftingJewelry";
import { FeaturedCategory } from "@/components/Home/FeaturedCategory";
import { FeaturedJewelry } from "@/components/Home/FeaturedJewelry";
import ImageCollage from "@/components/Home/ImageCollage";
import Newslatter from "@/components/Home/Newslatter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-lip w-full  "
      style={{
        backgroundImage: "url('/images/bg/diamond_earrings.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 flex px-6 sm:px-8 md:px-12 lg:px-16 py-28 bg-mber-500">
        <div className="">
          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl xl:text-9xl font-bold md:font-medium  font-playfair mb-3 md:mb-6 w-full text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover Your Sparkle
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-xl lg:text-2xl font-sans mb-6 md:mb-10 text-white/90 leading-tight max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Welcoming In The Spring Season With An Enchanting Emerald, Diamond &
            Gold Dace With Earrings.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a
              href="/collections"
              className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold hover:from-secondary hover:to-primary transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.a>

            <motion.a
              href="/collections"
              className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold hover:bg-white/20 transition-all duration-300 shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.a>
          </motion.div>
        </div>
      </div>

      <CategorySection />
      <FeaturedCategory />
      <CategoryShowcase title={"Find The Perfect Diamond For"} />
      <FeaturedJewelry />
      <CategoryShowcase title={"Find The Perfect Rubys For"}  stoneType="Ruby"/>
      <CraftingJewelry />
      <ImageCollage />
      <Newslatter/>
    </div>
  );
}
