import { motion } from "framer-motion";

export function OurExpert() {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-primary mb-12">
          Meet Our Experts
        </h2>

        {/* Content Grid */}
        <div className="flex flex-col items-center gap-8 ">
          {/* Image Section */}
          <div className="w-full md:w-[70%] mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/OurExpert.png"
              alt="Jewelry experts consulting with clients in elegant showroom"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 md:text-center">
            <p className="text-base md:text-lg leading-relaxed ">
              Our team of passionate professionals brings together diverse
              expertise in gemology, design, and customer service. Led by the
              third generation of the Zoskales family, our staff includes
              certified gemologists, master jewelers with decades of experience,
              and design consultants who guide you through creating your perfect
              piece.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              We believe that exceptional jewelry begins with exceptional
              people, which is why our team undergoes continuous education to
              remain at the forefront of industry innovations while honoring
              traditional craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
