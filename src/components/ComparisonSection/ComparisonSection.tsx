"use client";

import React from "react";
import { Check, X } from "lucide-react";
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

  const DottedArrowUpRight: React.FC<{ color?: string }> = ({
    color = "black",
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      strokeDasharray="2 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M7 17L17 7m0 0H9m8 0v8" />
    </svg>
  );

  return (
    <section className="w-full py-8 md:py-20 px-[4%] sm:px-[3%] lg:px-[8%] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="w-full mb-10 px-0 md:text-left flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between items-end">
          <h2 className="text-black font-medium text-[32px] sm:text-4xl lg:text-5xl leading-tight">
            {t("comparison.titlePart1")}
            <span className="text-purple-500 font-semibold px-2">vs.</span>
            <br className="hidden sm:block" /> {/* Force new line */}
            {t("comparison.titlePart2")}
          </h2>
          <button
            aria-label="Book a Call"
            onClick={() =>
              window.open(
                "https://calendar.google.com/calendar/u/0/r",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="w-full md:w-fit flex items-center justify-center gap-2 px-4 py-1.5 h-fit rounded-xl bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 cursor-pointer"
          >
            <span className="text-base font-medium">
              {t("vocalchat.bookCall")}
            </span>
            <DottedArrowUpRight />
          </button>
        </div>

        {/* Comparison Container */}
        <div className="relative flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-8 w-full p-7 md:p-8 rounded-[48px] shadow-[0px_2px_10px_5px_rgba(147,_51,_234,_0.05)] bg-white overflow-hidden">
          {/* Gradient blur effects */}
          <div className="block absolute top-0 left-0 w-60 h-4/12 md:h-10/12 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-xl z-0"></div>

          {/* Left Card - VocalChat */}
          <div className="min-w-[280px] relative z-10">
            <div className="bg-black md:min-w-[440px] rounded-3xl py-6 px-8 w-fit z-[999] relative">
              <div className="space-y-3">
                <div className="bg-[#1e1c28] font-semibold py-2 text-lg flex justify-center items-center rounded-2xl mb-5 ">
                  <Image
                    src={"/images/logo/logo-purple.png"}
                    alt="VocalChat"
                    width={44}
                    height={24}
                    className=""
                  />
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
                    <span className="text-white font-medium text-base sm:text-[18px] leading-6 my-4">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Traditional */}
          <div className="min-w-[280px] lg:mt-0 bg-white h-full">
            <div className="mb-5 flex justify-start lg:justify-start">
              <div className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-2xl whitespace-nowrap">
                <span className="text-gray-800 text-base font-medium">
                  {t("comparison.traditionalBadge")}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {traditionalLimitations.map((limitation, index) => (
                <div
                  key={index}
                  className="flex items-center md:gap-4 whitespace-normal break-words"
                >
                  <Image
                    src={"/images/icons/wrong-icon.png"}
                    alt="check"
                    width={38}
                    height={38}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm sm:text-[18px] leading-12">
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
