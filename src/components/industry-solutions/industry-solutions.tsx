"use client";

import { useTranslation } from "react-i18next";
import {
  Activity,
  Building2,
  CalendarCheck,
  ClipboardList,
  HandHeart,
  HeartPulse,
  Hospital,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  LucideIcon,
} from "lucide-react";

const industryIcons = {
  healthcare: Stethoscope,
  ecommerce: CalendarCheck,
  financial: Sparkles,
  professional: Building2,
  realestate: HeartPulse,
  nonprofit: HandHeart,
  education: Hospital,
  travel: Activity,
  retail: ClipboardList,
  legal: ShieldCheck,
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

  const industries: Industry[] = (
    Object.keys(industryIcons) as IndustryKey[]
  ).map((key, index) => ({
    id: index + 1,
    key,
    title: t(`industry.list.${key}.title`),
    description: t(`industry.list.${key}.description`),
    icon: industryIcons[key],
  }));

  return (
    <section className="relative overflow-hidden bg-[#06040b] px-4 pb-32 pt-36 text-white sm:px-6 md:pb-40 md:pt-40 lg:px-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(139,92,246,0.32),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,rgba(21,10,45,0.9),rgba(3,4,10,0.78)_45%,rgba(8,27,33,0.86))]" />
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[350px] w-[175%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_28px_80px_rgba(139,92,246,0.16)]" />
      <div className="pointer-events-none absolute bottom-[-270px] left-1/2 h-[360px] w-[175%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_-24px_70px_rgba(139,92,246,0.14)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="mb-10 text-center">
            <h2 className="text-[30px] font-medium leading-tight text-white sm:text-[38px] md:text-[44px] lg:text-[48px]">
            {t("industry.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <article
                key={industry.id}
                className="group relative min-h-[172px] overflow-hidden rounded-[18px] border border-purple-200/15 bg-[linear-gradient(145deg,rgba(90,74,125,0.48)_0%,rgba(20,57,79,0.34)_42%,rgba(5,4,6,0.92)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_70px_rgba(124,58,237,0.22),0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-4 top-4 text-[40px] font-semibold leading-none text-white/14 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[14px] bg-purple-400/15 text-purple-300 transition-colors duration-300 group-hover:bg-purple-300 group-hover:text-black">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="relative z-10 mt-5 text-[17px] font-semibold leading-snug text-white">
                  {industry.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-white/58">
                  {industry.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
