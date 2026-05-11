"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const FAQSectionNew: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { questionKey: "vocalchat.faq1", answerKey: "vocalchat.faq1Answer" },
    { questionKey: "vocalchat.faq2", answerKey: "vocalchat.faq2Answer" },
    { questionKey: "vocalchat.faq3", answerKey: "vocalchat.faq3Answer" },
    { questionKey: "vocalchat.faq4", answerKey: "vocalchat.faq4Answer" },
    { questionKey: "vocalchat.faq5", answerKey: "vocalchat.faq5Answer" },
    { questionKey: "vocalchat.faq6", answerKey: "vocalchat.faq6Answer" },
    { questionKey: "vocalchat.faq7", answerKey: "vocalchat.faq7Answer" },
    { questionKey: "vocalchat.faq8", answerKey: "vocalchat.faq8Answer" },
    { questionKey: "vocalchat.faq9", answerKey: "vocalchat.faq9Answer" },
    { questionKey: "vocalchat.faq10", answerKey: "vocalchat.faq10Answer" },
    { questionKey: "vocalchat.faq11", answerKey: "vocalchat.faq11Answer" },
    { questionKey: "vocalchat.faq12", answerKey: "vocalchat.faq12Answer" },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-8 md:pt-20 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[4%] sm:px-[0%] lg:px-[0%]">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
        >
          <h2 className="no-doto leading-tight font-sans normal-case tracking-normal">
            <span className="text-[34px] sm:text-4xl lg:text-5xl font-medium">
              {t("vocalchat.questionsTitle1")}{" "}
            </span>
            <span className="text-[34px] sm:text-4xl lg:text-5xl font-medium">
              {t("vocalchat.questionsTitle2")}
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="no-doto bg-transparent rounded-4xl md:rounded-[48px] border border-gray-300 p-2 md:p-6 overflow-hidden"
            >
              <button
                className="no-doto-button w-full px-4 md:px-5 py-3 text-left flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-black font-light text-base md:text-[24px] leading-snug">
                  {t(faq.questionKey)}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <div className="w-12 h-12 flex items-center justify-center relative bg-black rounded-full">
                      <div className="w-3 h-0.5 md:w-6 md:h-0.5 bg-white absolute rotate-90"></div>
                      <div className="w-0.5 h-3 md:w-0.5 md:h-6 bg-white absolute rotate-90"></div>
                    </div>
                  ) : (
                    <div className="w-8 h-8 flex items-center justify-center relative">
                      <div className="w-3 h-0.5 md:w-6 md:h-0.5 bg-black"></div>
                      <div className="w-0.5 h-3 md:w-0.5 md:h-6 bg-black absolute"></div>
                    </div>
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-500 leading-relaxed text-base md:text-xl">
                        {t(faq.answerKey)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionNew;
