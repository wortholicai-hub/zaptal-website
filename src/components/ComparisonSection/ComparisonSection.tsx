"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, CircleMinus } from "lucide-react";

export default function ComparisonSection() {
  const { t } = useTranslation();

  const vocalchatFeatures = t("comparison.vocalchatFeatures", {
    returnObjects: true,
  }) as string[];
  const traditionalLimitations = t("comparison.traditionalLimitations", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-2 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="w-full mb-10 px-0 flex justify-center text-center">
          <h2 className="text-black font-semibold text-[30px] sm:text-4xl lg:text-5xl leading-tight inline-grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 gap-y-3">
            <span>{t("comparison.titlePart1")}</span>
            <span className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-1 text-base sm:text-lg font-bold text-gray-900 shadow-sm">
              vs.
            </span>
            <span>{t("comparison.titlePart2")}</span>
          </h2>
        </div>

        {/* Comparison Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5 lg:gap-6 w-full rounded-[16px] border border-gray-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-5">
          {/* Left Card - VocalChat */}
          <div className="relative z-10 w-full">
            <div className="relative z-10 h-full w-full rounded-[16px] border border-gray-200 bg-white px-5 py-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)] sm:px-7">
              <div className="space-y-2">
                <div className="mb-4 flex items-center justify-center rounded-[16px] border border-gray-200 bg-gray-50 px-4 py-2.5 font-semibold">
                  <span className="text-xl font-semibold tracking-wide text-gray-950">
                    Zaptal AI
                  </span>
                </div>
                {vocalchatFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 whitespace-normal break-words rounded-xl px-2 py-1.5 transition-colors duration-200 hover:bg-gray-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-950" />
                    <span className="my-1 text-base font-medium leading-6 text-gray-800 sm:text-[17px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Traditional */}
          <div className="relative z-10 h-full w-full rounded-[16px] border border-gray-200 bg-[#fafafa] px-5 py-5 sm:px-7">
            <div className="mb-4 flex justify-start">
              <div className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-[16px] border border-gray-300 bg-white px-6 py-2.5">
                <span className="text-gray-800 text-xl font-semibold tracking-wide">
                  {t("comparison.traditionalBadge")}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {traditionalLimitations.map((limitation, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 whitespace-normal break-words rounded-xl px-2 py-1.5 transition-colors duration-200 hover:bg-white"
                >
                  <CircleMinus className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                  <span className="my-1 text-sm leading-7 text-gray-700 sm:text-[17px]">
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
