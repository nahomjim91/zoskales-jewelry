import Link from "next/link";
import { Gem, Home, Search, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        {/* Decorative diamond icon */}
         <div className="relative my-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full blur-3xl opacity-60"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-primary p-6 rounded-full">
              <img 
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/logo.webp`}
                alt="Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-serif font-bold text-primary mb-4 tracking-tight">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Oops! It seems this precious gem has slipped away. The page you're
          looking for doesn't exist or may have been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/"
            className=" flex items-center gap-2 bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-4 text-white text-base md:text-lg font-semibold transition-all shadow-2xl hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>

          <Link
            href="/collections"
            className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium border-2 border-primary hover:bg-gradient-to-r from-primary to-secondary hover:text-white transition-all duration-300"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Shop Collections
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
            Popular Categories
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/collections?category=rings"
              className="text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-rose-50"
            >
              Rings
            </Link>
            <Link
              href="/collections?category=necklaces"
              className="text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-rose-50"
            >
              Necklaces
            </Link>
            <Link
              href="/collections?category=earrings"
              className="text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-rose-50"
            >
              Earrings
            </Link>
            <Link
              href="/collections?category=rings&gender=couple"
              className="text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-rose-50"
            >
              Couple Rings
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-rose-50"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-rose-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
