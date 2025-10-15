"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  X,
  Image as ImageIcon,
  Package,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { useProductUpload } from "@/hooks/useProductUpload";

// Custom Components
const PriceInput = ({ value, onChange, placeholder, required, name }) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B78F8F]">
      $
    </span>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      step="0.01"
      className="w-full pl-10 pr-4 py-3 border border-[#B78F8F]/30 rounded-xl text-[#3B1F1F] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#601616] focus:border-transparent transition-all placeholder:text-[#B78F8F]/50"
    />
  </div>
);

const Button = ({
  variant = "primary",
  type = "button",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#601616] to-[#3B1F1F] text-white hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100",
    outline:
      "border-2 border-[#601616] text-[#601616] hover:bg-gradient-to-r hover:from-[#601616] hover:to-[#3B1F1F] hover:text-white disabled:opacity-50",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: props.disabled ? 1 : 1.02 }}
      whileTap={{ scale: props.disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Input = ({ label, required, className = "", ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-[#3B1F1F]">
        {label} {required && <span className="text-[#601616]">*</span>}
      </label>
    )}
    <input
      required={required}
      className={`w-full px-4 py-3 border border-[#B78F8F]/30 rounded-xl text-[#3B1F1F] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#601616] focus:border-transparent transition-all placeholder:text-[#B78F8F]/50 ${className}`}
      {...props}
    />
  </div>
);

const Select = ({ label, required, options, ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-[#3B1F1F]">
        {label} {required && <span className="text-[#601616]">*</span>}
      </label>
    )}
    <select
      required={required}
      className="w-full px-4 py-3 border border-[#B78F8F]/30 rounded-xl text-[#3B1F1F] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#601616] focus:border-transparent transition-all appearance-none cursor-pointer"
      {...props}
    >
      <option value="">Select {label?.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default function ProductUploadForm() {
  const { uploadProduct, loading, progress, error, reset } = useProductUpload();

  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    name: "",
    stoneType: "",
    price: "",
    oldPrice: "",
    size: "",
    folderPath: "",
  });

  const [quality, setQuality] = useState(80);
  const [productImages, setProductImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [bgImages, setBgImages] = useState([]);
  const [bgImagePreviews, setBgImagePreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isBgDragging, setIsBgDragging] = useState(false);

  const MAX_QUALITY = 100;
  const fillPercent = (quality / MAX_QUALITY) * 100;

  const categories = ["Rings", "Necklaces", "Bracelets", "Earrings"];
  const subcategories = ["Gold", "Silver", "Platinum", "Diamond"];
  const stoneTypes = ["Diamond", "Ruby", "Sapphire", "Emerald", "Pearl"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (files) => {
    const fileArray = Array.from(files);
    setProductImages(fileArray);
    const previews = fileArray.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      handleImageChange(e.target.files);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleImageChange(e.dataTransfer.files);
    }
  };

  const handleBgImageChange = (files) => {
    const fileArray = Array.from(files);
    setBgImages(fileArray);
    const previews = fileArray.map((file) => URL.createObjectURL(file));
    setBgImagePreviews(previews);
  };

  const handleBgFileInput = (e) => {
    if (e.target.files.length > 0) {
      handleBgImageChange(e.target.files);
    }
  };

  const handleBgDrop = (e) => {
    e.preventDefault();
    setIsBgDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleBgImageChange(e.dataTransfer.files);
    }
  };

  const removeImage = (index) => {
    setProductImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const removeBgImage = (index) => {
    setBgImages((prev) => prev.filter((_, i) => i !== index));
    setBgImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.folderPath) {
      alert("Please enter a folder path");
      return;
    }

    try {
      const result = await uploadProduct(
        formData,
        productImages,
        bgImages,
        quality
      );

      alert(`Product uploaded successfully! ID: ${result.productId}`);

      setFormData({
        category: "",
        subcategory: "",
        name: "",
        stoneType: "",
        price: "",
        oldPrice: "",
        size: "",
        folderPath: "",
      });
      setProductImages([]);
      setImagePreviews([]);
      setBgImages([]);
      setBgImagePreviews([]);
      setQuality(80);
      reset();
    } catch (err) {
      alert(`Upload failed: ${err.message}`);
    }
  };

  const handleCancel = () => {
    setFormData({
      category: "",
      subcategory: "",
      name: "",
      stoneType: "",
      price: "",
      oldPrice: "",
      size: "",
      folderPath: "",
    });
    setProductImages([]);
    setImagePreviews([]);
    setBgImages([]);
    setBgImagePreviews([]);
    setQuality(80);
    reset();
  };

  return (
    <div className="min-h-screen md:mt-12 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-[#601616]" />
            <h1 className="text-5xl font-['Playfair_Display'] font-bold bg-gradient-to-r from-[#601616] to-[#3B1F1F] bg-clip-text text-transparent">
              Add New Product
            </h1>
            <Sparkles className="w-8 h-8 text-[#601616]" />
          </div>
          <p className="text-[#B78F8F] text-lg">
            Curate your jewelry collection with elegance
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-[#B78F8F]/20"
        >
          {/* Product Details Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-6 h-6 text-[#601616]" />
              <h2 className="text-2xl font-['Playfair_Display'] font-semibold text-[#3B1F1F]">
                Product Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                options={categories}
                required
              />
              <Select
                label="Subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                options={subcategories}
                required
              />
              <div className="md:col-span-2">
                <Input
                  label="Product Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Elegant Diamond Ring"
                  required
                />
              </div>
              <Select
                label="Stone Type"
                name="stoneType"
                value={formData.stoneType}
                onChange={handleInputChange}
                options={stoneTypes}
                required
              />
              <Input
                label="Size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                placeholder="7, S, M, L"
              />
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-[#601616]" />
              <h2 className="text-2xl font-['Playfair_Display'] font-semibold text-[#3B1F1F]">
                Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#3B1F1F]">
                  Current Price <span className="text-[#601616]">*</span>
                </label>
                <PriceInput
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#3B1F1F]">
                  Original Price{" "}
                  <span className="text-[#B78F8F] text-xs">
                    (if discounted)
                  </span>
                </label>
                <PriceInput
                  name="oldPrice"
                  value={formData.oldPrice}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
            </div>
          </motion.div>

          {/* Storage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <Input
              label="Folder Path"
              name="folderPath"
              value={formData.folderPath}
              onChange={handleInputChange}
              placeholder="rings/diamond or necklaces/gold"
              required
            />
            <p className="text-xs text-[#B78F8F] mt-2 ml-1">
              This organizes your images on the server
            </p>
          </motion.div>

          {/* Quality Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mb-10"
          >
            <label className="block text-sm font-medium text-[#3B1F1F] mb-3">
              Image Quality:{" "}
              <span className="text-[#601616] font-bold">{quality}%</span>
            </label>
            <input
              type="range"
              min="1"
              max={MAX_QUALITY}
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer 
                   [&::-webkit-slider-thumb]:appearance-none 
                   [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                   [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:bg-white 
                   [&::-webkit-slider-thumb]:border-2 
                   [&::-webkit-slider-thumb]:border-[var(--color-primary)] 
                   [&::-webkit-slider-thumb]:shadow-md 
                   [&::-moz-range-thumb]:appearance-none 
                   [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 
                   [&::-moz-range-thumb]:rounded-full 
                   [&::-moz-range-thumb]:bg-white 
                   [&::-moz-range-thumb]:border-2 
                   [&::-moz-range-thumb]:border-[var(--color-primary)]"
              style={{
                background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-secondary) ${fillPercent}%, #e5e7eb ${fillPercent}%, #e5e7eb 100%)`,
                WebkitAppearance: "none",
              }}
            />
            <div className="flex justify-between text-xs text-[#B78F8F] mt-2">
              <span>Smaller file</span>
              <span>Higher quality</span>
            </div>
          </motion.div>

          {/* Product Images Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <ImageIcon className="w-6 h-6 text-[#601616]" />
              <h2 className="text-2xl font-['Playfair_Display'] font-semibold text-[#3B1F1F]">
                Product Images <span className="text-[#601616]">*</span>
              </h2>
            </div>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                isDragging
                  ? "border-[#601616] bg-[#601616]/5 scale-[1.02]"
                  : "border-[#B78F8F]/40 bg-gradient-to-br from-white to-[#B78F8F]/5"
              }`}
            >
              <input
                type="file"
                id="imageInput"
                multiple
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />

              <motion.div
                animate={{ y: isDragging ? -5 : 0 }}
                className="flex flex-col items-center"
              >
                <Upload className="w-16 h-16 text-[#601616] mb-4" />
                <p className="text-lg font-medium text-[#3B1F1F] mb-2">
                  Drop your images here
                </p>
                <p className="text-sm text-[#B78F8F] mb-6">
                  or click to browse (PNG, JPG • Max 5MB)
                </p>
                <Button
                  variant="primary"
                  type="button"
                  as="span"
                  onClick={() => document.getElementById("imageInput")?.click()}
                >
                  <Upload className="w-4 h-4" />
                  Select Images
                </Button>
              </motion.div>
            </div>

            {/* Image Previews */}
            <AnimatePresence>
              {imagePreviews.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {imagePreviews.map((preview, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative group"
                    >
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-xl border-2 border-[#B78F8F]/20"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-[#601616] to-[#3B1F1F] text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Background Images Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-10"
          >
            <h3 className="text-lg font-medium text-[#3B1F1F] mb-4">
              Background Images{" "}
              <span className="text-[#B78F8F] text-sm">(Optional)</span>
            </h3>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsBgDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setIsBgDragging(false);
              }}
              onDrop={handleBgDrop}
              className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                isBgDragging
                  ? "border-[#601616] bg-[#601616]/5"
                  : "border-[#B78F8F]/30 bg-white/50"
              }`}
            >
              <input
                type="file"
                id="bgImageInput"
                multiple
                accept="image/*"
                onChange={handleBgFileInput}
                className="hidden"
              />

              <ImageIcon className="w-12 h-12 text-[#B78F8F] mx-auto mb-3" />
              <p className="text-sm text-[#3B1F1F] mb-4">
                Optional background images
              </p>
              <Button
                variant="outline"
                type="button"
                onClick={() => document.getElementById("bgImageInput")?.click()}
              >
                Browse Files
              </Button>
            </div>

            {/* Background Image Previews */}
            <AnimatePresence>
              {bgImagePreviews.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {bgImagePreviews.map((preview, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="relative group"
                    >
                      <img
                        src={preview}
                        alt={`BG ${index + 1}`}
                        className="w-full h-32 object-cover rounded-xl border-2 border-[#B78F8F]/20"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => removeBgImage(index)}
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-[#601616] to-[#3B1F1F] text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-end gap-4 pt-8 border-t border-[#B78F8F]/20"
          >
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={loading}
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || productImages.length === 0}
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Saving...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Save Product
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
