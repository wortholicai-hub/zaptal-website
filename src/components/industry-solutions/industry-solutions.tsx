"use client";

import { useTranslation } from "react-i18next";
import HighlightClinicText from "@/components/common/HighlightClinicText";
import {
  BadgeCheck,
  BriefcaseMedical,
  ChartNetwork,
  ClipboardList,
  HeartPulse,
  Languages,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Syringe,
  LucideIcon,
} from "lucide-react";

const industryIcons = {
  healthcare: Stethoscope,
  ecommerce: SmilePlus,
  financial: HeartPulse,
  professional: ChartNetwork,
  realestate: BriefcaseMedical,
  nonprofit: Languages,
  education: BadgeCheck,
  travel: Sparkles,
  retail: Syringe,
  legal: ClipboardList,
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
            <HighlightClinicText text={t("industry.title")} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <article
                key={industry.id}
                className="group relative min-h-[172px] overflow-hidden rounded-[16px] border border-purple-100 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-[0_28px_70px_rgba(124,58,237,0.18),0_18px_45px_rgba(15,23,42,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.12),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.9),transparent_46%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-4 top-4 text-[40px] font-semibold leading-none text-purple-100 transition-all duration-300 group-hover:text-purple-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[14px] bg-purple-50 text-purple-700 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="relative z-10 mt-5 text-[17px] font-semibold leading-snug text-black">
                  <HighlightClinicText text={industry.title} />
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-6 !text-black">
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
