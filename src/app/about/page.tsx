"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  CalendarClock,
  CheckCircle2,
  GitBranch,
  Headphones,
  Lock,
  PhoneCall,
  Plug,
  Route,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const metrics = [
  { icon: Activity, value: "24/7", label: "patient response coverage" },
  { icon: PhoneCall, value: "0", label: "missed calls left unmanaged" },
  { icon: ShieldCheck, value: "HIPAA", label: "security-first implementation" },
];

const heroSignals = [
  "Live call coverage",
  "Booking recovery",
  "Staff handoff",
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
      "Staff handoffs",
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
            src="/images/pages/about-hero.webp"
            alt="Trusted doctor with AI clinic communication dashboard"
            fill
            priority
            unoptimized
            className="object-contain object-right-center opacity-100"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-10 block w-full opacity-20 md:hidden">
          <Image
            src="/images/pages/about-hero.webp"
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
              <span className="block">Built for clinics that</span>
              <span className="block">cannot afford to miss</span>
              <span className="block">patient conversations.</span>
            </h1>
            <div className="mt-7 max-w-2xl">
              <p className="text-lg leading-8 text-gray-900 md:text-[20px]">
                AI reception, scheduling, follow-up, and workflow automation for
                dental, medical, wellness, and healthcare teams.
              </p>
              <div className="mt-6 grid w-full gap-2 sm:grid-cols-3">
                {heroSignals.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-black/10 bg-white/80 px-4 py-3 text-sm font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap justify-start gap-3">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
                >
                  Book Demo
                </Link>
                <Link
                  href="/#workflow"
                  className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white/70 px-7 py-3 text-sm text-black transition-all duration-300 hover:border-purple-300 hover:bg-purple-50"
                >
                  See Workflow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-2">
        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[16px] border border-black/10 bg-black p-6 text-left text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-white/60">Platform focus</p>
                <h2 className="mt-2 text-2xl font-semibold">AI for clinic growth</h2>
              </div>
              <Sparkles className="h-9 w-9 text-purple-300" strokeWidth={1.5} />
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Answer calls when the front desk is busy",
                "Recover missed patients through SMS and WhatsApp",
                "Route urgent cases to the right person",
                "Trigger recalls, confirmations, and follow-ups automatically",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-300" />
                  <p className="text-sm leading-6 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#f8f6ff_100%)] p-5 text-left shadow-[0_16px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-300"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <p className="text-3xl font-semibold text-black">{metric.value}</p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-black text-white transition-colors duration-300 group-hover:bg-purple-700">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {metric.label}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-2">
        <div className="relative overflow-hidden rounded-[16px] border border-black/10 bg-black p-5 text-white sm:p-7 md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(147,51,234,0.32),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[16px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div>
                <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                  Patient communication built like clinic infrastructure.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/70 sm:text-base">
                  <p>
                    Zaptal helps clinics protect revenue when calls spike,
                    messages queue up, and follow-up work depends on a busy
                    front desk.
                  </p>
                  <p>
                    Instead of adding another generic chatbot, Zaptal connects
                    AI reception, scheduling, intake, routing, recalls, and
                    patient follow-up into one controlled communication layer.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                {["Respond", "Book", "Recover"].map((item) => (
                  <div key={item} className="rounded-[16px] bg-white/[0.06] px-3 py-3">
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[16px] border border-white/10 bg-white/[0.06] p-5">
                <h3 className="text-2xl font-semibold leading-tight">
                  Mature automation that stays under control.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Workflows are planned around secure intake, staff escalation,
                  appointment demand, and the daily rhythm of real clinics.
                </p>
              </div>

              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="group flex gap-4 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/70 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[14px] bg-purple-400/15 text-purple-200 transition-colors duration-300 group-hover:bg-purple-300/25">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">
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
            Everything a clinic needs to respond, book, route, and follow up.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platform.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfb_100%)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-[0_24px_75px_rgba(89,32,154,0.14)]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-[60px] bg-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-purple-700" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/30">
                    {String(platform.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
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
              From front-desk mapping to live AI automation.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {launchRoadmap.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,#111111_0%,#050505_58%,#15101f_100%)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_80px_rgba(124,58,237,0.26),0_22px_55px_rgba(0,0,0,0.5)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.13),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
                <span className="pointer-events-none absolute right-6 top-4 text-[64px] font-semibold leading-none text-white/20 transition-colors duration-300 group-hover:text-white sm:text-[76px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 max-w-[72%]">
                  <h3 className="text-[18px] font-normal text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {step.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-[14px] font-normal text-white"
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
            <div className="relative z-10 flex max-w-[1100px] items-start gap-3 sm:gap-4">
              <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[12px] bg-black text-white">
                <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={1.7} />
              </span>
              <h2 className="min-w-0 text-[23px] font-semibold leading-tight text-black sm:text-[28px] lg:text-[30px]">
                Ready to modernize patient communication without overloading your team?
              </h2>
            </div>
            <p className="relative z-10 mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Talk with Zaptal about your clinic workflow, appointment goals,
              and automation opportunities.
            </p>
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
