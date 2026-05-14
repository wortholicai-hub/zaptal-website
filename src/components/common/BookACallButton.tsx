"use client";
import { useTranslation } from "react-i18next";
import React from "react";

export default function BookACallButton() {
  const { t } = useTranslation();
  const DottedArrowUpRight: React.FC<{ color?: string }> = ({
    color = "black",
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      strokeDasharray="2 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M7 17L17 7m0 0H9m8 0v8" />
    </svg>
  );
  return (
    <button
      aria-label="Book a Call"
      onClick={() =>
        window.open(
          "https://calendar.google.com/calendar/u/0/r",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="no-doto-button inline-flex h-16 min-w-[190px] cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-7 text-[15px] font-semibold text-black shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c47ff]"
    >
      <span>
        {t("vocalchat.bookCall")}
      </span>
      <DottedArrowUpRight />
    </button>
  );
}
