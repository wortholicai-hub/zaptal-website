"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const VocalChatStyleHero: React.FC = () => {
  const { t } = useTranslation();
  const heroTitleLines = t("vocalchat.heroTitle").split("\n");

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
          <h2 className="mx-auto max-w-[920px] text-center text-[30px] font-semibold leading-[1.08] text-black min-[420px]:text-[34px] sm:text-5xl lg:text-[68px] lg:leading-[1.03]">
            {heroTitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        <motion.div
          className="flex w-full items-center justify-center"
          variants={itemVariants}
        >
          <iframe
            src="https://portal.scalenexus.ai/iframe/6a030a6e56cef3f56106088a"
            className="h-[86px] w-[340px] max-w-full border-0 bg-white"
            style={{ background: "#ffffff", backgroundColor: "#ffffff", colorScheme: "light" }}
            frameBorder="0"
            allow="microphone"
            title="Talk to Zaptal AI assistant"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VocalChatStyleHero;
