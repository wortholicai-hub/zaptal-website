"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarClock,
  Check,
  CheckCircle2,
  Headphones,
  MessageSquareText,
  Minus,
  PhoneCall,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

type PlanName = "Free" | "Middle" | "Enterprise";

const plans: Array<{
  name: PlanName;
  description: string;
  icon: typeof Sparkles;
  featured?: boolean;
  inclusions: string[];
  details: string[];
  ribbon: string;
  trustNote: string;
  cta: string;
  tone: string;
  iconTone: string;
  ribbonTone: string;
}> = [
  {
    name: "Free",
    description:
      "A clean starting point for small teams evaluating AI reception, intake, and clinic automation before a rollout.",
    icon: Sparkles,
    inclusions: [
      "AI receptionist workflow preview",
      "Starter call-flow mapping",
      "Basic appointment handoff plan",
      "Launch readiness checklist",
    ],
    details: ["1 location", "Starter workflows", "Email guidance"],
    ribbon: "Starter Access",
    trustNote: "Pilot-ready for teams validating patient communication flow.",
    cta: "Start with Free",
    tone: "border-black/10 bg-white text-black shadow-[0_22px_70px_rgba(15,23,42,0.08)]",
    iconTone: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
    ribbonTone: "border-violet-100 bg-white text-violet-800 shadow-[0_12px_32px_rgba(88,28,135,0.12)]",
  },
  {
    name: "Middle",
    description:
      "For clinics ready to automate patient calls, reminders, missed-call recovery, and scheduling coordination.",
    icon: Zap,
    featured: true,
    inclusions: [
      "Live AI receptionist configuration",
      "Missed-call recovery workflows",
      "SMS follow-up and reminders",
      "Calendar and CRM handoff rules",
    ],
    details: ["Multi-channel", "Expanded workflows", "Launch support"],
    ribbon: "Most Trusted",
    trustNote: "Designed for clinics moving from manual follow-up to live automation.",
    cta: "Plan Middle Rollout",
    tone: "border-black bg-[linear-gradient(145deg,#050505_0%,#111111_52%,#201738_100%)] text-white shadow-[0_30px_95px_rgba(17,17,17,0.34)]",
    iconTone: "bg-white text-black ring-1 ring-white/30",
    ribbonTone: "border-violet-300/40 bg-violet-200 text-black shadow-[0_14px_38px_rgba(124,58,237,0.28)]",
  },
  {
    name: "Enterprise",
    description:
      "Custom automation for multi-location clinics, deeper integrations, advanced reporting, and higher operating volume.",
    icon: Building2,
    inclusions: [
      "Custom AI agent and routing design",
      "PMS, CRM, and internal system integrations",
      "Advanced analytics and reporting",
      "Security review and success planning",
    ],
    details: ["Custom volume", "Advanced controls", "Priority planning"],
    ribbon: "Governed Scale",
    trustNote: "Built for executive visibility, advanced controls, and multi-location rollout.",
    cta: "Talk to Sales",
    tone: "border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ff_100%)] text-black shadow-[0_22px_70px_rgba(88,28,135,0.12)]",
    iconTone: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
    ribbonTone: "border-black/10 bg-black text-white shadow-[0_14px_38px_rgba(17,17,17,0.24)]",
  },
];

const comparisonGroups = [
  {
    group: "Patient Communication",
    rows: [
      {
        feature: "AI receptionist",
        free: "Preview workflow",
        middle: "Live receptionist and routing",
        enterprise: "Custom multi-agent coverage",
      },
      {
        feature: "Appointment scheduling",
        free: "Manual handoff plan",
        middle: "Calendar coordination",
        enterprise: "Custom PMS and CRM logic",
      },
      {
        feature: "Missed-call recovery",
        free: "Readiness review",
        middle: "Included workflows",
        enterprise: "Advanced recovery programs",
      },
      {
        feature: "SMS reminders",
        free: "Template guidance",
        middle: "Automated reminders",
        enterprise: "Custom lifecycle messaging",
      },
    ],
  },
  {
    group: "Automation And Data",
    rows: [
      {
        feature: "Workflow builder",
        free: "Starter map",
        middle: "Core clinic automations",
        enterprise: "Cross-location orchestration",
      },
      {
        feature: "Integrations",
        free: "Planning only",
        middle: "Standard handoffs",
        enterprise: "Custom system connections",
      },
      {
        feature: "Analytics dashboard",
        free: "Summary view",
        middle: "Operational reporting",
        enterprise: "Executive and location reports",
      },
      {
        feature: "Security controls",
        free: "Baseline guidance",
        middle: "Role-aware setup",
        enterprise: "Custom review and controls",
      },
    ],
  },
  {
    group: "Launch And Support",
    rows: [
      {
        feature: "Implementation planning",
        free: "Self-guided",
        middle: "Guided launch",
        enterprise: "Dedicated rollout plan",
      },
      {
        feature: "Optimization",
        free: "Quarterly prompts",
        middle: "Workflow tuning",
        enterprise: "Ongoing success reviews",
      },
      {
        feature: "Support channel",
        free: "Email",
        middle: "Priority support",
        enterprise: "Dedicated account path",
      },
    ],
  },
];

const capabilityTiles = [
  {
    icon: PhoneCall,
    title: "Call handling",
    value: "24/7 routing-ready",
  },
  {
    icon: CalendarClock,
    title: "Scheduling",
    value: "Calendar-aware flow",
  },
  {
    icon: Workflow,
    title: "Automation",
    value: "Follow-up logic",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    value: "Performance view",
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function availabilityMark(value: string) {
  const isLimited = value.toLowerCase().includes("planning only");

  if (isLimited) {
    return <Minus className="h-4 w-4 text-gray-400" aria-hidden="true" />;
  }

  return <Check className="h-4 w-4 text-violet-700" aria-hidden="true" />;
}

export default function PricingExperience() {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>("Middle");
  const [locations, setLocations] = useState(2);
  const [monthlyCalls, setMonthlyCalls] = useState(1200);
  const [monthlyMinutes, setMonthlyMinutes] = useState(2400);
  const [integrations, setIntegrations] = useState(1);
  const [afterHours, setAfterHours] = useState(true);
  const [smsFollowUp, setSmsFollowUp] = useState(true);
  const [advancedAnalytics, setAdvancedAnalytics] = useState(false);

  const estimate = useMemo(() => {
    const score =
      locations * 7 +
      Math.round(monthlyCalls / 120) +
      Math.round(monthlyMinutes / 180) +
      integrations * 9 +
      (afterHours ? 10 : 0) +
      (smsFollowUp ? 8 : 0) +
      (advancedAnalytics ? 12 : 0);

    let recommendedPlan: PlanName = "Free";

    if (
      selectedPlan === "Enterprise" ||
      locations >= 5 ||
      monthlyCalls >= 4200 ||
      monthlyMinutes >= 10000 ||
      integrations >= 4 ||
      advancedAnalytics
    ) {
      recommendedPlan = "Enterprise";
    } else if (
      selectedPlan === "Middle" ||
      monthlyCalls >= 700 ||
      monthlyMinutes >= 1500 ||
      integrations > 0 ||
      afterHours ||
      smsFollowUp
    ) {
      recommendedPlan = "Middle";
    }

    const scope =
      score >= 86 ? "Advanced rollout" : score >= 46 ? "Growth rollout" : "Starter rollout";

    const baseByPlan: Record<PlanName, number> = {
      Free: 0,
      Middle: 299,
      Enterprise: 899,
    };

    const monthlyPrice =
      Math.ceil(
        (baseByPlan[recommendedPlan] +
          monthlyMinutes * 0.12 +
          monthlyCalls * 0.04 +
          Math.max(0, locations - 1) * 75 +
          integrations * 110 +
          (afterHours ? 150 : 0) +
          (smsFollowUp ? 90 : 0) +
          (advancedAnalytics ? 180 : 0)) /
          10
      ) * 10;

    return {
      score,
      monthlyPrice,
      recommendedPlan,
      scope,
      summary: `${formatNumber(monthlyCalls)} conversations and ${formatNumber(monthlyMinutes)} AI minutes across ${locations} ${
        locations === 1 ? "location" : "locations"
      }`,
    };
  }, [
    advancedAnalytics,
    afterHours,
    integrations,
    locations,
    monthlyCalls,
    monthlyMinutes,
    selectedPlan,
    smsFollowUp,
  ]);

  const selectedPlanData = plans.find((plan) => plan.name === selectedPlan) ?? plans[1];

  return (
    <main className="w-full overflow-hidden bg-[#fbfbfd] text-black">
      <section className="relative w-full overflow-hidden border-b border-black/10 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-2">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fbfbfd_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-[690px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
              <ShieldCheck className="h-4 w-4 text-violet-700" />
              Pricing structure in progress
            </div>

            <h1 className="mt-7 text-[38px] font-semibold leading-[1.04] text-black sm:text-[48px] lg:text-[62px]">
              Clear plan paths for clinic automation.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
              Compare Zaptal tiers for AI reception, scheduling, missed-call
              recovery, patient follow-up, integrations, and reporting. Pricing
              amounts are intentionally marked as undecided while the product
              structure stays ready for launch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Estimate Your Plan <SlidersHorizontal className="h-4 w-4" />
              </Link>
              <Link
                href="#comparison"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-700"
              >
                Compare Features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-black/10 bg-[linear-gradient(145deg,#111111_0%,#070707_54%,#f8fbff_54%,#ffffff_100%)] p-5 shadow-[0_30px_90px_rgba(15,23,42,0.14)] sm:p-7">
            <div className="grid gap-4 sm:grid-cols-[1fr_0.95fr]">
              <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5 text-white backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/62">Current estimate</p>
                    <h2 className="mt-1 text-2xl font-semibold">Not Decided Yet</h2>
                  </div>
                  <BadgeCheck className="h-8 w-8 text-violet-300" strokeWidth={1.6} />
                </div>
                <div className="mt-7 space-y-4">
                  {capabilityTiles.slice(0, 3).map((tile) => {
                    const Icon = tile.icon;
                    return (
                      <div key={tile.title} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-black">
                          <Icon className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{tile.title}</p>
                          <p className="text-xs text-white/60">{tile.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex min-h-[260px] items-end justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/Patient communication/badge.svg"
                  alt="AI patient communication pricing workflow"
                  width={390}
                  height={390}
                  priority
                  unoptimized
                  className="h-auto w-full max-w-[310px] object-contain"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              {capabilityTiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <div
                    key={tile.title}
                    className="rounded-lg border border-black/10 bg-white p-4 shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
                  >
                    <Icon className="h-5 w-5 text-violet-700" strokeWidth={1.6} />
                    <p className="mt-3 text-sm font-semibold text-black">{tile.title}</p>
                    <p className="mt-1 text-xs leading-5 text-gray-600">{tile.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-2">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div>
            <h2 className="text-[30px] font-semibold leading-tight text-black sm:text-[40px] lg:whitespace-nowrap">
              Three tiers, one polished buying path.
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-700">
            Each plan is structured around real clinic workflows. Amounts are
            placeholders until final pricing is approved.
          </p>
        </div>

        <div className="grid items-stretch gap-7 lg:auto-rows-fr lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isFeatured = Boolean(plan.featured);

            return (
              <article
                key={plan.name}
                className={`group relative flex h-full min-h-[720px] flex-col overflow-hidden rounded-[10px] border p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${plan.tone}`}
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
                <div className="pointer-events-none absolute -right-10 top-16 h-28 w-28 rotate-45 border border-violet-200/60 bg-violet-100/20" />

                <div className="absolute left-6 right-6 top-5 flex items-start justify-between gap-3">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] ${plan.ribbonTone}`}
                  >
                    <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {plan.ribbon}
                  </div>
                  {isFeatured && (
                    <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85">
                      Recommended
                    </div>
                  )}
                </div>

                <div className="mt-16 min-h-[44px]">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] ${plan.iconTone}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="min-w-0 whitespace-nowrap text-[30px] font-semibold leading-tight">
                      {plan.name} plan
                    </h3>
                  </div>
                </div>

                <div className="mt-5 min-h-[92px]">
                  <p className={`text-sm leading-7 ${isFeatured ? "text-white/72" : "text-gray-700"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className={`mt-6 min-h-[158px] rounded-[8px] border px-5 py-5 ${
                  isFeatured ? "border-white/14 bg-white/[0.06]" : "border-black/10 bg-black/[0.025]"
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isFeatured ? "text-white/50" : "text-gray-500"}`}>
                        Pricing
                      </p>
                      <p className="mt-2 text-[27px] font-semibold leading-tight">
                        Not Decided Yet
                      </p>
                    </div>
                    <ShieldCheck
                      className={`mt-1 h-6 w-6 flex-shrink-0 ${isFeatured ? "text-violet-200" : "text-violet-700"}`}
                      strokeWidth={1.6}
                    />
                  </div>
                  <p className={`mt-4 text-xs leading-5 ${isFeatured ? "text-white/58" : "text-gray-600"}`}>
                    {plan.trustNote}
                  </p>
                </div>

                <div className="mt-6 min-h-[152px] space-y-4">
                  {plan.inclusions.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          isFeatured ? "text-violet-300" : "text-violet-700"
                        }`}
                        strokeWidth={1.7}
                      />
                      <p className={`text-sm leading-6 ${isFeatured ? "text-white/82" : "text-gray-800"}`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`mt-7 min-h-[152px] space-y-1 border-t pt-5 ${isFeatured ? "border-white/14" : "border-black/10"}`}>
                  {plan.details.map((detail) => (
                    <div
                      key={detail}
                      className={`flex items-center gap-3 rounded-[8px] px-1 py-2.5 ${
                        isFeatured ? "text-white/76" : "text-gray-700"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border ${
                          isFeatured
                            ? "border-white/12 bg-white/[0.08] text-violet-200"
                            : "border-violet-100 bg-violet-50 text-violet-700"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span className="text-[13px] font-semibold leading-5">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contactus"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isFeatured
                      ? "bg-white text-black shadow-[0_14px_32px_rgba(255,255,255,0.12)] hover:bg-violet-100"
                      : "bg-black text-white shadow-[0_14px_32px_rgba(17,17,17,0.16)] hover:bg-violet-700"
                  }`}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="comparison"
        className="w-full border-y border-black/10 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-2"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div>
              <h2 className="text-[30px] font-semibold leading-tight text-black sm:text-[40px]">
                Compare every plan clearly.
              </h2>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-700">
              Scan core communication, automation, integration, and support
              coverage before requesting a final quote.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_24px_74px_rgba(15,23,42,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="w-[28%] px-5 py-5 text-sm font-semibold">Feature</th>
                    <th className="px-5 py-5 text-sm font-semibold">Free</th>
                    <th className="px-5 py-5 text-sm font-semibold">Middle</th>
                    <th className="px-5 py-5 text-sm font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonGroups.map((group) => (
                    <Fragment key={group.group}>
                      <tr key={`${group.group}-heading`} className="border-t border-black/10 bg-[#f6f7fb]">
                        <td colSpan={4} className="px-5 py-3 text-xs font-semibold text-gray-600">
                          {group.group}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.feature} className="border-t border-black/10 transition-colors hover:bg-violet-50/55">
                          <td className="px-5 py-4 text-sm font-semibold text-black">{row.feature}</td>
                          <td className="px-5 py-4 text-sm text-gray-700">
                            <span className="flex items-center gap-2">
                              {availabilityMark(row.free)}
                              {row.free}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-700">
                            <span className="flex items-center gap-2">
                              {availabilityMark(row.middle)}
                              {row.middle}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-700">
                            <span className="flex items-center gap-2">
                              {availabilityMark(row.enterprise)}
                              {row.enterprise}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section
        id="calculator"
        className="relative w-full overflow-hidden bg-[#f5f7fb] px-4 py-14 sm:px-6 sm:py-16 lg:px-2"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_0%,transparent_36%,rgba(108,71,255,0.08)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-[30px] font-semibold leading-tight text-black sm:text-[40px]">
              Estimate monthly usage and planning price.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
              Adjust usage, locations, and automation needs. The calculator keeps
              pricing marked as an estimate while producing a realistic scope,
              minutes, and monthly number for planning.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-lg border border-black/10 bg-white p-5 shadow-[0_22px_74px_rgba(15,23,42,0.08)] sm:p-7"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  `Estimate ready: ${estimate.recommendedPlan} plan. Estimated monthly price: $${formatNumber(
                    estimate.monthlyPrice
                  )}. Final pricing requires workflow review.`
                );
              }}
            >
              <div className="mb-7 flex items-start justify-between gap-5 border-b border-black/10 pb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-black">Configure your estimate</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Choose the plan shape and usage inputs for a guided pricing scope.
                  </p>
                </div>
                <SlidersHorizontal className="hidden h-7 w-7 text-violet-700 sm:block" strokeWidth={1.7} />
              </div>

              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-black">Plan preference</legend>
                <div className="grid gap-2 sm:grid-cols-3">
                  {plans.map((plan) => (
                    <button
                      key={plan.name}
                      type="button"
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`rounded-lg border px-4 py-3 text-left transition-all duration-300 ${
                        selectedPlan === plan.name
                          ? "border-black bg-black text-white shadow-[0_14px_34px_rgba(15,23,42,0.16)]"
                          : "border-black/10 bg-white text-black hover:border-violet-300"
                      }`}
                    >
                      <span className="block text-sm font-semibold">{plan.name}</span>
                      <span className={`mt-1 block text-xs ${selectedPlan === plan.name ? "text-white/62" : "text-gray-500"}`}>
                        Not Decided Yet
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7 grid gap-6">
                <RangeField
                  label="Clinic locations"
                  value={locations}
                  min={1}
                  max={12}
                  step={1}
                  suffix={locations === 1 ? "location" : "locations"}
                  onChange={setLocations}
                />
                <RangeField
                  label="Monthly patient conversations"
                  value={monthlyCalls}
                  min={100}
                  max={8000}
                  step={100}
                  suffix="conversations"
                  onChange={setMonthlyCalls}
                />
                <RangeField
                  label="Monthly AI minutes"
                  value={monthlyMinutes}
                  min={100}
                  max={20000}
                  step={100}
                  suffix="minutes"
                  onChange={setMonthlyMinutes}
                />
                <RangeField
                  label="System integrations"
                  value={integrations}
                  min={0}
                  max={6}
                  step={1}
                  suffix={integrations === 1 ? "integration" : "integrations"}
                  onChange={setIntegrations}
                />
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <ToggleField
                  checked={afterHours}
                  icon={Headphones}
                  label="After-hours coverage"
                  onChange={setAfterHours}
                />
                <ToggleField
                  checked={smsFollowUp}
                  icon={MessageSquareText}
                  label="SMS follow-up"
                  onChange={setSmsFollowUp}
                />
                <ToggleField
                  checked={advancedAnalytics}
                  icon={BarChart3}
                  label="Advanced analytics"
                  onChange={setAdvancedAnalytics}
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-gray-600">
                  The calculator stores no payment data. Numbers are planning
                  estimates and final pricing is confirmed after workflow review.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-700"
                >
                  Calculate Estimate <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <aside className="rounded-lg border border-black bg-black p-5 text-white shadow-[0_28px_86px_rgba(0,0,0,0.26)] sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm text-violet-200">Estimated monthly price</p>
                  <h3 className="mt-2 text-[32px] font-semibold leading-tight">
                    ${formatNumber(estimate.monthlyPrice)}
                  </h3>
                  <p className="mt-2 text-xs text-white/48">Planning estimate, not final pricing.</p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-black">
                  <BadgeCheck className="h-6 w-6" strokeWidth={1.6} />
                </span>
              </div>

              <div className="mt-8 rounded-lg border border-white/12 bg-white/[0.06] p-5">
                <p className="text-sm text-white/58">Recommended package</p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-2xl font-semibold">{estimate.recommendedPlan} plan</p>
                  <p className="rounded-full bg-violet-200 px-3 py-1 text-xs font-semibold text-black">
                    {estimate.scope}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">{estimate.summary}</p>
              </div>

              <div className="mt-5 grid gap-3">
                <EstimateRow label="Selected plan" value={`${selectedPlanData.name} plan`} />
                <EstimateRow label="Scope score" value={`${estimate.score} points`} />
                <EstimateRow label="AI minutes" value={formatNumber(monthlyMinutes)} />
                <EstimateRow label="Integrations" value={formatNumber(integrations)} />
                <EstimateRow label="Final pricing" value="Review required" />
              </div>

              <div className="mt-7 border-t border-white/12 pt-6">
                <h4 className="text-base font-semibold">What affects the final quote</h4>
                <div className="mt-4 space-y-3">
                  {[
                    "Conversation volume and operating hours",
                    "Scheduling, SMS, and missed-call workflow depth",
                    "CRM, PMS, calendar, and reporting integrations",
                    "Launch support, security review, and optimization needs",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-300" strokeWidth={1.6} />
                      <p className="text-sm leading-6 text-white/76">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-2">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 rounded-lg border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#f6fbff_48%,#f9f5ff_100%)] p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-violet-700">Need a quote-ready version?</p>
            <h2 className="mt-2 text-[28px] font-semibold leading-tight text-black sm:text-[36px]">
              Share your workflow and we will map the pricing structure.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
              Zaptal can prepare a clinic-specific plan using call volume,
              appointment rules, follow-up needs, and integration complexity.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-700"
          >
            Request Pricing Review <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-3 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-black">{label}</span>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          {formatNumber(value)} {suffix}
        </span>
      </span>
      <span className="pricing-range-shell">
        <span className="pricing-range-track" aria-hidden="true" />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="pricing-range-input"
        />
      </span>
      <span className="mt-2 flex justify-between text-xs text-gray-500">
        <span>{formatNumber(min)}</span>
        <span>{formatNumber(max)}</span>
      </span>
    </label>
  );
}

function ToggleField({
  checked,
  icon: Icon,
  label,
  onChange,
}: {
  checked: boolean;
  icon: typeof Sparkles;
  label: string;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`rounded-lg border p-4 text-left transition-all duration-300 ${
        checked
          ? "border-black bg-black text-white shadow-[0_14px_34px_rgba(15,23,42,0.14)]"
          : "border-black/10 bg-white text-black hover:border-violet-300"
      }`}
    >
      <span className="flex items-center justify-between gap-3">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-md ${
            checked ? "bg-white text-black" : "bg-violet-50 text-violet-700"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <span
          className={`h-5 w-9 rounded-full p-0.5 transition-colors ${
            checked ? "bg-violet-600" : "bg-gray-200"
          }`}
          aria-hidden="true"
        >
          <span
            className={`block h-4 w-4 rounded-full bg-white transition-transform ${
              checked ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </span>
      </span>
      <span className="mt-4 block text-sm font-semibold">{label}</span>
    </button>
  );
}

function EstimateRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm">
      <span className="text-white/56">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}
