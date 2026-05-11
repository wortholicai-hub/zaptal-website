"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ComparisonSection() {
  const { t } = useTranslation();

  const vocalchatFeatures = t("comparison.vocalchatFeatures", {
    returnObjects: true,
  }) as string[];
  const traditionalLimitations = t("comparison.traditionalLimitations", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="w-full py-8 md:py-20 px-[4%] sm:px-[3%] lg:px-[8%] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="w-full mb-10 px-0 flex justify-center text-center">
          <h2 className="text-black font-medium text-[30px] sm:text-4xl lg:text-5xl leading-tight inline-grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 gap-y-3">
            <span>{t("comparison.titlePart1")}</span>
            <span className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-purple-50 px-5 py-1 text-base sm:text-lg font-bold text-purple-600">
              vs.
            </span>
            <span>{t("comparison.titlePart2")}</span>
          </h2>
        </div>

        {/* Comparison Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5 lg:gap-6 w-full p-5 md:p-6 rounded-[16px] shadow-[0px_2px_10px_5px_rgba(147,_51,_234,_0.05)] bg-white overflow-hidden">
          {/* Gradient blur effects */}
          <div className="block absolute top-0 left-0 w-72 h-4/12 md:h-10/12 bg-gradient-to-br from-[#1f063d] via-[#3b0764] to-transparent rounded-full blur-2xl z-0 opacity-85"></div>

          {/* Left Card - VocalChat */}
          <div className="relative z-10 w-full">
            <div className="bg-black rounded-[16px] py-5 px-5 sm:px-7 w-full h-full z-[999] relative">
              <div className="space-y-2">
                <div className="bg-[#1e1c28] font-semibold py-2.5 px-4 text-lg flex justify-center items-center rounded-[16px] mb-4">
                  <span className="text-white text-xl font-semibold tracking-wide">
                    Zaptal AI
                  </span>
                </div>
                {vocalchatFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 whitespace-normal break-words"
                  >
                    <Image
                      src={"/images/icons/right-icon.png"}
                      alt="check"
                      width={38}
                      height={38}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span className="text-white font-medium text-base sm:text-[17px] leading-6 my-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Traditional */}
          <div className="relative z-10 w-full rounded-[16px] border border-gray-200 bg-white py-5 px-5 sm:px-7 h-full">
            <div className="mb-4 flex justify-start">
              <div className="w-full inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 rounded-[16px] whitespace-nowrap bg-gray-50">
                <span className="text-gray-800 text-xl font-semibold tracking-wide">
                  {t("comparison.traditionalBadge")}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {traditionalLimitations.map((limitation, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 whitespace-normal break-words"
                >
                  <Image
                    src={"/images/icons/wrong-icon.png"}
                    alt="check"
                    width={38}
                    height={38}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm sm:text-[17px] leading-7 my-1">
                    {limitation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
