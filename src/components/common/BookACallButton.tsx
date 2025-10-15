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
      className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-1.5 rounded-xl bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 cursor-pointer"
    >
      <span className="text-sm md:text-base font-semibold">
        {t("vocalchat.bookCall")}
      </span>
      <DottedArrowUpRight />
    </button>
  );
}
