"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarCheck,
  Database,
  Languages,
  MessageCircle,
  PhoneCall,
  PhoneOff,
  RefreshCcw,
  Route,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WorkflowSection() {
  const { t } = useTranslation();

  const featuresColumn1: { label: string; Icon: LucideIcon }[] = [
    { label: t("workflow.feature1"), Icon: PhoneCall },
    { label: t("workflow.feature2"), Icon: CalendarCheck },
    { label: t("workflow.feature3"), Icon: PhoneOff },
    { label: t("workflow.feature4"), Icon: Route },
    { label: t("workflow.feature5"), Icon: MessageCircle },
    { label: t("workflow.feature6"), Icon: RefreshCcw },
    { label: t("workflow.feature7"), Icon: Send },
  ];

  const featuresColumn2: { label: string; Icon: LucideIcon }[] = [
    { label: t("workflow.feature8"), Icon: Database },
    { label: t("workflow.feature9"), Icon: Languages },
    { label: t("workflow.feature10"), Icon: BarChart3 },
    { label: t("workflow.feature11"), Icon: ShieldCheck },
  ];
  const features = [...featuresColumn1, ...featuresColumn2];

  return (
    <section
      id="workflow"
      className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-2"
    >
      <div className="relative mx-auto min-h-[620px] w-full max-w-[1200px]">
        <div className="pointer-events-none absolute bottom-[-4px] right-[-2%] top-[92px] hidden w-[58%] items-center justify-end md:flex">
          <div className="relative flex h-full w-full items-center justify-end overflow-hidden rounded-[16px] border border-purple-100/80 bg-white/55 shadow-[0_24px_90px_rgba(108,71,255,0.13)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white/45 to-purple-100/35" />
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-purple-300/25 blur-3xl" />
            <div className="absolute bottom-8 right-10 h-52 w-52 rounded-full bg-violet-400/18 blur-3xl" />
            <img
              src="/sms.svg"
              alt=""
              aria-hidden="true"
              className="relative z-10 h-full max-h-[620px] w-full object-contain object-right opacity-90"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-[38%] hidden w-[34%] bg-gradient-to-r from-white via-white/85 to-white/15 md:block" />

        <h2 className="relative z-10 w-full text-center text-[14px] font-medium leading-tight text-black min-[380px]:text-base sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
          {t("workflow.headerLine1")} {t("workflow.headerLine2")}
        </h2>

        <div className="relative z-10 flex min-h-[560px] w-full flex-col justify-start pt-8 md:w-[58%] md:pt-[38px]">
          <div className="flex w-full max-w-[520px] flex-col gap-1.5 text-left">
            {features.map(({ label, Icon }, i) => (
              <div
                key={i}
                className="group w-full rounded-l-lg rounded-r-sm border-y border-l border-black/10 bg-gradient-to-r from-white/95 via-white/70 to-transparent px-4 py-1.5 pr-28 shadow-[0_5px_18px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 [mask-image:linear-gradient(to_right,black_0%,black_58%,rgba(0,0,0,0.55)_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_58%,rgba(0,0,0,0.55)_76%,transparent_100%)] hover:-translate-y-0.5 hover:border-purple-300 hover:from-purple-50/95 hover:via-purple-50/48 hover:to-transparent hover:shadow-[0_8px_22px_rgba(108,71,255,0.09)]"
              >
                <p className="flex items-center gap-3 whitespace-nowrap text-[15px] font-bold leading-7 text-gray-800 transition-colors duration-300 group-hover:text-purple-800 sm:text-[16px] md:text-[17px]">
                  <Icon className="h-[18px] w-[18px] shrink-0 text-black transition-colors duration-300 group-hover:text-purple-800 md:h-5 md:w-5" />
                  <span>{label}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none mt-8 flex justify-center md:hidden">
            <img
              src="/sms.svg"
              alt=""
              aria-hidden="true"
              className="w-full max-w-[420px] object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
