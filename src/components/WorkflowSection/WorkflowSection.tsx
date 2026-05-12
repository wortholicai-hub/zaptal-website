"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarCheck,
  Database,
  FileAudio,
  ClipboardList,
  Route,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WorkflowSection() {
  const { t } = useTranslation();

  const features: {
    label: string;
    detail: string;
    Icon: LucideIcon;
  }[] = [
    {
      label: "Appointment request",
      detail: "Book, reschedule, cancel, or check availability.",
      Icon: CalendarCheck,
    },
    {
      label: "Needs human review",
      detail: "Flags calls that need staff attention.",
      Icon: Route,
    },
    {
      label: "Returning patient",
      detail: "Identifies existing patient callers.",
      Icon: UserCheck,
    },
    {
      label: "Call Summaries",
      detail: "Shows outcome, details, and call reason.",
      Icon: FileAudio,
    },
    {
      label: "PMS integration",
      detail: "Connects supported PMS workflows.",
      Icon: Database,
    },
    {
      label: "Insurance question",
      detail: "Captures coverage and billing questions.",
      Icon: ClipboardList,
    },
    {
      label: "Call analytics",
      detail: "Tracks volume, requests, and call reasons.",
      Icon: BarChart3,
    },
    {
      label: "Sensitive details",
      detail: "Keeps sensitive calls controlled.",
      Icon: ShieldCheck,
    },
    {
      label: "Urgent concern",
      detail: "Highlights calls needing fast review.",
      Icon: Stethoscope,
    },
  ];

  return (
    <section
      id="workflow"
      className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-2"
    >
      <div className="relative mx-auto w-full max-w-[1200px]">
        <h2 className="relative z-10 w-full text-center text-[30px] font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
          {t("workflow.headerLine1")} {t("workflow.headerLine2")}
        </h2>

        <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-4">
          <div className="relative z-20 px-1 py-2 sm:px-2">
            <div className="relative">
              <div className="mb-4 border-b border-black/10 pb-4">
                <div>
                  <h3 className="text-center text-xl font-semibold tracking-[-0.01em] text-black sm:text-2xl">
                    Every call becomes easier to review
                  </h3>
                </div>
              </div>

              <div className="relative grid gap-2.5 sm:gap-2">
                <span className="pointer-events-none absolute bottom-3 left-4 top-3 w-px bg-purple-200 sm:left-1/2 sm:-translate-x-1/2" />
                {features.map(({ label, detail, Icon }, index) => {
                  const isRight = index % 2 === 1;

                  return (
                    <div key={label} className="relative min-h-[52px] sm:min-h-[58px]">
                      <span className="absolute left-4 top-6 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black ring-4 ring-black/8 sm:left-1/2" />
                      <article
                        tabIndex={0}
                        className={`group relative ml-8 grid h-[52px] grid-cols-[auto_1fr] items-center gap-2.5 rounded-[16px] border border-purple-100 bg-white/92 px-3 text-left shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-[2px] transition-all duration-300 hover:z-20 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-white hover:shadow-[0_16px_36px_rgba(108,71,255,0.1)] focus:z-20 focus:bg-white focus:outline-none focus-visible:border-purple-300 sm:ml-0 sm:h-[54px] sm:w-[calc(50%-22px)] ${
                          isRight ? "sm:ml-auto" : "sm:mr-auto"
                        }`}
                      >
                        <span
                          className={`pointer-events-none absolute top-1/2 hidden h-px w-[22px] -translate-y-1/2 bg-purple-200 sm:block ${
                            isRight ? "left-[-22px]" : "right-[-22px]"
                          }`}
                        />
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-purple-600 text-white transition-colors duration-300 group-hover:bg-purple-700 group-focus:bg-purple-700">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[14px] font-semibold leading-5 text-black sm:text-[15px]">
                            {label}
                          </span>
                          <span className="pointer-events-none absolute left-0 right-0 top-[calc(100%+6px)] z-30 rounded-xl border border-black/10 bg-white px-3 py-2 text-xs leading-5 text-gray-600 opacity-0 shadow-[0_18px_42px_rgba(15,23,42,0.14)] transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
                            {detail}
                          </span>
                        </span>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[560px] items-center justify-center lg:-ml-10 lg:min-h-[640px]">
            <img
              src="/sms.svg"
              alt="Dental voice AI workflow connecting calls, messages, scheduling, patient records, and analytics"
              className="h-full min-h-[610px] w-full scale-[1.26] object-contain [mask-image:linear-gradient(to_right,transparent_0%,transparent_7%,black_34%,black_100%)] lg:min-h-[700px] lg:scale-[1.32]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
