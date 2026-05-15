"use client";

import Image from "next/image";
import Link from "next/link";
import HighlightClinicText from "@/components/common/HighlightClinicText";
import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  GitBranch,
  Headphones,
  Lock,
  Plug,
  Route,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const clinicGrowthCapabilities = [
  {
    icon: Headphones,
    title: "Call handling",
    value: "24/7 routing-ready",
  },
  {
    icon: CalendarClock,
    title: "Scheduling",
    value: "Calendar-aware flow",
  },
  {
    icon: GitBranch,
    title: "Automation",
    value: "Follow-up logic",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    value: "Performance view",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Designed for healthcare trust",
    description:
      "Every deployment is planned around secure intake, responsible data handling, and clear escalation rules for clinical teams.",
  },
  {
    icon: Route,
    title: "Built around real clinic flow",
    description:
      "Zaptal adapts to front-desk routines, provider schedules, recall programs, and patient communication preferences.",
  },
  {
    icon: TrendingUp,
    title: "Focused on measurable growth",
    description:
      "We help clinics recover lost demand, book more appointments, reduce manual work, and understand performance in one place.",
  },
];

const platform = [
  {
    icon: Headphones,
    title: "AI Receptionist",
    description:
      "Answer patient calls, qualify requests, capture details, and route urgent needs without making patients wait.",
  },
  {
    icon: CalendarClock,
    title: "Appointment Scheduling",
    description:
      "Coordinate booking requests, confirmations, reminders, cancellations, and reschedules across clinic workflows.",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description:
      "Automate follow-ups, treatment recalls, missed-call recovery, lead nurturing, and internal notifications.",
  },
  {
    icon: Plug,
    title: "CRM and PMS Integrations",
    description:
      "Connect patient communication with practice systems, CRMs, messaging tools, and custom operational software.",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    description:
      "Track call outcomes, booked appointments, response speed, patient demand, and revenue opportunities.",
  },
  {
    icon: Lock,
    title: "Security and Compliance",
    description:
      "Support compliant operating standards with controlled access, audit-ready workflows, and protected data handling.",
  },
];

const launchRoadmap = [
  {
    title: "Workflow Mapping",
    description: "Front-desk routines, patient journeys, and escalation paths are reviewed before automation is configured.",
    features: [
      "Call-flow review",
      "Patient intake mapping",
      "Scheduling rules",
      "Escalation logic",
    ],
  },
  {
    title: "Agent Configuration",
    description: "Voice agents, routing, automations, and integrations are shaped around how the clinic actually operates.",
    features: [
      "AI agent behavior",
      "Routing rules",
      "Recall workflows",
      "System connections",
    ],
  },
  {
    title: "Clinic Launch",
    description: "The system goes live with approved scripts, safeguards, staff visibility, and clear handoff rules.",
    features: [
      "Approved scripts",
      "Launch support",
      "Team visibility",
      "Safety controls",
    ],
  },
  {
    title: "Growth Optimization",
    description: "Performance is reviewed so booking rates, follow-up timing, and patient recovery keep improving.",
    features: [
      "Booking insights",
      "Recall tuning",
      "Follow-up timing",
      "Revenue reporting",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <section className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-white px-4 py-16 sm:min-h-[600px] sm:px-6 sm:py-20 md:py-24 lg:min-h-[640px] lg:px-2">
        <div className="pointer-events-none absolute bottom-0 right-0 top-4 hidden w-[66%] md:block">
          <Image
            src="/images/pages/about.svg"
            alt="Trusted doctor with AI clinic communication dashboard"
            fill
            priority
            unoptimized
            className="object-contain object-right-center opacity-100"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-10 block w-full opacity-20 md:hidden">
          <Image
            src="/images/pages/about.svg"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain object-right-bottom"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_62%,rgba(255,255,255,0)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="w-full max-w-[660px] text-left">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] text-black sm:text-4xl lg:text-[54px]">
              <span className="block">
                <HighlightClinicText text="Built for clinics that" />
              </span>
              <span className="block">cannot afford to miss</span>
              <span className="block">patient conversations</span>
            </h1>
            <div className="mt-7 max-w-2xl">
              <p className="text-lg leading-8 text-gray-900 md:text-[20px]">
                AI reception, scheduling, follow-up, and workflow automation for
                dental, medical, wellness, and healthcare teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-16 lg:px-2">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">
            <HighlightClinicText text="AI for clinic growth" />
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700 sm:text-lg">
            A light operating layer for calls, appointment recovery, urgent routing,
            and automated follow-up across busy clinic teams.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-black/10 bg-[linear-gradient(145deg,#111111_0%,#070707_62%,#f8fbff_62%,#ffffff_100%)] p-5 shadow-[0_30px_90px_rgba(15,23,42,0.14)] sm:p-7 lg:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />
          <div className="grid gap-4 lg:grid-cols-[1.45fr_0.75fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5 text-white backdrop-blur-sm sm:p-7 lg:min-h-[430px] lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/62">Clinic growth system</p>
                  <h3 className="mt-1 max-w-[620px] text-2xl font-semibold leading-tight sm:text-3xl lg:text-[40px]">
                    Built for live patient demand
                  </h3>
                </div>
                <ShieldCheck className="h-8 w-8 flex-shrink-0 text-purple-300" strokeWidth={1.6} />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {clinicGrowthCapabilities.slice(0, 3).map((capability) => {
                  const Icon = capability.icon;

                  return (
                    <div key={capability.title} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-white text-black">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {capability.title}
                        </p>
                        <p className="text-xs text-white/60">{capability.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 space-y-3 border-t border-white/12 pt-7">
                {[
                  "Recover missed patient requests before they go cold",
                  "Route urgent cases to the right person",
                  "Trigger recalls, confirmations, and follow-ups automatically",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-300" />
                    <p className="text-sm leading-6 text-white/76">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {clinicGrowthCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-lg border border-black/10 bg-white p-4 shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
                  >
                    <Icon className="h-5 w-5 text-purple-700" strokeWidth={1.6} />
                    <p className="mt-3 text-sm font-semibold text-black">
                      {capability.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      {capability.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              {[
                "Front desk pressure",
                "Missed-call recovery",
                "Patient follow-up",
                "Growth visibility",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-black/10 bg-white p-4 text-sm font-semibold text-black shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-black sm:px-6 md:py-20 lg:px-2">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-700">
                Infrastructure layer
              </p>
              <h2 className="mt-4 max-w-3xl text-[34px] font-semibold leading-[1.04] text-black sm:text-5xl lg:text-[56px]">
                <HighlightClinicText text="Clinic communication infrastructure" />
              </h2>
            </div>

            <div className="border-l border-black/10 pl-5 sm:pl-7">
              <p className="text-base leading-8 text-gray-700 sm:text-lg">
                Reliable automation for patient intake, staff escalation, booking,
                recalls, and follow-ups without making the front desk carry every task.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              {
                icon: Headphones,
                title: "Intake",
                detail: "Capture patient intent, call reason, and key details.",
              },
              {
                icon: Route,
                title: "Route",
                detail: "Send urgent, billing, and scheduling needs to the right path.",
              },
              {
                icon: CalendarClock,
                title: "Book",
                detail: "Coordinate appointment demand without extra manual steps.",
              },
              {
                icon: GitBranch,
                title: "Follow up",
                detail: "Trigger reminders, recalls, and recovery workflows.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[210px] overflow-hidden rounded-lg border border-black/10 bg-[#fbfbfd] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                >
                  <span className="absolute right-4 top-4 text-[42px] font-semibold leading-none text-purple-100 transition-colors duration-300 group-hover:text-purple-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-purple-700 ring-1 ring-purple-100 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="relative z-10 mt-6 text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-6 text-gray-700">
                    {item.detail}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-lg border border-black/10 bg-white p-6 text-left shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-black">
                    Mature automation that stays under control
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
                    Workflows are planned around secure intake, staff escalation,
                    appointment demand, and the daily rhythm of real clinics.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="group flex gap-4 rounded-lg border border-black/10 bg-white p-5 text-left shadow-[0_14px_44px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_22px_60px_rgba(124,58,237,0.12)]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-black">
                        <HighlightClinicText text={item.title} />
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-2">
        <div className="mb-8 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Respond, book, route, and follow up
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            Zaptal combines voice, messaging, scheduling, routing, and reporting
            into practical tools for clinic operations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platform.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative min-h-[172px] overflow-hidden rounded-[16px] border border-purple-100 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-[0_28px_70px_rgba(124,58,237,0.18),0_18px_45px_rgba(15,23,42,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),transparent_46%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-4 top-4 text-[40px] font-semibold leading-none text-purple-100 transition-all duration-300 group-hover:text-purple-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[14px] bg-purple-50 text-purple-700 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="relative z-10 mt-5 text-[17px] font-semibold leading-snug text-black">
                  <HighlightClinicText text={item.title} />
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-6 !text-black">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-black px-4 py-12 sm:px-6 md:py-16 lg:px-2">
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-10 text-center">
            <h2 className="mx-auto text-center text-[24px] font-medium leading-tight text-white min-[420px]:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] whitespace-nowrap">
              From front-desk mapping to live AI automation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 !text-white sm:text-lg">
              A clear launch path keeps automation aligned with staff workflows,
              patient experience, and secure clinic operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {launchRoadmap.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,#111111_0%,#050505_58%,#15101f_100%)] p-7 text-left !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_80px_rgba(124,58,237,0.26),0_22px_55px_rgba(0,0,0,0.5)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.13),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
                <span className="pointer-events-none absolute right-6 top-4 text-[64px] font-semibold leading-none text-white/20 transition-colors duration-300 group-hover:text-white sm:text-[76px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 max-w-[72%] !text-white">
                  <h3 className="text-[18px] font-normal !text-white sm:text-2xl">
                    <HighlightClinicText text={step.title} />
                  </h3>
                  <p className="mt-3 text-sm leading-7 !text-white sm:text-base">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {step.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-[14px] font-normal !text-white"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-24 lg:px-2">
        <div className="relative z-10 mx-auto flex min-h-[380px] w-full max-w-[1200px] flex-col justify-between gap-10 overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8ff_50%,#f2ecff_100%)] p-8 shadow-[0_30px_95px_rgba(0,0,0,0.1)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute right-[-130px] top-[-150px] h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
          <div>
            <div className="relative z-10 max-w-[1100px] text-left">
              <div className="min-w-0">
                <h2 className="text-[23px] font-semibold leading-tight text-black sm:text-[28px] lg:text-[30px]">
                  Ready to modernize patient communication without overloading your team?
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
                  Talk with Zaptal about your clinic workflow, appointment goals,
                  and automation opportunities.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/contactus"
            className="relative z-10 ml-auto inline-flex w-fit items-center justify-center rounded-full bg-black px-9 py-3.5 text-sm text-white transition-all duration-300 hover:bg-purple-700"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
