"use client";

import { useTranslation } from "react-i18next";

export default function WorkflowSection() {
  const { t } = useTranslation();

  const featuresColumn1 = [
    t("workflow.feature1"),
    t("workflow.feature2"),
    t("workflow.feature3"),
    t("workflow.feature4"),
    t("workflow.feature5"),
    t("workflow.feature6"),
    t("workflow.feature7"),
  ];

  const featuresColumn2 = [
    t("workflow.feature8"),
    t("workflow.feature9"),
    t("workflow.feature10"),
    t("workflow.feature11"),
    t("workflow.feature12"),
  ];
  const features = [...featuresColumn1, ...featuresColumn2];

  return (
    <section
      id="workflow"
      className="w-full overflow-hidden bg-white px-[4%] py-14 md:py-20"
    >
      <div className="relative mx-auto min-h-[620px] w-full max-w-[1200px]">
        <div className="pointer-events-none absolute bottom-8 right-[-2%] top-[92px] hidden w-[55%] items-center justify-end md:flex">
          <div className="relative flex h-full w-full items-center justify-end overflow-hidden rounded-[34px] border border-purple-100/80 bg-white/55 shadow-[0_24px_90px_rgba(108,71,255,0.13)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white/45 to-purple-100/35" />
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-purple-300/25 blur-3xl" />
            <div className="absolute bottom-8 right-10 h-52 w-52 rounded-full bg-violet-400/18 blur-3xl" />
            <img
              src="/sms.svg"
              alt=""
              aria-hidden="true"
              className="relative z-10 h-full max-h-[540px] w-full object-contain object-right opacity-90"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-[38%] hidden w-[34%] bg-gradient-to-r from-white via-white/85 to-white/15 md:block" />

        <h2 className="relative z-10 w-full text-center text-[14px] font-medium leading-tight text-black min-[380px]:text-base sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
          {t("workflow.headerLine1")} {t("workflow.headerLine2")}
        </h2>

        <div className="relative z-10 flex min-h-[560px] w-full flex-col justify-center pt-8 md:w-[58%] md:pt-0">
          <div className="flex w-full max-w-[520px] flex-col gap-1.5 text-left">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group w-full rounded-l-lg rounded-r-sm border-y border-l border-black/10 bg-gradient-to-r from-white/95 via-white/70 to-transparent px-3.5 py-1 pr-28 shadow-[0_5px_18px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 [mask-image:linear-gradient(to_right,black_0%,black_58%,rgba(0,0,0,0.55)_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_58%,rgba(0,0,0,0.55)_76%,transparent_100%)] hover:-translate-y-0.5 hover:border-purple-300 hover:from-purple-50/95 hover:via-purple-50/48 hover:to-transparent hover:shadow-[0_8px_22px_rgba(108,71,255,0.09)]"
              >
                <p className="whitespace-nowrap text-[14px] font-bold leading-6 text-gray-800 transition-colors duration-300 group-hover:text-purple-800 sm:text-[15px] md:text-[16px]">
                  {feature}
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
