"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import BookACallButton from "@/components/common/BookACallButton";

const VocalChatStyleHero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const DottedArrowRight: React.FC<{ color?: string }> = ({
    color = "white",
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 24"
      strokeWidth={2}
      stroke={color}
      strokeDasharray="2 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M4 4l12 8-12 8" />
    </svg>
  );

  return (
    <motion.section
      className="flex items-center justify-center px-[4%] md:px-[0%] pt-16 sm:pt-20 lg:pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[65%_35%] gap-4 items-left lg:px-2 px-4"
        variants={itemVariants}
      >
        {/* Left Column: Title */}
        <motion.div
          className="text-left lg:text-left w-full md:w-[95%]"
          variants={itemVariants}
        >
          <h2 className="text-black text-left font-semibold text-[36px] sm:text-4xl lg:text-[54px]">
            {t("vocalchat.heroTitle")}
          </h2>
        </motion.div>

        {/* Right Column: Description + Buttons */}
        <motion.div
          className="flex flex-col md:justify-start h-full items-left lg:items-start gap-4 mb-15 "
          variants={itemVariants}
        >
          <p className="text-gray-900 text-lg md:text-[20px] whitespace-pre-line text-left mb-4 md:mb-4">
            {t("vocalchat.heroSubtitle")}
          </p>

          <div className="flex flex-wrap justify-start lg:justify-start gap-3">
            {/* Primary Button */}
            <div className="px-[2px] py-[2px] rounded-2xl border-[#6C47FF] border-[1px]">
              <button
                aria-label="Learn More"
                onClick={() => {
                  const section = document.getElementById("features");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer flex items-center justify-center gap-1.5 px-2 py-1 md:px-4 md:py-1.5 rounded-xl bg-purple-500 text-white border border-[#6C47FF] shadow-md hover:bg-[#5a3ce0] hover:shadow-lg transition-all duration-300"
              >
                <span className="text-sm md:text-base font-semibold">
                  {t("vocalchat.learnMore")}
                </span>
                <DottedArrowRight color="white" />
              </button>
            </div>

            {/* Secondary Button */}
            <BookACallButton />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VocalChatStyleHero;
