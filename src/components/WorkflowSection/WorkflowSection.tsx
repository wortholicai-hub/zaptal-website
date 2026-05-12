"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarCheck,
  Database,
  FileAudio,
  ClipboardList,
  Clock3,
  PhoneCall,
  PhoneOff,
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
    stage: string;
    Icon: LucideIcon;
  }[] = [
    {
      label: "Call answered",
      detail: "Shows whether the patient reached the AI receptionist or the call was missed.",
      stage: "Status",
      Icon: PhoneCall,
    },
    {
      label: "Appointment request",
      detail: "Tags callers who asked to book, reschedule, cancel, or check availability.",
      stage: "Scheduling",
      Icon: CalendarCheck,
    },
    {
      label: "Missed call",
      detail: "Makes missed inquiries visible so staff can review the record.",
      stage: "Status",
      Icon: PhoneOff,
    },
    {
      label: "Needs human review",
      detail: "Flags calls where a team member should read the summary before acting.",
      stage: "Review",
      Icon: Route,
    },
    {
      label: "Returning patient",
      detail: "Identifies when the caller appears to be an existing patient.",
      stage: "Patient",
      Icon: UserCheck,
    },
    {
      label: "Call Summaries",
      detail: "Gives staff the call outcome, key details, and reason for the call.",
      stage: "Summary",
      Icon: FileAudio,
    },
    {
      label: "PMS integration",
      detail: "Connects supported call and scheduling workflows with the clinic PMS.",
      stage: "PMS",
      Icon: Database,
    },
    {
      label: "Insurance question",
      detail: "Tags calls where the patient asked about coverage, billing, or plan details.",
      stage: "Billing",
      Icon: ClipboardList,
    },
    {
      label: "Call analytics",
      detail: "Shows call volume, appointment requests, missed calls, and common reasons.",
      stage: "Dashboard",
      Icon: BarChart3,
    },
    {
      label: "Sensitive details",
      detail: "Marks calls that should stay behind controlled staff access.",
      stage: "Privacy",
      Icon: ShieldCheck,
    },
    {
      label: "Urgent concern",
      detail: "Flags calls that may need faster front-desk or clinical review.",
      stage: "Priority",
      Icon: Stethoscope,
    },
    {
      label: "After-hours call",
      detail: "Separates calls that came in while the office was closed.",
      stage: "Timing",
      Icon: Clock3,
    },
  ];

  return (
    <section
      id="workflow"
      className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-2"
    >
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="pointer-events-none absolute right-[-18%] top-[14%] h-[520px] w-[520px] rounded-full bg-purple-100 blur-3xl" />
        <h2 className="relative z-10 w-full text-center text-[30px] font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
          {t("workflow.headerLine1")} {t("workflow.headerLine2")}
        </h2>

        <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08080a] p-3 shadow-[0_28px_100px_rgba(0,0,0,0.16)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(108,71,255,0.35),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(20,184,166,0.18),transparent_34%)]" />
            <div className="relative rounded-[22px] border border-white/10 bg-white/[0.045] p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">
                    Call intelligence tags
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-[-0.01em] text-white">
                    Every call becomes easier to review
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                  12 tags
                </span>
              </div>

              <div className="grid gap-3">
                {features.map(({ label, detail, stage, Icon }, i) => (
                  <article
                    key={label}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.055] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.085]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-white/[0.08] text-purple-200 group-hover:bg-white group-hover:text-purple-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[15px] font-semibold text-white">
                          {label}
                        </span>
                        <span className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
                          {stage}
                        </span>
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/58">
                        {detail}
                      </span>
                    </span>
                    <span className="text-xs font-semibold text-white/28">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-[0_30px_100px_rgba(108,71,255,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(108,71,255,0.18),transparent_42%),linear-gradient(135deg,#fff_0%,#fbf8ff_58%,#f4efff_100%)]" />
            <img
              src="/sms.svg"
              alt="Dental voice AI workflow connecting calls, messages, scheduling, patient records, and analytics"
              className="relative z-10 h-full min-h-[520px] w-full object-contain p-4 drop-shadow-[0_28px_70px_rgba(108,71,255,0.2)] sm:p-8"
            />
            <div className="absolute bottom-5 left-5 right-5 z-20 grid gap-2 sm:grid-cols-3">
              {["Calls", "Bookings", "Follow-ups"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/80 bg-white/80 px-3 py-2 text-center text-xs font-semibold text-black/70 shadow-[0_10px_26px_rgba(0,0,0,0.08)] backdrop-blur-md"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
