"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DotPatternGrid } from "../ServicesSection/ServicesSection";
import {
  Cpu,
  Cloud,
  BarChart3,
  ShieldCheck,
  Globe,
  Phone,
  Workflow,
} from "lucide-react";
import {
  SiSalesforce,
  SiHubspot,
  SiGooglecalendar,
  SiZapier,
  SiSlack,
  SiTwilio,
  SiMeta,
  SiZoho
} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { CgMonday } from "react-icons/cg";

const coreFeatures = [
  {
    title: "Unlimited Concurrent Calls",
    icon: <Phone className="w-7 h-7 sm:w-8 sm:h-8" />,
    description: "Handle thousands of calls without any capacity limitations",
  },
  {
    title: "24/7 Availability",
    icon: <Cloud className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Never miss a call or opportunity with our always-on AI agents",
  },
  {
    title: "Intelligent Call Distribution",
    icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />,
    description: "Smart routing based on caller needs and agent availability",
  },
  {
    title: "Real-time Analytics",
    icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Live performance monitoring with detailed conversation insights",
  },
  {
    title: "Enterprise Security",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
    description: "GDPR compliant, SOC 2 certified with end-to-end encryption",
  },
  {
    title: "Multi-Language Support",
    icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8" />,
    description:
      "Communicate globally in different languages with natural fluency",
  },
];

const integrations = [
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0", category: "CRM" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", category: "Marketing" },
  {
    name: "Calendar",
    icon: SiGooglecalendar,
    color: "#4285F4",
    category: "Scheduling",
  },
  { name: "Meta", icon: SiMeta, color: "#1877F2", category: "Social" },
  { name: "Monday.com", icon: CgMonday, color: "#FF3D57", category: "Project Management" },
  { name: "Slack", icon: SiSlack, color: "#4A154B", category: "Communication" },
  {
    name: "Teams",
    icon: BsMicrosoftTeams,
    color: "#6264A7",
    category: "Communication",
  },
  {
    name: "Zoho CRM",
    icon: SiZoho,
    color: "#C8202D",
    category: "CRM",
  },
];

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
      // whileHover={{
      //   scale: 1.03,
      //   y: -5,
      //   boxShadow: "0 10px 25px rgba(174, 142, 231, 0.25)",
      // }}
      className="border-purple-500/40 rounded-xl border w-full bg-white hover:bg-purple-50 transition-all duration-300"
    >
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
        <div className="flex flex-wrap gap-3 mt-5">
          <DotPatternGrid />
          <DotPatternGrid />
          <DotPatternGrid />
          <DotPatternGrid />
        </div>
      </div>
    </motion.article>
  );

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center py-10 px-[4%] md:px-[0%] bg-white"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-9">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl text-black font-medium leading-tight mb-3">
            {t("Advanced AI Features")}
          </h2>
        </div>

        {/* ===== Core Features Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-10 cursor-pointer">
          {coreFeatures.map((feature, index) => getCardDesign(feature, index))}
        </div>

        {/* ===== Integrations Section ===== */}
        <div className="text-center mb-10 md:mb-0 pt-16 pb-8">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-medium text-black mb-3 md:mb-0">
            {t("Seamless Integrations")}
          </h2>
        </div>

        {/* ===== Integrations Grid + Image ===== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-full">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full sm:w-fit">
            {integrations.map((integration, i) => {
              const IconComponent = integration.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  // whileHover={{
                  //   scale: 1.05,
                  //   boxShadow: `0 8px 20px ${integration.color}40`,
                  // }}
                  className="group bg-white rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center border border-gray-300 hover:border-current hover:shadow-[inset_0_0_12px_currentColor] transition-all duration-400"
                  style={{ color: integration.color }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded mb-3 border-2 transition-all duration-300 group-hover:border-current group-hover:shadow-[inset_0_0_10px_currentColor]"
                    style={{
                      borderColor: integration.color,
                      backgroundColor: `${integration.color}10`,
                    }}
                  >
                    <IconComponent
                      className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: integration.color }}
                    />
                  </div>
                  <h4 className="text-[13px] sm:text-[15px] md:text-[16px] font-semibold text-gray-700 text-center">
                    {t(integration.name)}
                  </h4>
                  <p className="text-[11px] sm:text-[13px] md:text-[14px] text-gray-500 text-center">
                    {t(integration.category)}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ✅ Image (No scroll issues, responsive and contained) */}
          <div className="flex justify-center items-center w-full md:w-auto p-2">
            <img
              src="/images/ai-features/integration-tools2.png"
              alt="Switch"
              className="w-64 sm:w-80 md:w-[320px] lg:w-[320px] object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
