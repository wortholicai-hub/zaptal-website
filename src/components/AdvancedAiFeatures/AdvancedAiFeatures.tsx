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
  SiZoho,
  SiMailchimp,
  SiIntercom,
  SiZendesk,
  SiNotion,
  SiAsana,
  SiTrello,
  SiClickup,
  SiAirtable,
  SiDiscord,
  SiWhatsapp,
  SiPiped,
  SiTelegram
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

const integrationsRow1 = [
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0", category: "CRM" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", category: "Marketing" },
  { name: "Calendar", icon: SiGooglecalendar, color: "#4285F4", category: "Scheduling" },
  { name: "Meta", icon: SiMeta, color: "#1877F2", category: "Social" },
  { name: "Monday.com", icon: CgMonday, color: "#FF3D57", category: "Project Management" },
  { name: "Slack", icon: SiSlack, color: "#4A154B", category: "Communication" },
  { name: "Teams", icon: BsMicrosoftTeams, color: "#6264A7", category: "Communication" },
  { name: "Zoho CRM", icon: SiZoho, color: "#C8202D", category: "CRM" },
  { name: "Pipedrive", icon: SiPiped, color: "#1A1A1A", category: "CRM" },
  { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B", category: "Marketing" },
  { name: "Telegram", icon: SiTelegram, color: "#0088CC", category: "Messaging" },
];

const integrationsRow2 = [
  { name: "Intercom", icon: SiIntercom, color: "#1F8DED", category: "Communication" },
  { name: "Zendesk", icon: SiZendesk, color: "#03363D", category: "Support" },
  { name: "Notion", icon: SiNotion, color: "#000000", category: "Productivity" },
  { name: "Asana", icon: SiAsana, color: "#F06A6A", category: "Project Management" },
  { name: "Trello", icon: SiTrello, color: "#0052CC", category: "Project Management" },
  { name: "ClickUp", icon: SiClickup, color: "#7B68EE", category: "Productivity" },
  { name: "Zapier", icon: SiZapier, color: "#FF4A00", category: "Automation" },
  { name: "Twilio", icon: SiTwilio, color: "#F22F46", category: "Communication" },
  { name: "Airtable", icon: SiAirtable, color: "#18BFFF", category: "Database" },
  { name: "Discord", icon: SiDiscord, color: "#5865F2", category: "Communication" },
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366", category: "Messaging" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-10 cursor-pointer">
          {coreFeatures.map((feature, index) => getCardDesign(feature, index))}
        </div>

        {/* ===== Integrations Title ===== */}
        <div className="text-center mb-10 md:mb-0 pt-16 pb-8">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-medium text-black mb-3 md:mb-0">
            {t("Seamless Integrations")}
          </h2>
        </div>

        {/* ===== Integrations Section ===== */}
        <div className="relative overflow-hidden py-8">
          {/* First Row - Left to Right */}
          <div className="flex mb-6">
            <div className="flex animate-scroll-ltr">
              {[...integrationsRow1, ...integrationsRow1, ...integrationsRow1].map((integration, i) => {
                const IconComponent = integration.icon;
                return (
                  <div
                    key={`row1-${i}`}
                    className="group bg-white rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center border border-gray-300 hover:border-current hover:shadow-[inset_0_0_12px_currentColor] transition-all duration-400 flex-shrink-0 w-[200px] mx-2"
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex">
            <div className="flex animate-scroll-rtl">
              {[...integrationsRow2, ...integrationsRow2, ...integrationsRow2].map((integration, i) => {
                const IconComponent = integration.icon;
                return (
                  <div
                    key={`row2-${i}`}
                    className="group bg-white rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center border border-gray-300 hover:border-current hover:shadow-[inset_0_0_12px_currentColor] transition-all duration-400 flex-shrink-0 w-[200px] mx-2"
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes scroll-ltr {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-rtl {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-ltr {
            animation: scroll-ltr 45s linear infinite;
          }

          .animate-scroll-rtl {
            animation: scroll-rtl 45s linear infinite;
          }

          .animate-scroll-ltr:hover,
          .animate-scroll-rtl:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};
