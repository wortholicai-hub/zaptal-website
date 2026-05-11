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
    <div className="w-full bg-white pb-8 md:pb-20 pt-4 md:pt-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-[48px] bg-black p-12 md:p-12 overflow-hidden">
          {/* Phone Icon */}
          <div className="flex gap-1 pb-12">
            <Phone className="w-12 h-12 text-gray-600 ml-4 mt-1" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-gray-400 text-[38px] md:mb-2">Let's talk.</p>
            <h2 className="text-white text-[38px] font-bold mb-8">
              Book a free consultation
            </h2>

            {/* Animated dots */}
            <div className="flex gap-2 mb-12">
              <Image
                src={"/images/dots/horizontal-dots.avif"}
                alt="check"
                width={280}
                height={38}
                className="mt-0.5 flex-shrink-0 "
              />
            </div>

            {/* CTA Button */}
            <button
              aria-label="Book a Call"
              onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/r",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="w-full md:w-fit flex items-center justify-center gap-2 px-4 py-1.5 rounded-xl bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 cursor-pointer"
            >
              <span className="text-base font-semibold">
                {t("vocalchat.bookCall")}
              </span>
              <DottedArrowUpRight />
            </button>
          </div>

          {/* Gradient glow effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[32rem] h-[32rem] bg-purple-700 rounded-full blur-3xl opacity-40 pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default ConsultationSection;
