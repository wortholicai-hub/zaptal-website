"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const FAQSectionNew: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { questionKey: "vocalchat.faq1", answerKey: "vocalchat.faq1Answer" },
    { questionKey: "vocalchat.faq2", answerKey: "vocalchat.faq2Answer" },
    { questionKey: "vocalchat.faq3", answerKey: "vocalchat.faq3Answer" },
    { questionKey: "vocalchat.faq4", answerKey: "vocalchat.faq4Answer" },
    { questionKey: "vocalchat.faq6", answerKey: "vocalchat.faq6Answer" },
    { questionKey: "vocalchat.faq11", answerKey: "vocalchat.faq11Answer" },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-2">
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div className="mb-7 text-left lg:max-w-[780px]">
          <h2 className="no-doto max-w-none text-[30px] font-medium leading-tight text-black sm:text-4xl lg:whitespace-nowrap lg:text-[44px]">
            {t("vocalchat.questionsTitle1")} {t("vocalchat.questionsTitle2")}
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-stretch">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="no-doto overflow-hidden rounded-[16px] border border-gray-300 bg-white p-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]"
            >
              <button
                className="no-doto-button flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left md:px-5"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base font-medium leading-snug text-black md:text-[19px]">
                  {t(faq.questionKey)}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white"
                >
                  <div className="absolute h-0.5 w-4 bg-black"></div>
                  <div className="absolute h-4 w-0.5 bg-black"></div>
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
                    <div className="px-4 pb-4 md:px-5">
                      <p className="max-w-3xl text-base leading-relaxed text-gray-600 md:text-[17px]">
                        {t(faq.answerKey)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            ))}
          </div>

          <aside className="flex h-full min-h-[320px] flex-col justify-between rounded-[16px] border border-gray-200 bg-white p-7 text-black shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:min-h-0 lg:self-stretch">
            <h3 className="max-w-[320px] text-[30px] font-bold leading-tight text-black sm:text-[34px]">
              Everything you need to know{" "}
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                about
                <Image
                  src="/images/logo/zaptal-logo.svg"
                  alt="Zaptal logo"
                  width={250}
                  height={136}
                  className="h-16 w-auto object-contain sm:h-[72px]"
                />
              </span>
            </h3>
            <div className="flex justify-end">
              <Link
                href="/contactus"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black bg-black px-5 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-gray-900 sm:w-auto"
              >
                Ask question
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionNew;
