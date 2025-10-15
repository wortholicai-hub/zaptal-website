"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Heart,
  ShoppingCart,
  CreditCard,
  Briefcase,
  GraduationCap,
  Plane,
  Scale,
  Store,
  HandHeart,
  LucideIcon,
} from "lucide-react";

// === ICON MAP (typed) ===
const industryIcons = {
  healthcare: Heart,
  ecommerce: ShoppingCart,
  financial: CreditCard,
  professional: Briefcase,
  realestate: Building2,
  nonprofit: HandHeart,
  education: GraduationCap,
  travel: Plane,
  retail: Store,
  legal: Scale,
} as const;

type IndustryKey = keyof typeof industryIcons;

interface Industry {
  id: number;
  key: IndustryKey;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function IndustrySolutions() {
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  const [visibleStart, setVisibleStart] = useState(0);

  const industries: Industry[] = (
    Object.keys(industryIcons) as IndustryKey[]
  ).map((key, index) => ({
    id: index + 1,
    key,
    title: t(`industry.list.${key}.title`),
    description: t(`industry.list.${key}.description`),
    icon: industryIcons[key],
  }));

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setVisibleStart((prev) => (prev + 5) % industries.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, industries.length]);

  const visibleIndustries = industries
    .slice(visibleStart, visibleStart + 5)
    .concat(
      visibleStart + 5 > industries.length
        ? industries.slice(0, (visibleStart + 5) % industries.length)
        : []
    );

  return (
    <section className="relative py-8 md:py-20 overflow-hidden bg-white">
      {/* Wave Card Animations */}
      <style>{`
        .wave-card {
          position: absolute;
          left: 50%;
          top: 50%;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wave-card:nth-child(1) { animation: wave1 12s infinite ease-in-out; }
        .wave-card:nth-child(2) { animation: wave2 12s infinite ease-in-out; }
        .wave-card:nth-child(3) { animation: wave3 12s infinite ease-in-out; }
        .wave-card:nth-child(4) { animation: wave4 12s infinite ease-in-out; }
        .wave-card:nth-child(5) { animation: wave5 12s infinite ease-in-out; }
        .wave-paused .wave-card { animation-play-state: paused; }

        @keyframes wave1 {
          0%,100% { transform: translate(-50%, -50%) translateX(-500px) translateY(-80px) scale(0.6); z-index:1; opacity:0.4; }
          20% { transform: translate(-50%, -50%) translateX(-250px) translateY(-40px) scale(0.8); z-index:3; opacity:0.7; }
          40% { transform: translate(-50%, -50%) translateX(0) translateY(0) scale(1.1); z-index:5; opacity:1; }
          60% { transform: translate(-50%, -50%) translateX(250px) translateY(-40px) scale(0.8); z-index:3; opacity:0.7; }
          80% { transform: translate(-50%, -50%) translateX(500px) translateY(-80px) scale(0.6); z-index:1; opacity:0.4; }
        }
        @keyframes wave2 { 0%,100%{transform:translate(-50%,-50%) translateX(-250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} 20%{transform:translate(-50%,-50%) translateX(0) translateY(0) scale(1.1);z-index:5;opacity:1;} 40%{transform:translate(-50%,-50%) translateX(250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} 60%{transform:translate(-50%,-50%) translateX(500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 80%{transform:translate(-50%,-50%) translateX(-500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} }
        @keyframes wave3 { 0%,100%{transform:translate(-50%,-50%) translateX(0) translateY(0) scale(1.1);z-index:5;opacity:1;} 20%{transform:translate(-50%,-50%) translateX(250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} 40%{transform:translate(-50%,-50%) translateX(500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 60%{transform:translate(-50%,-50%) translateX(-500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 80%{transform:translate(-50%,-50%) translateX(-250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} }
        @keyframes wave4 { 0%,100%{transform:translate(-50%,-50%) translateX(250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} 20%{transform:translate(-50%,-50%) translateX(500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 40%{transform:translate(-50%,-50%) translateX(-500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 60%{transform:translate(-50%,-50%) translateX(-250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} 80%{transform:translate(-50%,-50%) translateX(0) translateY(0) scale(1.1);z-index:5;opacity:1;} }
        @keyframes wave5 { 0%,100%{transform:translate(-50%,-50%) translateX(500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 20%{transform:translate(-50%,-50%) translateX(-500px) translateY(-80px) scale(0.6);z-index:1;opacity:0.4;} 40%{transform:translate(-50%,-50%) translateX(-250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} 60%{transform:translate(-50%,-50%) translateX(0) translateY(0) scale(1.1);z-index:5;opacity:1;} 80%{transform:translate(-50%,-50%) translateX(250px) translateY(-40px) scale(0.8);z-index:3;opacity:0.7;} }
      `}</style>

      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-6">
          <h2 className="text-[35px] sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            {t("industry.title")}
          </h2>
          {/* <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
            {t("industry.subtitle")}
          </p> */}
        </div>

        {/* Wave Carousel */}
        <div
          className={`relative h-[350px] sm:h-[370px] md:h-[400px] ${
            isPaused ? "wave-paused" : ""
          }`}
          style={{ perspective: "2000px" }}
        >
          {visibleIndustries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="wave-card w-[280px] sm:w-[300px] lg:w-[350px] h-[180px] sm:h-[200px] lg:h-[280px] bg-white rounded-2xl p-6 sm:p-10 shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="text-black mb-4 sm:mb-5">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
