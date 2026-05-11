"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      img: "/images/features/Patient Inquiry.svg",
      title: t("features.feature1Title"),
      desc: t("features.feature1Desc"),
      alt: t("features.feature1Alt"),
    },
    {
      id: 2,
      img: "/images/features/AI Reception and Routing.svg",
      title: t("features.feature2Title"),
      desc: t("features.feature2Desc"),
      alt: t("features.feature2Alt"),
    },
    {
      id: 3,
      img: "/images/features/Scheduling and Integration.svg",
      title: t("features.feature3Title"),
      desc: t("features.feature3Desc"),
      alt: t("features.feature3Alt"),
    },
    {
      id: 4,
      img: "/images/features/Follow-up and Revenue Recovery.svg",
      title: t("features.feature4Title"),
      desc: t("features.feature4Desc"),
      alt: t("features.feature4Alt"),
    },
  ];

  return (
    <section
      id="learnmore"
      className="w-full py-8 md:py-20 px-[4%] md:px-[0%] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight text-center mb-10 ">
          {t("features.header")}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative border border-gray-300 rounded-4xl p-6 bg-white overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px]"
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 opacity-100">
                <img
                  src="https://framerusercontent.com/images/BpUgcKlbgozaYrDw9SLXq6Gac.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col h-full items-center text-left">
                {/* Image */}
                <div className="flex justify-center items-center mb-8 w-full">
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    className="w-[340px] h-[315px] sm:w-[410px] sm:h-[370px] lg:w-[500px] lg:h-[420px] object-contain rounded-xl"
                  />
                </div>

                {/* Text container */}
                <div className="px-2 md:px-4">
                  {/* Title */}
                  <h3 className="text-[32px] sm:text-[32px] lg:text-[32px] font-medium text-gray-800 mb-3 whitespace-pre-line">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-normal">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
