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

  return (
    <motion.section
      className="flex items-center justify-center px-4 pt-16 sm:px-6 sm:pt-20 lg:px-2 lg:pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex w-full max-w-[1200px] flex-col items-center gap-6 text-center"
        variants={itemVariants}
      >
        <motion.div
          className="w-full"
          variants={itemVariants}
        >
          <h2 className="mx-auto max-w-[920px] text-center text-[36px] font-semibold leading-[1.03] tracking-[-0.02em] text-black sm:text-5xl lg:text-[68px]">
            {t("vocalchat.heroTitle")}
          </h2>
        </motion.div>

        <motion.div
          className="flex w-full flex-wrap items-center justify-center gap-3"
          variants={itemVariants}
        >
          <div className="flex h-12 items-center">
            <BookACallButton />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VocalChatStyleHero;
