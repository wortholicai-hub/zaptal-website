"use client";

import Link from "next/link";
import {
  BarChart3,
  Bot,
  CalendarClock,
  CheckCircle2,
  GitBranch,
  Headphones,
  Lock,
  Plug,
  Route,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const metrics = [
  { value: "24/7", label: "patient response coverage" },
  { value: "0", label: "missed calls left unmanaged" },
  { value: "HIPAA", label: "security-first implementation" },
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

const process = [
  "Map front-desk and patient communication workflows",
  "Configure voice agents, automations, routing, and integrations",
  "Launch with clinic-specific scripts, safeguards, and escalation logic",
  "Optimize booking rates, follow-up timing, and operational reporting",
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-2 lg:pt-20">
        <div className="grid w-full grid-cols-1 items-start gap-4 lg:grid-cols-[65%_35%]">
          <div className="w-full text-left md:w-[90%]">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] text-black sm:text-4xl lg:text-[54px]">
              <span className="block">Built for clinics that</span>
              <span className="block">cannot afford to miss</span>
              <span className="block">patient conversations.</span>
            </h1>
          </div>

          <div className="flex h-full flex-col items-start gap-4 text-left">
            <p className="mb-2 text-lg leading-8 text-gray-900 md:text-[20px]">
              AI reception, scheduling, follow-up, and workflow automation for
              dental, medical, wellness, and healthcare teams.
            </p>
            <div className="flex flex-wrap justify-start gap-3">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
              >
                Book Demo
              </Link>
              <Link
                href="/#workflow"
                className="inline-flex items-center justify-center rounded-full border border-black/20 px-7 py-3 text-sm text-black transition-all duration-300 hover:border-purple-300 hover:bg-purple-50"
              >
                See Workflow
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[32px] border border-black/10 bg-black p-6 text-left text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:p-8">
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
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-black/10 bg-black/[0.03] p-5 text-left"
              >
                <p className="text-3xl font-semibold text-black">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
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

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
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
                className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-300"
              >
                <Icon className="h-8 w-8 text-black" strokeWidth={1.5} />
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

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-black/10 bg-black p-6 text-white sm:p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                From front-desk mapping to live AI automation.
              </h2>
            </div>
            <div className="grid gap-3">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-300 text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-10 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
          Ready to modernize patient communication without overloading your team?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">
          Talk with Zaptal about your clinic workflow, appointment goals, and
          automation opportunities.
        </p>
        <Link
          href="/contactus"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
        >
          Contact Sales
        </Link>
      </section>
    </main>
  );
}
