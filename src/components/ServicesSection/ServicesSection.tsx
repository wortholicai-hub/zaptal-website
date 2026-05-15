"use client";

import React from "react";
import HighlightClinicText from "@/components/common/HighlightClinicText";

const clinicSupportCards = [
  {
    eyebrow: "CALL EXPERIENCE",
    title: "Offer the best client experience on calls",
    summary:
      "Give patients a calm first response, capture the reason for the call, and help the front desk see what needs attention.",
    image: "/images/new section/Untitled design (2).svg",
    alt: "Clinic call assistant speaking with a patient on the phone",
    gradient: "from-[#f5f8ff] via-[#c5d4ee] to-[#211638]",
    imageClass:
      "bottom-[-78px] left-1/2 h-[62%] w-auto max-w-none -translate-x-1/2 opacity-95 sm:bottom-[-72px] sm:h-[66%]",
    light: true,
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
    image: "/images/new section/Untitled design (3).svg",
    alt: "Laptop showing clinic dashboard analytics",
    gradient: "from-[#36323d] via-[#17131f] to-[#050406]",
    imageClass:
      "bottom-[-28px] left-[57%] w-[74%] max-w-none -translate-x-1/2 opacity-95",
  },
];

export default function CustomAISolutions() {
  return (
    <section className="relative overflow-hidden bg-[#06040b] px-4 pb-32 pt-36 text-white sm:px-6 md:pb-40 md:pt-40 lg:px-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(139,92,246,0.32),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,rgba(21,10,45,0.9),rgba(3,4,10,0.78)_45%,rgba(8,27,33,0.86))]" />
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[350px] w-[175%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_28px_80px_rgba(139,92,246,0.16)]" />
      <div className="pointer-events-none absolute bottom-[-270px] left-1/2 h-[360px] w-[175%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_-24px_70px_rgba(139,92,246,0.14)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="mx-auto mb-9 max-w-[920px] text-center md:mb-11">
          <div>
            <h2 className="text-balance text-[34px] font-semibold leading-[1.03] tracking-[-0.02em] text-white sm:text-5xl lg:text-[58px]">
              <HighlightClinicText text="Patient calls, booking support, and clinic visibility in one place" />
            </h2>
          </div>
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
  light = false,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  gradient: string;
  imageClass: string;
  light?: boolean;
}) {
  return (
    <article
      className={`group relative min-h-[500px] overflow-hidden rounded-[16px] bg-gradient-to-b ${gradient} p-7 shadow-[0_28px_70px_rgba(0,0,0,0.34)] ring-1 ring-purple-200/15 sm:min-h-[540px] md:min-h-[620px] lg:min-h-[650px]`}
    >
      <div
        className={`absolute inset-0 ${
          light
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_34%,rgba(21,10,45,0.22)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_34%,rgba(0,0,0,0.22)_100%)]"
        }`}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/18 to-transparent" />

      <div className="relative z-10">
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.08em] ${
            light ? "!text-black" : "text-white/68"
          }`}
          style={light ? { color: "#000000" } : undefined}
        >
          {eyebrow}
        </p>
        <h3
          className={`max-w-[320px] text-[25px] font-semibold leading-[1.08] tracking-[-0.01em] sm:text-[27px] lg:text-[29px] ${
            light ? "!text-black" : "text-white"
          }`}
          style={light ? { color: "#000000" } : undefined}
        >
          <HighlightClinicText text={title} />
        </h3>
        <p
          className={`mt-4 max-w-[330px] text-sm font-medium leading-6 ${
            light ? "!text-black" : "text-white/74"
          }`}
          style={light ? { color: "#000000" } : undefined}
        >
          {summary}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[46%] bg-gradient-to-t from-[#050406]/62 via-[#050406]/28 via-40% to-transparent" />
      <img
        src={image}
        alt={alt}
        className={`pointer-events-none absolute z-[1] object-contain drop-shadow-[0_24px_42px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover:scale-[1.035] ${imageClass}`}
      />
    </article>
  );
}
