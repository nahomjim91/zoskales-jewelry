import { motion } from "framer-motion";

export function Craftsmanship() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/bg/bg-cloth.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-12 ">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-amber-700/40 z-0"></div>

        {/* Left Content Section */}
        <div className="relative z-10  flex flex-col sm:flex-row items-center justify-start gap-6 ">
          {/* Left Image - slightly higher */}
          <motion.div
            className="w-[80%] sm:w-[45%] md:w-[40%] aspect-[3/5] rounded-2xl overflow-hidden shadow-xl -translate-y-6 "
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Diamond Jewelry Design Sketching.webp`}
              alt="Jewelry design sketching"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Right Image - lower and aligned */}
          <motion.div
            className="w-[80%] sm:w-[45%] md:w-[40%] aspect-[3/5] rounded-2xl overflow-hidden shadow-xl translate-y-6 sm:translate-y-20"
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Final Diamond Jewelry Process 4_5.webp`}
              alt="Final diamond jewelry crafting"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Products Section */}
        <motion.div
          className="relative z-10 max-w-full p-4 md:p-0 text-white md:text-right "
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium font-playfair mb-4">
            {" "}
            Craftsmanship
          </h2>{" "}
          <p className="text-base md:text-lg leading-relaxed mb-6 w-full  ">
            {" "}
            At Zoskales Diamonds, each piece begins its journey in the hands of
            our master craftsmen, who combine generations of expertise with
            cutting-edge techniques. Our artisans specialize in selecting only
            the finest diamonds, meticulously evaluating cut, clarity, color,
            and carat to ensure exceptional brilliance.
          </p>{" "}
          <p className="text-base md:text-lg leading-relaxed mb-6 w-full  ">
            We pride ourselves on creating jewelry that transcends trends, with
            each creation undergoing a rigorous 18-step quality control process.
            From initial sketch to final polish, every detail is carefully
            considered, resulting in pieces of extraordinary beauty and
            durability.
          </p>{" "}
          <p className="text-base md:text-lg leading-relaxed mb-6 w-full  ">
            {" "}
            Our signature settings and mountings are designed to showcase the
            natural beauty of our diamonds while ensuring they remain secure for
            a lifetime of wear.
          </p>{" "}
        </motion.div>
      </div>
    </div>
  );
}
