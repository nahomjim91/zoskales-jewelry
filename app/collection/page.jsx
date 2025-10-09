"use client";
import { useState, useMemo } from "react";
import { Heart, ShoppingCart, Filter, X } from "lucide-react";
import { jewelryData } from "./products";
import useCart from "@/hooks/useCart";
import { AnimatePresence , motion } from "framer-motion";

// Configuration constants
const FILTER_CONFIG = {
  categories: ["Ring", "Earrings", "Necklace", "Bracelet"],
  materials: ["Diamond", "Ruby", "Gemstones", "Bracelet"],
  genders: ["Women", "Men", "Couple"],
  sizes: [5, 6, 7, 8, 9, 10],
};

const GENDER_LABELS = {
  Women: "Female",
  Men: "Male",
  Couple: "Bisexual",
};

const ITEMS_PER_PAGE = 9;
const MAX_PRICE = 5000;

// Reusable Components
const CheckboxFilter = ({ label, checked, onChange }) => (
  <label className="flex items-center mb-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2 w-4 h-4 appearance-none border-2 border-primary rounded-sm checked:bg-primary checked:border-primary relative cursor-pointer transition-all duration-200 before:content-['✔'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:opacity-0 checked:before:opacity-100"
    />
    <span className="text-black">{label}</span>
  </label>
);

const FilterSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-3 text-primary">{title}</h3>
    {children}
  </div>
);

const PriceInput = ({ value, onChange, className }) => (
  <input
    type="number"
    value={value}
    onChange={onChange}
    className={`w-20 border border-primary rounded px-2 py-1 text-sm text-secondary ${className}`}
  />
);

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseClasses = "px-4 py-2 rounded-full transition text-sm";
  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 shadow-2xl",
    outline:
      "border border-primary text-primary hover:bg-gradient-to-r from-primary to-secondary hover:text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={isHovered && product.secondImage ? product.secondImage : product.image}
            src={isHovered && product.secondImage ? product.secondImage : product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isFavorite ? "fill-primary text-primary" : "text-primary"
            }`}
          />
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
          {product.name}
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold text-primary">
              ${product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-secondary/50 line-through">
                ${product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="hover:bg-gradient-to-r from-primary to-secondary border border-primary text-primary hover:text-white px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 transition text-xs sm:text-sm w-full sm:w-auto justify-center"
          >
            Add To Cart
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default function Collection() {
  const [favorites, setFavorites] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    materials: [],
    genders: [],
    priceRange: [0, MAX_PRICE],
    sizes: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem, openCart } = useCart();

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const toggleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
    setCurrentPage(1);
  };

  const updatePriceRange = (index, value) => {
    setFilters((prev) => {
      const newRange = [...prev.priceRange];
      newRange[index] = parseInt(value) || (index === 0 ? 0 : MAX_PRICE);
      return { ...prev, priceRange: newRange };
    });
  };

  const filteredProducts = useMemo(() => {
    return jewelryData.filter((product) => {
      const checks = [
        !filters.categories.length ||
          filters.categories.includes(product.category),
        !filters.materials.length ||
          filters.materials.includes(product.stoneType),
        !filters.genders.length ||
          filters.genders.includes(product.subcategory),
        product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1],
        !filters.sizes.length || filters.sizes.includes(product.size),
      ];
      return checks.every(Boolean);
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const fillPercent = (filters.priceRange[1] / MAX_PRICE) * 100;

  const changePage = (delta) => {
    setCurrentPage((prev) => Math.max(1, Math.min(totalPages, prev + delta)));
  };
  const handleAddToCart = (product) => {
    addItem(product);
    openCart();
  };

  return (
    <div className="min-h-screen mt-10 md:mt-20">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-center py-6 sm:py-8 text-primary">
          The Shop
        </h1>
      </div>

      <div className="w-full mx-auto px-4 py-4 sm:py-8">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden mb-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:bg-amber-800 transition"
        >
          <Filter className="w-5 h-5" />
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`fixed lg:static inset-0 z-50 lg:z-auto ${
              isFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="lg:hidden fixed inset-0 bg-black/40 bg-opacity-50"
              onClick={() => setIsFilterOpen(false)}
            />

            <div
              className={`fixed lg:static inset-y-0 left-0 w-80 lg:w-64 bg-white lg:bg-transparent overflow-y-auto lg:overflow-visible transform transition-transform duration-300 ease-in-out ${
                isFilterOpen
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }`}
            >
              <div className="p-6 lg:sticky lg:top-4 h-full lg:h-auto">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-lg font-bold mb-6 text-primary">
                  Filter By
                </h2>

                {/* Category Filter */}
                <FilterSection title="Category">
                  {FILTER_CONFIG.categories.map((cat) => (
                    <CheckboxFilter
                      key={cat}
                      label={`${cat}s`}
                      checked={filters.categories.includes(cat)}
                      onChange={() => toggleFilter("categories", cat)}
                    />
                  ))}
                </FilterSection>

                {/* Material Filter */}
                <FilterSection title="Material">
                  {FILTER_CONFIG.materials.map((mat) => (
                    <CheckboxFilter
                      key={mat}
                      label={mat}
                      checked={filters.materials.includes(mat)}
                      onChange={() => toggleFilter("materials", mat)}
                    />
                  ))}
                </FilterSection>

                {/* Gender Filter */}
                <FilterSection title="Gender">
                  {FILTER_CONFIG.genders.map((gender) => (
                    <CheckboxFilter
                      key={gender}
                      label={GENDER_LABELS[gender]}
                      checked={filters.genders.includes(gender)}
                      onChange={() => toggleFilter("genders", gender)}
                    />
                  ))}
                </FilterSection>

                {/* Price Range */}
                <FilterSection title="Price Range">
                  <input
                    type="range"
                    min="0"
                    max={MAX_PRICE}
                    value={filters.priceRange[1]}
                    onChange={(e) => updatePriceRange(1, e.target.value)}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-primary)] [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-primary)]"
                    style={{
                      background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-secondary) ${fillPercent}%, #e5e7eb ${fillPercent}%, #e5e7eb 100%)`,
                      WebkitAppearance: "none",
                    }}
                  />
                  <div className="flex justify-between mt-2">
                    <PriceInput
                      value={filters.priceRange[0]}
                      onChange={(e) => updatePriceRange(0, e.target.value)}
                    />
                    <span className="text-secondary font-bold">to</span>
                    <PriceInput
                      value={filters.priceRange[1]}
                      onChange={(e) => updatePriceRange(1, e.target.value)}
                    />
                  </div>
                </FilterSection>

                {/* Size Filter */}
                <FilterSection title="Size">
                  <div className="flex flex-wrap gap-2">
                    {FILTER_CONFIG.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleFilter("sizes", size)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          filters.sizes.includes(size)
                            ? "bg-gradient-to-r from-primary to-secondary text-white border-amber-900"
                            : "bg-white text-secondary border-secondary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Sort By */}
                <FilterSection title="Sort By">
                  <select className="w-full border rounded px-3 py-2 text-sm">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Popular</option>
                  </select>
                </FilterSection>

                <Button
                  variant="primary"
                  onClick={() => setCurrentPage(1)}
                  className="w-full flex items-center justify-center gap-2 px-8 py-2 text-base md:text-lg font-semibold"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={toggleFavorite}
                  onAddToCart={addItem}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => changePage(-1)}
                  disabled={currentPage === 1}
                  className="px-3 sm:px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </Button>
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? "primary" : "outline"}
                    onClick={() => setCurrentPage(i + 1)}
                    className="px-3 sm:px-4"
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => changePage(1)}
                  disabled={currentPage === totalPages}
                  className="px-3 sm:px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
