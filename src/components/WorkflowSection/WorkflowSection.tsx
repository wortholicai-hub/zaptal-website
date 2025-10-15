"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function WorkflowSection() {
  const { t } = useTranslation();

  const featuresColumn1 = [
    t("workflow.feature1"),
    t("workflow.feature2"),
    t("workflow.feature3"),
    t("workflow.feature4"),
    t("workflow.feature5"),
    t("workflow.feature6"),
    t("workflow.feature7"),
  ];

  const featuresColumn2 = [
    t("workflow.feature8"),
    t("workflow.feature9"),
    t("workflow.feature10"),
    t("workflow.feature11"),
    t("workflow.feature12"),
  ];

  return (
    <section className="w-full flex items-center justify-center bg-transparent py-14 md:py-20 px-[4%] md:px-[0%]">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* ===== Left Side ===== */}
        <div className="w-full md:w-1/2 flex flex-col gap:0 lg:gap-10 items-left px-4 lg:px-0 md:items-start text-start md:text-left">
          {/* Header */}
          <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl text-left leading-tight md:mb-6 mb-16 w-[90%] md:w-full">
            {t("workflow.headerLine1")} {" "} {t("workflow.headerLine2")}
            {/* <br /> */}
          </h2>

          {/* ===== Image (Mobile Only) ===== */}
          <div className="md:hidden mb-8 w-full flex justify-center">
            <img
              src="/images/workflow/workflow.png"
              alt={t("workflow.imageAlt")}
              className="w-[80%] max-w-[350px] object-contain opacity-80"
            />
          </div>

          {/* ===== Feature Lists ===== */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-y-4 w-full sm:w-1/2">
              {featuresColumn1.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="w-8 h-8 grid grid-cols-2 gap-0.5 mt-1 flex-shrink-0">
                    {[...Array(4)].map((_, j) => (
                      <div
                        key={j}
                        className="w-3 h-3 bg-gray-300 rounded-full"
                      ></div>
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-gray-800 text-xl leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              {featuresColumn2.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="w-8 h-8 grid grid-cols-2 gap-0.5 mt-1 flex-shrink-0">
                    {[...Array(4)].map((_, j) => (
                      <div
                        key={j}
                        className="w-3 h-3 bg-gray-300 rounded-full"
                      ></div>
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-gray-800 text-xl leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Right Side Image (Desktop Only) ===== */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center ">
          <img
            src="/images/workflow/workflow.png"
            alt={t("workflow.imageAlt")}
            className="w-full max-w-[500px] object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
