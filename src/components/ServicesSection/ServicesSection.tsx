"use client";

import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
export default function CustomAISolutions() {
  const { t } = useTranslation();

  const outboundFeatures = [
    t("customAI.outboundFeature1"),
    t("customAI.outboundFeature2"),
    t("customAI.outboundFeature3"),
    t("customAI.outboundFeature4"),
    t("customAI.outboundFeature5"),
  ];

  const inboundFeatures = [
    t("customAI.inboundFeature1"),
    t("customAI.inboundFeature2"),
    t("customAI.inboundFeature3"),
    t("customAI.inboundFeature4"),
    t("customAI.inboundFeature5"),
  ];

  const workflowFeatures = [
    t("customAI.workflowFeature1"),
    t("customAI.workflowFeature2"),
    t("customAI.workflowFeature3"),
    t("customAI.workflowFeature4"),
    t("customAI.workflowFeature5"),
  ];

  return (
    <div className="py-8 md:py-20 px-[4%] sm:px-[3%] lg:px-[5%] overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight text-center mb-12">
          {t("customAI.headerLine1")} {t("customAI.headerLine2")}
        </h2>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-6">
          <AISolutionCard
            imageSrc="images/services/outbound.png"
            type={t("customAI.outboundTitle")}
            description={t("customAI.outboundDesc")}
            features={outboundFeatures}
          />
          <AISolutionCard
            imageSrc="images/services/inbound.png"
            type={t("customAI.inboundTitle")}
            description={t("customAI.inboundDesc")}
            features={inboundFeatures}
          />
        </div>

        {/* Custom Workflow Card */}
        <div className="w-full mx-auto bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 mt-10 lg:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Side */}
            <div className="w-full md:w-[90%]">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                <span className="text-gray-400 font-normal">
                  {t("customAI.workflowLabel")}
                </span>{" "}
                {t("customAI.workflowTitle")}
              </h3>
              <p className="text-gray-500 text-base md:text-xl leading-relaxed mb-8">
                {t("customAI.workflowDesc")}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Image src={"/images/dots/dot-pattern-grid.avif"} alt="dot pattern" width={480} height={220} className="w-full grayscale-100"/>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className="space-y-4 sm:space-y-5">
                {workflowFeatures.map((feature, i) => (
                  <FeatureItem key={i} text={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------- */
/* AISolutionCard Component                             */
/* ---------------------------------------------------- */
function AISolutionCard({
  imageSrc,
  type,
  description,
  features,
}: {
  imageSrc: string;
  type: string;
  description: string;
  features: string[];
}) {
  // Highlight English and Dutch equivalents in purple
  const highlightType = (text: string) => {
    return text.replace(
      /(Inbound|Outbound|Inkomende|Uitgaande)/gi,
      '<span class="text-purple-600 font-bold">$1</span>'
    );
  };

  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-[48px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex flex-col md:flex-row items-start gap-4 md:gap-6">
        <img
          src={imageSrc}
          alt={type}
          className="w-24 h-24 sm:w-20 sm:h-20 scale-260 object-contain"
        />

        <div>
          <h3
            className="text-[22px] font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: highlightType(type) }}
          />
          <p className="text-gray-500 text-lg leading-relaxed md:w-[95%]">
            {description}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 sm:space-y-4">
        {features.map((feature, i) => (
          <FeatureItem key={i} text={feature} />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------- */
/* Dot Pattern Grid                                     */
/* ---------------------------------------------------- */
export function DotPatternGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 w-10 sm:w-12">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i >= 3 && i < 6 ? "bg-gray-400" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------- */
/* Feature Item Component                               */
/* ---------------------------------------------------- */
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-start gap-2 sm:gap-3">
      {/* <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0" /> */}
      <Image src={"/images/icons/right-icon-dark.avif"} alt="check" width={38} height={38} className="mt-0.5 flex-shrink-0"/>
      <p className="text-gray-700 text-base md:text-[18px] leading-6 my-4">{text}</p>
    </div>
  );
}
