"use client";

import React from "react";

const clinicSupportCards = [
  {
    eyebrow: "CALL EXPERIENCE",
    title: "Offer the best client experience on calls",
    summary:
      "Give patients a calm first response, capture the reason for the call, and help the front desk see what needs attention.",
    image: "/images/new section/Untitled design (2).svg",
    alt: "Clinic call assistant speaking with a patient on the phone",
    gradient: "from-[#5a4a7d] via-[#35284f] to-[#08070d]",
    imageClass:
      "bottom-[-78px] left-1/2 h-[62%] w-auto max-w-none -translate-x-1/2 opacity-95 sm:bottom-[-72px] sm:h-[66%]",
  },
  {
    eyebrow: "LIVE ASSISTANCE",
    title: "Real-time support and appointment booking",
    summary:
      "Help patients ask for available times, reschedule when possible, and move urgent requests toward the right team member.",
    image: "/images/new section/Untitled design.svg",
    alt: "Mobile phone call screen for real-time appointment support",
    gradient: "from-[#1c5b68] via-[#14394f] to-[#0a0710]",
    imageClass:
      "bottom-[-42px] left-1/2 w-[92%] max-w-none -translate-x-1/2 opacity-95 sm:bottom-[-32px]",
  },
  {
    eyebrow: "DASHBOARD & ANALYTICS",
    title: "Real-time dashboard and analytics",
    summary:
      "Review call volume, appointment activity, missed-call recovery, and location-level performance from one clear view.",
    image: "/images/new section/Untitled design (1).svg",
    alt: "Laptop showing clinic dashboard analytics",
    gradient: "from-[#36323d] via-[#17131f] to-[#050406]",
    imageClass:
      "bottom-[-2px] left-1/2 w-[72%] max-w-none -translate-x-1/2 opacity-95",
  },
];

export default function CustomAISolutions() {
  return (
    <section className="relative overflow-hidden bg-[#06040b] px-4 pb-32 pt-36 text-white sm:px-6 md:pb-40 md:pt-40 lg:px-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(139,92,246,0.32),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,rgba(21,10,45,0.9),rgba(3,4,10,0.78)_45%,rgba(8,27,33,0.86))]" />
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[350px] w-[175%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_28px_80px_rgba(139,92,246,0.16)]" />
      <div className="pointer-events-none absolute bottom-[-270px] left-1/2 h-[360px] w-[175%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_-24px_70px_rgba(139,92,246,0.14)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[99px] h-px bg-white/10 md:top-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="mb-9 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
              Clinic call support
            </p>
            <h2 className="text-balance text-[34px] font-semibold leading-[1.03] tracking-[-0.02em] text-white sm:text-5xl lg:text-[58px]">
              Patient calls, booking support, and clinic visibility in one place
            </h2>
          </div>
          <p className="max-w-[420px] text-base font-medium leading-7 text-slate-200/82 md:text-right">
            Designed for clinic owners and teams who need fewer missed calls,
            clearer next steps, and better visibility without adding front desk
            pressure.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-8">
          {clinicSupportCards.map((card) => (
            <ClinicSupportCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicSupportCard({
  eyebrow,
  title,
  summary,
  image,
  alt,
  gradient,
  imageClass,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  gradient: string;
  imageClass: string;
}) {
  return (
    <article
      className={`group relative min-h-[500px] overflow-hidden rounded-[28px] bg-gradient-to-b ${gradient} p-7 shadow-[0_28px_70px_rgba(0,0,0,0.34)] ring-1 ring-purple-200/15 sm:min-h-[540px] md:min-h-[620px] lg:min-h-[650px]`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_34%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/12 to-transparent" />

      <div className="relative z-10">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-white/68">
          {eyebrow}
        </p>
        <h3 className="max-w-[320px] text-[25px] font-semibold leading-[1.08] tracking-[-0.01em] text-white sm:text-[27px] lg:text-[29px]">
          {title}
        </h3>
        <p className="mt-4 max-w-[330px] text-sm font-medium leading-6 text-white/74">
          {summary}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/18 to-transparent" />
      <img
        src={image}
        alt={alt}
        className={`pointer-events-none absolute z-[1] object-contain drop-shadow-[0_24px_42px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover:scale-[1.035] ${imageClass}`}
      />
    </article>
  );
}
