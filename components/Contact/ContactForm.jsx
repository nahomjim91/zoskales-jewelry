import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("Please fill in all fields");
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact Form Submission"
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone Number: ${formData.phoneNumber}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:nahomjim@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    setSubmitStatus("Opening your email client...");

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("");
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-playfair mb-8 text-primary"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Send Us a Message
            </motion.h2>

            <div className="space-y-2">
              {/* Full Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <motion.select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/10 border border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <option value="">Please select</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Information">
                    Product Information
                  </option>
                  <option value="Appointment Request">
                    Appointment Request
                  </option>
                  <option value="Custom Design">Custom Design</option>
                  <option value="Other">Other</option>
                </motion.select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 text-white text-base md:text-lg font-semibold transition-all shadow-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Message
              </motion.button>

              {submitStatus && (
                <motion.p
                  className="text-green-600 text-sm mt-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <motion.img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/ClientConsulation.webp`}
              alt="Jewelry consultation"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
