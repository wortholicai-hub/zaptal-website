"use client";

import { Phone, MessageCircle, Smartphone, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";
import HighlightClinicText from "@/components/common/HighlightClinicText";

const serviceCategories = [
  {
    titleKey: "Inbound AI Agents",
    icon: <Phone className="w-8 h-8 text-purple-400" />,
    descriptionKey: "24/7 Customer Service Excellence",
    featuresKeys: [
      "Call Reception & Routing",
      "Lead Qualification",
      "Appointment Scheduling",
      "Customer Support",
      "Order Processing",
      "Information Services",
    ],
  },
  {
    titleKey: "Outbound AI Agents",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    descriptionKey: "Proactive Customer Engagement",
    featuresKeys: [
      "Sales Calls",
      "Follow-up Sequences",
      "Survey & Research",
      "Appointment Reminders",
      "Telemarketing",
      "Customer Retention",
    ],
  },
  {
    titleKey: "Texting AI Agents",
    icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
    descriptionKey: "Multi-Channel Messaging Solutions",
    featuresKeys: [
      "SMS Marketing",
      "Two-Way Conversations",
      "Appointment Management",
      "Order Updates",
      "Lead Nurturing",
      "Emergency Communications",
    ],
  },
  {
    titleKey: "Chatbot Solutions",
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    descriptionKey: "Intelligent Web & Platform Integration",
    featuresKeys: [
      "Website Chatbots",
      "Business Messaging",
      "Facebook Messenger",
      "Multi-Language Support",
      "E-commerce Integration",
      "Knowledge Base Access",
    ],
  },
];

export const AIPoweredSolution = () => {
  const { t } = useTranslation();

  return (
    <section
      id="ai-services"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-12 sm:px-6 md:py-16 lg:px-2"
    >
      {/* Background glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.25)_0%,rgba(255,255,255,0)_70%)] blur-3xl"></div>
      </div> */}

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            <HighlightClinicText text={t("Our AI-Powered Services")} />
          </h2>
          {/* <p className="text-gray-600 text-base sm:text-lg mt-4">
            {t(
              "Transform your business communication with our comprehensive suite of AI agents designed for every interaction."
            )}
          </p> */}
        </div>

        {/* Service Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-4 bg-black p-0 sm:grid-cols-2 lg:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,#111111_0%,#050505_58%,#15101f_100%)] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_80px_rgba(124,58,237,0.26),0_22px_55px_rgba(0,0,0,0.5)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.13),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
              <span className="pointer-events-none absolute right-6 top-4 text-[64px] font-semibold leading-none text-white/20 transition-colors duration-300 group-hover:text-white sm:text-[76px]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon + Title */}
              <div className="relative z-10 flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-[18px] sm:text-2xl font-normal !text-white">
                  <HighlightClinicText text={t(service.titleKey)} />
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-sm sm:text-base !text-white mb-5">
                {t(service.descriptionKey)}
              </p>

              {/* Features */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.featuresKeys.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-[14px] font-normal !text-white"
                  >
                    <span className="mr-1.5 text-purple-400">•</span>
                    <HighlightClinicText text={t(feature)} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
