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

        <div className="grid grid-cols-1 gap-4 rounded-[16px] border border-gray-200 bg-white p-3 sm:p-4 lg:grid-cols-3">
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
          <AISolutionCard
            type={`${t("customAI.workflowLabel")} ${t(
              "customAI.workflowTitle"
            )}`}
            description={t("customAI.workflowDesc")}
            features={workflowFeatures}
            variant="dark"
          />
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
  variant = "light",
}: {
  imageSrc?: string;
  type: string;
  description: string;
  features: string[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  // Highlight English and Dutch equivalents in purple
  const highlightType = (text: string) => {
    return text.replace(
      /(Inbound|Outbound|Inkomende|Uitgaande)/gi,
      `<span class="${isDark ? "text-purple-300" : "text-purple-600"} font-bold">$1</span>`
    );
  };

  return (
    <div
      className={`flex-1 rounded-[16px] p-4 transition-all duration-300 sm:p-5 ${
        isDark
          ? "border border-white/10 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.35)]"
          : "border border-gray-200 bg-white"
      }`}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="mb-3 flex items-center gap-5">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={type}
              className="h-12 w-12 shrink-0 scale-[1.7] object-contain"
            />
          )}
          <h3
            className={`text-[19px] font-bold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            dangerouslySetInnerHTML={{ __html: highlightType(type) }}
          />
        </div>
        <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-500"}`}>
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="space-y-1.5">
        {features.map((feature, i) => (
          <FeatureItem key={i} text={feature} dark={isDark} />
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
function FeatureItem({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="flex items-center justify-start gap-2 sm:gap-3">
      {dark ? (
        <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-purple-400/15 text-purple-200">
          <Check className="h-3.5 w-3.5" />
        </span>
      ) : (
        <Image
          src={"/images/icons/right-icon-dark.avif"}
          alt="check"
          width={26}
          height={26}
          className="mt-0.5 flex-shrink-0"
        />
      )}
      <p
        className={`my-1.5 text-sm leading-5 md:text-[15px] ${
          dark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
