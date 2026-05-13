"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const ConsultationSection: React.FC = () => {
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
    <div className="w-full bg-white px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16 lg:px-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-[16px] border border-gray-800 bg-black p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:p-8 md:p-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <Phone className="h-6 w-6 text-white" />
                </span>
                <p className="text-[32px] font-bold leading-none !text-white sm:text-[38px]">
                  Let's talk.
                </p>
              </div>

              <h2 className="mb-4 text-[30px] font-bold leading-tight text-white sm:text-[38px]">
                Book a free consultation
              </h2>
              <p className="mb-7 max-w-2xl text-base leading-7 !text-white sm:text-lg">
                See how Zaptal can answer more calls, schedule patients faster,
                and reduce repetitive front-desk work.
              </p>

              <Image
                src={"/images/dots/horizontal-dots.avif"}
                alt=""
                width={280}
                height={38}
                className="h-auto w-[220px] flex-shrink-0 opacity-80 sm:w-[280px]"
              />
            </div>

            <button
              aria-label={t("vocalchat.bookCall")}
              onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/r",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-white bg-white px-5 py-3 text-black transition-all duration-300 hover:bg-gray-100 md:w-fit lg:mb-1 lg:justify-self-end"
            >
              <span className="text-base font-semibold">
                {t("vocalchat.bookCall")}
              </span>
              <DottedArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;
