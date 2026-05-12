"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Cpu,
  Cloud,
  BarChart3,
  ShieldCheck,
  Globe,
  Phone,
  Database,
  Building2,
} from "lucide-react";

const coreFeatures = [
  {
    title: "High-volume Call Handling",
    icon: <Phone className="w-7 h-7 sm:w-8 sm:h-8" />,
    description: "Support busy call periods, after-hours demand, and overflow without adding front-desk pressure.",
  },
  {
    title: "24/7 Availability",
    icon: <Cloud className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Answer after-hours, lunch-hour, and overflow calls with an always-on AI receptionist.",
  },
  {
    title: "Smart Routing and Transfers",
    icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />,
    description: "Route urgent, billing, insurance, scheduling, and clinical requests to the right staff member.",
  },
  {
    title: "Real-time Analytics",
    icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Monitor call outcomes, appointment requests, patient intent, and follow-up activity.",
  },
  {
    title: "Healthcare Security",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
    description: "Privacy-minded workflows with controlled access, audit trails, and sensitive detail protection.",
  },
  {
    title: "Multilingual Patient Support",
    icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Support diverse patient communities with natural multilingual conversations.",
  },
  {
    title: "PMS Integration",
    icon: <Database className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Connect call handling with supported dental practice management and scheduling workflows.",
  },
  {
    title: "DSO Support",
    icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Give multi-location teams location-level visibility, consistent call workflows, and group-level reporting.",
  },
];

const pmsIntegrations = [
  {
    name: "Dentrix",
    category: "Dental PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.dentrix.com",
    source: "dentrix.com",
  },
  {
    name: "Eaglesoft",
    category: "Dental PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.pattersondental.com",
    source: "pattersondental.com",
  },
  {
    name: "Open Dental",
    category: "Dental PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.opendental.com",
    source: "opendental.com",
  },
  {
    name: "Dentrix Enterprise",
    category: "Enterprise PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.dentrixenterprise.com",
    source: "dentrixenterprise.com",
  },
  {
    name: "Dolphin",
    category: "Ortho PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.dolphinimaging.com",
    source: "dolphinimaging.com",
  },
  {
    name: "OrthoTrac",
    category: "Ortho PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.carestreamdental.com",
    source: "carestreamdental.com",
  },
  {
    name: "PracticeWorks",
    category: "Dental PMS",
    logo: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.carestreamdental.com",
    source: "carestreamdental.com",
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
    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
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
          className="relative h-9 w-9 object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export const AdvancedAiFeatures = () => {
  const { t } = useTranslation();

  const getCardDesign = (feature: any, index: number) => (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.0,
        delay: index * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-purple-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-[0_22px_70px_rgba(108,71,255,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-violet-400 to-emerald-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="text-purple-600">{feature.icon}</div>
          <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-black">
            {t(feature.title)}
          </h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-[14px] md:text-[15px] leading-relaxed">
          {t(feature.description)}
        </p>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-purple-200 via-black/10 to-transparent" />
      </div>
    </motion.article>
  );

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

        {/* ===== Core Features Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-10 cursor-pointer">
          {coreFeatures.map((feature, index) => getCardDesign(feature, index))}
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
                <p className="mt-3 text-[11px] text-gray-400">
                  {integration.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
