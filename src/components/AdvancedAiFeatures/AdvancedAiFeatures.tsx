"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  BarChart3,
  Building2,
  Cloud,
  Cpu,
  Database,
  Globe,
  Phone,
  Plus,
  ShieldCheck,
} from "lucide-react";

const coreFeatures = [
  {
    title: "High-volume Call Handling",
    description: "Support busy call periods, after-hours demand, and overflow without adding front-desk pressure.",
    image: "/images/AI Features/1.png",
    Icon: Phone,
  },
  {
    title: "24/7 Availability",
    description:
      "Answer after-hours, lunch-hour, and overflow calls with an always-on AI receptionist.",
    image: "/images/AI Features/2.png",
    Icon: Cloud,
  },
  {
    title: "Smart Routing and Transfers",
    description: "Route urgent, billing, insurance, scheduling, and clinical requests to the right staff member.",
    image: "/images/AI Features/3.png",
    Icon: Cpu,
  },
  {
    title: "Real-time Analytics",
    description:
      "Monitor call outcomes, appointment requests, patient intent, and follow-up activity.",
    image: "/images/AI Features/4.png",
    Icon: BarChart3,
  },
  {
    title: "Healthcare Security",
    description: "Privacy-minded workflows with controlled access, audit trails, and sensitive detail protection.",
    image: "/images/AI Features/5.png",
    Icon: ShieldCheck,
  },
  {
    title: "Multilingual Patient Support",
    description:
      "Support diverse patient communities with natural multilingual conversations.",
    image: "/images/AI Features/6.png",
    Icon: Globe,
  },
  {
    title: "PMS Integration",
    description:
      "Connect call handling with supported dental practice management and scheduling workflows.",
    image: "/images/AI Features/7.png",
    Icon: Database,
  },
  {
    title: "DSO Support",
    description:
      "Give multi-location teams location-level visibility, consistent call workflows, and group-level reporting.",
    image: "/images/AI Features/8.png",
    Icon: Building2,
  },
];

const pmsIntegrations = [
  {
    name: "Dentrix",
    category: "Dental PMS",
    logo: "/images/PMS/Dentrix.png",
  },
  {
    name: "Eaglesoft",
    category: "Dental PMS",
    logo: "/images/PMS/eaglesoft.png",
  },
  {
    name: "Open Dental",
    category: "Dental PMS",
    logo: "/images/PMS/LogoBigO_Software.png",
  },
  {
    name: "Dentrix Enterprise",
    category: "Enterprise PMS",
    logo: "/images/PMS/dentrix-enterprise.webp",
  },
  {
    name: "Dolphin",
    category: "Ortho PMS",
    logo: "/images/PMS/dolphin.png",
  },
  {
    name: "OrthoTrac",
    category: "Ortho PMS",
    logo: "/images/PMS/orthotrac_web_logo-300x119.png",
  },
  {
    name: "PracticeWorks",
    category: "Dental PMS",
    logo: "/images/PMS/PW_Logo_FullColor.webp",
  },
];

function PmsLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = React.useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative flex h-16 w-24 items-center justify-center rounded-2xl border border-black/10 bg-white px-3 shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
      {!failed && (
        <span className="absolute text-sm font-bold text-purple-700/70">
          {initials}
        </span>
      )}
      {failed ? (
        <span className="text-sm font-bold text-purple-700">{initials}</span>
      ) : (
        <img
          src={logo}
          alt={`${name} logo`}
          className="relative max-h-10 w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export const AdvancedAiFeatures = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = React.useState(0);
  const selectedFeature = coreFeatures[activeFeature];

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-2"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-9">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl text-black font-medium leading-tight mb-3">
            {t("Advanced AI Features")}
          </h2>
        </div>

        {/* ===== Interactive Core Features ===== */}
        <div className="mb-10 grid w-full items-start gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="space-y-1.5 rounded-[30px] border border-black/10 bg-[#f7f8fb] p-2.5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:space-y-2 sm:p-3">
            {coreFeatures.map((feature, index) => {
              const isActive = activeFeature === index;
              const FeatureIcon = feature.Icon;

              return (
                <button
                  key={feature.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative flex w-full items-center justify-between gap-3 rounded-[18px] px-3.5 py-3 text-left transition-all duration-300 sm:px-4 ${
                    isActive
                      ? "bg-white text-black shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-purple-200"
                      : "text-gray-700 hover:bg-white/85 hover:text-black hover:shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-gray-500 group-hover:border-purple-200 group-hover:text-purple-700"
                      }`}
                    >
                      <FeatureIcon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-bold leading-snug tracking-[0.01em] sm:text-[17px]">
                        {t(feature.title)}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black group-hover:border-purple-200 group-hover:bg-purple-50"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative flex min-h-[460px] flex-col items-center justify-start sm:min-h-[540px] lg:min-h-[570px]">
            <motion.div
              key={selectedFeature.image}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[420px]"
            >
              <Image
                src={selectedFeature.image}
                alt={t(selectedFeature.title)}
                fill
                priority={activeFeature === 0}
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 390px, 86vw"
                className="object-contain"
              />
            </motion.div>
            <motion.div
              key={`${selectedFeature.title}-copy`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto mt-5 min-h-[104px] max-w-[680px] text-center sm:min-h-[96px]"
            >
              <p className="text-[17px] leading-8 text-gray-600 sm:text-lg sm:leading-8">
                {t(selectedFeature.description)}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ===== Integrations Title ===== */}
        <div className="text-center mb-8 pt-12">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-medium text-black mb-3 md:mb-0">
            PMS integrations
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base leading-7 text-gray-600">
            Zaptal is designed to support dental practice management workflows across the systems clinics and DSOs already use.
          </p>
        </div>

        {/* ===== Integrations Section ===== */}
        <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8ff_58%,#f4fffb_100%)] p-4 shadow-[0_28px_90px_rgba(108,71,255,0.12)] sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {pmsIntegrations.map((integration) => (
              <article
                key={integration.name}
                className="group flex min-h-[174px] flex-col items-center justify-center rounded-[22px] border border-black/10 bg-white/80 p-4 text-center shadow-[0_12px_34px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(108,71,255,0.14)]"
              >
                <PmsLogo name={integration.name} logo={integration.logo} />
                <h4 className="mt-4 text-[15px] font-bold text-gray-900">
                  {integration.name}
                </h4>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {integration.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
