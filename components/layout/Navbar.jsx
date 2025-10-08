"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useCart from "@/hooks/useCart";
import Cart from "../Cart";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, isOpen, getItemCount } = useCart();
  const itemCount = getItemCount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Collection", to: "/collection" },
    { name: "Customization", to: "/customization" },
    { name: "Materials", to: "/materials" },
    { name: "Contact Us", to: "/contact-us" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[rgba(96,22,22,0.95)] to-[rgba(96,22,22,0.95)] backdrop-blur-sm shadow-2xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full flex items-center justify-between py-2 md:pt-5 md:pb-3 px-0">
        {/* Left side logo */}
        <motion.div
          className="flex items-center z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="bg-gradient-to-r from-primary via-secondary to-secondary rounded-br-full rounded-tr-full px-4 sm:px-6 py-2 shadow-2xl transition-all duration-200 flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden z-20 text-white bg-gradient-to-r from-primary via-primary to-secondary p-2 mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Center navigation links - Desktop */}
        <motion.div
          className="hidden lg:flex flex-1 justify-center px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-full px-8 xl:px-12 py-3 xl:py-4 shadow-2xl border border-[#4a1010]">
            <ul className="flex items-center gap-6 xl:gap-12 text-white text-sm xl:text-base font-medium">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + 0.1 * index,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.to}
                    className="hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right side cart - Desktop */}
        <motion.div
          className="hidden lg:flex items-center z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={openCart}
            className="bg-gradient-to-r from-primary via-primary to-secondary rounded-bl-full rounded-tl-full px-4 py-3 xl:py-4 shadow-2xl transition-all duration-200 flex items-center gap-2.5 text-white border border-[#4a1010] relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 xl:w-6 xl:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="text-sm xl:text-base font-medium hidden sm:inline">
              My Cart
            </span>
            {mounted && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-gradient-to-b from-primary to-secondary backdrop-blur-md"
      >
        <div className="px-4 py-6 space-y-4">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={item.to}
                  className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-200 py-2 border-b border-white/10 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.button
            onClick={() => {
              openCart();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full px-6 py-4 shadow-2xl transition-all duration-200 flex items-center justify-center gap-2.5 text-white border border-[#4a1010] mt-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.3, delay: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="text-base font-medium">My Cart</span>
             {mounted && itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
          </motion.button>
        </div>
      </motion.div>
      {isOpen && <Cart />}
    </motion.nav>
  );
}
