"use client";

import {
  Target,
  Rocket,
  Handshake,
  Zap,
  Lock,
  TrendingUp,
  Mic,
  Briefcase,
  RefreshCw,
  Bot,
  BarChart3,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t("about.values.strategic_focus.title"),
      description: t("about.values.strategic_focus.description"),
    },
    {
      icon: Rocket,
      title: t("about.values.innovation_first.title"),
      description: t("about.values.innovation_first.description"),
    },
    {
      icon: Handshake,
      title: t("about.values.true_partnership.title"),
      description: t("about.values.true_partnership.description"),
    },
    {
      icon: Zap,
      title: t("about.values.execution_excellence.title"),
      description: t("about.values.execution_excellence.description"),
    },
    {
      icon: Lock,
      title: t("about.values.security_reliability.title"),
      description: t("about.values.security_reliability.description"),
    },
    {
      icon: TrendingUp,
      title: t("about.values.scalable_solutions.title"),
      description: t("about.values.scalable_solutions.description"),
    },
  ];

  const services = [
    {
      icon: Mic,
      title: t("about.services.ai_voice.title"),
      description: t("about.services.ai_voice.description"),
    },
    {
      icon: Briefcase,
      title: t("about.services.crm_automation.title"),
      description: t("about.services.crm_automation.description"),
    },
    {
      icon: RefreshCw,
      title: t("about.services.custom_workflows.title"),
      description: t("about.services.custom_workflows.description"),
    },
    {
      icon: Bot,
      title: t("about.services.ai_integration.title"),
      description: t("about.services.ai_integration.description"),
    },
    {
      icon: BarChart3,
      title: t("about.services.data_intelligence.title"),
      description: t("about.services.data_intelligence.description"),
    },
    {
      icon: Users,
      title: t("about.services.lead_generation.title"),
      description: t("about.services.lead_generation.description"),
    },
  ];

  return (
    <div className="min-h-auto text-black">
      <div className="w-full px-4 max-w-[1200px] mx-auto mx-auto">
        {/* Hero Section */}
        <div className="min-h-auto flex items-center justify-center text-center px-5 py-10 relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-gray-200/30 rounded-full blur-3xl -top-64 -right-64 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-gray-300/20 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse"></div>

          <div className="max-w-4xl relative z-10"></div>
        </div>

        {/* Story Section */}
        <div className="max-w-[1200px] mx-auto px-5 py-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            {t("about.story.heading")}
          </h2>
          <div className="border border-black/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm bg-black/5">
            <p className="text-lg text-gray-800 mb-5 leading-relaxed">
              {t("about.story.paragraph1")}
            </p>
            <p className="text-lg text-gray-800 mb-5 leading-relaxed">
              {t("about.story.paragraph2")}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t("about.story.paragraph3")}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-[1200px] mx-auto px-5 py-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            {t("about.values.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="border border-black/20 rounded-xl p-8 backdrop-blur-sm bg-black/5 hover:bg-black/10 hover:border-black/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className="mb-5">
                    <IconComponent
                      className="w-10 h-10 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="border-t border-black/20 bg-black/5">
          <div className="max-w-[1200px] mx-auto px-5 py-10">
            <h2 className="text-4xl font-bold text-center mb-16 text-black">
              {t("about.services.heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="border border-black/20 rounded-xl p-7 backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="mb-3">
                      <IconComponent
                        className="w-8 h-8 text-black"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center px-5 py-24 bg-black/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-black">
              {t("about.cta.heading")}
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              {t("about.cta.description")}
            </p>
            <button className="px-12 py-4 border-2 border-black text-black rounded-full font-semibold text-lg hover:bg-black/10 hover:border-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
              {t("about.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
