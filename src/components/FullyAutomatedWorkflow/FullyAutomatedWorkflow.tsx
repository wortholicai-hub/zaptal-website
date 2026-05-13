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
      className="w-full overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-2"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight text-center mb-10 ">
          {t("features.header")}
        </h2>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative z-0 flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[16px] border border-gray-200 bg-white p-2 transition-all duration-300 hover:z-20 sm:h-[188px] sm:min-h-0 sm:p-2.5"
            >
              {/* Foreground Content */}
              <div className="relative z-10 flex h-full flex-col items-center text-left sm:flex-row sm:items-start">
                {/* Text container */}
                <div className="order-2 -mt-5 px-1 sm:order-1 sm:mt-0 sm:w-[42%] sm:px-1 sm:pt-2">
                  {/* Title */}
                  <h3 className="mb-8 whitespace-nowrap text-[18px] font-medium text-gray-800 sm:text-[19px] md:text-[20px] lg:text-[21px]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-tight text-gray-600 sm:text-sm whitespace-normal">
                    {feature.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="order-1 flex w-full items-center justify-center sm:order-2 sm:w-[58%] sm:justify-end">
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    className="h-[176px] w-[300px] origin-center object-contain rounded-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:drop-shadow-[0_12px_22px_rgba(126,58,242,0.18)] sm:h-[166px] sm:w-full sm:origin-right lg:h-[174px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
