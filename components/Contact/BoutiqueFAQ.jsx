import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BoutiqueFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer custom design services?",
      answer:
        "Yes, we offer bespoke jewelry design services. Our master craftsmen work closely with you to create a unique piece that reflects your personal style and preferences. The process typically takes 4-6 weeks from design approval to completion.",
    },
    {
      question: "Do you offer custom design services?",
      answer:
        "Yes, we offer bespoke jewelry design services. Our master craftsmen work closely with you to create a unique piece that reflects your personal style and preferences. The process typically takes 4-6 weeks from design approval to completion.",
    },
    {
      question: "Do you offer custom design services?",
      answer:
        "Yes, we offer bespoke jewelry design services. Our master craftsmen work closely with you to create a unique piece that reflects your personal style and preferences. The process typically takes 4-6 weeks from design approval to completion.",
    },
    {
      question: "Do you offer custom design services?",
      answer:
        "Yes, we offer bespoke jewelry design services. Our master craftsmen work closely with you to create a unique piece that reflects your personal style and preferences. The process typically takes 4-6 weeks from design approval to completion.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-playfair text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Find Our Boutique
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-serif text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.span
                  className="text-2xl text-amber-600 flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}