"use client";

import { Phone, MessageCircle, Smartphone, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

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
      "WhatsApp Business",
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
      className="relative flex flex-col items-center justify-center py-14 md:py-20 px-[4%] md:px-[0%] overflow-hidden bg-white"
    >
      {/* Background glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.25)_0%,rgba(255,255,255,0)_70%)] blur-3xl"></div>
      </div> */}

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-medium text-black tracking-tight">
            {t("Our AI-Powered Services")}
          </h2>
          {/* <p className="text-gray-600 text-base sm:text-lg mt-4">
            {t(
              "Transform your business communication with our comprehensive suite of AI agents designed for every interaction."
            )}
          </p> */}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-[#111111] rounded-[50px] p-6 md:p-12 relative z-10">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900/90 to-gray-800/90 border border-gray-700 rounded-3xl p-8 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-[18px] sm:text-2xl font-normal text-white">
                  {t(service.titleKey)}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 mb-5">
                {t(service.descriptionKey)}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.featuresKeys.map((feature, idx) => (
                  <div
                    key={idx}
                    className="text-gray-400 text-[14px] font-normal flex items-center"
                  >
                    <span className="mr-1.5 text-purple-400">•</span>
                    {t(feature)}
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
